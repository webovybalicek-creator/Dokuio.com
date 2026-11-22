/**
 * Registr jazykových verzí: soubory src/preklady/<zeme>/<jazyk>/<slug>.ts se načtou samy.
 * Generuje se JEN dokument, který má soubor překladu a projde kontrolou úplnosti (./kontrola.ts) –
 * jinak build spadne. Rozcestník verze /<zeme>/<jazyk>/ vznikne, jen když má verze aspoň 1 dokument.
 *
 * Adresy: /<zeme>/<jazyk>/<slug>/ (landing), …/vytvorit/ (průvodce), …/<slug>-<jazyk>-vzor.pdf|docx.
 */
import type { Dokument, Odkaz, StrankaDokumentu } from '../obsah/typy';
import { AKTIVNI_ZEME, HREFLANG_HUBY, STRANKY, slugStranky, strankaPodleSlugu, urlStranky, zemeKod } from '../obsah';
import { JAZYKY_VERZI, NAZVY_JAZYKU } from '../i18n';
import type { PrekladDokumentu } from './typy';
import { slozVerzi } from './verze';
import { zkontrolujPreklad } from './kontrola';

const soubory = import.meta.glob<{ default: PrekladDokumentu }>('./*/*/*.ts', { eager: true });

export interface VerzeDokumentu {
  zeme: string;
  jazyk: string;
  slug: string;
  /** Klíč souboru pro líné načtení v prohlížeči (./nacti.ts) */
  soubor: string;
  /** Originální stránka (jazyk země) */
  original: StrankaDokumentu;
  /** Stránka verze: přeložené texty + složená šablona (sablona.jazykRozhrani = jazyk) */
  stranka: StrankaDokumentu;
}

export const VERZE: VerzeDokumentu[] = [];
const chyby: string[] = [];
for (const [soubor, m] of Object.entries(soubory)) {
  const [, zeme, jazyk, nazev] = soubor.split('/');
  const slug = nazev.replace(/\.ts$/, '');
  const cesta = `src/preklady${soubor.slice(1)}`;
  if (!AKTIVNI_ZEME.some((z) => z.kod === zeme)) continue; // neaktivní země se negeneruje
  const V = JAZYKY_VERZI[jazyk];
  if (!V) {
    chyby.push(`${cesta}: neznámý jazyk verze „${jazyk}“ (povolené: ${Object.keys(JAZYKY_VERZI).join(', ')} – nový jazyk viz PREKLADY.md)`);
    continue;
  }
  const original = (STRANKY[zeme] ?? []).find((s) => slugStranky(s) === slug);
  if (!original) {
    chyby.push(`${cesta}: dokument „${slug}“ v zemi ${zeme} neexistuje (název souboru = slug originálu)`);
    continue;
  }
  const p = m.default;
  const zjistene = zkontrolujPreklad(original, p, V, zeme);
  const kat = original.katalog.kategorie;
  if (!V.kategorie[kat]) zjistene.push(`kategorie „${kat}“ nemá překlad v src/i18n/${jazyk}.ts (kategorie)`);
  if (!V.zeme[zeme]) zjistene.push(`země „${zeme}“ nemá název v src/i18n/${jazyk}.ts (zeme)`);
  if (zjistene.length) {
    chyby.push(...zjistene.map((c) => `${cesta}: ${c}`));
    continue;
  }
  VERZE.push({
    zeme,
    jazyk,
    slug,
    soubor,
    original,
    stranka: {
      ...original,
      sablona: slozVerzi(original.sablona, p, jazyk),
      nazev: p.nazev,
      nazevA: p.nazevA,
      katalog: { ...original.katalog, popis: p.katalog.popis, slova: p.katalog.slova },
      landing: p.landing,
      vytvorit: p.vytvorit,
    },
  });
}
if (chyby.length) throw new Error(`Překlady dokumentů nejsou kompletní (PREKLADY.md):\n  ${chyby.join('\n  ')}`);

const PORADI = Object.keys(JAZYKY_VERZI);
VERZE.sort((a, b) => a.zeme.localeCompare(b.zeme) || PORADI.indexOf(a.jazyk) - PORADI.indexOf(b.jazyk) || a.slug.localeCompare(b.slug));

export const urlRozcestnikuVerze = (zeme: string, jazyk: string) => `/${zeme}/${jazyk}/`;

/** Verze dokumentu (bez originálu) */
export const verzeDokumentu = (zeme: string, slug: string) => VERZE.filter((v) => v.zeme === zeme && v.slug === slug);

/** Dokumenty jedné verze země (pořadí jako v originálu) */
export const dokumentyVerze = (zeme: string, jazyk: string) => {
  const poradi = (STRANKY[zeme] ?? []).map(slugStranky);
  return VERZE.filter((v) => v.zeme === zeme && v.jazyk === jazyk).sort((a, b) => poradi.indexOf(a.slug) - poradi.indexOf(b.slug));
};

/** Rozcestníky verzí, které mají aspoň jeden dokument */
export const ROZCESTNIKY_VERZI = AKTIVNI_ZEME.flatMap((z) =>
  PORADI.filter((j) => dokumentyVerze(z.kod, j).length > 0).map((jazyk) => ({ zeme: z, jazyk, url: urlRozcestnikuVerze(z.kod, jazyk) })),
);

const hreflangVerze = (zeme: string, jazyk: string) => `${JAZYKY_VERZI[jazyk].hreflang}-${zemeKod(zeme).hreflang.split('-')[1]}`;

export interface JazykStranky {
  jazyk: string;
  nazev: string;
  hreflang: string;
  href: string;
  aktivni: boolean;
}

/**
 * Protějšky dokumentu v jazykových variantách téže země (Švýcarsko: ch ↔ ch-fr ↔ ch-it) podle `protejsky` ve stránkách.
 * Vazba stačí na jedné straně; skupiny se spojí (A↔B a B↔C → A, B, C).
 */
const SKUPINY_PROTEJSKU = (() => {
  const klic = (z: string, slug: string) => `${z}/${slug}`;
  const rodic = new Map<string, string>();
  const najdi = (k: string): string => {
    const r = rodic.get(k) ?? k;
    if (r === k) return k;
    const koren = najdi(r);
    rodic.set(k, koren);
    return koren;
  };
  for (const [z, stranky] of Object.entries(STRANKY))
    for (const st of stranky)
      for (const [z2, slug2] of Object.entries(st.protejsky ?? {})) {
        if (!strankaPodleSlugu(z2, slug2)) throw new Error(`${z}/${slugStranky(st)}: protějšek ${z2}/${slug2} neexistuje`);
        rodic.set(najdi(klic(z, slugStranky(st))), najdi(klic(z2, slug2)));
      }
  const skupiny = new Map<string, StrankaDokumentu[]>();
  for (const [z, stranky] of Object.entries(STRANKY))
    for (const st of stranky) {
      const k = klic(z, slugStranky(st));
      if (!rodic.has(k) && ![...rodic.values()].includes(k)) continue;
      const koren = najdi(k);
      skupiny.set(koren, [...(skupiny.get(koren) ?? []), st]);
    }
  const podle = new Map<string, StrankaDokumentu[]>();
  for (const cleny of skupiny.values()) for (const st of cleny) podle.set(klic(st.sablona.zeme, slugStranky(st)), cleny);
  return podle;
})();

const poradiZeme = (kod: string) => zemeKod(kod).poradi;

/** Originály téhož dokumentu v ostatních jazykových variantách země (bez dokumentu samotného) */
export const protejskyDokumentu = (zeme: string, slug: string): StrankaDokumentu[] =>
  (SKUPINY_PROTEJSKU.get(`${zeme}/${slug}`) ?? []).filter((st) => st.sablona.zeme !== zeme).sort((a, b) => poradiZeme(a.sablona.zeme) - poradiZeme(b.sablona.zeme));

/**
 * Jazyky dokumentu pro přepínač a hreflang: originál, protějšky v dalších jazycích země (Švýcarsko) a jazykové verze.
 * `aktualni` = jazyk otevřené stránky (jazyk země u originálu), `cast` = doplněk adresy („vytvorit/“ u průvodce).
 * Verze protějšků se přidají jen do hreflang (vzájemnost), v přepínači jen, když jazyk ještě chybí.
 */
export function jazykyDokumentu(zeme: string, slug: string, aktualni?: string, cast = ''): JazykStranky[] {
  const original = strankaPodleSlugu(zeme, slug);
  const sestry = protejskyDokumentu(zeme, slug);
  const verze = verzeDokumentu(zeme, slug);
  if (!original || (!verze.length && !sestry.length)) return [];
  const orig = (st: StrankaDokumentu, vlastni: boolean): JazykStranky => {
    const z = zemeKod(st.sablona.zeme);
    return { jazyk: z.jazyk, nazev: NAZVY_JAZYKU[z.jazyk] ?? z.jazyk, hreflang: z.hreflang, href: urlStranky(st) + cast, aktivni: vlastni && (!aktualni || aktualni === z.jazyk) };
  };
  const originaly = [orig(original, true), ...sestry.map((st) => orig(st, false))].sort(
    (a, b) => poradiZeme(zemeZHreflang(a.hreflang)) - poradiZeme(zemeZHreflang(b.hreflang)),
  );
  const verzeVse = [zeme, ...sestry.map((st) => st.sablona.zeme)].flatMap((z) =>
    verzeDokumentu(z, z === zeme ? slug : slugStranky(sestry.find((st) => st.sablona.zeme === z)!)).map((v) => ({
      jazyk: v.jazyk,
      nazev: JAZYKY_VERZI[v.jazyk].nazev,
      hreflang: hreflangVerze(z, v.jazyk),
      href: urlStranky(v.stranka) + cast,
      aktivni: z === zeme && aktualni === v.jazyk,
    })),
  );
  const videne = new Set<string>();
  return [...originaly, ...verzeVse].filter((j) => (videne.has(j.hreflang) ? false : (videne.add(j.hreflang), true)));
}

/** Kód země podle hreflang originálu (de-CH → ch, fr-CH → ch-fr) */
const zemeZHreflang = (h: string) => AKTIVNI_ZEME.find((z) => z.hreflang === h)!.kod;

/** Jazykové varianty země (stejná `skupina`), seřazené podle pořadí */
const variantyZeme = (kod: string) => {
  const sk = zemeKod(kod).skupina;
  return sk ? AKTIVNI_ZEME.filter((z) => z.skupina === sk) : [zemeKod(kod)];
};

/** Jazyky rozcestníku země (originál, jazykové varianty země a verze s dokumenty) */
export function jazykyRozcestniku(zeme: string, aktualni?: string): JazykStranky[] {
  const verze = ROZCESTNIKY_VERZI.filter((r) => r.zeme.kod === zeme);
  const varianty = variantyZeme(zeme);
  if (!verze.length && varianty.length < 2) return [];
  return [
    ...varianty.map((z) => ({ jazyk: z.jazyk, nazev: NAZVY_JAZYKU[z.jazyk] ?? z.jazyk, hreflang: z.hreflang, href: `/${z.kod}/`, aktivni: z.kod === zeme && (!aktualni || aktualni === z.jazyk) })),
    ...verze.map((r) => ({ jazyk: r.jazyk, nazev: JAZYKY_VERZI[r.jazyk].nazev, hreflang: hreflangVerze(zeme, r.jazyk), href: r.url, aktivni: aktualni === r.jazyk })),
  ];
}

/** hreflang rozcestníků: rozcestníky zemí (obsah/index.ts) + rozcestníky jazykových verzí */
export const HREFLANG_ROZCESTNIKU = [
  ...HREFLANG_HUBY,
  ...ROZCESTNIKY_VERZI.map((r) => ({ hreflang: hreflangVerze(r.zeme.kod, r.jazyk), href: r.url })),
];

/** hreflang dokumentu (originál + verze); prázdné, když dokument verze nemá */
export const hreflangDokumentu = (zeme: string, slug: string) =>
  jazykyDokumentu(zeme, slug).map((j) => ({ hreflang: j.hreflang, href: j.href }));

/** Katalog verze pro vyhledávání (jen přeložené dokumenty) */
export const katalogVerze = (zeme: string, jazyk: string): Dokument[] =>
  dokumentyVerze(zeme, jazyk).map((v) => ({ nazev: v.stranka.nazev, url: urlStranky(v.stranka), ...v.stranka.katalog }));

/** Související dokumenty ve verzi: jen přeložené, popis z překladu */
export function souvisejiciVerze(zeme: string, jazyk: string, skupina: string, kromeUrl?: string): Odkaz[] {
  const z = zemeKod(zeme);
  const verze = dokumentyVerze(zeme, jazyk);
  return (z.skupiny[skupina] ?? []).flatMap((p) => {
    const v = verze.find((x) => x.slug === p.slug);
    if (!v) return [];
    const url = urlStranky(v.stranka);
    return url === kromeUrl ? [] : [{ nazev: v.stranka.nazev, popis: v.stranka.katalog.popis, url, ilustrace: v.stranka.katalog.ilustrace }];
  });
}

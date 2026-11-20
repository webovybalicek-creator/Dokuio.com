/**
 * Registr obsahu: země a dokumenty se načtou samy ze složek src/obsah/<kod>/.
 * Nic dalšího se při přidání dokumentu nebo země ručně nezapisuje.
 */
import type { Dokument, Odkaz, StrankaDokumentu, Zeme } from './typy';
import { chText } from '../i18n/schweiz';

/** Švýcarský pravopis pro všechny řetězce stránky kromě šablony (ta ho má ze schweiz()) */
function naSchweizTexte<T>(v: T): T {
  if (typeof v === 'string') return chText(v) as T;
  if (Array.isArray(v)) return v.map(naSchweizTexte) as T;
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v as Record<string, unknown>).map(([k, x]) => [k, k === 'sablona' ? x : naSchweizTexte(x)])) as T;
  return v;
}

const zemeSoubory = import.meta.glob<{ zeme: Zeme }>('./*/_zeme.ts', { eager: true });
const strankySoubory = import.meta.glob<{ default: StrankaDokumentu }>(['./*/*.ts', '!./*/_*.ts'], { eager: true });

/** Všechny země podle pořadí */
export const ZEME: Zeme[] = Object.values(zemeSoubory)
  .map((m) => m.zeme)
  .sort((a, b) => a.poradi - b.poradi);

export const AKTIVNI_ZEME = ZEME.filter((z) => z.aktivni);

export const zemeKod = (kod: string): Zeme => {
  const z = ZEME.find((x) => x.kod === kod);
  if (!z) throw new Error(`Neznámá země: ${kod}`);
  return z;
};

export const slugStranky = (s: StrankaDokumentu) => s.sablona.souborPdf;
/** Adresa landing page; jazyková verze (src/preklady) má jazyk za zemí: /cz/uk/kupni-smlouva-auto/ */
export const urlStranky = (s: StrankaDokumentu) =>
  `/${s.sablona.zeme}/${s.sablona.jazykRozhrani ? `${s.sablona.jazykRozhrani}/` : ''}${s.sablona.souborPdf}/`;

/** Dokumenty po zemích */
export const STRANKY: Record<string, StrankaDokumentu[]> = {};
for (const [cesta, m] of Object.entries(strankySoubory)) {
  const s = m.default;
  const zemeSlozky = cesta.split('/')[1];
  if (s.sablona.zeme !== zemeSlozky) throw new Error(`${cesta}: šablona patří zemi ${s.sablona.zeme}`);
  if (!AKTIVNI_ZEME.some((z) => z.kod === zemeSlozky)) continue; // neaktivní země (rozpracovaná) se negeneruje
  // Švýcarsko: texty stránek převzaté z DE (spread `...de`) v švýcarském pravopisu – „ß“ → „ss“, € → CHF (šablony to mají v schweiz())
  (STRANKY[zemeSlozky] ??= []).push(zemeSlozky === 'ch' ? { ...naSchweizTexte(s), sablona: s.sablona } : s);
}

export const VSECHNY_STRANKY = Object.values(STRANKY).flat();

/** Katalog země pro vyhledávání: hotové dokumenty + připravované */
export function katalog(kod: string): Dokument[] {
  const z = zemeKod(kod);
  const hotove = (STRANKY[kod] ?? []).map((s) => ({ nazev: s.nazev, url: urlStranky(s), ...s.katalog }));
  return [...hotove, ...z.pripravujeme];
}

/** Související dokumenty ze skupiny, bez aktuální stránky */
export function souvisejici(kod: string, skupina: string, kromeUrl?: string): Odkaz[] {
  const z = zemeKod(kod);
  const strankyZeme = STRANKY[kod] ?? [];
  return (z.skupiny[skupina] ?? []).flatMap((p) => {
    const s = strankyZeme.find((x) => slugStranky(x) === p.slug);
    if (!s) return [];
    const url = urlStranky(s);
    return url === kromeUrl ? [] : [{ nazev: s.nazev, popis: p.popis, url, ilustrace: s.katalog.ilustrace }];
  });
}

/** hreflang rozcestníků zemí (jazykové verze téhož rozcestníku) */
export const HREFLANG_HUBY = [
  { hreflang: 'x-default', href: '/' },
  { hreflang: 'en', href: '/' },
  ...AKTIVNI_ZEME.map((z) => ({ hreflang: z.hreflang, href: `/${z.kod}/` })),
];

/** Stránka dokumentu podle země a slugu */
export const strankaPodleSlugu = (kod: string, slug: string) => (STRANKY[kod] ?? []).find((s) => slugStranky(s) === slug);

/** Balíčky, do kterých dokument patří */
export const balickyDokumentu = (kod: string, slug: string) =>
  (zemeKod(kod).balicky ?? []).filter((b) => b.dokumenty.includes(slug));

export const urlBalicku = (kod: string, slug: string) => `/${kod}/balicek/${slug}/`;

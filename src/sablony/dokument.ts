/**
 * Převod šablony + dat na strukturovaný dokument, ze kterého kreslí HTML náhled i PDF.
 * Nevyplněná pole se mění na linky, nevybrané volby na zaškrtávací výčet.
 */
import type { Data, Hodnota, Odstavec, OdstavecPrekladu, Pole, Preklad, Sablona, Tabulka } from './typy';
import { texty as textyJazyka } from '../i18n';

export type Usek =
  | { t: 'text'; text: string; tucne?: boolean; vyplneno?: boolean; pole?: string }
  | { t: 'linka'; sirka: number; pole?: string }
  | { t: 'ctverec'; zaskrtnuto: boolean; pole?: string };

export interface Radek {
  /** Úroveň odsazení: 0 = běžný řádek, 1 = položka výčtu */
  uroven: 0 | 1;
  useky: Usek[];
  /** Řádek překladu (dvojjazyčná verze) – kreslí se šedě/kurzívou */
  preklad?: boolean;
}

export type StavOdstavce = 'puvodni' | 'upraveno' | 'vlastni' | 'smazano';

export interface OdstavecDok {
  /** Stabilní id („2.1“ = článek 2, odstavec 1; vlastní „v0“, „v1“…) */
  id: string;
  /** Číslo odstavce („1.“); smazané odstavce číslo nemají */
  cislo?: string;
  stav: StavOdstavce;
  radky: Radek[];
}

export interface Blok {
  nadpis: string;
  vysvetleni?: string;
  odstavce: OdstavecDok[];
}

export interface Dokument {
  nazev: string;
  podnadpis: string;
  /** Název a podnadpis v překladu (dvojjazyčná verze) */
  nazev2?: string;
  podnadpis2?: string;
  /** Přílohy (tabulky) za podpisy */
  prilohy: Tabulka[];
  /** Adresa ověření šablony (QR kód v PDF) */
  overeni: string;
  kod: string;
  uvod: Usek[];
  bloky: Blok[];
  misto: Usek[];
  datum: Usek[];
  podpisy: { vlevo: string; vpravo: string };
  paticka: string;
  /** „V“ a „dne“ u místa a data podpisu v jazyce dokumentu */
  mistoDne: [string, string];
  jazyk: string;
  /** Jazyk ovládání náhledu (tlačítka, „Co to znamená?“) u jazykové verze; jinak = jazyk */
  jazykRozhrani?: string;
  /** Uživatel upravil text šablony */
  upraveno: boolean;
  /** Kolik polí je vyplněno / celkem (pro průvodce) */
  vyplneno: number;
  celkem: number;
}

/** Úpravy textu uživatelem – vždy nad ověřeným základem šablony, kdykoli vratné */
export interface Upravy {
  /** id odstavce → nový text (řádky oddělené \n, „☐“ na začátku řádku = zaškrtávací pole, „……“ = linka) */
  text?: Record<string, string>;
  smazane?: string[];
  /** Vlastní ustanovení – samostatný článek „Další ujednání“ před závěrečnými ustanoveními */
  vlastni?: string[];
}

const RIMSKE = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

export function prazdne(h: Hodnota): boolean {
  if (h === undefined || h === null) return true;
  if (Array.isArray(h)) return h.length === 0;
  return String(h).trim() === '';
}

/** 2026-11-19 → 19. 11. 2026 */
export function formatDatum(iso: string, jazyk?: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return iso;
  if (jazyk === 'hu') return `${m[1]}. ${m[2]}. ${m[3]}.`;
  return `${Number(m[3])}. ${Number(m[2])}. ${m[1]}`;
}

/** 150000 → 150 000 (pevná mezera mezi řády) */
export function formatCislo(v: string): string {
  const n = Number(String(v).replace(/\s/g, '').replace(',', '.'));
  if (!Number.isFinite(n)) return v;
  return n.toLocaleString('cs-CZ', { maximumFractionDigits: 2 }).replace(/\s/g, '\u00a0');
}

export function formatHodnota(pole: Pole | undefined, h: Hodnota, jazyk?: string): string {
  if (prazdne(h)) return '';
  const v = Array.isArray(h) ? h.join(', ') : String(h).trim();
  if (!pole) return v;
  switch (pole.typ) {
    case 'datum':
      return formatDatum(v, jazyk);
    case 'castka':
      return `${formatCislo(v)}\u00a0${textyJazyka(jazyk).mena.znak}`;
    case 'cislo':
      return pole.jednotka ? `${formatCislo(v)}\u00a0${pole.jednotka}` : formatCislo(v);
    case 'vin':
      return v.toUpperCase().replace(/\s/g, '');
    case 'volba': {
      const m = pole.moznosti?.find((o) => o.hodnota === v);
      return m ? (m.dokument ?? m.popis) : v;
    }
    default: {
      // PSČ a obec držet pohromadě: „251 01 Říčany“ se nezalomí uprostřed
      const t = v.replace(/\b(\d{3}) (\d{2}) (\S+)/g, '$1\u00a0$2\u00a0$3');
      return pole.jednotka ? `${t}\u00a0${pole.jednotka}` : t;
    }
  }
}

export function vsechnaPole(s: Sablona): Map<string, Pole> {
  const m = new Map<string, Pole>();
  for (const k of s.kroky) for (const p of k.pole) m.set(p.id, p);
  return m;
}

/** Je pole ve formuláři aktivní (splněná podmínka zobrazení)? */
export function poleAktivni(p: Pole, data: Data): boolean {
  if (!p.zobrazitKdyz) return true;
  const { pole, je } = p.zobrazitKdyz;
  const v = data[pole];
  return typeof v === 'string' && (Array.isArray(je) ? je.includes(v) : je === v);
}

const LINKA_TEXT = '……………';

/** Řádky odstavce jako prostý text – výchozí obsah editoru úprav */
export function radkyNaText(radky: Radek[]): string {
  return radky
    .map((r) =>
      r.useky
        .map((u) => (u.t === 'linka' ? LINKA_TEXT : u.t === 'ctverec' ? (u.zaskrtnuto ? '☒ ' : '☐ ') : u.text))
        .join('')
        .replace(/\u00a0/g, ' '),
    )
    .join('\n');
}

/** Prostý text z editoru → řádky; „…“ / „___“ (3+) = linka, „☐/☒“ na začátku = zaškrtávací pole */
export function textNaRadky(text: string): Radek[] {
  return text
    .split('\n')
    .map((r) => r.trim())
    .filter(Boolean)
    .map((r, i) => {
      const useky: Usek[] = [];
      let zbytek = r;
      const box = /^([☐☒])\s*/.exec(zbytek);
      if (box) {
        useky.push({ t: 'ctverec', zaskrtnuto: box[1] === '☒' });
        zbytek = zbytek.slice(box[0].length);
      }
      for (const cast of zbytek.split(/(…{2,}|\.{3,}|_{3,})/)) {
        if (!cast) continue;
        if (/^(…{2,}|\.{3,}|_{3,})$/.test(cast)) useky.push({ t: 'linka', sirka: Math.max(10, cast.length * 3) });
        else useky.push({ t: 'text', text: cast });
      }
      return { uroven: (i > 0 && box ? 1 : 0) as 0 | 1, useky };
    });
}

/** Základ názvu staženého souboru: jazyková verze má příponu jazyka (kupni-smlouva-auto-uk.pdf) */
export const nazevSouboru = (s: Sablona) => (s.jazykRozhrani ? `${s.souborPdf}-${s.jazykRozhrani}` : s.souborPdf);

export function sestavDokument(s: Sablona, data: Data, upravy: Upravy = {}): Dokument {
  const T = textyJazyka(s.jazyk).dokument;
  const pole = vsechnaPole(s);

  const hodnotaUseku = (id: string): Usek => {
    const p = pole.get(id);
    const odvoz = s.odvozene?.[id];
    const ref = p ? { pole: id } : {};
    if (p && !poleAktivni(p, data)) return { t: 'linka', sirka: p.sirka ?? 24, ...ref };
    const text = odvoz ? odvoz(data) : formatHodnota(p, data[id], s.jazyk);
    if (text) return { t: 'text', text, vyplneno: true, ...ref };
    return { t: 'linka', sirka: p?.sirka ?? 30, ...ref };
  };

  /** „Text {{pole}} a **tučně**“ → úseky */
  const rozloz = (text: string): Usek[] => {
    const out: Usek[] = [];
    let tucne = false;
    for (const cast of text.split(/(\{\{[a-z0-9_]+\}\}|\*\*)/)) {
      if (!cast) continue;
      if (cast === '**') {
        tucne = !tucne;
        continue;
      }
      const m = /^\{\{([a-z0-9_]+)\}\}$/.exec(cast);
      if (m) out.push(hodnotaUseku(m[1]));
      else out.push({ t: 'text', text: cast, tucne });
    }
    return out;
  };

  /** Řádky jednoho odstavce šablony podle dat */
  const radkyOdstavce = (o: Odstavec): Radek[] => {
    if (typeof o === 'string') return [{ uroven: 0, useky: rozloz(o) }];
    if ('volba' in o) {
      const v = data[o.volba];
      const vybrana = typeof v === 'string' ? o.moznosti[v] : undefined;
      if (vybrana) return [{ uroven: 0, useky: rozloz(o.uvod ? `${o.uvod} ${vybrana}` : vybrana) }];
      return [
        { uroven: 0, useky: rozloz(o.uvodVzor ?? o.uvod ?? T.zaskrtnete) },
        ...Object.values(o.moznosti).map((text) => ({
          uroven: 1 as const,
          useky: [{ t: 'ctverec', zaskrtnuto: false, pole: o.volba } as Usek, ...rozloz(text)],
        })),
      ];
    }
    const v = data[o.vice];
    const vybrane = Array.isArray(v) ? v.filter((x) => o.moznosti[x]) : [];
    const radky: Radek[] = [{ uroven: 0, useky: rozloz(o.uvod) }];
    const polozky = vybrane.length ? vybrane.map((x) => o.moznosti[x]) : Object.values(o.moznosti);
    for (const text of polozky) {
      radky.push({ uroven: 1, useky: [{ t: 'ctverec', zaskrtnuto: vybrane.length > 0, pole: o.vice }, ...rozloz(text)] });
    }
    if (o.dalsi) {
      const useky = rozloz(o.dalsi);
      const maHodnotu = useky.some((u) => u.t === 'text' && u.vyplneno);
      if (maHodnotu || !vybrane.length) radky.push({ uroven: 1, useky });
    }
    return radky;
  };

  /** Dvojjazyčná verze: data._preklad = jazyk překladu, u jazykové verze (prekladVzdy) vždy */
  const P = s.preklad && (s.prekladVzdy || data._preklad === s.preklad.jazyk) && data._jenOriginal !== '1' ? s.preklad : undefined;
  const prelozVolbu = (id: string, v: string) => P?.volby?.[id]?.[v];
  const radkyPrekladu = (o: Odstavec, op: OdstavecPrekladu | undefined): Radek[] => {
    if (!op) return [];
    const r = (text: string) => rozlozP(text);
    let radky: Radek[];
    if (typeof op === 'string') radky = [{ uroven: 0, useky: r(op) }];
    else if (typeof o === 'object' && 'volba' in o) {
      const v = data[o.volba];
      const vybrana = typeof v === 'string' ? op.moznosti[v] : undefined;
      radky = vybrana
        ? [{ uroven: 0, useky: r(op.uvod ? `${op.uvod} ${vybrana}` : vybrana) }]
        : [
            { uroven: 0, useky: r(op.uvodVzor ?? op.uvod ?? '') },
            ...Object.keys(o.moznosti).map((k) => ({
              uroven: 1 as const,
              useky: [{ t: 'ctverec', zaskrtnuto: false, pole: o.volba } as Usek, ...r(op.moznosti[k] ?? '')],
            })),
          ];
    } else if (typeof o === 'object' && 'vice' in o) {
      const v = data[o.vice];
      const vybrane = Array.isArray(v) ? v.filter((x) => o.moznosti[x]) : [];
      const klice = vybrane.length ? vybrane : Object.keys(o.moznosti);
      radky = [
        { uroven: 0, useky: r(op.uvod ?? '') },
        ...klice.map((k) => ({
          uroven: 1 as const,
          useky: [{ t: 'ctverec', zaskrtnuto: vybrane.length > 0, pole: o.vice } as Usek, ...r(op.moznosti[k] ?? '')],
        })),
      ];
      if (op.dalsi) radky.push({ uroven: 1, useky: r(op.dalsi) });
    } else radky = [];
    return radky.map((x) => ({ ...x, preklad: true }));
  };
  /** Rozklad textu překladu: hodnoty voleb se překládají, ostatní hodnoty zůstávají */
  const rozlozP = (text: string): Usek[] =>
    rozloz(text).map((u) => {
      if (u.t === 'text' && u.vyplneno && u.pole) {
        const v = data[u.pole];
        const pr = typeof v === 'string' ? prelozVolbu(u.pole, v) : undefined;
        if (pr) return { ...u, text: pr };
      }
      return u;
    });

  const smazane = new Set(upravy.smazane ?? []);
  const texty = upravy.text ?? {};
  let upraveno = false;

  /** Odstavec podle úprav uživatele (smazaný / přepsaný / původní) */
  const odstavecDok = (id: string, radky: () => Radek[]): OdstavecDok => {
    if (smazane.has(id)) {
      upraveno = true;
      return { id, stav: 'smazano', radky: radky() };
    }
    if (texty[id] !== undefined) {
      upraveno = true;
      return { id, stav: 'upraveno', radky: textNaRadky(texty[id]) };
    }
    return { id, stav: 'puvodni', radky: radky() };
  };

  const clanky: { nadpis: string; vysvetleni?: string; odstavce: OdstavecDok[] }[] = s.clanky.map((c, i) => ({
    nadpis: c.nadpis,
    vysvetleni: c.vysvetleni,
    odstavce: c.odstavce.flatMap((o, j): OdstavecDok[] => {
      const id = `${i + 1}.${j + 1}`;
      if (typeof o === 'object' && 'kdyz' in o && o.kdyz) {
        const v = data[o.kdyz.pole];
        const je = Array.isArray(o.kdyz.je) ? o.kdyz.je : [o.kdyz.je];
        if (typeof v === 'string' && v && !je.includes(v)) return [];
      }
      const op = P?.clanky[i]?.odstavce[j];
      // smazaný odstavec ukazuje jen originál (k vrácení), původní i s překladem
      if (smazane.has(id)) return [odstavecDok(id, () => radkyOdstavce(o))];
      return [odstavecDok(id, () => [...radkyOdstavce(o), ...radkyPrekladu(o, op)])];
    }),
  }));

  // Jazyková doložka (originál + překlad) jako poslední odstavec posledního článku
  if (P?.dolozka && clanky.length) {
    const i = clanky.length - 1;
    const [orig, prek] = P.dolozka;
    clanky[i].odstavce.push(
      odstavecDok(`${i + 1}.${s.clanky[i].odstavce.length + 1}`, () => [
        { uroven: 0, useky: rozloz(orig) },
        { uroven: 0, useky: rozloz(prek), preklad: true },
      ]),
    );
  }

  const vlastni = (upravy.vlastni ?? []).filter((t) => t.trim());
  if (vlastni.length) {
    upraveno = true;
    clanky.splice(Math.max(clanky.length - 1, 0), 0, {
      nadpis: T.dalsiUjednani,
      vysvetleni: textyJazyka(s.jazykRozhrani ?? s.jazyk).dokument.dalsiUjednaniVysvetleni,
      odstavce: vlastni.map((t, k) => ({ id: `v${k}`, stav: 'vlastni', radky: textNaRadky(t) })),
    });
  }

  const bloky: Blok[] = clanky.map((c, i) => {
    const platne = c.odstavce.filter((o) => o.stav !== 'smazano');
    let n = 0;
    return {
      nadpis:
        (s.cislovatClanky === false ? c.nadpis : `${T.clanek(RIMSKE[i], i + 1)} · ${c.nadpis}`) +
        (P && P.clanky[i] ? ` / ${s.cislovatClanky === false ? '' : `${P.clanek} ${RIMSKE[i]} · `}${P.clanky[i].nadpis}` : ''),
      vysvetleni: c.vysvetleni,
      odstavce: c.odstavce.map((o) =>
        o.stav === 'smazano' || platne.length < 2 || s.cislovatOdstavce === false ? o : { ...o, cislo: `${++n}.` },
      ),
    };
  });

  let vyplneno = 0;
  let celkem = 0;
  for (const p of pole.values()) {
    if (!poleAktivni(p, data)) continue;
    celkem++;
    if (!prazdne(data[p.id])) vyplneno++;
  }

  const zakladPaticky = P ? `${s.paticka} · ${P.prednost}` : s.paticka;
  return {
    nazev: s.nazev,
    podnadpis: s.podnadpis,
    nazev2: P?.nazev,
    podnadpis2: P?.podnadpis,
    prilohy: (s.prilohy?.(data) ?? []).map((t) => (P?.prilohy || P?.splatky ? prelozTabulku(t, P.prilohy ?? {}, P.splatky) : t)),
    overeni: `https://dokuio.com/overeni/?k=${encodeURIComponent(s.kod)}&v=${encodeURIComponent(s.verze)}`,
    kod: s.kod,
    uvod: s.uvod ? [...rozloz(s.uvod), ...(P?.uvod ? [{ t: 'text' as const, text: ' / ' }, ...rozlozP(P.uvod)] : [])] : [],
    bloky,
    misto: [hodnotaUseku(s.mistoPodpisu)],
    datum: [hodnotaUseku(s.datumPodpisu)],
    podpisy: P
      ? { vlevo: `${s.podpisy.vlevo} / ${P.podpisy.vlevo}`, vpravo: `${s.podpisy.vpravo} / ${P.podpisy.vpravo}` }
      : s.podpisy,
    paticka: upraveno ? `${zakladPaticky} · ${T.upravenoUzivatelem}` : zakladPaticky,
    mistoDne: P ? [`${T.v} / ${P.mistoDne[0]}`, `${T.dne} / ${P.mistoDne[1]}`] : [T.v, T.dne],
    jazyk: s.jazyk,
    jazykRozhrani: s.jazykRozhrani,
    upraveno,
    vyplneno,
    celkem,
  };
}

/**
 * Texty příloh ve dvojjazyčné verzi: „originál / překlad“ podle slovníku (přesná shoda nebo začátek textu).
 * Souhrn splátkového kalendáře (`Tabulka.souhrn`) přeloží celý funkce jazyka verze (`Preklad.splatky`).
 */
function prelozTabulku(t: Tabulka, slovnik: Record<string, string>, splatky?: Preklad['splatky']): Tabulka {
  const pr = (text: string): string => {
    if (slovnik[text]) return `${text} / ${slovnik[text]}`;
    const k = Object.keys(slovnik).find((x) => text.startsWith(x));
    return k ? `${text} / ${slovnik[k]}${text.slice(k.length)}` : text;
  };
  return {
    ...t,
    nadpis: pr(t.nadpis),
    popis: t.popis && (t.souhrn && splatky ? `${t.popis} / ${splatky.popis(t.souhrn)}` : pr(t.popis)),
    hlavicka: t.hlavicka.map(pr),
    poznamka: t.poznamka && pr(t.poznamka),
  };
}

/* ------------------------------------------------------------------ částka slovy */

const JEDNOTKY = ['', 'jedna', 'dva', 'tři', 'čtyři', 'pět', 'šest', 'sedm', 'osm', 'devět'];
const NACT = ['deset', 'jedenáct', 'dvanáct', 'třináct', 'čtrnáct', 'patnáct', 'šestnáct', 'sedmnáct', 'osmnáct', 'devatenáct'];
const DESITKY = ['', '', 'dvacet', 'třicet', 'čtyřicet', 'padesát', 'šedesát', 'sedmdesát', 'osmdesát', 'devadesát'];
const STOVKY = ['', 'sto', 'dvě stě', 'tři sta', 'čtyři sta', 'pět set', 'šest set', 'sedm set', 'osm set', 'devět set'];

function doTisice(n: number): string {
  const s = Math.floor(n / 100);
  const zb = n % 100;
  const casti: string[] = [];
  if (s) casti.push(STOVKY[s]);
  if (zb >= 10 && zb < 20) casti.push(NACT[zb - 10]);
  else {
    const d = Math.floor(zb / 10);
    const j = zb % 10;
    if (d) casti.push(DESITKY[d]);
    if (j) casti.push(JEDNOTKY[j]);
  }
  return casti.join(' ');
}

function rad(n: number, tvary: [string, string, string]): string {
  if (n === 0) return '';
  if (n === 1) return tvary[0];
  const zaklad = doTisice(n);
  const posl = n % 100;
  const tvar = posl >= 2 && posl <= 4 ? tvary[1] : tvary[2];
  return `${zaklad} ${tvar}`;
}

/** 150000 → „sto padesát tisíc korun českých“ (celé koruny do 999 999 999) */
export function castkaSlovy(v: Hodnota): string {
  if (prazdne(v)) return '';
  const n = Math.floor(Number(String(v).replace(/\s/g, '').replace(',', '.')));
  if (!Number.isFinite(n) || n < 0 || n > 999_999_999) return '';
  if (n === 0) return 'nula korun českých';
  const mil = Math.floor(n / 1_000_000);
  const tis = Math.floor((n % 1_000_000) / 1000);
  const zb = n % 1000;
  const casti = [
    rad(mil, ['jeden milion', 'miliony', 'milionů']),
    rad(tis, ['tisíc', 'tisíce', 'tisíc']),
    // koruna je ženského rodu: „dvě koruny“
    doTisice(zb).replace(/(^|\s)dva$/, '$1dvě'),
  ].filter(Boolean);
  const d1 = n % 10;
  const d2 = n % 100;
  const mena =
    n === 1 ? 'koruna česká' : d1 >= 2 && d1 <= 4 && !(d2 >= 12 && d2 <= 14) ? 'koruny české' : 'korun českých';
  return `${casti.join(' ')} ${mena}`;
}

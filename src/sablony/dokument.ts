/**
 * Převod šablony + dat na strukturovaný dokument, ze kterého kreslí HTML náhled i PDF.
 * Nevyplněná pole se mění na linky, nevybrané volby na zaškrtávací výčet.
 */
import type { Data, Hodnota, Odstavec, Pole, Sablona } from './typy';

export type Usek =
  | { t: 'text'; text: string; tucne?: boolean; vyplneno?: boolean; pole?: string }
  | { t: 'linka'; sirka: number; pole?: string }
  | { t: 'ctverec'; zaskrtnuto: boolean; pole?: string };

export interface Radek {
  /** Úroveň odsazení: 0 = běžný řádek, 1 = položka výčtu */
  uroven: 0 | 1;
  useky: Usek[];
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
  uvod: Usek[];
  bloky: Blok[];
  misto: Usek[];
  datum: Usek[];
  podpisy: { vlevo: string; vpravo: string };
  paticka: string;
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
export function formatDatum(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return iso;
  return `${Number(m[3])}. ${Number(m[2])}. ${m[1]}`;
}

/** 150000 → 150 000 (pevná mezera mezi řády) */
export function formatCislo(v: string): string {
  const n = Number(String(v).replace(/\s/g, '').replace(',', '.'));
  if (!Number.isFinite(n)) return v;
  return n.toLocaleString('cs-CZ', { maximumFractionDigits: 2 }).replace(/\s/g, '\u00a0');
}

export function formatHodnota(pole: Pole | undefined, h: Hodnota): string {
  if (prazdne(h)) return '';
  const v = Array.isArray(h) ? h.join(', ') : String(h).trim();
  if (!pole) return v;
  switch (pole.typ) {
    case 'datum':
      return formatDatum(v);
    case 'castka':
      return `${formatCislo(v)}\u00a0Kč`;
    case 'cislo':
      return pole.jednotka ? `${formatCislo(v)}\u00a0${pole.jednotka}` : formatCislo(v);
    case 'vin':
      return v.toUpperCase().replace(/\s/g, '');
    case 'volba': {
      const m = pole.moznosti?.find((o) => o.hodnota === v);
      return m ? m.popis : v;
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

export function sestavDokument(s: Sablona, data: Data, upravy: Upravy = {}): Dokument {
  const pole = vsechnaPole(s);

  const hodnotaUseku = (id: string): Usek => {
    const p = pole.get(id);
    const odvoz = s.odvozene?.[id];
    const ref = p ? { pole: id } : {};
    if (p && !poleAktivni(p, data)) return { t: 'linka', sirka: p.sirka ?? 24, ...ref };
    const text = odvoz ? odvoz(data) : formatHodnota(p, data[id]);
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
        { uroven: 0, useky: rozloz(o.uvodVzor ?? o.uvod ?? 'Zaškrtněte jednu možnost:') },
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

  const smazane = new Set(upravy.smazane ?? []);
  const texty = upravy.text ?? {};
  let upraveno = false;

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
      if (smazane.has(id)) {
        upraveno = true;
        return [{ id, stav: 'smazano' as const, radky: radkyOdstavce(o) }];
      }
      if (texty[id] !== undefined) {
        upraveno = true;
        return [{ id, stav: 'upraveno' as const, radky: textNaRadky(texty[id]) }];
      }
      return [{ id, stav: 'puvodni' as const, radky: radkyOdstavce(o) }];
    }),
  }));

  const vlastni = (upravy.vlastni ?? []).filter((t) => t.trim());
  if (vlastni.length) {
    upraveno = true;
    clanky.splice(Math.max(clanky.length - 1, 0), 0, {
      nadpis: 'Další ujednání',
      vysvetleni: 'Vaše vlastní ustanovení. Tento text není součástí našeho ověřeného vzoru.',
      odstavce: vlastni.map((t, k) => ({ id: `v${k}`, stav: 'vlastni', radky: textNaRadky(t) })),
    });
  }

  const bloky: Blok[] = clanky.map((c, i) => {
    const platne = c.odstavce.filter((o) => o.stav !== 'smazano');
    let n = 0;
    return {
      nadpis: s.cislovatClanky === false ? c.nadpis : `Článek ${RIMSKE[i]} · ${c.nadpis}`,
      vysvetleni: c.vysvetleni,
      odstavce: c.odstavce.map((o) =>
        o.stav === 'smazano' || platne.length < 2 ? o : { ...o, cislo: `${++n}.` },
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

  return {
    nazev: s.nazev,
    podnadpis: s.podnadpis,
    uvod: s.uvod ? rozloz(s.uvod) : [],
    bloky,
    misto: [hodnotaUseku(s.mistoPodpisu)],
    datum: [hodnotaUseku(s.datumPodpisu)],
    podpisy: s.podpisy,
    paticka: upraveno ? `${s.paticka} · text upraven uživatelem` : s.paticka,
    upraveno,
    vyplneno,
    celkem,
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

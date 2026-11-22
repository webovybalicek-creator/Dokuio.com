/**
 * Pomocné výpočty termínů pro šablony: pracovní dny (ČR), splátkový kalendář, připomínky.
 * Vše je orientační – v rozhraní i v dokumentu to tak popisujeme.
 */
import type { Data, Hodnota, Pripominka, SouhrnSplatek, Tabulka } from './typy';
import { formatCislo, formatDatum } from './dokument';

const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export const naDatum = (h: Hodnota): Date | undefined => {
  const m = typeof h === 'string' ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(h.trim()) : null;
  return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : undefined;
};

export const cislo = (h: Hodnota): number => {
  const n = Number(String(h ?? '').replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : 0;
};

/** Velikonoční neděle (anonymní gregoriánský algoritmus) */
function velikonoce(rok: number): Date {
  const a = rok % 19;
  const b = Math.floor(rok / 100);
  const c = rok % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mesic = Math.floor((h + l - 7 * m + 114) / 31);
  const den = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(rok, mesic - 1, den);
}

/** Státní svátky a ostatní svátky ČR (zákon č. 245/2000 Sb.) */
const SVATKY: Record<string, (rok: number) => string[]> = {
  cz: (rok) => {
    const v = velikonoce(rok);
    const posun = (dni: number) => iso(new Date(v.getFullYear(), v.getMonth(), v.getDate() + dni));
    return [
      ...['01-01', '05-01', '05-08', '07-05', '07-06', '09-28', '10-28', '11-17', '12-24', '12-25', '12-26'].map(
        (x) => `${rok}-${x}`,
      ),
      posun(-2), // Velký pátek
      posun(1), // Velikonoční pondělí
    ];
  },
  ee: (rok) => {
    const v = velikonoce(rok);
    return [
      ...['01-01', '02-24', '05-01', '06-23', '06-24', '08-20', '12-24', '12-25', '12-26'].map((x) => `${rok}-${x}`),
      iso(new Date(v.getFullYear(), v.getMonth(), v.getDate() - 2)), // suur reede
    ];
  },
  sk: (rok) => {
    const v = velikonoce(rok);
    const posun = (dni: number) => iso(new Date(v.getFullYear(), v.getMonth(), v.getDate() + dni));
    return [
      ...['01-01', '01-06', '05-01', '05-08', '07-05', '08-29', '09-01', '09-15', '11-01', '11-17', '12-24', '12-25', '12-26'].map(
        (x) => `${rok}-${x}`,
      ),
      posun(-2),
      posun(1),
    ];
  },
};

/** Datum + n pracovních dnů (bez víkendů a svátků dané země) */
export function pridejPracovniDny(od: Date, n: number, zeme = 'cz'): Date {
  const d = new Date(od);
  let zbyva = n;
  while (zbyva > 0) {
    d.setDate(d.getDate() + 1);
    const den = d.getDay();
    const svatky = (SVATKY[zeme] ?? SVATKY.cz)(d.getFullYear());
    if (den !== 0 && den !== 6 && !svatky.includes(iso(d))) zbyva--;
  }
  return d;
}

export const pridejDny = (od: Date, n: number) => new Date(od.getFullYear(), od.getMonth(), od.getDate() + n);

/** Den v měsíci, oříznutý na poslední den kratšího měsíce */
const denVMesici = (rok: number, mesic: number, den: number) =>
  new Date(rok, mesic, Math.min(den, new Date(rok, mesic + 1, 0).getDate()));

export const pridejMesice = (od: Date, n: number, den = od.getDate()) => denVMesici(od.getFullYear(), od.getMonth() + n, den);

export const isoDatum = iso;

/* ------------------------------------------------------------------ splátky */

export interface Splatka {
  poradi: number;
  datum: Date;
  castka: number;
  zbyva: number;
}

/** Rozpis jistiny do měsíčních splátek (bez úroků) */
export function splatky(d: Data, pole = { castka: 'castka', splatka: 'splatka', den: 'splatka_den', prvni: 'prvni_splatka' }): Splatka[] {
  const celkem = cislo(d[pole.castka]);
  const vyse = cislo(d[pole.splatka]);
  const den = Math.round(cislo(d[pole.den]));
  const prvni = naDatum(d[pole.prvni]);
  if (!celkem || !vyse || vyse <= 0 || !prvni || den < 1 || den > 31) return [];
  const pocet = Math.ceil(celkem / vyse);
  if (pocet > 240) return [];
  const out: Splatka[] = [];
  let zbyva = celkem;
  for (let i = 0; i < pocet; i++) {
    const castka = Math.min(vyse, zbyva);
    zbyva = Math.round((zbyva - castka) * 100) / 100;
    out.push({ poradi: i + 1, datum: denVMesici(prvni.getFullYear(), prvni.getMonth() + i, den), castka, zbyva });
  }
  return out;
}

const kc = (n: number, mena = "Kč") => `${formatCislo(String(n))}\u00a0${mena}`;

/**
 * Strukturovaný souhrn kalendáře (`Tabulka.souhrn`) – jazykové verze z něj sestaví překlad popisu přílohy.
 * `celkem` = celková částka už naformátovaná s měnou země; den splatnosti jen když ho popis originálu uvádí.
 */
export const souhrnSplatek = (s: Splatka[], celkem: string, d?: Data): SouhrnSplatek => ({
  celkem,
  pocet: s.length,
  ...(d ? { den: Math.round(cislo(d.splatka_den)) } : {}),
});

/** Tabulka „Splátkový kalendář“ pro přílohu (česky) */
export function splatkovyKalendar(d: Data, poznamka?: string): Tabulka[] {
  const s = splatky(d);
  if (!s.length) return [];
  return [
    {
      nadpis: 'Příloha č. 1 · Splátkový kalendář',
      popis: `Celkem ${kc(cislo(d.castka))} v ${s.length} měsíčních splátkách, vždy do ${Math.round(cislo(d.splatka_den))}. dne v měsíci.`,
      souhrn: souhrnSplatek(s, kc(cislo(d.castka)), d),
      hlavicka: ['Splátka', 'Splatná do', 'Částka', 'Zbývá splatit'],
      radky: s.map((x) => [`${x.poradi}.`, formatDatum(iso(x.datum)), kc(x.castka), kc(x.zbyva)]),
      vpravo: [2, 3],
      poznamka: [poznamka, 'Přehled je sestavený podle sjednaných splátek; při rozporu rozhoduje text dokumentu.'].filter(Boolean).join(' '),
    },
  ];
}

/** Připomínky splátek: jedna opakovaná událost (měsíčně), poslední splátka zvlášť, když je nižší */
export function pripominkySplatek(d: Data, nazev: string, mena = 'Kč', texty = { celkem: (n: number) => `celkem ${n} splátek`, posledni: 'poslední' }): Pripominka[] {
  const s = splatky(d);
  if (!s.length) return [];
  const prvni = s[0];
  const posledni = s[s.length - 1];
  const stejne = s.filter((x) => x.castka === prvni.castka).length;
  const out: Pripominka[] = [
    {
      nazev: `${nazev}: ${kc(prvni.castka, mena)}`,
      datum: iso(prvni.datum),
      mesicne: stejne,
      popis: `${nazev}: ${kc(prvni.castka, mena)} (${texty.celkem(s.length)}).`,
      splatky: s.length,
    },
  ];
  if (posledni.castka !== prvni.castka) {
    out.push({ nazev: `${nazev} – ${texty.posledni}: ${kc(posledni.castka, mena)}`, datum: iso(posledni.datum) });
  }
  return out;
}

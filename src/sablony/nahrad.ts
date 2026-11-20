/** Převezme šablonu a v jejích textech nahradí zadané úseky (funkce nechá beze změny). Pro odvozené verze AT/CH. */
import type { Sablona } from './typy';

function proved<T>(v: T, n: [string, string][]): T {
  if (typeof v === 'string') return n.reduce((t, [a, b]) => t.split(a).join(b), v as string) as T;
  if (typeof v === 'function') return v;
  if (Array.isArray(v)) return v.map((x) => proved(x, n)) as T;
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v as Record<string, unknown>).map(([k, x]) => [k, proved(x, n)])) as T;
  return v;
}

export const nahrad = (s: Sablona, n: [string, string][]): Sablona => proved(s, n);

/** Totéž pro libovolná data (např. texty stránky převzaté z DE v src/obsah/at|ch) */
export const nahradV = <T>(v: T, n: [string, string][]): T => proved(v, n);

/**
 * Ukázkové hodnoty převzaté z německých šablon (adresy, místo podpisu, e-mail, IBAN, SPZ) → místní pro Rakousko
 * a Švýcarsko. Přesné celé řetězce, delší dřív než kratší. Švýcarsko je má automaticky přes `schweiz()`
 * (src/sablony/ch/schweiz.ts, před převodem „ß“ → „ss“), rakouské šablony odvozené z DE přes `nahrad(…, MUSTER_AT)`.
 */
export const MUSTER_AT: [string, string][] = [
  ['z. B. Lindenstraße 7, Berlin, 2. OG links', 'z. B. Lindengasse 7/12, 1070 Wien'],
  ['z. B. Hauptstraße 12, 10115 Berlin', 'z. B. Hauptstraße 12, 1010 Wien'],
  ['z. B. Lindenstraße 7, 10969 Berlin', 'z. B. Lindengasse 7, 1070 Wien'],
  ['z. B. Gartenweg 5, 80331 München', 'z. B. Gartengasse 5, 8010 Graz'],
  ['z. B. Musterstraße 1, 10115 Berlin', 'z. B. Hauptstraße 1, 1010 Wien'],
  ['DE00 0000 0000 0000 0000 00', 'AT00 0000 0000 0000 0000'],
  ['DE12 3456 7890 1234 5678 90', 'AT12 3456 7890 1234 5678'],
  ['anna@email.de', 'anna@email.at'],
  ['z. B. B-AB 1234', 'z. B. W-12345A'],
  ['z. B. Berlin', 'z. B. Wien'],
  ['17 Zeichen, Feld E im Fahrzeugschein.', '17 Zeichen, steht im Zulassungsschein und am Fahrzeug.'],
  ['Feld E im Fahrzeugschein.', 'Steht im Zulassungsschein und am Fahrzeug.'],
  ['Angaben aus der Zulassungsbescheinigung Teil I übernehmen.', 'Angaben aus dem Zulassungsschein übernehmen.'],
  ['Zulassungsschein (Zulassungsbescheinigung Teil I)', 'Zulassungsschein'],
  ['bei Bußgeldern oder Unfällen', 'bei Verwaltungsstrafen oder Unfällen'],
];

export const MUSTER_CH: [string, string][] = [
  ['z. B. Lindenstraße 7, Berlin, 2. OG links', 'z. B. Lindenstrasse 7, 8004 Zürich, 2. OG links'],
  ['z. B. Hauptstraße 12, 10115 Berlin', 'z. B. Bahnhofstrasse 12, 8001 Zürich'],
  ['z. B. Lindenstraße 7, 10969 Berlin', 'z. B. Lindenstrasse 7, 8004 Zürich'],
  ['z. B. Gartenweg 5, 80331 München', 'z. B. Gartenweg 5, 3007 Bern'],
  ['z. B. Musterstraße 1, 10115 Berlin', 'z. B. Musterstrasse 1, 8001 Zürich'],
  ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Seeweg 5, 8001 Zürich'],
  ['z. B. Lindenstraße 7, 10115 Berlin', 'z. B. Seeweg 7, 8001 Zürich'],
  ['z. B. Hauptstraße 1, 80331 München', 'z. B. Marktgasse 1, 3011 Bern'],
  ['z. B. Hauptstraße 1, 10117 Berlin', 'z. B. Marktgasse 1, 8001 Zürich'],
  ['z. B. Industriestraße 5, 80331 München', 'z. B. Industriestrasse 5, 3000 Bern'],
  ['z. B. Gartenweg 3, 04109 Leipzig', 'z. B. Gartenweg 3, 4051 Basel'],
  ['z. B. Postfach 12 34, 40210 Düsseldorf', 'z. B. Postfach, 3001 Bern'],
  ['DE00 0000 0000 0000 0000 00', 'CH00 0000 0000 0000 0000 0'],
  ['DE12 3456 7890 1234 5678 90', 'CH12 3456 7890 1234 5678 9'],
  ['anna@email.de', 'anna@email.ch'],
  ['z. B. B-AB 1234', 'z. B. ZH 123456'],
  ['z. B. Berlin', 'z. B. Zürich'],
];

/**
 * Schuldanerkennung – Schweiz. Art. 17 OR; durch Unterschrift bekräftigt = provisorischer Rechtsöffnungstitel (Art. 82 SchKG);
 * Anerkennung unterbricht die Verjährung (Art. 135 Ziff. 1 OR). Optional Raten mit Tilgungsplan.
 */
import type { Sablona } from '../typy';
import { schuldanerkenntnis as de } from '../de/schuldanerkenntnis';
import { naDatum, pripominkySplatek } from '../terminy';
import { schweiz, betragInFranken, paticka } from './schweiz';
import { tilgungsplanCH } from './darlehensvertrag';
import { OR_17, OR_135, SCHKG_82, TIPP_IDENTITAET_CH } from './quellen';

export const schuldanerkennungCH: Sablona = schweiz({
  ...de,
  kod: 'CH-SCHULDANERKENNUNG',
  nazev: 'Schuldanerkennung',
  podnadpis: 'nach Art. 17 Obligationenrecht (OR)',
  souborPdf: 'schuldanerkennung',
  paticka: paticka('CH-SCHULDANERKENNUNG'),
  slovo: { n: 'Schuldanerkennung', g: 'Schuldanerkennung', a: 'Schuldanerkennung', l: 'Schuldanerkennung' },
  prilohy: (d) => (d.splaceni === 'splatky' ? tilgungsplanCH(d) : []),
  pripominky: (d) => [
    ...(d.splaceni === 'splatky' ? pripominkySplatek(d, 'Rate', 'CHF', { celkem: (n) => `insgesamt ${n} Raten`, posledni: 'letzte' }) : []),
    ...(d.splaceni === 'naraz' && naDatum(d.zaplatit_do) ? [{ nazev: 'Schuld fällig', datum: String(d.zaplatit_do) }] : []),
  ],
  coDal: [
    'Zweimal ausdrucken. Die eigenhändige Unterschrift der Schuldnerin/des Schuldners ist entscheidend.',
    'Das Original mit der Unterschrift behält die Gläubigerin/der Gläubiger.',
    'Barzahlungen quittieren lassen, Überweisungen sind über den Kontoauszug belegt.',
  ],
  kontrola: [
    'Eine durch Unterschrift bekräftigte Schuldanerkennung erlaubt im Betreibungsverfahren die provisorische Rechtsöffnung ([Art. 82 SchKG](https://www.fedlex.admin.ch/eli/cc/11/529_488_529/de#art_82)). Betrag und Fälligkeit müssen klar daraus hervorgehen.',
    'Grund und Höhe der Schuld konkret angeben (aus welchem Vertrag oder Ereignis, von welchem Tag).',
    'Mit der Anerkennung wird die Verjährung unterbrochen und beginnt neu ([Art. 135 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_135)).',
    'Kein Druck und keine Drohungen – eine erzwungene Anerkennung kann angefochten werden.',
    TIPP_IDENTITAET_CH,
  ],
  zdroje: [OR_17, OR_135, SCHKG_82],
  kroky: de.kroky.map((k) => ({
    ...k,
    pole: k.pole.map((p) =>
      p.id === 'castka'
        ? { ...p, popis: 'Höhe der Schuld (CHF)' }
        : p.id === 'splatka'
          ? { ...p, popis: 'Monatsrate (CHF)' }
          : p.id === 'duvod_popis'
            ? { ...p, placeholder: 'z. B. Darlehen gemäss Darlehensvertrag vom 3. 3. 2026' }
            : p,
    ),
  })),
  odvozene: { castka_slovy: (d) => betragInFranken(d.castka) },
});

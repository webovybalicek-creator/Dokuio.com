/** Wohnungsabnahmeprotokoll – Schweiz (Inhalt wie DE, Schweizer Schreibweise und Quellen). */
import type { Sablona } from '../typy';
import { uebergabeprotokollWohnung as de } from '../de/uebergabeprotokoll-wohnung';
import { schweiz, paticka } from './schweiz';
import { OR_MIETE } from './quellen';

export const uebergabeprotokollWohnungCH: Sablona = schweiz({
  ...de,
  kod: 'CH-PROTOKOLL-WOHNUNG',
  nazev: 'Wohnungsübergabeprotokoll',
  paticka: paticka('CH-PROTOKOLL-WOHNUNG'),
  kontrola: [
    ...de.kontrola.slice(0, 4),
    'Bei der Rückgabe muss der Vermieter Mängel sofort schriftlich rügen, sonst verliert er seine Ansprüche, ausser bei versteckten Mängeln (Art. 267a OR).',
  ],
  zdroje: [OR_MIETE],
  prevzit: { ...de.prevzit!, kod: 'CH-MIETVERTRAG' },
});

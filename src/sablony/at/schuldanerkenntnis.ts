/**
 * Schuldanerkenntnis – Österreich. Anerkenntnis unterbricht die Verjährung (§ 1497 ABGB). Keine besondere Form,
 * schriftlich zum Beweis. Abgeleitet von der deutschen Vorlage.
 */
import type { Sablona } from '../typy';
import { schuldanerkenntnis as de } from '../de/schuldanerkenntnis';
import { darlehensvertragAT } from './darlehensvertrag';
import { TIPP_IDENTITAET } from '../de/quellen';
import { ABGB } from './quellen';

export const schuldanerkenntnisAT: Sablona = {
  ...de,
  kod: 'AT-SCHULDANERKENNTNIS',
  zeme: 'at',
  podnadpis: 'nach dem Allgemeinen bürgerlichen Gesetzbuch (ABGB)',
  paticka: de.paticka.replace('DE-SCHULDANERKENNTNIS', 'AT-SCHULDANERKENNTNIS'),
  prilohy: (d) => (d.splaceni === 'splatky' ? (darlehensvertragAT.prilohy?.(d) ?? []).map((t) => ({ ...t, poznamka: 'Der Plan folgt den vereinbarten Raten; bei Widersprüchen gilt der Text des Schuldanerkenntnisses.' })) : []),
  kontrola: [
    'Schriftlich festhalten und von der schuldenden Person eigenhändig unterschreiben lassen – das ist Ihr Beweis.',
    'Grund und Höhe der Schuld konkret angeben (aus welchem Vertrag oder Ereignis, von welchem Tag).',
    'Ein Anerkenntnis unterbricht die Verjährung – die Frist beginnt neu zu laufen (§ 1497 ABGB).',
    'Kein Druck und keine Drohungen – ein erzwungenes Anerkenntnis kann angefochten werden.',
    TIPP_IDENTITAET,
  ],
  zdroje: [ABGB],
};

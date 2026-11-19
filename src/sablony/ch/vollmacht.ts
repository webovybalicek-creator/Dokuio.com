/** Vollmacht (allgemein, mit bestimmtem Umfang) – Schweiz. Stellvertretung nach Art. 32 ff. OR. */
import type { Sablona } from '../typy';
import { vollmacht as de } from '../de/vollmacht';
import { schweiz, paticka } from './schweiz';
import { OR_32, TIPP_IDENTITAET_CH } from './quellen';

export const vollmachtCH: Sablona = schweiz({
  ...de,
  kod: 'CH-VOLLMACHT',
  podnadpis: 'nach Art. 32 ff. Obligationenrecht (OR)',
  paticka: paticka('CH-VOLLMACHT'),
  coDal: [
    'Vollmacht ausdrucken und eigenhändig unterschreiben.',
    'Die bevollmächtigte Person legt die Vollmacht im Original zusammen mit Pass oder ID vor.',
  ],
  kontrola: [
    'Umfang konkret beschreiben – was genau darf die Person tun. Zu allgemeine Vollmachten werden oft abgelehnt.',
    'Für Grundstücke, Gesellschaften, Bankgeschäfte oder Behörden gelten oft besondere Formen (Beglaubigung der Unterschrift, bankeigene Formulare). Vorher nachfragen.',
    'Für den Fall der eigenen Urteilsunfähigkeit braucht es einen Vorsorgeauftrag (Art. 360 ff. ZGB) mit strengerer Form – diese Vorlage ersetzt ihn nicht.',
    TIPP_IDENTITAET_CH,
  ],
  zdroje: [OR_32],
  kroky: de.kroky.map((k) => ({
    ...k,
    pole: k.pole.map((p) =>
      p.id === 'rozsah' ? { ...p, placeholder: 'z. B. Abholung eines an mich adressierten eingeschriebenen Briefes in der Postfiliale Zürich-Enge' } : p,
    ),
  })),
});

/** Quittung über den Empfang von Bargeld – Schweiz. Der Schuldner kann eine Quittung verlangen (Art. 88 OR). */
import type { Sablona } from '../typy';
import { quittung as de } from '../de/quittung';
import { schweiz, betragInFranken, paticka } from './schweiz';
import { OR, OR_88, TIPP_IDENTITAET_CH, TIPP_BAR_CH } from './quellen';

export const quittungCH: Sablona = schweiz({
  ...de,
  kod: 'CH-QUITTUNG',
  podnadpis: 'Empfangsbestätigung über eine Barzahlung (Art. 88 OR)',
  paticka: paticka('CH-QUITTUNG'),
  kontrola: [
    'Betrag in Ziffern und Worten angeben – die Worte ergänzen wir.',
    'Zahlungsgrund konkret beschreiben (z. B. „Kaufpreis für Personenwagen, Fahrgestellnummer …“).',
    'Wer zahlt, kann eine Quittung verlangen ([Art. 88 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_88)).',
    TIPP_IDENTITAET_CH,
    TIPP_BAR_CH,
  ],
  zdroje: [OR, OR_88],
  kroky: de.kroky.map((k) => ({
    ...k,
    pole: k.pole.map((p) =>
      p.id === 'castka' ? { ...p, popis: 'Betrag (CHF)' } : p.id === 'ucel' ? { ...p, placeholder: 'z. B. Kaufpreis für Personenwagen VW Golf, Fahrgestellnummer …' } : p,
    ),
  })),
  odvozene: { castka_slovy: (d) => betragInFranken(d.castka) },
});

/** Quittung – Österreich (§ 1426 ABGB). Abgeleitet von der deutschen Vorlage. */
import type { Sablona } from '../typy';
import { quittung as de } from '../de/quittung';
import { ABGB } from './quellen';

export const quittungAT: Sablona = {
  ...de,
  kod: 'AT-QUITTUNG',
  zeme: 'at',
  podnadpis: 'Empfangsbestätigung über eine Barzahlung (§ 1426 ABGB)',
  paticka: de.paticka.replace('DE-QUITTUNG', 'AT-QUITTUNG'),
  kontrola: de.kontrola.map((t) => (t.includes('§ 368 BGB') ? 'Wer zahlt, kann eine Quittung verlangen (§ 1426 ABGB).' : t)),
  zdroje: [ABGB],
};

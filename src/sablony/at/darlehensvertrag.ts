/** Privater Darlehensvertrag – Österreich (§§ 983 ff. ABGB). Abgeleitet von der deutschen Vorlage. */
import type { Sablona } from '../typy';
import { darlehensvertrag as de } from '../de/darlehensvertrag';
import { ABGB } from './quellen';

export const darlehensvertragAT: Sablona = {
  ...de,
  kod: 'AT-DARLEHEN',
  zeme: 'at',
  podnadpis: 'privates Darlehen nach §§ 983 ff. Allgemeines bürgerliches Gesetzbuch (ABGB)',
  paticka: de.paticka.replace('DE-DARLEHEN', 'AT-DARLEHEN'),
  kontrola: de.kontrola.filter((t) => !t.includes('§ 488')).concat('Ohne vereinbarten Rückzahlungstermin gelten die Kündigungsregeln der §§ 983 ff. ABGB – vereinbaren Sie daher einen klaren Termin.'),
  zdroje: [ABGB],
  clanky: de.clanky.map((c) => ({
    ...c,
    odstavce: c.odstavce.map((o) => (typeof o === 'string' ? o.replace('Im Übrigen gelten die §§ 488 ff. BGB.', 'Im Übrigen gelten die §§ 983 ff. ABGB.') : o)),
  })),
};

/** Übergabeprotokoll Wohnung – Österreich (Inhalt wie DE, österreichische Quellen). */
import type { Sablona } from '../typy';
import { uebergabeprotokollWohnung as de } from '../de/uebergabeprotokoll-wohnung';
import { ABGB, MRG } from './quellen';

export const uebergabeprotokollWohnungAT: Sablona = {
  ...de,
  kod: 'AT-PROTOKOLL-WOHNUNG',
  zeme: 'at',
  paticka: 'Kostenlos erstellt · Vorlage AT-PROTOKOLL-WOHNUNG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  kontrola: de.kontrola.map((t) => t.replace('normale Abnutzung trägt der Vermieter; Schäden darüber hinaus der Mieter', 'gewöhnliche Abnützung trägt der Vermieter; Schäden darüber hinaus können von der Kaution abgezogen werden')),
  zdroje: [ABGB, MRG],
  prevzit: { ...de.prevzit!, kod: 'AT-MIETVERTRAG' },
};

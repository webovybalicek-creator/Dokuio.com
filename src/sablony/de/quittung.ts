/** Quittung über den Empfang von Bargeld – Deutschland (§ 368 BGB). */
import type { Sablona } from '../typy';
import { betragInWorten } from './zahlen';
import { BGB, BGB_368, TIPP_IDENTITAET, TIPP_BAR } from './quellen';

export const quittung: Sablona = {
  kod: 'DE-QUITTUNG',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Quittung',
  podnadpis: 'Empfangsbestätigung über eine Barzahlung (§ 368 BGB)',
  souborPdf: 'quittung',
  paticka: 'Kostenlos erstellt · Vorlage DE-QUITTUNG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Zahlende/r', vpravo: 'Empfänger/in' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'Quittung', g: 'Quittung', a: 'Quittung', l: 'Quittung' },
  coDal: ['Geld vor der Unterschrift zählen.', 'Jede Seite behält ein unterschriebenes Exemplar.'],
  kontrola: [
    'Betrag in Ziffern und Worten angeben – die Worte ergänzen wir.',
    'Zahlungsgrund konkret beschreiben (z. B. „Kaufpreis für Pkw, FIN …“).',
    'Wer zahlt, kann eine Quittung verlangen ([§ 368 BGB](https://www.gesetze-im-internet.de/bgb/__368.html)).',
    TIPP_IDENTITAET,
    TIPP_BAR,
  ],
  zdroje: [BGB, BGB_368],
  kroky: [
    {
      id: 'angaben',
      nazev: 'Wer und wie viel',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Empfänger/in – Name', napoveda: 'Wer das Geld erhält und quittiert.', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Anschrift Empfänger/in', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Zahlende/r – Name', sirka: 34 },
        { id: 'k_adresa', typ: 'text', popis: 'Anschrift Zahlende/r', sirka: 46 },
        { id: 'castka', typ: 'castka', popis: 'Betrag (€)', sirka: 12, polovina: true },
        { id: 'ucel', typ: 'text', popis: 'Zahlungsgrund', placeholder: 'z. B. Kaufpreis für Pkw VW Golf, FIN …', sirka: 56 },
        { id: 'misto', typ: 'text', popis: 'Ort', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovy: (d) => betragInWorten(d.castka) },
  clanky: [
    {
      nadpis: 'Quittung',
      odstavce: [
        'Ich, **{{p_jmeno}}**, wohnhaft {{p_adresa}},',
        'bestätige, heute von **{{k_jmeno}}**, wohnhaft {{k_adresa}}, den Betrag von **{{castka}}** (in Worten: {{castka_slovy}}) in bar erhalten zu haben.',
        'Zahlungsgrund: {{ucel}}',
      ],
    },
  ],
};

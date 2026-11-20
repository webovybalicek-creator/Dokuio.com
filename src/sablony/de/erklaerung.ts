/**
 * Erklärung (schriftliche Bestätigung / „Ehrenwörtliche Erklärung“) – Deutschland.
 * Allgemeine private Erklärung einer Person. KEINE eidesstattliche Versicherung (die ist nur gegenüber
 * einer dafür zuständigen Behörde oder einem Gericht möglich und hat eigene Formvorgaben).
 */
import type { Sablona } from '../typy';
import { TIPP_IDENTITAET } from './quellen';

export const erklaerung: Sablona = {
  kod: 'DE-ERKLAERUNG',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Erklärung',
  podnadpis: 'schriftliche Erklärung einer Privatperson',
  souborPdf: 'erklaerung',
  paticka: 'Kostenlos erstellt · Vorlage DE-ERKLAERUNG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für die Richtigkeit ist die erklärende Person verantwortlich',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Unterschrift', vpravo: 'Beglaubigung (nur falls verlangt)' },
  slovo: { n: 'Erklärung', g: 'Erklärung', a: 'Erklärung', l: 'Erklärung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: [
    'Ausdrucken und eigenhändig unterschreiben.',
    'Verlangt die Stelle eine öffentliche Beglaubigung der Unterschrift, erst vor der Behörde oder dem Notar unterschreiben.',
    'Eine Kopie für Ihre Unterlagen behalten.',
  ],
  kontrola: [
    'Nur erklären, was wahr ist und was Sie sicher wissen. Falsche Angaben gegenüber Behörden, Banken oder Vermietern können zivil- und strafrechtliche Folgen haben.',
    'Dies ist keine eidesstattliche Versicherung. Verlangt eine Behörde oder ein Gericht eine Versicherung an Eides statt, nutzen Sie deren Formular.',
    'Zuerst fragen, ob die Stelle ein eigenes Formular hat – dann dieses verwenden.',
    'Konkret formulieren: wer, was, seit wann (z. B. „dass ich seit dem 1. 1. 2025 in der Wohnung … wohne“).',
    TIPP_IDENTITAET,
  ],
  zdroje: [{ nazev: 'Bürgerliches Gesetzbuch (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/' }],

  kroky: [
    {
      id: 'person',
      nazev: 'Wer erklärt',
      pole: [
        { id: 'name', typ: 'text', popis: 'Vor- und Nachname', placeholder: 'z. B. Erika Musterfrau', sirka: 34, autocomplete: 'name' },
        { id: 'geburt', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'adresse', typ: 'text', popis: 'Anschrift', placeholder: 'z. B. Lindenstraße 5, 10115 Berlin', sirka: 46 },
      ],
    },
    {
      id: 'inhalt',
      nazev: 'Inhalt',
      pole: [
        { id: 'fuer', typ: 'text', popis: 'Für wen (optional)', placeholder: 'z. B. Schule, Bank, Vermieter', sirka: 46 },
        { id: 'zweck', typ: 'text', popis: 'Zweck (optional)', placeholder: 'z. B. Antrag auf Schulbefreiung', sirka: 46 },
        { id: 'text', typ: 'textarea', popis: 'Text der Erklärung', napoveda: 'Beginnen Sie direkt mit „dass …“. Die Einleitung ergänzen wir.', placeholder: 'dass ich seit dem 1. 1. 2025 in der Wohnung Lindenstraße 5 in Berlin wohne.', sirka: 70 },
        { id: 'misto', typ: 'text', popis: 'Ort', placeholder: 'z. B. Berlin', sirka: 18, polovina: true, vychozi: { obecZ: 'adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    { nadpis: 'Erklärende Person', odstavce: ['{{name}}, geboren am {{geburt}}, wohnhaft {{adresse}}'] },
    {
      nadpis: 'Erklärung',
      odstavce: [
        'Für: {{fuer}}. Zweck: {{zweck}}.',
        'Hiermit erkläre ich, {{text}}',
        'Ich versichere, dass meine Angaben wahr und vollständig sind.',
      ],
    },
  ],
};

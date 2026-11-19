/** Vollmacht (allgemein, mit bestimmtem Umfang) – Deutschland. §§ 164 ff., 167 BGB. */
import type { Sablona } from '../typy';
import { BGB_164, TIPP_IDENTITAET } from './quellen';

export const vollmacht: Sablona = {
  kod: 'DE-VOLLMACHT',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Vollmacht',
  podnadpis: 'nach §§ 164 ff. des Bürgerlichen Gesetzbuchs (BGB)',
  souborPdf: 'vollmacht',
  paticka: 'Kostenlos erstellt · Vorlage DE-VOLLMACHT v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Vollmachtgeber/in', vpravo: 'Bevollmächtigte/r' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'Vollmacht', g: 'Vollmacht', a: 'Vollmacht', l: 'Vollmacht' },
  coDal: [
    'Vollmacht ausdrucken und eigenhändig unterschreiben.',
    'Die bevollmächtigte Person legt die Vollmacht im Original zusammen mit ihrem Ausweis vor.',
  ],
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'Vollmacht läuft ab', datum: d.platnost_do }] : []),
  kontrola: [
    'Umfang konkret beschreiben – was genau darf die Person tun. Zu allgemeine Vollmachten werden oft abgelehnt.',
    'Für Grundstücke, Gesellschaften, Bankgeschäfte oder Behörden gelten oft besondere Formen (notarielle Beglaubigung, bankeigene Formulare). Vorher nachfragen.',
    'Eine Vorsorgevollmacht (für Krankheit oder Alter) ist etwas anderes – dafür gibt es Muster beim Bundesministerium der Justiz.',
    TIPP_IDENTITAET,
  ],
  zdroje: [BGB_164],
  kroky: [
    {
      id: 'personen',
      nazev: 'Wer wen bevollmächtigt',
      pole: [
        { id: 'z_jmeno', typ: 'text', popis: 'Vollmachtgeber/in – Vor- und Nachname', sirka: 34, autocomplete: 'name' },
        { id: 'z_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
        { id: 'm_jmeno', typ: 'text', popis: 'Bevollmächtigte/r – Vor- und Nachname', sirka: 34 },
        { id: 'm_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'm_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
      ],
    },
    {
      id: 'umfang',
      nazev: 'Umfang und Gültigkeit',
      pole: [
        { id: 'rozsah', typ: 'textarea', popis: 'Wofür gilt die Vollmacht?', napoveda: 'Konkret und verständlich.', placeholder: 'z. B. Abholung eines an mich adressierten Einschreibens in der Postfiliale Berlin-Mitte', sirka: 64 },
        { id: 'platnost_do', typ: 'datum', popis: 'Gültig bis (optional)', sirka: 14, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Ort', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Vollmacht',
      odstavce: [
        'Ich, **{{z_jmeno}}**, geboren am {{z_narozeni}}, wohnhaft {{z_adresa}} (Vollmachtgeber/in),',
        'bevollmächtige hiermit **{{m_jmeno}}**, geboren am {{m_narozeni}}, wohnhaft {{m_adresa}} (Bevollmächtigte/r),',
        'mich in folgender Angelegenheit zu vertreten: {{rozsah}}',
        'Die Vollmacht gilt bis {{platnost_do}}, ansonsten bis zur Erledigung der Angelegenheit oder bis zum Widerruf.',
      ],
    },
  ],
};

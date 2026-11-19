/**
 * Schenkungsvertrag (Handschenkung von Geld oder beweglicher Sache) – Deutschland. §§ 516 ff. BGB.
 * Nur sofort vollzogene Schenkungen: Ein Schenkungsversprechen für später braucht die notarielle Beurkundung (§ 518 Abs. 1 BGB),
 * der Formmangel wird erst durch Vollzug geheilt (§ 518 Abs. 2 BGB). Keine Grundstücke.
 */
import type { Sablona } from '../typy';
import { betragInWorten } from './zahlen';
import { BGB_516, BGB_518, ERBSTG_16, ERBSTG_30, TIPP_IDENTITAET } from './quellen';

export const schenkungsvertrag: Sablona = {
  kod: 'DE-SCHENKUNG',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Schenkungsvertrag',
  podnadpis: 'über eine sofort vollzogene Schenkung (§§ 516 ff. BGB)',
  souborPdf: 'schenkungsvertrag',
  paticka: 'Kostenlos erstellt · Vorlage DE-SCHENKUNG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Schenker/in', vpravo: 'Beschenkte/r' },
  slovo: { n: 'Vertrag', g: 'Vertrags', a: 'Vertrag', l: 'Vertrag' },
  coDal: [
    'Zweimal ausdrucken, beide unterschreiben beide Exemplare.',
    'Geld am besten am selben Tag überweisen, Verwendungszweck „Schenkung“.',
    'Schenkungen dem Finanzamt innerhalb von drei Monaten anzeigen (§ 30 ErbStG) – auch wenn wegen der Freibeträge keine Steuer anfällt.',
  ],
  kontrola: [
    'Diese Vorlage ist nur für Schenkungen, die sofort übergeben oder überwiesen werden. Ein Versprechen, später etwas zu schenken, muss notariell beurkundet werden ([§ 518 BGB](https://www.gesetze-im-internet.de/bgb/__518.html)).',
    'Für Grundstücke, Wohnungen und GmbH-Anteile ist immer ein Notar nötig.',
    'Freibeträge der Schenkungsteuer gelten je Schenker für 10 Jahre, z. B. Ehegatten 500.000 €, Kinder 400.000 €, Enkel 200.000 €, Geschwister und Nichtverwandte 20.000 € ([§ 16 ErbStG](https://www.gesetze-im-internet.de/erbstg_1974/__16.html)).',
    'Die Anzeige an das Finanzamt ist binnen drei Monaten fällig ([§ 30 ErbStG](https://www.gesetze-im-internet.de/erbstg_1974/__30.html)).',
    'Bei verschenkten Sachen bekannte Mängel angeben.',
    TIPP_IDENTITAET,
  ],
  zdroje: [BGB_516, BGB_518, ERBSTG_16, ERBSTG_30],
  kroky: [
    {
      id: 'parteien',
      nazev: 'Schenker/in und Beschenkte/r',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Schenker/in – Vor- und Nachname', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Beschenkte/r – Vor- und Nachname', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
        { id: 'vztah', typ: 'text', popis: 'Verwandtschaftsverhältnis (optional)', napoveda: 'Wichtig für die Freibeträge, z. B. Tochter, Neffe.', sirka: 20 },
      ],
    },
    {
      id: 'geschenk',
      nazev: 'Geschenk',
      pole: [
        {
          id: 'predmet',
          typ: 'volba',
          popis: 'Was wird geschenkt?',
          moznosti: [
            { hodnota: 'penize', popis: 'Geld' },
            { hodnota: 'vec', popis: 'Bewegliche Sache (z. B. Auto, Schmuck, Möbel)' },
          ],
        },
        { id: 'castka', typ: 'castka', popis: 'Betrag (€)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'predmet', je: 'penize' } },
        {
          id: 'prevod',
          typ: 'volba',
          popis: 'Wie wird das Geld übergeben?',
          zobrazitKdyz: { pole: 'predmet', je: 'penize' },
          moznosti: [
            { hodnota: 'hotove', popis: 'Bar bei der Unterschrift' },
            { hodnota: 'ucet', popis: 'Überweisung am Tag der Unterschrift' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'IBAN Beschenkte/r', sirka: 30, zobrazitKdyz: { pole: 'prevod', je: 'ucet' } },
        { id: 'vec_popis', typ: 'textarea', popis: 'Beschreibung der Sache', placeholder: 'z. B. Pkw VW Polo, FIN …, Kennzeichen …', sirka: 64, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
        { id: 'vady_popis', typ: 'textarea', popis: 'Bekannte Mängel (optional)', sirka: 64, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
        { id: 'misto', typ: 'text', popis: 'Ort', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovy: (d) => betragInWorten(d.castka) },
  clanky: [
    {
      nadpis: 'Vertragsparteien',
      vysvetleni: 'Wer schenkt und wer das Geschenk annimmt.',
      odstavce: [
        '**Schenker/in:** {{p_jmeno}}, geboren am {{p_narozeni}}, wohnhaft {{p_adresa}}',
        '**Beschenkte/r:** {{k_jmeno}}, geboren am {{k_narozeni}}, wohnhaft {{k_adresa}}, Verhältnis zum Schenker: {{vztah}}',
      ],
    },
    {
      nadpis: 'Gegenstand der Schenkung',
      vysvetleni: 'Was geschenkt wird.',
      odstavce: [
        {
          volba: 'predmet',
          uvodVzor: 'Gegenstand (eine Möglichkeit ankreuzen):',
          moznosti: {
            penize: 'Die schenkende Person schenkt der beschenkten Person den Geldbetrag von {{castka}} (in Worten: {{castka_slovy}}).',
            vec: 'Die schenkende Person schenkt der beschenkten Person folgende Sache: {{vec_popis}}. Ihr bekannte Mängel: {{vady_popis}}',
          },
        },
        'Die beschenkte Person nimmt die Schenkung an.',
      ],
    },
    {
      nadpis: 'Vollzug',
      vysvetleni: 'Das Geschenk wird sofort übergeben – deshalb ist kein Notar nötig.',
      odstavce: [
        {
          volba: 'prevod',
          kdyz: { pole: 'predmet', je: 'penize' },
          uvodVzor: 'Bei Geld (ankreuzen):',
          moznosti: {
            hotove: 'Der Betrag wurde bei Unterzeichnung bar übergeben; die beschenkte Person bestätigt den Empfang mit ihrer Unterschrift.',
            ucet: 'Der Betrag wird am Tag der Unterzeichnung auf das Konto IBAN {{ucet}} überwiesen.',
          },
        },
        {
          volba: 'predmet',
          kdyz: { pole: 'predmet', je: 'vec' },
          uvodVzor: 'Bei einer Sache:',
          moznosti: { vec: 'Die Sache wurde bei Unterzeichnung übergeben; das Eigentum ist mit der Übergabe übergegangen. Die beschenkte Person bestätigt den Empfang mit ihrer Unterschrift.' },
        },
      ],
    },
    {
      nadpis: 'Schlussbestimmungen',
      vysvetleni: 'Übliche Formalien.',
      odstavce: [
        'Im Übrigen gelten die §§ 516 ff. BGB, einschließlich der gesetzlichen Rückforderungs- und Widerrufsrechte der schenkenden Person.',
        'Eine anfallende Schenkungsteuer trägt die beschenkte Person. Den Parteien ist bekannt, dass die Schenkung dem Finanzamt binnen drei Monaten anzuzeigen ist (§ 30 ErbStG).',
        'Der Vertrag wird zweifach ausgefertigt; jede Partei erhält ein Exemplar.',
      ],
    },
  ],
};

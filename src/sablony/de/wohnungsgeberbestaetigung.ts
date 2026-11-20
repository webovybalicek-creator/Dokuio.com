/**
 * Wohnungsgeberbestätigung – Deutschland. § 19 Abs. 1 und 3 BMG (Inhalt), § 17 Abs. 1 BMG (Anmeldung binnen zwei Wochen).
 * Pflichtangaben: Name und Anschrift des Wohnungsgebers (bei Nichteigentümern auch Name des Eigentümers), Einzugsdatum,
 * Anschrift der Wohnung, Namen der meldepflichtigen Personen. Gefälligkeitsbescheinigung verboten (§ 19 Abs. 6 BMG).
 * Bei jeder Textänderung `verze` und `aktualizovano` erhöhen.
 */
import type { Sablona } from '../typy';
import { BMG_19 } from './quellen';

const BMG_17 = { nazev: '§ 17 BMG – Anmeldung und Abmeldung', url: 'https://www.gesetze-im-internet.de/bmg/__17.html' };

export const wohnungsgeberbestaetigung: Sablona = {
  kod: 'DE-WOHNUNGSGEBER',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Wohnungsgeberbestätigung',
  podnadpis: 'Bestätigung des Wohnungsgebers über den Einzug nach § 19 Bundesmeldegesetz (BMG)',
  souborPdf: 'wohnungsgeberbestaetigung',
  paticka: 'Kostenlos erstellt · Vorlage DE-WOHNUNGSGEBER v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Wohnungsgeber/in bzw. beauftragte Person', vpravo: 'einziehende Person (optional)' },
  slovo: { n: 'Bestätigung', g: 'Bestätigung', a: 'Bestätigung', l: 'Bestätigung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: [
    'Bestätigung unterschreiben und der einziehenden Person geben – auf Papier oder als Scan, je nach Meldebehörde.',
    'Die einziehende Person meldet sich innerhalb von zwei Wochen nach dem Einzug bei der Meldebehörde (Bürgeramt) an (§ 17 Abs. 1 BMG).',
    'Alternativ können Sie den Einzug direkt gegenüber der Meldebehörde elektronisch bestätigen, wenn Ihre Gemeinde das anbietet.',
  ],
  kontrola: [
    'Ausstellen darf nur der Wohnungsgeber – Eigentümer, Vermieter (auch Hauptmieter bei Untermiete) – oder eine von ihm beauftragte Person, z. B. die Hausverwaltung.',
    'Ist der Wohnungsgeber nicht Eigentümer (z. B. Hauptmieter oder Verwaltung), muss zusätzlich der Name des Eigentümers angegeben werden (§ 19 Abs. 3 BMG).',
    'Alle einziehenden meldepflichtigen Personen namentlich aufführen, auch Kinder.',
    'Eine Bestätigung ohne tatsächlichen Einzug („Scheinanmeldung“) ist verboten (§ 19 Abs. 6 BMG).',
    'Die Bestätigung muss rechtzeitig vorliegen: Die Anmeldung ist innerhalb von zwei Wochen nach dem Einzug fällig.',
  ],
  zdroje: [BMG_19, BMG_17],

  kroky: [
    {
      id: 'geber',
      nazev: 'Wohnungsgeber',
      popis: 'Wer die Wohnung zur Verfügung stellt – Vermieter, Eigentümer oder Hauptmieter.',
      pole: [
        { id: 'g_name', typ: 'text', popis: 'Name des Wohnungsgebers', napoveda: 'Person oder Firma (z. B. Hausverwaltung).', placeholder: 'z. B. Thomas Müller', sirka: 34, autocomplete: 'name' },
        { id: 'g_adresse', typ: 'text', popis: 'Anschrift des Wohnungsgebers', placeholder: 'z. B. Hauptstraße 12, 10115 Berlin', sirka: 46 },
        {
          id: 'eigentuemer_ist', typ: 'volba', popis: 'Ist der Wohnungsgeber Eigentümer der Wohnung?',
          napoveda: 'Wenn nicht, muss der Name des Eigentümers in die Bestätigung.',
          moznosti: [ { hodnota: 'ja', popis: 'Ja, Eigentümer' }, { hodnota: 'nein', popis: 'Nein (z. B. Hauptmieter, Verwaltung)' } ],
        },
        { id: 'eigentuemer', typ: 'text', popis: 'Name des Eigentümers', napoveda: 'Bei Eigentümergemeinschaft genügt die Bezeichnung, z. B. „WEG Lindenstraße 7“.', placeholder: 'z. B. Maria Schulz', sirka: 34, zobrazitKdyz: { pole: 'eigentuemer_ist', je: 'nein' } },
      ],
    },
    {
      id: 'wohnung',
      nazev: 'Wohnung und Einzug',
      pole: [
        { id: 'w_adresse', typ: 'text', popis: 'Anschrift der Wohnung', napoveda: 'Straße, Hausnummer, PLZ, Ort; bei Bedarf Geschoss oder Wohnungsnummer.', placeholder: 'z. B. Lindenstraße 7, 2. OG links, 10969 Berlin', sirka: 46 },
        { id: 'einzug', typ: 'datum', popis: 'Datum des Einzugs', napoveda: 'Tag, an dem die Person tatsächlich eingezogen ist.', sirka: 14, polovina: true },
        { id: 'personen', typ: 'textarea', popis: 'Einziehende Personen', napoveda: 'Vor- und Nachname jeder meldepflichtigen Person, je eine Zeile.', placeholder: 'z. B. Anna Schmidt\nLukas Schmidt', sirka: 64 },
        { id: 'misto', typ: 'text', popis: 'Ort', placeholder: 'z. B. Berlin', sirka: 18, polovina: true, vychozi: { obecZ: 'g_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heute vorausgefüllt.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Wohnungsgeber',
      vysvetleni: 'Wer den Einzug bestätigt.',
      odstavce: [
        'Name: {{g_name}}',
        'Anschrift: {{g_adresse}}',
        {
          volba: 'eigentuemer_ist',
          uvodVzor: 'Der Wohnungsgeber ist (bitte ankreuzen):',
          moznosti: {
            ja: 'Eigentümer/in der Wohnung.',
            nein: 'nicht Eigentümer/in. Name des Eigentümers: {{eigentuemer}}',
          },
        },
      ],
    },
    {
      nadpis: 'Bestätigung des Einzugs',
      vysvetleni: 'Die Pflichtangaben nach § 19 Abs. 3 BMG.',
      odstavce: [
        'Hiermit bestätige ich nach § 19 des Bundesmeldegesetzes, dass in die Wohnung {{w_adresse}} am {{einzug}} folgende Person(en) eingezogen ist/sind:',
        '{{personen}}',
        'Ich bestätige, dass die Wohnung tatsächlich bezogen wurde. Mir ist bekannt, dass es verboten ist, eine Wohnungsanschrift für eine Anmeldung zur Verfügung zu stellen, wenn ein tatsächlicher Bezug weder stattfindet noch beabsichtigt ist (§ 19 Abs. 6 BMG).',
      ],
    },
  ],
};

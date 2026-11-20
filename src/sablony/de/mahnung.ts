/**
 * Mahnung (Zahlungserinnerung mit Fristsetzung) – Deutschland.
 * § 286 BGB (Verzug durch Mahnung nach Fälligkeit; entbehrlich bei kalendermäßiger Fälligkeit; 30-Tage-Regel),
 * § 288 BGB (Verzugszinsen 5 / 9 Prozentpunkte über Basiszinssatz, 40-€-Pauschale gegenüber Nicht-Verbrauchern).
 */
import type { Sablona } from '../typy';
import { betragInWorten } from './zahlen';
import { naDatum } from '../terminy';
import { BGB_286, BGB_288, BUNDESBANK_BASISZINS } from './quellen';

export const mahnung: Sablona = {
  kod: 'DE-MAHNUNG',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Mahnung',
  podnadpis: 'Zahlungsaufforderung nach §§ 286, 288 des Bürgerlichen Gesetzbuchs (BGB)',
  souborPdf: 'mahnung',
  paticka: 'Kostenlos erstellt · Vorlage DE-MAHNUNG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt ist der Absender verantwortlich',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Gläubiger/in', vpravo: 'erhalten (bei persönlicher Übergabe)' },
  slovo: { n: 'Mahnung', g: 'Mahnung', a: 'Mahnung', l: 'Mahnung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => (naDatum(d.zahlen_bis) ? [{ nazev: 'Zahlungsfrist aus der Mahnung endet', datum: String(d.zahlen_bis), popis: 'Zahlungseingang prüfen. Danach ggf. gerichtliches Mahnverfahren (online-mahnantrag.de) oder Klage.' }] : []),
  coDal: [
    'Unterschreiben und so versenden, dass Sie den Zugang beweisen können – am besten per Einschreiben mit Rückschein oder per Bote.',
    'Eine Kopie und den Einlieferungsbeleg aufbewahren.',
    'Zahlt die Gegenseite nicht, können Sie das gerichtliche Mahnverfahren beantragen oder klagen.',
  ],
  kontrola: [
    'Eine Mahnung wirkt erst nach Fälligkeit der Forderung ([§ 286 Abs. 1 BGB](https://www.gesetze-im-internet.de/bgb/__286.html)). War ein fester Kalendertermin vereinbart, ist die Schuldnerin/der Schuldner auch ohne Mahnung im Verzug.',
    'Bei Geldforderungen tritt Verzug spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung ein – gegenüber Verbrauchern nur, wenn die Rechnung darauf hingewiesen hat.',
    'Verzugszinsen: 5 Prozentpunkte über dem Basiszinssatz, ohne Verbraucherbeteiligung 9 Prozentpunkte; gegenüber Nicht-Verbrauchern zusätzlich 40 € Pauschale ([§ 288 BGB](https://www.gesetze-im-internet.de/bgb/__288.html)).',
    'Forderung genau bezeichnen: Rechnungsnummer oder Vertrag, Datum, Betrag.',
    'Zugang beweisbar machen (Einschreiben mit Rückschein, Bote) – im Streit müssen Sie ihn nachweisen.',
    'Nur mit rechtlich zulässigen Schritten drohen (Mahnverfahren, Klage) – keine Bloßstellung oder sonstigen Druck.',
  ],
  zdroje: [BGB_286, BGB_288, BUNDESBANK_BASISZINS],

  kroky: [
    {
      id: 'parteien',
      nazev: 'Gläubiger und Schuldner',
      pole: [
        { id: 'k_name', typ: 'text', popis: 'Gläubiger/in – Name oder Firma', placeholder: 'z. B. Max Mustermann', sirka: 34, autocomplete: 'name' },
        { id: 'k_adresse', typ: 'text', popis: 'Anschrift Gläubiger/in', placeholder: 'z. B. Lindenstraße 5, 10115 Berlin', sirka: 46 },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefon oder E-Mail (optional)', sirka: 30 },
        { id: 'p_name', typ: 'text', popis: 'Schuldner/in – Name oder Firma', placeholder: 'z. B. Erika Musterfrau', sirka: 34 },
        { id: 'p_adresse', typ: 'text', popis: 'Anschrift Schuldner/in', placeholder: 'z. B. Hauptstraße 1, 80331 München', sirka: 46 },
        {
          id: 'p_typ',
          typ: 'volba',
          popis: 'Wer ist beteiligt?',
          napoveda: 'Davon hängen Zinssatz und 40-€-Pauschale ab (§ 288 BGB).',
          moznosti: [
            { hodnota: 'verbraucher', popis: 'Mindestens eine Seite ist Privatperson' },
            { hodnota: 'b2b', popis: 'Beide Seiten sind Unternehmen / Selbstständige' },
          ],
        },
      ],
    },
    {
      id: 'forderung',
      nazev: 'Forderung',
      pole: [
        { id: 'betrag', typ: 'castka', popis: 'Offener Betrag (€)', placeholder: 'z. B. 850', sirka: 14, polovina: true },
        { id: 'faellig', typ: 'datum', popis: 'Fällig seit', sirka: 14, polovina: true },
        { id: 'grund', typ: 'text', popis: 'Grund der Forderung', napoveda: 'Rechnung oder Vertrag mit Nummer und Datum.', placeholder: 'z. B. Rechnung Nr. 2026-041 vom 1. 10. 2026', sirka: 56 },
        {
          id: 'stufe',
          typ: 'volba',
          popis: 'Welche Mahnung?',
          moznosti: [
            { hodnota: 'erste', popis: 'Erste Mahnung' },
            { hodnota: 'letzte', popis: 'Letzte Mahnung vor gerichtlichen Schritten' },
          ],
        },
        {
          id: 'zinsen',
          typ: 'volba',
          popis: 'Verzugszinsen verlangen?',
          moznosti: [
            { hodnota: 'ja', popis: 'Ja, gesetzliche Verzugszinsen' },
            { hodnota: 'nein', popis: 'Nein' },
          ],
        },
      ],
    },
    {
      id: 'zahlung',
      nazev: 'Frist und Zahlung',
      pole: [
        { id: 'zahlen_bis', typ: 'datum', popis: 'Zahlung bis spätestens', napoveda: 'Üblich sind 7–14 Tage.', sirka: 14, polovina: true },
        { id: 'iban', typ: 'text', popis: 'IBAN', placeholder: 'DE12 3456 7890 1234 5678 90', sirka: 30 },
        { id: 'verwendung', typ: 'text', popis: 'Verwendungszweck', placeholder: 'z. B. Rechnung 2026-041', sirka: 24, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Ort', placeholder: 'z. B. Berlin', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    betrag_worte: (d) => betragInWorten(d.betrag),
  },

  clanky: [
    {
      nadpis: 'Absender und Empfänger',
      odstavce: [
        '**Gläubiger/in:** {{k_name}}, {{k_adresse}}, Kontakt {{k_kontakt}}',
        '**Schuldner/in:** {{p_name}}, {{p_adresse}}',
      ],
    },
    {
      nadpis: 'Zahlungsaufforderung',
      vysvetleni: 'Was offen ist, seit wann, und bis wann gezahlt werden soll.',
      odstavce: [
        {
          volba: 'stufe',
          uvodVzor: 'Betreff (bitte eines ankreuzen):',
          moznosti: {
            erste: '**Betreff: Mahnung – {{grund}}**',
            letzte: '**Betreff: Letzte Mahnung vor gerichtlichen Schritten – {{grund}}**',
          },
        },
        'Sehr geehrte Damen und Herren,',
        'aus {{grund}} ist ein Betrag von {{betrag}} (in Worten: {{betrag_worte}}) seit dem {{faellig}} fällig. Ein Zahlungseingang ist bisher nicht festzustellen.',
        'Ich fordere Sie auf, den offenen Betrag bis spätestens {{zahlen_bis}} auf folgendes Konto zu überweisen: IBAN {{iban}}, Verwendungszweck {{verwendung}}.',
        {
          volba: 'zinsen',
          uvodVzor: 'Verzugszinsen (bitte eines ankreuzen):',
          moznosti: {
            ja: 'Mit Zugang dieser Mahnung befinden Sie sich in Verzug, sofern Verzug nicht bereits eingetreten ist. Ich behalte mir vor, Verzugszinsen in gesetzlicher Höhe (§ 288 BGB) sowie weiteren Verzugsschaden geltend zu machen.',
            nein: 'Bei fristgerechter Zahlung verzichte ich auf die Geltendmachung von Verzugszinsen.',
          },
        },
        {
          volba: 'p_typ',
          kdyz: { pole: 'zinsen', je: 'ja' },
          uvodVzor: 'Zinssatz (bitte eines ankreuzen):',
          moznosti: {
            verbraucher: 'Der Verzugszinssatz beträgt jährlich fünf Prozentpunkte über dem Basiszinssatz (§ 288 Abs. 1 BGB).',
            b2b: 'Der Verzugszinssatz beträgt jährlich neun Prozentpunkte über dem Basiszinssatz (§ 288 Abs. 2 BGB). Zusätzlich mache ich die Pauschale von 40 € nach § 288 Abs. 5 BGB geltend.',
          },
        },
        {
          volba: 'stufe',
          uvodVzor: 'Folgen (bitte eines ankreuzen):',
          moznosti: {
            erste: 'Sollten Sie die Zahlung bereits veranlasst haben, betrachten Sie dieses Schreiben bitte als gegenstandslos.',
            letzte: 'Geht die Zahlung nicht fristgerecht ein, werde ich ohne weitere Ankündigung das gerichtliche Mahnverfahren einleiten oder Klage erheben. Die dadurch entstehenden Kosten hätten Sie zu tragen.',
          },
        },
        'Mit freundlichen Grüßen',
      ],
    },
  ],
};

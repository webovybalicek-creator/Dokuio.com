/**
 * Werkvertrag – Deutschland. §§ 631 ff. BGB: Herstellung des Werks gegen Vergütung, Abnahme (§ 640:
 * Pflicht, fiktive Abnahme, Vorbehalt bekannter Mängel), Fälligkeit bei Abnahme (§ 641),
 * Verjährung der Mängelansprüche 2 Jahre / Bauwerk 5 Jahre ab Abnahme (§ 634a).
 * Für Bauverträge (§§ 650a ff.) und Verbraucherbauverträge nicht gedacht.
 */
import type { Sablona } from '../typy';
import { betragInWorten } from './zahlen';
import { naDatum } from '../terminy';
import { BGB_631, BGB_640, BGB_634A, TIPP_IDENTITAET } from './quellen';

export const werkvertrag: Sablona = {
  kod: 'DE-WERKVERTRAG',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Werkvertrag',
  podnadpis: 'nach §§ 631 ff. des Bürgerlichen Gesetzbuchs (BGB)',
  souborPdf: 'werkvertrag',
  paticka: 'Kostenlos erstellt · Vorlage DE-WERKVERTRAG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Besteller/in', vpravo: 'Unternehmer/in' },
  slovo: { n: 'Werkvertrag', g: 'Werkvertrags', a: 'Werkvertrag', l: 'Werkvertrag' },
  pripominky: (d) => [
    ...(naDatum(d.beginn) ? [{ nazev: 'Beginn der Arbeiten', datum: String(d.beginn) }] : []),
    ...(naDatum(d.fertig) ? [{ nazev: 'Fertigstellung und Abnahme', datum: String(d.fertig), popis: 'Werk prüfen und Abnahmeprotokoll mit allen bekannten Mängeln erstellen.' }] : []),
  ],
  coDal: [
    'Zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.',
    'Anzahlungen überweisen oder quittieren lassen.',
    'Zusatzarbeiten und Preisänderungen schriftlich vereinbaren (E-Mail genügt).',
    'Bei der Abnahme das Werk prüfen und bekannte Mängel im Protokoll vorbehalten – sonst gehen Rechte verloren.',
  ],
  kontrola: [
    'Leistung so genau wie möglich beschreiben (Umfang, Material, Maße; Angebot als Anlage beifügen).',
    'Die Vergütung wird mit der Abnahme fällig. Wer ein Werk mit bekanntem Mangel abnimmt, muss sich die Rechte ausdrücklich vorbehalten ([§ 640 Abs. 3 BGB](https://www.gesetze-im-internet.de/bgb/__640.html)).',
    'Setzt der Unternehmer nach Fertigstellung eine Frist zur Abnahme und wird nicht unter Angabe eines Mangels verweigert, gilt das Werk als abgenommen – gegenüber Verbrauchern nur nach Hinweis in Textform (§ 640 Abs. 2 BGB).',
    'Mängelansprüche verjähren in 2 Jahren, bei Bauwerken in 5 Jahren ab Abnahme ([§ 634a BGB](https://www.gesetze-im-internet.de/bgb/__634a.html)).',
    'Für den Bau eines Hauses oder erhebliche Umbauten gelten die Sonderregeln zum (Verbraucher-)Bauvertrag – dafür ist diese Vorlage nicht gedacht.',
    TIPP_IDENTITAET,
  ],
  zdroje: [BGB_631, BGB_640, BGB_634A],

  kroky: [
    {
      id: 'parteien',
      nazev: 'Besteller und Unternehmer',
      popis: 'Der Besteller gibt das Werk in Auftrag und zahlt. Der Unternehmer (z. B. Handwerker) stellt es her.',
      pole: [
        { id: 'b_name', typ: 'text', popis: 'Besteller/in – Name oder Firma', placeholder: 'z. B. Max Mustermann', sirka: 34, autocomplete: 'name' },
        { id: 'b_adresse', typ: 'text', popis: 'Anschrift Besteller/in', placeholder: 'z. B. Lindenstraße 5, 10115 Berlin', sirka: 46 },
        { id: 'u_name', typ: 'text', popis: 'Unternehmer/in – Name oder Firma', placeholder: 'z. B. Malerbetrieb Schmidt', sirka: 34 },
        { id: 'u_adresse', typ: 'text', popis: 'Anschrift Unternehmer/in', placeholder: 'z. B. Hauptstraße 1, 10117 Berlin', sirka: 46 },
      ],
    },
    {
      id: 'werk',
      nazev: 'Werk',
      pole: [
        { id: 'leistung', typ: 'textarea', popis: 'Beschreibung des Werks', napoveda: 'Umfang, Material, Maße. Ein Angebot können Sie als Anlage beifügen.', placeholder: 'z. B. Streichen von Wohnzimmer und Flur (ca. 60 m² Wandfläche), zweimal deckend weiß, inkl. Abkleben, laut Angebot vom 3. 11. 2026', sirka: 70 },
        { id: 'ort', typ: 'text', popis: 'Ort der Ausführung', placeholder: 'z. B. Lindenstraße 5, 10115 Berlin, 2. OG', sirka: 46 },
        {
          id: 'material',
          typ: 'volba',
          popis: 'Wer stellt das Material?',
          moznosti: [
            { hodnota: 'unternehmer', popis: 'Unternehmer/in (im Preis enthalten)' },
            { hodnota: 'besteller', popis: 'Besteller/in' },
          ],
        },
        { id: 'beginn', typ: 'datum', popis: 'Beginn', sirka: 14, polovina: true },
        { id: 'fertig', typ: 'datum', popis: 'Fertigstellung', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'preis',
      nazev: 'Vergütung',
      pole: [
        {
          id: 'preisart',
          typ: 'volba',
          popis: 'Art der Vergütung',
          moznosti: [
            { hodnota: 'pauschal', popis: 'Pauschalpreis (fest)' },
            { hodnota: 'anschlag', popis: 'Nach Kostenanschlag (unverbindlich)' },
          ],
        },
        { id: 'preis', typ: 'castka', popis: 'Vergütung (€, brutto)', placeholder: 'z. B. 1800', sirka: 14, polovina: true },
        {
          id: 'anzahlung_ja',
          typ: 'volba',
          popis: 'Anzahlung',
          moznosti: [
            { hodnota: 'nein', popis: 'Keine – Zahlung nach Abnahme' },
            { hodnota: 'ja', popis: 'Anzahlung, Rest nach Abnahme' },
          ],
        },
        { id: 'anzahlung', typ: 'castka', popis: 'Höhe der Anzahlung (€)', placeholder: 'z. B. 500', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'anzahlung_ja', je: 'ja' } },
        { id: 'zahlungsziel', typ: 'cislo', popis: 'Zahlungsziel nach Abnahme (Tage)', placeholder: 'z. B. 14', sirka: 4, polovina: true },
        { id: 'iban', typ: 'text', popis: 'IBAN Unternehmer/in (optional)', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Ort der Unterschrift', placeholder: 'z. B. Berlin', sirka: 18, polovina: true, vychozi: { obecZ: 'b_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    preis_worte: (d) => betragInWorten(d.preis),
  },

  clanky: [
    {
      nadpis: 'Vertragsparteien',
      odstavce: [
        '**Besteller/in:** {{b_name}}, {{b_adresse}} (im Folgenden „Besteller“)',
        '**Unternehmer/in:** {{u_name}}, {{u_adresse}} (im Folgenden „Unternehmer“)',
      ],
    },
    {
      nadpis: 'Vertragsgegenstand',
      vysvetleni: 'Der Unternehmer schuldet ein fertiges, mangelfreies Werk – nicht nur Arbeitszeit.',
      odstavce: [
        'Der Unternehmer verpflichtet sich zur Herstellung folgenden Werks: {{leistung}}.',
        'Ort der Ausführung: {{ort}}.',
        {
          volba: 'material',
          uvodVzor: 'Material (bitte eines ankreuzen):',
          moznosti: {
            unternehmer: 'Das erforderliche Material stellt der Unternehmer; es ist in der Vergütung enthalten.',
            besteller: 'Das erforderliche Material stellt der Besteller. Der Unternehmer prüft es vor der Verwendung und weist auf ungeeignetes Material unverzüglich hin.',
          },
        },
      ],
    },
    {
      nadpis: 'Ausführungszeit',
      odstavce: [
        'Die Arbeiten beginnen am {{beginn}}. Das Werk wird bis spätestens {{fertig}} fertiggestellt.',
        'Der Besteller ermöglicht den Zugang zum Ausführungsort zu den üblichen Arbeitszeiten.',
      ],
    },
    {
      nadpis: 'Vergütung und Zahlung',
      odstavce: [
        {
          volba: 'preisart',
          uvodVzor: 'Vergütung (bitte eines ankreuzen):',
          moznosti: {
            pauschal: 'Die Parteien vereinbaren einen Pauschalpreis von {{preis}} (in Worten: {{preis_worte}}) einschließlich Umsatzsteuer.',
            anschlag: 'Die Vergütung richtet sich nach dem Kostenanschlag über {{preis}} (in Worten: {{preis_worte}}) einschließlich Umsatzsteuer. Der Kostenanschlag ist unverbindlich. Zeichnet sich eine wesentliche Überschreitung ab, zeigt der Unternehmer dies dem Besteller unverzüglich an.',
          },
        },
        {
          volba: 'anzahlung_ja',
          uvodVzor: 'Anzahlung (bitte eines ankreuzen):',
          moznosti: {
            nein: 'Die Vergütung ist bei Abnahme des Werks fällig.',
            ja: 'Der Besteller leistet bei Vertragsschluss eine Anzahlung von {{anzahlung}}. Der Rest ist bei Abnahme des Werks fällig.',
          },
        },
        'Zahlung binnen {{zahlungsziel}} Tagen nach Abnahme auf das Konto IBAN {{iban}} oder bar gegen Quittung.',
        'Zusätzliche Leistungen führt der Unternehmer nur nach schriftlicher Vereinbarung über Umfang und Preis aus.',
      ],
    },
    {
      nadpis: 'Abnahme und Mängel',
      vysvetleni: 'Bei der Abnahme wird das Werk geprüft. Bekannte Mängel müssen vorbehalten werden.',
      odstavce: [
        'Nach Fertigstellung nimmt der Besteller das Werk ab. Über die Abnahme wird ein Protokoll erstellt, in dem festgestellte Mängel und Fristen zu ihrer Beseitigung festgehalten werden. Wegen unwesentlicher Mängel kann die Abnahme nicht verweigert werden.',
        'Nimmt der Besteller ein Werk trotz Kenntnis eines Mangels ab, behält er seine Mängelrechte nur, wenn er sie bei der Abnahme vorbehält.',
        'Es gelten die gesetzlichen Mängelrechte (§§ 634 ff. BGB). Die Ansprüche verjähren nach § 634a BGB.',
      ],
    },
    {
      nadpis: 'Schlussbestimmungen',
      odstavce: [
        'Änderungen und Ergänzungen dieses Vertrags bedürfen der Textform. Im Übrigen gelten die Vorschriften des BGB.',
        'Der Vertrag wird zweifach ausgefertigt; jede Partei erhält ein Exemplar.',
      ],
    },
  ],
};

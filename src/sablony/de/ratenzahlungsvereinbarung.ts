/**
 * Ratenzahlungsvereinbarung (Teilzahlungsvereinbarung) – Deutschland.
 * Vertrag zwischen Gläubiger/in und Schuldner/in über eine bestehende Forderung: Stundung gegen Raten,
 * Verfallklausel (Wegfall der Ratenzahlung), optional Anerkenntnis der Forderung (Neubeginn der Verjährung, § 212 BGB).
 * Ohne Ratenvereinbarung muss der Gläubiger Teilleistungen nicht annehmen (§ 266 BGB).
 * Abgrenzung: Schuldanerkenntnis (schuldanerkenntnis.ts) = einseitige Erklärung der Schuldnerin/des Schuldners.
 * Für AT/CH über nahrad.ts: Gesetzeszitate stehen in `kontrola`, `zdroje`, `napoveda` und dem Anerkenntnis-Satz.
 * Bei jeder Textänderung `verze` und `aktualizovano` erhöhen.
 */
import type { Sablona } from '../typy';
import { betragInWorten } from './zahlen';
import { cislo, isoDatum, pripominkySplatek, splatky, souhrnSplatek } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';
import { BGB_266, BGB_212, BGB_286, BGB_506, BGB_781, TIPP_IDENTITAET } from './quellen';

const eur = (n: number) => `${formatCislo(String(n))} €`;

export const ratenzahlungsvereinbarung: Sablona = {
  kod: 'DE-RATENZAHLUNG',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Ratenzahlungsvereinbarung',
  podnadpis: 'Vereinbarung über die Zahlung einer offenen Forderung in Raten',
  souborPdf: 'ratenzahlungsvereinbarung',
  paticka: 'Kostenlos erstellt · Vorlage DE-RATENZAHLUNG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'ort',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Gläubiger/in', vpravo: 'Schuldner/in' },
  slovo: { n: 'Ratenzahlungsvereinbarung', g: 'Ratenzahlungsvereinbarung', a: 'Ratenzahlungsvereinbarung', l: 'Ratenzahlungsvereinbarung' },
  prilohy: (d) => {
    const s = splatky(d);
    if (!s.length) return [];
    return [
      {
        nadpis: 'Anlage 1 · Ratenplan',
        popis: `Insgesamt ${eur(cislo(d.castka))} in ${s.length} Monatsraten, jeweils fällig am ${Math.round(cislo(d.splatka_den))}. eines Monats.`,
        souhrn: souhrnSplatek(s, eur(cislo(d.castka)), d),
        hlavicka: ['Rate', 'Fällig am', 'Betrag', 'Restbetrag'],
        radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum)), eur(x.castka), eur(x.zbyva)]),
        vpravo: [2, 3],
        poznamka: 'Der Plan folgt den vereinbarten Raten ohne Zinsen; bei Widersprüchen gilt der Text der Vereinbarung.',
      },
    ];
  },
  pripominky: (d) => pripominkySplatek(d, 'Rate', '€', { celkem: (n) => `insgesamt ${n} Raten`, posledni: 'letzte' }),
  coDal: [
    'Zweimal ausdrucken; beide Seiten unterschreiben beide Exemplare.',
    'Raten am besten per Dauerauftrag überweisen – der Kontoauszug ist der Zahlungsnachweis. Barzahlungen quittieren lassen.',
    'Gläubiger/in: Zahlungseingänge im Ratenplan abhaken. Bei Verzug schriftlich mahnen und auf die Verfallklausel hinweisen.',
  ],
  kontrola: [
    'Ohne Vereinbarung muss die Gläubigerin/der Gläubiger keine Teilzahlungen annehmen ([§ 266 BGB](https://www.gesetze-im-internet.de/bgb/__266.html)) – die Ratenzahlungsvereinbarung regelt das verbindlich.',
    'Forderung genau bezeichnen: Grund (Rechnung, Darlehen, Schaden), Datum und den heute noch offenen Betrag.',
    'Erkennt die Schuldnerin/der Schuldner die Forderung an, beginnt die Verjährung neu ([§ 212 BGB](https://www.gesetze-im-internet.de/bgb/__212.html)). Auch jede Ratenzahlung ist ein solches Anerkenntnis.',
    'Verfallklausel: Gerät die Schuldnerin/der Schuldner in Verzug, wird der Rest auf einmal fällig. Die Bedingung (z. B. zwei Raten) klar festlegen.',
    'Ist die Gläubigerin ein Unternehmen, die Schuldnerin eine Verbraucherin und werden Zinsen oder Gebühren verlangt, können die Vorschriften über Verbraucherkredite gelten ([§ 506 BGB](https://www.gesetze-im-internet.de/bgb/__506.html)) – dafür ist diese Vorlage nicht gedacht. Eine unentgeltliche Stundung fällt nicht darunter.',
    'Soll nur die schuldende Person die Schuld einseitig bestätigen, genügt ein Schuldanerkenntnis.',
    TIPP_IDENTITAET,
  ],
  zdroje: [BGB_266, BGB_212, BGB_286, BGB_781, BGB_506],
  kroky: [
    {
      id: 'parteien',
      nazev: 'Gläubiger/in und Schuldner/in',
      popis: 'Gläubiger/in bekommt das Geld, Schuldner/in zahlt.',
      pole: [
        { id: 'g_name', typ: 'text', popis: 'Gläubiger/in – Name bzw. Firma', napoveda: 'Wem das Geld zusteht.', placeholder: 'z. B. Thomas Müller', sirka: 34, autocomplete: 'name' },
        { id: 'g_adresse', typ: 'text', popis: 'Anschrift Gläubiger/in', napoveda: 'Wohn- oder Geschäftsanschrift.', placeholder: 'z. B. Hauptstraße 12, 10115 Berlin', sirka: 46 },
        { id: 's_name', typ: 'text', popis: 'Schuldner/in – Vor- und Nachname', napoveda: 'Wer zahlt – wie im Personalausweis.', placeholder: 'z. B. Anna Schmidt', sirka: 34 },
        { id: 's_geburt', typ: 'datum', popis: 'Geburtsdatum Schuldner/in', napoveda: 'Hilft, die Person eindeutig zu bestimmen.', sirka: 14, polovina: true },
        { id: 's_adresse', typ: 'text', popis: 'Anschrift Schuldner/in', napoveda: 'Aktuelle Wohnanschrift.', placeholder: 'z. B. Lindenstraße 7, 10115 Berlin', sirka: 46 },
      ],
    },
    {
      id: 'forderung',
      nazev: 'Forderung',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Offener Betrag (€)', napoveda: 'Der heute noch offene Gesamtbetrag. Die Worte ergänzen wir.', placeholder: 'z. B. 2400', sirka: 14, polovina: true },
        { id: 'grund', typ: 'text', popis: 'Grund der Forderung', napoveda: 'Woraus die Schuld stammt – mit Datum oder Rechnungsnummer.', placeholder: 'z. B. Rechnung Nr. 2026-117 vom 3. 9. 2026 über Malerarbeiten', sirka: 56 },
        {
          id: 'anerkenntnis',
          typ: 'volba',
          popis: 'Erkennt die Schuldnerin/der Schuldner die Forderung an?',
          napoveda: 'Empfohlen für die Gläubigerseite: Die Forderung ist dann unstreitig und die Verjährung beginnt neu (§ 212 BGB).',
          moznosti: [
            { hodnota: 'ja', popis: 'Ja, Forderung wird dem Grund und der Höhe nach anerkannt' },
            { hodnota: 'nein', popis: 'Nein, nur Ratenzahlung vereinbaren' },
          ],
        },
      ],
    },
    {
      id: 'raten',
      nazev: 'Raten',
      popis: 'Aus Betrag, Rate und erstem Termin erstellen wir den Ratenplan als Anlage.',
      pole: [
        { id: 'splatka', typ: 'castka', popis: 'Monatsrate (€)', napoveda: 'Die letzte Rate kann niedriger sein.', placeholder: 'z. B. 200', sirka: 12, polovina: true },
        { id: 'splatka_den', typ: 'cislo', popis: 'Fällig am (Tag im Monat)', napoveda: 'Z. B. 1 oder 15. In kürzeren Monaten gilt der letzte Tag.', placeholder: 'z. B. 1', sirka: 4, polovina: true },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Monat der ersten Rate', napoveda: 'Ein beliebiger Tag in dem Monat, in dem die erste Rate fällig ist.', sirka: 14, polovina: true },
        { id: 'iban', typ: 'text', popis: 'IBAN Gläubiger/in', napoveda: 'Konto, auf das die Raten gehen.', placeholder: 'DE00 0000 0000 0000 0000 00', sirka: 30 },
        {
          id: 'verfall',
          typ: 'volba',
          popis: 'Wann fällt die Ratenzahlung weg? (Verfallklausel)',
          napoveda: 'Bei Verzug wird der Restbetrag auf einmal fällig. Zwei Raten sind eine übliche, faire Schwelle.',
          moznosti: [
            { hodnota: 'zwei', popis: 'Bei Verzug mit zwei aufeinanderfolgenden Raten' },
            { hodnota: 'eine', popis: 'Bei Verzug mit einer Rate um mehr als eine bestimmte Zahl von Tagen' },
            { hodnota: 'keine', popis: 'Keine Verfallklausel' },
          ],
        },
        { id: 'verfall_tage', typ: 'cislo', popis: 'Tage Verzug', napoveda: 'Z. B. 14 Tage nach Fälligkeit.', placeholder: 'z. B. 14', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'verfall', je: 'eine' } },
        { id: 'ort', typ: 'text', popis: 'Ort', napoveda: 'Ort der Unterschrift.', placeholder: 'z. B. Berlin', sirka: 18, polovina: true, vychozi: { obecZ: 'g_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heutiges Datum vorausgefüllt.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: {
    castka_slovy: (d) => betragInWorten(d.castka),
  },
  clanky: [
    {
      nadpis: 'Parteien',
      vysvetleni: 'Wer Geld bekommt und wer zahlt.',
      odstavce: [
        '**Gläubiger/in:** {{g_name}}, {{g_adresse}}',
        '**Schuldner/in:** {{s_name}}, geboren am {{s_geburt}}, wohnhaft {{s_adresse}}',
      ],
    },
    {
      nadpis: 'Forderung',
      vysvetleni: 'Wofür und wie viel geschuldet wird.',
      odstavce: [
        'Die Gläubigerin/der Gläubiger hat gegen die Schuldnerin/den Schuldner eine Forderung aus folgendem Grund: {{grund}}. Der offene Betrag beträgt heute **{{castka}}** (in Worten: {{castka_slovy}}).',
        {
          volba: 'anerkenntnis',
          uvodVzor: 'Anerkenntnis (bitte ankreuzen):',
          moznosti: {
            ja: 'Die Schuldnerin/der Schuldner erkennt diese Forderung dem Grund und der Höhe nach an.',
            nein: 'Die Parteien vereinbaren lediglich die Zahlungsweise; ein Anerkenntnis ist damit nicht verbunden.',
          },
        },
      ],
    },
    {
      nadpis: 'Ratenzahlung',
      vysvetleni: 'Wie viel monatlich, ab wann und wohin gezahlt wird.',
      odstavce: [
        'Die Gläubigerin/der Gläubiger ist einverstanden, dass der Betrag in Monatsraten von {{splatka}} gezahlt wird, fällig jeweils am {{splatka_den}}. eines Monats, beginnend mit dem Monat der ersten Rate laut Ratenplan (Anlage 1), bis zur vollständigen Zahlung. Die letzte Rate kann niedriger sein.',
        'Die Zahlungen erfolgen auf das Konto IBAN {{iban}} oder bar gegen Quittung. Maßgeblich ist der Eingang bei der Gläubigerin/dem Gläubiger. Höhere Raten und eine vorzeitige Zahlung des Restbetrags sind jederzeit möglich.',
        'Solange die Raten vereinbarungsgemäß gezahlt werden, ist die Forderung gestundet; die Gläubigerin/der Gläubiger wird sie in dieser Zeit nicht gerichtlich geltend machen. Zinsen und Gebühren werden für die Stundung nicht berechnet.',
      ],
    },
    {
      nadpis: 'Wegfall der Ratenzahlung',
      vysvetleni: 'Was passiert, wenn Raten ausbleiben.',
      odstavce: [
        {
          volba: 'verfall',
          uvodVzor: 'Verfallklausel (bitte ankreuzen):',
          moznosti: {
            zwei: 'Gerät die Schuldnerin/der Schuldner mit zwei aufeinanderfolgenden Raten ganz oder teilweise in Verzug, entfällt die Ratenzahlung und der gesamte Restbetrag wird sofort fällig.',
            eine: 'Gerät die Schuldnerin/der Schuldner mit einer Rate ganz oder teilweise länger als {{verfall_tage}} Tage in Verzug, entfällt die Ratenzahlung und der gesamte Restbetrag wird sofort fällig.',
            keine: 'Bei Verzug mit einzelnen Raten bleibt die Ratenzahlung bestehen; die gesetzlichen Rechte bei Verzug bleiben unberührt.',
          },
        },
      ],
    },
    {
      nadpis: 'Schlussbestimmungen',
      vysvetleni: 'Änderungen und Ausfertigungen.',
      odstavce: [
        'Änderungen und Ergänzungen dieser Vereinbarung bedürfen der Schriftform. Sollte eine Bestimmung unwirksam sein, bleibt der Rest der Vereinbarung wirksam.',
        'Jede Partei erhält eine unterschriebene Ausfertigung.',
      ],
    },
  ],
};

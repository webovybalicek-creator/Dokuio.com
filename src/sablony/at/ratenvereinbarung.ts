/**
 * Ratenvereinbarung (Ratenzahlungsvereinbarung) – Österreich.
 * Gläubiger/in und Schuldner/in vereinbaren die Zahlung einer bestehenden Forderung in Monatsraten (ABGB).
 * Optional: Anerkenntnis der Forderung (unterbricht die Verjährung, § 1497 ABGB) und Terminsverlust.
 * Die Terminsverlust-Klausel folgt den Schutzregeln für Konsument/innen (Rückstand seit mind. sechs Wochen,
 * Mahnung unter Androhung des Terminsverlusts, Nachfrist mind. zwei Wochen – konsumentenfragen.at).
 * Unterschied zum Schuldanerkenntnis: hier steht die Zahlungsweise im Vordergrund, das Anerkenntnis ist optional.
 * Bei jeder Textänderung `verze` und `aktualizovano` erhöhen.
 */
import type { Sablona } from '../typy';
import { betragInWorten } from '../de/zahlen';
import { isoDatum, pripominkySplatek, splatky, cislo } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';
import { ABGB, KF_RATEN, EJUSTICE_ZINSEN_AT } from './quellen';

const eur = (n: number) => `${formatCislo(String(n))} €`;

export const ratenvereinbarungAT: Sablona = {
  kod: 'AT-RATENVEREINBARUNG',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'at',
  jazyk: 'de',
  nazev: 'Ratenvereinbarung',
  podnadpis: 'Vereinbarung über die Zahlung einer offenen Forderung in Raten nach dem Allgemeinen bürgerlichen Gesetzbuch (ABGB)',
  souborPdf: 'ratenvereinbarung',
  paticka: 'Kostenlos erstellt · Vorlage AT-RATENVEREINBARUNG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Gläubiger/in', vpravo: 'Schuldner/in' },
  slovo: { n: 'Ratenvereinbarung', g: 'Ratenvereinbarung', a: 'Ratenvereinbarung', l: 'Ratenvereinbarung' },
  cislovatClanky: false,
  coDal: [
    'Zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.',
    'Raten am besten überweisen – der Kontoauszug ist der beste Zahlungsnachweis. Barzahlungen nur gegen Quittung.',
    'Ratenplan und Kalendererinnerungen helfen, keine Rate zu vergessen.',
    'Bleibt eine Rate aus: zuerst schriftlich mahnen. Für den Terminsverlust Frist und Nachfrist laut Vereinbarung einhalten.',
  ],
  kontrola: [
    'Grund und Höhe der offenen Forderung genau angeben (Rechnung, Darlehen, Schaden – mit Datum).',
    'Die Ratenhöhe so wählen, dass sie realistisch bezahlt werden kann – eine geplatzte Vereinbarung hilft niemandem.',
    'Anerkenntnis: Erkennt die schuldende Person die Forderung ausdrücklich an, wird die Verjährung unterbrochen und die Frist beginnt neu (§ 1497 ABGB).',
    'Terminsverlust: Die Klausel ist so formuliert, wie es bei Konsument/innen zulässig ist – Rückstand seit mindestens sechs Wochen, Mahnung unter Androhung des Terminsverlusts und Nachfrist von mindestens zwei Wochen ([konsumentenfragen.at](https://www.konsumentenfragen.at/konsumentenfragen/Finanzierung/Ratenkredit/Kauf_auf_Raten.html)).',
    'Zinsen nur vereinbaren, wenn beide das wollen, und nicht übermäßig hoch. Zu gesetzlichen Zinsen siehe das [Europäische Justizportal](https://e-justice.europa.eu/topics/taking-legal-action/where-and-how/interest-rates/at_de).',
    'Identität der anderen Seite anhand eines amtlichen Lichtbildausweises prüfen und Namen und Anschrift genau übernehmen.',
  ],
  zdroje: [ABGB, KF_RATEN, EJUSTICE_ZINSEN_AT],
  prilohy: (d) => {
    const s = splatky(d);
    if (!s.length) return [];
    return [
      {
        nadpis: 'Beilage 1 · Ratenplan',
        popis: `Offener Betrag ${eur(cislo(d.castka))} in ${s.length} Monatsraten, jeweils am ${Math.round(cislo(d.splatka_den))}. des Monats.`,
        hlavicka: ['Rate', 'Fällig am', 'Betrag', 'Restschuld'],
        radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum)), eur(x.castka), eur(x.zbyva)]),
        vpravo: [2, 3],
        poznamka: 'Der Ratenplan folgt den vereinbarten Raten ohne Zinsen; bei Widersprüchen gilt der Text der Vereinbarung.',
      },
    ];
  },
  pripominky: (d) => pripominkySplatek(d, 'Rate', '€', { celkem: (n) => `insgesamt ${n} Raten`, posledni: 'letzte' }),

  kroky: [
    {
      id: 'parteien',
      nazev: 'Gläubiger/in und Schuldner/in',
      popis: 'Gläubiger/in bekommt das Geld, Schuldner/in zahlt in Raten.',
      pole: [
        { id: 'g_name', typ: 'text', popis: 'Gläubiger/in – Vor- und Nachname bzw. Firma', napoveda: 'Wem das Geld zusteht.', placeholder: 'z. B. Johann Steiner', sirka: 34, autocomplete: 'name' },
        { id: 'g_geburt', typ: 'datum', popis: 'Geburtsdatum (optional)', napoveda: 'Bei Firmen leer lassen und die Firmenbuchnummer beim Namen ergänzen.', sirka: 14, polovina: true },
        { id: 'g_adresse', typ: 'text', popis: 'Anschrift', napoveda: 'Wohnadresse bzw. Firmensitz.', placeholder: 'z. B. Herrengasse 3, 8010 Graz', sirka: 46 },
        { id: 's_name', typ: 'text', popis: 'Schuldner/in – Vor- und Nachname', napoveda: 'Wer zahlt. Wie im Lichtbildausweis.', placeholder: 'z. B. Sabine Wimmer', sirka: 34 },
        { id: 's_geburt', typ: 'datum', popis: 'Geburtsdatum', napoveda: 'Für die eindeutige Zuordnung.', sirka: 14, polovina: true },
        { id: 's_adresse', typ: 'text', popis: 'Anschrift', napoveda: 'Aktuelle Wohnadresse.', placeholder: 'z. B. Annenstraße 20, 8020 Graz', sirka: 46 },
      ],
    },
    {
      id: 'forderung',
      nazev: 'Offene Forderung',
      pole: [
        { id: 'grund', typ: 'textarea', popis: 'Woraus stammt die Forderung?', napoveda: 'Konkret: Rechnung, Darlehen, Kaufpreis oder Schaden – mit Datum.', placeholder: 'z. B. Rechnung Nr. 2026-041 vom 3. 8. 2026 über Malerarbeiten', sirka: 60 },
        { id: 'castka', typ: 'castka', popis: 'Offener Betrag (€)', napoveda: 'Der Betrag, der in Raten bezahlt wird.', placeholder: 'z. B. 2400', sirka: 12, polovina: true },
        {
          id: 'anerkenntnis',
          typ: 'volba',
          popis: 'Anerkenntnis der Forderung',
          napoveda: 'Mit Anerkenntnis bestätigt die schuldende Person die Forderung ausdrücklich – die Verjährung beginnt neu. Für Gläubiger/innen die stärkere Variante.',
          moznosti: [
            { hodnota: 'ja', popis: 'Ja, Schuldner/in anerkennt die Forderung' },
            { hodnota: 'nein', popis: 'Nein, nur die Zahlungsweise regeln' },
          ],
        },
        {
          id: 'zinsen',
          typ: 'volba',
          popis: 'Zinsen',
          napoveda: 'Unter Privatpersonen meist zinslos.',
          moznosti: [
            { hodnota: 'keine', popis: 'Keine Zinsen' },
            { hodnota: 'ja', popis: 'Mit Zinsen' },
          ],
        },
        { id: 'zinssatz', typ: 'cislo', popis: 'Zinssatz', napoveda: 'Jährlicher Zinssatz vom jeweils offenen Betrag.', placeholder: 'z. B. 3', jednotka: '% p. a.', sirka: 6, polovina: true, zobrazitKdyz: { pole: 'zinsen', je: 'ja' } },
      ],
    },
    {
      id: 'raten',
      nazev: 'Raten',
      popis: 'Aus Betrag, Rate und erstem Monat erstellen wir den Ratenplan als Beilage.',
      pole: [
        { id: 'splatka', typ: 'castka', popis: 'Monatsrate (€)', napoveda: 'Die letzte Rate kann niedriger sein.', placeholder: 'z. B. 200', sirka: 12, polovina: true },
        { id: 'splatka_den', typ: 'cislo', popis: 'Fällig am (Tag im Monat)', napoveda: 'Zum Beispiel 5 für den 5. jedes Monats.', placeholder: 'z. B. 5', sirka: 4, polovina: true },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Erste Rate fällig am', napoveda: 'Monat der ersten Rate – der Tag wird aus dem Feld davor übernommen.', sirka: 14, polovina: true },
        { id: 'iban', typ: 'text', popis: 'IBAN der Gläubigerin bzw. des Gläubigers', napoveda: 'Wohin die Raten überwiesen werden.', placeholder: 'AT00 0000 0000 0000 0000', sirka: 30 },
        {
          id: 'terminsverlust',
          typ: 'volba',
          popis: 'Terminsverlust',
          napoveda: 'Bei Terminsverlust wird bei Zahlungsverzug der gesamte Rest auf einmal fällig – mit den Schutzfristen, die auch für Konsument/innen gelten.',
          moznosti: [
            { hodnota: 'ja', popis: 'Ja, mit Mahnung und Nachfrist' },
            { hodnota: 'nein', popis: 'Nein' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Ort', napoveda: 'Wir übernehmen den Ort aus der Anschrift der Gläubigerin bzw. des Gläubigers.', placeholder: 'z. B. Graz', sirka: 18, polovina: true, vychozi: { obecZ: 'g_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heutiges Datum vorausgefüllt.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: {
    castka_slovy: (d) => betragInWorten(d.castka),
    prvni_mesic: (d) => {
      const m = /^(\d{4})-(\d{2})/.exec(typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '');
      return m ? `${m[2]}/${m[1]}` : '';
    },
  },

  clanky: [
    {
      nadpis: 'Parteien',
      vysvetleni: 'Wer Geld bekommt und wer in Raten zahlt.',
      odstavce: [
        '**Gläubiger/in:** {{g_name}}, geb. {{g_geburt}}, {{g_adresse}}',
        '**Schuldner/in:** {{s_name}}, geb. {{s_geburt}}, {{s_adresse}}',
      ],
    },
    {
      nadpis: 'Offene Forderung',
      vysvetleni: 'Woraus die Schuld stammt und wie hoch sie ist. Mit Anerkenntnis kann die schuldende Person die Forderung später nicht mehr bestreiten, und die Verjährung beginnt neu.',
      odstavce: [
        'Die Gläubigerin bzw. der Gläubiger hat gegen die Schuldnerin bzw. den Schuldner eine offene Forderung aus folgendem Grund: {{grund}}.',
        'Die offene Forderung beträgt {{castka}} (in Worten: {{castka_slovy}}).',
        {
          volba: 'anerkenntnis',
          uvodVzor: 'Anerkenntnis (bitte ankreuzen):',
          moznosti: {
            ja: 'Die Schuldnerin bzw. der Schuldner anerkennt diese Forderung dem Grunde und der Höhe nach ausdrücklich.',
            nein: 'Diese Vereinbarung regelt die Zahlungsweise der offenen Forderung.',
          },
        },
      ],
    },
    {
      nadpis: 'Ratenzahlung',
      vysvetleni: 'Wie viel, wann und wohin gezahlt wird. Der Ratenplan in der Beilage zeigt jede Rate mit Datum.',
      odstavce: [
        'Die Gläubigerin bzw. der Gläubiger gestattet, die offene Forderung in Monatsraten von {{splatka}} zu bezahlen. Die Raten sind jeweils am {{splatka_den}}. eines Monats fällig, erstmals im Monat {{prvni_mesic}}, bis zur vollständigen Bezahlung. Die letzte Rate kann niedriger sein.',
        'Die Raten werden auf das Konto IBAN {{iban}} überwiesen oder bar gegen Quittung bezahlt. Maßgeblich ist der Eingang der Zahlung. Eine vorzeitige Zahlung ist jederzeit möglich.',
        {
          volba: 'zinsen',
          uvodVzor: 'Zinsen (bitte ankreuzen):',
          moznosti: {
            keine: 'Für die Dauer der Ratenzahlung werden keine Zinsen verrechnet.',
            ja: 'Der jeweils offene Betrag wird mit {{zinssatz}} verzinst; die Zinsen sind mit den Raten, spätestens mit der letzten Rate fällig.',
          },
        },
      ],
    },
    {
      nadpis: 'Zahlungsverzug',
      vysvetleni: 'Was passiert, wenn eine Rate ausbleibt. Terminsverlust heißt: Der ganze Rest wird auf einmal fällig – aber erst nach Mahnung und Nachfrist.',
      odstavce: [
        {
          volba: 'terminsverlust',
          uvodVzor: 'Terminsverlust (bitte ankreuzen):',
          moznosti: {
            ja: 'Ist eine Rate seit mindestens sechs Wochen fällig und wird sie auch nach schriftlicher Mahnung unter Androhung des Terminsverlusts und Setzung einer Nachfrist von mindestens zwei Wochen nicht bezahlt, wird der gesamte noch offene Betrag sofort zur Zahlung fällig (Terminsverlust).',
            nein: 'Ein Terminsverlust wird nicht vereinbart. Bei Verzug sind jeweils die fälligen Raten zu bezahlen.',
          },
        },
      ],
    },
    {
      nadpis: 'Schlussbestimmungen',
      odstavce: [
        'Solange die Raten vereinbarungsgemäß bezahlt werden, wird die Forderung nicht auf einmal eingefordert. Im Übrigen gelten die Bestimmungen des ABGB.',
        'Änderungen und Ergänzungen dieser Vereinbarung bedürfen der Schriftform. Jede Partei erhält eine Ausfertigung.',
      ],
    },
  ],
};

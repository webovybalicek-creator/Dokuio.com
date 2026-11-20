/**
 * Abzahlungsvereinbarung (Ratenzahlungsvereinbarung) über eine bestehende Schuld – Schweiz. Zweiseitig: Gläubiger und Schuldner.
 * Unterschied zur Schuldanerkennung (CH-SCHULDANERKENNUNG): beide unterschreiben, der Gläubiger stundet und verzichtet auf
 * Betreibung, solange die Raten bezahlt werden; Verfallklausel bei Verzug.
 * Geprüft 2026-11-20: Art. 17 OR (Schuldanerkennung), Art. 135 Ziff. 1 OR (Unterbrechung der Verjährung durch Anerkennung),
 * Art. 82 SchKG (provisorische Rechtsöffnung mit unterschriebener Schuldanerkennung).
 * KKG gilt für gewerbsmässige Kreditgeber gegenüber Konsumenten (auch Zahlungsaufschub); ausgenommen u. a. zins- und
 * gebührenfreie Kredite (Merkblatt KKG Kanton Zürich) – Hinweis in den Tipps.
 */
import type { Sablona } from '../typy';
import { pripominkySplatek, splatky, isoDatum, cislo } from '../terminy';
import { formatDatum } from '../dokument';
import { schweiz, betragInFranken, chf, paticka } from './schweiz';
import { OR_17, OR_135, OR_104, SCHKG_82, ZH_KKG, TIPP_IDENTITAET_CH } from './quellen';

export const abzahlungsvereinbarungCH: Sablona = schweiz({
  kod: 'CH-ABZAHLUNG',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'ch',
  jazyk: 'de-CH',
  nazev: 'Abzahlungsvereinbarung',
  podnadpis: 'Ratenzahlungsvereinbarung über eine bestehende Schuld nach Obligationenrecht (OR)',
  souborPdf: 'abzahlungsvereinbarung',
  paticka: paticka('CH-ABZAHLUNG'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Gläubiger/in', vpravo: 'Schuldner/in' },
  slovo: { n: 'Vereinbarung', g: 'Vereinbarung', a: 'Vereinbarung', l: 'Vereinbarung' },
  prilohy: (d) => {
    const s = splatky(d);
    if (!s.length) return [];
    return [
      {
        nadpis: 'Anhang 1 · Ratenplan',
        popis: `Insgesamt ${chf(cislo(String(d.castka ?? '').replace(/['’]/g, '')))} in ${s.length} Monatsraten, jeweils fällig am ${Math.round(cislo(d.splatka_den))}. des Monats.`,
        hlavicka: ['Rate', 'Fällig am', 'Betrag', 'Restschuld'],
        radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum)), chf(x.castka), chf(x.zbyva)]),
        vpravo: [2, 3],
        poznamka: [d.zins === 'ja' ? 'Der Plan zeigt nur die Schuld ohne Zins; der Zins wird gemäss Vereinbarung bezahlt.' : '', 'Bei Widersprüchen gilt der Text der Vereinbarung.'].filter(Boolean).join(' '),
      },
    ];
  },
  pripominky: (d) => pripominkySplatek(d, 'Rate', 'CHF', { celkem: (n) => `insgesamt ${n} Raten`, posledni: 'letzte' }),
  coDal: [
    'Zweimal ausdrucken. Gläubiger und Schuldner unterschreiben beide eigenhändig, jede Seite erhält ein Exemplar.',
    'Den Ratenplan im Anhang prüfen: Anzahl Raten und Betrag der letzten Rate.',
    'Raten per Überweisung mit Vermerk zahlen (z. B. „Rate 3/10“). Barzahlungen immer quittieren lassen.',
    'Zahlt der Schuldner nicht: Gläubiger stellt die Restschuld schriftlich fällig und kann die Betreibung einleiten. Mit der unterschriebenen Schuldanerkennung lässt sich die provisorische Rechtsöffnung verlangen.',
    'Nach der letzten Rate kann der Schuldner eine Bestätigung verlangen, dass die Schuld getilgt ist.',
  ],
  kontrola: [
    TIPP_IDENTITAET_CH,
    'Betrag = was am Tag der Unterschrift noch offen ist. Den Grund konkret angeben: aus welchem Vertrag, welcher Rechnung oder welchem Ereignis, mit Datum.',
    'Mit der Schuldanerkennung bestätigt der Schuldner die Schuld ohne Bedingung ([Art. 17 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_17)). Durch Unterschrift bekräftigt, erlaubt sie in der Betreibung die provisorische Rechtsöffnung ([Art. 82 SchKG](https://www.fedlex.admin.ch/eli/cc/11/529_488_529/de#art_82)).',
    'Die Anerkennung unterbricht die Verjährung; die Frist beginnt neu ([Art. 135 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_135)).',
    'Verfallklausel: Bei Zahlungsverzug wird die ganze Restschuld fällig. Wählen Sie eine Nachfrist, wenn kleine Verspätungen nicht gleich alles auslösen sollen.',
    'Zins ist freiwillig und muss angemessen sein. Wer als Firma gewerbsmässig Kredit gewährt – auch als Zahlungsaufschub mit Zins oder Gebühren – muss das Konsumkreditgesetz beachten; zins- und gebührenfreie Raten sind davon ausgenommen ([Merkblatt KKG](https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/wirtschaft-arbeit/gewerbe-betriebsbewilligungen/konsumkredit/merkblatt_bundesgesetz_%C3%BCber_den_konsumkredit_kkg.pdf)).',
    'Raten so festlegen, dass der Schuldner sie wirklich zahlen kann – ein unrealistischer Plan hilft niemandem.',
    'Geld wird erst ausgeliehen? Dann passt der Darlehensvertrag besser.',
  ],
  zdroje: [OR_17, OR_135, OR_104, SCHKG_82, ZH_KKG],

  kroky: [
    {
      id: 'parteien',
      nazev: 'Gläubiger/in und Schuldner/in',
      popis: 'Gläubiger ist, wem Geld geschuldet wird. Schuldner ist, wer in Raten zahlt. Beide unterschreiben.',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Gläubiger/in – Vor- und Nachname', napoveda: 'Voller Name wie im Ausweis (bei einer Firma: Firmenname).', placeholder: 'z. B. Anna Muster', sirka: 34, autocomplete: 'name' },
        { id: 'k_narozeni', typ: 'datum', popis: 'Geburtsdatum Gläubiger/in', napoveda: 'Hilft, die Person eindeutig zu bezeichnen.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresse Gläubiger/in', napoveda: 'Wohnadresse.', placeholder: 'z. B. Bahnhofstrasse 12, 8001 Zürich', sirka: 46 },
        { id: 'p_jmeno', typ: 'text', popis: 'Schuldner/in – Vor- und Nachname', napoveda: 'Voller Name wie im Ausweis.', placeholder: 'z. B. Marco Beispiel', sirka: 34 },
        { id: 'p_narozeni', typ: 'datum', popis: 'Geburtsdatum Schuldner/in', napoveda: 'Wichtig, falls später betrieben werden muss.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresse Schuldner/in', napoveda: 'Wohnadresse – an diesem Ort würde betrieben.', placeholder: 'z. B. Seeweg 3, 6003 Luzern', sirka: 46 },
      ],
    },
    {
      id: 'schuld',
      nazev: 'Schuld',
      popis: 'Die Schuld besteht schon – die Vereinbarung regelt nur, wie sie bezahlt wird.',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Offener Betrag am Tag der Unterschrift (CHF)', napoveda: 'Was noch zu zahlen ist. Den Betrag in Worten ergänzen wir. Daraus entsteht der Ratenplan.', placeholder: 'z. B. 6000', sirka: 14, polovina: true },
        { id: 'duvod', typ: 'text', popis: 'Grund der Schuld', napoveda: 'Konkret: Vertrag, Rechnung oder Ereignis mit Datum.', placeholder: 'z. B. unbezahlte Rechnung Nr. 2026-015 vom 3. 3. 2026', sirka: 56 },
        {
          id: 'anerkennung',
          typ: 'volba',
          popis: 'Anerkennt der Schuldner die Schuld?',
          napoveda: 'Empfohlen: Mit der unterschriebenen Anerkennung kann der Gläubiger in der Betreibung die provisorische Rechtsöffnung verlangen, und die Verjährung beginnt neu.',
          moznosti: [
            { hodnota: 'ja', popis: 'Ja, mit Schuldanerkennung' },
            { hodnota: 'nein', popis: 'Nein, nur Ratenzahlung vereinbaren' },
          ],
        },
      ],
    },
    {
      id: 'raten',
      nazev: 'Raten',
      pole: [
        { id: 'splatka', typ: 'castka', popis: 'Monatsrate (CHF)', napoveda: 'Die letzte Rate kann tiefer sein – wir rechnen sie aus.', placeholder: 'z. B. 500', sirka: 12, polovina: true },
        { id: 'splatka_den', typ: 'cislo', popis: 'Tag im Monat', napoveda: 'Bis zu welchem Tag die Rate eingehen muss, z. B. 25.', placeholder: 'z. B. 25', sirka: 4, polovina: true },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Monat der ersten Rate', napoveda: 'Einen beliebigen Tag im Monat wählen, in dem die Zahlungen beginnen.', sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'IBAN Gläubiger/in', napoveda: 'Wohin die Raten gehen. Eine Überweisung ist am besten belegbar.', placeholder: 'CH00 0000 0000 0000 0000 0', sirka: 30 },
        {
          id: 'zins',
          typ: 'volba',
          popis: 'Wird ein Zins bezahlt?',
          napoveda: 'Unter Privaten meist ohne Zins. Ein Zins muss angemessen sein.',
          moznosti: [
            { hodnota: 'nein', popis: 'Ohne Zins' },
            { hodnota: 'ja', popis: 'Mit Zins' },
          ],
        },
        { id: 'zins_satz', typ: 'cislo', popis: 'Zinssatz (% pro Jahr)', napoveda: 'Jahreszins auf dem noch offenen Betrag, z. B. 3.', placeholder: 'z. B. 3', jednotka: '% pro Jahr', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'zins', je: 'ja' } },
        {
          id: 'verfall',
          typ: 'volba',
          popis: 'Wann wird die ganze Restschuld fällig?',
          napoveda: 'Verfallklausel: Zahlt der Schuldner nicht, kann der Gläubiger alles auf einmal verlangen. Eine Nachfrist verzeiht kleine Verspätungen.',
          moznosti: [
            { hodnota: 'sofort', popis: 'Bei Verzug mit einer Rate' },
            { hodnota: 'nachfrist', popis: 'Wenn eine Rate 14 Tage nach Fälligkeit noch fehlt' },
            { hodnota: 'zwei', popis: 'Bei Verzug mit zwei Raten' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Ort der Unterzeichnung', napoveda: 'Wir übernehmen den Ort aus der Adresse des Gläubigers.', placeholder: 'z. B. Zürich', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heute vorausgefüllt.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    castka_slovy: (d) => betragInFranken(d.castka),
    prvni_mesic: (d) => {
      const m = /^(\d{4})-(\d{2})/.exec(typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '');
      return m ? `${Number(m[2])}/${m[1]}` : '';
    },
  },

  clanky: [
    {
      nadpis: 'Parteien',
      vysvetleni: 'Wer wem schuldet. Genaue Angaben sind wichtig, falls betrieben werden muss.',
      odstavce: [
        '**Gläubiger/in:** {{k_jmeno}}, geb. {{k_narozeni}}, wohnhaft {{k_adresa}}',
        '**Schuldner/in:** {{p_jmeno}}, geb. {{p_narozeni}}, wohnhaft {{p_adresa}}',
      ],
    },
    {
      nadpis: 'Schuld',
      vysvetleni: 'Welche Schuld abbezahlt wird und wie viel am Tag der Unterschrift noch offen ist.',
      odstavce: [
        'Der Schuldner schuldet dem Gläubiger am Tag der Unterzeichnung den Betrag von **{{castka}}** (in Worten: {{castka_slovy}}). Grund der Schuld: {{duvod}}.',
        {
          volba: 'anerkennung',
          uvodVzor: 'Schuldanerkennung (eine ankreuzen):',
          moznosti: {
            ja: 'Der Schuldner anerkennt diese Schuld in dieser Höhe ausdrücklich und vorbehaltlos (Art. 17 OR).',
            nein: 'Die Parteien regeln mit dieser Vereinbarung nur die Zahlungsweise.',
          },
        },
      ],
    },
    {
      nadpis: 'Ratenzahlung',
      vysvetleni: 'Der Gläubiger ist einverstanden, dass nicht alles auf einmal bezahlt wird; der Schuldner verpflichtet sich zu festen Raten gemäss Ratenplan.',
      odstavce: [
        'Der Schuldner zahlt die Schuld in monatlichen Raten von {{splatka}}, fällig jeweils am {{splatka_den}}. eines Monats, erstmals im Monat {{prvni_mesic}}, bis zur vollständigen Tilgung. Die letzte Rate kann tiefer sein. Die Übersicht steht im Anhang.',
        'Die Raten werden auf das Konto des Gläubigers IBAN {{ucet}} überwiesen; massgebend ist die Gutschrift. Barzahlungen quittiert der Gläubiger schriftlich.',
        {
          volba: 'zins',
          uvodVzor: 'Zins (eine ankreuzen):',
          moznosti: {
            nein: 'Auf die Raten wird kein Zins geschuldet.',
            ja: 'Der Schuldner bezahlt auf dem jeweils offenen Betrag einen Zins von {{zins_satz}}, fällig mit den Raten.',
          },
        },
        'Solange der Schuldner die Raten pünktlich bezahlt, verlangt der Gläubiger nicht die ganze Schuld auf einmal und leitet keine Betreibung ein. Der Schuldner darf jederzeit mehr oder alles vorzeitig zahlen.',
      ],
    },
    {
      nadpis: 'Verfallklausel',
      vysvetleni: 'Was passiert, wenn der Schuldner nicht mehr zahlt: Der Gläubiger kann den ganzen Rest auf einmal verlangen.',
      odstavce: [
        {
          volba: 'verfall',
          uvodVzor: 'Fälligkeit der Restschuld (eine ankreuzen):',
          moznosti: {
            sofort: 'Ist der Schuldner mit einer Rate in Verzug, wird die gesamte Restschuld sofort zur Zahlung fällig.',
            nachfrist: 'Ist eine Rate 14 Tage nach ihrer Fälligkeit noch nicht eingegangen, wird die gesamte Restschuld sofort zur Zahlung fällig.',
            zwei: 'Ist der Schuldner mit zwei Raten in Verzug, wird die gesamte Restschuld sofort zur Zahlung fällig.',
          },
        },
        'Der Gläubiger teilt dem Schuldner die Fälligkeit schriftlich mit. Ab Verzug ist Verzugszins nach Art. 104 OR geschuldet.',
      ],
    },
    {
      nadpis: 'Schlussbestimmungen',
      vysvetleni: 'Formalien: Recht, Änderungen, Exemplare.',
      odstavce: [
        'Im Übrigen gilt das Schweizerische Obligationenrecht. Änderungen und Ergänzungen bedürfen der Schriftform.',
        'Die Vereinbarung wird zweifach ausgefertigt; jede Partei erhält ein Exemplar. Der Ratenplan im Anhang ist Bestandteil der Vereinbarung; bei Widersprüchen gilt der Text der Vereinbarung.',
      ],
    },
  ],
});

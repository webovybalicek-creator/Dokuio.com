/** Privater Darlehensvertrag – Deutschland. §§ 488 ff. BGB; Kündigung § 488 Abs. 3 BGB. Ratenplan als Anlage. */
import type { Sablona } from '../typy';
import { betragInWorten } from './zahlen';
import { naDatum, isoDatum, pripominkySplatek, splatky } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';
import { BGB, BGB_488, TIPP_IDENTITAET, TIPP_BAR } from './quellen';

const eur = (n: number) => `${formatCislo(String(n))} €`;

export const darlehensvertrag: Sablona = {
  kod: 'DE-DARLEHEN',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Darlehensvertrag',
  podnadpis: 'privates Darlehen nach §§ 488 ff. Bürgerliches Gesetzbuch (BGB)',
  souborPdf: 'darlehensvertrag',
  paticka: 'Kostenlos erstellt · Vorlage DE-DARLEHEN v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Darlehensgeber/in', vpravo: 'Darlehensnehmer/in' },
  slovo: { n: 'Darlehensvertrag', g: 'Darlehensvertrags', a: 'Darlehensvertrag', l: 'Darlehensvertrag' },
  coDal: ['Vertrag zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.', 'Geld am besten überweisen – der Kontoauszug ist der beste Nachweis.'],
  prilohy: (d) => {
    if (d.splaceni !== 'splatky') return [];
    const s = splatky(d);
    if (!s.length) return [];
    return [
      {
        nadpis: 'Anlage 1 · Tilgungsplan',
        popis: `Insgesamt ${eur(Number(String(d.castka).replace(/\s/g, '')))} in ${s.length} Monatsraten.`,
        hlavicka: ['Rate', 'Fällig am', 'Betrag', 'Restschuld'],
        radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum)), eur(x.castka), eur(x.zbyva)]),
        vpravo: [2, 3],
        poznamka: 'Der Plan folgt den vereinbarten Raten; bei Widersprüchen gilt der Vertragstext.',
      },
    ];
  },
  pripominky: (d) => [
    ...(d.splaceni === 'splatky' ? pripominkySplatek(d, 'Darlehensrate', '€', { celkem: (n) => `insgesamt ${n} Raten`, posledni: 'letzte' }) : []),
    ...(d.splaceni === 'naraz' && naDatum(d.vratit_do) ? [{ nazev: 'Darlehen zurückzahlen', datum: String(d.vratit_do) }] : []),
  ],
  kontrola: [
    'Geld nachweisbar übergeben – per Überweisung oder gegen Quittung.',
    'Ohne vereinbarte Laufzeit kann ein Darlehen mit einer Frist von drei Monaten gekündigt werden ([§ 488 Abs. 3 BGB](https://www.gesetze-im-internet.de/bgb/__488.html)).',
    'Zinsen dürfen nicht sittenwidrig hoch sein.',
    TIPP_IDENTITAET,
    TIPP_BAR,
  ],
  zdroje: [BGB, BGB_488],
  kroky: [
    {
      id: 'parteien',
      nazev: 'Parteien',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Darlehensgeber/in – Name', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Darlehensnehmer/in – Name', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
      ],
    },
    {
      id: 'darlehen',
      nazev: 'Darlehen',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Darlehensbetrag (€)', sirka: 12, polovina: true },
        {
          id: 'odovzdanie',
          typ: 'volba',
          popis: 'Auszahlung',
          moznosti: [
            { hodnota: 'bar', popis: 'Bar bei Unterschrift' },
            { hodnota: 'ueberweisung', popis: 'Überweisung' },
          ],
        },
        { id: 'ucet_k', typ: 'text', popis: 'IBAN Darlehensnehmer/in', sirka: 30, zobrazitKdyz: { pole: 'odovzdanie', je: 'ueberweisung' } },
        { id: 'predani_do', typ: 'datum', popis: 'Auszahlung bis', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'odovzdanie', je: 'ueberweisung' } },
        {
          id: 'urok',
          typ: 'volba',
          popis: 'Zinsen',
          moznosti: [
            { hodnota: 'ne', popis: 'Zinslos' },
            { hodnota: 'ano', popis: 'Mit Zinsen' },
          ],
        },
        { id: 'urok_sazba', typ: 'cislo', popis: 'Zinssatz', jednotka: '% p. a.', sirka: 6, polovina: true, zobrazitKdyz: { pole: 'urok', je: 'ano' } },
      ],
    },
    {
      id: 'rueckzahlung',
      nazev: 'Rückzahlung',
      pole: [
        {
          id: 'splaceni',
          typ: 'volba',
          popis: 'Rückzahlung',
          moznosti: [
            { hodnota: 'naraz', popis: 'In einer Summe bis zu einem Datum' },
            { hodnota: 'splatky', popis: 'In Monatsraten' },
          ],
        },
        { id: 'vratit_do', typ: 'datum', popis: 'Zurückzahlen bis', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
        { id: 'splatka', typ: 'castka', popis: 'Monatsrate (€)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'splatka_den', typ: 'cislo', popis: 'Tag im Monat', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Monat der ersten Rate', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'ucet_p', typ: 'text', popis: 'IBAN Darlehensgeber/in', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Ort', sirka: 18, polovina: true },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
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
      nadpis: 'Vertragsparteien',
      odstavce: [
        '**Darlehensgeber/in:** {{p_jmeno}}, geb. {{p_narozeni}}, wohnhaft {{p_adresa}}',
        '**Darlehensnehmer/in:** {{k_jmeno}}, geb. {{k_narozeni}}, wohnhaft {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Darlehen und Auszahlung',
      odstavce: [
        'Der Darlehensgeber gewährt dem Darlehensnehmer ein Darlehen über {{castka}} (in Worten: {{castka_slovy}}).',
        {
          volba: 'odovzdanie',
          uvodVzor: 'Auszahlung (bitte ankreuzen):',
          moznosti: {
            bar: 'Der Betrag wurde bei Unterzeichnung bar übergeben; der Darlehensnehmer bestätigt den Empfang mit seiner Unterschrift.',
            ueberweisung: 'Der Betrag wird bis {{predani_do}} auf das Konto des Darlehensnehmers IBAN {{ucet_k}} überwiesen.',
          },
        },
      ],
    },
    {
      nadpis: 'Zinsen',
      odstavce: [
        {
          volba: 'urok',
          uvodVzor: 'Zinsen (bitte ankreuzen):',
          moznosti: {
            ne: 'Das Darlehen ist zinslos.',
            ano: 'Der jeweils offene Betrag wird mit {{urok_sazba}} verzinst; die Zinsen sind mit den Raten, spätestens mit der letzten Rate fällig.',
          },
        },
      ],
    },
    {
      nadpis: 'Rückzahlung',
      odstavce: [
        {
          volba: 'splaceni',
          uvodVzor: 'Rückzahlung (bitte ankreuzen):',
          moznosti: {
            naraz: 'Der Darlehensnehmer zahlt den gesamten Betrag spätestens am {{vratit_do}} zurück.',
            splatky: 'Der Darlehensnehmer zahlt in Monatsraten von {{splatka}}, fällig jeweils am {{splatka_den}}. eines Monats, erstmals im Monat {{prvni_mesic}}, bis zur vollständigen Tilgung. Die letzte Rate kann niedriger sein.',
          },
        },
        'Zahlungen erfolgen auf das Konto des Darlehensgebers IBAN {{ucet_p}} oder bar gegen Quittung. Eine vorzeitige Rückzahlung ist jederzeit möglich.',
      ],
    },
    {
      nadpis: 'Schlussbestimmungen',
      odstavce: [
        'Im Übrigen gelten die §§ 488 ff. BGB. Änderungen bedürfen der Schriftform.',
        'Jede Partei erhält eine Ausfertigung dieses Vertrags.',
      ],
    },
  ],
};

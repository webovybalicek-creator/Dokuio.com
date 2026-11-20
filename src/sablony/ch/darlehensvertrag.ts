/**
 * Privater Darlehensvertrag – Schweiz. Art. 312 ff. OR. Zinsen nur, wenn vereinbart (Art. 313 OR, nicht kaufmännisch);
 * ohne bestimmten Rückzahlungstermin: Rückzahlung innert sechs Wochen nach Aufforderung (Art. 318 OR).
 * Ein vom Borger unterzeichneter Vertrag kann als Schuldanerkennung für die provisorische Rechtsöffnung dienen (Art. 82 SchKG).
 */
import type { Sablona } from '../typy';
import { darlehensvertrag as de } from '../de/darlehensvertrag';
import { naDatum, isoDatum, pripominkySplatek, splatky, souhrnSplatek } from '../terminy';
import { formatDatum } from '../dokument';
import { schweiz, betragInFranken, chf, paticka } from './schweiz';
import { OR, OR_312, OR_318, SCHKG_82, TIPP_IDENTITAET_CH, TIPP_BAR_CH } from './quellen';

export const tilgungsplanCH: NonNullable<Sablona['prilohy']> = (d) => {
  if (d.splaceni !== 'splatky') return [];
  const s = splatky(d);
  if (!s.length) return [];
  return [
    {
      nadpis: 'Anhang 1 · Tilgungsplan',
      popis: `Insgesamt ${chf(Number(String(d.castka).replace(/[\s'’]/g, '')))} in ${s.length} Monatsraten.`,
      souhrn: souhrnSplatek(s, chf(Number(String(d.castka).replace(/[\s'’]/g, '')))),
      hlavicka: ['Rate', 'Fällig am', 'Betrag', 'Restschuld'],
      radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum)), chf(x.castka), chf(x.zbyva)]),
      vpravo: [2, 3],
      poznamka: 'Der Plan folgt den vereinbarten Raten; bei Widersprüchen gilt der Vertragstext.',
    },
  ];
};

export const darlehensvertragCH: Sablona = schweiz({
  ...de,
  kod: 'CH-DARLEHEN',
  podnadpis: 'privates Darlehen nach Art. 312 ff. Obligationenrecht (OR)',
  paticka: paticka('CH-DARLEHEN'),
  prilohy: tilgungsplanCH,
  pripominky: (d) => [
    ...(d.splaceni === 'splatky' ? pripominkySplatek(d, 'Darlehensrate', 'CHF', { celkem: (n) => `insgesamt ${n} Raten`, posledni: 'letzte' }) : []),
    ...(d.splaceni === 'naraz' && naDatum(d.vratit_do) ? [{ nazev: 'Darlehen zurückzahlen', datum: String(d.vratit_do) }] : []),
  ],
  kontrola: [
    'Geld nachweisbar übergeben – per Überweisung oder gegen Quittung.',
    'Zinsen sind unter Privaten nur geschuldet, wenn sie vereinbart sind. Ohne festen Rückzahlungstermin muss das Darlehen innert sechs Wochen nach der ersten Aufforderung zurückbezahlt werden ([Art. 318 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_318)).',
    'Der vom Borger unterschriebene Vertrag gilt als Schuldanerkennung – damit kann im Betreibungsverfahren die provisorische Rechtsöffnung verlangt werden ([Art. 82 SchKG](https://www.fedlex.admin.ch/eli/cc/11/529_488_529/de#art_82)).',
    'Wucherische Zinsen sind unzulässig; einige Kantone haben Höchstzinssätze.',
    TIPP_IDENTITAET_CH,
    TIPP_BAR_CH,
  ],
  zdroje: [OR, OR_312, OR_318, SCHKG_82],
  kroky: de.kroky.map((k) => ({
    ...k,
    pole: k.pole.map((p) =>
      p.id === 'castka'
        ? { ...p, popis: 'Darlehensbetrag (CHF)' }
        : p.id === 'splatka'
          ? { ...p, popis: 'Monatsrate (CHF)' }
          : p.id === 'p_jmeno'
            ? { ...p, popis: 'Darleiher/in – Name' }
            : p.id === 'k_jmeno'
              ? { ...p, popis: 'Borger/in – Name' }
              : p.id === 'ucet_k'
                ? { ...p, popis: 'IBAN Borger/in' }
                : p.id === 'ucet_p'
                  ? { ...p, popis: 'IBAN Darleiher/in' }
                  : p,
    ),
  })),
  podpisy: { vlevo: 'Darleiher/in', vpravo: 'Borger/in' },
  odvozene: { ...de.odvozene, castka_slovy: (d) => betragInFranken(d.castka) },
  clanky: [
    {
      nadpis: 'Vertragsparteien',
      odstavce: [
        '**Darleiher/in:** {{p_jmeno}}, geb. {{p_narozeni}}, wohnhaft {{p_adresa}}',
        '**Borger/in:** {{k_jmeno}}, geb. {{k_narozeni}}, wohnhaft {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Darlehen und Auszahlung',
      odstavce: [
        'Der Darleiher gewährt dem Borger ein Darlehen über {{castka}} (in Worten: {{castka_slovy}}).',
        {
          volba: 'odovzdanie',
          uvodVzor: 'Auszahlung (bitte ankreuzen):',
          moznosti: {
            bar: 'Der Betrag wurde bei Unterzeichnung bar übergeben; der Borger bestätigt den Empfang mit seiner Unterschrift.',
            ueberweisung: 'Der Betrag wird bis {{predani_do}} auf das Konto des Borgers IBAN {{ucet_k}} überwiesen.',
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
            naraz: 'Der Borger zahlt den gesamten Betrag spätestens am {{vratit_do}} zurück.',
            splatky: 'Der Borger zahlt in Monatsraten von {{splatka}}, fällig jeweils am {{splatka_den}}. eines Monats, erstmals im Monat {{prvni_mesic}}, bis zur vollständigen Rückzahlung. Die letzte Rate kann tiefer sein. Ist der Borger mit zwei aufeinanderfolgenden Raten im Verzug, wird der ganze Restbetrag sofort fällig.',
          },
        },
        'Zahlungen erfolgen auf das Konto des Darleihers IBAN {{ucet_p}} oder bar gegen Quittung. Eine vorzeitige Rückzahlung ist jederzeit möglich.',
      ],
    },
    {
      nadpis: 'Schlussbestimmungen',
      odstavce: [
        'Im Übrigen gelten die Art. 312 ff. OR. Änderungen bedürfen der Schriftform.',
        'Jede Partei erhält ein Exemplar dieses Vertrags.',
      ],
    },
  ],
});

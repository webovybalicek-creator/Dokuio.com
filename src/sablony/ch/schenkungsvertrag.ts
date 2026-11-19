/**
 * Schenkungsvertrag (Geld oder bewegliche Sache) – Schweiz. Art. 239 ff. OR; Schenkung von Hand zu Hand formfrei (Art. 242),
 * Schenkungsversprechen schriftlich (Art. 243 Abs. 1). Grundstücke: öffentliche Beurkundung – nicht mit dieser Vorlage.
 * Schenkungssteuer kantonal.
 */
import type { Sablona } from '../typy';
import { schenkungsvertrag as de } from '../de/schenkungsvertrag';
import { schweiz, betragInFranken, paticka } from './schweiz';
import { OR_239, OR_243, CH_SCHENKUNGSSTEUER, TIPP_IDENTITAET_CH } from './quellen';

export const schenkungsvertragCH: Sablona = schweiz({
  ...de,
  kod: 'CH-SCHENKUNG',
  podnadpis: 'über Geld oder eine bewegliche Sache (Art. 239 ff. OR)',
  paticka: paticka('CH-SCHENKUNG'),
  coDal: [
    'Zweimal ausdrucken, beide unterschreiben beide Exemplare.',
    'Geld am besten am selben Tag überweisen, Vermerk „Schenkung“.',
    'Bei grösseren Beträgen bei der Steuerverwaltung des Wohnkantons der schenkenden Person nachfragen, ob eine Schenkungssteuer anfällt.',
  ],
  kontrola: [
    'Eine Schenkung von Hand zu Hand ist formfrei gültig; ein Versprechen, später zu schenken, muss schriftlich sein ([Art. 243 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_243)). Diese Vorlage regelt die sofort vollzogene Schenkung.',
    'Für Grundstücke ist immer eine öffentliche Beurkundung nötig – dafür ist diese Vorlage nicht geeignet.',
    'Die Schenkungssteuer ist kantonal: Ehegatten und eingetragene Partner sind überall befreit, Nachkommen in den meisten Kantonen; Schwyz und Obwalden erheben keine Schenkungssteuer ([ch.ch](https://www.ch.ch/de/schenkungssteuer)).',
    'Bei verschenkten Sachen bekannte Mängel angeben.',
    TIPP_IDENTITAET_CH,
  ],
  zdroje: [OR_239, OR_243, CH_SCHENKUNGSSTEUER],
  kroky: de.kroky.map((k) => ({
    ...k,
    pole: k.pole.map((p) =>
      p.id === 'castka'
        ? { ...p, popis: 'Betrag (CHF)' }
        : p.id === 'vztah'
          ? { ...p, napoveda: 'Wichtig für die kantonale Schenkungssteuer, z. B. Tochter, Neffe.' }
          : p.id === 'vec_popis'
            ? { ...p, placeholder: 'z. B. Personenwagen VW Polo, Fahrgestellnummer …' }
            : p,
    ),
  })),
  odvozene: { castka_slovy: (d) => betragInFranken(d.castka) },
  clanky: [
    ...de.clanky.slice(0, 2),
    {
      ...de.clanky[2],
      vysvetleni: 'Das Geschenk wird sofort übergeben – eine Schenkung von Hand zu Hand.',
    },
    {
      nadpis: 'Schlussbestimmungen',
      vysvetleni: 'Übliche Formalien.',
      odstavce: [
        'Im Übrigen gelten die Art. 239 ff. OR, einschliesslich der gesetzlichen Widerrufsrechte der schenkenden Person (Art. 249 OR).',
        'Eine allfällige kantonale Schenkungssteuer trägt die beschenkte Person, sofern das kantonale Recht nichts anderes bestimmt.',
        'Der Vertrag wird zweifach ausgefertigt; jede Partei erhält ein Exemplar.',
      ],
    },
  ],
});

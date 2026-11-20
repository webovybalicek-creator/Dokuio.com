/**
 * English version: gift agreement for money or a movable item (Switzerland).
 * Original: src/obsah/ch/schenkungsvertrag.ts and src/sablony/ch/schenkungsvertrag.ts.
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-SCHENKUNG', verze: '1.0' },

  nazev: 'Gift Agreement',
  nazevA: 'the gift agreement',
  katalog: {
    popis: 'Give money or an item as a gift.',
    slova: ['gift agreement', 'deed of gift', 'gift of money', 'cash gift', 'gift tax', 'give a car', 'Schenkungsvertrag', 'Schenkung', 'Schenkungssteuer', 'Erbvorbezug'],
  },
  landing: {
    title: 'Gift Agreement Switzerland {rok} – free PDF template',
    description:
      'Gift agreement for money or movable items under Art. 239 et seq. OR – with notes on cantonal gift tax. Bilingual PDF or Word (German original + English), free.',
    perex: 'For gifts of money or items that are handed over immediately. With notes on gift tax in your canton.',
    obsahPopis: 'Four articles under Art. 239 et seq. of the Swiss Code of Obligations (OR).',
    obsah: [
      { nazev: 'Parties', popis: 'Donor and recipient.' },
      { nazev: 'Subject', popis: 'Money or an item.' },
      { nazev: 'Completion', popis: 'Immediate handover.' },
      { nazev: 'Final provisions', popis: 'Tax and copies.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Whatever you don’t know is left as a line to fill in by hand.' },
      { nazev: 'Check the text', popis: 'Preview next to the form.' },
      { nazev: 'Download and sign', popis: 'PDF or Word. The agreement is bilingual: German original and English translation.' },
    ],
    online: ['Amount in words added automatically', 'Signature on screen', 'Draft stays saved in your browser', 'Download as PDF and Word'],
    hodiSe: ['a gift of money within the family', 'giving away a car or jewellery'],
    nehodiSe: [
      'land and flats – a public notarial deed (öffentliche Beurkundung) is required',
      'advance on inheritance (Erbvorbezug) with equalisation rules – better get advice',
    ],
    po: [{ nazev: 'Tax administration', popis: 'For larger amounts, ask whether gift tax (Schenkungssteuer) is payable.' }],
    faq: [
      { q: 'Do I need a notary?', a: 'No, except for land. A gift from hand to hand requires no particular form; a promise to make a gift must be in writing (Art. 243 OR).' },
      { q: 'Do I have to pay gift tax?', a: 'That is governed by the canton. Spouses are exempt everywhere, descendants in most cantons; Schwyz and Obwalden levy no gift tax.' },
      { q: 'Do you store my data?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 239 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR); tax notes according to ch.ch.',
  },
  vytvorit: {
    title: 'Gift Agreement (Switzerland) online – free PDF',
    description: 'Gift agreement for money or items in Switzerland, explained in English. Bilingual PDF or Word, free.',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      parteien: { nazev: 'Donor and recipient' },
      geschenk: { nazev: 'Gift' },
    },
    pole: {
      p_jmeno: { popis: 'Donor – first name and surname' },
      p_narozeni: { popis: 'Date of birth' },
      p_adresa: { popis: 'Address' },
      k_jmeno: { popis: 'Recipient – first name and surname' },
      k_narozeni: { popis: 'Date of birth' },
      k_adresa: { popis: 'Address' },
      vztah: { popis: 'Family relationship (optional)', napoveda: 'Important for cantonal gift tax. Write it in German, e.g. Tochter (daughter), Neffe (nephew).' },
      predmet: { popis: 'What is being given?', moznosti: { penize: 'Money', vec: 'Movable item (e.g. car, jewellery, furniture)' } },
      castka: { popis: 'Amount (CHF)' },
      prevod: { popis: 'How will the money be handed over?', moznosti: { hotove: 'In cash on signing', ucet: 'By transfer on the day of signing' } },
      ucet: { popis: 'Recipient’s IBAN' },
      vec_popis: { popis: 'Description of the item', placeholder: 'e.g. Personenwagen VW Polo, Fahrgestellnummer … (VW Polo car, chassis number …)' },
      vady_popis: { popis: 'Known defects (optional)' },
      misto: { popis: 'Place' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: [
      'Who gives and who accepts the gift.',
      'What is being given.',
      'The gift is handed over immediately – a gift from hand to hand.',
      'Usual formalities.',
    ],
    coDal: [
      'Print twice; both parties sign both copies.',
      'Ideally transfer the money on the same day, with the reference “Schenkung” (gift).',
      'For larger amounts, ask the tax administration (Steuerverwaltung) of the donor’s canton of residence whether gift tax is payable.',
    ],
    kontrola: [
      'A gift from hand to hand is valid without any particular form; a promise to give something later must be in writing ([Art. 243 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_243)). This template covers a gift completed immediately.',
      'Land always requires a public notarial deed (öffentliche Beurkundung) – this template is not suitable for that.',
      'Gift tax is cantonal: spouses and registered partners are exempt everywhere, descendants in most cantons; Schwyz and Obwalden levy no gift tax ([ch.ch](https://www.ch.ch/de/schenkungssteuer)).',
      'For items given away, state any known defects.',
      'Check the other party’s identity using their passport or identity card (Identitätskarte) and copy the name and address exactly.',
    ],
  },

  dokument: {
    nazev: 'Gift Agreement',
    podnadpis: 'for money or a movable item (Art. 239 et seq. of the Swiss Code of Obligations, OR)',
    podpisy: { vlevo: 'Donor', vpravo: 'Recipient' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Donor:** {{p_jmeno}}, born on {{p_narozeni}}, residing at {{p_adresa}}',
          '**Recipient:** {{k_jmeno}}, born on {{k_narozeni}}, residing at {{k_adresa}}, relationship to the Donor: {{vztah}}',
        ],
      },
      {
        nadpis: 'Subject of the Gift',
        odstavce: [
          {
            uvodVzor: 'Subject (tick one option):',
            moznosti: {
              penize: 'The Donor gives the Recipient the sum of money of {{castka}}.',
              vec: 'The Donor gives the Recipient the following item: {{vec_popis}}. Defects known to the Donor: {{vady_popis}}',
            },
          },
          'The Recipient accepts the gift.',
        ],
      },
      {
        nadpis: 'Completion',
        odstavce: [
          {
            uvodVzor: 'For money (tick one):',
            moznosti: {
              hotove: 'The amount was handed over in cash on signing; the Recipient confirms receipt by signing.',
              ucet: 'The amount will be transferred on the day of signing to the account IBAN {{ucet}}.',
            },
          },
          {
            uvodVzor: 'For an item:',
            moznosti: {
              vec: 'The item was handed over on signing; ownership passed upon handover. The Recipient confirms receipt by signing.',
            },
          },
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'In all other respects, Art. 239 et seq. OR apply, including the Donor’s statutory rights of revocation (Art. 249 OR).',
          'Any cantonal gift tax is borne by the Recipient, unless cantonal law provides otherwise.',
          'The agreement is executed in two counterparts; each party receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

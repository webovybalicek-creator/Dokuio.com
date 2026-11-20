/**
 * English version: gift agreement (Germany). Original: src/obsah/de/schenkungsvertrag.ts
 * and src/sablony/de/schenkungsvertrag.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-SCHENKUNG', verze: '1.0' },

  nazev: 'Gift Agreement',
  nazevA: 'the gift agreement',
  katalog: {
    popis: 'Give money or an item as a gift – handed over immediately.',
    slova: ['gift agreement', 'gift', 'deed of gift', 'gift of money', 'give a car', 'gift tax', 'tax-free allowance', 'Schenkungsvertrag', 'Schenkung', 'Geldgeschenk', 'Schenkungsteuer', 'Freibetrag'],
  },
  landing: {
    title: 'Gift Agreement Germany {rok} – free PDF template',
    description:
      'Gift agreement for money or movable items in Germany, without a notary, explained in English. With notes on gift tax. Bilingual PDF or Word, free.',
    perex: 'For gifts that are handed over or transferred immediately. With notes on gift tax (Schenkungsteuer).',
    obsahPopis: 'A gift agreement (Schenkungsvertrag) on a gift completed immediately.',
    obsah: [
      { nazev: 'Parties', popis: 'Who gives, who receives.' },
      { nazev: 'Gift', popis: 'Money or an item.' },
      { nazev: 'Completion', popis: 'In cash, by transfer or by handover.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We add the amount in words.' },
      { nazev: 'Sign', popis: 'Both parties.' },
      { nazev: 'Notify', popis: 'The tax office (Finanzamt) within three months.' },
    ],
    online: ['Filling in with explanations for every field', 'Signature on screen', 'Download as PDF and Word'],
    hodiSe: ['a gift of money to children or grandchildren', 'giving away a car or jewellery'],
    nehodiSe: ['a promise to give something later – this requires a notary', 'land and flats'],
    po: [{ nazev: 'Tax office', popis: 'Notify the gift within three months (Section 30 ErbStG).' }],
    faq: [
      { q: 'Do I need a notary?', a: 'Not if the gift is handed over immediately. A promise for later must be notarially recorded (Section 518 of the German Civil Code, BGB).' },
      { q: 'Is gift tax payable?', a: 'Only above the tax-free allowances (Freibeträge), e.g. €400,000 for children or €20,000 for non-relatives, each per 10 years.' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Sections 516 et seq. of the German Civil Code (BGB) and Sections 16 and 30 of the Inheritance and Gift Tax Act (ErbStG).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a gift agreement online – Germany, free PDF',
    description: 'Guide in English for a gift agreement for money or items in Germany. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
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
      vztah: { popis: 'Family relationship (optional)', napoveda: 'Important for the tax-free allowances, e.g. Tochter (daughter), Neffe (nephew). Ideally write it in German.' },
      predmet: {
        popis: 'What is being given?',
        moznosti: { penize: 'Money', vec: 'Movable item (e.g. car, jewellery, furniture)' },
      },
      castka: { popis: 'Amount (€)' },
      prevod: {
        popis: 'How is the money handed over?',
        moznosti: { hotove: 'In cash when signing', ucet: 'By bank transfer on the day of signing' },
      },
      ucet: { popis: 'Recipient’s IBAN' },
      vec_popis: { popis: 'Description of the item', placeholder: 'e.g. Pkw VW Polo, FIN …, Kennzeichen … (VW Polo car, VIN …, registration number …)' },
      vady_popis: { popis: 'Known defects (optional)' },
      misto: { popis: 'Place' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: [
      'Who gives and who accepts the gift.',
      'What is being given.',
      'The gift is handed over immediately – that is why no notary is needed.',
      'Standard formalities.',
    ],
    coDal: [
      'Print it twice; both parties sign both copies.',
      'Ideally transfer money on the same day, with the payment reference “Schenkung” (gift).',
      'Notify gifts to the tax office (Finanzamt) within three months (Section 30 ErbStG) – even if no tax is payable because of the tax-free allowances.',
    ],
    kontrola: [
      'This template is only for gifts that are handed over or transferred immediately. A promise to give something later must be notarially recorded ([Section 518 BGB](https://www.gesetze-im-internet.de/bgb/__518.html)).',
      'For land, flats and shares in a GmbH (limited company), a notary is always required.',
      'Tax-free allowances for gift tax apply per donor for 10 years, e.g. spouses €500,000, children €400,000, grandchildren €200,000, siblings and non-relatives €20,000 ([Section 16 ErbStG](https://www.gesetze-im-internet.de/erbstg_1974/__16.html)).',
      'The notification to the tax office is due within three months ([Section 30 ErbStG](https://www.gesetze-im-internet.de/erbstg_1974/__30.html)).',
      'For items given as gifts, state any known defects.',
      'Check the identity of the other party using their identity card (Personalausweis) and copy the name and address exactly.',
    ],
  },

  dokument: {
    nazev: 'Gift Agreement',
    podnadpis: 'on a gift completed immediately (Sections 516 et seq. BGB)',
    podpisy: { vlevo: 'donor', vpravo: 'recipient' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Donor:** {{p_jmeno}}, born on {{p_narozeni}}, residing at {{p_adresa}}',
          '**Recipient:** {{k_jmeno}}, born on {{k_narozeni}}, residing at {{k_adresa}}, relationship to the donor: {{vztah}}',
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
            uvodVzor: 'For money (tick):',
            moznosti: {
              hotove: 'The amount was handed over in cash upon signing; the Recipient confirms receipt with their signature.',
              ucet: 'The amount will be transferred to the account IBAN {{ucet}} on the day of signing.',
            },
          },
          {
            uvodVzor: 'For an item:',
            moznosti: { vec: 'The item was handed over upon signing; ownership passed upon handover. The Recipient confirms receipt with their signature.' },
          },
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'In all other respects, Sections 516 et seq. BGB apply, including the Donor’s statutory rights to reclaim and revoke the gift.',
          'Any gift tax payable is borne by the Recipient. The parties are aware that the gift must be notified to the tax office within three months (Section 30 ErbStG).',
          'The agreement is executed in two counterparts; each party receives one.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

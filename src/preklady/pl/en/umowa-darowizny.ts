/**
 * English version: gift agreement (Poland). Original: src/obsah/pl/umowa-darowizny.ts
 * and src/sablony/pl/umowa-darowizny.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-DAROWIZNA', verze: '1.0' },

  nazev: 'Gift Agreement',
  nazevA: 'the gift agreement',
  katalog: {
    popis: 'Gift of money or an item handed over straight away.',
    slova: ['gift', 'gift agreement', 'deed of gift', 'gift of money', 'donation', 'SD-Z2', 'zero tax group', 'umowa darowizny', 'darowizna'],
  },
  landing: {
    title: 'Gift Agreement Poland {rok} – free PDF template',
    description:
      'Gift agreement for money or a movable item in Poland, performed straight away – no notary needed. With an SD-Z2 reminder. Free bilingual PDF or Word.',
    perex: 'For a gift handed over straight away – by bank transfer or in person. With information on tax and the SD-Z2 notification.',
    obsahPopis: 'Gift agreement (umowa darowizny) performed when concluded.',
    obsah: [
      { nazev: 'Parties', popis: 'Donor and recipient.' },
      { nazev: 'Subject', popis: 'Money or an item.' },
      { nazev: 'Performance', popis: 'Transfer or handover on signing.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We add the amount in words (in Polish) ourselves.' },
      { nazev: 'Transfer', popis: 'Within the family – always to a bank account.' },
      { nazev: 'Notify', popis: 'SD-Z2 within 6 months.' },
    ],
    online: [
      'Filling in with an explanation of every field',
      'Signature on screen',
      'Download as PDF and Word or send by e-mail',
      'SD-Z2 deadline in your calendar',
    ],
    hodiSe: [
      'A gift of money within the family',
      'A gift of a car or jewellery',
    ],
    nehodiSe: [
      'A promise of a future gift – requires a notary',
      'Real estate',
    ],
    po: [
      { nazev: 'Tax office (urząd skarbowy)', popis: 'Closest family: SD-Z2 notification within 6 months.' },
    ],
    faq: [
      { q: 'Is a notary needed?', a: 'No, if the gift is performed straight away (Article 890 § 1 of the Civil Code – Kodeks cywilny). A promise for the future requires a notarial deed.' },
      { q: 'When is a gift exempt from tax?', a: 'Within the closest family, after filing the SD-Z2 notification within 6 months, and money must be paid into the recipient’s bank account.' },
      { q: 'Do you store my details?', a: 'No. The document is created only in your browser.' },
    ],
    zakony: 'The template is based on Articles 888–890 of the Polish Civil Code (Kodeks cywilny) and Article 4a of the Inheritance and Gift Tax Act (ustawa o podatku od spadków i darowizn).',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Gift agreement online – Poland, free PDF',
    description: 'Gift agreement for money or an item under Polish law: guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strony: { nazev: 'Donor and recipient' },
      dar: { nazev: 'Subject of the gift' },
    },
    pole: {
      p_jmeno: { popis: 'Donor – first name and surname' },
      p_pesel: { popis: 'PESEL (Polish personal identification number)' },
      p_adresa: { popis: 'Residential address' },
      k_jmeno: { popis: 'Recipient – first name and surname' },
      k_pesel: { popis: 'PESEL' },
      k_adresa: { popis: 'Residential address' },
      vztah: { popis: 'Degree of kinship (optional)', napoveda: 'Important for tax, e.g. córka (daughter), brat (brother). Write it in Polish.' },
      predmet: {
        popis: 'What is being given',
        moznosti: { penize: 'Money', vec: 'A movable item (e.g. a car, jewellery)' },
      },
      castka: { popis: 'Amount (zł)' },
      ucet: { popis: 'Recipient’s bank account', napoveda: 'The transfer documents the gift for the tax office (urząd skarbowy).' },
      vec_popis: { popis: 'Description of the item', placeholder: 'e.g. samochód osobowy Skoda Fabia, VIN …, nr rej. … (passenger car, registration no.)' },
      hodnota: { popis: 'Value of the item (zł)', napoveda: 'Market value – important for tax.' },
      misto: { popis: 'Town' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is being given.', ''],
    coDal: [
      'Print two counterparts; both parties sign both.',
      'Pay the money by transfer into the recipient’s account – within the closest family this is a condition of the tax exemption.',
      'Recipient from the closest family: notify the gift on form SD-Z2 within 6 months if it exceeds the tax-free amount.',
    ],
    kontrola: [
      'This template is only for a gift handed over straight away. A promise of a future gift requires a notarial deed (Article 890 of the Civil Code – Kodeks cywilny).',
      'Real estate can only be given before a notary.',
      'The closest family (spouse, children, grandchildren, parents, grandparents, siblings, stepchild, stepfather, stepmother) is exempt from tax after filing SD-Z2 within 6 months – money must be paid into the recipient’s account ([podatki.gov.pl](https://www.podatki.gov.pl/poradniki-i-informatory/nabycie-spadku-lub-darowizny-w-najblizszej-rodzinie-zwolnienie-od-podatku-sd)).',
      'The tax-free amount in group I is PLN 36,120 from one person over 5 years; more distant persons have lower tax-free amounts and pay tax (SD-3 return).',
      'Check the other party’s identity against their identity card (dowód osobisty) and copy their name exactly as it appears in the card.',
    ],
    pripominky: {
      'SD-Z2: ostatni dzień zgłoszenia darowizny': {
        nazev: 'SD-Z2: last day to notify the gift',
        popis: 'Applies to the closest family when the value of gifts from this person over 5 years exceeds PLN 36,120.',
      },
    },
  },

  dokument: {
    nazev: 'Gift Agreement',
    podnadpis: 'performed upon its conclusion (Article 888 et seq. of the Civil Code – Kodeks cywilny)',
    podpisy: { vlevo: 'donor', vpravo: 'recipient' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Donor:** {{p_jmeno}}, PESEL {{p_pesel}}, residing at {{p_adresa}}',
          '**Recipient:** {{k_jmeno}}, PESEL {{k_pesel}}, residing at {{k_adresa}}, degree of kinship: {{vztah}}',
        ],
      },
      {
        nadpis: 'Subject of the Gift',
        odstavce: [
          {
            uvodVzor: 'Subject (tick):',
            moznosti: {
              penize: 'The Donor gives the Recipient the sum of {{castka}}, transferred on the date of the agreement to the Recipient’s account No. {{ucet}}.',
              vec: 'The Donor gives the Recipient the following item: {{vec_popis}}, with a market value of {{hodnota}}. The item was handed over to the Recipient upon signing the agreement.',
            },
          },
          'The Recipient accepts the gift and confirms its receipt.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'The parties declare that the gift was performed upon conclusion of the agreement (Article 890 § 1 of the Civil Code).',
          'Matters not otherwise governed are governed by the provisions of the Civil Code. The agreement has been drawn up in two counterparts, one for each party.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

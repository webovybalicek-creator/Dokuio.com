/**
 * English version: statutory warranty claim for defects (Hungary). Original: src/obsah/hu/kellekszavatossagi-igeny.ts
 * and src/sablony/hu/kellekszavatossagi-igeny.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-SZAVATOSSAG', verze: '1.0' },

  nazev: 'Warranty Claim for a Defective Product',
  nazevA: 'the warranty claim for a defective product',
  katalog: {
    popis: 'Defective product: repair, replacement or money back.',
    slova: ['warranty claim', 'complaint about defects', 'faulty product', 'return a faulty item', 'repair or replacement', 'refund', 'kellékszavatosság', 'kellékszavatossági igény', 'reklamáció'],
  },
  landing: {
    title: 'Warranty Claim for Defects Hungary {rok} – free PDF template',
    description:
      'Statutory warranty claim for a faulty product in Hungary, in English: repair, replacement, price cut or withdrawal; 2 years for consumers. Bilingual PDF or Word, free.',
    perex: 'If the product you bought is defective, you can ask in writing for repair, replacement or your money back. The letter describes the defect and your claim precisely.',
    obsahPopis: 'What it contains.',
    obsah: [
      { nazev: 'Purchase', popis: 'Product, date, receipt, price.' },
      { nazev: 'Defect', popis: 'When you noticed it and what it is.' },
      { nazev: 'Claim', popis: 'Repair, replacement, price reduction or withdrawal.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Product and defect.' },
      { nazev: 'Submit it', popis: 'In the shop or by registered letter.' },
      { nazev: 'Confirmation', popis: 'Ask for a confirmation of receipt.' },
    ],
    online: ['Download as PDF and Word', 'No sign-up', 'Signing on screen'],
    hodiSe: ['you bought a defective product from a business'],
    nehodiSe: ['you bought from a private individual – different rules apply there'],
    po: [{ nazev: 'Receipt', popis: 'Keep the receipt or invoice.' }],
    faq: [
      { q: 'How long can I make a claim?', a: 'As a consumer, for 2 years from performance (delivery of the product).' },
      {
        q: 'What can I ask for first?',
        a: 'Primarily repair or replacement; a price reduction or withdrawal if that is not possible or is not carried out.',
      },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony: 'The template is based on the statutory warranty rules (kellékszavatosság) of the Hungarian Civil Code (Polgári Törvénykönyv).',
    souvisejiciPopis: 'Other everyday documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a warranty claim for defects online – Hungary, PDF',
    description: 'Guide in English for a statutory warranty claim for a faulty product in Hungary: repair, replacement, reduction or withdrawal. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'claim', g: 'claim', a: 'claim', l: 'claim' },
    kroky: {
      adatok: { nazev: 'Product and defect' },
    },
    pole: {
      firma: { popis: 'Name of the business (seller)' },
      firma_adresa: { popis: 'Address of the business' },
      termek: { popis: 'Product', placeholder: 'e.g. Samsung Galaxy A55, IMEI …' },
      koupeno: { popis: 'Date of purchase' },
      doklad: { popis: 'Receipt or invoice number' },
      cena: { popis: 'Purchase price (Ft)' },
      zjisteno: { popis: 'Date the defect was noticed' },
      vada: { popis: 'Description of the defect', placeholder: 'e.g. a készülék töltés közben kikapcsol (the device switches off while charging)' },
      naroky: {
        popis: 'What you are asking for',
        moznosti: {
          javitas: 'Repair',
          csere: 'Replacement',
          arleszallitas: 'Price reduction',
          elallas: 'Withdrawal (refund of the purchase price)',
        },
      },
      jmeno: { popis: 'Your name' },
      adresa: { popis: 'Your address and phone number' },
      misto: { popis: 'Town' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Hand the product in at the shop with the printed claim, or send the claim by registered letter.',
      'Ask for a report or a confirmation of receipt, and keep the receipt or invoice.',
    ],
    kontrola: [
      'As a consumer, you can make a statutory warranty claim (kellékszavatosság) for 2 years from performance.',
      'You can primarily ask for repair or replacement; a price reduction or withdrawal only if that is not possible or the business does not carry it out.',
      'Report the defect without delay once you discover it – a defect reported within two months counts as reported in time.',
      'Attach a copy of the receipt or invoice and take photos of the defect.',
    ],
  },

  dokument: {
    nazev: 'Statutory Warranty Claim',
    podnadpis: 'claim based on defective performance (Hungarian Civil Code – Polgári Törvénykönyv)',
    podpisy: { vlevo: 'buyer', vpravo: 'received on behalf of the seller (date, signature)' },
    clanky: [
      {
        nadpis: 'Statutory Warranty Claim',
        odstavce: [
          '**To:** {{firma}}, {{firma_adresa}}',
          'I, the undersigned **{{jmeno}}** ({{adresa}}), bought the following product from you on {{koupeno}}: {{termek}}, purchase price: {{cena}}, receipt/invoice number: {{doklad}}.',
          'The product is defective. I noticed the defect on {{zjisteno}}; description: {{vada}}',
          {
            uvod: 'Relying on my statutory warranty right, I request:',
            uvodVzor: 'Relying on my statutory warranty right, I request (tick one option):',
            moznosti: {
              javitas: 'repair of the product,',
              csere: 'replacement of the product,',
              arleszallitas: 'a proportionate reduction of the purchase price,',
              elallas: 'refund of the purchase price (withdrawal from the contract),',
            },
          },
          'Please respond to my claim within the deadline set by law, and carry out the repair or replacement within a reasonable time and without significant inconvenience to me.',
          'Attachment: copy of the receipt or invoice.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

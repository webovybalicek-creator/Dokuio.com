/**
 * English version: sale agreement for used goods (Hungary). Original: src/obsah/hu/adasveteli-szerzodes.ts
 * and src/sablony/hu/adasveteli-szerzodes.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-ADASVETEL', verze: '1.0' },

  nazev: 'Sale Agreement for Used Goods',
  nazevA: 'the sale agreement for used goods',
  katalog: {
    popis: 'Sale of a used item between private individuals.',
    slova: ['sale agreement', 'bill of sale', 'sell a used item', 'second-hand sale', 'bicycle sale', 'phone sale', 'furniture sale', 'adásvételi szerződés', 'ingóság adásvétel'],
  },
  landing: {
    title: 'Sale Agreement for Used Goods Hungary {rok} – free PDF template',
    description:
      'Sale agreement for used goods (bicycle, phone, furniture) in Hungary, explained in English: description, known defects, price. Bilingual PDF or Word, free.',
    perex: 'Selling a used item in writing: what, in what condition and for how much.',
    obsahPopis: 'What it contains.',
    obsah: [
      { nazev: 'Item', popis: 'Exact description, serial number.' },
      { nazev: 'Defects', popis: 'What the buyer knew about.' },
      { nazev: 'Purchase price', popis: 'Cash or bank transfer.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Parties and item.' },
      { nazev: 'Inspection', popis: 'The buyer looks the item over.' },
      { nazev: 'Signing', popis: 'In two counterparts.' },
    ],
    online: ['The amount in words (in Hungarian) is added automatically', 'Signing on screen', 'Download as PDF and Word'],
    hodiSe: ['you are selling a bicycle, phone, furniture or a machine'],
    nehodiSe: ['a motor vehicle – there is a separate template for that', 'real estate – a lawyer’s countersignature (ügyvédi ellenjegyzés) is required'],
    po: [{ nazev: 'Documents', popis: 'Also hand over the warranty card and the invoice.' }],
    faq: [
      { q: 'Does it have to be in writing?', a: 'It is not compulsory, but in writing it is clear what the buyer bought and in what condition.' },
      { q: 'What if a defect appears later?', a: 'The buyer cannot rely on known defects that were written into the agreement.' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony: 'The template is based on the sale rules of the Hungarian Civil Code (Polgári Törvénykönyv).',
    souvisejiciPopis: 'Other everyday documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a sale agreement for used goods online – Hungary, PDF',
    description: 'Guide in English for a sale agreement for used goods in Hungary, with the price in words and known defects. Bilingual PDF or Word, free, no sign-up.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      felek: { nazev: 'Parties' },
      dolog: { nazev: 'The item and the price' },
    },
    pole: {
      p_jmeno: { popis: 'Seller’s name' },
      p_adresa: { popis: 'Seller’s address' },
      k_jmeno: { popis: 'Buyer’s name' },
      k_adresa: { popis: 'Buyer’s address' },
      predmet: { popis: 'Description of the item', placeholder: 'e.g. Trek Marlin 7 kerékpár, vázszám …, 2023 (bicycle, frame number …)' },
      hibak: {
        popis: 'Known defects',
        moznosti: { nincs: 'The seller is not aware of any defect', van: 'There are known defects' },
      },
      hibak_leiras: { popis: 'Description of the defects' },
      cena: { popis: 'Purchase price (Ft)' },
      platba: {
        popis: 'Payment',
        moznosti: { keszpenz: 'In cash when signing', utalas: 'By bank transfer' },
      },
      ucet: { popis: 'Seller’s bank account number' },
      splatnost: { popis: 'Payment deadline' },
      misto: { popis: 'Town' },
      datum_podpisu: { popis: 'Date of the agreement' },
    },
    vysvetleni: ['', '', '', ''],
    coDal: [
      'Print it in two counterparts; both of you sign both copies.',
      'Hand over the item with its accessories and documents (warranty card, invoice).',
    ],
    kontrola: [
      'Describe the item precisely (type, serial number, accessories).',
      'Write the known defects into the agreement – the buyer cannot later rely on a defect they knew about.',
      'For a motor vehicle, use the separate car sale agreement (gépjármű adásvételi szerződés) – witnesses are also needed there.',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
      'Count the cash when signing; it is better to transfer a larger amount – the bank debit notice is the best proof.',
    ],
  },

  dokument: {
    nazev: 'Sale Agreement',
    podnadpis: 'sale of movable property under the Hungarian Civil Code (Polgári Törvénykönyv)',
    podpisy: { vlevo: 'seller', vpravo: 'buyer' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: ['**Seller:** {{p_jmeno}}, address: {{p_adresa}}', '**Buyer:** {{k_jmeno}}, address: {{k_adresa}}'],
      },
      {
        nadpis: 'Subject of the Agreement',
        odstavce: [
          'The Seller sells and the Buyer buys the following item: {{predmet}}',
          'The Seller declares that the item is their property and that no third party has any right to it.',
          {
            uvodVzor: 'Known defects (tick one option):',
            moznosti: {
              nincs: 'The Seller is not aware of any defect of the item.',
              van: 'The Seller has informed the Buyer of the following defects: {{hibak_leiras}}',
            },
          },
          'The Buyer has inspected the item and buys it in the condition stated above.',
        ],
      },
      {
        nadpis: 'Purchase Price',
        odstavce: [
          'The purchase price is {{cena}}.',
          {
            uvodVzor: 'Payment (tick one option):',
            moznosti: {
              keszpenz: 'The Buyer paid the purchase price in cash upon signing, which the Seller acknowledges by their signature.',
              utalas: 'The Buyer shall transfer the purchase price to the Seller’s bank account No. {{ucet}} no later than {{splatnost}}.',
            },
          },
          'Ownership of the item passes to the Buyer upon payment of the full purchase price and handover of the item.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Matters not governed by this agreement are governed by the provisions of the Hungarian Civil Code. This agreement is executed in two identical counterparts.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

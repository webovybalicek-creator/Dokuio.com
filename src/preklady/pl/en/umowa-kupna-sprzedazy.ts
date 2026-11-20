/**
 * English version: sale agreement for a movable item (Poland). Original: src/obsah/pl/umowa-kupna-sprzedazy.ts
 * and src/sablony/pl/umowa-sprzedazy.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-SPRZEDAZ-RZECZY', verze: '1.0' },

  nazev: 'Sale Agreement',
  nazevA: 'the sale agreement',
  katalog: {
    popis: 'Sale of used items between private individuals.',
    slova: ['sale agreement', 'bill of sale', 'sell an item', 'second-hand', 'used item', 'bicycle', 'phone', 'OLX', 'PCC', 'umowa kupna-sprzedaży', 'sprzedaż'],
  },
  landing: {
    title: 'Sale Agreement for Goods Poland {rok} – free PDF template',
    description:
      'Sale agreement for a movable item in Poland, in English: description, defects, price, payment and PCC tax (PLN 3,000 threshold). Free bilingual PDF or Word.',
    perex: 'For selling used items between private individuals – a bicycle, a phone, furniture.',
    obsahPopis: 'A short sale agreement (umowa kupna-sprzedaży) with a description of the item and its defects.',
    obsah: [
      { nazev: 'Parties', popis: 'Who is selling and who is buying.' },
      { nazev: 'Item', popis: 'Description and known defects.' },
      { nazev: 'Price', popis: 'Payment and handover.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We add the price in words (in Polish) ourselves.' },
      { nazev: 'Check', popis: 'Inspect the item together.' },
      { nazev: 'Sign', popis: 'Both parties.' },
    ],
    online: [
      'Filling in with an explanation of every field',
      'Signature on screen',
      'Download as PDF and Word or send by e-mail',
      'PCC-3 reminder in your calendar',
    ],
    hodiSe: [
      'A sale through a classified ad',
      'More expensive used equipment',
    ],
    nehodiSe: [
      'Cars – use the car sale agreement for that',
      'Real estate',
    ],
    po: [
      { nazev: 'PCC', popis: 'Above PLN 3,000 the buyer pays 2% within 14 days (tax on civil-law transactions, PCC-3 return).' },
    ],
    faq: [
      { q: 'Do I have to pay PCC?', a: 'The buyer pays 2% of the market value if it exceeds PLN 3,000 (from 3 Nov 2026).' },
      { q: 'Do you store my details?', a: 'No. The document is created only in your browser.' },
    ],
    zakony: 'The template is based on Article 535 et seq. of the Polish Civil Code (Kodeks cywilny) and the Act on the Tax on Civil-Law Transactions (ustawa o PCC).',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Sale agreement for goods online – Poland, free PDF',
    description: 'Sale agreement for a used item under Polish law: guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strony: { nazev: 'Seller and buyer' },
      rzecz: { nazev: 'Subject of the sale' },
      cena: { nazev: 'Price and handover' },
    },
    pole: {
      p_jmeno: { popis: 'Seller – first name and surname' },
      p_pesel: { popis: 'PESEL (Polish personal identification number)' },
      p_adresa: { popis: 'Residential address' },
      k_jmeno: { popis: 'Buyer – first name and surname' },
      k_pesel: { popis: 'PESEL' },
      k_adresa: { popis: 'Residential address' },
      vec: { popis: 'What is being sold', placeholder: 'e.g. rower elektryczny Kross Trans Hybrid, nr ramy WC12345, z ładowarką (e-bike, frame no., with charger)' },
      vady: { popis: 'Known defects (optional, ideally in Polish)' },
      cena: { popis: 'Price (zł)' },
      platba: {
        popis: 'Payment',
        moznosti: { gotowka: 'In cash when signing', przelew: 'By bank transfer before handover' },
      },
      ucet: { popis: 'Seller’s bank account' },
      misto: { popis: 'Town' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is being sold and in what condition.', '', ''],
    coDal: [
      'Print two counterparts; both parties sign both.',
      'Buyer: if the value of the item exceeds PLN 3,000, file the PCC-3 return and pay 2% tax within 14 days.',
    ],
    kontrola: [
      'Describe the item precisely: make, model, serial number, accessories.',
      'Enter known defects – concealed defects give the buyer the right to claims under the statutory warranty (rękojmia).',
      'The buyer pays 2% PCC on the market value if it exceeds PLN 3,000 (the threshold applies from 3 November 2026, previously PLN 1,000) – [PCC-3](https://www.podatki.gov.pl/podatki-osobiste/pcc/formularze/).',
      'Check the other party’s identity against their identity card (dowód osobisty) and copy their name exactly as it appears in the card.',
      'Count cash only when signing; larger amounts are better paid by transfer – the transfer confirmation is the best proof of payment.',
    ],
    pripominky: {
      'PCC-3: deklaracja i 2% podatku (kupujący)': {
        nazev: 'PCC-3: tax return and 2% tax (buyer)',
        popis: '14 days from concluding the agreement, if the market value of the item exceeds PLN 3,000.',
      },
    },
  },

  dokument: {
    nazev: 'Sale Agreement',
    podnadpis: 'for a movable item, concluded under Article 535 et seq. of the Civil Code (Kodeks cywilny)',
    podpisy: { vlevo: 'seller', vpravo: 'buyer' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Seller:** {{p_jmeno}}, PESEL {{p_pesel}}, residing at {{p_adresa}}',
          '**Buyer:** {{k_jmeno}}, PESEL {{k_pesel}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Subject of the Agreement',
        odstavce: [
          'The Seller sells the Buyer the following item: {{vec}}.',
          'The Seller declares that the item is their property and is free from third-party rights.',
          'The Seller has informed the Buyer of the following defects: {{vady}}. The Buyer has familiarised themselves with the condition of the item.',
        ],
      },
      {
        nadpis: 'Price and Handover of the Item',
        odstavce: [
          'The price is **{{cena}}**.',
          {
            uvodVzor: 'Payment (tick):',
            moznosti: {
              gotowka: 'The price was paid in cash upon signing the agreement, which the Seller confirms by their signature.',
              przelew: 'The price shall be paid by bank transfer to account No. {{ucet}} before handover of the item.',
            },
          },
          'The item is handed over after payment of the full price; at that moment ownership passes to the Buyer.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'The costs of the agreement, including the tax on civil-law transactions, are borne by the Buyer.',
          'Matters not otherwise governed are governed by the provisions of the Civil Code. The agreement has been drawn up in two counterparts, one for each party.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

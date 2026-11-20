/**
 * English version: purchase agreement for movable goods (Slovakia). Original: src/obsah/sk/kupna-zmluva.ts
 * and src/sablony/sk/kupna-zmluva.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-KUPNA-VEC', verze: '1.0' },

  nazev: 'Purchase Agreement for Goods',
  nazevA: 'the purchase agreement',
  katalog: {
    popis: 'Sale of used items between private individuals.',
    slova: ['purchase agreement', 'sale agreement', 'bill of sale', 'second-hand', 'bicycle', 'mobile phone', 'used item', 'kúpna zmluva', 'predaj'],
  },
  landing: {
    title: 'Purchase Agreement for Goods Slovakia {rok} – free PDF template',
    description:
      'Free purchase agreement (kúpna zmluva) for a movable item in Slovakia: description, defects, price, payment. Bilingual PDF and Word, explained in English.',
    perex: 'For selling used items between private individuals – a bicycle, mobile phone, furniture, musical instrument.',
    obsahPopis: 'A short agreement describing the items and their defects.',
    obsah: [
      { nazev: 'Parties', popis: 'Who is selling and who is buying.' },
      { nazev: 'Item', popis: 'Description and known defects.' },
      { nazev: 'Price', popis: 'Payment and handover.' },
    ],
    kroky: [
      { nazev: 'Fill in', popis: 'We add the price in words (in Slovak) ourselves.' },
      { nazev: 'Inspect', popis: 'Look at the item together.' },
      { nazev: 'Sign', popis: 'Both parties.' },
    ],
    online: [
      'Filling in with an explanation of every field',
      'Signature on screen',
      'Download as PDF and Word, or send by e-mail',
    ],
    hodiSe: [
      'Sales through a second-hand market or an advert',
      'More expensive used devices',
    ],
    nehodiSe: [
      'Cars – there is a car purchase agreement for that',
      'Real estate',
    ],
    po: [
      { nazev: 'Cash', popis: 'For larger amounts, a bank transfer is better.' },
    ],
    faq: [
      { q: 'Does a purchase agreement have to be in writing?', a: 'For movable items, no, but a written agreement is the best evidence.' },
      { q: 'Do you store my details?', a: 'No. The document is created only in your browser.' },
    ],
    zakony: 'The template is based on Section 588 et seq. of the Slovak Civil Code (Občiansky zákonník).',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Purchase agreement for goods online – Slovakia, PDF',
    description: 'Guide in English for a purchase agreement for a used item in Slovakia. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strany: { nazev: 'Seller and buyer' },
      vec: { nazev: 'Subject of the purchase' },
      cena: { nazev: 'Price and handover' },
    },
    pole: {
      p_jmeno: { popis: 'Seller – full name' },
      p_narozeni: { popis: 'Date of birth' },
      p_adresa: { popis: 'Permanent address' },
      k_jmeno: { popis: 'Buyer – full name' },
      k_narozeni: { popis: 'Date of birth' },
      k_adresa: { popis: 'Permanent address' },
      vec: { popis: 'What is being sold', placeholder: 'e.g. bicykel Kellys Spider 70, výrobné číslo WC12345, s nabíjačkou a dvoma kľúčmi (Kellys Spider 70 bicycle, serial number WC12345, with charger and two keys)' },
      vady: { popis: 'Known defects (optional)', placeholder: 'e.g. škrabance na ráme (scratches on the frame)' },
      cena: { popis: 'Purchase price (€)' },
      platba: {
        popis: 'Payment',
        moznosti: { hotove: 'In cash on signing', prevod: 'By transfer before handover' },
      },
      ucet: { popis: 'Seller’s IBAN' },
      misto: { popis: 'Place' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is being sold and in what condition.', '', ''],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'Before signing, inspect and try out the item together.',
    ],
    kontrola: [
      'Describe the item precisely: brand, model, serial number, accessories.',
      'The seller should inform the buyer of defects they know about. Concealed defects may be grounds for withdrawal or a price reduction.',
      'For more expensive items, check the serial number and ask for the original proof of purchase.',
      'Check the other party’s identity against their identity card (občiansky preukaz) and copy the names exactly as shown on it.',
      'Count cash only at signing; larger amounts are better paid by transfer. Between two private individuals who are not traders, the law prohibits cash payments above €15,000; if one party is a trader or company, above €5,000.',
    ],
  },

  dokument: {
    nazev: 'Purchase Agreement',
    podnadpis: 'for a movable item, concluded under Section 588 et seq. of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník)',
    podpisy: { vlevo: 'seller', vpravo: 'buyer' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Seller:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanent address {{p_adresa}}',
          '**Buyer:** {{k_jmeno}}, date of birth {{k_narozeni}}, permanent address {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Subject of the Purchase',
        odstavce: [
          'The Seller sells to the Buyer the following movable item: {{vec}} (the “Item”).',
          'The Seller declares that they are the owner of the Item and that the Item is not encumbered by any third-party rights.',
          'The Seller has informed the Buyer of the following defects of the Item: {{vady}}. The Buyer has inspected the Item and buys it in this condition.',
        ],
      },
      {
        nadpis: 'Purchase Price and Handover',
        odstavce: [
          'The purchase price is **{{cena}}**.',
          {
            uvodVzor: 'Payment (tick one option):',
            moznosti: {
              hotove: 'The purchase price was paid in cash on signing the agreement; the Seller confirms its receipt by signing.',
              prevod: 'The purchase price will be paid by transfer to the account IBAN {{ucet}} before the Item is handed over.',
            },
          },
          'Ownership of the Item passes to the Buyer when the Buyer takes it over after paying the full purchase price.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Rights and obligations not governed by this agreement are governed by the Civil Code.',
          'The agreement is made in two counterparts, one for each party.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

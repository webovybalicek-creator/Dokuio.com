/**
 * English version: purchase agreement for a used item between private persons (Austria).
 * Original: src/obsah/at/kaufvertrag-privat.ts and src/sablony/at/kaufvertrag-privat.ts.
 * The German text prevails; rules and glossary – PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';
import { EIGEN } from '../_eigen';

const T = {
  sablona: { kod: 'AT-KAUF-PRIVAT', verze: '1.0' },

  nazev: 'Private Purchase Agreement',
  nazevA: 'purchase agreement',
  katalog: {
    popis: 'Sell second-hand items privately (bicycle, mobile phone, furniture).',
    slova: ['purchase agreement', 'sale agreement', 'private sale', 'second-hand', 'used item', 'bicycle', 'mobile phone', 'furniture', 'warranty exclusion', 'Kaufvertrag privat', 'Privatverkauf'],
  },
  landing: {
    title: 'Private Purchase Agreement Austria {rok} – free PDF template',
    description:
      'Purchase agreement for second-hand items between private persons under the Austrian ABGB, with a warranty exclusion. Free bilingual PDF and Word.',
    perex: 'For selling second-hand items from one private person to another – bicycle, mobile phone, furniture, musical instrument.',
    obsahPopis: 'Short agreement with a statutory warranty clause.',
    obsah: [
      { nazev: 'Parties', popis: 'Who is selling, who is buying.' },
      { nazev: 'Item sold', popis: 'Description and known defects.' },
      { nazev: 'Price and statutory warranty', popis: 'Payment and liability for defects.' },
    ],
    kroky: [
      { nazev: 'Fill in', popis: 'We add the price in words (German).' },
      { nazev: 'Check', popis: 'Inspect the item together.' },
      { nazev: 'Sign', popis: 'Both parties.' },
    ],
    online: ['Guidance for every field', 'Sign on screen', 'Download as PDF and Word'],
    hodiSe: ['selling via classified ads', 'expensive second-hand devices'],
    nehodiSe: ['cars – use the used car purchase agreement instead', 'sales by businesses to consumers'],
    po: [{ nazev: 'Receipt', popis: 'If paid in cash, issue a receipt (Quittung).' }],
    faq: [
      { q: 'Can I exclude the statutory warranty (Gewährleistung)?', a: 'Between private persons, yes – but not for fraudulently concealed defects or warranted characteristics.' },
      { q: 'Do you store my data?', a: 'No. The document is created entirely in your browser.' },
    ],
    zakony: 'The template is based on §§ 1053 et seq. and §§ 922 et seq. of the Austrian General Civil Code (ABGB).',
    souvisejiciPopis: 'More documents, also free of charge.',
  },
  vytvorit: {
    title: 'Fill in a private purchase agreement online – Austria, PDF',
    description: 'Purchase agreement for second-hand items between private persons in Austria, with English guidance. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      parteien: { nazev: 'Seller and buyer' },
      sache: { nazev: 'Item sold' },
      preis: { nazev: 'Price and handover' },
    },
    pole: {
      p_jmeno: { popis: 'Seller – first and last name' },
      p_adresa: { popis: 'Address' },
      k_jmeno: { popis: 'Buyer – first and last name' },
      k_adresa: { popis: 'Address' },
      vec: {
        popis: 'What is being sold?',
        placeholder: 'e.g. E-Bike Cube Kathmandu Hybrid, Rahmennr. WC12345, mit Ladegerät und zwei Schlüsseln (e-bike, frame no. WC12345, with charger and two keys)',
      },
      vady: { popis: 'Known defects (optional)', placeholder: 'e.g. Kratzer am Rahmen, Akku hält ca. 60 km (scratches on the frame, battery lasts approx. 60 km)' },
      zaruka: {
        popis: 'Statutory warranty (Gewährleistung)',
        moznosti: { vylouceni: 'Excluded (usual between private persons)', zakon: 'Statutory warranty applies' },
      },
      cena: { popis: 'Purchase price (€)' },
      platba: { popis: 'Payment', moznosti: { bar: 'In cash on handover', ueberweisung: 'By bank transfer before handover' } },
      ucet: { popis: 'Seller’s IBAN' },
      misto: { popis: 'Place' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is being sold and in what condition.', '', 'Liability for defects after the sale.'],
    coDal: [
      'Print twice; both parties sign both copies.',
      'Inspect the item together before signing; if paid in cash, issue a receipt (Quittung).',
    ],
    kontrola: [
      'Describe the item precisely: brand, model, serial number, accessories.',
      'Enter all known defects – a warranty exclusion does not apply to fraudulently concealed defects or expressly warranted characteristics.',
      'The warranty exclusion is only suitable between private persons. Businesses may not use it towards consumers.',
      'Check the other party’s identity against their identity card and copy their name and address exactly.',
      'Count cash only at signing; larger amounts are better paid by bank transfer – the bank statement is the best proof of payment.',
    ],
  },

  dokument: {
    nazev: 'Purchase Agreement',
    podnadpis: 'for a used item between private persons (§§ 1053 et seq. ABGB)',
    podpisy: { vlevo: 'Seller', vpravo: 'Buyer' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: ['**Seller:** {{p_jmeno}}, residing at {{p_adresa}}', '**Buyer:** {{k_jmeno}}, residing at {{k_adresa}}'],
      },
      {
        nadpis: 'Item sold',
        odstavce: [
          'The Seller sells the following used item to the Buyer: {{vec}}.',
          'Defects known to the Seller: {{vady}}',
          'The Seller warrants that they are the owner of the item and that the item is free from third-party rights.',
        ],
      },
      {
        nadpis: 'Purchase price and handover',
        odstavce: [
          'The purchase price is **{{cena}}**.',
          {
            uvodVzor: 'Payment (tick one):',
            moznosti: {
              bar: 'The purchase price is paid in cash on handover; the Seller confirms receipt with their signature.',
              ueberweisung: 'The purchase price is transferred before handover to the account IBAN {{ucet}}.',
            },
          },
          'Ownership passes to the Buyer upon full payment of the purchase price and handover.',
        ],
      },
      {
        nadpis: 'Statutory warranty',
        odstavce: [
          {
            uvodVzor: 'Statutory warranty (tick one):',
            moznosti: {
              vylouceni: 'The item is sold as inspected, with the statutory warranty excluded. The exclusion does not apply to fraudulently concealed defects or expressly warranted characteristics.',
              zakon: 'The statutory warranty under §§ 922 et seq. ABGB applies.',
            },
          },
          'This agreement is made in two copies; each party receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

const E = EIGEN.en['kaufvertrag-privat'];
export default {
  ...T,
  landing: {
    ...T.landing,
    ...E,
    faq: E.faq ? [...E.faq, ...T.landing.faq.filter((f) => /store|зберіга/i.test(f.q))] : T.landing.faq,
  },
} satisfies PrekladDokumentu;

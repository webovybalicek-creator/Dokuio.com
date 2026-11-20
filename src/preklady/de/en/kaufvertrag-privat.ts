/**
 * English version: purchase agreement for a used item between private individuals (Germany).
 * Original: src/obsah/de/kaufvertrag-privat.ts and src/sablony/de/kaufvertrag-privat.ts.
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-KAUF-PRIVAT', verze: '1.0' },

  nazev: 'Private Purchase Agreement',
  nazevA: 'the private purchase agreement',
  katalog: {
    popis: 'Selling used items privately (bicycle, mobile phone, furniture).',
    slova: ['purchase agreement', 'private sale', 'sell second-hand', 'used item', 'bicycle', 'mobile phone', 'furniture', 'sold as seen', 'warranty exclusion', 'Kaufvertrag privat', 'Privatverkauf'],
  },
  landing: {
    title: 'Private Purchase Agreement Germany {rok} – free PDF template',
    description:
      'Purchase agreement for used items between private individuals in Germany: description, defects, price, exclusion of warranty. Free bilingual PDF or Word.',
    perex: 'For selling used items from one private individual to another – bicycle, mobile phone, furniture, musical instrument.',
    obsahPopis: 'A short agreement with a rule on statutory warranty.',
    obsah: [
      { nazev: 'Parties', popis: 'Who sells, who buys.' },
      { nazev: 'Item sold', popis: 'Description and known defects.' },
      { nazev: 'Price and warranty', popis: 'Payment and liability.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We add the price in words.' },
      { nazev: 'Check', popis: 'Inspect the item together.' },
      { nazev: 'Sign', popis: 'Both parties.' },
    ],
    online: ['Filling in with explanations for every field', 'Signature on screen', 'Download as PDF and Word'],
    hodiSe: ['sales via classified ads (Kleinanzeigen)', 'expensive used devices'],
    nehodiSe: ['cars – use the used car purchase agreement for that', 'sales by traders to consumers'],
    po: [{ nazev: 'Receipt', popis: 'For cash payment, issue a receipt (Quittung).' }],
    faq: [
      {
        q: 'Can I exclude the statutory warranty (Gewährleistung)?',
        a: 'Between private individuals, yes – but not for defects you conceal (Section 444 BGB).',
      },
      { q: 'Do you store my details?', a: 'No. The document is put together only in your browser.' },
    ],
    zakony: 'The template is based on Sections 433 et seq. and Section 444 of the German Civil Code (Bürgerliches Gesetzbuch, BGB).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a private purchase agreement online – Germany, PDF',
    description: 'Purchase agreement for used items between private individuals in Germany: guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · result as PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      parteien: { nazev: 'Seller and buyer' },
      sache: { nazev: 'Item sold' },
      preis: { nazev: 'Price and handover' },
    },
    pole: {
      p_jmeno: { popis: 'Seller – first name and surname' },
      p_adresa: { popis: 'Address' },
      k_jmeno: { popis: 'Buyer – first name and surname' },
      k_adresa: { popis: 'Address' },
      vec: {
        popis: 'What is being sold?',
        placeholder: 'e.g. E-Bike Cube Kathmandu Hybrid, Rahmennr. WC12345, mit Ladegerät und zwei Schlüsseln (e-bike, frame No. WC12345, with charger and two keys)',
      },
      vady: {
        popis: 'Known defects (optional)',
        placeholder: 'e.g. Kratzer am Rahmen, Akku hält ca. 60 km (scratches on the frame, battery lasts approx. 60 km)',
      },
      zaruka: {
        popis: 'Statutory warranty',
        moznosti: { vylouceni: 'Excluded (usual between private individuals)', zakon: 'Statutory warranty applies' },
      },
      cena: { popis: 'Purchase price (€)' },
      platba: { popis: 'Payment', moznosti: { bar: 'In cash on handover', ueberweisung: 'By bank transfer before handover' } },
      ucet: { popis: 'Seller’s IBAN' },
      misto: { popis: 'Place' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is being sold and in what condition.', '', 'Liability for defects after the sale.'],
    coDal: [
      'Print it twice; both parties sign both copies.',
      'Inspect the item together before signing; for cash payment, issue a receipt (Quittung).',
    ],
    kontrola: [
      'Describe the item precisely: brand, model, serial number, accessories.',
      'Enter all known defects – concealed defects cancel the exclusion of warranty ([Section 444 BGB](https://www.gesetze-im-internet.de/bgb/__444.html)).',
      'The exclusion of warranty is only suitable between private individuals. Anyone selling in the course of a business may not use it towards consumers.',
      'For expensive devices, check the serial number against theft and ask for the original invoice to be handed over.',
      'Check the other party’s identity using their identity card (Personalausweis) and copy the name and address exactly.',
      'Count cash only when signing; larger amounts are better paid by bank transfer – the bank statement is the best proof of payment.',
    ],
  },

  dokument: {
    nazev: 'Purchase Agreement',
    podnadpis: 'for a used item between private individuals (Sections 433 et seq. of the German Civil Code, BGB)',
    podpisy: { vlevo: 'seller', vpravo: 'buyer' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: ['**Seller:** {{p_jmeno}}, residing at {{p_adresa}}', '**Buyer:** {{k_jmeno}}, residing at {{k_adresa}}'],
      },
      {
        nadpis: 'Item Sold',
        odstavce: [
          'The Seller sells to the Buyer the following used item: {{vec}}.',
          'Defects known to the Seller: {{vady}}',
          'The Seller warrants that they are the owner of the item and that the item is free of third-party rights.',
        ],
      },
      {
        nadpis: 'Purchase Price and Handover',
        odstavce: [
          'The purchase price is **{{cena}}**.',
          {
            uvodVzor: 'Payment (tick):',
            moznosti: {
              bar: 'The purchase price is paid in cash on handover; the Seller confirms receipt by their signature.',
              ueberweisung: 'The purchase price is transferred before handover to the account IBAN {{ucet}}.',
            },
          },
          'Ownership passes to the Buyer upon full payment of the purchase price and handover.',
        ],
      },
      {
        nadpis: 'Statutory Warranty',
        odstavce: [
          {
            uvodVzor: 'Statutory warranty (tick):',
            moznosti: {
              vylouceni: 'The item is sold as inspected, with any warranty excluded. The exclusion does not apply to defects fraudulently concealed by the Seller, nor to damage arising from injury to life, body or health, nor to damage caused by gross negligence or intent.',
              zakon: 'The statutory warranty under Sections 434 et seq. BGB applies.',
            },
          },
          'The agreement is executed in two counterparts; each party receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

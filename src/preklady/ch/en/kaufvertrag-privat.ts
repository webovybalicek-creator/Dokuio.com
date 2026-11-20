/**
 * English version: private purchase agreement (Switzerland). Original: src/obsah/ch/kaufvertrag-privat.ts
 * and src/sablony/ch/kaufvertrag-privat.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-KAUF-PRIVAT', verze: '1.0' },

  nazev: 'Private Purchase Agreement',
  nazevA: 'the private purchase agreement',
  katalog: {
    popis: 'Selling used items as a private individual.',
    slova: ['purchase agreement', 'sales contract', 'bill of sale', 'private sale', 'sell a bike', 'sell a phone', 'furniture', 'used item', 'second-hand', 'Kaufvertrag', 'Kaufvertrag privat'],
  },
  landing: {
    title: 'Private Purchase Agreement Switzerland {rok} – free PDF template',
    description:
      'Purchase agreement for used items between private individuals in Switzerland (Art. 184 et seq. OR), explained in English. Free bilingual PDF or Word.',
    perex: 'Selling a bike, phone or piece of furniture privately – with a description, defects and exclusion of warranty.',
    obsahPopis: 'Four articles under Art. 184 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR).',
    obsah: [
      { nazev: 'Parties', popis: 'Seller and buyer.' },
      { nazev: 'Item sold', popis: 'Description and defects.' },
      { nazev: 'Price and handover', popis: 'Payment and ownership.' },
      { nazev: 'Warranty', popis: 'Excluded or statutory.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Whatever you don’t know is left as a line.' },
      { nazev: 'Check the text', popis: 'Preview next to the form.' },
      { nazev: 'Download and sign', popis: 'PDF or Word.' },
    ],
    online: [
      'Amount in words (in German) added automatically',
      'Signature on screen',
      'Draft stays saved in your browser',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'selling to private individuals via Ricardo, Tutti or Anibis',
      'more expensive used items',
    ],
    nehodiSe: [
      'cars – use the car purchase agreement for those',
      'sales by dealers to consumers',
    ],
    po: [
      { nazev: 'Inspection', popis: 'The buyer inspects the item immediately and reports defects without delay.' },
    ],
    faq: [
      { q: 'May I exclude the warranty?', a: 'Between private individuals, yes – but not for defects that were fraudulently concealed (Art. 199 OR).' },
      { q: 'Do you store my details?', a: 'No. The document is put together exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 184 et seq. and Art. 197 et seq. of the Swiss Code of Obligations (OR).',
  },
  vytvorit: {
    title: 'Fill in a private purchase agreement online (Switzerland) – PDF',
    description: 'Purchase agreement for used items between private individuals in Switzerland, explained in English. Free PDF or Word.',
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
        placeholder: 'e.g. E-Bike Cube Kathmandu Hybrid, Rahmennr. WC12345, mit Ladegerät und zwei Schlüsseln (e-bike, frame no. WC12345, with charger and two keys)',
      },
      vady: { popis: 'Known defects (optional)', placeholder: 'e.g. Kratzer am Rahmen, Akku hält ca. 60 km (scratches on the frame, battery lasts approx. 60 km)' },
      zaruka: {
        popis: 'Warranty (Gewährleistung)',
        moznosti: { vylouceni: 'Excluded (usual between private individuals)', zakon: 'Statutory warranty' },
      },
      cena: { popis: 'Purchase price (CHF)' },
      platba: {
        popis: 'Payment',
        moznosti: { bar: 'In cash on handover', ueberweisung: 'By bank transfer before handover' },
      },
      ucet: { popis: 'Seller’s IBAN' },
      misto: { popis: 'Place' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: [
      '',
      'What is being sold and in what condition.',
      '',
      'Liability for defects after the sale.',
    ],
    coDal: [
      'Print it twice; both parties sign both copies.',
      'Inspect the item together before signing; if paying in cash, issue a receipt.',
    ],
    kontrola: [
      'Describe the item precisely: make, model, serial number, accessories.',
      'List all known defects – fraudulently concealed defects make the exclusion of warranty invalid ([Art. 199 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_199)).',
      'The buyer inspects the item on handover and reports defects immediately ([Art. 201 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_201)).',
      'For expensive devices, check the serial number and ask for the original receipt.',
      'Check the identity of the other party against their passport or identity card (Identitätskarte) and copy the name and address exactly.',
      'Larger amounts are better paid by transfer – the bank statement is the safest proof of payment. If paying in cash, have a receipt signed.',
    ],
  },

  dokument: {
    nazev: 'Purchase Agreement',
    podnadpis: 'for a used item between private individuals (Art. 184 et seq. OR)',
    podpisy: { vlevo: 'seller', vpravo: 'buyer' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Seller:** {{p_jmeno}}, residing at {{p_adresa}}',
          '**Buyer:** {{k_jmeno}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Item Sold',
        odstavce: [
          'The Seller sells the following used item to the Buyer: {{vec}}.',
          'Defects known to the Seller: {{vady}}',
          'The Seller warrants that they are the owner of the item and that the item is free from third-party rights.',
        ],
      },
      {
        nadpis: 'Purchase Price and Handover',
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
        nadpis: 'Warranty',
        odstavce: [
          {
            uvodVzor: 'Warranty (tick one):',
            moznosti: {
              vylouceni: 'The item is sold as inspected. Any warranty is excluded. This does not apply to defects that the Seller has fraudulently concealed (Art. 199 OR).',
              zakon: 'The statutory warranty under Art. 197 et seq. OR applies.',
            },
          },
          'This agreement is executed in two counterparts; each party receives one counterpart.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

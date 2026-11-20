/**
 * English version: purchase agreement for goods (Czech Republic). Original: src/obsah/cz/kupni-smlouva-vec.ts
 * and src/sablony/cz/kupni-smlouva-vec.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-KUPNI-VEC', verze: '1.0' },

  nazev: 'Purchase Agreement for Goods',
  nazevA: 'the purchase agreement for goods',
  katalog: {
    popis: 'Sale of a bicycle, phone, furniture and other items.',
    slova: ['purchase agreement', 'bill of sale', 'sale of goods', 'second-hand', 'classified ad', 'bicycle', 'bike', 'phone', 'mobile', 'furniture', 'movable item', 'kupní smlouva', 'prodej', 'bazar'],
  },
  landing: {
    title: 'Purchase Agreement for Goods Czech Republic {rok} – free PDF template',
    description:
      'General purchase agreement for a movable item in the Czech Republic: bike, phone, furniture, electronics. Fill it in online in English, bilingual PDF or Word for free.',
    perex: 'For selling a bicycle, phone, furniture, electronics and other items between private individuals in the Czech Republic. Fill it in online, or download a blank template.',
    obsahPopis: 'Four articles under Section 2079 et seq. of the Czech Civil Code (občanský zákoník).',
    obsah: [
      { nazev: 'Parties', popis: 'Seller and buyer.' },
      { nazev: 'Subject of the purchase', popis: 'Description of the item, serial number, accessories, known defects.' },
      { nazev: 'Purchase price', popis: 'Amount in figures (in words in the Czech text), cash or transfer.' },
      { nazev: 'Handover', popis: 'Straight away or by a date; signatures.' },
    ],
    kroky: [
      { nazev: 'Describe the item', popis: 'Make, model, serial number – so it cannot be mistaken for another.' },
      { nazev: 'Try it out', popis: 'Before signing; write down any defects.' },
      { nazev: 'Download and sign', popis: 'PDF or Word for free. The agreement is bilingual: Czech original and English translation.' },
    ],
    online: ['The amount in words (in Czech) is added automatically', 'Help on where to find the serial number', 'Every paragraph can be edited', 'Download as PDF and Word'],
    hodiSe: ['you are selling an item second-hand or through an ad', 'it is a more expensive item (bike, phone, laptop, furniture)', 'you want proof of purchase and of the item’s condition'],
    nehodiSe: ['a car or motorcycle – they have their own agreement with transfer of registration', 'a flat, house or land – Land Register (katastr nemovitostí), lawyer', 'you are buying from a trader – you get a receipt and have consumer rights'],
    po: [
      { nazev: 'Two signed copies', popis: 'One for each party.' },
      { nazev: 'Hand over the documents', popis: 'Receipt, warranty card, manual.' },
      { nazev: 'Keep the agreement', popis: 'It proves where you got the item from.' },
    ],
    faq: [
      { q: 'Does a purchase agreement for goods have to be in writing?', a: 'No, for movable items an oral agreement is enough. A written agreement, however, proves the price, condition and origin of the item.' },
      { q: 'As the seller, am I liable for defects?', a: 'Yes, even between private individuals. This does not, however, cover defects the buyer knew about at the time of purchase (those listed in the agreement).' },
      { q: 'How can I check the item is not stolen?', a: 'Ask for proof of purchase, check the serial number and, for a phone, that it is signed out of the manufacturer’s account. A suspiciously low price is a warning sign.' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník, Section 2079 et seq.).',
    souvisejiciPopis: 'Other useful documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a purchase agreement for goods online – Czech Republic, PDF',
    description: 'Guide in English for a purchase agreement for a movable item in the Czech Republic: bike, phone, furniture. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    kroky: {
      strany: { nazev: 'Seller and buyer' },
      vec: { nazev: 'Item', popis: 'Describe the item so that it cannot be mistaken for another. Ideally write in Czech – the text goes into both language versions exactly as you write it.' },
      cena: { nazev: 'Price and handover' },
    },
    pole: {
      p_jmeno: { popis: 'Seller – first name and surname', napoveda: 'The person selling the item, who is its owner.', placeholder: 'e.g. Jan Novák' },
      p_narozeni: { popis: 'Seller’s date of birth', napoveda: 'You don’t need to write the Czech personal identification number (rodné číslo).' },
      p_adresa: { popis: 'Seller’s address', napoveda: 'Permanent address.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      k_jmeno: { popis: 'Buyer – first name and surname', napoveda: 'The person buying the item. Don’t know them? Leave it empty.', placeholder: 'e.g. Petra Svobodová' },
      k_narozeni: { popis: 'Buyer’s date of birth', napoveda: 'According to the identity document.' },
      k_adresa: { popis: 'Buyer’s address', napoveda: 'Permanent address.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      vec: { popis: 'What is being sold', napoveda: 'Type, make and model.', placeholder: 'e.g. jízdní kolo Trek Marlin 7, velikost L (Trek Marlin 7 bicycle, size L)' },
      vyrobni_cislo: { popis: 'Serial number (optional)', napoveda: 'For a phone the IMEI (*#06#), for a bike the frame number (under the bottom bracket), for electronics the label on the bottom.', placeholder: 'e.g. WTU123A4567B' },
      prislusenstvi: { popis: 'Accessories (optional)', napoveda: 'Charger, box, case, spare parts…', placeholder: 'e.g. nabíječka, původní krabice (charger, original box)' },
      vady: {
        popis: 'Defects',
        napoveda: 'What you write into the agreement, the buyer cannot claim later. Include minor things too.',
        moznosti: { bez: 'The seller is not aware of any defects', s: 'The item has defects the seller knows about' },
      },
      vady_popis: { popis: 'Description of the defects', placeholder: 'e.g. škrábanec na rámu, slabší baterie (scratch on the frame, weaker battery)' },
      cena: { popis: 'Purchase price (CZK)', napoveda: 'The full agreed price. We add it in words (in Czech) ourselves.', placeholder: 'e.g. 12000' },
      platba: {
        popis: 'How payment is made',
        napoveda: 'The buyer becomes the owner once they have paid the full price.',
        moznosti: { hotove: 'In cash on signing', prevod: 'By bank transfer by a certain date' },
      },
      ucet: { popis: 'Seller’s bank account number', napoveda: 'Where the buyer should pay.', placeholder: '123456789/0100' },
      splatnost: { popis: 'Pay by', napoveda: 'The last day for payment.' },
      predani: {
        popis: 'When the item is handed over',
        napoveda: 'The simplest is straight away on signing.',
        moznosti: { hned: 'On signing the agreement', pozdeji: 'Later, by a certain date' },
      },
      predani_do: { popis: 'Hand over by', napoveda: 'The last day for handover.' },
      misto: { popis: 'Place of signing (town)', napoveda: 'We pre-fill it from the seller’s address.', placeholder: 'e.g. Říčany' },
      datum_podpisu: { popis: 'Date of signing', napoveda: 'We pre-filled today.' },
    },
    vysvetleni: [
      'Who is selling and who is buying.',
      'What exactly is being sold and in what condition.',
      'How much and how payment is made. Ownership passes on payment.',
      'When the buyer gets the item, and standard formal points. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'Hand over the item with its accessories and documents (receipt, warranty card, manual).',
      'Keep the agreement – it is proof of purchase and of where you got the item from.',
    ],
    kontrola: [
      'Try the item out before signing – switch it on, ride it, inspect it.',
      'The serial number (IMEI for a phone, frame number for a bike) in the agreement matches the one on the item.',
      'Origin of the item: ask to see the receipt or proof of purchase. A very low price is often a warning sign.',
      'A phone or tablet must be signed out of the manufacturer’s account (iCloud, Google) – otherwise you won’t be able to use it.',
      'The identity of the other party from their identity document (občanský průkaz). The number of the document can be checked in the [Neplatné doklady database (Czech Ministry of the Interior)](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).',
      'Cash payment above CZK 270,000 is prohibited (even between private individuals) – higher amounts only by transfer.',
      'The manufacturer’s warranty usually passes to the new owner with the proof of purchase – hand it over.',
    ],
  },

  dokument: {
    nazev: 'Purchase Agreement',
    podnadpis: 'for a movable item, concluded under Section 2079 et seq. of Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
    podpisy: { vlevo: 'seller', vpravo: 'buyer' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Seller:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanently residing at {{p_adresa}} (the “Seller”)',
          '**Buyer:** {{k_jmeno}}, date of birth {{k_narozeni}}, permanently residing at {{k_adresa}} (the “Buyer”)',
        ],
      },
      {
        nadpis: 'Subject of the Purchase',
        odstavce: [
          'The Seller sells to the Buyer the following item: {{vec}}, serial number {{vyrobni_cislo}}, including accessories: {{prislusenstvi}} (the “Item”).',
          'The Seller declares that they are the sole owner of the Item and that it is not encumbered by any third-party right.',
          {
            uvodVzor: 'Defects of the Item (tick one option):',
            moznosti: {
              bez: 'The Seller is not aware of any defects of the Item.',
              s: 'The Seller has informed the Buyer of the following defects: {{vady_popis}}',
            },
          },
          'The Buyer declares that they have inspected and tried out the Item and are buying it in this condition.',
        ],
      },
      {
        nadpis: 'Purchase Price',
        odstavce: [
          'The purchase price is {{cena}}.',
          {
            uvodVzor: 'Payment (tick one option):',
            moznosti: {
              hotove: 'The Buyer paid the purchase price in cash upon signing this agreement and the Seller confirms its receipt by signing.',
              prevod: 'The Buyer shall pay the purchase price by bank transfer to the Seller’s account No. {{ucet}} no later than {{splatnost}}.',
            },
          },
          'Ownership of the Item passes to the Buyer upon payment of the purchase price in full.',
        ],
      },
      {
        nadpis: 'Handover and Final Provisions',
        odstavce: [
          {
            uvodVzor: 'Handover (tick one option):',
            moznosti: {
              hned: 'The Seller handed over the Item to the Buyer upon signing this agreement.',
              pozdeji: 'The Seller shall hand over the Item to the Buyer no later than {{predani_do}}.',
            },
          },
          'Rights and obligations not governed by this agreement are governed by Act No. 89/2012 Coll., the Civil Code.',
          'This agreement is executed in two counterparts, one for each party. It becomes effective upon signature by both parties.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

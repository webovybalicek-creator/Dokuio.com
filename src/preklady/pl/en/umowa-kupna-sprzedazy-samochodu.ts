/**
 * English version: car sale agreement (Poland). Original: src/obsah/pl/umowa-kupna-sprzedazy-samochodu.ts
 * and src/sablony/pl/umowa-sprzedazy-samochodu.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-SPRZEDAZ-AUTO', verze: '1.1' },

  nazev: 'Car Sale Agreement',
  nazevA: 'the car sale agreement',
  katalog: {
    popis: 'Sale of a used car between private individuals.',
    slova: ['car sale', 'sell a car', 'buy a car', 'used car', 'vehicle', 'car sale contract', 'bill of sale', 'sale agreement', 'PCC-3', 'umowa kupna-sprzedaży samochodu', 'sprzedaż auta'],
  },
  landing: {
    title: 'Car Sale Agreement Poland {rok} – free PDF template',
    description:
      'Car sale agreement for Poland, explained in English: VIN, mileage, defects, payment and PCC-3 deadlines. Download a bilingual PDF or Word for free.',
    perex: 'Sale of a used car between private individuals under the Polish Civil Code. With mileage, defects and a reminder about PCC-3 and notifying the sale.',
    obsahPopis: 'Six sections under Article 535 et seq. of the Civil Code (Kodeks cywilny).',
    obsah: [
      { nazev: 'Parties', popis: 'Seller and buyer with their PESEL numbers.' },
      { nazev: 'Subject of the agreement', popis: 'Vehicle, VIN, registration number.' },
      { nazev: 'Condition of the vehicle', popis: 'Mileage and known defects.' },
      { nazev: 'Price and payment', popis: 'Amount, method of payment, retention of title.' },
      { nazev: 'Handover of the vehicle', popis: 'Keys and documents.' },
      { nazev: 'Final provisions', popis: 'PCC tax, counterparts.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Parties, car, price.' },
      { nazev: 'Check the text', popis: 'You can edit every paragraph.' },
      { nazev: 'Download and sign', popis: 'PDF or Word, two counterparts.' },
    ],
    online: [
      'The amount in words (in Polish) is added automatically',
      'VIN check',
      'Calendar reminder for PCC-3 and registration',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are selling or buying a used car from a private individual in Poland',
      'you want the mileage and defects in writing',
    ],
    nehodiSe: [
      'you are buying from a second-hand car dealer (komis) or a showroom – consumer law applies and you get an invoice',
      'the car is leased – it must be bought out first',
    ],
    po: [
      { nazev: 'PCC-3', popis: 'Within 14 days the buyer pays 2% tax (PCC-3 return – tax on civil-law transactions).' },
      { nazev: 'Notifying the sale', popis: 'The seller within 30 days, also online.' },
      { nazev: 'Registration', popis: 'The buyer within 30 days.' },
    ],
    faq: [
      { q: 'Who pays the PCC tax?', a: 'The buyer – 2% of the market value of the car, with the PCC-3 return filed within 14 days of concluding the agreement. From 3 November 2026, items with a market value of up to PLN 3,000 are exempt.' },
      { q: 'How long do I have to notify the sale?', a: 'The seller notifies the district head (starosta) of the disposal of the vehicle within 30 days (Article 78 of the Road Traffic Act – Prawo o ruchu drogowym); this can be done online at gov.pl.' },
      { q: 'Do you store my details?', a: 'No. The agreement is created only in your browser.' },
    ],
    zakony: 'The template is based on the Polish Civil Code (Kodeks cywilny, Article 535 et seq., Article 589) and the Road Traffic Act (Prawo o ruchu drogowym, Article 78).',
    souvisejiciPopis: 'Other documents for selling a car, also free.',
  },
  vytvorit: {
    title: 'Fill in a car sale agreement online – Poland, PDF',
    description: 'Guide in English for a car sale agreement under Polish law. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 5 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strony: { nazev: 'Seller and buyer', popis: 'You may not know the buyer’s details yet. Leave them empty – the agreement will have lines to fill in by hand.' },
      pojazd: { nazev: 'Vehicle', popis: 'Copy the details from the registration certificate (dowód rejestracyjny).' },
      stan: { nazev: 'Condition of the vehicle' },
      cena: { nazev: 'Price and payment' },
    },
    pole: {
      p_jmeno: { popis: 'Seller – first name and surname', napoveda: 'The owner of the car, as shown in their identity card (dowód osobisty).', placeholder: 'e.g. Jan Kowalski' },
      p_pesel: { popis: 'Seller’s PESEL', napoveda: 'PESEL is the Polish personal identification number. The authority requires the parties’ PESEL numbers when registering the vehicle.', placeholder: 'e.g. 80010112345' },
      p_doklad: { popis: 'Identity card series and number', placeholder: 'e.g. ABC 123456' },
      p_adresa: { popis: 'Residential address', placeholder: 'e.g. ul. Długa 12, 00-001 Warszawa' },
      k_jmeno: { popis: 'Buyer – first name and surname', placeholder: 'e.g. Anna Nowak' },
      k_pesel: { popis: 'Buyer’s PESEL' },
      k_doklad: { popis: 'Identity card series and number' },
      k_adresa: { popis: 'Residential address', placeholder: 'e.g. ul. Krótka 5, 30-001 Kraków' },
      znacka: { popis: 'Make and model', napoveda: 'Fields D.1 and D.3 in the registration certificate.', placeholder: 'e.g. Skoda Octavia' },
      vin: { popis: 'VIN', napoveda: '17 characters, field E in the registration certificate.' },
      spz: { popis: 'Registration number', placeholder: 'e.g. WA 12345' },
      rok: { popis: 'Year of manufacture', placeholder: 'e.g. 2018' },
      orv: { popis: 'Registration certificate series and number' },
      km: { popis: 'Mileage', napoveda: 'Read it on the day of signing.', placeholder: 'e.g. 154320' },
      vady: {
        popis: 'Defects of the vehicle',
        napoveda: 'Describe known defects honestly – a buyer who knew about them cannot rely on them later.',
        moznosti: { bez: 'The seller is not aware of any defects', s: 'The vehicle has defects the seller knows about' },
      },
      vady_popis: { popis: 'Description of the defects', placeholder: 'e.g. pęknięta przednia szyba (cracked windscreen)' },
      klice: { popis: 'Number of keys', placeholder: 'e.g. 2' },
      doklady: {
        popis: 'Documents handed over',
        moznosti: {
          orv: 'Registration certificate (dowód rejestracyjny)',
          karta: 'Vehicle card (karta pojazdu)',
          oc: 'Compulsory third-party liability insurance policy (OC)',
          serwis: 'Service book',
          zakup: 'Document showing how the seller acquired the car',
        },
      },
      cena: { popis: 'Price (zł)', napoveda: 'We add the amount in words (in Polish) ourselves.', placeholder: 'e.g. 35000' },
      platba: {
        popis: 'How the buyer will pay',
        moznosti: { hotove: 'In cash when signing the agreement', prevod: 'By bank transfer by a certain date' },
      },
      ucet: { popis: 'Seller’s bank account number', placeholder: 'PL00 0000 0000 0000 0000 0000 0000' },
      splatnost: { popis: 'Payment deadline' },
      misto: { popis: 'Town', placeholder: 'e.g. Warszawa' },
      datum_podpisu: { popis: 'Date of the agreement' },
    },
    vysvetleni: [
      'Who is entering into the agreement. The details must match the identity cards.',
      'Exactly which car is being sold. The VIN is the most important.',
      'What the seller knows about the car.',
      'How much, how and when. Ownership passes only once the full price has been paid.',
      'What the buyer receives together with the car.',
      'Formalities.',
    ],
    coDal: [
      'Print the agreement in two counterparts; both parties sign both.',
      'Hand over the car, keys and documents – ideally with a handover report (protokół zdawczo-odbiorczy).',
      'Seller: notify the disposal of the vehicle to the vehicle registration department (wydział komunikacji) within 30 days (possible online at gov.pl) and inform your OC insurer.',
      'Buyer: within 14 days file the PCC-3 return and pay 2% tax; within 30 days register the vehicle.',
    ],
    kontrola: [
      'The seller owns the car – check the registration certificate and, if needed, the document showing how they acquired it.',
      'The VIN in the registration certificate (field E) matches the VIN on the car.',
      'Check the car’s history, mileage and valid OC insurance for free at [historiapojazdu.gov.pl](https://historiapojazdu.gov.pl/) – you need the registration number, the VIN and the date of first registration.',
      'The car must not be leased or pledged – otherwise the seller cannot freely dispose of it.',
      'Check the other party’s identity against their identity card (dowód osobisty) and copy their name exactly as it appears in the card.',
      'Count cash only when signing; larger amounts are better paid by transfer – the transfer confirmation is the best proof of payment.',
      'Buyer: [PCC-3 return](https://www.podatki.gov.pl/podatki-osobiste/pcc/formularze/) within 14 days (2% of the market value if it exceeds PLN 3,000 – the threshold applies from 3 November 2026, previously PLN 1,000). Seller: [notification of disposal](https://www.gov.pl/web/gov/zglos-zbycie-lub-nabycie-pojazdu-na-przyklad-sprzedaz-kupno-darowizne) within 30 days.',
    ],
    pripominky: {
      'PCC-3: deklaracja i 2% podatku (kupujący)': {
        nazev: 'PCC-3: tax return and 2% tax (buyer)',
        popis: '14 days from concluding the agreement, if the market value of the car exceeds PLN 3,000 (threshold from 3 Nov 2026).',
      },
      'Zgłoszenie zbycia / rejestracja pojazdu': {
        nazev: 'Notification of disposal / vehicle registration',
        popis: 'The seller notifies the disposal, the buyer registers the vehicle – 30 days from concluding the agreement.',
      },
    },
  },

  dokument: {
    nazev: 'Car Sale Agreement',
    podnadpis: 'concluded under Article 535 et seq. of the Act of 23 April 1964 – the Civil Code (Kodeks cywilny)',
    podpisy: { vlevo: 'seller', vpravo: 'buyer' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Seller:** {{p_jmeno}}, PESEL {{p_pesel}}, identity card {{p_doklad}}, residing at {{p_adresa}}',
          '**Buyer:** {{k_jmeno}}, PESEL {{k_pesel}}, identity card {{k_doklad}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Subject of the Agreement',
        odstavce: [
          'The Seller declares that they are the sole owner of the car, make and model {{znacka}}, VIN {{vin}}, registration number {{spz}}, year of manufacture {{rok}}, registration certificate {{orv}} (the “Vehicle”).',
          'The Seller declares that the Vehicle is not encumbered by third-party rights, in particular a pledge, and is not the subject of a lease.',
          'The Seller sells the Vehicle to the Buyer, and the Buyer buys the Vehicle and undertakes to pay the price set out in § 4.',
        ],
      },
      {
        nadpis: 'Condition of the Vehicle',
        odstavce: [
          'The mileage of the Vehicle on the date of the agreement is {{km}}. The Seller declares that, to the best of their knowledge, the odometer has not been wound back.',
          {
            uvodVzor: 'Defects of the Vehicle (tick one option):',
            moznosti: {
              bez: 'The Seller is not aware of any defects of the Vehicle.',
              s: 'The Seller has informed the Buyer of the following defects of the Vehicle: {{vady_popis}}',
            },
          },
          'The Buyer declares that they have familiarised themselves with the technical condition of the Vehicle, have inspected it and are buying it in this condition.',
        ],
      },
      {
        nadpis: 'Price and Payment',
        odstavce: [
          'The price of the Vehicle is {{cena}}.',
          {
            uvodVzor: 'Method of payment (tick one option):',
            moznosti: {
              hotove: 'The Buyer paid the price in cash upon signing the agreement. By signing, the Seller confirms receipt of the full price.',
              prevod: 'The Buyer shall pay the price by bank transfer to the Seller’s account No. {{ucet}} no later than {{splatnost}}.',
            },
          },
          'In accordance with Article 589 of the Civil Code, the parties stipulate that ownership of the Vehicle passes to the Buyer upon payment of the full price.',
        ],
      },
      {
        nadpis: 'Handover of the Vehicle',
        odstavce: [
          'The Seller shall hand over the Vehicle to the Buyer on the date of the agreement, after payment of the price, together with the following number of keys: {{klice}}.',
          {
            uvod: 'Together with the Vehicle, the Seller hands over to the Buyer:',
            moznosti: {
              orv: 'the registration certificate',
              karta: 'the vehicle card',
              oc: 'the OC insurance policy',
              serwis: 'the service book',
              zakup: 'a document confirming the Seller’s acquisition of the Vehicle',
            },
          },
          'Upon handover of the Vehicle, the benefits and burdens connected with the Vehicle and the risk of its accidental loss or damage pass to the Buyer.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Matters not governed by the agreement are governed by the provisions of the Civil Code.',
          'The costs connected with the agreement, including the tax on civil-law transactions, are borne by the Buyer.',
          'The agreement has been drawn up in two identical counterparts, one for each party.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

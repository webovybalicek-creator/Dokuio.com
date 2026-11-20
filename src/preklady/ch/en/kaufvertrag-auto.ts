/**
 * English version: used car purchase agreement (Switzerland). Original: src/obsah/ch/kaufvertrag-auto.ts
 * and src/sablony/ch/kaufvertrag-auto.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-KAUF-AUTO', verze: '1.0' },

  nazev: 'Car Purchase Agreement',
  nazevA: 'the car purchase agreement',
  katalog: {
    popis: 'Private sale of a used car.',
    slova: ['car sale', 'sell a car', 'buy a car', 'used car', 'vehicle', 'car sale contract', 'bill of sale', 'purchase agreement', 'Kaufvertrag', 'Occasion', 'Auto verkaufen'],
  },
  landing: {
    title: 'Car Purchase Agreement Switzerland {rok} – free PDF template',
    description:
      'Used car purchase agreement between private individuals in Switzerland, explained in English: chassis number, mileage, accidents, plates. Free bilingual PDF or Word.',
    perex: 'Private sale of a used car under the Swiss Code of Obligations – with mileage, accident damage, exclusion of warranty and notes on number plates and registration.',
    obsahPopis: 'Six articles under Art. 184 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR).',
    obsah: [
      { nazev: 'Parties', popis: 'Seller and buyer.' },
      { nazev: 'Subject of the purchase', popis: 'Chassis number, master number (Stammnummer), vehicle inspection (MFK).' },
      { nazev: 'Condition', popis: 'Mileage, accidents, defects.' },
      { nazev: 'Warranty', popis: 'Excluded or statutory.' },
      { nazev: 'Price and handover', popis: 'Payment, time, vehicle registration document.' },
      { nazev: 'Plates and registration', popis: 'What the seller and the buyer have to do.' },
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
      'you are selling or buying a used car from a private individual',
      'you want the mileage and accidents recorded in writing',
    ],
    nehodiSe: [
      'buying from a garage (Garagist) – its own terms and guarantee apply',
      'a leased vehicle – first clarify with the leasing company',
    ],
    po: [
      { nazev: 'Number plates', popis: 'Stay with the seller – use them for a new car or hand them in.' },
      { nazev: 'Insurance', popis: 'The seller informs their insurer.' },
      { nazev: 'Registration', popis: 'The buyer registers the car with proof of insurance at the cantonal road traffic office (Strassenverkehrsamt).' },
    ],
    faq: [
      { q: 'As a private individual, may I exclude the warranty?', a: 'Yes, this is usual between private individuals. However, the exclusion does not apply to defects you fraudulently conceal (Art. 199 OR).' },
      { q: 'Do the number plates go with the car?', a: 'No. In Switzerland the plates belong to the registered keeper (Halter). The seller keeps them; the buyer needs their own.' },
      { q: 'What does the buyer need to register the car?', a: 'The vehicle registration document (Fahrzeugausweis), proof of insurance from their motor vehicle insurer and an identity document. Whether a new vehicle inspection is needed is decided by the canton.' },
      { q: 'Do you store my details?', a: 'No. The document is put together exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 184 et seq. and Art. 197 et seq. of the Swiss Code of Obligations (OR, Fedlex) and on information from the cantonal road traffic offices (Strassenverkehrsämter).',
  },
  vytvorit: {
    title: 'Fill in a car purchase agreement online (Switzerland) – free PDF',
    description: 'Private purchase agreement for a used car under Swiss law, explained in English. Free PDF or Word.',
  },

  pruvodce: {
    slovo: { n: 'purchase agreement', g: 'purchase agreement', a: 'purchase agreement', l: 'purchase agreement' },
    kroky: {
      parteien: { nazev: 'Seller and buyer', popis: 'You may not know the buyer’s details yet – leave them empty and lines to fill in will remain.' },
      fahrzeug: { nazev: 'Vehicle', popis: 'Copy the details from the vehicle registration document (Fahrzeugausweis).' },
      zustand: { nazev: 'Condition and liability' },
      preis: { nazev: 'Price and handover' },
    },
    pole: {
      p_jmeno: { popis: 'Seller – first name and surname', placeholder: 'e.g. Max Mustermann' },
      p_narozeni: { popis: 'Date of birth' },
      p_doklad: { popis: 'Passport or ID card number' },
      p_adresa: { popis: 'Address', placeholder: 'e.g. Musterstrasse 1, 8001 Zürich' },
      k_jmeno: { popis: 'Buyer – first name and surname' },
      k_narozeni: { popis: 'Date of birth' },
      k_doklad: { popis: 'Passport or ID card number' },
      k_adresa: { popis: 'Address' },
      znacka: { popis: 'Make and type', placeholder: 'e.g. VW Golf' },
      vin: { popis: 'Chassis number (FIN/VIN)', napoveda: '17 characters, field 23 in the vehicle registration document.' },
      spz: { popis: 'Number plate (stays with the seller)', placeholder: 'e.g. ZH 123456' },
      ez: { popis: 'First registration (1. Inverkehrsetzung)' },
      zb2: { popis: 'Master number (Stammnummer)', napoveda: 'Field 18 in the vehicle registration document.', placeholder: 'e.g. 123.456.789' },
      hu: { popis: 'Last vehicle inspection (MFK)', placeholder: 'e.g. 05/2025' },
      km: { popis: 'Mileage according to the odometer' },
      unfall: {
        popis: 'Accident damage',
        moznosti: { nein: 'No accident damage known', ja: 'The following accident damage is known' },
      },
      unfall_text: { popis: 'Accident damage' },
      maengel: {
        popis: 'Known defects (optional)',
        napoveda: 'Enter everything you know – concealed defects cancel the exclusion of liability. Write in German – the text will appear in both language versions as you write it.',
        placeholder: 'e.g. Klimaanlage ohne Funktion (air conditioning not working)',
      },
      haftung: {
        popis: 'Warranty (Gewährleistung)',
        napoveda: 'Between private individuals the warranty may be excluded – but not for fraudulently concealed defects.',
        moznosti: { aus: 'Excluded (usual between private individuals)', gesetz: 'Statutory warranty' },
      },
      klice: { popis: 'Number of keys' },
      cena: { popis: 'Purchase price (CHF)', napoveda: 'We add the amount in words.', placeholder: 'e.g. 9500' },
      platba: {
        popis: 'Payment',
        moznosti: { bar: 'In cash on handover', ueberweisung: 'By bank transfer before handover' },
      },
      ucet: { popis: 'Seller’s IBAN', placeholder: 'CH…' },
      predani_cas: { popis: 'Time of handover', placeholder: 'e.g. 14:30' },
      misto: { popis: 'Place', placeholder: 'e.g. Zürich' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: [
      'Who is entering into the agreement.',
      'Which vehicle is being sold – the chassis number is decisive.',
      'What the seller knows about the vehicle.',
      'Whether the seller has to answer for defects later.',
      'How much, how and when – ownership passes only after full payment.',
      'In Switzerland the number plates stay with the seller.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'Hand over the vehicle, the keys and the cancelled vehicle registration document (Fahrzeugausweis). The seller keeps the number plates – they belong to the registered keeper (Halter), not to the car.',
      'Seller: use the plates for a new vehicle or hand them in at the cantonal road traffic office (Strassenverkehrsamt), and inform your insurer.',
      'Buyer: register the vehicle with proof of insurance and the vehicle registration document at the road traffic office of your canton before driving it.',
    ],
    kontrola: [
      'The seller is entered in the vehicle registration document (Fahrzeugausweis) as the registered keeper (Halter) – or can prove that the car belongs to them (e.g. purchase agreement). If the car is leased, the leasing company must consent.',
      'The chassis number in the vehicle registration document matches the one on the vehicle.',
      'Excluding the warranty is usual and permitted between private individuals, but it does not apply to defects the seller fraudulently conceals ([Art. 199 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_199)). Enter known defects and accidents honestly.',
      'Buyer: inspect the vehicle immediately and report defects without delay ([Art. 201 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_201)).',
      'The number plates belong to the registered keeper and do not go with the car. Without their own plates and insurance, the buyer may not drive.',
      'When a new vehicle inspection is needed is decided by the canton – ask the road traffic office ([asa.ch](https://asa.ch/)).',
      'Check the identity of the other party against their passport or identity card (Identitätskarte) and copy the name and address exactly.',
      'Larger amounts are better paid by transfer – the bank statement is the safest proof of payment. If paying in cash, have a receipt signed.',
    ],
  },

  dokument: {
    nazev: 'Purchase Agreement for a Used Vehicle',
    podnadpis: 'private sale under Art. 184 et seq. of the Swiss Code of Obligations (OR)',
    podpisy: { vlevo: 'seller', vpravo: 'buyer' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Seller:** {{p_jmeno}}, born {{p_narozeni}}, passport/ID No. {{p_doklad}}, residing at {{p_adresa}}',
          '**Buyer:** {{k_jmeno}}, born {{k_narozeni}}, passport/ID No. {{k_doklad}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Subject of the Purchase',
        odstavce: [
          'The Seller sells to the Buyer the motor vehicle make/type {{znacka}}, chassis number {{vin}}, master number {{zb2}}, first registration {{ez}}, last vehicle inspection {{hu}}, previously registered with number plate {{spz}}.',
          'The Seller warrants that they are the owner of the vehicle and that the vehicle is free from third-party rights, in particular that it is not leased, pledged or sold subject to retention of title.',
        ],
      },
      {
        nadpis: 'Condition of the Vehicle',
        odstavce: [
          'The mileage according to the odometer is {{km}}. To the best of the Seller’s knowledge, it corresponds to the actual distance driven.',
          {
            uvodVzor: 'Accident damage (please tick):',
            moznosti: {
              nein: 'The Seller is not aware of any accident damage.',
              ja: 'The Seller is aware of the following accident damage: {{unfall_text}}',
            },
          },
          'Known defects: {{maengel}}',
          'The Buyer has had the opportunity to inspect the vehicle and take it for a test drive.',
        ],
      },
      {
        nadpis: 'Warranty',
        odstavce: [
          {
            uvodVzor: 'Warranty (please tick):',
            moznosti: {
              aus: 'The vehicle is sold as inspected and test-driven. Any warranty for defects is excluded. This does not apply to defects that the Seller has fraudulently concealed (Art. 199 OR), nor to characteristics expressly warranted in this agreement.',
              gesetz: 'The Seller is liable for defects in accordance with the statutory provisions (Art. 197 et seq. OR). The Buyer inspects the vehicle after handover and reports defects immediately (Art. 201 OR).',
            },
          },
        ],
      },
      {
        nadpis: 'Purchase Price and Handover',
        odstavce: [
          'The purchase price is {{cena}}.',
          {
            uvodVzor: 'Payment (please tick):',
            moznosti: {
              bar: 'The purchase price is paid in cash on handover. The Seller confirms receipt with their signature.',
              ueberweisung: 'The purchase price is transferred before handover to the Seller’s account IBAN {{ucet}}.',
            },
          },
          'Handover takes place on {{datum_podpisu}} at {{predani_cas}} with {{klice}} key(s) and the cancelled vehicle registration document. Benefit and risk pass to the Buyer upon handover.',
        ],
      },
      {
        nadpis: 'Number Plates, Insurance and Registration',
        odstavce: [
          'The number plates remain with the Seller. The Seller notifies their motor vehicle insurer of the sale and uses the plates for another vehicle or hands them in at the road traffic office.',
          'Before the first journey, the Buyer registers the vehicle with their own proof of insurance at the road traffic office of their canton of residence. From handover, the Buyer bears all costs and fines arising from the operation of the vehicle.',
          'Amendments to this agreement must be made in writing. Each party receives one counterpart.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

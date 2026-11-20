/**
 * English version: motorcycle purchase agreement (Czech Republic). Original: src/obsah/cz/kupni-smlouva-motorka.ts
 * and src/sablony/cz/kupni-smlouva-motorka.ts (same contract text as the car). The Czech text prevails;
 * rules and glossary in PREKLADY.md. The contract text (dokument) matches src/preklady/cz/en/kupni-smlouva-auto.ts.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-KUPNI-MOTO', verze: '1.1' },

  nazev: 'Motorcycle Purchase Agreement',
  nazevA: 'the motorcycle purchase agreement',
  katalog: {
    popis: 'Sale of a motorcycle, scooter or quad bike.',
    slova: ['motorcycle sale', 'sell a motorcycle', 'buy a motorbike', 'motorbike', 'scooter', 'moped', 'quad bike', 'ATV', 'bill of sale', 'purchase agreement', 'kupní smlouva', 'prodej motorky'],
  },
  landing: {
    title: 'Motorcycle Purchase Agreement Czech Republic {rok} – free PDF template',
    description:
      'Motorcycle, scooter or quad bike purchase agreement for the Czech Republic, in English: fill it in online in 3 minutes, bilingual PDF or Word. Free.',
    perex: 'For selling a motorcycle, scooter, moped or quad bike between private individuals in the Czech Republic. Fill it in online, or download a blank template.',
    obsahPopis: 'The same six articles as for a car, under Section 2079 et seq. of the Czech Civil Code (občanský zákoník).',
    obsah: [
      { nazev: 'Parties', popis: 'Name, date of birth and address of the seller and the buyer.' },
      { nazev: 'Vehicle', popis: 'Make and model, VIN, registration number (SPZ), year of manufacture, registration certificate number.' },
      { nazev: 'Condition of the vehicle', popis: 'Odometer reading, known defects and a statement on accident history.' },
      { nazev: 'Price and payment', popis: 'Purchase price in figures (in words in the Czech text), cash or transfer.' },
      { nazev: 'Handover and transfer of registration', popis: 'Handover date, keys, documents and who files the transfer of registration.' },
      { nazev: 'Final provisions', popis: 'Two counterparts and signatures.' },
    ],
    kroky: [
      { nazev: 'Answer the questions', popis: 'Skip what you don’t know – a line is left to fill in by hand.' },
      { nazev: 'Check the motorcycle', popis: 'VIN on the frame, mileage history at kontrolatachometru.cz, documents.' },
      { nazev: 'Download and sign', popis: 'PDF or Word for free, two copies. The agreement is bilingual: Czech original and English translation.' },
    ],
    online: ['The amount in words (in Czech) is added automatically', 'VIN check', 'Every paragraph can be edited', 'Follow-up handover report and power of attorney'],
    hodiSe: ['you are selling or buying a motorcycle, scooter, moped or quad bike from a private individual', 'the vehicle is entered in the vehicle register (registr vozidel)', 'you want the price, condition and handover in writing'],
    nehodiSe: ['you are buying from a used car dealer or a dealership (they have their own contract)', 'it is a motorcycle without a technical certificate (e.g. a pit bike) – then use a purchase agreement for goods', 'the motorcycle is leased or financed by a loan'],
    po: [
      { nazev: 'Sign two counterparts', popis: 'Each party keeps one.' },
      { nazev: 'Hand over the motorcycle and documents', popis: 'Ideally with a handover report (předávací protokol).' },
      { nazev: 'Transfer of registration within 10 working days', popis: 'At the vehicle register; whoever does not go in person gives a power of attorney with a certified signature. The seller cancels their compulsory motor insurance (povinné ručení).' },
    ],
    faq: [
      { q: 'Is a motorcycle agreement different from a car agreement?', a: 'Legally no – both are a purchase agreement for a motor vehicle. Only practical things differ: the VIN is stamped on the frame, and it is worth writing down equipment and accessories (cases, exhaust).' },
      { q: 'Is it also suitable for a scooter or moped?', a: 'Yes, for any vehicle entered in the vehicle register. For a pit bike or a children’s motorcycle without a technical certificate, use a purchase agreement for goods.' },
      { q: 'By when do I have to transfer the registration of the motorcycle?', a: 'The application to record the change of owner is filed within 10 working days of the transfer of ownership; otherwise you risk a fine.' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together directly in your browser and the details are not sent to any server.' },
    ],
    zakony:
      'The template is based on Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník, Section 2079 et seq.), and Act No. 56/2001 Coll., on the conditions for operating vehicles on roads (zákon o podmínkách provozu vozidel na pozemních komunikacích).',
  },
  vytvorit: {
    title: 'Fill in a motorcycle purchase agreement online – Czech Republic, PDF',
    description: 'Guide in English for a motorcycle, scooter or quad bike purchase agreement in the Czech Republic. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    kroky: {
      strany: { nazev: 'Seller and buyer', popis: 'You often don’t know the buyer’s details yet. Leave them empty – the agreement will have lines to fill in by hand.' },
      vozidlo: { nazev: 'Vehicle', popis: 'Copy the details from the vehicle registration certificate (osvědčení o registraci vozidla, the “small technical certificate”).' },
      stav: { nazev: 'Condition of the vehicle', popis: 'Describe known defects truthfully. Defects the buyer knew about cannot be claimed later.' },
      cena: { nazev: 'Price and payment' },
      predani: { nazev: 'Handover and registration' },
    },
    pole: {
      p_jmeno: { popis: 'Seller – first name and surname', napoveda: 'The person selling the motorcycle and registered as owner in the registration certificate. Write the full name as it appears in their identity document.', placeholder: 'e.g. Jan Novák' },
      p_narozeni: { popis: 'Date of birth', napoveda: 'The date of birth is enough; you don’t need to write the Czech personal identification number (rodné číslo).' },
      p_adresa: { popis: 'Permanent address', napoveda: 'The address from the identity document.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      k_jmeno: { popis: 'Buyer – first name and surname', napoveda: 'The person buying the motorcycle. If you don’t know them yet, leave it empty and fill it in by hand when signing.', placeholder: 'e.g. Petra Svobodová' },
      k_narozeni: { popis: 'Date of birth', napoveda: 'According to the buyer’s identity document.' },
      k_adresa: { popis: 'Permanent address', napoveda: 'The address from the buyer’s identity document.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      znacka: { popis: 'Make and model', napoveda: 'Manufacturer and model as stated in the registration certificate (fields D.1 and D.3).', placeholder: 'e.g. Honda CB500F' },
      vin: { popis: 'VIN – vehicle identification number', napoveda: '17 characters without the letters I, O and Q. In the registration certificate it is in field E.' },
      spz: { popis: 'Registration number (SPZ)', napoveda: 'The number on the motorcycle’s number plate; field A in the registration certificate.', placeholder: 'e.g. 1AB 2345' },
      rok: { popis: 'Year of manufacture', napoveda: 'Stated in the registration certificate or in the technical certificate.', placeholder: 'e.g. 2018' },
      orv: { popis: 'Registration certificate number', napoveda: 'The “small technical certificate” (card). The number is printed on the document, usually three letters and six digits.', placeholder: 'e.g. UAA123456' },
      tp: { popis: 'Technical certificate number', napoveda: 'Only older vehicles have the “large technical certificate” (technický průkaz). If there is none, leave it empty.' },
      barva: { popis: 'Colour', napoveda: 'A plain description is enough – it helps identify the motorcycle clearly. Ideally write it in Czech.', placeholder: 'e.g. černá (black)' },
      km: { popis: 'Odometer reading', napoveda: 'Copy it from the odometer on the day of signing. It protects both parties from a dispute about a wound-back odometer.', placeholder: 'e.g. 23450' },
      vady: {
        popis: 'Defects of the vehicle',
        napoveda: 'A defect is anything that does not work or is damaged (scratches, a broken indicator, a worn chain). What you write into the agreement, the buyer cannot claim later.',
        moznosti: { bez: 'The seller is not aware of any defects', s: 'The vehicle has defects the seller knows about' },
      },
      vady_popis: { popis: 'Description of the defects', placeholder: 'e.g. poškrábaná nádrž, nefunkční levý blinkr (scratched tank, broken left indicator)' },
      havarie: {
        popis: 'Has the vehicle been in an accident?',
        napoveda: 'If you don’t know for sure (for example you bought the motorcycle used yourself), choose “The seller does not know”. A false statement can lead to a dispute.',
        moznosti: { ne: 'No, not according to the seller', ano: 'Yes, it has', nevi: 'The seller does not know' },
      },
      klice: { popis: 'Number of keys handed over', napoveda: 'Including the spare key.', placeholder: 'e.g. 2' },
      doklady: {
        popis: 'Documents handed over',
        napoveda: 'Tick what the buyer receives. The registration certificate is always needed to transfer the registration.',
        moznosti: {
          orv: 'Registration certificate (small technical certificate)',
          tp: 'Technical certificate (large technical certificate)',
          servis: 'Service book',
          stk: 'Roadworthiness test report (STK)',
          navod: 'Owner’s manual',
        },
      },
      doklady_jine: { popis: 'Other items handed over', placeholder: 'e.g. boční kufry, helma (side cases, helmet)' },
      cena: { popis: 'Purchase price (CZK)', napoveda: 'The full agreed price. We add the amount in words (in Czech) to the agreement ourselves.', placeholder: 'e.g. 85000' },
      platba: {
        popis: 'How and when the buyer pays',
        napoveda: 'Ownership passes to the buyer once they have paid the full price. When paying in cash, signing the agreement confirms that you have received the money – only sign with the money in your hand.',
        moznosti: { hotove: 'In cash when signing the agreement', prevod: 'By bank transfer by a certain date', hotove_pozdeji: 'In cash by a certain date' },
      },
      ucet: { popis: 'Seller’s bank account number', napoveda: 'The account the money should be paid into.', placeholder: '123456789/0100' },
      splatnost: { popis: 'Pay no later than', napoveda: 'The last day on which the buyer must pay.' },
      predani_datum: { popis: 'Date of handover of the vehicle', napoveda: 'The day the buyer takes over the motorcycle and keys. From then on they bear the risk of damage and must have compulsory motor insurance (povinné ručení).' },
      prepis: {
        popis: 'Who files the change of owner at the vehicle register',
        napoveda: 'The transfer is handled by the vehicle register at a municipal office with extended powers (obecní úřad obce s rozšířenou působností). Whoever does not go in person gives the other a power of attorney.',
        moznosti: { kupujici: 'The buyer', prodavajici: 'The seller', spolecne: 'Both together' },
      },
      misto: { popis: 'Place of signing (town)', napoveda: 'The town where you sign the agreement. We pre-fill it from the seller’s address; feel free to change it.', placeholder: 'e.g. Říčany' },
      datum_podpisu: { popis: 'Date of signing', napoveda: 'The day both parties sign the agreement. We pre-filled today – if you want to write the date by hand, clear the field.' },
    },
    vysvetleni: [
      'Who is entering into the agreement. The details must match the identity documents so that it is clear who sold and who bought.',
      'Exactly which vehicle is being sold – a motorcycle, scooter, moped or quad bike. The VIN is the most important – it is unique worldwide and the vehicle can be traced by it in the register.',
      'What the seller knows about the vehicle. Defects listed here cannot be claimed by the buyer later, so describe them truthfully.',
      'How much, how and when payment is made. The vehicle belongs to the buyer only once the full price is paid, which protects the seller.',
      'When the buyer takes over the vehicle, what they receive with it and who arranges the transfer at the register. From the handover, the buyer is responsible for the vehicle.',
      'Standard formal points: how many copies, from when the agreement applies and that both parties have read it. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'Fill in by hand any details left empty.',
      'Hand over the motorcycle, keys and documents – ideally with a handover report (předávací protokol): mileage, equipment, time of handover.',
      'File the change of owner at the vehicle register (registr vozidel) within 10 working days. Whoever does not go in person needs a power of attorney with a certified signature (plná moc s ověřeným podpisem).',
    ],
    kontrola: [
      'The seller is registered as the owner in the registration certificate (small technical certificate). If not, ask them to show how they acquired the motorcycle.',
      'The VIN in the documents matches the VIN on the motorcycle (on the frame by the steering head and on the plate).',
      'The mileage and roadworthiness test history by VIN at [kontrolatachometru.cz](https://www.kontrolatachometru.cz/) (Czech Ministry of Transport, free). A difference from the odometer is a warning sign.',
      'That the motorcycle is not leased or financed by a loan – with a lease, the leasing company is the owner and it cannot be sold.',
      'The identity of the other party from their identity document (občanský průkaz). The number of a Czech ID card can be checked in the [Neplatné doklady database (Czech Ministry of the Interior)](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).',
      'Take and count cash only when signing; larger amounts are better paid by transfer. Above CZK 270,000 the law prohibits cash payment.',
      'After the sale, check on the [Portál dopravy](https://portaldopravy.cz/) that the motorcycle is no longer registered to you (transfer within 10 working days).',
      'Write equipment and accessories (cases, crash bars, exhaust) into the agreement – unapproved modifications must pass a roadworthiness test.',
    ],
    pripominky: {
      'Přepis vozidla v registru – poslední den': {
        nazev: 'Change of owner in the vehicle register – last day',
        popis: 'The change of owner must be registered within 10 working days (roughly counted from handover of the vehicle). Insurance: the new owner takes out compulsory motor insurance (povinné ručení); the seller notifies their insurer of the sale.',
      },
    },
  },

  dokument: {
    nazev: 'Motor Vehicle Purchase Agreement',
    podnadpis: 'concluded under Section 2079 et seq. of Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
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
          'The Seller declares that they are the sole owner of the following vehicle: make and model {{znacka}}, VIN {{vin}}, registration number {{spz}}, year of manufacture {{rok}}, colour {{barva}}, vehicle registration certificate No. {{orv}}, technical certificate No. {{tp}} (the “Vehicle”).',
          'The Seller declares that the Vehicle is not encumbered by a lien or any other third-party right and is not the subject of a lease.',
          'By this agreement the Seller sells the Vehicle to the Buyer. The Buyer buys the Vehicle and undertakes to pay the Seller the purchase price under Article IV.',
        ],
      },
      {
        nadpis: 'Condition of the Vehicle',
        odstavce: [
          'The odometer reading on the date of signing this agreement is {{km}}. The Seller declares that, to the best of their knowledge, the odometer has not been tampered with.',
          {
            uvodVzor: 'Defects of the Vehicle (tick one option):',
            moznosti: {
              bez: 'The Seller is not aware of any defects of the Vehicle.',
              s: 'The Seller has informed the Buyer of the following defects of the Vehicle: {{vady_popis}}',
            },
          },
          {
            uvodVzor: 'Accident history (tick one option):',
            moznosti: {
              ne: 'The Seller declares that, to the best of their knowledge, the Vehicle has not been in an accident.',
              ano: 'The Seller declares that the Vehicle has been in an accident.',
              nevi: 'The Seller has no information as to whether the Vehicle has been in an accident in the past.',
            },
          },
          'The Buyer declares that they have familiarised themselves with the condition of the Vehicle, have inspected it and are buying it in this condition.',
        ],
      },
      {
        nadpis: 'Purchase Price and Payment',
        odstavce: [
          'The purchase price of the Vehicle is {{cena}}.',
          {
            uvodVzor: 'Method of payment of the purchase price (tick one option):',
            moznosti: {
              hotove: 'The Buyer paid the purchase price in cash upon signing this agreement. By signing, the Seller confirms receipt of the purchase price in full.',
              prevod: 'The Buyer shall pay the purchase price by bank transfer to the Seller’s account No. {{ucet}} no later than {{splatnost}}.',
              hotove_pozdeji: 'The Buyer shall pay the purchase price in cash no later than {{splatnost}}. The Seller shall confirm receipt of the money to the Buyer in writing.',
            },
          },
          'Ownership of the Vehicle passes to the Buyer upon payment of the purchase price in full.',
        ],
      },
      {
        nadpis: 'Handover of the Vehicle and Transfer of Registration',
        odstavce: [
          'The Seller shall hand over the Vehicle to the Buyer on {{predani_datum}}. Together with the Vehicle, the Seller shall hand over the following number of keys: {{klice}}.',
          {
            uvod: 'Together with the Vehicle, the Seller shall hand over the following documents to the Buyer:',
            moznosti: {
              orv: 'vehicle registration certificate (small technical certificate)',
              tp: 'technical certificate (large technical certificate)',
              servis: 'service book',
              stk: 'report on the last roadworthiness test',
              navod: 'owner’s manual',
            },
            dalsi: 'other items handed over: {{doklady_jine}}',
          },
          'The risk of damage to the Vehicle passes to the Buyer upon taking over the Vehicle. The Buyer shall arrange motor third-party liability insurance no later than the day of taking over the Vehicle.',
          {
            uvod: 'The application to register the change of owner in the Road Vehicle Register under Act No. 56/2001 Coll. shall be filed within the statutory period by',
            moznosti: {
              kupujici: 'the Buyer. The Seller shall provide the necessary cooperation, including a power of attorney if needed.',
              prodavajici: 'the Seller. The Buyer shall provide the necessary cooperation, including a power of attorney if needed.',
              spolecne: 'the Seller and the Buyer jointly.',
            },
          },
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Rights and obligations of the parties not governed by this agreement are governed by Act No. 89/2012 Coll., the Civil Code.',
          'This agreement is executed in two counterparts, one for each party.',
          'This agreement becomes valid and effective upon signature by both parties.',
          'The parties declare that they have read this agreement, understand its content and sign it in witness of their consent.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

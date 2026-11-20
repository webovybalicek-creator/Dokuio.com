/**
 * English version: car purchase agreement (Czech Republic). Original: src/obsah/cz/kupni-smlouva-auto.ts
 * and src/sablony/cz/kupni-smlouva-auto.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-KUPNI-AUTO', verze: '1.0' },

  nazev: 'Car Purchase Agreement',
  nazevA: 'the car purchase agreement',
  katalog: {
    popis: 'Sale of a used car between private individuals.',
    slova: ['car sale', 'sell a car', 'buy a car', 'used car', 'vehicle', 'car sale contract', 'bill of sale', 'purchase agreement', 'kupní smlouva', 'prodej auta'],
  },
  landing: {
    title: 'Car Purchase Agreement Czech Republic {rok} – free PDF template',
    description:
      'Car purchase agreement for the Czech Republic, explained in English: fill it in online and download a bilingual PDF or Word (Czech original + translation). Free.',
    perex: 'Fill it in online in 3 minutes, or download a blank template. For selling a used car between private individuals in the Czech Republic.',
    obsahPopis: 'Six articles under Section 2079 et seq. of the Czech Civil Code (občanský zákoník), with no unnecessary tricks.',
    obsah: [
      { nazev: 'Parties', popis: 'Name, date of birth and address of the seller and the buyer.' },
      { nazev: 'Vehicle', popis: 'Make and model, VIN, registration number (SPZ), year of manufacture, registration certificate and technical certificate numbers.' },
      { nazev: 'Condition of the vehicle', popis: 'Odometer reading, known defects and a statement on accident history.' },
      { nazev: 'Price and payment', popis: 'Purchase price in figures (in words in the Czech text), payment in cash or by transfer, when ownership passes.' },
      { nazev: 'Handover and transfer of registration', popis: 'Handover date, keys and documents, who files the change of owner at the vehicle register.' },
      { nazev: 'Final provisions', popis: 'Two counterparts, entry into force, language clause and both parties’ signatures.' },
    ],
    kroky: [
      { nazev: 'Answer the questions', popis: 'The guide asks only what matters, with explanations in English. Skip what you don’t know – a line is left to fill in by hand.' },
      { nazev: 'Edit the text if you wish', popis: 'You can rewrite or delete any paragraph. The original wording can always be restored with one click.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up. The agreement is bilingual: Czech original and English translation. Print it twice – both parties sign.' },
    ],
    online: [
      'The amount in words (in Czech) is added automatically',
      'VIN check, so nothing is forgotten',
      'Every paragraph can be edited or deleted',
      'Download as PDF for signing and as Word',
    ],
    hodiSe: [
      'you are selling or buying a used car from a private individual in the Czech Republic',
      'the car is your property and is not leased',
      'you want the price, condition of the car and handover date in writing',
    ],
    nehodiSe: [
      'you are selling to a company or a car dealer (they usually have their own contract)',
      'the car is leased or pledged as security for a loan',
      'you are giving the car away – use a gift agreement (darovací smlouva)',
    ],
    po: [
      { nazev: 'Sign two counterparts', popis: 'Each party keeps one signed copy.' },
      { nazev: 'Hand over the car and documents', popis: 'Keys, the registration certificate and other documents under the agreement. Record the condition at handover in a handover report (předávací protokol).' },
      { nazev: 'Arrange the transfer of registration', popis: 'File the change of owner at the vehicle register (registr vozidel) within 10 working days. Whoever does not go in person gives the other a power of attorney with a certified signature. The buyer needs compulsory motor insurance (povinné ručení) from taking over the car.' },
    ],
    faq: [
      { q: 'Is the car purchase agreement really free?', a: 'Yes. Filling it in online and downloading it as PDF and Word is free and needs no sign-up. You don’t even have to enter an e-mail address.' },
      { q: 'Does a car sale agreement have to be in writing?', a: 'For a car sale between private individuals the law does not require written form. A written agreement is, however, proof of what you agreed: price, condition of the car, defects and handover date. That is why we always recommend it.' },
      { q: 'How many copies of the agreement do I need?', a: 'Two counterparts. Each party keeps one, both signed by the seller and the buyer.' },
      { q: 'Can I edit the text of the agreement?', a: 'Yes. In the guide you can rewrite or delete any paragraph and add your own clause. You always start from our base text and the original wording can be restored. Write edited paragraphs in Czech – they will no longer have a translation. In the Word version you can change everything.' },
      { q: 'What if a defect appears after the sale?', a: 'Liability for defects is governed by the Czech Civil Code. Describe known defects and the odometer reading truthfully in the agreement. Defects the buyer knew about at the time of purchase cannot be claimed later.' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together directly in your browser and the details are not sent to any server. Only your browser remembers an unfinished agreement, and you can delete it at any time.' },
      { q: 'Is the agreement also suitable for selling to a company or a car dealer?', a: 'The template is intended for a sale between two private individuals. When selling to a company or a car dealer, or a car that is leased or financed by a loan, use the other party’s contract or consult a lawyer.' },
    ],
    zakony:
      'The template is based on Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník, Section 2079 et seq.), and Act No. 56/2001 Coll., on the conditions for operating vehicles on roads (zákon o podmínkách provozu vozidel na pozemních komunikacích).',
  },
  vytvorit: {
    title: 'Fill in a car purchase agreement online – Czech Republic, PDF',
    description: 'Guide in English for a car purchase agreement in the Czech Republic: answer a few questions and download a bilingual PDF or Word for free.',
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
      p_jmeno: { popis: 'Seller – first name and surname', napoveda: 'The person selling the car and registered as owner in the registration certificate. Write the full name as it appears in their identity document.', placeholder: 'e.g. Jan Novák' },
      p_narozeni: { popis: 'Date of birth', napoveda: 'The date of birth is enough; you don’t need to write the Czech personal identification number (rodné číslo).' },
      p_adresa: { popis: 'Permanent address', napoveda: 'The address from the identity document.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      k_jmeno: { popis: 'Buyer – first name and surname', napoveda: 'The person buying the car. If you don’t know them yet, leave it empty and fill it in by hand when signing.', placeholder: 'e.g. Petra Svobodová' },
      k_narozeni: { popis: 'Date of birth', napoveda: 'According to the buyer’s identity document.' },
      k_adresa: { popis: 'Permanent address', napoveda: 'The address from the buyer’s identity document.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      znacka: { popis: 'Make and model', napoveda: 'Manufacturer and model as stated in the registration certificate (fields D.1 and D.3).', placeholder: 'e.g. Škoda Octavia Combi' },
      vin: { popis: 'VIN – vehicle identification number', napoveda: '17 characters without the letters I, O and Q. In the registration certificate it is in field E.' },
      spz: { popis: 'Registration number (SPZ)', napoveda: 'The number on the car’s number plate; field A in the registration certificate.', placeholder: 'e.g. 1AB 2345' },
      rok: { popis: 'Year of manufacture', napoveda: 'Stated in the registration certificate or in the technical certificate.', placeholder: 'e.g. 2018' },
      orv: { popis: 'Registration certificate number', napoveda: 'The “small technical certificate” (card). The number is printed on the document, usually three letters and six digits.', placeholder: 'e.g. UAA123456' },
      tp: { popis: 'Technical certificate number', napoveda: 'Only older cars have the “large technical certificate” (technický průkaz). If there is none, leave it empty.' },
      barva: { popis: 'Colour', napoveda: 'A plain description is enough – it helps identify the car clearly. Ideally write it in Czech.', placeholder: 'e.g. šedá metalíza (metallic grey)' },
      km: { popis: 'Odometer reading', napoveda: 'Copy it from the dashboard on the day of signing. It protects both parties from a dispute about a wound-back odometer.', placeholder: 'e.g. 154320' },
      vady: {
        popis: 'Defects of the vehicle',
        napoveda: 'A defect is anything that does not work or is damaged (scratches, a broken air conditioning, a cracked windscreen). What you write into the agreement, the buyer cannot claim later.',
        moznosti: { bez: 'The seller is not aware of any defects', s: 'The vehicle has defects the seller knows about' },
      },
      vady_popis: { popis: 'Description of the defects', placeholder: 'e.g. prasklé čelní sklo (cracked windscreen)' },
      havarie: {
        popis: 'Has the vehicle been in an accident?',
        napoveda: 'If you don’t know for sure (for example you bought the car used yourself), choose “The seller does not know”. A false statement can lead to a dispute.',
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
      doklady_jine: { popis: 'Other items handed over', placeholder: 'e.g. sada zimních pneumatik (set of winter tyres)' },
      cena: { popis: 'Purchase price (CZK)', napoveda: 'The full agreed price. We add the amount in words (in Czech) to the agreement ourselves.', placeholder: 'e.g. 215000' },
      platba: {
        popis: 'How and when the buyer pays',
        napoveda: 'Ownership passes to the buyer once they have paid the full price. When paying in cash, signing the agreement confirms that you have received the money – only sign with the money in your hand.',
        moznosti: { hotove: 'In cash when signing the agreement', prevod: 'By bank transfer by a certain date', hotove_pozdeji: 'In cash by a certain date' },
      },
      ucet: { popis: 'Seller’s bank account number', napoveda: 'The account the money should be paid into.', placeholder: '123456789/0100' },
      splatnost: { popis: 'Pay no later than', napoveda: 'The last day on which the buyer must pay.' },
      predani_datum: { popis: 'Date of handover of the vehicle', napoveda: 'The day the buyer takes over the car and keys. From then on they bear the risk of damage and must have compulsory motor insurance (povinné ručení).' },
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
      'Exactly which car is being sold. The VIN is the most important – it is unique worldwide and the car can be traced by it in the register.',
      'What the seller knows about the car. Defects listed here cannot be claimed by the buyer later, so describe them truthfully.',
      'How much, how and when payment is made. The car belongs to the buyer only once the full price is paid, which protects the seller.',
      'When the buyer takes over the car, what they receive with it and who arranges the transfer at the register. From the handover, the buyer is responsible for the car.',
      'Standard formal points: how many copies, from when the agreement applies and that both parties have read it. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'Fill in by hand any details left empty.',
      'Hand over the car, keys and documents – ideally with a handover report (předávací protokol): mileage, equipment, time of handover.',
      'File the change of owner at the vehicle register (registr vozidel) within 10 working days. Whoever does not go in person needs a power of attorney with a certified signature (plná moc s ověřeným podpisem).',
    ],
    kontrola: [
      'The seller is registered as the owner in the registration certificate (small technical certificate). If not, ask them to show how they acquired the car.',
      'The VIN in the documents matches the VIN on the car (behind the windscreen and on the plate in the door frame).',
      'The mileage and roadworthiness test history by VIN at [kontrolatachometru.cz](https://www.kontrolatachometru.cz/) (Czech Ministry of Transport, free). A difference from the odometer is a warning sign.',
      'That the car is not leased or financed by a loan – with a lease, the leasing company is the owner and the car cannot be sold.',
      'The identity of the other party from their identity document (občanský průkaz). The number of a Czech ID card can be checked in the [Neplatné doklady database (Czech Ministry of the Interior)](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).',
      'Take and count cash only when signing; larger amounts are better paid by transfer. Above CZK 270,000 the law prohibits cash payment.',
      'After the sale, check on the [Portál dopravy](https://portaldopravy.cz/) that the car is no longer registered to you (transfer within 10 working days).',
    ],
    pripominky: {
      'Přepis vozidla v registru – poslední den': {
        nazev: 'Change of owner in the vehicle register – last day',
        popis: 'The change of owner must be registered within 10 working days (roughly counted from handover of the car). Insurance: the new owner takes out compulsory motor insurance (povinné ručení); the seller notifies their insurer of the sale.',
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

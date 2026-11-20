/**
 * English version: vehicle handover report (Czech Republic). Original: src/obsah/cz/predavaci-protokol-vozidlo.ts
 * and src/sablony/cz/predavaci-protokol-vozidlo.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-PROTOKOL-AUTO', verze: '1.0' },

  nazev: 'Car Handover Report',
  nazevA: 'the car handover report',
  katalog: {
    popis: 'Condition of the car, keys and documents at handover.',
    slova: ['car', 'car handover', 'handover report', 'vehicle handover', 'vehicle condition report', 'lending a car', 'předávací protokol', 'předání auta'],
  },
  landing: {
    title: 'Car Handover Report Czech Republic {rok} – free PDF template',
    description:
      'Car handover report for the Czech Republic, explained in English: mileage, fuel, damage, keys, documents and equipment. Free bilingual PDF or Word.',
    perex: 'Record the condition of the car at the moment of handover: mileage, fuel, damage, keys and equipment. For a car purchase agreement or when lending a car.',
    obsahPopis: 'Five short parts. Exactly what an insurer or a court asks about in a dispute.',
    obsah: [
      { nazev: 'Parties', popis: 'Who hands over the car and who takes it over – name, date of birth, address.' },
      { nazev: 'Vehicle handed over', popis: 'Make and model, VIN, registration number (SPZ) and the reason for the handover, with a reference to the purchase agreement.' },
      { nazev: 'Condition at handover', popis: 'Odometer reading, amount of fuel and a description of any damage.' },
      { nazev: 'Keys, documents and equipment', popis: 'Number of keys, documents handed over, mandatory equipment and other items.' },
      { nazev: 'Takeover', popis: 'Date and time of handover, notes and both parties’ signatures.' },
    ],
    kroky: [
      { nazev: 'Answer the questions', popis: 'Already have a car purchase agreement? The guide takes the names and car details from it.' },
      { nazev: 'Go over the car together', popis: 'Write down the mileage, fuel and every bit of damage. Whatever you don’t know stays as a line to fill in by hand.' },
      { nazev: 'Download and sign', popis: 'Bilingual PDF or Word for free. You can also sign directly on screen.' },
    ],
    online: [
      'We take the details from the purchase agreement',
      'Checklist of equipment and documents',
      'Sign with your finger or mouse right in the guide',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are handing over a sold car to the buyer',
      'you are lending a car to someone you know or taking it back',
      'you want it in writing what condition the car was in and when it was handed over',
    ],
    nehodiSe: [
      'it is about the sale itself – that is what the purchase agreement is for (the report only supplements it)',
      'you are returning a car to a rental or leasing company (they have their own report)',
      'you are handing over a company car to an employee (covered by the company’s internal rules)',
    ],
    poNadpis: 'At handover.',
    po: [
      { nazev: 'Go over the car together', popis: 'Walk around the car, check the windows, wheels and interior and write everything down.' },
      { nazev: 'Take photos of what matters', popis: 'Odometer, fuel gauge and damaged areas. Dated photos are a strong supplement to the report.' },
      { nazev: 'Sign two copies', popis: 'Each party keeps one. If it is a sale, don’t forget the transfer of registration within 10 working days.' },
    ],
    faq: [
      { q: 'Is a handover report compulsory?', a: 'The law does not require it. It is, however, the simplest proof of what condition the car was in and exactly when it was handed over. It helps in a dispute about damage, mileage or a camera fine.' },
      { q: 'Isn’t the purchase agreement enough?', a: 'The purchase agreement covers the sale: price, ownership and transfer of registration. But the car is often handed over at a different time from when the agreement is signed. The report records the condition at the exact moment of handover, including the time.' },
      { q: 'Why record the time of handover too?', a: 'The time shows who was using the car at a given moment. This matters for fines from speed cameras and other cameras, parking or a road accident.' },
      { q: 'Can I sign the report on my phone?', a: 'Yes. In the guide both parties can sign with a finger on one phone or tablet, and the signatures are inserted into the PDF. You can also print the report and sign it by hand.' },
      { q: 'Do you store my details?', a: 'No. The report is put together directly in your browser and the details are not sent to any server. Signatures are not stored at all.' },
    ],
    zakony: 'The report supplements a purchase agreement under Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník), or an arrangement to lend a vehicle.',
  },
  vytvorit: {
    title: 'Fill in a car handover report online – Czech Republic, PDF',
    description: 'Guide in English for a car handover report in the Czech Republic: mileage, fuel, damage, keys and equipment. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    prevzit: 'car purchase agreement',
    kroky: {
      strany: { nazev: 'Who hands over and who takes over', popis: 'Have you already filled in the purchase agreement? We pre-fill the details from it.' },
      vozidlo: { nazev: 'Vehicle', popis: 'Copy the details from the vehicle registration certificate (osvědčení o registraci vozidla, the “small technical certificate”).' },
      stav: { nazev: 'Condition at handover', popis: 'Record the condition at the exact moment of handover. In a dispute about damage or mileage, this is the main evidence.' },
      predavane: { nazev: 'Keys, documents and equipment' },
      predani: { nazev: 'When and where' },
    },
    pole: {
      duvod: {
        popis: 'Why the car is being handed over',
        napoveda: 'Based on this, we add a reference to the agreement in the report. If nothing fits, leave it empty.',
        moznosti: { koupe: 'Sale of the car (with the purchase agreement)', zapujcka: 'Lending the car', vraceni: 'Returning a borrowed car' },
      },
      smlouva_datum: { popis: 'Date of the purchase agreement', napoveda: 'The day you signed the purchase agreement. The report will refer to it.' },
      p_jmeno: { popis: 'Person handing over – first name and surname', napoveda: 'Who is handing over the car (in a sale, the seller). Full name as in the identity document.', placeholder: 'e.g. Jan Novák' },
      p_narozeni: { popis: 'Date of birth of the person handing over', napoveda: 'The date of birth is enough; you don’t need to write the Czech personal identification number (rodné číslo).' },
      p_adresa: { popis: 'Address of the person handing over', napoveda: 'Permanent address from the identity document.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      k_jmeno: { popis: 'Person taking over – first name and surname', napoveda: 'Who is taking over the car (in a sale, the buyer).', placeholder: 'e.g. Petra Svobodová' },
      k_narozeni: { popis: 'Date of birth of the person taking over', napoveda: 'According to the identity document.' },
      k_adresa: { popis: 'Address of the person taking over', napoveda: 'Permanent address from the identity document.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      znacka: { popis: 'Make and model', napoveda: 'Manufacturer and model as stated in the registration certificate (fields D.1 and D.3).', placeholder: 'e.g. Škoda Octavia Combi' },
      vin: { popis: 'VIN – vehicle identification number', napoveda: '17 characters without the letters I, O and Q. In the registration certificate it is in field E.' },
      spz: { popis: 'Registration number (SPZ)', napoveda: 'The number on the car’s number plate; field A in the certificate.', placeholder: 'e.g. 1AB 2345' },
      km: { popis: 'Odometer reading', napoveda: 'Copy it from the dashboard at the moment of handover.', placeholder: 'e.g. 154320' },
      palivo: {
        popis: 'Amount of fuel in the tank',
        napoveda: 'According to the fuel gauge needle. For an electric car, choose the nearest charge level.',
        moznosti: { rezerva: 'Reserve', ctvrt: '1/4', pul: '1/2', tri: '3/4', plna: 'Full tank' },
      },
      poskozeni: {
        popis: 'Damage to the vehicle',
        napoveda: 'Walk all the way around the car and check inside: bodywork, windows, wheels, interior. Anything you don’t record here may later be attributed to the person taking over.',
        moznosti: { bez: 'No visible damage', s: 'The vehicle has the following damage' },
      },
      poskozeni_popis: {
        popis: 'Description of damage',
        napoveda: 'Briefly and with the location, e.g. “škrábanec 10 cm na zadních pravých dveřích” (10 cm scratch on the rear right door). Ideally write it in Czech.',
        placeholder: 'e.g. škrábanec na zadním nárazníku, odštípnuté čelní sklo vpravo dole (scratch on the rear bumper, chipped windscreen bottom right)',
      },
      klice: { popis: 'Number of keys handed over', napoveda: 'Including the spare key and remote controls.', placeholder: 'e.g. 2' },
      doklady: {
        popis: 'Documents handed over',
        napoveda: 'Tick what the person taking over actually received.',
        moznosti: {
          orv: 'Registration certificate (small technical certificate)',
          tp: 'Technical certificate (large technical certificate)',
          servis: 'Service book',
          stk: 'Roadworthiness test report (STK)',
          navod: 'Owner’s manual',
        },
      },
      vybava: {
        popis: 'Equipment handed over',
        napoveda: 'The car must always carry the mandatory equipment (first-aid kit, warning triangle, high-visibility vest) when driven, so it is worth recording it.',
        moznosti: {
          lekarnicka: 'First-aid kit',
          trojuhelnik: 'Warning triangle',
          vesta: 'High-visibility vest',
          rezerva: 'Spare wheel or tyre repair kit',
          hever: 'Jack and wheel brace',
          pneu: 'Second set of tyres (summer / winter)',
        },
      },
      vybava_jine: { popis: 'Other items handed over', napoveda: 'Anything else, e.g. a roof rack, a charging cable, a child car seat. Ideally write it in Czech.', placeholder: 'e.g. střešní nosič (roof rack)' },
      predani_datum: { popis: 'Date of handover', napoveda: 'We pre-filled today. If you want to write the date by hand, clear the field.' },
      predani_cas: { popis: 'Time of handover', napoveda: 'Useful for camera fines or an accident – the time shows who was using the car.', placeholder: 'e.g. 14:30' },
      misto: { popis: 'Place of handover (town)', napoveda: 'The town where the car is handed over. We pre-fill it from the address of the person handing over.', placeholder: 'e.g. Říčany' },
      poznamky: {
        popis: 'Notes',
        napoveda: 'Anything else you agreed on at handover. Optional. Ideally write it in Czech.',
        placeholder: 'e.g. zimní pneumatiky přebírající vyzvedne do konce měsíce (the person taking over will collect the winter tyres by the end of the month)',
      },
    },
    vysvetleni: [
      'Who hands over the car and who takes it over. In a sale, these are the seller and the buyer from the purchase agreement.',
      'Which car is being handed over and why. The reference to the purchase agreement links the two documents.',
      'The exact condition at the moment of handover. If new damage or extra mileage appears later, it is clear when it arose.',
      'What the person taking over received together with the car. They confirm the ticked items with their signature.',
      'Confirmation that the handover took place and exactly when. From that moment, the person taking over is responsible for the car.',
    ],
    coDal: [
      'Print the report twice and sign it when handing over the car; each party keeps one.',
      'Go over the car together – add by hand any damage missing from the report.',
      'Photograph the odometer, the fuel gauge and damaged areas. Dated photos are a good supplement to the report.',
      'If it is a sale, don’t forget the transfer of registration at the vehicle register (registr vozidel) within 10 working days.',
    ],
    kontrola: [
      'The odometer reading and fuel level match what you see on the dashboard – take a photo of it.',
      'Walk around the car together and record every bit of damage, including its location; ideally in daylight.',
      'Check the number of keys and remote controls and test that they work.',
      'The documents handed over (registration certificate, service book) belong to this car – compare the VIN.',
      'Date and time of handover – fines, accidents and responsibility for the car are later settled according to them.',
    ],
    pripominky: {
      'Přepis vozidla v registru – poslední den': {
        nazev: 'Change of owner in the vehicle register – last day',
        popis: 'The change of owner must be registered within 10 working days (roughly counted from handover).',
      },
    },
  },

  dokument: {
    nazev: 'Vehicle Handover Report',
    podnadpis: 'record of the handover and takeover of a motor vehicle',
    podpisy: { vlevo: 'person handing over', vpravo: 'person taking over' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Person handing over:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanently residing at {{p_adresa}}',
          '**Person taking over:** {{k_jmeno}}, date of birth {{k_narozeni}}, permanently residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Vehicle Handed Over',
        odstavce: [
          'Make and model {{znacka}}, VIN {{vin}}, registration number {{spz}} (the “Vehicle”).',
          {
            uvodVzor: 'Reason for handover (tick one option):',
            moznosti: {
              koupe: 'The Vehicle is handed over on the basis of a purchase agreement concluded between the parties on {{smlouva_datum}}.',
              zapujcka: 'The Vehicle is handed over to the person taking over for temporary use (loan).',
              vraceni: 'The person taking over is taking back a vehicle they previously lent to the person handing over.',
            },
          },
        ],
      },
      {
        nadpis: 'Condition of the Vehicle at Handover',
        odstavce: [
          'Odometer reading at handover: {{km}}.',
          {
            uvod: 'Amount of fuel in the tank:',
            uvodVzor: 'Amount of fuel in the tank (tick):',
            moznosti: {
              rezerva: 'reserve.',
              ctvrt: 'approximately 1/4 of a tank.',
              pul: 'approximately 1/2 of a tank.',
              tri: 'approximately 3/4 of a tank.',
              plna: 'full tank.',
            },
          },
          {
            uvodVzor: 'Damage to the Vehicle (tick one option):',
            moznosti: {
              bez: 'At handover, the Vehicle has no visible damage.',
              s: 'At handover, the Vehicle has the following damage: {{poskozeni_popis}}',
            },
          },
        ],
      },
      {
        nadpis: 'Keys, Documents and Equipment Handed Over',
        odstavce: [
          'Number of keys handed over: {{klice}}.',
          {
            uvod: 'Documents handed over:',
            moznosti: {
              orv: 'vehicle registration certificate (small technical certificate)',
              tp: 'technical certificate (large technical certificate)',
              servis: 'service book',
              stk: 'report on the last roadworthiness test',
              navod: 'owner’s manual',
            },
          },
          {
            uvod: 'Equipment handed over:',
            moznosti: {
              lekarnicka: 'first-aid kit',
              trojuhelnik: 'warning triangle',
              vesta: 'high-visibility vest',
              rezerva: 'spare wheel or tyre repair kit',
              hever: 'jack and wheel brace',
              pneu: 'second set of tyres',
            },
            dalsi: 'other items handed over: {{vybava_jine}}',
          },
        ],
      },
      {
        nadpis: 'Takeover',
        odstavce: [
          'The Vehicle was handed over on {{predani_datum}} at {{predani_cas}}.',
          'The person taking over confirms having taken over the Vehicle, including the keys, documents and equipment listed above, in the condition described in this report.',
          'Notes: {{poznamky}}',
          'This report is executed in two counterparts, one for each party.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

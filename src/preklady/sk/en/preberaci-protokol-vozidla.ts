/**
 * English version: vehicle handover report (Slovakia). Original: src/obsah/sk/preberaci-protokol-vozidla.ts
 * and src/sablony/sk/preberaci-protokol-vozidla.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-PROTOKOL-AUTO', verze: '1.0' },

  nazev: 'Vehicle Handover Report',
  nazevA: 'the vehicle handover report',
  katalog: {
    popis: 'Condition of the vehicle, keys and documents at handover.',
    slova: ['vehicle handover report', 'car handover', 'handover protocol', 'car condition report', 'vehicle', 'preberací protokol', 'odovzdávací protokol', 'odovzdanie auta'],
  },
  landing: {
    title: 'Vehicle Handover Report Slovakia {rok} – free PDF template',
    description:
      'Car handover report for Slovakia, explained in English: mileage and fuel, damage, keys, documents, time of handover. Bilingual PDF or Word, free.',
    perex: 'An accurate record of the condition the car is in and when you hand it over. Protects against disputes over damage, mileage and speed-camera fines.',
    obsahPopis: 'Five short parts, pre-filled from the purchase agreement.',
    obsah: [
      { nazev: 'Parties', popis: 'The person handing over and the person taking over.' },
      { nazev: 'Vehicle', popis: 'Make, VIN, registration number (EČV) and reason for the handover.' },
      { nazev: 'Condition', popis: 'Odometer, fuel, damage.' },
      { nazev: 'Keys and equipment', popis: 'Documents, keys, compulsory equipment.' },
      { nazev: 'Takeover', popis: 'Date and time of the handover.' },
    ],
    kroky: [
      { nazev: 'Pre-fill it', popis: 'From the purchase agreement with one click.' },
      { nazev: 'Record the condition', popis: 'Km, fuel, damage.' },
      { nazev: 'Sign it', popis: 'At the handover, both parties.' },
    ],
    online: [
      'Pre-filled from the purchase agreement',
      'Signature on screen',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are selling or buying a car',
      'you are lending a car to someone you know',
      'you are returning a borrowed vehicle',
    ],
    nehodiSe: [
      'car hire or leasing – they have their own reports',
    ],
    po: [
      { nazev: 'Photos', popis: 'Photograph the vehicle and the odometer.' },
      { nazev: 'Change of keeper', popis: 'When selling, within 30 days.' },
      { nazev: 'Insurance', popis: 'The new keeper must have compulsory motor third-party liability insurance (PZP) from the takeover.' },
    ],
    faq: [
      { q: 'Is the report compulsory?', a: 'No, but it is the best evidence of the condition of the vehicle and the time of handover.' },
      { q: 'Why record the time?', a: 'In the event of a speed-camera fine or an accident, it is clear who was using the vehicle at that moment.' },
      { q: 'Do you store my details?', a: 'No. The report is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník).',
    souvisejiciPopis: 'Other documents for selling a car, also free.',
  },
  vytvorit: {
    title: 'Fill in a vehicle handover report online – Slovakia, PDF',
    description: 'Car handover report for Slovakia: mileage, fuel, damage, keys, documents. Guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    prevzit: 'car purchase agreement',
    kroky: {
      strany: { nazev: 'Parties and reason' },
      vozidlo: { nazev: 'Vehicle and its condition' },
      predavane: { nazev: 'Keys, documents, equipment' },
      predani: { nazev: 'Handover' },
    },
    pole: {
      duvod: {
        popis: 'Why the vehicle is being handed over',
        moznosti: {
          koupe: 'Sale (purchase agreement – kúpna zmluva)',
          zapujcka: 'Lending the vehicle',
          vraceni: 'Return of a borrowed vehicle',
        },
      },
      smlouva_datum: { popis: 'Date of the purchase agreement' },
      p_jmeno: { popis: 'Person handing over – first name and surname', placeholder: 'e.g. Ján Novák' },
      p_narozeni: { popis: 'Date of birth of the person handing over' },
      p_adresa: { popis: 'Address of the person handing over', placeholder: 'e.g. Hlavná 12, 811 01 Bratislava' },
      k_jmeno: { popis: 'Person taking over – first name and surname', placeholder: 'e.g. Petra Horváthová' },
      k_narozeni: { popis: 'Date of birth of the person taking over' },
      k_adresa: { popis: 'Address of the person taking over' },
      znacka: { popis: 'Make and model', placeholder: 'e.g. Škoda Octavia Combi' },
      vin: { popis: 'VIN', napoveda: 'In the vehicle registration certificate (osvedčenie o evidencii), field E.' },
      spz: { popis: 'Registration number (EČV)', placeholder: 'e.g. BA123XY' },
      km: { popis: 'Odometer reading', placeholder: 'e.g. 154320' },
      palivo: {
        popis: 'Fuel in the tank',
        moznosti: { rezerva: 'Reserve', ctvrt: '1/4', pul: '1/2', tri: '3/4', plna: 'Full tank' },
      },
      poskozeni: {
        popis: 'Damage',
        moznosti: { bez: 'No visible damage', s: 'The vehicle is damaged' },
      },
      poskozeni_popis: { popis: 'Description of the damage', placeholder: 'e.g. škrabanec na zadnom nárazníku vľavo (scratch on the rear bumper, left side)' },
      klice: { popis: 'Number of keys', placeholder: 'e.g. 2' },
      doklady: {
        popis: 'Documents handed over',
        moznosti: {
          orv: 'Registration certificate Part I',
          tp: 'Registration certificate Part II',
          servis: 'Service book',
          stk: 'Technical and emissions inspection report',
          navod: 'Owner’s manual',
        },
      },
      vybava: {
        popis: 'Equipment',
        moznosti: {
          lekarnicka: 'First-aid kit',
          trojuhelnik: 'Warning triangle',
          vesta: 'High-visibility vest',
          rezerva: 'Spare wheel or tyre repair kit',
          hever: 'Jack and wheel brace',
          pneu: 'Second set of tyres',
        },
      },
      vybava_jine: { popis: 'Other items', placeholder: 'e.g. strešný nosič (roof rack)' },
      predani_datum: { popis: 'Date of handover' },
      predani_cas: { popis: 'Time of handover', placeholder: 'e.g. 14:30' },
      misto: { popis: 'Place of handover (town)', placeholder: 'e.g. Bratislava' },
      poznamky: { popis: 'Notes', placeholder: 'e.g. zimné pneumatiky si preberajúci vyzdvihne do konca mesiaca (the person taking over will collect the winter tyres by the end of the month)' },
    },
    vysvetleni: [
      'Who is handing over the vehicle and who is taking it over.',
      'Which vehicle is being handed over and why.',
      'The exact condition at the moment of handover.',
      'What the person taking over received together with the vehicle.',
      'Confirmation that the handover took place, and exactly when.',
    ],
    coDal: [
      'Print the report twice; both parties sign both copies.',
      'Photograph the vehicle from all sides and the odometer reading – keep the photos.',
      'When selling, file the application for a change of keeper of the vehicle (zmena držby) within 30 days.',
    ],
    kontrola: [
      'Read the odometer and fuel level together and record them accurately.',
      'Describe any damage specifically (location, extent) and photograph it with the date.',
      'The time of handover helps with speed-camera fines or an accident – it shows who was using the vehicle at that moment.',
      'The VIN in the documents matches the VIN on the vehicle. Check the history via [Overenie vozidla na slovensko.sk](https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_overenie-detailov-a-historie-o/) (vehicle check on the slovensko.sk portal).',
      'Verify the other party’s identity from their identity card (občiansky preukaz) and copy the names exactly as stated in it.',
    ],
    pripominky: {
      'Zmena držby vozidla – posledný deň': {
        nazev: 'Change of keeper of the vehicle – last day',
        popis: 'The application for a change of keeper must be filed within 30 days (roughly counted from the handover).',
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
            uvodVzor: 'Reason for the handover (tick one option):',
            moznosti: {
              koupe: 'The Vehicle is handed over on the basis of a purchase agreement concluded between the parties on {{smlouva_datum}}.',
              zapujcka: 'The Vehicle is handed over to the person taking over for temporary use.',
              vraceni: 'The person taking over takes back the Vehicle that they previously lent to the person handing over.',
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
            uvodVzor: 'Amount of fuel in the tank (tick one):',
            moznosti: { rezerva: 'reserve.', ctvrt: 'approximately 1/4 of the tank.', pul: 'approximately 1/2 of the tank.', tri: 'approximately 3/4 of the tank.', plna: 'full tank.' },
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
              orv: 'registration certificate Part I',
              tp: 'registration certificate Part II',
              servis: 'service book',
              stk: 'report on the last technical and emissions inspection',
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
          'The person taking over confirms that they have taken over the Vehicle, including the listed keys, documents and equipment, in the condition described in this report.',
          'Notes: {{poznamky}}',
          'This report is executed in two counterparts, one for each party.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

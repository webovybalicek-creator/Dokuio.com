/**
 * English version: car handover report (Hungary). Original: src/obsah/hu/atadas-atveteli-jegyzokonyv-gepjarmu.ts
 * and src/sablony/hu/atadas-atveteli-jegyzokonyv-gepjarmu.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-AUTO-JEGYZOKONYV', verze: '1.0' },

  nazev: 'Car Handover Report',
  nazevA: 'the car handover report',
  katalog: {
    popis: 'Mileage, damage and keys at handover.',
    slova: ['car handover report', 'vehicle handover', 'handover of a car', 'handover protocol', 'car condition report', 'átadás-átvételi jegyzőkönyv', 'jegyzőkönyv gépjármű'],
  },
  landing: {
    title: 'Car Handover Report Hungary {rok} – free PDF template',
    description:
      'Car handover report for Hungary, explained in English: odometer, fuel, damage, keys and the exact time of handover. Bilingual PDF or Word, free.',
    perex: 'Records in what condition and when the buyer took over the car. It can be filled in from the details of the sale agreement.',
    obsahPopis: 'What the report records.',
    obsah: [
      { nazev: 'Parties and vehicle', popis: 'Person handing over, person taking over, chassis number.' },
      { nazev: 'Condition', popis: 'Odometer, fuel, documents, damage.' },
      { nazev: 'Time', popis: 'Day and hour – from then on the person taking over is responsible.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'From the sale agreement with one click.' },
      { nazev: 'Inspection', popis: 'Together at the car.' },
      { nazev: 'Signing', popis: 'In two counterparts.' },
    ],
    online: ['Details taken over from the agreement', 'Signing on screen', 'Download as PDF and Word'],
    hodiSe: ['when selling or lending a car', 'you want to record the exact time of handover'],
    nehodiSe: ['a rental car – the rental company uses its own report'],
    po: [{ nazev: 'Photos', popis: 'Keep the pictures of the car and the odometer.' }],
    faq: [
      { q: 'Why is the time important?', a: 'For traffic offences and damage caused after the handover, the person taking over is already responsible.' },
      { q: 'Do I need an agreement for it?', a: 'Not necessarily, but when selling, use it together with the sale agreement (adásvételi szerződés).' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony: 'The template is based on the Hungarian Civil Code (Polgári Törvénykönyv).',
    souvisejiciPopis: 'Other documents for selling a car, also free.',
  },
  vytvorit: {
    title: 'Car handover report online – Hungary, free PDF',
    description: 'Guide in English for a car handover report (átadás-átvételi jegyzőkönyv) in Hungary: odometer, damage, keys, time. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    prevzit: 'the car sale agreement (gépjármű adásvételi szerződés)',
    kroky: {
      felek: { nazev: 'Parties and vehicle' },
      allapot: { nazev: 'Condition and accessories' },
    },
    pole: {
      p_jmeno: { popis: 'Name of the person handing over' },
      p_adresa: { popis: 'Address of the person handing over' },
      k_jmeno: { popis: 'Name of the person taking over' },
      k_adresa: { popis: 'Address of the person taking over' },
      znacka: { popis: 'Make and model' },
      vin: { popis: 'Chassis number (VIN)' },
      spz: { popis: 'Registration number' },
      szerzodes_datum: { popis: 'Date of the sale agreement (if any)' },
      km: { popis: 'Odometer reading' },
      klice: { popis: 'Number of keys' },
      uzemanyag: {
        popis: 'Fuel level',
        moznosti: { tartalek: 'Reserve', negyed: '1/4', fel: '1/2', haromnegyed: '3/4', tele: 'Full' },
      },
      okmanyok: {
        popis: 'Documents and accessories handed over',
        moznosti: {
          forgalmi: 'Registration certificate (forgalmi engedély)',
          torzskonyv: 'Vehicle title document (törzskönyv)',
          szerviz: 'Service book',
          gumi: 'Set of winter/summer tyres',
          kotelezo: 'First-aid kit, warning triangle',
        },
      },
      serules: { popis: 'Damage, remarks', placeholder: 'e.g. karc a jobb első ajtón (scratch on the front right door)' },
      misto: { popis: 'Town' },
      atadas_datum: { popis: 'Date of handover' },
      atadas_ido: { popis: 'Time of handover (hours, minutes)', placeholder: 'e.g. 14:30' },
    },
    vysvetleni: ['', '', ''],
    coDal: ['Print it in two counterparts and both of you sign.', 'Take photos of the car and the odometer, and keep the pictures.'],
    kontrola: [
      'Read the odometer and the fuel level together.',
      'Describe damage specifically (location, extent) and photograph it with the date.',
      'The exact time of handover matters for speed camera (traffipax) fines and accidents – from then on the buyer is responsible for the car.',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
    ],
  },

  dokument: {
    nazev: 'Motor Vehicle Handover Report',
    podnadpis: 'confirmation of the handover and taking over of possession of the motor vehicle',
    podpisy: { vlevo: 'handed over by', vpravo: 'taken over by' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: ['**Handed over by:** {{p_jmeno}}, address: {{p_adresa}}', '**Taken over by:** {{k_jmeno}}, address: {{k_adresa}}'],
      },
      {
        nadpis: 'The Motor Vehicle',
        odstavce: [
          '{{znacka}}, chassis number: {{vin}}, registration number: {{spz}}. The handover takes place on the basis of the sale agreement dated {{szerzodes_datum}}.',
          'Odometer reading: {{km}}. Number of keys handed over: {{klice}}.',
          {
            uvod: 'Fuel level:',
            moznosti: { tartalek: 'reserve', negyed: '1/4', fel: '1/2', haromnegyed: '3/4', tele: 'full' },
          },
          {
            uvod: 'Together with the motor vehicle, the person handing over hands over:',
            moznosti: {
              forgalmi: 'registration certificate',
              torzskonyv: 'vehicle title document',
              szerviz: 'service book',
              gumi: 'set of winter/summer tyres',
              kotelezo: 'first-aid kit, warning triangle',
            },
          },
          'Damage, remarks: {{serules}}',
        ],
      },
      {
        nadpis: 'Handover',
        odstavce: [
          'The person taking over took over the motor vehicle in the condition stated above on {{atadas_datum}} at {{atadas_ido}}. From this time, liability and the risk of damage in connection with the motor vehicle are borne by the person taking over.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

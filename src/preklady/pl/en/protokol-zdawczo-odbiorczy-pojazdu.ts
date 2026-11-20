/**
 * English version: vehicle handover report (Poland). Original: src/obsah/pl/protokol-zdawczo-odbiorczy-pojazdu.ts
 * and src/sablony/pl/protokol-zdawczo-odbiorczy-pojazdu.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-PROTOKOL-AUTO', verze: '1.0' },

  nazev: 'Vehicle Handover Report',
  nazevA: 'the vehicle handover report',
  katalog: {
    popis: 'Condition of the car, keys and documents at handover.',
    slova: ['handover report', 'car handover', 'vehicle handover', 'vehicle collection', 'car condition', 'mileage', 'protokół zdawczo-odbiorczy', 'protokół zdawczo-odbiorczy pojazdu', 'przekazanie auta'],
  },
  landing: {
    title: 'Vehicle Handover Report Poland {rok} – free PDF template',
    description:
      'Car handover report for Poland in English: mileage, fuel, damage, keys, equipment and time of handover. Download a bilingual PDF or Word for free.',
    perex: 'An exact record of the condition the car was in and when it was handed over. Protects against disputes about damage, mileage and fines.',
    obsahPopis: 'Five short sections, filled in from the sale agreement.',
    obsah: [
      { nazev: 'Parties', popis: 'The person handing over and the person receiving.' },
      { nazev: 'Vehicle', popis: 'Make, VIN, registration number.' },
      { nazev: 'Condition', popis: 'Mileage, fuel, damage.' },
      { nazev: 'Equipment', popis: 'Keys, fire extinguisher, warning triangle.' },
      { nazev: 'Receipt', popis: 'Date and time.' },
    ],
    kroky: [
      { nazev: 'Fill in from the agreement', popis: 'With one click.' },
      { nazev: 'Record the condition', popis: 'Mileage, fuel, damage.' },
      { nazev: 'Sign', popis: 'At the handover.' },
    ],
    online: [
      'Filled in from the sale agreement',
      'Signature on screen',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are selling or buying a car',
      'you are lending your car to a friend',
    ],
    nehodiSe: [
      'car rental or leasing – they have their own reports',
    ],
    po: [
      { nazev: 'Photos', popis: 'Photograph the car and the odometer.' },
    ],
    faq: [
      { q: 'Is a handover report (protokół zdawczo-odbiorczy) compulsory?', a: 'No, but it is the best proof of the car’s condition and the time of handover.' },
      { q: 'Do you store my details?', a: 'No. The report is created only in your browser.' },
    ],
    zakony: 'The template is based on the Polish Civil Code (Kodeks cywilny).',
    souvisejiciPopis: 'Other documents for selling a car, also free.',
  },
  vytvorit: {
    title: 'Fill in a vehicle handover report online – Poland, PDF',
    description: 'Car handover report for Poland: mileage, fuel, damage, keys. Guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    prevzit: 'the car sale agreement',
    kroky: {
      strony: { nazev: 'Parties and vehicle' },
      stan: { nazev: 'Condition and equipment' },
    },
    pole: {
      p_jmeno: { popis: 'Person handing over – first name and surname' },
      p_adresa: { popis: 'Address of the person handing over' },
      k_jmeno: { popis: 'Person receiving – first name and surname' },
      k_adresa: { popis: 'Address of the person receiving' },
      znacka: { popis: 'Make and model' },
      vin: { popis: 'VIN' },
      spz: { popis: 'Registration number' },
      smlouva_datum: { popis: 'Date of the sale agreement (if applicable)' },
      km: { popis: 'Mileage' },
      palivo: {
        popis: 'Fuel in the tank',
        moznosti: { rezerwa: 'Reserve', cwierc: '1/4', pol: '1/2', trzy: '3/4', pelny: 'Full tank' },
      },
      poskozeni: {
        popis: 'Damage',
        moznosti: { bez: 'No visible damage', s: 'The vehicle is damaged' },
      },
      poskozeni_popis: { popis: 'Description of the damage (ideally in Polish)' },
      klice: { popis: 'Number of keys' },
      vybava: {
        popis: 'Equipment',
        moznosti: {
          gasnica: 'Fire extinguisher',
          trojkat: 'Warning triangle',
          apteczka: 'First-aid kit',
          zapas: 'Spare wheel or repair kit',
          opony: 'Second set of tyres',
        },
      },
      predani_datum: { popis: 'Date of handover' },
      predani_cas: { popis: 'Time of handover', placeholder: 'e.g. 14:30' },
      misto: { popis: 'Town' },
      poznamky: { popis: 'Notes' },
    },
    vysvetleni: ['', '', '', '', ''],
    coDal: [
      'Print the report in two copies and both of you sign both.',
      'Take photos of the car and the odometer – keep them.',
    ],
    kontrola: [
      'Read the mileage and fuel level together.',
      'Describe damage specifically (location, extent) and photograph it with the date.',
      'The time of handover is useful for speed camera fines or collisions.',
      'The VIN in the registration certificate (dowód rejestracyjny) matches the VIN on the car; you can check the history at [historiapojazdu.gov.pl](https://historiapojazdu.gov.pl/).',
      'Check the other party’s identity against their identity card (dowód osobisty) and copy their name exactly as it appears in the card.',
    ],
  },

  dokument: {
    nazev: 'Vehicle Handover Report',
    podnadpis: 'confirmation of handover and receipt of the vehicle',
    podpisy: { vlevo: 'person handing over', vpravo: 'person receiving' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Person handing over:** {{p_jmeno}}, residing at {{p_adresa}}',
          '**Person receiving:** {{k_jmeno}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Vehicle',
        odstavce: ['Make and model {{znacka}}, VIN {{vin}}, registration number {{spz}}, handed over under the agreement dated {{smlouva_datum}}.'],
      },
      {
        nadpis: 'Condition of the Vehicle at Handover',
        odstavce: [
          'Mileage: {{km}}.',
          {
            uvod: 'Fuel in the tank:',
            uvodVzor: 'Fuel in the tank (tick):',
            moznosti: { rezerwa: 'reserve.', cwierc: 'about 1/4.', pol: 'about 1/2.', trzy: 'about 3/4.', pelny: 'full tank.' },
          },
          {
            uvodVzor: 'Damage (tick one option):',
            moznosti: { bez: 'The vehicle has no visible damage.', s: 'The vehicle has the following damage: {{poskozeni_popis}}' },
          },
        ],
      },
      {
        nadpis: 'Keys and Equipment',
        odstavce: [
          'Number of keys handed over: {{klice}}.',
          {
            uvod: 'Equipment handed over:',
            moznosti: { gasnica: 'fire extinguisher', trojkat: 'warning triangle', apteczka: 'first-aid kit', zapas: 'spare wheel or repair kit', opony: 'second set of tyres' },
          },
        ],
      },
      {
        nadpis: 'Receipt',
        odstavce: [
          'The vehicle was handed over on {{predani_datum}} at {{predani_cas}}.',
          'The person receiving confirms receipt of the vehicle together with the keys and equipment in the condition described in this report.',
          'Notes: {{poznamky}}',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

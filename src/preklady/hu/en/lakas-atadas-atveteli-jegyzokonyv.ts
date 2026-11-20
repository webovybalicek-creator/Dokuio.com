/**
 * English version: flat handover report (Hungary). Original: src/obsah/hu/lakas-atadas-atveteli-jegyzokonyv.ts
 * and src/sablony/hu/lakas-atadas-atveteli-jegyzokonyv.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-LAKAS-JEGYZOKONYV', verze: '1.0' },

  nazev: 'Flat Handover Report',
  nazevA: 'the flat handover report',
  katalog: {
    popis: 'Meters, keys and condition when moving in and out.',
    slova: ['flat handover report', 'move-in checklist', 'move-out inspection', 'meter readings', 'rental inventory', 'deposit', 'lakás átadás-átvételi jegyzőkönyv', 'albérlet jegyzőkönyv'],
  },
  landing: {
    title: 'Flat Handover Report Hungary {rok} – free PDF template',
    description:
      'Handover report for a rented flat in Hungary, in English: meter readings, keys and damage when moving in and out. Protects the deposit. Bilingual PDF or Word, free.',
    perex: 'Records the condition of the flat when moving in and moving out. In a dispute, it decides what happens to the deposit.',
    obsahPopis: 'What it records.',
    obsah: [
      { nazev: 'Meters', popis: 'Electricity, gas, water, heating.' },
      { nazev: 'Keys', popis: 'By number.' },
      { nazev: 'Condition', popis: 'Damage room by room.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'From the details of the agreement.' },
      { nazev: 'Walk-through', popis: 'Together, with photos.' },
      { nazev: 'Signing', popis: 'In two counterparts.' },
    ],
    online: ['Details taken over from the agreement', 'Signing on screen', 'Download as PDF and Word'],
    hodiSe: ['when moving in and moving out'],
    nehodiSe: ['a meter replacement recorded with the building’s common representative or the utility provider'],
    po: [{ nazev: 'Photos', popis: 'Keep the photos until the deposit has been settled.' }],
    faq: [
      {
        q: 'Why is a report needed?',
        a: 'It shows what damage was already there when moving in, and what can be deducted from the deposit (óvadék).',
      },
      { q: 'Who signs it?', a: 'Both the landlord and the tenant, in two counterparts.' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony: 'The template is based on the Hungarian Housing Lease Act (lakásbérleti törvény) and the Hungarian Civil Code (Polgári Törvénykönyv).',
    souvisejiciPopis: 'Other documents for renting, also free.',
  },
  vytvorit: {
    title: 'Fill in a flat handover report online – Hungary, PDF',
    description: 'Guide in English for a flat handover report (átadás-átvételi jegyzőkönyv) in Hungary: meters, keys, damage. Bilingual PDF or Word, free, no sign-up.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    prevzit: 'the residential lease agreement (lakásbérleti szerződés)',
    kroky: {
      alap: { nazev: 'Parties and flat' },
      allapot: { nazev: 'Meters, keys, condition' },
    },
    pole: {
      irany: {
        popis: 'Type of handover',
        moznosti: { kezdet: 'At the start of the lease (moving in)', veg: 'At the end of the lease (moving out)' },
      },
      b_nev: { popis: 'Landlord’s name' },
      l_nev: { popis: 'Tenant’s name' },
      lakas_cim: { popis: 'Address of the flat' },
      villany: { popis: 'Electricity meter', placeholder: 'gyári szám, állás kWh (serial number, reading in kWh)' },
      gaz: { popis: 'Gas meter', placeholder: 'gyári szám, állás m³ (serial number, reading in m³)' },
      viz: { popis: 'Water meter', placeholder: 'hideg / meleg, m³ (cold / hot, m³)' },
      futes: { popis: 'Heat meter (if any)' },
      kulcsok: { popis: 'Keys', placeholder: 'e.g. 2 lakáskulcs, 1 kapukulcs, 1 postaláda (2 flat keys, 1 gate key, 1 letterbox key)' },
      allapot: {
        popis: 'Condition of the flat and furnishings, damage',
        placeholder: 'e.g. konyha: karcos munkalap; fürdő: repedt csempe a mosdó fölött (kitchen: scratched worktop; bathroom: cracked tile above the washbasin)',
      },
      misto: { popis: 'Town' },
      datum: { popis: 'Day of handover' },
    },
    vysvetleni: ['', '', ''],
    coDal: [
      'Print it in two counterparts, and both of you sign.',
      'Take photos of the meters and the damage – keep the photos until the deposit has been settled.',
    ],
    kontrola: [
      'Read the meters together and take photos of them.',
      'Describe damage specifically (where, how big) – this decides what can be deducted from the deposit.',
      'Write down the exact number of keys (flat, gate, letterbox).',
    ],
  },

  dokument: {
    nazev: 'Flat Handover Report',
    podnadpis: 'on the handover or return of a rented flat',
    podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
    clanky: [
      {
        nadpis: 'Details',
        odstavce: [
          {
            uvodVzor: 'Type of handover (tick one option):',
            moznosti: {
              kezdet: 'The Landlord hands over and the Tenant takes over the flat at the start of the lease.',
              veg: 'The Tenant returns and the Landlord takes back the flat at the end of the lease.',
            },
          },
          '**Landlord:** {{b_nev}} · **Tenant:** {{l_nev}}',
          '**Address of the flat:** {{lakas_cim}}',
        ],
      },
      {
        nadpis: 'Meters',
        odstavce: ['Electricity: {{villany}}', 'Gas: {{gaz}}', 'Water: {{viz}}', 'Heat meter: {{futes}}'],
      },
      {
        nadpis: 'Keys and Condition',
        odstavce: [
          'Keys handed over: {{kulcsok}}',
          'Condition of the flat and furnishings, damage: {{allapot}}',
          'The parties have jointly established the above and accept it by their signatures.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

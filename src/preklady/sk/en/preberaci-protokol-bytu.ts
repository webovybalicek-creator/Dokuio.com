/**
 * English version: flat handover report (Slovakia). Original: src/obsah/sk/preberaci-protokol-bytu.ts
 * and src/sablony/sk/preberaci-protokol-bytu.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-PROTOKOL-BYT', verze: '1.0' },

  nazev: 'Flat Handover Report',
  nazevA: 'the flat handover report',
  katalog: {
    popis: 'Meters, defects and keys when a flat is handed over.',
    slova: ['handover report', 'flat handover', 'move-in checklist', 'check-out report', 'inventory', 'meter readings', 'keys', 'tenancy', 'preberací protokol', 'odovzdanie bytu'],
  },
  landing: {
    title: 'Flat Handover Report Slovakia {rok} – free PDF template',
    description:
      'Flat handover report for Slovakia, explained in English: meter readings, defects, furnishings, keys. At move-in and move-out. Bilingual PDF or Word, free.',
    perex: 'The key evidence in a dispute over the security deposit. Record the condition of the flat, the meters and the keys when moving in and when moving out.',
    obsahPopis: 'A record of handing over and taking over the flat (preberací protokol).',
    obsah: [
      { nazev: 'Parties and flat', popis: 'Who hands over and who takes over.' },
      { nazev: 'Meters', popis: 'Electricity, gas, water, heating.' },
      { nazev: 'Condition, furnishings, keys', popis: 'Defects and an agreement on remedying them.' },
    ],
    kroky: [
      { nazev: 'Walk through the flat', popis: 'Room by room.' },
      { nazev: 'Write it down and take photos', popis: 'Meters and defects.' },
      { nazev: 'Sign it', popis: 'Each party keeps a copy.' },
    ],
    online: ['Pre-filled from the lease agreement', 'Signature on screen', 'Download as PDF and Word'],
    hodiSe: ['moving into a rented flat', 'handing back the flat at the end of the tenancy'],
    nehodiSe: ['selling a flat – that also involves the land register (kataster)'],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Photos', popis: 'Keep them together with the report.' },
      { nazev: 'Utilities', popis: 'Report the meter readings to the suppliers.' },
    ],
    faq: [
      { q: 'Is a handover report compulsory?', a: 'The law does not require it, but without it, it is hard to prove at the end of the tenancy what condition the flat was in at the start.' },
      { q: 'Do you store my details?', a: 'No. The report is put together directly in your browser.' },
    ],
    zakony: 'The template is based on the provisions on the lease of a flat (Section 685 et seq. of the Civil Code – Občiansky zákonník).',
    souvisejiciPopis: 'Other housing documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a flat handover report online – Slovakia, PDF',
    description: 'Flat handover report for Slovakia with meter readings and defects. Guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    prevzit: 'lease agreement for a flat',
    kroky: {
      zaklad: { nazev: 'Who, where and why', popis: 'Have you already filled in the lease agreement for the flat (nájomná zmluva)? We will pre-fill the details from it.' },
      meradla: { nazev: 'Meters', popis: 'Copy the readings and photograph the display. Leave empty whatever the flat does not have.' },
      stav: { nazev: 'Condition of the flat' },
    },
    pole: {
      p_jmeno: { popis: 'Landlord – first name and surname', napoveda: 'The owner of the flat.', placeholder: 'e.g. Ján Novák' },
      k_jmeno: { popis: 'Tenant – first name and surname', napoveda: 'The person living in the flat.', placeholder: 'e.g. Petra Kováčová' },
      adresa: { popis: 'Flat (address and flat number)', napoveda: 'The same as in the lease agreement.', placeholder: 'e.g. Mierová 25, Bratislava, byt č. 12' },
      dovod: {
        popis: 'Handover',
        napoveda: 'At the start, the tenant takes over the flat; at the end, they return it.',
        moznosti: { zaciatok: 'At the start of the tenancy', koniec: 'At the end of the tenancy' },
      },
      zmluva_datum: { popis: 'Date of the lease agreement', napoveda: 'The report relates to it.' },
      m_elektrina: { popis: 'Electricity (kWh)', napoveda: 'With a dual tariff, both readings.', placeholder: 'e.g. 12 345,6' },
      m_plyn: { popis: 'Gas (m³)', napoveda: 'The gas meter reading.', placeholder: 'e.g. 4 321,0' },
      m_studena: { popis: 'Cold water (m³)', napoveda: 'Usually in the bathroom or kitchen.', placeholder: 'e.g. 123,4' },
      m_tepla: { popis: 'Hot water (m³)', napoveda: 'Next to the cold water meter.', placeholder: 'e.g. 56,7' },
      m_teplo: { popis: 'Heat / heat cost allocators', napoveda: 'The heat meter reading or the figures on the radiators.', placeholder: 'e.g. obývačka 123, spálňa 87 (living room 123, bedroom 87)' },
      stav: {
        popis: 'Condition of the flat',
        napoveda: 'Go through all rooms, windows, floors, walls and appliances.',
        moznosti: { bez: 'No defects, consistent with normal wear and tear', s: 'With the following defects' },
      },
      vady: { popis: 'Description of the defects', napoveda: 'The room and exactly what.', placeholder: 'e.g. kuchyňa – odštiepená hrana linky (kitchen – chipped edge of the worktop)' },
      vybavenie: { popis: 'Furnishings and their condition', napoveda: 'Appliances and furniture included in the tenancy.', placeholder: 'e.g. chladnička – funkčná; práčka – funkčná (fridge – working; washing machine – working)' },
      kluce: { popis: 'Keys and fobs', napoveda: 'How many and for what.', placeholder: 'e.g. 3× byt, 2× dom, 1× pivnica, 2× čip (3× flat, 2× building, 1× cellar, 2× fob)' },
      dohoda: { popis: 'Agreement on defects (optional)', napoveda: 'Who will remedy the defect and by when.', placeholder: 'e.g. prenajímateľ opraví kvapkajúcu batériu do 30. 11. (the landlord will fix the dripping tap by 30 Nov)' },
      misto: { popis: 'Place (town)', napoveda: 'Where the flat is handed over.', placeholder: 'e.g. Bratislava' },
      datum: { popis: 'Date of handover', napoveda: 'We pre-filled today.' },
    },
    vysvetleni: ['', '', ''],
    coDal: [
      'Walk through the flat together room by room and add anything missing from the report.',
      'Photograph the meter readings and every defect – keep the dated photos.',
      'Sign two copies; each party keeps one.',
    ],
    kontrola: [
      'Copy the readings of all meters (electricity, gas, water, heating) together with the meter serial number.',
      'Record each defect with its location (e.g. “cracked tile next to the bath”).',
      'Test the appliances, water, heating, windows and locks.',
      'The number of keys and fobs for the flat, the building, the cellar and the letterbox.',
      'At the end of the tenancy: normal wear and tear is borne by the landlord, damage beyond it by the tenant.',
    ],
  },

  dokument: {
    nazev: 'Flat Handover Report',
    podnadpis: 'record of the handover and takeover of a flat',
    podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
    clanky: [
      {
        nadpis: 'Parties and Flat',
        odstavce: [
          '**Landlord:** {{p_jmeno}} · **Tenant:** {{k_jmeno}}',
          'Flat: {{adresa}}, under the lease agreement dated {{zmluva_datum}}.',
          {
            uvodVzor: 'Handover (tick one):',
            moznosti: {
              zaciatok: 'The Landlord hands over and the Tenant takes over the flat at the start of the tenancy.',
              koniec: 'The Tenant returns and the Landlord takes over the flat at the end of the tenancy.',
            },
          },
        ],
      },
      {
        nadpis: 'Meter Readings',
        odstavce: ['Electricity: {{m_elektrina}} kWh · Gas: {{m_plyn}} m³ · Cold water: {{m_studena}} m³ · Hot water: {{m_tepla}} m³ · Heating: {{m_teplo}}'],
      },
      {
        nadpis: 'Condition of the Flat, Furnishings and Keys',
        odstavce: [
          {
            uvodVzor: 'Condition of the flat (tick one):',
            moznosti: {
              bez: 'The flat has no defects and is consistent with normal wear and tear.',
              s: 'The flat has the following defects: {{vady}}',
            },
          },
          'Furnishings: {{vybavenie}}',
          'Keys and fobs handed over: {{kluce}}',
          'Agreement on defects: {{dohoda}}',
          'By their signatures, the parties confirm that they have inspected the flat and that its condition corresponds to this report.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: flat handover report (Germany). Original: src/obsah/de/uebergabeprotokoll-wohnung.ts
 * and src/sablony/de/uebergabeprotokoll-wohnung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-PROTOKOLL-WOHNUNG', verze: '1.0' },

  nazev: 'Flat Handover Report',
  nazevA: 'the flat handover report',
  katalog: {
    popis: 'Meters, defects and keys when moving in and out.',
    slova: ['handover report', 'flat handover', 'apartment handover', 'moving in', 'moving out', 'meter readings', 'keys', 'Wohnungsübergabeprotokoll', 'Übergabeprotokoll', 'Wohnungsübergabe'],
  },
  landing: {
    title: 'Flat Handover Report Germany {rok} – free PDF template',
    description:
      'Flat handover report for Germany: meter readings, defects, fittings and keys when moving in and out. Explained in English, free bilingual PDF or Word.',
    perex: 'The most important evidence in a dispute about the deposit. Record the condition when moving in and moving out.',
    obsahPopis: 'Handover report (Übergabeprotokoll) on handing over and taking back the flat.',
    obsah: [
      { nazev: 'Parties and flat', popis: 'Who hands over, who takes over.' },
      { nazev: 'Meter readings', popis: 'Electricity, gas, water, heating.' },
      { nazev: 'Condition and keys', popis: 'Defects and arrangements.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'A few questions, everything explained.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up.' },
      { nazev: 'Sign', popis: 'Each side receives one copy.' },
    ],
    online: ['Explanations for every field', 'Pre-filled from the tenancy agreement', 'Download as PDF and Word'],
    hodiSe: ['Moving into a rented flat', 'Moving out at the end of the tenancy'],
    nehodiSe: ['Selling an owner-occupied flat'],
    poNadpis: 'Afterwards.',
    po: [
      { nazev: 'Photos', popis: 'Keep them together with the report.' },
      { nazev: 'Suppliers', popis: 'Report the meter readings to the electricity and gas suppliers.' },
    ],
    faq: [
      { q: 'Is a handover report mandatory?', a: 'No, but without a report the condition at moving in is hard to prove later.' },
      { q: 'Do you store my data?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on the rules on residential tenancies (Sections 535 et seq. of the German Civil Code, BGB).',
    souvisejiciPopis: 'More documents about housing, also free.',
  },
  vytvorit: {
    title: 'Fill in a flat handover report online – Germany, PDF',
    description: 'Flat handover report for Germany with meter readings and defects. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    kroky: {
      basis: { nazev: 'Who, where and why', popis: 'Already filled in the tenancy agreement? We will take over the details.' },
      zaehler: { nazev: 'Meter readings', popis: 'Read them and take photos. Leave meters that do not exist empty.' },
      zustand: { nazev: 'Condition' },
    },
    pole: {
      v_name: { popis: 'Landlord – name', napoveda: 'The owner.', placeholder: 'e.g. Thomas Müller' },
      m_name: { popis: 'Tenant – name', napoveda: 'The person using the flat.', placeholder: 'e.g. Anna Schmidt' },
      objekt: { popis: 'Flat (address and location)', napoveda: 'As in the tenancy agreement.', placeholder: 'e.g. Lindenstraße 7, Berlin, 2. OG links' },
      anlass: {
        popis: 'Reason',
        napoveda: 'Moving in or moving out.',
        moznosti: { einzug: 'Handover to the tenant (moving in)', auszug: 'Return to the landlord (moving out)' },
      },
      vertrag_datum: { popis: 'Date of the tenancy agreement', napoveda: 'The report belongs to the agreement.' },
      z_strom: { popis: 'Electricity (kWh)', napoveda: 'Meter reading.', placeholder: 'e.g. 12 345' },
      z_gas: { popis: 'Gas (m³)', napoveda: 'Meter reading.', placeholder: 'e.g. 4 321' },
      z_kalt: { popis: 'Cold water (m³)', napoveda: 'Water meter.', placeholder: 'e.g. 123,4' },
      z_warm: { popis: 'Hot water (m³)', napoveda: 'Hot water meter.', placeholder: 'e.g. 56,7' },
      z_heizung: { popis: 'Heating / heat cost allocators', napoveda: 'Heat meter or allocator (Heizkostenverteiler).', placeholder: 'e.g. Wohnzimmer 123, Schlafzimmer 87 (living room 123, bedroom 87)' },
      zustand: {
        popis: 'Condition of the flat',
        napoveda: 'Walls, floors, windows, appliances.',
        moznosti: { ok: 'No defects, normal wear and tear', maengel: 'With the following defects' },
      },
      maengel: { popis: 'Defects', napoveda: 'Room and what exactly.', placeholder: 'e.g. Küche – Kratzer in der Arbeitsplatte (kitchen – scratch in the worktop)' },
      ausstattung: { popis: 'Fittings and their condition', napoveda: 'Appliances and furniture.', placeholder: 'e.g. Kühlschrank – funktioniert (fridge – works)' },
      schluessel: { popis: 'Keys', napoveda: 'Number and what for.', placeholder: 'e.g. 3× Wohnung, 2× Haus, 1× Keller (3× flat, 2× building, 1× cellar)' },
      vereinbarung: { popis: 'Arrangements (optional)', napoveda: 'Who fixes what by when.', placeholder: 'e.g. Vermieter repariert den Wasserhahn bis 30.11. (landlord repairs the tap by 30.11.)' },
      ort: { popis: 'Place', napoveda: 'Place of handover.', placeholder: 'e.g. Berlin' },
      datum: { popis: 'Date', napoveda: 'Today’s date is pre-filled.' },
    },
    vysvetleni: ['', '', ''],
    coDal: [
      'Go through the flat together room by room and add any missing points by hand.',
      'Photograph the meter readings and defects.',
      'Sign two copies.',
    ],
    kontrola: [
      'Note all meters (electricity, gas, water, heating) with the meter number.',
      'Describe defects precisely, e.g. “crack in the tile next to the bath”.',
      'Test appliances, water, heating, windows and locks.',
      'Count the keys (flat, building, cellar, letterbox).',
      'When moving out: the landlord bears normal wear and tear; the tenant bears damage beyond that.',
    ],
    prevzit: 'the tenancy agreement',
  },

  dokument: {
    nazev: 'Flat Handover Report',
    podnadpis: 'Report on the handover and return of a flat',
    podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
    clanky: [
      {
        nadpis: 'Parties and Flat',
        odstavce: [
          '**Landlord:** {{v_name}} · **Tenant:** {{m_name}}',
          'Flat: {{objekt}}, under the tenancy agreement of {{vertrag_datum}}.',
          {
            uvodVzor: 'Reason (please tick):',
            moznosti: { einzug: 'The Landlord hands over the flat to the Tenant.', auszug: 'The Tenant returns the flat to the Landlord.' },
          },
        ],
      },
      {
        nadpis: 'Meter Readings',
        odstavce: ['Electricity: {{z_strom}} kWh · Gas: {{z_gas}} m³ · Cold water: {{z_kalt}} m³ · Hot water: {{z_warm}} m³ · Heating: {{z_heizung}}'],
      },
      {
        nadpis: 'Condition, Fittings and Keys',
        odstavce: [
          {
            uvodVzor: 'Condition (please tick):',
            moznosti: { ok: 'The flat has no defects, with normal wear and tear.', maengel: 'The flat has the following defects: {{maengel}}' },
          },
          'Fittings: {{ausstattung}}',
          'Keys handed over: {{schluessel}}',
          'Arrangements: {{vereinbarung}}',
          'By their signatures, the parties confirm that they have inspected the flat and that its condition corresponds to this report.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

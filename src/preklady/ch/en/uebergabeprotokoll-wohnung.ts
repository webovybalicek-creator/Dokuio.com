/**
 * English version: flat handover report (Switzerland). Original: src/obsah/ch/uebergabeprotokoll-wohnung.ts
 * and src/sablony/ch/uebergabeprotokoll-wohnung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-PROTOKOLL-WOHNUNG', verze: '1.1' },

  nazev: 'Flat Handover Report',
  nazevA: 'the flat handover report',
  katalog: {
    popis: 'Meters, defects and keys when moving in and out.',
    slova: ['handover report', 'flat handover', 'apartment handover', 'moving in', 'moving out', 'tenancy', 'meter readings', 'Übergabeprotokoll', 'Wohnungsübergabeprotokoll', 'Abnahmeprotokoll'],
  },
  landing: {
    title: 'Flat Handover Report Switzerland {rok} – free PDF template',
    description:
      'Handover and return report for a rented flat in Switzerland, explained in English: meter readings, defects, keys. Free bilingual PDF or Word.',
    perex: 'When the flat is returned, the landlord must report defects immediately. A careful report protects both sides.',
    obsahPopis: 'A report (Übergabeprotokoll) on the handover and return of the flat.',
    obsah: [
      { nazev: 'Parties and flat', popis: 'Who hands over, who takes over.' },
      { nazev: 'Meter readings', popis: 'Electricity, gas, water, heating.' },
      { nazev: 'Condition and keys', popis: 'Defects and agreements.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'A few questions, everything explained.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up.' },
      { nazev: 'Sign', popis: 'Each party receives one copy.' },
    ],
    online: [
      'Explanations for every field',
      'Pre-filled from the tenancy agreement',
      'Download as PDF and Word',
    ],
    hodiSe: ['moving into a rented flat', 'handing back the flat at the end of the tenancy'],
    nehodiSe: ['selling a freehold flat (Stockwerkeigentum)'],
    poNadpis: 'Afterwards.',
    po: [
      { nazev: 'Photos', popis: 'Keep them together with the report.' },
      { nazev: 'Rent deposit', popis: 'Release of the rent deposit (Mietkaution) after the flat has been checked and taken back.' },
    ],
    faq: [
      {
        q: 'Does the landlord have to report defects immediately?',
        a: 'Yes, when the flat is returned the landlord must notify defects in writing immediately, except for hidden defects (Art. 267a OR).',
      },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 253 et seq. and Art. 267a of the Swiss Code of Obligations (Obligationenrecht, OR).',
    souvisejiciPopis: 'More documents about housing, also free.',
  },
  vytvorit: {
    title: 'Fill in a flat handover report online – Switzerland',
    description: 'Guide in English for a flat handover report in Switzerland with meter readings and defects. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    prevzit: 'the tenancy agreement',
    kroky: {
      basis: { nazev: 'Who, where and why', popis: 'Already filled in the tenancy agreement? We will copy the details over.' },
      zaehler: { nazev: 'Meter readings', popis: 'Read the meters and take photos. Leave meters that don’t exist empty.' },
      zustand: { nazev: 'Condition' },
    },
    pole: {
      v_name: { popis: 'Landlord – name', napoveda: 'The owner.', placeholder: 'e.g. Thomas Müller' },
      m_name: { popis: 'Tenant – name', napoveda: 'The person who uses the flat.', placeholder: 'e.g. Anna Schmidt' },
      objekt: { popis: 'Flat (address and location)', napoveda: 'As in the tenancy agreement.', placeholder: 'e.g. Lindenstrasse 7, 8004 Zürich, 2. OG links (2nd floor, left)' },
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
      z_heizung: {
        popis: 'Heating / heat cost allocator',
        napoveda: 'Heat meter or allocator.',
        placeholder: 'e.g. Wohnzimmer 123, Schlafzimmer 87 (living room 123, bedroom 87)',
      },
      zustand: {
        popis: 'Condition of the flat',
        napoveda: 'Walls, floors, windows, appliances.',
        moznosti: { ok: 'No defects, normal wear and tear', maengel: 'With the following defects' },
      },
      maengel: {
        popis: 'Defects',
        napoveda: 'Room and what exactly.',
        placeholder: 'e.g. Küche – Kratzer in der Arbeitsplatte (kitchen – scratch in the worktop)',
      },
      ausstattung: {
        popis: 'Fixtures, fittings and their condition',
        napoveda: 'Appliances and furniture.',
        placeholder: 'e.g. Kühlschrank – funktioniert (fridge – working)',
      },
      schluessel: {
        popis: 'Keys',
        napoveda: 'Number and what for.',
        placeholder: 'e.g. 3× Wohnung, 2× Haus, 1× Keller (3× flat, 2× building, 1× cellar)',
      },
      vereinbarung: {
        popis: 'Agreements (optional)',
        napoveda: 'Who fixes what and by when.',
        placeholder: 'e.g. Vermieter repariert den Wasserhahn bis 30.11. (landlord repairs the tap by 30 Nov.)',
      },
      ort: { popis: 'Place', napoveda: 'Place of handover.', placeholder: 'e.g. Zürich' },
      datum: { popis: 'Date', napoveda: 'Today’s date pre-filled.' },
    },
    vysvetleni: ['', '', ''],
    coDal: [
      'Go through the flat together room by room and add any missing points by hand.',
      'Photograph the meter readings and defects.',
      'Sign two copies.',
    ],
    kontrola: [
      'Note all meters (electricity, gas, water, heating) with their meter number.',
      'Describe defects precisely, e.g. “crack in the tile next to the bath”.',
      'Test appliances, water, heating, windows and locks.',
      'Count the keys (flat, building, cellar, letterbox).',
      'When the flat is returned, the landlord must notify defects in writing immediately, otherwise they lose their claims, except for hidden defects (Art. 267a OR).',
    ],
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
          'Flat: {{objekt}}, under the tenancy agreement dated {{vertrag_datum}}.',
          {
            uvodVzor: 'Reason (please tick):',
            moznosti: {
              einzug: 'The Landlord hands over the flat to the Tenant.',
              auszug: 'The Tenant returns the flat to the Landlord.',
            },
          },
        ],
      },
      {
        nadpis: 'Meter Readings',
        odstavce: ['Electricity: {{z_strom}} kWh · gas: {{z_gas}} m³ · cold water: {{z_kalt}} m³ · hot water: {{z_warm}} m³ · heating: {{z_heizung}}'],
      },
      {
        nadpis: 'Condition, Fixtures and Keys',
        odstavce: [
          {
            uvodVzor: 'Condition (please tick):',
            moznosti: {
              ok: 'The flat has no defects, with normal wear and tear.',
              maengel: 'The flat has the following defects: {{maengel}}',
            },
          },
          'Fixtures and fittings: {{ausstattung}}',
          'Keys handed over: {{schluessel}}',
          'Agreements: {{vereinbarung}}',
          'By signing, the parties confirm that they have inspected the flat and that its condition corresponds to this report.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: flat handover report (Czech Republic). Original: src/obsah/cz/predavaci-protokol-byt.ts
 * and src/sablony/cz/predavaci-protokol-byt.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-PROTOKOL-BYT', verze: '1.0' },

  nazev: 'Flat Handover Report',
  nazevA: 'the flat handover report',
  katalog: {
    popis: 'Condition of the flat, meters and keys when moving in and out.',
    slova: ['handover report', 'flat', 'apartment', 'tenancy', 'meter readings', 'moving in', 'moving out', 'inventory', 'předávací protokol', 'předání bytu'],
  },
  landing: {
    title: 'Flat Handover Report Czech Republic {rok} – free PDF template',
    description:
      'Flat handover report for the Czech Republic, explained in English: meter readings, condition and defects, furnishings, keys. Free bilingual PDF or Word.',
    perex: 'When moving in and when moving out. It records the condition of the flat, the meters, the furnishings and the keys – the main evidence when the deposit is settled later.',
    obsahPopis: 'Three parts following the recommendations of the handbook “Jak pronajmout byt?” (“How to let a flat?”).',
    obsah: [
      { nazev: 'Parties and flat', popis: 'Landlord, tenant, the flat, reference to the lease agreement, start or end of the tenancy.' },
      { nazev: 'Meter readings', popis: 'Electricity, gas, water, heating.' },
      { nazev: 'Condition, furnishings and keys', popis: 'Defects, furnishings, keys and fobs, agreement on fixing defects.' },
    ],
    kroky: [
      { nazev: 'Go through the flat together', popis: 'Room by room, in daylight.' },
      { nazev: 'Copy the meter readings', popis: 'And take photos of them.' },
      { nazev: 'Sign', popis: 'On screen or on paper, two copies.' },
    ],
    online: ['We take the details from the lease agreement', 'All meters in one place', 'Sign with your finger on your phone', 'Download as PDF and Word'],
    hodiSe: ['moving into a rented flat', 'returning a flat at the end of a tenancy', 'handing over a flat within the family or when selling it'],
    nehodiSe: ['handing over a car – use the vehicle handover report', 'handing over commercial premises with technical equipment – add your own items', 'a dispute about damage is already under way – consult a lawyer'],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Keep the photos', popis: 'With the date, together with the report.' },
      { nazev: 'Report the meter readings', popis: 'To the energy suppliers and the building manager.' },
      { nazev: 'Compare when moving out', popis: 'Any difference beyond normal wear and tear is covered by the security deposit (jistota).' },
    ],
    faq: [
      { q: 'Is a handover report compulsory?', a: 'The law does not require it, but it is the best evidence of the condition of the flat. Without it, disputes about the deposit and damage are hard to resolve.' },
      { q: 'What is normal wear and tear?', a: 'Changes caused by ordinary living (faded paint, minor marks from furniture). The tenant is not responsible for these; they are responsible for damage beyond them.' },
      { q: 'Do you store my details?', a: 'No. The report is put together directly in your browser.' },
    ],
    zakony:
      'The template is based on Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník), and the recommendations of the handbook “Jak pronajmout byt?” (Iuridicum Remedium, supported by the Czech Ministry for Regional Development – MMR).',
    souvisejiciPopis: 'Other housing documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a flat handover report online – Czech Republic, PDF',
    description: 'Guide in English for a flat handover report in the Czech Republic: meters, condition, furnishings, keys. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    prevzit: 'residential lease agreement',
    kroky: {
      zaklad: { nazev: 'Who, where and why', popis: 'Have you already filled in the lease agreement? We pre-fill the details from it.' },
      meridla: { nazev: 'Meters', popis: 'Copy the readings and photograph the display. Leave empty what the flat does not have.' },
      stav: { nazev: 'Condition of the flat' },
    },
    pole: {
      p_jmeno: { popis: 'Landlord – first name and surname', napoveda: 'The owner of the flat.', placeholder: 'e.g. Jan Novák' },
      k_jmeno: { popis: 'Tenant – first name and surname', napoveda: 'Who uses the flat.', placeholder: 'e.g. Petra Svobodová' },
      adresa: { popis: 'Flat (address and flat number)', napoveda: 'The same as in the lease agreement.', placeholder: 'e.g. Masarykova 1025/5, Říčany, byt č. 12' },
      duvod: {
        popis: 'Handover',
        napoveda: 'At the start of the tenancy the tenant takes over the flat; at the end they return it.',
        moznosti: { zacatek: 'At the start of the tenancy (the tenant takes over the flat)', konec: 'At the end of the tenancy (the tenant returns the flat)' },
      },
      smlouva_datum: { popis: 'Date of the lease agreement', napoveda: 'The report relates to it.' },
      m_elektrina: { popis: 'Electricity (kWh)', napoveda: 'With a dual tariff, both readings (VT/NT – high/low tariff).', placeholder: 'e.g. 12 345,6' },
      m_plyn: { popis: 'Gas (m³)', napoveda: 'Gas meter reading.', placeholder: 'e.g. 4 321,0' },
      m_studena: { popis: 'Cold water (m³)', napoveda: 'Usually in the bathroom or kitchen.', placeholder: 'e.g. 123,4' },
      m_tepla: { popis: 'Hot water (m³)', napoveda: 'Usually next to the cold water meter (red marking).', placeholder: 'e.g. 56,7' },
      m_teplo: { popis: 'Heating / radiator indicators', napoveda: 'Heat meter reading or the figures from the indicators.', placeholder: 'e.g. obývák 123, ložnice 87 (living room 123, bedroom 87)' },
      stav: {
        popis: 'Condition of the flat',
        napoveda: 'Go through all rooms, windows, floors, walls and appliances.',
        moznosti: { bez: 'No defects, consistent with normal wear and tear', s: 'With the following defects' },
      },
      vady: {
        popis: 'Description of defects',
        napoveda: 'The room and exactly what, e.g. “ložnice – skvrna na koberci u okna” (bedroom – stain on the carpet by the window). Ideally write it in Czech.',
        placeholder: 'e.g. kuchyně – odštípnutá hrana linky; koupelna – prasklina dlaždice u vany (kitchen – chipped worktop edge; bathroom – cracked tile by the bath)',
      },
      vybaveni: {
        popis: 'Furnishings and their condition',
        napoveda: 'Appliances and furniture included in the tenancy. Ideally write it in Czech.',
        placeholder: 'e.g. lednice Bosch – funkční; pračka Whirlpool – funkční (Bosch fridge – working; Whirlpool washing machine – working)',
      },
      klice: { popis: 'Keys and fobs', napoveda: 'Number and what they are for (flat, building, cellar, letterbox, fob).', placeholder: 'e.g. 3× byt, 2× dům, 1× sklep, 2× čip (3× flat, 2× building, 1× cellar, 2× fob)' },
      dohoda: {
        popis: 'Agreement on defects (optional)',
        napoveda: 'Who will fix the defect and by when, or how it will be paid for. Ideally write it in Czech.',
        placeholder: 'e.g. pronajímatel opraví kapající baterii do 30. 11. (the landlord will fix the dripping tap by 30 Nov)',
      },
      misto: { popis: 'Place (town)', napoveda: 'Where the flat is handed over.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date of handover', napoveda: 'We pre-filled today.' },
    },
    vysvetleni: [
      'Who hands over and who takes over the flat, and which flat it is.',
      'Energy and services are billed according to these readings.',
      'The exact condition at handover. In a dispute about damage, this is the main evidence.',
    ],
    coDal: [
      'Go through the flat together room by room and add by hand anything missing from the report.',
      'Photograph the meter readings and every defect – attach or keep the dated photos.',
      'Sign two copies; each party keeps one.',
      'When moving out, compare the report with the one from the start of the tenancy – any difference beyond normal wear and tear is covered by the security deposit (jistota).',
    ],
    kontrola: [
      'Copy and photograph the readings of all meters (electricity, gas, water, heating), including the meter’s serial number.',
      'Record every defect with its location (e.g. “prasklina dlaždice u vany” – cracked tile by the bath). Anything missing here is hard to prove later.',
      'Test the appliances, water, heating, windows and locks.',
      'The number of keys and fobs for the flat, building, cellar and letterbox.',
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
          'Flat: {{adresa}}, under the lease agreement dated {{smlouva_datum}}.',
          {
            uvodVzor: 'Handover (tick):',
            moznosti: {
              zacatek: 'The Landlord hands over and the Tenant takes over the flat at the start of the tenancy.',
              konec: 'The Tenant returns and the Landlord takes over the flat at the end of the tenancy.',
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
            uvodVzor: 'Condition of the flat (tick one option):',
            moznosti: {
              bez: 'The flat has no defects and is consistent with normal wear and tear.',
              s: 'The flat has the following defects: {{vady}}',
            },
          },
          'Furnishings: {{vybaveni}}',
          'Keys and fobs handed over: {{klice}}',
          'Agreement on defects: {{dohoda}}',
          'By their signatures, the parties confirm that they have inspected the flat and that its condition corresponds to this report.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: flat handover report (Poland). Original: src/obsah/pl/protokol-zdawczo-odbiorczy-mieszkania.ts
 * and src/sablony/pl/protokol-zdawczo-odbiorczy-mieszkania.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-PROTOKOL-MIESZKANIE', verze: '1.0' },

  nazev: 'Flat Handover Report',
  nazevA: 'the flat handover report',
  katalog: {
    popis: 'Meters, defects and keys when handing over a flat.',
    slova: ['handover report', 'flat handover', 'apartment', 'inventory', 'check-in report', 'meter readings', 'keys', 'deposit', 'tenancy', 'protokół zdawczo-odbiorczy', 'mieszkanie'],
  },
  landing: {
    title: 'Flat Handover Report Poland {rok} – free PDF template',
    description:
      'Flat handover report (protokół zdawczo-odbiorczy) for Poland: meter readings, defects, furnishings, keys. At move-in and move-out. Free bilingual PDF or Word.',
    perex: 'The most important evidence in a dispute over the deposit (kaucja). Record the condition of the flat at the start and at the end of the tenancy.',
    obsahPopis: 'Report on handing over and taking over the premises.',
    obsah: [
      { nazev: 'Parties and premises', popis: 'Who hands over and who takes over.' },
      { nazev: 'Meters', popis: 'Electricity, gas, water, heating.' },
      { nazev: 'Condition and keys', popis: 'Defects and arrangements.' },
    ],
    kroky: [
      { nazev: 'Inspect the flat', popis: 'Room by room.' },
      { nazev: 'Write it down and take photos', popis: 'Meters and defects.' },
      { nazev: 'Sign', popis: 'Each party keeps a copy.' },
    ],
    online: ['Details from the tenancy agreement', 'Signature on screen', 'Download as PDF and Word'],
    hodiSe: ['moving into a rented flat', 'returning the flat at the end of the tenancy'],
    nehodiSe: ['selling a flat – there the report is part of the notarial agreement'],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Photos', popis: 'Keep them together with the report.' },
      { nazev: 'Utilities', popis: 'Report the meter readings to the suppliers.' },
    ],
    faq: [
      {
        q: 'Is the handover report compulsory?',
        a: 'The law does not require it, but without it it is difficult to prove the condition of the flat and settle the deposit.',
      },
      { q: 'Do you save my details?', a: 'No. The report is created solely in your browser.' },
    ],
    zakony:
      'The template is based on the rules on tenancy (Article 659 et seq. of the Polish Civil Code – Kodeks cywilny, KC) and the Act on the Protection of Tenants’ Rights (ustawa o ochronie praw lokatorów).',
    souvisejiciPopis: 'Other housing documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a flat handover report online – Poland',
    description: 'Flat handover report for Poland with meter readings and defects. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · result as PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    prevzit: 'the flat tenancy agreement',
    kroky: {
      podstawa: { nazev: 'Who, where and why', popis: 'Have you already filled in the tenancy agreement? We will take the details from it.' },
      liczniki: { nazev: 'Meters', popis: 'Write down the readings and take photos. Leave empty what there isn’t.' },
      stan: { nazev: 'Condition of the flat' },
    },
    pole: {
      w_imie: { popis: 'Landlord – first name and surname', napoveda: 'The owner of the flat.', placeholder: 'e.g. Jan Kowalski' },
      n_imie: { popis: 'Tenant – first name and surname', napoveda: 'The person using the flat.', placeholder: 'e.g. Anna Nowak' },
      adres: { popis: 'Address of the flat', napoveda: 'As in the agreement.', placeholder: 'e.g. ul. Polna 7/12, Warszawa' },
      powod: {
        popis: 'Handover',
        napoveda: 'At the start the tenant takes over the flat, at the end they return it.',
        moznosti: { wydanie: 'Handing over the flat to the tenant', zwrot: 'Returning the flat to the landlord' },
      },
      umowa_data: { popis: 'Date of the tenancy agreement', napoveda: 'The report is an annex to the agreement.' },
      l_prad: { popis: 'Electricity (kWh)', napoveda: 'With a two-zone tariff, both readings.', placeholder: 'e.g. 12 345' },
      l_gaz: { popis: 'Gas (m³)', napoveda: 'Gas meter reading.', placeholder: 'e.g. 4 321' },
      l_zimna: { popis: 'Cold water (m³)', napoveda: 'Water meter.', placeholder: 'e.g. 123,4' },
      l_ciepla: { popis: 'Hot water (m³)', napoveda: 'Hot water meter.', placeholder: 'e.g. 56,7' },
      l_cieplo: { popis: 'Heat / heat cost allocators', napoveda: 'Heat meter or allocators on the radiators.', placeholder: 'e.g. salon 123, sypialnia 87 (living room 123, bedroom 87)' },
      stan: {
        popis: 'Condition of the premises',
        napoveda: 'Check the walls, floors, windows and appliances.',
        moznosti: { bez: 'No defects, normal wear and tear', z: 'With the following defects' },
      },
      usterki: { popis: 'Description of defects', napoveda: 'The room and what exactly.', placeholder: 'e.g. kuchnia – odprysk na blacie (kitchen – chipped worktop)' },
      wyposazenie: { popis: 'Furnishings and their condition', napoveda: 'Appliances and furniture.', placeholder: 'e.g. lodówka – sprawna; pralka – sprawna (fridge – working; washing machine – working)' },
      klucze: { popis: 'Keys and remote controls', napoveda: 'How many and what for.', placeholder: 'e.g. 3× mieszkanie, 2× klatka, 1× piwnica (3× flat, 2× stairwell, 1× cellar)' },
      ustalenia: { popis: 'Arrangements (optional)', napoveda: 'Who will fix a defect and by when.', placeholder: 'e.g. wynajmujący naprawi kran do 30.11. (the landlord will repair the tap by 30.11.)' },
      miejsce: { popis: 'Place', napoveda: 'Town.', placeholder: 'e.g. Warszawa' },
      data: { popis: 'Date', napoveda: 'We have filled in today’s date.' },
    },
    vysvetleni: ['', '', ''],
    coDal: [
      'Go through every room together and fill in anything missing.',
      'Take photos of the meters and defects.',
      'Sign two copies.',
    ],
    kontrola: [
      'Write down all meters (electricity, gas, water, heating) with their serial numbers.',
      'Describe each defect with its location, e.g. “cracked tile by the bath”.',
      'Check the appliances, water, heating, windows and locks.',
      'Count the keys and remote controls.',
      'On return: normal wear and tear is borne by the landlord; damage beyond it is borne by the tenant and may be deducted from the deposit.',
    ],
  },

  dokument: {
    nazev: 'Flat Handover Report',
    podnadpis: 'report on the handover and acceptance of residential premises (protokół zdawczo-odbiorczy)',
    podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
    clanky: [
      {
        nadpis: 'Parties and Premises',
        odstavce: [
          '**Landlord:** {{w_imie}} · **Tenant:** {{n_imie}}',
          'Premises: {{adres}}, under the tenancy agreement dated {{umowa_data}}.',
          {
            uvodVzor: 'Handover (tick):',
            moznosti: {
              wydanie: 'The Landlord hands over and the Tenant takes over the premises at the start of the tenancy.',
              zwrot: 'The Tenant returns and the Landlord takes back the premises after the end of the tenancy.',
            },
          },
        ],
      },
      {
        nadpis: 'Meter Readings',
        odstavce: ['Electricity: {{l_prad}} kWh · Gas: {{l_gaz}} m³ · Cold water: {{l_zimna}} m³ · Hot water: {{l_ciepla}} m³ · Heat: {{l_cieplo}}'],
      },
      {
        nadpis: 'Condition of the Premises, Furnishings and Keys',
        odstavce: [
          {
            uvodVzor: 'Condition of the premises (tick):',
            moznosti: {
              bez: 'The premises have no defects, allowing for normal wear and tear.',
              z: 'The premises have the following defects: {{usterki}}',
            },
          },
          'Furnishings: {{wyposazenie}}',
          'Keys handed over: {{klucze}}',
          'Arrangements: {{ustalenia}}',
          'By signing, the parties confirm that they have inspected the premises and that their condition corresponds to this report.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

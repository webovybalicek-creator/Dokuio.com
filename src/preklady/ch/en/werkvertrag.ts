/**
 * English version: contract for work (Switzerland). Original: src/obsah/ch/werkvertrag.ts
 * and src/sablony/ch/werkvertrag.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-WERKVERTRAG', verze: '1.0' },

  nazev: 'Contract for Work',
  nazevA: 'the contract for work',
  katalog: {
    popis: 'Tradespeople, renovation, repairs – price, deadline, acceptance.',
    slova: ['contract for work', 'tradesperson', 'builder', 'renovation', 'repair', 'acceptance of work', 'fixed price', 'cost estimate', 'Werkvertrag', 'Handwerker'],
  },
  landing: {
    title: 'Contract for Work Switzerland {rok} – free PDF template',
    description:
      'Contract for work under Art. 363 et seq. OR (Switzerland), explained in English: work, deadline, price, deposit, acceptance and defects. Free bilingual PDF or Word.',
    perex: 'For renovation, repairs or any job given to a tradesperson or freelancer: what will be done, by when, at what price and how the work is accepted.',
    obsahPopis: 'Six sections under Art. 363 et seq. OR.',
    obsah: [
      { nazev: 'Parties', popis: 'Customer and contractor.' },
      { nazev: 'Subject of the contract', popis: 'Work, place, materials.' },
      { nazev: 'Time of performance', popis: 'Start and completion.' },
      { nazev: 'Remuneration and payment', popis: 'Fixed price or approximate cost estimate, deposit, payment deadline.' },
      { nazev: 'Acceptance and defects', popis: 'Inspection, notice of defects, report, limitation period.' },
      { nazev: 'Final provisions', popis: 'Changes in writing.' },
    ],
    kroky: [
      { nazev: 'Describe the work', popis: 'Scope, place, dates.' },
      { nazev: 'Agree the price', popis: 'Fixed or based on a cost estimate.' },
      { nazev: 'Sign', popis: 'Two copies.' },
    ],
    online: [
      'Price in words (in francs, in German) added automatically',
      'Dates for your calendar',
      'Explanations for every field',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'hiring a painter, tiler or joiner',
      'a repair or something made to measure',
      'as a tradesperson – clear terms with your customers',
    ],
    nehodiSe: [
      'building a house or a major conversion – have a construction contract (Bauwerkvertrag) drawn up by an expert (e.g. under the SIA 118 standard)',
      'ongoing work for an employer',
      'buying a finished item – use a purchase agreement',
    ],
    po: [
      { nazev: 'Deposit', popis: 'Pay by transfer or get a receipt.' },
      { nazev: 'Changes in writing', popis: 'Agree additional work and prices in writing.' },
      { nazev: 'Inspection', popis: 'Inspect the work after delivery and report defects immediately.' },
    ],
    faq: [
      { q: 'When do I have to pay?', a: 'On delivery of the work (Art. 372 OR). A deposit can be agreed.' },
      {
        q: 'How quickly do I have to report defects?',
        a: 'Immediately after inspection, as soon as this is feasible in the normal course of business; for immovable works within 60 days (Art. 367 OR). Anyone who approves the work loses their claims for recognisable defects.',
      },
      { q: 'How long is the contractor liable?', a: 'Claims for defects become time-barred 2 years after acceptance, for immovable works 5 years (Art. 371 OR).' },
      { q: 'Do you store my details?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'The template is based on Art. 363–375 of the Swiss Code of Obligations (Obligationenrecht, OR).',
    souvisejiciPopis: 'More templates for jobs and payments.',
  },
  vytvorit: {
    title: 'Fill in a contract for work online – Switzerland, free PDF',
    description: 'Guide in English for a contract for work in Switzerland with price, deposit and acceptance. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 4 minutes',
  },

  pruvodce: {
    slovo: { n: 'contract for work', g: 'contract for work', a: 'contract for work', l: 'contract for work' },
    kroky: {
      parteien: { nazev: 'Customer and contractor', popis: 'The customer commissions the work and pays. The contractor (e.g. a tradesperson) carries it out.' },
      werk: { nazev: 'Work' },
      preis: { nazev: 'Remuneration' },
    },
    pole: {
      b_name: { popis: 'Customer – name or company', placeholder: 'e.g. Max Mustermann' },
      b_adresse: { popis: 'Customer’s address', placeholder: 'e.g. Bahnhofstrasse 10, 8001 Zürich' },
      u_name: { popis: 'Contractor – name or company', placeholder: 'e.g. Malerbetrieb Schmidt' },
      u_adresse: { popis: 'Contractor’s address', placeholder: 'e.g. Marktgasse 1, 8001 Zürich' },
      leistung: {
        popis: 'Description of the work',
        napoveda: 'Scope, materials, dimensions. You can attach a quote (Offerte) as an annex.',
        placeholder:
          'e.g. Streichen von Wohnzimmer und Flur (ca. 60 m² Wandfläche), zweimal deckend weiss, inkl. Abkleben, laut Angebot vom 3. 11. 2026 (painting the living room and hall – approx. 60 m² of wall, two coats of white, incl. masking, as per quote of 3 Nov. 2026)',
      },
      ort: { popis: 'Place of performance', placeholder: 'e.g. Bahnhofstrasse 10, 8001 Zürich, 2. OG' },
      material: {
        popis: 'Who provides the materials?',
        moznosti: { unternehmer: 'The contractor (included in the price)', besteller: 'The customer' },
      },
      beginn: { popis: 'Start' },
      fertig: { popis: 'Completion' },
      preisart: {
        popis: 'Type of remuneration',
        moznosti: { pauschal: 'Fixed price (Art. 373 OR)', anschlag: 'Approximate cost estimate' },
      },
      preis: { popis: 'Remuneration (CHF, incl. VAT – MWST)', placeholder: 'e.g. 1800' },
      anzahlung_ja: {
        popis: 'Deposit',
        moznosti: { nein: 'None – payment after acceptance', ja: 'Deposit, balance after acceptance' },
      },
      anzahlung: { popis: 'Amount of the deposit (CHF)', placeholder: 'e.g. 500' },
      zahlungsziel: { popis: 'Payment period after acceptance (days)', placeholder: 'e.g. 14' },
      iban: { popis: 'Contractor’s IBAN (optional)' },
      misto: { popis: 'Place of signing', placeholder: 'e.g. Zürich' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [
      '',
      'The contractor owes a finished work free of defects – not just working time.',
      '',
      '',
      'At acceptance the work is inspected. Known defects must be expressly reserved.',
      '',
    ],
    coDal: [
      'Print it twice; both parties sign both copies.',
      'Pay deposits by transfer or get a receipt.',
      'Agree additional work and price changes in writing (an e-mail is enough).',
      'At acceptance, inspect the work and reserve known defects in the report – otherwise rights are lost.',
    ],
    kontrola: [
      'Describe the work as precisely as possible (scope, materials, dimensions; attach the quote (Offerte) as an annex).',
      'Fixed price: no additional charges, even if more work is needed (Art. 373 OR). Approximate cost estimate: if it is exceeded disproportionately, the customer can withdraw ([Art. 375 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_375)).',
      'Inspect the work after delivery and report defects immediately; for immovable works the notice period for defects is 60 days ([Art. 367 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_367)). Anyone who approves the work loses their claims for recognisable defects.',
      'Claims for defects become time-barred 2 years after acceptance, for immovable works 5 years ([Art. 371 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_371)).',
      'This template is not intended for building a house or major conversions – get expert advice.',
      'Check the other party’s identity against their passport or identity card (Identitätskarte) and copy their name and address exactly as shown.',
    ],
    pripominky: {
      'Beginn der Arbeiten': { nazev: 'Start of work' },
      'Fertigstellung und Abnahme': { nazev: 'Completion and acceptance', popis: 'Inspect the work and draw up an acceptance report listing all known defects.' },
    },
  },

  dokument: {
    nazev: 'Contract for Work',
    podnadpis: 'under Art. 363 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR)',
    podpisy: { vlevo: 'customer', vpravo: 'contractor' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Customer:** {{b_name}}, {{b_adresse}} (the “Customer”)',
          '**Contractor:** {{u_name}}, {{u_adresse}} (the “Contractor”)',
        ],
      },
      {
        nadpis: 'Subject of the Contract',
        odstavce: [
          'The Contractor undertakes to produce the following work: {{leistung}}.',
          'Place of performance: {{ort}}.',
          {
            uvodVzor: 'Materials (please tick one):',
            moznosti: {
              unternehmer: 'The Contractor provides the necessary materials; they are included in the remuneration.',
              besteller: 'The Customer provides the necessary materials. The Contractor checks them before use and points out unsuitable materials without delay.',
            },
          },
        ],
      },
      {
        nadpis: 'Time of Performance',
        odstavce: [
          'The work begins on {{beginn}}. The work will be completed by {{fertig}} at the latest.',
          'The Customer provides access to the place of performance during normal working hours.',
        ],
      },
      {
        nadpis: 'Remuneration and Payment',
        odstavce: [
          {
            uvodVzor: 'Remuneration (please tick one):',
            moznosti: {
              pauschal:
                'The parties agree a fixed price of {{preis}} including value added tax. The Contractor cannot demand an increase, even if the work requires more effort (Art. 373 OR).',
              anschlag:
                'The remuneration is based on the approximate cost estimate of {{preis}} including value added tax. If it becomes apparent that the estimate will be exceeded, the Contractor informs the Customer immediately. If the estimate is exceeded disproportionately without any action by the Customer, the Customer may withdraw from the contract under Art. 375 OR.',
            },
          },
          {
            uvodVzor: 'Deposit (please tick one):',
            moznosti: {
              nein: 'The remuneration is due on delivery of the work (Art. 372 OR).',
              ja: 'On conclusion of the contract the Customer pays a deposit of {{anzahlung}}. The balance is due on delivery of the work.',
            },
          },
          'Payment within {{zahlungsziel}} days after delivery to the account IBAN {{iban}} or in cash against a receipt.',
          'The Contractor carries out additional work only after a written agreement on its scope and price.',
        ],
      },
      {
        nadpis: 'Acceptance and Defects',
        odstavce: [
          'After delivery the Customer inspects the work as soon as this is feasible in the normal course of business and reports defects immediately (Art. 367 OR). A report on acceptance is drawn up, listing the defects found and the deadlines for remedying them.',
          'If the Customer approves the work expressly or tacitly, the Contractor’s liability for recognisable defects ceases (Art. 370 OR).',
          'In all other respects Art. 368 et seq. OR apply. Claims for defects become time-barred under Art. 371 OR.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Amendments and additions to this contract must be made in writing. In all other respects the provisions of the OR apply.',
          'This contract is made in two copies; each party receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

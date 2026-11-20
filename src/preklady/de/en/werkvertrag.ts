/**
 * English version: contract for work (Germany). Original: src/obsah/de/werkvertrag.ts
 * and src/sablony/de/werkvertrag.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-WERKVERTRAG', verze: '1.0' },

  nazev: 'Contract for Work',
  nazevA: 'the contract for work',
  katalog: {
    popis: 'Tradespeople, renovation, repairs – price, deadline, acceptance.',
    slova: ['contract for work', 'tradesman', 'builder contract', 'renovation', 'repair', 'acceptance of work', 'fixed price', 'cost estimate', 'Werkvertrag', 'Handwerker', 'Abnahme'],
  },
  landing: {
    title: 'Contract for Work Germany {rok} – free PDF template',
    description:
      'Contract for work for Germany under Sections 631 et seq. BGB: work, deadline, fixed price or estimate, deposit, acceptance and defects. Free bilingual PDF or Word.',
    perex: 'For renovation, repairs or any job given to a tradesperson or self-employed person: what will be done, by when, at what price and how it will be accepted.',
    obsahPopis: 'Six sections of a contract for work (Werkvertrag) under Sections 631 et seq. of the German Civil Code (BGB).',
    obsah: [
      { nazev: 'Parties', popis: 'Customer and contractor.' },
      { nazev: 'Subject of the contract', popis: 'Work, place, materials.' },
      { nazev: 'Time of performance', popis: 'Start and completion.' },
      { nazev: 'Remuneration and payment', popis: 'Fixed price or cost estimate, deposit, payment term.' },
      { nazev: 'Acceptance and defects', popis: 'Acceptance report, reservation of known defects, limitation period.' },
      { nazev: 'Final provisions', popis: 'Changes in text form.' },
    ],
    kroky: [
      { nazev: 'Describe the work', popis: 'Scope, place, dates.' },
      { nazev: 'Agree the price', popis: 'Fixed or according to a cost estimate.' },
      { nazev: 'Sign', popis: 'Two copies.' },
    ],
    online: ['Price in words (in German) automatically', 'Dates in your calendar', 'Explanations for every field', 'Download as PDF and Word'],
    hodiSe: ['hiring a painter, tiler or carpenter', 'a repair or something made to measure', 'as a tradesperson, clear terms with customers'],
    nehodiSe: ['building a house or major conversion – have a consumer building contract (Verbraucherbauvertrag) drawn up by an expert', 'ongoing work for an employer', 'buying a finished item – use a purchase agreement'],
    po: [
      { nazev: 'Deposit', popis: 'Pay by transfer or get a receipt.' },
      { nazev: 'Changes in writing', popis: 'Additional work and prices in text form.' },
      { nazev: 'Acceptance', popis: 'Report with a reservation of defects.' },
    ],
    faq: [
      { q: 'When do I have to pay?', a: 'The remuneration generally becomes due upon acceptance of the work. A deposit can be agreed.' },
      { q: 'What does acceptance mean?', a: 'The customer approves the work as essentially in line with the contract. They may not refuse it because of insignificant defects. They must reserve known defects at acceptance (Section 640 BGB).' },
      { q: 'How long can I claim for defects?', a: 'Two years from acceptance, five years for buildings (Section 634a BGB).' },
      { q: 'Do you store my data?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'The template is based on Sections 631–641 and Section 634a of the German Civil Code (BGB).',
    souvisejiciPopis: 'More templates for jobs and payments.',
  },
  vytvorit: {
    title: 'Fill in a contract for work online – Germany, PDF',
    description: 'Create a contract for work for Germany with price, deposit and acceptance online. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 4 minutes',
  },

  pruvodce: {
    slovo: { n: 'contract', g: 'contract', a: 'contract', l: 'contract' },
    kroky: {
      parteien: { nazev: 'Customer and contractor', popis: 'The customer (Besteller) orders the work and pays. The contractor (Unternehmer, e.g. a tradesperson) produces it.' },
      werk: { nazev: 'Work' },
      preis: { nazev: 'Remuneration' },
    },
    pole: {
      b_name: { popis: 'Customer – name or company', placeholder: 'e.g. Max Mustermann' },
      b_adresse: { popis: 'Customer’s address', placeholder: 'e.g. Lindenstraße 5, 10115 Berlin' },
      u_name: { popis: 'Contractor – name or company', placeholder: 'e.g. Malerbetrieb Schmidt' },
      u_adresse: { popis: 'Contractor’s address', placeholder: 'e.g. Hauptstraße 1, 10117 Berlin' },
      leistung: {
        popis: 'Description of the work',
        napoveda: 'Scope, materials, dimensions. You can attach a quotation (Angebot) as an annex.',
        placeholder: 'e.g. Streichen von Wohnzimmer und Flur (ca. 60 m² Wandfläche), zweimal deckend weiß, inkl. Abkleben, laut Angebot vom 3. 11. 2026 (painting the living room and hall, approx. 60 m² of wall, two opaque coats of white, incl. masking, as per quotation of 3. 11. 2026)',
      },
      ort: { popis: 'Place of performance', placeholder: 'e.g. Lindenstraße 5, 10115 Berlin, 2. OG' },
      material: {
        popis: 'Who supplies the materials?',
        moznosti: { unternehmer: 'Contractor (included in the price)', besteller: 'Customer' },
      },
      beginn: { popis: 'Start' },
      fertig: { popis: 'Completion' },
      preisart: {
        popis: 'Type of remuneration',
        moznosti: { pauschal: 'Fixed price', anschlag: 'According to a cost estimate (non-binding)' },
      },
      preis: { popis: 'Remuneration (€, gross)', placeholder: 'e.g. 1800' },
      anzahlung_ja: {
        popis: 'Deposit',
        moznosti: { nein: 'None – payment after acceptance', ja: 'Deposit, balance after acceptance' },
      },
      anzahlung: { popis: 'Amount of the deposit (€)', placeholder: 'e.g. 500' },
      zahlungsziel: { popis: 'Payment term after acceptance (days)', placeholder: 'e.g. 14' },
      iban: { popis: 'Contractor’s IBAN (optional)' },
      misto: { popis: 'Place of signing', placeholder: 'e.g. Berlin' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [
      '',
      'The contractor owes a finished work free of defects – not just working time.',
      '',
      '',
      'At acceptance the work is inspected. Known defects must be reserved.',
      '',
    ],
    coDal: [
      'Print it twice; both sides sign both copies.',
      'Pay deposits by transfer or get a receipt (Quittung).',
      'Agree additional work and price changes in writing (an e-mail is enough).',
      'At acceptance, inspect the work and reserve known defects in the report – otherwise rights are lost.',
    ],
    kontrola: [
      'Describe the work as precisely as possible (scope, materials, dimensions; attach the quotation as an annex).',
      'The remuneration becomes due upon acceptance. Anyone who accepts work with a known defect must expressly reserve their rights ([Section 640(3) BGB](https://www.gesetze-im-internet.de/bgb/__640.html)).',
      'If, after completion, the contractor sets a deadline for acceptance and acceptance is not refused stating a defect, the work is deemed accepted – towards consumers only after a notice in text form (Section 640(2) BGB).',
      'Claims for defects become time-barred after 2 years, for buildings after 5 years from acceptance ([Section 634a BGB](https://www.gesetze-im-internet.de/bgb/__634a.html)).',
      'Special rules on (consumer) building contracts apply to building a house or substantial conversions – this template is not intended for that.',
      'Check the other party’s identity against their identity card (Personalausweis) and copy the name and address exactly.',
    ],
    pripominky: {
      'Beginn der Arbeiten': { nazev: 'Start of work' },
      'Fertigstellung und Abnahme': { nazev: 'Completion and acceptance', popis: 'Inspect the work and draw up an acceptance report listing all known defects.' },
    },
  },

  dokument: {
    nazev: 'Contract for Work',
    podnadpis: 'under Sections 631 et seq. of the German Civil Code (Bürgerliches Gesetzbuch, BGB)',
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
              unternehmer: 'The Contractor supplies the necessary materials; they are included in the remuneration.',
              besteller: 'The Customer supplies the necessary materials. The Contractor checks them before use and points out unsuitable materials without delay.',
            },
          },
        ],
      },
      {
        nadpis: 'Time of Performance',
        odstavce: [
          'The work begins on {{beginn}}. The work will be completed no later than {{fertig}}.',
          'The Customer provides access to the place of performance during normal working hours.',
        ],
      },
      {
        nadpis: 'Remuneration and Payment',
        odstavce: [
          {
            uvodVzor: 'Remuneration (please tick one):',
            moznosti: {
              pauschal: 'The parties agree a fixed price of {{preis}} including VAT.',
              anschlag: 'The remuneration is based on the cost estimate of {{preis}} including VAT. The cost estimate is non-binding. If a substantial overrun becomes apparent, the Contractor notifies the Customer without delay.',
            },
          },
          {
            uvodVzor: 'Deposit (please tick one):',
            moznosti: {
              nein: 'The remuneration is due upon acceptance of the work.',
              ja: 'On conclusion of the contract, the Customer pays a deposit of {{anzahlung}}. The balance is due upon acceptance of the work.',
            },
          },
          'Payment within {{zahlungsziel}} days after acceptance to the account IBAN {{iban}} or in cash against a receipt.',
          'The Contractor carries out additional work only after a written agreement on its scope and price.',
        ],
      },
      {
        nadpis: 'Acceptance and Defects',
        odstavce: [
          'After completion, the Customer accepts the work. A report is drawn up on the acceptance, recording any defects found and deadlines for remedying them. Acceptance may not be refused because of insignificant defects.',
          'If the Customer accepts the work despite knowing of a defect, they retain their rights in respect of defects only if they reserve them at acceptance.',
          'The statutory rights in respect of defects apply (Sections 634 et seq. BGB). The claims become time-barred under Section 634a BGB.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Changes and additions to this contract require text form. Otherwise, the provisions of the BGB apply.',
          'The contract is executed in two copies; each party receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: contract for work (Austria). Original: src/obsah/at/werkvertrag.ts
 * and src/sablony/at/werkvertrag.ts (based on src/sablony/de/werkvertrag.ts).
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-WERKVERTRAG', verze: '1.0' },

  nazev: 'Contract for Work',
  nazevA: 'the contract for work',
  katalog: {
    popis: 'Tradespeople, renovation, repairs – price, deadline, acceptance.',
    slova: ['contract for work', 'tradesman', 'renovation', 'repair', 'acceptance of work', 'fixed price', 'cost estimate', 'Werkvertrag', 'Kostenvoranschlag', 'Handwerker'],
  },
  landing: {
    title: 'Contract for Work Austria {rok} – free PDF template',
    description:
      'Contract for work under Sections 1165 et seq. ABGB: work, deadline, fixed price or cost estimate (§ 1170a), down payment and acceptance. Bilingual PDF or Word, free.',
    perex: 'For renovation, repairs or any job given to tradespeople or self-employed people: what will be done, by when, at what price and how it will be accepted.',
    obsahPopis: 'Six sections under Sections 1165 et seq. of the Austrian General Civil Code (ABGB).',
    obsah: [
      { nazev: 'Parties', popis: 'Customer and contractor.' },
      { nazev: 'Subject of the contract', popis: 'Work, place, materials.' },
      { nazev: 'Time of performance', popis: 'Start and completion.' },
      { nazev: 'Remuneration and payment', popis: 'Fixed price or cost estimate, down payment, payment term.' },
      { nazev: 'Acceptance and defects', popis: 'Acceptance report, reservation of known defects, limitation.' },
      { nazev: 'Final provisions', popis: 'Changes in text form.' },
    ],
    kroky: [
      { nazev: 'Describe the work', popis: 'Scope, place, dates.' },
      { nazev: 'Agree on the price', popis: 'Fixed or based on a cost estimate.' },
      { nazev: 'Sign', popis: 'Two copies.' },
    ],
    online: [
      'Price in words (in German) automatically',
      'Dates in your calendar',
      'Explanations for every field',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'hiring a painter, tiler or carpenter',
      'a repair or a custom-made item',
      'as a tradesperson, clear terms with customers',
    ],
    nehodiSe: [
      'building a house or a major conversion – have a consumer construction contract (Verbraucherbauvertrag) drawn up by an expert',
      'ongoing work for an employer',
      'buying a finished item – use a purchase agreement',
    ],
    po: [
      { nazev: 'Down payment', popis: 'Transfer it or get a receipt.' },
      { nazev: 'Changes in writing', popis: 'Additional work and prices in text form.' },
      { nazev: 'Acceptance', popis: 'Report with a reservation of defects.' },
    ],
    faq: [
      { q: 'What applies to a cost estimate (Kostenvoranschlag)?', a: 'If its accuracy is expressly guaranteed, the price may not increase. Without a guarantee, an unavoidable considerable overrun must be notified immediately; the customer can then withdraw (§ 1170a ABGB).' },
      { q: 'When do I have to pay?', a: 'As a rule, after the work has been completed. A down payment can be agreed.' },
      { q: 'Do you store my details?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'The template is based on Sections 1165 et seq. and § 1170a of the Austrian General Civil Code (ABGB).',
    souvisejiciPopis: 'More templates for jobs and payments.',
  },
  vytvorit: {
    title: 'Fill in a contract for work online – Austria, free PDF',
    description: 'Guide in English for a contract for work in Austria, with price, down payment and acceptance. Free as PDF or Word.',
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
      b_adresse: { popis: 'Customer’s address', placeholder: 'e.g. Mariahilfer Straße 10, 1060 Wien' },
      u_name: { popis: 'Contractor – name or company', placeholder: 'e.g. Malerbetrieb Schmidt' },
      u_adresse: { popis: 'Contractor’s address', placeholder: 'e.g. Hauptplatz 1, 1060 Wien' },
      leistung: {
        popis: 'Description of the work',
        napoveda: 'Scope, materials, dimensions. You can attach a quotation as an annex. Write it in German – the text goes into both language versions exactly as you write it.',
        placeholder: 'e.g. Streichen von Wohnzimmer und Flur (ca. 60 m² Wandfläche), zweimal deckend weiß, inkl. Abkleben, laut Angebot vom 3. 11. 2026 (painting the living room and hall, approx. 60 m² of wall, two coats of white, incl. masking, as per quotation of 3 Nov. 2026)',
      },
      ort: { popis: 'Place of performance', placeholder: 'e.g. Mariahilfer Straße 10, 1060 Wien, 2. OG' },
      material: { popis: 'Who provides the materials?', moznosti: { unternehmer: 'The contractor (included in the price)', besteller: 'The customer' } },
      beginn: { popis: 'Start' },
      fertig: { popis: 'Completion' },
      preisart: { popis: 'Type of remuneration', moznosti: { pauschal: 'Fixed price (lump sum)', anschlag: 'Based on a cost estimate (not guaranteed)' } },
      preis: { popis: 'Remuneration (€, gross)', placeholder: 'e.g. 1800' },
      anzahlung_ja: { popis: 'Down payment', moznosti: { nein: 'None – payment after acceptance', ja: 'Down payment, balance after acceptance' } },
      anzahlung: { popis: 'Amount of the down payment (€)', placeholder: 'e.g. 500' },
      zahlungsziel: { popis: 'Payment term after acceptance (days)', placeholder: 'e.g. 14' },
      iban: { popis: 'Contractor’s IBAN (optional)' },
      misto: { popis: 'Place of signing', placeholder: 'e.g. Wien' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [
      '',
      'The contractor owes a finished work free of defects – not just working time.',
      '',
      '',
      'At acceptance the work is checked. Known defects must be reserved.',
      '',
    ],
    coDal: [
      'Print twice; both sides sign both copies.',
      'Transfer down payments or get a receipt for them.',
      'Agree additional work and price changes in writing (an e-mail is enough).',
      'At acceptance, check the work and reserve known defects in the report – otherwise rights are lost.',
    ],
    kontrola: [
      'Describe the work as precisely as possible (scope, materials, dimensions; attach the quotation as an annex).',
      'Cost estimate with a guarantee (fixed price): no increase, even if the work becomes more expensive. Without a guarantee: a considerable overrun must be notified immediately, otherwise the contractor loses the additional amount; the customer can withdraw ([§ 1170a ABGB](https://www.ris.bka.gv.at/eli/jgs/1811/946/P1170a/NOR12018912)).',
      'As a rule, the remuneration is only due after the work has been completed.',
      'At acceptance, check the work and write defects into the report. The statutory warranty (Gewährleistung) applies.',
      'This template is not intended for building a house or major conversions – get expert advice.',
      'Check the other party’s identity against their identity card and copy the name and address exactly.',
    ],
    pripominky: {
      'Beginn der Arbeiten': { nazev: 'Start of work' },
      'Fertigstellung und Abnahme': { nazev: 'Completion and acceptance', popis: 'Check the work and draw up an acceptance report listing all known defects.' },
    },
  },

  dokument: {
    nazev: 'Contract for Work',
    podnadpis: 'under Sections 1165 et seq. of the Austrian General Civil Code (ABGB)',
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
              unternehmer: 'The necessary materials are provided by the Contractor; they are included in the remuneration.',
              besteller: 'The necessary materials are provided by the Customer. The Contractor checks them before use and points out unsuitable materials without delay.',
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
              pauschal: 'The parties agree on a fixed price of {{preis}} including VAT. It is deemed to be a cost estimate with an express guarantee of accuracy; any increase is excluded (§ 1170a(1) ABGB).',
              anschlag: 'The remuneration is based on the cost estimate of {{preis}} including VAT. The cost estimate is used without a guarantee of its accuracy. If a considerable overrun proves unavoidable, the Contractor notifies the Customer without delay; the Customer may then withdraw from the contract against reasonable remuneration for the work already performed (§ 1170a(2) ABGB).',
            },
          },
          {
            uvodVzor: 'Down payment (please tick one):',
            moznosti: {
              nein: 'The remuneration is due after completion and handover of the work.',
              ja: 'On conclusion of the contract, the Customer makes a down payment of {{anzahlung}}. The balance is due after completion and handover of the work.',
            },
          },
          'Payment within {{zahlungsziel}} days after acceptance to the account IBAN {{iban}} or in cash against a receipt.',
          'The Contractor carries out additional work only after a written agreement on its scope and price.',
        ],
      },
      {
        nadpis: 'Acceptance and Defects',
        odstavce: [
          'After completion, the Customer accepts the work. A report is drawn up on the acceptance, recording any defects found and the deadlines for remedying them. Minor defects that do not prevent use are recorded in the report and remedied.',
          'Known defects are reserved in the report at acceptance.',
          'The statutory warranty applies (Sections 922 et seq. ABGB).',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Amendments and additions to this contract must be made in text form. In all other respects, the provisions of the ABGB apply.',
          'This contract is executed in two counterparts; each party receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

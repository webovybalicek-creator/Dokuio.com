/**
 * English version: residential tenancy agreement for a flat (Germany). Original: src/obsah/de/mietvertrag-wohnung.ts
 * and src/sablony/de/mietvertrag-wohnung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-MIETVERTRAG', verze: '1.0' },

  nazev: 'Residential Tenancy Agreement',
  nazevA: 'the residential tenancy agreement',
  katalog: {
    popis: 'Open-ended tenancy agreement for a flat under the German Civil Code (BGB).',
    slova: ['tenancy agreement', 'rental agreement', 'lease', 'rent a flat', 'let a flat', 'apartment', 'deposit', 'service charges', 'landlord', 'tenant', 'Mietvertrag', 'Wohnung mieten', 'Kaution', 'Nebenkosten'],
  },
  landing: {
    title: 'Residential Tenancy Agreement Germany {rok} – free PDF template',
    description:
      'Tenancy agreement for a flat in Germany, explained in English: rent, service charges, deposit and notice periods. Bilingual PDF or Word, free.',
    perex: 'Letting your flat privately? An open-ended tenancy agreement (Mietvertrag) under Sections 535 et seq. of the German Civil Code (BGB) – without risky clauses on cosmetic repairs (Schönheitsreparaturen).',
    obsahPopis: 'Residential tenancy agreement under Sections 535 et seq. BGB.',
    obsah: [
      { nazev: 'Parties and flat', popis: 'Landlord, tenant, location, fittings.' },
      { nazev: 'Rent and service charges', popis: 'Net rent excluding heating and service charges (Nettokaltmiete), advance payments, due date.' },
      { nazev: 'Deposit', popis: 'At most three months’ net rent, held separately.' },
      { nazev: 'Termination', popis: 'Notice periods and an optional waiver of termination (Kündigungsverzicht).' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'A few questions, everything explained.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up.' },
      { nazev: 'Sign', popis: 'Each party receives one copy.' },
    ],
    online: ['Amounts in words (in German) added automatically', 'Reminders for your calendar', 'Download as PDF and Word'],
    hodiSe: ['you are letting a flat privately', 'an open-ended tenancy'],
    nehodiSe: ['a furnished flat for temporary use', 'commercial premises', 'a fixed-term agreement – only with a statutory reason (Section 575 BGB)'],
    poNadpis: 'Afterwards.',
    po: [
      { nazev: 'Handover report', popis: 'Meter readings, defects and keys in a handover report (Übergabeprotokoll).' },
      { nazev: 'Landlord’s confirmation', popis: 'The landlord’s confirmation of residence (Wohnungsgeberbestätigung) within two weeks of moving in.' },
      { nazev: 'Deposit', popis: 'Into a deposit account.' },
    ],
    faq: [
      { q: 'How high may the deposit be?', a: 'At most three months’ rent excluding service charges. The tenant may pay it in three monthly instalments (Section 551 BGB).' },
      { q: 'What notice period applies to tenants?', a: 'Three months, regardless of how long the tenancy has lasted (Section 573c BGB).' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony:
      'The template is based on Sections 535 et seq. of the German Civil Code (BGB), the Service Charges Ordinance (Betriebskostenverordnung) and Section 19 of the Federal Registration Act (Bundesmeldegesetz).',
    souvisejiciPopis: 'More documents about housing, also free.',
  },
  vytvorit: {
    title: 'Fill in a tenancy agreement for a flat online – Germany, PDF',
    description: 'Guide in English for a residential tenancy agreement in Germany under the BGB. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 5 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      parteien: { nazev: 'Landlord and tenant' },
      wohnung: { nazev: 'Flat' },
      zahlung: { nazev: 'Start of tenancy, rent and deposit' },
    },
    pole: {
      v_name: { popis: 'Landlord – name', napoveda: 'Owner of the flat.', placeholder: 'e.g. Thomas Müller' },
      v_adresse: { popis: 'Landlord’s address', napoveda: 'For correspondence.', placeholder: 'e.g. Hauptstraße 12, 10115 Berlin' },
      m_name: { popis: 'Tenant – name', napoveda: 'If there are several tenants, list them all.', placeholder: 'e.g. Anna Schmidt' },
      m_geburt: { popis: 'Tenant’s date of birth', napoveda: 'As in the identity document.' },
      m_adresse: { popis: 'Tenant’s previous address', napoveda: 'Before moving in.', placeholder: 'e.g. Gartenweg 5, 80331 München' },
      objekt: { popis: 'Address of the flat', napoveda: 'Street, house number, postcode, town.', placeholder: 'e.g. Lindenstraße 7, 10969 Berlin' },
      lage: { popis: 'Location in the building', napoveda: 'Floor and position.', placeholder: 'e.g. 2. OG links (2nd floor, left)' },
      zimmer: { popis: 'Rooms', napoveda: 'Excluding kitchen and bathroom.', placeholder: 'e.g. 2' },
      flaeche: { popis: 'Living area', napoveda: 'Approximate figure.', placeholder: 'e.g. 58' },
      nebenraeume: { popis: 'Also let (optional)', napoveda: 'Cellar, parking space, balcony.', placeholder: 'e.g. Kellerabteil Nr. 3 (cellar compartment no. 3)' },
      ausstattung: { popis: 'Fittings (optional)', napoveda: 'Fitted kitchen, appliances. Details in the handover report.', placeholder: 'e.g. Einbauküche mit Kühlschrank, Herd und Spülmaschine (fitted kitchen with fridge, cooker and dishwasher)' },
      beginn: { popis: 'Start of tenancy', napoveda: 'From when the rent is payable.' },
      uebergabe: { popis: 'Handover of the flat', napoveda: 'Handover of the keys.' },
      miete: { popis: 'Net rent (€ per month)', napoveda: 'Rent excluding service charges.', placeholder: 'e.g. 950' },
      nebenkosten: { popis: 'Advance payment for service charges (€)', napoveda: 'Monthly, settled annually.', placeholder: 'e.g. 180' },
      heizkosten: { popis: 'Advance payment for heating costs (€)', napoveda: 'Monthly, settled according to consumption.', placeholder: 'e.g. 90' },
      faellig: { popis: 'Due by (working day)', napoveda: 'By law, no later than the 3rd working day of the month, in advance.', placeholder: 'e.g. 3' },
      iban: { popis: 'Landlord’s IBAN', napoveda: 'For rent payments.', placeholder: 'DE00 0000 0000 0000 0000 00' },
      kaution: { popis: 'Deposit (€)', napoveda: 'At most three months’ net rent.', placeholder: 'e.g. 2850' },
      verzicht: {
        popis: 'Waiver of termination',
        napoveda: 'Both parties waive ordinary termination for a certain period.',
        moznosti: { nein: 'No waiver of termination', ja: 'Mutual waiver for a certain period' },
      },
      verzicht_jahre: { popis: 'Waiver for (years)', napoveda: 'At most four years.', placeholder: 'e.g. 1' },
      tiere: {
        popis: 'Pets',
        napoveda: 'Small animals are always allowed; for dogs and cats the agreement applies.',
        moznosti: { erlaubt: 'Allowed', zustimmung: 'With the landlord’s consent' },
      },
      ort: { popis: 'Place', napoveda: 'Place of signing.', placeholder: 'e.g. Berlin' },
      datum: { popis: 'Date', napoveda: 'Today’s date pre-filled.' },
    },
    vysvetleni: ['', '', '', '', '', '', '', ''],
    coDal: [
      'Print two copies; both parties sign both.',
      'At handover, draw up a handover report (Übergabeprotokoll) with meter readings and photos.',
      'Landlord: within two weeks of the tenant moving in, issue the landlord’s confirmation of residence (Wohnungsgeberbestätigung) for the citizens’ office (Bürgeramt) (Section 19 BMG).',
      'Landlord: invest the deposit separately from your own assets in a deposit account.',
    ],
    kontrola: [
      'Check the identity of the other party using their identity card (Personalausweis) and copy the name and address exactly.',
      'The deposit may be at most three months’ rent excluding service charges. The tenant may pay it in three monthly instalments, the first at the start of the tenancy (Section 551 BGB).',
      'The tenant only has to pay service charges (Nebenkosten) if they have been agreed – and only costs under the Service Charges Ordinance (Betriebskostenverordnung). Advance payments are settled annually, no later than twelve months after the end of the accounting period.',
      'Check the rent cap (Mietpreisbremse): in many cities, the rent for a new letting may be at most 10% above the local comparative rent (ortsübliche Vergleichsmiete).',
      'Fixed-term tenancy agreements are only permitted with a statutory reason (Section 575 BGB). This template is therefore open-ended; a mutual waiver of termination of up to four years is common.',
      'Clauses on cosmetic repairs (Schönheitsreparaturen) and minor repairs (Kleinreparaturen) are often invalid – the template deliberately leaves them out.',
    ],
    pripominky: {
      'Wohnungsübergabe mit Protokoll': { nazev: 'Handover of the flat with a handover report' },
      'Miete und Nebenkosten': { nazev: 'Rent and service charges', popis: 'First 12 months.' },
    },
  },

  dokument: {
    nazev: 'Residential Tenancy Agreement',
    podnadpis: 'under Sections 535 et seq. of the German Civil Code (Bürgerliches Gesetzbuch, BGB)',
    podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: ['**Landlord:** {{v_name}}, residing at {{v_adresse}}', '**Tenant:** {{m_name}}, born {{m_geburt}}, previously residing at {{m_adresse}}'],
      },
      {
        nadpis: 'Rented Property',
        odstavce: [
          'The flat {{lage}} in the building {{objekt}} with {{zimmer}} rooms and a living area of approx. {{flaeche}} is let for residential purposes.',
          'Also let: {{nebenraeume}}. Fittings: {{ausstattung}}. The condition at handover is recorded in a handover report.',
        ],
      },
      {
        nadpis: 'Term of the Tenancy',
        odstavce: [
          'The tenancy begins on {{beginn}} and runs for an indefinite period. The flat is handed over on {{uebergabe}}.',
          {
            uvodVzor: 'Waiver of termination (please tick):',
            moznosti: {
              nein: 'No waiver of termination is agreed.',
              ja: 'Both parties mutually waive their right to ordinary termination for a period of {{verzicht_jahre}} years from conclusion of the agreement. Termination is permitted at the earliest as of the end of this period. The right to extraordinary termination remains unaffected.',
            },
          },
        ],
      },
      {
        nadpis: 'Rent and Service Charges',
        odstavce: [
          'The monthly net rent excluding heating and service charges is {{miete}}.',
          'In addition, the Tenant pays monthly advance payments towards the service charges within the meaning of the Service Charges Ordinance (Betriebskostenverordnung) of {{nebenkosten}} and towards heating and hot water costs of {{heizkosten}}. The Landlord settles the accounts annually.',
          'Rent and advance payments are payable monthly in advance, no later than working day No. {{faellig}} of each month, to the account IBAN {{iban}}.',
        ],
      },
      {
        nadpis: 'Deposit',
        odstavce: [
          'The Tenant provides a rent deposit of {{kaution}}. The Tenant is entitled to pay it in three equal monthly instalments; the first is due at the start of the tenancy.',
          'The Landlord invests the deposit separately from their own assets with a credit institution at the interest rate customary for savings deposits with three months’ notice. The income belongs to the Tenant (Section 551 BGB).',
        ],
      },
      {
        nadpis: 'Use of the Flat',
        odstavce: [
          'The Tenant treats the flat with care and reports defects without delay. Structural alterations require the Landlord’s prior consent.',
          'Subletting or otherwise allowing third parties to use the flat requires the Landlord’s permission (Section 540 BGB); any claim under Section 553 BGB remains unaffected.',
          {
            uvodVzor: 'Pets (please tick):',
            moznosti: {
              erlaubt: 'Keeping customary pets is permitted, provided that other residents are not disturbed and the flat is not damaged.',
              zustimmung: 'Keeping dogs and cats requires the Landlord’s consent, which may only be refused for good cause. Small animals are permitted.',
            },
          },
        ],
      },
      {
        nadpis: 'Termination and Return',
        odstavce: [
          'Notice of termination must be given in writing. The Tenant may terminate with three months’ notice; the notice must be received no later than the third working day of a month to take effect at the end of the month after next (Section 573c BGB). For the Landlord, the statutory grounds for termination and notice periods apply.',
          'When the tenancy ends, the Tenant returns the flat vacated and with all keys. A report is drawn up on the return.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'In all other respects, the statutory provisions apply, in particular Sections 535 et seq. BGB.',
          'Amendments and additions require text form. The agreement is executed in two counterparts; each party receives one.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

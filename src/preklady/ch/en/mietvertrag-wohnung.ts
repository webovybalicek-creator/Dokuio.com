/**
 * English version: residential tenancy agreement (Switzerland).
 * Original: src/obsah/ch/mietvertrag-wohnung.ts and src/sablony/ch/mietvertrag-wohnung.ts.
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-MIETVERTRAG', verze: '1.0' },

  nazev: 'Residential Tenancy Agreement',
  nazevA: 'the residential tenancy agreement',
  katalog: {
    popis: 'Tenancy agreement for residential premises under the Swiss Code of Obligations (OR).',
    slova: ['tenancy agreement', 'rental agreement', 'lease', 'rent a flat', 'let a flat', 'rent deposit', 'service charges', 'Mietvertrag', 'Mietkaution', 'Nebenkosten', 'Switzerland'],
  },
  landing: {
    title: 'Residential Tenancy Agreement Switzerland {rok} – free PDF template',
    description:
      'Tenancy agreement for a flat in Switzerland under Art. 253 et seq. OR: net rent, service charges, deposit in a blocked account. Bilingual PDF or Word, free.',
    perex: 'Letting a flat in Switzerland? A tenancy agreement under the Code of Obligations – with itemised service charges and the deposit in a blocked account.',
    obsahPopis: 'Tenancy agreement (Mietvertrag) for residential premises under Art. 253 et seq. of the Swiss Code of Obligations (OR).',
    obsah: [
      { nazev: 'Parties and flat', popis: 'Landlord, tenant, location, fittings.' },
      { nazev: 'Rent and service charges', popis: 'Advance payments (Akonto) only for the listed costs.' },
      { nazev: 'Security', popis: 'At most three months’ rent, blocked account.' },
      { nazev: 'Termination', popis: 'Three months to local termination dates.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'A few questions, all explained in English.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up. The agreement is bilingual: German original and English translation.' },
      { nazev: 'Sign', popis: 'Each party receives one copy.' },
    ],
    online: ['Amounts in words added automatically', 'Calendar reminders', 'Download as PDF and Word'],
    hodiSe: ['you are privately letting a flat in Switzerland'],
    nehodiSe: [
      'cantons where an official form is required for the initial rent – use the official form as well',
      'commercial premises',
    ],
    poNadpis: 'Afterwards.',
    po: [
      { nazev: 'Handover report', popis: 'Condition at handover.' },
      { nazev: 'Deposit', popis: 'Into a rent deposit account (Mietkautionskonto).' },
      { nazev: 'Registration', popis: 'With the residents’ registration office (Einwohnerkontrolle) within 14 days.' },
    ],
    faq: [
      { q: 'How high may the rent deposit be?', a: 'At most three months’ rent; it must be paid into an account in the tenant’s name (Art. 257e OR).' },
      { q: 'Which service charges may the landlord demand?', a: 'Only those individually listed in the contract (Art. 257a OR).' },
      { q: 'Do you store my data?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 253 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR).',
    souvisejiciPopis: 'More documents on housing, also free.',
  },
  vytvorit: {
    title: 'Residential Tenancy Agreement – Switzerland, fill in online',
    description: 'Create a residential tenancy agreement under the Swiss Code of Obligations (OR) online, explained in English. Bilingual PDF or Word, free.',
    podnadpis: 'Free · result as PDF and Word · takes about 5 minutes',
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
      v_adresse: { popis: 'Landlord’s address', napoveda: 'For correspondence.', placeholder: 'e.g. Bahnhofstrasse 12, 8001 Zürich' },
      m_name: { popis: 'Tenant – name', napoveda: 'If there are several tenants, list all of them.', placeholder: 'e.g. Anna Schmidt' },
      m_geburt: { popis: 'Tenant’s date of birth', napoveda: 'As in the identity document.' },
      m_adresse: { popis: 'Tenant’s previous address', napoveda: 'Before moving in.', placeholder: 'e.g. Gartenweg 5, 3007 Bern' },
      objekt: { popis: 'Address of the flat', napoveda: 'Street, house number, postcode, town.', placeholder: 'e.g. Lindenstrasse 7, 8004 Zürich' },
      lage: { popis: 'Location in the building', napoveda: 'Floor and position.', placeholder: 'e.g. 2. OG links (2nd floor left)' },
      zimmer: { popis: 'Rooms', napoveda: 'Excluding kitchen and bathroom.', placeholder: 'e.g. 2' },
      flaeche: { popis: 'Living area', napoveda: 'Approximate figure.', placeholder: 'e.g. 58' },
      nebenraeume: { popis: 'Also let (optional)', napoveda: 'Cellar, parking space, balcony.', placeholder: 'e.g. Kellerabteil Nr. 3 (cellar compartment No. 3)' },
      ausstattung: { popis: 'Fittings (optional)', napoveda: 'Fitted kitchen, appliances. Details in the handover report.', placeholder: 'e.g. Einbauküche mit Kühlschrank, Herd und Spülmaschine (fitted kitchen with fridge, cooker and dishwasher)' },
      beginn: { popis: 'Start of tenancy', napoveda: 'From when the tenancy runs.' },
      uebergabe: { popis: 'Handover of the flat', napoveda: 'Handover of the keys.' },
      miete: { popis: 'Net rent (CHF per month)', napoveda: 'Rent without service charges.', placeholder: 'e.g. 950' },
      nebenkosten: { popis: 'Service charges advance (CHF per month)', napoveda: 'Only for service charges listed in the contract.', placeholder: 'e.g. 180' },
      nk_liste: { popis: 'Which service charges', napoveda: 'List them individually, otherwise they are included in the rent.', placeholder: 'e.g. Heizung, Warmwasser, Treppenhausreinigung, Hauswart (heating, hot water, stairwell cleaning, caretaker)' },
      faellig: { popis: 'Due by (day of the month)', napoveda: 'Customary: in advance by the last day of the previous month or by the 1st of the month.', placeholder: 'e.g. 1' },
      termine: { popis: 'Termination dates', napoveda: 'Dates customary in the locality, e.g. end of every month except December.', placeholder: 'e.g. Ende jedes Monats ausser Dezember (end of every month except December)' },
      iban: { popis: 'Landlord’s IBAN', napoveda: 'For paying the rent.', placeholder: 'CH00 0000 0000 0000 0000 0' },
      kaution: { popis: 'Deposit (CHF)', napoveda: 'At most three months’ rent.', placeholder: 'e.g. 2850' },
      tiere: {
        popis: 'Pets',
        napoveda: 'Small animals are always allowed; for dogs and cats, the agreement applies.',
        moznosti: { erlaubt: 'Allowed', zustimmung: 'With the landlord’s consent' },
      },
      ort: { popis: 'Place', napoveda: 'Place of signing.', placeholder: 'e.g. Zürich' },
      datum: { popis: 'Date', napoveda: 'Today’s date is pre-filled.' },
    },
    vysvetleni: ['', '', '', '', '', '', '', ''],
    coDal: [
      'Print two copies; both parties sign both.',
      'At handover, draw up a handover report (Übergabeprotokoll) – defects not recorded in the report can still be reported in writing by the tenant in the first few days.',
      'Pay the deposit into a rent deposit account (Mietkautionskonto, blocked account) in the tenant’s name.',
      'Tenant: register with the municipality’s residents’ registration office (Einwohnerkontrolle) within 14 days.',
    ],
    kontrola: [
      'Check the other party’s identity using their passport or identity card (Identitätskarte) and copy the name and address exactly.',
      'The deposit may be at most three months’ rent and must be paid into a blocked account in the tenant’s name (Art. 257e OR).',
      'The tenant only has to pay service charges (Nebenkosten) if they are individually listed in the contract (Art. 257a OR). Everything else is included in the rent.',
      'In some cantons the initial rent must be notified on the official form (Art. 270 para. 2 OR) – ask the cantonal conciliation authority (Schlichtungsbehörde).',
      'Notice period for flats: at least three months to a termination date customary in the locality (Art. 266c OR). The landlord must give notice using the official form.',
      'Anyone wishing to move out without observing the notice period can propose a reasonable replacement tenant (Nachmieter, Art. 264 OR).',
    ],
    pripominky: {
      'Wohnungsübergabe mit Protokoll': { nazev: 'Handover of the flat with report' },
      'Miete und Nebenkosten': { nazev: 'Rent and service charges', popis: 'First 12 months.' },
    },
  },

  dokument: {
    nazev: 'Tenancy Agreement for Residential Premises',
    podnadpis: 'under Art. 253 et seq. of the Swiss Code of Obligations (OR)',
    podpisy: { vlevo: 'Landlord', vpravo: 'Tenant' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Landlord:** {{v_name}}, residing at {{v_adresse}}',
          '**Tenant:** {{m_name}}, born {{m_geburt}}, previously residing at {{m_adresse}}',
        ],
      },
      {
        nadpis: 'Rented Property',
        odstavce: [
          'The flat {{lage}} in the building {{objekt}}, with {{zimmer}} rooms and a living area of approx. {{flaeche}}, is let for residential purposes.',
          'Also let: {{nebenraeume}}. Fittings: {{ausstattung}}. The condition at handover is recorded in a handover report.',
        ],
      },
      {
        nadpis: 'Term of the Tenancy',
        odstavce: ['The tenancy begins on {{beginn}} and runs for an indefinite period. The flat will be handed over on {{uebergabe}}.'],
      },
      {
        nadpis: 'Rent and Service Charges',
        odstavce: [
          'The monthly net rent is {{miete}}.',
          'In addition, the Tenant pays a monthly advance of {{nebenkosten}} for the following service charges: {{nk_liste}}. The Landlord issues an annual statement. Service charges not listed are included in the rent (Art. 257a OR).',
          'Rent and advance payments are payable monthly in advance by day {{faellig}} of the month to the account IBAN {{iban}}.',
        ],
      },
      {
        nadpis: 'Security Deposit',
        odstavce: [
          'The Tenant provides security of {{kaution}}.',
          'The security is deposited with a bank in a savings account or deposit in the Tenant’s name (Art. 257e OR). The bank may release it only with the consent of both parties or on the basis of a final and binding decision.',
        ],
      },
      {
        nadpis: 'Use of the Flat',
        odstavce: [
          'The Tenant uses the flat with care and reports defects without delay. Renovations and alterations require the Landlord’s written consent.',
          'The Tenant remedies minor defects that can be eliminated by ordinary maintenance at their own expense (Art. 259 OR).',
          'Subletting requires the Landlord’s consent, which the Landlord may refuse only on the grounds set out in Art. 262 OR.',
          {
            uvodVzor: 'Pets (please tick):',
            moznosti: {
              erlaubt: 'Keeping customary pets is permitted, provided other residents are not disturbed and the flat is not damaged.',
              zustimmung: 'Keeping dogs and cats requires the Landlord’s consent. Small animals are allowed.',
            },
          },
        ],
      },
      {
        nadpis: 'Termination and Return',
        odstavce: [
          'Either party may terminate the agreement by giving three months’ notice to the following dates: {{termine}} (Art. 266c OR). Notice must be given in writing; the Landlord gives notice using the officially approved form (Art. 266l OR).',
          'At the end of the tenancy, the Tenant returns the flat cleaned and with all keys. The Tenant is not liable for wear and tear resulting from use in accordance with the contract.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'In all other respects, the provisions of the Code of Obligations apply (Art. 253 et seq. OR).',
          'Amendments must be made in writing. The agreement is executed in two counterparts; each party receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

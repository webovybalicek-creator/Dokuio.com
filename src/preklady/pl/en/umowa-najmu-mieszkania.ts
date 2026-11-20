/**
 * English version: flat tenancy agreement (Poland). Original: src/obsah/pl/umowa-najmu-mieszkania.ts
 * and src/sablony/pl/umowa-najmu-mieszkania.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-NAJEM-MIESZKANIE', verze: '1.0' },

  nazev: 'Flat Tenancy Agreement',
  nazevA: 'the flat tenancy agreement',
  katalog: {
    popis: 'Standard tenancy of a flat with a deposit and a handover report.',
    slova: ['tenancy agreement', 'rental agreement', 'lease', 'rent a flat', 'let a flat', 'apartment rental', 'rent', 'deposit', 'tenant', 'landlord', 'umowa najmu', 'najem mieszkania', 'kaucja'],
  },
  landing: {
    title: 'Flat Tenancy Agreement Poland {rok} – free PDF template',
    description:
      'Flat tenancy agreement for Poland, explained in English: rent, service charges, deposit and notice of termination. Download a bilingual PDF or Word for free.',
    perex: 'Letting a flat or renting one from someone? A standard tenancy agreement (umowa najmu) with rent, charges, a deposit and clear rules on termination.',
    obsahPopis: 'Tenancy agreement for residential premises (Article 659 et seq. of the Civil Code – Kodeks cywilny).',
    obsah: [
      { nazev: 'Parties and premises', popis: 'Landlord, tenant, address, furnishings.' },
      { nazev: 'Term of the tenancy', popis: 'Fixed or indefinite term, handover of the premises.' },
      { nazev: 'Rent and deposit', popis: 'Charges, payment date, return of the deposit.' },
      { nazev: 'Notice of termination', popis: 'Rules for ending the tenancy.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Parties, premises, rent.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up. The agreement is bilingual: Polish original and English translation.' },
      { nazev: 'Sign and hand over the flat', popis: 'With a handover report (protokół zdawczo-odbiorczy).' },
    ],
    online: ['Amounts in words (in Polish) added automatically', 'Payment reminders', 'The handover report is filled in from the agreement', 'Download as PDF and Word'],
    hodiSe: ['you are letting a flat as a private individual', 'a tenancy for a fixed or indefinite term'],
    nehodiSe: ['an occasional tenancy (najem okazjonalny) with a declaration before a notary', 'an institutional tenancy (najem instytucjonalny)', 'commercial premises and offices'],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Handover report', popis: 'Meter readings, faults, keys.' },
      { nazev: 'Deposit', popis: 'By bank transfer or against a receipt.' },
      { nazev: 'Tax', popis: 'The landlord declares the rental income.' },
    ],
    faq: [
      { q: 'How much can the deposit (kaucja) be?', a: 'At most 12 times the monthly rent (Article 6 of the Act on the Protection of Tenants’ Rights – ustawa o ochronie praw lokatorów). It is returned within one month of the premises being vacated.' },
      { q: 'What is the notice period?', a: 'For an agreement for an indefinite term with rent payable monthly – three months in advance, to the end of a calendar month (Article 688 of the Civil Code).' },
      { q: 'Can a fixed-term agreement be terminated?', a: 'Only in the cases specified in the agreement (Article 673 § 3 of the Civil Code). That is why the template lets you write them in.' },
      { q: 'Do you store my details?', a: 'No. The agreement is created only in your browser.' },
    ],
    zakony: 'The template is based on Articles 659–692 of the Polish Civil Code (Kodeks cywilny) and the Act of 21 June 2001 on the Protection of Tenants’ Rights (ustawa o ochronie praw lokatorów).',
    souvisejiciPopis: 'Other housing documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a flat tenancy agreement online – Poland, PDF',
    description: 'Guide in English for a flat tenancy agreement under Polish law. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 5 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strony: { nazev: 'Landlord and tenant' },
      lokal: { nazev: 'Flat' },
      czas: { nazev: 'Term of the tenancy' },
      platnosci: { nazev: 'Rent and deposit' },
    },
    pole: {
      w_imie: { popis: 'Landlord – first name and surname', napoveda: 'The owner of the flat. All co-owners sign.', placeholder: 'e.g. Jan Kowalski' },
      w_pesel: { popis: 'Landlord’s PESEL', napoveda: 'PESEL is the Polish personal identification number, shown in the identity card (dowód osobisty).', placeholder: 'e.g. 80010112345' },
      w_adres: { popis: 'Landlord’s address', napoveda: 'Address for correspondence.', placeholder: 'e.g. ul. Długa 12, 00-001 Warszawa' },
      n_imie: { popis: 'Tenant – first name and surname', napoveda: 'Who will live in the flat and pay the rent.', placeholder: 'e.g. Anna Nowak' },
      n_pesel: { popis: 'Tenant’s PESEL', napoveda: 'From the identity card.', placeholder: 'e.g. 95020254321' },
      n_adres: { popis: 'Tenant’s current address', napoveda: 'The address before moving in.', placeholder: 'e.g. ul. Krótka 5, 30-001 Kraków' },
      adres_lokalu: { popis: 'Address of the flat', napoveda: 'Street, building and flat number, postcode, town.', placeholder: 'e.g. ul. Polna 7/12, 00-002 Warszawa' },
      kw: { popis: 'Land and mortgage register number (księga wieczysta, optional)', napoveda: 'If the premises have a land and mortgage register entry.', placeholder: 'e.g. WA1M/00012345/6' },
      pokoje: { popis: 'Number of rooms', napoveda: 'Excluding kitchen and bathroom.', placeholder: 'e.g. 2' },
      powierzchnia: { popis: 'Floor area', napoveda: 'Usable floor area.', placeholder: 'e.g. 48' },
      wyposazenie: { popis: 'Furnishings (optional)', napoveda: 'Appliances and furniture. You will enter the details in the handover report. Write it in Polish.', placeholder: 'e.g. lodówka, pralka, kuchenka, szafa w przedpokoju (fridge, washing machine, cooker, hall wardrobe)' },
      doba: {
        popis: 'For how long',
        napoveda: 'A fixed-term agreement ends when the term expires.',
        moznosti: { oznaczony: 'For a fixed term', nieoznaczony: 'For an indefinite term' },
      },
      od: { popis: 'Start of the tenancy', napoveda: 'From when the tenant uses the premises and pays rent.' },
      do: { popis: 'End of the tenancy', napoveda: 'Usually after one year.' },
      wydanie: { popis: 'Handover of the flat', napoveda: 'When the tenant gets the keys.' },
      osoby: { popis: 'Number of persons', napoveda: 'How many persons will live there together with the tenant.', placeholder: 'e.g. 2' },
      czynsz: { popis: 'Monthly rent (zł)', napoveda: 'The amount for the landlord, excluding additional charges.', placeholder: 'e.g. 3000' },
      oplaty: { popis: 'Service charges (zł per month)', napoveda: 'Building administration fee, water, heating, waste collection – paid in advance.', placeholder: 'e.g. 600' },
      media: {
        popis: 'Electricity and gas',
        napoveda: 'Usually the tenant pays according to the meters.',
        moznosti: { liczniki: 'The tenant pays according to the meters', oplaty: 'Included in the charges above' },
      },
      splatnost: { popis: 'Payment date (day of the month)', napoveda: 'The day by which the given month is paid in advance.', placeholder: 'e.g. 10' },
      konto: { popis: 'Landlord’s bank account number', napoveda: 'Which account to pay into.', placeholder: 'PL00 0000 0000 0000 0000 0000 0000' },
      kaucja: { popis: 'Deposit (zł)', napoveda: 'At most 12 times the rent; usually 1–2 months’ rent.', placeholder: 'e.g. 3000' },
      wypowiedzenie_oznaczony: {
        popis: 'Early termination of a fixed-term agreement',
        napoveda: 'Without a clause in the agreement, a fixed-term agreement cannot be terminated by notice.',
        moznosti: { tak: 'Either party with 3 months’ notice for important reasons', nie: 'No possibility of termination' },
      },
      miejsce: { popis: 'Place of signing', napoveda: 'Town.', placeholder: 'e.g. Warszawa' },
      data_podpisu: { popis: 'Date of signing', napoveda: 'We have filled in today’s date.' },
    },
    vysvetleni: ['', '', '', '', '', '', '', ''],
    coDal: [
      'Print the agreement in two counterparts – both parties sign both.',
      'When handing over the flat, draw up a handover report (protokół zdawczo-odbiorczy) with meter readings and photos.',
      'Pay the deposit by bank transfer or against a receipt.',
      'Landlord: income from private letting is declared to the tax office (urząd skarbowy) (usually at the flat rate – ryczałt).',
    ],
    kontrola: [
      'Check in the land and mortgage register (księga wieczysta, ekw.ms.gov.pl) that the landlord owns the flat.',
      'Check the other party’s identity against their identity card (dowód osobisty) and copy their name exactly as it appears in the card.',
      'The deposit may not exceed 12 times the monthly rent (Article 6 of the Act on the Protection of Tenants’ Rights – ustawa o ochronie praw lokatorów). It is returned within one month of the premises being vacated, after deducting amounts owed.',
      'An agreement for more than one year must be in writing – otherwise it is deemed concluded for an indefinite term (Article 660 of the Civil Code).',
      'A fixed-term agreement can only be terminated in the cases stated in the agreement (Article 673 § 3 of the Civil Code) – which is why we write them in explicitly.',
      'This is a standard tenancy agreement. An occasional tenancy (najem okazjonalny, with the tenant’s declaration before a notary) requires a different template.',
    ],
    pripominky: {
      'Wydanie mieszkania i protokół': { nazev: 'Handover of the flat and handover report' },
      'Czynsz i opłaty': { nazev: 'Rent and charges', popis: 'First 12 months.' },
      'Koniec najmu': { nazev: 'End of the tenancy' },
    },
  },

  dokument: {
    nazev: 'Tenancy Agreement for Residential Premises',
    podnadpis: 'concluded under Article 659 et seq. of the Civil Code (Kodeks cywilny) and the Act on the Protection of Tenants’ Rights (ustawa o ochronie praw lokatorów)',
    podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Landlord:** {{w_imie}}, PESEL {{w_pesel}}, residing at {{w_adres}}',
          '**Tenant:** {{n_imie}}, PESEL {{n_pesel}}, until now residing at {{n_adres}}',
        ],
      },
      {
        nadpis: 'Subject of the Tenancy',
        odstavce: [
          'The Landlord declares that they are the owner of the residential premises located at {{adres_lokalu}}, for which the land and mortgage register (księga wieczysta) {{kw}} is kept, consisting of {{pokoje}} rooms, with a floor area of {{powierzchnia}}.',
          'Furnishings of the premises: {{wyposazenie}}. The detailed condition of the premises and furnishings is set out in the handover report.',
          'The Landlord lets the premises to the Tenant for residential use. Number of persons who will live in the premises: {{osoby}}.',
        ],
      },
      {
        nadpis: 'Term of the Tenancy',
        odstavce: [
          {
            uvodVzor: 'Term of the tenancy (tick):',
            moznosti: {
              oznaczony: 'The agreement is concluded for a fixed term from {{od}} to {{do}}.',
              nieoznaczony: 'The agreement is concluded for an indefinite term from {{od}}.',
            },
          },
          'The Landlord shall hand over the premises to the Tenant on {{wydanie}}. The parties shall draw up a handover report with the meter readings.',
        ],
      },
      {
        nadpis: 'Rent and Charges',
        odstavce: [
          'The Tenant shall pay rent of {{czynsz}} per month and service charges of {{oplaty}} per month, settled according to actual costs.',
          {
            uvodVzor: 'Electricity and gas (tick):',
            moznosti: {
              liczniki: 'The Tenant bears the charges for electricity and gas according to the meter readings.',
              oplaty: 'The charges for electricity and gas are included in the service charges.',
            },
          },
          'Rent and charges are payable in advance by day {{splatnost}} of each month to the Landlord’s account No. {{konto}}.',
        ],
      },
      {
        nadpis: 'Deposit',
        odstavce: [
          'The Tenant shall pay a deposit (kaucja) of {{kaucja}} no later than on the day the premises are handed over, as security for amounts owed under the tenancy.',
          'The deposit shall be returned within one month of the day the premises are vacated, after deducting the Landlord’s claims under the tenancy, in accordance with Article 6 of the Act on the Protection of Tenants’ Rights.',
        ],
      },
      {
        nadpis: 'Rights and Obligations of the Parties',
        odstavce: [
          'The Tenant shall use the premises in accordance with their purpose and look after their condition. Minor outlays connected with ordinary use (Article 681 of the Civil Code) are borne by the Tenant, other repairs by the Landlord.',
          'The Tenant shall notify the Landlord without delay of the need for repairs that are the Landlord’s responsibility and allow them to be carried out.',
          'Alterations to the premises, as well as subletting or allowing others to use the premises free of charge, require the Landlord’s written consent.',
        ],
      },
      {
        nadpis: 'End of the Tenancy',
        odstavce: [
          'The Tenant may terminate an agreement concluded for an indefinite term with three months’ notice, to the end of a calendar month (Article 688 of the Civil Code). The Landlord may terminate it only for the reasons specified in the Act on the Protection of Tenants’ Rights.',
          {
            uvodVzor: 'Fixed-term agreement (tick):',
            moznosti: {
              tak: 'Either party may terminate an agreement concluded for a fixed term with three months’ notice, to the end of a calendar month, for important reasons, in particular a change of place of work, payment arrears exceeding two payment periods, or use of the premises contrary to the agreement.',
              nie: 'An agreement concluded for a fixed term is not subject to early termination, except in the cases provided for by law.',
            },
          },
          'Notice of termination (wypowiedzenie) must be in writing. At the end of the tenancy the Tenant shall return the premises in an undeteriorated condition, allowing for normal wear and tear, together with the keys.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Matters not otherwise governed are governed by the provisions of the Civil Code and the Act on the Protection of Tenants’ Rights.',
          'Amendments to the agreement must be in writing. The agreement has been drawn up in two counterparts, one for each party.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

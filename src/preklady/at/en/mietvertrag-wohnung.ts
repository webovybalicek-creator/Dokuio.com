/**
 * English version: residential tenancy agreement (Austria). Original: src/obsah/at/mietvertrag-wohnung.ts
 * and src/sablony/at/mietvertrag-wohnung.ts (based on src/sablony/de/mietvertrag-wohnung.ts). The German text prevails;
 * rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-MIETVERTRAG', verze: '1.1' },

  nazev: 'Flat Tenancy Agreement',
  nazevA: 'the flat tenancy agreement',
  katalog: {
    popis: 'Tenancy agreement for a flat under the ABGB and the MRG.',
    slova: ['tenancy agreement', 'rental agreement', 'lease', 'rent a flat', 'let a flat', 'apartment', 'deposit', 'fixed-term tenancy', 'Mietvertrag', 'Kaution', 'MRG', 'Österreich'],
  },
  landing: {
    title: 'Flat Tenancy Agreement Austria {rok} – free PDF template',
    description:
      'Tenancy agreement for a flat in Austria under the ABGB and MRG, explained in English: fixed-term or open-ended, deposit, costs. Bilingual PDF or Word, free.',
    perex: 'Letting a flat in Austria? A tenancy agreement (Mietvertrag) under the ABGB and the Tenancy Act – fixed-term for at least three years, or open-ended.',
    obsahPopis: 'Tenancy agreement for a flat under Sections 1090 et seq. of the Austrian General Civil Code (ABGB) and the Tenancy Act (Mietrechtsgesetz, MRG).',
    obsah: [
      { nazev: 'Parties and flat', popis: 'Landlord, tenant, location, fixtures and fittings.' },
      { nazev: 'Term of the tenancy', popis: 'Fixed-term (at least 3 years) or open-ended.' },
      { nazev: 'Rent and deposit', popis: 'Advance payments, indexation, interest-bearing deposit.' },
      { nazev: 'Notice of termination', popis: 'Notice periods for the tenant.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'A few questions, everything explained.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up.' },
      { nazev: 'Sign it', popis: 'Each party receives one copy.' },
    ],
    online: [
      'Amounts in words (in German) added automatically',
      'Reminders for your calendar',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are letting a flat privately in Austria',
      'the flat falls under the partial scope of the MRG or outside it',
    ],
    nehodiSe: [
      'a flat in an old building fully covered by the MRG (Vollanwendungsbereich) – the rent is capped by law, have the amount checked',
      'commercial premises',
    ],
    poNadpis: 'Afterwards.',
    po: [
      { nazev: 'Handover report', popis: 'Meter readings, defects and keys.' },
      { nazev: 'Registration form (Meldezettel)', popis: 'Register your main residence within three days.' },
      { nazev: 'Deposit', popis: 'Invest it with interest and keep it separate.' },
    ],
    faq: [
      { q: 'What is the minimum term of a fixed-term tenancy agreement?', a: 'With private landlords, at least three years; otherwise the agreement counts as open-ended (Section 29 MRG).' },
      { q: 'Can the tenant terminate a fixed-term agreement early?', a: 'Yes, after one year has passed, with three months’ notice to the end of a month.' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony:
      'The template is based on Sections 1090 et seq. of the Austrian General Civil Code (ABGB), the Tenancy Act (Mietrechtsgesetz, MRG) and the Rent Indexation Act (Mieten-Wertsicherungsgesetz, MieWeG).',
    souvisejiciPopis: 'More documents about housing, also free.',
  },
  vytvorit: {
    title: 'Fill in a flat tenancy agreement online – Austria, PDF',
    description: 'Guide in English for a flat tenancy agreement in Austria under the ABGB and MRG. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · PDF and Word · takes about 5 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      parteien: { nazev: 'Landlord and tenant' },
      wohnung: { nazev: 'Flat' },
      zahlung: { nazev: 'Term, rent and deposit' },
    },
    pole: {
      v_name: { popis: 'Landlord – name', napoveda: 'The owner of the flat.', placeholder: 'e.g. Thomas Müller' },
      v_adresse: { popis: 'Landlord’s address', napoveda: 'For correspondence.', placeholder: 'e.g. Hauptstraße 12, 1010 Wien' },
      m_name: { popis: 'Tenant – name', napoveda: 'If there are several tenants, list them all.', placeholder: 'e.g. Anna Schmidt' },
      m_geburt: { popis: 'Tenant’s date of birth', napoveda: 'As in the identity document.' },
      m_adresse: { popis: 'Tenant’s previous address', napoveda: 'Before moving in.', placeholder: 'e.g. Gartengasse 5, 8010 Graz' },
      objekt: { popis: 'Address of the flat', napoveda: 'Street, house number, postcode, town.', placeholder: 'e.g. Lindengasse 7, 1070 Wien' },
      lage: { popis: 'Location in the building', napoveda: 'Floor and position.', placeholder: 'e.g. 2. OG links (2nd floor, left)' },
      zimmer: { popis: 'Rooms', napoveda: 'Excluding kitchen and bathroom.', placeholder: 'e.g. 2' },
      flaeche: { popis: 'Living area', napoveda: 'Approximate figure.', placeholder: 'e.g. 58' },
      nebenraeume: { popis: 'Also let (optional)', napoveda: 'Cellar, parking space, balcony.', placeholder: 'e.g. Kellerabteil Nr. 3 (cellar compartment No. 3)' },
      ausstattung: {
        popis: 'Fixtures and fittings (optional)',
        napoveda: 'Fitted kitchen, appliances. Details in the handover report.',
        placeholder: 'e.g. Einbauküche mit Kühlschrank, Herd und Spülmaschine (fitted kitchen with fridge, cooker and dishwasher)',
      },
      dauer: {
        popis: 'Term of the tenancy',
        napoveda: 'Fixed-term: at least three years.',
        moznosti: { unbefristet: 'Open-ended', befristet: 'Fixed-term (at least 3 years)' },
      },
      beginn: { popis: 'Start of the tenancy', napoveda: 'From when the tenancy runs.' },
      ende: { popis: 'End of the tenancy', napoveda: 'At least three years after the start.' },
      uebergabe: { popis: 'Handover of the flat', napoveda: 'Handover of the keys.' },
      miete: { popis: 'Main rent (€ per month, net)', napoveda: 'Excluding operating costs and VAT.', placeholder: 'e.g. 950' },
      nebenkosten: { popis: 'Advance payment for operating costs (€ per month)', napoveda: 'Operating costs and charges, settled annually.', placeholder: 'e.g. 180' },
      faellig: { popis: 'Due by (day of the month)', napoveda: 'Usual: by the 5th of the month, in advance.', placeholder: 'e.g. 5' },
      iban: { popis: 'Landlord’s IBAN', napoveda: 'For paying the rent.', placeholder: 'AT00 0000 0000 0000 0000' },
      kaution: { popis: 'Deposit (€)', napoveda: 'Usually up to three months’ gross rent.', placeholder: 'e.g. 2850' },
      tiere: {
        popis: 'Pets',
        napoveda: 'Small animals are always allowed; for dogs and cats the agreement applies.',
        moznosti: { erlaubt: 'Allowed', zustimmung: 'With the landlord’s consent' },
      },
      ort: { popis: 'Place', napoveda: 'Place of signing.', placeholder: 'e.g. Wien' },
      datum: { popis: 'Date', napoveda: 'Today’s date pre-filled.' },
    },
    vysvetleni: ['', '', '', '', '', '', '', ''],
    coDal: [
      'Print two copies; both parties sign both.',
      'At handover, draw up a handover report (Übergabeprotokoll) with meter readings and photos.',
      'Tenant: register your main residence (Hauptwohnsitz) at the registration office (Meldeamt) within three days of moving in; the landlord signs the registration form (Meldezettel).',
      'Landlord: invest the deposit with interest and keep it separate (e.g. a savings book – Sparbuch – or a deposit account – Kautionskonto).',
    ],
    kontrola: [
      'Find out whether the Tenancy Act (MRG) applies in full (e.g. an old building built before 1945): in that case the rent is capped by law (reference rent – Richtwertmietzins – or category rent – Kategoriemietzins). Under partial scope or outside its scope, the rent can be agreed freely.',
      'A fixed-term tenancy agreement must be in writing and last at least three years (private landlord), otherwise it counts as open-ended (Section 29 MRG).',
      'The tenant can terminate a fixed-term agreement after one year with three months’ notice to the end of a month – this cannot be excluded.',
      'The deposit (Kaution) is not capped by law; up to three months’ gross rent is usual. The landlord must invest it with interest and repay it with interest after the end (Section 16b MRG).',
      'Indexation: since 2026 the Rent Indexation Act (Mieten-Wertsicherungsgesetz) limits annual increases (adjustment once a year, on 1 April).',
      'The contract fee (Vertragsgebühr) for residential tenancy agreements has been abolished.',
    ],
    pripominky: {
      'Wohnungsübergabe mit Protokoll': { nazev: 'Handover of the flat with a handover report' },
      'Miete und Nebenkosten': { nazev: 'Rent and operating costs', popis: 'First 12 months.' },
      'Ende des befristeten Mietvertrags': { nazev: 'End of the fixed-term tenancy agreement' },
    },
  },

  dokument: {
    nazev: 'Tenancy Agreement for a Flat',
    podnadpis: 'under Sections 1090 et seq. of the Austrian General Civil Code (ABGB) and the Tenancy Act (Mietrechtsgesetz, MRG)',
    podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
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
          'Also let: {{nebenraeume}}. Fixtures and fittings: {{ausstattung}}. The condition at handover is recorded in a handover report.',
        ],
      },
      {
        nadpis: 'Term of the Tenancy',
        odstavce: [
          {
            uvodVzor: 'Term of the tenancy (please tick):',
            moznosti: {
              unbefristet: 'The tenancy begins on {{beginn}} and is concluded for an indefinite period.',
              befristet: 'The tenancy begins on {{beginn}} and ends on {{ende}} without the need for notice of termination (Section 29(1)(3) MRG).',
            },
          },
          'The flat is handed over on {{uebergabe}}. If the agreement is for a fixed term, the Tenant may terminate it in writing after one year has passed, giving three months’ notice to the last day of a month.',
        ],
      },
      {
        nadpis: 'Rent and Operating Costs',
        odstavce: [
          'The monthly main rent is {{miete}}, plus statutory value added tax where applicable.',
          'In addition, the Tenant pays a monthly advance of {{nebenkosten}} towards operating costs and public charges, which is settled annually.',
          'The rent including the advance is payable monthly in advance by day {{faellig}} of each month to the account IBAN {{iban}}.',
          'The main rent is index-linked in accordance with Section 1(2) of the Rent Indexation Act (Mieten-Wertsicherungsgesetz, MieWeG) and, where applicable, Section 1(3) MieWeG.',
        ],
      },
      {
        nadpis: 'Deposit',
        odstavce: [
          'At handover, the Tenant pays a deposit of {{kaution}}.',
          'The Landlord invests the deposit with interest and separately from their own assets and, after the end of the tenancy, repays it with interest, insofar as there are no justified claims arising from the tenancy (Section 16b MRG).',
        ],
      },
      {
        nadpis: 'Use of the Flat',
        odstavce: [
          'The Tenant treats the flat with care and reports serious damage without delay. Significant alterations require the Landlord’s consent.',
          'Passing the entire flat on to third parties (subletting) requires the Landlord’s consent.',
          {
            uvodVzor: 'Pets (please tick):',
            moznosti: {
              erlaubt: 'Keeping customary pets is permitted, provided other residents are not disturbed and the flat is not damaged.',
              zustimmung: 'Keeping dogs and cats requires the Landlord’s consent. Small animals in cages and aquariums are allowed.',
            },
          },
        ],
      },
      {
        nadpis: 'Termination and Return',
        odstavce: [
          'An open-ended agreement may be terminated by the Tenant in writing, giving one month’s notice to the last day of a month. The Landlord may terminate only through the court and only for the important reasons listed in the MRG.',
          'At the end of the tenancy, the Tenant returns the flat vacated, in the condition in which it was taken over (allowing for normal wear and tear), with all keys.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'In all other respects, the provisions of the ABGB and, where applicable, of the Tenancy Act apply.',
          'Amendments must be made in writing. The agreement is executed in two counterparts; each party receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

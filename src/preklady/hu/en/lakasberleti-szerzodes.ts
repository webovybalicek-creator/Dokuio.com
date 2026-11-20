/**
 * English version: residential lease agreement (Hungary). Original: src/obsah/hu/lakasberleti-szerzodes.ts
 * and src/sablony/hu/lakasberleti-szerzodes.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-LAKASBERLET', verze: '1.0' },

  nazev: 'Residential Lease Agreement',
  nazevA: 'the residential lease agreement',
  katalog: {
    popis: 'Letting a flat with a deposit, for a fixed or an indefinite term.',
    slova: ['residential lease agreement', 'tenancy agreement', 'flat rental contract', 'rent a flat', 'deposit', 'landlord and tenant', 'lakásbérleti szerződés', 'albérlet szerződés', 'óvadék', 'kaució'],
  },
  landing: {
    title: 'Residential Lease Agreement Hungary {rok} – free PDF template',
    description:
      'Flat lease agreement for Hungary, explained in English: rent, utilities, deposit, notice period, return of the flat; fixed or open-ended. Bilingual PDF or Word, free.',
    perex: 'Renting a flat in writing, on balanced terms. The deposit and the notice period are set out clearly.',
    obsahPopis: 'What the agreement records.',
    obsah: [
      { nazev: 'Flat', popis: 'Address, rooms, furnishings.' },
      { nazev: 'Term', popis: 'Fixed or indefinite, notice period.' },
      { nazev: 'Rent and utilities', popis: 'How much, when, where to.' },
      { nazev: 'Deposit', popis: 'Amount and repayment.' },
      { nazev: 'Return of the flat', popis: 'Condition, keys, report.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Parties, flat, payments.' },
      { nazev: 'Handover', popis: 'With a report and photos.' },
      { nazev: 'Signing', popis: 'In two counterparts.' },
    ],
    online: ['The amount in words (in Hungarian) is added automatically', 'Signing on screen', 'Download as PDF and Word', 'Rent reminder'],
    hodiSe: ['you are letting or renting a flat as a private individual'],
    nehodiSe: ['municipal rented housing – separate rules apply there', 'lease of commercial premises'],
    po: [{ nazev: 'Report', popis: 'Record the meter readings at handover.' }],
    faq: [
      { q: 'Does it have to be in writing?', a: 'Yes, a residential lease agreement (lakásbérleti szerződés) must be made in writing.' },
      {
        q: 'How much can the deposit be?',
        a: 'The law sets no upper limit; it is usually 1–3 months’ rent. The agreement sets out how it may be used.',
      },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony:
      'The template is based on Act LXXVIII of 1993 on the lease of flats and premises (1993. évi LXXVIII. törvény) and the Hungarian Civil Code (Polgári Törvénykönyv).',
    souvisejiciPopis: 'Other documents for renting, also free.',
  },
  vytvorit: {
    title: 'Fill in a residential lease agreement online – Hungary, PDF',
    description: 'Guide in English for a flat lease agreement in Hungary, with a deposit, a notice period and a rent reminder. Bilingual PDF or Word, free, no sign-up.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 5 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      felek: { nazev: 'Landlord and tenant' },
      lakas: { nazev: 'The flat' },
      ido: { nazev: 'Term' },
      dij: { nazev: 'Rent and deposit' },
    },
    pole: {
      b_nev: { popis: 'Landlord’s name', napoveda: 'The owner of the flat. If there are several owners, all of them sign.' },
      b_szul: { popis: 'Place and date of birth' },
      b_anyja: { popis: 'Mother’s name' },
      b_cim: { popis: 'Landlord’s address' },
      l_nev: { popis: 'Tenant’s name' },
      l_szul: { popis: 'Place and date of birth' },
      l_anyja: { popis: 'Mother’s name' },
      l_cim: { popis: 'Tenant’s current address' },
      egyutt: { popis: 'People moving in with the tenant (optional)', placeholder: 'e.g. házastársa, Nagy Péter (spouse, Nagy Péter)' },
      lakas_cim: { popis: 'Address of the flat', placeholder: 'e.g. 1137 Budapest, Pozsonyi út 10. 3/12.' },
      hrsz: { popis: 'Land registry parcel number (helyrajzi szám, optional)' },
      szobak: { popis: 'Number of rooms' },
      alapterulet: { popis: 'Floor area' },
      berendezes: { popis: 'Furnishings (optional)', placeholder: 'e.g. hűtő, mosógép, tűzhely, beépített szekrény (fridge, washing machine, cooker, built-in wardrobe)' },
      idotartam: {
        popis: 'For how long',
        moznosti: { hatarozott: 'For a fixed term', hatarozatlan: 'For an indefinite term' },
      },
      kezdet: { popis: 'Start of the lease' },
      vege: { popis: 'End of the lease' },
      felmondasi_ido: {
        popis: 'Notice period',
        napoveda: 'For an indefinite term, for both parties; for a fixed term, only for the tenant, if allowed.',
        placeholder: 'e.g. 1',
      },
      berleti_dij: { popis: 'Monthly rent (Ft)' },
      fizetes_nap: { popis: 'Payment by which day of the month', placeholder: 'e.g. 10' },
      rezsi: {
        popis: 'Utilities (what the tenant pays)',
        placeholder: 'e.g. áram, gáz, víz a mérőóra szerint; közös költség a bérbeadót terheli (electricity, gas, water by meter; the building’s service charge is borne by the landlord)',
      },
      ovadek: { popis: 'Deposit (Ft)', napoveda: 'Usually 1–3 months’ rent.' },
      szamla: { popis: 'Landlord’s bank account number' },
      misto: { popis: 'Town' },
      datum_podpisu: { popis: 'Date of the agreement' },
    },
    vysvetleni: [
      '',
      'Which flat this is about and what belongs to it.',
      '',
      'How much, when and where the tenant pays.',
      'Security for unpaid rent and for damage.',
      '',
      '',
      '',
    ],
    coDal: [
      'Print it in two counterparts; both of you sign both copies.',
      'At handover, fill in a handover report (átadás-átvételi jegyzőkönyv) with the meter readings and photos.',
      'Hand over the deposit by bank transfer or against a written acknowledgement of receipt.',
      'Landlord: income from letting must be declared – see the rules on the website of the National Tax and Customs Administration (NAV).',
    ],
    kontrola: [
      'For the letting of a flat to be valid, the agreement must be made in writing (Ltv. 2. § (5)).',
      'Check in the land registry title sheet (tulajdoni lap) that the landlord owns the flat (or has the owner’s consent).',
      'The amount of the deposit and the conditions of its repayment are set out in the agreement – the landlord may deduct only debts arising from the lease.',
      'A fixed-term agreement ends when the term expires; early ordinary termination is possible only if the agreement allows it.',
      'The tenant’s address registration requires the consent of the accommodation provider (the landlord).',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
    ],
    pripominky: {
      'A lakás átadása és jegyzőkönyv': { nazev: 'Handover of the flat and report' },
      'Bérleti díj': { nazev: 'Rent', popis: 'The first 12 months.' },
      'A bérlet vége': { nazev: 'End of the lease' },
    },
  },

  dokument: {
    nazev: 'Residential Lease Agreement',
    podnadpis: 'under Act LXXVIII of 1993 on the lease of flats and premises and the Hungarian Civil Code (Polgári Törvénykönyv)',
    podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Landlord:** {{b_nev}}, place and date of birth: {{b_szul}}, mother’s name: {{b_anyja}}, address: {{b_cim}}',
          '**Tenant:** {{l_nev}}, place and date of birth: {{l_szul}}, mother’s name: {{l_anyja}}, address: {{l_cim}}',
        ],
      },
      {
        nadpis: 'Subject of the Lease',
        odstavce: [
          'The Landlord lets and the Tenant rents the flat at {{lakas_cim}}, land registry parcel number {{hrsz}}, number of rooms: {{szobak}}, floor area: {{alapterulet}} (hereinafter: the flat).',
          'Furnishings of the flat: {{berendezes}}. The parties record the condition of the flat and the furnishings in a handover report.',
          'The Tenant uses the flat as a dwelling. The following may move into the flat together with the Tenant: {{egyutt}}. The Tenant may take in other persons only with the Landlord’s written consent; subletting is not permitted.',
        ],
      },
      {
        nadpis: 'Term',
        odstavce: [
          {
            uvodVzor: 'Term of the lease (tick one option):',
            moznosti: {
              hatarozott: 'This agreement is concluded for a fixed term from {{kezdet}} to {{vege}}. The Tenant may terminate the agreement in writing with a notice period of {{felmondasi_ido}}, effective on the last day of a month.',
              hatarozatlan: 'This agreement is concluded for an indefinite term from {{kezdet}}. Either party may terminate it in writing with a notice period of {{felmondasi_ido}}, effective on the last day of a month.',
            },
          },
          'This does not affect the cases of extraordinary termination laid down by law (in particular breach of the obligation to pay rent).',
        ],
      },
      {
        nadpis: 'Rent and Costs',
        odstavce: [
          'The monthly rent is {{berleti_dij}}, which the Tenant pays in advance by day {{fizetes_nap}} of each month to the Landlord’s bank account No. {{szamla}}.',
          'In addition to the rent, the Tenant bears the following costs: {{rezsi}}',
        ],
      },
      {
        nadpis: 'Deposit',
        odstavce: [
          'Upon signing this agreement, the Tenant pays a deposit of {{ovadek}}.',
          'The Landlord may deduct from the deposit overdue debts arising from the lease and damage caused by the Tenant that is not related to proper use. The Landlord repays the remaining amount within 30 days of the return of the flat.',
        ],
      },
      {
        nadpis: 'Rights and Obligations of the Parties',
        odstavce: [
          'The Tenant uses the flat for its intended purpose and, at their own expense, carries out minor repairs and the maintenance of the interior finishes and fittings of the flat arising from proper use.',
          'The Landlord arranges major repairs to the building and the flat. The Tenant reports defects without delay.',
          'The Landlord may inspect the flat after prior arrangement, without disturbing the Tenant.',
          'The Tenant may alter the flat only with the Landlord’s written consent.',
        ],
      },
      {
        nadpis: 'Return of the Flat',
        odstavce: [
          'When the lease ends, the Tenant returns the flat vacated, clean, without damage beyond the wear and tear of proper use, together with the keys. A report is drawn up on the return.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Matters not governed by this agreement are governed by the provisions of Act LXXVIII of 1993 and the Hungarian Civil Code.',
          'This agreement may be amended only in writing. This agreement is executed in two identical counterparts.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

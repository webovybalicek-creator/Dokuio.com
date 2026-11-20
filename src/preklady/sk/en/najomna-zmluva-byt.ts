/**
 * English version: flat lease agreement (Slovakia). Original: src/obsah/sk/najomna-zmluva-byt.ts
 * and src/sablony/sk/najomna-zmluva-byt.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-NAJOM-BYT', verze: '1.0' },

  nazev: 'Flat Lease Agreement',
  nazevA: 'the flat lease agreement',
  katalog: {
    popis: 'Renting a flat under the Civil Code.',
    slova: ['lease agreement', 'tenancy agreement', 'rent a flat', 'renting', 'apartment', 'security deposit', 'landlord', 'tenant', 'nájomná zmluva', 'prenájom bytu'],
  },
  landing: {
    title: 'Flat Lease Agreement Slovakia {rok} – free PDF template',
    description:
      'Flat lease agreement (nájomná zmluva) under the Slovak Civil Code: rent, advance payments, deposit, minor repairs, termination. Free bilingual PDF and Word.',
    perex: 'Letting or renting a flat? An agreement under Section 685 et seq. of the Civil Code (Občiansky zákonník) with rent, advance payments, a security deposit and rules for ending the lease.',
    obsahPopis: 'Lease agreement under Section 685 et seq. of Act No. 40/1964 Coll.',
    obsah: [
      { nazev: 'Parties and flat', popis: 'Landlord, tenant, address, appurtenances, furnishings.' },
      { nazev: 'Lease term', popis: 'Fixed or indefinite term, handover of the flat.' },
      { nazev: 'Payments and deposit', popis: 'Rent, advance payments, due date, deposit and its return.' },
      { nazev: 'Rights, obligations and termination', popis: 'Minor repairs, subletting, pets, notice of termination.' },
    ],
    kroky: [
      { nazev: 'Fill in the details', popis: 'Parties, flat, term and payments.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up.' },
      { nazev: 'Sign and hand over the flat', popis: 'With a handover report.' },
    ],
    online: ['Rent and deposit in words (in Slovak)', 'Payment reminders in your calendar', 'Follow-up handover report', 'Download as PDF and as Word'],
    hodiSe: ['you are letting your flat to a private individual', 'a lease for a fixed or indefinite term', 'you want clear rules on payments and the deposit'],
    nehodiSe: ['a short-term lease under Act No. 98/2014 Coll. – it has special rules', 'non-residential premises and business use', 'a lease from 1 July 2027 – a new Civil Code applies then'],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Handover report', popis: 'Meter readings, defects and keys at handover.' },
      { nazev: 'Deposit', popis: 'By transfer or against a receipt.' },
      { nazev: 'Energy', popis: 'The tenant transfers electricity and gas into their own name.' },
    ],
    faq: [
      { q: 'Does a lease agreement have to be in writing?', a: 'The Civil Code does not expressly require it, but a written agreement is the only reliable evidence of the rent, the deposit and the lease term.' },
      { q: 'What is the notice period?', a: 'Three months. It starts on the first day of the month following delivery of the notice (Section 710 of the Civil Code).' },
      { q: 'Can the landlord give notice at any time?', a: 'No. The landlord can terminate a lease for an indefinite term only on the grounds listed in Section 711 of the Civil Code.' },
      { q: 'Do you store my details?', a: 'No. The agreement is created directly in your browser.' },
    ],
    zakony: 'The template is based on Sections 685 to 716 of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník), and Government Regulation No. 87/1995 Coll. (nariadenie vlády). Valid until 30 June 2027.',
    souvisejiciPopis: 'Other housing documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a flat lease agreement online – Slovakia, PDF',
    description: 'Guide in English for a flat lease agreement under Slovak law. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 5 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strany: { nazev: 'Landlord and tenant', popis: 'The landlord is the owner of the flat. Copy the details from the identity cards (občiansky preukaz).' },
      byt: { nazev: 'Flat' },
      doba: { nazev: 'Lease term' },
      platby: { nazev: 'Rent and payments' },
    },
    pole: {
      p_jmeno: { popis: 'Landlord – full name', napoveda: 'Owner of the flat according to the title deed (list vlastníctva). All co-owners sign.', placeholder: 'e.g. Ján Novák' },
      p_narozeni: { popis: 'Landlord’s date of birth', napoveda: 'You don’t need to write the personal identification number (rodné číslo).' },
      p_adresa: { popis: 'Landlord’s address', napoveda: 'Permanent address for correspondence.', placeholder: 'e.g. Hlavná 12, 811 01 Bratislava' },
      k_jmeno: { popis: 'Tenant – full name', napoveda: 'Who will use the flat and pay the rent.', placeholder: 'e.g. Petra Kováčová' },
      k_narozeni: { popis: 'Tenant’s date of birth', napoveda: 'As on the identity card.' },
      k_adresa: { popis: 'Tenant’s current address', napoveda: 'Permanent address before moving in.', placeholder: 'e.g. Štúrova 5, 040 01 Košice' },
      byt_adresa: { popis: 'Address of the building', napoveda: 'Street, building/house number (súpisné/orientačné číslo), postcode and town.', placeholder: 'e.g. Mierová 25, 821 05 Bratislava' },
      byt_cislo: { popis: 'Flat number', napoveda: 'According to the title deed.', placeholder: 'e.g. 12' },
      byt_poschodie: { popis: 'Floor', napoveda: 'Which floor the flat is on.', placeholder: 'e.g. 3. p. (3rd floor)' },
      byt_izby: { popis: 'Number of rooms', napoveda: 'E.g. 2-izbový (two-room). Write it in Slovak.', placeholder: 'e.g. 2-izbový' },
      byt_plocha: { popis: 'Floor area', napoveda: 'According to the title deed or another extract.', placeholder: 'e.g. 54' },
      prislusenstvo: { popis: 'Appurtenances (optional)', napoveda: 'Cellar, storeroom, balcony, parking space.', placeholder: 'e.g. pivnica č. 12, balkón (cellar No. 12, balcony)' },
      vybavenie: { popis: 'Furnishings of the flat (optional)', napoveda: 'Appliances and furniture. You will record them in detail in the handover report.', placeholder: 'e.g. kuchynská linka s chladničkou, práčka, vstavaná skriňa (fitted kitchen with fridge, washing machine, built-in wardrobe)' },
      doba: {
        popis: 'For how long',
        napoveda: 'A fixed-term lease ends when the term expires. An indefinite lease continues until someone gives notice.',
        moznosti: { urcita: 'For a fixed term', neurcita: 'For an indefinite term' },
      },
      od: { popis: 'Lease starts on', napoveda: 'From when the tenant uses the flat and pays rent.' },
      do: { popis: 'Lease ends on', napoveda: 'Most often after one year.' },
      odovzdanie: { popis: 'Handover of the flat', napoveda: 'When the tenant gets the keys.' },
      osoby: { popis: 'Number of people in the flat', napoveda: 'How many people will live in the flat, including the tenant.', placeholder: 'e.g. 2' },
      najomne: { popis: 'Monthly rent (€)', napoveda: 'Rent without advance payments for services.', placeholder: 'e.g. 650' },
      zalohy: { popis: 'Advance payments for services (€ per month)', napoveda: 'Water, heating, lift, cleaning… settled once a year.', placeholder: 'e.g. 150' },
      energie: {
        popis: 'Electricity and gas',
        napoveda: 'Most often the tenant transfers them into their own name.',
        moznosti: { najomca: 'The tenant pays the supplier directly', zalohy: 'They are part of the advance payments' },
      },
      splatnost: { popis: 'Due date (day of the month)', napoveda: 'By which day payment is made, usually in advance for the month.', placeholder: 'e.g. 5' },
      ucet: { popis: 'Landlord’s IBAN', napoveda: 'Where to pay.', placeholder: 'SK12 0000 0000 0000 0000 0000' },
      zabezpeka: { popis: 'Security deposit (€)', napoveda: 'A deposit (zábezpeka, kaucia) against unpaid rent or damage. It is returned after the lease ends.', placeholder: 'e.g. 650' },
      zvierata: {
        popis: 'Pets',
        napoveda: 'Ordinary animals that do not disturb the neighbours or damage the flat.',
        moznosti: { ano: 'Allowed', suhlas: 'Only with the landlord’s consent' },
      },
      misto: { popis: 'Place of signing (town)', napoveda: 'Pre-filled from the landlord’s address.', placeholder: 'e.g. Bratislava' },
      datum_podpisu: { popis: 'Date of signing', napoveda: 'We have pre-filled today’s date.' },
    },
    vysvetleni: [
      '',
      'Which flat is being let and what belongs to it.',
      '',
      '',
      'The deposit secures the rent and compensation for damage. It is returned after the lease ends.',
      '',
      '',
      '',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'When handing over the flat, draw up a handover report (preberací protokol) with meter readings and photos.',
      'Hand over the deposit by transfer or against a written receipt.',
      'Tenant: transfer electricity and gas into your name if you pay for them directly, and notify the building manager of the change.',
    ],
    kontrola: [
      'The landlord is the owner of the flat – check this on the title deed (list vlastníctva) at katasterportal.sk.',
      'Check the other party’s identity against their identity card (občiansky preukaz) and copy the names exactly as shown on it.',
      'The Civil Code protects the tenant: the landlord can terminate a lease for an indefinite term only on the grounds in Section 711, and the notice period is three months. Arrangements that would circumvent this are invalid.',
      'Agree on a reasonable security deposit (kaucia) – usually one to two months’ rent. For a short-term lease under Act No. 98/2014 Coll. it is at most three times that amount.',
      'Minor repairs and routine maintenance are paid by the tenant to the extent set by Government Regulation No. 87/1995 Coll.; other repairs by the landlord.',
      'Subletting the whole flat or part of it to other people requires the landlord’s written consent (Section 719).',
      'If you want to let on a short-term basis with easier termination, there is a short-term lease regime (Act No. 98/2014 Coll.) – this template does not use it.',
      'Note: from 1 July 2027 a new Civil Code (Act No. 260/2026 Coll.) applies, with new rules on leases. This template reflects the law in force until 30 June 2027.',
    ],
    pripominky: {
      'Odovzdanie bytu a preberací protokol': { nazev: 'Handover of the flat and handover report' },
      'Nájomné a zálohy': { nazev: 'Rent and advance payments', popis: 'First 12 months.' },
      'Koniec nájmu': { nazev: 'End of the lease' },
    },
  },

  dokument: {
    nazev: 'Flat Lease Agreement',
    podnadpis: 'concluded under Section 685 et seq. of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník)',
    podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Landlord:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanently residing at {{p_adresa}} (the “Landlord”)',
          '**Tenant:** {{k_jmeno}}, date of birth {{k_narozeni}}, currently residing at {{k_adresa}} (the “Tenant”)',
        ],
      },
      {
        nadpis: 'Subject of the Lease',
        odstavce: [
          'The Landlord declares that they are the owner of flat No. {{byt_cislo}} ({{byt_izby}}) on floor {{byt_poschodie}} in the building at {{byt_adresa}} with a floor area of {{byt_plocha}} (the “Flat”).',
          'The Flat includes: {{prislusenstvo}}. The Flat is furnished with: {{vybavenie}}.',
          'The Landlord lets the Flat to the Tenant as a home for the Tenant and the members of their household. Number of people who will live in the Flat: {{osoby}}. The Tenant will notify the Landlord of any change in the number of people without undue delay.',
        ],
      },
      {
        nadpis: 'Lease Term and Handover of the Flat',
        odstavce: [
          {
            uvodVzor: 'Lease term (tick one):',
            moznosti: {
              urcita: 'The lease is agreed for a fixed term from {{od}} to {{do}}.',
              neurcita: 'The lease is agreed for an indefinite term, effective from {{od}}.',
            },
          },
          'The Landlord will hand over the Flat to the Tenant in a condition fit for proper use on {{odovzdanie}}. The parties will draw up a handover report with meter readings on handover.',
        ],
      },
      {
        nadpis: 'Rent and Payments for Services',
        odstavce: [
          'The Tenant pays monthly rent of {{najomne}} and advance payments for services connected with the use of the Flat of {{zalohy}} per month.',
          {
            uvodVzor: 'Electricity and gas (tick one):',
            moznosti: {
              najomca: 'The Tenant arranges electricity, and gas if applicable, and pays the supplier directly.',
              zalohy: 'Electricity, and gas if applicable, are covered by the advance payments.',
            },
          },
          'Rent and advance payments are payable monthly in advance, always by day {{splatnost}} of the calendar month, to the Landlord’s account IBAN {{ucet}}.',
          'The Landlord will settle the advance payments once a year according to actual costs. Any overpayment or underpayment is payable within 30 days of delivery of the statement.',
        ],
      },
      {
        nadpis: 'Security Deposit',
        odstavce: [
          'No later than on handover of the Flat, the Tenant will pay the Landlord a cash security deposit of {{zabezpeka}} to secure the rent, payments for services and compensation for any damage.',
          'After the lease ends and the Flat is handed back, the Landlord will return the deposit within 30 days; the Landlord may deduct only what the Tenant demonstrably owes them under the lease.',
        ],
      },
      {
        nadpis: 'Rights and Obligations',
        odstavce: [
          'The Tenant uses the Flat properly. Minor repairs and costs of routine maintenance are paid by the Tenant to the extent set by Government Regulation No. 87/1995 Coll.; other repairs are arranged by the Landlord.',
          'The Tenant will notify the Landlord without undue delay of any repairs that the Landlord is to carry out and will allow them to be carried out.',
          'The Tenant may make structural alterations to the Flat only with the Landlord’s prior written consent.',
          'The Tenant may sublet the Flat or part of it only with the Landlord’s written consent.',
          {
            uvodVzor: 'Pets (tick one):',
            moznosti: {
              ano: 'The Tenant may keep pets in the Flat provided they do not disturb the neighbours or damage the Flat.',
              suhlas: 'The Tenant may keep pets in the Flat only with the Landlord’s prior consent.',
            },
          },
        ],
      },
      {
        nadpis: 'Termination of the Lease',
        odstavce: [
          'The lease ends by written agreement, by expiry of the term for which it was agreed, or by written notice under Sections 710 and 711 of the Civil Code. The notice period is three months and starts on the first day of the month following delivery of the notice.',
          'When the lease ends, the Tenant will hand back the Flat in the condition in which they took it over, allowing for normal wear and tear, together with all keys.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Matters not governed by this agreement are governed by the Civil Code, in particular Section 685 et seq.',
          'The agreement is made in two counterparts, one for each party. It may be amended only by written addenda.',
          'The agreement becomes valid and effective upon signature by both parties.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

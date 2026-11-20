/**
 * English version: residential lease agreement for a flat (Czech Republic). Original: src/obsah/cz/najemni-smlouva-byt.ts
 * and src/sablony/cz/najemni-smlouva-byt.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 * The contract text (dokument) is taken from the existing English translation NAJEM_BYT_EN in
 * src/sablony/cz/preklady-en.ts, without its language sentence (the language clause is added automatically).
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-NAJEM-BYT', verze: '1.0' },

  nazev: 'Residential Lease Agreement',
  nazevA: 'the residential lease agreement',
  katalog: {
    popis: 'Renting a flat: rent, services, deposit, lease term.',
    slova: ['lease', 'tenancy agreement', 'rental agreement', 'rent a flat', 'let a flat', 'apartment', 'flat', 'tenant', 'landlord', 'deposit', 'nájemní smlouva', 'nájem bytu', 'pronájem bytu', 'kauce'],
  },
  landing: {
    title: 'Residential Lease Agreement Czech Republic {rok} – free PDF template',
    description:
      'Flat lease agreement for the Czech Republic under the Civil Code, explained in English: rent, service charges, deposit, inflation clause. Bilingual PDF and Word, free.',
    perex: 'Letting or renting a flat in the Czech Republic? The agreement keeps to the legal limits (deposit, minor repairs, rent increases) and contains nothing the law prohibits.',
    obsahPopis: 'Eight articles under Section 2235 et seq. of the Czech Civil Code (občanský zákoník), checked against materials of the Public Defender of Rights (Veřejný ochránce práv) and a handbook supported by the Ministry for Regional Development (MMR).',
    obsah: [
      { nazev: 'Parties', popis: 'Landlord and tenant, contact details.' },
      { nazev: 'Subject of the lease', popis: 'Flat, unit number, layout, floor area, appurtenances, furnishings, number of occupants.' },
      { nazev: 'Lease term and handover', popis: 'Fixed or indefinite term, handover with a report.' },
      { nazev: 'Rent and services', popis: 'Rent, advance payments, energy, due date, annual statement, inflation clause.' },
      { nazev: 'Security deposit', popis: 'Deposit of up to three months’ rent, interest, return.' },
      { nazev: 'Rights and obligations', popis: 'Minor repairs under the government regulation, alterations to the flat, subletting, pets.' },
      { nazev: 'Termination of the lease', popis: 'Agreement, expiry of the term, notice under the law, surrender of the flat.' },
      { nazev: 'Final provisions', popis: 'Two counterparts, amendments, signatures.' },
    ],
    kroky: [
      { nazev: 'Answer the questions', popis: 'Flat, term, rent, services and deposit. The guide keeps an eye on the legal limits.' },
      { nazev: 'Check the owner', popis: 'Looking up the Land Register (katastr nemovitostí) is free.' },
      { nazev: 'Sign and hand over the flat', popis: 'Two copies and a handover report with meter readings.' },
    ],
    online: ['Bilingual agreement: Czech original + English translation', 'Deposit and minor repairs within the legal limits', 'A correctly worded inflation clause', 'We pre-fill the follow-up handover report', 'Download as PDF and Word'],
    hodiSe: ['you are letting your own flat for living in', 'you are renting a flat from a private owner', 'you want a fair agreement without invalid clauses'],
    nehodiSe: ['a sublease (the tenant lets the flat on) – we are preparing a sublease agreement (podnájemní smlouva)', 'non-residential premises, an office or a garage – different rules', 'short-term accommodation (Airbnb) – this is not a flat lease'],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Handover report', popis: 'Meter readings, defects, keys and photos (předávací protokol).' },
      { nazev: 'Deposit against a receipt', popis: 'By transfer or with a written confirmation of receipt.' },
      { nazev: 'Energy and permanent residence', popis: 'Transfer electricity and gas; if the tenant wants to register permanent residence (trvalý pobyt), the lease agreement is sufficient as proof.' },
    ],
    faq: [
      { q: 'How high can the deposit be?', a: 'The security deposit (jistota, kauce), together with any contractual penalty, must not exceed three times the monthly rent (excluding advance payments for services). The tenant is entitled to interest on it.' },
      { q: 'Can the landlord increase the rent?', a: 'Yes, if the parties agree (e.g. an inflation clause with a specific indicator of the Czech Statistical Office – ČSÚ). Without an agreement, the landlord may propose an increase of at most 20% over three years, and the tenant must agree within two months; otherwise a court decides.' },
      { q: 'Which repairs does the tenant pay for?', a: 'Only routine maintenance and minor repairs under Government Regulation No. 308/2015 Coll. – up to CZK 100 per m² of floor area a year, and a single repair not on the list up to CZK 1,000. Everything else is paid for by the landlord.' },
      { q: 'Does a lease agreement have to be in writing?', a: 'It should be. However, the landlord cannot challenge the validity of the agreement merely because it was not in writing. A written agreement is the main proof of what you agreed.' },
      { q: 'How can the lease end?', a: 'By agreement, on expiry of the agreed term, or by notice of termination (výpověď). The landlord may give notice only on statutory grounds and must inform the tenant of their right to have it reviewed by a court.' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Sections 2201 et seq. and 2235 et seq. of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník), Government Regulation No. 308/2015 Coll. and Act No. 67/2013 Coll.; checked against the Public Defender of Rights (Veřejný ochránce práv) leaflet “Nájem bytu” and the handbook “Jak pronajmout byt?” (Iuridicum Remedium, supported by the MMR).',
    souvisejiciPopis: 'Other housing documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a residential lease agreement online – Czech Republic, PDF',
    description: 'Guide in English for a flat lease agreement in the Czech Republic: rent, services, deposit, inflation clause. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 5 minutes',
  },

  pruvodce: {
    kroky: {
      strany: { nazev: 'Landlord and tenant', popis: 'The landlord is the owner of the flat. Copy the details from the identity documents.' },
      byt: { nazev: 'Flat', popis: 'Describe the flat so that there is no doubt which one it is.' },
      doba: { nazev: 'Lease term' },
      platby: { nazev: 'Rent and payments' },
      jistota: { nazev: 'Security deposit (kauce)' },
    },
    pole: {
      p_jmeno: { popis: 'Landlord – first name and surname', napoveda: 'The owner of the flat as registered in the Land Register (katastr nemovitostí). All co-owners sign.', placeholder: 'e.g. Jan Novák' },
      p_narozeni: { popis: 'Landlord’s date of birth', napoveda: 'You don’t need to write the Czech personal identification number (rodné číslo).' },
      p_adresa: { popis: 'Landlord’s address', napoveda: 'Permanent address for delivery of post.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      p_kontakt: { popis: 'Landlord’s phone or e-mail', napoveda: 'For reporting faults and for communication.', placeholder: 'e.g. +420 777 123 456' },
      k_jmeno: { popis: 'Tenant – first name and surname', napoveda: 'Who will use the flat and pay the rent. If there are several tenants (joint tenancy – spolunájem), list them all.', placeholder: 'e.g. Petra Svobodová' },
      k_narozeni: { popis: 'Tenant’s date of birth', napoveda: 'According to the identity document.' },
      k_adresa: { popis: 'Tenant’s current address', napoveda: 'The tenant’s permanent address before moving in.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      k_kontakt: { popis: 'Tenant’s phone or e-mail', napoveda: 'For communication.', placeholder: 'e.g. petra@email.cz' },
      byt_adresa: { popis: 'Address of the building', napoveda: 'Street, building number (číslo popisné/orientační), postcode and town.', placeholder: 'e.g. Masarykova 1025/5, 251 01 Říčany' },
      byt_cislo: { popis: 'Flat or unit number', napoveda: 'For an owner-occupied flat, the unit number from the Land Register (e.g. 1025/12).', placeholder: 'e.g. 1025/12' },
      byt_podlazi: { popis: 'Floor', napoveda: 'E.g. 3. NP (3rd above-ground floor).', placeholder: 'e.g. 3. NP' },
      byt_dispozice: { popis: 'Layout', napoveda: 'E.g. 2+kk, 3+1 (number of rooms + kitchen; kk = kitchenette).', placeholder: 'e.g. 2+kk' },
      byt_plocha: { popis: 'Floor area', napoveda: 'The limit for minor repairs is calculated from it (CZK 100/m² a year).', placeholder: 'e.g. 54' },
      prislusenstvi: { popis: 'Appurtenances (optional)', napoveda: 'Cellar, storeroom, parking space, balcony – what belongs to the flat. Write in Czech.', placeholder: 'e.g. sklepní kóje č. 12, balkon (cellar storage unit No. 12, balcony)' },
      vybaveni: { popis: 'Furnishings of the flat (optional)', napoveda: 'Appliances and furniture provided by the landlord. You will list them in detail in the handover report. Write in Czech.', placeholder: 'e.g. kuchyňská linka s lednicí, myčkou a sporákem, pračka, vestavěná skříň (fitted kitchen with fridge, dishwasher and cooker, washing machine, built-in wardrobe)' },
      doba: {
        popis: 'For how long',
        napoveda: 'A fixed-term lease ends when the term expires. An indefinite lease lasts until someone gives notice – the landlord only on statutory grounds.',
        moznosti: { urcita: 'For a fixed term', neurcita: 'For an indefinite term' },
      },
      od: { popis: 'The lease starts on', napoveda: 'The day from which the tenant may use the flat and pays rent.' },
      do: { popis: 'The lease ends on', napoveda: 'Most often after a year.' },
      predani: { popis: 'Handover of the flat', napoveda: 'When the tenant gets the keys. You will draw up a handover report.' },
      osoby: { popis: 'Number of occupants', napoveda: 'How many people will live in the flat, including the tenant. The tenant reports a change within 2 months.', placeholder: 'e.g. 2' },
      najemne: { popis: 'Monthly rent (CZK)', napoveda: 'Rent for the flat without advance payments for services.', placeholder: 'e.g. 15000' },
      zalohy: { popis: 'Advance payments for services (CZK per month)', napoveda: 'Water, heating, lift, cleaning… Once a year they are settled against actual consumption.', placeholder: 'e.g. 3500' },
      sluzby: {
        popis: 'What the advance payments cover',
        napoveda: 'Tick the services the tenant pays for through the landlord.',
        moznosti: { voda: 'Water and sewage', teplo: 'Heating and hot water', vytah: 'Lift', spolecne: 'Lighting and cleaning of common areas', odpad: 'Waste collection' },
      },
      energie: {
        popis: 'Electricity and gas',
        napoveda: 'Most often the tenant transfers them to their own name and pays the supplier directly.',
        moznosti: { najemce: 'The tenant pays the supplier directly', zalohy: 'They are part of the advance payments above' },
      },
      splatnost: { popis: 'Due date (day of the month)', napoveda: 'By which day of the month rent and advance payments are paid, usually in advance for the month.', placeholder: 'e.g. 5' },
      ucet: { popis: 'Landlord’s account', napoveda: 'Where payments go. A transfer is easiest to prove.', placeholder: '123456789/0100' },
      zvysovani: {
        popis: 'Rent increases',
        napoveda: 'An inflation clause increases the rent automatically once a year by inflation according to the ČSÚ (Czech Statistical Office). Without it, the statutory procedure applies (landlord’s proposal, at most 20% over 3 years).',
        moznosti: { inflace: 'Inflation clause (every year by inflation according to the ČSÚ)', zakon: 'According to the law' },
      },
      jistota: { popis: 'Security deposit (CZK)', napoveda: 'At most three times the monthly rent (excluding advance payments). It is returned after the lease ends, less any debts.', placeholder: 'e.g. 30000' },
      jistota_urok: { popis: 'Interest on the deposit (% per year)', napoveda: 'The law gives the tenant the right to interest on the deposit; it must not be merely symbolic. As a guide, use savings account rates.', placeholder: 'e.g. 2' },
      jistota_vraceni: {
        popis: 'When the deposit is returned',
        napoveda: 'Returning it only after the service charges are settled must be expressly agreed.',
        moznosti: { skonceni: 'On termination of the lease and surrender of the flat', vyuctovani: 'After the annual service charge statement' },
      },
      zvirata: {
        popis: 'Pets',
        napoveda: 'The law generally allows the tenant to keep an ordinary pet (a cat, a small dog), as long as it does not disturb the neighbours or damage the flat.',
        moznosti: { ano: 'Allowed', oznameni: 'Allowed after notifying the landlord' },
      },
      misto: { popis: 'Place of signing (town)', napoveda: 'We pre-fill it from the landlord’s address.', placeholder: 'e.g. Říčany' },
      datum_podpisu: { popis: 'Date of signing', napoveda: 'We pre-filled today.' },
    },
    vysvetleni: [
      'Who is letting the flat and who is renting it.',
      'Which flat is let and what belongs to it.',
      'From when and for how long. The condition of the flat at handover is recorded in the handover report.',
      'How much and when payment is made. Advance payments for services are settled once a year.',
      'The deposit secures the rent and other obligations. The law limits it to three times the rent, and the tenant is entitled to interest on it.',
      'The usual rules of living together: repairs, changes to the flat, subletting, pets. Based on the law; it imposes nothing extra on the tenant.',
      'How the lease can end. The grounds and periods for notice are set by the law, and the agreement cannot worsen them to the tenant’s disadvantage.',
      'Standard formal points. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'When handing over the flat, draw up a handover report (předávací protokol) with the meter readings and photos – we have it ready.',
      'Pay the security deposit (kauce) by transfer or against a written receipt.',
      'Tenant: transfer electricity and gas to your name if you pay for them directly, and report the change to the building manager or the owners’ association (SVJ).',
    ],
    kontrola: [
      'The landlord is the owner of the flat – check this via the [Land Register look-up (nahlížení do katastru nemovitostí)](https://nahlizenidokn.cuzk.gov.cz/) (free, by address or unit number).',
      'The identity of the other party from their identity document (občanský průkaz). The number of the document can be checked in the [Neplatné doklady database (Czech Ministry of the Interior)](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).',
      'The security deposit (kauce) and any contractual penalty together must not exceed three times the monthly rent (Section 2254). The tenant is entitled to interest on the deposit.',
      'Rent increases: either a clear inflation clause (a specific ČSÚ indicator and a date), or the statutory procedure. A clause “in line with inflation” without an indicator is invalid.',
      'Property tax, building insurance, management fees or the repair fund cannot be passed on to the tenant – such a clause is invalid.',
      'The tenant pays for minor repairs only up to the limit of Government Regulation No. 308/2015 Coll. (CZK 100/m² a year, a single repair up to CZK 1,000).',
      'Subletting the entire flat needs the landlord’s written consent; close persons (family, partner) may move in without consent.',
      'The landlord settles the advance payments for services once a year under Act No. 67/2013 Coll.; check the statement.',
      'Fixed term: after the term ends, ask the tenant in good time to surrender the flat, otherwise the lease may be renewed (Section 2285).',
    ],
    pripominky: {
      'Předání bytu a předávací protokol': { nazev: 'Handover of the flat and handover report' },
      'Nájemné a zálohy': { nazev: 'Rent and advance payments' },
      'Domluvit prodloužení nebo konec nájmu': { nazev: 'Agree on extending or ending the lease', popis: 'The fixed-term lease ends in 3 months.' },
      'Konec nájmu': { nazev: 'End of the lease' },
    },
  },

  dokument: {
    nazev: 'Residential Lease Agreement',
    podnadpis: 'concluded under Section 2235 et seq. of Act No. 89/2012 Coll., the Civil Code',
    podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Landlord:** {{p_jmeno}}, date of birth {{p_narozeni}}, residing at {{p_adresa}}, contact {{p_kontakt}} (the “Landlord”)',
          '**Tenant:** {{k_jmeno}}, date of birth {{k_narozeni}}, currently residing at {{k_adresa}}, contact {{k_kontakt}} (the “Tenant”)',
        ],
      },
      {
        nadpis: 'Subject of the Lease',
        odstavce: [
          'The Landlord declares that they are the owner of flat No. {{byt_cislo}}, layout {{byt_dispozice}}, on the {{byt_podlazi}} of the building at {{byt_adresa}}, with a floor area of {{byt_plocha}} (the “Flat”).',
          'The Flat includes: {{prislusenstvi}}. The Flat is furnished with: {{vybaveni}}.',
          'The Landlord lets the Flat to the Tenant to meet the housing needs of the Tenant and the members of their household. {{osoby}} persons will live in the Flat. The Tenant shall notify the Landlord of any change in the number of persons without undue delay, at the latest within two months.',
        ],
      },
      {
        nadpis: 'Lease Term and Handover of the Flat',
        odstavce: [
          {
            uvodVzor: 'Lease term (tick one option):',
            moznosti: {
              urcita: 'The lease is concluded for a fixed term from {{od}} to {{do}}.',
              neurcita: 'The lease is concluded for an indefinite term with effect from {{od}}.',
            },
          },
          'The Landlord shall hand over the Flat to the Tenant in a condition fit for moving in and living on {{predani}}. The parties shall draw up a handover protocol recording the meter readings and the condition of the Flat.',
        ],
      },
      {
        nadpis: 'Rent and Payments for Services',
        odstavce: [
          'The Tenant shall pay a monthly rent of {{najemne}} and advance payments for services connected with the use of the Flat of {{zalohy}} per month.',
          {
            uvod: 'Advance payments are made for the following services:',
            moznosti: {
              voda: 'water supply and sewage',
              teplo: 'heating and hot water',
              vytah: 'lift operation',
              spolecne: 'lighting and cleaning of common areas of the building',
              odpad: 'waste collection',
            },
          },
          {
            uvodVzor: 'Electricity and gas (tick):',
            moznosti: {
              najemce: 'The Tenant shall arrange and pay for electricity and, where applicable, gas directly with the supplier.',
              zalohy: 'Electricity and, where applicable, gas are covered by the advance payments for services.',
            },
          },
          'Rent and advance payments are payable monthly in advance, always by the {{splatnost}}th day of the calendar month, to the Landlord’s bank account No. {{ucet}}.',
          'The Landlord shall settle the advance payments for services once a year, at the latest within four months after the end of the billing period. Any overpayment or underpayment is due within four months of delivery of the statement.',
          {
            uvodVzor: 'Rent increases (tick one option):',
            moznosti: {
              inflace: 'The rent shall increase on 1 April of each calendar year by the average annual inflation rate for the previous calendar year, expressed as the increase in the average annual consumer price index published by the Czech Statistical Office, for the first time in the year following the year in which the lease commenced. The Landlord shall notify the Tenant of the increase in writing.',
              zakon: 'Rent increases are governed by Section 2249 of the Civil Code.',
            },
          },
        ],
      },
      {
        nadpis: 'Security Deposit',
        odstavce: [
          'The Tenant shall pay the Landlord a security deposit of {{jistota}} at the latest upon handover of the Flat.',
          'The Tenant is entitled to interest on the deposit at the rate of {{jistota_urok}} from the date it is provided until it is returned.',
          {
            uvodVzor: 'Return of the deposit (tick one option):',
            moznosti: {
              skonceni: 'Upon termination of the lease and surrender of the Flat, the Landlord shall return the deposit with interest, setting off any amounts owed by the Tenant under the lease.',
              vyuctovani: 'The parties expressly agree that after termination of the lease the Landlord shall return the deposit with interest no later than one month after delivery of the service charge statement for the last billing period, setting off any amounts owed by the Tenant under the lease.',
            },
          },
        ],
      },
      {
        nadpis: 'Rights and Obligations',
        odstavce: [
          'The Tenant shall use the Flat properly and in accordance with this agreement. Routine maintenance and minor repairs related to the use of the Flat shall be carried out and paid for by the Tenant to the extent set out in Government Regulation No. 308/2015 Coll.; other repairs shall be arranged by the Landlord.',
          'The Tenant shall notify the Landlord without undue delay of any repairs to be carried out by the Landlord and shall allow them to be carried out, including access to the Flat to the necessary extent after prior notice.',
          'The Tenant may make structural alterations or other substantial changes to the Flat only with the Landlord’s prior written consent.',
          'Subletting the entire Flat, or part of it if the Tenant does not live there, is only possible with the Landlord’s written consent.',
          {
            uvodVzor: 'Pets (tick):',
            moznosti: {
              ano: 'The Tenant may keep pets in the Flat, provided this does not cause nuisance to other residents of the building or damage to the Flat.',
              oznameni: 'The Tenant may keep pets in the Flat after prior notice to the Landlord, provided this does not cause nuisance to other residents of the building or damage to the Flat.',
            },
          },
        ],
      },
      {
        nadpis: 'Termination of the Lease',
        odstavce: [
          'The lease shall terminate by agreement of the parties, upon expiry of the agreed term, or by written notice on the grounds and within the periods set out in the Civil Code (in particular Sections 2285 to 2291).',
          'Upon termination of the lease, the Tenant shall surrender the Flat to the Landlord in the condition in which it was taken over, taking into account normal wear and tear, together with all keys. The parties shall draw up a handover protocol.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Rights and obligations not governed by this agreement are governed by the Civil Code, in particular Section 2201 et seq. and Section 2235 et seq.',
          'This agreement is executed in two counterparts, one for each party. It may only be amended by written amendments.',
          'This agreement becomes valid and effective upon signature by both parties.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

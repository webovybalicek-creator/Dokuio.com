/**
 * English version: sublease agreement for a flat (Czech Republic). Original: src/obsah/cz/podnajemni-smlouva.ts
 * and src/sablony/cz/podnajemni-smlouva.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 * The contract text follows PODNAJEM_EN (src/sablony/cz/preklady-en.ts) so that both bilingual versions match;
 * the language clause is added automatically, so it is not repeated in the last paragraph.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-PODNAJEM', verze: '1.0' },

  nazev: 'Sublease Agreement',
  nazevA: 'the sublease agreement',
  katalog: {
    popis: 'Subletting a room or a whole flat from the tenant.',
    slova: ['sublease', 'sublet', 'room', 'flatmate', 'flatshare', 'sublease agreement', 'subtenant', 'flat', 'room rental', 'podnájemní smlouva', 'podnájem'],
  },
  landing: {
    title: 'Sublease Agreement Czech Republic {rok} – free PDF template',
    description:
      'Sublease agreement for a room or a whole flat in the Czech Republic, explained in English: landlord’s consent, term, rent, deposit. Free bilingual PDF or Word.',
    perex: 'When a tenant lets a room or the whole flat to another person. It keeps track of the landlord’s consent and of the fact that the sublease ends together with the lease.',
    obsahPopis: 'Five articles under Section 2215 and Section 2274 et seq. of the Czech Civil Code (občanský zákoník).',
    obsah: [
      { nazev: 'Parties', popis: 'The tenant and the subtenant.' },
      { nazev: 'Subject of the sublease', popis: 'The flat, under which lease agreement, a room or the whole flat, the landlord’s consent.' },
      { nazev: 'Term of the sublease', popis: 'From when until when, ending together with the lease, notice of termination.' },
      { nazev: 'Rent and deposit', popis: 'Amount, due date, services and utilities, return of the deposit.' },
      { nazev: 'Rights and obligations', popis: 'Use of the flat, handing it back, final provisions.' },
    ],
    kroky: [
      { nazev: 'Check the lease', popis: 'The tenant’s lease agreement and, if needed, the landlord’s consent.' },
      { nazev: 'Fill in the terms', popis: 'Room or flat, term, rent, deposit.' },
      { nazev: 'Sign', popis: 'Both parties, two copies, the consent as an annex.' },
    ],
    online: ['Bilingual agreement: Czech original + English translation', 'A room or the whole flat', 'Keeps track of the landlord’s consent', 'Amount in words (in Czech) added automatically', 'Download as PDF and Word'],
    hodiSe: [
      'you are subletting a room in a flat where you live yourself',
      'you are subletting the whole flat and have the landlord’s written consent',
      'you are a subtenant and want the terms in black and white',
    ],
    nehodiSe: [
      'you are letting your own flat – use a residential lease agreement (nájemní smlouva)',
      'the flat is “sublet” by a company that does not live in it – in reality this is a lease',
      'you don’t have the landlord’s consent to sublet the whole flat – first ask for it in writing',
    ],
    po: [
      { nazev: 'Handover report', popis: 'Condition of the room or flat, meters and keys (předávací protokol).' },
      { nazev: 'Number of people in the building', popis: 'The tenant notifies the landlord that another person lives in the flat.' },
      { nazev: 'Taxes', popis: 'Income from subletting is taxable income for the tenant.' },
    ],
    faq: [
      {
        q: 'Do I need the landlord’s consent?',
        a: 'If you permanently live in the flat yourself and sublet only part of it (a room), you don’t need consent. To sublet the whole flat, or if you don’t live in the flat, you need the landlord’s written consent (Sections 2274 and 2275 of the Civil Code). The lease agreement may also prohibit subletting.',
      },
      {
        q: 'What if the landlord does not respond to the request?',
        a: 'The Civil Code provides that if the landlord does not reply to a written request within one month, consent is deemed to have been given – unless the lease agreement prohibits subletting. It is safer to have explicit written consent.',
      },
      {
        q: 'What happens to the sublease when the lease ends?',
        a: 'The sublease ends together with the tenant’s lease. The subtenant has no right to alternative housing, so it is good to know until when the tenant has the flat on lease.',
      },
      {
        q: 'Is it a sublease if a company lets the flat to me?',
        a: 'According to the joint opinion of the Czech Ministry for Regional Development (MMR) and the Ministry of Justice of January 2026, it is a lease if the company, as part of its business, lets the flat to the end user and does not live in it itself. Tenant protection then applies.',
      },
      { q: 'Do you store my details?', a: 'No. The agreement is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník; Sections 2215, 2216 and 2274–2278).',
    souvisejiciPopis: 'Other housing documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a sublease agreement online – Czech Republic, PDF',
    description: 'Guide in English for a sublease of a room or whole flat in the Czech Republic: landlord’s consent, rent, deposit. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 4 minutes',
  },

  pruvodce: {
    kroky: {
      strany: { nazev: 'Tenant and subtenant', popis: 'The tenant rents the flat from the owner and lets part of it or the whole flat to the subtenant.' },
      predmet: { nazev: 'What is being sublet' },
      podminky: { nazev: 'Term and payments' },
    },
    pole: {
      p_jmeno: { popis: 'Tenant – first name and surname', napoveda: 'The person who rents the flat and sublets it. Write the full name as it appears in their identity document.', placeholder: 'e.g. Jan Novák' },
      p_narozeni: { popis: 'Tenant’s date of birth', napoveda: 'You don’t need to write the Czech personal identification number (rodné číslo).' },
      p_adresa: { popis: 'Tenant’s address', napoveda: 'Permanent address.', placeholder: 'e.g. Masarykova 1025/5, 251 01 Říčany' },
      k_jmeno: { popis: 'Subtenant – first name and surname', napoveda: 'The person who will live in the flat or room.', placeholder: 'e.g. Tomáš Dvořák' },
      k_narozeni: { popis: 'Subtenant’s date of birth', napoveda: 'According to the identity document.' },
      k_adresa: { popis: 'Subtenant’s current address', napoveda: 'Permanent address.', placeholder: 'e.g. Palackého 3, 370 01 České Budějovice' },
      byt: { popis: 'Flat (address and flat number)', napoveda: 'As in the tenant’s lease agreement.', placeholder: 'e.g. Masarykova 1025/5, Říčany, byt č. 12' },
      pronajimatel: { popis: 'Owner (landlord) of the flat', napoveda: 'From whom the tenant rents the flat.', placeholder: 'e.g. Marie Černá' },
      najem_datum: { popis: 'Date of the tenant’s lease agreement', napoveda: 'The agreement between the owner and the tenant.' },
      rozsah: {
        popis: 'Scope of the sublease',
        napoveda: 'If the tenant permanently lives in the flat, they may sublet part of it without the landlord’s consent. Otherwise consent is required.',
        moznosti: { cast: 'Part of the flat (a room), the tenant lives in the flat', cely: 'The whole flat' },
      },
      cast_popis: {
        popis: 'Which part of the flat',
        napoveda: 'The room and the shared areas the subtenant may use. Ideally write it in Czech.',
        placeholder: 'e.g. pokoj 14 m² s balkonem, společné užívání kuchyně a koupelny (14 m² room with balcony, shared kitchen and bathroom)',
      },
      souhlas: {
        popis: 'Landlord’s consent',
        napoveda: 'The consent must be in writing. Attach a copy to the agreement.',
        moznosti: { ano: 'The landlord has given written consent', neni_treba: 'Not required (part of the flat, the tenant lives in the flat)' },
      },
      od: { popis: 'Sublease from', napoveda: 'From when the subtenant may use the flat.' },
      do: { popis: 'Sublease until', napoveda: 'The sublease ends at the latest together with the tenant’s lease.' },
      podnajemne: { popis: 'Monthly rent (CZK)', napoveda: 'Including a share of services, or without them – specify below. We add the amount in words (in Czech) ourselves.', placeholder: 'e.g. 9000' },
      sluzby: {
        popis: 'Services and utilities',
        napoveda: 'What the rent includes (water, heating, electricity, internet) or how costs are split. Ideally write it in Czech.',
        placeholder: 'e.g. podnájemné zahrnuje všechny služby, energie a internet (rent includes all services, utilities and internet)',
      },
      splatnost: { popis: 'Due date (day of the month)', napoveda: 'By which day of the month the rent is paid.', placeholder: 'e.g. 5' },
      ucet: { popis: 'Tenant’s bank account', napoveda: 'Where to pay.', placeholder: '123456789/0100' },
      kauce: { popis: 'Security deposit (CZK, optional)', napoveda: 'Returned after the sublease ends, less any debts.', placeholder: 'e.g. 9000' },
      vypovedni: { popis: 'Notice period (months)', napoveda: 'The same for both parties. Usually 1–3 months.', placeholder: 'e.g. 1' },
      misto: { popis: 'Place of signing (town)', napoveda: 'We pre-fill it from the tenant’s address.', placeholder: 'e.g. Říčany' },
      datum_podpisu: { popis: 'Date of signing', napoveda: 'We pre-filled today.' },
    },
    vysvetleni: [
      'The tenant lets the flat or part of it to the subtenant. The subtenant has no contract with the owner of the flat.',
      'What is being sublet and on what basis. Without a valid lease there can be no sublease.',
      'For how long. A sublease never outlasts the lease.',
      'How much and when to pay.',
      'Rules for living together and formal points.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'If the landlord’s consent is needed, attach a copy to the agreement.',
      'At handover, draw up a handover report (předávací protokol): condition, keys, meters.',
      'Tenant: income from subletting is taxable income – remember your tax return.',
    ],
    kontrola: [
      'Subtenant: ask to see the tenant’s lease agreement and check that they really are the tenant (and until when).',
      'The whole flat, or part of it if the tenant does not live there, may only be sublet with the landlord’s written consent – ask to see it and attach a copy.',
      'The sublease ends together with the lease. If the tenant’s lease ends, your sublease ends too – without alternative housing.',
      'Is the flat sublet to you by a company that does not live there and runs a letting business? According to the opinion of the MMR and the Ministry of Justice of January 2026, it is then a lease with full tenant protection.',
      'The identity of the other party from their identity document (občanský průkaz). The number of a Czech ID card can be checked in the [Neplatné doklady database (Czech Ministry of the Interior)](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).',
      'Pay the deposit and rent by bank transfer or against a written receipt.',
    ],
    pripominky: {
      'Podnájemné': { nazev: 'Sublease rent' },
      'Domluvit prodloužení nebo konec podnájmu': { nazev: 'Agree on extending or ending the sublease' },
      'Konec podnájmu': { nazev: 'End of the sublease' },
    },
  },

  dokument: {
    nazev: 'Sublease Agreement for a Flat',
    podnadpis: 'concluded under Section 2215 and Section 2274 et seq. of Act No. 89/2012 Coll., the Civil Code',
    podpisy: { vlevo: 'tenant', vpravo: 'subtenant' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Tenant:** {{p_jmeno}}, date of birth {{p_narozeni}}, residing at {{p_adresa}} (the “Tenant”)',
          '**Subtenant:** {{k_jmeno}}, date of birth {{k_narozeni}}, currently residing at {{k_adresa}} (the “Subtenant”)',
        ],
      },
      {
        nadpis: 'Subject of the Sublease',
        odstavce: [
          'The Tenant declares that they are the tenant of the flat {{byt}} under a lease agreement concluded on {{najem_datum}} with the landlord {{pronajimatel}}.',
          {
            uvodVzor: 'Scope (tick one option):',
            moznosti: {
              cast: 'The Tenant, who permanently lives in the flat, lets the following part of the flat to the Subtenant: {{cast_popis}}.',
              cely: 'The Tenant lets the entire flat to the Subtenant.',
            },
          },
          {
            uvodVzor: 'Landlord’s consent (tick one option):',
            moznosti: {
              ano: 'The landlord has given written consent to the sublease; a copy is attached to this agreement.',
              neni_treba: 'The landlord’s consent is not required under Section 2274 of the Civil Code; the Tenant shall notify the landlord of the increase in the number of persons living in the flat.',
            },
          },
        ],
      },
      {
        nadpis: 'Term of the Sublease',
        odstavce: [
          'The sublease is concluded for the period from {{od}} to {{do}}.',
          'The sublease ends at the latest together with the Tenant’s lease. If the lease is terminated, the Tenant shall inform the Subtenant without undue delay, stating the date on which the lease ends.',
          'Either party may terminate the sublease without giving reasons with a notice period of {{vypovedni}} months, starting on the first day of the month following delivery of the notice.',
        ],
      },
      {
        nadpis: 'Rent and Deposit',
        odstavce: [
          'The Subtenant shall pay a monthly rent of {{podnajemne}}, always by the {{splatnost}}th day of the month, to the Tenant’s bank account No. {{ucet}}.',
          'Services and utilities: {{sluzby}}',
          'The Subtenant shall pay a deposit of {{kauce}}. The Tenant shall return it within one month after the end of the sublease and surrender of the flat, setting off any amounts owed by the Subtenant.',
        ],
      },
      {
        nadpis: 'Rights, Obligations and Final Provisions',
        odstavce: [
          'The Subtenant shall use the flat properly, observe the house rules and shall not let the flat to other persons or make any changes to it without the Tenant’s consent.',
          'Upon termination of the sublease, the Subtenant shall surrender the flat or its part, including the keys, in the condition in which it was taken over, taking into account normal wear and tear.',
          'Rights and obligations not governed by this agreement are governed by the Civil Code. This agreement is executed in two counterparts and becomes effective upon signature by both parties.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

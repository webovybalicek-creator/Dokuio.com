/**
 * English version: agreement to end a residential tenancy (Czech Republic). Original: src/obsah/cz/dohoda-o-skonceni-najmu.ts
 * and src/sablony/cz/dohoda-o-skonceni-najmu.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-DOHODA-NAJEM', verze: '1.0' },

  nazev: 'Agreement to End a Tenancy',
  nazevA: 'the agreement to end a tenancy',
  katalog: {
    popis: 'Ending a flat tenancy by mutual agreement, including return of the deposit.',
    slova: ['end of tenancy', 'terminate tenancy', 'mutual termination', 'surrender of tenancy', 'flat', 'apartment', 'deposit', 'security deposit', 'dohoda o skončení nájmu', 'kauce', 'jistota'],
  },
  landing: {
    title: 'Agreement to End a Tenancy Czech Republic {rok} – free PDF template',
    description:
      'Agreement to end a flat tenancy in the Czech Republic, in English: end date, handover of the flat, return of the deposit, service charges. Bilingual PDF and Word, free.',
    perex: 'The quickest and calmest way to end a tenancy: you set the date yourselves, with no notice period. Including return of the security deposit (kauce).',
    obsahPopis: 'Three short articles; the tenancy ends by agreement of the parties.',
    obsah: [
      { nazev: 'Parties', popis: 'Landlord and tenant.' },
      { nazev: 'End of the tenancy', popis: 'End date, handover of the flat, payments until the end.' },
      { nazev: 'Deposit and other arrangements', popis: 'When and where the deposit is returned, repainting, furnishings.' },
    ],
    kroky: [
      { nazev: 'Agree on the date', popis: 'End of the tenancy and handover of the flat.' },
      { nazev: 'Agree on the deposit', popis: 'When and where it is returned.' },
      { nazev: 'Sign', popis: 'Both parties, two copies.' },
    ],
    online: ['Return of the deposit in one click', 'Follows on from the handover report', 'Sign on screen', 'Download as PDF and Word'],
    hodiSe: ['both parties want to end the tenancy', 'the tenant wants to leave earlier than notice would allow', 'you want to settle the deposit and service charges clearly'],
    nehodiSe: ['the other party does not agree – notice of termination (výpověď) is what remains', 'a dispute over debts or damage – consult a lawyer', 'a sublease (podnájem) – the subtenant makes the agreement with the tenant'],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Handover report', popis: 'When handing over the flat (předávací protokol).' },
      { nazev: 'Energy', popis: 'Cancelling or transferring electricity and gas.' },
      { nazev: 'Deposit and service charges', popis: 'Keep an eye on the agreed deadline.' },
    ],
    faq: [
      { q: 'Can a tenancy be ended by agreement at any time?', a: 'Yes, a tenancy can be ended by agreement at any time, with no notice period and no reason, as long as both parties agree.' },
      { q: 'Does the agreement have to be in writing?', a: 'We always recommend it in writing – it is proof of the end date and of what was agreed about the deposit.' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník, Sections 1981, 2254 and 2235 et seq.).',
    souvisejiciPopis: 'Other housing documents, also free.',
  },
  vytvorit: {
    title: 'Fill in an agreement to end a flat tenancy – Czech Republic, PDF',
    description: 'Guide in English for an agreement to end a flat tenancy in the Czech Republic, including return of the deposit. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strany: { nazev: 'Parties and flat' },
      konec: { nazev: 'Ending' },
    },
    pole: {
      p_jmeno: { popis: 'Landlord – first name and surname', napoveda: 'As in the lease agreement (nájemní smlouva).', placeholder: 'e.g. Jan Novák' },
      p_adresa: { popis: 'Landlord’s address', napoveda: 'Permanent address.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      k_jmeno: { popis: 'Tenant – first name and surname', napoveda: 'As in the lease agreement; if there are several tenants, list them all.', placeholder: 'e.g. Petra Svobodová' },
      k_narozeni: { popis: 'Tenant’s date of birth', napoveda: 'According to the identity document.' },
      byt: { popis: 'Flat (address and flat number)', napoveda: 'As in the lease agreement.', placeholder: 'e.g. Masarykova 1025/5, Říčany, byt č. 12' },
      smlouva_datum: { popis: 'Date of the lease agreement', napoveda: 'When the agreement was signed.' },
      konec_dne: { popis: 'The tenancy ends on', napoveda: 'The last day of the tenancy. Rent is paid up to this day.' },
      odevzdani: { popis: 'Hand over the flat no later than', napoveda: 'When the tenant returns the keys. Usually the same day as the end of the tenancy.' },
      jistota: {
        popis: 'Security deposit (jistota, kauce)',
        napoveda: 'Returning it after the service charges are settled protects the landlord against arrears; for the tenant, however, it means getting it back later.',
        moznosti: { odevzdani: 'Returned within a set time after handover of the flat', vyuctovani: 'Returned after the service charges are settled', zadna: 'No deposit was paid' },
      },
      jistota_dni: { popis: 'Return within (days)', napoveda: 'E.g. 14 or 30 days from handover of the flat.', placeholder: 'e.g. 14' },
      ucet: { popis: 'Tenant’s account for return of the deposit', napoveda: 'Where the landlord sends the deposit.', placeholder: '123456789/0100' },
      dalsi: { popis: 'Other arrangements (optional)', napoveda: 'E.g. which furnishings the tenant leaves in the flat or who repaints. Write in Czech – the text goes into both language versions exactly as you write it.', placeholder: 'e.g. nájemce před odevzdáním byt vymaluje (the tenant will repaint the flat before handover)' },
      misto: { popis: 'Place (town)', napoveda: 'We pre-fill it from the landlord’s address.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date of signing', napoveda: 'We pre-filled today.' },
    },
    vysvetleni: [
      'Who is making the agreement.',
      'When the tenancy ends and when the flat is handed over.',
      'Return of the deposit and anything else you have agreed on. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'When handing over the flat, draw up a handover report (předávací protokol) with the meter readings.',
      'The tenant cancels electricity and gas if they were in the tenant’s name.',
      'Keep an eye on the deadline for return of the deposit and the service charge statement.',
    ],
    kontrola: [
      'The agreement must be signed by all landlords and all tenants.',
      'A specific end date of the tenancy and a specific date for handing over the flat.',
      'How and when the security deposit (kauce) is returned with interest and how the service charges will be settled.',
      'Tenant: the agreement replaces notice – don’t be afraid to agree on an earlier end than notice would allow.',
      'Landlord: the tenant cannot be forced into the agreement; an agreement made under pressure can be challenged.',
    ],
    pripominky: {
      'Konec nájmu': { nazev: 'End of the tenancy' },
      'Odevzdání bytu a předávací protokol': { nazev: 'Handover of the flat and handover report' },
      'Vrácení jistoty (kauce)': { nazev: 'Return of the security deposit (kauce)' },
    },
  },

  dokument: {
    nazev: 'Agreement to End a Flat Tenancy',
    podnadpis: 'concluded under Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
    podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Landlord:** {{p_jmeno}}, permanently residing at {{p_adresa}}',
          '**Tenant:** {{k_jmeno}}, date of birth {{k_narozeni}}',
        ],
      },
      {
        nadpis: 'End of the Tenancy',
        odstavce: [
          'The parties have agreed that the tenancy of the flat {{byt}} under the lease agreement dated {{smlouva_datum}} shall end on {{konec_dne}}.',
          'The Tenant shall hand over the flat to the Landlord, including all keys, no later than {{odevzdani}} in the condition in which they took it over, allowing for normal wear and tear. The parties shall draw up a handover report on the handover.',
          'The Tenant pays rent and advance payments for services up to the day the tenancy ends. The Landlord shall settle the service charges within the usual period.',
        ],
      },
      {
        nadpis: 'Security Deposit and Other Arrangements',
        odstavce: [
          {
            uvodVzor: 'Security deposit (tick one option):',
            moznosti: {
              odevzdani: 'The Landlord shall return the security deposit with interest to the Tenant within {{jistota_dni}} days of handover of the flat to account No. {{ucet}}, setting off any amounts the Tenant owes the Landlord under the tenancy.',
              vyuctovani: 'The Landlord shall return the security deposit with interest to the Tenant after settling the service charges for the last period to account No. {{ucet}}, setting off any amounts the Tenant owes the Landlord under the tenancy.',
              zadna: 'The Tenant did not pay a security deposit.',
            },
          },
          'Other arrangements: {{dalsi}}',
          'This agreement is executed in two counterparts, one for each party. It becomes effective upon signature by both parties.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

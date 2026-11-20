/**
 * English version: tenant’s notice to end a flat tenancy (Czech Republic). Original: src/obsah/cz/vypoved-z-najmu.ts
 * and src/sablony/cz/vypoved-najmu-najemce.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-VYPOVED-NAJEM', verze: '1.0' },

  nazev: 'Notice to End a Flat Tenancy',
  nazevA: 'the notice to end a flat tenancy',
  katalog: {
    popis: 'Tenant’s notice – open-ended and fixed-term tenancies.',
    slova: ['end tenancy', 'tenancy notice', 'notice to landlord', 'flat', 'apartment', 'moving out', 'rent', 'tenant', 'notice period', 'výpověď z nájmu', 'nájem bytu'],
  },
  landing: {
    title: 'Notice to End a Flat Tenancy Czech Republic {rok} – free PDF template',
    description:
      'Tenant’s notice to end a flat tenancy in the Czech Republic: open-ended and fixed-term leases, three-month notice period, return of deposit. Free bilingual PDF and Word.',
    perex: 'Moving out? A tenant’s notice with a three-month notice period – for an open-ended tenancy with no reason given, for a fixed-term tenancy where circumstances have changed.',
    obsahPopis: 'A tenant’s notice of termination (výpověď) under Sections 2231 and 2287 of the Czech Civil Code (občanský zákoník).',
    obsah: [
      { nazev: 'Landlord', popis: 'Who you are delivering the notice to.' },
      { nazev: 'Notice of termination', popis: 'The flat, the agreement, the type of tenancy, the reason if needed, the notice period and return of the security deposit.' },
    ],
    kroky: [
      { nazev: 'Choose the type of tenancy', popis: 'You will find it in the residential lease agreement.' },
      { nazev: 'Download and sign', popis: 'PDF or Word, free. The document is bilingual: Czech original and English translation.' },
      { nazev: 'Deliver it with proof', popis: 'By registered post with proof of delivery, or in person against a signature.' },
    ],
    online: ['The correct wording for your type of tenancy', 'Notice period explained', 'Request to return the deposit', 'Download as PDF and Word'],
    hodiSe: ['you are a tenant and want to move out', 'you have an open-ended tenancy', 'you have a fixed-term tenancy and your circumstances have changed fundamentally'],
    nehodiSe: [
      'you are the landlord – a notice to a tenant has strict requirements (reason, information on the right to have it reviewed), consult a lawyer',
      'you want to leave sooner than the notice allows – use an agreement to end the tenancy (dohoda o skončení nájmu)',
      'sublease (podnájem) – notice is given to the tenant, not the owner',
    ],
    poNadpis: 'After delivery.',
    po: [
      { nazev: 'Notice period', popis: 'Three months from the first day of the month after delivery.' },
      { nazev: 'Handing over the flat', popis: 'Agree a date and draw up a handover report (předávací protokol).' },
      { nazev: 'Deposit back', popis: 'After the tenancy ends, with interest, less any debts.' },
    ],
    faq: [
      { q: 'How long is the notice period?', a: 'Three months. It starts on the first day of the calendar month following delivery of the notice to the landlord.' },
      { q: 'Can I end a fixed-term tenancy?', a: 'Yes, if the circumstances you relied on when concluding the agreement have changed so much that you cannot reasonably be expected to continue the tenancy. State the reason in the notice.' },
      { q: 'Do I have to give a reason?', a: 'For an open-ended tenancy, no. For a fixed-term tenancy, yes – the change of circumstances.' },
      { q: 'Do you store my details?', a: 'No. The notice is put together directly in your browser.' },
    ],
    zakony:
      'The template is based on Sections 2231, 2286 and 2287 of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník), and the leaflet “Nájem bytu” (“Renting a flat”) of the Public Defender of Rights (Veřejný ochránce práv).',
    souvisejiciPopis: 'More housing documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a notice to end a flat tenancy online – Czech Republic, PDF',
    description: 'Guide in English for a tenant’s notice to end a flat tenancy in the Czech Republic. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      strany: { nazev: 'Tenant and landlord' },
      najem: { nazev: 'Tenancy' },
    },
    pole: {
      k_jmeno: { popis: 'Tenant – full name', napoveda: 'As stated in the lease agreement. If there are several tenants, list them all.', placeholder: 'e.g. Petra Svobodová' },
      k_narozeni: { popis: 'Date of birth', napoveda: 'As in your identity document.' },
      k_kontakt: { popis: 'Phone or e-mail', napoveda: 'To arrange the handover of the flat.', placeholder: 'e.g. petra@email.cz' },
      p_jmeno: { popis: 'Landlord – full name', napoveda: 'Who you are delivering the notice to.', placeholder: 'e.g. Jan Novák' },
      p_adresa: { popis: 'Landlord’s address', napoveda: 'Address for delivery (from the agreement).', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      byt: { popis: 'Flat (address and flat number)', napoveda: 'As in the lease agreement.', placeholder: 'e.g. Masarykova 1025/5, Říčany, byt č. 12' },
      smlouva_datum: { popis: 'Date of the lease agreement', napoveda: 'When you signed the agreement.' },
      doba: {
        popis: 'The tenancy is agreed',
        napoveda: 'You will find this in the agreement. A fixed-term agreement has an end date.',
        moznosti: { neurcita: 'For an indefinite period (open-ended)', urcita: 'For a fixed term' },
      },
      duvod: {
        popis: 'Change of circumstances (reason)',
        napoveda: 'What has changed since the agreement was concluded so that you cannot continue the tenancy. Be specific, ideally with a date. The text goes into the notice exactly as you write it – preferably in Czech.',
        placeholder: 'e.g. od 1. 2. 2027 nastupuji do zaměstnání v Ostravě (from 1 Feb 2027 I start a job in Ostrava)',
      },
      ucet: { popis: 'Account for return of the security deposit (optional)', napoveda: 'Where the landlord should return your deposit (kauce).', placeholder: '123456789/0100' },
      misto: { popis: 'Place (town)', napoveda: 'Where you are signing the notice.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date', napoveda: 'We have pre-filled today’s date.' },
    },
    vysvetleni: [
      'Who you are delivering the notice to.',
      'The notice itself. The notice period is 3 months from the first day of the month after delivery.',
    ],
    coDal: [
      'Deliver the notice to the landlord in a way you can prove: by registered post with proof of delivery, or in person against a signature on a copy.',
      'The notice period (3 months) starts on the first day of the month after delivery. Delivery at the end of a month = the tenancy ends a month earlier.',
      'Agree a date for handing over the flat and draw up a handover report (předávací protokol).',
      'You pay rent until the end of the notice period. The landlord returns the security deposit (jistota) to you after the tenancy ends.',
      'Want to leave sooner? Try an agreement with the landlord to end the tenancy.',
    ],
    kontrola: [
      'The notice must be in writing and must reach the landlord – delivery decides, not sending.',
      'You can end an open-ended tenancy without giving a reason; the notice period is 3 months.',
      'A fixed-term tenancy can be ended only if circumstances have changed so that you cannot reasonably be expected to continue the tenancy (e.g. a new job in another city) – describe the reason.',
      'The agreement cannot set a notice period longer than the law provides.',
      'All tenants sign (in a joint tenancy, spouses too).',
    ],
    pripominky: {
      'Konec nájmu po výpovědi (orientačně)': {
        nazev: 'End of tenancy after notice (approximate)',
        popis: 'Calculated assuming the notice is delivered on the day of signing. If it is delivered later, the end date moves.',
      },
      'Domluvit předání bytu a protokol': {
        nazev: 'Arrange the handover of the flat and the report',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of a Flat Tenancy',
    podnadpis: 'tenant’s notice of termination under Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
    podpisy: { vlevo: 'tenant', vpravo: 'received by the landlord (date and signature)' },
    clanky: [
      {
        nadpis: 'Landlord',
        odstavce: ['{{p_jmeno}}, {{p_adresa}}'],
      },
      {
        nadpis: 'Notice of termination of the flat tenancy',
        odstavce: [
          'I, {{k_jmeno}}, date of birth {{k_narozeni}}, contact {{k_kontakt}}, as the Tenant of the flat {{byt}} under the lease agreement dated {{smlouva_datum}},',
          {
            uvodVzor: 'hereby give notice of termination of the tenancy (tick one option):',
            moznosti: {
              neurcita: 'hereby give notice of termination of the tenancy agreed for an indefinite period under Section 2231 of the Civil Code.',
              urcita: 'hereby give notice of termination of the tenancy agreed for a fixed term under Section 2287 of the Civil Code, because the circumstances on which the parties evidently relied when the tenancy arose have changed, namely: {{duvod}}',
            },
          },
          'The notice period is three months and begins on the first day of the calendar month following delivery of this notice.',
          'I request that we agree a date for handing over the flat and that the security deposit, with interest, be returned after the tenancy ends to account No. {{ucet}}.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

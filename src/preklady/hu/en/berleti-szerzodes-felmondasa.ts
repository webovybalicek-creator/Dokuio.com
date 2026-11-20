/**
 * English version: tenant's notice of termination of a residential lease (Hungary). Original:
 * src/obsah/hu/berleti-szerzodes-felmondasa.ts and src/sablony/hu/berleti-szerzodes-felmondasa.ts.
 * The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-BERLET-FELMONDAS', verze: '1.0' },

  nazev: 'Notice of Termination of a Residential Lease',
  nazevA: 'the notice of termination of a residential lease',
  katalog: {
    popis: 'The tenant ends a flat rental.',
    slova: ['lease termination', 'notice to landlord', 'end a tenancy', 'notice period', 'moving out', 'flat rental', 'albérlet felmondás', 'bérleti szerződés felmondása'],
  },
  landing: {
    title: 'Flat Lease Termination Notice Hungary {rok} – free PDF template',
    description:
      'Tenant’s notice of termination of a flat lease in Hungary, in English: end date, return of the flat, deposit refund. Bilingual PDF or Word, free.',
    perex: 'Written notice to the landlord, with the date the lease ends and a request to return the deposit (óvadék).',
    obsahPopis: 'What it contains.',
    obsah: [
      { nazev: 'Lease', popis: 'Flat, date of the agreement.' },
      { nazev: 'End of the lease', popis: 'The last day of the notice period.' },
      { nazev: 'Deposit', popis: 'Bank account for the refund.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Details of the agreement.' },
      { nazev: 'Delivery', popis: 'By letter with return receipt.' },
      { nazev: 'Return of the flat', popis: 'With a handover report.' },
    ],
    online: ['Reminder of moving out', 'Download as PDF and Word', 'No sign-up'],
    hodiSe: ['as a tenant, you want to end the lease'],
    nehodiSe: ['the landlord gives notice – different rules apply'],
    po: [{ nazev: 'Delivery', popis: 'Keep the return receipt (tértivevény).' }],
    faq: [
      { q: 'How long is the notice period?', a: 'As long as the agreement says – check your own agreement.' },
      { q: 'Can I give notice on a fixed-term lease?', a: 'Only if the agreement allows it; otherwise mutual agreement is needed.' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony: 'The template is based on the Hungarian Housing Lease Act (lakásbérleti törvény) and the Civil Code (Polgári Törvénykönyv).',
    souvisejiciPopis: 'Other documents for renting, also free.',
  },
  vytvorit: {
    title: 'Flat lease termination notice online – Hungary, free PDF',
    description: 'Guide in English for a tenant’s notice of termination in Hungary, with a deposit refund request and a moving-out reminder. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      adatok: { nazev: 'Parties and lease' },
    },
    pole: {
      l_nev: { popis: 'Tenant’s name' },
      l_elerhetoseg: { popis: 'Phone or e-mail' },
      b_nev: { popis: 'Landlord’s name' },
      b_cim: { popis: 'Landlord’s address' },
      lakas_cim: { popis: 'Address of the flat' },
      szerzodes_datum: { popis: 'Date of the lease agreement' },
      megszunes: { popis: 'Day the lease ends', napoveda: 'The last day of the notice period under the agreement.' },
      ovadek_szamla: { popis: 'Bank account for the return of the deposit' },
      misto: { popis: 'Town' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Deliver it in a way you can prove: by registered letter with return receipt (tértivevényes ajánlott levél), or in person with a signature confirming receipt on the copy.',
      'Arrange the return of the flat, and draw up a handover report (jegyzőkönyv) together.',
    ],
    kontrola: [
      'Check the notice period in the agreement – the day the lease ends depends on it.',
      'A fixed-term agreement can be ended by ordinary notice only if the agreement allows it; otherwise mutual agreement is needed.',
      'Give notice in writing; every tenant signs it.',
    ],
    pripominky: {
      'A bérlet vége, a lakás visszaadása': { nazev: 'End of the lease, return of the flat' },
      'Egyeztetni a lakás visszaadását és a jegyzőkönyvet': { nazev: 'Arrange the return of the flat and the handover report' },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of a Residential Lease Agreement',
    podnadpis: 'ordinary notice of termination by the tenant',
    podpisy: { vlevo: 'tenant', vpravo: 'received by the landlord (date, signature)' },
    clanky: [
      {
        nadpis: 'Notice of Termination',
        odstavce: [
          '**To:** {{b_nev}}, {{b_cim}}',
          'I, the undersigned, **{{l_nev}}**, hereby terminate, with the notice period set out in the agreement, the residential lease agreement concluded on {{szerzodes_datum}} for the flat at {{lakas_cim}}. The lease ends on {{megszunes}}.',
          'I will return the flat vacated, together with the keys, no later than on that day. Please let us agree on the date of the return; my contact details: {{l_elerhetoseg}}.',
          'Please return the deposit, after settlement of accounts, to bank account No. {{ovadek_szamla}}.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

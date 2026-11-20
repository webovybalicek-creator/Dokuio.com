/**
 * English version: notice of termination of a tenancy agreement by the tenant (Austria).
 * Original: src/obsah/at/kuendigung-mietvertrag.ts and src/sablony/at/kuendigung-mietvertrag.ts.
 * The German text prevails; rules and glossary – PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-KUENDIGUNG-MIETE', verze: '1.0' },

  nazev: 'Tenancy Termination Notice',
  nazevA: 'notice of termination of the tenancy agreement',
  katalog: {
    popis: 'Notice by the tenant, fixed-term or open-ended tenancy.',
    slova: ['tenancy termination', 'notice of termination', 'end my tenancy', 'give notice on a flat', 'moving out', 'fixed-term tenancy', 'notice period', 'Kündigung Mietvertrag', 'Wohnung kündigen', 'MRG'],
  },
  landing: {
    title: 'Tenancy Termination Notice Austria {rok} – free PDF template',
    description:
      'Give notice on a rented flat in Austria: open-ended with one month, fixed-term after one year with three months (§ 29 MRG). Free bilingual PDF and Word.',
    perex: 'Moving out? A written notice of termination (Kündigung) for open-ended and fixed-term tenancy agreements under the Tenancy Act (Mietrechtsgesetz).',
    obsahPopis: 'Notice by the tenant under the Tenancy Act (MRG).',
    obsah: [
      { nazev: 'Landlord', popis: 'Who the notice is addressed to.' },
      { nazev: 'Notice', popis: 'Agreement, notice period, deposit (Kaution).' },
    ],
    kroky: [
      { nazev: 'Fill in', popis: 'A few questions, everything explained.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no registration.' },
      { nazev: 'Sign', popis: 'Each party receives one copy.' },
    ],
    online: ['Amounts in words added automatically', 'Reminders for your calendar', 'Download as PDF and Word'],
    hodiSe: ['you are a tenant in Austria', 'fixed-term agreement after the first year'],
    nehodiSe: ['you are the landlord – termination only through the court and for important reasons'],
    poNadpis: 'Afterwards.',
    po: [
      { nazev: 'Notice period', popis: 'Let it run until the last day of the month.' },
      { nazev: 'Handover', popis: 'With a handover report (Übergabeprotokoll).' },
      { nazev: 'Deposit', popis: 'Returned together with interest.' },
    ],
    faq: [
      { q: 'How do I terminate a fixed-term tenancy agreement?', a: 'After one year has passed, in writing with three months’ notice to the last day of a month (§ 29 Abs. 2 MRG).' },
      { q: 'And an open-ended one?', a: 'Unless agreed otherwise, with one month’s notice to the last day of a month, in writing.' },
      { q: 'Do you store my data?', a: 'No. The document is created entirely in your browser.' },
    ],
    zakony: 'The template is based on §§ 29 and 33 of the Tenancy Act (Mietrechtsgesetz, MRG).',
    souvisejiciPopis: 'More documents about housing, also free of charge.',
  },
  vytvorit: {
    title: 'Fill in a tenancy termination notice online – Austria',
    description: 'Notice by the tenant to end the tenancy of a flat in Austria. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice of termination', g: 'notice of termination', a: 'notice of termination', l: 'notice of termination' },
    kroky: {
      parteien: { nazev: 'Tenant and landlord' },
      miete: { nazev: 'Tenancy' },
    },
    pole: {
      m_name: { popis: 'Tenant – name', napoveda: 'As in the tenancy agreement; if there are several tenants, all of them.', placeholder: 'e.g. Anna Schmidt' },
      m_kontakt: { popis: 'Phone or e-mail', napoveda: 'For arranging the handover date.', placeholder: 'e.g. anna@email.de' },
      v_name: { popis: 'Landlord – name', napoveda: 'Who the notice is addressed to.', placeholder: 'e.g. Thomas Müller' },
      v_adresse: { popis: 'Landlord’s address', napoveda: 'Address for delivery.', placeholder: 'e.g. Hauptstraße 12, 10115 Berlin' },
      wohnung: { popis: 'Flat (address and location)', napoveda: 'As in the agreement.', placeholder: 'e.g. Lindenstraße 7, Berlin, 2. OG links (second floor, left)' },
      vertrag_datum: { popis: 'Date of the tenancy agreement', napoveda: 'When it was signed.' },
      art: { popis: 'The agreement is', napoveda: 'Stated in the tenancy agreement.', moznosti: { unbefristet: 'Open-ended', befristet: 'Fixed-term' } },
      iban: { popis: 'IBAN for the deposit (optional)', napoveda: 'Where the deposit (Kaution) should be returned to.', placeholder: 'DE00 0000 0000 0000 0000 00' },
      ort: { popis: 'Place', napoveda: 'Place of signing.', placeholder: 'e.g. Berlin' },
      datum: { popis: 'Date', napoveda: 'Today’s date is pre-filled.' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Sign in your own hand and deliver it in a way you can prove – by registered post or in person against confirmation.',
      'What matters is that the landlord receives it before the notice period begins.',
      'Arrange a handover date and prepare a handover report (Übergabeprotokoll).',
    ],
    kontrola: [
      'The tenant must give notice in writing (§ 33 MRG). E-mail is not enough.',
      'Open-ended agreement: unless agreed otherwise, the notice period is one month to the last day of a month.',
      'Fixed-term agreement: notice is possible at the earliest after one year has passed, with three months’ notice to the last day of a month. The notice may already be given in the first year, but the notice period only runs after that.',
      'All tenants sign.',
    ],
    pripominky: {
      'Mietende nach Kündigung (ca.)': { nazev: 'End of tenancy after notice (approx.)', popis: 'Assuming receipt on the day of signing.' },
      'Wohnungsrückgabe vereinbaren': { nazev: 'Arrange handover of the flat' },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of the Tenancy Agreement',
    podnadpis: 'notice by the tenant under the Tenancy Act (Mietrechtsgesetz, MRG)',
    podpisy: { vlevo: 'Tenant', vpravo: 'Received by the Landlord (date, signature)' },
    clanky: [
      {
        nadpis: 'Landlord',
        odstavce: ['{{v_name}}, {{v_adresse}}'],
      },
      {
        nadpis: 'Notice of termination of the tenancy agreement',
        odstavce: [
          'I, {{m_name}} (contact: {{m_kontakt}}), hereby give notice of termination of the tenancy agreement dated {{vertrag_datum}} for the flat {{wohnung}}.',
          {
            uvodVzor: 'Notice period (please tick):',
            moznosti: {
              unbefristet: 'Notice is given observing the agreed or statutory notice period of one month to the next possible last day of a month.',
              befristet: 'Notice of termination of the fixed-term tenancy agreement is given in accordance with § 29 Abs. 2 MRG, observing a notice period of three months to the next possible last day of a month.',
            },
          },
          'Please confirm in writing receipt of this notice and the end of the tenancy, and give me a date for the handover of the flat. Please transfer the deposit together with interest to the account IBAN {{iban}}.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

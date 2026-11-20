/**
 * English version: notice of termination of a tenancy by the tenant (Germany). Original: src/obsah/de/kuendigung-mietvertrag.ts
 * and src/sablony/de/kuendigung-mietvertrag.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-KUENDIGUNG-MIETE', verze: '1.0' },

  nazev: 'Notice of Termination of Tenancy',
  nazevA: 'the notice of termination of tenancy',
  katalog: {
    popis: 'Notice given by the tenant, three months’ notice period.',
    slova: ['notice of termination', 'end tenancy', 'terminate rental agreement', 'give notice on a flat', 'move out', 'notice period', 'tenant', 'deposit refund', 'Kündigung Mietvertrag', 'Wohnung kündigen'],
  },
  landing: {
    title: 'Tenancy Notice of Termination Germany {rok} – free PDF template',
    description:
      'Tenant’s notice of termination under Section 573c BGB: three months, receipt by the third working day, deposit refund. Free bilingual PDF or Word.',
    perex: 'Moving? Give written notice on your flat with three months’ notice – asking for a handover date and the return of your deposit.',
    obsahPopis: 'Notice of termination by the tenant under Section 573c of the German Civil Code (BGB).',
    obsah: [
      { nazev: 'Landlord', popis: 'Who the notice is addressed to.' },
      { nazev: 'Notice of termination', popis: 'Flat, agreement, notice period and deposit.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'A few questions, everything explained.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up.' },
      { nazev: 'Sign', popis: 'Each party receives a copy.' },
    ],
    online: ['Explanations for every field', 'Reminders for your calendar', 'Download as PDF and Word'],
    hodiSe: ['you are a tenant and are moving out', 'a tenancy agreement for an indefinite period'],
    nehodiSe: [
      'you are the landlord – grounds for termination and longer notice periods apply',
      'an agreed waiver of the right to give notice (Kündigungsverzicht) has not yet expired',
    ],
    poNadpis: 'Next steps.',
    po: [
      { nazev: 'Notice period', popis: 'Three months, receipt by the 3rd working day.' },
      { nazev: 'Handover', popis: 'With a handover report (Übergabeprotokoll).' },
      { nazev: 'Deposit', popis: 'Returned after settlement.' },
    ],
    faq: [
      {
        q: 'How long is the notice period?',
        a: 'For tenants, always three months. If the notice is received by the third working day of a month, that month counts.',
      },
      { q: 'Is an e-mail enough?', a: 'No. The notice requires written form with a handwritten signature (Section 568 BGB).' },
      { q: 'Do you store my details?', a: 'No. The document is put together only in your browser.' },
    ],
    zakony: 'The template is based on Sections 568 and 573c of the German Civil Code (Bürgerliches Gesetzbuch, BGB).',
    souvisejiciPopis: 'More documents about housing, also free.',
  },
  vytvorit: {
    title: 'Fill in a tenancy notice of termination online – Germany, PDF',
    description: 'Notice of termination of a flat tenancy by the tenant in Germany: guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · result as PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice of termination', g: 'notice of termination', a: 'notice of termination', l: 'notice of termination' },
    kroky: {
      parteien: { nazev: 'Tenant and landlord' },
      miete: { nazev: 'Tenancy' },
    },
    pole: {
      m_name: { popis: 'Tenant – name', napoveda: 'As in the tenancy agreement; if there are several tenants, all of them.', placeholder: 'e.g. Anna Schmidt' },
      m_kontakt: { popis: 'Telephone or e-mail', napoveda: 'For arranging the handover date.', placeholder: 'e.g. anna@email.de' },
      v_name: { popis: 'Landlord – name', napoveda: 'Who the notice is addressed to.', placeholder: 'e.g. Thomas Müller' },
      v_adresse: { popis: 'Landlord’s address', napoveda: 'Address for delivery.', placeholder: 'e.g. Hauptstraße 12, 10115 Berlin' },
      wohnung: {
        popis: 'Flat (address and location)',
        napoveda: 'As in the agreement.',
        placeholder: 'e.g. Lindenstraße 7, Berlin, 2. OG links (second floor, left)',
      },
      vertrag_datum: { popis: 'Date of the tenancy agreement', napoveda: 'When it was signed.' },
      iban: { popis: 'IBAN for the deposit (optional)', napoveda: 'Where the rent deposit (Mietkaution) should be returned to.', placeholder: 'DE00 0000 0000 0000 0000 00' },
      ort: { popis: 'Place', napoveda: 'Place of signing.', placeholder: 'e.g. Berlin' },
      datum: { popis: 'Date', napoveda: 'Today’s date is pre-filled.' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Sign it in your own hand – e-mail or fax is not enough (Section 568 BGB).',
      'Deliver it in a way you can prove: by registered letter with proof of delivery to the letterbox (Einwurf-Einschreiben), by messenger or in person against a confirmation of receipt.',
      'If the notice is received by the third working day of a month, that month still counts.',
      'Arrange a handover date and draw up a handover report (Übergabeprotokoll).',
    ],
    kontrola: [
      'The notice period for tenants is three months, regardless of how long the tenancy has lasted (Section 573c BGB). Longer periods to the tenant’s disadvantage are invalid.',
      'An agreed waiver of the right to give notice (Kündigungsverzicht, no more than four years) is binding – check your agreement.',
      'All tenants must sign, and the notice must be addressed to all landlords.',
      'The deposit (Kaution) must be repaid after the end of the tenancy; the landlord may take a reasonable period to check and retain part of it for the service charge statement (Nebenkostenabrechnung).',
    ],
    pripominky: {
      'Mietende nach Kündigung (ca.)': { nazev: 'End of tenancy after notice (approx.)', popis: 'Assuming the notice is received on the day of signing.' },
      'Wohnungsübergabe vereinbaren': { nazev: 'Arrange the flat handover' },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of Tenancy',
    podnadpis: 'ordinary notice of termination by the tenant under Section 573c of the German Civil Code (BGB)',
    podpisy: { vlevo: 'tenant', vpravo: 'received by landlord (date, signature)' },
    clanky: [
      { nadpis: 'Landlord', odstavce: ['{{v_name}}, {{v_adresse}}'] },
      {
        nadpis: 'Notice of Termination of the Tenancy Agreement',
        odstavce: [
          'I, {{m_name}} (contact: {{m_kontakt}}), hereby give ordinary notice, in due time, terminating the tenancy agreement dated {{vertrag_datum}} for the flat {{wohnung}} at the earliest possible date.',
          'Under Section 573c BGB, the notice period is three months. Please confirm in writing receipt of this notice and the end date of the tenancy.',
          'Please let me know a date for the handover of the flat. I ask that the deposit be transferred, after settlement, to the account IBAN {{iban}}.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: notice of termination of a residential lease by the tenant (Switzerland).
 * Original: src/obsah/ch/kuendigung-mietvertrag.ts and src/sablony/ch/kuendigung-mietvertrag.ts.
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-KUENDIGUNG-MIETE', verze: '1.0' },

  nazev: 'Tenancy Termination Notice',
  nazevA: 'the tenancy termination notice',
  katalog: {
    popis: 'Notice of termination by the tenant for the next termination date.',
    slova: ['terminate tenancy', 'end lease', 'give notice on a flat', 'moving out', 'notice period', 'replacement tenant', 'Kündigung Mietvertrag', 'Wohnung kündigen', 'Nachmieter', 'Switzerland'],
  },
  landing: {
    title: 'Tenancy Termination Notice Switzerland {rok} – free PDF template',
    description:
      'Give notice on a flat in Switzerland: in writing, three months to a local termination date (Art. 266c OR). Bilingual PDF or Word (German original + English), free.',
    perex: 'Moving out? Give written notice for the next termination date – or find a replacement tenant.',
    obsahPopis: 'Notice of termination (Kündigung) by the tenant under Art. 266c of the Swiss Code of Obligations (OR).',
    obsah: [
      { nazev: 'Landlord', popis: 'Who the notice is addressed to.' },
      { nazev: 'Termination', popis: 'Termination date, flat, deposit.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'A few questions, all explained in English.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up. The document is bilingual: German original and English translation.' },
      { nazev: 'Sign', popis: 'Each party receives one copy.' },
    ],
    online: ['Amounts in words added automatically', 'Calendar reminders', 'Download as PDF and Word'],
    hodiSe: ['you are a tenant in Switzerland and are moving out'],
    nehodiSe: [
      'you are the landlord – an official form is required',
      'moving out outside the termination dates – propose a replacement tenant (Nachmieter, Art. 264 OR)',
    ],
    poNadpis: 'Afterwards.',
    po: [
      { nazev: 'Termination date', popis: 'The notice must be received before the notice period begins.' },
      { nazev: 'Handing back the flat', popis: 'With a move-out inspection report (Abnahmeprotokoll).' },
      { nazev: 'Deposit', popis: 'Released after the flat has been handed back.' },
    ],
    faq: [
      { q: 'What notice period applies?', a: 'At least three months, to a termination date stated in the contract or customary in the locality (Art. 266c OR).' },
      { q: 'Who has to sign?', a: 'All tenants; for a family home (Familienwohnung), both spouses (Art. 266m OR).' },
      { q: 'Do you store my data?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 264, 266c, 266l and 266m of the Swiss Code of Obligations (Obligationenrecht, OR).',
    souvisejiciPopis: 'More documents on housing, also free.',
  },
  vytvorit: {
    title: 'Tenancy Termination Notice – Switzerland, fill in online',
    description: 'Notice of termination of a residential lease by the tenant in Switzerland, explained in English. Bilingual PDF or Word, free.',
    podnadpis: 'Free · result as PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      parteien: { nazev: 'Tenant and landlord' },
      miete: { nazev: 'Tenancy' },
    },
    pole: {
      m_name: { popis: 'Tenant – name', napoveda: 'As in the tenancy agreement; if there are several tenants, all of them.', placeholder: 'e.g. Anna Schmidt' },
      m_kontakt: { popis: 'Phone or e-mail', napoveda: 'For arranging the handover appointment.', placeholder: 'e.g. anna@email.ch' },
      v_name: { popis: 'Landlord – name', napoveda: 'Who the notice is addressed to.', placeholder: 'e.g. Thomas Müller' },
      v_adresse: { popis: 'Landlord’s address', napoveda: 'Address for delivery.', placeholder: 'e.g. Bahnhofstrasse 12, 8001 Zürich' },
      wohnung: { popis: 'Flat (address and location)', napoveda: 'As in the contract.', placeholder: 'e.g. Lindenstrasse 7, 8004 Zürich, 2. OG links (2nd floor left)' },
      vertrag_datum: { popis: 'Date of the tenancy agreement', napoveda: 'When it was signed.' },
      termin: { popis: 'Termination date (end of tenancy)', napoveda: 'Date under the contract or customary in the locality, at least three months after receipt.' },
      iban: { popis: 'IBAN for the deposit (optional)', napoveda: 'Where the deposit should be returned to.', placeholder: 'CH00 0000 0000 0000 0000 0' },
      ort: { popis: 'Place', napoveda: 'Place of signing.', placeholder: 'e.g. Zürich' },
      datum: { popis: 'Date', napoveda: 'Today’s date is pre-filled.' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Sign by hand and send by registered post (Einschreiben) – what counts is receipt by the landlord before the notice period begins.',
      'For a family home, both spouses or registered partners must sign.',
      'Arrange a handover date, clean the flat and draw up a move-out inspection report (Abnahmeprotokoll).',
    ],
    kontrola: [
      'Notice in writing with a handwritten signature (Art. 266l OR).',
      'Notice period of at least three months, to a termination date stated in the contract or customary in the locality (Art. 266c OR). Check your tenancy agreement.',
      'Family home: both spouses must sign (Art. 266m OR).',
      'Moving out outside the termination dates: if you propose a reasonable, solvent replacement tenant (Nachmieter), you are released from your obligations (Art. 264 OR).',
    ],
    pripominky: {
      Mietende: { nazev: 'End of tenancy' },
      'Wohnungsabgabe vereinbaren': { nazev: 'Arrange handover of the flat' },
    },
  },

  dokument: {
    nazev: 'Termination of the Tenancy Agreement',
    podnadpis: 'Notice of termination by the Tenant under Art. 266c of the Swiss Code of Obligations (OR)',
    podpisy: { vlevo: 'Tenant', vpravo: 'received by the Landlord (date, signature)' },
    clanky: [
      {
        nadpis: 'Landlord',
        odstavce: ['{{v_name}}, {{v_adresse}}'],
      },
      {
        nadpis: 'Termination of the Tenancy Agreement',
        odstavce: [
          'I, {{m_name}} (contact: {{m_kontakt}}), hereby terminate the tenancy agreement dated {{vertrag_datum}} for the flat {{wohnung}}, observing the three-month notice period, effective {{termin}}, or alternatively on the next possible termination date.',
          'Please confirm receipt of this notice of termination in writing and give me a date for handing back the flat.',
          'Please release the rent deposit after the handover or transfer it to the account IBAN {{iban}}.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

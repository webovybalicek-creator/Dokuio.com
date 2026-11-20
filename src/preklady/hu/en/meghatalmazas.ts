/**
 * English version: power of attorney (Hungary). Original: src/obsah/hu/meghatalmazas.ts
 * and src/sablony/hu/meghatalmazas.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-MEGHATALMAZAS', verze: '1.0' },

  nazev: 'Power of Attorney',
  nazevA: 'the power of attorney',
  katalog: {
    popis: 'When someone else handles something on your behalf.',
    slova: ['power of attorney', 'authorisation letter', 'general power of attorney', 'representation', 'collect a parcel on my behalf', 'meghatalmazás', 'meghatalmazás posta'],
  },
  landing: {
    title: 'Power of Attorney Hungary {rok} – free PDF template',
    description:
      'Power of attorney for Hungary, in English: post office, authority, parcel collection or another matter, with optional validity. Bilingual PDF or Word, free.',
    perex: 'A simple power of attorney for handling one specific matter. Offices readily accept a precisely described matter.',
    obsahPopis: 'What it contains.',
    obsah: [
      { nazev: 'Parties', popis: 'Principal and attorney.' },
      { nazev: 'Matter', popis: 'What the attorney may handle.' },
      { nazev: 'Validity', popis: 'Until a set date or until revoked.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Parties and the matter.' },
      { nazev: 'Signing', popis: 'With a pen on the original.' },
      { nazev: 'Handover', popis: 'The attorney takes it along.' },
    ],
    online: ['Download as PDF and Word', 'No sign-up', 'Signing on screen'],
    hodiSe: ['postal items, official matters, collection'],
    nehodiSe: ['real estate or company matters – these require a lawyer’s countersignature (ügyvédi ellenjegyzés) or a notarial deed'],
    po: [{ nazev: 'Ask in advance', popis: 'Some offices ask for witnesses or their own form.' }],
    faq: [
      {
        q: 'Is a witness needed?',
        a: 'Usually not, but with the signatures of two witnesses it becomes a private document with full probative force (teljes bizonyító erejű magánokirat), which many offices ask for.',
      },
      { q: 'Can I revoke it?', a: 'Yes, a power of attorney can be revoked at any time.' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony: 'The template is based on the rules on representation in the Hungarian Civil Code (Polgári Törvénykönyv).',
    souvisejiciPopis: 'Other everyday documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a power of attorney online – Hungary, PDF and Word',
    description: 'Guide in English for a power of attorney (meghatalmazás) in Hungary for one specific matter, with optional validity. Bilingual PDF or Word, free, no sign-up.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'power of attorney', g: 'power of attorney', a: 'power of attorney', l: 'power of attorney' },
    kroky: {
      szemelyek: { nazev: 'Who authorises whom' },
      ugy: { nazev: 'What it covers' },
    },
    pole: {
      m_jmeno: { popis: 'Principal’s name' },
      m_szul: { popis: 'Place and date of birth' },
      m_anyja: { popis: 'Mother’s name' },
      m_adresa: { popis: 'Address' },
      z_jmeno: { popis: 'Attorney’s name' },
      z_szul: { popis: 'Place and date of birth' },
      z_anyja: { popis: 'Mother’s name' },
      z_adresa: { popis: 'Address' },
      ugy: {
        popis: 'Description of the matter',
        placeholder: 'e.g. a nevemre érkezett ajánlott küldemény átvétele a postán (collecting a registered item addressed to me at the post office)',
      },
      ervenyes: { popis: 'Valid until (optional)' },
      misto: { popis: 'Town' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Print it and sign it. Take an original copy to an authority or a bank.',
      'Ask in advance whether the office requires witnesses or a notarial deed.',
    ],
    kontrola: [
      'Describe the matter specifically – offices often do not accept an overly general power of attorney.',
      'With the signatures of two witnesses (stating their names and addresses), the document becomes a private document with full probative force (teljes bizonyító erejű magánokirat). A party to the agreement cannot be a witness.',
      'Real estate matters and some banking matters require a lawyer’s countersignature (ügyvédi ellenjegyzés) or a notarial deed.',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
    ],
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'under the rules on representation of the Hungarian Civil Code (Polgári Törvénykönyv)',
    podpisy: { vlevo: 'principal', vpravo: 'attorney (I accept)' },
    clanky: [
      {
        nadpis: 'Power of Attorney',
        odstavce: [
          'I, the undersigned **{{m_jmeno}}** (place and date of birth: {{m_szul}}, mother’s name: {{m_anyja}}, address: {{m_adresa}}), hereby authorise',
          '**{{z_jmeno}}** (place and date of birth: {{z_szul}}, mother’s name: {{z_anyja}}, address: {{z_adresa}}) as my attorney to act in my place and on my behalf in the following matter:',
          '{{ugy}}',
          'The attorney is entitled to make statements and to sign and receive documents in this matter. This power of attorney is valid until {{ervenyes}} or until revoked.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

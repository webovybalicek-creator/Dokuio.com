/**
 * English version: declaration (Switzerland). Original: src/obsah/ch/erklaerung.ts
 * and src/sablony/ch/erklaerung.ts (composed from the German template via nahrad + schweiz). The German text prevails.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-ERKLAERUNG', verze: '1.1' },

  nazev: 'Declaration',
  nazevA: 'the declaration',
  katalog: {
    popis: 'Written declaration for a school, bank or landlord.',
    slova: ['declaration', 'written declaration', 'written statement', 'confirmation', 'proof of residence', 'self-declaration', 'Erklärung', 'Bestätigung', 'Selbsterklärung'],
  },
  landing: {
    title: 'Declaration Switzerland {rok} – free PDF template',
    description:
      'Written declaration by a private individual in Switzerland, explained in English: who declares, for whom and what. Free bilingual PDF or Word.',
    perex: 'When a school, bank or landlord wants a written declaration from you. Enter who you are and what you declare – done.',
    obsahPopis: 'One page.',
    obsah: [
      { nazev: 'Person making the declaration', popis: 'Name, date of birth, address.' },
      { nazev: 'Declaration', popis: 'For whom, purpose, text and confirmation that it is true.' },
    ],
    kroky: [
      { nazev: 'Details', popis: 'Who is making the declaration.' },
      { nazev: 'Text', popis: 'Specific and true.' },
      { nazev: 'Signature', popis: 'In your own hand.' },
    ],
    online: [
      'Opening sentence added automatically',
      'Tips on wording',
      'Download as PDF and Word',
      'Blank template for printing',
    ],
    hodiSe: [
      'a school, club or landlord asks for a declaration',
      'confirmation of a place of residence or of a fact',
    ],
    nehodiSe: [
      'an authority requires a specific form – use their form',
      'the organisation has its own form',
    ],
    po: [
      { nazev: 'Sign', popis: 'In your own hand.' },
      { nazev: 'Certification?', popis: 'Only if required – then sign in front of the authority or a notary.' },
    ],
    faq: [
      { q: 'Does the signature have to be certified?', a: 'Only if the organisation receiving the declaration expressly requires it.' },
      { q: 'Do you store my details?', a: 'No. The document is put together directly in your browser.' },
    ],
    zakony: 'General private declaration (Erklärung); the law prescribes no particular form.',
    souvisejiciPopis: 'More templates for everyday life.',
  },
  vytvorit: {
    title: 'Fill in a declaration online (Switzerland) – free PDF',
    description: 'Create a written declaration for Switzerland online, with explanations in English. Free as a bilingual PDF or Word.',
    podnadpis: 'Free · PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'declaration', g: 'declaration', a: 'declaration', l: 'declaration' },
    kroky: {
      person: { nazev: 'Who is making the declaration' },
      inhalt: { nazev: 'Content' },
    },
    pole: {
      name: { popis: 'First name and surname', placeholder: 'e.g. Erika Musterfrau' },
      geburt: { popis: 'Date of birth' },
      adresse: { popis: 'Address', placeholder: 'e.g. Bahnhofstrasse 10, 8001 Zürich' },
      fuer: { popis: 'For whom (optional)', placeholder: 'e.g. Schule, Bank, Vermieter (school, bank, landlord)' },
      zweck: { popis: 'Purpose (optional)', placeholder: 'e.g. Antrag auf Schulbefreiung (application for exemption from school)' },
      text: {
        popis: 'Text of the declaration',
        napoveda: 'Start directly with “dass …” (German for “that …”). We add the opening sentence. Write the text in German – it will appear in both language versions exactly as you write it.',
        placeholder: 'dass ich seit dem 1. 1. 2025 in der Wohnung Bahnhofstrasse 10 in Zürich wohne. (that I have lived in the flat at Bahnhofstrasse 10 in Zürich since 1 January 2025.)',
      },
      misto: { popis: 'Place', placeholder: 'e.g. Zürich' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Print it and sign it in your own hand.',
      'If the organisation requires a publicly certified signature, sign only in front of the authority or the notary.',
      'Keep a copy for your records.',
    ],
    kontrola: [
      'Only declare what is true and what you know for certain. False statements to authorities, banks or landlords can have civil and criminal consequences.',
      'If an authority or a court requires a specific form, use their form.',
      'First ask whether the organisation has its own form – if so, use it.',
      'Be specific: who, what, since when (e.g. “dass ich seit dem 1. 1. 2025 in der Wohnung … wohne” – “that I have lived in the flat … since 1 January 2025”).',
      'Sign it by hand and keep a copy for your records. If the recipient requires a certified signature, sign only at the certification office (notary’s office, or the municipality – Gemeinde – depending on the canton).',
    ],
  },

  dokument: {
    nazev: 'Declaration',
    podnadpis: 'written declaration by a private individual',
    podpisy: { vlevo: 'signature', vpravo: 'certification (only if required)' },
    clanky: [
      {
        nadpis: 'Person Making the Declaration',
        odstavce: ['{{name}}, born on {{geburt}}, residing at {{adresse}}'],
      },
      {
        nadpis: 'Declaration',
        odstavce: [
          'For: {{fuer}}. Purpose: {{zweck}}.',
          'I hereby declare {{text}}',
          'I confirm that my statements are true and complete.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

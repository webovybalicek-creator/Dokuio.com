/**
 * English version: written declaration (Austria). Original: src/obsah/at/erklaerung.ts
 * and src/sablony/at/erklaerung.ts. The German text prevails; rules and glossary – PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-ERKLAERUNG', verze: '1.0' },

  nazev: 'Declaration',
  nazevA: 'declaration',
  katalog: {
    popis: 'Written declaration for a school, bank or landlord.',
    slova: ['declaration', 'written declaration', 'statement', 'self-declaration', 'confirmation', 'declaration template', 'Erklärung', 'ehrenwörtliche Erklärung', 'Bestätigung'],
  },
  landing: {
    title: 'Declaration Austria {rok} – free PDF template',
    description:
      'Written declaration by a private person in Austria: who declares, for whom and what. Fill it in online with English guidance and download a free bilingual PDF or Word.',
    perex: 'When a school, bank or landlord wants a written declaration (Erklärung) from you. Enter who you are and what you declare – done.',
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
    online: ['Introduction added automatically', 'Tips on wording', 'Download as PDF and Word', 'Blank template to print'],
    hodiSe: ['a school, club (Verein) or landlord asks for a declaration', 'confirming a place of residence or a fact'],
    nehodiSe: ['an authority requires a specific form – use its form', 'the recipient has its own form'],
    po: [
      { nazev: 'Sign', popis: 'In your own hand.' },
      { nazev: 'Certification?', popis: 'Only if required – then sign in front of the authority or a notary.' },
    ],
    faq: [
      { q: 'Does the signature have to be certified?', a: 'Only if the recipient expressly requires it.' },
      { q: 'Do you store my data?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'General private declaration; no special form is prescribed by law.',
    souvisejiciPopis: 'More templates for everyday life.',
  },
  vytvorit: {
    title: 'Fill in a declaration online – Austria, free PDF',
    description: 'Written declaration for Austria with English guidance. Free as a bilingual PDF or Word file.',
    podnadpis: 'Free · PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'declaration', g: 'declaration', a: 'declaration', l: 'declaration' },
    kroky: {
      person: { nazev: 'Who is declaring' },
      inhalt: { nazev: 'Content' },
    },
    pole: {
      name: { popis: 'First and last name', placeholder: 'e.g. Erika Musterfrau' },
      geburt: { popis: 'Date of birth' },
      adresse: { popis: 'Address', placeholder: 'e.g. Mariahilfer Straße 10, 1060 Wien' },
      fuer: { popis: 'For whom (optional)', placeholder: 'e.g. Schule, Bank, Vermieter (school, bank, landlord)' },
      zweck: { popis: 'Purpose (optional)', placeholder: 'e.g. Antrag auf Schulbefreiung (application for exemption from school)' },
      text: {
        popis: 'Text of the declaration',
        napoveda: 'Start straight with “dass …” (“that …”). We add the introduction. Write in German – the text goes into both language versions exactly as you write it.',
        placeholder: 'dass ich seit dem 1. 1. 2025 in der Wohnung Mariahilfer Straße 10 in Wien wohne. (that I have lived in the flat … since 1 Jan 2025)',
      },
      misto: { popis: 'Place', placeholder: 'e.g. Wien' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Print it and sign it in your own hand.',
      'If the recipient requires an official certification of the signature (öffentliche Beglaubigung), sign only in front of the authority or a notary.',
      'Keep a copy for your records.',
    ],
    kontrola: [
      'Only declare what is true and what you know for certain. False statements to authorities, banks or landlords can have civil and criminal consequences.',
      'If an authority or a court requires a specific form (e.g. a declaration made before the authority), use its form.',
      'First ask whether the recipient has its own form – if so, use it.',
      'Be specific: who, what, since when (e.g. “that I have lived in the flat … since 1 Jan 2025”).',
      'Check the other party’s identity against their identity card and copy their name and address exactly.',
    ],
  },

  dokument: {
    nazev: 'Declaration',
    podnadpis: 'written declaration by a private person',
    podpisy: { vlevo: 'Signature', vpravo: 'Certification (only if required)' },
    clanky: [
      {
        nadpis: 'Person making the declaration',
        odstavce: ['{{name}}, born {{geburt}}, residing at {{adresse}}'],
      },
      {
        nadpis: 'Declaration',
        odstavce: [
          'For: {{fuer}}. Purpose: {{zweck}}.',
          'I hereby declare {{text}}',
          'I affirm that my statements are true and complete.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

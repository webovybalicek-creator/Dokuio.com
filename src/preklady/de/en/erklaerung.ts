/**
 * English version: written declaration by a private individual (Germany). Original: src/obsah/de/erklaerung.ts
 * and src/sablony/de/erklaerung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-ERKLAERUNG', verze: '1.1' },

  nazev: 'Declaration',
  nazevA: 'the declaration',
  katalog: {
    popis: 'A written declaration for a school, bank or landlord.',
    slova: ['declaration', 'written declaration', 'declaration on honour', 'statement', 'confirmation', 'self-declaration', 'Erklärung', 'ehrenwörtliche Erklärung', 'Bestätigung'],
  },
  landing: {
    title: 'Written Declaration Germany {rok} – free PDF template',
    description:
      'Written declaration for Germany, explained in English: who declares, for whom and what. Fill it in online, free bilingual PDF or Word. Not a statutory declaration.',
    perex: 'For when a school, bank or landlord wants a written declaration (Erklärung) from you. You enter who you are and what you declare – done.',
    obsahPopis: 'One page.',
    obsah: [
      { nazev: 'Declaring person', popis: 'Name, date of birth, address.' },
      { nazev: 'Declaration', popis: 'For whom, purpose, text and confirmation that it is true.' },
    ],
    kroky: [
      { nazev: 'Details', popis: 'Who is declaring.' },
      { nazev: 'Text', popis: 'Specific and true.' },
      { nazev: 'Signature', popis: 'In your own hand.' },
    ],
    online: ['Introduction added automatically', 'Tips on wording', 'Download as PDF and Word', 'Blank template to print'],
    hodiSe: ['a school, club or landlord asks for a declaration', 'confirming a residence or a fact'],
    nehodiSe: [
      'an authority requires a statutory declaration in lieu of an oath (eidesstattliche Versicherung) – use its form',
      'the body has its own form',
    ],
    po: [
      { nazev: 'Sign', popis: 'In your own hand.' },
      { nazev: 'Certification?', popis: 'Only if required – then sign in front of the authority or a notary.' },
    ],
    faq: [
      {
        q: 'Is this a statutory declaration in lieu of an oath (eidesstattliche Versicherung)?',
        a: 'No. A declaration in lieu of an oath (Versicherung an Eides statt) can only be made before an authority competent for it or a court. This template is a private written declaration.',
      },
      { q: 'Does the signature have to be certified?', a: 'Only if the receiving body expressly requires it.' },
      { q: 'Do you store my details?', a: 'No. The document is put together directly in your browser.' },
    ],
    zakony: 'General private declaration; no particular statutory form is prescribed.',
    souvisejiciPopis: 'More templates for everyday life.',
  },
  vytvorit: {
    title: 'Fill in a written declaration online – Germany, free PDF',
    description: 'Written declaration by a private individual in Germany: guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'declaration', g: 'declaration', a: 'declaration', l: 'declaration' },
    kroky: {
      person: { nazev: 'Who is declaring' },
      inhalt: { nazev: 'Content' },
    },
    pole: {
      name: { popis: 'First name and surname', placeholder: 'e.g. Erika Musterfrau' },
      geburt: { popis: 'Date of birth' },
      adresse: { popis: 'Address', placeholder: 'e.g. Lindenstraße 5, 10115 Berlin' },
      fuer: { popis: 'For whom (optional)', placeholder: 'e.g. Schule, Bank, Vermieter (school, bank, landlord)' },
      zweck: { popis: 'Purpose (optional)', placeholder: 'e.g. Antrag auf Schulbefreiung (application for exemption from school)' },
      text: {
        popis: 'Text of the declaration',
        napoveda: 'Start directly with “dass …” (German for “that …”). We add the introduction. Write it in German – the text goes into the document.',
        placeholder: 'dass ich seit dem 1. 1. 2025 in der Wohnung Lindenstraße 5 in Berlin wohne. (that I have lived in the flat at Lindenstraße 5 in Berlin since 1. 1. 2025.)',
      },
      misto: { popis: 'Place', placeholder: 'e.g. Berlin' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Print it out and sign it in your own hand.',
      'If the body requires a public certification of the signature (öffentliche Beglaubigung), only sign in front of the authority or the notary.',
      'Keep a copy for your records.',
    ],
    kontrola: [
      'Only declare what is true and what you know for certain. False statements to authorities, banks or landlords can have civil and criminal consequences.',
      'This is not a statutory declaration in lieu of an oath (eidesstattliche Versicherung). If an authority or a court requires a declaration in lieu of an oath (Versicherung an Eides statt), use its form.',
      'First ask whether the body has its own form – if so, use it.',
      'Be specific: who, what, since when (e.g. “that I have lived in the flat … since 1. 1. 2025”).',
      'Sign it by hand and keep a copy for your records. If the recipient requires a certified signature, sign only in front of the notary (Notar).',
    ],
  },

  dokument: {
    nazev: 'Declaration',
    podnadpis: 'written declaration by a private individual',
    podpisy: { vlevo: 'signature', vpravo: 'certification (only if required)' },
    clanky: [
      { nadpis: 'Declaring Person', odstavce: ['{{name}}, born on {{geburt}}, residing at {{adresse}}'] },
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

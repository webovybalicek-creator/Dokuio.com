/**
 * English version: written declaration (Hungary). Original: src/obsah/hu/nyilatkozat.ts
 * and src/sablony/hu/nyilatkozat.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-NYILATKOZAT', verze: '1.1' },

  nazev: 'Written Declaration',
  nazevA: 'the written declaration',
  katalog: {
    popis: 'A written declaration for a school, a bank or a landlord.',
    slova: ['declaration', 'written declaration', 'statement', 'declaration of address', 'school', 'bank', 'nyilatkozat', 'nyilatkozat minta', 'lakcím nyilatkozat'],
  },
  landing: {
    title: 'Written Declaration Hungary {rok} – free PDF template',
    description:
      'General written declaration (nyilatkozat) for Hungary: who declares, to whom and what. Fill it in online, free bilingual PDF or Word. Witnesses give full probative force.',
    perex: 'For when a school, a bank or a landlord asks for a written declaration. Enter who you are and what you declare – done.',
    obsahPopis: 'One page.',
    obsah: [
      { nazev: 'Declarant', popis: 'Name, date of birth, home address.' },
      { nazev: 'Declaration', popis: 'To whom, purpose, text and confirmation that it is true.' },
    ],
    kroky: [
      { nazev: 'Details', popis: 'Who is making the declaration.' },
      { nazev: 'Text', popis: 'Specific and truthful.' },
      { nazev: 'Signature', popis: 'By hand, with witnesses if needed.' },
    ],
    online: ['The introduction is added automatically', 'Tips on wording', 'Download as PDF and Word', 'Blank template for printing'],
    hodiSe: ['a school or a bank asks for a declaration', 'confirming your address or another fact'],
    nehodiSe: ['the institution has its own form – use that', 'an official certificate is required'],
    po: [
      { nazev: 'Signature', popis: 'By hand.' },
      { nazev: 'Witnesses', popis: 'With two witnesses it has full probative force.' },
    ],
    faq: [
      {
        q: 'Do I need a witness?',
        a: 'It is not compulsory, but with the signatures of two witnesses (name, home address) the declaration becomes a private document with full probative force (teljes bizonyító erejű magánokirat, Pp. 325. §).',
      },
      { q: 'Do you store my details?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'The template takes into account section 325 of the Hungarian Code of Civil Procedure (polgári perrendtartás, 2016. évi CXXX. törvény).',
    souvisejiciPopis: 'More everyday documents.',
  },
  vytvorit: {
    title: 'Fill in a written declaration online – Hungary, free PDF',
    description: 'Guide in English for a written declaration (nyilatkozat) in Hungary for a school, bank or landlord. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'declaration', g: 'declaration', a: 'declaration', l: 'declaration' },
    kroky: {
      szemely: { nazev: 'The declarant' },
      tartalom: { nazev: 'Content' },
    },
    pole: {
      jmeno: { popis: 'Name', placeholder: 'e.g. Kovács Anna' },
      narozeni: { popis: 'Date of birth' },
      adresa: { popis: 'Home address', placeholder: 'e.g. 1052 Budapest, Váci utca 10.' },
      pro: { popis: 'To whom (optional)', placeholder: 'e.g. iskola, bank, bérbeadó (school, bank, landlord)' },
      ucel: { popis: 'Purpose (optional)' },
      text: {
        popis: 'Text of the declaration',
        napoveda: 'Write it in Hungarian and start with „hogy …” (“that …”). We write the introduction. The text goes into both language versions exactly as you write it.',
        placeholder: 'hogy 2025. január 1. óta a 1052 Budapest, Váci utca 10. szám alatt lakom. (that I have lived at 1052 Budapest, Váci utca 10. since 1 January 2025.)',
      },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Print it and sign it by hand.',
      'If the recipient asks for witnesses or certification, sign in front of witnesses or at a notary (közjegyző).',
      'Keep a copy.',
    ],
    kontrola: [
      'Write only true information. A false declaration may have legal consequences.',
      'First ask whether the institution has its own form – if so, use that.',
      'Be specific: who, what, since when.',
      'With the signatures of two witnesses (stating their names and home addresses), the document becomes a private document with full probative force (teljes bizonyító erejű magánokirat) – in a dispute this is stronger evidence. The person making the declaration cannot be a witness.',
    ],
  },

  dokument: {
    nazev: 'Declaration',
    podnadpis: 'written declaration of a private individual',
    podpisy: { vlevo: 'declarant', vpravo: 'witness (name, home address, signature – if required)' },
    clanky: [
      { nadpis: 'Declarant', odstavce: ['{{jmeno}}, date of birth: {{narozeni}}, home address: {{adresa}}'] },
      {
        nadpis: 'Declaration',
        odstavce: [
          'Addressee: {{pro}}. Purpose: {{ucel}}.',
          'I, the undersigned, declare {{text}}',
          'I declare that the above information is true and complete.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

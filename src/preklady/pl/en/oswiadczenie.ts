/**
 * English version: declaration (Poland). Original: src/obsah/pl/oswiadczenie.ts and src/sablony/pl/oswiadczenie.ts.
 * The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-OSWIADCZENIE', verze: '1.0' },

  nazev: 'Declaration',
  nazevA: 'the declaration',
  katalog: {
    popis: 'A written declaration for a school, an office or a bank.',
    slova: ['declaration', 'declaration template', 'statement', 'proof of residence', 'declaration of residence', 'office', 'school', 'oświadczenie', 'wzór oświadczenia'],
  },
  landing: {
    title: 'Declaration (Oświadczenie) Poland {rok} – free PDF template',
    description:
      'General declaration (oświadczenie) for Poland: who makes it, for whom and what it states. Fill it in online and download a bilingual PDF or Word for free.',
    perex: 'When a school, an office, a bank or a landlord asks for a written declaration. Enter who you are and what you declare – done.',
    obsahPopis: 'One page.',
    obsah: [
      { nazev: 'Person making the declaration', popis: 'First name and surname, date of birth, address.' },
      { nazev: 'Declaration', popis: 'For whom, purpose, content and confirmation that it is true.' },
    ],
    kroky: [
      { nazev: 'Details', popis: 'Who is making it.' },
      { nazev: 'Content', popis: 'Specific and truthful.' },
      { nazev: 'Signature', popis: 'By hand.' },
    ],
    online: ['The opening wording is added automatically', 'Tips for the content', 'Download as PDF and Word', 'Blank template for printing'],
    hodiSe: ['a school or an office asks you for a declaration', 'you are confirming your place of residence or another fact'],
    nehodiSe: [
      'the institution has its own form – use it',
      'the law requires a declaration made under penalty of criminal liability – use a form with the relevant warning',
    ],
    po: [
      { nazev: 'Signature', popis: 'By hand.' },
      { nazev: 'Certification?', popis: 'Only when required – at a notary or at an office.' },
    ],
    faq: [
      { q: 'Does the signature have to be certified?', a: 'Only if the recipient expressly requires it.' },
      {
        q: 'What are the consequences of a false declaration?',
        a: 'It may have legal consequences; if the law requires a declaration under penalty of criminal liability, criminal consequences as well.',
      },
      { q: 'Do you save my details?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'Polish law does not provide a general model form for a declaration.',
    souvisejiciPopis: 'Other everyday documents.',
  },
  vytvorit: {
    title: 'Fill in a declaration online – Poland, free PDF',
    description: 'Guide in English for a declaration (oświadczenie) in Poland. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'declaration', g: 'declaration', a: 'declaration', l: 'declaration' },
    kroky: {
      osoba: { nazev: 'Who is making the declaration' },
      tresc: { nazev: 'Content' },
    },
    pole: {
      jmeno: { popis: 'First name and surname', placeholder: 'e.g. Anna Kowalska' },
      narozeni: { popis: 'Date of birth' },
      adresa: { popis: 'Residential address', placeholder: 'e.g. ul. Długa 12, 00-001 Warszawa' },
      pro: { popis: 'For whom (optional)', placeholder: 'e.g. Szkoła Podstawowa nr 5 (Primary School No. 5)' },
      ucel: { popis: 'Purpose (optional)' },
      text: {
        popis: 'Content of the declaration',
        napoveda: 'Write in Polish and start with “że …” (“that …”). We add the opening wording ourselves.',
        placeholder: 'że od 1 stycznia 2025 r. mieszkam pod adresem ul. Długa 12 w Warszawie. (that since 1 January 2025 I have lived at …)',
      },
      misto: { popis: 'Town' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Print it and sign it by hand.',
      'If the institution requires a certified signature, only sign in front of a notary or at the office.',
      'Keep a copy.',
    ],
    kontrola: [
      'Only write what is true. A false declaration may have legal consequences, and where the law provides for a declaration under penalty of criminal liability, criminal consequences as well.',
      'First check whether the institution has its own form (e.g. with a warning about criminal liability) – if so, use it.',
      'Be specific: who, what, since when.',
      'A certified signature is only needed if the recipient requires it.',
    ],
  },

  dokument: {
    nazev: 'Declaration',
    podnadpis: 'written declaration of a natural person (oświadczenie)',
    podpisy: { vlevo: 'signature of the person making the declaration', vpravo: 'certification of signature (only if required)' },
    clanky: [
      { nadpis: 'Person Making the Declaration', odstavce: ['{{jmeno}}, date of birth {{narozeni}}, residing at: {{adresa}}'] },
      {
        nadpis: 'Declaration',
        odstavce: [
          'For: {{pro}}. Purpose: {{ucel}}.',
          'I, the undersigned, declare {{text}}',
          'I declare that the above information is true and complete.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

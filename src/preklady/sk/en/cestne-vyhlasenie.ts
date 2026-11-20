/**
 * English version: declaration on honour (Slovakia). Original: src/obsah/sk/cestne-vyhlasenie.ts
 * and src/sablony/sk/cestne-vyhlasenie.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-CESTNE-VYHLASENIE', verze: '1.0' },

  nazev: 'Declaration on Honour',
  nazevA: 'the declaration on honour',
  katalog: {
    popis: 'A written declaration for an authority, school or bank.',
    slova: ['declaration on honour', 'solemn declaration', 'statement', 'written declaration', 'authority', 'no debts', 'template', 'čestné vyhlásenie', 'vyhlásenie'],
  },
  landing: {
    title: 'Declaration on Honour Slovakia {rok} – free PDF template',
    description:
      'A universal declaration on honour (čestné vyhlásenie) for Slovakia, explained in English: fill it in online and download a bilingual PDF or Word for free.',
    perex: 'When an authority, school, bank or landlord asks you for a declaration on honour (čestné vyhlásenie). You fill in who you are and what you declare.',
    obsahPopis: 'A simple one-page document.',
    obsah: [
      { nazev: 'Declarant', popis: 'Name, date of birth, address.' },
      { nazev: 'Declaration', popis: 'For whom, purpose, text and confirmation that it is true.' },
    ],
    kroky: [
      { nazev: 'Fill in your details', popis: 'Who is making the declaration.' },
      { nazev: 'Write the declaration', popis: 'Specifically and truthfully.' },
      { nazev: 'Sign it', popis: 'In your own hand.' },
    ],
    online: [
      'The opening wording is added automatically',
      'Tips on wording',
      'Download as PDF and as Word',
      'Blank template to fill in by hand',
    ],
    hodiSe: [
      'an authority or school asks for a declaration on honour',
      'you are confirming your residence or that you have no debts',
    ],
    nehodiSe: [
      'the institution has its own form – use that one',
      'the law requires an official document (e.g. an extract from the criminal record – výpis z registra trestov)',
    ],
    po: [
      { nazev: 'Signature', popis: 'In your own hand.' },
      { nazev: 'Certification, if required', popis: 'Civil registry office (matrika), municipal office (obecný úrad) or a notary.' },
    ],
    faq: [
      { q: 'Does the signature have to be certified?', a: 'Only if the recipient expressly requires it. In that case you sign only in front of the official or notary.' },
      { q: 'What if I declare something untrue?', a: 'A false declaration on honour can have legal consequences – from a minor offence (priestupok) up to a criminal offence in serious cases.' },
      { q: 'Do you store my details?', a: 'No. The document is put together directly in your browser.' },
    ],
    zakony: 'The law does not prescribe a general template for a declaration on honour.',
    souvisejiciPopis: 'Other everyday documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a declaration on honour online – Slovakia, PDF',
    description: 'Guide in English for a declaration on honour in Slovakia. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'declaration', g: 'declaration', a: 'declaration', l: 'declaration' },
    kroky: {
      osoba: { nazev: 'Who is declaring' },
      obsah: { nazev: 'What you declare' },
    },
    pole: {
      jmeno: { popis: 'Full name', placeholder: 'e.g. Jana Kováčová' },
      narozeni: { popis: 'Date of birth' },
      adresa: { popis: 'Permanent address', placeholder: 'e.g. Hlavná 12, 811 01 Bratislava' },
      pro: { popis: 'For whom (optional)', placeholder: 'e.g. Mestský úrad Senec' },
      ucel: { popis: 'Purpose (optional)' },
      text: {
        popis: 'Text of the declaration',
        napoveda: 'Get straight to the point, e.g. “že v byte … bývam od 1. 1. 2025” (“that I have lived in the flat … since 1 January 2025”). Write in Slovak – the text will go into both language versions exactly as you type it.',
        placeholder: 'že ku dnešnému dňu nemám žiadne nedoplatky voči Mestskému úradu Senec. (that as of today I have no arrears towards the Senec Municipal Office)',
      },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Print the declaration and sign it in your own hand.',
      'If the institution requires a certified signature, sign only in front of an official (matrika, obecný úrad) or a notary.',
      'Keep a copy.',
    ],
    kontrola: [
      'State only what is true. A false declaration on honour can have legal consequences (a minor offence, in serious cases even a criminal offence).',
      'First find out whether the institution has its own form – if so, use that one.',
      'Be specific: who, what, since when.',
      'Certification of the signature is needed only if the recipient expressly requires it.',
    ],
  },

  dokument: {
    nazev: 'Declaration on Honour',
    podnadpis: 'written declaration of a natural person',
    podpisy: { vlevo: 'declarant', vpravo: 'certification of signature (only if required)' },
    clanky: [
      { nadpis: 'Declarant', odstavce: ['{{jmeno}}, date of birth {{narozeni}}, permanently residing at {{adresa}}'] },
      {
        nadpis: 'Declaration',
        odstavce: [
          'For: {{pro}}. Purpose: {{ucel}}.',
          'I, the undersigned, hereby declare on my honour {{text}}',
          'I declare that all the information given is true and complete and that I am aware of the legal consequences of a false declaration.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

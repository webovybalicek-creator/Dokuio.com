/**
 * English version: declaration on honour (Czech Republic). Original: src/obsah/cz/cestne-prohlaseni.ts
 * and src/sablony/cz/cestne-prohlaseni.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-CESTNE-PROHLASENI', verze: '1.0' },

  nazev: 'Declaration on Honour',
  nazevA: 'the declaration on honour',
  katalog: {
    popis: 'A written declaration for an authority, school or bank.',
    slova: ['declaration on honour', 'declaration', 'statutory declaration', 'sworn statement', 'affidavit', 'authority', 'no debts', 'residence', 'template', 'čestné prohlášení', 'prohlášení'],
  },
  landing: {
    title: 'Declaration on Honour Czech Republic {rok} – free PDF template',
    description:
      'A universal declaration on honour (čestné prohlášení) for the Czech Republic: fill it in online in English and download a bilingual PDF or Word. Free.',
    perex: 'For when an authority, school, bank or landlord asks you for a “declaration on honour” (čestné prohlášení). Fill in who you are and what you declare, and you are done.',
    obsahPopis: 'A simple one-page document.',
    obsah: [
      { nazev: 'Declarant', popis: 'Name, date of birth, permanent address.' },
      { nazev: 'Declaration', popis: 'For whom and for what purpose, the text of the declaration in your own words, confirmation that it is true.' },
    ],
    kroky: [
      { nazev: 'Fill in your details', popis: 'Who is making the declaration.' },
      { nazev: 'Write the declaration', popis: 'Specifically and truthfully.' },
      { nazev: 'Sign', popis: 'In your own hand, or in front of an official if the signature needs to be certified.' },
    ],
    online: ['The opening wording is added automatically', 'Tips on the right wording', 'Download as PDF and Word', 'Blank template to fill in by hand'],
    hodiSe: ['an authority or school asks for a declaration on honour', 'you are confirming your residence, that you have no debts or another fact', 'you are applying for an allowance, a grant or a discount'],
    nehodiSe: ['the institution has its own form – use that', 'the law requires an official document (e.g. an extract from the Criminal Register – výpis z rejstříku trestů)', 'consent to permanent residence – we have a separate template for that'],
    po: [
      { nazev: 'Signature', popis: 'In your own hand.' },
      { nazev: 'Certification, if needed', popis: 'Czech POINT, the register office (matrika) or a notary – you sign only on the spot.' },
      { nazev: 'A copy for you', popis: 'Keep it.' },
    ],
    faq: [
      { q: 'Does the signature on a declaration on honour have to be certified?', a: 'Only when the recipient (an authority, a bank) expressly requires it. Certification of the signature (legalizace) is done by Czech POINT, the municipal office (obecní úřad) or a notary; you sign only in front of the official.' },
      { q: 'What if I declare something untrue?', a: 'A false declaration on honour can have legal consequences – towards an authority it is an administrative offence (přestupek), and in serious cases (e.g. when applying for benefits or grants) even a criminal offence.' },
      { q: 'Is there a prescribed template?', a: 'Generally not. But if the institution has its own form, use its text.' },
      { q: 'Do you store my details?', a: 'No. The document is put together directly in your browser.' },
    ],
    zakony: 'Certification of signatures is governed by Czech Act No. 21/2006 Coll., on certifying that a copy matches the original document and on certifying the authenticity of a signature (zákon o ověřování shody opisu nebo kopie s listinou a o ověřování pravosti podpisu).',
    souvisejiciPopis: 'Other common documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a declaration on honour online – Czech Republic, PDF',
    description: 'Guide in English for a declaration on honour in the Czech Republic. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'declaration', g: 'declaration', a: 'declaration', l: 'declaration' },
    kroky: {
      osoba: { nazev: 'Who is making the declaration' },
      obsah: { nazev: 'What you declare', popis: 'Write in your own words what you declare. Specifically and truthfully. Write the text in Czech – it goes into both language versions exactly as you write it.' },
    },
    pole: {
      jmeno: { popis: 'First name and surname', placeholder: 'e.g. Jana Nováková' },
      narozeni: { popis: 'Date of birth' },
      adresa: { popis: 'Permanent address', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      pro: { popis: 'For whom (optional)', napoveda: 'An authority, school, bank, landlord…', placeholder: 'e.g. Městský úřad Říčany' },
      ucel: { popis: 'Purpose (optional)', placeholder: 'e.g. žádost o příspěvek na bydlení (application for a housing allowance)' },
      text: {
        popis: 'Text of the declaration',
        napoveda: 'Start straight with the point, e.g. “že v bytě … bydlím od 1. 1. 2025” (that I have lived in the flat … since 1 January 2025). We add the opening “Čestně prohlašuji” (“I declare on my honour”).',
        placeholder: 'že k dnešnímu dni nemám žádné nedoplatky vůči Městskému úřadu Říčany. (that as of today I have no arrears towards the Říčany Municipal Office.)',
      },
      misto: { popis: 'Place of signing (town)', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [
      '',
      'The text of the declaration in your own words and confirmation that it is true.',
    ],
    coDal: [
      'Print the declaration and sign it in your own hand.',
      'If the institution wants an officially certified signature (úředně ověřený podpis), do not sign in advance – you sign only in front of the official at Czech POINT, the register office (matrika) or a notary.',
      'Keep a copy for yourself.',
    ],
    kontrola: [
      'Write only what is true and what you know for certain. A false declaration on honour can have legal consequences (towards an authority it is an administrative offence, in some cases even a criminal offence).',
      'First find out whether the institution has its own form – if so, use that.',
      'Be specific: who, what, since when (e.g. “ke dni 20. 11. 2026 nemám žádné splatné nedoplatky vůči …” – “as of 20 November 2026 I have no overdue arrears towards …”).',
      'Official certification of the signature (legalizace) is needed only when the recipient expressly requires it (Act No. 21/2006 Coll.).',
      'A declaration on honour does not replace documents that the law expressly requires (e.g. an extract from the Criminal Register or a confirmation from an authority).',
    ],
  },

  dokument: {
    nazev: 'Declaration on Honour',
    podnadpis: 'written declaration of a natural person',
    podpisy: { vlevo: 'declarant', vpravo: 'certification of signature (only if required)' },
    clanky: [
      {
        nadpis: 'Declarant',
        odstavce: ['{{jmeno}}, date of birth {{narozeni}}, permanently residing at {{adresa}}'],
      },
      {
        nadpis: 'Declaration',
        odstavce: [
          'For: {{pro}}. Purpose: {{ucel}}.',
          'I, the undersigned, declare on my honour {{text}}',
          'I declare that all the information given is true and complete, and I am aware of the legal consequences of a false declaration.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

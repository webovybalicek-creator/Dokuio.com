/**
 * English version: cash receipt (Slovakia). Original: src/obsah/sk/potvrdenie-o-prevzati-penazi.ts
 * and src/sablony/sk/potvrdenie-o-prevzati-penazi.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-POTVRDENIE-PENIAZE', verze: '1.0' },

  nazev: 'Cash Receipt',
  nazevA: 'the cash receipt',
  katalog: {
    popis: 'Proof that cash was handed over.',
    slova: ['cash receipt', 'receipt of money', 'payment receipt', 'proof of payment', 'cash', 'deposit', 'advance payment', 'potvrdenie o prevzatí peňazí', 'príjmový doklad'],
  },
  landing: {
    title: 'Cash Receipt Slovakia {rok} – free PDF template',
    description:
      'Cash receipt for Slovakia, explained in English: amount in figures (and in Slovak words), purpose of payment. Bilingual PDF or Word, free.',
    perex: 'A simple document proving that you handed over or received money in cash. The amount in words is added automatically.',
    obsahPopis: 'A short confirmation (potvrdenie o prevzatí peňazí) stating the purpose of the payment.',
    obsah: [
      { nazev: 'Confirmation', popis: 'Who, to whom, how much and what for.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Names, amount, purpose.' },
      { nazev: 'Count it', popis: 'The money, before signing.' },
      { nazev: 'Sign it', popis: 'Each party keeps a copy.' },
    ],
    online: [
      'Amount in words (in Slovak) automatically',
      'Signature on screen',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are paying cash for a car or other item',
      'you are handing over a loan or an advance payment',
      'you are receiving a security deposit for a tenancy',
    ],
    nehodiSe: [
      'the payment exceeds the statutory cash limit – use a bank transfer',
    ],
    po: [
      { nazev: 'Copy', popis: 'Each party keeps a signed copy.' },
    ],
    faq: [
      {
        q: 'What is the limit for cash payments?',
        a: 'Between two private individuals who are not entrepreneurs, €15,000; if one party is an entrepreneur or a company, €5,000 (Act No. 394/2012 Coll.).',
      },
      { q: 'Do you store my details?', a: 'No. The receipt is put together directly in your browser.' },
    ],
    zakony:
      'The template is based on Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník), and Act No. 394/2012 Coll. on the limitation of cash payments (zákon o obmedzení platieb v hotovosti).',
    souvisejiciPopis: 'Other money documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a cash receipt online – Slovakia, PDF',
    description: 'Cash receipt for Slovakia with the amount in words. Guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about a minute',
  },

  pruvodce: {
    slovo: { n: 'receipt', g: 'receipt', a: 'receipt', l: 'receipt' },
    kroky: {
      udaje: { nazev: 'Who and how much' },
    },
    pole: {
      p_jmeno: { popis: 'Recipient – first name and surname', napoveda: 'The person receiving the money and signing the receipt.' },
      p_narozeni: { popis: 'Recipient’s date of birth' },
      p_adresa: { popis: 'Recipient’s address' },
      k_jmeno: { popis: 'Payer – first name and surname' },
      k_narozeni: { popis: 'Payer’s date of birth' },
      k_adresa: { popis: 'Payer’s address' },
      castka: { popis: 'Amount (€)', placeholder: 'e.g. 1500' },
      ucel: {
        popis: 'Purpose of payment',
        moznosti: {
          kupni: 'Purchase price',
          pozicka: 'Loan',
          splatka: 'Debt instalment',
          zaloha: 'Advance payment',
          zabezpeka: 'Security deposit (zábezpeka, kaucia) for a tenancy',
          iny: 'Other purpose',
        },
      },
      ucel_popis: { popis: 'More detailed description', placeholder: 'e.g. za vozidlo Škoda Octavia, VIN TMB… (for the car Škoda Octavia, VIN TMB…)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: ['Count the money before signing.', 'Each party keeps one signed copy.'],
    kontrola: [
      'State the amount in figures and in words – we pre-fill it for you.',
      'Describe the purpose of payment specifically (e.g. “purchase price for the vehicle VIN …”) so it is clear what was paid for.',
      'Verify the other party’s identity from their identity card (občiansky preukaz) and copy the names exactly as stated in it.',
      'Count cash only when signing; larger amounts are better paid by transfer. Between two private individuals who are not entrepreneurs, the law prohibits cash payments above €15,000; if one party is an entrepreneur or a company, above €5,000.',
    ],
  },

  dokument: {
    nazev: 'Confirmation of Receipt of Money',
    podnadpis: 'confirmation of receipt of a cash payment',
    podpisy: { vlevo: 'payer', vpravo: 'recipient' },
    clanky: [
      {
        nadpis: 'Confirmation',
        odstavce: [
          'I, **{{p_jmeno}}**, date of birth {{p_narozeni}}, permanently residing at {{p_adresa}},',
          'confirm that today I received in cash from **{{k_jmeno}}**, date of birth {{k_narozeni}}, permanently residing at {{k_adresa}}, the sum of **{{castka}}**.',
          {
            uvod: 'Purpose of payment:',
            uvodVzor: 'Purpose of payment (tick one):',
            moznosti: {
              kupni: 'purchase price – {{ucel_popis}}',
              pozicka: 'loan – {{ucel_popis}}',
              splatka: 'debt instalment – {{ucel_popis}}',
              zaloha: 'advance payment – {{ucel_popis}}',
              zabezpeka: 'security deposit for a tenancy – {{ucel_popis}}',
              iny: '{{ucel_popis}}',
            },
          },
          'I have counted the sum and received it in the stated amount.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

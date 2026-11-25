/**
 * English version: cash receipt (Austria). Original: src/obsah/at/quittung.ts
 * and src/sablony/at/quittung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';
import { EIGEN } from '../_eigen';

const T = {
  sablona: { kod: 'AT-QUITTUNG', verze: '1.0' },

  nazev: 'Cash Receipt',
  nazevA: 'the cash receipt',
  katalog: {
    popis: 'Confirmation of receipt of cash.',
    slova: ['receipt', 'cash receipt', 'proof of payment', 'payment confirmation', 'cash payment', 'acknowledgement of receipt', 'Quittung', 'Empfangsbestätigung', 'Barzahlung'],
  },
  landing: {
    title: 'Cash Receipt Austria {rok} – free PDF template',
    description:
      'Receipt for a cash payment under Austrian law (Section 1426 ABGB), explained in English: amount, reason, signature. Download a bilingual PDF or Word for free.',
    perex: 'Simple proof that cash was handed over. We add the amount in words (in German) for you.',
    obsahPopis: 'Short confirmation of receipt with the reason for payment.',
    obsah: [
      { nazev: 'Receipt', popis: 'Who paid whom, how much and what for.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Names, amount, reason.' },
      { nazev: 'Count', popis: 'The money, before signing.' },
      { nazev: 'Sign it', popis: 'Each party keeps a copy.' },
    ],
    online: [
      'Amount in words (in German) added automatically',
      'Signature on screen',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'cash payment when buying a car',
      'handing over a loan, a down payment or a deposit',
    ],
    nehodiSe: [
      'payment by bank transfer – the bank statement is the proof',
    ],
    po: [
      { nazev: 'Copy', popis: 'Each party keeps a signed copy.' },
    ],
    faq: [
      { q: 'Can I ask for a receipt?', a: 'Yes, whoever pays can ask for a receipt (Quittung) (Section 1426 of the Austrian General Civil Code – ABGB).' },
      { q: 'Do you store my details?', a: 'No. The receipt is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Section 1426 of the Austrian General Civil Code (ABGB).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a cash receipt online – Austria, free PDF',
    description: 'Guide in English: receipt for a cash payment in Austria with the amount in words. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'receipt', g: 'receipt', a: 'receipt', l: 'receipt' },
    kroky: {
      angaben: { nazev: 'Who and how much' },
    },
    pole: {
      p_jmeno: { popis: 'Recipient – name', napoveda: 'The person who receives the money and signs the receipt.' },
      p_adresa: { popis: 'Recipient’s address' },
      k_jmeno: { popis: 'Payer – name' },
      k_adresa: { popis: 'Payer’s address' },
      castka: { popis: 'Amount (€)' },
      ucel: { popis: 'Reason for payment', placeholder: 'e.g. Kaufpreis für Pkw VW Golf, FIN … (purchase price for a VW Golf car, VIN …)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Count the money before signing.',
      'Each party keeps a signed copy.',
    ],
    kontrola: [
      'State the amount in figures and in words – we add the words.',
      'Describe the reason for payment specifically (e.g. “Kaufpreis für Pkw, FIN …” – purchase price for a car, VIN …).',
      'Whoever pays can ask for a receipt (Section 1426 ABGB).',
      'Check the other party’s identity against their identity card (Personalausweis) and copy their name and address exactly.',
      'Count cash only when signing; larger amounts are better paid by transfer – the bank statement is the best proof of payment.',
    ],
  },

  dokument: {
    nazev: 'Receipt',
    podnadpis: 'Confirmation of receipt of a cash payment (Section 1426 of the Austrian General Civil Code – ABGB)',
    podpisy: { vlevo: 'payer', vpravo: 'recipient' },
    clanky: [
      {
        nadpis: 'Receipt',
        odstavce: [
          'I, **{{p_jmeno}}**, residing at {{p_adresa}},',
          'confirm that I have today received from **{{k_jmeno}}**, residing at {{k_adresa}}, the amount of **{{castka}}** in cash.',
          'Reason for payment: {{ucel}}',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

const E = EIGEN.en['quittung'];
export default {
  ...T,
  landing: {
    ...T.landing,
    ...E,
    faq: E.faq ? [...E.faq, ...T.landing.faq.filter((f) => /store|зберіга/i.test(f.q))] : T.landing.faq,
  },
} satisfies PrekladDokumentu;

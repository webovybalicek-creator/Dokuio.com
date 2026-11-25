/**
 * English version: receipt for money (Poland). Original: src/obsah/pl/pokwitowanie-odbioru-pieniedzy.ts
 * and src/sablony/pl/pokwitowanie.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-POKWITOWANIE', verze: '1.0' },

  nazev: 'Receipt for Money',
  nazevA: 'the receipt for money',
  katalog: {
    popis: 'Confirmation that cash has been received.',
    slova: ['receipt', 'cash receipt', 'confirmation of receipt', 'cash', 'advance payment', 'deposit', 'payment receipt', 'pokwitowanie', 'potwierdzenie odbioru'],
  },
  landing: {
    title: 'Receipt for Money Poland {rok} – free PDF template',
    description:
      'Cash receipt (pokwitowanie) for Poland: the amount in figures and in words, what the payment is for. Download a bilingual PDF or Word for free.',
    perex: 'Simple proof that cash has been handed over. The amount in words (in Polish) is filled in automatically.',
    obsahPopis: 'A short receipt stating what the payment is for.',
    obsah: [{ nazev: 'Receipt', popis: 'Who, to whom, how much and what for.' }],
    kroky: [
      { nazev: 'Fill it in', popis: 'Names, amount, purpose.' },
      { nazev: 'Count it', popis: 'The money, before signing.' },
      { nazev: 'Sign it', popis: 'Each party keeps a copy.' },
    ],
    online: ['Amount in words automatically', 'Signature on screen', 'Download as PDF and Word'],
    hodiSe: ['you are paying cash for a car or another item', 'you are handing over an advance, a deposit (kaucja) or an instalment'],
    nehodiSe: ['payment by bank transfer – the transfer confirmation is the proof'],
    po: [{ nazev: 'Copy', popis: 'Each party keeps a signed copy.' }],
    faq: [
      {
        q: 'Can I demand a receipt?',
        a: 'Yes. A debtor who pays may demand a receipt from the creditor (Article 462 of the Civil Code – Kodeks cywilny, KC).',
      },
      { q: 'What must a cash receipt contain?', a: 'The names of the person paying and the person receiving the money, the amount in figures and words, the purpose (e.g. payment for a car, loan repayment, deposit), the date and place, and the recipient’s signature.' },
      { q: 'Does the receipt need witnesses?', a: 'No. The signature of the person receiving the money is enough. For larger amounts, count the cash together and give each party a signed copy.' },
      { q: 'Do you save my details?', a: 'No. The receipt is created solely in your browser.' },
    ],
    zakony: 'The template is based on the Polish Civil Code (Kodeks cywilny, Article 462).',
    souvisejiciPopis: 'Other documents about money, also free.',
  },
  vytvorit: {
    title: 'Fill in a receipt for money online – Poland, free PDF',
    description: 'Cash receipt for Poland with the amount in words. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · result as PDF and Word · takes about a minute',
  },

  pruvodce: {
    slovo: { n: 'receipt', g: 'receipt', a: 'receipt', l: 'receipt' },
    kroky: {
      dane: { nazev: 'Who and how much' },
    },
    pole: {
      p_jmeno: { popis: 'Recipient – first name and surname', napoveda: 'The person who receives the money and signs the receipt.' },
      p_adresa: { popis: 'Recipient’s address' },
      k_jmeno: { popis: 'Payer – first name and surname' },
      k_adresa: { popis: 'Payer’s address' },
      castka: { popis: 'Amount (PLN)' },
      ucel: { popis: 'In payment of', placeholder: 'e.g. ceny za samochód Skoda Octavia, VIN … (the price of a Skoda Octavia car, VIN …)' },
      misto: { popis: 'Town' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: ['Count the money before signing.', 'Each party keeps one copy.'],
    kontrola: [
      'State the amount in figures and in words – we fill in the words (in Polish) for you.',
      'Describe specifically what the payment is for (e.g. “the price of the car with VIN …”).',
      'A debtor who performs their obligation may demand a receipt (Article 462 KC).',
      'Check the other party’s identity against their identity card (dowód osobisty) and copy the first name and surname exactly as they appear on it.',
      'Only count cash when signing; larger amounts are better paid by transfer – the transfer confirmation is the best proof of payment.',
    ],
  },

  dokument: {
    nazev: 'Receipt for Money',
    podnadpis: 'confirmation of receipt of cash (Article 462 of the Civil Code – Kodeks cywilny)',
    podpisy: { vlevo: 'payer', vpravo: 'recipient' },
    clanky: [
      {
        nadpis: 'Receipt',
        odstavce: [
          'I, **{{p_jmeno}}**, residing at {{p_adresa}},',
          'confirm that today I received from **{{k_jmeno}}**, residing at {{k_adresa}}, the amount of **{{castka}}** in cash in payment of {{ucel}}.',
          'I have counted the amount and accepted it in the stated sum.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

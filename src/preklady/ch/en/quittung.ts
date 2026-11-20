/**
 * English version: receipt for a cash payment (Switzerland).
 * Original: src/obsah/ch/quittung.ts and src/sablony/ch/quittung.ts.
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-QUITTUNG', verze: '1.0' },

  nazev: 'Cash Receipt',
  nazevA: 'the cash receipt',
  katalog: {
    popis: 'Confirmation of receipt of cash.',
    slova: ['receipt', 'cash receipt', 'payment receipt', 'confirmation of payment', 'cash payment', 'Quittung', 'Empfangsbestätigung', 'Bargeld'],
  },
  landing: {
    title: 'Cash Receipt Switzerland {rok} – free PDF template',
    description:
      'Receipt (Quittung) for a cash payment under Art. 88 OR: amount in figures and words, reason for payment, signature. Bilingual PDF or Word (German + English), free.',
    perex: 'Confirm in writing that you have received cash – with the amount in words and the reason for payment.',
    obsahPopis: 'A short confirmation – a receipt (Quittung).',
    obsah: [
      { nazev: 'Recipient', popis: 'Who receives the money.' },
      { nazev: 'Payer', popis: 'Who pays.' },
      { nazev: 'Amount', popis: 'In figures and words.' },
      { nazev: 'Reason for payment', popis: 'What the payment is for.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Whatever you don’t know is left as a line to fill in by hand.' },
      { nazev: 'Check the text', popis: 'Preview next to the form.' },
      { nazev: 'Download and sign', popis: 'PDF or Word. The document is bilingual: German original and English translation.' },
    ],
    online: ['Amount in words added automatically', 'Signature on screen', 'Draft stays saved in your browser', 'Download as PDF and Word'],
    hodiSe: ['cash payment when selling a car', 'repayment of a private loan', 'handing over a deposit'],
    nehodiSe: ['invoices from businesses'],
    po: [{ nazev: 'Keep it', popis: 'Each party keeps one copy.' }],
    faq: [
      { q: 'Am I entitled to a receipt?', a: 'Yes. Whoever pays can demand a receipt (Art. 88 OR).' },
      { q: 'Do you store my data?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 88 of the Swiss Code of Obligations (Obligationenrecht, OR).',
  },
  vytvorit: {
    title: 'Cash Receipt (Switzerland) online – free PDF',
    description: 'Receipt for a cash payment in Switzerland, explained in English. Bilingual PDF or Word, free.',
  },

  pruvodce: {
    slovo: { n: 'receipt', g: 'receipt', a: 'receipt', l: 'receipt' },
    kroky: {
      angaben: { nazev: 'Who and how much' },
    },
    pole: {
      p_jmeno: { popis: 'Recipient – name', napoveda: 'Who receives the money and signs the receipt.' },
      p_adresa: { popis: 'Recipient’s address' },
      k_jmeno: { popis: 'Payer – name' },
      k_adresa: { popis: 'Payer’s address' },
      castka: { popis: 'Amount (CHF)' },
      ucel: { popis: 'Reason for payment', placeholder: 'e.g. Kaufpreis für Personenwagen VW Golf, Fahrgestellnummer … (purchase price for a VW Golf car, chassis number …)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: ['Count the money before signing.', 'Each party keeps one signed copy.'],
    kontrola: [
      'State the amount in figures and words – we add the words (in German).',
      'Describe the reason for payment specifically (e.g. “Kaufpreis für Personenwagen, Fahrgestellnummer …” – purchase price for a car, chassis number …).',
      'Whoever pays can demand a receipt ([Art. 88 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_88)).',
      'Check the other party’s identity using their passport or identity card (Identitätskarte) and copy the name and address exactly.',
      'Larger amounts are better transferred – a bank statement is the safest proof of payment. When paying in cash, have a receipt signed.',
    ],
  },

  dokument: {
    nazev: 'Receipt',
    podnadpis: 'Confirmation of receipt of a cash payment (Art. 88 OR)',
    podpisy: { vlevo: 'Payer', vpravo: 'Recipient' },
    clanky: [
      {
        nadpis: 'Receipt',
        odstavce: [
          'I, **{{p_jmeno}}**, residing at {{p_adresa}},',
          'confirm that today I received from **{{k_jmeno}}**, residing at {{k_adresa}}, the amount of **{{castka}}** in cash.',
          'Reason for payment: {{ucel}}',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

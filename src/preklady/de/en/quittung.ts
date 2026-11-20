/**
 * English version: receipt for a cash payment (Germany). Original: src/obsah/de/quittung.ts
 * and src/sablony/de/quittung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-QUITTUNG', verze: '1.0' },

  nazev: 'Cash Receipt',
  nazevA: 'the cash receipt',
  katalog: {
    popis: 'Confirmation of receipt of cash.',
    slova: ['receipt', 'cash receipt', 'confirmation of receipt', 'cash payment', 'proof of payment', 'Quittung', 'Empfangsbestätigung', 'Barzahlung'],
  },
  landing: {
    title: 'Cash Receipt Germany {rok} – free PDF template',
    description:
      'Receipt for a cash payment in Germany, explained in English: amount in figures and words, reason for payment. Bilingual PDF or Word, free.',
    perex: 'Simple proof that cash was handed over. We add the amount in words.',
    obsahPopis: 'A short confirmation of receipt (Quittung) with the reason for payment.',
    obsah: [{ nazev: 'Receipt', popis: 'Who, to whom, how much, what for.' }],
    kroky: [
      { nazev: 'Fill it in', popis: 'Names, amount, reason.' },
      { nazev: 'Count', popis: 'The money before signing.' },
      { nazev: 'Sign', popis: 'Each party keeps a copy.' },
    ],
    online: ['Amount in words (in German) added automatically', 'Signature on screen', 'Download as PDF and Word'],
    hodiSe: ['cash payment when buying a car', 'handing over a loan, down payment or deposit'],
    nehodiSe: ['payment by bank transfer – the bank statement is the proof'],
    po: [{ nazev: 'Copy', popis: 'Each party keeps a signed copy.' }],
    faq: [
      { q: 'Can I demand a receipt?', a: 'Yes, anyone who performs can demand a receipt from the creditor (Section 368 of the German Civil Code, BGB).' },
      { q: 'Do you store my details?', a: 'No. The receipt is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Section 368 of the German Civil Code (BGB).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a cash receipt online – Germany, free PDF',
    description: 'Guide in English for a receipt for a cash payment in Germany, with the amount in words. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'receipt', g: 'receipt', a: 'receipt', l: 'receipt' },
    kroky: {
      angaben: { nazev: 'Who and how much' },
    },
    pole: {
      p_jmeno: { popis: 'Recipient – name', napoveda: 'Who receives the money and confirms it.' },
      p_adresa: { popis: 'Recipient’s address' },
      k_jmeno: { popis: 'Payer – name' },
      k_adresa: { popis: 'Payer’s address' },
      castka: { popis: 'Amount (€)' },
      ucel: { popis: 'Reason for payment', placeholder: 'e.g. Kaufpreis für Pkw VW Golf, FIN … (purchase price for a VW Golf car, VIN …)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: ['Count the money before signing.', 'Each party keeps a signed copy.'],
    kontrola: [
      'State the amount in figures and in words – we add the words (in German).',
      'Describe the reason for payment specifically (e.g. “Kaufpreis für Pkw, FIN …” – purchase price for a car, VIN …).',
      'Whoever pays can demand a receipt ([Section 368 BGB](https://www.gesetze-im-internet.de/bgb/__368.html)).',
      'Check the identity of the other party using their identity card (Personalausweis) and copy the name and address exactly.',
      'Count cash only when signing; larger amounts are better paid by transfer – the bank statement is the best proof of payment.',
    ],
  },

  dokument: {
    nazev: 'Receipt',
    podnadpis: 'Confirmation of receipt of a cash payment (Section 368 BGB)',
    podpisy: { vlevo: 'payer', vpravo: 'recipient' },
    clanky: [
      {
        nadpis: 'Receipt',
        odstavce: [
          'I, **{{p_jmeno}}**, residing at {{p_adresa}},',
          'confirm that today I have received from **{{k_jmeno}}**, residing at {{k_adresa}}, the amount of **{{castka}}** in cash.',
          'Reason for payment: {{ucel}}',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

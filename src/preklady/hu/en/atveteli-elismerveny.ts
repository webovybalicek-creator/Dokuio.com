/**
 * English version: receipt for cash (Hungary). Original: src/obsah/hu/atveteli-elismerveny.ts
 * and src/sablony/hu/atveteli-elismerveny.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-ELISMERVENY', verze: '1.0' },

  nazev: 'Receipt for Cash',
  nazevA: 'the receipt for cash',
  katalog: {
    popis: 'Confirmation that cash has been received.',
    slova: ['cash receipt', 'receipt for money', 'acknowledgement of receipt', 'payment receipt', 'private receipt', 'earnest money', 'átvételi elismervény', 'pénz átvételi elismervény'],
  },
  landing: {
    title: 'Receipt for Cash Hungary {rok} – free PDF template',
    description:
      'Receipt for cash in Hungary, explained in English: amount in figures and words, purpose of payment, parties. Simple proof as bilingual PDF or Word, free.',
    perex: 'Simple proof that cash has changed hands. We write out the amount in words automatically.',
    obsahPopis: 'A short receipt stating the purpose of payment.',
    obsah: [{ nazev: 'Receipt', popis: 'Who received how much, from whom and why.' }],
    kroky: [
      { nazev: 'Fill it in', popis: 'Names, amount, purpose of payment.' },
      { nazev: 'Counting', popis: 'The money, before signing.' },
      { nazev: 'Signing', popis: 'Each party gets a copy.' },
    ],
    online: ['The amount in words (in Hungarian) is added automatically', 'Signing on screen', 'Download as PDF and Word'],
    hodiSe: ['you are paying cash for a car or an item', 'you are handing over earnest money (foglaló), a deposit (óvadék) or an instalment'],
    nehodiSe: ['a bank transfer – there the bank confirmation is the proof'],
    po: [{ nazev: 'Copy', popis: 'Each party keeps one signed copy.' }],
    faq: [
      { q: 'Can I ask for a receipt?', a: 'Yes, the person paying can demand a receipt from the person receiving the money.' },
      { q: 'Is a witness needed?', a: 'It is not compulsory, but with a large amount it can help as evidence.' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony: 'The template is based on the Hungarian Civil Code (Polgári Törvénykönyv).',
    souvisejiciPopis: 'Other documents for money matters, also free.',
  },
  vytvorit: {
    title: 'Fill in a receipt for cash online – Hungary, PDF',
    description: 'Guide in English for a receipt for cash (átvételi elismervény) in Hungary, with the amount in words added automatically. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'receipt', g: 'receipt', a: 'receipt', l: 'receipt' },
    kroky: {
      adatok: { nazev: 'Who, how much, why' },
    },
    pole: {
      p_jmeno: { popis: 'Recipient’s name', napoveda: 'The person who receives the money and signs the receipt.' },
      p_adresa: { popis: 'Recipient’s address' },
      k_jmeno: { popis: 'Name of the person paying' },
      k_adresa: { popis: 'Address of the person paying' },
      castka: { popis: 'Amount (Ft)' },
      jogcim: { popis: 'Purpose of payment (jogcím)', placeholder: 'e.g. a Suzuki Vitara vételára, alvázszám … (purchase price of the Suzuki Vitara, chassis number …)' },
      misto: { popis: 'Town' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: ['Count the money before signing.', 'Each party keeps one signed copy.'],
    kontrola: [
      'State the amount in figures and in words – we write out the amount in words (in Hungarian) automatically.',
      'Describe the purpose of payment specifically (e.g. “the purchase price of the Suzuki Vitara, chassis number …”).',
      'The person paying can demand a receipt (elismervény) from the person receiving the money.',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
      'Count the cash when signing; it is better to transfer a larger amount – the bank debit notice is the best proof.',
    ],
  },

  dokument: {
    nazev: 'Acknowledgement of Receipt',
    podnadpis: 'confirmation of receipt of cash',
    podpisy: { vlevo: 'handed over by', vpravo: 'received by' },
    clanky: [
      {
        nadpis: 'Acknowledgement',
        odstavce: [
          'I, the undersigned, **{{p_jmeno}}** (address: {{p_adresa}})',
          'acknowledge that today I received in cash from **{{k_jmeno}}** (address: {{k_adresa}}) the sum of **{{castka}}** on the following ground: {{jogcim}}.',
          'I have counted the amount and received it in full in the above sum.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

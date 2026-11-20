/**
 * English version: notice of withdrawal from a distance contract (Hungary). Original: src/obsah/hu/elallasi-nyilatkozat.ts
 * and src/sablony/hu/elallasi-nyilatkozat.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-ELALLAS', verze: '1.0' },

  nazev: 'Notice of Withdrawal',
  nazevA: 'the notice of withdrawal',
  katalog: {
    popis: 'Returning an online purchase within 14 days.',
    slova: ['withdrawal form', 'notice of withdrawal', '14-day return', 'return online purchase', 'cancel online order', 'right of withdrawal', 'elállási nyilatkozat', 'elállási jog'],
  },
  landing: {
    title: 'Withdrawal Notice Online Purchase Hungary {rok} – free PDF template',
    description:
      'Notice of withdrawal from an online purchase in Hungary under Government Decree 45/2014: 14 days without giving a reason, deadline reminder. Bilingual PDF, free.',
    perex: 'You can send back a product bought online or by phone within 14 days without giving a reason. The notice follows the official model form.',
    obsahPopis: 'What it contains.',
    obsah: [
      { nazev: 'Recipient', popis: 'Name and address of the business.' },
      { nazev: 'Product', popis: 'What you ordered and when, when you received it.' },
      { nazev: 'Refund', popis: 'Bank account for the money to be sent back.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Order details.' },
      { nazev: 'Send it', popis: 'By e-mail or registered letter.' },
      { nazev: 'Send the product back', popis: 'Within 14 days.' },
    ],
    online: ['Deadline reminder', 'Download as PDF and Word', 'No sign-up'],
    hodiSe: ['you bought from an online shop, by phone or from a catalogue'],
    nehodiSe: ['you bought in a shop – there is no statutory right of withdrawal there', 'a custom-made or perishable product'],
    po: [{ nazev: 'Refund', popis: 'The business refunds the purchase price and the standard delivery charge within 14 days.' }],
    faq: [
      { q: 'How much time do I have?', a: '14 days, for products generally from receipt. It is enough to send the notice on the last day of the period.' },
      { q: 'Do I have to give a reason?', a: 'No, no reason is needed for withdrawal.' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony: 'The template is based on the model form in Government Decree 45/2014. (II. 26.) (Korm. rendelet).',
    souvisejiciPopis: 'Other everyday documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a withdrawal notice online – Hungary, PDF',
    description: 'Guide in English for a notice of withdrawal (elállási nyilatkozat) from an online purchase in Hungary, with a 14-day deadline reminder. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      adatok: { nazev: 'Business and order' },
    },
    pole: {
      firma: { popis: 'Name of the business', placeholder: 'e.g. Webáruház Kft.' },
      firma_adresa: { popis: 'Address and e-mail address of the business' },
      termek: { popis: 'Product or service', placeholder: 'e.g. Bosch porszívó, rendelésszám 12345 (Bosch vacuum cleaner, order number 12345)' },
      objednano: { popis: 'Date of order' },
      atvetel: { popis: 'Date of receipt' },
      jmeno: { popis: 'Your name' },
      adresa: { popis: 'Your address' },
      ucet: { popis: 'Bank account number for the refund (optional)' },
      misto: { popis: 'Town' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Send it by e-mail or registered letter within the 14-day period – it is enough to send it on the last day of the period.',
      'Send the product back within 14 days; the business refunds the purchase price and the standard delivery charge within 14 days.',
    ],
    kontrola: [
      'The withdrawal period is 14 days; for products it generally runs from receipt.',
      'You do not have to give a reason for withdrawal.',
      'As a rule, you bear the direct cost of returning the product if the business informed you of this in advance.',
      'Exceptions: e.g. a custom-made product, perishable goods, an unsealed hygiene product.',
    ],
    pripominky: {
      'Az elállási határidő utolsó napja': { nazev: 'Last day of the withdrawal period', popis: '14 days from receipt of the product.' },
    },
  },

  dokument: {
    nazev: 'Notice of Withdrawal',
    podnadpis: 'exercise of the right of withdrawal under Government Decree 45/2014. (II. 26.) (Korm. rendelet)',
    podpisy: { vlevo: 'consumer', vpravo: 'received on behalf of the business (when delivered in person)' },
    clanky: [
      {
        nadpis: 'Notice of Withdrawal',
        odstavce: [
          '**To:** {{firma}}, {{firma_adresa}}',
          'I, the undersigned, hereby declare that I exercise my right of withdrawal in respect of the contract for the sale of the following product(s) or for the provision of the following service: {{termek}}',
          'Date of order: {{objednano}} / date of receipt: {{atvetel}}',
          'Name of the consumer: **{{jmeno}}**, address: {{adresa}}',
          'Please refund the amount paid to bank account No. {{ucet}}, or by the payment method used for the payment.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

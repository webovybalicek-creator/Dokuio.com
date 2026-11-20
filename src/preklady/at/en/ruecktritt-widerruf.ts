/**
 * English version: withdrawal from an online purchase (Austria). Original: src/obsah/at/ruecktritt-widerruf.ts
 * and src/sablony/at/ruecktritt.ts (based on src/sablony/de/widerruf.ts). The German text prevails;
 * rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-RUECKTRITT', verze: '1.0' },

  nazev: 'Withdrawal from Online Purchase',
  nazevA: 'the withdrawal from an online purchase',
  katalog: {
    popis: 'Withdraw from an online purchase within 14 days.',
    slova: ['withdrawal', 'cancel online order', 'return goods', 'online shop', 'cooling-off period', '14 days', 'withdrawal form', 'Rücktritt', 'Widerruf', 'Widerrufsformular', 'Muster-Widerrufsformular'],
  },
  landing: {
    title: 'Withdrawal from Online Purchase Austria {rok} – free PDF template',
    description:
      'Withdrawal from an online purchase under the Austrian FAGG, explained in English: within 14 days, no reason needed. Bilingual PDF or Word, free.',
    perex: 'Bought something online and changed your mind? Under the FAGG you can withdraw (Rücktritt) within 14 days without giving a reason.',
    obsahPopis: 'Text based on the model withdrawal form (Muster-Widerrufsformular).',
    obsah: [
      { nazev: 'Retailer', popis: 'Who the withdrawal is addressed to.' },
      { nazev: 'Purchase', popis: 'Goods, order number, dates.' },
      { nazev: 'Your details', popis: 'Name, address, IBAN.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Details from the order confirmation.' },
      { nazev: 'Send it', popis: 'E-mail, form in the shop or post – keep the proof.' },
      { nazev: 'Send the goods back', popis: 'Within 14 days.' },
    ],
    online: [
      'Fill it in with explanations for every field',
      'Signature on screen',
      'Download as PDF and Word',
      'Refund reminder in your calendar',
    ],
    hodiSe: [
      'a purchase in an online shop or by telephone',
      'a contract concluded on your doorstep',
    ],
    nehodiSe: [
      'a purchase in a shop',
      'a purchase from private individuals',
    ],
    po: [
      { nazev: 'Refund', popis: 'The retailer pays you back within 14 days.' },
    ],
    faq: [
      { q: 'Do I have to give a reason?', a: 'No.' },
      { q: 'By when do I have to withdraw?', a: '14 days from receipt of the goods; sending the withdrawal in time is enough.' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony:
      'The template is based on Sections 11–14 of the Austrian Distance and Off-Premises Contracts Act (Fern- und Auswärtsgeschäfte-Gesetz, FAGG) and the model withdrawal form (Annex I Part B FAGG).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a withdrawal from an online purchase – Austria, PDF',
    description: 'Guide in English: withdrawal from an online purchase in Austria under the FAGG. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'withdrawal', g: 'withdrawal', a: 'withdrawal', l: 'withdrawal' },
    kroky: {
      haendler: { nazev: 'Retailer', popis: 'The details are in the shop’s legal notice (Impressum) or in its information on the right of withdrawal (Widerrufsbelehrung).' },
      kauf: { nazev: 'Purchase' },
      sie: { nazev: 'Your details' },
    },
    pole: {
      pr_nazev: { popis: 'Retailer (company name)', placeholder: 'e.g. Muster Versand GmbH' },
      pr_adresa: { popis: 'Address or e-mail for the withdrawal' },
      zbozi: { popis: 'Goods or service', placeholder: 'e.g. Kopfhörer Sony WH-1000XM5, schwarz (Sony WH-1000XM5 headphones, black)' },
      objednavka: { popis: 'Order number' },
      objednano: { popis: 'Ordered on' },
      prevzato: { popis: 'Received on', napoveda: 'The 14 days run from this day.' },
      p_jmeno: { popis: 'First name and surname' },
      p_adresa: { popis: 'Address' },
      ucet: { popis: 'IBAN for the refund (optional)', napoveda: 'If you leave it empty, the retailer refunds using the original means of payment.' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', 'Text based on the statutory model withdrawal form. No reason is needed.', ''],
    coDal: [
      'Send the withdrawal by e-mail, via the form or the withdrawal function in the shop, or by post – keep the proof.',
      'Send the goods back no later than 14 days after the withdrawal.',
      'The retailer refunds all payments, including standard delivery costs, within 14 days.',
    ],
    kontrola: [
      'The period is 14 days from receipt of the goods (for services, from conclusion of the contract). Sending the withdrawal in time is enough.',
      'For contracts from 1 October 2026, online shops must offer an online withdrawal function (“Widerrufsbutton”) (Section 13a FAGG). Withdrawal by letter or e-mail remains effective.',
      'The right of withdrawal (Rücktritt) under the Distance and Off-Premises Contracts Act (FAGG) only applies to purchases from businesses at a distance or off business premises – not in a shop and not between private individuals.',
      'Exceptions: e.g. goods made to measure, perishable goods, unsealed hygiene products, unsealed data carriers, leisure services on a fixed date.',
      'You only bear the cost of returning the goods if the business informed you of this in advance.',
      'If you were not informed of the right of withdrawal, the period is extended by 12 months ([WKO](https://www.wko.at/internetrecht/ruecktrittsrecht-bei-warenkauf-im-internet)).',
    ],
    pripominky: {
      'Händler muss Geld zurückzahlen (Richtwert)': {
        nazev: 'Retailer must refund the money (guide date)',
        popis: 'No later than 14 days after receiving the withdrawal; the retailer may wait until the goods are back or you prove that you have sent them.',
      },
    },
  },

  dokument: {
    nazev: 'Withdrawal (Cancellation)',
    podnadpis: 'from a distance contract under Section 11 FAGG (model withdrawal form)',
    podpisy: { vlevo: 'consumer', vpravo: 'received for the retailer (if handed in in person)' },
    clanky: [
      {
        nadpis: 'To',
        odstavce: ['{{pr_nazev}}, {{pr_adresa}}'],
      },
      {
        nadpis: 'Withdrawal',
        odstavce: [
          'I hereby withdraw from the contract concluded by me for the purchase of the following goods / the provision of the following service: {{zbozi}}',
          'Ordered on {{objednano}} / received on {{prevzato}} · Order number: {{objednavka}}',
          'Please refund the amount to the account IBAN {{ucet}}.',
        ],
      },
      {
        nadpis: 'Consumer',
        odstavce: ['{{p_jmeno}}, {{p_adresa}}'],
      },
    ],
  },
} satisfies PrekladDokumentu;

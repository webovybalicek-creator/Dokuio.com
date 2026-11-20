/**
 * English version: withdrawal from an online purchase (Germany). Original: src/obsah/de/widerruf.ts
 * and src/sablony/de/widerruf.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-WIDERRUF', verze: '1.0' },

  nazev: 'Withdrawal from an Online Purchase',
  nazevA: 'the withdrawal from an online purchase',
  katalog: {
    popis: 'Withdraw from an online purchase within 14 days.',
    slova: ['withdrawal', 'cancellation', 'withdrawal form', 'return goods', 'online shop', 'online purchase', '14 days', 'Widerruf', 'Widerrufsformular', 'Muster-Widerrufsformular'],
  },
  landing: {
    title: 'Online Purchase Withdrawal Germany {rok} – free PDF template',
    description:
      'Withdrawal form for Germany based on the statutory model: withdraw from an online purchase within 14 days and request a refund. Free bilingual PDF or Word.',
    perex: 'Bought online and changed your mind? With the statutory model form you withdraw within 14 days without giving a reason.',
    obsahPopis: 'Text based on the model withdrawal form (Muster-Widerrufsformular).',
    obsah: [
      { nazev: 'Trader', popis: 'Who the withdrawal is addressed to.' },
      { nazev: 'Purchase', popis: 'Goods, order number, dates.' },
      { nazev: 'Your details', popis: 'Name, address, IBAN.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Details from the order confirmation.' },
      { nazev: 'Send it', popis: 'E-mail, the shop’s form or post – keep proof.' },
      { nazev: 'Send the goods back', popis: 'Within 14 days.' },
    ],
    online: [
      'Fill it in with explanations for every field',
      'Signature on screen',
      'Download as PDF and Word',
      'Refund reminder in your calendar',
    ],
    hodiSe: [
      'Purchase in an online shop or by phone',
      'Contract concluded on your doorstep',
    ],
    nehodiSe: [
      'Purchase in a shop',
      'Purchase from private individuals',
    ],
    po: [
      { nazev: 'Refund', popis: 'The trader refunds you within 14 days.' },
    ],
    faq: [
      { q: 'Do I have to give a reason?', a: 'No.' },
      { q: 'By when do I have to withdraw?', a: '14 days from receipt of the goods; sending the withdrawal in time is sufficient.' },
      { q: 'Do you store my data?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Sections 355 and 357 of the German Civil Code (BGB) and the model withdrawal form (Muster-Widerrufsformular, Annex 2 EGBGB – Introductory Act to the Civil Code).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in an online purchase withdrawal – Germany, model form PDF',
    description: 'Withdrawal form for online purchases in Germany. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'withdrawal', g: 'withdrawal', a: 'withdrawal', l: 'withdrawal' },
    kroky: {
      haendler: { nazev: 'Trader', popis: 'The details are in the shop’s legal notice (Impressum) or its withdrawal information (Widerrufsbelehrung).' },
      kauf: { nazev: 'Purchase' },
      sie: { nazev: 'Your details' },
    },
    pole: {
      pr_nazev: { popis: 'Trader (company name)', placeholder: 'e.g. Muster Versand GmbH' },
      pr_adresa: { popis: 'Address or e-mail for the withdrawal' },
      zbozi: { popis: 'Goods or service', placeholder: 'e.g. Kopfhörer Sony WH-1000XM5, schwarz (Sony WH-1000XM5 headphones, black)' },
      objednavka: { popis: 'Order number' },
      objednano: { popis: 'Ordered on' },
      prevzato: { popis: 'Received on', napoveda: 'The 14 days run from this day.' },
      p_jmeno: { popis: 'First name and surname' },
      p_adresa: { popis: 'Address' },
      ucet: { popis: 'IBAN for the refund (optional)', napoveda: 'If left empty, the trader refunds you using the original means of payment.' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [
      '',
      'Text based on the statutory model withdrawal form. No reason needs to be given.',
      '',
    ],
    coDal: [
      'Send the withdrawal by e-mail, via the shop’s form or withdrawal function, or by post – keep proof.',
      'Send the goods back no later than 14 days after the withdrawal.',
      'The trader refunds all payments, including standard delivery costs, within 14 days.',
    ],
    kontrola: [
      'The period is 14 days from receipt of the goods (for services, from conclusion of the contract). It is sufficient to send the withdrawal in time.',
      'Since 19 June 2026, online shops must offer a withdrawal button ([Section 356a BGB](https://www.gesetze-im-internet.de/bgb/__356a.html)). A withdrawal by letter or e-mail using this form remains valid.',
      'The right of withdrawal only applies to purchases from businesses at a distance (online shop, phone) or off business premises – not in a shop and not between private individuals.',
      'Exceptions: e.g. goods made to measure, perishable goods, unsealed hygiene products, unsealed data carriers, travel and events with a fixed date.',
      'You only bear the return costs if the trader informed you of this beforehand.',
      'If the withdrawal information was missing, the period is extended to up to 12 months and 14 days.',
    ],
    pripominky: {
      'Händler muss Geld zurückzahlen (Richtwert)': {
        nazev: 'Trader must refund the money (guide date)',
        popis: 'No later than 14 days after receipt of the withdrawal; the trader may wait until the goods are back or you prove you have sent them.',
      },
    },
  },

  dokument: {
    nazev: 'Withdrawal',
    podnadpis: 'from a contract concluded at a distance (Section 355 BGB, German Civil Code; model withdrawal form)',
    podpisy: { vlevo: 'consumer', vpravo: 'received for the trader (if delivered in person)' },
    clanky: [
      { nadpis: 'To', odstavce: ['{{pr_nazev}}, {{pr_adresa}}'] },
      {
        nadpis: 'Withdrawal',
        odstavce: [
          'I hereby withdraw from the contract concluded by me for the purchase of the following goods / the provision of the following service: {{zbozi}}',
          'Ordered on {{objednano}} / received on {{prevzato}} · Order number: {{objednavka}}',
          'Please refund the amount to the account IBAN {{ucet}}.',
        ],
      },
      { nadpis: 'Consumer', odstavce: ['{{p_jmeno}}, {{p_adresa}}'] },
    ],
  },
} satisfies PrekladDokumentu;

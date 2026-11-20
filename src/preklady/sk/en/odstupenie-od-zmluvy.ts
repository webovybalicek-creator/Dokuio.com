/**
 * English version: withdrawal from a contract (Slovakia). Original: src/obsah/sk/odstupenie-od-zmluvy.ts
 * and src/sablony/sk/odstupenie-od-zmluvy.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-ODSTUPENIE-14', verze: '1.0' },

  nazev: 'Withdrawal from the Contract',
  nazevA: 'the withdrawal from the contract',
  katalog: {
    popis: 'Returning goods bought online within 14 days.',
    slova: ['withdrawal from contract', 'withdrawal form', 'return goods', 'online shop', 'e-shop', '14 days', 'cancellation', 'odstúpenie od zmluvy', 'vrátenie tovaru'],
  },
  landing: {
    title: 'Withdrawal from Contract Slovakia {rok} – free PDF template',
    description:
      'Free form for withdrawal from a contract (odstúpenie od zmluvy) with an online shop within 14 days under Slovak Act No. 108/2024 Coll. Bilingual PDF and Word.',
    perex: 'Bought something online and don’t want it? Within 14 days of receiving the goods you can withdraw without giving a reason.',
    obsahPopis: 'Text based on the model form in the law.',
    obsah: [
      { nazev: 'Seller', popis: 'Who you are sending the withdrawal to.' },
      { nazev: 'Purchase', popis: 'Goods, order, dates.' },
      { nazev: 'Your details', popis: 'Name, address, IBAN.' },
    ],
    kroky: [
      { nazev: 'Fill in', popis: 'Details from the order confirmation.' },
      { nazev: 'Send', popis: 'By e-mail, the online shop’s form or post.' },
      { nazev: 'Return the goods', popis: 'Within 14 days.' },
    ],
    online: [
      'Filling in with an explanation of every field',
      'Signature on screen',
      'Download as PDF and Word, or send by e-mail',
      'Calendar reminder for the refund',
    ],
    hodiSe: [
      'A purchase from an online shop or by phone',
      'A contract signed at your home',
    ],
    nehodiSe: [
      'A purchase in a physical shop',
      'A purchase from a private individual',
    ],
    po: [
      { nazev: 'Money', popis: 'The seller will refund it within 14 days.' },
    ],
    faq: [
      { q: 'Do I have to give a reason?', a: 'No.' },
      { q: 'By when can I withdraw?', a: '14 days from receiving the goods; it is enough to send the withdrawal within the deadline.' },
      { q: 'Do you store my details?', a: 'No. The document is created only in your browser.' },
    ],
    zakony: 'The template is based on Sections 19 and 20 of Act No. 108/2024 Coll. on Consumer Protection (zákon o ochrane spotrebiteľa).',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Withdrawal from a contract online – Slovakia, free PDF',
    description: 'Guide in English for withdrawing from an online shop contract in Slovakia. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'withdrawal notice', g: 'withdrawal notice', a: 'withdrawal notice', l: 'withdrawal notice' },
    kroky: {
      obchod: { nazev: 'Seller', popis: 'You will find the details in the terms and conditions (obchodné podmienky) or in the footer of the online shop.' },
      nakup: { nazev: 'Purchase' },
      vy: { nazev: 'Your details' },
    },
    pole: {
      pr_nazev: { popis: 'Seller (business name)', placeholder: 'e.g. Alza.sk s.r.o.' },
      pr_ico: { popis: 'Company ID number IČO (optional)' },
      pr_adresa: { popis: 'Address or e-mail for withdrawal' },
      zbozi: { popis: 'Goods or service', placeholder: 'e.g. bezdrôtové slúchadlá Sony WH-1000XM5, čierne (Sony WH-1000XM5 wireless headphones, black)' },
      objednavka: { popis: 'Order number' },
      objednano: { popis: 'Date of order' },
      prevzato: { popis: 'Date of receipt', napoveda: 'The 14 days run from this day.' },
      p_jmeno: { popis: 'Full name' },
      p_adresa: { popis: 'Address' },
      p_kontakt: { popis: 'E-mail or phone' },
      ucet: { popis: 'IBAN for the refund (optional)', napoveda: 'Without it, the seller will refund the money by the same method you used to pay.' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', 'Text based on the model form in the law. You don’t have to give a reason.', ''],
    coDal: [
      'Send the withdrawal by e-mail, by post or via the withdrawal form or button in the online shop – keep proof that you sent it.',
      'Send the goods back no later than 14 days after withdrawing.',
      'The seller will refund all payments, including the cheapest delivery option offered, within 14 days.',
      'Not getting your money back? Contact the Slovak Trade Inspection (Slovenská obchodná inšpekcia).',
    ],
    kontrola: [
      'The deadline is 14 days from receiving the goods (for services, from concluding the contract). It is enough to send the withdrawal within the deadline.',
      'From 19 June 2026 online shops must offer an online “withdraw from the contract here” function (Section 20a of Act No. 108/2024 Coll.). This letter or e-mail is still a valid way of withdrawing.',
      'This applies only to purchases at a distance (online shop, phone) or off-premises from a trader. In a physical shop and between private individuals there is no such statutory right.',
      'Exceptions: made-to-measure goods, perishable goods, unsealed hygiene goods, unsealed media and software, accommodation and transport for a specific date.',
      'You bear the cost of returning the goods only if the seller informed you of this in advance.',
      'If the seller did not inform you of the right to withdraw, the deadline is extended by up to 12 months.',
    ],
    pripominky: {
      'Predávajúci má vrátiť peniaze (orientačne)': {
        nazev: 'Seller should refund the money (approximate date)',
        popis: 'Within 14 days of receiving the withdrawal; the seller may wait until they get the goods back or you prove that you have sent them.',
      },
    },
  },

  dokument: {
    nazev: 'Withdrawal from the Contract',
    podnadpis: 'concluded at a distance, under Section 19 of Act No. 108/2024 Coll. on Consumer Protection',
    podpisy: { vlevo: 'consumer', vpravo: 'received on behalf of the seller (if delivered in person)' },
    clanky: [
      { nadpis: 'Addressee', odstavce: ['{{pr_nazev}}, IČO {{pr_ico}}, {{pr_adresa}}'] },
      {
        nadpis: 'Notice of Withdrawal from the Contract',
        odstavce: [
          'I hereby give notice that I withdraw from the contract for the following goods / from the contract for the provision of the following service: {{zbozi}}',
          'Order number: {{objednavka}} · Date of order: {{objednano}} · Date of receipt: {{prevzato}}',
          'Please refund the payment to the account IBAN {{ucet}}.',
        ],
      },
      { nadpis: 'Consumer', odstavce: ['{{p_jmeno}}, {{p_adresa}}, contact: {{p_kontakt}}'] },
    ],
  },
} satisfies PrekladDokumentu;

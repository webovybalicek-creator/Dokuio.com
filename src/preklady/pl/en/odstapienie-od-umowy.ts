/**
 * English version: withdrawal from a distance contract (Poland). Original: src/obsah/pl/odstapienie-od-umowy.ts
 * and src/sablony/pl/odstapienie-od-umowy.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-ODSTAPIENIE', verze: '1.0' },

  nazev: 'Withdrawal from a Contract',
  nazevA: 'the withdrawal from a contract',
  katalog: {
    popis: 'Returning an online purchase within 14 days.',
    slova: ['withdrawal from contract', 'return', 'online shop', '14 days', 'withdrawal form', 'refund', 'cancel order', 'odstąpienie od umowy', 'zwrot'],
  },
  landing: {
    title: 'Withdrawal from a Contract Poland {rok} – free PDF template',
    description:
      'Withdrawal from a distance contract in Poland based on the statutory model form: 14 days, no reason needed. Free bilingual PDF or Word (Polish + English).',
    perex: 'Bought something online and it isn’t right? Within 14 days you can withdraw from the contract without giving a reason.',
    obsahPopis: 'Wording based on the statutory model form.',
    obsah: [
      { nazev: 'Seller', popis: 'Who you are sending it to.' },
      { nazev: 'Purchase', popis: 'Goods, order, dates.' },
      { nazev: 'Your details', popis: 'Name, address, bank account.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Details from the order confirmation.' },
      { nazev: 'Send it', popis: 'By e-mail, via the shop’s form or by post.' },
      { nazev: 'Send the goods back', popis: 'Within 14 days.' },
    ],
    online: [
      'Filling in with an explanation of every field',
      'Signature on screen',
      'Download as PDF and Word or send by e-mail',
      'Reminder about the refund',
    ],
    hodiSe: ['Purchases in an online shop or by phone', 'A contract concluded off business premises'],
    nehodiSe: ['A purchase in a high-street (bricks-and-mortar) shop', 'A purchase from a private individual'],
    po: [{ nazev: 'Refund', popis: 'The seller refunds the payments within 14 days.' }],
    faq: [
      { q: 'Do I have to give a reason?', a: 'No.' },
      { q: 'Until when can I withdraw?', a: '14 days from receiving the goods; it is enough to send the statement within this period.' },
      { q: 'Do you store my details?', a: 'No. The document is created solely in your browser.' },
    ],
    zakony:
      'The template is based on Articles 27–32 of the Polish Consumer Rights Act (ustawa o prawach konsumenta) and the model form in Annex No. 2 to it.',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Withdrawal from a contract online – Poland, free PDF',
    description: 'Withdrawal form for Poland with explanations in English. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · result as PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'withdrawal', g: 'withdrawal', a: 'withdrawal', l: 'withdrawal' },
    kroky: {
      sklep: { nazev: 'Seller', popis: 'You will find the details in the shop’s terms and conditions (regulamin) or in the footer of its website.' },
      zakup: { nazev: 'Purchase' },
      ty: { nazev: 'Your details' },
    },
    pole: {
      pr_nazev: { popis: 'Seller (company name)' },
      pr_ico: { popis: 'NIP – tax identification number (optional)' },
      pr_adresa: { popis: 'Address or e-mail for withdrawals' },
      zbozi: { popis: 'Goods or service', placeholder: 'e.g. słuchawki Sony WH-1000XM5, czarne (headphones, black)' },
      objednavka: { popis: 'Order number' },
      objednano: { popis: 'Date the contract was concluded' },
      prevzato: { popis: 'Date of receipt', napoveda: 'The 14 days run from this day.' },
      p_jmeno: { popis: 'First name and surname' },
      p_adresa: { popis: 'Address' },
      ucet: { popis: 'Bank account number for the refund (optional)' },
      misto: { popis: 'Town' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [
      '',
      'Wording based on the model form in Annex No. 2 to the Act. You do not have to give a reason.',
      '',
    ],
    coDal: [
      'Send the statement by e-mail, via the form in the shop or by post – keep proof of sending.',
      'Send the goods back no later than 14 days after withdrawing.',
      'The seller refunds all payments, including the cost of the cheapest delivery option offered, within 14 days.',
      'A problem? Help is available from the municipal or district consumer ombudsman (rzecznik konsumentów).',
    ],
    kontrola: [
      'The period is 14 days from receiving the goods (for services, from concluding the contract). It is enough to send the statement before it expires.',
      'EU Directive 2023/2673 introduces a “withdraw from the contract here” button in online shops; the Polish amendment to the Consumer Rights Act is in preparation. This letter or e-mail remains an effective way to withdraw.',
      'The right applies to purchases from a business at a distance (online shop, phone) or off business premises – not in a high-street shop and not between private individuals.',
      'Exceptions include goods made to order, goods that spoil quickly, unsealed hygiene products, unsealed recordings and software, and services for a specific date.',
      'You bear the cost of sending the goods back only if the seller told you so in advance.',
      'If the seller did not inform you of the right of withdrawal, the period is extended by 12 months.',
    ],
    pripominky: {
      'Sprzedawca ma zwrócić pieniądze (orientacyjnie)': {
        nazev: 'The seller is due to refund the money (approximate date)',
        popis: 'Within 14 days of receiving the statement; the seller may withhold the refund until it receives the goods or proof that they were sent back.',
      },
    },
  },

  dokument: {
    nazev: 'Withdrawal from a Contract',
    podnadpis: 'concluded at a distance (Article 27 of the Consumer Rights Act – ustawa o prawach konsumenta)',
    podpisy: { vlevo: 'consumer', vpravo: 'received on behalf of the seller (if submitted in person)' },
    clanky: [
      { nadpis: 'Addressee', odstavce: ['{{pr_nazev}}, NIP {{pr_ico}}, {{pr_adresa}}'] },
      {
        nadpis: 'Statement of Withdrawal from the Contract',
        odstavce: [
          'I hereby give notice that I withdraw from the contract of sale of the following goods / the contract for the provision of the following service: {{zbozi}}',
          'Date the contract was concluded: {{objednano}} · date of receipt: {{prevzato}} · order number: {{objednavka}}',
          'Please refund the payments to account No. {{ucet}}.',
        ],
      },
      { nadpis: 'Consumer', odstavce: ['{{p_jmeno}}, {{p_adresa}}'] },
    ],
  },
} satisfies PrekladDokumentu;

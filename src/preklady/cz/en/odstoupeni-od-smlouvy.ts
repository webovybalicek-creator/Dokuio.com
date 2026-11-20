/**
 * English version: withdrawal from a contract within 14 days (Czech Republic). Original: src/obsah/cz/odstoupeni-od-smlouvy.ts
 * and src/sablony/cz/odstoupeni-od-smlouvy.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-ODSTOUPENI-14', verze: '1.0' },

  nazev: 'Withdrawal from a Contract within 14 Days',
  nazevA: 'the withdrawal notice',
  katalog: {
    popis: 'Returning goods bought online without giving a reason.',
    slova: ['return goods', 'online shop', 'e-shop', '14 days', 'withdrawal', 'cancel an order', 'refund', 'withdrawal form', 'odstoupení od smlouvy', 'vrácení zboží'],
  },
  landing: {
    title: 'Withdrawal Form (14 Days) Czech Republic {rok} – free PDF template',
    description:
      'Form for withdrawing from an online purchase in the Czech Republic within 14 days, explained in English. Bilingual PDF or Word (Czech + English), free.',
    perex: 'Bought something online and want to return it? Within 14 days of receiving the goods you can withdraw from the contract without giving a reason. The form is based on the official state template.',
    obsahPopis: 'Content follows the model form in Government Regulation No. 29/2023 Coll. (nařízení vlády).',
    obsah: [
      { nazev: 'Addressee', popis: 'The seller – name, company ID number (IČO), address for withdrawal.' },
      { nazev: 'Notice of withdrawal', popis: 'Goods, order number, dates of order and receipt, account for the refund.' },
      { nazev: 'Consumer', popis: 'Your name, address and contact details.' },
    ],
    kroky: [
      { nazev: 'Fill in the purchase', popis: 'You will find the order number and dates in the confirmation e-mail.' },
      { nazev: 'Download and send', popis: 'By e-mail, by registered post or through the shop’s form – within 14 days of receipt.' },
      { nazev: 'Return the goods', popis: 'Within 14 days of withdrawing. The money must arrive within 14 days.' },
    ],
    online: ['Based on the official model form', 'Check of the 14-day period', 'Account for the refund', 'Download as PDF and Word'],
    hodiSe: ['you bought from an online shop, by phone or from a doorstep seller', 'you bought as a consumer (not under a business ID number)', 'fewer than 14 days have passed since you received the goods'],
    nehodiSe: ['the goods are defective – make a complaint about defects (reklamace; you have 24 months for it)', 'you bought in a physical shop – a return there is only the shop’s goodwill', 'you bought from a private individual (second-hand shop, classified ad)'],
    poNadpis: 'After sending.',
    po: [
      { nazev: 'Proof of sending', popis: 'Keep the e-mail, the postal receipt or the shop’s confirmation.' },
      { nazev: 'Goods back within 14 days', popis: 'Undamaged, with all accessories.' },
      { nazev: 'Money within 14 days', popis: 'The shop may wait until it receives the goods or proof that they were sent. Otherwise the Czech Trade Inspection Authority (ČOI) can help.' },
    ],
    faq: [
      { q: 'Do I have to give a reason?', a: 'No. When you buy at a distance, you can withdraw within 14 days without giving a reason.' },
      { q: 'From when are the 14 days counted?', a: 'For goods, from receiving them; for services, from concluding the contract. It is enough to send the withdrawal within this period.' },
      { q: 'Who pays the postage for the return?', a: 'You do, if the shop informed you of this in advance. Otherwise the shop bears the costs. The shop refunds the original delivery (the cheapest option offered).' },
      { q: 'Do I have to return the goods in the original packaging?', a: 'No, the packaging only has to protect the goods. However, the goods must not be damaged beyond what is necessary to try them out.' },
      { q: 'Do you store my details?', a: 'No. The form is put together directly in your browser.' },
    ],
    zakony:
      'The template is based on Section 1829 et seq. of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník), and the model form in Government Regulation No. 29/2023 Coll. (nařízení vlády, as amended by Regulation No. 66/2026 Coll.).',
    souvisejiciPopis: 'Other useful documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a 14-day withdrawal notice online – Czech Republic, PDF',
    description: 'Guide in English for withdrawing from an online purchase in the Czech Republic within 14 days. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'withdrawal notice', g: 'withdrawal notice', a: 'withdrawal notice', l: 'withdrawal notice' },
    kroky: {
      obchod: { nazev: 'Shop', popis: 'You will find the details in the terms and conditions (obchodní podmínky) or in the footer of the online shop.' },
      nakup: { nazev: 'Purchase' },
      vy: { nazev: 'Your details and refund' },
    },
    pole: {
      pr_nazev: { popis: 'Seller (company name)', napoveda: 'The name in the terms and conditions or on the invoice, not just the name of the website.', placeholder: 'e.g. Alza.cz a.s.' },
      pr_ico: { popis: 'Company ID number – IČO (optional)', napoveda: 'You will find it on the invoice or in the terms and conditions.', placeholder: 'e.g. 27082440' },
      pr_adresa: { popis: 'Address for withdrawal', napoveda: 'The address or e-mail given in the terms and conditions for withdrawal and returning goods.', placeholder: 'e.g. Jankovcova 1522/53, 170 00 Praha 7' },
      zbozi: { popis: 'Goods or service', napoveda: 'What you are returning, ideally as stated on the invoice. Ideally write it in Czech.', placeholder: 'e.g. bezdrátová sluchátka Sony WH-1000XM5, černá (wireless headphones, black)' },
      objednavka: { popis: 'Order or invoice number', napoveda: 'The shop uses it to find your purchase.', placeholder: 'e.g. 2026112345' },
      objednano: { popis: 'Date of order', napoveda: 'From the confirmation e-mail.' },
      prevzato: { popis: 'Date of receipt', napoveda: 'When you received the goods. The 14 days run from this day.' },
      cena: { popis: 'Price paid (CZK, optional)', napoveda: 'Including delivery, if you paid for it.', placeholder: 'e.g. 7990' },
      p_jmeno: { popis: 'First name and surname', napoveda: 'As stated in the order.', placeholder: 'e.g. Jan Novák' },
      p_adresa: { popis: 'Address', napoveda: 'The address from the order.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      p_kontakt: { popis: 'E-mail or phone', napoveda: 'For communication with the shop.', placeholder: 'e.g. jan.novak@email.cz' },
      ucet: { popis: 'Bank account number for the refund', napoveda: 'If you leave it empty, the shop will refund the money the same way you paid.', placeholder: '123456789/0100' },
      duvod: { popis: 'Reason (optional)', napoveda: 'You don’t have to give a reason, but it may help the shop. Ideally write it in Czech.', placeholder: 'e.g. velikost nesedí (wrong size)' },
      misto: { popis: 'Place (town)', napoveda: 'We pre-fill it from your address.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date', napoveda: 'We pre-filled today – it must be within 14 days of receiving the goods.' },
    },
    vysvetleni: [
      'Who you are sending the withdrawal to.',
      'The withdrawal itself, following the model form in the Government Regulation. You don’t have to give a reason.',
      'Who is withdrawing.',
    ],
    coDal: [
      'Send the withdrawal by e-mail, by registered post or through the withdrawal form or button on the shop’s website – and keep proof of sending.',
      'Send the goods back no later than 14 days after withdrawing; suitable packaging is enough, it does not have to be the original.',
      'The shop must refund your money (including the cheapest delivery option offered) within 14 days of the withdrawal; it may wait until it gets the goods back or you prove that you sent them.',
      'Not getting your money back? Contact the Czech Trade Inspection Authority (Česká obchodní inspekce, ČOI) – out-of-court dispute resolution is free.',
    ],
    kontrola: [
      'The period is 14 days from receiving the goods (for services, from concluding the contract). What counts is the date the withdrawal is sent, not when it is delivered.',
      'From 1 January 2027, online shops must have a “Withdraw from the contract” button (“Odstoupit od smlouvy”) directly in their online interface (Section 1830a of the Civil Code as amended by Act No. 159/2026 Coll.). You can also withdraw with this letter or by e-mail.',
      'This only applies to purchases at a distance (online shop, phone) or off-premises from a business. In a physical shop and between private individuals there is no statutory right to return goods.',
      'Exceptions: made-to-measure goods, perishable goods, unsealed hygiene products, opened media and software, accommodation and transport for a specific date.',
      'You bear the cost of returning the goods only if the shop informed you of this in advance – check the terms and conditions.',
      'Return the goods undamaged; for a loss of value caused by handling beyond what is necessary, the shop may claim compensation.',
      'If the shop did not inform you of the right of withdrawal at all, the period is extended by up to 12 months.',
    ],
    pripominky: {
      'Prodávající má vrátit peníze (orientačně)': {
        nazev: 'The seller should refund the money (approximate)',
        popis: 'Within 14 days of delivery of the withdrawal. Counted from the date of the withdrawal – if it is delivered later, the deadline moves.',
      },
    },
  },

  dokument: {
    nazev: 'Withdrawal from a Contract',
    podnadpis: 'concluded at a distance, under Section 1829 of Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
    podpisy: { vlevo: 'consumer', vpravo: 'received on behalf of the seller (if delivered in person)' },
    clanky: [
      {
        nadpis: 'Addressee',
        odstavce: ['{{pr_nazev}}, company ID No. (IČO) {{pr_ico}}, {{pr_adresa}}'],
      },
      {
        nadpis: 'Notice of Withdrawal from the Contract',
        odstavce: [
          'I hereby give notice that I withdraw from the contract for the purchase of the following goods / for the provision of the following service: {{zbozi}}.',
          'Order number: {{objednavka}} · Date of order: {{objednano}} · Date of receipt: {{prevzato}} · Price: {{cena}}',
          'Reason (optional): {{duvod}}',
          'I request that the money paid be refunded to account No. {{ucet}}.',
        ],
      },
      {
        nadpis: 'Consumer',
        odstavce: ['{{p_jmeno}}, {{p_adresa}}, contact: {{p_kontakt}}'],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: payment demand (letter before action, Slovakia). Original: src/obsah/sk/vyzva-na-zaplatenie.ts
 * and src/sablony/sk/vyzva-na-zaplatenie.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-VYZVA-NA-ZAPLATENIE', verze: '1.0' },

  nazev: 'Payment Demand',
  nazevA: 'the payment demand',
  katalog: {
    popis: 'Letter before action to a debtor with a payment deadline and late-payment interest.',
    slova: ['payment demand', 'letter before action', 'demand letter', 'payment reminder', 'debtor', 'unpaid invoice', 'late payment interest', 'výzva na zaplatenie', 'predžalobná výzva', 'upomienka'],
  },
  landing: {
    title: 'Payment Demand Letter Slovakia {rok} – free PDF template',
    description:
      'Payment demand (letter before action) for Slovakia in English: amount, reason, deadline and late-payment interest under Section 517 OZ. Free bilingual PDF or Word.',
    perex: 'When a debtor has not paid an invoice or repaid a loan: the demand gives them a final deadline before court and is proof that you asked them to pay.',
    obsahPopis: 'A short payment demand letter (výzva na zaplatenie) in two parts.',
    obsah: [
      { nazev: 'Sender and addressee', popis: 'Creditor and debtor.' },
      { nazev: 'Payment demand', popis: 'Reason and amount of the debt, due date, new deadline, account, late-payment interest and a warning about court.' },
    ],
    kroky: [
      { nazev: 'Enter the debt', popis: 'Who, how much, from which invoice.' },
      { nazev: 'Set the deadline', popis: 'Usually 7–15 days.' },
      { nazev: 'Send by registered post', popis: 'With proof of delivery.' },
    ],
    online: ['Amount in words (in Slovak) automatically', 'Reminder of the end of the deadline in your calendar', 'Explanations for every field', 'Download as PDF and Word'],
    hodiSe: ['the debtor has not paid an invoice or repaid a loan', 'you are preparing a lawsuit or an application for a payment order (platobný rozkaz)'],
    nehodiSe: [
      'the debtor is in bankruptcy (konkurz) or debt relief (oddlženie) – lodge your claim in those proceedings',
      'the claim is disputed or large – consult a lawyer',
    ],
    po: [
      { nazev: 'Wait for the deadline', popis: 'Reminder in your calendar.' },
      { nazev: 'Court', popis: 'A lawsuit or an application for a payment order.' },
      { nazev: 'Instalments?', popis: 'If the debtor wants to pay in instalments, draw up an acknowledgement of debt (uznanie dlhu).' },
    ],
    faq: [
      { q: 'When is a debtor in default?', a: 'When they do not pay properly and on time. The creditor may then also claim late-payment interest at the rate set by the implementing regulation (Section 517 of the Civil Code).' },
      { q: 'How should I send the demand?', a: 'By registered post with proof of delivery to the permanent address, or to a company’s registered office. Keep the postal receipt.' },
      { q: 'Do you store my details?', a: 'No. The document is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Section 517 of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník).',
    souvisejiciPopis: 'More documents about money and debts, also free.',
  },
  vytvorit: {
    title: 'Fill in a payment demand online – Slovakia, PDF',
    description: 'Guide in English for a payment demand (letter before action) in Slovakia. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'demand', g: 'demand', a: 'demand', l: 'demand' },
    kroky: {
      strany: { nazev: 'Creditor and debtor' },
      dlh: { nazev: 'Debt' },
      platba: { nazev: 'Deadline and payment' },
    },
    pole: {
      k_jmeno: { popis: 'Creditor – first name and surname, or company', placeholder: 'e.g. Ján Kováč' },
      k_ico: { popis: 'Creditor’s IČO (company ID number) or date of birth', placeholder: 'e.g. 12345678' },
      k_adresa: { popis: 'Creditor’s address', placeholder: 'e.g. Hlavná 12, 811 01 Bratislava' },
      k_kontakt: { popis: 'Phone or e-mail (optional)' },
      p_jmeno: { popis: 'Debtor – first name and surname, or company', placeholder: 'e.g. Peter Horváth' },
      p_ico: { popis: 'Debtor’s IČO or date of birth', placeholder: 'e.g. 87654321' },
      p_adresa: { popis: 'Debtor’s address', napoveda: 'Permanent address; for a company, the registered office from the Commercial Register (obchodný register).', placeholder: 'e.g. Mlynská 5, 040 01 Košice' },
      castka: { popis: 'Amount owed (€)', napoveda: 'The principal without interest. We add the amount in words (in Slovak) ourselves.', placeholder: 'e.g. 1200' },
      splatnost: { popis: 'Original due date' },
      duvod: {
        popis: 'What the debt arose from',
        moznosti: { faktura: 'Unpaid invoice', pozicka: 'Unrepaid loan', kupna: 'Unpaid purchase price', ine: 'Other reason' },
      },
      duvod_popis: { popis: 'Details', placeholder: 'e.g. faktúra č. 2026015 zo dňa 1. 10. 2026 (invoice No. 2026015 of 1 October 2026)' },
      urok: {
        popis: 'Claim late-payment interest?',
        moznosti: { ano: 'Yes, statutory late-payment interest', nie: 'No, only the amount owed' },
      },
      zaplatit_do: { popis: 'Pay no later than', napoveda: 'Usually 7–15 days.' },
      ucet: { popis: 'IBAN', placeholder: 'SK12 3456 7890 1234 5678 9012' },
      vs: { popis: 'Variable symbol (variabilný symbol, optional payment reference)' },
      misto: { popis: 'Place', placeholder: 'e.g. Bratislava' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Sign the demand and send it by registered post with proof of delivery. Keep the postal receipt – it proves that you sent it.',
      'Send it to the debtor’s permanent address, or to a company’s registered office according to the Commercial Register.',
      'If the debtor does not pay, you can file a lawsuit or an application for a payment order (platobný rozkaz) with the court.',
    ],
    kontrola: [
      'If the debtor does not pay on time, they are in default and the creditor may claim late-payment interest at the rate set by the implementing regulation ([Section 517 OZ](https://static.slov-lex.sk/static/SK/ZZ/1964/40/)).',
      'State exactly what the debtor owes, for what reason (invoice, contract, due date) and how much.',
      'Deadline for payment: reasonable, usually 7–15 days from delivery.',
      'Send the demand in a way that lets you prove delivery (registered post with proof of delivery).',
      'Do not threaten anything other than court – pressure or publicising the debtor may be unlawful.',
      'The Civil Code (Občiansky zákonník) was repealed by Act No. 260/2026 Coll. and will be replaced by a new one – if you use the template after the new code takes effect, check the current wording first.',
    ],
    pripominky: {
      'Koniec lehoty z výzvy na zaplatenie': {
        nazev: 'End of the deadline in the payment demand',
        popis: 'Check the payment. If it has not arrived, you can file a lawsuit or an application for a payment order.',
      },
    },
  },

  dokument: {
    nazev: 'Payment Demand',
    podnadpis: 'letter before action under Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník)',
    podpisy: { vlevo: 'creditor', vpravo: 'received by the debtor (if handed over in person)' },
    clanky: [
      {
        nadpis: 'Sender and Addressee',
        odstavce: [
          '**Creditor:** {{k_jmeno}}, IČO / date of birth {{k_ico}}, {{k_adresa}}, contact {{k_kontakt}}',
          '**Debtor:** {{p_jmeno}}, IČO / date of birth {{p_ico}}, {{p_adresa}}',
        ],
      },
      {
        nadpis: 'Payment Demand',
        odstavce: [
          'Dear Madam or Sir,',
          {
            uvodVzor: 'reason for the debt (tick one option):',
            moznosti: {
              faktura: 'according to our records, you have an unpaid invoice – {{duvod_popis}}.',
              pozicka: 'you have not yet repaid the loan – {{duvod_popis}}.',
              kupna: 'you have not yet paid the purchase price – {{duvod_popis}}.',
              ine: 'according to our records, you owe the following debt: {{duvod_popis}}.',
            },
          },
          'The amount owed is {{castka}} and was due on {{splatnost}}. To date it has not been paid.',
          'I hereby call on you to pay this amount no later than {{zaplatit_do}} to the account IBAN {{ucet}}, variable symbol {{vs}}.',
          {
            uvodVzor: 'Late-payment interest (tick one option):',
            moznosti: {
              ano: 'I also claim payment of late-payment interest from the day following the due date until payment, at the rate under Section 517(2) of the Civil Code and its implementing regulation.',
              nie: 'If you pay the amount owed within the set deadline, I will not claim late-payment interest.',
            },
          },
          'If you do not pay the amount owed within the set deadline, I will pursue my claim in court without further notice. You would thereby also expose yourself to the obligation to reimburse the costs of the proceedings.',
          'If you have paid in the meantime, please disregard this demand.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

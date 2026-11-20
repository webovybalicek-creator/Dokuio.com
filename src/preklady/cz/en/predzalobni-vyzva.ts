/**
 * English version: letter before action (Czech Republic). Original: src/obsah/cz/predzalobni-vyzva.ts
 * and src/sablony/cz/predzalobni-vyzva.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-PREDZALOBNI-VYZVA', verze: '1.0' },

  nazev: 'Letter Before Action',
  nazevA: 'the letter before action',
  katalog: {
    popis: 'A final demand to the debtor before a lawsuit under Section 142a OSŘ.',
    slova: ['letter before action', 'payment demand', 'demand letter', 'payment reminder', 'debtor', 'unpaid invoice', 'lawsuit', 'debt collection', '142a', 'předžalobní výzva', 'výzva k zaplacení'],
  },
  landing: {
    title: 'Letter Before Action Czech Republic {rok} – free PDF template',
    description:
      'Letter before action for the Czech Republic under Section 142a OSŘ, explained in English: fill it in online and download a bilingual PDF or Word. Free.',
    perex: 'Before you file a lawsuit, you must ask the debtor to pay at least 7 days in advance. Otherwise the court may not award you the costs of the proceedings. This letter contains everything the law requires.',
    obsahPopis: 'A short letter in three parts under Section 142a of the Czech Code of Civil Procedure (občanský soudní řád, OSŘ).',
    obsah: [
      { nazev: 'Sender and addressee', popis: 'Creditor and debtor – name or company, IČO (company ID number), address for service.' },
      { nazev: 'Demand for payment', popis: 'Reason for and amount of the debt, original due date, new deadline and account, default interest.' },
      { nazev: 'Notice', popis: 'That this is a demand under Section 142a OSŘ and that a lawsuit will follow if the deadline passes without payment.' },
    ],
    kroky: [
      { nazev: 'Enter the debt', popis: 'Who, how much and under which invoice or contract. Explanations in English.' },
      { nazev: 'Set the deadline', popis: 'At least 7 days from sending; 10–15 days is reasonable.' },
      { nazev: 'Send it by registered post', popis: 'The postal receipt proves it was sent. File the lawsuit no earlier than 7 days later. The letter is bilingual: Czech original and English translation.' },
    ],
    online: ['The amount in words (in Czech) is added automatically', 'Debtor details loaded from ARES by IČO', 'Calendar reminder for the end of the deadline', 'Download as PDF and Word'],
    hodiSe: ['the debtor has not paid an invoice or repaid a loan', 'you are about to file a lawsuit or an application for a payment order (platební rozkaz)', 'you want to give the debtor a last chance to pay without going to court'],
    nehodiSe: ['the debtor is in insolvency (insolvence) – lodge your claim in the insolvency proceedings', 'the claim is disputed or large – consult a lawyer', 'the debtor acknowledges the debt and wants to pay it off – draw up an acknowledgement of debt (uznání dluhu)'],
    po: [
      { nazev: 'Send it by registered post', popis: 'To the address for service or the last known address.' },
      { nazev: 'Wait for the deadline', popis: 'Save the reminder to your calendar.' },
      { nazev: 'Lawsuit', popis: 'No earlier than 7 days after sending the letter, at the debtor’s district court (okresní soud).' },
    ],
    faq: [
      { q: 'Is a letter before action mandatory?', a: 'You can file a lawsuit without it, but the court will then usually not award you the costs of the proceedings (court fee, lawyer). Under Section 142a OSŘ the letter must be sent at least 7 days before the lawsuit is filed.' },
      { q: 'Where should I send the letter?', a: 'To the debtor’s address for service, for a company to its registered office (sídlo), and if you don’t know it, to the last known address. What matters is that you can prove you sent the letter – the debtor does not have to collect it.' },
      { q: 'Is a letter by e-mail enough?', a: 'The law does not prescribe a form, but in court you must prove that you sent it. The safest options are registered post with proof of delivery or a data box (datová schránka). Use e-mail only as a supplement.' },
      { q: 'How much is default interest?', a: 'Per year, the CNB (Czech National Bank) repo rate valid on the first day of the half-year in which the default began, plus 8 percentage points (Government Regulation No. 351/2013 Coll.). In the letter it is enough to claim the interest.' },
      { q: 'Do you store my details?', a: 'No. The document is put together directly in your browser.' },
    ],
    zakony:
      'The template is based on Section 142a of Czech Act No. 99/1963 Coll., the Code of Civil Procedure (občanský soudní řád), Section 1970 of Act No. 89/2012 Coll., the Civil Code (občanský zákoník), and Government Regulation No. 351/2013 Coll. (nařízení vlády).',
    souvisejiciPopis: 'More documents on money and debts, also free.',
  },
  vytvorit: {
    title: 'Fill in a letter before action online – Czech Republic, PDF',
    description: 'Guide in English for a letter before action (demand for payment) in the Czech Republic under Section 142a OSŘ. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'letter', g: 'letter', a: 'letter', l: 'letter' },
    kroky: {
      strany: { nazev: 'Creditor and debtor', popis: 'The creditor sends the letter, the debtor receives it.' },
      dluh: { nazev: 'What the debtor owes' },
      zaplaceni: { nazev: 'Deadline and payment' },
    },
    pole: {
      k_jmeno: { popis: 'Creditor – first name and surname or company', napoveda: 'Who is claiming the money.', placeholder: 'e.g. Jan Novák' },
      k_ico: { popis: 'Creditor’s IČO or date of birth', napoveda: 'For a business, the IČO (company ID number); for a private individual, the date of birth.', placeholder: 'e.g. 12345678' },
      k_adresa: { popis: 'Creditor’s address', napoveda: 'Where the debtor can reply to you.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      k_kontakt: { popis: 'Phone or e-mail (optional)', placeholder: 'e.g. jan.novak@email.cz' },
      p_jmeno: { popis: 'Debtor – first name and surname or company', napoveda: 'For a company, the exact name from the Commercial Register (obchodní rejstřík).', placeholder: 'e.g. Petr Dvořák' },
      p_ico: { popis: 'Debtor’s IČO or date of birth', napoveda: 'Helps to identify the debtor clearly.', placeholder: 'e.g. 87654321' },
      p_adresa: { popis: 'Debtor’s address for service', napoveda: 'For a company, its registered office (sídlo); otherwise the address for service or the last known address.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      castka: { popis: 'Amount owed (CZK)', napoveda: 'The principal without interest. We add the amount in words (in Czech) ourselves.', placeholder: 'e.g. 25000' },
      splatnost: { popis: 'Original due date', napoveda: 'When the debtor should have paid (e.g. according to the invoice).' },
      duvod: {
        popis: 'What the debt arose from',
        moznosti: { faktura: 'Unpaid invoice', zapujcka: 'Unrepaid loan', kupni: 'Unpaid purchase price', jine: 'Other reason' },
      },
      duvod_popis: { popis: 'Details', napoveda: 'Invoice or contract number and date. Ideally write it in Czech.', placeholder: 'e.g. faktura č. 2026015 ze dne 1. 10. 2026 (invoice No. 2026015 of 1 Oct 2026)' },
      urok: {
        popis: 'Claim default interest?',
        napoveda: 'Statutory interest under Government Regulation No. 351/2013 Coll. You don’t need to calculate it.',
        moznosti: { ano: 'Yes, statutory default interest', ne: 'No, only the amount owed' },
      },
      zaplatit_do: { popis: 'Pay no later than', napoveda: 'At least 7 days from sending the letter; 10–15 days is reasonable.' },
      ucet: { popis: 'Account number', napoveda: 'Where the debtor should pay.', placeholder: '123456789/0100' },
      vs: { popis: 'Variable symbol (optional)', placeholder: 'e.g. 2026015' },
      misto: { popis: 'Place (town)', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date of sending', napoveda: 'We pre-filled today.' },
    },
    vysvetleni: [
      'Who is sending the letter and to whom.',
      'What the debtor owes, on what grounds and since when they have been in default.',
      'A demand under Section 142a OSŘ – without it, the creditor might not be awarded costs in court. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Sign the letter and send it by registered post with proof of delivery (or via a data box – datová schránka). Keep the postal receipt – it proves that you sent it.',
      'Send it to the debtor’s address for service, and if you don’t know it, to the last known address. You can also send a copy by e-mail.',
      'File the lawsuit no earlier than 7 days after sending the letter – otherwise the court may not award you the costs of the proceedings.',
      'If the debtor pays only part, ask for a written acknowledgement of the rest of the debt (uznání dluhu).',
    ],
    kontrola: [
      'Send the letter at least 7 days before filing the lawsuit; otherwise the court will usually not award you the costs of the proceedings (Section 142a OSŘ).',
      'Address: use the address for service (for a company, its registered office from the Commercial Register), otherwise the debtor’s last known address. It is enough that you can prove you sent the letter – the debtor does not have to collect it.',
      'State exactly what the debtor owes and why (invoice, contract, due date) and how much.',
      'Deadline for payment: at least 7 days from sending; 10–15 days is reasonable.',
      'Default interest is set by Government Regulation No. 351/2013 Coll. (CNB repo rate + 8 percentage points per year) – you don’t need to calculate it, it is enough to claim it.',
      'Do not threaten anything other than court action – threats of publication or other pressure may be unlawful.',
    ],
    pripominky: {
      'Konec lhůty k zaplacení z předžalobní výzvy': {
        nazev: 'End of the payment deadline in the letter before action',
        popis: 'Check whether the debtor has paid. If not, you can file a lawsuit (no earlier than 7 days after sending the letter).',
      },
      'Nejdřívější podání žaloby (7 dnů od odeslání výzvy)': {
        nazev: 'Earliest date to file a lawsuit (7 days after sending the letter)',
      },
    },
  },

  dokument: {
    nazev: 'Letter Before Action – Demand for Payment',
    podnadpis: 'under Section 142a of Act No. 99/1963 Coll., the Code of Civil Procedure (občanský soudní řád)',
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
        nadpis: 'Demand for Payment',
        odstavce: [
          'Dear Sir or Madam,',
          {
            uvodVzor: 'reason for the debt (tick one option):',
            moznosti: {
              faktura: 'according to our records, you have an unpaid invoice – {{duvod_popis}}.',
              zapujcka: 'you have not yet repaid the loan – {{duvod_popis}}.',
              kupni: 'you have not yet paid the purchase price – {{duvod_popis}}.',
              jine: 'according to our records, you owe the following debt: {{duvod_popis}}.',
            },
          },
          'The amount owed is {{castka}} and was due on {{splatnost}}. It has not been paid to date.',
          'I hereby call on you to pay the said amount no later than {{zaplatit_do}} to account No. {{ucet}}, variable symbol {{vs}}.',
          {
            uvodVzor: 'Default interest (tick one option):',
            moznosti: {
              ano: 'I also claim payment of statutory default interest from the day following the due date until payment, at the rate set by Government Regulation No. 351/2013 Coll.',
              ne: 'By this letter I do not claim default interest, provided that you pay the amount owed within the set deadline.',
            },
          },
        ],
      },
      {
        nadpis: 'Notice',
        odstavce: [
          'This letter is a demand for performance before filing a lawsuit under Section 142a of the Code of Civil Procedure.',
          'If you do not pay the amount owed within the set deadline, I will file a lawsuit with the competent court without further notice. You will thus expose yourself to the obligation to also reimburse the costs of the court proceedings, including the court fee and, where applicable, the costs of legal representation by a lawyer.',
          'If you have paid in the meantime, please disregard this letter. If anything is unclear, please contact me.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

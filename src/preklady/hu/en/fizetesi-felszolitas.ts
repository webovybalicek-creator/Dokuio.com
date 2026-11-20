/**
 * English version: payment demand (Hungary). Original: src/obsah/hu/fizetesi-felszolitas.ts
 * and src/sablony/hu/fizetesi-felszolitas.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-FIZETESI-FELSZOLITAS', verze: '1.0' },

  nazev: 'Payment Demand',
  nazevA: 'the payment demand',
  katalog: {
    popis: 'Final demand with a deadline and default interest.',
    slova: ['payment demand', 'demand letter', 'payment reminder', 'unpaid invoice', 'default interest', 'debt', 'debt collection', 'fizetési felszólítás', 'felszólító levél'],
  },
  landing: {
    title: 'Payment Demand Letter Hungary {rok} – free PDF template',
    description:
      'Payment demand for Hungary, explained in English: amount, legal ground, deadline and statutory default interest (Ptk. 6:48. §, 6:155. §). Bilingual PDF or Word, free.',
    perex: 'If an invoice has not been paid or a loan has not been repaid: the demand sets a final deadline before an order for payment (fizetési meghagyás) or a lawsuit.',
    obsahPopis: 'A short letter in two parts.',
    obsah: [
      { nazev: 'Sender and recipient', popis: 'Creditor and debtor.' },
      { nazev: 'Payment demand', popis: 'Legal ground, amount, due date, new deadline, account number, default interest.' },
    ],
    kroky: [
      { nazev: 'Debt', popis: 'Who, how much, which invoice.' },
      { nazev: 'Deadline', popis: 'Usually 8–15 days.' },
      { nazev: 'Letter with return receipt', popis: 'This way delivery can be proved.' },
    ],
    online: ['The amount in words (in Hungarian) is added automatically', 'Deadline in your calendar', 'Explanation for every field', 'Download as PDF and Word'],
    hodiSe: ['an invoice has not been paid', 'a loan has not been repaid', 'before an order for payment'],
    nehodiSe: ['the debtor is in liquidation (felszámolás) – register your claim', 'a disputed or large claim – ask a lawyer for help'],
    po: [
      { nazev: 'Wait for the deadline', popis: 'Reminder in your calendar.' },
      { nazev: 'Order for payment', popis: 'Can be requested from a notary (közjegyző).' },
      { nazev: 'Instalments?', popis: 'If they want to pay, have them sign an acknowledgement of debt (tartozáselismerő nyilatkozat).' },
    ],
    faq: [
      {
        q: 'How much is the default interest?',
        a: 'The central bank base rate (jegybanki alapkamat) valid on the first day of the calendar half-year affected by the delay (Ptk. 6:48. §). Between businesses it is 8 percentage points higher, and a flat-rate recovery cost equivalent to 40 euros is also due (Ptk. 6:155. §).',
      },
      { q: 'How should I send it?', a: 'By registered letter with return receipt (tértivevényes ajánlott levél), so that you can prove delivery.' },
      { q: 'Do you store my details?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'The template is based on 6:48. § and 6:155. § of the Hungarian Civil Code (Polgári Törvénykönyv, 2013. évi V. törvény).',
    souvisejiciPopis: 'More documents on money and debts.',
  },
  vytvorit: {
    title: 'Fill in a payment demand online – Hungary, free PDF',
    description: 'Guide in English for a payment demand (fizetési felszólítás) in Hungary, with a deadline and default interest. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'demand', g: 'demand', a: 'demand', l: 'demand' },
    kroky: {
      felek: { nazev: 'Creditor and debtor' },
      tartozas: { nazev: 'Debt' },
      fizetes: { nazev: 'Deadline and payment' },
    },
    pole: {
      k_jmeno: { popis: 'Creditor (jogosult) – name or company name', placeholder: 'e.g. Kovács János' },
      k_adresa: { popis: 'Creditor’s address', placeholder: 'e.g. 1052 Budapest, Váci utca 10.' },
      k_kontakt: { popis: 'Phone or e-mail (optional)' },
      p_jmeno: { popis: 'Debtor (kötelezett) – name or company name', placeholder: 'e.g. Nagy Péter' },
      p_adresa: { popis: 'Debtor’s address', placeholder: 'e.g. 4024 Debrecen, Piac utca 5.' },
      p_typ: {
        popis: 'Who are the parties?',
        napoveda: 'The rate of default interest depends on this.',
        moznosti: { mag: 'At least one party is a private individual', b2b: 'Both parties are businesses' },
      },
      castka: { popis: 'Amount of the debt (Ft)', placeholder: 'e.g. 150000' },
      splatnost: { popis: 'Original due date' },
      duvod: {
        popis: 'Legal ground (jogcím)',
        napoveda: 'Number and date of the invoice or agreement.',
        placeholder: 'e.g. 2026/041. számú számla, kelte 2026. 10. 01. (invoice No. 2026/041 dated 1 October 2026)',
      },
      urok: {
        popis: 'Do you also claim default interest?',
        moznosti: { igen: 'Yes, statutory default interest', nem: 'No, only the principal' },
      },
      zaplatit_do: { popis: 'Payment deadline', napoveda: 'Usually 8–15 days.' },
      ucet: { popis: 'Bank account number', placeholder: '12345678-12345678-12345678' },
      kozlemeny: { popis: 'Payment reference (optional)' },
      misto: { popis: 'Place', placeholder: 'e.g. Budapest' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Sign it and send it by registered letter with return receipt (tértivevényes ajánlott levél) – this way you can prove delivery.',
      'Keep the postal receipt and a copy.',
      'If the debtor does not pay, you can apply to a notary (közjegyző) for an order for payment (fizetési meghagyás) or file a lawsuit.',
    ],
    kontrola: [
      'Default interest: the central bank base rate (jegybanki alapkamat) valid on the first day of the calendar half-year affected by the delay (Ptk. 6:48. §). For contracts between businesses it is 8 percentage points higher, and a flat-rate recovery cost equivalent to 40 euros is also due (Ptk. 6:155. §).',
      'Describe exactly what is due and on what legal ground (invoice, agreement, due date), and how much.',
      'Payment deadline: usually 8–15 days.',
      'Send it by registered letter with return receipt – in a dispute, you have to prove delivery.',
      'Only threaten lawful steps (order for payment, lawsuit) – public shaming or putting pressure on the debtor may be unlawful.',
    ],
    pripominky: {
      'A fizetési felszólítás határideje lejár': {
        nazev: 'The deadline in the payment demand expires',
        popis: 'Check whether the payment has arrived. If it has not, you can start an order for payment procedure (fizetési meghagyás) or file a lawsuit.',
      },
    },
  },

  dokument: {
    nazev: 'Payment Demand',
    podnadpis: 'under the Hungarian Civil Code (Polgári Törvénykönyv, 2013. évi V. törvény)',
    podpisy: { vlevo: 'creditor (jogosult)', vpravo: 'received by the debtor (when delivered in person)' },
    clanky: [
      {
        nadpis: 'Sender and Recipient',
        odstavce: ['**Creditor:** {{k_jmeno}}, {{k_adresa}}, contact: {{k_kontakt}}', '**Debtor:** {{p_jmeno}}, {{p_adresa}}'],
      },
      {
        nadpis: 'Payment Demand',
        odstavce: [
          'Dear Sir or Madam,',
          'According to our records, you owe a debt of {{castka}} on the legal ground of {{duvod}}, which fell due on {{splatnost}}. The debt has not been settled to date.',
          'I hereby call on you to pay the above amount no later than {{zaplatit_do}} to bank account No. {{ucet}}, payment reference: {{kozlemeny}}.',
          {
            uvodVzor: 'Default interest (tick one):',
            moznosti: {
              igen: 'I also call on you to pay statutory default interest from the day following the due date until the day of payment.',
              nem: 'If you settle the debt within the given deadline, I will not claim default interest.',
            },
          },
          {
            uvodVzor: 'Interest rate (tick one):',
            moznosti: {
              mag: 'The rate of default interest is the central bank base rate valid on the first day of the calendar half-year affected by the delay (Ptk. 6:48. §).',
              b2b: 'The rate of default interest is the central bank base rate valid on the first day of the calendar half-year affected by the delay, increased by eight percentage points; in addition, I claim a flat-rate recovery cost equivalent to 40 euros (Ptk. 6:155. §).',
            },
          },
          'If you do not pay within the given deadline, I will, without further notice, start an order for payment procedure or a lawsuit, the costs of which will be borne by you.',
          'If you have paid in the meantime, please disregard this letter.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: pre-court payment demand (Poland). Original: src/obsah/pl/wezwanie-do-zaplaty.ts
 * and src/sablony/pl/wezwanie-do-zaplaty.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-WEZWANIE-DO-ZAPLATY', verze: '1.0' },

  nazev: 'Pre-Court Payment Demand',
  nazevA: 'the pre-court payment demand',
  katalog: {
    popis: 'Pre-court demand with a deadline and interest.',
    slova: ['payment demand', 'letter before action', 'demand letter', 'debt', 'debtor', 'unpaid invoice', 'late payment interest', 'wezwanie do zapłaty', 'przedsądowe wezwanie'],
  },
  landing: {
    title: 'Pre-Court Payment Demand Poland {rok} – free PDF template',
    description:
      'Pre-court payment demand for Poland, explained in English: amount, basis, deadline and statutory late payment interest. Bilingual PDF or Word, free.',
    perex: 'When a debtor has not paid an invoice or repaid a loan: a payment demand (wezwanie do zapłaty) sets a final deadline before court and proves that you tried to settle the matter amicably.',
    obsahPopis: 'A short letter in two parts.',
    obsah: [
      { nazev: 'Sender and addressee', popis: 'The creditor and the debtor.' },
      { nazev: 'Payment demand', popis: 'Basis and amount, original due date, new deadline, account, interest, notice of court action.' },
    ],
    kroky: [
      { nazev: 'Enter the amount owed', popis: 'Who, how much, which invoice.' },
      { nazev: 'Set a deadline', popis: 'Usually 7–14 days.' },
      { nazev: 'Send by registered post', popis: 'With confirmation of receipt.' },
    ],
    online: [
      'Amount in words (in Polish) added automatically',
      'Deadline reminder in your calendar',
      'Explanations for every field',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'a customer has not paid an invoice',
      'a loan has not been repaid',
      'you are preparing a lawsuit',
    ],
    nehodiSe: [
      'the debtor is in bankruptcy – lodge your claim in the bankruptcy proceedings',
      'the matter is disputed or the amount is high – consult a lawyer',
    ],
    po: [
      { nazev: 'Wait for the deadline', popis: 'Reminder in your calendar.' },
      { nazev: 'Lawsuit', popis: 'Attach a copy of the demand and proof of posting.' },
      { nazev: 'Instalments?', popis: 'If the debtor wants to pay in instalments – draw up an acknowledgement of debt (uznanie długu).' },
    ],
    faq: [
      {
        q: 'When does the debtor have to pay?',
        a: 'If no due date was agreed – immediately after being asked to pay (Article 455 of the Civil Code).',
      },
      {
        q: 'How much is late payment interest?',
        a: 'Unless the parties agreed otherwise, statutory interest for late payment (odsetki ustawowe za opóźnienie) is the reference rate of the National Bank of Poland (NBP) plus 5.5 percentage points (Article 481 § 2 of the Civil Code). It is due even without proving any loss.',
      },
      { q: 'Do you store my data?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'The template is based on Articles 455, 476 and 481 of the Polish Civil Code (Kodeks cywilny).',
    souvisejiciPopis: 'Other documents about money and debts, also free.',
  },
  vytvorit: {
    title: 'Fill in a payment demand online – Poland, PDF',
    description: 'Guide in English for a pre-court payment demand under Polish law. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'demand', g: 'demand', a: 'demand', l: 'demand' },
    kroky: {
      strony: { nazev: 'Creditor and debtor' },
      dlug: { nazev: 'Amount owed' },
      platnosc: { nazev: 'Deadline and payment' },
    },
    pole: {
      k_jmeno: { popis: 'Creditor – full name or company name', placeholder: 'e.g. Jan Kowalski' },
      k_ico: { popis: 'Creditor’s NIP (tax ID) or PESEL (optional)' },
      k_adresa: { popis: 'Creditor’s address', placeholder: 'e.g. ul. Długa 12, 00-001 Warszawa' },
      k_kontakt: { popis: 'Phone or e-mail (optional)' },
      p_jmeno: { popis: 'Debtor – full name or company name', placeholder: 'e.g. Piotr Nowak' },
      p_ico: { popis: 'Debtor’s NIP or PESEL (optional)' },
      p_adresa: { popis: 'Debtor’s address', placeholder: 'e.g. ul. Krótka 5, 30-001 Kraków' },
      castka: { popis: 'Amount owed (zł)', placeholder: 'e.g. 3500' },
      splatnost: { popis: 'Original due date' },
      duvod: {
        popis: 'What the debt arises from',
        moznosti: { faktura: 'Unpaid invoice', pozyczka: 'Unrepaid loan', sprzedaz: 'Unpaid sale price', inne: 'Other reason' },
      },
      duvod_popis: { popis: 'Details', placeholder: 'e.g. faktura nr 15/2026 z dnia 1.10.2026 (invoice No. 15/2026 of 1.10.2026)' },
      urok: {
        popis: 'Claim late payment interest?',
        moznosti: { tak: 'Yes, statutory interest for late payment', nie: 'No, only the principal amount' },
      },
      zaplatit_do: { popis: 'Pay no later than', napoveda: 'Usually 7–14 days.' },
      ucet: { popis: 'Account number', placeholder: 'PL12 3456 7890 1234 5678 9012 3456' },
      tytul: { popis: 'Payment reference (optional)' },
      misto: { popis: 'Town or city', placeholder: 'e.g. Warszawa' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Sign the demand and send it by registered post with confirmation of receipt. Keep the proof of posting.',
      'Send it to the debtor’s home address; for a company, to the address in the National Court Register (KRS) or the business register CEIDG.',
      'If the debtor does not pay, you can file a lawsuit – attach a copy of the demand and the proof of posting.',
    ],
    kontrola: [
      'If no payment date was agreed, the debtor should pay immediately after being asked to pay (Article 455 of the Civil Code).',
      'Interest is due for late payment – even without proving any loss. Statutory interest for late payment (odsetki ustawowe za opóźnienie) is the reference rate of the National Bank of Poland (NBP) plus 5.5 percentage points (Article 481 of the Civil Code).',
      'Describe exactly what the debtor owes and how much (invoice, agreement, due date).',
      'Send it in a way that lets you prove delivery (registered post with confirmation of receipt).',
      'Do not threaten anything other than court action – pressure or publicly shaming the debtor may be unlawful.',
    ],
    pripominky: {
      'Koniec terminu z wezwania do zapłaty': {
        nazev: 'Payment demand deadline expires',
        popis: 'Check whether the payment has arrived. If not, you can file a lawsuit (also via the electronic court, e-sąd).',
      },
    },
  },

  dokument: {
    nazev: 'Pre-Court Payment Demand',
    podnadpis: 'under Articles 455 and 481 of the Act of 23 April 1964 – the Civil Code (Kodeks cywilny)',
    podpisy: { vlevo: 'creditor', vpravo: 'received by the debtor (in case of personal delivery)' },
    clanky: [
      {
        nadpis: 'Sender and Addressee',
        odstavce: [
          '**Creditor:** {{k_jmeno}}, NIP / PESEL {{k_ico}}, {{k_adresa}}, contact {{k_kontakt}}',
          '**Debtor:** {{p_jmeno}}, NIP / PESEL {{p_ico}}, {{p_adresa}}',
        ],
      },
      {
        nadpis: 'Demand for Payment',
        odstavce: [
          'Dear Sir or Madam,',
          {
            uvodVzor: 'basis of the claim (tick one option):',
            moznosti: {
              faktura: 'an invoice remains unpaid on your account – {{duvod_popis}}.',
              pozyczka: 'as of today, a loan has not been repaid – {{duvod_popis}}.',
              sprzedaz: 'as of today, the sale price has not been paid – {{duvod_popis}}.',
              inne: 'the following amount remains unpaid: {{duvod_popis}}.',
            },
          },
          'The amount owed is {{castka}} and was due on {{splatnost}}.',
          'I hereby demand payment of the above amount no later than {{zaplatit_do}} to account No. {{ucet}}, payment reference: {{tytul}}.',
          {
            uvodVzor: 'Interest (tick one option):',
            moznosti: {
              tak: 'At the same time, I demand payment of statutory interest for late payment (Article 481 of the Civil Code), calculated from the day following the due date until the date of payment.',
              nie: 'If payment is made within the set deadline, I will refrain from claiming late payment interest.',
            },
          },
          'If payment is not made within the set deadline, I will take the matter to court without further notice, which will expose you to additional costs of proceedings.',
          'If payment has already been made, please disregard this demand.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: instalment agreement (Austria). Original: src/obsah/at/ratenvereinbarung.ts
 * and src/sablony/at/ratenvereinbarung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-RATENVEREINBARUNG', verze: '1.0' },

  nazev: 'Instalment Agreement',
  nazevA: 'the instalment agreement',
  katalog: {
    popis: 'Pay an outstanding debt in monthly instalments, with a payment schedule.',
    slova: ['instalment agreement', 'payment plan', 'instalments', 'payment schedule', 'pay in instalments', 'debt repayment', 'deferral', 'Ratenvereinbarung', 'Ratenzahlungsvereinbarung', 'Ratenplan', 'Terminsverlust', 'Österreich'],
  },
  landing: {
    title: 'Instalment Agreement Austria {rok} – free PDF template',
    description:
      'Instalment agreement under the ABGB, explained in English: monthly instalments, payment schedule as an annex, optional acknowledgement. Bilingual PDF or Word, free.',
    perex: 'Someone cannot pay an invoice or a debt all at once? Put the amount, instalments and due dates in writing – with a payment schedule and a clear rule on what applies in case of default.',
    obsahPopis: 'Agreement between creditor and debtor under the Austrian General Civil Code (ABGB).',
    obsah: [
      { nazev: 'Parties', popis: 'Who receives the money and who pays.' },
      { nazev: 'Outstanding claim', popis: 'Basis and amount, optionally with an acknowledgement.' },
      { nazev: 'Payment in instalments', popis: 'Monthly instalment, due day, first instalment, account, interest.' },
      { nazev: 'Late payment', popis: 'Loss of the instalment benefit only after six weeks in arrears, a reminder and an additional period.' },
      { nazev: 'Annex: payment schedule', popis: 'Each instalment with its date and the remaining debt.' },
    ],
    kroky: [
      { nazev: 'Enter the claim', popis: 'Basis and amount outstanding.' },
      { nazev: 'Set the instalments', popis: 'The payment schedule is created automatically.' },
      { nazev: 'Sign it', popis: 'Both parties; each receives one copy.' },
    ],
    online: [
      'Payment schedule as an annex, automatically',
      'Amount in words (in German)',
      'Calendar reminders for every instalment',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'a customer can only pay an invoice in instalments',
      'friends or acquaintances repay a private debt in parts',
      'you want to set out due dates and the consequences of default clearly',
    ],
    nehodiSe: [
      'you are lending new money – use a loan agreement (Darlehensvertrag) for that',
      'the main point is confirming the debt – use an acknowledgement of debt (Schuldanerkenntnis) for that',
      'consumer credit from businesses – special laws apply here',
    ],
    poNadpis: 'While the instalments are being paid.',
    po: [
      { nazev: 'Payments', popis: 'Ideally by bank transfer; in cash only against a receipt.' },
      { nazev: 'Default', popis: 'First send a written reminder and set an additional period.' },
      { nazev: 'Completion', popis: 'After the last instalment, confirm payment in full.' },
    ],
    faq: [
      { q: 'What is the difference from an acknowledgement of debt?', a: 'An acknowledgement of debt (Schuldanerkenntnis) mainly confirms that the debt exists. The instalment agreement sets out how it is paid – with a payment schedule and consequences of default. You can optionally include an acknowledgement here.' },
      { q: 'What does loss of the instalment benefit (Terminsverlust) mean?', a: 'If an instalment is not paid, the whole remainder becomes due at once. The template only provides for this once an instalment has been outstanding for at least six weeks and is not paid after a reminder with an additional period of two weeks – as is permissible with consumers.' },
      { q: 'What does the acknowledgement achieve?', a: 'The debtor expressly confirms the claim. This interrupts the limitation period, which starts again (Section 1497 ABGB).' },
      { q: 'Does the agreement need a particular form?', a: 'No. But in writing with both signatures is the best evidence.' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony:
      'The template is based on the Austrian General Civil Code (ABGB), in particular Section 1497 on the interruption of limitation, and follows the consumer protection rules described on konsumentenfragen.at for loss of the instalment benefit.',
    souvisejiciPopis: 'More documents about money, also free.',
  },
  vytvorit: {
    title: 'Fill in an instalment agreement online – Austria, with schedule',
    description: 'Guide in English: instalment agreement for Austria with a payment schedule, acknowledgement and acceleration clause. Bilingual PDF or Word, free.',
    podnadpis: 'Free · PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      parteien: { nazev: 'Creditor and debtor', popis: 'The creditor receives the money, the debtor pays in instalments.' },
      forderung: { nazev: 'Outstanding claim' },
      raten: { nazev: 'Instalments', popis: 'From the amount, the instalment and the first month we create the payment schedule as an annex.' },
    },
    pole: {
      g_name: { popis: 'Creditor – first name and surname or company', napoveda: 'Who is owed the money.', placeholder: 'e.g. Johann Steiner' },
      g_geburt: { popis: 'Date of birth (optional)', napoveda: 'For companies, leave empty and add the company register number (Firmenbuchnummer) to the name.' },
      g_adresse: { popis: 'Address', napoveda: 'Home address or registered office.', placeholder: 'e.g. Herrengasse 3, 8010 Graz' },
      s_name: { popis: 'Debtor – first name and surname', napoveda: 'Who pays. As in the photo ID.', placeholder: 'e.g. Sabine Wimmer' },
      s_geburt: { popis: 'Date of birth', napoveda: 'For clear identification.' },
      s_adresse: { popis: 'Address', napoveda: 'Current home address.', placeholder: 'e.g. Annenstraße 20, 8020 Graz' },
      grund: {
        popis: 'Where does the claim come from?',
        napoveda: 'Specifically: invoice, loan, purchase price or damage – with the date.',
        placeholder: 'e.g. Rechnung Nr. 2026-041 vom 3. 8. 2026 über Malerarbeiten (invoice No. 2026-041 of 3 Aug 2026 for painting work)',
      },
      castka: { popis: 'Amount outstanding (€)', napoveda: 'The amount to be paid in instalments.', placeholder: 'e.g. 2400' },
      anerkenntnis: {
        popis: 'Acknowledgement of the claim',
        napoveda: 'With an acknowledgement (Anerkenntnis) the debtor expressly confirms the claim – the limitation period starts again. The stronger option for creditors.',
        moznosti: { ja: 'Yes, the debtor acknowledges the claim', nein: 'No, only set out the method of payment' },
      },
      zinsen: {
        popis: 'Interest',
        napoveda: 'Between private individuals usually interest-free.',
        moznosti: { keine: 'No interest', ja: 'With interest' },
      },
      zinssatz: { popis: 'Interest rate', napoveda: 'Annual interest rate on the amount outstanding at any time.', placeholder: 'e.g. 3' },
      splatka: { popis: 'Monthly instalment (€)', napoveda: 'The last instalment may be lower.', placeholder: 'e.g. 200' },
      splatka_den: { popis: 'Due on (day of the month)', napoveda: 'For example 5 for the 5th of each month.', placeholder: 'e.g. 5' },
      prvni_splatka: { popis: 'First instalment due on', napoveda: 'Month of the first instalment – the day is taken from the previous field.' },
      iban: { popis: 'Creditor’s IBAN', napoveda: 'Where the instalments are transferred to.', placeholder: 'AT00 0000 0000 0000 0000' },
      terminsverlust: {
        popis: 'Loss of the instalment benefit',
        napoveda: 'With loss of the instalment benefit (Terminsverlust), late payment makes the whole remainder due at once – with the protective periods that also apply to consumers.',
        moznosti: { ja: 'Yes, with a reminder and an additional period', nein: 'No' },
      },
      misto: { popis: 'Place', napoveda: 'We take the town from the creditor’s address.', placeholder: 'e.g. Graz' },
      datum: { popis: 'Date', napoveda: 'Today’s date pre-filled.' },
    },
    vysvetleni: [
      'Who receives money and who pays in instalments.',
      'Where the debt comes from and how large it is. With an acknowledgement, the debtor can no longer dispute the claim later, and the limitation period starts again.',
      'How much is paid, when and where. The payment schedule in the annex shows every instalment with its date.',
      'What happens if an instalment is not paid. Loss of the instalment benefit means: the whole remainder becomes due at once – but only after a reminder and an additional period.',
      '',
    ],
    coDal: [
      'Print it twice; both parties sign both copies.',
      'Ideally pay the instalments by transfer – the bank statement is the best proof of payment. Cash payments only against a receipt (Quittung).',
      'The payment schedule and calendar reminders help you not to miss an instalment.',
      'If an instalment is missed: first send a written reminder. For loss of the instalment benefit, observe the period and the additional period as agreed.',
    ],
    kontrola: [
      'State the basis and amount of the outstanding claim precisely (invoice, loan, damage – with the date).',
      'Choose an instalment that can realistically be paid – a failed agreement helps no one.',
      'Acknowledgement (Anerkenntnis): if the debtor expressly acknowledges the claim, the limitation period is interrupted and starts again (Section 1497 of the Austrian General Civil Code – ABGB).',
      'Loss of the instalment benefit (Terminsverlust): the clause is worded in the way permissible with consumers – arrears of at least six weeks, a reminder threatening loss of the instalment benefit and an additional period of at least two weeks ([konsumentenfragen.at](https://www.konsumentenfragen.at/konsumentenfragen/Finanzierung/Ratenkredit/Kauf_auf_Raten.html)).',
      'Only agree interest if both parties want it, and not excessively high. On statutory interest, see the [European e-Justice Portal](https://e-justice.europa.eu/topics/taking-legal-action/where-and-how/interest-rates/at_de).',
      'Check the other party’s identity against an official photo ID and copy their name and address exactly.',
    ],
    pripominky: {
      'Rate – letzte': { nazev: 'Instalment – last' },
      Rate: { nazev: 'Instalment' },
    },
  },

  dokument: {
    nazev: 'Instalment Agreement',
    podnadpis: 'Agreement on the payment of an outstanding claim in instalments under the Austrian General Civil Code (Allgemeines bürgerliches Gesetzbuch, ABGB)',
    podpisy: { vlevo: 'creditor', vpravo: 'debtor' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Creditor:** {{g_name}}, born {{g_geburt}}, {{g_adresse}}',
          '**Debtor:** {{s_name}}, born {{s_geburt}}, {{s_adresse}}',
        ],
      },
      {
        nadpis: 'Outstanding Claim',
        odstavce: [
          'The Creditor has an outstanding claim against the Debtor on the following basis: {{grund}}.',
          'The outstanding claim amounts to {{castka}}.',
          {
            uvodVzor: 'Acknowledgement (please tick):',
            moznosti: {
              ja: 'The Debtor expressly acknowledges this claim both as to its basis and as to its amount.',
              nein: 'This agreement governs the method of payment of the outstanding claim.',
            },
          },
        ],
      },
      {
        nadpis: 'Payment in Instalments',
        odstavce: [
          'The Creditor permits the outstanding claim to be paid in monthly instalments of {{splatka}}. The instalments are due on day {{splatka_den}} of each month, for the first time in the month {{prvni_mesic}}, until paid in full. The last instalment may be lower.',
          'The instalments are transferred to the account IBAN {{iban}} or paid in cash against a receipt. The date of receipt of payment is decisive. Early payment is possible at any time.',
          {
            uvodVzor: 'Interest (please tick):',
            moznosti: {
              keine: 'No interest is charged for the duration of the instalment payments.',
              ja: 'Interest at {{zinssatz}} is charged on the amount outstanding at any time; the interest is due with the instalments, at the latest with the last instalment.',
            },
          },
        ],
      },
      {
        nadpis: 'Late Payment',
        odstavce: [
          {
            uvodVzor: 'Loss of the instalment benefit (please tick):',
            moznosti: {
              ja: 'If an instalment has been due for at least six weeks and is still not paid after a written reminder threatening loss of the instalment benefit and setting an additional period of at least two weeks, the entire amount still outstanding becomes due for payment immediately (loss of the instalment benefit – Terminsverlust).',
              nein: 'No loss of the instalment benefit is agreed. In the event of default, the instalments that have fallen due are payable.',
            },
          },
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'As long as the instalments are paid as agreed, the claim will not be demanded in one sum. In all other respects, the provisions of the ABGB apply.',
          'Amendments and additions to this agreement must be made in writing. Each party receives one copy.',
        ],
      },
    ],
    prilohy: {
      'Beilage 1 · Ratenplan': 'Annex 1 · Payment schedule',
      Rate: 'Instalment',
      'Fällig am': 'Due on',
      Betrag: 'Amount',
      Restschuld: 'Remaining debt',
      'Der Ratenplan folgt den vereinbarten Raten ohne Zinsen; bei Widersprüchen gilt der Text der Vereinbarung.':
        'The payment schedule follows the agreed instalments without interest; in the event of any inconsistency, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

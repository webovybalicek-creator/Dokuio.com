/**
 * English version: instalment agreement (Germany). Original: src/obsah/de/ratenzahlungsvereinbarung.ts
 * and src/sablony/de/ratenzahlungsvereinbarung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-RATENZAHLUNG', verze: '1.0' },

  nazev: 'Instalment Agreement',
  nazevA: 'the instalment agreement',
  katalog: {
    popis: 'Pay off an outstanding claim in monthly instalments – with an instalment plan and an acceleration clause.',
    slova: ['instalment agreement', 'payment plan', 'pay in instalments', 'monthly instalments', 'debt repayment', 'deferral of payment', 'acceleration clause', 'Ratenzahlungsvereinbarung', 'Ratenzahlung', 'Teilzahlungsvereinbarung', 'Ratenvereinbarung', 'Stundung', 'Ratenplan'],
  },
  landing: {
    title: 'Instalment Agreement Germany {rok} – free PDF template',
    description:
      'Instalment agreement for a debt in Germany, explained in English: monthly instalments, instalment plan, acceleration clause. Bilingual PDF or Word, free.',
    perex: 'Someone cannot pay an invoice or a debt in one go? Agree monthly instalments in writing – with an instalment plan as an annex and a clear rule on when the rest becomes due immediately.',
    obsahPopis: 'An instalment agreement (Ratenzahlungsvereinbarung) between creditor and debtor on an existing claim.',
    obsah: [
      { nazev: 'Parties', popis: 'Creditor and debtor.' },
      { nazev: 'Claim', popis: 'Reason and outstanding amount, with an acknowledgement if desired.' },
      { nazev: 'Payment in instalments', popis: 'Monthly instalment, due date, account, deferral (Stundung) without interest.' },
      { nazev: 'Lapse of the instalment arrangement', popis: 'Acceleration clause (Verfallklausel) in case of default.' },
      { nazev: 'Annex', popis: 'Instalment plan with all dates and the remaining balance.' },
    ],
    kroky: [
      { nazev: 'Enter the claim', popis: 'Reason and outstanding amount.' },
      { nazev: 'Set the instalments', popis: 'We create the instalment plan automatically.' },
      { nazev: 'Both sign', popis: 'Two copies, one for each party.' },
    ],
    online: ['Instalment plan as an annex', 'Instalment reminders in your calendar', 'Amount in words (in German) added automatically', 'Signature on screen', 'Download as PDF and Word'],
    hodiSe: [
      'a customer pays an invoice in instalments',
      'a private loan or damage is paid off in instalments',
      'both parties want to record the instalments as binding',
    ],
    nehodiSe: [
      'a business grants consumers instalments in return for interest or fees – then the rules on consumer credit apply (Section 506 BGB)',
      'only the debtor is to confirm the debt – use the acknowledgement of debt (Schuldanerkenntnis)',
      'new money is being lent – use the loan agreement (Darlehensvertrag)',
    ],
    poNadpis: 'While paying the instalments.',
    po: [
      { nazev: 'Standing order', popis: 'A standing order (Dauerauftrag), so that no instalment is forgotten.' },
      { nazev: 'Receipts', popis: 'Always get a receipt (Quittung) for cash payments.' },
      { nazev: 'Default', popis: 'Send a written reminder and point out the acceleration clause.' },
    ],
    faq: [
      { q: 'As a creditor, do I have to accept part payments?', a: 'Not without an agreement – the debtor is not entitled to pay in parts (Section 266 of the German Civil Code, BGB). With the instalment agreement, the instalments are binding.' },
      { q: 'What is the difference from an acknowledgement of debt?', a: 'The acknowledgement of debt is a unilateral declaration by the debtor. The instalment agreement is a contract that both sign: the creditor defers payment, the debtor pays in instalments. An acknowledgement can also be included.' },
      { q: 'What does an acceleration clause do?', a: 'If the debtor falls into default with the agreed instalments, the instalment arrangement lapses and the entire remaining balance becomes due immediately.' },
      { q: 'What happens to the limitation period?', a: 'If the debtor acknowledges the claim – also by making a part payment – the limitation period (Verjährung) starts again (Section 212 BGB).' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Sections 266, 212 and 286 of the German Civil Code (BGB); for the distinction from consumer credit, Section 506 BGB.',
    souvisejiciPopis: 'More documents about money, also free.',
  },
  vytvorit: {
    title: 'Fill in an instalment agreement online – Germany, free PDF',
    description: 'Guide in English for an instalment agreement in Germany with an instalment plan and an acceleration clause. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'instalment agreement', g: 'instalment agreement', a: 'instalment agreement', l: 'instalment agreement' },
    kroky: {
      parteien: { nazev: 'Creditor and debtor', popis: 'The creditor receives the money, the debtor pays.' },
      forderung: { nazev: 'Claim' },
      raten: { nazev: 'Instalments', popis: 'From the amount, the instalment and the first date, we create the instalment plan as an annex.' },
    },
    pole: {
      g_name: { popis: 'Creditor – name or company', napoveda: 'Who the money is owed to.', placeholder: 'e.g. Thomas Müller' },
      g_adresse: { popis: 'Creditor’s address', napoveda: 'Home or business address.', placeholder: 'e.g. Hauptstraße 12, 10115 Berlin' },
      s_name: { popis: 'Debtor – first name and surname', napoveda: 'Who pays – as in the identity card (Personalausweis).', placeholder: 'e.g. Anna Schmidt' },
      s_geburt: { popis: 'Debtor’s date of birth', napoveda: 'Helps identify the person clearly.' },
      s_adresse: { popis: 'Debtor’s address', napoveda: 'Current home address.', placeholder: 'e.g. Lindenstraße 7, 10115 Berlin' },
      castka: { popis: 'Outstanding amount (€)', napoveda: 'The total amount still outstanding today. We add the words (in German).', placeholder: 'e.g. 2400' },
      grund: {
        popis: 'Reason for the claim',
        napoveda: 'Where the debt comes from – with a date or invoice number.',
        placeholder: 'e.g. Rechnung Nr. 2026-117 vom 3. 9. 2026 über Malerarbeiten (invoice no. 2026-117 of 3 September 2026 for painting work)',
      },
      anerkenntnis: {
        popis: 'Does the debtor acknowledge the claim?',
        napoveda: 'Recommended for the creditor: the claim is then undisputed and the limitation period starts again (Section 212 BGB).',
        moznosti: { ja: 'Yes, the claim is acknowledged as to its basis and amount', nein: 'No, only agree on instalments' },
      },
      splatka: { popis: 'Monthly instalment (€)', napoveda: 'The last instalment may be lower.', placeholder: 'e.g. 200' },
      splatka_den: { popis: 'Due on (day of the month)', napoveda: 'E.g. 1 or 15. In shorter months the last day applies.', placeholder: 'e.g. 1' },
      prvni_splatka: { popis: 'Month of the first instalment', napoveda: 'Any day in the month in which the first instalment is due.' },
      iban: { popis: 'Creditor’s IBAN', napoveda: 'The account the instalments are paid into.', placeholder: 'DE00 0000 0000 0000 0000 00' },
      verfall: {
        popis: 'When does the instalment arrangement lapse? (acceleration clause)',
        napoveda: 'In case of default, the remaining balance becomes due at once. Two instalments are a common, fair threshold.',
        moznosti: {
          zwei: 'In case of default on two consecutive instalments',
          eine: 'In case of default on one instalment for more than a certain number of days',
          keine: 'No acceleration clause',
        },
      },
      verfall_tage: { popis: 'Days of default', napoveda: 'E.g. 14 days after the due date.', placeholder: 'e.g. 14' },
      ort: { popis: 'Place', napoveda: 'Place of signing.', placeholder: 'e.g. Berlin' },
      datum: { popis: 'Date', napoveda: 'Today’s date pre-filled.' },
    },
    vysvetleni: [
      'Who receives money and who pays.',
      'What is owed and how much.',
      'How much is paid monthly, from when and to where.',
      'What happens if instalments are not paid.',
      'Amendments and copies.',
    ],
    coDal: [
      'Print it twice; both parties sign both copies.',
      'Ideally pay the instalments by standing order (Dauerauftrag) – the bank statement is the proof of payment. Get a receipt (Quittung) for cash payments.',
      'Creditor: tick off payments received in the instalment plan. In case of default, send a written reminder and point out the acceleration clause.',
    ],
    kontrola: [
      'Without an agreement, the creditor does not have to accept part payments ([Section 266 BGB](https://www.gesetze-im-internet.de/bgb/__266.html)) – the instalment agreement settles this in a binding way.',
      'Describe the claim precisely: reason (invoice, loan, damage), date and the amount still outstanding today.',
      'If the debtor acknowledges the claim, the limitation period starts again ([Section 212 BGB](https://www.gesetze-im-internet.de/bgb/__212.html)). Every instalment payment is also such an acknowledgement.',
      'Acceleration clause: if the debtor falls into default, the rest becomes due at once. Set the condition clearly (e.g. two instalments).',
      'If the creditor is a business, the debtor is a consumer and interest or fees are charged, the rules on consumer credit may apply ([Section 506 BGB](https://www.gesetze-im-internet.de/bgb/__506.html)) – this template is not intended for that. A deferral free of charge is not covered by them.',
      'If only the debtor is to confirm the debt unilaterally, an acknowledgement of debt (Schuldanerkenntnis) is enough.',
      'Check the identity of the other party using their identity card (Personalausweis) and copy the name and address exactly.',
    ],
    pripominky: {
      'Rate – letzte': { nazev: 'Instalment – last' },
      Rate: { nazev: 'Instalment', popis: 'Monthly instalment under the instalment agreement – amounts and dates in the instalment plan (Annex 1).' },
    },
  },

  dokument: {
    nazev: 'Instalment Agreement',
    podnadpis: 'Agreement on the payment of an outstanding claim in instalments',
    podpisy: { vlevo: 'creditor', vpravo: 'debtor' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: ['**Creditor:** {{g_name}}, {{g_adresse}}', '**Debtor:** {{s_name}}, born on {{s_geburt}}, residing at {{s_adresse}}'],
      },
      {
        nadpis: 'Claim',
        odstavce: [
          'The Creditor has a claim against the Debtor on the following grounds: {{grund}}. The amount outstanding today is **{{castka}}**.',
          {
            uvodVzor: 'Acknowledgement (please tick):',
            moznosti: {
              ja: 'The Debtor acknowledges this claim as to its basis and amount.',
              nein: 'The parties merely agree on the method of payment; this does not constitute an acknowledgement.',
            },
          },
        ],
      },
      {
        nadpis: 'Payment in Instalments',
        odstavce: [
          'The Creditor agrees that the amount shall be paid in monthly instalments of {{splatka}}, each due on day {{splatka_den}} of the month, starting with the month of the first instalment according to the instalment plan (Annex 1), until paid in full. The last instalment may be lower.',
          'Payments are made to the account IBAN {{iban}} or in cash against a receipt. Receipt by the Creditor is decisive. Higher instalments and early payment of the remaining balance are possible at any time.',
          'As long as the instalments are paid as agreed, the claim is deferred; the Creditor will not pursue it in court during this time. No interest or fees are charged for the deferral.',
        ],
      },
      {
        nadpis: 'Lapse of the Instalment Arrangement',
        odstavce: [
          {
            uvodVzor: 'Acceleration clause (please tick):',
            moznosti: {
              zwei: 'If the Debtor is in default, in whole or in part, with two consecutive instalments, the instalment arrangement lapses and the entire remaining balance becomes due immediately.',
              eine: 'If the Debtor is in default, in whole or in part, with one instalment for more than {{verfall_tage}} days, the instalment arrangement lapses and the entire remaining balance becomes due immediately.',
              keine: 'In case of default on individual instalments, the instalment arrangement remains in place; the statutory rights in case of default remain unaffected.',
            },
          },
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Amendments and additions to this agreement must be made in writing. Should any provision be invalid, the rest of the agreement remains valid.',
          'Each party receives a signed copy.',
        ],
      },
    ],
    prilohy: {
      'Anlage 1 · Ratenplan': 'Annex 1 · Instalment plan',
      Rate: 'Instalment',
      'Fällig am': 'Due on',
      Betrag: 'Amount',
      Restbetrag: 'Remaining balance',
      'Der Plan folgt den vereinbarten Raten ohne Zinsen; bei Widersprüchen gilt der Text der Vereinbarung.': 'The plan follows the agreed instalments without interest; in case of discrepancies, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

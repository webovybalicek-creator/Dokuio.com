/**
 * English version: acknowledgement of debt (Austria). Original: src/obsah/at/schuldanerkenntnis.ts
 * and src/sablony/at/schuldanerkenntnis.ts (based on src/sablony/de/schuldanerkenntnis.ts).
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-SCHULDANERKENNTNIS', verze: '1.0' },

  nazev: 'Acknowledgement of Debt',
  nazevA: 'the acknowledgement of debt',
  katalog: {
    popis: 'Written confirmation of a debt, also with instalments.',
    slova: ['acknowledgement of debt', 'debt', 'IOU', 'instalments', 'repayment plan', 'debt repayment', 'Schuldanerkenntnis', 'Schuldschein', 'Ratenzahlung'],
  },
  landing: {
    title: 'Acknowledgement of Debt Austria {rok} – free PDF template',
    description:
      'Acknowledgement of debt under Austrian law, explained in English: reason and amount, payment in one sum or in instalments. Bilingual PDF or Word, free.',
    perex: 'The debtor confirms in writing how much they owe, what for and how they will pay. The limitation period starts again.',
    obsahPopis: 'Acknowledgement with a payment arrangement.',
    obsah: [
      { nazev: 'Parties', popis: 'Debtor and creditor.' },
      { nazev: 'Debt', popis: 'Reason and amount.' },
      { nazev: 'Payment', popis: 'In one sum or in instalments, with a repayment plan.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We add the amount in words (in German) ourselves.' },
      { nazev: 'Sign', popis: 'The debtor’s signature is mandatory.' },
      { nazev: 'Keep it safe', popis: 'The creditor keeps the original.' },
    ],
    online: [
      'Guided form with explanations for every field',
      'Signature on the screen',
      'Download as PDF and Word',
      'Repayment plan and instalments in your calendar',
    ],
    hodiSe: [
      'securing an unpaid loan between acquaintances',
      'agreeing on instalments for damage caused',
    ],
    nehodiSe: [
      'debts to banks or debt collectors – have their agreements checked',
    ],
    po: [
      { nazev: 'Instalments', popis: 'Get a receipt for cash payments.' },
    ],
    faq: [
      { q: 'Does an acknowledgement of debt need a particular form?', a: 'No particular form – but a written document with a signature is the best evidence.' },
      { q: 'What happens to the limitation period?', a: 'The acknowledgement interrupts it; the period starts again (§ 1497 ABGB).' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on the Austrian General Civil Code (ABGB), in particular § 1497.',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in an acknowledgement of debt online – Austria, PDF',
    description: 'Guide in English for an acknowledgement of debt in Austria, with instalments and a repayment plan. PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'acknowledgement of debt', g: 'acknowledgement of debt', a: 'acknowledgement of debt', l: 'acknowledgement of debt' },
    kroky: {
      parteien: { nazev: 'Debtor and creditor' },
      schuld: { nazev: 'Debt' },
      zahlung: { nazev: 'Payment' },
    },
    pole: {
      p_jmeno: { popis: 'Debtor – first name and surname', napoveda: 'The person who owes the money and acknowledges the debt.' },
      p_narozeni: { popis: 'Date of birth' },
      p_adresa: { popis: 'Address' },
      k_jmeno: { popis: 'Creditor – first name and surname' },
      k_narozeni: { popis: 'Date of birth' },
      k_adresa: { popis: 'Address' },
      castka: { popis: 'Amount of the debt (€)', napoveda: 'The amount still outstanding today. We add the words (in German) ourselves.' },
      duvod_popis: { popis: 'Reason for the debt', placeholder: 'e.g. Darlehen laut Darlehensvertrag vom 3. 3. 2026 (loan under the loan agreement of 3 March 2026)' },
      splaceni: { popis: 'How will it be paid?', moznosti: { naraz: 'In one sum by a certain date', splatky: 'In monthly instalments' } },
      zaplatit_do: { popis: 'Pay by' },
      splatka: { popis: 'Monthly instalment (€)' },
      splatka_den: { popis: 'Day of the month' },
      prvni_splatka: { popis: 'Month of the first instalment' },
      ucet: { popis: 'Creditor’s IBAN' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [
      'Who owes money and to whom.',
      'Reason for and amount of the debt.',
      'By when or in which instalments payment is made.',
    ],
    coDal: [
      'Print twice. The debtor’s signature is mandatory – without it the acknowledgement is not valid.',
      'The creditor keeps the signed original.',
      'Get a receipt for cash payments; transfers are evidenced by the bank statement.',
    ],
    kontrola: [
      'Put it in writing and have the debtor sign it by hand – that is your evidence.',
      'State the reason for and amount of the debt specifically (from which contract or event, from which date).',
      'An acknowledgement interrupts the limitation period – the period starts to run again (§ 1497 ABGB).',
      'No pressure and no threats – an acknowledgement obtained by force can be challenged.',
      'Check the other party’s identity against their identity card and copy the name and address exactly.',
    ],
    pripominky: {
      'Rate – letzte': { nazev: 'Instalment – last' },
      Rate: { nazev: 'Instalment' },
      'Schuld fällig': { nazev: 'Debt due' },
    },
  },

  dokument: {
    nazev: 'Acknowledgement of Debt',
    podnadpis: 'under the Austrian General Civil Code (ABGB)',
    podpisy: { vlevo: 'debtor', vpravo: 'creditor (consent to instalments)' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Debtor:** {{p_jmeno}}, born on {{p_narozeni}}, residing at {{p_adresa}}',
          '**Creditor:** {{k_jmeno}}, born on {{k_narozeni}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Acknowledgement',
        odstavce: [
          'I hereby acknowledge that I owe the Creditor the amount of **{{castka}}**.',
          'Reason for the debt: {{duvod_popis}}.',
        ],
      },
      {
        nadpis: 'Payment',
        odstavce: [
          {
            uvodVzor: 'Method of payment (tick one option):',
            moznosti: {
              naraz: 'I undertake to pay the amount by {{zaplatit_do}}.',
              splatky: 'I undertake to pay the amount in monthly instalments of {{splatka}}, each due on day {{splatka_den}} of the month, starting with the month of the first instalment under the repayment plan. The last instalment may be lower. If I fall behind with two consecutive instalments, the entire remaining amount becomes due immediately.',
            },
          },
          'Payments are made to the account IBAN {{ucet}} or in cash against a receipt. Early payment is possible at any time.',
        ],
      },
    ],
    prilohy: {
      'Anlage 1 · Tilgungsplan': 'Annex 1 · Repayment plan',
      Insgesamt: 'Total (amount and number of monthly instalments – Monatsraten):',
      Rate: 'Instalment',
      'Fällig am': 'Due on',
      Betrag: 'Amount',
      Restschuld: 'Remaining debt',
      'Der Plan folgt den vereinbarten Raten; bei Widersprüchen gilt der Vertragstext.': 'The plan follows the agreed instalments; in case of discrepancies, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

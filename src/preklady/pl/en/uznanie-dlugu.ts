/**
 * English version: acknowledgement of debt (Poland). Original: src/obsah/pl/uznanie-dlugu.ts
 * and src/sablony/pl/uznanie-dlugu.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-UZNANIE-DLUGU', verze: '1.1' },

  nazev: 'Acknowledgement of Debt',
  nazevA: 'the acknowledgement of debt',
  katalog: {
    popis: 'Written confirmation of a debt, also with instalments.',
    slova: ['acknowledgement of debt', 'debt', 'debtor', 'IOU', 'instalments', 'repayment schedule', 'uznanie długu', 'dług'],
  },
  landing: {
    title: 'Acknowledgement of Debt Poland {rok} – free PDF template',
    description:
      'Acknowledgement of debt under Polish law, explained in English: basis and amount, repayment in one go or in instalments with a schedule. Bilingual PDF or Word, free.',
    perex: 'The debtor confirms in writing how much they owe, on what basis, and how they will repay the debt.',
    obsahPopis: 'A declaration with repayment terms.',
    obsah: [
      { nazev: 'Parties', popis: 'The debtor and the creditor.' },
      { nazev: 'Debt', popis: 'Basis and amount.' },
      { nazev: 'Repayment', popis: 'In one go or in instalments.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We add the amount in words (in Polish) ourselves.' },
      { nazev: 'Sign', popis: 'The debtor’s signature is essential.' },
      { nazev: 'Keep it', popis: 'The creditor keeps the original.' },
    ],
    online: [
      'Every field explained as you fill it in',
      'Signature on screen',
      'Download as PDF and Word or send by e-mail',
      'Instalment schedule and calendar reminders',
    ],
    hodiSe: [
      'An unpaid loan between friends',
      'A settlement on paying for damage in instalments',
    ],
    nehodiSe: ['Debts owed to banks and debt collection companies'],
    po: [{ nazev: 'Instalments', popis: 'Confirm cash payments with a receipt (pokwitowanie).' }],
    faq: [
      {
        q: 'What does an acknowledgement of debt achieve?',
        a: 'It interrupts the limitation period (przedawnienie) – the period starts running again (Article 123 of the Civil Code) – and it is strong evidence.',
      },
      { q: 'Do you store my data?', a: 'No. The document is created only in your browser.' },
    ],
    zakony: 'The template is based on Article 123 of the Polish Civil Code (Kodeks cywilny).',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Acknowledgement of debt online – Poland, free PDF',
    description: 'Guide in English for an acknowledgement of debt with an instalment schedule under Polish law. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'acknowledgement', g: 'acknowledgement', a: 'acknowledgement', l: 'acknowledgement' },
    kroky: {
      strony: { nazev: 'Debtor and creditor' },
      dlug: { nazev: 'Debt' },
      splata: { nazev: 'Repayment' },
    },
    pole: {
      p_jmeno: { popis: 'Debtor – full name' },
      p_pesel: { popis: 'PESEL (Polish personal ID number)' },
      p_adresa: { popis: 'Residential address' },
      k_jmeno: { popis: 'Creditor – full name' },
      k_pesel: { popis: 'PESEL' },
      k_adresa: { popis: 'Residential address' },
      castka: { popis: 'Amount of the debt (zł)', napoveda: 'How much the debtor owes today. We add the amount in words (in Polish) ourselves.' },
      duvod_popis: { popis: 'Basis of the debt', placeholder: 'e.g. pożyczka z umowy z dnia 3.03.2026 (loan under the agreement of 3.03.2026)' },
      splaceni: {
        popis: 'How the debt will be repaid',
        moznosti: { naraz: 'In one go by a set date', splatky: 'In monthly instalments' },
      },
      zaplatit_do: { popis: 'Pay by' },
      splatka: { popis: 'Monthly instalment (zł)' },
      splatka_den: { popis: 'Day of the month' },
      prvni_splatka: { popis: 'Month of the first instalment' },
      ucet: { popis: 'Creditor’s account number' },
      misto: { popis: 'Town or city' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['Who owes and to whom.', 'Basis and amount of the debt.', 'By when, or in what instalments.'],
    coDal: [
      'Print two copies. The debtor must sign – without their signature the document is worthless.',
      'The creditor keeps the original signed by the debtor.',
      'Confirm cash payments with a receipt (pokwitowanie); transfers are documented by the bank statement.',
    ],
    kontrola: [
      'State the basis of the debt specifically (which agreement or event, of what date) and the exact amount.',
      'An acknowledgement of debt interrupts the limitation period (przedawnienie) – afterwards the period starts running again (Article 123 of the Civil Code).',
      'The debtor’s signature must be handwritten. Keep the original.',
      'Do not put pressure on the debtor – an acknowledgement obtained under threat can be challenged.',
      'Check the other party’s identity against their identity card (dowód osobisty) and copy the full name exactly as it appears in it.',
    ],
    pripominky: {
      'Rata – ostatnia': { nazev: 'Instalment – last' },
      Rata: { nazev: 'Instalment' },
      'Termin zapłaty długu': { nazev: 'Debt payment deadline' },
    },
  },

  dokument: {
    nazev: 'Acknowledgement of Debt',
    podnadpis: 'declaration of the debtor (Article 123 § 1 point 2 of the Civil Code – Kodeks cywilny)',
    podpisy: { vlevo: 'debtor', vpravo: 'creditor (consent to instalments)' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Debtor:** {{p_jmeno}}, PESEL {{p_pesel}}, residing at {{p_adresa}}',
          '**Creditor:** {{k_jmeno}}, PESEL {{k_pesel}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Acknowledgement of Debt',
        odstavce: [
          'The Debtor declares that they acknowledge their debt to the Creditor in the amount of **{{castka}}** and undertake to repay it.',
          'Basis of the debt: {{duvod_popis}}.',
        ],
      },
      {
        nadpis: 'Repayment',
        odstavce: [
          {
            uvodVzor: 'Method of repayment (tick one option):',
            moznosti: {
              naraz: 'The Debtor shall repay the debt in one payment no later than {{zaplatit_do}}.',
              splatky: 'The Debtor shall repay the debt in monthly instalments of {{splatka}}, payable by day {{splatka_den}} of each month, in accordance with the schedule in the annex. The last instalment may be lower. If two consecutive instalments are paid late, the entire remaining amount becomes due immediately.',
            },
          },
          'Payments shall be made to account No. {{ucet}} or in cash against a receipt. Early repayment is always possible.',
        ],
      },
    ],
    prilohy: {
      'Załącznik nr 1 · Harmonogram spłat': 'Annex 1 · Repayment schedule',
      Rata: 'Instalment',
      Termin: 'Due date',
      Kwota: 'Amount',
      'Pozostało': 'Remaining',
      'Harmonogram sporządzono według uzgodnionych rat; w razie rozbieżności rozstrzyga treść uznania długu.':
        'The schedule was drawn up according to the agreed instalments; in case of discrepancy the text of the acknowledgement of debt prevails.',
    },
  },
} satisfies PrekladDokumentu;

/**
 * English version: acknowledgement of debt (Slovakia). Original: src/obsah/sk/uznanie-dlhu.ts
 * and src/sablony/sk/uznanie-dlhu.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-UZNANIE-DLHU', verze: '1.0' },

  nazev: 'Acknowledgement of Debt',
  nazevA: 'the acknowledgement of debt',
  katalog: {
    popis: 'Written confirmation of a debt, also with instalments.',
    slova: ['acknowledgement of debt', 'debt', 'debtor', 'creditor', 'IOU', 'instalments', 'repayment schedule', 'uznanie dlhu', 'dlh', 'splátkový kalendár'],
  },
  landing: {
    title: 'Acknowledgement of Debt Slovakia {rok} – free PDF template',
    description:
      'Acknowledgement of debt in Slovakia under Section 558 OZ, explained in English: reason and amount, payment at once or in instalments. Free bilingual PDF or Word.',
    perex: 'The debtor confirms in writing how much they owe, what for and how they will pay. The limitation period is extended to 10 years.',
    obsahPopis: 'An acknowledgement of debt (uznanie dlhu) with the method of repayment.',
    obsah: [
      { nazev: 'Parties', popis: 'Debtor and creditor.' },
      { nazev: 'Debt', popis: 'Reason and amount.' },
      { nazev: 'Repayment', popis: 'At once or in instalments.' },
    ],
    kroky: [
      { nazev: 'Fill in', popis: 'We add the amount in words (in Slovak) ourselves.' },
      { nazev: 'Sign', popis: 'The debtor’s signature is essential.' },
      { nazev: 'Keep it safe', popis: 'The creditor keeps the original.' },
    ],
    online: [
      'Filling in with an explanation of every field',
      'Signing on screen',
      'Download as PDF and Word, or send by e-mail',
      'Instalment schedule and instalment reminders in your calendar',
    ],
    hodiSe: ['An unpaid loan between acquaintances', 'An instalment arrangement for compensation of damage'],
    nehodiSe: ['Debts owed to banks and debt collection companies'],
    po: [{ nazev: 'Instalments', popis: 'Have cash payments confirmed in writing.' }],
    faq: [
      { q: 'Does the acknowledgement have to be in writing?', a: 'Yes, otherwise it is invalid (Section 558 OZ).' },
      { q: 'What happens to the limitation period?', a: 'From the acknowledgement, a new limitation period of 10 years runs (Section 110 OZ).' },
      { q: 'Do you store my details?', a: 'No. The document is created only in your browser.' },
    ],
    zakony: 'The template is based on Sections 558 and 110 of the Slovak Civil Code (Občiansky zákonník).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Acknowledgement of debt online – Slovakia, free PDF',
    description: 'Guide in English for an acknowledgement of debt in Slovakia with an instalment schedule. Bilingual PDF or Word for free.',
    podnadpis: 'Free · result in PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'acknowledgement of debt', g: 'acknowledgement of debt', a: 'acknowledgement of debt', l: 'acknowledgement of debt' },
    kroky: {
      strany: { nazev: 'Debtor and creditor' },
      dlh: { nazev: 'Debt' },
      splatenie: { nazev: 'Repayment' },
    },
    pole: {
      p_jmeno: { popis: 'Debtor – first name and surname' },
      p_narozeni: { popis: 'Date of birth' },
      p_adresa: { popis: 'Permanent address' },
      k_jmeno: { popis: 'Creditor – first name and surname' },
      k_narozeni: { popis: 'Date of birth' },
      k_adresa: { popis: 'Permanent address' },
      castka: { popis: 'Amount of the debt (€)', napoveda: 'How much the debtor owes today. We add the amount in words (in Slovak) ourselves.' },
      duvod_popis: { popis: 'Reason for the debt', placeholder: 'e.g. pôžička podľa zmluvy o pôžičke zo dňa 3. 3. 2026 (loan under the loan agreement of 3 March 2026)' },
      splaceni: {
        popis: 'How the debt will be paid',
        moznosti: { naraz: 'At once by a certain date', splatky: 'In monthly instalments' },
      },
      zaplatit_do: { popis: 'Pay by' },
      splatka: { popis: 'Monthly instalment (€)' },
      splatka_den: { popis: 'Day of the month' },
      prvni_splatka: { popis: 'Month of the first instalment' },
      ucet: { popis: 'Creditor’s IBAN' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [
      'Who owes and to whom.',
      'The law requires written form and both the reason and the amount of the debt.',
      'By when, or in what instalments.',
    ],
    coDal: [
      'Print the acknowledgement twice. The debtor must sign it – without their signature the acknowledgement is not valid.',
      'The creditor keeps the original signed by the debtor.',
      'Have cash instalments confirmed in writing; for transfers, the bank statement is the proof.',
    ],
    kontrola: [
      'The acknowledgement must be in writing and must state both the reason and the amount of the debt – otherwise it is invalid (Section 558 OZ).',
      'State the reason for the debt specifically: from which contract or event and from which date.',
      'From the acknowledgement, a new limitation period of 10 years runs (Section 110(1) OZ).',
      'If the debtor acknowledges a debt that is already time-barred, this has effect only if they knew about the limitation – the text states this expressly.',
      'As the creditor, do not threaten or put pressure on the debtor – an acknowledgement obtained under pressure can be challenged.',
      'Check the identity of the other party against their identity card (občiansky preukaz) and copy the names exactly as they appear on it.',
    ],
    pripominky: {
      'Splátka dlhu – posledná': { nazev: 'Debt instalment – last one', popis: 'Last instalment under the acknowledgement of debt (see the instalment schedule).' },
      'Splátka dlhu': { nazev: 'Debt instalment', popis: 'Monthly instalment under the acknowledgement of debt (see the instalment schedule).' },
      'Splatnosť dlhu': { nazev: 'Debt due date' },
    },
  },

  dokument: {
    nazev: 'Acknowledgement of Debt',
    podnadpis: 'under Section 558 of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník)',
    podpisy: { vlevo: 'debtor', vpravo: 'creditor (consent to the instalments)' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Debtor:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanently residing at {{p_adresa}}',
          '**Creditor:** {{k_jmeno}}, date of birth {{k_narozeni}}, permanently residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Acknowledgement of Debt',
        odstavce: [
          'Under Section 558 of the Civil Code, the Debtor acknowledges in writing that they owe the Creditor the sum of **{{castka}}** and undertakes to pay it.',
          'Reason for the debt: {{duvod_popis}}.',
          'Should the debt already be time-barred, the Debtor declares that they are aware of the limitation and acknowledge the debt nevertheless.',
        ],
      },
      {
        nadpis: 'Repayment',
        odstavce: [
          {
            uvodVzor: 'Method of repayment (tick one option):',
            moznosti: {
              naraz: 'The Debtor shall pay the debt at once no later than {{zaplatit_do}}.',
              splatky: 'The Debtor shall repay the debt in monthly instalments of {{splatka}}, each due by day {{splatka_den}} of the month, according to the instalment schedule in the annex. The last instalment may be lower. If the Debtor is late in paying two consecutive instalments, the entire outstanding balance of the debt becomes due.',
            },
          },
          'Payments are made to the account IBAN {{ucet}} or in cash against a receipt. Early repayment is possible at any time.',
        ],
      },
    ],
    prilohy: {
      'Príloha č. 1 · Splátkový kalendár': 'Annex No. 1 · Instalment schedule',
      Splátka: 'Instalment',
      'Splatná do': 'Due by',
      Suma: 'Amount',
      'Zostáva splatiť': 'Remaining balance',
      'Prehľad je zostavený podľa dohodnutých splátok; pri rozpore má prednosť text zmluvy.':
        'The overview is based on the agreed instalments; in case of conflict, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

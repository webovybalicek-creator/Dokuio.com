/**
 * English version: acknowledgement of debt (Switzerland). Original: src/obsah/ch/schuldanerkennung.ts
 * and src/sablony/ch/schuldanerkennung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-SCHULDANERKENNUNG', verze: '1.0' },

  nazev: 'Acknowledgement of Debt',
  nazevA: 'the acknowledgement of debt',
  katalog: {
    popis: 'Confirm a debt in writing, with instalments if needed.',
    slova: ['acknowledgement of debt', 'debt', 'IOU', 'instalments', 'repayment', 'debt collection', 'limitation period', 'Schuldanerkennung', 'Betreibung', 'Rechtsöffnung'],
  },
  landing: {
    title: 'Acknowledgement of Debt Switzerland {rok} – free PDF template',
    description:
      'Acknowledgement of debt under Art. 17 OR (Switzerland), explained in English: amount, reason, payment in one go or in instalments. Free bilingual PDF or Word.',
    perex: 'The debtor confirms in writing how much they owe and when they will pay. Once signed, it is a strong document in debt enforcement proceedings (Betreibung).',
    obsahPopis: 'A short document, with a repayment schedule if you wish.',
    obsah: [
      { nazev: 'Parties', popis: 'Debtor and creditor.' },
      { nazev: 'Acknowledgement', popis: 'Reason for and amount of the debt.' },
      { nazev: 'Payment', popis: 'In one go or in instalments.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Anything you don’t know stays as a line.' },
      { nazev: 'Check the text', popis: 'Preview next to the form.' },
      { nazev: 'Download and sign', popis: 'PDF or Word.' },
    ],
    online: [
      'Amount in words (in German) added automatically',
      'Signature on screen',
      'Draft saved in your browser',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'someone owes you money and wants to pay later or in instalments',
      'you want to interrupt the limitation period (Verjährung)',
    ],
    nehodiSe: ['there is a dispute about the amount of the debt – reach an agreement first'],
    po: [
      { nazev: 'Original', popis: 'Kept by the creditor.' },
      { nazev: 'Debt enforcement', popis: 'If the debtor does not pay: apply for provisional removal of the objection (provisorische Rechtsöffnung).' },
    ],
    faq: [
      {
        q: 'Why is an acknowledgement of debt so valuable?',
        a: 'If the debtor raises an objection (Rechtsvorschlag) in debt enforcement proceedings (Betreibung), the creditor can use the signed acknowledgement of debt to request provisional removal of the objection (provisorische Rechtsöffnung, Art. 82 SchKG).',
      },
      { q: 'What happens to the limitation period?', a: 'The acknowledgement interrupts it and the period starts again (Art. 135 OR).' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony:
      'The template is based on Art. 17 and Art. 135 of the Swiss Code of Obligations (Obligationenrecht, OR) and Art. 82 of the Federal Act on Debt Enforcement and Bankruptcy (SchKG).',
  },
  vytvorit: {
    title: 'Fill in an acknowledgement of debt online – Switzerland, free PDF',
    description: 'Guide in English for an acknowledgement of debt in Switzerland, with instalments if needed. Free bilingual PDF or Word.',
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
      castka: { popis: 'Amount of the debt (CHF)', napoveda: 'The amount still outstanding today. We add the amount in words (in German) ourselves.' },
      duvod_popis: {
        popis: 'Reason for the debt',
        placeholder: 'e.g. Darlehen gemäss Darlehensvertrag vom 3. 3. 2026 (loan under the loan agreement of 3 March 2026)',
      },
      splaceni: {
        popis: 'How will it be paid?',
        moznosti: { naraz: 'In one go by a certain date', splatky: 'In monthly instalments' },
      },
      zaplatit_do: { popis: 'Pay by' },
      splatka: { popis: 'Monthly instalment (CHF)' },
      splatka_den: { popis: 'Day of the month' },
      prvni_splatka: { popis: 'Month of the first instalment' },
      ucet: { popis: 'Creditor’s IBAN' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [
      'Who owes money and to whom.',
      'Reason for and amount of the debt.',
      'By when, or in which instalments, the debt will be paid.',
    ],
    coDal: [
      'Print it twice. The debtor’s handwritten signature is what counts.',
      'The creditor keeps the signed original.',
      'Get a receipt for cash payments; bank transfers are evidenced by the bank statement.',
    ],
    kontrola: [
      'A signed acknowledgement of debt allows provisional removal of the objection (provisorische Rechtsöffnung) in debt enforcement proceedings (Betreibung) ([Art. 82 SchKG](https://www.fedlex.admin.ch/eli/cc/11/529_488_529/de#art_82)). The amount and due date must be clear from it.',
      'State the reason for and amount of the debt specifically (from which contract or event, from which date).',
      'The acknowledgement interrupts the limitation period, which then starts again ([Art. 135 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_135)).',
      'No pressure and no threats – an acknowledgement given under duress can be challenged.',
      'Check the other party’s identity against their passport or identity card (Identitätskarte) and copy their name and address exactly as shown.',
    ],
    pripominky: {
      'Rate – letzte': { nazev: 'Instalment – last' },
      Rate: { nazev: 'Instalment', popis: 'Monthly instalment under the acknowledgement of debt (Schuldanerkennung) according to the repayment schedule.' },
      'Schuld fällig': { nazev: 'Debt due' },
    },
  },

  dokument: {
    nazev: 'Acknowledgement of Debt',
    podnadpis: 'under Art. 17 of the Swiss Code of Obligations (Obligationenrecht, OR)',
    podpisy: { vlevo: 'debtor', vpravo: 'creditor (agreement to instalments)' },
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
              splatky:
                'I undertake to pay the amount in monthly instalments of {{splatka}}, each due on day {{splatka_den}} of the month, starting with the month of the first instalment according to the repayment schedule. The last instalment may be lower. If I fall behind with two consecutive instalments, the entire remaining amount becomes due immediately.',
            },
          },
          'Payments are made to the account IBAN {{ucet}} or in cash against a receipt. Early payment is possible at any time.',
        ],
      },
    ],
    prilohy: {
      'Anhang 1 · Tilgungsplan': 'Annex 1 · Repayment schedule',
      'Fällig am': 'Due on',
      Betrag: 'Amount',
      Restschuld: 'Remaining debt',
      Rate: 'Instalment',
      'Der Plan folgt den vereinbarten Raten; bei Widersprüchen gilt der Vertragstext.':
        'The schedule follows the agreed instalments; in the event of any discrepancy, the text of the document prevails.',
    },
  },
} satisfies PrekladDokumentu;

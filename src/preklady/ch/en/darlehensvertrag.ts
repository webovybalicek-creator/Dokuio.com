/**
 * English version: loan agreement (Switzerland). Original: src/obsah/ch/darlehensvertrag.ts
 * and src/sablony/ch/darlehensvertrag.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-DARLEHEN', verze: '1.0' },

  nazev: 'Loan Agreement',
  nazevA: 'the loan agreement',
  katalog: {
    popis: 'Lending money, also in instalments.',
    slova: ['loan agreement', 'private loan', 'lend money', 'borrow money', 'IOU', 'instalments', 'repayment schedule', 'Darlehen', 'Darlehensvertrag', 'Tilgungsplan'],
  },
  landing: {
    title: 'Loan Agreement Switzerland {rok} – free PDF template',
    description:
      'Private loan agreement for Switzerland (Art. 312 et seq. OR), explained in English: amount, interest, repayment in one sum or instalments. Free bilingual PDF or Word.',
    perex: 'Lending money to friends or family – in writing, with clear repayment and, if you wish, a repayment schedule.',
    obsahPopis: 'Five articles under Art. 312 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR), with a repayment schedule if you wish.',
    obsah: [
      { nazev: 'Parties', popis: 'Lender and borrower.' },
      { nazev: 'Loan', popis: 'Amount and payout.' },
      { nazev: 'Interest', popis: 'Interest-free or with interest.' },
      { nazev: 'Repayment', popis: 'In one sum or in instalments.' },
      { nazev: 'Final provisions', popis: 'Form and counterparts.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Whatever you don’t know is left as a line.' },
      { nazev: 'Check the text', popis: 'Preview next to the form.' },
      { nazev: 'Download and sign', popis: 'PDF or Word.' },
    ],
    online: [
      'Amount in words (in German) added automatically',
      'Signature on screen',
      'Draft stays saved in your browser',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are lending money to friends or family',
      'repayment in instalments',
    ],
    nehodiSe: [
      'commercial loans to consumers – the Consumer Credit Act (Konsumkreditgesetz) applies to those',
    ],
    po: [
      { nazev: 'Payout', popis: 'Ideally by bank transfer.' },
      { nazev: 'Instalments', popis: 'Add the reminders to your calendar.' },
    ],
    faq: [
      { q: 'Do I have to agree on interest?', a: 'No. Between private individuals, interest is owed only if it has been agreed.' },
      { q: 'What applies if there is no fixed repayment date?', a: 'Then the loan must be repaid within six weeks of the first demand (Art. 318 OR).' },
      { q: 'Does the agreement help with debt enforcement (Betreibung)?', a: 'Yes. An agreement signed by the borrower counts as an acknowledgement of debt (Schuldanerkennung); on that basis, provisional removal of the debtor’s objection (provisorische Rechtsöffnung) can be requested (Art. 82 SchKG).' },
      { q: 'Do you store my details?', a: 'No. The document is put together exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 312 et seq. of the Swiss Code of Obligations (OR) and Art. 82 of the Federal Act on Debt Enforcement and Bankruptcy (Bundesgesetz über Schuldbetreibung und Konkurs, SchKG).',
  },
  vytvorit: {
    title: 'Fill in a loan agreement online (Switzerland) – free PDF',
    description: 'Private loan agreement for Switzerland with a repayment schedule, explained in English. Free PDF or Word.',
  },

  pruvodce: {
    slovo: { n: 'loan agreement', g: 'loan agreement', a: 'loan agreement', l: 'loan agreement' },
    kroky: {
      parteien: { nazev: 'Parties' },
      darlehen: { nazev: 'Loan' },
      rueckzahlung: { nazev: 'Repayment' },
    },
    pole: {
      p_jmeno: { popis: 'Lender (Darleiher/in) – name' },
      p_narozeni: { popis: 'Date of birth' },
      p_adresa: { popis: 'Address' },
      k_jmeno: { popis: 'Borrower (Borger/in) – name' },
      k_narozeni: { popis: 'Date of birth' },
      k_adresa: { popis: 'Address' },
      castka: { popis: 'Loan amount (CHF)' },
      odovzdanie: {
        popis: 'Payout',
        moznosti: { bar: 'In cash on signing', ueberweisung: 'By bank transfer' },
      },
      ucet_k: { popis: 'Borrower’s IBAN' },
      predani_do: { popis: 'Pay out by' },
      urok: {
        popis: 'Interest',
        moznosti: { ne: 'Interest-free', ano: 'With interest' },
      },
      urok_sazba: { popis: 'Interest rate' },
      splaceni: {
        popis: 'Repayment',
        moznosti: { naraz: 'In one sum by a certain date', splatky: 'In monthly instalments' },
      },
      vratit_do: { popis: 'Repay by' },
      splatka: { popis: 'Monthly instalment (CHF)' },
      splatka_den: { popis: 'Day of the month' },
      prvni_splatka: { popis: 'Month of the first instalment' },
      ucet_p: { popis: 'Lender’s IBAN' },
      misto: { popis: 'Place' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: ['', '', '', '', ''],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'Ideally transfer the money – the bank statement is the best proof.',
    ],
    kontrola: [
      'Hand over the money in a way you can prove – by bank transfer or against a receipt.',
      'Between private individuals, interest is owed only if it has been agreed. Without a fixed repayment date, the loan must be repaid within six weeks of the first demand ([Art. 318 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_318)).',
      'The agreement signed by the borrower counts as an acknowledgement of debt (Schuldanerkennung) – on that basis, provisional removal of the debtor’s objection (provisorische Rechtsöffnung) can be requested in debt enforcement proceedings (Betreibung) ([Art. 82 SchKG](https://www.fedlex.admin.ch/eli/cc/11/529_488_529/de#art_82)).',
      'Usurious interest is not permitted; some cantons have maximum interest rates.',
      'Check the identity of the other party against their passport or identity card (Identitätskarte) and copy the name and address exactly.',
      'Larger amounts are better paid by transfer – the bank statement is the safest proof of payment. If paying in cash, have a receipt signed.',
    ],
    pripominky: {
      'Darlehensrate – letzte': { nazev: 'Loan instalment – last' },
      Darlehensrate: { nazev: 'Loan instalment' },
      'Darlehen zurückzahlen': { nazev: 'Repay the loan' },
    },
  },

  dokument: {
    nazev: 'Loan Agreement',
    podnadpis: 'private loan under Art. 312 et seq. of the Swiss Code of Obligations (OR)',
    podpisy: { vlevo: 'lender', vpravo: 'borrower' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Lender:** {{p_jmeno}}, born {{p_narozeni}}, residing at {{p_adresa}}',
          '**Borrower:** {{k_jmeno}}, born {{k_narozeni}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Loan and Payout',
        odstavce: [
          'The Lender grants the Borrower a loan of {{castka}}.',
          {
            uvodVzor: 'Payout (please tick):',
            moznosti: {
              bar: 'The amount was handed over in cash upon signing; the Borrower confirms receipt with their signature.',
              ueberweisung: 'The amount will be transferred by {{predani_do}} to the Borrower’s account IBAN {{ucet_k}}.',
            },
          },
        ],
      },
      {
        nadpis: 'Interest',
        odstavce: [
          {
            uvodVzor: 'Interest (please tick):',
            moznosti: {
              ne: 'The loan is interest-free.',
              ano: 'The amount outstanding from time to time bears interest at {{urok_sazba}}; the interest is due together with the instalments, at the latest with the last instalment.',
            },
          },
        ],
      },
      {
        nadpis: 'Repayment',
        odstavce: [
          {
            uvodVzor: 'Repayment (please tick):',
            moznosti: {
              naraz: 'The Borrower repays the entire amount no later than {{vratit_do}}.',
              splatky: 'The Borrower repays in monthly instalments of {{splatka}}, each due on day {{splatka_den}} of the month, for the first time in the month {{prvni_mesic}}, until repaid in full. The last instalment may be lower. If the Borrower is in arrears with two consecutive instalments, the entire remaining balance becomes due immediately.',
            },
          },
          'Payments are made to the Lender’s account IBAN {{ucet_p}} or in cash against a receipt. Early repayment is possible at any time.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'In all other respects, Art. 312 et seq. OR apply. Amendments must be made in writing.',
          'Each party receives one counterpart of this agreement.',
        ],
      },
    ],
    prilohy: {
      'Anhang 1 · Tilgungsplan': 'Annex 1 · Repayment schedule',
      Rate: 'Instalment',
      'Fällig am': 'Due on',
      Betrag: 'Amount',
      Restschuld: 'Outstanding balance',
      'Der Plan folgt den vereinbarten Raten; bei Widersprüchen gilt der Vertragstext.': 'The schedule follows the agreed instalments; in case of discrepancies, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

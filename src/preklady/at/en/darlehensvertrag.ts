/**
 * English version: private loan agreement (Austria). Original: src/obsah/at/darlehensvertrag.ts
 * and src/sablony/at/darlehensvertrag.ts. The German text prevails; rules and glossary – PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';
import { EIGEN } from '../_eigen';

const T = {
  sablona: { kod: 'AT-DARLEHEN', verze: '1.0' },

  nazev: 'Private Loan Agreement',
  nazevA: 'loan agreement',
  katalog: {
    popis: 'Lend money to friends or family, including repayment in instalments.',
    slova: ['loan agreement', 'private loan', 'lend money', 'borrow money', 'instalments', 'repayment schedule', 'debt', 'Darlehensvertrag', 'Darlehen'],
  },
  landing: {
    title: 'Private Loan Agreement Austria {rok} – free PDF template',
    description:
      'Private loan agreement under the Austrian ABGB: amount, interest, repayment in one sum or in instalments with a schedule. Free bilingual PDF and Word (German + English).',
    perex: 'Money between friends, in black and white. In one sum or in instalments – we attach the repayment schedule automatically.',
    obsahPopis: 'Five sections under §§ 983 et seq. of the Austrian General Civil Code (ABGB).',
    obsah: [
      { nazev: 'Parties', popis: 'Lender and borrower.' },
      { nazev: 'Loan', popis: 'Amount and payout.' },
      { nazev: 'Interest', popis: 'Interest-free or with interest.' },
      { nazev: 'Repayment', popis: 'In one sum or in instalments.' },
      { nazev: 'Final provisions', popis: 'Written form.' },
    ],
    kroky: [
      { nazev: 'Enter the amount', popis: 'And choose how it is paid out.' },
      { nazev: 'Set the repayment', popis: 'In one sum or in instalments.' },
      { nazev: 'Sign', popis: 'Two copies.' },
    ],
    online: ['Repayment schedule as an annex', 'Instalment reminders for your calendar', 'Amount in words (German) added automatically', 'Download as PDF and Word'],
    hodiSe: ['you are lending money to friends or family', 'you want instalments with clear due dates'],
    nehodiSe: ['commercial credit or consumer loans from businesses'],
    po: [{ nazev: 'Payout', popis: 'By bank transfer or against a receipt (Quittung).' }],
    faq: [
      { q: 'Does a private loan need a written agreement?', a: 'It is not mandatory, but strongly recommended – as proof of the amount, repayment and interest.' },
      { q: 'Do you store my data?', a: 'No. The agreement is created entirely in your browser.' },
    ],
    zakony: 'The template is based on §§ 983 et seq. of the Austrian General Civil Code (ABGB).',
    souvisejiciPopis: 'More documents, also free of charge.',
  },
  vytvorit: {
    title: 'Fill in a loan agreement online – Austria, free PDF',
    description: 'Step-by-step helper in English for a private loan agreement in Austria with a repayment schedule. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'loan agreement', g: 'loan agreement', a: 'loan agreement', l: 'loan agreement' },
    kroky: {
      parteien: { nazev: 'Parties' },
      darlehen: { nazev: 'Loan' },
      rueckzahlung: { nazev: 'Repayment' },
    },
    pole: {
      p_jmeno: { popis: 'Lender – full name' },
      p_narozeni: { popis: 'Date of birth' },
      p_adresa: { popis: 'Address' },
      k_jmeno: { popis: 'Borrower – full name' },
      k_narozeni: { popis: 'Date of birth' },
      k_adresa: { popis: 'Address' },
      castka: { popis: 'Loan amount (€)' },
      odovzdanie: { popis: 'Payout', moznosti: { bar: 'In cash on signing', ueberweisung: 'By bank transfer' } },
      ucet_k: { popis: 'Borrower’s IBAN' },
      predani_do: { popis: 'Pay out by' },
      urok: { popis: 'Interest', moznosti: { ne: 'Interest-free', ano: 'With interest' } },
      urok_sazba: { popis: 'Interest rate' },
      splaceni: { popis: 'Repayment', moznosti: { naraz: 'In one sum by a set date', splatky: 'In monthly instalments' } },
      vratit_do: { popis: 'Repay by' },
      splatka: { popis: 'Monthly instalment (€)' },
      splatka_den: { popis: 'Day of the month' },
      prvni_splatka: { popis: 'Month of the first instalment' },
      ucet_p: { popis: 'Lender’s IBAN' },
      misto: { popis: 'Place' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: ['', '', '', '', ''],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'Ideally hand over the money by bank transfer – the bank statement is the best proof.',
    ],
    kontrola: [
      'Hand over the money in a way you can prove – by bank transfer or against a receipt (Quittung).',
      'The interest must not be so high that it is contrary to public morals (sittenwidrig).',
      'Check the other party’s identity against their identity card and copy their name and address exactly.',
      'Count cash only at signing; larger amounts are better paid by bank transfer – the bank statement is the best proof of payment.',
      'If no repayment date is agreed, the termination rules of §§ 983 et seq. ABGB apply – so agree on a clear date.',
    ],
    pripominky: {
      'Darlehensrate – letzte': { nazev: 'Loan instalment – last', popis: 'Last instalment under the loan agreement.' },
      Darlehensrate: { nazev: 'Loan instalment' },
      'Darlehen zurückzahlen': { nazev: 'Repay the loan' },
    },
  },

  dokument: {
    nazev: 'Loan Agreement',
    podnadpis: 'private loan under §§ 983 et seq. of the Austrian General Civil Code (Allgemeines bürgerliches Gesetzbuch, ABGB)',
    podpisy: { vlevo: 'Lender', vpravo: 'Borrower' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Lender:** {{p_jmeno}}, born {{p_narozeni}}, residing at {{p_adresa}}',
          '**Borrower:** {{k_jmeno}}, born {{k_narozeni}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Loan and payout',
        odstavce: [
          'The Lender grants the Borrower a loan of {{castka}}.',
          {
            uvodVzor: 'Payout (please tick):',
            moznosti: {
              bar: 'The amount was handed over in cash on signing; the Borrower confirms receipt with their signature.',
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
              ano: 'The amount outstanding at any time bears interest at {{urok_sazba}}; the interest is due with the instalments, at the latest with the last instalment.',
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
              naraz: 'The Borrower repays the full amount no later than {{vratit_do}}.',
              splatky: 'The Borrower repays in monthly instalments of {{splatka}}, each due on day {{splatka_den}} of the month, for the first time in the month {{prvni_mesic}}, until repaid in full. The last instalment may be lower.',
            },
          },
          'Payments are made to the Lender’s account IBAN {{ucet_p}} or in cash against a receipt. Early repayment is possible at any time.',
        ],
      },
      {
        nadpis: 'Final provisions',
        odstavce: [
          'In all other respects §§ 983 et seq. ABGB apply. Amendments must be made in writing.',
          'Each party receives one copy of this agreement.',
        ],
      },
    ],
    prilohy: {
      'Anlage 1 · Tilgungsplan': 'Annex 1 · Repayment schedule',
      Rate: 'Instalment',
      'Fällig am': 'Due on',
      Betrag: 'Amount',
      Restschuld: 'Balance outstanding',
      'Der Plan folgt den vereinbarten Raten; bei Widersprüchen gilt der Vertragstext.': 'The schedule follows the agreed instalments; in the event of discrepancies, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

const E = EIGEN.en['darlehensvertrag'];
export default {
  ...T,
  landing: {
    ...T.landing,
    ...E,
    faq: E.faq ? [...E.faq, ...T.landing.faq.filter((f) => /store|зберіга/i.test(f.q))] : T.landing.faq,
  },
} satisfies PrekladDokumentu;

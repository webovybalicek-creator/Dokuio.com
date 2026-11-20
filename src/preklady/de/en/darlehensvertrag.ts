/**
 * English version: private loan agreement (Germany). Original: src/obsah/de/darlehensvertrag.ts
 * and src/sablony/de/darlehensvertrag.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-DARLEHEN', verze: '1.0' },

  nazev: 'Private Loan Agreement',
  nazevA: 'the private loan agreement',
  katalog: {
    popis: 'Lending money to friends or family, also in instalments.',
    slova: ['loan', 'loan agreement', 'lend money', 'private loan', 'personal loan', 'instalments', 'repayment plan', 'Darlehensvertrag', 'Darlehen', 'Geld leihen'],
  },
  landing: {
    title: 'Private Loan Agreement Germany {rok} – free PDF template',
    description:
      'Private loan agreement for Germany, explained in English: amount, interest, repayment in one sum or in instalments with a schedule. Free bilingual PDF or Word.',
    perex: 'Money between friends, in black and white. Repaid in one sum or in instalments – we attach the repayment schedule automatically.',
    obsahPopis: 'Five sections under Sections 488 et seq. of the German Civil Code (BGB).',
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
      { nazev: 'Sign', popis: 'Two counterparts.' },
    ],
    online: [
      'Repayment schedule as an annex',
      'Instalment reminders for your calendar',
      'Amount in words (in German) added automatically',
      'Download as PDF and Word',
    ],
    hodiSe: ['you are lending money to friends or family', 'you want instalments with clear due dates'],
    nehodiSe: ['commercial loans or consumer credit from companies'],
    po: [{ nazev: 'Payout', popis: 'By bank transfer or in cash against a receipt (Quittung).' }],
    faq: [
      { q: 'What applies if no repayment date is fixed?', a: 'Then the loan can be terminated with three months’ notice (Section 488(3) BGB).' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together only in your browser.' },
    ],
    zakony: 'The template is based on Sections 488 et seq. of the German Civil Code (Bürgerliches Gesetzbuch, BGB).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a loan agreement online – Germany, free PDF',
    description: 'Private loan agreement in Germany with a repayment schedule: guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · result as PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'loan agreement', g: 'loan agreement', a: 'loan agreement', l: 'loan agreement' },
    kroky: {
      parteien: { nazev: 'Parties' },
      darlehen: { nazev: 'Loan' },
      rueckzahlung: { nazev: 'Repayment' },
    },
    pole: {
      p_jmeno: { popis: 'Lender – name' },
      p_narozeni: { popis: 'Date of birth' },
      p_adresa: { popis: 'Address' },
      k_jmeno: { popis: 'Borrower – name' },
      k_narozeni: { popis: 'Date of birth' },
      k_adresa: { popis: 'Address' },
      castka: { popis: 'Loan amount (€)' },
      odovzdanie: { popis: 'Payout', moznosti: { bar: 'In cash on signing', ueberweisung: 'By bank transfer' } },
      ucet_k: { popis: 'Borrower’s IBAN' },
      predani_do: { popis: 'Pay out by' },
      urok: { popis: 'Interest', moznosti: { ne: 'Interest-free', ano: 'With interest' } },
      urok_sazba: { popis: 'Interest rate' },
      splaceni: { popis: 'Repayment', moznosti: { naraz: 'In one sum by a certain date', splatky: 'In monthly instalments' } },
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
      'Ideally transfer the money – the bank statement is the best proof.',
    ],
    kontrola: [
      'Hand over the money in a way you can prove – by bank transfer or against a receipt (Quittung).',
      'If no term has been agreed, a loan can be terminated with three months’ notice ([Section 488(3) BGB](https://www.gesetze-im-internet.de/bgb/__488.html)).',
      'The interest must not be so high that it is contrary to public policy (sittenwidrig).',
      'Check the other party’s identity using their identity card (Personalausweis) and copy the name and address exactly.',
      'Count cash only when signing; larger amounts are better paid by bank transfer – the bank statement is the best proof of payment.',
    ],
    pripominky: {
      'Darlehensrate – letzte': { nazev: 'Loan instalment – last' },
      Darlehensrate: { nazev: 'Loan instalment' },
      'Darlehen zurückzahlen': { nazev: 'Repay the loan' },
    },
  },

  dokument: {
    nazev: 'Loan Agreement',
    podnadpis: 'private loan under Sections 488 et seq. of the German Civil Code (Bürgerliches Gesetzbuch, BGB)',
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
              bar: 'The amount was handed over in cash upon signing; the Borrower confirms receipt by their signature.',
              ueberweisung: 'The amount shall be transferred by {{predani_do}} to the Borrower’s account IBAN {{ucet_k}}.',
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
              ano: 'The amount outstanding from time to time bears interest at {{urok_sazba}}; the interest is due with the instalments, at the latest with the last instalment.',
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
              naraz: 'The Borrower shall repay the entire amount no later than {{vratit_do}}.',
              splatky: 'The Borrower shall pay monthly instalments of {{splatka}}, each due on day {{splatka_den}} of the month, first in the month {{prvni_mesic}}, until repaid in full. The last instalment may be lower.',
            },
          },
          'Payments are made to the Lender’s account IBAN {{ucet_p}} or in cash against a receipt. Early repayment is possible at any time.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'In all other respects, Sections 488 et seq. BGB apply. Amendments must be made in writing.',
          'Each party receives one counterpart of this agreement.',
        ],
      },
    ],
    prilohy: {
      'Anlage 1 · Tilgungsplan': 'Annex 1 · Repayment schedule',
      Rate: 'Instalment',
      'Fällig am': 'Due on',
      Betrag: 'Amount',
      Restschuld: 'Outstanding balance',
      'Der Plan folgt den vereinbarten Raten; bei Widersprüchen gilt der Vertragstext.': 'The schedule follows the agreed instalments; in case of discrepancies, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

/**
 * English version: loan agreement between private individuals (Hungary). Original: src/obsah/hu/kolcsonszerzodes.ts
 * and src/sablony/hu/kolcsonszerzodes.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-KOLCSON', verze: '1.0' },

  nazev: 'Loan Agreement',
  nazevA: 'the loan agreement',
  katalog: {
    popis: 'A loan to someone you know, also repaid in instalments.',
    slova: ['loan agreement', 'private loan', 'lend money to a friend', 'repayment schedule', 'interest-free loan', 'IOU', 'kölcsönszerződés', 'magánkölcsön'],
  },
  landing: {
    title: 'Loan Agreement Hungary {rok} – free PDF template',
    description:
      'Private loan agreement for Hungary, in English: with or without interest, in one sum or in instalments, with a repayment schedule. Bilingual PDF or Word, free.',
    perex: 'A loan to family or a friend, in writing. For instalments we also prepare a repayment schedule.',
    obsahPopis: 'What the agreement records.',
    obsah: [
      { nazev: 'Amount', popis: 'In figures and words, method of handover.' },
      { nazev: 'Interest', popis: 'Interest-free or annual interest.' },
      { nazev: 'Repayment', popis: 'In one sum or in monthly instalments.' },
      { nazev: 'Schedule', popis: 'Annex with the instalments.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Parties, amount, repayment.' },
      { nazev: 'Handover', popis: 'Preferably by bank transfer.' },
      { nazev: 'Signing', popis: 'In two counterparts.' },
    ],
    online: ['The amount in words (in Hungarian) is added automatically', 'Signing on screen', 'Download as PDF and Word', 'Repayment schedule and calendar reminder'],
    hodiSe: ['you are lending money to a friend or relative'],
    nehodiSe: ['lending on a business basis – that requires a licence'],
    po: [{ nazev: 'Receipt', popis: 'Ask for and give a receipt for each repayment.' }],
    faq: [
      { q: 'Does it have to be in writing?', a: 'It is not compulsory, but in writing it is much easier to prove the loan and its terms.' },
      { q: 'When does the claim become time-barred?', a: 'The claim generally becomes time-barred after 5 years; a written acknowledgement of the debt interrupts the limitation period.' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony: 'The template is based on the loan agreement (kölcsönszerződés) rules of the Hungarian Civil Code (Polgári Törvénykönyv).',
    souvisejiciPopis: 'Other documents for money matters, also free.',
  },
  vytvorit: {
    title: 'Fill in a loan agreement online – Hungary, PDF',
    description: 'Guide in English for a loan agreement in Hungary: interest, instalments, repayment schedule and reminders. Bilingual PDF or Word, free, no sign-up.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      felek: { nazev: 'Parties' },
      osszeg: { nazev: 'Amount and interest' },
      vissza: { nazev: 'Repayment' },
    },
    pole: {
      p_jmeno: { popis: 'Lender’s name', napoveda: 'The person lending the money.' },
      p_szul: { popis: 'Place and date of birth' },
      p_anyja: { popis: 'Mother’s name' },
      p_adresa: { popis: 'Address' },
      k_jmeno: { popis: 'Borrower’s name' },
      k_szul: { popis: 'Place and date of birth' },
      k_anyja: { popis: 'Mother’s name' },
      k_adresa: { popis: 'Address' },
      castka: { popis: 'Loan amount (Ft)' },
      atadas: {
        popis: 'Handover of the money',
        moznosti: { keszpenz: 'In cash when signing', utalas: 'By bank transfer' },
      },
      ucet_k: { popis: 'Borrower’s bank account number' },
      atadas_datum: { popis: 'Transfer no later than' },
      kamat: {
        popis: 'Interest',
        moznosti: { nem: 'Interest-free', igen: 'With interest' },
      },
      kamat_merteke: { popis: 'Interest rate' },
      visszafizetes: {
        popis: 'How it will be repaid',
        moznosti: { egyben: 'In one sum by a set date', reszlet: 'In monthly instalments' },
      },
      vissza_datum: { popis: 'Repayment deadline' },
      splatka: { popis: 'Monthly instalment (Ft)' },
      splatka_den: { popis: 'Day of the month' },
      prvni_splatka: { popis: 'Month of the first instalment' },
      ucet_p: { popis: 'Lender’s bank account number' },
      misto: { popis: 'Town' },
      datum_podpisu: { popis: 'Date of the agreement' },
    },
    vysvetleni: ['', 'How much money is involved and how it is handed over.', '', '', ''],
    coDal: [
      'Print it in two counterparts; both of you sign both copies.',
      'Preferably transfer the money – the bank confirmation is the best proof.',
    ],
    kontrola: [
      'A loan agreement between private individuals is valid even if made orally, but it is much easier to prove in writing.',
      'If there is interest, state the rate as a percentage per year. Excessive (usurious) interest may be void.',
      'The claim generally becomes time-barred after 5 years; a written acknowledgement of the debt interrupts the limitation period.',
      'With the signatures of two witnesses (stating their names and addresses), the document becomes a private document with full probative force (teljes bizonyító erejű magánokirat) – in a dispute this is stronger evidence. A party to the agreement cannot be a witness.',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
      'Count the cash when signing; it is better to transfer a larger amount – the bank debit notice is the best proof.',
    ],
    pripominky: {
      'Kölcsönrészlet – utolsó': { nazev: 'Loan instalment – last' },
      Kölcsönrészlet: { nazev: 'Loan instalment' },
      'A kölcsön visszafizetése': { nazev: 'Loan repayment' },
    },
  },

  dokument: {
    nazev: 'Loan Agreement',
    podnadpis: 'under the loan agreement provisions of Act V of 2013 on the Hungarian Civil Code (Polgári Törvénykönyv)',
    podpisy: { vlevo: 'lender', vpravo: 'borrower' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Lender:** {{p_jmeno}}, place and date of birth: {{p_szul}}, mother’s name: {{p_anyja}}, address: {{p_adresa}}',
          '**Borrower:** {{k_jmeno}}, place and date of birth: {{k_szul}}, mother’s name: {{k_anyja}}, address: {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Amount of the Loan',
        odstavce: [
          'The Lender grants the Borrower a loan of {{castka}}, which the Borrower shall repay in accordance with this agreement.',
          {
            uvodVzor: 'Handover of the money (tick one option):',
            moznosti: {
              keszpenz: 'The Lender handed over the entire amount in cash upon signing this agreement, which the Borrower acknowledges by their signature.',
              utalas: 'The Lender shall transfer the entire amount to the Borrower’s bank account No. {{ucet_k}} no later than {{atadas_datum}}.',
            },
          },
        ],
      },
      {
        nadpis: 'Interest',
        odstavce: [
          {
            uvodVzor: 'Interest (tick one option):',
            moznosti: {
              nem: 'The loan is interest-free.',
              igen: 'The Borrower shall pay interest at {{kamat_merteke}} per year on the principal outstanding from time to time, together with the instalments and no later than with the last instalment.',
            },
          },
        ],
      },
      {
        nadpis: 'Repayment',
        odstavce: [
          {
            uvodVzor: 'Method of repayment (tick one option):',
            moznosti: {
              egyben: 'The Borrower shall repay the entire amount in one sum no later than {{vissza_datum}}.',
              reszlet: 'The Borrower shall repay the amount in monthly instalments of {{splatka}}, by day {{splatka_den}} of each month, from the month {{elso_honap}} until repaid in full. The last instalment may be smaller.',
            },
          },
          'Repayment shall be made to the Lender’s bank account No. {{ucet_p}} or in cash against a receipt. The Borrower may also repay the loan before the deadline.',
          'If the Borrower is late with two consecutive instalments, the Lender may demand the entire outstanding amount in one sum.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Matters not governed by this agreement are governed by the provisions of the Hungarian Civil Code.',
          'This agreement is executed in two identical counterparts, one for each party.',
        ],
      },
    ],
    prilohy: {
      '1. számú melléklet · Törlesztési ütemterv': 'Annex 1 · Repayment schedule',
      Részlet: 'Instalment',
      Esedékes: 'Due date',
      Összeg: 'Amount',
      Hátralék: 'Remaining',
      'Az ütemterv a megállapodott részletek alapján készült; eltérés esetén a szerződés szövege az irányadó.':
        'The schedule was drawn up on the basis of the agreed instalments; in case of discrepancy the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

/**
 * English version: acknowledgement of debt (Czech Republic). Original: src/obsah/cz/uznani-dluhu.ts
 * and src/sablony/cz/uznani-dluhu.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-UZNANI-DLUHU', verze: '1.0' },

  nazev: 'Acknowledgement of Debt',
  nazevA: 'the acknowledgement of debt',
  katalog: {
    popis: 'The debtor acknowledges in writing how much they owe and by when they will repay it.',
    slova: ['acknowledgement of debt', 'debt acknowledgement', 'IOU', 'debt', 'debtor', 'repayment schedule', 'instalments', 'limitation period', 'uznání dluhu', 'dluh', 'splátkový kalendář'],
  },
  landing: {
    title: 'Acknowledgement of Debt Czech Republic {rok} – free PDF template',
    description:
      'Acknowledgement of debt in the Czech Republic under Section 2053 of the Civil Code, explained in English: reason, amount, instalments. Free bilingual PDF or Word.',
    perex: 'The debtor confirms in writing how much they owe and why, and if agreed, how they will repay it. The creditor gains strong evidence and a new ten-year limitation period.',
    obsahPopis: 'Three short parts under Section 2053 of the Czech Civil Code (občanský zákoník); acknowledgement of debt – uznání dluhu.',
    obsah: [
      { nazev: 'Parties', popis: 'Debtor and creditor – name, date of birth, address.' },
      { nazev: 'Acknowledgement of debt', popis: 'Amount of the debt in figures (in words in the Czech text) and its reason.' },
      { nazev: 'Repayment', popis: 'In one sum by a set date, or monthly instalments; early repayment possible.' },
    ],
    kroky: [
      { nazev: 'Answer the questions', popis: 'Who, how much and for what reason. Explanations in English.' },
      { nazev: 'Agree on repayment', popis: 'A date or instalments – optional, but useful.' },
      { nazev: 'Debtor’s signature', popis: 'Without it, the acknowledgement is not valid. The creditor keeps the original. The document is bilingual: Czech original and English translation.' },
    ],
    online: ['The amount in words (in Czech) is added automatically', 'Repayment schedule in one click', 'The effects of acknowledgement explained', 'Download as PDF and Word'],
    hodiSe: ['someone owes you money and you want it in writing', 'the debt is about to become time-barred (generally after 3 years)', 'the debtor wants to pay in instalments and you agree'],
    nehodiSe: ['you are only now lending the money – use a loan agreement (smlouva o zápůjčce)', 'the debtor is a company in insolvency (insolvence)', 'the debt is disputed – consult a lawyer'],
    po: [
      { nazev: 'Original to the creditor', popis: 'Signed by the debtor.' },
      { nazev: 'Confirm repayments', popis: 'Cash against a receipt, transfers to the account.' },
      { nazev: 'Watch the deadlines', popis: 'If the debtor doesn’t pay, start with a demand for payment.' },
    ],
    faq: [
      { q: 'What does an acknowledgement of debt achieve?', a: 'The debt is presumed to exist in the acknowledged amount – the debtor would have to prove otherwise. And a new limitation period of 10 years runs from the acknowledgement (if a repayment date is set, 10 years from that date).' },
      { q: 'Does the acknowledgement have to be in writing?', a: 'Yes. Under Section 2053 of the Civil Code, the debtor must acknowledge the debt in writing and state both its reason and amount.' },
      { q: 'Can a time-barred debt also be acknowledged?', a: 'Yes. The acknowledgement revives the claim and a new ten-year limitation period starts to run.' },
      { q: 'Does the creditor also have to sign?', a: 'No, the debtor’s signature is decisive. The creditor’s signature confirms agreement to the instalments.' },
      { q: 'Do you store my details?', a: 'No. The document is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Sections 2053 and 639 of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník).',
    souvisejiciPopis: 'More documents on money and gifts, also free.',
  },
  vytvorit: {
    title: 'Fill in an acknowledgement of debt online – Czech Republic, PDF',
    description: 'Guide in English for an acknowledgement of debt with instalments in the Czech Republic. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'acknowledgement of debt', g: 'acknowledgement of debt', a: 'acknowledgement of debt', l: 'acknowledgement of debt' },
    kroky: {
      strany: { nazev: 'Debtor and creditor', popis: 'The debtor is the one who owes and acknowledges the debt. The creditor is the one who is owed.' },
      dluh: { nazev: 'Debt', popis: 'The law requires it to be clear what the debt arose from and how much it is.' },
      splaceni: { nazev: 'Repayment' },
    },
    pole: {
      p_jmeno: { popis: 'Debtor – first name and surname', napoveda: 'Full name as in the identity document.', placeholder: 'e.g. Petr Dvořák' },
      p_narozeni: { popis: 'Debtor’s date of birth', napoveda: 'Helps to identify the debtor clearly if the debt were ever enforced.' },
      p_adresa: { popis: 'Debtor’s address', napoveda: 'Permanent address from the identity document.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      k_jmeno: { popis: 'Creditor – first name and surname', napoveda: 'Who the debtor owes money to.', placeholder: 'e.g. Jan Novák' },
      k_narozeni: { popis: 'Creditor’s date of birth', napoveda: 'According to the identity document.' },
      k_adresa: { popis: 'Creditor’s address', napoveda: 'Permanent address.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      castka: { popis: 'Amount of the debt (CZK)', napoveda: 'How much the debtor owes today (the remaining amount). We add it in words (in Czech) ourselves.', placeholder: 'e.g. 40000' },
      duvod: {
        popis: 'What the debt arose from',
        napoveda: 'Choose the closest option and specify it below.',
        moznosti: { zapujcka: 'Lent money (loan – zápůjčka)', kupni: 'Unpaid purchase price', skoda: 'Compensation for damage', jine: 'Other reason' },
      },
      duvod_popis: { popis: 'Details of the reason', napoveda: 'E.g. “smlouva o zápůjčce ze dne 3. 3. 2026” (loan agreement of 3 Mar 2026) or “kupní cena za auto Škoda Fabia podle smlouvy ze dne …” (purchase price for a Škoda Fabia car under the agreement of …). Ideally write it in Czech.', placeholder: 'e.g. smlouva o zápůjčce ze dne 3. 3. 2026 (loan agreement of 3 Mar 2026)' },
      splaceni: {
        popis: 'How the debtor will pay',
        napoveda: 'A date or instalments are not mandatory, but they help both sides – it is clear what is paid and when.',
        moznosti: { naraz: 'In one sum by a set date', splatky: 'In monthly instalments', bez: 'No date (acknowledgement only)' },
      },
      zaplatit_do: { popis: 'Pay no later than', napoveda: 'The last day of the payment period.' },
      splatka: { popis: 'Monthly instalment (CZK)', napoveda: 'The last instalment may be lower.', placeholder: 'e.g. 5000' },
      splatka_den: { popis: 'Day of the month', napoveda: 'By which day of the month the instalment should arrive.', placeholder: 'e.g. 15' },
      prvni_splatka: { popis: 'Month of the first instalment', napoveda: 'Choose any day in the month in which repayment starts.' },
      ucet: { popis: 'Creditor’s account (optional)', napoveda: 'Where the debtor should pay. A transfer is the easiest to prove.', placeholder: '123456789/0100' },
      misto: { popis: 'Place of signing (town)', napoveda: 'We pre-fill it from the debtor’s address.', placeholder: 'e.g. Brno' },
      datum: { popis: 'Date of signing', napoveda: 'We pre-filled today. The new limitation period runs from this day.' },
    },
    vysvetleni: [
      'Who owes and to whom.',
      'The debtor confirms in writing the reason for and amount of the debt. The debt is thereby considered proven and a new ten-year limitation period runs.',
      'When and how the debtor will pay. Early repayment is always possible. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Print the acknowledgement twice. The debtor must sign – without their signature the acknowledgement is not valid.',
      'The creditor keeps the original signed by the debtor.',
      'Have cash instalments confirmed; for transfers, the bank statement serves as proof.',
      'A new limitation period of 10 years runs from signing – keep the original safe.',
    ],
    kontrola: [
      'The acknowledgement must be in writing and must state the reason for the debt and its amount – both are in the document.',
      'The debtor’s handwritten signature (or a valid electronic signature). Without the debtor’s signature, the acknowledgement has no effect.',
      'The reason for the debt specifically: from which contract or event and from what date.',
      'The identity of the other party from their identity document (občanský průkaz). The number of a Czech ID card can be checked in the [Neplatné doklady database (Czech Ministry of the Interior)](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).',
      'The acknowledgement starts a new limitation period of 10 years; if the debtor sets a repayment date, it runs for 10 years from that date.',
      'As a creditor, don’t threaten or pressure – an acknowledgement obtained under pressure can be challenged.',
    ],
    pripominky: {
      'Splátka dluhu – poslední': { nazev: 'Debt instalment – last' },
      'Splátka dluhu': { nazev: 'Debt instalment' },
      'Splatnost dluhu': { nazev: 'Debt due date' },
    },
  },

  dokument: {
    nazev: 'Acknowledgement of Debt',
    podnadpis: 'under Section 2053 of Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
    podpisy: { vlevo: 'debtor', vpravo: 'creditor (agreement to instalments)' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Debtor:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanently residing at {{p_adresa}} (the “Debtor”)',
          '**Creditor:** {{k_jmeno}}, date of birth {{k_narozeni}}, permanently residing at {{k_adresa}} (the “Creditor”)',
        ],
      },
      {
        nadpis: 'Acknowledgement of Debt',
        odstavce: [
          'The Debtor acknowledges that they owe the Creditor the sum of {{castka}}.',
          {
            uvod: 'The debt arose for the following reason:',
            uvodVzor: 'Reason for the debt (tick one option):',
            moznosti: {
              zapujcka: 'loan of money – {{duvod_popis}}.',
              kupni: 'unpaid purchase price – {{duvod_popis}}.',
              skoda: 'compensation for damage – {{duvod_popis}}.',
              jine: '{{duvod_popis}}.',
            },
          },
          'The Debtor declares that they acknowledge the debt as to both its reason and amount under Section 2053 of the Civil Code.',
        ],
      },
      {
        nadpis: 'Repayment',
        odstavce: [
          {
            uvodVzor: 'Repayment (tick one option):',
            moznosti: {
              naraz: 'The Debtor shall pay the debt in one sum no later than {{zaplatit_do}}.',
              splatky: 'The Debtor shall repay the debt in monthly instalments of {{splatka}}, each due by day {{splatka_den}} of the month, for the first time in the month {{prvni_mesic}}, until paid in full. The Creditor agrees to this repayment.',
              bez: 'No repayment date is set by this document.',
            },
          },
          {
            uvodVzor: 'Payments:',
            moznosti: {
              naraz: 'Payments shall be credited to the Creditor’s account No. {{ucet}}, or handed over in cash against written confirmation.',
              splatky: 'Payments shall be credited to the Creditor’s account No. {{ucet}}, or handed over in cash against written confirmation. If any instalment is more than 30 days overdue, the Creditor may demand in writing payment of the entire remaining debt within 30 days of delivery of the demand.',
            },
          },
          'The Debtor may pay the debt early, in full or in part.',
        ],
      },
    ],
    prilohy: {
      'Příloha č. 1 · Splátkový kalendář': 'Annex 1 · Repayment schedule',
      Splátka: 'Instalment',
      'Splatná do': 'Due by',
      Částka: 'Amount',
      'Zbývá splatit': 'Remaining',
      'Přehled je sestavený podle sjednaných splátek; při rozporu má přednost text smlouvy.':
        'The schedule is based on the agreed instalments; in case of conflict, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

/**
 * English version: acknowledgement of debt (Hungary). Original: src/obsah/hu/tartozaselismero-nyilatkozat.ts
 * and src/sablony/hu/tartozaselismero-nyilatkozat.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-TARTOZASELISMERES', verze: '1.0' },

  nazev: 'Acknowledgement of Debt',
  nazevA: 'the acknowledgement of debt',
  katalog: {
    popis: 'A debt in writing, with instalments if needed.',
    slova: ['acknowledgement of debt', 'IOU', 'debt confirmation', 'debt in instalments', 'interrupting the limitation period', 'tartozáselismerő nyilatkozat', 'tartozáselismerés'],
  },
  landing: {
    title: 'Acknowledgement of Debt Hungary {rok} – free PDF template',
    description:
      'Acknowledgement of debt (tartozáselismerő nyilatkozat) for Hungary: amount, legal ground, payment in one sum or instalments. Interrupts limitation. Bilingual PDF, free.',
    perex: 'For when someone owes money and undertakes to pay it. The acknowledgement reverses the burden of proof and interrupts the limitation period.',
    obsahPopis: 'What it contains.',
    obsah: [
      { nazev: 'Debt', popis: 'Amount and legal ground.' },
      { nazev: 'Payment', popis: 'Deadline or monthly instalments.' },
      { nazev: 'Schedule', popis: 'Annex with the instalments.' },
    ],
    kroky: [
      { nazev: 'Fill in', popis: 'Debtor, creditor, amount.' },
      { nazev: 'Signing', popis: 'The debtor signs it.' },
      { nazev: 'Keeping it', popis: 'The creditor keeps the original.' },
    ],
    online: ['The amount in words (in Hungarian) is added automatically', 'Signature on screen', 'Download as PDF and Word', 'Repayment schedule'],
    hodiSe: ['someone owes money and undertakes to pay it', 'you have agreed on payment in instalments'],
    nehodiSe: ['a disputed debt – a settlement or legal help is needed there'],
    po: [{ nazev: 'Receipt', popis: 'Give a receipt for every payment.' }],
    faq: [
      { q: 'What does acknowledging a debt mean?', a: 'After the acknowledgement, it is the debtor who has to prove that the debt does not exist after all.' },
      { q: 'What happens to the limitation period?', a: 'The acknowledgement interrupts the limitation period (elévülés), and the limitation period starts again.' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony: 'The template is based on the rules of the Hungarian Civil Code (Polgári Törvénykönyv) on acknowledgement of debt and limitation.',
    souvisejiciPopis: 'More documents on money matters, also free.',
  },
  vytvorit: {
    title: 'Fill in an acknowledgement of debt online – Hungary, free PDF',
    description: 'Guide in English for an acknowledgement of debt (tartozáselismerő nyilatkozat) in Hungary, with instalments and a repayment schedule. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'acknowledgement', g: 'acknowledgement', a: 'acknowledgement', l: 'acknowledgement' },
    kroky: {
      felek: { nazev: 'Debtor and creditor' },
      tartozas: { nazev: 'Debt and payment' },
    },
    pole: {
      p_jmeno: { popis: 'Debtor’s name (adós)', napoveda: 'The person who owes the money and signs the acknowledgement.' },
      p_szul: { popis: 'Place and date of birth' },
      p_anyja: { popis: 'Mother’s name' },
      p_adresa: { popis: 'Home address' },
      k_jmeno: { popis: 'Creditor’s name (hitelező)' },
      k_adresa: { popis: 'Creditor’s home address' },
      castka: { popis: 'Amount of the debt (Ft)' },
      jogcim: { popis: 'Legal ground of the debt (jogcím)', placeholder: 'e.g. 2026. 03. 01-jén kelt kölcsönszerződés (loan agreement dated 1 March 2026)' },
      fizetes: {
        popis: 'How it will be paid',
        moznosti: { egyben: 'In one sum', reszlet: 'In monthly instalments' },
      },
      hatarido: { popis: 'Payment deadline' },
      splatka: { popis: 'Monthly instalment (Ft)' },
      splatka_den: { popis: 'Day of the month' },
      prvni_splatka: { popis: 'Month of the first instalment' },
      ucet: { popis: 'Creditor’s bank account number' },
      misto: { popis: 'Town or village' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: ['The debtor signs it; the creditor keeps the original.', 'Ask for and give a receipt for every instalment paid.'],
    kontrola: [
      'After the acknowledgement, it is the debtor who has to prove that the debt does not exist after all.',
      'Acknowledging the debt interrupts the limitation period – the 5-year limitation period starts again.',
      'Describe exactly where the debt comes from (e.g. “a 2026. 03. 01-jén kelt kölcsönszerződés” – the loan agreement dated 1 March 2026).',
      'With the signatures of two witnesses (stating their names and home addresses), the document becomes a private document with full probative force (teljes bizonyító erejű magánokirat) – in a dispute this is stronger evidence. A party to the contract cannot be a witness.',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
    ],
    pripominky: {
      'Részlet – utolsó': { nazev: 'Instalment – last', popis: 'Last instalment under the acknowledgement of debt.' },
      Részlet: { nazev: 'Instalment', popis: 'Monthly instalment under the acknowledgement of debt, according to the schedule.' },
    },
  },

  dokument: {
    nazev: 'Acknowledgement of Debt',
    podnadpis: 'under the rules of the Hungarian Civil Code (Polgári Törvénykönyv) on acknowledgement of debt',
    podpisy: { vlevo: 'debtor', vpravo: 'creditor (acknowledged)' },
    clanky: [
      {
        nadpis: 'Declaration',
        odstavce: [
          'I, the undersigned **{{p_jmeno}}** (place and date of birth: {{p_szul}}, mother’s name: {{p_anyja}}, home address: {{p_adresa}}), as debtor,',
          'acknowledge that I owe the creditor **{{k_jmeno}}** (home address: {{k_adresa}}) the sum of **{{castka}}**. Legal ground of the debt: {{jogcim}}.',
          {
            uvodVzor: 'Payment (tick one option):',
            moznosti: {
              egyben: 'I will pay the debt in one sum no later than {{hatarido}}.',
              reszlet: 'I will pay the debt in monthly instalments of {{splatka}}, by day {{splatka_den}} of each month, starting from the month {{elso_honap}} until it is paid in full. If two instalments are missed, the full outstanding balance becomes due in a single sum.',
            },
          },
          'Payment is made to the creditor’s bank account No. {{ucet}} or in cash against a receipt.',
        ],
      },
    ],
    prilohy: {
      '1. számú melléklet · Törlesztési ütemterv': 'Annex 1 · Repayment schedule',
      Részlet: 'Instalment',
      Esedékes: 'Due date',
      Összeg: 'Amount',
      Hátralék: 'Outstanding',
    },
  },
} satisfies PrekladDokumentu;

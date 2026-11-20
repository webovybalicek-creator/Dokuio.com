/**
 * English version: acknowledgement of debt (Germany). Original: src/obsah/de/schuldanerkenntnis.ts
 * and src/sablony/de/schuldanerkenntnis.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-SCHULDANERKENNTNIS', verze: '1.0' },

  nazev: 'Acknowledgement of Debt',
  nazevA: 'the acknowledgement of debt',
  katalog: {
    popis: 'Written confirmation of a debt, also with instalments.',
    slova: ['acknowledgement of debt', 'debt', 'IOU', 'instalments', 'repayment plan', 'debt confirmation', 'Schuldanerkenntnis', 'Schuldschein', 'Ratenzahlung'],
  },
  landing: {
    title: 'Acknowledgement of Debt Germany {rok} – free PDF template',
    description:
      'Acknowledgement of debt for Germany under Section 781 BGB, explained in English: amount, reason, payment at once or in instalments. Free bilingual PDF or Word.',
    perex: 'The debtor confirms in writing how much they owe, what for and how they will pay. The limitation period starts to run again.',
    obsahPopis: 'Acknowledgement of debt (Schuldanerkenntnis) with a payment arrangement.',
    obsah: [
      { nazev: 'Parties', popis: 'Debtor and creditor.' },
      { nazev: 'Debt', popis: 'Reason and amount.' },
      { nazev: 'Payment', popis: 'At once or in instalments, with a repayment plan.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We add the amount in words (in German).' },
      { nazev: 'Sign', popis: 'The debtor’s signature is mandatory.' },
      { nazev: 'Keep it safe', popis: 'The creditor keeps the original.' },
    ],
    online: [
      'Fill it in with explanations for every field',
      'Signature on screen',
      'Download as PDF and Word',
      'Repayment plan and instalments in your calendar',
    ],
    hodiSe: [
      'Securing an unpaid loan between acquaintances',
      'Agreeing instalments for damage caused',
    ],
    nehodiSe: [
      'Debts owed to banks or debt collection agencies (Inkasso) – have their agreements checked',
    ],
    po: [
      { nazev: 'Instalments', popis: 'Get a receipt (Quittung) for cash payments.' },
    ],
    faq: [
      { q: 'Does an acknowledgement of debt need a particular form?', a: 'Yes, written form with the debtor’s own handwritten signature (Section 781 BGB, German Civil Code).' },
      { q: 'What happens to the limitation period?', a: 'With the acknowledgement, it starts to run again (Section 212 BGB).' },
      { q: 'Do you store my data?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Sections 781 and 212 of the German Civil Code (BGB).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in an acknowledgement of debt online – Germany, PDF',
    description: 'Acknowledgement of debt for Germany with instalments and a repayment plan. Bilingual PDF or Word for free.',
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
      castka: { popis: 'Amount of the debt (€)', napoveda: 'The amount still outstanding today. We add it in words (in German).' },
      duvod_popis: { popis: 'Reason for the debt', placeholder: 'e.g. Darlehen laut Darlehensvertrag vom 3. 3. 2026 (loan under the loan agreement of 3. 3. 2026)' },
      splaceni: {
        popis: 'How will it be paid?',
        moznosti: { naraz: 'In one sum by a certain date', splatky: 'In monthly instalments' },
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
      'Reason for and amount of the debt.',
      'By when, or in which instalments, payment is made.',
    ],
    coDal: [
      'Print it twice. The debtor’s signature is mandatory – without it the acknowledgement is not valid.',
      'The creditor keeps the signed original.',
      'Get a receipt (Quittung) for cash payments; transfers are evidenced by the bank statement.',
    ],
    kontrola: [
      'The acknowledgement of debt must be given in writing ([Section 781 BGB](https://www.gesetze-im-internet.de/bgb/__781.html)) – with the debtor’s own handwritten signature.',
      'State the reason for and amount of the debt specifically (from which contract or event, from which date).',
      'With the acknowledgement, the limitation period starts to run again ([Section 212 BGB](https://www.gesetze-im-internet.de/bgb/__212.html)).',
      'No pressure and no threats – an acknowledgement obtained by force can be challenged.',
      'Check the other party’s identity against their identity card (Personalausweis) and copy the name and address exactly.',
    ],
    pripominky: {
      'Rate – letzte': { nazev: 'Instalment – last' },
      Rate: { nazev: 'Instalment' },
      'Schuld fällig': { nazev: 'Debt due' },
    },
  },

  dokument: {
    nazev: 'Acknowledgement of Debt',
    podnadpis: 'under Section 781 of the German Civil Code (Bürgerliches Gesetzbuch, BGB)',
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
              splatky: 'I undertake to pay the amount in monthly instalments of {{splatka}}, each due on day {{splatka_den}} of the month, beginning with the month of the first instalment according to the repayment plan. The last instalment may be lower. If I am in default with two consecutive instalments, the entire remaining amount becomes due immediately.',
            },
          },
          'Payments are made to the account IBAN {{ucet}} or in cash against a receipt. Early payment is possible at any time.',
        ],
      },
    ],
    prilohy: {
      'Anlage 1 · Tilgungsplan': 'Annex 1 · Repayment plan',
      Rate: 'Instalment',
      'Fällig am': 'Due on',
      Betrag: 'Amount',
      Restschuld: 'Remaining debt',
      'Der Plan folgt den vereinbarten Raten; bei Widersprüchen gilt der Vertragstext.': 'The plan follows the agreed instalments; in the event of discrepancies, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

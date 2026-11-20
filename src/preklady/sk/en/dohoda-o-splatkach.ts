/**
 * English version: debt instalment agreement (Slovakia). Original: src/obsah/sk/dohoda-o-splatkach.ts
 * and src/sablony/sk/dohoda-o-splatkach.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-DOHODA-SPLATKY', verze: '1.0' },

  nazev: 'Instalment Agreement',
  nazevA: 'the instalment agreement',
  katalog: {
    popis: 'A debt repayment schedule signed by both the creditor and the debtor.',
    slova: ['instalment agreement', 'repayment schedule', 'payment plan', 'debt instalments', 'debt repayment', 'acceleration clause', 'debtor', 'creditor', 'dohoda o splátkach', 'splátkový kalendár'],
  },
  landing: {
    title: 'Debt Instalment Agreement Slovakia {rok} – free PDF template',
    description:
      'Debt instalment agreement for Slovakia: repayment schedule, loss of instalment benefit (Section 565 OZ), optional debt acknowledgement. Free bilingual PDF and Word.',
    perex: 'The debtor cannot pay everything at once? Agree on instalments. Both parties sign the repayment schedule, and if payments stop, the creditor can demand the whole remaining balance.',
    obsahPopis: 'A two-party agreement with the repayment schedule in an annex.',
    obsah: [
      { nazev: 'Parties', popis: 'Creditor and debtor.' },
      { nazev: 'Debt', popis: 'Amount, reason and an optional acknowledgement of debt.' },
      { nazev: 'Instalments', popis: 'Amount, due day, account, early repayment.' },
      { nazev: 'Loss of the instalment benefit', popis: 'When the whole remaining balance becomes due.' },
      { nazev: 'Annex', popis: 'Repayment schedule with dates and remaining balance.' },
    ],
    kroky: [
      { nazev: 'Fill in the debt and instalments', popis: 'We add the schedule and the amount in words (in Slovak) ourselves.' },
      { nazev: 'Both of you sign', popis: 'Two copies, each keeps one.' },
      { nazev: 'Repay', popis: 'Your calendar will remind you of the instalments.' },
    ],
    online: ['Repayment schedule automatically in the annex', 'Instalments in your phone calendar', 'Optional acknowledgement of debt', 'Download as PDF and as Word'],
    hodiSe: ['an unpaid loan between acquaintances', 'a debt for damage, work or goods', 'the creditor and debtor both want the instalments confirmed in writing'],
    nehodiSe: ['a one-sided admission of the debt is enough for you – use an acknowledgement of debt (uznanie dlhu)', 'a new loan – use a loan agreement (zmluva o pôžičke)', 'debts owed to banks, bailiffs and debt collection companies'],
    poNadpis: 'During repayment.',
    po: [
      { nazev: 'Proof of payment', popis: 'By transfer with a reference; cash only against a receipt.' },
      { nazev: 'Late payment', popis: 'The whole remaining balance must be demanded before the next instalment falls due.' },
      { nazev: 'Last instalment', popis: 'The creditor can confirm that the debt has been paid.' },
    ],
    faq: [
      { q: 'How does it differ from an acknowledgement of debt?', a: 'An acknowledgement of debt (uznanie dlhu) is a one-sided declaration by the debtor. An instalment agreement is signed by both – the creditor agrees to the instalments and the debtor to the terms. An acknowledgement of debt can be part of it.' },
      { q: 'When can the creditor demand the whole debt at once?', a: 'If an instalment is not paid, only if this has been agreed. The creditor must exercise this right no later than the due date of the next instalment (Section 565 of the Civil Code).' },
      { q: 'Will the limitation period be extended?', a: 'If the debtor acknowledges the debt in writing in the agreement, stating its reason and amount, a new limitation period (premlčacia doba) of 10 years runs from the acknowledgement (Sections 558 and 110 of the Civil Code).' },
      { q: 'Do you store my details?', a: 'No. The agreement is created directly in your browser.' },
    ],
    zakony: 'The template is based on Sections 558, 565 and 566 of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník; in force until 30 June 2027).',
    souvisejiciPopis: 'Other documents about money, also free.',
  },
  vytvorit: {
    title: 'Fill in a debt instalment agreement online – Slovakia, PDF',
    description: 'Guide in English for a debt instalment agreement in Slovakia with a repayment schedule. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strany: { nazev: 'Creditor and debtor' },
      dlh: { nazev: 'Debt' },
      splatky: { nazev: 'Instalments' },
    },
    pole: {
      p_jmeno: { popis: 'Creditor – full name', napoveda: 'Who is owed the money. For a company, its name and company ID number (IČO).', placeholder: 'e.g. Ján Novák' },
      p_narozeni: { popis: 'Date of birth', napoveda: 'As on the identity card (občiansky preukaz).' },
      p_adresa: { popis: 'Permanent address', napoveda: 'As on the identity card.', placeholder: 'e.g. Hlavná 12, 811 01 Bratislava' },
      k_jmeno: { popis: 'Debtor – full name', napoveda: 'Who is repaying the debt.', placeholder: 'e.g. Peter Kováč' },
      k_narozeni: { popis: 'Date of birth', napoveda: 'As on the identity card.' },
      k_adresa: { popis: 'Permanent address', napoveda: 'As on the identity card.', placeholder: 'e.g. Mierová 25, 821 05 Bratislava' },
      castka: { popis: 'Outstanding amount of the debt (€)', napoveda: 'How much the debtor owes today, after deducting what has already been paid. We add the amount in words ourselves.', placeholder: 'e.g. 2400' },
      duvod_popis: {
        popis: 'Reason for the debt',
        napoveda: 'What the debt arose from – a contract, an invoice, damage – and from which date. Write in Slovak – the text goes into both language versions.',
        placeholder: 'e.g. nevrátená pôžička podľa zmluvy o pôžičke zo dňa 3. 3. 2026 (unrepaid loan under the loan agreement of 3 March 2026)',
      },
      uznanie: {
        popis: 'Should the debtor also acknowledge the debt?',
        napoveda: 'An acknowledgement strengthens the creditor’s position: it extends the limitation period to 10 years from the acknowledgement.',
        moznosti: { ano: 'Yes, the debtor acknowledges the debt', nie: 'No, just the instalment agreement' },
      },
      splatka: { popis: 'Monthly instalment (€)', napoveda: 'The last instalment may be lower. We calculate the repayment schedule ourselves.', placeholder: 'e.g. 200' },
      splatka_den: { popis: 'Day of the month', napoveda: 'By which day of the month the instalment is paid.', placeholder: 'e.g. 15' },
      prvni_splatka: { popis: 'Month of the first instalment', napoveda: 'Choose any day in the month when repayment starts.' },
      ucet: { popis: 'Creditor’s IBAN', napoveda: 'Where the instalments will be sent.', placeholder: 'SK12 0000 0000 0000 0000 0000' },
      strata: {
        popis: 'When the whole remaining balance becomes due',
        napoveda: 'Loss of the instalment benefit (strata výhody splátok) applies only if it has been agreed (Section 565 OZ).',
        moznosti: { jedna: 'If one instalment is more than 15 days late', dve: 'If two instalments are late' },
      },
      misto: { popis: 'Place of signing', napoveda: 'Pre-filled from the creditor’s address.', placeholder: 'e.g. Bratislava' },
      datum: { popis: 'Date of signing', napoveda: 'We have pre-filled today’s date.' },
    },
    vysvetleni: [
      'Who owes money to whom.',
      'How much is owed and why. An acknowledgement of debt extends the limitation period.',
      'When and how much is paid. The exact breakdown is in the repayment schedule in the annex.',
      'If the debtor stops paying, the creditor can demand the whole remaining balance at once – the law allows this only if it has been agreed like this.',
      'Standard formal points.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies. Each party keeps one.',
      'Send instalments by bank transfer with a variable symbol (variabilný symbol) or a reference – the bank statement is the best proof of payment.',
      'Always have cash instalments confirmed in writing.',
      'If the debtor is late, the creditor must demand payment of the whole remaining balance no later than the due date of the next instalment.',
    ],
    kontrola: [
      'An instalment agreement is two-sided – it is signed by both the creditor and the debtor. If you only need a written admission of the debt from the debtor, an acknowledgement of debt (uznanie dlhu) is enough.',
      'If an instalment is not paid, the creditor can demand the whole remaining balance only if this has been agreed – and no later than the due date of the next instalment (Section 565 OZ). This template includes such an agreement.',
      'An acknowledgement of debt must be in writing and state the reason and amount of the debt (Section 558 OZ). A new limitation period of 10 years runs from the acknowledgement (Section 110(1) OZ).',
      'Describe the reason for the debt specifically: from which contract or event and from which date.',
      'Partial payments are applied first to the principal and then to interest, unless the debtor specifies otherwise (Section 566(2) OZ).',
      'This template does not deal with interest or contractual penalties. If you want to agree on them, have the agreement checked by a lawyer.',
      'Check the other party’s identity against their identity card (občiansky preukaz) and copy the names exactly as shown on it.',
      'Count cash only at signing; larger amounts are better paid by transfer. Between two private individuals who are not traders, the law prohibits cash payments above €15,000; if one party is a trader or company, above €5,000.',
      'Note: the Civil Code (Občiansky zákonník) was repealed by Act No. 260/2026 Coll. and will be replaced by a new one from 1 July 2027. This template reflects the law in force until 30 June 2027 – after that, check the current wording.',
    ],
    pripominky: {
      'Splátka dlhu – posledná': { nazev: 'Debt instalment – last' },
      'Splátka dlhu': { nazev: 'Debt instalment', popis: 'Monthly instalment under the debt instalment agreement (the amount is in the event title).' },
    },
  },

  dokument: {
    nazev: 'Debt Instalment Agreement',
    podnadpis: 'agreement between the creditor and the debtor on repaying a debt in instalments under Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník)',
    podpisy: { vlevo: 'creditor', vpravo: 'debtor' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Creditor:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanent address {{p_adresa}} (the “Creditor”)',
          '**Debtor:** {{k_jmeno}}, date of birth {{k_narozeni}}, permanent address {{k_adresa}} (the “Debtor”)',
        ],
      },
      {
        nadpis: 'Debt',
        odstavce: [
          'As of the date of signing this agreement, the Debtor owes the Creditor the sum of **{{castka}}**. Reason for the debt: {{duvod_popis}}.',
          {
            uvodVzor: 'Acknowledgement of debt (tick one option):',
            moznosti: {
              ano: 'Under Section 558 of the Civil Code, the Debtor acknowledges in writing the debt in the stated amount and for the stated reason and undertakes to pay it. Should the debt already be time-barred, the Debtor declares that they are aware of this.',
              nie: 'By this agreement the parties only regulate the manner of repaying the debt.',
            },
          },
        ],
      },
      {
        nadpis: 'Instalments',
        odstavce: [
          'The Creditor agrees that the Debtor will pay the debt in regular monthly instalments of **{{splatka}}**, each due by day {{splatka_den}} of the month, for the first time in the month {{prvni_mesic}}, until the debt is paid in full. The last instalment may be lower. The breakdown of instalments is set out in Annex No. 1.',
          'Instalments are paid to the Creditor’s account IBAN {{ucet}}, or in cash against a written receipt. An instalment is paid on the day it is credited to the Creditor’s account or on the day the cash is received.',
          'The Debtor may repay the debt early at any time, in full or in part.',
          'As long as the Debtor pays the instalments properly and on time, the Creditor will not enforce payment of the debt.',
        ],
      },
      {
        nadpis: 'Loss of the Instalment Benefit',
        odstavce: [
          {
            uvodVzor: 'The parties have agreed under Section 565 of the Civil Code (tick one option):',
            uvod: 'Under Section 565 of the Civil Code, the parties have agreed that',
            moznosti: {
              jedna: 'if the Debtor is more than 15 days late in paying any instalment, the Creditor may demand payment of the whole remaining balance of the debt at once.',
              dve: 'if the Debtor is late in paying two instalments, the Creditor may demand payment of the whole remaining balance of the debt at once.',
            },
          },
          'The Creditor may exercise this right no later than the due date of the next instalment. The remaining balance is payable within 15 days of the Debtor receiving the Creditor’s written demand.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Rights and obligations not governed by this agreement are governed by Act No. 40/1964 Coll., the Civil Code.',
          'The agreement is made in two counterparts, one for each party. It becomes valid and effective on the day it is signed by both parties. It may be amended only in writing.',
        ],
      },
    ],
    prilohy: {
      'Príloha č. 1 · Splátkový kalendár': 'Annex No. 1 · Repayment schedule',
      'Splátka': 'Instalment',
      'Splatná do': 'Due by',
      'Suma': 'Amount',
      'Zostáva splatiť': 'Remaining balance',
      'Prehľad je zostavený podľa dohodnutých splátok; pri rozpore má prednosť text dohody.': 'The overview is based on the agreed instalments; in case of conflict, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

/**
 * English version: instalment agreement for a debt (Czech Republic). Original: src/obsah/cz/dohoda-o-splatkach.ts
 * and src/sablony/cz/dohoda-o-splatkach.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-DOHODA-SPLATKY', verze: '1.0' },

  nazev: 'Instalment Agreement',
  nazevA: 'the instalment agreement',
  katalog: {
    popis: 'A repayment schedule for a debt, signed by the creditor and the debtor.',
    slova: ['instalments', 'instalment agreement', 'repayment schedule', 'payment plan', 'debt', 'debtor', 'creditor', 'repayment', 'loss of the instalment benefit', 'dohoda o splátkách', 'splátkový kalendář', 'splátky'],
  },
  landing: {
    title: 'Instalment Agreement Czech Republic {rok} – free PDF template',
    description:
      'Debt instalment agreement, Czech Republic: repayment schedule, loss of the instalment benefit (§ 1931 OZ), optional debt acknowledgement. Bilingual PDF/Word, free.',
    perex: 'The debtor can’t pay all at once? Agree on instalments in writing. The creditor and the debtor sign how much is paid and when, and the repayment schedule is put together automatically.',
    obsahPopis: 'A two-party agreement with a repayment schedule in the annex.',
    obsah: [
      { nazev: 'Parties', popis: 'Creditor and debtor – name, date of birth, address.' },
      { nazev: 'Debt', popis: 'The amount owed in figures (in words in the Czech text), the reason, optionally an acknowledgement of debt.' },
      { nazev: 'Instalments', popis: 'Amount, due day, account, any interest, early repayment.' },
      { nazev: 'Loss of the instalment benefit', popis: 'When the creditor may demand the whole remainder at once.' },
      { nazev: 'Annex', popis: 'Repayment schedule with the date and the remaining balance for each instalment.' },
    ],
    kroky: [
      { nazev: 'Enter the debt', popis: 'How much remains to be paid and how the debt arose.' },
      { nazev: 'Set the instalments', popis: 'Amount and day of the month – the schedule is calculated automatically.' },
      { nazev: 'Both of you sign', popis: 'Each keeps one copy. The agreement is bilingual: Czech original and English translation.' },
    ],
    online: ['Repayment schedule in the annex automatically', 'Instalments in your phone calendar (.ics)', 'Optional acknowledgement of debt (10-year limitation period)', 'Download as PDF and Word'],
    hodiSe: ['someone owes you money and can’t pay all at once', 'you owe money and want to offer the creditor instalments', 'you want it clearly set out what happens if an instalment doesn’t arrive'],
    nehodiSe: ['you are only now lending money – use a loan agreement (smlouva o zápůjčce)', 'you just need the debtor to acknowledge the debt in writing – an acknowledgement of debt (uznání dluhu) is enough', 'the debtor is in insolvency (insolvence) or enforcement proceedings (exekuce) – consult a lawyer', 'you regularly offer instalments to customers as a business – check the consumer credit rules'],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Keep track of instalments', popis: 'Download the reminders to your calendar.' },
      { nazev: 'Deal with delays straight away', popis: 'The rest of the debt can only be demanded until the next instalment falls due.' },
      { nazev: 'Confirmation of repayment', popis: 'After the last instalment it is useful for both parties.' },
    ],
    faq: [
      { q: 'How does it differ from an acknowledgement of debt?', a: 'An acknowledgement of debt (uznání dluhu) is a one-sided statement by the debtor of the reason for and amount of the debt. An instalment agreement (dohoda o splátkách) is signed by both parties: the creditor agrees to repayment in instalments and the debtor undertakes to pay according to the schedule. You can include the acknowledgement of debt in the agreement with one tick.' },
      { q: 'What is the loss of the instalment benefit?', a: 'When the debtor fails to pay an instalment, the creditor may demand the whole remainder of the debt at once – but only if this is agreed in the contract. The creditor must exercise this right no later than the due date of the next instalment (Section 1931 of the Czech Civil Code – občanský zákoník).' },
      { q: 'What is a payment applied to first?', a: 'Under Section 1932 of the Civil Code, a payment is applied first to specified costs connected with enforcing the claim, then to default interest (úrok z prodlení), then to interest and finally to the principal. For a consumer debtor in default the order is different: costs, principal, interest and finally default interest.' },
      { q: 'Does interest have to be paid?', a: 'No, interest on the instalments is optional. But if the debtor pays an instalment late, the creditor may claim statutory default interest.' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Sections 1931, 1932, 2053 and 639 of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník). Default interest is set by Government Regulation No. 351/2013 Coll. (nařízení vlády).',
    souvisejiciPopis: 'Other documents about money and debts, also free.',
  },
  vytvorit: {
    title: 'Fill in an instalment agreement online – Czech Republic, PDF',
    description: 'Guide in English for a debt instalment agreement in the Czech Republic, with a repayment schedule and loss of the instalment benefit. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strany: { nazev: 'Creditor and debtor', popis: 'The creditor is the person who is owed money. The debtor is the person who will repay. Both sign the agreement.' },
      dluh: { nazev: 'Debt', popis: 'Which debt will be repaid. It must already exist – the agreement only changes how it will be paid.' },
      splatky: { nazev: 'Instalments' },
    },
    pole: {
      k_jmeno: { popis: 'Creditor – first name and surname', napoveda: 'Full name as in the identity document (for a company, its name and IČO – company ID number).', placeholder: 'e.g. Jan Novák' },
      k_narozeni: { popis: 'Creditor’s date of birth', napoveda: 'According to the identity document. You don’t need to write the Czech personal identification number (rodné číslo).' },
      k_adresa: { popis: 'Creditor’s address', napoveda: 'Permanent address.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      p_jmeno: { popis: 'Debtor – first name and surname', napoveda: 'Full name as in the identity document.', placeholder: 'e.g. Petr Dvořák' },
      p_narozeni: { popis: 'Debtor’s date of birth', napoveda: 'Helps identify the debtor clearly if the debt has to be enforced.' },
      p_adresa: { popis: 'Debtor’s address', napoveda: 'Permanent address from the identity document.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      castka: { popis: 'Amount owed on the date of signing (CZK)', napoveda: 'How much remains to be paid. We add the amount in words (in Czech) ourselves. The repayment schedule is built from it.', placeholder: 'e.g. 36000' },
      duvod: { popis: 'How the debt arose', napoveda: 'Specifically: a contract, an invoice or an event and its date. Write it in Czech.', placeholder: 'e.g. nezaplacená faktura č. 2026015 ze dne 3. 3. 2026 (unpaid invoice No. 2026015 dated 3 March 2026)' },
      uznani: {
        popis: 'Does the debtor also acknowledge the debt?',
        napoveda: 'We recommend yes: the debt is then presumed to exist and the limitation period is 10 years.',
        moznosti: { ano: 'Yes, the debtor acknowledges the debt as to its reason and amount', ne: 'No, we are only agreeing on instalments' },
      },
      splatka: { popis: 'Monthly instalment (CZK)', napoveda: 'The last instalment may be lower – we calculate it.', placeholder: 'e.g. 3000' },
      splatka_den: { popis: 'Day of the month', napoveda: 'By which day of the month the instalment must arrive, e.g. 15.', placeholder: 'e.g. 15' },
      prvni_splatka: { popis: 'Month of the first instalment', napoveda: 'Choose any day in the month in which repayment starts.' },
      ucet: { popis: 'Creditor’s account', napoveda: 'Where payments go. A transfer is easiest to prove.', placeholder: '123456789/0100' },
      urok: {
        popis: 'Is interest paid on the instalments?',
        napoveda: 'Between people who know each other, repayment is usually interest-free. Interest must be reasonable.',
        moznosti: { ne: 'No interest', ano: 'With interest' },
      },
      urok_sazba: { popis: 'Interest rate (% per year)', napoveda: 'Annual rate on the amount not yet repaid, e.g. 4.', placeholder: 'e.g. 4' },
      tolerance: {
        popis: 'When the debtor loses the instalment benefit',
        napoveda: 'When the debtor doesn’t pay, the creditor may demand the whole remainder at once. A 14-day grace period forgives a minor delay.',
        moznosti: { ihned: 'On a delay in any instalment', dny14: 'When an instalment has not arrived even 14 days after its due date' },
      },
      misto: { popis: 'Place of signing (town)', napoveda: 'We pre-fill it from the creditor’s address.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date of signing', napoveda: 'We pre-filled today.' },
    },
    vysvetleni: [
      'Who owes whom. Accurate details are important if the debt has to be enforced.',
      'Which debt is being repaid and how much remains on the date of signing.',
      'The creditor agrees that the debt does not have to be paid all at once, and the debtor undertakes to pay regular instalments according to the schedule in the annex.',
      'What happens when the debtor stops paying: the creditor may demand the whole remainder of the debt at once.',
      'Standard formal points: how many copies and from when the agreement applies. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Print the agreement twice. The creditor and the debtor sign it, and each keeps one copy.',
      'The repayment schedule is an annex – check that the number of instalments and the last amount are right.',
      'Send instalments by transfer with a reference (e.g. “splátka 3/10” – “instalment 3/10”). Always have cash payments confirmed in writing.',
      'When the debtor fails to pay an instalment, the creditor must request payment of the whole remainder in writing no later than the due date of the next instalment.',
      'After paying the last instalment, the debtor can ask for confirmation that the debt has been repaid.',
    ],
    kontrola: [
      'The identity of the other party from their identity document (občanský průkaz). The number of the document can be checked in the [Neplatné doklady database (Czech Ministry of the Interior)](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).',
      'Amount of the debt = how much the debtor owes on the date of signing (after deducting what has already been paid). Describe the reason specifically: which contract, invoice or event.',
      'Loss of the instalment benefit applies only when it is expressly agreed in the agreement – it is in this agreement. The creditor must exercise it no later than the due date of the next instalment (Section 1931 of the Civil Code).',
      'A ticked acknowledgement of debt extends the limitation period to 10 years. The acknowledgement must be in writing and state the reason for and amount of the debt – both are in the agreement.',
      'Interest is optional and must be reasonable. In the event of delay, statutory default interest applies under [Government Regulation No. 351/2013 Coll.](https://www.e-sbirka.cz/sb/2013/351).',
      'Instalments of an amount the debtor can realistically manage – an unachievable schedule helps no one.',
      'Only now lending money? Then use a loan agreement, not this agreement.',
    ],
    pripominky: {
      'Splátka dluhu – poslední': { nazev: 'Debt instalment – last' },
      'Splátka dluhu': { nazev: 'Debt instalment', popis: 'Monthly instalment under the debt instalment agreement (the amount is in the event title).' },
    },
  },

  dokument: {
    nazev: 'Debt Instalment Agreement',
    podnadpis: 'agreement on repayment of a debt in instalments under Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
    podpisy: { vlevo: 'creditor', vpravo: 'debtor' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Creditor:** {{k_jmeno}}, date of birth {{k_narozeni}}, permanently residing at {{k_adresa}} (the “Creditor”)',
          '**Debtor:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanently residing at {{p_adresa}} (the “Debtor”)',
        ],
      },
      {
        nadpis: 'Debt',
        odstavce: [
          'As of the date of signing this agreement, the Debtor owes the Creditor the sum of {{castka}}. The debt arose for the following reason: {{duvod}}.',
          {
            uvodVzor: 'Acknowledgement of debt (tick one option):',
            moznosti: {
              ano: 'The Debtor acknowledges this debt as to its reason and amount under Section 2053 of the Civil Code.',
              ne: 'By this agreement the parties have agreed only on the method of repaying the debt.',
            },
          },
        ],
      },
      {
        nadpis: 'Instalments',
        odstavce: [
          'The parties have agreed that the Debtor shall repay the debt in regular monthly instalments of {{splatka}}, each due by day {{splatka_den}} of the calendar month, for the first time in month {{prvni_mesic}}, until repaid in full. The last instalment may be lower. An overview of the instalments is given in the annex.',
          'Instalments are paid to the Creditor’s account No. {{ucet}}; an instalment is paid when credited to this account. The Creditor shall always confirm a cash payment to the Debtor in writing.',
          {
            uvodVzor: 'Interest (tick one option):',
            moznosti: {
              ne: 'No interest is paid on the instalments.',
              ano: 'The Debtor shall pay interest on the part of the debt not yet repaid at the rate of {{urok_sazba}}, payable together with the individual instalments.',
            },
          },
          'As long as the Debtor pays properly and on time, the Creditor shall not demand payment of the debt at once. The Debtor may also repay the debt earlier, in full or in part.',
        ],
      },
      {
        nadpis: 'Loss of the Instalment Benefit',
        odstavce: [
          {
            uvodVzor: 'When (tick one option):',
            moznosti: {
              ihned: 'If the Debtor fails to pay any instalment properly and on time, the Creditor has the right to demand payment of the entire outstanding debt (Section 1931 of the Civil Code).',
              dny14: 'If the Debtor fails to pay any instalment even within 14 days after its due date, the Creditor has the right to demand payment of the entire outstanding debt (Section 1931 of the Civil Code).',
            },
          },
          'The Creditor shall exercise this right by a written demand delivered to the Debtor no later than the due date of the next instalment. The entire outstanding debt is then payable within 10 days of delivery of the demand.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Rights and obligations not governed by this agreement are governed by Act No. 89/2012 Coll., the Civil Code.',
          'This agreement is executed in two counterparts, one for each party. Annex No. 1 (repayment schedule) forms part of it; in case of conflict, the text of the agreement prevails.',
          'This agreement becomes valid and effective upon signature by both parties.',
          'The parties declare that they have read this agreement, understand its content and sign it in witness of their consent.',
        ],
      },
    ],
    prilohy: {
      'Příloha č. 1 · Splátkový kalendář': 'Annex No. 1 · Repayment schedule',
      'Splátka': 'Instalment',
      'Splatná do': 'Due by',
      'Částka': 'Amount',
      'Zbývá splatit': 'Remaining balance',
      'Tabulka uvádí jen dluh bez úroku. Úrok se platí podle dohody. Přehled je sestavený podle sjednaných splátek; při rozporu má přednost text smlouvy.':
        'The table shows only the debt without interest. Interest is paid as agreed. The overview is based on the agreed instalments; in case of conflict, the text of the contract prevails.',
      'Přehled je sestavený podle sjednaných splátek; při rozporu má přednost text smlouvy.': 'The overview is based on the agreed instalments; in case of conflict, the text of the contract prevails.',
    },
  },
} satisfies PrekladDokumentu;

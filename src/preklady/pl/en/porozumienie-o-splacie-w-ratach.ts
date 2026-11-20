/**
 * English version: instalment agreement for a debt (Poland). Original: src/obsah/pl/porozumienie-o-splacie-w-ratach.ts
 * and src/sablony/pl/porozumienie-o-splacie-w-ratach.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-POROZUMIENIE-RATY', verze: '1.0' },

  nazev: 'Instalment Agreement',
  nazevA: 'the instalment agreement',
  katalog: {
    popis: 'Agreement between a creditor and a debtor with a repayment schedule.',
    slova: [
      'instalment agreement',
      'installment agreement',
      'debt repayment plan',
      'repayment schedule',
      'pay a debt in instalments',
      'debtor',
      'creditor',
      'porozumienie o spłacie',
      'spłata w ratach',
      'harmonogram spłat',
    ],
  },
  landing: {
    title: 'Debt Instalment Agreement Poland {rok} – free PDF template',
    description:
      'Debt instalment agreement (porozumienie o spłacie w ratach) for Poland: schedule, acceleration clause, optional acknowledgement of debt. Free bilingual PDF/Word.',
    perex: 'The debtor can’t pay at once but wants to pay it off? Put an agreement in writing with a schedule of instalments and a clear rule on what happens if a payment is late.',
    obsahPopis: 'A two-party agreement under the Polish Civil Code (Kodeks cywilny) with the schedule in an annex.',
    obsah: [
      { nazev: 'Parties', popis: 'Creditor and debtor.' },
      { nazev: 'Debt', popis: 'Legal basis, amount, components, optionally an acknowledgement of debt.' },
      { nazev: 'Repayment in instalments', popis: 'Instalment, due date, account; the creditor suspends debt collection.' },
      { nazev: 'Loss of the right to pay in instalments', popis: 'Arrears, demand, additional deadline.' },
      { nazev: 'Concession', popis: 'E.g. waiving interest for timely repayment.' },
    ],
    kroky: [
      { nazev: 'Enter the debt and the instalment', popis: 'We calculate the schedule ourselves.' },
      { nazev: 'Set the rules for arrears', popis: 'After how many instalments and with what deadline to pay the arrears.' },
      { nazev: 'Sign', popis: 'Two copies with the schedule.' },
    ],
    online: ['Repayment schedule in an annex', 'Calendar reminders for instalments', 'Amount in words automatically', 'Download as PDF and Word'],
    hodiSe: [
      'an unpaid invoice, loan or damage – the debtor wants to pay it off',
      'you want to suspend debt collection in exchange for regular instalments',
      'you want to waive interest in return for timely repayment',
    ],
    nehodiSe: [
      'it is enough for the debtor just to confirm the debt – choose an acknowledgement of debt (uznanie długu)',
      'a new loan – choose a loan agreement (umowa pożyczki)',
      'debts owed to a bank or a bailiff (komornik) – deal with them directly',
    ],
    poNadpis: 'During repayment.',
    po: [
      { nazev: 'Instalments', popis: 'By bank transfer with a payment reference, or in cash against a receipt.' },
      { nazev: 'Arrears', popis: 'A written demand with an additional deadline.' },
      { nazev: 'End of repayment', popis: 'Confirmation that the whole debt has been repaid.' },
    ],
    faq: [
      {
        q: 'How is it different from an acknowledgement of debt?',
        a: 'An acknowledgement of debt is a unilateral declaration by the debtor. The agreement is a contract between both parties: the creditor agrees to instalments and suspends debt collection, the debtor accepts the schedule and the consequences of arrears.',
      },
      {
        q: 'What is the loss of the right to pay in instalments?',
        a: 'A contractual clause under which, in the event of arrears, the whole remaining debt becomes due at once (utrata dobrodziejstwa rat). The Civil Code allows the parties to arrange their contract as they see fit (Article 353¹ KC).',
      },
      {
        q: 'Is interest due on late payment?',
        a: 'Yes, the creditor may demand statutory interest for late payment, even if they have not suffered any loss (Article 481 KC).',
      },
      {
        q: 'Does the agreement interrupt the limitation period?',
        a: 'If the debtor acknowledges the debt in it – yes, acknowledging a claim interrupts the running of the limitation period (Article 123 § 1 point 2 KC).',
      },
      { q: 'Do you save my details?', a: 'No. The agreement is created solely in your browser.' },
    ],
    zakony: 'The template is based on Articles 123, 353¹, 458 and 481 of the Polish Civil Code (Kodeks cywilny).',
    souvisejiciPopis: 'Other documents about money, also free.',
  },
  vytvorit: {
    title: 'Debt instalment agreement online – Poland, free PDF',
    description: 'Debt instalment agreement for Poland with a repayment schedule and explanations in English. Bilingual PDF or Word for free.',
    podnadpis: 'Free · result as PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strony: { nazev: 'Parties', popis: 'The creditor is the person the money is owed to; the debtor is the person who has to pay it back.' },
      dlug: { nazev: 'Debt' },
      raty: { nazev: 'Instalments and conditions' },
    },
    pole: {
      w_imie: { popis: 'Creditor – first name and surname or company name', napoveda: 'Who the debtor has to pay.', placeholder: 'e.g. Jan Kowalski' },
      w_id: { popis: 'PESEL or NIP', napoveda: 'PESEL (personal identification number) for a private individual, NIP (tax identification number) for a company.', placeholder: 'e.g. 80010112345' },
      w_adres: { popis: 'Address', napoveda: 'Residential address or registered office.', placeholder: 'e.g. ul. Długa 12, 00-001 Warszawa' },
      d_imie: { popis: 'Debtor – first name and surname or company name', napoveda: 'Who is repaying the debt.', placeholder: 'e.g. Piotr Nowak' },
      d_id: { popis: 'PESEL or NIP', napoveda: 'Copy it from the identity card (dowód osobisty) or from the CEIDG/KRS business register.', placeholder: 'e.g. 85020254321' },
      d_adres: { popis: 'Address', napoveda: 'Residential address or registered office.', placeholder: 'e.g. ul. Polna 7/12, 30-001 Kraków' },
      tytul: {
        popis: 'Legal basis of the debt',
        napoveda: 'Where the debt comes from – a contract, an invoice, a loan, damage.',
        placeholder: 'e.g. niezapłacona faktura nr 12/2026 z dnia 15.03.2026 (unpaid invoice No. 12/2026 of 15.03.2026)',
      },
      castka: { popis: 'Amount to be repaid in instalments (PLN)', napoveda: 'The whole amount the debtor will pay according to the schedule. We add the amount in words (in Polish) ourselves.', placeholder: 'e.g. 6000' },
      stan_na: { popis: 'Amount of the debt as at', napoveda: 'Usually the day the agreement is concluded.' },
      skladniki: {
        popis: 'What the amount consists of (optional)',
        napoveda: 'E.g. principal, interest, costs – useful in case of a dispute.',
        placeholder: 'e.g. 5 600 zł należności głównej i 400 zł odsetek (PLN 5,600 principal and PLN 400 interest)',
      },
      uznanie: {
        popis: 'Does the debtor acknowledge the debt?',
        napoveda: 'An acknowledgement interrupts the limitation period and makes it easier to recover the debt in court.',
        moznosti: { tak: 'Yes, the debtor acknowledges the debt in full', nie: 'No – we are only agreeing on repayment' },
      },
      splatka: { popis: 'Monthly instalment (PLN)', napoveda: 'The last instalment may be lower – we calculate the schedule ourselves.', placeholder: 'e.g. 500' },
      splatka_den: { popis: 'Payable by day of the month', napoveda: 'E.g. 10 = by the 10th day of each month.', placeholder: 'e.g. 10' },
      prvni_splatka: { popis: 'Month of the first instalment', napoveda: 'Choose any day in the month of the first instalment.' },
      konto: { popis: 'Creditor’s bank account', napoveda: 'The debtor pays the instalments into this account.', placeholder: 'PL00 0000 0000 0000 0000 0000 0000' },
      zaleglosc: {
        popis: 'When the debtor loses the right to pay in instalments',
        napoveda: 'After this number of overdue instalments and an unsuccessful demand, the whole remaining debt becomes due immediately.',
        moznosti: { jedna: 'One instalment overdue', dwie: 'Two instalments overdue' },
      },
      dodatkowy_termin: {
        popis: 'Additional deadline after the demand',
        napoveda: 'How many days the debtor has to pay the arrears after a written demand. Usually 7 or 14.',
        placeholder: 'e.g. 7',
      },
      zwolnienie: {
        popis: 'Concession by the creditor (optional)',
        napoveda: 'E.g. the creditor waives the interest if the debtor pays all instalments on time.',
        moznosti: { nie: 'No concessions', tak: 'Release from part of the debt for timely repayment' },
      },
      zwolnienie_opis: {
        popis: 'What the creditor releases the debtor from',
        napoveda: 'Be specific – an amount or a type of claim.',
        placeholder: 'e.g. odsetek naliczonych do dnia porozumienia w kwocie 400 zł (interest accrued up to the date of the agreement amounting to PLN 400)',
      },
      misto: { popis: 'Town', napoveda: 'We fill it in from the creditor’s address.', placeholder: 'e.g. Warszawa' },
      datum: { popis: 'Date the agreement is concluded', napoveda: 'We have filled in today’s date.' },
    },
    vysvetleni: [
      'Who owes money to whom.',
      'Where the debt comes from and how much it is on the day of the agreement.',
      'The amount of the instalments, the due date and the account. The exact dates are in the schedule.',
      'What happens if the debtor stops paying: after a demand, the whole remaining debt must be paid at once.',
      'An optional reward for timely repayment.',
      'Form of amendments and number of copies.',
    ],
    coDal: [
      'Print the agreement in two copies with the schedule; both parties sign both copies.',
      'Instalments are best paid by bank transfer with the reference “rata nr … wg porozumienia z dnia …” (“instalment No. … under the agreement of …”) – the bank statement is proof of payment.',
      'Confirm cash payments with a receipt (pokwitowanie).',
      'If the debtor falls behind with instalments, send a written demand with an additional deadline before making the whole amount due.',
    ],
    kontrola: [
      'Enter the exact amount still outstanding on the day of the agreement and its legal basis (which contract, invoice or event it arises from).',
      'Loss of the right to pay in instalments is a contractual clause (freedom of contract, Article 353¹ KC): in the event of the specified arrears, the whole remainder becomes due. Regardless of the agreement, the creditor may demand payment before the due date if the debtor becomes insolvent (Article 458 KC).',
      'Statutory interest for late payment is due on a late instalment (Article 481 KC), even without proof of loss.',
      'Acknowledging the debt in the agreement interrupts the limitation period – it starts running again (Article 123 § 1 point 2 KC).',
      'If only the debtor needs to confirm the debt (with no obligations for the creditor), a simpler acknowledgement of debt is enough.',
      'Check the other party’s identity against their identity card and copy the first name and surname exactly as they appear on it.',
      'Only count cash when signing; larger amounts are better paid by transfer – the transfer confirmation is the best proof of payment.',
    ],
    pripominky: {
      'Rata zadłużenia – ostatnia': { nazev: 'Debt instalment – last', popis: 'Last instalment under the instalment agreement.' },
      'Rata zadłużenia': { nazev: 'Debt instalment', popis: 'Monthly instalment under the instalment agreement, according to the schedule.' },
    },
  },

  dokument: {
    nazev: 'Agreement on Repayment of a Debt in Instalments',
    podnadpis: 'concluded under Article 353¹ of the Act of 23 April 1964 – the Civil Code (Kodeks cywilny)',
    podpisy: { vlevo: 'creditor', vpravo: 'debtor' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: ['**Creditor:** {{w_imie}}, PESEL/NIP {{w_id}}, {{w_adres}}', '**Debtor:** {{d_imie}}, PESEL/NIP {{d_id}}, {{d_adres}}'],
      },
      {
        nadpis: 'Debt',
        odstavce: [
          'The parties jointly confirm that as at {{stan_na}} the Debtor’s debt to the Creditor arising from: {{tytul}} amounts to **{{castka}}**; it consists of: {{skladniki}}.',
          {
            uvodVzor: 'Acknowledgement of debt (tick one option):',
            moznosti: {
              tak: 'The Debtor acknowledges the above debt in full.',
              nie: 'The parties only agree on the method of repayment of the above amount.',
            },
          },
        ],
      },
      {
        nadpis: 'Repayment in Instalments',
        odstavce: [
          'The Debtor shall repay the debt in monthly instalments of {{splatka}}, payable by day {{splatka_den}} of each month, starting from the month {{prvni_mesic}}, until repaid in full, in accordance with the schedule forming Annex No. 1. The last instalment may be lower.',
          'The instalments are payable to the Creditor’s account No. {{konto}} or in cash against a receipt. The day of payment is the day the Creditor’s account is credited. The Debtor may repay all or part of the debt early at any time.',
          'As long as the Debtor pays the instalments on time, the Creditor shall not pursue payment of the debt in court or instruct its collection (windykacja).',
        ],
      },
      {
        nadpis: 'Loss of the Right to Pay in Instalments',
        odstavce: [
          {
            uvodVzor: 'Arrears (tick one option):',
            moznosti: {
              jedna: 'If the Debtor is late in paying one instalment,',
              dwie: 'If the Debtor is late in paying two instalments,',
            },
          },
          'the Creditor may demand in writing that the Debtor pay the arrears within an additional period of {{dodatkowy_termin}} days from delivery of the demand. If this period expires without payment, the entire amount remaining to be repaid becomes due immediately.',
          'For late payment, the Creditor may demand statutory interest for late payment (Article 481 of the Civil Code).',
        ],
      },
      {
        nadpis: 'Concession by the Creditor',
        odstavce: [
          {
            uvodVzor: 'Concession (tick one option):',
            moznosti: {
              nie: 'The Creditor grants no concessions – the Debtor shall repay the entire amount of the debt.',
              tak: 'On condition that all instalments are paid by the dates in the schedule, the Creditor releases the Debtor from the obligation to pay: {{zwolnienie_opis}}. If the right to pay in instalments is lost, the release does not take effect.',
            },
          },
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Amendments to this agreement must be made in writing, otherwise they are null and void.',
          'Matters not governed by this agreement are governed by the provisions of the Civil Code.',
          'This agreement has been drawn up in two identical copies, one for each party.',
        ],
      },
    ],
    prilohy: {
      'Załącznik nr 1 · Harmonogram spłat': 'Annex No. 1 · Repayment schedule',
      Rata: 'Instalment',
      'Termin zapłaty': 'Due date',
      Kwota: 'Amount',
      'Pozostało do spłaty': 'Remaining balance',
      'Harmonogram sporządzono według uzgodnionych rat; w razie rozbieżności rozstrzyga treść porozumienia.':
        'The schedule has been prepared according to the agreed instalments; in the event of any discrepancy, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

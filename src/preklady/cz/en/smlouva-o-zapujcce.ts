/**
 * English version: loan agreement (Czech Republic). Original: src/obsah/cz/smlouva-o-zapujcce.ts
 * and src/sablony/cz/smlouva-o-zapujcce.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-ZAPUJCKA', verze: '1.0' },

  nazev: 'Loan Agreement',
  nazevA: 'the loan agreement',
  katalog: {
    popis: 'Lending money between people you know, including instalments.',
    slova: ['loan', 'loan agreement', 'lend money', 'borrow money', 'personal loan', 'instalments', 'debt', 'smlouva o zápůjčce', 'půjčka', 'zápůjčka'],
  },
  landing: {
    title: 'Loan Agreement Czech Republic {rok} – free PDF template',
    description:
      'Loan agreement between private individuals in the Czech Republic, explained in English: amount, interest, instalments. Free bilingual PDF or Word.',
    perex: 'Lending money to someone you know or within the family? Put in writing how much, at what interest and by when it is repaid. Fill it in online or download a blank template.',
    obsahPopis: 'Five articles under Section 2390 et seq. of the Czech Civil Code (občanský zákoník), without contractual penalties.',
    obsah: [
      { nazev: 'Parties', popis: 'Lender and borrower – name, date of birth, address.' },
      { nazev: 'Subject of the loan', popis: 'Amount in figures (in words in the Czech text), handed over in cash or by transfer.' },
      { nazev: 'Interest', popis: 'Interest-free loan or an annual interest rate.' },
      { nazev: 'Repayment', popis: 'In one sum by a set date, or monthly instalments. Early repayment is always possible.' },
      { nazev: 'Final provisions', popis: 'Two counterparts, entry into force, language clause and both parties’ signatures.' },
    ],
    kroky: [
      { nazev: 'Answer the questions', popis: 'How much, how the money is handed over, interest and repayment. Explanations in English. Skip what you don’t know.' },
      { nazev: 'Edit the text if you wish', popis: 'You can rewrite or delete any paragraph. The original wording can always be restored.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up. The agreement is bilingual: Czech original and English translation. Print it twice – both parties sign.' },
    ],
    online: ['The amount in words (in Czech) is added automatically', 'Instalments and interest in one click', 'Sign with your finger or mouse right in the guide', 'Download as PDF and Word'],
    hodiSe: ['you are lending money to an acquaintance, a friend or a family member', 'you want to agree on instalments or a fixed repayment date', 'you are both private individuals'],
    nehodiSe: [
      'you are lending as part of a business – consumer credit rules apply',
      'you are giving money and don’t want it back – use a gift agreement (darovací smlouva)',
      'the debt already exists and you only want to confirm it in writing – we are preparing an acknowledgement of debt (uznání dluhu)',
    ],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Sign two counterparts', popis: 'Each party keeps one.' },
      { nazev: 'Hand over the money', popis: 'A bank transfer is the easiest to prove. With cash, sign only with the money in your hand.' },
      { nazev: 'Confirm repayments', popis: 'Have every cash payment confirmed, for example with our confirmation of receipt of money.' },
    ],
    faq: [
      { q: 'What is the difference between “půjčka” and “zápůjčka”?', a: 'People usually say “půjčka” (loan), but for money the Czech Civil Code uses the term “zápůjčka” (loan for consumption): the borrower returns the same amount, not the same banknotes. A “výpůjčka”, on the other hand, is lending a specific item free of charge, which is then returned.' },
      { q: 'Does a loan agreement have to be in writing?', a: 'The law does not require it, but without a written agreement it is hard to prove how much you lent and on what terms. We always recommend a written agreement.' },
      { q: 'What interest is reasonable?', a: 'The law sets no fixed cap, but interest grossly disproportionate to usual rates is usurious and invalid. Between people who know each other, money is most often lent without interest. Interest received is taxable income.' },
      { q: 'What if the borrower doesn’t repay?', a: 'Statutory default interest applies from the first day of default. With instalments, the lender may demand in writing repayment of the entire remaining amount after 30 days of default. If a demand doesn’t help, you can file a lawsuit or an application for a payment order.' },
      { q: 'Why are there no contractual penalties in the agreement?', a: 'Courts often reduce or cancel high penalties between private individuals, and they needlessly strain relationships. The template therefore relies on statutory default interest. If you want a penalty, you can add it as your own clause.' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together directly in your browser and the details are not sent to any server.' },
    ],
    zakony: 'The template is based on Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník; Section 2390 et seq. on loans, Section 1970 on default interest).',
    souvisejiciPopis: 'More documents on money and gifts, also free.',
  },
  vytvorit: {
    title: 'Fill in a loan agreement online – Czech Republic, PDF',
    description: 'Guide in English for a loan agreement in the Czech Republic: amount, interest, instalments. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    kroky: {
      strany: { nazev: 'Who lends and who borrows', popis: 'The lender (zapůjčitel) lends the money; the borrower (vydlužitel) borrows it and repays it.' },
      castka: { nazev: 'Amount and handover' },
      uroky: { nazev: 'Interest' },
      splaceni: { nazev: 'Repayment' },
    },
    pole: {
      p_jmeno: { popis: 'Lender – first name and surname', napoveda: 'Who is lending the money. Full name as in the identity document.', placeholder: 'e.g. Jan Novák' },
      p_narozeni: { popis: 'Lender’s date of birth', napoveda: 'The date of birth is enough; you don’t need to write the Czech personal identification number (rodné číslo).' },
      p_adresa: { popis: 'Lender’s address', napoveda: 'Permanent address from the identity document.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      k_jmeno: { popis: 'Borrower – first name and surname', napoveda: 'Who is borrowing the money and will repay it.', placeholder: 'e.g. Petra Svobodová' },
      k_narozeni: { popis: 'Borrower’s date of birth', napoveda: 'According to the identity document. It helps to identify the borrower clearly if the debt ever had to be enforced.' },
      k_adresa: { popis: 'Borrower’s address', napoveda: 'Permanent address from the identity document.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      castka: { popis: 'Amount lent (CZK)', napoveda: 'The full amount the lender hands over. We add it in words (in Czech) ourselves.', placeholder: 'e.g. 50000' },
      predani: {
        popis: 'How the money is handed over',
        napoveda: 'A transfer to an account is the easiest to prove. With cash, by signing the agreement the borrower confirms receipt of the money – only sign with the money in your hand.',
        moznosti: { hotove: 'In cash when signing the agreement', prevod: 'By transfer to the borrower’s account' },
      },
      ucet_k: { popis: 'Borrower’s account number', napoveda: 'The account the lender will send the money to.', placeholder: '123456789/0100' },
      predani_do: { popis: 'Send no later than', napoveda: 'By when the lender will send the money.' },
      urok: {
        popis: 'Is interest payable?',
        napoveda: 'Between people who know each other, money is often lent without interest. Interest must be reasonable – usurious interest is invalid. Interest is taxable income for the lender.',
        moznosti: { ne: 'No interest', ano: 'With interest' },
      },
      urok_sazba: { popis: 'Interest rate (% per year)', napoveda: 'Annual rate, e.g. 5. Paid together with the repayments of principal.', placeholder: 'e.g. 5' },
      splaceni: {
        popis: 'How the money is repaid',
        napoveda: 'Without an agreed date, the loan would only be repayable after notice (výpověď). It is better to write a date.',
        moznosti: { naraz: 'In one sum by a set date', splatky: 'In regular monthly instalments' },
      },
      vratit_do: { popis: 'Repay no later than', napoveda: 'The last day by which the whole amount must be repaid.' },
      splatka: { popis: 'Monthly instalment (CZK)', napoveda: 'How much the borrower pays each month. The last instalment may be lower.', placeholder: 'e.g. 5000' },
      splatka_den: { popis: 'Day of the month', napoveda: 'By which day of the month the instalment should arrive, e.g. 15.', placeholder: 'e.g. 15' },
      prvni_splatka: { popis: 'Month of the first instalment', napoveda: 'Choose any day in the month in which repayment starts.' },
      vraceni_zpusob: {
        popis: 'Where the money is repaid',
        napoveda: 'A transfer is the easiest to prove. Always have cash confirmed in writing.',
        moznosti: { ucet: 'To the lender’s account', hotove: 'In cash against written confirmation' },
      },
      ucet_p: { popis: 'Lender’s account number', napoveda: 'The account to which the money will be repaid.', placeholder: '123456789/0100' },
      misto: { popis: 'Place of signing (town)', napoveda: 'We pre-fill it from the lender’s address; feel free to change it.', placeholder: 'e.g. Říčany' },
      datum_podpisu: { popis: 'Date of signing', napoveda: 'We pre-filled today. If you want to write the date by hand, clear the field.' },
    },
    vysvetleni: [
      'Who lends the money and who repays it. Accurate details are important if the debt ever had to be enforced.',
      'How much is lent and how the money is handed over. The borrower undertakes to return the same amount.',
      'Whether the borrower pays anything extra for the loan. Without interest, they repay exactly the amount borrowed.',
      'When and how the money is repaid. Anyone may repay early; whoever does not pay on time owes statutory default interest.',
      'Standard formal points: how many copies and from when the agreement applies. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'Hand over the money by transfer, or in cash when signing – the agreement then also serves as confirmation of receipt.',
      'Have every instalment repaid in cash confirmed (our confirmation of receipt of money is useful).',
      'Keep the agreement until everything has been repaid.',
    ],
    kontrola: [
      'The identity of the other party from their identity document (občanský průkaz). The number of a Czech ID card can be checked in the [Neplatné doklady database (Czech Ministry of the Interior)](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).',
      'Preferably transfer the money – a bank statement is the strongest proof that you lent it.',
      'A repayment date written in the agreement – without it, the loan is only repayable after notice.',
      'Reasonable interest; usurious interest is invalid. Interest received is taxable income of the lender.',
      'Have every cash instalment confirmed in writing (confirmation of receipt of money).',
      'If the debtor doesn’t pay, don’t miss the limitation period (promlčení, generally 3 years) – a written acknowledgement of debt helps.',
    ],
    pripominky: {
      'Předat zapůjčené peníze': { nazev: 'Hand over the lent money' },
      'Splátka zápůjčky – poslední': { nazev: 'Loan instalment – last' },
      'Splátka zápůjčky': { nazev: 'Loan instalment' },
      'Vrátit zápůjčku': { nazev: 'Repay the loan' },
    },
  },

  dokument: {
    nazev: 'Loan Agreement',
    podnadpis: 'concluded under Section 2390 et seq. of Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
    podpisy: { vlevo: 'lender', vpravo: 'borrower' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Lender:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanently residing at {{p_adresa}} (the “Lender”)',
          '**Borrower:** {{k_jmeno}}, date of birth {{k_narozeni}}, permanently residing at {{k_adresa}} (the “Borrower”)',
        ],
      },
      {
        nadpis: 'Subject of the Loan',
        odstavce: [
          'The Lender provides the Borrower with the sum of {{castka}} and the Borrower undertakes to return this sum to the Lender under the terms of this agreement.',
          {
            uvodVzor: 'Handover of the money (tick one option):',
            moznosti: {
              hotove: 'The Lender handed over the entire sum to the Borrower in cash upon signing this agreement. By signing, the Borrower confirms receipt of it.',
              prevod: 'The Lender shall transfer the sum to the Borrower’s account No. {{ucet_k}} no later than {{predani_do}}.',
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
              ne: 'The loan is interest-free.',
              ano: 'The Borrower shall pay interest of {{urok_sazba}} on the amount not yet repaid. Interest is payable together with the instalments, at the latest with the last of them.',
            },
          },
        ],
      },
      {
        nadpis: 'Repayment of the Loan',
        odstavce: [
          {
            uvodVzor: 'Method of repayment (tick one option):',
            moznosti: {
              naraz: 'The Borrower shall repay the entire sum in one payment no later than {{vratit_do}}.',
              splatky: 'The Borrower shall repay the sum in regular monthly instalments of {{splatka}}, each due by day {{splatka_den}} of the month, for the first time in the month {{prvni_mesic}}, until repaid in full. The last instalment may be lower.',
            },
          },
          {
            uvodVzor: 'Payments (tick one option):',
            moznosti: {
              ucet: 'The Borrower shall pay to the Lender’s account No. {{ucet_p}}. A payment is made when credited to this account.',
              hotove: 'The Borrower shall pay in cash; the Lender shall confirm each payment received in writing.',
            },
          },
          'The Borrower may repay the loan early, in full or in part.',
          {
            uvodVzor: 'In the case of instalments:',
            moznosti: {
              splatky: 'If the Borrower is more than 30 days in default with any instalment, the Lender may demand in writing repayment of the entire amount not yet repaid within 30 days of delivery of the demand.',
            },
          },
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Rights and obligations of the parties not governed by this agreement are governed by Act No. 89/2012 Coll., the Civil Code, in particular Section 2390 et seq.',
          'This agreement is executed in two counterparts, one for each party.',
          'This agreement becomes valid and effective upon signature by both parties.',
          'The parties declare that they have read this agreement, understand its content and sign it in witness of their consent.',
        ],
      },
    ],
    prilohy: {
      'Příloha č. 1 · Splátkový kalendář': 'Annex 1 · Repayment schedule',
      Splátka: 'Instalment',
      'Splatná do': 'Due by',
      Částka: 'Amount',
      'Zbývá splatit': 'Remaining',
      'Tabulka uvádí jen jistinu. Úrok se platí podle článku o úroku. Přehled je sestavený podle sjednaných splátek; při rozporu má přednost text smlouvy.':
        'The table shows the principal only. Interest is paid according to the article on interest. The schedule is based on the agreed instalments; in case of conflict, the text of the agreement prevails.',
      'Přehled je sestavený podle sjednaných splátek; při rozporu má přednost text smlouvy.':
        'The schedule is based on the agreed instalments; in case of conflict, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

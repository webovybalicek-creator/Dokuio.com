/**
 * English version: loan agreement (Slovakia). Original: src/obsah/sk/zmluva-o-pozicke.ts
 * and src/sablony/sk/zmluva-o-pozicke.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-POZICKA', verze: '1.0' },

  nazev: 'Loan Agreement',
  nazevA: 'the loan agreement',
  katalog: {
    popis: 'Lending money between acquaintances, also with instalments.',
    slova: ['loan agreement', 'loan', 'lend money', 'borrow money', 'private loan', 'instalments', 'repayment schedule', 'zmluva o pôžičke', 'pôžička', 'požičať peniaze'],
  },
  landing: {
    title: 'Loan Agreement Slovakia {rok} – free PDF template',
    description:
      'Loan agreement between acquaintances in Slovakia, explained in English: amount, interest, repayment at once or in instalments with a schedule. Free bilingual PDF or Word.',
    perex: 'A loan between acquaintances in black and white. At once or in instalments – we attach the instalment schedule automatically.',
    obsahPopis: 'Five articles under Sections 657 and 658 of the Slovak Civil Code (Občiansky zákonník).',
    obsah: [
      { nazev: 'Parties', popis: 'Lender and borrower.' },
      { nazev: 'Subject of the agreement', popis: 'Amount and handover of the money.' },
      { nazev: 'Interest', popis: 'Interest-free or with interest.' },
      { nazev: 'Repayment', popis: 'At once or in instalments.' },
      { nazev: 'Final provisions', popis: 'Counterparts and entry into force.' },
    ],
    kroky: [
      { nazev: 'Enter the amount', popis: 'And how the money is handed over.' },
      { nazev: 'Agree on repayment', popis: 'At once or in instalments.' },
      { nazev: 'Sign', popis: 'Both parties, two copies.' },
    ],
    online: ['Instalment schedule as an annex', 'Instalment reminders in your calendar', 'Amount in words (in Slovak) automatically', 'Download as PDF and Word'],
    hodiSe: ['you are lending money to family or acquaintances', 'you want instalments with clear dates'],
    nehodiSe: ['a business loan or consumer credit – different rules apply', 'the debt already exists – use an acknowledgement of debt (uznanie dlhu)'],
    po: [
      { nazev: 'Handover of the money', popis: 'By transfer or with a receipt.' },
      { nazev: 'Instalments', popis: 'Add them to your calendar.' },
    ],
    faq: [
      { q: 'When does a loan agreement come into existence?', a: 'Only when the money is handed over to the borrower (Section 657 OZ). That is why a bank statement or a receipt is important.' },
      { q: 'Can I charge interest?', a: 'Yes, if you agree on it. Excessively high interest may be contrary to good morals (dobré mravy).' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník, Sections 657 and 658).',
    souvisejiciPopis: 'More documents about money, also free.',
  },
  vytvorit: {
    title: 'Fill in a loan agreement online – Slovakia, PDF',
    description: 'Guide in English for a loan agreement with an instalment schedule under Slovak law. Bilingual PDF or Word for free.',
    podnadpis: 'Free · result in PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strany: { nazev: 'Lender and borrower' },
      pozicka: { nazev: 'Loan' },
      vraceni: { nazev: 'Repayment' },
    },
    pole: {
      p_jmeno: { popis: 'Lender – first name and surname', napoveda: 'The person lending the money.', placeholder: 'e.g. Ján Novák' },
      p_narozeni: { popis: 'Date of birth' },
      p_adresa: { popis: 'Permanent address' },
      k_jmeno: { popis: 'Borrower – first name and surname', napoveda: 'The person borrowing the money.', placeholder: 'e.g. Peter Kováč' },
      k_narozeni: { popis: 'Date of birth' },
      k_adresa: { popis: 'Permanent address' },
      castka: { popis: 'Amount lent (€)', placeholder: 'e.g. 3000' },
      odovzdanie: {
        popis: 'How the lender hands over the money',
        moznosti: { hotove: 'In cash when signing the agreement', prevod: 'By transfer to the borrower’s account' },
      },
      ucet_k: { popis: 'Borrower’s IBAN' },
      predani_do: { popis: 'Hand over no later than' },
      urok: {
        popis: 'Interest',
        napoveda: 'Between acquaintances, money is often lent without interest.',
        moznosti: { ne: 'Interest-free', ano: 'With interest' },
      },
      urok_sazba: { popis: 'Interest rate', placeholder: 'e.g. 3' },
      splaceni: {
        popis: 'How the borrower repays the loan',
        moznosti: { naraz: 'At once by a certain date', splatky: 'In monthly instalments' },
      },
      vratit_do: { popis: 'Repay no later than' },
      splatka: { popis: 'Monthly instalment (€)', placeholder: 'e.g. 250' },
      splatka_den: { popis: 'Day of the month', placeholder: 'e.g. 15' },
      prvni_splatka: { popis: 'Month of the first instalment', napoveda: 'Choose any day in the month when repayment begins.' },
      ucet_p: { popis: 'Lender’s IBAN' },
      misto: { popis: 'Place of signing' },
      datum_podpisu: { popis: 'Date of signing' },
    },
    vysvetleni: [
      'Who is lending and who is borrowing.',
      'How much and how the money is handed over. The agreement comes into existence only when it is handed over.',
      'Whether interest is paid. Without an agreement, no interest is paid.',
      'When and how the borrower repays the money.',
      'Standard formal points.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'Preferably send the money by transfer – the bank statement is the best proof that the loan was handed over.',
      'With cash, have the borrower sign a receipt for the money.',
    ],
    kontrola: [
      'A loan agreement comes into existence only when the money is handed over. Send it by transfer or have receipt of the cash confirmed.',
      'Interest must be reasonable – excessively high interest may be contrary to good morals (dobré mravy) and therefore invalid.',
      'Check the identity of the other party against their identity card (občiansky preukaz) and copy the names exactly as they appear on it.',
      'Count cash only when signing; larger amounts are better paid by transfer. Between two private individuals who are not entrepreneurs, the law prohibits cash payments above €15,000; if one party is an entrepreneur or a company, above €5,000.',
    ],
    pripominky: {
      'Odovzdať peniaze z pôžičky': { nazev: 'Hand over the loan money' },
      'Splátka pôžičky – posledná': { nazev: 'Loan instalment – last one', popis: 'Last instalment under the loan agreement (see the instalment schedule).' },
      'Splátka pôžičky': { nazev: 'Loan instalment', popis: 'Monthly instalment under the loan agreement (see the instalment schedule).' },
      'Vrátiť pôžičku': { nazev: 'Repay the loan' },
    },
  },

  dokument: {
    nazev: 'Loan Agreement',
    podnadpis: 'concluded under Section 657 et seq. of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník)',
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
        nadpis: 'Subject of the Agreement',
        odstavce: [
          'The Lender provides the Borrower with funds in the amount of {{castka}} and the Borrower undertakes to repay them in accordance with this agreement.',
          {
            uvodVzor: 'Handover of the money (tick one option):',
            moznosti: {
              hotove: 'The Lender handed over the entire amount to the Borrower in cash upon signing this agreement. By signing, the Borrower confirms receipt of it.',
              prevod: 'The Lender shall send the entire amount to the Borrower’s account IBAN {{ucet_k}} no later than {{predani_do}}.',
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
              ne: 'The loan is provided interest-free.',
              ano: 'The Borrower shall pay interest at the rate of {{urok_sazba}} on the outstanding amount. Interest is payable together with the instalments, no later than with the last of them.',
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
              naraz: 'The Borrower shall repay the entire amount at once no later than {{vratit_do}}.',
              splatky: 'The Borrower shall repay the amount in monthly instalments of {{splatka}}, each due by day {{splatka_den}} of the month, for the first time in the month {{prvni_mesic}}, until repaid in full. The last instalment may be lower.',
            },
          },
          'Payments shall be credited to the Lender’s account IBAN {{ucet_p}} or handed over in cash against a written receipt.',
          {
            uvodVzor: 'In the case of instalments:',
            moznosti: {
              splatky: 'If the Borrower is more than 30 days late in paying any instalment, the Lender may demand in writing repayment of the entire outstanding amount within 30 days of delivery of the demand.',
            },
          },
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Rights and obligations not governed by this agreement are governed by Act No. 40/1964 Coll., the Civil Code, in particular Sections 657 and 658.',
          'The agreement is executed in two counterparts, one for each party. It becomes valid and effective upon signature by both parties; where the money is handed over by transfer, upon the money being credited to the Borrower’s account.',
        ],
      },
    ],
    prilohy: {
      'Príloha č. 1 · Splátkový kalendár': 'Annex No. 1 · Instalment schedule',
      Splátka: 'Instalment',
      'Splatná do': 'Due by',
      Suma: 'Amount',
      'Zostáva splatiť': 'Remaining balance',
      'Tabuľka uvádza len istinu, úroky sa platia podľa článku o úrokoch. Prehľad je zostavený podľa dohodnutých splátok; pri rozpore má prednosť text zmluvy.':
        'The table shows the principal only; interest is paid according to the article on interest. The overview is based on the agreed instalments; in case of conflict, the text of the agreement prevails.',
      'Prehľad je zostavený podľa dohodnutých splátok; pri rozpore má prednosť text zmluvy.':
        'The overview is based on the agreed instalments; in case of conflict, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

/**
 * English version: loan agreement (Poland). Original: src/obsah/pl/umowa-pozyczki.ts
 * and src/sablony/pl/umowa-pozyczki.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-POZYCZKA', verze: '1.0' },

  nazev: 'Loan Agreement',
  nazevA: 'the loan agreement',
  katalog: {
    popis: 'Lending money between friends, also repaid in instalments.',
    slova: ['loan', 'lend money', 'borrow money', 'private loan', 'instalments', 'repayment schedule', 'loan agreement', 'umowa pożyczki', 'pożyczka', 'PCC'],
  },
  landing: {
    title: 'Loan Agreement Poland {rok} – free PDF template',
    description:
      'Loan agreement between private individuals in Poland, explained in English: amount, interest, repayment in one go or in instalments. Bilingual PDF or Word, free.',
    perex: 'A loan between friends in black and white. Repaid in one go or in instalments – we attach the repayment schedule automatically.',
    obsahPopis: 'Five sections under Article 720 et seq. of the Polish Civil Code (Kodeks cywilny).',
    obsah: [
      { nazev: 'Parties', popis: 'The lender and the borrower.' },
      { nazev: 'Subject of the agreement', popis: 'The amount and how it is handed over.' },
      { nazev: 'Interest', popis: 'Interest-free or with interest.' },
      { nazev: 'Repayment', popis: 'In one go or in instalments.' },
      { nazev: 'Final provisions', popis: 'PCC tax, counterparts.' },
    ],
    kroky: [
      { nazev: 'Enter the amount', popis: 'And how the money is handed over.' },
      { nazev: 'Set the repayment', popis: 'In one go or in instalments.' },
      { nazev: 'Sign', popis: 'Two counterparts.' },
    ],
    online: [
      'Repayment schedule as an annex',
      'Instalment reminders in your calendar',
      'Amount in words (in Polish) added automatically',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are lending money to family or friends',
      'you want instalments with clear due dates',
    ],
    nehodiSe: ['a consumer credit or a loan within a business – different rules apply'],
    po: [
      { nazev: 'PCC-3', popis: 'Within 14 days, check whether you must file the PCC-3 return (tax on civil-law transactions) or are exempt.' },
      { nazev: 'Instalments', popis: 'Add them to your calendar.' },
    ],
    faq: [
      {
        q: 'Do I have to pay tax on a loan?',
        a: 'As a rule, yes – the borrower pays 0.5% tax on civil-law transactions (PCC) within 14 days. There are exemptions, including for close family – details at podatki.gov.pl.',
      },
      { q: 'Does the agreement have to be in writing?', a: 'A loan over 1000 zł requires documentary form (forma dokumentowa, Article 720 § 2 of the Civil Code).' },
      { q: 'Do you store my data?', a: 'No. The agreement is created only in your browser.' },
    ],
    zakony: 'The template is based on the Polish Civil Code (Kodeks cywilny, Articles 720–724 and Article 359).',
    souvisejiciPopis: 'Other money documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a loan agreement online – Poland, PDF',
    description: 'Guide in English for a loan agreement with a repayment schedule under Polish law. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strony: { nazev: 'Parties' },
      pozyczka: { nazev: 'Loan' },
      zwrot: { nazev: 'Repayment' },
    },
    pole: {
      p_jmeno: { popis: 'Lender – full name', napoveda: 'The person lending the money.' },
      p_pesel: { popis: 'PESEL (Polish personal ID number)' },
      p_adresa: { popis: 'Residential address' },
      k_jmeno: { popis: 'Borrower – full name', napoveda: 'The person receiving the money.' },
      k_pesel: { popis: 'PESEL' },
      k_adresa: { popis: 'Residential address' },
      castka: { popis: 'Amount (zł)', placeholder: 'e.g. 10000' },
      odovzdanie: {
        popis: 'How the money will be handed over',
        moznosti: { hotove: 'In cash on signing', prevod: 'By transfer to the borrower’s account' },
      },
      ucet_k: { popis: 'Borrower’s account' },
      predani_do: { popis: 'Transfer no later than' },
      urok: {
        popis: 'Interest',
        moznosti: { ne: 'Interest-free', ano: 'With interest' },
      },
      urok_sazba: { popis: 'Interest rate' },
      splaceni: {
        popis: 'How the loan will be repaid',
        moznosti: { naraz: 'In one go by a set date', splatky: 'In monthly instalments' },
      },
      vratit_do: { popis: 'Repayment date' },
      splatka: { popis: 'Monthly instalment (zł)' },
      splatka_den: { popis: 'Day of the month' },
      prvni_splatka: { popis: 'Month of the first instalment' },
      ucet_p: { popis: 'Lender’s account' },
      misto: { popis: 'Town or city' },
      datum_podpisu: { popis: 'Date of the agreement' },
    },
    vysvetleni: ['', 'How much money and how it will be handed over.', '', '', ''],
    coDal: [
      'Print the agreement in two counterparts; both parties sign both.',
      'Hand over the money preferably by bank transfer – it is the best proof.',
      'Borrower: check whether you must file the PCC-3 return (0.5%) within 14 days, or whether you are exempt.',
    ],
    kontrola: [
      'A loan over 1000 zł requires documentary form (forma dokumentowa, Article 720 § 2 of the Civil Code) – this agreement meets it.',
      'As a rule, a loan is subject to the 0.5% tax on civil-law transactions (PCC), paid by the borrower within 14 days. Exemptions, including for close family, are described at [podatki.gov.pl](https://www.podatki.gov.pl/poradniki-i-informatory/pozyczka-miedzy-czlonkami-najblizszej-rodziny-zwolnienie-od-podatku-pcc).',
      'Interest must stay within the statutory limits on maximum interest (odsetki maksymalne, Article 359 of the Civil Code).',
      'Check the other party’s identity against their identity card (dowód osobisty) and copy the full name exactly as it appears in it.',
      'Count cash only on signing; larger amounts are better paid by transfer – the transfer confirmation is the best proof of payment.',
    ],
    pripominky: {
      'PCC-3 od pożyczki – sprawdź obowiązek (pożyczkobiorca)': { nazev: 'PCC-3 on the loan – check whether it applies (borrower)' },
      'Rata pożyczki – ostatnia': { nazev: 'Loan instalment – last' },
      'Rata pożyczki': { nazev: 'Loan instalment', popis: 'Monthly instalment under the loan agreement (schedule in Annex 1).' },
      'Zwrot pożyczki': { nazev: 'Loan repayment' },
    },
  },

  dokument: {
    nazev: 'Loan Agreement',
    podnadpis: 'concluded under Article 720 et seq. of the Act of 23 April 1964 – the Civil Code (Kodeks cywilny)',
    podpisy: { vlevo: 'lender', vpravo: 'borrower' },
    clanky: [
      {
        nadpis: 'Parties to the Agreement',
        odstavce: [
          '**Lender:** {{p_jmeno}}, PESEL {{p_pesel}}, residing at {{p_adresa}}',
          '**Borrower:** {{k_jmeno}}, PESEL {{k_pesel}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Subject of the Agreement',
        odstavce: [
          'The Lender transfers to the Borrower ownership of the sum of {{castka}}, and the Borrower undertakes to repay it on the terms of this agreement.',
          {
            uvodVzor: 'Handover of the money (tick one option):',
            moznosti: {
              hotove: 'The Lender handed over the entire amount in cash on signing this agreement, which the Borrower confirms by signing.',
              prevod: 'The Lender shall transfer the entire amount to the Borrower’s account No. {{ucet_k}} no later than {{predani_do}}.',
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
              ano: 'The Borrower shall pay interest at the rate of {{urok_sazba}} on the amount outstanding, payable together with the instalments and no later than with the last of them.',
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
              naraz: 'The Borrower shall repay the entire amount in one payment no later than {{vratit_do}}.',
              splatky: 'The Borrower shall repay the amount in monthly instalments of {{splatka}}, payable by day {{splatka_den}} of each month, starting from the month {{prvni_mesic}}, until repaid in full. The last instalment may be lower.',
            },
          },
          'Payments shall be made to the Lender’s account No. {{ucet_p}} or in cash against a receipt.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Matters not governed by this agreement are governed by the Civil Code, in particular Articles 720–724.',
          'Any tax on civil-law transactions (PCC) shall be borne by the Borrower.',
          'This agreement is executed in two identical counterparts, one for each party.',
        ],
      },
    ],
    prilohy: {
      'Załącznik nr 1 · Harmonogram spłat': 'Annex 1 · Repayment schedule',
      Rata: 'Instalment',
      Termin: 'Due date',
      Kwota: 'Amount',
      'Pozostało': 'Remaining',
      'Harmonogram sporządzono według uzgodnionych rat; w razie rozbieżności rozstrzyga treść umowy.':
        'The schedule was drawn up according to the agreed instalments; in case of discrepancy the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

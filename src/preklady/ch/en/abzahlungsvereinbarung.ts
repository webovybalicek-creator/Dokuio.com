/**
 * English version: instalment agreement (Switzerland). Original: src/obsah/ch/abzahlungsvereinbarung.ts
 * and src/sablony/ch/abzahlungsvereinbarung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-ABZAHLUNG', verze: '1.0' },

  nazev: 'Instalment Agreement',
  nazevA: 'the instalment agreement',
  katalog: {
    popis: 'Paying off an existing debt in instalments – with a payment schedule, signed by both parties.',
    slova: ['instalment agreement', 'payment plan', 'payment schedule', 'pay in instalments', 'debt', 'repayment', 'acceleration clause', 'debt enforcement', 'Abzahlungsvereinbarung', 'Ratenzahlungsvereinbarung', 'Ratenplan'],
  },
  landing: {
    title: 'Instalment Agreement Switzerland {rok} – free PDF template',
    description:
      'Instalment agreement under Swiss law, explained in English: existing debt in monthly instalments, acceleration clause, optional acknowledgement of debt. Free PDF or Word.',
    perex: 'Someone cannot pay an invoice or a loan all at once? Put the instalments in writing – with a payment schedule, an acceleration clause and, if you wish, an acknowledgement of debt.',
    obsahPopis: 'Five sections and an automatic payment schedule in the annex.',
    obsah: [
      { nazev: 'Parties', popis: 'Creditor and debtor.' },
      { nazev: 'Debt', popis: 'Amount outstanding, reason and optional acknowledgement of debt (Art. 17 of the Swiss Code of Obligations, OR).' },
      { nazev: 'Payment in instalments', popis: 'Monthly instalment, due date, IBAN, interest, no debt enforcement while payments are on time.' },
      { nazev: 'Acceleration clause', popis: 'When the entire remaining debt becomes due.' },
      { nazev: 'Annex: payment schedule', popis: 'All instalments with date and outstanding balance.' },
    ],
    kroky: [
      { nazev: 'Enter the debt and instalments', popis: 'The payment schedule is created automatically.' },
      { nazev: 'Check', popis: 'Preview next to the form.' },
      { nazev: 'Both parties sign', popis: 'One counterpart each for the creditor and the debtor.' },
    ],
    online: [
      'Payment schedule as an annex, automatically',
      'Amount in words in francs (in German)',
      'Instalments as calendar reminders',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'an invoice or a loan is not being paid all at once',
      'instead of debt enforcement (Betreibung) you want an instalment arrangement',
      'both parties should commit – the debtor to instalments, the creditor to patience',
    ],
    nehodiSe: [
      'money is only now being lent – use the loan agreement instead',
      'only the debtor is to sign – then an acknowledgement of debt is enough',
      'you are a business granting credit commercially with interest or fees – observe the Consumer Credit Act (Konsumkreditgesetz)',
    ],
    poNadpis: 'Afterwards.',
    po: [
      { nazev: 'Document the instalments', popis: 'Bank transfer with a reference, or a receipt for cash.' },
      { nazev: 'In case of default', popis: 'Declare the remaining debt due in writing, then debt enforcement.' },
      { nazev: 'After the last instalment', popis: 'Issue a confirmation that the debt has been paid off.' },
    ],
    faq: [
      { q: 'How does it differ from an acknowledgement of debt?', a: 'An acknowledgement of debt (Schuldanerkennung) is signed by the debtor only. The instalment agreement is signed by both: the creditor accepts the instalments and refrains from debt enforcement as long as payments are on time. An acknowledgement of debt can be included in it.' },
      { q: 'Does the agreement help in debt enforcement?', a: 'Yes, if the debtor acknowledges the debt in it by signing: with an acknowledgement of debt confirmed by signature, the creditor can, after the debtor’s objection (Rechtsvorschlag), request provisional removal of the objection (provisorische Rechtsöffnung) (Art. 82 SchKG).' },
      { q: 'What does the acceleration clause do?', a: 'If the debtor falls into arrears, the entire remaining debt becomes due at once. You choose whether one instalment is enough, whether a grace period of 14 days applies or whether it takes two instalments.' },
      { q: 'What happens to the limitation period?', a: 'If the debtor acknowledges the debt, the limitation period (Verjährung) is interrupted and starts again (Art. 135 OR).' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 17, 104 and 135 of the Swiss Code of Obligations (OR) and Art. 82 of the Federal Act on Debt Enforcement and Bankruptcy (SchKG). For commercial lenders dealing with consumers, the Consumer Credit Act (Konsumkreditgesetz, KKG) also applies.',
    souvisejiciPopis: 'More documents about money, also free.',
  },
  vytvorit: {
    title: 'Fill in an instalment agreement online (Switzerland) – with schedule',
    description: 'Instalment agreement for an existing debt with a payment schedule and acceleration clause under Swiss law. Free PDF or Word.',
    podnadpis: 'Free · result as PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      parteien: { nazev: 'Creditor and debtor', popis: 'The creditor is the person who is owed money. The debtor is the person paying in instalments. Both sign.' },
      schuld: { nazev: 'Debt', popis: 'The debt already exists – the agreement only governs how it will be paid.' },
      raten: { nazev: 'Instalments' },
    },
    pole: {
      k_jmeno: { popis: 'Creditor (Gläubiger/in) – first name and surname', napoveda: 'Full name as in the identity document (for a business: the company name).', placeholder: 'e.g. Anna Muster' },
      k_narozeni: { popis: 'Creditor’s date of birth', napoveda: 'Helps identify the person unambiguously.' },
      k_adresa: { popis: 'Creditor’s address', napoveda: 'Home address.', placeholder: 'e.g. Bahnhofstrasse 12, 8001 Zürich' },
      p_jmeno: { popis: 'Debtor (Schuldner/in) – first name and surname', napoveda: 'Full name as in the identity document.', placeholder: 'e.g. Marco Beispiel' },
      p_narozeni: { popis: 'Debtor’s date of birth', napoveda: 'Important if debt enforcement becomes necessary later.' },
      p_adresa: { popis: 'Debtor’s address', napoveda: 'Home address – debt enforcement would take place there.', placeholder: 'e.g. Seeweg 3, 6003 Luzern' },
      castka: { popis: 'Amount outstanding on the day of signing (CHF)', napoveda: 'What still has to be paid. We add the amount in words. The payment schedule is created from it.', placeholder: 'e.g. 6000' },
      duvod: { popis: 'Reason for the debt', napoveda: 'Be specific: contract, invoice or event, with a date. Write in German – the text will appear in both language versions as you write it.', placeholder: 'e.g. unbezahlte Rechnung Nr. 2026-015 vom 3. 3. 2026 (unpaid invoice No. 2026-015 of 3 March 2026)' },
      anerkennung: {
        popis: 'Does the debtor acknowledge the debt?',
        napoveda: 'Recommended: with the signed acknowledgement, the creditor can request provisional removal of the objection (provisorische Rechtsöffnung) in debt enforcement (Betreibung), and the limitation period starts again.',
        moznosti: { ja: 'Yes, with acknowledgement of debt', nein: 'No, only agree on instalments' },
      },
      splatka: { popis: 'Monthly instalment (CHF)', napoveda: 'The last instalment may be lower – we calculate it.', placeholder: 'e.g. 500' },
      splatka_den: { popis: 'Day of the month', napoveda: 'The day by which the instalment must be received, e.g. 25.', placeholder: 'e.g. 25' },
      prvni_splatka: { popis: 'Month of the first instalment', napoveda: 'Choose any day in the month in which payments begin.' },
      ucet: { popis: 'Creditor’s IBAN', napoveda: 'Where the instalments go. A bank transfer is the easiest to prove.', placeholder: 'CH00 0000 0000 0000 0000 0' },
      zins: {
        popis: 'Is interest paid?',
        napoveda: 'Between private individuals usually without interest. Interest must be reasonable.',
        moznosti: { nein: 'Without interest', ja: 'With interest' },
      },
      zins_satz: { popis: 'Interest rate (% per year)', napoveda: 'Annual interest on the amount still outstanding, e.g. 3.', placeholder: 'e.g. 3' },
      verfall: {
        popis: 'When does the entire remaining debt become due?',
        napoveda: 'Acceleration clause (Verfallklausel): if the debtor does not pay, the creditor can demand everything at once. A grace period forgives small delays.',
        moznosti: {
          sofort: 'On default with one instalment',
          nachfrist: 'If an instalment is still missing 14 days after its due date',
          zwei: 'On default with two instalments',
        },
      },
      misto: { popis: 'Place of signing', napoveda: 'We take the place from the creditor’s address.', placeholder: 'e.g. Zürich' },
      datum: { popis: 'Date', napoveda: 'Pre-filled with today’s date.' },
    },
    vysvetleni: [
      'Who owes whom. Exact details matter if debt enforcement becomes necessary.',
      'Which debt is being paid off and how much is still outstanding on the day of signing.',
      'The creditor agrees that not everything is paid at once; the debtor undertakes to pay fixed instalments according to the payment schedule.',
      'What happens if the debtor stops paying: the creditor can demand the entire remainder at once.',
      'Formalities: applicable law, amendments, counterparts.',
    ],
    coDal: [
      'Print it twice. The creditor and the debtor both sign in their own hand; each party receives one counterpart.',
      'Check the payment schedule in the annex: number of instalments and the amount of the last instalment.',
      'Pay the instalments by bank transfer with a reference (e.g. “Rate 3/10” – “instalment 3/10”). Always have cash payments confirmed with a receipt.',
      'If the debtor does not pay: the creditor declares the remaining debt due in writing and can initiate debt enforcement (Betreibung). With the signed acknowledgement of debt, provisional removal of the objection (provisorische Rechtsöffnung) can be requested.',
      'After the last instalment, the debtor can ask for confirmation that the debt has been paid off.',
    ],
    kontrola: [
      'Check the identity of the other party against their passport or identity card (Identitätskarte) and copy the name and address exactly.',
      'Amount = what is still outstanding on the day of signing. State the reason specifically: which contract, invoice or event, with a date.',
      'With the acknowledgement of debt (Schuldanerkennung), the debtor confirms the debt without conditions ([Art. 17 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_17)). Confirmed by signature, it allows provisional removal of the objection in debt enforcement ([Art. 82 SchKG](https://www.fedlex.admin.ch/eli/cc/11/529_488_529/de#art_82)).',
      'The acknowledgement interrupts the limitation period; the period starts again ([Art. 135 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_135)).',
      'Acceleration clause: on late payment the entire remaining debt becomes due. Choose a grace period if small delays should not trigger everything straight away.',
      'Interest is optional and must be reasonable. A business granting credit commercially – including as a payment deferral with interest or fees – must observe the Consumer Credit Act; instalments free of interest and fees are exempt ([Merkblatt KKG](https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/wirtschaft-arbeit/gewerbe-betriebsbewilligungen/konsumkredit/merkblatt_bundesgesetz_%C3%BCber_den_konsumkredit_kkg.pdf)).',
      'Set the instalments so that the debtor can really pay them – an unrealistic plan helps no one.',
      'Is money only now being lent? Then the loan agreement is a better fit.',
    ],
    pripominky: {
      'Rate – letzte': { nazev: 'Instalment – last' },
      Rate: { nazev: 'Instalment' },
    },
  },

  dokument: {
    nazev: 'Instalment Agreement',
    podnadpis: 'agreement on payment in instalments of an existing debt under the Swiss Code of Obligations (OR)',
    podpisy: { vlevo: 'creditor', vpravo: 'debtor' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Creditor:** {{k_jmeno}}, born {{k_narozeni}}, residing at {{k_adresa}}',
          '**Debtor:** {{p_jmeno}}, born {{p_narozeni}}, residing at {{p_adresa}}',
        ],
      },
      {
        nadpis: 'Debt',
        odstavce: [
          'On the day of signing, the Debtor owes the Creditor the amount of **{{castka}}**. Reason for the debt: {{duvod}}.',
          {
            uvodVzor: 'Acknowledgement of debt (tick one):',
            moznosti: {
              ja: 'The Debtor expressly and unreservedly acknowledges this debt in this amount (Art. 17 OR).',
              nein: 'By this agreement the parties govern only the method of payment.',
            },
          },
        ],
      },
      {
        nadpis: 'Payment in Instalments',
        odstavce: [
          'The Debtor pays the debt in monthly instalments of {{splatka}}, each due on day {{splatka_den}} of the month, for the first time in the month {{prvni_mesic}}, until paid off in full. The last instalment may be lower. An overview is set out in the annex.',
          'The instalments are transferred to the Creditor’s account IBAN {{ucet}}; the date of crediting is decisive. The Creditor confirms cash payments with a written receipt.',
          {
            uvodVzor: 'Interest (tick one):',
            moznosti: {
              nein: 'No interest is owed on the instalments.',
              ja: 'The Debtor pays interest of {{zins_satz}} on the amount outstanding from time to time, due together with the instalments.',
            },
          },
          'As long as the Debtor pays the instalments on time, the Creditor will not demand the entire debt at once and will not initiate debt enforcement. The Debtor may pay more, or everything early, at any time.',
        ],
      },
      {
        nadpis: 'Acceleration Clause',
        odstavce: [
          {
            uvodVzor: 'Maturity of the remaining debt (tick one):',
            moznosti: {
              sofort: 'If the Debtor is in default with one instalment, the entire remaining debt becomes due for payment immediately.',
              nachfrist: 'If an instalment has not been received 14 days after its due date, the entire remaining debt becomes due for payment immediately.',
              zwei: 'If the Debtor is in default with two instalments, the entire remaining debt becomes due for payment immediately.',
            },
          },
          'The Creditor notifies the Debtor in writing that the debt has become due. From the date of default, default interest under Art. 104 OR is owed.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'In all other respects, the Swiss Code of Obligations applies. Amendments and additions must be made in writing.',
          'This agreement is executed in two counterparts; each party receives one counterpart. The payment schedule in the annex forms part of the agreement; in case of discrepancies, the text of the agreement prevails.',
        ],
      },
    ],
    prilohy: {
      'Anhang 1 · Ratenplan': 'Annex 1 · Payment schedule',
      Rate: 'Instalment',
      'Fällig am': 'Due on',
      Betrag: 'Amount',
      Restschuld: 'Outstanding balance',
      'Der Plan zeigt nur die Schuld ohne Zins; der Zins wird gemäss Vereinbarung bezahlt. Bei Widersprüchen gilt der Text der Vereinbarung.':
        'The schedule shows only the debt without interest; interest is paid as agreed. In case of discrepancies, the text of the agreement prevails.',
      'Bei Widersprüchen gilt der Text der Vereinbarung.': 'In case of discrepancies, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

/**
 * English version: instalment agreement (Hungary). Original: src/obsah/hu/reszletfizetesi-megallapodas.ts
 * and src/sablony/hu/reszletfizetesi-megallapodas.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-RESZLETFIZETES', verze: '1.0' },

  nazev: 'Instalment Agreement',
  nazevA: 'the instalment agreement',
  katalog: {
    popis: 'The creditor and the debtor agree on monthly instalments for a debt.',
    slova: [
      'instalment agreement',
      'payment plan',
      'repayment schedule',
      'debt in instalments',
      'settling arrears',
      'paying off a debt',
      'részletfizetési megállapodás',
      'törlesztési ütemterv',
      'részletfizetés',
    ],
  },
  landing: {
    title: 'Instalment Agreement Hungary {rok} – free PDF template',
    description:
      'Instalment agreement between creditor and debtor in Hungary: monthly instalments, repayment schedule, full balance due on default. Bilingual PDF or Word, free.',
    perex:
      'If a debt cannot be paid all at once: the creditor and the debtor sign how much the debtor will pay and when, and what happens if an instalment is missed.',
    obsahPopis: 'What the agreement contains.',
    obsah: [
      { nazev: 'Debt', popis: 'Amount in words, legal ground, optional acknowledgement of the debt.' },
      { nazev: 'Instalments', popis: 'Monthly instalment, due date, bank account, interest or interest-free.' },
      { nazev: 'Default', popis: 'After one or two missed instalments, the full outstanding balance becomes due.' },
      { nazev: 'Schedule', popis: 'Annex with all the instalments and the outstanding balance.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Parties, debt, monthly instalment and the month of the first instalment.' },
      { nazev: 'Sign it', popis: 'Both the creditor and the debtor, preferably in front of two witnesses.' },
      { nazev: 'Pay on schedule', popis: 'The calendar reminder alerts you to every instalment.' },
    ],
    online: ['The amount in words (in Hungarian) is added automatically', 'Repayment schedule as an annex', 'Reminders in your calendar', 'Download as PDF and Word'],
    hodiSe: [
      'the debtor pays the debt in monthly instalments',
      'scheduled settlement of an unpaid invoice, a loan or damages',
      'the creditor also takes on an obligation, for example not to start proceedings in the meantime',
    ],
    nehodiSe: [
      'only the debtor makes a statement about the debt – an acknowledgement of debt (tartozáselismerő nyilatkozat) is enough for that',
      'you are lending new money – a loan agreement (kölcsönszerződés) is for that',
      'you are settling a debt with a bank, utility company or authority – use their own form there',
    ],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Receipt', popis: 'For cash instalments, give a receipt for every payment.' },
      { nazev: 'Bank confirmation', popis: 'For bank transfers, the debit notice is the proof.' },
      { nazev: 'Missed instalment', popis: 'If an instalment is missed, send a payment demand (fizetési felszólítás).' },
    ],
    faq: [
      {
        q: 'How is it different from an acknowledgement of debt?',
        a: 'An acknowledgement of debt (tartozáselismerő nyilatkozat) is signed only by the debtor. An instalment agreement is two-sided: the creditor also agrees to the instalments and undertakes not to start proceedings as long as the debtor pays.',
      },
      {
        q: 'Does it interrupt the limitation period?',
        a: 'If the debtor acknowledges the debt in the agreement, the acknowledgement interrupts the limitation period (elévülés), and the limitation period starts again.',
      },
      {
        q: 'What happens if an instalment is missed?',
        a: 'Whatever the parties have agreed: under the template, after one or two missed instalments (once the grace period has expired) the full outstanding balance becomes due in a single sum.',
      },
      { q: 'Do you store my details?', a: 'No. The document is created only in your browser.' },
    ],
    zakony:
      'The template is based on the rules of the law of obligations and the provisions on acknowledgement of debt in the Hungarian Civil Code (Polgári Törvénykönyv, 2013. évi V. törvény); the probative force of a document signed by two witnesses is governed by the Code of Civil Procedure (polgári perrendtartás).',
    souvisejiciPopis: 'More documents on money matters, also free.',
  },
  vytvorit: {
    title: 'Instalment agreement online – Hungary, with schedule, free',
    description: 'Guide in English for an instalment agreement (részletfizetési megállapodás) in Hungary, with a repayment schedule and calendar reminders. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 4 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      felek: { nazev: 'Creditor and debtor' },
      tartozas: { nazev: 'The debt' },
      reszletek: { nazev: 'Instalments', popis: 'This is used to create the repayment schedule and the calendar reminder.' },
      zaro: { nazev: 'Witnesses and signature', popis: 'Witnesses are not compulsory, but in a dispute they provide stronger evidence.' },
    },
    pole: {
      k_jmeno: { popis: 'Creditor’s name (hitelező)', napoveda: 'The person who is owed the money. For a company, the company name and company registration number.', placeholder: 'e.g. Kovács János' },
      k_szul: { popis: 'Place and date of birth', napoveda: 'For a private individual, this helps with identification.', placeholder: 'e.g. Pécs, 1975. 04. 12.' },
      k_anyja: { popis: 'Mother’s name', napoveda: 'As in the identity card.', placeholder: 'e.g. Tóth Mária' },
      k_adresa: { popis: 'Home address or registered office', napoveda: 'Where the creditor receives letters.', placeholder: 'e.g. 7621 Pécs, Király utca 8.' },
      p_jmeno: { popis: 'Debtor’s name (adós)', napoveda: 'The person who owes the money and pays the instalments.', placeholder: 'e.g. Nagy Péter' },
      p_szul: { popis: 'Place and date of birth', napoveda: 'As in the identity card.', placeholder: 'e.g. Szeged, 1982. 09. 30.' },
      p_anyja: { popis: 'Mother’s name', napoveda: 'As in the identity card.', placeholder: 'e.g. Kiss Erzsébet' },
      p_adresa: { popis: 'Home address', napoveda: 'The debtor’s permanent address.', placeholder: 'e.g. 6720 Szeged, Kárász utca 5.' },
      castka: { popis: 'Total amount of the debt (Ft)', napoveda: 'The full amount not yet paid, which will be paid in instalments.', placeholder: 'e.g. 600 000' },
      jogcim: {
        popis: 'Legal ground of the debt (jogcím)',
        napoveda: 'Where the debt comes from: invoice, loan, damages, rent, etc.',
        placeholder: 'e.g. a 2026. 03. 15-én kelt 2026/14. számú számla (invoice No. 2026/14 dated 15 March 2026)',
      },
      elismeres: {
        popis: 'Does the debtor acknowledge the debt?',
        napoveda: 'After the acknowledgement, it is the debtor who has to prove that the debt does not exist after all, and the limitation period is interrupted. For a disputed debt, choose “no”.',
        moznosti: { igen: 'Yes, acknowledges its legal ground and amount', nem: 'No, the parties only agree on the payment schedule' },
      },
      kamat: {
        popis: 'Interest for the instalment period',
        napoveda: 'Between private individuals it is often interest-free. If interest is agreed, state it as an annual percentage.',
        moznosti: { nem: 'Interest-free', igen: 'With interest' },
      },
      kamat_merteke: { popis: 'Interest rate', napoveda: 'On the outstanding balance at any time, per year.', placeholder: 'e.g. 5' },
      splatka: { popis: 'Monthly instalment (Ft)', napoveda: 'The last instalment may be smaller.', placeholder: 'e.g. 50 000' },
      splatka_den: { popis: 'Day of the month', napoveda: 'Payment is due by this day every month (1–31).', placeholder: 'e.g. 10' },
      prvni_splatka: { popis: 'Month of the first instalment', napoveda: 'Selecting the month is enough; the day follows the day above.' },
      ucet: { popis: 'Creditor’s bank account number', napoveda: 'The debtor pays the instalments to this account.', placeholder: 'e.g. 11773016-12345678-00000000' },
      elmaradas: {
        popis: 'When does the full outstanding balance become due?',
        napoveda: 'If the debtor is late with this many instalments, the creditor may claim the full outstanding balance at once.',
        moznosti: { egy: 'When one instalment is missed', ket: 'When two instalments are missed' },
      },
      turelmi: { popis: 'Grace period (days)', napoveda: 'A delay of this many days has no consequences yet. If not needed, enter 0.', placeholder: 'e.g. 8' },
      t1_jmeno: { popis: 'Name of the 1st witness (optional)', napoveda: 'Cannot be the creditor or the debtor.', placeholder: 'e.g. Horváth Gábor' },
      t1_adresa: { popis: 'Home address of the 1st witness', napoveda: 'The witness’s home address.', placeholder: 'e.g. 1052 Budapest, Váci utca 10.' },
      t2_jmeno: { popis: 'Name of the 2nd witness (optional)', napoveda: 'Cannot be the creditor or the debtor.', placeholder: 'e.g. Varga Zsófia' },
      t2_adresa: { popis: 'Home address of the 2nd witness', napoveda: 'The witness’s home address.', placeholder: 'e.g. 1052 Budapest, Petőfi utca 2.' },
      misto: { popis: 'Town or village', napoveda: 'Where the agreement is signed.', placeholder: 'e.g. Pécs' },
      datum: { popis: 'Date', napoveda: 'We have filled in today’s date.' },
    },
    vysvetleni: [
      '',
      'How much the debt is and where it comes from.',
      'How much the debtor pays and when. The instalments are listed in the attached schedule.',
      'What happens if the debtor does not pay on time: the instalment arrangement ends.',
      '',
    ],
    coDal: [
      'Print two copies; both of you sign both copies, and each party gets one.',
      'Preferably pay the instalments by bank transfer – the bank confirmation is the best proof. For cash, ask for and give a receipt.',
      'The reminders saved in your calendar help make sure no instalment is missed.',
    ],
    kontrola: [
      'The instalment agreement is signed by both the creditor and the debtor – an acknowledgement of debt (tartozáselismerő nyilatkozat), by contrast, only by the debtor.',
      'Describe exactly where the debt comes from (e.g. “a 2026. 03. 15-én kelt 2026/14. számú számla” – invoice No. 2026/14 dated 15 March 2026) and what the total amount is.',
      'If the debtor acknowledges the debt, this interrupts the limitation period – the 5-year limitation period starts again.',
      'The parties are free to agree after how many missed instalments the full outstanding balance becomes due – the agreement records this.',
      'If interest is charged, state the rate as an annual percentage. Excessive (usurious) interest may be void.',
      'With the signatures of two witnesses (stating their names and home addresses), the document becomes a private document with full probative force (teljes bizonyító erejű magánokirat) – in a dispute this is stronger evidence. A party to the contract cannot be a witness.',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
    ],
    pripominky: {
      'Részlet – utolsó': { nazev: 'Instalment – last', popis: 'Last instalment under the instalment agreement.' },
      Részlet: { nazev: 'Instalment' },
    },
  },

  dokument: {
    nazev: 'Instalment Agreement',
    podnadpis: 'under Act V of 2013 on the Civil Code (Polgári Törvénykönyv)',
    podpisy: { vlevo: 'creditor', vpravo: 'debtor' },
    clanky: [
      {
        nadpis: 'Contracting Parties',
        odstavce: [
          '**Creditor:** {{k_jmeno}}, place and date of birth: {{k_szul}}, mother’s name: {{k_anyja}}, home address/registered office: {{k_adresa}}',
          '**Debtor:** {{p_jmeno}}, place and date of birth: {{p_szul}}, mother’s name: {{p_anyja}}, home address: {{p_adresa}}',
        ],
      },
      {
        nadpis: 'The Debt',
        odstavce: [
          'The Debtor owes the Creditor the sum of **{{castka}}**. Legal ground of the debt: {{jogcim}}.',
          {
            uvodVzor: 'Acknowledgement of debt (tick one):',
            moznosti: {
              igen: 'The Debtor expressly **acknowledges** the debt as to its legal ground and amount.',
              nem: 'By this agreement, the parties agree solely on the schedule of payment; the agreement does not constitute an acknowledgement of the debt.',
            },
          },
        ],
      },
      {
        nadpis: 'Payment in Instalments',
        odstavce: [
          'The Creditor agrees that the Debtor shall pay the debt in monthly instalments of **{{splatka}}**, by day {{splatka_den}} of each month, starting from the month {{elso_honap}}, in {{reszletek_szama}} instalments in total. The last instalment may be smaller.',
          'The Debtor shall pay the instalments to the Creditor’s bank account No. {{ucet}}, or in cash against a receipt. The day of payment is the day on which the amount is credited to the Creditor’s account. The Debtor may also pay the outstanding balance before the due date.',
          {
            uvodVzor: 'Interest (tick one):',
            moznosti: {
              nem: 'The Creditor shall not charge interest for the instalment period.',
              igen: 'The Debtor shall pay interest of {{kamat_merteke}} per year on the outstanding balance at any time, together with the instalments.',
            },
          },
        ],
      },
      {
        nadpis: 'Default',
        odstavce: [
          {
            uvodVzor: 'Loss of the instalment arrangement (tick one):',
            moznosti: {
              egy: 'If the Debtor is more than {{turelmi}} days late in paying any instalment, the instalment arrangement ends and the full outstanding balance becomes due in a single sum.',
              ket: 'If the Debtor is more than {{turelmi}} days late in paying two instalments, the instalment arrangement ends and the full outstanding balance becomes due in a single sum.',
            },
          },
          'As long as the Debtor pays the instalments in accordance with this agreement, the Creditor shall not start court or other proceedings to recover the debt.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Matters not regulated in this agreement are governed by the provisions of the Civil Code (Polgári Törvénykönyv). Amendments to the agreement are valid only in writing.',
          'The agreement has been made in two identical copies; each party receives one copy.',
          '**1st witness:** {{t1_jmeno}}, home address: {{t1_adresa}}, signature: ………………………………',
          '**2nd witness:** {{t2_jmeno}}, home address: {{t2_adresa}}, signature: ………………………………',
        ],
      },
    ],
    prilohy: {
      '1. számú melléklet · Törlesztési ütemterv': 'Annex 1 · Repayment schedule',
      Részlet: 'Instalment',
      Esedékes: 'Due date',
      Összeg: 'Amount',
      Hátralék: 'Outstanding',
      'Az ütemterv a megállapodott részletek alapján készült; eltérés esetén a megállapodás szövege az irányadó.':
        'The schedule was drawn up on the basis of the agreed instalments; in case of discrepancy, the text of the agreement prevails.',
    },
  },
} satisfies PrekladDokumentu;

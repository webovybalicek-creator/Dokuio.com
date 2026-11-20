/**
 * English version: resignation – notice of termination of employment by the employee (Switzerland).
 * Original: src/obsah/ch/kuendigung-arbeitsvertrag.ts and src/sablony/ch/kuendigung-arbeitsvertrag.ts.
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-KUENDIGUNG-ARBEIT', verze: '1.0' },

  nazev: 'Resignation Letter',
  nazevA: 'the resignation letter',
  katalog: {
    popis: 'Resigning from your job as an employee – during or after the probationary period.',
    slova: ['resignation', 'resignation letter', 'quit a job', 'notice of termination', 'employment contract', 'notice period', 'probationary period', 'employment reference', 'Kündigung Arbeitsvertrag', 'Stelle kündigen', 'Kündigungsfrist'],
  },
  landing: {
    title: 'Resignation Letter Switzerland {rok} – free PDF template',
    description:
      'Resigning from a job in Switzerland, explained in English: 7 days in the probationary period, then 1 to 3 months to the end of a month. Free bilingual PDF or Word.',
    perex: 'Got a new job or want to move on? Notice of termination by the employee – with the right date, a request for an employment reference and, if you wish, a proposal to leave earlier.',
    obsahPopis: 'A short letter to the employer under Art. 335 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR).',
    obsah: [
      { nazev: 'Sender and employer', popis: 'Your details, the company, the responsible person.' },
      { nazev: 'Notice of termination', popis: 'During the probationary period or ordinary, end date, alternatively the next possible date.' },
      { nazev: 'Requests', popis: 'Confirmation of receipt, employment reference, remaining holiday, thanks.' },
    ],
    kroky: [
      { nazev: 'Work out the date', popis: 'Check your year of service, the employment contract and the collective employment agreement (GAV) – the tips explain the notice periods.' },
      { nazev: 'Sign', popis: 'PDF or Word, in your own hand.' },
      { nazev: 'Hand it over', popis: 'In person against confirmation of receipt, or by registered post (Einschreiben).' },
    ],
    online: [
      'Options for the probationary period and ordinary notice',
      'Proposal to leave earlier by mutual agreement',
      'Reminders for the end of employment and the employment reference',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are an employee with an open-ended employment contract',
      'you are resigning during or after the probationary period',
      'you would like to leave earlier and propose a mutually agreed solution to your employer',
    ],
    nehodiSe: [
      'you are an employer dismissing someone',
      'a fixed-term contract – it ends without notice on the agreed date',
      'termination with immediate effect for good cause – get advice first',
    ],
    poNadpis: 'After handing it over.',
    po: [
      { nazev: 'Keep proof of receipt', popis: 'Keep the confirmation on your copy or the registered post receipt.' },
      { nazev: 'Holiday and overtime', popis: 'Take remaining holiday during the notice period – agree this with your employer.' },
      { nazev: 'RAV', popis: 'No new job yet? Register early with the regional employment centre (RAV).' },
    ],
    faq: [
      { q: 'Does the notice have to be in writing?', a: 'According to ch.ch and SECO, the law prescribes no form – oral notice is enough, unless the employment contract, the collective employment agreement (GAV) or the standard employment contract (NAV) requires written form. In writing, however, it is much easier to prove.' },
      { q: 'Which notice period applies?', a: 'Seven days during the probationary period. After that, unless otherwise agreed in writing: one month in the 1st year of service, two months in the 2nd to 9th year of service, three months from the 10th year of service, in each case to the end of a month (Art. 335b and 335c OR).' },
      { q: 'When does the notice period start?', a: 'From receipt by the employer. With registered post, the decisive day is usually the day it can be collected – so send it a few days before the end of the month.' },
      { q: 'Do I have to give reasons?', a: 'No. Only if the employer requests it must you state the reasons in writing (Art. 335 para. 2 OR).' },
      { q: 'Can I leave earlier?', a: 'Only if the employer agrees. The template includes an option with a proposal to end the employment by mutual agreement; without written consent, the ordinary notice applies.' },
      { q: 'Do you store my details?', a: 'No. The letter is put together exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 330a, 335, 335b, 335c and 341 of the Swiss Code of Obligations (OR) and on the information on termination from ch.ch and the State Secretariat for Economic Affairs (SECO). The employment contract, the collective employment agreement (GAV) or the standard employment contract (NAV) may provide for other notice periods.',
    souvisejiciPopis: 'More notices of termination and letters, also free.',
  },
  vytvorit: {
    title: 'Fill in a resignation letter online (Switzerland) – PDF',
    description: 'Notice of termination by the employee under Swiss law: probationary period or ordinary, request for an employment reference. Free PDF or Word.',
    podnadpis: 'Free · result as PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice of termination', g: 'notice of termination', a: 'notice of termination', l: 'notice of termination' },
    kroky: {
      arbeitnehmer: { nazev: 'Your details', popis: 'You are giving notice as an employee.' },
      arbeitgeber: { nazev: 'Employer' },
      kuendigung: { nazev: 'Notice of termination' },
    },
    pole: {
      an_jmeno: { popis: 'First name and surname', napoveda: 'As in the employment contract.', placeholder: 'e.g. Anna Muster' },
      an_adresa: { popis: 'Address', napoveda: 'Your current home address.', placeholder: 'e.g. Bahnhofstrasse 12, 8001 Zürich' },
      an_funkce: { popis: 'Position / job (optional)', napoveda: 'Helps large employers match the letter to you. Write in German – the text will appear in both language versions as you write it.', placeholder: 'e.g. Sachbearbeiterin Buchhaltung (accounts clerk)' },
      an_cislo: { popis: 'Personnel number (optional)', napoveda: 'Often shown on the payslip.', placeholder: 'e.g. 104523' },
      ag_nazev: { popis: 'Employer (company)', napoveda: 'Name as in the employment contract.', placeholder: 'e.g. Muster Treuhand AG' },
      ag_osoba: { popis: 'For the attention of (optional)', napoveda: 'Your line manager or the HR department.', placeholder: 'e.g. Frau Petra Beispiel, HR' },
      ag_adresa: { popis: 'Employer’s address', napoveda: 'The business address to which you send the notice.', placeholder: 'e.g. Industriestrasse 5, 3000 Bern' },
      vertrag_datum: { popis: 'Date of the employment contract or start of employment (optional)', napoveda: 'From the employment contract. It determines your year of service and therefore the notice period.' },
      art: {
        popis: 'When are you giving notice?',
        napoveda: 'During the probationary period, unless otherwise agreed, a notice period of seven days applies. After that, 1 to 3 months to the end of a month, depending on the year of service and the contract.',
        moznosti: {
          probezeit: 'During the probationary period',
          ordentlich: 'After the probationary period (ordinary notice)',
          aufhebung: 'Ordinary – with a proposal to leave earlier by mutual agreement',
        },
      },
      ende: { popis: 'End of employment', napoveda: 'After the probationary period usually the end of a month: 1st year of service 1 month, 2nd–9th year 2 months, from the 10th year 3 months – unless the contract or the GAV says otherwise.' },
      wunsch_ende: { popis: 'Requested earlier leaving date', napoveda: 'Only valid if the employer agrees in writing.' },
      bitten: {
        popis: 'What else would you like? (optional)',
        napoveda: 'You can request an employment reference (Arbeitszeugnis) at any time. A confirmation of receipt protects you if the notice period is disputed.',
        moznosti: {
          bestaetigung: 'Written confirmation of receipt and of the end date',
          zeugnis: 'Employment reference (Art. 330a OR)',
          ferien: 'Statement of remaining holiday and overtime',
          dank: 'Thanks for the cooperation',
        },
      },
      misto: { popis: 'Place', napoveda: 'We take the place from your address.', placeholder: 'e.g. Zürich' },
      datum: { popis: 'Date', napoveda: 'Pre-filled with today’s date. For the notice period, however, receipt by the employer is decisive.' },
    },
    vysvetleni: [
      'Who is giving notice.',
      'The employer as stated in the employment contract.',
      'The notice of termination itself. No reasons are needed.',
    ],
    coDal: [
      'Sign it in your own hand. Hand it over in person and have receipt confirmed on your copy – or send it by registered post (Einschreiben).',
      'The notice only takes effect when it reaches the employer. A registered letter is usually only deemed delivered when it can be collected – send it a few days before the end of the month.',
      'Discuss remaining holiday and overtime with your line manager and record it in writing.',
      'If you don’t have a new job yet, register with the regional employment centre (RAV) as early as possible – not on your last working day.',
    ],
    kontrola: [
      'Form: the law prescribes no particular form. If the employment contract, the collective employment agreement (GAV) or the standard employment contract (NAV) says “in writing”, the notice must be in writing. Written notice is easier to prove anyway ([ch.ch](https://www.ch.ch/de/arbeit/kundigung-arbeitsvertrag/)).',
      'Probationary period: unless otherwise agreed, it lasts one month, at most three months. The notice period is seven days; the notice must arrive no later than the last day of the probationary period ([Art. 335b OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_335_b), [ch.ch](https://www.ch.ch/de/arbeit/probezeit/)).',
      'After the probationary period, unless otherwise agreed in writing: one month in the 1st year of service, two months in the 2nd to 9th year, three months from the 10th year – in each case to the end of a month ([Art. 335c OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_335_c)). Check your employment contract and the GAV.',
      'Example from ch.ch: notice given on 13 June with a one-month period → ends on 31 July. The period runs from receipt by the employer.',
      'No reasons are needed. If the employer requests them, you must give them in writing (Art. 335 para. 2 OR).',
      'Employees can also resign during illness or after an accident; the protection periods (Sperrfristen) only protect against dismissal by the employer ([SECO](https://www.seco.admin.ch/de/faq-kuendigung)).',
      'Without a new job, resigning yourself can lead to unemployment benefit being temporarily suspended ([arbeit.swiss](https://www.arbeit.swiss/en/jobseekers/first-steps-after-dismissal)).',
      'Want to leave earlier? This is only possible with the employer’s consent (termination agreement – Aufhebungsvereinbarung). Put it in writing and read it carefully – you cannot waive mandatory statutory claims during the employment relationship and for one month after it (Art. 341 OR).',
    ],
    pripominky: {
      'Letzter Arbeitstag / Ende Arbeitsverhältnis': { nazev: 'Last working day / end of employment' },
      'Arbeitszeugnis und Lohnabrechnung prüfen': {
        nazev: 'Check the employment reference and final payslip',
        popis: 'Received your employment reference? Check the final pay statement including the balance of holiday and overtime.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of the Employment Contract',
    podnadpis: 'termination by the employee under Art. 335 et seq. of the Swiss Code of Obligations (OR)',
    podpisy: { vlevo: 'employee', vpravo: 'receipt confirmed (employer, date)' },
    clanky: [
      {
        nadpis: 'Sender',
        odstavce: ['{{an_jmeno}}, {{an_adresa}}'],
      },
      {
        nadpis: 'To',
        odstavce: ['{{ag_nazev}}, for the attention of {{ag_osoba}}, {{ag_adresa}}'],
      },
      {
        nadpis: 'Termination of Employment',
        odstavce: [
          'Dear Sir or Madam,',
          {
            uvodVzor: 'Option (tick one):',
            moznosti: {
              probezeit: 'I, {{an_jmeno}} ({{an_funkce}}, personnel number {{an_cislo}}), hereby give notice of termination of my employment under the employment contract of {{vertrag_datum}} during the probationary period, observing the notice period, with effect from {{ende}}, alternatively from the next possible date.',
              ordentlich: 'I, {{an_jmeno}} ({{an_funkce}}, personnel number {{an_cislo}}), hereby give notice of termination of my employment under the employment contract of {{vertrag_datum}}, observing the contractual or statutory notice period, with effect from {{ende}}, alternatively from the next possible date.',
              aufhebung: 'I, {{an_jmeno}} ({{an_funkce}}, personnel number {{an_cislo}}), hereby give notice of termination of my employment under the employment contract of {{vertrag_datum}}, observing the contractual or statutory notice period, with effect from {{ende}}, alternatively from the next possible date. At the same time, I propose ending the employment by mutual agreement as early as {{wunsch_ende}}. Without your written consent, the ordinary notice applies.',
            },
          },
          {
            uvod: 'I would also ask you for:',
            moznosti: {
              bestaetigung: 'written confirmation of receipt of this notice and of the end date',
              zeugnis: 'an employment reference covering the nature and duration of the employment as well as my performance and conduct (Art. 330a OR)',
              ferien: 'a statement of my remaining holiday and overtime and a proposal as to how these will be taken or compensated before I leave',
              dank: 'your understanding of my decision. Thank you for the good cooperation and the trust you have placed in me',
            },
          },
          'Yours faithfully',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

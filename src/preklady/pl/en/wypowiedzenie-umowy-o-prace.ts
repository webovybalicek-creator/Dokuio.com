/**
 * English version: employee's notice of termination of an employment contract (Poland).
 * Original: src/obsah/pl/wypowiedzenie-umowy-o-prace.ts and src/sablony/pl/wypowiedzenie-umowy-o-prace.ts.
 * The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-WYPOWIEDZENIE-PRACA', verze: '1.0' },

  nazev: 'Employee Resignation Notice',
  nazevA: 'the employee resignation notice',
  katalog: {
    popis: 'Notice by the employee or termination by mutual agreement.',
    slova: ['resignation letter', 'resign from a job', 'quit a job', 'notice of termination', 'employment contract', 'notice period', 'mutual agreement', 'work in Poland', 'wypowiedzenie umowy o pracę', 'umowa o pracę'],
  },
  landing: {
    title: 'Employee Resignation Notice Poland {rok} – free PDF template',
    description:
      'Notice by an employee in Poland: 2 weeks, 1 or 3 months’ notice (Article 36 of the Labour Code) or termination by mutual agreement. Bilingual PDF or Word, free.',
    perex: 'Leaving your job? A notice of termination of the employment contract (wypowiedzenie umowy o pracę) with the correct notice period under the Labour Code – or a proposal to end the contract by mutual agreement (porozumienie stron).',
    obsahPopis: 'The employee’s declaration under Articles 30, 34 and 36 of the Polish Labour Code (Kodeks pracy).',
    obsah: [
      { nazev: 'Employee and employer', popis: 'Who delivers the notice to whom.' },
      { nazev: 'Termination of the contract', popis: 'Notice, an earlier date or mutual agreement; the notice period.' },
      { nazev: 'Requests', popis: 'Annual leave, employment certificate, confirmation of the date.' },
    ],
    kroky: [
      { nazev: 'Choose the period', popis: 'Based on your length of service with this employer.' },
      { nazev: 'Sign', popis: 'By hand or with a qualified electronic signature.' },
      { nazev: 'Hand it over', popis: 'Against the employer’s signature on your copy.' },
    ],
    online: ['Notice period based on length of service', 'End of the period in your calendar (approximate)', 'Option: mutual agreement', 'Download as PDF and Word'],
    hodiSe: [
      'you are an employee leaving your job',
      'a contract for an indefinite period, a fixed term or a trial period',
      'you want to propose leaving sooner with the employer’s consent',
    ],
    nehodiSe: [
      'you are the employer – terminating an employee’s contract has different requirements',
      'a contract of mandate (umowa zlecenia) or a contract for a specific work (umowa o dzieło) – that is not an employment contract',
      'termination of the contract without notice',
    ],
    poNadpis: 'After handing it over.',
    po: [
      { nazev: 'Notice period', popis: 'You work until it ends, unless you agree an earlier date.' },
      { nazev: 'Annual leave', popis: 'Agree with your employer whether you take your leave or are paid for it.' },
      { nazev: 'Employment certificate', popis: 'Collect your employment certificate (świadectwo pracy) when your job ends.' },
    ],
    faq: [
      {
        q: 'What is my notice period?',
        a: 'It depends on your length of service with this employer: 2 weeks (less than 6 months), 1 month (at least 6 months), 3 months (at least 3 years) – Article 36 § 1 of the Labour Code. During a trial period: 3 working days, 1 week or 2 weeks (Article 34).',
      },
      {
        q: 'When does the notice period end?',
        a: 'A period counted in weeks ends on a Saturday, and one counted in months on the last day of the month (Article 30 § 2¹ of the Labour Code).',
      },
      {
        q: 'Can I send my notice by e-mail?',
        a: 'The notice must be in writing (Article 30 § 3 of the Labour Code). An ordinary e-mail is not enough; a document with a qualified electronic signature is equivalent (Article 78¹ of the Civil Code).',
      },
      {
        q: 'Do I have to give a reason?',
        a: 'No. The Labour Code requires a reason only in a notice given by the employer (Article 30 § 4).',
      },
      { q: 'Do you store my data?', a: 'No. The notice is created only in your browser.' },
    ],
    zakony: 'The template is based on Articles 30, 34 and 36 of the Polish Labour Code (Kodeks pracy) and Articles 61 and 78¹ of the Civil Code (Kodeks cywilny).',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a resignation notice online – Poland, PDF',
    description: 'Guide in English for an employee’s notice of termination with the period under the Polish Labour Code. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      pracownik: { nazev: 'Employee' },
      pracodawca: { nazev: 'Employer and contract' },
      rozwiazanie: { nazev: 'Method and date' },
    },
    pole: {
      p_imie: { popis: 'Full name', napoveda: 'As in the employment contract.', placeholder: 'e.g. Anna Nowak' },
      p_adres: { popis: 'Residential address', napoveda: 'The employer will send e.g. your employment certificate to this address.', placeholder: 'e.g. ul. Polna 7/12, 00-001 Warszawa' },
      p_stanowisko: {
        popis: 'Job title (optional)',
        napoveda: 'As in the contract. It helps HR process the letter faster. Write it in Polish – the text goes into both language versions exactly as you write it.',
        placeholder: 'e.g. specjalista ds. sprzedaży (sales specialist)',
      },
      z_nazwa: { popis: 'Employer', napoveda: 'Full company name from the employment contract.', placeholder: 'e.g. Przykład Sp. z o.o.' },
      z_adres: { popis: 'Employer’s address', napoveda: 'Registered office or address from the contract.', placeholder: 'e.g. ul. Prosta 1, 00-850 Warszawa' },
      umowa_data: { popis: 'Date the employment contract was concluded', napoveda: 'The date of the contract you are terminating.' },
      rodzaj: {
        popis: 'Type of contract',
        napoveda: 'Check your employment contract.',
        moznosti: { nieokreslony: 'For an indefinite period', okreslony: 'For a fixed term', probny: 'For a trial period' },
      },
      tryb: {
        popis: 'How do you want to end your employment',
        napoveda: 'A notice works without the employer’s consent. Mutual agreement and a shorter period require their consent.',
        moznosti: {
          wypowiedzenie: 'Notice observing the notice period',
          skrocenie: 'Notice + proposal of an earlier date',
          porozumienie: 'Only a proposal to terminate by mutual agreement',
        },
      },
      okres: {
        popis: 'Notice period',
        napoveda: 'What counts is your length of service with this employer on the day of the notice. For a trial-period contract – the length of the trial period.',
        moznosti: {
          '2t': '2 weeks – less than 6 months’ service',
          '1m': '1 month – at least 6 months’ service',
          '3m': '3 months – at least 3 years’ service',
          probny_3d: 'Trial period of up to 2 weeks – 3 working days',
          probny_1t: 'Trial period longer than 2 weeks – 1 week',
          probny_2t: 'Trial period of 3 months – 2 weeks',
        },
      },
      data_rozwiazania: { popis: 'Proposed last working day', napoveda: 'The day on which you want to finish work.' },
      prosby: {
        popis: 'What else are you asking for (optional)',
        napoveda: 'Short requests make the settlement at the end of your job easier.',
        moznosti: {
          urlop: 'Agreeing how annual leave will be taken or paid out',
          swiadectwo: 'Issue of the employment certificate',
          potwierdzenie: 'Confirmation of the termination date',
        },
      },
      misto: { popis: 'Town or city', napoveda: 'We fill it in from your address.', placeholder: 'e.g. Warszawa' },
      datum: { popis: 'Date', napoveda: 'Ideally the day you hand over the notice.' },
    },
    vysvetleni: [
      'Who makes the declaration.',
      'Who you deliver the notice to.',
      'Notice with the period under the Labour Code, or a proposal of mutual agreement.',
      'Things to settle before you leave.',
    ],
    coDal: [
      'Print two copies and sign both by hand.',
      'Hand one copy to your employer (your manager or HR) and ask for the date and a signature of receipt on your copy. You can also send it by registered post with confirmation of receipt.',
      'The notice period runs from delivery – the sooner you submit it, the sooner it ends.',
      'Agree with your employer on taking your leave, returning equipment and collecting your employment certificate.',
    ],
    kontrola: [
      'The notice must be in writing (Article 30 § 3 of the Labour Code) – with a handwritten signature. Electronic form with a qualified electronic signature is equivalent (Article 78¹ of the Civil Code); an ordinary e-mail does not meet this requirement.',
      'The notice period depends on your length of service with this employer: 2 weeks (less than 6 months), 1 month (at least 6 months), 3 months (at least 3 years) – Article 36 § 1 of the Labour Code. This applies to contracts for an indefinite period and fixed-term contracts.',
      'Trial-period contract: 3 working days (trial period of up to 2 weeks), 1 week (longer than 2 weeks), 2 weeks (3 months) – Article 34 of the Labour Code.',
      'A period counted in weeks ends on a Saturday, and one counted in months on the last day of the month (Article 30 § 2¹ of the Labour Code).',
      'The notice is deemed made when it has reached the employer in such a way that they could read its content (Article 61 of the Civil Code). Keep the confirmation of receipt.',
      'An employee does not have to give a reason for the notice – the Labour Code requires one only from the employer (Article 30 § 4 of the Labour Code).',
      'Want to leave sooner? The parties can agree an earlier termination date (Article 36 § 6 of the Labour Code) or terminate the contract by mutual agreement (Article 30 § 1 point 1 of the Labour Code) – both require the employer’s consent.',
    ],
    pripominky: {
      'Proponowany ostatni dzień pracy (porozumienie stron)': { nazev: 'Proposed last working day (mutual agreement)' },
      'Koniec okresu wypowiedzenia (orientacyjnie)': {
        nazev: 'End of the notice period (approximate)',
        popis: 'Assuming delivery to the employer on the date of signing. A weekly period ends on a Saturday, a monthly one on the last day of the month (Article 30 § 2¹ of the Labour Code).',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of Employment Contract',
    podnadpis: 'declaration of the employee (Articles 30 and 36 of the Labour Code – Kodeks pracy)',
    podpisy: { vlevo: 'employee', vpravo: 'received – employer (date and signature)' },
    clanky: [
      { nadpis: 'Employee', odstavce: ['{{p_imie}}, {{p_adres}}, job title: {{p_stanowisko}}'] },
      { nadpis: 'Employer', odstavce: ['{{z_nazwa}}, {{z_adres}}'] },
      {
        nadpis: 'Termination of the Employment Contract',
        odstavce: [
          {
            uvodVzor: 'Method of termination (tick one option):',
            moznosti: {
              wypowiedzenie: 'I hereby give notice of termination of the employment contract concluded on {{umowa_data}}, observing the notice period.',
              skrocenie: 'I hereby give notice of termination of the employment contract concluded on {{umowa_data}}, observing the notice period. At the same time, I propose that we agree an earlier termination date – {{data_rozwiazania}} (Article 36 § 6 of the Labour Code). If you do not consent, the contract will terminate at the end of the notice period.',
              porozumienie: 'I propose terminating the employment contract concluded on {{umowa_data}} by mutual agreement of the parties (Article 30 § 1 point 1 of the Labour Code) as of {{data_rozwiazania}}. Please reply and prepare the agreement for signature.',
            },
          },
          {
            uvodVzor: 'The contract was concluded (tick):',
            moznosti: {
              nieokreslony: 'The contract was concluded for an indefinite period.',
              okreslony: 'The contract was concluded for a fixed term.',
              probny: 'The contract was concluded for a trial period.',
            },
          },
          {
            uvodVzor: 'Notice period (tick one option):',
            moznosti: {
              '2t': 'The notice period is 2 weeks (Article 36 § 1 of the Labour Code) and ends on a Saturday (Article 30 § 2¹ of the Labour Code).',
              '1m': 'The notice period is 1 month (Article 36 § 1 of the Labour Code) and ends on the last day of the month (Article 30 § 2¹ of the Labour Code).',
              '3m': 'The notice period is 3 months (Article 36 § 1 of the Labour Code) and ends on the last day of the month (Article 30 § 2¹ of the Labour Code).',
              probny_3d: 'The notice period for the trial-period contract is 3 working days (Article 34 of the Labour Code).',
              probny_1t: 'The notice period for the trial-period contract is 1 week (Article 34 of the Labour Code) and ends on a Saturday (Article 30 § 2¹ of the Labour Code).',
              probny_2t: 'The notice period for the trial-period contract is 2 weeks (Article 34 of the Labour Code) and ends on a Saturday (Article 30 § 2¹ of the Labour Code).',
            },
          },
        ],
      },
      {
        nadpis: 'Requests',
        odstavce: [
          {
            uvod: 'At the same time, I request:',
            moznosti: {
              urlop: 'agreement on how the annual leave due to me will be taken or paid out',
              swiadectwo: 'the issue of an employment certificate',
              potwierdzenie: 'written confirmation of the termination date of the employment contract',
            },
          },
          'Yours faithfully',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

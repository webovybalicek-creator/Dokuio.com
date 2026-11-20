/**
 * English version: employee’s notice of termination / resignation (Hungary). Original: src/obsah/hu/munkavallaloi-felmondas.ts
 * and src/sablony/hu/munkavallaloi-felmondas.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 * {{felm_ido_szoveg}} is a derived Hungarian phrase („30 napos“) – in the translation it stays as the original term in brackets.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-MUNKAVALLALOI-FELMONDAS', verze: '1.0' },

  nazev: 'Employee Resignation Letter',
  nazevA: 'the employee resignation letter',
  katalog: {
    popis: 'Resigning from your job, or proposing termination by mutual agreement.',
    slova: [
      'resignation letter',
      'notice of termination',
      'quit job Hungary',
      'notice period 30 days',
      'mutual agreement',
      'termination of employment',
      'munkavállalói felmondás',
      'felmondólevél',
      'közös megegyezés',
    ],
  },
  landing: {
    title: 'Employee Resignation Letter Hungary {rok} – free PDF template',
    description:
      'Resignation letter under the Hungarian Labour Code (Mt.): 30-day or longer notice period, last working day calculated, or mutual agreement proposal. Bilingual PDF, free.',
    perex:
      'A resignation letter to your employer under the Hungarian Labour Code (Munka Törvénykönyve) – we calculate your last working day. Or propose termination by mutual agreement (közös megegyezés) on a specific day.',
    obsahPopis: 'What the resignation letter contains.',
    obsah: [
      { nazev: 'Notice of termination', popis: 'Reference to section 65 of the Mt., the notice period and the last day.' },
      { nazev: 'Mutual agreement', popis: 'Proposal to end the employment on a specific day.' },
      { nazev: 'Requests', popis: 'Certificates, handover of the job, settlement of holiday and pay, reference.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Employer, job title, notice period according to the employment contract.' },
      { nazev: 'Sign two copies', popis: 'One for the employer, one for yourself.' },
      { nazev: 'Hand it over with proof', popis: 'In person with a signature confirming receipt, or by letter with return receipt.' },
    ],
    online: ['Last working day calculated', 'Notice of termination or mutual agreement', 'Reminder to hand over your job', 'Download as PDF and Word'],
    hodiSe: [
      'you are an employee and want to terminate your employment',
      'you want to leave earlier by mutual agreement',
      'you are terminating a fixed-term employment with a statement of reasons',
    ],
    nehodiSe: [
      'the employer is terminating – different rules apply (reasons, release from work, severance pay)',
      'termination with immediate effect or during the probationary period – get legal advice for these',
      'an agency contract (megbízási szerződés) or self-employment – the rules of the contract apply there',
    ],
    poNadpis: 'After giving notice.',
    po: [
      { nazev: 'Proof of receipt', popis: 'Your own copy should bear the employer’s signature and the date.' },
      { nazev: 'Handover of the job', popis: 'The employee must hand over their job and account for everything.' },
      { nazev: 'Certificates', popis: 'On the last day, the employer pays what is due and issues the certificates.' },
    ],
    faq: [
      {
        q: 'How long is the notice period if I resign?',
        a: 'The statutory notice period is 30 days (Mt. 69. § (1)). The employment contract may set a longer one, up to six months.',
      },
      {
        q: 'When does the notice period start?',
        a: 'At the earliest on the day after the notice is communicated (Mt. 68. § (1)). That is why it matters when you hand the notice over.',
      },
      {
        q: 'Do I have to give reasons for resigning?',
        a: 'Not for an employment of indefinite duration (Mt. 67. § (1)). However, notice terminating a fixed-term employment must be justified (67. § (2)).',
      },
      {
        q: 'What is the difference from a mutual agreement?',
        a: 'Notice of termination is unilateral; it takes effect even without the employer’s consent. By mutual agreement you can agree on any day, but this requires the employer’s consent and a written agreement.',
      },
      { q: 'Do you store my details?', a: 'No. The document is created only in your browser.' },
    ],
    zakony:
      'The template is based on the rules of Act I of 2012 on the Labour Code (a munka törvénykönyvéről szóló 2012. évi I. törvény, Mt.) on notice of termination, the notice period, communication and termination of employment.',
    souvisejiciPopis: 'More useful documents, also free.',
  },
  vytvorit: {
    title: 'Fill in an employee resignation letter online – Hungary, free PDF',
    description: 'Guide in English for a resignation letter (munkavállalói felmondás) in Hungary with your last working day calculated, or a mutual agreement proposal. Bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      felek: { nazev: 'Employee and employer' },
      megszuntetes: { nazev: 'Notice of termination or mutual agreement' },
      kerelmek: { nazev: 'Requests and signature' },
    },
    pole: {
      mv_nev: { popis: 'Your name', napoveda: 'As it appears in the employment contract.', placeholder: 'e.g. Szabó Péter' },
      mv_cim: { popis: 'Home address', napoveda: 'You can ask for the employer’s reply and the certificates to be sent here.', placeholder: 'e.g. 9021 Győr, Baross Gábor út 3.' },
      munkakor: { popis: 'Job title (munkakör)', napoveda: 'The job title stated in the employment contract.', placeholder: 'e.g. pénzügyi ügyintéző (finance administrator)' },
      szerzodes_datum: { popis: 'Date of the employment contract (optional)', napoveda: 'Helps identify the employment.' },
      ml_nev: { popis: 'Employer’s name', napoveda: 'The name of the company or of the private individual employer, as it appears in the employment contract.', placeholder: 'e.g. Minta Kft.' },
      ml_cim: { popis: 'Employer’s registered office or address', napoveda: 'From the employment contract or the company register (cégjegyzék).', placeholder: 'e.g. 1138 Budapest, Váci út 100.' },
      ml_kepviselo: {
        popis: 'Manager the letter is addressed to (optional)',
        napoveda: 'The person exercising the employer’s rights on behalf of the employer, e.g. the managing director or HR manager.',
        placeholder: 'e.g. Nagy Éva ügyvezető (managing director)',
      },
      mod: {
        popis: 'How do you want to end the employment?',
        napoveda: 'With notice of termination, you have to work through the notice period. By mutual agreement you can agree on any day if the employer also accepts it.',
        moznosti: { felmondas: 'I am giving notice', kozos: 'I propose a mutual agreement' },
      },
      idotartam: {
        popis: 'Duration of the employment',
        napoveda: 'It is stated in the employment contract. For a fixed-term employment, the notice must be justified.',
        moznosti: { hatarozatlan: 'Indefinite duration', hatarozott: 'Fixed term' },
      },
      indok: {
        popis: 'Reason for the notice',
        napoveda: 'Compulsory for a fixed-term employment. Describe briefly and objectively why you cannot continue the employment.',
        placeholder: 'e.g. családom külföldre költözik, ezért a munkaviszony fenntartása lehetetlenné válik (my family is moving abroad, so continuing the employment becomes impossible)',
      },
      felmondasi_ido: {
        popis: 'Notice period',
        napoveda: 'Unless the employment contract provides otherwise, 30 days.',
        moznosti: { torvenyes: '30 days (statutory)', hosszabb: 'Longer, under the employment contract' },
      },
      felm_napok: { popis: 'Notice period in days', napoveda: 'Up to six months, as stated in the employment contract.', placeholder: 'e.g. 60' },
      kozles_datum: {
        popis: 'When will you hand over the notice?',
        napoveda: 'We use this to calculate your last working day. The notice period starts on the day after the handover.',
      },
      kozos_datum: { popis: 'Proposed last day', napoveda: 'The day on which the employment would end by mutual agreement.' },
      kerelmek: {
        popis: 'What else do you ask the employer for?',
        napoveda: 'The employer must issue the certificates when the employment ends; the reminder helps make sure nothing is left out.',
        moznosti: {
          igazolasok: 'The certificates to be issued at the end of employment',
          atadas: 'Arranging the handover of the job',
          szabadsag: 'Settlement of holiday and pay',
          ertekeles: 'A written reference on my work (after at least 1 year of employment)',
        },
      },
      misto: { popis: 'Town or village', napoveda: 'Where you sign the letter.', placeholder: 'e.g. Győr' },
      datum: { popis: 'Date', napoveda: 'We have filled in today’s date.' },
    },
    vysvetleni: [
      'Who is giving notice, and to whom the statement is addressed.',
      'Notice of termination or a proposal for a mutual agreement. Notice of termination takes effect even without the employer’s acceptance; a mutual agreement requires the employer’s consent.',
      'The tasks needed to close the employment.',
    ],
    coDal: [
      'Print two copies and sign them. Hand one to the employer and ask for confirmation of receipt (name, date, signature) on the other.',
      'If you cannot hand it over in person, send it by registered letter with return receipt (tértivevényes ajánlott levél) – the day of communication matters because the notice period starts from it.',
      'Arrange the handover of your job and the settlement of holiday and pay.',
      'On the last day, ask for the certificates to be issued when the employment ends.',
    ],
    kontrola: [
      'The notice period is 30 days (Mt. 69. § (1)); the employment contract may set a longer one, up to six months (69. § (3)) – check your contract.',
      'The notice period starts at the earliest on the day after the notice is communicated (Mt. 68. § (1)) – the calculation is based on the day of handover, not the date of the letter.',
      'You do not have to give reasons for terminating an employment of indefinite duration (Mt. 67. § (1)); however, notice terminating a fixed-term employment must be justified (67. § (2)).',
      'Release from work during the notice period (felmentés) is compulsory only when the employer gives notice (Mt. 70. § (1)); when the employee gives notice, you can agree on this separately with the employer.',
      'Sign the notice and hand it over in a way you can prove; for a letter with return receipt, the presumption of delivery is governed by section 24 of the Mt.',
      'With a mutual agreement, termination is valid only in writing (Mt. 22. § (3), 44. §) – this letter is only a proposal; prepare the signed agreement separately.',
      'If the employment lasted at least one year, the employer will give you a written reference on your work at your request (Mt. 81. § (1)).',
    ],
    pripominky: {
      'Utolsó munkanap (a felmondási idő vége)': {
        nazev: 'Last working day (end of the notice period)',
        popis: 'On this day the employer pays what is due and issues the certificates (Mt. 80. § (2)).',
      },
      'Egyeztetni a munkakör átadását': {
        nazev: 'Arrange the handover of your job',
        popis: 'The employee must hand over their job and account for everything (Mt. 80. § (1)).',
      },
      'A javasolt megszűnés napja': {
        nazev: 'Proposed day of termination',
        popis: 'If accepted, the mutual agreement must be put in writing.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Termination by the Employee',
    podnadpis: 'under Act I of 2012 on the Labour Code (Mt.)',
    podpisy: { vlevo: 'employee', vpravo: 'received on behalf of the employer (name, date, signature)' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Employee:** {{mv_nev}}, home address: {{mv_cim}}, job title: {{munkakor}}',
          '**Employer:** {{ml_nev}}, {{ml_cim}}, person exercising the employer’s rights: {{ml_kepviselo}}',
        ],
      },
      {
        nadpis: 'Statement',
        odstavce: [
          'Dear Employer,',
          {
            uvodVzor: 'Method of termination (tick one):',
            moznosti: {
              felmondas:
                'I, the undersigned, hereby **terminate by notice** my employment based on the employment contract dated {{szerzodes_datum}}, pursuant to section 65 (1) of Act I of 2012 on the Labour Code. The notice period ({{felm_ido_szoveg}} felmondási idő) begins on the day following the communication of the notice. If you receive this notice on {{kozles_datum}}, my employment will end on {{utolso_nap}}.',
              kozos:
                'I, the undersigned, propose that my employment based on the employment contract dated {{szerzodes_datum}} be terminated **by mutual agreement** with effect from {{kozos_datum}}. Please let me know whether you accept this proposal; if you do, let us agree on the termination of the employment in writing.',
            },
          },
          {
            uvodVzor: 'Only when terminating a fixed-term employment (reasons are compulsory):',
            moznosti: { hatarozott: 'Reason for my notice: {{indok}}' },
          },
        ],
      },
      {
        nadpis: 'Requests',
        odstavce: [
          {
            uvod: 'I also request:',
            moznosti: {
              igazolasok: 'that the certificates required by law be issued and the amounts due to me be paid when the employment ends,',
              atadas: 'that the handover of my job and the settlement of accounts be arranged,',
              szabadsag: 'that my holiday and my pay be settled,',
              ertekeles: 'a written reference on my work.',
            },
          },
          'Thank you for your cooperation.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

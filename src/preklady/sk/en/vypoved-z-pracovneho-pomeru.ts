/**
 * English version: employee's notice of termination of employment (Slovakia).
 * Original: src/obsah/sk/vypoved-z-pracovneho-pomeru.ts and src/sablony/sk/vypoved-z-pracovneho-pomeru.ts.
 * The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-VYPOVED-PP', verze: '1.0' },

  nazev: 'Resignation Letter (Notice of Termination of Employment)',
  nazevA: 'the resignation letter',
  katalog: {
    popis: 'Employee’s notice of termination, proposal for an agreement, or termination during the probationary period.',
    slova: [
      'resignation letter',
      'resign',
      'quit job',
      'notice of termination',
      'notice period',
      'probationary period',
      'termination by agreement',
      'výpoveď z pracovného pomeru',
      'výpoveď zo zamestnania',
      'zákonník práce',
    ],
  },
  landing: {
    title: 'Resignation Letter Slovakia {rok} – free PDF template',
    description:
      'Resignation letter for Slovakia under the Labour Code: 1 or 2 months’ notice, proposal to end by agreement or during probation. Free bilingual PDF or Word.',
    perex: 'Leaving your job? As an employee you can give notice without stating a reason. The template picks the correct notice period and also offers an agreement if you want to leave sooner.',
    obsahPopis: 'Employee’s notice of termination (výpoveď) under Sections 61, 62 and 67 of the Labour Code (Zákonník práce), alternatively a proposal for an agreement (Section 60) or termination during the probationary period (Section 72).',
    obsah: [
      { nazev: 'Employer and employee', popis: 'Who you are delivering the notice to and who is leaving.' },
      { nazev: 'Termination', popis: 'Notice, proposal for an agreement or probationary period – with the length of the notice period.' },
      { nazev: 'Further requests', popis: 'Confirmation of employment, employment reference, offer to leave sooner.' },
    ],
    kroky: [
      { nazev: 'Choose the method', popis: 'Notice, agreement or probationary period.' },
      { nazev: 'Print and sign', popis: 'Two copies – have receipt confirmed on one of them.' },
      { nazev: 'Deliver', popis: 'At the workplace against a signature or by registered post.' },
    ],
    online: [
      'Correct notice period based on the length of employment',
      'Approximate end of employment in your calendar',
      'Request for a confirmation of employment and a reference',
      'Download as PDF and Word',
    ],
    hodiSe: ['you are an employee and want to leave', 'you want to propose a termination agreement to your employer', 'you want to leave during the probationary period'],
    nehodiSe: [
      'you are the employer – an employer can give notice only on the grounds set out in the Labour Code',
      'immediate termination of employment',
      'agreements on work performed outside an employment relationship',
    ],
    poNadpis: 'After delivery.',
    po: [
      { nazev: 'Notice period', popis: 'Starts on the first day of the month after delivery and ends on the last day of a month.' },
      { nazev: 'Handing over your work', popis: 'Work equipment, keys and unfinished tasks.' },
      { nazev: 'Documents', popis: 'Confirmation of employment when you leave, a reference within 15 days of your request.' },
    ],
    faq: [
      { q: 'How long is the notice period?', a: 'At least one month. If your employment has lasted at least one year, at least two months (Section 62 of the Labour Code). The employment contract may set a longer period.' },
      { q: 'When does the notice period start?', a: 'On the first day of the calendar month following delivery of the notice, and it ends on the last day of a calendar month. The day of delivery counts, not the day of sending.' },
      { q: 'Do I have to give a reason?', a: 'No. An employee may give notice for any reason or without stating a reason (Section 67 of the Labour Code).' },
      { q: 'Can I leave sooner?', a: 'Only by agreement with the employer – employment then ends on the agreed day. The agreement must be in writing (Section 60). If you leave sooner without an agreement, the employer may claim compensation if this is agreed in writing in the employment contract.' },
      { q: 'How do I quit during the probation period?', a: 'During probation this is not notice but termination under Section 72 of the Labour Code: in writing, for any reason or none, with no notice period. Deliver it as a rule at least 3 days before the end date and no later than the last day of probation. Choose the probation option in the template.' },
      { q: 'Do you store my details?', a: 'No. The notice is created directly in your browser.' },
    ],
    zakony: 'The template is based on Sections 38, 60 to 62, 67, 72 and 75 of Act No. 311/2001 Coll., the Labour Code (Zákonník práce).',
    souvisejiciPopis: 'More useful documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a resignation letter online – Slovakia, PDF',
    description: 'Guide in English: employee’s notice, proposal for a termination agreement or probation termination in Slovakia. Free bilingual PDF or Word.',
    podnadpis: 'Free · result in PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      zamestnanec: { nazev: 'Employee' },
      zamestnavatel: { nazev: 'Employer' },
      skoncenie: { nazev: 'Termination' },
    },
    pole: {
      z_jmeno: { popis: 'First name and surname', napoveda: 'As in the employment contract.', placeholder: 'e.g. Petra Kováčová' },
      z_narozeni: { popis: 'Date of birth', napoveda: 'So that the employer can identify you clearly. You don’t need to write your personal identification number (rodné číslo).' },
      z_cislo: { popis: 'Personnel number (optional)', napoveda: 'If your employer has assigned you one, you will find it on your payslip.', placeholder: 'e.g. 01234' },
      z_adresa: { popis: 'Address', napoveda: 'Permanent address or correspondence address.', placeholder: 'e.g. Mierová 25, 821 05 Bratislava' },
      z_pozicia: { popis: 'Job title', napoveda: 'Type of work according to the employment contract. Ideally write it in Slovak.', placeholder: 'e.g. účtovníčka (accountant)' },
      zmluva_datum: { popis: 'Date of the employment contract', napoveda: 'When you signed the employment contract or when the employment began.' },
      f_nazev: { popis: 'Employer – name', napoveda: 'Business name according to the employment contract or the Commercial Register (obchodný register).', placeholder: 'e.g. Stavby Slovensko, s. r. o.' },
      f_ico: { popis: 'IČO (company ID number)', napoveda: 'You will find it in the employment contract or on your payslip.', placeholder: 'e.g. 12345678' },
      f_adresa: { popis: 'Registered office', napoveda: 'Address of the employer’s registered office – the notice is sent there by post.', placeholder: 'e.g. Hlavná 1, 811 01 Bratislava' },
      sposob: {
        popis: 'How do you want to end your employment',
        napoveda: 'A notice does not need the employer’s consent. An agreement can end the employment sooner, but the employer must consent to it.',
        moznosti: {
          vypoved: 'Notice (notice period of 1 or 2 months)',
          dohoda: 'Proposal for a termination agreement as of a specific date',
          skusobna: 'Termination during the probationary period',
        },
      },
      trvanie: {
        popis: 'How long have you worked for the employer',
        napoveda: 'What counts is the length of employment on the day the notice is delivered.',
        moznosti: { menej: 'Less than one year (at least 1 month)', rok: 'At least one year (at least 2 months)' },
      },
      dohoda_datum: { popis: 'Proposed last day', napoveda: 'The day on which the employment should end. The employer may propose another.' },
      skusobna_datum: { popis: 'Last day of employment', napoveda: 'As a rule, deliver the notification at least three days before this day.' },
      zadosti: {
        popis: 'What else are you requesting',
        napoveda: 'The employer must always issue a confirmation of employment, and an employment reference within 15 days of a request.',
        moznosti: {
          potvrdenie: 'Confirmation of employment',
          posudok: 'Employment reference',
          skor: 'Offer to leave sooner by agreement (notice only)',
        },
      },
      skor_datum: { popis: 'End by agreement as of', napoveda: 'If the employer agrees, you will leave on this day instead of at the end of the notice period.' },
      misto: { popis: 'Place (town)', napoveda: 'We pre-fill it from your address.', placeholder: 'e.g. Bratislava' },
      datum: { popis: 'Date', napoveda: 'We pre-filled today.' },
    },
    vysvetleni: [
      'Who you are delivering the document to.',
      'Who is ending the employment.',
      'A notice does not need the employer’s consent; an agreement does. During the probationary period a written notification is enough.',
      'Documents you will need with a new employer or at a public office.',
    ],
    coDal: [
      'Print the notice twice and sign it. Delivery to the employer is what counts, not sending.',
      'Deliver it at the workplace against a signature on your copy (date of receipt, name and signature), or by registered post (Section 38(3) of the Labour Code).',
      'The notice period starts on the first day of the month after delivery. You continue working normally until it ends.',
      'When you leave, collect your confirmation of employment (potvrdenie o zamestnaní) – the employer must issue it when the employment ends.',
      'For an agreement: the employer must conclude it with you in writing – a proposal is not an agreement until you have both signed it.',
    ],
    kontrola: [
      'The notice must be in writing and delivered, otherwise it is invalid (Section 61(1) of the Labour Code). Deliver it at the workplace or by registered post (Section 38(3)) – do not rely on ordinary e-mail or SMS.',
      'As an employee, you may give notice for any reason or without stating a reason (Section 67).',
      'The notice period is at least one month; if your employment has lasted at least one year, at least two months (Section 62(2) and (6)). Check your employment contract for a longer agreed period.',
      'The notice period starts on the first day of the calendar month after the notice is delivered and ends on the last day of a calendar month (Section 62(7)). A notice delivered on 31 March with a one-month period means the end on 30 April.',
      'If you leave before the end of the notice period, the employer may claim monetary compensation only if this is agreed in writing in the employment contract (Section 62(8)).',
      'You can withdraw a delivered notice only with the employer’s consent, and in writing (Section 61(4)).',
      'By agreement, employment ends on the day you agree on; the agreement must be in writing (Section 60). You cannot force it without the employer’s consent.',
      'During the probationary period you may end the employment in writing for any reason; the notification should, as a rule, be delivered at least three days before the day of termination (Section 72).',
    ],
    pripominky: {
      'Koniec pracovného pomeru po výpovedi (orientačne)': {
        nazev: 'End of employment after notice (approximate)',
        popis: 'Calculated assuming the notice is delivered on the day of signing, with the statutory notice period (one or two months). A longer period in the employment contract takes precedence.',
      },
      'Vyžiadať potvrdenie o zamestnaní a odovzdať pracovné pomôcky': { nazev: 'Request the confirmation of employment and return work equipment' },
      'Navrhovaný koniec pracovného pomeru dohodou': { nazev: 'Proposed end of employment by agreement' },
      'Koniec pracovného pomeru v skúšobnej dobe': { nazev: 'End of employment during the probationary period' },
    },
  },

  dokument: {
    nazev: 'Termination of Employment',
    podnadpis: 'by the employee under Act No. 311/2001 Coll., the Labour Code (Zákonník práce)',
    podpisy: { vlevo: 'employee', vpravo: 'received on behalf of the employer (date and signature)' },
    clanky: [
      { nadpis: 'Employer', odstavce: ['{{f_nazev}}, IČO {{f_ico}}, registered office {{f_adresa}}'] },
      {
        nadpis: 'Employee',
        odstavce: ['{{z_jmeno}}, date of birth {{z_narozeni}}, personnel number {{z_cislo}}, address {{z_adresa}}, job title {{z_pozicia}}, employment contract dated {{zmluva_datum}}'],
      },
      {
        nadpis: 'Termination of Employment',
        odstavce: [
          {
            uvodVzor: 'Method of termination (tick one option):',
            moznosti: {
              vypoved: 'I hereby give you notice of termination of my employment under Sections 61 and 67 of the Labour Code. The notice period starts on the first day of the calendar month following the delivery of this notice (Section 62(7) of the Labour Code).',
              dohoda: 'I propose to end my employment by agreement under Section 60 of the Labour Code as of {{dohoda_datum}}. Please reply in writing and prepare the agreement for signature.',
              skusobna: 'I hereby notify you that I am ending my employment during the probationary period under Section 72 of the Labour Code, as of {{skusobna_datum}}.',
            },
          },
          {
            uvodVzor: 'For notice – length of the notice period (tick one option):',
            moznosti: {
              menej: 'The notice period is one month, unless the employment contract sets a longer one.',
              rok: 'As my employment has lasted at least one year, the notice period is two months (Section 62(6) of the Labour Code), unless the employment contract sets a longer one.',
            },
          },
        ],
      },
      {
        nadpis: 'Further Requests',
        odstavce: [
          {
            uvod: 'At the same time, I request:',
            moznosti: {
              potvrdenie: 'a confirmation of employment upon termination of the employment (Section 75(2) of the Labour Code)',
              posudok: 'an employment reference (Section 75(1) of the Labour Code)',
              skor: 'your consent to ending the employment by agreement under Section 60 of the Labour Code as early as {{skor_datum}}; if you do not agree, the employment will end on expiry of the notice period',
            },
          },
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

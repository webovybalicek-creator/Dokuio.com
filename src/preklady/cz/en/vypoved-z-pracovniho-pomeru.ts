/**
 * English version: employee’s notice of resignation (Czech Republic). Original: src/obsah/cz/vypoved-z-pracovniho-pomeru.ts
 * and src/sablony/cz/vypoved-pracovni-pomer.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-VYPOVED-PRACE', verze: '1.0' },

  nazev: 'Resignation Letter',
  nazevA: 'the resignation letter',
  katalog: {
    popis: 'Employee’s notice of resignation or proposal for a termination agreement.',
    slova: ['resignation', 'resignation letter', 'quit job', 'leave job', 'notice of resignation', 'employee', 'employer', 'employment', 'notice period', 'termination agreement', 'Labour Code', 'výpověď z pracovního poměru', 'zákoník práce'],
  },
  landing: {
    title: 'Resignation Letter Czech Republic {rok} – free PDF template',
    description:
      'Employee’s notice under the Czech Labour Code as amended in 2025: 2-month notice from delivery, or a proposed agreement to end on a date. Free bilingual PDF and Word.',
    perex: 'Leaving your job? An employee’s notice of termination with no reason given, with a notice period that since June 2025 runs from the day of delivery. Or a proposed termination agreement as of a date you choose.',
    obsahPopis: 'A short letter to the employer under Sections 49 to 51 of the Czech Labour Code (zákoník práce).',
    obsah: [
      { nazev: 'Employee', popis: 'Name, date of birth or personnel number, address, job title.' },
      { nazev: 'Employer', popis: 'Name, company ID number (IČO) and registered office – can be loaded from the register.' },
      { nazev: 'Termination of employment', popis: 'Notice of termination (výpověď) with a notice period, or a proposed agreement as of a given day.' },
      { nazev: 'Further requests', popis: 'Confirmation of receipt, confirmation of employment, work reference.' },
    ],
    kroky: [
      { nazev: 'Notice or agreement', popis: 'The guide explains the difference.' },
      { nazev: 'Download and sign', popis: 'PDF or Word, free, signed by hand. The document is bilingual: Czech original and English translation.' },
      { nazev: 'Hand it over in person', popis: 'And have the date of receipt confirmed on a copy.' },
    ],
    online: ['Wording under the current Labour Code (amendment from 1 June 2025)', 'Notice and proposed agreement in one', 'End of the notice period in your calendar', 'Download as PDF and Word'],
    hodiSe: ['you are an employee and want to leave your job', 'you want to leave sooner than in 2 months and propose an agreement as of a date', 'you need to request a confirmation of employment and a work reference'],
    nehodiSe: [
      'you are the employer – notice to an employee may only rely on statutory grounds, consult a lawyer',
      'you are in your probationary period – termination during the probationary period (zrušení ve zkušební době) is enough',
      'you work under an agreement to complete a job (DPP) or an agreement to perform work (DPČ) – these end as the agreement provides',
      'you want to terminate your employment with immediate effect (okamžité zrušení) because of unpaid wages – this has strict conditions',
    ],
    poNadpis: 'After handing it over.',
    po: [
      { nazev: 'Notice period', popis: 'Starts on the day of delivery and lasts at least 2 months. You keep working and are paid.' },
      { nazev: 'Handover of work and property', popis: 'Laptop, keys, cards – have the return confirmed.' },
      { nazev: 'Confirmation of employment', popis: 'The employer issues it when your employment ends.' },
    ],
    faq: [
      { q: 'How long is the notice period?', a: 'At least 2 months. It is longer only if the employee and the employer agreed so in writing – and it must apply equally to both parties.' },
      { q: 'When does the notice period start?', a: 'Since 1 June 2025, on the day the notice was delivered to the employer, and it ends on the day with the same date number. If you deliver the notice on 10 March, your employment ends on 10 May. If the month has no such day, it ends on the last day of the month.' },
      { q: 'Do I have to give a reason for resigning?', a: 'No. An employee can give notice for any reason or without giving a reason.' },
      { q: 'How do I deliver the notice?', a: 'Usually by handing it to the employer in person; at your request the employer must confirm receipt in writing. You can also send it to the employer’s data box (datová schránka) or, signed electronically, to the address the employer has designated for this purpose.' },
      { q: 'Can I withdraw my notice?', a: 'Only with the employer’s consent. Both the withdrawal of the notice and the consent to it must be in writing.' },
    ],
    zakony:
      'The template is based on Sections 49, 50, 51, 313, 314 and 337 of Czech Act No. 262/2006 Coll., the Labour Code (zákoník práce), as in force from 1 June 2025, and on information from the Ministry of Labour and Social Affairs (MPSV) on the “flexible” amendment to the Labour Code.',
    souvisejiciPopis: 'More documents that come in handy when changing jobs, also free.',
  },
  vytvorit: {
    title: 'Fill in a resignation letter online – Czech Republic, PDF',
    description: 'Guide in English for an employee’s notice of resignation or a proposed agreement to terminate employment in the Czech Republic. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      zamestnanec: { nazev: 'Employee', popis: 'Your details as the employer has them in your employment contract.' },
      zamestnavatel: { nazev: 'Employer', popis: 'You will find the details in your employment contract or on your payslip.' },
      skonceni: { nazev: 'Ending employment' },
    },
    pole: {
      z_jmeno: { popis: 'Full name', napoveda: 'As stated in your employment contract.', placeholder: 'e.g. Petra Svobodová' },
      z_narozeni: { popis: 'Date of birth', napoveda: 'Helps identify you clearly. Your personnel number is enough instead.' },
      z_osobni: { popis: 'Personnel number (optional)', napoveda: 'If your employer has given you one (you will find it on your payslip).', placeholder: 'e.g. 10452' },
      z_adresa: { popis: 'Address', napoveda: 'Your home address, where the employer can send you documents.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      z_pozice: { popis: 'Job title (optional)', napoveda: 'The type of work under your employment contract. The text goes into the document exactly as you write it – preferably in Czech.', placeholder: 'e.g. účetní (accountant)' },
      f_nazev: { popis: 'Employer (company name)', napoveda: 'The exact name as in your employment contract.', placeholder: 'e.g. Stavby Novák s.r.o.' },
      f_ico: { popis: 'IČO', napoveda: 'The company ID number. Use the button to fill in the name and registered office from the register.', placeholder: 'e.g. 12345678' },
      f_sidlo: { popis: 'Registered office', napoveda: 'The notice is usually delivered to the employer in person at its registered office.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      smlouva_datum: { popis: 'Date of employment contract (optional)', napoveda: 'When you signed your employment contract.' },
      zpusob: {
        popis: 'How you want to leave',
        napoveda: 'Notice does not need the employer’s consent, but a notice period runs. An agreement can end the employment at any time, but the employer must agree to it.',
        moznosti: { vypoved: 'Notice of termination (with a notice period)', dohoda: 'Proposed agreement to end as of a given day' },
      },
      vd: {
        popis: 'Notice period',
        napoveda: 'The statutory period is 2 months. A longer one applies only if agreed in writing in your employment contract.',
        moznosti: { zakonna: '2 months (statutory)', smlouva: 'Longer, agreed in the employment contract' },
      },
      vd_mesice: { popis: 'Length under the contract', napoveda: 'Copy it from the contract in Czech, e.g. “3 měsíce” (3 months).', placeholder: 'e.g. 3 měsíce' },
      dohoda_k: { popis: 'End as of', napoveda: 'The last day of employment you are proposing.' },
      zadosti: {
        popis: 'What else you want (optional)',
        napoveda: 'The employer must always issue a confirmation of employment, but a reminder does no harm. A work reference is issued within 15 days of the request.',
        moznosti: {
          prevzeti: 'Written confirmation of receipt',
          potvrzeni: 'Confirmation of employment (zápočtový list)',
          posudek: 'Work reference (posudek o pracovní činnosti)',
        },
      },
      misto: { popis: 'Place (town)', napoveda: 'We pre-fill it from your address.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date', napoveda: 'We have pre-filled today’s date. The notice period, however, runs only from delivery.' },
    },
    vysvetleni: [
      'Who is giving notice.',
      'Who you are delivering the notice to.',
      'Notice ends the employment when the notice period expires; an agreement ends it on the agreed day.',
      'Documents that will be useful after you leave. All optional.',
    ],
    coDal: [
      'Sign the notice by hand. Without written form it is disregarded.',
      'Deliver it to the employer in person (at the registered office or to your manager / HR) and have the date of receipt confirmed on a copy. You can also send it to the employer’s data box (datová schránka) or, signed electronically, to the address the employer has designated for this purpose.',
      'The notice period starts on the day of delivery. Until it ends, you work as normal and are paid.',
      'Agree on handing over your work, returning property entrusted to you, and taking or being paid for remaining holiday.',
      'When your employment ends, the employer will give you a confirmation of employment (potvrzení o zaměstnání, zápočtový list) – you will need it at your new employer or at the Labour Office (úřad práce).',
    ],
    kontrola: [
      'The notice must be in writing and must reach the employer. The day of delivery decides, not the day it was written.',
      'As an employee, you can give notice for any reason or without giving a reason – you do not need to state one.',
      'The notice period is at least 2 months. Since 1 June 2025 it starts on the day the notice is delivered and ends on the day with the same date number (delivered 15 March → ends 15 May). Details on the amendment are explained by the [MPSV](https://mpsv.gov.cz/jake-zmeny-prinasi-flexibilni-novela-zakoniku-prace-) (Ministry of Labour and Social Affairs).',
      'A longer notice period applies only if agreed in writing in the employment contract (it must apply equally to you and the employer). Check your employment contract.',
      'Want to leave sooner? Propose an agreement to terminate employment (dohoda o rozvázání pracovního poměru) as of a particular day – it must be in writing and is valid only with the employer’s consent.',
      'In your probationary period? You can terminate employment during the probationary period for any reason or without giving a reason (Section 66 of the Labour Code) – that needs a different text from a notice.',
      'Once sent, the notice cannot be withdrawn unilaterally – it can be withdrawn only in writing and with the employer’s consent.',
    ],
    pripominky: {
      'Poslední den v práci (dohoda)': {
        nazev: 'Last day at work (agreement)',
        popis: 'Collect your confirmation of employment and return property entrusted to you.',
      },
      'Konec pracovního poměru po výpovědi (orientačně)': {
        nazev: 'End of employment after notice (approximate)',
        popis: 'Calculated assuming the notice is delivered on the day of signing. If it is delivered later, the end date moves.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of Employment',
    podnadpis: 'employee’s notice of termination (výpověď) or proposal for an agreement to terminate employment under Act No. 262/2006 Coll., the Labour Code (zákoník práce)',
    podpisy: { vlevo: 'employee', vpravo: 'for the employer – received on (for an agreement: I agree)' },
    clanky: [
      {
        nadpis: 'Employee',
        odstavce: ['{{z_jmeno}}, date of birth {{z_narozeni}}, personnel number {{z_osobni}}, residing at {{z_adresa}}, job title: {{z_pozice}}'],
      },
      {
        nadpis: 'Employer',
        odstavce: ['{{f_nazev}}, IČO {{f_ico}}, with its registered office at {{f_sidlo}}'],
      },
      {
        nadpis: 'Termination of employment',
        odstavce: [
          {
            uvodVzor: 'Method of termination (tick one option):',
            moznosti: {
              vypoved: 'I hereby give you notice of termination of the employment established by the employment contract dated {{smlouva_datum}}, under Section 50(3) of Act No. 262/2006 Coll., the Labour Code, without stating a reason.',
              dohoda: 'I propose that we terminate the employment established by the employment contract dated {{smlouva_datum}} by agreement under Section 49 of Act No. 262/2006 Coll., the Labour Code, as of {{dohoda_k}}.',
            },
          },
          {
            uvodVzor: 'For a notice – notice period (tick one option):',
            moznosti: {
              zakonna: 'The notice period is 2 months. It starts on the day this notice is delivered and ends on the day with the same date number (Section 51 of the Labour Code). The employment ends when the notice period expires.',
              smlouva: 'The notice period is {{vd_mesice}} under the employment contract. It starts on the day this notice is delivered (Section 51 of the Labour Code). The employment ends when the notice period expires.',
            },
          },
          {
            uvodVzor: 'For an agreement:',
            moznosti: {
              dohoda: 'If you agree with the proposal, please confirm this by signing this sheet. The signatures of both parties create a written agreement to terminate the employment, and the employment ends on the agreed day.',
            },
          },
        ],
      },
      {
        nadpis: 'Further requests',
        odstavce: [
          {
            uvod: 'At the same time, I request:',
            moznosti: {
              prevzeti: 'written confirmation of receipt of this document (Section 337(1) of the Labour Code)',
              potvrzeni: 'the issue of a confirmation of employment when the employment ends (Section 313 of the Labour Code)',
              posudek: 'the issue of a work reference (Section 314 of the Labour Code)',
            },
          },
          'Thank you for our cooperation to date.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: termination of employment by the employee (Austria).
 * Original: src/obsah/at/kuendigung-dienstverhaeltnis.ts and src/sablony/at/kuendigung-dienstverhaeltnis.ts.
 * The German text prevails; rules and glossary – PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-KUENDIGUNG-DIENST', verze: '1.0' },

  nazev: 'Resignation by the Employee',
  nazevA: 'notice of termination of employment',
  katalog: {
    popis: 'Resign from your job or propose termination by mutual agreement.',
    slova: ['resignation', 'resignation letter', 'quit my job', 'notice of termination', 'notice period', 'termination by mutual agreement', 'probationary period', 'collective agreement', 'Kündigung Arbeitnehmer', 'Dienstnehmerkündigung', 'einvernehmliche Auflösung'],
  },
  landing: {
    title: 'Resignation Letter Austria {rok} – free PDF template',
    description:
      'End your employment in Austria yourself: one month’s notice to the end of a month, check the collective agreement, or agree on an end date. Free bilingual PDF and Word.',
    perex: 'Got a new job or want to leave? A notice of termination (Kündigung) for your employer – with notice periods under Austrian employment law, as a termination during the probationary period or as a proposal for termination by mutual agreement.',
    obsahPopis: 'Letter from the employee to the employer.',
    obsah: [
      { nazev: 'Employee and employer', popis: 'Name, address, position, start of employment.' },
      { nazev: 'Type of termination', popis: 'Notice of termination, termination during the probationary period or termination by mutual agreement.' },
      { nazev: 'Last day', popis: 'With the clause “to the next possible date” in case the collective agreement provides otherwise.' },
      { nazev: 'Other requests', popis: 'Confirmation of receipt, remaining leave, final pay statement and employment papers.' },
    ],
    kroky: [
      { nazev: 'Check the notice period', popis: 'Look at your employment contract (Dienstvertrag) and collective agreement (Kollektivvertrag).' },
      { nazev: 'Fill in', popis: 'A few questions, everything explained.' },
      { nazev: 'Hand it over', popis: 'In person against confirmation or by registered post.' },
    ],
    online: ['Notice, probationary period or mutual agreement', 'Calendar reminder for your last working day', 'Tips on collective agreements and notice periods', 'Download as PDF and Word'],
    hodiSe: ['you are a salaried employee (Angestellte/r) or a worker (Arbeiter/in) in a permanent employment relationship', 'you want to leave during the probationary period', 'you would like to agree an end date with your employer'],
    nehodiSe: ['apprenticeship (Lehrverhältnis) – separate rules apply here, in writing and with information on legal rights', 'fixed-term employment without an agreed termination option', 'early resignation for good cause (vorzeitiger Austritt) – get advice from the Chamber of Labour (AK) or a trade union first', 'you are the employer'],
    poNadpis: 'After giving notice.',
    po: [
      { nazev: 'Notice period', popis: 'You keep working until the last day unless the employer releases you from work.' },
      { nazev: 'Leave', popis: 'Remaining leave is taken if agreed, otherwise it is paid out.' },
      { nazev: 'Final pay statement', popis: 'Pay up to the end, pro rata special payments (Sonderzahlungen) and employment papers.' },
    ],
    faq: [
      { q: 'What notice period do I have as an employee?', a: 'As a rule, one month to the last day of a month – since October 2021 the same for salaried employees and workers. The employment contract can extend the period to up to six months; the collective agreement may differ for seasonal industries.' },
      { q: 'Does the notice have to be in writing?', a: 'By law no particular form is required. If the collective agreement or the employment contract requires written form, an oral notice is invalid. In writing, you also have proof.' },
      { q: 'When does the notice period start?', a: 'When the notice reaches the employer. For employment to end on 30 June, the notice must have arrived by 31 May at the latest.' },
      { q: 'What is termination by mutual agreement?', a: 'Employee and employer agree on an end date; notice periods then do not apply. As a rule no particular form is required, but in some cases – for example during pregnancy or parental leave (Karenz) – it is only permitted in writing.' },
      { q: 'How do I end employment during the probationary period?', a: 'The probationary period lasts one month at most. During this time either party can end the employment at any time without notice and without giving a reason.' },
      { q: 'Do you store my data?', a: 'No. The document is created entirely in your browser.' },
    ],
    zakony: 'The template is based on § 20 of the Salaried Employees Act (Angestelltengesetz) and § 1159 ABGB as in force since 1 October 2021, and on information from the Business Service Portal (Unternehmensserviceportal) and the Chamber of Labour (Arbeiterkammer). The collective agreement may provide otherwise.',
    souvisejiciPopis: 'More documents about work and everyday life, also free of charge.',
  },
  vytvorit: {
    title: 'Fill in a resignation letter online – Austria',
    description: 'Notice of termination for your employer or a proposal for termination by mutual agreement. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice of termination', g: 'notice of termination', a: 'notice of termination', l: 'notice of termination' },
    kroky: {
      arbeitnehmer: { nazev: 'Your details' },
      arbeitgeber: { nazev: 'Employer' },
      beendigung: {
        nazev: 'Termination',
        popis: 'You can give notice (Kündigung) on your own. Termination by mutual agreement (einvernehmliche Auflösung) needs the employer’s consent, but the end date can then be agreed freely.',
      },
    },
    pole: {
      an_name: { popis: 'First and last name', napoveda: 'As in your employment contract.', placeholder: 'e.g. Lukas Gruber' },
      an_adresse: { popis: 'Address', napoveda: 'Your current home address – your final pay statement and employment papers will be sent there.', placeholder: 'e.g. Landstraße 8, 4020 Linz' },
      an_persnr: { popis: 'Staff number (optional)', napoveda: 'Makes it easier for the HR department to identify you.', placeholder: 'e.g. 10234' },
      position: { popis: 'Job or position', napoveda: 'As in your employment contract or statement of employment terms (Dienstzettel). Write in German.', placeholder: 'e.g. Bürokauffrau (office clerk)' },
      beginn: { popis: 'Start of employment (optional)', napoveda: 'Start date according to your employment contract.' },
      ag_name: { popis: 'Company or name', napoveda: 'Exactly as in your employment contract.', placeholder: 'e.g. Muster Handels GmbH' },
      ag_zh: { popis: 'For the attention of (optional)', napoveda: 'Your line manager or the HR department.', placeholder: 'e.g. Personalabteilung, Frau Mag. Berger (HR department)' },
      ag_adresse: { popis: 'Address', napoveda: 'Registered office or address of the HR department.', placeholder: 'e.g. Industriestraße 5, 4020 Linz' },
      art: {
        popis: 'How should the employment end?',
        napoveda: 'Notice = one-sided, with a notice period. Mutual agreement = a proposal to the employer; both sign.',
        moznosti: {
          kuendigung: 'Notice of termination with the notice period observed',
          probezeit: 'Termination during the probationary period',
          einvernehmlich: 'Termination by mutual agreement (proposal)',
        },
      },
      ende: {
        popis: 'Last day of employment',
        napoveda: 'With notice, usually the last day of the month following receipt – check your employment contract and collective agreement. With mutual agreement, the date you want.',
      },
      anliegen: {
        popis: 'What else would you like to raise?',
        napoveda: 'When employment ends, you are entitled to a final pay statement and employment papers. Taking leave during the notice period must be agreed.',
        moznosti: {
          bestaetigung: 'Request written confirmation of receipt',
          urlaub: 'Agreement on remaining leave',
          papiere: 'Final pay statement and employment papers',
        },
      },
      ort: { popis: 'Place', napoveda: 'We take the town from your address.', placeholder: 'e.g. Linz' },
      datum: { popis: 'Date', napoveda: 'Today’s date is pre-filled.' },
    },
    vysvetleni: [
      'Who is ending the employment.',
      'The employer – the notice takes effect only once it reaches them.',
      'Notice, termination during the probationary period or a proposal for termination by mutual agreement – with the last working day.',
      'What still needs to be settled when the employment ends.',
    ],
    coDal: [
      'Sign and hand it over in a way that lets you prove receipt: in person against confirmation on a copy, or by registered post.',
      'The notice period only starts once the employer receives the notice – by post, what counts is arrival, not sending.',
      'For termination by mutual agreement: both parties sign the letter and each keeps one copy.',
      'Raise remaining leave, the final pay statement and employment papers; the Chamber of Labour (Arbeiterkammer) and trade unions answer questions.',
    ],
    kontrola: [
      'Since October 2021, the same rule generally applies to salaried employees and workers: one month’s notice to the last day of a month. The employment contract can extend the period to up to six months ([USP](https://www.usp.gv.at/themen/mitarbeiter-und-gesundheit/beendigung-des-arbeitsverhaeltnisses/kuendigung.html)).',
      'Check your collective agreement: it can govern form, notice periods and termination dates – in industries consisting mainly of seasonal businesses, also different dates. Trade unions and the Chamber of Labour provide information.',
      'As a rule, no particular form is required for the notice. If the collective agreement or employment contract requires written form, an oral notice is invalid – in writing you are always on the safe side.',
      'Example: for employment to end on 30 June, the notice must have reached the employer by 31 May at the latest ([Arbeiterkammer](https://www.arbeiterkammer.at/beratung/arbeitundrecht/beendigung/Arbeitnehmer-Kuendigung.html)).',
      'Fixed-term employment: it ends when the term expires and can only be terminated by notice if this was expressly agreed.',
      'Probationary period (one month at most): either party can end the employment at any time without notice and without giving a reason.',
      'If you do not observe the notice period or date, the employment still ends – but you risk damages and, depending on the collective agreement, special payments.',
      'Termination by mutual agreement: as a rule no particular form is required, but written form is mandatory during pregnancy, the protection period (Schutzfrist) or parental leave (Elternkarenz), in apprenticeships (with information on legal rights) and during military or civilian service (Präsenz- oder Zivildienst).',
      'Unemployment benefit (Arbeitslosengeld): according to the Chamber of Labour, after resigning yourself the entitlement starts at the earliest after a waiting period (Sperrfrist) of four weeks.',
    ],
    pripominky: {
      'Letzter Tag des Dienstverhältnisses': {
        nazev: 'Last day of employment',
        popis: 'Settle the final pay statement, employment papers and the return of company property.',
      },
      'Voraussichtliches Ende (ein Monat zum Monatsletzten)': {
        nazev: 'Expected end (one month to the end of a month)',
        popis: 'Assuming receipt in the month of signing. The employment contract and collective agreement may provide otherwise.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of Employment',
    podnadpis: 'termination by the employee',
    podpisy: { vlevo: 'Employee', vpravo: 'Received on … (for termination by mutual agreement: agreed) – Employer' },
    clanky: [
      {
        nadpis: 'Sender',
        odstavce: ['{{an_name}}, {{an_adresse}}, staff number {{an_persnr}}'],
      },
      {
        nadpis: 'To',
        odstavce: ['{{ag_name}}, for the attention of {{ag_zh}}, {{ag_adresse}}'],
      },
      {
        nadpis: 'Termination of employment',
        odstavce: [
          'Dear Sir or Madam,',
          {
            uvodVzor: 'Type of termination (please tick):',
            moznosti: {
              kuendigung: 'I hereby give notice of termination of my employment as {{position}} (start: {{beginn}}), observing the notice period. According to my calculation, the employment ends on {{ende}}. Should the employment contract or collective agreement result in a different date, the notice applies to the next possible date.',
              probezeit: 'I hereby terminate my employment as {{position}} (start: {{beginn}}) during the agreed probationary period. The last day of employment is {{ende}}.',
              einvernehmlich: 'I propose that my employment as {{position}} (start: {{beginn}}) be terminated by mutual agreement as of {{ende}}. If you agree, please confirm this by signing this letter. Until then, the employment continues unchanged.',
            },
          },
        ],
      },
      {
        nadpis: 'Other requests',
        odstavce: [
          {
            uvod: 'I would also ask you for:',
            moznosti: {
              bestaetigung: 'written confirmation of receipt of this letter',
              urlaub: 'an agreement on taking or paying out my remaining leave',
              papiere: 'the final pay statement and sending of my employment papers to my address stated above',
            },
          },
          'Thank you for our cooperation.',
          'Yours faithfully,',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

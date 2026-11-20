/**
 * English version: termination of employment by the employee (Germany). Original: src/obsah/de/kuendigung-arbeitsvertrag.ts
 * and src/sablony/de/kuendigung-arbeitsvertrag.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-KUENDIGUNG-ARBEIT', verze: '1.0' },

  nazev: 'Notice of Termination of Employment (by the Employee)',
  nazevA: 'the notice of termination of employment',
  katalog: {
    popis: 'Resignation by the employee or an offer of a termination agreement.',
    slova: ['resignation', 'resignation letter', 'quit my job', 'notice of termination', 'termination of employment', 'notice period', 'termination agreement', 'probation period', 'job reference', 'Kündigung Arbeitsvertrag', 'Eigenkündigung', 'Aufhebungsvertrag'],
  },
  landing: {
    title: 'Employee Notice of Termination Germany {rok} – free PDF template',
    description:
      'Resignation under Section 622 BGB: four weeks to the 15th or the end of the month, with a job reference request. Must be signed on paper. Free bilingual PDF or Word.',
    perex: 'Got a new job or want to leave? Give notice of termination (Kündigung) in time for the earliest possible date or offer a termination agreement (Aufhebungsvertrag) – print it out, sign it by hand, hand it over.',
    obsahPopis: 'Employee’s notice of termination under Sections 622 and 623 of the German Civil Code (BGB).',
    obsah: [
      { nazev: 'Sender and employer', popis: 'Name, address, personnel number, for the attention of.' },
      { nazev: 'Termination', popis: 'Ordinary notice or an offer of a termination agreement, with the date.' },
      { nazev: 'Requests', popis: 'Confirmation of receipt, job reference, remaining leave, employment certificate.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Employer, start of employment, date.' },
      { nazev: 'Print and sign', popis: 'In your own hand with a ballpoint pen – e-mail is invalid.' },
      { nazev: 'Hand it over', popis: 'In person against a confirmation of receipt or by messenger.' },
    ],
    online: [
      'Clear guidance on written form and notice periods',
      'Calendar reminder to register as a jobseeker',
      'Choose notice of termination or termination agreement',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are an employee and are resigning yourself',
      'resigning during the probation period',
      'you want to offer your employer a termination agreement',
    ],
    nehodiSe: [
      'termination by the employer',
      'termination without notice for good cause – get advice',
      'apprenticeships (Ausbildung) – their own rules apply',
    ],
    poNadpis: 'After handing it over.',
    po: [
      {
        nazev: 'Register as a jobseeker',
        popis: 'If you have no new job: no later than three months before the end, otherwise within three days (Section 38 SGB III).',
      },
      { nazev: 'Job reference', popis: 'You are entitled to a written job reference (Arbeitszeugnis) (Section 630 BGB).' },
      { nazev: 'Job search', popis: 'On request, reasonable time off to look for a new job (Section 629 BGB).' },
    ],
    faq: [
      {
        q: 'Can I resign by e-mail or WhatsApp?',
        a: 'No. Terminating an employment relationship requires written form; electronic form is excluded (Section 623 BGB). Only the original signed in your own hand is valid.',
      },
      {
        q: 'What notice period do I have as an employee?',
        a: 'By law, four weeks to the 15th or to the end of a calendar month; during an agreed probation period of no more than six months, two weeks (Section 622 BGB). An employment contract or collective agreement may provide for longer periods; however, no longer period may apply to you than to the employer.',
      },
      {
        q: 'What is the difference from a termination agreement?',
        a: 'A notice of termination takes effect unilaterally. A termination agreement (Aufhebungsvertrag) is an agreement between both sides and must likewise be signed in writing by both (Section 623 BGB).',
      },
      {
        q: 'Will I get unemployment benefit after resigning?',
        a: 'Anyone who resigns or enters into a termination agreement without good cause risks a blocking period (Sperrzeit), usually twelve weeks (Section 159 SGB III).',
      },
      { q: 'Do you store my details?', a: 'No. The document is put together only in your browser.' },
    ],
    zakony:
      'The template is based on Sections 622, 623, 126, 629 and 630 of the German Civil Code (BGB) and Sections 38, 159 and 312 of Book III of the German Social Code (SGB III).',
    souvisejiciPopis: 'More notices of termination and letters, also free.',
  },
  vytvorit: {
    title: 'Fill in an employee notice of termination online – Germany, PDF',
    description: 'Resignation as an employee or offer of a termination agreement in Germany: bilingual PDF or Word for free, to print and sign.',
    podnadpis: 'Free · result as PDF and Word · print and sign by hand',
  },

  pruvodce: {
    slovo: { n: 'notice of termination', g: 'notice of termination', a: 'notice of termination', l: 'notice of termination' },
    kroky: {
      parteien: { nazev: 'You and your employer' },
      beendigung: { nazev: 'Termination' },
    },
    pole: {
      an_name: { popis: 'Your first name and surname', napoveda: 'As in the employment contract.', placeholder: 'e.g. Anna Schmidt' },
      an_adresse: { popis: 'Your address', napoveda: 'Current home address – the job reference and employment papers will be sent there.', placeholder: 'e.g. Lindenstraße 7, 10115 Berlin' },
      an_personalnr: { popis: 'Personnel number (optional)', napoveda: 'Shown on your payslip.', placeholder: 'e.g. 4711' },
      an_seit: { popis: 'Employed since', napoveda: 'Start of employment according to the employment contract.' },
      ag_name: { popis: 'Employer (company)', napoveda: 'Full name from the employment contract.', placeholder: 'e.g. Muster GmbH' },
      ag_zhd: {
        popis: 'For the attention of (optional)',
        napoveda: 'Management or the HR department – whoever is authorised to receive it.',
        placeholder: 'e.g. Geschäftsführung, Herrn Thomas Müller (management, Mr Thomas Müller)',
      },
      ag_adresse: { popis: 'Employer’s address', napoveda: 'Address from the employment contract or the legal notice on the website (Impressum).', placeholder: 'e.g. Industriestraße 5, 80331 München' },
      form: {
        popis: 'How do you want to end the employment?',
        napoveda: 'A notice of termination takes effect unilaterally. A termination agreement (Aufhebungsvertrag) is an agreement – your letter is then only the offer, and the employer must agree.',
        moznosti: {
          kuendigung: 'Ordinary notice of termination',
          aufhebung: 'Offer of a termination agreement (by mutual consent)',
        },
      },
      zeitpunkt: {
        popis: 'With effect from when?',
        napoveda: '“At the earliest possible date” is the safest. For a termination agreement, you state a preferred date.',
        moznosti: { naechst: 'At the earliest possible date', datum: 'On a specific date' },
      },
      ende_datum: {
        popis: 'Preferred end of employment',
        napoveda: 'For a notice of termination, the date must fit the notice period – otherwise the earliest possible date applies.',
      },
      antwort_bis: { popis: 'Reply requested by', napoveda: 'By when the employer should reply to the offer.' },
      bitten: {
        popis: 'What else are you asking for?',
        napoveda: 'You are entitled to a written job reference (Section 630 BGB). You need the employment certificate (Arbeitsbescheinigung) for the Federal Employment Agency (Agentur für Arbeit).',
        moznosti: {
          bestaetigung: 'Written confirmation of receipt and of the end date',
          zeugnis: 'Qualified job reference',
          zwischenzeugnis: 'Interim job reference until the end',
          urlaub: 'Information on remaining leave',
          bescheinigung: 'Employment certificate for the Federal Employment Agency',
        },
      },
      ort: { popis: 'Place', napoveda: 'We take it from your address.', placeholder: 'e.g. Berlin' },
      datum: { popis: 'Date', napoveda: 'Today’s date is pre-filled. The notice period runs from receipt by the employer.' },
    },
    vysvetleni: [
      'Who is giving notice.',
      'To the employer – ideally to the management or HR department.',
      'Notice of termination or offer of a termination agreement – with the date.',
    ],
    coDal: [
      'Print it out and sign it in your own hand with a ballpoint pen. Notice given by e-mail, fax, WhatsApp or with an electronic signature is invalid (Section 623 BGB).',
      'The original must reach the employer: ideally hand it over in person and have receipt confirmed on a copy, or send it by messenger with witnesses.',
      'Keep a copy for your records.',
      'No new job yet? Register as a jobseeker with the Federal Employment Agency (Agentur für Arbeit) in good time (Section 38 SGB III).',
    ],
    kontrola: [
      'VALID ONLY WITH A SIGNATURE ON PAPER: the notice of termination requires written form; electronic form is excluded ([Section 623 BGB](https://www.gesetze-im-internet.de/bgb/__623.html), [Section 126 BGB](https://www.gesetze-im-internet.de/bgb/__126.html)). E-mail, fax, a scan or a signature on screen are not enough.',
      'Statutory notice period for employees: four weeks to the 15th or to the end of a calendar month; during an agreed probation period (Probezeit, no more than six months), two weeks ([Section 622 BGB](https://www.gesetze-im-internet.de/bgb/__622.html)).',
      'The longer periods based on length of service (Section 622(2) BGB) apply only to termination by the employer – but they may also have been agreed for you in the employment contract. Collective agreements may differ. So check your employment contract and collective agreement; no longer period may apply to you than to the employer (Section 622(6) BGB).',
      'Unsure about the notice period? Give notice “at the earliest possible date” – the earliest permissible date then applies automatically.',
      'The notice period only starts when the employer receives the notice, not when it is sent.',
      'Resigning without good cause can lead to a blocking period (Sperrzeit) for unemployment benefit, usually twelve weeks ([Section 159 SGB III](https://www.gesetze-im-internet.de/sgb_3/__159.html)). This also applies to a termination agreement. If in doubt, get advice beforehand.',
      'A termination agreement only comes into existence when both sides sign it – also on paper (Section 623 BGB). Your letter is only the offer.',
      'Termination without notice for good cause is only possible within two weeks of learning of the reason ([Section 626 BGB](https://www.gesetze-im-internet.de/bgb/__626.html)) – this template is not intended for that; get advice.',
    ],
    podpisPoznamka:
      'Terminating an employment relationship is only valid with a handwritten signature on paper – electronic form is excluded (Section 623 BGB). E-mail, fax, a scan, a messenger or a signature on screen are not enough. Please print it out and sign it with a ballpoint pen.',
    pripominky: {
      'Arbeitsuchend melden (spätestens)': {
        nazev: 'Register as a jobseeker (deadline)',
        popis: 'With the Federal Employment Agency (Agentur für Arbeit): no later than three months before the end; if less time remains, within three days (Section 38 SGB III).',
      },
      'Letzter Arbeitstag (ca.)': {
        nazev: 'Last working day (approx.)',
        popis: 'A guide assuming receipt on the day of signing; the employment contract or a collective agreement may provide for longer notice periods.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of Employment',
    podnadpis: 'termination by the employee',
    podpisy: { vlevo: 'employee (handwritten signature)', vpravo: 'received on (date, employer’s signature)' },
    clanky: [
      {
        nadpis: 'Sender',
        odstavce: ['{{an_name}}, {{an_adresse}}, personnel number {{an_personalnr}}'],
      },
      {
        nadpis: 'To',
        odstavce: ['{{ag_name}}, for the attention of {{ag_zhd}}, {{ag_adresse}}'],
      },
      {
        nadpis: 'Termination of My Employment',
        odstavce: [
          {
            uvodVzor: 'Please tick:',
            moznosti: {
              kuendigung: 'I hereby give ordinary notice, in due time, of the termination of the employment relationship existing with you since {{an_seit}}.',
              aufhebung: 'I offer to end the employment relationship existing since {{an_seit}} by mutual consent through a written termination agreement with effect from {{ende_datum}}. Please let me know by {{antwort_bis}} whether you agree; we will then both sign the termination agreement.',
            },
          },
          {
            uvodVzor: 'In the case of notice – effective date (please tick):',
            moznosti: {
              naechst: 'The notice takes effect at the earliest possible date.',
              datum: 'The notice takes effect on {{ende_datum}}, or alternatively at the earliest possible date.',
            },
          },
          {
            uvod: 'I ask you for:',
            moznosti: {
              bestaetigung: 'written confirmation of receipt of this letter and of the end date',
              zeugnis: 'a qualified job reference covering performance and conduct',
              zwischenzeugnis: 'an interim job reference until the end of employment',
              urlaub: 'information on how my remaining leave will be granted until the end of employment',
              bescheinigung: 'the issue of the employment certificate (Arbeitsbescheinigung) for the Federal Employment Agency (Agentur für Arbeit)',
            },
          },
          'Thank you for our cooperation.',
          'Yours sincerely',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

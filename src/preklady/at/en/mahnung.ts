/**
 * English version: payment reminder (Austria). Original: src/obsah/at/mahnung.ts
 * and src/sablony/at/mahnung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-MAHNUNG', verze: '1.0' },

  nazev: 'Payment Reminder',
  nazevA: 'the payment reminder',
  katalog: {
    popis: 'Demand for payment with a deadline, also as a final reminder.',
    slova: ['payment reminder', 'payment demand', 'unpaid invoice', 'debt', 'late payment', 'default interest', 'final reminder', 'dunning letter', 'Mahnung', 'Zahlungserinnerung', 'letzte Mahnung', 'Verzugszinsen'],
  },
  landing: {
    title: 'Payment Reminder Austria {rok} – free PDF template',
    description:
      'Payment reminder under Austrian law, explained in English: amount due, deadline, statutory default interest. Download a bilingual PDF or Word for free.',
    perex: 'When an invoice or a loan is not paid: with a payment reminder (Mahnung) you set a final deadline before you go to court.',
    obsahPopis: 'A short letter in two parts.',
    obsah: [
      { nazev: 'Sender and recipient', popis: 'Creditor and debtor.' },
      { nazev: 'Demand for payment', popis: 'Amount, due date, deadline, account, default interest; first or final reminder.' },
    ],
    kroky: [
      { nazev: 'Enter the claim', popis: 'Invoice, amount, due date.' },
      { nazev: 'Set a deadline', popis: '7–14 days is usual.' },
      { nazev: 'Send it with proof', popis: 'Registered letter with acknowledgement of receipt, or by messenger.' },
    ],
    online: [
      'Amount in words (in German) added automatically',
      'Interest rate depending on consumer or business',
      'Deadline in your calendar',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'a customer does not pay an invoice',
      'a private loan is not repaid',
      'a final warning before the court order-for-payment procedure (Mahnverfahren)',
    ],
    nehodiSe: [
      'the debtor is insolvent – file the claim in the insolvency proceedings',
      'the claim is disputed or large – get advice from a lawyer',
    ],
    po: [
      { nazev: 'Wait for the deadline', popis: 'Reminder in your calendar.' },
      { nazev: 'Court action', popis: 'At the competent district court (Bezirksgericht); for money claims usually as an order-for-payment procedure (Mahnverfahren).' },
      { nazev: 'Instalments?', popis: 'If the debtor is willing to pay, draw up an acknowledgement of debt (Schuldanerkenntnis).' },
    ],
    faq: [
      { q: 'How high is default interest in Austria?', a: 'Statutory default interest is 4% per year (Section 1333(1) in conjunction with Section 1000(1) ABGB). For transactions between businesses, higher interest applies under Section 456 UGB.' },
      { q: 'How many reminders do I have to send?', a: 'The law does not require a particular number. One clear reminder with a deadline is usually enough.' },
      { q: 'Do you store my details?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony:
      'The template is based on Sections 1333 and 1000 of the Austrian General Civil Code (ABGB) and Section 456 of the Austrian Commercial Code (Unternehmensgesetzbuch, UGB).',
    souvisejiciPopis: 'More templates about money, also free.',
  },
  vytvorit: {
    title: 'Fill in a payment reminder online – Austria, free PDF',
    description: 'Guide in English: payment reminder in Austria with a deadline and default interest. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'payment reminder', g: 'payment reminder', a: 'payment reminder', l: 'payment reminder' },
    kroky: {
      parteien: { nazev: 'Creditor and debtor' },
      forderung: { nazev: 'Claim' },
      zahlung: { nazev: 'Deadline and payment' },
    },
    pole: {
      k_name: { popis: 'Creditor – name or company', placeholder: 'e.g. Max Mustermann' },
      k_adresse: { popis: 'Creditor’s address', placeholder: 'e.g. Mariahilfer Straße 10, 1060 Wien' },
      k_kontakt: { popis: 'Telephone or e-mail (optional)' },
      p_name: { popis: 'Debtor – name or company', placeholder: 'e.g. Erika Musterfrau' },
      p_adresse: { popis: 'Debtor’s address', placeholder: 'e.g. Hauptplatz 1, 8010 Graz' },
      p_typ: {
        popis: 'Who is involved?',
        napoveda: 'The interest rate depends on this (Section 1333 ABGB, Section 456 UGB).',
        moznosti: { verbraucher: 'At least one party is a private individual', b2b: 'Both parties are businesses / self-employed' },
      },
      betrag: { popis: 'Amount outstanding (€)', placeholder: 'e.g. 850' },
      faellig: { popis: 'Due since' },
      grund: {
        popis: 'Basis of the claim',
        napoveda: 'Invoice or contract with number and date.',
        placeholder: 'e.g. Rechnung Nr. 2026-041 vom 1. 10. 2026 (invoice No. 2026-041 of 1 Oct 2026)',
      },
      stufe: {
        popis: 'Which reminder?',
        moznosti: { erste: 'First reminder', letzte: 'Final reminder before legal action' },
      },
      zinsen: {
        popis: 'Claim default interest?',
        moznosti: { ja: 'Yes, statutory default interest', nein: 'No' },
      },
      zahlen_bis: { popis: 'Pay no later than', napoveda: '7–14 days is usual.' },
      iban: { popis: 'IBAN', placeholder: 'AT12 3456 7890 1234 5678' },
      verwendung: { popis: 'Payment reference', placeholder: 'e.g. Rechnung 2026-041 (invoice 2026-041)' },
      misto: { popis: 'Place', placeholder: 'e.g. Wien' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is outstanding, since when, and by when it should be paid.'],
    coDal: [
      'Sign it and send it so that you can prove receipt – ideally by registered letter (RSb/RSa).',
      'Keep a copy and the postal receipt (Aufgabeschein).',
      'If the other party does not pay, you can sue at the competent court; for money claims this usually runs as an order-for-payment procedure (Mahnverfahren).',
    ],
    kontrola: [
      'Only send a reminder once payment is due. If a fixed payment date was agreed, the debtor is in default even without a reminder.',
      'Statutory default interest: 4% per year (Section 1333(1) in conjunction with Section 1000(1) ABGB); for transactions between businesses, higher interest under Section 456 of the Commercial Code (UGB) ([European e-Justice Portal](https://e-justice.europa.eu/topics/taking-legal-action/where-and-how/interest-rates/at_de)).',
      'Identify the claim precisely: invoice number or contract, date, amount.',
      'Make receipt provable (registered letter) – in a dispute you have to prove it.',
      'Only threaten legally permissible steps (court action) – no public shaming or other pressure.',
    ],
    pripominky: {
      'Zahlungsfrist aus der Mahnung endet': {
        nazev: 'Payment deadline from the reminder ends',
        popis: 'Check whether the payment has arrived. After that, if necessary, an action at the district court (Bezirksgericht) for an order for payment (Mahnklage).',
      },
    },
  },

  dokument: {
    nazev: 'Payment Reminder',
    podnadpis: 'Demand for payment under the Austrian General Civil Code (Allgemeines bürgerliches Gesetzbuch, ABGB)',
    podpisy: { vlevo: 'creditor', vpravo: 'received (if handed over in person)' },
    clanky: [
      {
        nadpis: 'Sender and Recipient',
        odstavce: [
          '**Creditor:** {{k_name}}, {{k_adresse}}, contact {{k_kontakt}}',
          '**Debtor:** {{p_name}}, {{p_adresse}}',
        ],
      },
      {
        nadpis: 'Demand for Payment',
        odstavce: [
          {
            uvodVzor: 'Subject (please tick one):',
            moznosti: {
              erste: '**Subject: Payment reminder – {{grund}}**',
              letzte: '**Subject: Final reminder before legal action – {{grund}}**',
            },
          },
          'Dear Sir or Madam,',
          'Under {{grund}}, an amount of {{betrag}} has been due since {{faellig}}. No payment has been received so far.',
          'I request that you transfer the outstanding amount no later than {{zahlen_bis}} to the following account: IBAN {{iban}}, payment reference {{verwendung}}.',
          {
            uvodVzor: 'Default interest (please tick one):',
            moznosti: {
              ja: 'Upon receipt of this reminder you are in default, unless default has already occurred. I reserve the right to claim statutory default interest (Section 1333 ABGB) and further damage caused by the default.',
              nein: 'If payment is made on time, I waive the claim to default interest.',
            },
          },
          {
            uvodVzor: 'Interest rate (please tick one):',
            moznosti: {
              verbraucher: 'Statutory default interest is 4% per year (Section 1333(1) in conjunction with Section 1000(1) ABGB).',
              b2b: 'Statutory default interest for business transactions under Section 456 UGB applies.',
            },
          },
          {
            uvodVzor: 'Consequences (please tick one):',
            moznosti: {
              erste: 'If you have already arranged payment, please disregard this letter.',
              letzte: 'If payment is not received on time, I will bring an action at the competent court without further notice. You would have to bear the resulting costs.',
            },
          },
          'Yours faithfully',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

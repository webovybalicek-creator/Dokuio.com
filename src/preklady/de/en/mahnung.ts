/**
 * English version: payment reminder (Germany). Original: src/obsah/de/mahnung.ts
 * and src/sablony/de/mahnung.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-MAHNUNG', verze: '1.0' },

  nazev: 'Payment Reminder',
  nazevA: 'the payment reminder',
  katalog: {
    popis: 'Payment demand with a deadline, also as a final reminder.',
    slova: ['payment reminder', 'payment demand', 'final reminder', 'unpaid invoice', 'overdue payment', 'default interest', 'debt collection letter', 'Mahnung', 'Zahlungserinnerung', 'letzte Mahnung', 'Verzug', 'Verzugszinsen'],
  },
  landing: {
    title: 'Payment Reminder Germany {rok} – free PDF template',
    description:
      'Payment reminder under German law, explained in English: amount, deadline, default interest and the €40 lump sum. Bilingual PDF or Word, free.',
    perex: 'When an invoice or a loan is not paid: a payment reminder (Mahnung) puts the debtor in default (Verzug) and is the last step before a court payment order (Mahnbescheid) or a lawsuit.',
    obsahPopis: 'A short letter in two parts.',
    obsah: [
      { nazev: 'Sender and recipient', popis: 'Creditor and debtor.' },
      { nazev: 'Payment demand', popis: 'Amount, due date, deadline, account, default interest; first or final reminder.' },
    ],
    kroky: [
      { nazev: 'Enter the claim', popis: 'Invoice, amount, due date.' },
      { nazev: 'Set a deadline', popis: '7–14 days is customary.' },
      { nazev: 'Send it with proof', popis: 'Registered mail with return receipt, or by messenger.' },
    ],
    online: ['Amount in words (in German) added automatically', 'Interest rate depending on consumer or business', 'Deadline in your calendar', 'Download as PDF and Word'],
    hodiSe: ['a customer does not pay an invoice', 'a private loan is not repaid', 'final warning before the court dunning procedure'],
    nehodiSe: [
      'the debtor is insolvent – register the claim in the insolvency schedule of claims (Insolvenztabelle)',
      'the claim is disputed or large – get advice from a lawyer',
    ],
    po: [
      { nazev: 'Wait for the deadline', popis: 'Reminder in your calendar.' },
      { nazev: 'Payment order (Mahnbescheid)', popis: 'Online through the court dunning procedure (gerichtliches Mahnverfahren).' },
      { nazev: 'Instalments?', popis: 'If the debtor is willing to pay, draw up an acknowledgement of debt (Schuldanerkenntnis).' },
    ],
    faq: [
      { q: 'Is a payment reminder compulsory?', a: 'Not always. If a fixed calendar date was agreed, default occurs without a reminder. For money claims, at the latest 30 days after the due date and receipt of the invoice – for consumers only if the invoice pointed this out (Section 286 of the German Civil Code, BGB).' },
      { q: 'How high is default interest?', a: 'Five percentage points above the base rate (Basiszinssatz); if no consumers are involved, nine percentage points. Against businesses, an additional lump sum of €40 (Section 288 BGB).' },
      { q: 'How many reminders do I have to send?', a: 'Legally, one is enough. Several reminder stages are common but not required.' },
      { q: 'Do you store my details?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'The template is based on Sections 286 and 288 of the German Civil Code (Bürgerliches Gesetzbuch, BGB).',
    souvisejiciPopis: 'More templates about money, also free.',
  },
  vytvorit: {
    title: 'Fill in a payment reminder online – Germany, free PDF',
    description: 'Guide in English for a payment reminder in Germany with a deadline and default interest. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
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
      k_adresse: { popis: 'Creditor’s address', placeholder: 'e.g. Lindenstraße 5, 10115 Berlin' },
      k_kontakt: { popis: 'Phone or e-mail (optional)' },
      p_name: { popis: 'Debtor – name or company', placeholder: 'e.g. Erika Musterfrau' },
      p_adresse: { popis: 'Debtor’s address', placeholder: 'e.g. Hauptstraße 1, 80331 München' },
      p_typ: {
        popis: 'Who is involved?',
        napoveda: 'The interest rate and the €40 lump sum depend on this (Section 288 BGB).',
        moznosti: { verbraucher: 'At least one party is a private individual', b2b: 'Both parties are businesses / self-employed' },
      },
      betrag: { popis: 'Outstanding amount (€)', placeholder: 'e.g. 850' },
      faellig: { popis: 'Due since' },
      grund: { popis: 'Reason for the claim', napoveda: 'Invoice or contract with number and date.', placeholder: 'e.g. Rechnung Nr. 2026-041 vom 1. 10. 2026 (invoice no. 2026-041 of 1 October 2026)' },
      stufe: {
        popis: 'Which reminder?',
        moznosti: { erste: 'First reminder', letzte: 'Final reminder before legal action' },
      },
      zinsen: {
        popis: 'Claim default interest?',
        moznosti: { ja: 'Yes, statutory default interest', nein: 'No' },
      },
      zahlen_bis: { popis: 'Payment by no later than', napoveda: '7–14 days is customary.' },
      iban: { popis: 'IBAN', placeholder: 'DE12 3456 7890 1234 5678 90' },
      verwendung: { popis: 'Payment reference', placeholder: 'e.g. Rechnung 2026-041' },
      misto: { popis: 'Place', placeholder: 'e.g. Berlin' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is outstanding, since when, and by when it should be paid.'],
    coDal: [
      'Sign it and send it in a way that lets you prove receipt – ideally by registered mail with return receipt (Einschreiben mit Rückschein) or by messenger.',
      'Keep a copy and the posting receipt.',
      'If the other party does not pay, you can apply for the court dunning procedure (gerichtliches Mahnverfahren) or file a lawsuit.',
    ],
    kontrola: [
      'A payment reminder only takes effect once the claim is due ([Section 286(1) BGB](https://www.gesetze-im-internet.de/bgb/__286.html)). If a fixed calendar date was agreed, the debtor is in default even without a reminder.',
      'For money claims, default occurs at the latest 30 days after the due date and receipt of the invoice – against consumers only if the invoice pointed this out.',
      'Default interest: 5 percentage points above the base rate, 9 percentage points if no consumer is involved; against non-consumers an additional lump sum of €40 ([Section 288 BGB](https://www.gesetze-im-internet.de/bgb/__288.html)).',
      'Describe the claim precisely: invoice number or contract, date, amount.',
      'Make sure you can prove receipt (registered mail with return receipt, messenger) – in a dispute you must prove it.',
      'Only threaten legally permissible steps (dunning procedure, lawsuit) – no public shaming or other pressure.',
    ],
    pripominky: {
      'Zahlungsfrist aus der Mahnung endet': {
        nazev: 'Payment deadline from the reminder ends',
        popis: 'Check whether payment has arrived. After that, if necessary, the court dunning procedure (online-mahnantrag.de) or a lawsuit.',
      },
    },
  },

  dokument: {
    nazev: 'Payment Reminder',
    podnadpis: 'Payment demand under Sections 286 and 288 of the German Civil Code (Bürgerliches Gesetzbuch, BGB)',
    podpisy: { vlevo: 'creditor', vpravo: 'received (if delivered in person)' },
    clanky: [
      {
        nadpis: 'Sender and Recipient',
        odstavce: ['**Creditor:** {{k_name}}, {{k_adresse}}, contact {{k_kontakt}}', '**Debtor:** {{p_name}}, {{p_adresse}}'],
      },
      {
        nadpis: 'Payment Demand',
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
          'I request you to transfer the outstanding amount by {{zahlen_bis}} at the latest to the following account: IBAN {{iban}}, payment reference {{verwendung}}.',
          {
            uvodVzor: 'Default interest (please tick one):',
            moznosti: {
              ja: 'Upon receipt of this reminder you are in default, unless default has already occurred. I reserve the right to claim default interest at the statutory rate (Section 288 BGB) and further damage caused by the default.',
              nein: 'If payment is made in time, I waive the claim to default interest.',
            },
          },
          {
            uvodVzor: 'Interest rate (please tick one):',
            moznosti: {
              verbraucher: 'The default interest rate is five percentage points per year above the base rate (Section 288(1) BGB).',
              b2b: 'The default interest rate is nine percentage points per year above the base rate (Section 288(2) BGB). In addition, I claim the lump sum of €40 under Section 288(5) BGB.',
            },
          },
          {
            uvodVzor: 'Consequences (please tick one):',
            moznosti: {
              erste: 'If you have already arranged payment, please disregard this letter.',
              letzte: 'If payment is not received in time, I will initiate the court dunning procedure or file a lawsuit without further notice. You would have to bear the resulting costs.',
            },
          },
          'Yours faithfully',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

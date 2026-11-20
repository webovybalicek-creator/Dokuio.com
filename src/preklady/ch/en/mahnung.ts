/**
 * English version: payment reminder (Switzerland).
 * Original: src/obsah/ch/mahnung.ts (based on src/obsah/de/mahnung.ts) and src/sablony/ch/mahnung.ts.
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-MAHNUNG', verze: '1.0' },

  nazev: 'Payment Reminder',
  nazevA: 'the payment reminder',
  katalog: {
    popis: 'Demand for payment with a deadline, also as a final reminder.',
    slova: ['payment reminder', 'payment demand', 'final reminder', 'overdue invoice', 'unpaid invoice', 'default interest', 'debt collection', 'Mahnung', 'Zahlungserinnerung', 'letzte Mahnung', 'Betreibung'],
  },
  landing: {
    title: 'Payment Reminder Switzerland {rok} – free PDF template',
    description:
      'Payment reminder under Art. 102 and 104 OR: outstanding amount in CHF, deadline and 5% default interest. Fill it in online, bilingual PDF or Word, free.',
    perex: 'If an invoice or a loan is not paid: the payment reminder (Mahnung) puts the debtor in default and is the last step before debt enforcement (Betreibung).',
    obsahPopis: 'A short letter in two parts.',
    obsah: [
      { nazev: 'Sender and recipient', popis: 'Creditor and debtor.' },
      { nazev: 'Demand for payment', popis: 'Amount, due date, deadline, account, 5% default interest; first or final reminder.' },
    ],
    kroky: [
      { nazev: 'Enter the claim', popis: 'Invoice, amount, due date.' },
      { nazev: 'Set a deadline', popis: '7–14 days is customary.' },
      { nazev: 'Send it with proof', popis: 'Registered post with advice of delivery, or by courier.' },
    ],
    online: ['Amount in words (in francs) added automatically', 'Deadline in your calendar', 'Explanations for every field', 'Download as PDF and Word'],
    hodiSe: ['a customer does not pay an invoice', 'a private loan is not repaid', 'final warning before debt enforcement'],
    nehodiSe: [
      'the debtor is bankrupt – file the claim with the bankruptcy office (Konkursamt)',
      'the claim is disputed or large – get advice from a lawyer',
    ],
    po: [
      { nazev: 'Wait for the deadline', popis: 'Reminder in your calendar.' },
      { nazev: 'Debt enforcement', popis: 'Request for debt enforcement (Betreibungsbegehren) at the debt enforcement office (Betreibungsamt) at the debtor’s place of residence.' },
      { nazev: 'Instalments?', popis: 'If the debtor is willing to pay, draw up an acknowledgement of debt (Schuldanerkennung).' },
    ],
    faq: [
      { q: 'Is a payment reminder necessary?', a: 'Yes, if no specific payment date was agreed: only a reminder after the due date puts the debtor in default (Art. 102 OR).' },
      { q: 'How high is default interest?', a: '5% per year, even if a lower rate was agreed in the contract (Art. 104 OR).' },
      { q: 'Do you store my data?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'The template is based on Art. 102 and 104 of the Swiss Code of Obligations (Obligationenrecht, OR).',
    souvisejiciPopis: 'More templates on money matters, also free.',
  },
  vytvorit: {
    title: 'Payment Reminder (Switzerland) online – free PDF',
    description: 'Create a payment reminder with a deadline and default interest online, explained in English. Bilingual PDF or Word, free.',
    podnadpis: 'Free · PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'reminder', g: 'reminder', a: 'reminder', l: 'reminder' },
    kroky: {
      parteien: { nazev: 'Creditor and debtor' },
      forderung: { nazev: 'Claim' },
      zahlung: { nazev: 'Deadline and payment' },
    },
    pole: {
      k_name: { popis: 'Creditor – name or company', placeholder: 'e.g. Max Mustermann' },
      k_adresse: { popis: 'Creditor’s address', placeholder: 'e.g. Bahnhofstrasse 10, 8001 Zürich' },
      k_kontakt: { popis: 'Phone or e-mail (optional)' },
      p_name: { popis: 'Debtor – name or company', placeholder: 'e.g. Erika Musterfrau' },
      p_adresse: { popis: 'Debtor’s address', placeholder: 'e.g. Marktgasse 1, 3011 Bern' },
      betrag: { popis: 'Outstanding amount (CHF)', placeholder: 'e.g. 850' },
      faellig: { popis: 'Due since' },
      grund: { popis: 'Basis of the claim', napoveda: 'Invoice or contract with number and date.', placeholder: 'e.g. Rechnung Nr. 2026-041 vom 1. 10. 2026 (invoice No. … of …)' },
      stufe: { popis: 'Which reminder?', moznosti: { erste: 'First reminder', letzte: 'Final reminder before legal action' } },
      zinsen: { popis: 'Claim default interest?', moznosti: { ja: 'Yes, statutory default interest', nein: 'No' } },
      zahlen_bis: { popis: 'Pay by', napoveda: '7–14 days is customary.' },
      iban: { popis: 'IBAN', placeholder: 'CH12 3456 7890 1234 5678 9' },
      verwendung: { popis: 'Payment reference', placeholder: 'e.g. Rechnung 2026-041' },
      misto: { popis: 'Place', placeholder: 'e.g. Zürich' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is outstanding, since when, and by when it must be paid.'],
    coDal: [
      'Sign and send by registered post (Einschreiben) – that way you can prove delivery.',
      'Keep a copy and the post office receipt.',
      'If the other party does not pay, you can start debt enforcement (Betreibung) at the debt enforcement office (Betreibungsamt) at the debtor’s place of residence.',
    ],
    kontrola: [
      'The reminder puts the debtor in default only after the due date ([Art. 102 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_102)). If a specific payment date was agreed, default occurs without a reminder.',
      'Default interest on money debts: 5% per year, even if a lower contractual rate was agreed ([Art. 104 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_104)).',
      'Identify the claim precisely: invoice number or contract, date, amount.',
      'Send by registered post – in a dispute you must prove delivery.',
      'Only threaten legally permissible steps (debt enforcement) – no public shaming or other pressure.',
    ],
    pripominky: {
      'Zahlungsfrist aus der Mahnung endet': {
        nazev: 'Payment deadline from the reminder ends',
        popis: 'Check whether payment has arrived. If not, consider a request for debt enforcement at the debt enforcement office (Betreibungsamt).',
      },
    },
  },

  dokument: {
    nazev: 'Payment Reminder',
    podnadpis: 'Demand for payment under Art. 102 and 104 of the Swiss Code of Obligations (OR)',
    podpisy: { vlevo: 'Creditor', vpravo: 'received (if delivered in person)' },
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
          'Under {{grund}}, an amount of {{betrag}} has been due since {{faellig}}. So far, no payment has been received.',
          'I request that you transfer the outstanding amount by {{zahlen_bis}} at the latest to the following account: IBAN {{iban}}, payment reference {{verwendung}}.',
          {
            uvodVzor: 'Default interest (please tick one):',
            moznosti: {
              ja: 'With this reminder you are in default, unless default has already occurred. I claim the statutory default interest of 5% per year (Art. 104 OR).',
              nein: 'If payment is made on time, I waive any claim to default interest.',
            },
          },
          {
            uvodVzor: 'Consequences (please tick one):',
            moznosti: {
              erste: 'If you have already arranged payment, please disregard this letter.',
              letzte: 'If payment is not received on time, I will initiate debt enforcement (Betreibung) without further notice. You would bear the resulting costs.',
            },
          },
          'Yours faithfully',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

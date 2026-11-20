/**
 * English version: complaint about faulty goods (Poland). Original: src/obsah/pl/reklamacja.ts
 * and src/sablony/pl/reklamacja.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-REKLAMACJA', verze: '1.0' },

  nazev: 'Complaint about Faulty Goods',
  nazevA: 'the complaint about faulty goods',
  katalog: {
    popis: 'Complaint to the seller about faulty goods.',
    slova: ['complaint', 'faulty goods', 'defective product', 'return', 'repair', 'replacement', 'refund', 'lack of conformity', 'statutory warranty', 'reklamacja', 'rękojmia', 'niezgodność z umową'],
  },
  landing: {
    title: 'Complaint about Faulty Goods Poland {rok} – free PDF template',
    description:
      'Complaint letter for Poland in English: goods not in conformity with the contract, demand for repair, replacement, price reduction or refund. Free bilingual PDF or Word.',
    perex: 'Are the goods faulty? Make a complaint in writing – with a description of the defect and your demand.',
    obsahPopis: 'Complaint (reklamacja) with a demand.',
    obsah: [
      { nazev: 'Seller', popis: 'Where you are complaining.' },
      { nazev: 'Defect', popis: 'What does not work.' },
      { nazev: 'Demand', popis: 'Repair, replacement, price reduction or refund.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Describe the defect specifically.' },
      { nazev: 'Submit it', popis: 'In the shop or by e-mail.' },
      { nazev: 'Wait', popis: 'Reply within 14 days.' },
    ],
    online: [
      'Filling in with an explanation of every field',
      'Signature on screen',
      'Download as PDF and Word or send by e-mail',
      'Reply deadline in your calendar',
    ],
    hodiSe: [
      'Faulty goods from a shop or bought online',
    ],
    nehodiSe: [
      'A purchase from a private individual',
      'A manufacturer’s guarantee – under its own terms',
    ],
    po: [
      { nazev: 'No reply', popis: 'After 14 days the complaint is deemed justified.' },
    ],
    faq: [
      { q: 'How long can I make a complaint?', a: 'The seller is liable for a lack of conformity that becomes apparent within 2 years of delivery of the goods.' },
      { q: 'How much time does the seller have?', a: '14 days to reply; no reply means the complaint has been accepted.' },
      { q: 'Do you store my details?', a: 'No. The document is created only in your browser.' },
    ],
    zakony: 'The template is based on Articles 7a and 43a–43g of the Consumer Rights Act (ustawa o prawach konsumenta).',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Complaint about faulty goods online – Poland, free PDF',
    description: 'Complaint letter with a demand under Polish law: guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'complaint', g: 'complaint', a: 'complaint', l: 'complaint' },
    kroky: {
      sklep: { nazev: 'Seller' },
      towar: { nazev: 'Goods and defect' },
      zadanie: { nazev: 'What you demand' },
    },
    pole: {
      pr_nazev: { popis: 'Seller (company name)' },
      pr_ico: { popis: 'NIP – tax identification number (optional)' },
      pr_adresa: { popis: 'Address of the shop or for complaints' },
      zbozi: { popis: 'Goods complained about', placeholder: 'e.g. pralka Bosch WAN28264, nr seryjny FD9803 (washing machine, serial number)' },
      doklad: { popis: 'Receipt, invoice or order number' },
      koupeno: { popis: 'Date of purchase / delivery' },
      vada: { popis: 'Description of the defect (ideally in Polish)' },
      projevila: { popis: 'Date the defect was discovered' },
      pozadavek: {
        popis: 'Demand',
        moznosti: { oprava: 'Repair', vymena: 'Replacement with a new one', sleva: 'Price reduction', odstoupeni: 'Withdrawal from the contract and a refund' },
      },
      p_jmeno: { popis: 'First name and surname' },
      p_adresa: { popis: 'Address' },
      p_kontakt: { popis: 'E-mail or phone' },
      ucet: { popis: 'Account number (for a refund)' },
      misto: { popis: 'Town' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is not in conformity with the contract and what you demand.', ''],
    coDal: [
      'Submit the complaint in the shop or send it by e-mail or post – keep the confirmation.',
      'The seller has 14 days to reply; if they do not reply, the complaint is deemed accepted.',
      'A problem? Help is available from the municipal or district consumer ombudsman (rzecznik konsumentów).',
    ],
    kontrola: [
      'The seller is liable for a lack of conformity of the goods with the contract (niezgodność towaru z umową) that becomes apparent within 2 years of delivery of the goods.',
      'First you can demand repair or replacement; a price reduction or withdrawal from the contract – when repair and replacement are impossible or have failed, or the lack of conformity is significant.',
      'Reply within 14 days: no reply means the seller has accepted the demand (Article 7a of the Consumer Rights Act – ustawa o prawach konsumenta).',
      'Describe the defect specifically and take photos. Keep the proof of purchase (receipt, invoice, bank statement).',
      'A manufacturer’s guarantee is a separate, voluntary right – it does not replace the seller’s liability.',
    ],
    pripominky: {
      'Sprzedawca musi odpowiedzieć na reklamację': {
        nazev: 'The seller must reply to the complaint',
        popis: 'No reply within 14 days means the complaint is accepted (Article 7a of the Consumer Rights Act).',
      },
    },
  },

  dokument: {
    nazev: 'Complaint',
    podnadpis: 'lack of conformity of goods with the contract (Article 43a et seq. of the Consumer Rights Act – ustawa o prawach konsumenta)',
    podpisy: { vlevo: 'consumer', vpravo: 'received on behalf of the seller (date and signature)' },
    clanky: [
      { nadpis: 'Seller', odstavce: ['{{pr_nazev}}, NIP {{pr_ico}}, {{pr_adresa}}'] },
      {
        nadpis: 'Complaint',
        odstavce: [
          'I hereby notify a lack of conformity with the contract of the following goods: {{zbozi}}, proof of purchase No. {{doklad}}, purchased / delivered on {{koupeno}}.',
          'Description of the lack of conformity: {{vada}}',
          'I discovered the lack of conformity on {{projevila}}.',
          {
            uvod: 'Under the Consumer Rights Act I demand',
            uvodVzor: 'Under the Consumer Rights Act I demand (tick):',
            moznosti: {
              oprava: 'repair of the goods.',
              vymena: 'replacement of the goods with goods free from defects.',
              sleva: 'a price reduction and refund of the difference to account No. {{ucet}}.',
              odstoupeni: 'withdrawal from the contract and a refund of the price to account No. {{ucet}}.',
            },
          },
          'I request a reply to this complaint within 14 days.',
        ],
      },
      { nadpis: 'Consumer', odstavce: ['{{p_jmeno}}, {{p_adresa}}, contact: {{p_kontakt}}'] },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: complaint about defective goods (Slovakia). Original: src/obsah/sk/reklamacia.ts
 * and src/sablony/sk/reklamacia.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-REKLAMACIA', verze: '1.0' },

  nazev: 'Complaint About Defective Goods',
  nazevA: 'the complaint about defective goods',
  katalog: {
    popis: 'Complaint to the seller about faulty goods.',
    slova: ['complaint', 'faulty goods', 'defect', 'warranty claim', 'guarantee', 'repair', 'replacement', 'refund', 'reklamácia', 'reklamačný list'],
  },
  landing: {
    title: 'Complaint About Defective Goods Slovakia {rok} – free PDF template',
    description:
      'Complaint about defective goods in Slovakia, explained in English: describe the defect, ask for repair, replacement, discount or refund. Bilingual PDF or Word, free.',
    perex: 'Are the goods faulty? Make your complaint in writing – with an exact description of the defect and what you are asking for.',
    obsahPopis: 'A complaint about defects (reklamácia) stating how you want it resolved.',
    obsah: [
      { nazev: 'Seller', popis: 'Where you are complaining.' },
      { nazev: 'Defect', popis: 'What does not work.' },
      { nazev: 'Request', popis: 'Repair, replacement, discount or refund.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Describe the defect specifically.' },
      { nazev: 'Hand it in', popis: 'Together with the goods and the receipt.' },
      { nazev: 'Wait', popis: 'As a rule, no more than 30 days.' },
    ],
    online: [
      'Every field explained as you fill it in',
      'Signature on screen',
      'Download as PDF and Word, or send it by e-mail',
      'Deadline reminder in your calendar',
    ],
    hodiSe: ['Faulty goods from a shop or online shop'],
    nehodiSe: [
      'A purchase from a private individual',
      'A manufacturer’s guarantee beyond the statutory one – follow its terms',
    ],
    po: [
      { nazev: 'Confirmation', popis: 'Ask for a confirmation that the complaint has been lodged.' },
    ],
    faq: [
      { q: 'How long can I make a complaint?', a: '24 months from receiving the goods; for used goods the period may be 12 months.' },
      { q: 'By when must the seller deal with the complaint?', a: 'As a rule, within 30 days at the latest.' },
      { q: 'Do you store my details?', a: 'No. The document is created only in your browser.' },
    ],
    zakony: 'The template is based on Section 619 et seq. of the Civil Code (Občiansky zákonník) and Act No. 108/2024 Coll. (on consumer protection).',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Complaint about defective goods online – Slovakia, free PDF',
    description: 'Complaint about defective goods for Slovakia, stating how you want it resolved. Guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'complaint', g: 'complaint', a: 'complaint', l: 'complaint' },
    kroky: {
      obchod: { nazev: 'Seller' },
      tovar: { nazev: 'Goods and defect' },
      poziadavka: { nazev: 'What you are asking for' },
    },
    pole: {
      pr_nazev: { popis: 'Seller (business name)' },
      pr_ico: { popis: 'Company ID – IČO (optional)' },
      pr_adresa: { popis: 'Address of the shop or address for complaints' },
      zbozi: { popis: 'Goods you are complaining about', placeholder: 'e.g. práčka Bosch WAN28264, výr. č. FD9803 (washing machine Bosch WAN28264, serial No. FD9803)' },
      doklad: { popis: 'Receipt or order number' },
      koupeno: { popis: 'Date of purchase / receipt of goods' },
      vada: { popis: 'Description of the defect', placeholder: 'e.g. pri odstreďovaní sa zastaví s chybou E18 (stops with error E18 during the spin cycle)' },
      projevila: { popis: 'When the defect appeared' },
      pozadavek: {
        popis: 'How you want it resolved',
        moznosti: {
          oprava: 'Repair',
          vymena: 'Replacement with a new item',
          zlava: 'Reasonable discount',
          odstupenie: 'Withdrawal from the contract (odstúpenie od zmluvy) and refund',
        },
      },
      p_jmeno: { popis: 'Your first name and surname' },
      p_adresa: { popis: 'Your address' },
      p_kontakt: { popis: 'E-mail or phone' },
      ucet: { popis: 'IBAN (for a discount or refund)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date of the complaint' },
    },
    vysvetleni: ['', 'What is faulty and what you are asking for.', ''],
    coDal: [
      'Hand in the complaint with the goods and proof of purchase at the shop, or send it to the online shop in line with its complaints procedure.',
      'Ask for a confirmation that the complaint has been lodged – you are entitled to it.',
      'If the seller does not resolve the complaint in time, you may withdraw from the contract or ask for a replacement. The Slovak Trade Inspection (Slovenská obchodná inšpekcia) can help.',
    ],
    kontrola: [
      'You can claim defects within 24 months of receiving the goods (for used goods the period may be shortened to 12 months).',
      'The complaint must be resolved without undue delay, as a rule within 30 days of it being lodged at the latest.',
      'Describe the defect specifically and photograph it. Keep the proof of purchase (a bank statement or order confirmation is also enough).',
      'A statutory complaint applies when buying from a business. Between private individuals, the purchase agreement applies.',
    ],
    pripominky: {
      'Predávajúci má vybaviť reklamáciu (orientačne)': {
        nazev: 'The seller should resolve the complaint (approximate date)',
        popis: 'As a rule, within 30 days of the complaint being lodged at the latest.',
      },
    },
  },

  dokument: {
    nazev: 'Complaint About Defective Goods',
    podnadpis: 'exercise of rights arising from liability for defects under Section 619 et seq. of Act No. 40/1964 Coll., the Civil Code',
    podpisy: { vlevo: 'buyer', vpravo: 'received on behalf of the seller (date and signature)' },
    clanky: [
      { nadpis: 'Seller', odstavce: ['{{pr_nazev}}, Company ID (IČO) {{pr_ico}}, {{pr_adresa}}'] },
      {
        nadpis: 'Complaint',
        odstavce: [
          'I hereby exercise my rights arising from liability for defects of the following goods: {{zbozi}}, document No. {{doklad}}, purchased / received on {{koupeno}}.',
          'Description of the defect: {{vada}}',
          'The defect appeared on {{projevila}}.',
          {
            uvod: 'I request',
            uvodVzor: 'I request (tick one):',
            moznosti: {
              oprava: 'removal of the defect by repair.',
              vymena: 'replacement of the goods with new goods free of defects.',
              zlava: 'a reasonable discount on the purchase price, paid to the account IBAN {{ucet}}.',
              odstupenie: 'withdrawal from the purchase agreement and refund of the purchase price to the account IBAN {{ucet}}.',
            },
          },
          'I ask for a confirmation that this complaint has been lodged and for it to be resolved within the statutory period.',
        ],
      },
      { nadpis: 'Buyer', odstavce: ['{{p_jmeno}}, {{p_adresa}}, contact: {{p_kontakt}}'] },
    ],
  },
} satisfies PrekladDokumentu;

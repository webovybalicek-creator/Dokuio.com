/**
 * English version: complaint about defective goods (Czech Republic). Original: src/obsah/cz/reklamace.ts
 * and src/sablony/cz/reklamace.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-REKLAMACE', verze: '1.0' },

  nazev: 'Defective Goods Complaint',
  nazevA: 'the defective goods complaint',
  katalog: {
    popis: 'Defective goods: repair, replacement, discount or refund.',
    slova: ['complaint', 'defective goods', 'faulty product', 'warranty claim', 'guarantee', 'repair', 'replacement', 'refund', 'shop', 'reklamace', 'reklamační protokol'],
  },
  landing: {
    title: 'Defective Goods Complaint Czech Republic {rok} – free PDF template',
    description:
      'Complaint about defective goods in the Czech Republic, explained in English: repair, replacement, discount or refund, 30-day deadline. Free bilingual PDF or Word.',
    perex: 'Are your goods defective? Write a complaint about defects (reklamace) that contains everything essential: what the defect is, what you are asking for and the 30-day deadline for handling it.',
    obsahPopis: 'Exercising rights arising from defective performance (vadné plnění) under Section 2161 et seq. of the Czech Civil Code (občanský zákoník).',
    obsah: [
      { nazev: 'Seller', popis: 'Who you are making the complaint to.' },
      { nazev: 'Complaint', popis: 'The goods, proof of purchase, description of the defect and the requested remedy; a request for confirmation.' },
      { nazev: 'Buyer', popis: 'Your details and contact.' },
    ],
    kroky: [
      { nazev: 'Describe the defect', popis: 'Specifically – what does not work and when. Explanations in English.' },
      { nazev: 'Choose your request', popis: 'Repair, replacement, discount or refund.' },
      { nazev: 'Hand it in with the goods', popis: 'And ask for written confirmation that the complaint was made. The document is bilingual: Czech original and English translation.' },
    ],
    online: ['Correct wording and the 30-day deadline', 'Request for confirmation of the complaint', 'Explanation of what you can ask for', 'Download as PDF and Word'],
    hodiSe: ['you bought from a shop or online store as a consumer', 'the defect appeared within 24 months of receiving the goods', 'you want to have the complaint in writing'],
    nehodiSe: ['the goods are fine, you just don’t want them – with an online store, withdraw within 14 days', 'you bought from a private individual – this is dealt with under the purchase agreement', 'you bought under an IČO (as a business) – different rules apply than for consumers'],
    poNadpis: 'After making the complaint.',
    po: [
      { nazev: 'Confirmation of the complaint', popis: 'With the date, description of the defect and your request.' },
      { nazev: 'Watch the 30 days', popis: 'From making the complaint. A longer period only with your consent.' },
      { nazev: 'Not handled? ČOI', popis: 'You can withdraw from the contract and turn to the Czech Trade Inspection Authority (Česká obchodní inspekce, ČOI).' },
    ],
    faq: [
      { q: 'How long can I make a complaint?', a: 'Defects in new goods can be claimed within 24 months of receipt. A defect that appears within 1 year is considered a defect the goods already had at the time of receipt.' },
      { q: 'How quickly must the shop handle the complaint?', a: 'Within 30 days of the complaint at the latest, unless it agrees a longer period with you.' },
      { q: 'Can I ask for my money back straight away?', a: 'Usually the goods are repaired or replaced first. You can ask for a discount or withdraw from the contract when neither repair nor replacement is possible, the shop refuses or fails to do it in time, or the defect recurs.' },
      { q: 'What if the complaint is rejected?', a: 'Ask for written reasons. You can have the defect assessed by an expert and turn to the Czech Trade Inspection Authority, which resolves disputes free of charge.' },
      { q: 'Do you store my details?', a: 'No. The complaint is put together directly in your browser.' },
    ],
    zakony:
      'The template is based on Section 2161 et seq. of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník), as amended by Act No. 374/2022 Coll.',
    souvisejiciPopis: 'More useful documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a defective goods complaint online – Czech Republic, PDF',
    description: 'Guide in English for a complaint about defective goods in the Czech Republic: repair, replacement, discount, refund. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'complaint', g: 'complaint', a: 'complaint', l: 'complaint' },
    kroky: {
      obchod: { nazev: 'Shop' },
      zbozi: { nazev: 'Goods and defect' },
      pozadavek: { nazev: 'What you are asking for' },
    },
    pole: {
      pr_nazev: { popis: 'Seller (company name)', napoveda: 'As stated on the proof of purchase or in the terms and conditions.', placeholder: 'e.g. Datart International, a.s.' },
      pr_ico: { popis: 'IČO (optional)', napoveda: 'The company ID number is on the receipt or invoice.', placeholder: 'e.g. 63080249' },
      pr_adresa: { popis: 'Address of the shop or for complaints', napoveda: 'Where you are making the complaint – the shop where you bought the goods, or the address in the online store’s complaints procedure (reklamační řád).', placeholder: 'e.g. Nákupní 1, 251 01 Říčany' },
      zbozi: { popis: 'Goods complained about', napoveda: 'Brand, model and serial number if applicable. Ideally write it in Czech.', placeholder: 'e.g. pračka Bosch WAN28264BY, výr. č. FD9803 (washing machine, serial No. FD9803)' },
      doklad: { popis: 'Receipt or order number', napoveda: 'Receipt, invoice or order number.', placeholder: 'e.g. 2026045678' },
      koupeno: { popis: 'Date of purchase / receipt', napoveda: 'The 24 months for complaints run from receipt of the goods.' },
      vada: { popis: 'Description of the defect', napoveda: 'What exactly does not work and when it happens. The more specific, the better. Ideally write it in Czech – the text goes into both language versions exactly as you write it.', placeholder: 'e.g. pračka při odstřeďování hlasitě bouchá a zastaví se s chybou E18 (the washing machine bangs loudly during spinning and stops with error E18)' },
      projevila: { popis: 'When the defect appeared', napoveda: 'An approximate date is enough.' },
      pozadavek: {
        popis: 'Requested remedy',
        napoveda: 'The law gives priority to repair or replacement. You can ask for a discount or refund mainly when repair or replacement is not possible or fails.',
        moznosti: { oprava: 'Repair', vymena: 'Replacement with a new item', sleva: 'Reasonable discount', odstoupeni: 'Withdrawal from the contract and refund' },
      },
      p_jmeno: { popis: 'Your first name and surname', napoveda: 'The buyer.', placeholder: 'e.g. Jan Novák' },
      p_adresa: { popis: 'Your address', napoveda: 'For sending the outcome of the complaint.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      p_kontakt: { popis: 'E-mail or phone', napoveda: 'The shop must inform you of the outcome.', placeholder: 'e.g. jan.novak@email.cz' },
      ucet: { popis: 'Account for the refund (optional)', napoveda: 'For a discount or withdrawal from the contract.', placeholder: '123456789/0100' },
      misto: { popis: 'Place (town)', napoveda: 'We pre-fill it from your address.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date of the complaint', napoveda: 'We pre-filled today. The 30 days for handling run from this day.' },
    },
    vysvetleni: [
      'Who you are making the complaint to.',
      'What is defective and what you are asking for. A specific description speeds up handling.',
      'Who is making the complaint. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Hand in the complaint with the goods and proof of purchase at the shop, or send it to the online store according to its complaints procedure.',
      'Ask for written confirmation: when you made the complaint, what the defect is and what you are asking for. You are entitled to it.',
      'The shop must handle the complaint within 30 days of it being made, unless it agrees a longer period with you.',
      'Not handled in time or wrongfully rejected? You can withdraw from the contract and turn to the Czech Trade Inspection Authority (Česká obchodní inspekce).',
    ],
    kontrola: [
      'Defects can be claimed within 24 months of receipt (for used goods the period may be shortened to 12 months).',
      'A defect that appears within 1 year of receipt is considered a defect the goods already had at the time of receipt – the shop would have to prove otherwise.',
      'Usually repair or replacement comes first; you can ask for a discount or withdraw when neither repair nor replacement is possible, the shop refuses or fails to do it in time, or the defect recurs.',
      'Describe the defect specifically and photograph it. Keep the proof of purchase (a bank statement or order confirmation is enough).',
      'A complaint of this kind applies only to purchases from a business. Between private individuals it is dealt with under the purchase agreement.',
      'Handling within 30 days is a statutory deadline – a longer one only with your consent. Don’t let anything be forced on you by your signature.',
    ],
    pripominky: {
      'Prodávající má vyřídit reklamaci (orientačně)': {
        nazev: 'The seller should handle the complaint (approximate)',
        popis: 'Within 30 days of making the complaint, unless you agreed a longer period.',
      },
    },
  },

  dokument: {
    nazev: 'Complaint About Defective Goods',
    podnadpis: 'exercise of rights arising from defective performance under Section 2161 et seq. of Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
    podpisy: { vlevo: 'buyer', vpravo: 'received for the Seller (date and signature)' },
    clanky: [
      {
        nadpis: 'Seller',
        odstavce: ['{{pr_nazev}}, IČO {{pr_ico}}, {{pr_adresa}}'],
      },
      {
        nadpis: 'Complaint',
        odstavce: [
          'I hereby exercise my rights arising from defective performance in respect of the following goods: {{zbozi}}, document No. {{doklad}}, purchased / received on {{koupeno}}.',
          'Description of the defect: {{vada}}',
          'The defect appeared on {{projevila}}.',
          {
            uvod: 'I request',
            uvodVzor: 'I request (tick):',
            moznosti: {
              oprava: 'removal of the defect by repair.',
              vymena: 'removal of the defect by delivery of a new item without defects.',
              sleva: 'a reasonable discount on the purchase price, sent to account No. {{ucet}}.',
              odstoupeni: 'withdrawal from the purchase agreement and refund of the purchase price to account No. {{ucet}}.',
            },
          },
          'I request written confirmation that the complaint has been made, stating the date, the content of the complaint and the requested remedy, and that the complaint be handled within 30 days in accordance with the Civil Code.',
        ],
      },
      {
        nadpis: 'Buyer',
        odstavce: ['{{p_jmeno}}, {{p_adresa}}, contact: {{p_kontakt}}'],
      },
    ],
  },
} satisfies PrekladDokumentu;

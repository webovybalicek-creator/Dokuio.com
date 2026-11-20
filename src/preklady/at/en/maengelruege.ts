/**
 * English version: notice of defects (Austria). Original: src/obsah/at/maengelruege.ts
 * and src/sablony/at/maengelruege.ts (based on src/sablony/de/maengelanzeige.ts). The German text prevails;
 * rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-MAENGEL', verze: '1.0' },

  nazev: 'Notice of Defects',
  nazevA: 'the notice of defects',
  katalog: {
    popis: 'Complain to the retailer about faulty goods, with a deadline.',
    slova: ['notice of defects', 'complaint', 'faulty goods', 'defective product', 'statutory warranty', 'repair', 'replacement', 'return', 'Mängelrüge', 'Gewährleistung', 'Reklamation', 'VGG'],
  },
  landing: {
    title: 'Notice of Defects Austria {rok} – free PDF template',
    description:
      'Notice of defects for Austria under the VGG, explained in English: demand repair or replacement and set a deadline. Bilingual PDF or Word, free.',
    perex: 'Goods broken? With a notice of defects (Mängelrüge) you demand repair or replacement and set a deadline.',
    obsahPopis: 'Complaint with a deadline.',
    obsah: [
      { nazev: 'Retailer', popis: 'Who you bought from.' },
      { nazev: 'Defect', popis: 'What does not work.' },
      { nazev: 'Demand', popis: 'Repair or replacement with a deadline.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Describe the defect specifically.' },
      { nazev: 'Send it', popis: 'Together with the proof of purchase.' },
      { nazev: 'Wait for the deadline', popis: 'After that, withdrawal or price reduction.' },
    ],
    online: [
      'Fill it in with explanations for every field',
      'Signature on screen',
      'Download as PDF and Word',
      'Deadline in your calendar',
    ],
    hodiSe: ['faulty goods from a retailer or an online shop'],
    nehodiSe: [
      'purchases from private individuals',
      'manufacturer’s guarantee – the guarantee terms apply there',
    ],
    po: [
      { nazev: 'Limitation', popis: 'Your rights become time-barred three months after the end of the statutory warranty period.' },
    ],
    faq: [
      { q: 'How long does the statutory warranty last?', a: 'Two years from handover, for used goods possibly one year. After that you have three more months to enforce it in court.' },
      { q: 'Who has to prove that the defect was already there?', a: 'In the first year this is presumed.' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony:
      'The template is based on the Austrian Consumer Warranty Act (Verbrauchergewährleistungsgesetz, VGG) and Sections 922 et seq. of the Austrian General Civil Code (ABGB).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a notice of defects online – Austria, free PDF',
    description: 'Guide in English for a notice of defects in Austria with a deadline. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice of defects', g: 'notice of defects', a: 'notice of defects', l: 'notice of defects' },
    kroky: {
      haendler: { nazev: 'Retailer' },
      ware: { nazev: 'Goods and defect' },
      forderung: { nazev: 'What you demand' },
    },
    pole: {
      pr_nazev: { popis: 'Retailer (company name)' },
      pr_adresa: { popis: 'Address' },
      zbozi: { popis: 'Goods', placeholder: 'e.g. Waschmaschine Bosch WAN28264, Seriennr. FD9803 (washing machine, serial no.)' },
      doklad: { popis: 'Invoice or order number' },
      koupeno: { popis: 'Bought / received on' },
      vada: { popis: 'Description of the defect', placeholder: 'e.g. bleibt beim Schleudern mit Fehler E18 stehen (stops during the spin cycle with error E18)' },
      projevila: { popis: 'Defect noticed on' },
      pozadavek: {
        popis: 'Remedy',
        moznosti: { oprava: 'Repair', vymena: 'Delivery of a new item free of defects' },
      },
      lhuta: { popis: 'Deadline in days', napoveda: '14 days is usually customary and reasonable.', placeholder: '14' },
      p_jmeno: { popis: 'Your first name and surname' },
      p_adresa: { popis: 'Your address' },
      p_kontakt: { popis: 'E-mail or telephone' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is defective and what you demand.', ''],
    coDal: [
      'Hand in the notice of defects with the proof of purchase at the shop, or send it to the online retailer by e-mail or registered letter (Einschreiben) – keep the proof.',
      'If repair or replacement does not work, you can demand a price reduction or termination of the contract.',
      'Important: your rights become time-barred three months after the end of the two-year statutory warranty period – if there is a dispute, go to court in good time. The Chamber of Labour (Arbeiterkammer) can help.',
    ],
    kontrola: [
      'The statutory warranty (Gewährleistung) period is two years from handover; for used goods it may be shortened to one year.',
      'If the defect appears within one year, it is presumed to have existed at handover ([WKO](https://www.wko.at/gewerberecht/vgg-uebersicht-gewaehrleistung-warenkauf-ab-2022)).',
      'First repair or replacement, as you choose; price reduction or termination only if that does not work or is unreasonable.',
      'The statutory warranty applies against the retailer. A manufacturer’s guarantee is voluntary and comes in addition.',
      'Describe the defect specifically and photograph it; keep the proof of purchase.',
    ],
    pripominky: {
      'Frist zur Nacherfüllung läuft ab': {
        nazev: 'Deadline for remedying the defect expires',
        popis: 'If there is no repair or replacement by then, you can withdraw from the contract or reduce the price.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Defects',
    podnadpis: 'Assertion of the statutory warranty under the Consumer Warranty Act (Verbrauchergewährleistungsgesetz, VGG)',
    podpisy: { vlevo: 'buyer', vpravo: 'received for the retailer (date, signature)' },
    clanky: [
      {
        nadpis: 'To',
        odstavce: ['{{pr_nazev}}, {{pr_adresa}}'],
      },
      {
        nadpis: 'Notice of Defects',
        odstavce: [
          'On {{koupeno}} I bought the following goods from you: {{zbozi}} (receipt No. {{doklad}}).',
          'The goods are defective: {{vada}} I noticed the defect on {{projevila}}.',
          {
            uvod: 'I assert my statutory warranty rights and demand',
            uvodVzor: 'I assert my statutory warranty rights and demand (tick one):',
            moznosti: {
              oprava: 'that the defect be remedied (repair).',
              vymena: 'replacement with an item free of defects.',
            },
          },
          'For this purpose I set you a deadline until {{frist_bis}}. If the deadline expires without result, I reserve the right to demand a price reduction or termination of the contract.',
          'Please confirm receipt of this notice of defects.',
        ],
      },
      {
        nadpis: 'Buyer',
        odstavce: ['{{p_jmeno}}, {{p_adresa}}, contact: {{p_kontakt}}'],
      },
    ],
  },
} satisfies PrekladDokumentu;

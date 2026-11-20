/**
 * English version: notice of defects (Germany). Original: src/obsah/de/maengelanzeige.ts
 * and src/sablony/de/maengelanzeige.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-MAENGEL', verze: '1.0' },

  nazev: 'Notice of Defects',
  nazevA: 'the notice of defects',
  katalog: {
    popis: 'Complain to the retailer about defective goods, with a deadline.',
    slova: ['notice of defects', 'complaint about defects', 'defective goods', 'faulty product', 'return faulty goods', 'statutory warranty', 'repair or replacement', 'Mängelanzeige', 'Reklamation', 'Gewährleistung', 'Mängelrüge', 'Nacherfüllung'],
  },
  landing: {
    title: 'Notice of Defects Germany {rok} – free PDF template',
    description:
      'Notice of defects for faulty goods in Germany, explained in English: demand repair or replacement and set a deadline. Bilingual PDF or Word, free.',
    perex: 'Goods broken? With a notice of defects (Mängelanzeige) you demand repair or replacement and set a deadline.',
    obsahPopis: 'A complaint about defects with a deadline.',
    obsah: [
      { nazev: 'Retailer', popis: 'Who you bought from.' },
      { nazev: 'Defect', popis: 'What does not work.' },
      { nazev: 'Demand', popis: 'Repair or replacement with a deadline.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Describe the defect specifically.' },
      { nazev: 'Send it', popis: 'With the proof of purchase.' },
      { nazev: 'Wait for the deadline', popis: 'Then withdrawal or price reduction.' },
    ],
    online: ['Filling in with explanations for every field', 'Signature on screen', 'Download as PDF and Word', 'Deadline in your calendar'],
    hodiSe: ['defective goods from a shop or online shop'],
    nehodiSe: ['purchases from private individuals', 'manufacturer’s guarantee – the guarantee terms apply there'],
    po: [{ nazev: 'After the deadline', popis: 'Withdrawal or price reduction; help is available from the consumer advice centre (Verbraucherzentrale).' }],
    faq: [
      { q: 'How long can I complain about defects?', a: 'Two years from handover; for used goods possibly one year.' },
      { q: 'Who has to prove that the defect was already there?', a: 'In the first year it is presumed (Section 477 of the German Civil Code, BGB).' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Sections 437–439 and Section 477 of the German Civil Code (BGB).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a notice of defects online – Germany, free PDF',
    description: 'Guide in English for a complaint about defective goods in Germany, with a deadline. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
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
      zbozi: { popis: 'Goods', placeholder: 'e.g. Waschmaschine (washing machine) Bosch WAN28264, Seriennr. FD9803' },
      doklad: { popis: 'Invoice or order number' },
      koupeno: { popis: 'Bought / received on' },
      vada: { popis: 'Description of the defect', placeholder: 'e.g. bleibt beim Schleudern mit Fehler E18 stehen (stops during the spin cycle with error E18)' },
      projevila: { popis: 'Defect noticed on' },
      pozadavek: {
        popis: 'Subsequent performance (Nacherfüllung)',
        moznosti: { oprava: 'Repair', vymena: 'Delivery of a new thing free from defects' },
      },
      lhuta: { popis: 'Deadline in days', napoveda: '14 days is usually customary and reasonable.', placeholder: '14' },
      p_jmeno: { popis: 'Your first name and surname' },
      p_adresa: { popis: 'Your address' },
      p_kontakt: { popis: 'E-mail or phone' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is defective and what you demand.', ''],
    coDal: [
      'Hand in the notice of defects with the proof of purchase in the shop or send it to the online retailer by e-mail or registered mail (Einschreiben) – keep the proof.',
      'Make the goods available for inspection if asked; the retailer bears the costs of subsequent performance.',
      'If the deadline expires without result, you can withdraw from the contract or reduce the price. The consumer advice centre (Verbraucherzentrale) can help.',
    ],
    kontrola: [
      'Rights in respect of defects last two years from handover ([Section 438 BGB](https://www.gesetze-im-internet.de/bgb/__438.html)); for used goods the retailer can shorten this to one year.',
      'If the defect appears within one year, it is presumed that it was already there at handover ([Section 477 BGB](https://www.gesetze-im-internet.de/bgb/__477.html)).',
      'First you are entitled to subsequent performance – repair or new goods, at your choice ([Section 439 BGB](https://www.gesetze-im-internet.de/bgb/__439.html)). Withdrawal or price reduction usually only if it fails.',
      'The statutory warranty (Gewährleistung) applies against the retailer, not the manufacturer. A manufacturer’s guarantee is voluntary and comes in addition.',
      'Describe the defect specifically and photograph it; keep the proof of purchase (a bank statement or order confirmation also works).',
    ],
    pripominky: {
      'Frist zur Nacherfüllung läuft ab': {
        nazev: 'Deadline for subsequent performance expires',
        popis: 'If there has been no repair or replacement by then, you can withdraw from the contract or reduce the price.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Defects',
    podnadpis: 'Assertion of statutory warranty rights under Sections 437 et seq. of the German Civil Code (BGB)',
    podpisy: { vlevo: 'buyer', vpravo: 'received for the retailer (date, signature)' },
    clanky: [
      { nadpis: 'To', odstavce: ['{{pr_nazev}}, {{pr_adresa}}'] },
      {
        nadpis: 'Notice of Defects',
        odstavce: [
          'On {{koupeno}} I bought the following goods from you: {{zbozi}} (receipt no. {{doklad}}).',
          'The goods are defective: {{vada}} I noticed the defect on {{projevila}}.',
          {
            uvod: 'Under Section 439 BGB, I demand subsequent performance by',
            uvodVzor: 'Under Section 439 BGB, I demand subsequent performance by (tick):',
            moznosti: { oprava: 'remedying the defect (repair).', vymena: 'delivering a thing free from defects.' },
          },
          'For this I set you a deadline of {{frist_bis}}. If the deadline expires without success, I reserve the right to withdraw from the contract or to reduce the purchase price, and to claim damages.',
          'Please confirm receipt of this notice of defects.',
        ],
      },
      { nadpis: 'Buyer', odstavce: ['{{p_jmeno}}, {{p_adresa}}, contact: {{p_kontakt}}'] },
    ],
  },
} satisfies PrekladDokumentu;

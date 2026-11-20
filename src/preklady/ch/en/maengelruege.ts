/**
 * English version: notice of defects in purchased goods (Switzerland).
 * Original: src/obsah/ch/maengelruege.ts and src/sablony/ch/maengelruege.ts.
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-MAENGELRUEGE', verze: '1.0' },

  nazev: 'Notice of Defects',
  nazevA: 'the notice of defects',
  katalog: {
    popis: 'Report defective goods immediately.',
    slova: ['notice of defects', 'complaint', 'defective goods', 'faulty product', 'warranty', 'guarantee', 'refund', 'price reduction', 'replacement', 'Mängelrüge', 'Reklamation', 'Gewährleistung', 'Wandelung', 'Minderung'],
  },
  landing: {
    title: 'Notice of Defects Switzerland {rok} – free PDF template',
    description:
      'Notice of defects under Art. 201 OR: report faulty goods at once and demand repair, replacement, a price reduction or rescission. Bilingual PDF or Word, free.',
    perex: 'Faulty goods? Report the defect in writing immediately – otherwise the goods are deemed accepted.',
    obsahPopis: 'One letter to the seller – a notice of defects (Mängelrüge).',
    obsah: [
      { nazev: 'Seller', popis: 'Company and address.' },
      { nazev: 'Goods and defect', popis: 'What is defective and since when.' },
      { nazev: 'Demand', popis: 'Repair, replacement, price reduction (Minderung) or rescission of the sale (Wandelung).' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Whatever you don’t know is left as a line to fill in by hand.' },
      { nazev: 'Check the text', popis: 'Preview next to the form.' },
      { nazev: 'Download and sign', popis: 'PDF or Word. The document is bilingual: German original and English translation.' },
    ],
    online: ['Explanations for every field', 'Signature on screen', 'Draft stays saved in your browser', 'Download as PDF and Word'],
    hodiSe: ['new or used goods bought from a retailer are defective'],
    nehodiSe: ['purchase between private individuals with the warranty excluded'],
    po: [
      { nazev: 'Act immediately', popis: 'If you report too late, you lose your rights.' },
      { nazev: 'Limitation period', popis: 'Two years from delivery (Art. 210 OR).' },
    ],
    faq: [
      { q: 'Do I have a right to repair?', a: 'By law you are entitled to rescission (Wandelung) or a price reduction (Minderung), and for mass-produced goods to a replacement. Repair applies if it has been agreed – often in the guarantee or the general terms (AGB).' },
      { q: 'How much time do I have?', a: 'You must report defects immediately after discovering them. Claims become time-barred two years after delivery; for second-hand goods (Occasion) the retailer may shorten this to one year.' },
      { q: 'Do you store my data?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 197 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR), in particular Art. 201, 205, 206 and 210 OR.',
  },
  vytvorit: {
    title: 'Notice of Defects (Switzerland) online – free PDF',
    description: 'Notice of defects in purchased goods under Art. 201 OR, explained in English. Bilingual PDF or Word, free.',
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
      vada: { popis: 'Description of the defect', placeholder: 'e.g. bleibt beim Schleudern mit Fehler E18 stehen (stops during spin with error E18)' },
      projevila: { popis: 'Defect noticed on' },
      pozadavek: {
        popis: 'What do you demand?',
        moznosti: {
          oprava: 'Repair (under the guarantee or the general terms)',
          vymena: 'Replacement with a defect-free item',
          minderung: 'Price reduction',
          wandelung: 'Rescission of the sale (Wandelung)',
        },
      },
      lhuta: { popis: 'Deadline for a reply, in days', napoveda: '14 days is usually customary and reasonable.', placeholder: '14' },
      p_jmeno: { popis: 'Your first name and surname' },
      p_adresa: { popis: 'Your address' },
      p_kontakt: { popis: 'E-mail or phone' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', 'What is defective and what you demand.', ''],
    coDal: [
      'Send the notice of defects (Mängelrüge) immediately after discovering the defect – by registered post (Einschreiben) or e-mail – and keep the proof.',
      'Keep the goods available for inspection and document the defect with photos.',
      'If you cannot reach agreement, consumer organisations or the conciliation authority (Schlichtungsbehörde) at your place of residence can help.',
    ],
    kontrola: [
      'Defects must be reported immediately after discovery, otherwise the goods are deemed accepted ([Art. 201 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_201)).',
      'By law you can rescind the sale (Wandelung) or reduce the price (Minderung); for mass-produced goods you can also demand a replacement ([Art. 205 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_205)). You only have a right to repair if it has been agreed – often in the general terms (AGB) or the guarantee.',
      'Claims become time-barred two years after delivery; for used items the retailer may shorten the period to one year ([Art. 210 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_210)).',
      'Many retailers limit the warranty to repair or replacement in their general terms – check the guarantee conditions.',
      'Describe the defect specifically and photograph it; keep the receipt (or a bank statement or order confirmation).',
    ],
    pripominky: {
      'Antwort des Verkäufers fällig': {
        nazev: 'Seller’s reply due',
        popis: 'No solution by then: get advice from a consumer organisation or the conciliation authority.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Defects',
    podnadpis: 'Assertion of warranty claims under Art. 197 et seq. of the Swiss Code of Obligations (OR)',
    podpisy: { vlevo: 'Buyer', vpravo: 'Received for the retailer (date, signature)' },
    clanky: [
      {
        nadpis: 'To',
        odstavce: ['{{pr_nazev}}, {{pr_adresa}}'],
      },
      {
        nadpis: 'Notice of Defects',
        odstavce: [
          'On {{koupeno}} I bought the following goods from you: {{zbozi}} (receipt No. {{doklad}}).',
          'The goods are defective: {{vada}} I discovered the defect on {{projevila}} and hereby give notice of it under Art. 201 OR.',
          {
            uvod: 'I demand',
            uvodVzor: 'I demand (tick one):',
            moznosti: {
              oprava: 'that the defect be remedied (repair) in accordance with the guarantee or your terms.',
              vymena: 'delivery of a defect-free item (Art. 206 OR).',
              minderung: 'an appropriate reduction of the purchase price (Art. 205 OR).',
              wandelung: 'rescission of the sale against return of the goods and refund of the purchase price (Art. 205 OR).',
            },
          },
          'Please let me know by {{frist_bis}} how you will settle the matter. All further claims are reserved.',
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

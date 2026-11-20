/**
 * English version: contract for a specific work (Poland). Original: src/obsah/pl/umowa-o-dzielo.ts
 * and src/sablony/pl/umowa-o-dzielo.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-UMOWA-O-DZIELO', verze: '1.0' },

  nazev: 'Contract for a Specific Work',
  nazevA: 'the contract for a specific work',
  katalog: {
    popis: 'Renovation, repair or made-to-order work – price, deadline, acceptance.',
    slova: ['contract for work', 'contract for a specific work', 'contractor', 'tradesperson', 'renovation', 'repair', 'fixed price', 'cost estimate', 'umowa o dzieło', 'wykonawca', 'remont'],
  },
  landing: {
    title: 'Contract for a Specific Work Poland {rok} – free PDF template',
    description:
      'Contract for a specific work (umowa o dzieło) in Poland, in English: description, deadline, fixed or estimate-based fee, advance, acceptance. Free bilingual PDF or Word.',
    perex: 'For a renovation, a repair or something made to order. It sets out clearly what is to be made, by when, for how much and how acceptance will take place.',
    obsahPopis: 'Six sections under Article 627 et seq. of the Polish Civil Code (Kodeks cywilny).',
    obsah: [
      { nazev: 'Parties', popis: 'Client and contractor.' },
      { nazev: 'Subject of the contract', popis: 'The work, place, materials.' },
      { nazev: 'Deadline', popis: 'Start and delivery of the work.' },
      { nazev: 'Fee', popis: 'Fixed price or cost estimate, advance, payment deadline.' },
      { nazev: 'Acceptance and defects', popis: 'Acceptance report, statutory warranty (rękojmia).' },
      { nazev: 'Final provisions', popis: 'Changes in writing, two counterparts.' },
    ],
    kroky: [
      { nazev: 'Describe the work', popis: 'Scope, place, deadlines.' },
      { nazev: 'Agree the fee', popis: 'Fixed price or cost estimate.' },
      { nazev: 'Sign', popis: 'Two counterparts.' },
    ],
    online: [
      'Amount in words (in Polish) added automatically',
      'Deadlines in your calendar',
      'Explanations for every field',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are commissioning a bathroom renovation, painting or flooring',
      'you are ordering a repair or made-to-measure furniture',
      'as a tradesperson you want clear terms',
    ],
    nehodiSe: [
      'building a house – prepare a construction works contract (umowa o roboty budowlane) with a lawyer',
      'regular work under someone’s direction – that is an employment contract (umowa o pracę) or a contract of mandate (umowa zlecenia)',
      'buying a finished item – a sale agreement',
    ],
    po: [
      { nazev: 'Advance', popis: 'By bank transfer or against a receipt.' },
      { nazev: 'Changes in writing', popis: 'Additional work only once agreed.' },
      { nazev: 'Acceptance', popis: 'A report listing defects.' },
    ],
    faq: [
      { q: 'When is the fee paid?', a: 'On delivery of the work (Article 642 of the Civil Code), unless the parties have agreed otherwise, e.g. on an advance.' },
      { q: 'Fixed price or cost estimate?', a: 'A fixed price (ryczałt) cannot be increased, even if the work turns out to be greater (Article 632 of the Civil Code). An estimate-based fee (kosztorys) may only increase under Articles 629–630 of the Civil Code, and in the event of a significant increase the client may withdraw from the contract (Article 631 of the Civil Code).' },
      { q: 'How long can claims be pursued?', a: 'Claims under a contract for a specific work become time-barred two years after delivery of the work (Article 646 of the Civil Code).' },
      { q: 'Do you store my details?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'The template is based on Articles 627–646 of the Polish Civil Code (Kodeks cywilny).',
    souvisejiciPopis: 'Other documents on commissions and payments.',
  },
  vytvorit: {
    title: 'Fill in a contract for a specific work online – Poland, PDF',
    description: 'Guide in English for a contract for a specific work with fee and acceptance under Polish law. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 4 minutes',
  },

  pruvodce: {
    slovo: { n: 'contract', g: 'contract', a: 'contract', l: 'contract' },
    kroky: {
      strony: { nazev: 'Client and contractor', popis: 'The client (zamawiający) commissions the work and pays. The person accepting the order (the contractor, wykonawca) carries it out.' },
      dzielo: { nazev: 'The work' },
      cena: { nazev: 'Fee' },
    },
    pole: {
      o_jmeno: { popis: 'Client – first name and surname or company', placeholder: 'e.g. Jan Kowalski' },
      o_id: { popis: 'Client’s PESEL or NIP (optional)' },
      o_adresa: { popis: 'Client’s address', placeholder: 'e.g. ul. Długa 12, 00-001 Warszawa' },
      z_jmeno: { popis: 'Contractor – first name and surname or company', placeholder: 'e.g. Usługi Remontowe Nowak' },
      z_ico: { popis: 'Contractor’s NIP or PESEL (optional)' },
      z_adresa: { popis: 'Contractor’s address', placeholder: 'e.g. ul. Krótka 5, 30-001 Kraków' },
      predmet: {
        popis: 'Description of the work',
        napoveda: 'Scope, material, dimensions. You can refer to a quote. Write it in Polish – the text goes into both language versions exactly as you write it.',
        placeholder: 'e.g. wymiana płytek w łazience (8 m²) wraz z demontażem starych płytek i wywozem gruzu, zgodnie z ofertą z dnia 3.11.2026 (retiling the bathroom incl. removing old tiles and rubble, as per the quote)',
      },
      misto_dila: { popis: 'Place of performance' },
      material: {
        popis: 'Who supplies the materials',
        moznosti: { zhotovitel: 'The contractor (included in the price)', objednatel: 'The client' },
      },
      zahajeni: { popis: 'Start of work' },
      dokonceni: { popis: 'Delivery of the work' },
      typ_ceny: {
        popis: 'Type of fee',
        moznosti: { ryczalt: 'Fixed price (ryczałt)', kosztorys: 'Based on a cost estimate (kosztorys)' },
      },
      cena: { popis: 'Fee (zł gross)', placeholder: 'e.g. 6000' },
      zaloha_ano: {
        popis: 'Advance',
        moznosti: { ne: 'No advance – the full amount on acceptance', ano: 'Advance, the rest on acceptance' },
      },
      zaloha: { popis: 'Amount of the advance (zł)' },
      splatnost_dny: { popis: 'Payment deadline after acceptance (days)', placeholder: 'e.g. 7' },
      ucet: { popis: 'Contractor’s bank account (optional)' },
      misto: { popis: 'Town', placeholder: 'e.g. Warszawa' },
      datum: { popis: 'Date of the contract' },
    },
    vysvetleni: [
      '',
      'The contractor undertakes to achieve a specific result, not merely to work diligently.',
      '',
      '',
      '',
      '',
    ],
    coDal: [
      'Print the contract in two counterparts; both parties sign both.',
      'Pay any advance by bank transfer or against a receipt.',
      'Agree changes to the scope or price in writing.',
      'On acceptance, check the work and enter any defects in the report.',
    ],
    kontrola: [
      'Describe the work as precisely as possible (scope, material, dimensions; quote as an annex) – a contract for a specific work (umowa o dzieło) concerns a specific result.',
      'A fixed price does not change, even if the work turns out to be greater (Article 632 of the Civil Code – Kodeks cywilny). With a cost estimate, the contractor may demand an increase only within the limits of Articles 629–630 of the Civil Code; in the event of a significant increase the client may withdraw from the contract (Article 631 of the Civil Code).',
      'The fee is paid on delivery of the work (Article 642 of the Civil Code). The client is obliged to accept work performed in accordance with the contract (Article 643 of the Civil Code).',
      'Defects in the work are governed by the provisions on statutory warranty (rękojmia) in sales (Article 638 of the Civil Code). Claims under the contract become time-barred two years after delivery of the work (Article 646 of the Civil Code).',
      'Check the other party’s identity against their identity card (dowód osobisty) and copy their name exactly as it appears in the card.',
    ],
    pripominky: {
      'Rozpoczęcie prac': { nazev: 'Start of work' },
      'Oddanie dzieła': { nazev: 'Delivery of the work', popis: 'Check the work and draw up an acceptance report listing any defects.' },
    },
  },

  dokument: {
    nazev: 'Contract for a Specific Work',
    podnadpis: 'under Article 627 et seq. of the Act of 23 April 1964 – the Civil Code (Kodeks cywilny)',
    podpisy: { vlevo: 'client', vpravo: 'person accepting the order (contractor)' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Client:** {{o_jmeno}}, PESEL / NIP {{o_id}}, {{o_adresa}} (the “Client”)',
          '**Person accepting the order:** {{z_jmeno}}, NIP / PESEL {{z_ico}}, {{z_adresa}} (the “Contractor”)',
        ],
      },
      {
        nadpis: 'Subject of the Contract',
        odstavce: [
          'The Contractor undertakes to perform the following work: {{predmet}}.',
          'Place of performance: {{misto_dila}}.',
          {
            uvodVzor: 'Materials (tick one option):',
            moznosti: {
              zhotovitel: 'The materials needed to perform the work are supplied by the Contractor; their cost is included in the fee.',
              objednatel: 'The materials needed to perform the work are supplied by the Client. The Contractor shall notify the Client without delay if the materials are not suitable for proper performance of the work.',
            },
          },
        ],
      },
      {
        nadpis: 'Deadline',
        odstavce: [
          'The Contractor shall start work on {{zahajeni}} and deliver the work no later than {{dokonceni}}.',
          'The Client shall give the Contractor access to the place of performance during normal working hours.',
        ],
      },
      {
        nadpis: 'Fee',
        odstavce: [
          {
            uvodVzor: 'Fee (tick one option):',
            moznosti: {
              ryczalt: 'The parties agree a fixed fee (ryczałt) of {{cena}} gross. The Contractor may not demand an increase, even if at the time the contract was concluded the extent or cost of the work could not be foreseen (Article 632 of the Civil Code).',
              kosztorys: 'The parties agree an estimate-based fee (kosztorys) of {{cena}} gross. An increase is possible only under Articles 629–631 of the Civil Code; the Contractor shall notify the Client without delay of the need for additional work and shall carry out additional work only with the Client’s consent.',
            },
          },
          {
            uvodVzor: 'Advance (tick one option):',
            moznosti: {
              ne: 'The fee is payable on delivery of the work.',
              ano: 'The Client shall pay an advance of {{zaloha}} upon signing the contract. The remainder of the fee is payable on delivery of the work.',
            },
          },
          'Payment shall be made within {{splatnost_dny}} days of acceptance of the work, by bank transfer to account {{ucet}} or in cash against a receipt.',
        ],
      },
      {
        nadpis: 'Acceptance and Defects',
        odstavce: [
          'The Client shall accept work performed in accordance with the contract. The parties shall draw up an acceptance report stating any defects found and the deadline for remedying them.',
          'The Contractor’s liability for defects in the work is governed by the provisions on statutory warranty (rękojmia) in sales (Article 638 of the Civil Code).',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Amendments to the contract must be in writing, otherwise they are invalid. Matters not otherwise governed are governed by the provisions of the Civil Code, in particular Articles 627–646.',
          'The contract has been drawn up in two identical counterparts, one for each party.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

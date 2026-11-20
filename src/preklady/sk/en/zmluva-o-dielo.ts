/**
 * English version: contract for work (Slovakia). Original: src/obsah/sk/zmluva-o-dielo.ts
 * and src/sablony/sk/zmluva-o-dielo.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-ZMLUVA-O-DIELO', verze: '1.0' },

  nazev: 'Contract for Work',
  nazevA: 'the contract for work',
  katalog: {
    popis: 'Tradesperson, renovation, repair – price, deadline and acceptance of the work.',
    slova: ['contract for work', 'tradesman', 'builder', 'renovation', 'repair', 'contractor', 'client', 'works contract', 'zmluva o dielo', 'zhotoviteľ', 'objednávateľ'],
  },
  landing: {
    title: 'Contract for Work Slovakia {rok} – free PDF template',
    description:
      'Contract for work in Slovakia under Section 631 OZ, explained in English: scope, deadline, fixed price or budget, deposit, handover, defects. Free bilingual PDF/Word.',
    perex: 'For a renovation, a repair or any job done by a tradesperson. It sets out clearly what will be done, by when, for how much and how the work will be accepted.',
    obsahPopis: 'Six articles under Section 631 et seq. of the Slovak Civil Code (Občiansky zákonník).',
    obsah: [
      { nazev: 'Parties', popis: 'Client and contractor.' },
      { nazev: 'Subject of the contract', popis: 'What will be done, where, and who provides the materials.' },
      { nazev: 'Time of performance', popis: 'Start and completion.' },
      { nazev: 'Price and payment', popis: 'Fixed price or budget, deposit, due date.' },
      { nazev: 'Handover of the work and defects', popis: 'Handover report, defects, guarantee.' },
      { nazev: 'Final provisions', popis: 'Changes in writing, two counterparts.' },
    ],
    kroky: [
      { nazev: 'Describe the work', popis: 'Scope, place, dates.' },
      { nazev: 'Agree on the price', popis: 'Fixed or based on a budget.' },
      { nazev: 'Sign', popis: 'Two counterparts.' },
    ],
    online: ['Price in words (in Slovak) automatically', 'Dates in your calendar', 'Explanations for every field', 'Download as PDF and Word'],
    hodiSe: [
      'you are ordering a bathroom renovation, painting or flooring',
      'you are commissioning a repair or custom-made work',
      'as a tradesperson you want clear terms',
    ],
    nehodiSe: ['building a house – have the contract prepared by a professional', 'buying a finished item – use a purchase agreement (kúpna zmluva)'],
    po: [
      { nazev: 'Deposit', popis: 'By transfer or against a receipt.' },
      { nazev: 'Changes in writing', popis: 'Extra work always in writing.' },
      { nazev: 'Acceptance', popis: 'A report listing the defects found.' },
    ],
    faq: [
      { q: 'When is the price paid?', a: 'After the work has been carried out. For longer or costly work, deposits may be requested (Section 634 et seq. OZ).' },
      { q: 'Can a budget-based price go up?', a: 'Not without the client’s written consent. If the budget is at risk of being substantially exceeded, the contractor must notify this in writing without delay.' },
      { q: 'What is the guarantee for a building?', a: 'For a building (stavba), the guarantee period is three years (Section 646 OZ).' },
      { q: 'Do you store my details?', a: 'No. The document is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Sections 631 to 646 of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník).',
    souvisejiciPopis: 'More documents about services and payments.',
  },
  vytvorit: {
    title: 'Fill in a contract for work online – Slovakia, PDF',
    description: 'Guide in English for a contract for work in Slovakia with price and handover. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · PDF and Word · takes about 4 minutes',
  },

  pruvodce: {
    slovo: { n: 'contract', g: 'contract', a: 'contract', l: 'contract' },
    kroky: {
      strany: { nazev: 'Client and contractor', popis: 'The client orders and pays for the work. The contractor carries it out – a tradesperson, a company or even a private individual.' },
      dielo: { nazev: 'Work' },
      cena: { nazev: 'Price and payment' },
    },
    pole: {
      o_jmeno: { popis: 'Client – first name and surname, or company', placeholder: 'e.g. Ján Kováč' },
      o_id: { popis: 'Client’s date of birth or IČO (company ID number)' },
      o_adresa: { popis: 'Client’s address', placeholder: 'e.g. Hlavná 12, 811 01 Bratislava' },
      z_jmeno: { popis: 'Contractor – name or company', placeholder: 'e.g. Stavby Horváth s.r.o.' },
      z_ico: { popis: 'Contractor’s IČO or date of birth' },
      z_adresa: { popis: 'Contractor’s address or registered office', placeholder: 'e.g. Mlynská 5, 040 01 Košice' },
      predmet: {
        popis: 'Subject of the work',
        napoveda: 'Scope of the work, materials, dimensions. You can refer to a quote (ponuka). Ideally write it in Slovak – the text goes into the contract exactly as you write it.',
        placeholder: 'e.g. výmena dlažby v kúpeľni (8 m²) vrátane demontáže starej dlažby a odvozu sutiny, podľa ponuky zo dňa 3. 11. 2026 (replacing bathroom tiles (8 m²) including removal of the old tiles and the rubble, as per the quote of 3 November 2026)',
      },
      misto_dila: { popis: 'Place of performance' },
      material: {
        popis: 'Who provides the materials',
        moznosti: { zhotovitel: 'The contractor (included in the price)', objednatel: 'The client' },
      },
      zahajeni: { popis: 'Start of work' },
      dokonceni: { popis: 'Completion and handover' },
      typ_ceny: {
        popis: 'Type of price',
        moznosti: { pevna: 'Fixed price', rozpocet: 'Based on a budget' },
      },
      cena: { popis: 'Total price (€)', placeholder: 'e.g. 2000' },
      zaloha_ano: {
        popis: 'Deposit',
        moznosti: { ne: 'No deposit – everything after handover', ano: 'Deposit in advance, the rest after handover' },
      },
      zaloha: { popis: 'Amount of the deposit (€)' },
      splatnost_dny: { popis: 'Payment due after handover (days)', placeholder: 'e.g. 7' },
      ucet: { popis: 'Contractor’s IBAN (optional)' },
      zaruka: { popis: 'Guarantee (months, optional)' },
      misto: { popis: 'Place of signing', placeholder: 'e.g. Bratislava' },
      datum: { popis: 'Date of signing' },
    },
    vysvetleni: ['', 'The contractor carries out the work at their own risk; the client accepts it and pays for it.', '', '', '', ''],
    coDal: [
      'Print the contract twice; both parties sign both copies.',
      'Pay the deposit by transfer or against a receipt confirming that the money was received.',
      'Agree on any changes to the scope or price in writing.',
      'When accepting the work, check it and record any defects in the report.',
    ],
    kontrola: [
      'Describe the subject of the work as precisely as possible (scope, materials, dimensions, possibly the quote as an annex).',
      'The price is paid after the work has been carried out; for longer or costly work, deposits may be requested (Section 634 et seq. OZ).',
      'A price set by a budget cannot be increased without the client’s written consent; the contractor must notify a substantial overrun of the budget in writing without delay.',
      'The contractor is liable for defects the work has at handover. For a building, the guarantee period is three years (Section 646 OZ).',
      'The Civil Code (Občiansky zákonník) was repealed by Act No. 260/2026 Coll. and will be replaced by a new one – once the new code takes effect, check the current wording.',
      'Check the identity of the other party against their identity card (občiansky preukaz) and copy the names exactly as they appear on it.',
    ],
    pripominky: {
      'Začatie prác': { nazev: 'Start of work' },
      'Dokončenie a odovzdanie diela': { nazev: 'Completion and handover of the work', popis: 'At acceptance, draw up a handover report listing all defects found.' },
    },
  },

  dokument: {
    nazev: 'Contract for Work',
    podnadpis: 'under Section 631 et seq. of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník)',
    podpisy: { vlevo: 'client', vpravo: 'contractor' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Client:** {{o_jmeno}}, date of birth / IČO {{o_id}}, {{o_adresa}} (the “Client”)',
          '**Contractor:** {{z_jmeno}}, IČO / date of birth {{z_ico}}, {{z_adresa}} (the “Contractor”)',
        ],
      },
      {
        nadpis: 'Subject of the Contract',
        odstavce: [
          'The Contractor undertakes to carry out the following work for the Client: {{predmet}}.',
          'Place of performance of the work: {{misto_dila}}.',
          {
            uvodVzor: 'Materials (tick one option):',
            moznosti: {
              zhotovitel: 'The materials needed to carry out the work shall be provided by the Contractor; their cost is included in the price of the work.',
              objednatel: 'The materials needed to carry out the work shall be provided by the Client. The Contractor shall check them before use and notify the Client without delay of any unsuitable materials.',
            },
          },
          'The Client undertakes to accept the work and pay the agreed price. The Contractor shall carry out the work properly and on time, at their own risk.',
        ],
      },
      {
        nadpis: 'Time of Performance',
        odstavce: [
          'The Contractor shall start the work on {{zahajeni}} and complete and hand over the work no later than {{dokonceni}}.',
          'The Client shall give the Contractor access to the place of performance during normal working hours.',
        ],
      },
      {
        nadpis: 'Price and Payment',
        odstavce: [
          {
            uvodVzor: 'Price (tick one option):',
            moznosti: {
              pevna: 'The price of the work is agreed as a fixed price of {{cena}}. The Contractor is not entitled to demand an increase.',
              rozpocet: 'The price of the work is set by a budget in the amount of {{cena}}. It cannot be increased without the Client’s written consent. If it becomes apparent that the budget will be substantially exceeded, the Contractor shall notify the Client in writing without delay.',
            },
          },
          {
            uvodVzor: 'Deposit (tick one option):',
            moznosti: {
              ne: 'The price is payable after the work has been carried out and handed over.',
              ano: 'The Client shall pay a deposit of {{zaloha}} upon signing this contract. The rest of the price is payable after the work has been carried out and handed over.',
            },
          },
          'The price is payable within {{splatnost_dny}} days of handover of the work, by transfer to the account IBAN {{ucet}} or in cash against a receipt.',
          'The Contractor shall carry out work beyond the scope of this contract only after a written agreement on its scope and price.',
        ],
      },
      {
        nadpis: 'Handover of the Work and Defects',
        odstavce: [
          'The parties shall draw up a handover report on the handover of the work, stating any defects found and the deadline for remedying them.',
          'The Contractor is liable for defects the work has at handover. The Client shall notify the Contractor of defects without undue delay after discovering them.',
          'The Contractor provides a guarantee of {{zaruka}} months on the work from acceptance. (If not filled in, the statutory provisions on liability for defects apply.)',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'This contract may be amended only in writing. Other rights and obligations are governed by the Civil Code, in particular Section 631 et seq.',
          'The contract is executed in two counterparts; each party receives one.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

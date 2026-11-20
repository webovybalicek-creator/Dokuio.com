/**
 * English version: contract for work (Czech Republic). Original: src/obsah/cz/smlouva-o-dilo.ts
 * and src/sablony/cz/smlouva-o-dilo.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-SMLOUVA-O-DILO', verze: '1.0' },

  nazev: 'Contract for Work',
  nazevA: 'the contract for work',
  katalog: {
    popis: 'Tradesperson, renovation, repair – price, deadline and acceptance.',
    slova: ['contract for work', 'works contract', 'tradesperson', 'builder', 'renovation', 'repair', 'contractor', 'client', 'job', 'smlouva o dílo', 'řemeslník'],
  },
  landing: {
    title: 'Contract for Work Czech Republic {rok} – free PDF template',
    description:
      'Contract for work in the Czech Republic, explained in English: scope, deadline, fixed price or estimate, advance, acceptance and defects. Free bilingual PDF or Word.',
    perex: 'For a renovation, a repair or any job done by a tradesperson. It clearly sets out what will be done, by when, for how much and how the work will be accepted.',
    obsahPopis: 'Six clear articles under Section 2586 et seq. of the Czech Civil Code (občanský zákoník); contract for work – smlouva o dílo.',
    obsah: [
      { nazev: 'Parties', popis: 'Client and contractor; company details loaded from ARES.' },
      { nazev: 'Subject of the contract', popis: 'What exactly will be done, where, and who provides the materials.' },
      { nazev: 'Time of performance', popis: 'Start and completion dates.' },
      { nazev: 'Price and payment', popis: 'Fixed price or estimate; advance, due date, extra work only in writing.' },
      { nazev: 'Handover of the work and defects', popis: 'Handover report, minor defects, 2-year period, optional guarantee.' },
      { nazev: 'Final provisions', popis: 'Changes only in writing, two copies, language clause.' },
    ],
    kroky: [
      { nazev: 'Describe the work', popis: 'Scope of work, place, dates. Explanations in English.' },
      { nazev: 'Agree the price', popis: 'Fixed or based on an estimate, with or without an advance.' },
      { nazev: 'Sign', popis: 'Two copies, one each. The contract is bilingual: Czech original and English translation.' },
    ],
    online: ['The price in words (in Czech) is added automatically', 'Contractor details from ARES by IČO', 'Dates to your calendar', 'Download as PDF and Word'],
    hodiSe: ['you are ordering a bathroom renovation, painting or flooring', 'you are commissioning a repair or custom-made work', 'as a tradesperson you want clear terms with your customer'],
    nehodiSe: ['building a house with a building permit – have the contract prepared by a professional', 'regular work for an employer – that is employment or an agreement to perform work', 'buying a finished item – use a purchase agreement (kupní smlouva)'],
    po: [
      { nazev: 'Advance', popis: 'By bank transfer or against a receipt.' },
      { nazev: 'Changes in writing', popis: 'Always agree extra work and new prices in writing.' },
      { nazev: 'Acceptance', popis: 'A handover report (předávací protokol) listing any defects.' },
    ],
    faq: [
      { q: 'Does a contract for work have to be in writing?', a: 'The law generally does not require it, but a written contract is the only reliable proof of what you agreed – scope, price and deadline.' },
      { q: 'What is the difference between a fixed price and an estimate?', a: 'A fixed price does not change. With a price based on an estimate, the contractor may ask for an increase only because of circumstances they could not foresee; if the increase exceeds 10 %, the client may withdraw from the contract (Section 2622 OZ).' },
      { q: 'When is payment made?', a: 'Under the law, after the work has been carried out. For work done in stages or involving large costs, a reasonable advance may be requested (Section 2611 OZ).' },
      { q: 'Until when can I claim defects?', a: 'Notify defects without undue delay, at the latest within two years of accepting the work (Section 2618 OZ). If the contractor gives a guarantee, it also applies for the whole guarantee period.' },
      { q: 'Do you store my details?', a: 'No. The document is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Sections 2586–2635 of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník, OZ).',
    souvisejiciPopis: 'More documents on services and payments, also free.',
  },
  vytvorit: {
    title: 'Fill in a contract for work online – Czech Republic, PDF',
    description: 'Guide in English for a contract for work in the Czech Republic with price, advance and handover. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 4 minutes',
  },

  pruvodce: {
    kroky: {
      strany: { nazev: 'Client and contractor', popis: 'The client orders and pays for the work. The contractor carries it out – a tradesperson, a company or even a private individual.' },
      dilo: { nazev: 'The work', popis: 'What exactly is to be done, where and when.' },
      cena: { nazev: 'Price and payment' },
    },
    pole: {
      o_jmeno: { popis: 'Client – first name and surname or company', placeholder: 'e.g. Jan Novák' },
      o_id: { popis: 'Client’s date of birth or IČO', placeholder: 'e.g. 1. 5. 1985' },
      o_adresa: { popis: 'Client’s address', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      z_ico: { popis: 'Contractor’s IČO', napoveda: 'For a business, we load the name and registered office from ARES by the IČO (company ID number). A private individual gives their date of birth.', placeholder: 'e.g. 12345678' },
      z_jmeno: { popis: 'Contractor – name or company', placeholder: 'e.g. Stavby Dvořák s.r.o.' },
      z_adresa: { popis: 'Contractor’s address or registered office', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      predmet: { popis: 'Subject of the work', napoveda: 'Scope of work, materials, dimensions. You can refer to a quote and attach it. Ideally write it in Czech – the text goes into both language versions exactly as you write it.', placeholder: 'e.g. výměna dlažby v koupelně (8 m²) včetně demontáže staré dlažby a odvozu suti, podle nabídky ze dne 3. 11. 2026 (replacing bathroom tiles (8 m²) including removal of old tiles and rubble, according to the quote of 3 Nov 2026)' },
      misto_dila: { popis: 'Place of performance', placeholder: 'e.g. byt č. 12, Nerudova 12, Říčany' },
      material: {
        popis: 'Who provides the materials',
        moznosti: { zhotovitel: 'The contractor (included in the price)', objednatel: 'The client' },
      },
      zahajeni: { popis: 'Start of work' },
      dokonceni: { popis: 'Completion and handover' },
      typ_ceny: {
        popis: 'Type of price',
        napoveda: 'A fixed price is safer for the client. A price based on an estimate can rise only for unforeseeable reasons.',
        moznosti: { pevna: 'Fixed price (does not change)', rozpocet: 'Based on an estimate (indicative)' },
      },
      cena: { popis: 'Total price (CZK)', napoveda: 'Including VAT (DPH), if the contractor charges it.', placeholder: 'e.g. 48000' },
      zaloha_ano: {
        popis: 'Advance',
        moznosti: { ne: 'No advance – everything after handover', ano: 'Advance up front, the rest after handover' },
      },
      zaloha: { popis: 'Amount of the advance (CZK)', napoveda: 'Typically for materials.', placeholder: 'e.g. 15000' },
      splatnost_dny: { popis: 'Payment due after handover (days)', placeholder: 'e.g. 7' },
      ucet: { popis: 'Contractor’s account (optional)', placeholder: '123456789/0100' },
      zaruka: { popis: 'Quality guarantee (months, optional)', napoveda: 'On top of the statutory rights. Leave empty if no guarantee is agreed.', placeholder: 'e.g. 24' },
      misto: { popis: 'Place of signing (town)', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date of signing' },
    },
    vysvetleni: [
      'Who orders the work and who carries it out.',
      'The contractor carries out the work at their own cost and risk; the client accepts it and pays.',
      'When work starts and when it must be finished.',
      'How much the work costs and when it is paid.',
      'The work is inspected at acceptance. Defects must be notified in time.',
      '',
    ],
    coDal: [
      'Print the contract twice; each party signs both copies and keeps one.',
      'Pay the advance by bank transfer or against a receipt for the money.',
      'Agree any changes to the scope or price during the work in writing (an e-mail or an amendment is enough).',
      'At acceptance, inspect the work and record visible defects in the handover report (předávací protokol) – it is harder to prove later.',
    ],
    kontrola: [
      'Describe the subject of the work as precisely as possible (scope, materials, dimensions, or a reference to a quote or drawing – and attach it).',
      'A fixed price does not change. With a price based on an estimate, the contractor may ask for an increase only because of unforeseeable circumstances; if the increase exceeds 10 %, the client may withdraw from the contract (Sections 2620–2622 OZ).',
      'The price is paid after the work is carried out; for work done in stages, a proportionate part may be paid in advance (Sections 2610–2611 OZ).',
      'Inspect the work at acceptance. Notify defects without undue delay, at the latest within 2 years of acceptance (Section 2618 OZ). Special rules apply to buildings – consult a professional.',
      'Check a contractor who is a business in the Commercial Register (obchodní rejstřík) or the Trade Register (živnostenský rejstřík) (load the IČO from ARES).',
      'The identity of the other party from their identity document (občanský průkaz). The number of a Czech ID card can be checked in the [Neplatné doklady database (Czech Ministry of the Interior)](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).',
    ],
    pripominky: {
      'Zahájení díla': { nazev: 'Start of work' },
      'Termín dokončení a předání díla': {
        nazev: 'Deadline for completion and handover of the work',
        popis: 'At acceptance, draw up a handover report and list all visible defects.',
      },
    },
  },

  dokument: {
    nazev: 'Contract for Work',
    podnadpis: 'under Section 2586 et seq. of Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
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
              objednatel: 'The materials needed to carry out the work shall be provided by the Client. The Contractor shall check them before use and shall notify the Client of unsuitable materials without undue delay.',
            },
          },
          'The Client undertakes to accept the work and pay the price under this contract. The Contractor shall carry out the work with due care, at its own cost and at its own risk.',
        ],
      },
      {
        nadpis: 'Time of Performance',
        odstavce: [
          'The Contractor shall start work on {{zahajeni}} and shall complete the work and hand it over to the Client no later than {{dokonceni}}.',
          'The Client shall provide the Contractor with access to the place of performance during normal working hours.',
        ],
      },
      {
        nadpis: 'Price and Payment',
        odstavce: [
          {
            uvodVzor: 'Price (tick one option):',
            moznosti: {
              pevna: 'The price of the work is agreed as a fixed price of {{cena}}. The Contractor is not entitled to demand an increase.',
              rozpocet: 'The price of the work is agreed on the basis of an estimate of {{cena}}. The estimate is not binding; an increase in price is possible only under Section 2622 of the Civil Code. If the increase exceeds the estimate by more than 10 %, the Client may withdraw from the contract.',
            },
          },
          {
            uvodVzor: 'Advance (tick one option):',
            moznosti: {
              ne: 'The price is payable after the work has been carried out and handed over.',
              ano: 'The Client shall pay an advance of {{zaloha}} upon signing this contract. The rest of the price is payable after the work has been carried out and handed over.',
            },
          },
          'The price is payable within {{splatnost_dny}} days of handover of the work, by transfer to the Contractor’s account No. {{ucet}} or in cash against a receipt.',
          'The Contractor shall carry out work beyond the scope of this contract only after a written agreement on its scope and price.',
        ],
      },
      {
        nadpis: 'Handover of the Work and Defects',
        odstavce: [
          'The work is completed once it has been demonstrated that it is fit for its purpose. The parties shall draw up a handover report on the handover, stating any defects found and the deadline for their removal.',
          'The Client may accept the work even with minor defects that do not prevent its use; the Contractor shall remove these defects without undue delay.',
          'The Client shall notify defects in the work without undue delay after discovering them, at the latest within two years of accepting the work.',
          'The Contractor provides a quality guarantee for the work for {{zaruka}} months from acceptance. (Not filled in = no guarantee is agreed; the statutory rights in respect of defects apply.)',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'This contract may be amended only in writing. Other rights and obligations are governed by the Civil Code, in particular Section 2586 et seq.',
          'This contract is made in two copies, one for each party.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

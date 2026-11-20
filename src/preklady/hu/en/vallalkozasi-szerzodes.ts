/**
 * English version: contract for work (Hungary). Original: src/obsah/hu/vallalkozasi-szerzodes.ts
 * and src/sablony/hu/vallalkozasi-szerzodes.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-VALLALKOZASI-SZERZODES', verze: '1.0' },

  nazev: 'Contract for Work',
  nazevA: 'the contract for work',
  katalog: {
    popis: 'Tradesperson, renovation, repair – fee, deadline, handover.',
    slova: ['contract for work', 'tradesperson', 'renovation contract', 'repair', 'builder', 'lump-sum price', 'extra work', 'vállalkozási szerződés', 'átalánydíj', 'pótmunka'],
  },
  landing: {
    title: 'Contract for Work Hungary {rok} – free PDF template',
    description:
      'Contract for work (vállalkozási szerződés) under Ptk. 6:238. § in Hungary: work, deadline, lump-sum or itemised fee, advance and handover. Bilingual PDF, free.',
    perex: 'For a renovation, a repair or any work done by a tradesperson. It records what will be made, by when and for how much, and how it will be handed over.',
    obsahPopis: 'Six sections under 6:238. § et seq. of the Hungarian Civil Code (Ptk.).',
    obsah: [
      { nazev: 'Contracting parties', popis: 'Customer and contractor.' },
      { nazev: 'Subject of the contract', popis: 'Work, place, materials.' },
      { nazev: 'Completion deadline', popis: 'Start and handover.' },
      { nazev: 'Contractor’s fee', popis: 'Lump sum or itemised billing, advance, payment deadline.' },
      { nazev: 'Handover and defects', popis: 'Handover report, statutory warranty.' },
      { nazev: 'Final provisions', popis: 'Amendments in writing, two copies.' },
    ],
    kroky: [
      { nazev: 'The work', popis: 'Scope, place, deadlines.' },
      { nazev: 'The fee', popis: 'Lump sum or itemised.' },
      { nazev: 'Signing', popis: 'In two copies.' },
    ],
    online: ['The amount in words (in Hungarian) is added automatically', 'Deadlines in your calendar', 'Explanation for every field', 'Download as PDF and Word'],
    hodiSe: ['bathroom renovation, painting, tiling', 'a repair or custom-made product', 'clear terms for you as a tradesperson'],
    nehodiSe: [
      'construction that requires a building permit or notification – a construction contract (kivitelezési szerződés) is needed',
      'buying a finished product – a sale agreement (adásvételi szerződés)',
    ],
    po: [
      { nazev: 'Advance', popis: 'By bank transfer or against a receipt.' },
      { nazev: 'Changes in writing', popis: 'Additional work only after agreement.' },
      { nazev: 'Acceptance', popis: 'Handover report listing the defects.' },
    ],
    faq: [
      {
        q: 'What is the difference between surplus work (többletmunka) and additional work (pótmunka)?',
        a: 'With a lump-sum fee, the contractor may claim on top of the lump sum only the price of the additional work (pótmunka), not that of the surplus work (többletmunka) (Ptk. 6:244–6:245. §).',
      },
      { q: 'Does it have to be in writing?', a: 'As a general rule, the Civil Code (Ptk.) does not prescribe a form, but a written contract is the best evidence.' },
      { q: 'Do you store my details?', a: 'No. The document is created directly in your browser.' },
    ],
    zakony: 'The template is based on 6:238–6:245. § of the Hungarian Civil Code (Polgári Törvénykönyv).',
    souvisejiciPopis: 'More documents for orders and payments.',
  },
  vytvorit: {
    title: 'Fill in a contract for work online – Hungary, free PDF',
    description: 'Guide in English for a contract for work (vállalkozási szerződés) in Hungary, with the fee and handover. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 4 minutes',
  },

  pruvodce: {
    slovo: { n: 'contract', g: 'contract', a: 'contract', l: 'contract' },
    kroky: {
      felek: { nazev: 'Customer and contractor' },
      munka: { nazev: 'The work' },
      dij: { nazev: 'Contractor’s fee' },
    },
    pole: {
      o_jmeno: { popis: 'Customer (megrendelő) – name or company name', placeholder: 'e.g. Kovács János' },
      o_adresa: { popis: 'Customer’s address', placeholder: 'e.g. 1052 Budapest, Váci utca 10.' },
      z_jmeno: { popis: 'Contractor (vállalkozó) – name or company name', placeholder: 'e.g. Nagy Burkolás Kft.' },
      z_ico: { popis: 'Tax number (adószám, optional)' },
      z_adresa: { popis: 'Contractor’s address / registered office', placeholder: 'e.g. 4024 Debrecen, Piac utca 5.' },
      predmet: {
        popis: 'Description of the work',
        napoveda: 'Scope, materials, dimensions. You can refer to the quotation. Write it in Hungarian – the text goes into both language versions as you write it.',
        placeholder:
          'e.g. fürdőszoba burkolatcseréje (8 m²), a régi burkolat bontásával és a sitt elszállításával, a 2026. 11. 03-i árajánlat szerint (replacing the bathroom tiles (8 m²), including removing the old tiles and taking away the rubble, according to the quotation of 3 November 2026)',
      },
      misto_dila: { popis: 'Place of performance' },
      material: {
        popis: 'Who provides the materials?',
        moznosti: { zhotovitel: 'The contractor (included in the fee)', objednatel: 'The customer' },
      },
      zahajeni: { popis: 'Start of work' },
      dokonceni: { popis: 'Completion deadline' },
      typ_ceny: {
        popis: 'Type of fee',
        moznosti: { atalany: 'Lump-sum fee (átalánydíj)', teteles: 'Itemised billing (according to the cost estimate)' },
      },
      cena: { popis: 'Total fee (Ft, gross)', placeholder: 'e.g. 600000' },
      zaloha_ano: {
        popis: 'Advance',
        moznosti: { ne: 'None – the full fee on handover', ano: 'Advance, the rest on handover' },
      },
      zaloha: { popis: 'Amount of the advance (Ft)' },
      splatnost_dny: { popis: 'Payment deadline after handover (days)', placeholder: 'e.g. 8' },
      ucet: { popis: 'Contractor’s bank account number (optional)' },
      misto: { popis: 'Place', placeholder: 'e.g. Budapest' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [
      '',
      'The contractor undertakes to achieve a specific result; the customer accepts it and pays for it.',
      '',
      '',
      '',
      '',
    ],
    coDal: [
      'Print two copies; both parties sign both copies.',
      'Pay the advance by bank transfer, or ask for a receipt (átvételi elismervény) for it.',
      'Agree on surplus and additional work and on price changes in writing.',
      'On handover, inspect the work and write any defects in the handover report.',
    ],
    kontrola: [
      'Describe the work as precisely as possible (scope, materials, dimensions; the quotation can be an annex) – the contractor undertakes to deliver a result (Ptk. 6:238. §).',
      'With a lump-sum fee, the contractor may claim on top of the lump sum only the price of the additional work (pótmunka), not that of the surplus work (többletmunka) (Ptk. 6:244–6:245. §).',
      'Separate rules (construction contract – kivitelezési szerződés) apply to building or renovating a home where the work requires a building permit or notification – do not use this template there.',
      'With the signatures of two witnesses (stating their names and home addresses), the document becomes a private document with full probative force (teljes bizonyító erejű magánokirat) – this is what the transfer of a vehicle’s ownership requires. A party to the contract cannot be a witness.',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
    ],
    pripominky: {
      Munkakezdés: { nazev: 'Start of work' },
      'Teljesítés és átadás': {
        nazev: 'Completion and handover',
        popis: 'Inspect the work and record any defects in the handover report (átadás-átvételi jegyzőkönyv).',
      },
    },
  },

  dokument: {
    nazev: 'Contract for Work',
    podnadpis: 'under 6:238. § et seq. of the Hungarian Civil Code (Polgári Törvénykönyv)',
    podpisy: { vlevo: 'customer', vpravo: 'contractor' },
    clanky: [
      {
        nadpis: 'Contracting Parties',
        odstavce: [
          '**Customer:** {{o_jmeno}}, {{o_adresa}} (hereinafter: the “Customer”)',
          '**Contractor:** {{z_jmeno}}, tax number: {{z_ico}}, {{z_adresa}} (hereinafter: the “Contractor”)',
        ],
      },
      {
        nadpis: 'Subject of the Contract',
        odstavce: [
          'The Contractor undertakes to carry out the following work: {{predmet}}.',
          'Place of performance: {{misto_dila}}.',
          {
            uvodVzor: 'Materials (tick one):',
            moznosti: {
              zhotovitel: 'The Contractor shall provide the materials needed for the work; their price is included in the Contractor’s fee.',
              objednatel: 'The Customer shall provide the materials needed for the work. The Contractor shall immediately warn the Customer of any unsuitable materials.',
            },
          },
          'The Customer undertakes to accept the result of the work and to pay the Contractor’s fee.',
        ],
      },
      {
        nadpis: 'Completion Deadline',
        odstavce: [
          'The Contractor shall start the work on {{zahajeni}} and hand it over no later than {{dokonceni}}.',
          'The Customer shall provide access to the place of performance during normal working hours.',
        ],
      },
      {
        nadpis: 'Contractor’s Fee',
        odstavce: [
          {
            uvodVzor: 'The fee (tick one):',
            moznosti: {
              atalany: 'The parties agree on a gross lump-sum fee of {{cena}}. On top of this, the Contractor may claim only the price of additional work (pótmunka), and only after prior agreement in writing.',
              teteles: 'The Contractor’s fee is based on itemised billing; according to the cost estimate, it is expected to be {{cena}} gross. The Contractor may carry out work exceeding the cost estimate only with the Customer’s prior written consent.',
            },
          },
          {
            uvodVzor: 'Advance (tick one):',
            moznosti: {
              ne: 'The Contractor’s fee is due on handover of the work.',
              ano: 'The Customer shall pay an advance of {{zaloha}} on signing the contract. The remainder of the fee is due on handover of the work.',
            },
          },
          'The fee must be paid within {{splatnost_dny}} days of handover to bank account No. {{ucet}} or in cash against a receipt.',
        ],
      },
      {
        nadpis: 'Handover and Defects',
        odstavce: [
          'The parties shall draw up a report on the handover, recording the defects found and the deadline for their repair.',
          'Defective performance is governed by the statutory warranty rules (szavatosság) of the Civil Code. The Customer shall notify the Contractor of any defect discovered without delay.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'The contract may be amended only in writing. Matters not regulated here are governed by the Civil Code (Polgári Törvénykönyv), in particular 6:238. § et seq.',
          'The contract has been made in two original copies; each party receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

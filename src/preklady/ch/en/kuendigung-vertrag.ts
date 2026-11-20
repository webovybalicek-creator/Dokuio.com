/**
 * English version: notice of termination of a contract (mobile, insurance, health insurance, gym, subscription, mandate) – Switzerland.
 * Original: src/obsah/ch/kuendigung-vertrag.ts and src/sablony/ch/kuendigung-vertrag.ts.
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-KUENDIGUNG-VERTRAG', verze: '1.0' },

  nazev: 'Contract Termination Letter',
  nazevA: 'the contract termination letter',
  katalog: {
    popis: 'Cancel a mobile plan, insurance, health insurance, gym membership, subscription or mandate.',
    slova: ['cancel contract', 'termination letter', 'cancel mobile plan', 'cancel insurance', 'change health insurance', 'cancel gym membership', 'cancel subscription', 'registered letter', 'Kündigung', 'Vertrag kündigen', 'Einschreiben', 'Switzerland'],
  },
  landing: {
    title: 'Contract Termination Letter Switzerland {rok} – free PDF template',
    description:
      'Cancel a contract in Switzerland: mobile plan, insurance (Art. 35a VVG), health insurance by 30 November, gym, subscription. Bilingual PDF or Word, free.',
    perex: 'Mobile plan, household contents insurance, health insurance fund, gym or cleaning service: a clean termination letter with the contract number and the right date, sent by registered post.',
    obsahPopis: 'One letter to the provider – the variant depends on your contract.',
    obsah: [
      { nazev: 'Sender and provider', popis: 'Your details and the provider’s correspondence address.' },
      { nazev: 'Termination', popis: 'Contract number and date: next possible date, a specific date, under the VVG, basic health insurance, moving house or mandate.' },
      { nazev: 'Further requests', popis: 'Confirmation, final statement, return of equipment, end of direct debit.' },
    ],
    kroky: [
      { nazev: 'Choose the contract', popis: 'The tips show which deadlines apply.' },
      { nazev: 'Download and sign', popis: 'PDF or Word, free. The document is bilingual: German original and English translation.' },
      { nazev: 'Send by registered post', popis: 'What usually counts is receipt – allow some extra time.' },
    ],
    online: [
      'Variants for insurance, health insurance, electricity and mandates',
      'Deadlines explained, with sources',
      'Calendar reminder to check for confirmation',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'you are cancelling a mobile, internet or TV subscription',
      'you are cancelling property or supplementary insurance, or basic health insurance with your health insurance fund',
      'you are ending a gym membership, another membership or a service mandate',
    ],
    nehodiSe: [
      'giving notice on a flat – use our tenancy termination notice',
      'resigning from a job – use the employment termination notice',
      'withdrawing from a doorstep or telephone sale within 14 days – use the withdrawal (Widerruf)',
    ],
    poNadpis: 'After sending.',
    po: [
      { nazev: 'Keep the receipt', popis: 'The registered post receipt and a copy, until the confirmation arrives.' },
      { nazev: 'Pay until the end', popis: 'Stop the direct debit only after the final statement.' },
      { nazev: 'Return equipment', popis: 'Router or TV box as instructed, with a receipt.' },
    ],
    faq: [
      { q: 'Do I have to cancel by registered post?', a: 'Usually not by law, but you must be able to prove that the notice arrived and when. Registered post (Einschreiben) is the easiest way to do that. What the contract requires is set out in the general terms and conditions (AGB).' },
      { q: 'When can I cancel an insurance policy?', a: 'Any insurance contract can be terminated with three months’ notice to the end of the third or any subsequent year, even if it was concluded for longer (Art. 35a of the Insurance Contracts Act, VVG, since 1. 1. 2022 and also for older contracts). Life insurance is excluded.' },
      { q: 'By when must notice of cancelling basic health insurance reach the health insurance fund?', a: 'According to ch.ch, your letter must reach the health insurance fund by 30 November. With a 300-franc deductible in the standard model, you can also cancel to the end of June with three months’ notice.' },
      { q: 'Can I cancel my electricity supplier and switch?', a: 'Households using less than 100 MWh per year cannot choose their supplier (ElCom). When you move, you deregister with the local electricity company – there is the “Moving house” variant for that.' },
      { q: 'Can I end a mandate at any time?', a: 'Yes, under Art. 404 OR a mandate (Auftrag) can be revoked or terminated by either party at any time. Whoever terminates at an inopportune time must compensate the resulting damage. For contracts for work (Werkvertrag), Art. 377 OR applies.' },
      { q: 'Do you store my data?', a: 'No. The termination letter is created exclusively in your browser.' },
    ],
    zakony:
      'The template is based on Art. 35a and 42 of the Insurance Contracts Act (Versicherungsvertragsgesetz, VVG), Art. 404 and 377 of the Swiss Code of Obligations (OR) and information from ch.ch (health insurance), ElCom (electricity) and BAKOM (ombudscom). Deadlines for telecoms, gyms and subscriptions are set by the contract and the general terms.',
    souvisejiciPopis: 'More termination letters and other letters, also free.',
  },
  vytvorit: {
    title: 'Contract Termination (Switzerland) online – mobile, insurance',
    description: 'Termination letter for a mobile plan, insurance, health insurance, gym, subscription or mandate under Swiss law. Bilingual PDF or Word, free.',
    podnadpis: 'Free · result as PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'termination letter', g: 'termination letter', a: 'termination letter', l: 'termination letter' },
    kroky: {
      kunde: { nazev: 'Your details', popis: 'Who concluded the contract. Write your name and address as the provider knows them.' },
      vertrag: { nazev: 'Provider and contract', popis: 'You will find these details in the contract, on the invoice or in your customer account.' },
      kuendigung: { nazev: 'Termination' },
    },
    pole: {
      k_jmeno: { popis: 'First name and surname', napoveda: 'As in the contract (for a company: company name).', placeholder: 'e.g. Anna Muster' },
      k_narozeni: { popis: 'Date of birth (optional)', napoveda: 'Helps the provider find you if the contract number is missing.' },
      k_adresa: { popis: 'Address', napoveda: 'Address from the contract or your current postal address.', placeholder: 'e.g. Bahnhofstrasse 12, 8001 Zürich' },
      k_kontakt: { popis: 'Phone or e-mail (optional)', napoveda: 'Where the provider can send the confirmation.', placeholder: 'e.g. anna.muster@example.ch' },
      typ: {
        popis: 'What are you cancelling?',
        napoveda: 'Depending on the contract, we show the applicable rules in the tips below.',
        moznosti: {
          telekom: 'Mobile plan, internet or TV',
          versicherung: 'Insurance (household contents, liability, car, supplementary …)',
          krankenkasse: 'Health insurance fund – basic insurance',
          strom: 'Electricity – deregistration when moving',
          abo: 'Gym, subscription or membership',
          auftrag: 'Service / mandate (cleaning, consulting, fiduciary …)',
          sonstiges: 'Other contract',
        },
      },
      f_nazev: { popis: 'Provider (company)', napoveda: 'Exact name from the invoice or contract.', placeholder: 'e.g. Muster Fitness AG' },
      f_adresa: { popis: 'Provider’s address', napoveda: 'Correspondence address from the general terms (AGB) or the website – send it to this address.', placeholder: 'e.g. Postfach, 3001 Bern' },
      cislo: { popis: 'Contract, customer or policy number', napoveda: 'The most important detail – it is used to match your notice to the contract.', placeholder: 'e.g. 12.345.678' },
      vertrag_datum: { popis: 'Contract start date (optional)', napoveda: 'From the contract or policy. Important for insurance because of the three-year rule.' },
      gegenstand: { popis: 'What exactly? (optional)', napoveda: 'E.g. phone number, address of the flat and meter number, membership number, name of the subscription.', placeholder: 'e.g. Rufnummer 079 123 45 67 (phone number)' },
      art: {
        popis: 'How are you terminating?',
        napoveda: 'If in doubt, choose “next possible date”. The variants for insurance, health insurance, electricity and mandates only fit those contracts.',
        moznosti: {
          naechst: 'With effect from the next possible date',
          termin: 'On a specific date (alternatively the next possible date)',
          vvg: 'Insurance: ordinary termination under Art. 35a VVG',
          schaden: 'Insurance: after partial damage (Art. 42 VVG)',
          kvg: 'Health insurance fund: basic insurance to the end of the year',
          umzug: 'Electricity: deregistration due to moving house',
          auftrag: 'Mandate: revocation under Art. 404 OR, immediately',
        },
      },
      termin: { popis: 'End of contract or moving-out date', napoveda: 'For insurance, the end of the insurance year; for basic health insurance, 31 December; when moving, the day you hand back the flat.' },
      schaden_nr: { popis: 'Claim number (optional)', napoveda: 'The number the insurer gave you for the claim.', placeholder: 'e.g. S-2026-0042' },
      neue_adresse: { popis: 'New address (for the final invoice)', napoveda: 'Where the final invoice should be sent.', placeholder: 'e.g. Seeweg 3, 6003 Luzern' },
      bitten: {
        popis: 'What else would you like? (optional)',
        napoveda: 'The confirmation gives you certainty about the end date. With an IBAN, a credit balance is refunded faster.',
        moznosti: {
          bestaetigung: 'Written confirmation with the end date',
          abrechnung: 'Final statement and refund of any credit balance',
          geraete: 'Information on returning equipment',
          lastschrift: 'End the direct debit after the final statement',
        },
      },
      iban: { popis: 'IBAN for a credit balance', napoveda: 'Your account for any refund.', placeholder: 'CH00 0000 0000 0000 0000 0' },
      misto: { popis: 'Place', napoveda: 'We take the town from your address.', placeholder: 'e.g. Zürich' },
      datum: { popis: 'Date', napoveda: 'Today’s date is pre-filled.' },
    },
    vysvetleni: [
      'Who is giving notice – the person who concluded the contract.',
      'Who the notice is addressed to.',
      'The termination itself. The number tells the provider which contract is meant; the variant determines when it ends.',
      'What else you need from the provider. All optional.',
    ],
    coDal: [
      'Sign by hand and send by registered post (Einschreiben) – or in the way the general terms (AGB) provide (e.g. customer account). Keep the registered post receipt.',
      'What usually counts is when the notice reaches the provider, not when you send it. Allow a few days’ margin.',
      'Keep paying until the contract ends. Stop the standing order or direct debit (Lastschrift) only after the final statement.',
      'Return borrowed equipment (router, TV box, access badge) as instructed and get a receipt for the return.',
      'Keep a copy of the notice until the confirmation and final statement have arrived.',
    ],
    kontrola: [
      'Copy the contract, customer or policy number exactly – the provider uses it to match your notice.',
      'The notice period and form are set out in the contract and the general terms (AGB). If you are unsure, choose “next possible date” – the contract then ends at the earliest possible moment.',
      'Mobile, internet, TV: the notice period and minimum contract term are set by the provider’s general terms. In a dispute about termination or contract term, the conciliation body [ombudscom](https://www.bakom.admin.ch/de/wann-kann-ich-mich-an-die-ombudscom-wenden) can help. If you are switching to another provider and keeping your number, first ask the new provider how number porting works.',
      'Insurance: any contract can be terminated with three months’ notice to the end of the third or any subsequent year, in writing or in another form that allows proof by text ([Art. 35a VVG](https://www.fedlex.admin.ch/eli/cc/24/719_735_717/de#art_35_a)). Since 1. 1. 2022 this also applies to older contracts. Life insurance is excluded. The contract may provide for shorter periods.',
      'Insurance after partial damage: you can withdraw from the contract at the latest when the compensation is paid out ([Art. 42 VVG](https://www.fedlex.admin.ch/eli/cc/24/719_735_717/de#art_42)). Check the details in your general insurance conditions (AVB).',
      'Health insurance fund (Krankenkasse) – basic insurance (Grundversicherung): your letter must reach the fund by 30 November; with a 300-franc deductible in the standard model, also to the end of June with three months’ notice ([ch.ch](https://www.ch.ch/de/gesundheit/krankenkasse/krankenkasse-abschliessen--wechseln-oder-kundigen/)). Supplementary insurance has its own deadlines under the contract.',
      'Electricity: households using less than 100 MWh per year cannot freely choose their electricity supplier ([ElCom](https://www.elcom.admin.ch/de/grundversorgung-und-freier-markt)). When you move, deregister with the local electricity company and note the meter reading.',
      'Mandate (e.g. cleaning, consulting, fiduciary services, coaching): a mandate can be revoked or terminated at any time; whoever terminates at an inopportune time must compensate the resulting damage ([Art. 404 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_404)). For a contract for work (Werkvertrag, e.g. a tradesperson), by contrast, Art. 377 OR applies: withdrawal only against payment for the work done and full indemnification.',
      'Gym, subscription, membership: the term, automatic renewal and notice period are set by the contract and the general terms. Give notice in good time before the renewal.',
    ],
    pripominky: {
      'Bestätigung der Kündigung prüfen': {
        nazev: 'Check confirmation of the termination',
        popis: 'No confirmation received? Contact the provider and have the registered post receipt ready.',
      },
      'Vertrag endet': {
        nazev: 'Contract ends',
        popis: 'End standing orders and direct debits only after the final statement.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Termination',
    podnadpis: 'Termination of a contract in accordance with the contract, the general terms (AGB) and the law',
    podpisy: { vlevo: 'Customer', vpravo: 'Received for the provider (if delivered in person)' },
    clanky: [
      {
        nadpis: 'Sender',
        odstavce: ['{{k_jmeno}}, born {{k_narozeni}}, {{k_adresa}}, contact: {{k_kontakt}}'],
      },
      {
        nadpis: 'By registered post to',
        odstavce: ['{{f_nazev}}, {{f_adresa}}'],
      },
      {
        nadpis: 'Termination',
        odstavce: [
          'Dear Sir or Madam,',
          'I hereby terminate contract No. {{cislo}} dated {{vertrag_datum}} ({{gegenstand}}).',
          {
            uvodVzor: 'Variant (tick one):',
            moznosti: {
              naechst: 'The termination takes effect on the next possible date in accordance with the contract, the general terms and the law.',
              termin: 'The termination takes effect on {{termin}}, or alternatively on the next possible date.',
              vvg: 'I terminate the insurance by ordinary notice under Art. 35a VVG with effect from {{termin}}, or alternatively on the next possible date.',
              schaden: 'Under Art. 42 VVG, I withdraw from the contract following partial damage No. {{schaden_nr}}.',
              kvg: 'I terminate the compulsory health care insurance (basic insurance) with effect from {{termin}}.',
              umzug: 'Because I am moving house, I deregister with effect from {{termin}}. Please read the meter on that day and send the final invoice to my new address: {{neue_adresse}}.',
              auftrag: 'Under Art. 404 para. 1 OR, I revoke the mandate with immediate effect. Please invoice the services provided up to today.',
            },
          },
        ],
      },
      {
        nadpis: 'Further Requests',
        odstavce: [
          {
            uvod: 'I also ask you for:',
            moznosti: {
              bestaetigung: 'written confirmation of the termination stating the date on which the contract ends',
              abrechnung: 'the final statement and the refund of any credit balance to the account IBAN {{iban}}',
              geraete: 'information on how and where to return borrowed equipment',
              lastschrift: 'the termination of the direct debit after the final statement',
            },
          },
          'Yours faithfully',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

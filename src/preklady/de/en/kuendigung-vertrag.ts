/**
 * English version: notice of termination of a contract (Germany). Original: src/obsah/de/kuendigung-vertrag.ts
 * and src/sablony/de/kuendigung-vertrag.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-KUENDIGUNG-VERTRAG', verze: '1.0' },

  nazev: 'Contract Cancellation Letter',
  nazevA: 'the contract cancellation letter',
  katalog: {
    popis: 'Cancel a mobile phone, internet, insurance, electricity, gym or subscription contract.',
    slova: ['cancel a contract', 'cancellation letter', 'notice of termination', 'cancel mobile contract', 'cancel internet', 'cancel insurance', 'cancel electricity contract', 'cancel gym membership', 'cancel subscription', 'cancel membership', 'special termination', 'Kündigung', 'Vertrag kündigen', 'Kündigungsschreiben', 'Sonderkündigung'],
  },
  landing: {
    title: 'Contract Cancellation Letter Germany {rok} – free PDF template',
    description:
      'Cancellation letter for a phone, internet, insurance, energy, gym or subscription contract in Germany, explained in English. Bilingual PDF or Word, free.',
    perex: 'Mobile contract, gym, insurance or streaming subscription: cancel at the earliest possible date – with your customer number, a request for confirmation and an overview of the statutory notice periods.',
    obsahPopis: 'A notice of termination (Kündigung) for the contracts consumers most often have.',
    obsah: [
      { nazev: 'Sender and provider', popis: 'Your details and the company’s address.' },
      { nazev: 'Contract', popis: 'Type, tariff, customer or contract number, phone number or meter.' },
      { nazev: 'Termination', popis: 'At the earliest possible date, on a specific date or as extraordinary termination (Sonderkündigung).' },
      { nazev: 'Requests', popis: 'Confirmation with the end date of the contract, revocation of the direct debit, no calls trying to win you back.' },
    ],
    kroky: [
      { nazev: 'Choose the contract', popis: 'Phone, insurance, electricity, gym, subscription or other.' },
      { nazev: 'Enter the number', popis: 'Customer or contract number from the bill or your customer account.' },
      { nazev: 'Send it with proof', popis: 'Registered mail, fax or e-mail – what counts is receipt.' },
    ],
    online: ['Statutory notice periods for each type of contract as tips', 'Calendar reminder for the cancellation confirmation', 'Signature on screen', 'Download as PDF and Word'],
    hodiSe: [
      'you are a customer cancelling a contract with a company',
      'mobile, internet, electricity, gas, insurance, gym or subscription contract',
      'extraordinary termination after a price increase or a move',
    ],
    nehodiSe: [
      'terminating the tenancy of a flat – use the notice of termination of a tenancy agreement (Kündigung des Mietvertrags)',
      'terminating an employment contract – strict written form applies there',
      'withdrawing from an online purchase – that is what the withdrawal (Widerruf) is for',
    ],
    poNadpis: 'After sending.',
    po: [
      { nazev: 'Confirmation', popis: 'Keep it together with the date the contract ends.' },
      { nazev: 'Proof of receipt', popis: 'Keep the posting receipt, fax transmission report or e-mail.' },
      { nazev: 'Direct debits', popis: 'Check your bank statements after the contract ends.' },
    ],
    faq: [
      { q: 'Is a cancellation by e-mail enough?', a: 'Standard terms and conditions (AGB) may not require a stricter form for cancellation than text form (Textform) (Section 309 No. 13 of the German Civil Code, BGB); an e-mail is then usually enough. What matters is proof that it arrived.' },
      { q: 'How long is the notice period for a mobile phone contract?', a: 'The initial term may be at most 24 months. After that, a tacitly extended contract can be cancelled at any time with one month’s notice (Section 56 of the Telecommunications Act, TKG).' },
      { q: 'What applies to gyms and subscriptions?', a: 'For contracts for regular services concluded on or after 1 March 2022, standard terms may only extend the contract for an indefinite period, and it must then be possible to cancel with no more than one month’s notice (Section 309 No. 9 BGB).' },
      { q: 'What is the cancellation button?', a: 'Anyone offering contracts online must make cancellation possible via a button “Cancel contracts here” (“Verträge hier kündigen”). If it is missing, you can cancel at any time without notice (Section 312k BGB).' },
      { q: 'When can I cancel an insurance policy?', a: 'Open-ended contracts at the end of the current insurance period, with the agreed notice of one to three months (Section 11 of the Insurance Contract Act, VVG); in property insurance also after a claim (Section 92 VVG).' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony:
      'The template is based on Sections 309 and 312k of the German Civil Code (BGB), Sections 56 and 60 of the Telecommunications Act (TKG), Sections 41 and 41b of the Energy Industry Act (EnWG), Section 20 StromGVV/GasGVV (ordinances on basic supply of electricity and gas) and Sections 11 and 92 of the Insurance Contract Act (VVG). The periods in your individual case are set out in your contract.',
    souvisejiciPopis: 'More cancellations and letters, also free.',
  },
  vytvorit: {
    title: 'Write a cancellation letter online – Germany, free PDF',
    description: 'Guide in English for cancelling a phone, insurance, electricity, gym or subscription contract in Germany. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice of termination', g: 'notice of termination', a: 'notice of termination', l: 'notice of termination' },
    kroky: {
      kunde: { nazev: 'Your details', popis: 'Exactly as the provider has you on record as the contracting party.' },
      vertrag: { nazev: 'Provider and contract', popis: 'You will find the details in the contract, on the bill or in your customer account.' },
      kuendigung: { nazev: 'Termination' },
    },
    pole: {
      k_name: { popis: 'First name and surname', napoveda: 'Name of the contract holder.', placeholder: 'e.g. Anna Schmidt' },
      k_adresse: { popis: 'Address', napoveda: 'The address the provider has for you (or your current one).', placeholder: 'e.g. Lindenstraße 7, 10115 Berlin' },
      k_geburt: { popis: 'Date of birth (optional)', napoveda: 'Helps insurers and energy suppliers identify you clearly.' },
      k_kontakt: { popis: 'E-mail for the confirmation (optional)', napoveda: 'The provider can send the cancellation confirmation there.', placeholder: 'e.g. anna@email.de' },
      a_name: { popis: 'Provider (company)', napoveda: 'Full name of the company or association.', placeholder: 'e.g. Muster Telekom GmbH' },
      a_adresse: { popis: 'Provider’s address', napoveda: 'Postal address from the legal notice (Impressum), the contract or the bill.', placeholder: 'e.g. Postfach 12 34, 40210 Düsseldorf' },
      art: {
        popis: 'Which contract?',
        napoveda: 'The statutory notice periods depend on the type – we show the most important ones in the tips before download.',
        moznosti: {
          telekom: 'Mobile, internet or landline contract',
          versicherung: 'Insurance',
          energie: 'Electricity or gas',
          fitness: 'Gym or membership',
          abo: 'Subscription or service (magazine, streaming, delivery service …)',
          sonstiges: 'Other contract',
        },
      },
      bezeichnung: { popis: 'Name of the contract', napoveda: 'Tariff, product or type of insurance – as stated on the bill.', placeholder: 'e.g. Tarif „Mobil L“ / Hausratversicherung (home contents insurance) / Premium-Mitgliedschaft' },
      nummer: { popis: 'Customer or contract number', napoveda: 'The most important entry – for insurance, the policy number (Versicherungsscheinnummer).', placeholder: 'e.g. 123456789' },
      rufnummer: { popis: 'Phone number or line', napoveda: 'The phone number or line identifier of the contract.', placeholder: 'e.g. 0171 1234567' },
      zaehler: { popis: 'Meter number and supply point', napoveda: 'Meter number from the annual bill and the address of the supply point.', placeholder: 'e.g. Zähler 1ESY1160123456, Lindenstraße 7, Berlin (Zähler = meter)' },
      zeitpunkt: {
        popis: 'When are you cancelling?',
        napoveda: '“At the earliest possible date” is safest: if your preferred date is too early, the earliest permissible date still applies.',
        moznosti: {
          naechst: 'Ordinary termination at the earliest possible date',
          datum: 'Ordinary termination on a specific date',
          sonder: 'Extraordinary / special termination (e.g. price increase, move)',
        },
      },
      ende_datum: { popis: 'Requested end of contract', napoveda: 'Must fit the notice period in the contract; otherwise the earliest possible date applies.' },
      sonder_grund: {
        popis: 'Reason for the special termination',
        napoveda: 'Short and specific, with a date – e.g. the letter about the price increase, or a move.',
        placeholder: 'e.g. Preiserhöhung laut Ihrem Schreiben vom 1. 10. 2026 zum 1. 12. 2026 (price increase according to your letter of 1 October 2026, effective 1 December 2026)',
      },
      bitten: {
        popis: 'What else are you asking for?',
        napoveda: 'The confirmation with the end date of the contract is your proof. A SEPA direct debit mandate (SEPA-Lastschriftmandat) you have given then ends when the contract ends.',
        moznosti: {
          bestaetigung: 'Written confirmation with the end date of the contract',
          lastschrift: 'Revoke the SEPA direct debit mandate as of the end of the contract',
          werbung: 'No calls or advertising to win you back',
        },
      },
      ort: { popis: 'Place', napoveda: 'We take it from your address.', placeholder: 'e.g. Berlin' },
      datum: { popis: 'Date', napoveda: 'Today’s date pre-filled.' },
    },
    vysvetleni: [
      'Who is cancelling – exactly as the provider has you on record.',
      'Who you are sending the notice of termination to.',
      'Which contract ends and when.',
    ],
    coDal: [
      'Sign it and send it with proof: drop-in registered mail (Einwurf-Einschreiben), fax with a transmission report, or e-mail or contact form with a copy – what matters is that the provider receives it.',
      'If the contract was concluded online, you can also cancel via the “Cancel contracts here” (“Verträge hier kündigen”) button on the provider’s website; save the confirmation page.',
      'Keep the cancellation confirmation with the end date of the contract. If none arrives, ask.',
      'After the contract ends, check your bank statements and reverse any unauthorised direct debits.',
    ],
    kontrola: [
      'Copy the customer or contract number exactly – the provider uses it to match the cancellation to your contract.',
      'The term and notice period are set out in the contract or the standard terms and conditions (AGB). For contracts with companies for regular services (e.g. gym, subscription) concluded on or after 1 March 2022, a tacit extension may only be for an indefinite period with no more than one month’s notice ([Section 309 No. 9 BGB](https://www.gesetze-im-internet.de/bgb/__309.html), [Art. 229 Section 60 EGBGB](https://www.gesetze-im-internet.de/bgbeg/art_229__60.html)). This does not apply to insurance.',
      'Mobile, internet, landline: an initial term of at most 24 months; after it expires, a tacitly extended term can be cancelled at any time with one month’s notice ([Section 56 TKG](https://www.gesetze-im-internet.de/tkg_2021/__56.html)). If you move and the service is not offered at your new home: one month’s notice ([Section 60 TKG](https://www.gesetze-im-internet.de/tkg_2021/__60.html)).',
      'Electricity and gas under basic supply (Grundversorgung): two weeks’ notice, text form is enough ([Section 20 StromGVV](https://www.gesetze-im-internet.de/stromgvv/__20.html), [Section 20 GasGVV](https://www.gesetze-im-internet.de/gasgvv/__20.html)). Special contracts (Sonderverträge): notice period as stated in the contract; price changes give a special right of termination, and a move may allow termination with six weeks’ notice ([Sections 41 and 41b EnWG](https://www.gesetze-im-internet.de/enwg_2005/__41b.html)).',
      'Insurance: open-ended contracts end at the end of the current insurance period; under the contract the notice period is one to three months ([Section 11 VVG](https://www.gesetze-im-internet.de/vvg_2008/__11.html)). After an insured event, you can cancel up to one month after the negotiations on compensation have ended ([Section 92 VVG](https://www.gesetze-im-internet.de/vvg_2008/__92.html), property insurance).',
      'Standard terms (AGB) may not require a stricter form for cancellation than text form ([Section 309 No. 13 BGB](https://www.gesetze-im-internet.de/bgb/__309.html)) – an e-mail is then usually enough. A handwritten signature never hurts.',
      'Contracts concluded online: the provider must offer a cancellation button; if it is missing, you can cancel at any time without notice ([Section 312k BGB](https://www.gesetze-im-internet.de/bgb/__312k.html)).',
      'Unsure about the notice period? Cancel “at the earliest possible date” (“zum nächstmöglichen Zeitpunkt”) – the earliest permissible date then applies automatically.',
    ],
    pripominky: {
      'Kündigungsbestätigung erhalten?': {
        nazev: 'Cancellation confirmation received?',
        popis: 'If there is still no confirmation: ask the provider and have your proof of receipt ready.',
      },
      'Vertragsende – Lastschriften prüfen': { nazev: 'End of contract – check direct debits' },
    },
  },

  dokument: {
    nazev: 'Notice of Termination',
    podnadpis: 'Termination of a contract by the customer',
    podpisy: { vlevo: 'customer', vpravo: 'receipt confirmed (if delivered in person)' },
    clanky: [
      {
        nadpis: 'Sender',
        odstavce: ['{{k_name}}, born on {{k_geburt}}, {{k_adresse}}, e-mail: {{k_kontakt}}'],
      },
      {
        nadpis: 'To',
        odstavce: ['{{a_name}}, {{a_adresse}}'],
      },
      {
        nadpis: 'Termination of My Contract',
        odstavce: [
          {
            uvodVzor: 'Contract (please tick):',
            moznosti: {
              telekom: 'Contract: telecommunications contract {{bezeichnung}}, phone number/line {{rufnummer}}, customer/contract number {{nummer}}',
              versicherung: 'Contract: insurance contract {{bezeichnung}}, policy number {{nummer}}',
              energie: 'Contract: energy supply contract {{bezeichnung}}, {{zaehler}}, customer/contract number {{nummer}}',
              fitness: 'Contract: membership {{bezeichnung}}, membership/contract number {{nummer}}',
              abo: 'Contract: subscription/service {{bezeichnung}}, customer/contract number {{nummer}}',
              sonstiges: 'Contract: {{bezeichnung}}, customer/contract number {{nummer}}',
            },
          },
          {
            uvodVzor: 'Date (please tick):',
            moznosti: {
              naechst: 'I hereby give ordinary notice of termination of the above contract, in due time, at the earliest possible date.',
              datum: 'I hereby give ordinary notice of termination of the above contract, in due time, as of {{ende_datum}}, or alternatively at the earliest possible date.',
              sonder: 'I hereby give extraordinary notice of termination of the above contract for the following reason: {{sonder_grund}}. Alternatively, I give ordinary notice of termination at the earliest possible date.',
            },
          },
          {
            uvod: 'I also ask you:',
            moznosti: {
              bestaetigung: 'to confirm to me in writing or by e-mail receipt of this notice of termination and the end date of the contract',
              lastschrift: 'to note that I revoke the SEPA direct debit mandate I have given with effect from the end of the contract; I will pay any outstanding amounts by bank transfer upon invoice',
              werbung: 'to refrain from calls and advertising aimed at winning me back',
            },
          },
          'Yours faithfully',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

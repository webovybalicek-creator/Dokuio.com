/**
 * English version: notice of termination of a service contract (Czech Republic). Original: src/obsah/cz/vypoved-smlouvy.ts
 * and src/sablony/cz/vypoved-smlouvy.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-VYPOVED-SMLOUVY', verze: '1.0' },

  nazev: 'Contract Termination Letter',
  nazevA: 'the contract termination letter',
  katalog: {
    popis: 'Mobile operator, internet, energy, insurance, gym, subscription.',
    slova: ['cancel contract', 'terminate contract', 'notice of termination', 'mobile operator', 'phone contract', 'internet', 'electricity', 'gas', 'energy supplier', 'insurance', 'gym', 'fitness', 'subscription', 'výpověď smlouvy', 'zrušení smlouvy'],
  },
  landing: {
    title: 'Contract Termination Letter Czech Republic {rok} – free PDF template',
    description:
      'Terminate a contract with a mobile operator, energy supplier, insurer, gym or subscription in the Czech Republic. Statutory time limits. Free bilingual PDF and Word.',
    perex: 'One letter for mobile, internet, electricity and gas, insurance, the gym and subscriptions. Choose the type of contract and the ground; the guide adds the correct section of the law and explains the time limits.',
    obsahPopis: 'A short letter that the company will actually match to the right contract.',
    obsah: [
      { nazev: 'Customer', popis: 'Who concluded the contract – name, address, contact.' },
      { nazev: 'Provider', popis: 'Name, company ID number (IČO) and address for delivery.' },
      { nazev: 'Notice of termination', popis: 'Contract number, what it concerns and how you are ending it – on the earliest possible date, by a date, after renewal, on a price change.' },
      { nazev: 'Further requests', popis: 'Confirmation of the notice, final bill and refund of overpayment, return of equipment.' },
    ],
    kroky: [
      { nazev: 'Choose the type of contract', popis: 'Operator, energy, insurance, membership, subscription or other.' },
      { nazev: 'Select the ground', popis: 'The guide explains the time limits and adds the law. The document is bilingual: Czech original and English translation.' },
      { nazev: 'Deliver it with proof', popis: 'By registered post, via a data box (datová schránka) or as the terms and conditions specify.' },
    ],
    online: ['The correct section of the law for the type of contract and ground', 'Statutory time limits explained for operators, energy and insurance', 'Request for confirmation and refund in one click', 'Download as PDF and Word'],
    hodiSe: ['you are cancelling a mobile tariff, internet or TV', 'you are leaving an electricity or gas supplier or disagree with a price increase', 'you are finishing with a gym, a subscription or home insurance'],
    nehodiSe: [
      'you are cancelling compulsory motor insurance (povinné ručení) – use our separate motor insurance cancellation template',
      'you are moving to another operator and keeping your number – the new operator arranges the termination',
      'you concluded the contract online less than 14 days ago – a withdrawal from the contract (odstoupení od smlouvy) is more suitable',
      'you are ending the tenancy of a flat – use the notice to end a tenancy',
    ],
    poNadpis: 'After sending.',
    po: [
      { nazev: 'Keep proof of delivery', popis: 'The delivery confirmation or the data box receipt, until the company confirms the notice.' },
      { nazev: 'Pay until the end', popis: 'The service is paid for until the notice period expires.' },
      { nazev: 'Final bill', popis: 'Check it, and only then cancel the direct debit or standing order.' },
    ],
    faq: [
      { q: 'How long is the notice period?', a: 'Generally as set by the contract and the terms and conditions. The law covers only some cases: for electricity and gas, a household with an open-ended contract has a notice period of 3 months from the first day of the month after delivery (a shorter agreed period applies). An automatically renewed contract with an operator can be terminated free of charge with a notice period of no more than one month.' },
      { q: 'Will I pay the operator for early termination?', a: 'A consumer pays compensation only if a fixed-term contract ends within 3 months of being concluded, and at most one twentieth of the sum of the remaining monthly fees. A subsidised phone or other equipment is paid for separately if you keep it.' },
      { q: 'My energy supplier is raising prices. Can I leave?', a: 'Yes. If the price rises or the terms change, you as a household can terminate the contract without penalty no later than 10 days before the change takes effect. This does not apply if the change results only from an increase in regulated price components, taxes or fees.' },
      { q: 'How do I cancel insurance?', a: 'Most often to the end of the insurance period – the insurer must receive the notice at least 6 weeks in advance. Within 2 months of taking out the policy an 8-day notice period applies; after an insured event you can give notice within 3 months of reporting it, with a one-month notice period.' },
      { q: 'How should I send the notice?', a: 'In a way that lets you prove delivery: by registered post with proof of delivery, to a data box or in person against confirmation. Many companies also accept a form in your customer account – you will find the method in the terms and conditions.' },
    ],
    zakony:
      'The template is based on Sections 1998, 1999, 2805 and 2807 of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník), Section 63b of Act No. 127/2005 Coll., on electronic communications (zákon o elektronických komunikacích), Sections 11a to 11d of Act No. 458/2000 Coll., the Energy Act (energetický zákon), and on information from the Czech Telecommunication Office (ČTÚ) and the Energy Regulatory Office (ERÚ). Otherwise, the notice period is set by your contract and the terms and conditions.',
    souvisejiciPopis: 'More notices and documents for ending contracts, also free.',
  },
  vytvorit: {
    title: 'Fill in a contract termination letter online – Czech Republic, PDF',
    description: 'Guide in English for terminating a contract with an operator, energy supplier, insurer or gym in the Czech Republic. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      zakaznik: { nazev: 'Customer', popis: 'Who concluded the contract. Write the details as the company has them in the contract.' },
      smlouva: { nazev: 'Company and contract', popis: 'You will find the details in the contract, on an invoice or in your customer account.' },
      vypoved: { nazev: 'Notice of termination' },
    },
    pole: {
      z_jmeno: { popis: 'Full name', napoveda: 'As stated in the contract (for a company, its name and company ID number, IČO).', placeholder: 'e.g. Jan Novák' },
      z_narozeni: { popis: 'Date of birth (optional)', napoveda: 'Helps the company find you if you do not have the contract number to hand.' },
      z_adresa: { popis: 'Address', napoveda: 'The address in the contract, or your current correspondence address.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      z_kontakt: { popis: 'Phone or e-mail (optional)', napoveda: 'Where the company can send you confirmation of the notice.', placeholder: 'e.g. jan.novak@email.cz' },
      typ: {
        popis: 'What you are terminating',
        napoveda: 'Depending on the type, we show you the statutory time limits and add the correct section of the law to the letter. Compulsory motor insurance has its own template.',
        moznosti: {
          operator: 'Mobile tariff, internet or TV (operator)',
          pojisteni: 'Insurance (home, accident, comprehensive car cover…), not compulsory motor insurance',
          energie: 'Electricity or gas supply',
          clenstvi: 'Gym, fitness centre, club or other membership',
          predplatne: 'Subscription or service (magazine, streaming, cleaning…)',
          jine: 'Other contract',
        },
      },
      f_nazev: { popis: 'Company (provider)', napoveda: 'The exact name from the invoice or contract.', placeholder: 'e.g. Sportcentrum Říčany s.r.o.' },
      f_ico: { popis: 'IČO (optional)', napoveda: 'The company ID number is on the invoice. Use the button to fill in the name and registered office from the register.', placeholder: 'e.g. 12345678' },
      f_adresa: { popis: 'Address for delivery', napoveda: 'Correspondence address from the terms and conditions or the company’s website (it may differ from the registered office). Send the notice there.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      cislo_smlouvy: { popis: 'Contract number or customer number', napoveda: 'The most important detail – the company uses it to match the notice to your contract.', placeholder: 'e.g. 1234567890' },
      smlouva_datum: { popis: 'Date concluded (optional)', napoveda: 'From the contract. For insurance and operators it tells you which time limits apply.' },
      predmet: { popis: 'What the notice concerns (optional)', napoveda: 'Details: phone number, address and EAN/EIC of the supply point, membership card number, tariff name…', placeholder: 'e.g. tel. číslo 777 123 456 / odběrné místo Nerudova 12, EAN … (phone number / supply point)' },
      duvod: {
        popis: 'How you are ending the contract',
        napoveda: 'Most common is ordinary notice under the contract. Special grounds allow shorter or free termination – see the time limits in the tips below.',
        moznosti: {
          smlouva: 'Ordinary notice to the earliest possible date',
          ke_dni: 'Notice to a specific date (if the notice period allows it)',
          prodlouzeni: 'The contract renews automatically / has been renewed',
          zmena: 'I disagree with a notified change in price or terms',
          obdobi: 'Insurance: to the end of the insurance period',
          dva_mesice: 'Insurance: within 2 months of taking out the policy',
          udalost: 'Insurance: within 3 months of reporting an insured event',
        },
      },
      konec_datum: { popis: 'End as of', napoveda: 'If the notice period cannot expire by this date, the contract ends on the next possible later date.' },
      zmena_datum: { popis: 'Date of the notice of change', napoveda: 'When the company informed you of the change (letter, e-mail, text message). The time limit runs from this date.' },
      udalost_cislo: { popis: 'Claim number (optional)', napoveda: 'The claim number the insurer assigned to you.', placeholder: 'e.g. 4321/2026' },
      zadosti: {
        popis: 'What else you want from the company (optional)',
        napoveda: 'A confirmation gives you certainty about when the contract ends. An overpayment is refunded faster if you give an account number.',
        moznosti: {
          potvrzeni: 'Written confirmation of the notice and the end date',
          vyuctovani: 'Final bill and refund of overpayment',
          zarizeni: 'Instructions for returning loaned equipment',
        },
      },
      ucet: { popis: 'Account number for the refund', napoveda: 'Your account, where the company should send any overpayment.', placeholder: '123456789/0100' },
      misto: { popis: 'Place (town)', napoveda: 'We pre-fill it from your address.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date', napoveda: 'We have pre-filled today’s date.' },
    },
    vysvetleni: [
      'Who gives notice – the person who concluded the contract.',
      'Who you are sending the notice to.',
      'The notice itself. The contract number tells the company which contract it concerns; the ground determines when the contract ends.',
      'What else you need from the company. All optional.',
    ],
    coDal: [
      'Sign the notice and deliver it in a way you can prove: by registered post with proof of delivery, to a data box (datová schránka), in person against confirmation, or by the method stated in the terms and conditions (e.g. a form in your customer account).',
      'The notice period usually runs from delivery, not from sending. Do not leave it to the last minute.',
      'You pay for the service until the end of the notice period. Cancel the standing order or direct debit only after the last bill.',
      'Return loaned equipment (router, set-top box, chip) as the company instructs and ask for confirmation of the return.',
      'Keep a copy of the notice and the proof of delivery until you receive confirmation and the final bill.',
    ],
    kontrola: [
      'Copy the contract number or customer number exactly from the invoice or contract – the company uses it to match the notice.',
      'You will find the notice period and how to give notice in the contract and the (general) terms and conditions. The letter does not have to state it – the contract will end on the earliest possible date.',
      'Operator: after renewal, you can terminate a fixed-term contract with automatic renewal at any time free of charge with a notice period of no more than one month. If the contract is changed to your disadvantage, you can terminate it free of charge within 1 month of being notified of the change. Compensation for early termination can be demanded from a consumer only if the contract ends within 3 months of being concluded, and at most 1/20 of the remaining monthly fees (a subsidised phone is paid separately). Details: [ČTÚ – ending a contract](https://ctu.gov.cz/ukonceni-smlouvy).',
      'Moving to another operator and keeping your number? Do not write a notice – the new operator arranges the number transfer and the termination of the old contract.',
      'Electricity and gas (household): an open-ended contract can be terminated with a notice period of 3 months from the first day of the month after delivery (a shorter agreed period applies). Terminate a fixed-term contract with automatic renewal no later than 20 days before the agreed term ends. If the price rises, you can terminate without penalty no later than 10 days before the change takes effect. Templates and details are provided by the [ERÚ](https://eru.gov.cz/vzory-pro-odstoupeni-nebo-vypoved-smlouvy) (Energy Regulatory Office).',
      'Insurance: for notice to the end of the insurance period, the insurer must receive it at least 6 weeks in advance; within 2 months of taking out the policy the notice period is 8 days; after an insured event, within 3 months of reporting it with a one-month notice period. For compulsory motor insurance (povinné ručení) use our separate motor insurance cancellation template.',
      'Gym, subscriptions, other services: the contract and the terms and conditions decide. Under Section 1999 of the Civil Code, an open-ended contract for recurring performance can be terminated to the end of a calendar quarter by notice given at least 3 months in advance. A fixed-term contract without a right to give notice usually cannot be ended early – try to reach an agreement. You can raise unfair terms with the [Czech Trade Inspection Authority](https://www.coi.cz/) (Česká obchodní inspekce).',
      'As a consumer, you can usually cancel a contract concluded at a distance (online, by phone) or off-premises within 14 days by withdrawing without giving a reason – use our withdrawal from contract template.',
    ],
    pripominky: {
      'Zkontrolovat potvrzení výpovědi': {
        nazev: 'Check the confirmation of the notice',
        popis: 'If the company has not confirmed the notice, contact it and keep the proof of delivery to hand.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of Contract',
    podnadpis: 'notice of termination of a contract for the provision of services in accordance with the contract, the terms and conditions and the law',
    podpisy: { vlevo: 'customer', vpravo: 'received on behalf of the provider (if handed in in person)' },
    clanky: [
      {
        nadpis: 'Customer',
        odstavce: ['{{z_jmeno}}, date of birth {{z_narozeni}}, residing at {{z_adresa}}, contact: {{z_kontakt}}'],
      },
      {
        nadpis: 'Provider',
        odstavce: ['{{f_nazev}}, IČO {{f_ico}}, {{f_adresa}}'],
      },
      {
        nadpis: 'Notice of termination of contract',
        odstavce: [
          'I hereby give notice of termination of contract No. {{cislo_smlouvy}} concluded on {{smlouva_datum}} ({{predmet}}).',
          {
            uvodVzor: 'Method of termination (tick one option):',
            moznosti: {
              smlouva: 'I give notice of termination of the contract as of the earliest date on which it can be terminated under the contract, the terms and conditions and the law.',
              ke_dni: 'I give notice of termination of the contract as of {{konec_datum}}. If the notice period under the contract or the law has not expired by that date, I give notice as of the earliest later date on which it can be terminated.',
              prodlouzeni: 'The contract is concluded for a fixed term with automatic renewal. I give notice of its termination on the legal basis stated in the Czech text (the contract and the terms and conditions, or the relevant provision of law) so that it ends when the agreed term expires, or on the earliest date on which it can be terminated.',
              zmena: 'I do not agree with the change to the contract (price or terms) that you notified to me on {{zmena_datum}}, and for this reason I give notice of termination of the contract on the legal basis stated in the Czech text.',
              obdobi: 'I give notice of termination of the insurance to the end of the insurance period under Section 2807 of the Civil Code.',
              dva_mesice: 'I give notice of termination of the insurance within two months of the date the policy was taken out, with an eight-day notice period under Section 2805(a) of the Civil Code.',
              udalost: 'I give notice of termination of the insurance within three months of the date the insured event (No. {{udalost_cislo}}) was reported, with a one-month notice period under Section 2805(b) of the Civil Code.',
            },
          },
        ],
      },
      {
        nadpis: 'Further requests',
        odstavce: [
          {
            uvod: 'At the same time, I request:',
            moznosti: {
              potvrzeni: 'written confirmation of receipt of this notice and of the date on which the contract will end',
              vyuctovani: 'a final bill and a refund of any overpayment to account No. {{ucet}}',
              zarizeni: 'information on how and where to return loaned equipment',
            },
          },
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: customer's notice of termination of a service contract (Slovakia).
 * Original: src/obsah/sk/vypoved-zmluvy.ts and src/sablony/sk/vypoved-zmluvy.ts.
 * The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-VYPOVED-ZMLUVY', verze: '1.0' },

  nazev: 'Notice of Termination of a Contract',
  nazevA: 'the notice of termination of a contract',
  katalog: {
    popis: 'Mobile operator, internet, insurance, energy, gym or subscription.',
    slova: [
      'notice of termination',
      'cancel contract',
      'cancel mobile contract',
      'cancel internet',
      'cancel insurance',
      'electricity contract',
      'gas contract',
      'cancel subscription',
      'gym membership',
      'notice period',
      'výpoveď zmluvy',
      'zrušiť paušál',
    ],
  },
  landing: {
    title: 'Contract Termination Letter Slovakia {rok} – free PDF template',
    description:
      'Terminate a contract with a mobile operator, insurer, energy supplier, gym or subscription in Slovakia: statutory notice periods. Free bilingual PDF or Word.',
    perex: 'One letter to cancel your phone, internet, insurance, electricity, gas, gym and subscription. For each type you will see what notice period the law sets and what to check in your contract.',
    obsahPopis: 'A customer’s notice of termination (výpoveď) with the contract number, end date and a request for confirmation.',
    obsah: [
      { nazev: 'Customer and company', popis: 'Who is terminating and with whom.' },
      { nazev: 'Notice of termination', popis: 'Type of contract, contract number, reason and end date.' },
      { nazev: 'Further requests', popis: 'Confirmation of the notice, final bill and refund of any overpayment.' },
    ],
    kroky: [
      { nazev: 'Find your contract', popis: 'Contract number, notice period and minimum term (viazanosť).' },
      { nazev: 'Fill in and sign', popis: 'PDF or Word for free.' },
      { nazev: 'Deliver with proof', popis: 'By registered post, in person against confirmation, or as the company’s terms require.' },
    ],
    online: [
      'Correct name of the contract by type',
      'Statutory notice periods for operators, energy and insurance',
      'Request for confirmation and refund of overpayment',
      'Calendar reminder to check the confirmation',
    ],
    hodiSe: [
      'you are cancelling a mobile plan, internet or TV',
      'you are terminating insurance at the end of the insurance period',
      'you are ending an electricity or gas contract',
      'you are cancelling a gym membership or subscription',
    ],
    nehodiSe: [
      'you are returning goods to an online shop within 14 days – use a withdrawal from the contract (odstúpenie od zmluvy)',
      'you are ending a flat lease – use the notice of termination of a lease',
      'you are leaving your job – use the notice of termination of employment',
    ],
    poNadpis: 'After sending.',
    po: [
      { nazev: 'Confirmation', popis: 'The company should confirm receipt and the end date.' },
      { nazev: 'Final invoice', popis: 'Check the final bill and any overpayment.' },
      { nazev: 'Payments', popis: 'Cancel the standing order or direct debit only after the last payment.' },
    ],
    faq: [
      { q: 'What is the notice period with a mobile operator?', a: 'You can terminate an open-ended contract at any time, even without a reason; the period is the same for both parties. After a fixed-term contract has been extended automatically, the notice period is at most one month and without penalties (Section 87 of Act No. 452/2021 Coll.).' },
      { q: 'How do I terminate an electricity or gas contract?', a: 'An open-ended contract in writing, with a notice period of one month from the first day of the month after delivery. If you disagree with a change in price or terms, you can terminate it free of charge – the supplier must receive the notice at least 15 days before the change takes effect (Act No. 251/2012 Coll.).' },
      { q: 'By when do I need to terminate insurance?', a: 'With regular premiums, at the end of the insurance period; the insurer must receive the notice at least six weeks before the period ends (Section 800 of the Civil Code). You will find the end of the period in your insurance contract.' },
      { q: 'What notice period does a gym or subscription have?', a: 'The contract and the terms and conditions decide. If neither they nor the law specify how to give notice and the contract is open-ended, a notice period of three months to the end of a calendar quarter applies (Section 582 of the Civil Code).' },
      { q: 'Do you store my details?', a: 'No. The notice is created directly in your browser.' },
    ],
    zakony:
      'The template is based on Section 87 of Act No. 452/2021 Coll. on Electronic Communications (zákon o elektronických komunikáciách), Sections 17 and 17c of Act No. 251/2012 Coll. on Energy (zákon o energetike) and Sections 582 and 800 of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník; in force until 30 June 2027). Other notice periods are set by your contract.',
    souvisejiciPopis: 'More documents for everyday life, also free.',
  },
  vytvorit: {
    title: 'Fill in a contract termination letter online – Slovakia, PDF',
    description: 'Guide in English: terminate a contract with a mobile operator, insurer, energy supplier or gym in Slovakia. Bilingual PDF or Word for free.',
    podnadpis: 'Free · result in PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      zakaznik: { nazev: 'Customer', popis: 'The person the contract is in the name of. The company will find you by these details.' },
      firma: { nazev: 'Company and contract', popis: 'You will find the details in the contract, on an invoice or in your online customer account.' },
      vypoved: { nazev: 'Notice of termination' },
    },
    pole: {
      k_jmeno: { popis: 'First name and surname', napoveda: 'Exactly as in the contract. For a company, its name and IČO (company ID number).', placeholder: 'e.g. Petra Kováčová' },
      k_narozeni: { popis: 'Date of birth', napoveda: 'Helps the company verify that the notice comes from you. You don’t need to write your personal identification number (rodné číslo).' },
      k_adresa: { popis: 'Address', napoveda: 'The address the company has in the contract, or your current one.', placeholder: 'e.g. Mierová 25, 821 05 Bratislava' },
      k_kontakt: { popis: 'Phone or e-mail', napoveda: 'For confirming the notice or completing details.', placeholder: 'e.g. petra@email.sk' },
      typ: {
        popis: 'What are you terminating',
        napoveda: 'Depending on the type, we fill in the correct name of the contract and the tips show the statutory notice periods.',
        moznosti: {
          operator: 'Mobile operator, internet or TV',
          poistenie: 'Insurance',
          energie: 'Electricity or gas',
          clenstvo: 'Gym or membership',
          predplatne: 'Subscription or other service',
          ine: 'Other contract',
        },
      },
      f_nazev: { popis: 'Company – name', napoveda: 'Business name from the contract or invoice.', placeholder: 'e.g. Energia Slovensko, a. s.' },
      f_adresa: { popis: 'Company address', napoveda: 'Correspondence address from the contract or the company’s website – send the notice there.', placeholder: 'e.g. Hlavná 1, 811 01 Bratislava' },
      cislo_zmluvy: { popis: 'Contract number or customer number', napoveda: 'The most important detail – the company matches the notice by it. It is usually on the invoice.', placeholder: 'e.g. 1234567890' },
      zmluva_datum: { popis: 'Date the contract was concluded (optional)', napoveda: 'If you know it, it helps with fixed-term contracts and insurance.' },
      predmet: {
        popis: 'What the contract concerns',
        napoveda: 'Phone number, type of insurance, supply point number (EIC/POD), name of the membership or service.',
        placeholder: 'e.g. tel. č. 0905 123 456 or EIC 24ZSS…',
      },
      dovod: {
        popis: 'Reason',
        napoveda: 'You don’t have to give a reason. If you disagree with a change in price or terms, the law gives you the right to end contracts with operators and energy suppliers without penalties.',
        moznosti: { bez: 'Without giving a reason', zmena: 'I disagree with a change in price or terms' },
      },
      zmena_datum: { popis: 'When the company notified you of the change', napoveda: 'Date of the letter, e-mail or SMS about the change. The statutory periods run from it.' },
      termin: {
        popis: 'When should the contract end',
        napoveda: 'If you are not sure about the notice period, choose the earliest possible date – the company will determine it under the contract and the law.',
        moznosti: { najskor: 'On the earliest possible date', datum: 'On a specific date' },
      },
      ku_dnu: { popis: 'End as of', napoveda: 'E.g. the end of the insurance period or the minimum term. If the contract does not allow it, it ends on the earliest possible date.' },
      zadosti: {
        popis: 'What else do you want from the company',
        napoveda: 'The confirmation is proof that they received the notice. They will refund an overpayment only if they know where to send it.',
        moznosti: { potvrdenie: 'Written confirmation of the notice and the end date', vyuctovanie: 'Final bill and refund of the overpayment' },
      },
      ucet: { popis: 'IBAN for the refund of the overpayment', napoveda: 'Your account where the company should send the overpayment.', placeholder: 'SK12 0000 0000 0000 0000 0000' },
      misto: { popis: 'Place (town)', napoveda: 'We pre-fill it from your address.', placeholder: 'e.g. Bratislava' },
      datum: { popis: 'Date', napoveda: 'We pre-filled today.' },
    },
    vysvetleni: [
      'Who is giving notice – the person the contract is in the name of.',
      'The company you are sending the notice to.',
      'The notice itself. The contract number is key so that the company can match it.',
      'Ask for the confirmation and the final bill directly in the notice.',
    ],
    coDal: [
      'Sign the notice and deliver it in a way you can prove: by registered post with proof of delivery, in person against confirmation on a copy, or through the channel stated in the terms and conditions (customer account, e-mail).',
      'The period is counted from delivery, not from sending. Don’t send the notice at the last minute.',
      'Keep the postal receipt, proof of delivery or confirmation until the company confirms that the contract has ended.',
      'Cancel the standing order or direct debit mandate at your bank only after the last payment under the final bill.',
    ],
    kontrola: [
      'First find the notice period, any minimum term (viazanosť) and the way to deliver the notice in your contract or the terms and conditions – they differ from company to company.',
      'Mobile operator and internet: you can terminate an open-ended contract at any time, even without giving a reason. After a fixed-term contract has been extended automatically, you can terminate it at any time without penalties with a notice period of at most one month (Section 87(4) and (7) of Act No. 452/2021 Coll.).',
      'Has the operator changed the contract? You can withdraw from the contract without penalties within one month of being notified of the change, unless the change is solely in your favour, purely administrative or required by law (Section 87(9) of Act No. 452/2021 Coll.).',
      'If you have a minimum term or a discounted phone, early termination may mean an extra payment under the contract – check the minimum-term addendum.',
      'Electricity and gas: you terminate an open-ended contract in writing; the notice period is one month from the first day of the month after delivery of the notice (Section 17c(2) of Act No. 251/2012 Coll.). If you disagree with a change in price or terms, you can terminate the contract free of charge; the supplier must receive the notice at least 15 days before the change takes effect (Section 17(6)).',
      'Switching energy supplier? Ask the new supplier whether they will handle the notice and the switch for you – so that you are not left without supply.',
      'Insurance with regular premiums can be terminated at the end of the insurance period; the insurer must receive the notice at least six weeks before it ends (Section 800(1) OZ). Special rules also apply to compulsory motor third-party liability insurance – check your insurance contract.',
      'Gym and subscription: the law sets no special notice period; the contract and terms decide. If neither they nor the law specify how to give notice and the contract is open-ended, a notice period of three months to the end of a calendar quarter applies (Section 582 OZ).',
      'Note: the Civil Code (Občiansky zákonník) was repealed by Act No. 260/2026 Coll. and will be replaced by a new one from 1 July 2027. This template reflects the law in force until 30 June 2027 – after that, check the current wording.',
    ],
    pripominky: {
      'Skontrolovať potvrdenie výpovede': {
        nazev: 'Check the confirmation of the notice',
        popis: 'If the company has not confirmed receipt of the notice and the end date of the contract, contact them.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of a Contract',
    podnadpis: 'termination of a service contract by the customer',
    podpisy: { vlevo: 'customer', vpravo: 'received on behalf of the company (if delivered in person)' },
    clanky: [
      { nadpis: 'Customer', odstavce: ['{{k_jmeno}}, date of birth {{k_narozeni}}, address {{k_adresa}}, contact: {{k_kontakt}}'] },
      { nadpis: 'Addressee', odstavce: ['{{f_nazev}}, {{f_adresa}}'] },
      {
        nadpis: 'Notice of Termination of the Contract',
        odstavce: [
          {
            uvodVzor: 'I hereby terminate (tick one option):',
            uvod: 'I hereby terminate',
            moznosti: {
              operator: 'the contract for the provision of electronic communications services No. {{cislo_zmluvy}} concluded on {{zmluva_datum}} ({{predmet}}).',
              poistenie: 'the insurance contract No. {{cislo_zmluvy}} concluded on {{zmluva_datum}} ({{predmet}}).',
              energie: 'the contract for the supply (combined supply) of electricity or gas No. {{cislo_zmluvy}} concluded on {{zmluva_datum}} for the supply point {{predmet}}.',
              clenstvo: 'the membership contract No. {{cislo_zmluvy}} concluded on {{zmluva_datum}} ({{predmet}}).',
              predplatne: 'the subscription (service) contract No. {{cislo_zmluvy}} concluded on {{zmluva_datum}} ({{predmet}}).',
              ine: 'the contract No. {{cislo_zmluvy}} concluded on {{zmluva_datum}} ({{predmet}}).',
            },
          },
          {
            uvodVzor: 'Reason (tick one option):',
            moznosti: {
              bez: 'I am giving notice without stating a reason.',
              zmena: 'I am giving notice because I disagree with the change in price or contractual terms of which you notified me on {{zmena_datum}}. If the law gives me the right in this case to end the contract or withdraw from it without penalties, I hereby exercise that right by this notice.',
            },
          },
          {
            uvodVzor: 'End of the contract (tick one option):',
            moznosti: {
              najskor: 'I request that the contract end on the earliest possible date under the contract, the terms and conditions and the law.',
              datum: 'I request that the contract end as of {{ku_dnu}}. If the contract or the law does not allow this, I request that it end on the earliest possible date.',
            },
          },
        ],
      },
      {
        nadpis: 'Further Requests',
        odstavce: [
          {
            uvod: 'At the same time, I request:',
            moznosti: {
              potvrdenie: 'written confirmation of receipt of the notice stating the end date of the contract',
              vyuctovanie: 'a final bill and a refund of the overpayment to the account IBAN {{ucet}}',
            },
          },
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

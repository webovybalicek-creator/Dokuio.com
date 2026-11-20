/**
 * English version: notice of termination of a contract (Poland). Original: src/obsah/pl/wypowiedzenie-umowy.ts
 * and src/sablony/pl/wypowiedzenie-umowy.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-WYPOWIEDZENIE-UMOWY', verze: '1.0' },

  nazev: 'Contract Termination Notice',
  nazevA: 'the contract termination notice',
  katalog: {
    popis: 'Phone plan, internet, electricity, gas, insurance, gym.',
    slova: ['contract termination', 'cancel a contract', 'cancel subscription', 'notice of termination', 'mobile operator', 'internet', 'electricity', 'gas', 'gym membership', 'insurance', 'wypowiedzenie umowy', 'rezygnacja'],
  },
  landing: {
    title: 'Contract Termination Notice Poland {rok} – free PDF template',
    description:
      'Notice ending a contract with a telecom operator, energy supplier, insurer or gym in Poland, explained in English, with a refund request. Bilingual PDF or Word – free.',
    perex: 'Cancelling a phone plan, internet, electricity, insurance or a gym pass? A notice of termination (wypowiedzenie) with the right legal basis for your type of contract and a request for confirmation.',
    obsahPopis: 'A letter to the company with a choice of contract type.',
    obsah: [
      { nazev: 'Sender and addressee', popis: 'Your details and the company’s details.' },
      { nazev: 'Termination', popis: 'Contract number, legal basis by contract type, end date.' },
      { nazev: 'Requests', popis: 'Confirmation, refund of overpayment, end of payments, withdrawal of marketing consents.' },
    ],
    kroky: [
      { nazev: 'Check your contract', popis: 'The notice period and permitted form in the contract or terms and conditions (regulamin).' },
      { nazev: 'Fill it in', popis: 'Choose the type of contract – we add the legal basis ourselves.' },
      { nazev: 'Deliver it', popis: 'By registered post with confirmation of receipt, in person, or by e-mail if the contract allows it.' },
    ],
    online: ['Legal basis matched to the type of contract', 'Confirmation reminder in your calendar', 'Download as PDF and Word'],
    hodiSe: [
      'a mobile plan, internet or TV',
      'an electricity or gas contract for your home',
      'insurance (other than compulsory motor third-party liability insurance – OC)',
      'a gym, club, subscription or other service',
    ],
    nehodiSe: [
      'motor OC insurance – separate rules apply',
      'an employment contract – use the notice of termination of an employment contract',
      'renting a flat – use the notice of termination of a tenancy agreement',
      'an online purchase within 14 days – that is withdrawal from the contract (odstąpienie od umowy)',
    ],
    poNadpis: 'After sending.',
    po: [
      { nazev: 'Confirmation', popis: 'A telecom operator confirms the termination on a durable medium (trwały nośnik) within 14 days.' },
      { nazev: 'Notice period', popis: 'You pay until the end of the notice period.' },
      { nazev: 'Final settlement', popis: 'Check the last invoice and the refund of any overpayment.' },
    ],
    faq: [
      {
        q: 'What is the notice period with a telecom operator?',
        a: 'A contract that renewed automatically after its commitment period can be terminated at any time with one month’s notice (Article 302(1) of the Electronic Communications Law – Prawo komunikacji elektronicznej). Terminating a fixed-term contract early may cost compensation (Article 304).',
      },
      {
        q: 'Can I terminate the contract by e-mail?',
        a: 'With an operator with whom a contract can be concluded in documentary form (forma dokumentowa) – yes (Article 295 PKE). For other contracts the contract or the terms and conditions decide; the safest option is registered post with confirmation of receipt.',
      },
      {
        q: 'When will an electricity or gas contract end?',
        a: 'For a household – on the last day of the month following the month in which the notice reached the supplier, unless you specify a later date (Article 4j(4) of the Energy Law – Prawo energetyczne). A contract for an indefinite period can be terminated free of charge.',
      },
      {
        q: 'Will I get my insurance premium back?',
        a: 'Yes, you are entitled to a refund of the premium for the period of unused cover (Article 813 § 1 of the Civil Code).',
      },
      { q: 'Do you store my data?', a: 'No. The notice is created only in your browser.' },
    ],
    zakony:
      'The template is based on Articles 61, 365¹, 813 and 830 of the Polish Civil Code (Kodeks cywilny), Articles 295, 301, 302 and 304 of the Electronic Communications Law (Prawo komunikacji elektronicznej) and Article 4j of the Energy Law (Prawo energetyczne). For other contracts the contract and the terms and conditions decide.',
    souvisejiciPopis: 'Other everyday documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a contract termination notice online – Poland, PDF',
    description: 'Guide in English to terminate a phone plan, energy, insurance or gym contract with the legal basis. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      klient: { nazev: 'Your details', popis: 'Details of the person who concluded the contract – as in the contract or on the invoice.' },
      firma: { nazev: 'Company and contract', popis: 'You will find the details in the contract, on the invoice or in your customer account.' },
      termin: { nazev: 'End date and requests' },
    },
    pole: {
      k_imie: { popis: 'Full name', napoveda: 'As in the contract. The notice is signed by the person who concluded the contract.', placeholder: 'e.g. Anna Nowak' },
      k_adres: {
        popis: 'Address',
        napoveda: 'The address given in the contract (or your current one – the company will find you more easily if you also give your customer number).',
        placeholder: 'e.g. ul. Polna 7/12, 00-001 Warszawa',
      },
      k_kontakt: { popis: 'Phone or e-mail', napoveda: 'The company can send the confirmation to this contact.', placeholder: 'e.g. anna.nowak@email.pl' },
      f_nazwa: { popis: 'Company', napoveda: 'Full company name from the contract or invoice.', placeholder: 'e.g. Fit Klub Sp. z o.o.' },
      f_adres: { popis: 'Company address', napoveda: 'Correspondence address from the contract, the terms and conditions or the company’s website.', placeholder: 'e.g. ul. Prosta 1, 00-850 Warszawa' },
      rodzaj: {
        popis: 'Which contract are you terminating',
        napoveda: 'The legal basis we insert into the notice depends on the type of contract.',
        moznosti: {
          telekom: 'Mobile phone, internet or TV',
          energia: 'Electricity or gas',
          ubezpieczenie: 'Insurance (not motor OC)',
          silownia: 'Gym, club, membership',
          uslugi: 'Subscription or other service',
          inne: 'Other contract',
        },
      },
      umowa_nr: { popis: 'Contract, policy or customer number', napoveda: 'The most important number – the company uses it to match the notice to your contract.', placeholder: 'e.g. 2024/123456' },
      umowa_data: { popis: 'Date the contract was concluded', napoveda: 'If you don’t remember, leave it empty.' },
      przedmiot: {
        popis: 'What the contract concerns (optional)',
        napoveda: 'E.g. phone number, energy metering point number (PPE), connection address, membership number.',
        placeholder: 'e.g. abonament nr tel. 600 100 200 (plan for phone number 600 100 200)',
      },
      termin: {
        popis: 'When the contract should end',
        napoveda: 'The safest choice is the earliest possible date. You cannot force an earlier date than the contract or the law allows anyway.',
        moznosti: {
          najblizszy: 'On the earliest possible date',
          data: 'On a specific date',
          koniec_okresu: 'At the end of the period for which the contract was concluded (so that it does not renew)',
        },
      },
      koniec_data: { popis: 'Date the contract ends', napoveda: 'For a fixed-term contract – the day on which the contract period ends.' },
      prosby: {
        popis: 'What else are you asking for',
        napoveda: 'Confirmation is proof that the notice arrived. The company refunds an overpayment more easily if you give an account number.',
        moznosti: {
          potwierdzenie: 'Confirmation of the termination and the end date of the contract',
          rozliczenie: 'Final settlement and refund of overpayment',
          platnosci: 'Stopping the direct debit or card payment',
          marketing: 'Withdrawal of marketing consents',
        },
      },
      konto: { popis: 'Account number for the refund', napoveda: 'Your bank account, 26 digits.', placeholder: 'PL00 0000 0000 0000 0000 0000 0000' },
      misto: { popis: 'Town or city', napoveda: 'We fill it in from your address.', placeholder: 'e.g. Warszawa' },
      datum: { popis: 'Date', napoveda: 'We have filled in today’s date.' },
    },
    vysvetleni: [
      'Who is terminating the contract – the person who concluded it.',
      'The company to which you deliver the notice.',
      'The termination itself, the legal basis by type of contract and the end date.',
      'What else you expect from the company after the termination.',
    ],
    coDal: [
      'Sign the notice and deliver it in a way you can prove: by registered post with confirmation of receipt, in person against a signature on your copy, or by e-mail or in the app if the contract allows it.',
      'The notice takes effect when it reaches the company – not when it is sent. Do not leave it until the last day.',
      'Keep a copy, the proof of posting and the confirmation of receipt until the final settlement.',
      'Check the last invoice and stop the direct debit (polecenie zapłaty) or card payment after the contract ends.',
    ],
    kontrola: [
      'First check the notice period and permitted form in the contract, the terms and conditions (regulamin) or the general terms of insurance (OWU) – many companies accept termination by e-mail, in an app or in the customer account.',
      'Phone, internet, TV: a fixed-term consumer contract lasts at most 24 months (Article 301 of the Electronic Communications Law – PKE). A contract that renewed automatically after that period can be terminated at any time with one month’s notice (Article 302(1) PKE).',
      'An operator with whom a contract can be concluded in documentary form must also accept termination in that form, e.g. by e-mail (Article 295 PKE). Terminating a fixed-term contract early may mean paying compensation (Article 304 PKE) – check your contract.',
      'Electricity and gas: a contract for an indefinite period can be terminated free of charge (Article 4j(3) of the Energy Law – Prawo energetyczne); for a household it ends on the last day of the month following the month in which the notice reached the supplier, unless you specify a later date (Article 4j(4)). For a fixed-term contract, costs may arise only from the contract (Article 4j(3a)).',
      'Insurance: the notice period is set by the contract or the general terms of insurance (OWU); in personal insurance without such a period, termination takes effect immediately (Article 830 § 1 of the Civil Code). You are entitled to a refund of the premium for the period of unused cover (Article 813 § 1 of the Civil Code). This template is not for terminating motor OC insurance – separate rules apply.',
      'Gym, subscription, other services: the contract and the terms and conditions decide. A contract for an indefinite period without an agreed notice period ends immediately after notice (Article 365¹ of the Civil Code). In a dispute, the municipal or district consumer ombudsman (rzecznik konsumentów) can help – [UOKiK](https://prawakonsumenta.uokik.gov.pl/).',
      'The notice is deemed made when it has reached the company in such a way that it could read its content (Article 61 of the Civil Code).',
    ],
    pripominky: {
      'Sprawdź, czy firma potwierdziła wypowiedzenie': {
        nazev: 'Check whether the company has confirmed the termination',
        popis: 'No confirmation? Call or write – keep the proof of sending.',
      },
      'Koniec umowy – sprawdź ostatni rachunek': { nazev: 'End of contract – check the last invoice' },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of Contract',
    podnadpis: 'customer’s declaration of termination of the contract',
    podpisy: { vlevo: 'customer', vpravo: 'received on behalf of the company (date and signature)' },
    clanky: [
      { nadpis: 'Sender', odstavce: ['{{k_imie}}, {{k_adres}}, contact: {{k_kontakt}}'] },
      { nadpis: 'Addressee', odstavce: ['{{f_nazwa}}, {{f_adres}}'] },
      {
        nadpis: 'Termination of the Contract',
        odstavce: [
          'I hereby terminate contract No. {{umowa_nr}} concluded on {{umowa_data}}, concerning: {{przedmiot}}.',
          {
            uvodVzor: 'Type of contract (tick one option):',
            moznosti: {
              telekom: 'The contract concerns electronic communications services. If, after the period for which it was concluded, it was renewed automatically, I terminate it with one month’s notice (Article 302(1) of the Act – Electronic Communications Law).',
              energia: 'The contract concerns the sale of electricity or gaseous fuels. I terminate it under Article 4j of the Act – Energy Law.',
              ubezpieczenie: 'The contract is an insurance contract. I terminate it observing the period specified in the contract or in the general terms of insurance.',
              silownia: 'The contract concerns a membership (pass). I terminate it in accordance with the conditions set out in the contract and the terms and conditions.',
              uslugi: 'The contract concerns a subscription or the provision of services. I terminate it in accordance with the conditions set out in the contract or the terms and conditions.',
              inne: 'I terminate the contract in accordance with its provisions and the applicable law.',
            },
          },
          {
            uvodVzor: 'End date (tick one option):',
            moznosti: {
              najblizszy: 'I request that the contract be terminated on the earliest possible date resulting from the contract, the terms and conditions or the law.',
              data: 'I request that the contract be terminated as of {{koniec_data}}, and if the contract or the law provides for a later date – on the earliest possible date.',
              koniec_okresu: 'I terminate the contract with effect at the end of the period for which it was concluded, i.e. as of {{koniec_data}}, and I do not consent to its renewal.',
            },
          },
        ],
      },
      {
        nadpis: 'Requests',
        odstavce: [
          {
            uvod: 'At the same time, I request:',
            moznosti: {
              potwierdzenie: 'written or e-mail confirmation of receipt of this notice and of the end date of the contract',
              rozliczenie: 'final settlement of the contract and refund of any overpayment to account No. {{konto}}',
              platnosci: 'that no further charges be collected (direct debit, card payment) after the end date of the contract',
              marketing: 'that you take note that I withdraw all marketing consents I have given',
            },
          },
          'Yours faithfully',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: contract cancellation letter (Hungary). Original: src/obsah/hu/szerzodes-felmondasa.ts
 * and src/sablony/hu/szerzodes-felmondasa.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-SZERZODES-FELMONDAS', verze: '1.0' },

  nazev: 'Contract Cancellation Letter',
  nazevA: 'the contract cancellation letter',
  katalog: {
    popis: 'Cancelling a mobile, internet, insurance, electricity, gym or subscription contract.',
    slova: [
      'cancellation letter',
      'notice of termination',
      'cancel mobile contract',
      'cancel internet',
      'cancel insurance',
      'cancel car insurance anniversary',
      'cancel gym membership',
      'cancel subscription',
      'felmondó levél',
      'szerződés felmondása',
      'kgfb felmondás',
    ],
  },
  landing: {
    title: 'Contract Cancellation Letter Hungary {rok} – free PDF template',
    description:
      'Cancellation letter for a mobile, internet, insurance, electricity, gas or gym contract in Hungary. Ask for confirmation and a refund. Bilingual PDF or Word, free.',
    perex: 'One letter for every provider: contract number, the date of termination, and a request for confirmation and for any overpayment to be refunded.',
    obsahPopis: 'What the cancellation letter contains.',
    obsah: [
      { nazev: 'Contract', popis: 'Provider, contract number or policy number, name of the service.' },
      { nazev: 'Termination', popis: 'The earliest possible date, a specific day or the anniversary.' },
      { nazev: 'Requests', popis: 'Written confirmation, final bill, refund of overpayment, stopping the direct debit.' },
    ],
    kroky: [
      { nazev: 'Choose the contract', popis: 'Mobile, internet, insurance, electricity and gas, membership or subscription.' },
      { nazev: 'Fill it in', popis: 'The contract number is on the bill or the policy.' },
      { nazev: 'Send it with proof', popis: 'By letter with return receipt, or in the same way you concluded the contract.' },
    ],
    online: ['Text according to the type of contract', 'Tips on deadlines (Eht., kgfb)', 'Reminder of the termination date', 'Download as PDF and Word'],
    hodiSe: [
      'you are cancelling a mobile, internet or TV subscription',
      'you are cancelling insurance, for example compulsory motor insurance (kgfb) on its anniversary',
      'you are ending a gym membership, a subscription or another regular service',
      'you are cancelling your electricity or gas contract because you are moving',
    ],
    nehodiSe: [
      'you are terminating a flat rental – use the flat lease termination notice for that',
      'you are ending an employment – use the employee resignation letter for that',
      'you are withdrawing from an online purchase within 14 days – use the withdrawal notice (elállási nyilatkozat) for that',
    ],
    poNadpis: 'After cancelling.',
    po: [
      { nazev: 'Confirmation', popis: 'Keep the provider’s confirmation and the return receipt.' },
      { nazev: 'Final bill', popis: 'Check it, and if you have overpaid, ask for a refund.' },
      { nazev: 'Charges', popis: 'Check that the direct debit or card payment has stopped.' },
    ],
    faq: [
      {
        q: 'When can I cancel my mobile or internet subscription?',
        a: 'A subscriber contract of indefinite duration can be terminated by the subscriber at any time, with immediate effect and without further legal consequences (Eht. 134. § (1)). For a fixed-term contract (with a minimum term – hűségidő), on early termination the provider may claim back the discounts you received.',
      },
      {
        q: 'How can I cancel compulsory motor third-party liability insurance?',
        a: 'For the insurance anniversary, at least 30 days in advance, in writing (or electronically, if so agreed); the notice is effective if it reaches the insurer in time (Kgfb. tv. 7. §). When the car is sold, the contract ends due to the lapse of insurable interest (érdekmúlás).',
      },
      {
        q: 'What is the notice period for a gym, electricity or other insurance?',
        a: 'Whatever the contract, the insurance terms or the general terms and conditions (ÁSZF) set out. If you do not know, choose the option “earliest possible date” and ask for written confirmation.',
      },
      { q: 'Do you store my details?', a: 'No. The document is created only in your browser.' },
    ],
    zakony:
      'The template is based on Act C of 2003 on Electronic Communications (Eht.), Act LXII of 2009 on Compulsory Motor Third-Party Liability Insurance (Kgfb. tv.) and the Hungarian Civil Code (Polgári Törvénykönyv). For other contracts, the notice period depends on the contract or the general terms and conditions (ÁSZF).',
    souvisejiciPopis: 'More documents for everyday matters, also free.',
  },
  vytvorit: {
    title: 'Fill in a contract cancellation letter online – Hungary, free PDF',
    description: 'Guide in English for cancelling a contract (szerződés felmondása) in Hungary: subscription, insurance, energy, gym. Ask for confirmation and a refund. Bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      felek: { nazev: 'You and the provider', popis: 'The customer is the person in whose name the contract is.' },
      szerzodes: { nazev: 'The contract' },
      megszunes: { nazev: 'Termination and requests' },
    },
    pole: {
      n_nev: { popis: 'Your name', napoveda: 'As it appears in the contract. For a company, the company name.', placeholder: 'e.g. Kovács Anna' },
      n_szul: { popis: 'Date of birth (optional)', napoveda: 'Helps the provider identify you.' },
      n_elerhetoseg: { popis: 'Phone or e-mail', napoveda: 'In case the provider has a question, or if you want the confirmation sent here.', placeholder: 'e.g. kovacs.anna@email.hu' },
      n_cim: { popis: 'Home or postal address', napoveda: 'The address stated in the contract.', placeholder: 'e.g. 1052 Budapest, Váci utca 10.' },
      sz_nev: { popis: 'Provider’s name', napoveda: 'The company name from the contract or the bill.', placeholder: 'e.g. Minta Telekom Zrt.' },
      sz_cim: {
        popis: 'Provider’s postal address',
        napoveda: 'The customer service postal address on the bill, in the contract or on the provider’s website.',
        placeholder: 'e.g. 1097 Budapest, Könyves Kálmán krt. 36.',
      },
      tipus: {
        popis: 'What kind of contract are you cancelling?',
        napoveda: 'The text of the letter and the tips on deadlines depend on this.',
        moznosti: {
          tavkozles: 'Mobile, internet or TV subscription',
          biztositas: 'Insurance (e.g. compulsory motor insurance – kgfb, home insurance)',
          energia: 'Electricity or gas',
          tagsag: 'Gym, club, membership',
          elofizetes: 'Subscription or regular service (e.g. magazine, streaming, software)',
          egyeb: 'Other contract',
        },
      },
      azonosito: {
        popis: 'Contract number, customer ID or policy number',
        napoveda: 'You will find it on the bill, in the contract or on the policy. This is the most important detail.',
        placeholder: 'e.g. 123456789',
      },
      szolgaltatas: {
        popis: 'Name of the service',
        napoveda: 'E.g. phone number and tariff, registration number, type of insurance, type of pass.',
        placeholder: 'e.g. +36 30 123 4567, Mobil S csomag (Mobile S package)',
      },
      fogyhely: { popis: 'Address of the point of consumption', napoveda: 'The address of the property supplied with electricity or gas.', placeholder: 'e.g. 6720 Szeged, Kárász utca 5.' },
      meroallas: { popis: 'Meter reading (optional)', napoveda: 'Note it on the day of cancellation and take a photo of the meter.', placeholder: 'e.g. 12 345 kWh' },
      mikor: {
        popis: 'When should the contract end?',
        napoveda: 'If you are not sure, choose the earliest possible date – the provider will calculate it under the contract.',
        moznosti: {
          legkorabbi: 'On the earliest possible date',
          datum: 'On a specific day',
          evfordulo: 'On the anniversary / at the end of the contract period',
        },
      },
      megszunes_datum: { popis: 'Date of termination', napoveda: 'For insurance, the insurance anniversary (stated on the policy). You will also get a reminder.' },
      kerelmek: {
        popis: 'What else do you ask the provider for?',
        napoveda: 'The confirmation proves that the notice has arrived. An overpayment can only be refunded if you give your account number.',
        moznosti: {
          megerosites: 'Written confirmation of the termination date',
          elszamolas: 'Final bill and refund of any overpayment',
          terheles: 'Stopping the charges (direct debit, card)',
        },
      },
      szamla: { popis: 'Bank account number for the refund', napoveda: 'Your bank account, 16 or 24 digits.', placeholder: 'e.g. 11773016-12345678-00000000' },
      misto: { popis: 'Town or village', napoveda: 'Where you sign the letter.', placeholder: 'e.g. Budapest' },
      datum: { popis: 'Date', napoveda: 'We have filled in today’s date.' },
    },
    vysvetleni: [
      'Who is cancelling, and to whom the letter is sent.',
      'The notice itself. The provider uses the contract identifier to match the notice to your contract.',
      'Confirmation and settlement – this way you can see that everything has been closed properly.',
    ],
    coDal: [
      'Deliver it in a way you can prove: by registered letter with return receipt (tértivevényes ajánlott levél), in person (with a signature confirming receipt on the copy), or in the way you concluded the contract (e.g. Ügyfélkapu, online account, e-mail).',
      'For the deadline, what counts is when the notice ARRIVES at the provider – do not send it on the last day.',
      'Keep the postal receipt, the return receipt and the confirmation until the final bill has been settled.',
      'If you paid by direct debit or card, check after termination that the charges have stopped.',
    ],
    kontrola: [
      'Mobile, internet, TV: a subscriber contract of indefinite duration can be terminated by the subscriber at any time, with immediate effect and without further legal consequences (Eht. 134. § (1)).',
      'For a fixed-term subscription (with a minimum term – hűségidő), on early termination the provider may claim back the discounts you received (Eht. 134. § (15)–(15a)). Check in the contract when the fixed term ends.',
      'The telecoms provider must accept the notice in any form in which the contract can be concluded (Eht. 134. § (17)) – if you concluded it online, you can also cancel online.',
      'If the telecoms provider amends the contract unilaterally, you may terminate it with immediate effect within 45 days of the notification (Eht. 132. § (5)).',
      'Compulsory motor third-party liability insurance (kötelező gépjármű-felelősségbiztosítás, kgfb): it can be cancelled for the insurance anniversary, at least 30 days in advance, and the notice MUST REACH the insurer in time (Kgfb. tv. 7. § (1), (1a)). When the car is sold, the contract ends due to the lapse of insurable interest (érdekmúlás); it does not have to be cancelled (7. § (4)).',
      'Other insurance, electricity and gas, gym, subscription: the notice period and method are set out in the contract, the insurance terms or the general terms and conditions (ÁSZF, üzletszabályzat) – choose the termination date accordingly.',
      'Enter the contract number, customer ID or policy number exactly – this is how they find your contract.',
      'For electricity and gas, note down and photograph the meter reading on the day of cancellation.',
    ],
    pripominky: {
      'Megszűnt a felmondott szerződés?': {
        nazev: 'Has the cancelled contract ended?',
        popis: 'Check whether you have received the confirmation and the final bill, and whether the charges have stopped.',
      },
      'Az új biztosítás megkötése': {
        nazev: 'Taking out the new insurance',
        popis: 'Take out the new insurance before the old one ends, so that you are not left without cover.',
      },
    },
  },

  dokument: {
    nazev: 'Termination of Contract',
    podnadpis: 'cancellation letter for ending a subscription, insurance, energy supply, membership or other service',
    podpisy: { vlevo: 'customer (subscriber, policyholder)', vpravo: 'received by the provider (when delivered in person)' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Sender:** {{n_nev}}, date of birth: {{n_szul}}, address: {{n_cim}}, contact: {{n_elerhetoseg}}',
          '**Recipient:** {{sz_nev}}, {{sz_cim}}',
          '**Subject:** termination of contract – identifier: {{azonosito}}',
        ],
      },
      {
        nadpis: 'Notice of Termination',
        odstavce: [
          'Dear Sir or Madam,',
          {
            uvodVzor: 'Type of contract (tick one):',
            moznosti: {
              tavkozles: 'I, the undersigned, hereby terminate my subscriber contract No. {{azonosito}} ({{szolgaltatas}}).',
              biztositas: 'I, the undersigned, hereby terminate my insurance contract No. {{azonosito}} ({{szolgaltatas}}).',
              energia: 'I, the undersigned, hereby terminate my contract No. {{azonosito}} ({{szolgaltatas}}) relating to the point of consumption at {{fogyhely}}.',
              tagsag: 'I, the undersigned, hereby terminate my membership contract No. {{azonosito}} ({{szolgaltatas}}).',
              elofizetes: 'I, the undersigned, hereby terminate my subscription No. {{azonosito}} ({{szolgaltatas}}).',
              egyeb: 'I, the undersigned, hereby terminate my contract No. {{azonosito}} concerning {{szolgaltatas}}.',
            },
          },
          {
            uvodVzor: 'Date of termination (tick one):',
            moznosti: {
              legkorabbi: 'I request that the contract end on the earliest possible date under the contract or the general terms and conditions.',
              datum: 'I request that the contract end with effect from {{megszunes_datum}}; if this is not possible under the contract, on the earliest possible date.',
              evfordulo: 'I terminate the contract for the end of the current contract (insurance) period, on {{megszunes_datum}}.',
            },
          },
          {
            uvodVzor: 'Only for electricity or gas:',
            moznosti: { energia: 'The meter reading on the day of termination: {{meroallas}}. Please issue the final bill on this basis.' },
          },
        ],
      },
      {
        nadpis: 'Requests',
        odstavce: [
          {
            uvod: 'I also request:',
            moznosti: {
              megerosites: 'written confirmation of receipt of the notice and of the date on which the contract ends,',
              elszamolas: 'that the final bill be sent to me and any overpayment be refunded to my bank account No. {{szamla}},',
              terheles: 'that no further charges be made after termination (direct debit, bank card).',
            },
          },
          'Thank you for your cooperation.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

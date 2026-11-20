/**
 * English version: cancellation of compulsory motor insurance (Czech Republic). Original: src/obsah/cz/vypoved-povinneho-ruceni.ts
 * and src/sablony/cz/vypoved-povinne-ruceni.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-VYPOVED-POV', verze: '1.1' },

  nazev: 'Motor Insurance Cancellation',
  nazevA: 'the notice cancelling compulsory motor insurance',
  katalog: {
    popis: 'Cancelling car insurance: anniversary, sale, price increase.',
    slova: ['car insurance', 'motor insurance', 'compulsory motor insurance', 'third-party insurance', 'cancel insurance', 'insurance company', 'change insurer', 'sold car', 'povinné ručení', 'výpověď povinného ručení', 'pojišťovna'],
  },
  landing: {
    title: 'Motor Insurance Cancellation Czech Republic {rok} – free PDF template',
    description:
      'Cancel compulsory motor insurance in the Czech Republic, in English: at the anniversary, after a sale, within 2 months or on a price rise. Free bilingual PDF or Word.',
    perex: 'At the policy anniversary, after selling the car, within 2 months of taking out the policy, after a claim or on a price increase. Fill it in online, or download a blank template.',
    obsahPopis: 'A letter to the insurer with the correct ground and a request for your claims history.',
    obsah: [
      { nazev: 'Policyholder', popis: 'Who took out the policy – name, date of birth, address, contact.' },
      { nazev: 'Insurer', popis: 'Name and address of the insurance company.' },
      { nazev: 'Notice of termination', popis: 'Policy number, registration number (SPZ) and the ground with the matching statutory time limit.' },
      { nazev: 'Further requests', popis: 'Confirmation of claims history, refund of overpaid premium, confirmation that the policy has ended.' },
    ],
    kroky: [
      { nazev: 'Choose the ground', popis: 'The time limit depends on the ground – the guide explains it.' },
      { nazev: 'Download and sign', popis: 'PDF or Word, free. The document is bilingual: Czech original and English translation.' },
      { nazev: 'Send it by registered post', popis: 'The time limit runs from delivery to the insurer – allow a margin.' },
    ],
    online: ['The correct wording for your ground of termination', 'Claims history request in one click', 'Time limits explained', 'Download as PDF and Word'],
    hodiSe: ['you are switching insurer at the policy anniversary', 'you have sold the car', 'you disagree with a price increase or took out the policy less than 2 months ago'],
    nehodiSe: [
      'you are cancelling comprehensive cover (havarijní pojištění) – similar wording, different conditions, check the policy terms',
      'you are taking the vehicle out of service – it is enough to give the insurer the document from the register',
      'you are a company with a fleet policy (flotilová smlouva)',
    ],
    poNadpis: 'After sending.',
    po: [
      { nazev: 'Keep the postage receipt', popis: 'And the delivery confirmation – until the insurer confirms that the policy has ended.' },
      { nazev: 'New insurance with no gap', popis: 'A car in the register must have compulsory motor insurance (povinné ručení) every single day.' },
      { nazev: 'Claims history for the new insurer', popis: 'For the no-claims bonus.' },
    ],
    faq: [
      { q: 'When must I send the notice?', a: 'If you cancel at the end of the insurance period, the insurer must receive the notice at least 6 weeks before that period ends. Within 2 months of taking out the policy an 8-day notice period applies; after an insured event you can give notice within 3 months of reporting it, with a one-month notice period.' },
      { q: 'I have sold the car. Do I have to cancel?', a: 'The insurance ends on the day you notify the insurer of the change of owner. Send the notification with a copy of the purchase agreement (kupní smlouva) – the template can do this.' },
      { q: 'Where do I find the end of the insurance period?', a: 'In the insurance policy (anniversary, start of cover). The insurance period is usually one year.' },
      { q: 'What is a confirmation of claims history?', a: 'An overview of whether you have had accidents. The new insurer gives you a bonus based on it; the old one must issue it to you.' },
      { q: 'Do you store my details?', a: 'No. The notice is put together directly in your browser.' },
    ],
    zakony:
      'The template is based on Section 2805 et seq. of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník), and Act No. 30/2024 Coll., on insurance of liability for damage caused by the operation of a vehicle (zákon o pojištění odpovědnosti z provozu vozidla). Specific policy terms may offer further options.',
  },
  vytvorit: {
    title: 'Fill in a motor insurance cancellation online – Czech Republic, PDF',
    description: 'Guide in English for cancelling compulsory motor insurance in the Czech Republic: anniversary, car sale, price increase. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      pojistnik: { nazev: 'Policyholder', popis: 'The policyholder (pojistník) is the person who took out the insurance policy and pays for it – not necessarily the owner of the car.' },
      pojisteni: { nazev: 'Insurer and policy', popis: 'You will find the details in the insurance policy or on the green card.' },
      duvod: { nazev: 'Ground for termination' },
    },
    pole: {
      p_jmeno: { popis: 'Policyholder’s full name', napoveda: 'As stated in the insurance policy. For a company, its name and company ID number (IČO).', placeholder: 'e.g. Jan Novák' },
      p_narozeni: { popis: 'Date of birth', napoveda: 'The insurer uses it to find you. You do not need to write your birth number (rodné číslo).' },
      p_adresa: { popis: 'Address', napoveda: 'The address the insurer has in the policy (or your current one).', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      p_kontakt: { popis: 'Phone or e-mail (optional)', napoveda: 'In case the insurer needs anything further from you.', placeholder: 'e.g. jan.novak@email.cz' },
      poj_nazev: { popis: 'Insurance company', napoveda: 'Name of the insurer, e.g. Kooperativa, ČPP, Allianz, Generali ČP.', placeholder: 'e.g. Kooperativa pojišťovna, a.s.' },
      poj_adresa: { popis: 'Insurer’s address', napoveda: 'Correspondence address from the insurance policy or the insurer’s website. Send the notice there.', placeholder: 'e.g. Pobřežní 665/21, 186 00 Praha 8' },
      cislo_smlouvy: { popis: 'Insurance policy number', napoveda: 'The most important detail – the insurer uses it to match the notice to your policy. It is on the policy and on the green card.', placeholder: 'e.g. 1234567890' },
      spz: { popis: 'Registration number (SPZ)', napoveda: 'Helps the insurer check which vehicle it concerns.', placeholder: 'e.g. 1AB 2345' },
      duvod: {
        popis: 'Why the insurance is ending',
        napoveda: 'The time limit depends on the ground. Most common is notice to the end of the insurance period (anniversary) because of a cheaper insurer.',
        moznosti: {
          vyroci: 'At the end of the insurance period (policy anniversary)',
          dva_mesice: 'Within 2 months of taking out the policy',
          udalost: 'After an insured event (within 3 months of reporting it)',
          prodej: 'Sale of the car / change of owner',
          cena: 'I disagree with an increase in the premium',
        },
      },
      prodej_datum: { popis: 'Date of sale (transfer) of the car', napoveda: 'The day the purchase agreement was signed or the car handed over.' },
      udalost_cislo: { popis: 'Claim number (optional)', napoveda: 'The claim number the insurer assigned to you.' },
      zadosti: {
        popis: 'What else you want from the insurer',
        napoveda: 'You will need the confirmation of claims history at the new insurer for your bonus. The insurer will refund an overpayment only if it knows where to send it.',
        moznosti: {
          prubeh: 'Confirmation of claims history',
          preplatek: 'Refund of unused premium',
          potvrzeni: 'Written confirmation that the insurance has ended',
        },
      },
      ucet: { popis: 'Account number for the refund', napoveda: 'The policyholder’s account.', placeholder: '123456789/0100' },
      misto: { popis: 'Place (town)', napoveda: 'We pre-fill it from your address.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date', napoveda: 'We have pre-filled today’s date.' },
    },
    vysvetleni: [
      'Who gives notice – the person who took out the policy.',
      'Who you are sending the notice to.',
      'The notice itself. The ground determines when the insurance ends.',
      'What else you need from the insurer.',
    ],
    coDal: [
      'Sign the notice and send it by registered post with proof of delivery, or hand it in at a branch and ask for confirmation of receipt.',
      'The time limit runs from the day the insurer receives the notice – not from the day you send it. Do not leave it to the last minute.',
      'Arrange new insurance before the old one ends. A car in the register must not be without compulsory motor insurance (povinné ručení) for even a single day.',
      'Keep the postage receipt and the delivery confirmation until the insurer confirms that the policy has ended.',
    ],
    kontrola: [
      'Copy the policy number and registration number (SPZ) exactly from the insurance policy or the green card.',
      'For notice to the end of the insurance period, the insurer must RECEIVE it at least 6 weeks before the period ends. You will find the end of the period (anniversary) in the insurance policy.',
      'Notice within 2 months of taking out the policy has an 8-day notice period; after an insured event you must give notice within 3 months of reporting it (notice period 1 month).',
      'If you sold the car, attach a copy of the purchase agreement. The insurance ends on the day you notify the insurer of the change of owner.',
      'The new compulsory motor insurance must follow on with no gap – driving, or even just parking on the road, without insurance is an offence.',
      'Send your disagreement with a premium increase within 1 month of receiving the notice of the change (check the time limit in the policy terms).',
      'Your insurer’s terms may offer further options (e.g. cancelling online) – have a look at the policy terms.',
    ],
  },

  dokument: {
    nazev: 'Notice of Termination of Insurance of Liability for Damage Caused by the Operation of a Vehicle',
    podnadpis: 'notice cancelling compulsory motor insurance (povinné ručení) under the Civil Code (občanský zákoník) and Act No. 30/2024 Coll., on insurance of liability for damage caused by the operation of a vehicle',
    podpisy: { vlevo: 'policyholder', vpravo: 'received on behalf of the insurer (if handed in in person)' },
    clanky: [
      {
        nadpis: 'Policyholder',
        odstavce: ['{{p_jmeno}}, date of birth {{p_narozeni}}, residing at {{p_adresa}}, contact: {{p_kontakt}}'],
      },
      {
        nadpis: 'Insurer',
        odstavce: ['{{poj_nazev}}, {{poj_adresa}}'],
      },
      {
        nadpis: 'Notice of termination',
        odstavce: [
          'I hereby give notice of termination of insurance policy No. {{cislo_smlouvy}} covering liability for damage caused by the operation of the vehicle with registration number {{spz}}.',
          {
            uvodVzor: 'Ground (tick one option):',
            moznosti: {
              vyroci: 'I give notice of termination of the insurance to the end of the insurance period under the Civil Code.',
              dva_mesice: 'I give notice of termination of the insurance within two months of the date the policy was taken out, with an eight-day notice period under Section 2805(a) of the Civil Code.',
              udalost: 'I give notice of termination of the insurance within three months of the date the insured event (No. {{udalost_cislo}}) was reported, with a one-month notice period under Section 2805(b) of the Civil Code.',
              prodej: 'I hereby notify you of a change of owner of the vehicle as of {{prodej_datum}}; under the Act on insurance of liability for damage caused by the operation of a vehicle the insurance thereby ends. I enclose a copy of the purchase agreement.',
              cena: 'I do not agree with the change in the amount of the premium that you notified to me. I request that the insurance be terminated at the end of the current insurance period.',
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
              prubeh: 'the issue of a confirmation of the claims history of the insurance',
              preplatek: 'a refund of the unused premium to account No. {{ucet}}',
              potvrzeni: 'written confirmation of the date on which the insurance ended',
            },
          },
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

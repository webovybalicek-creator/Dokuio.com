/**
 * English version: receipt for money received (Czech Republic). Original: src/obsah/cz/potvrzeni-o-prevzeti-penez.ts
 * and src/sablony/cz/potvrzeni-prevzeti-penez.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-POTVRZENI-PENIZE', verze: '1.0' },

  nazev: 'Cash Receipt',
  nazevA: 'the cash receipt',
  katalog: {
    popis: 'Proof that cash was handed over.',
    slova: ['receipt', 'cash receipt', 'payment receipt', 'proof of payment', 'cash', 'money received', 'confirmation of payment', 'potvrzení o převzetí peněz', 'příjmový doklad'],
  },
  landing: {
    title: 'Cash Receipt Czech Republic {rok} – free PDF template',
    description:
      'Receipt for money (cash) received, for the Czech Republic, explained in English: who, how much and what for. Free bilingual PDF or Word, no sign-up.',
    perex: 'Paying or receiving cash? Have the recipient sign that they received the money. Useful for a purchase price, an advance payment or a loan repayment.',
    obsahPopis: 'A short receipt (kvitance) under Section 1949 of the Czech Civil Code (občanský zákoník).',
    obsah: [
      { nazev: 'Confirmation', popis: 'Who received the money, from whom and how much – in figures (in words in the Czech text).' },
      { nazev: 'Purpose of payment', popis: 'Purchase price, advance payment, loan or repayment, with details. The full payment or only part.' },
    ],
    kroky: [
      { nazev: 'Answer the questions', popis: 'Who, how much and what for. Takes about a minute.' },
      { nazev: 'Download and print', popis: 'Bilingual PDF or Word, free and without sign-up.' },
      { nazev: 'Have the recipient sign', popis: 'The signature of the person who received the money is the most important. It can also be done with a finger on a phone.' },
    ],
    online: ['The amount in words (in Czech) is added automatically', 'Purpose of payment with one click', 'Sign with your finger right on your phone', 'Download as PDF and Word'],
    hodiSe: ['you are paying a purchase price or an advance in cash', 'you are repaying a loan or an instalment in cash', 'you want proof that you have paid'],
    nehodiSe: ['you are paying by bank transfer – the bank statement is your proof', 'you need a tax document from a company (till receipt, invoice)', 'you want to put the loan itself in writing – use a loan agreement (smlouva o zápůjčce)'],
    poNadpis: 'When handing over the money.',
    po: [
      { nazev: 'Count the money', popis: 'Before signing, ideally both of you together.' },
      { nazev: 'Sign', popis: 'The recipient always signs; the payer may too.' },
      { nazev: 'Keep it', popis: 'The receipt belongs to the payer. It is proof that they paid.' },
    ],
    faq: [
      { q: 'Am I entitled to a receipt?', a: 'Yes. A person paying a debt may ask the creditor for confirmation that they have paid (a so-called receipt – kvitance). The recipient of the money should not refuse it.' },
      { q: 'Why write the amount in words as well?', a: 'The amount in words prevents digits being added later and removes ambiguity when copying. The guide adds it automatically (in Czech).' },
      { q: 'Does the payer also have to sign the receipt?', a: 'No. The recipient’s signature is what matters. The payer’s signature does no harm, though, and the template has space for it.' },
      { q: 'Is the receipt suitable for selling a car?', a: 'Yes, when the purchase price is paid in cash at a different time from signing the agreement, or in instalments. In the details, state the car and the date of the purchase agreement.' },
      { q: 'Do you store my details?', a: 'No. The receipt is put together directly in your browser and the details are not sent to any server.' },
    ],
    zakony: 'The template is based on Section 1949 of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník; confirmation of performance).',
    souvisejiciPopis: 'Other documents about money and gifts, also free.',
  },
  vytvorit: {
    title: 'Fill in a cash receipt online – Czech Republic, PDF',
    description: 'Guide in English for a receipt for money received in the Czech Republic: who, how much and what for. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 1 minute',
  },

  pruvodce: {
    slovo: { n: 'receipt', g: 'receipt', a: 'receipt', l: 'receipt' },
    kroky: {
      strany: { nazev: 'Who pays and who receives', popis: 'The recipient received the money and confirms it with their signature. The payer handed it over.' },
      platba: { nazev: 'Amount and purpose' },
      kdy: { nazev: 'When and where' },
    },
    pole: {
      p_jmeno: { popis: 'Recipient – first name and surname', napoveda: 'Who received the money. Full name as in the identity document.', placeholder: 'e.g. Jan Novák' },
      p_narozeni: { popis: 'Recipient’s date of birth', napoveda: 'The date of birth is enough; you don’t need to write the Czech personal identification number (rodné číslo).' },
      p_adresa: { popis: 'Recipient’s address', napoveda: 'Permanent address from the identity document.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      k_jmeno: { popis: 'Payer – first name and surname', napoveda: 'Who handed over the money.', placeholder: 'e.g. Petra Svobodová' },
      k_narozeni: { popis: 'Payer’s date of birth', napoveda: 'According to the identity document.' },
      k_adresa: { popis: 'Payer’s address', napoveda: 'Permanent address from the identity document.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      castka: { popis: 'Amount received (CZK)', napoveda: 'The exact amount the recipient received. We add it in words (in Czech) ourselves – this prevents digits being added.', placeholder: 'e.g. 215000' },
      ucel: {
        popis: 'What the payment is for',
        napoveda: 'The purpose links the receipt to a specific contract or debt. Without it, someone could claim it was for something else.',
        moznosti: {
          kupni: 'Purchase price',
          zaloha: 'Advance payment',
          jistota: 'Security deposit (jistota, kauce) for a tenancy',
          zapujcka: 'Money lent (handing over a loan)',
          splatka: 'Loan repayment or instalment',
          jine: 'Something else',
        },
      },
      ucel_popis: {
        popis: 'Details',
        napoveda: 'What the payment relates to, e.g. “za auto Škoda Octavia podle kupní smlouvy ze dne 19. 11. 2026” (for the Škoda Octavia car under the purchase agreement of 19 Nov 2026). Ideally write it in Czech.',
        placeholder: 'e.g. za auto Škoda Octavia, SPZ 1AB 2345 (for the Škoda Octavia, reg. no. 1AB 2345)',
      },
      uplne: {
        popis: 'Is the debt paid in full by this?',
        napoveda: 'If this is the last or only payment, choose “in full”. The recipient thereby confirms that nothing more is owed.',
        moznosti: { ano: 'Yes, in full', cast: 'No, it is only part' },
      },
      misto: { popis: 'Place of receipt (town)', napoveda: 'We pre-fill it from the recipient’s address; feel free to change it.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date of receipt', napoveda: 'We pre-filled today. If you want to write the date by hand, clear the field.' },
    },
    vysvetleni: [
      'With their signature, the recipient confirms that they received the money. The payer keeps the receipt as proof of payment.',
      'What the payment was for. It links the receipt to a specific contract or debt.',
    ],
    coDal: [
      'Print the receipt and have the recipient of the money sign it – their signature is the most important.',
      'Count the money before signing.',
      'The payer keeps the receipt. It is proof that they paid.',
      'For several payments, issue a separate receipt for each one.',
    ],
    kontrola: [
      'Count the money before signing, ideally both of you together.',
      'The amount in figures and in words match.',
      'The purpose of the payment is specific (contract, date, car) – so that no one can claim it was for something else.',
      'The recipient’s signature – without it the receipt proves nothing.',
      'Cash payments above CZK 270,000 are prohibited; pay higher amounts by transfer.',
    ],
  },

  dokument: {
    nazev: 'Receipt for Money Received',
    podnadpis: 'confirmation of performance (kvitance) under Section 1949 of Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
    podpisy: { vlevo: 'recipient (received)', vpravo: 'payer (handed over)' },
    clanky: [
      {
        nadpis: 'Confirmation',
        odstavce: [
          '**Recipient:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanently residing at {{p_adresa}} (the “Recipient”)',
          '**Payer:** {{k_jmeno}}, date of birth {{k_narozeni}}, permanently residing at {{k_adresa}} (the “Payer”)',
          'The Recipient confirms having received from the Payer in cash the amount of **{{castka}}**.',
        ],
      },
      {
        nadpis: 'Purpose of Payment',
        odstavce: [
          {
            uvod: 'The amount was paid as',
            uvodVzor: 'The amount was paid as (tick):',
            moznosti: {
              kupni: 'the purchase price.',
              zaloha: 'an advance payment.',
              jistota: 'a security deposit (kauce) under a lease agreement.',
              zapujcka: 'the handing over of a loan.',
              splatka: 'repayment of a loan or an instalment of it.',
              jine: 'another payment.',
            },
          },
          'Details: {{ucel_popis}}',
          {
            uvodVzor: 'Extent (tick one option):',
            moznosti: {
              ano: 'The Recipient confirms that their claim has hereby been paid in full.',
              cast: 'This is a partial payment; the remaining part of the claim is not affected by this receipt.',
            },
          },
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

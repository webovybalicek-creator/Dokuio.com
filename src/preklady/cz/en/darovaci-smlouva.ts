/**
 * English version: gift agreement (Czech Republic). Original: src/obsah/cz/darovaci-smlouva.ts
 * and src/sablony/cz/darovaci-smlouva.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-DAROVACI', verze: '1.0' },

  nazev: 'Gift Agreement',
  nazevA: 'the gift agreement',
  katalog: {
    popis: 'A gift of money or a movable item.',
    slova: ['gift', 'gift agreement', 'deed of gift', 'gift of money', 'give money', 'present', 'movable item', 'donation', 'darovací smlouva', 'dar'],
  },
  landing: {
    title: 'Gift Agreement Czech Republic {rok} – free PDF template',
    description:
      'Gift agreement for money or a movable item in the Czech Republic, explained in English: fill it in online in 3 minutes and download a bilingual PDF or Word. Free.',
    perex: 'For giving money or a movable item – within the family or between friends. Fill it in online, or download a blank template.',
    obsahPopis: 'Four articles under Section 2055 et seq. of the Czech Civil Code (občanský zákoník).',
    obsah: [
      { nazev: 'Parties', popis: 'The donor and the recipient, optionally their family relationship.' },
      { nazev: 'Subject of the gift', popis: 'An amount of money in figures (in words in the Czech text), or an exact description of the item and known defects.' },
      { nazev: 'Handover of the gift', popis: 'Straight away on signing, by transfer to an account, or later by a certain date.' },
      { nazev: 'Final provisions', popis: 'Two counterparts, entry into force and both parties’ signatures.' },
    ],
    kroky: [
      { nazev: 'Answer the questions', popis: 'Who is giving, who is receiving and what. Skip what you don’t know – a line is left to fill in by hand.' },
      { nazev: 'Edit the text if you wish', popis: 'You can rewrite or delete any paragraph. The original wording can always be restored.' },
      { nazev: 'Download PDF or Word', popis: 'Free, no sign-up. The agreement is bilingual: Czech original and English translation. Print it twice – both parties sign.' },
    ],
    online: ['The amount in words (in Czech) is added automatically', 'The text adapts to money or an item', 'Sign with your finger or mouse right in the guide', 'Download as PDF and Word'],
    hodiSe: [
      'you are giving money to a child, grandchild or another relative',
      'you are giving a movable item – jewellery, electronics, a car',
      'you are sending the money by transfer or handing it over later (then a written agreement is required)',
    ],
    nehodiSe: [
      'you are giving a flat, house or land – have a lawyer prepare the agreement for the Land Register (katastr nemovitostí)',
      'you are lending money and want it back – use a loan agreement (smlouva o zápůjčce)',
      'the gift is conditional or comes with an obligation for the recipient (e.g. lifelong maintenance – doživotí)',
    ],
    po: [
      { nazev: 'Sign two counterparts', popis: 'Each party keeps one.' },
      { nazev: 'Hand over the gift', popis: 'Cash or an item ideally straight away on signing, a transfer by the agreed date.' },
      { nazev: 'Keep the agreement', popis: 'The recipient uses it to prove where the money or item came from – to the bank, the tax office (finanční úřad) and in probate proceedings.' },
    ],
    faq: [
      { q: 'Does a gift agreement have to be in writing?', a: 'If the gift is handed over hand to hand at the moment of agreement, the law does not require written form. It must be in writing when the gift is handed over later or by transfer from an account. A written agreement is also proof for the bank, the tax office and probate proceedings.' },
      { q: 'Is tax paid on a gift?', a: 'Gifts from a spouse and from relatives in the direct line (parents, grandparents, children, grandchildren), in the collateral line (siblings, uncle, aunt, nephew, niece) and from in-laws are exempt from income tax. For other donors an annual limit of CZK 50,000 applies. Exempt income above CZK 5 million must be reported to the tax office. In your specific situation, consult a tax adviser.' },
      { q: 'Can a gift be taken back?', a: 'Only exceptionally: when the donor falls into need, or when the recipient seriously wrongs them (ingratitude). The law always gives the donor these rights and they cannot be excluded by the agreement.' },
      { q: 'How do I give money to a minor child?', a: 'For a minor child, the gift is accepted and the agreement signed by their legal representative, usually a parent. For large amounts, the consent of a court may be needed.' },
      { q: 'Is the agreement suitable for giving a car?', a: 'Yes. In the description of the item, give the make, VIN and registration number (SPZ). After the gift, the change of owner must be recorded in the vehicle register (registr vozidel), just as after a sale.' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together directly in your browser and the details are not sent to any server.' },
    ],
    zakony: 'The template is based on Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník, Section 2055 et seq.). Tax information under Act No. 586/1992 Coll., on Income Taxes (zákon o daních z příjmů), is for guidance only.',
    souvisejiciPopis: 'Other documents about money and gifts, also free.',
  },
  vytvorit: {
    title: 'Fill in a gift agreement for money or an item – Czech Republic, PDF',
    description: 'Guide in English for a gift agreement in the Czech Republic: money or a movable item. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    kroky: {
      strany: { nazev: 'Donor and recipient', popis: 'The donor gives the gift, the recipient accepts it. Copy the details from the identity documents.' },
      dar: { nazev: 'What is being given', popis: 'Money or a movable item (jewellery, furniture, electronics, a car). This template is not for real estate.' },
      predani: { nazev: 'Handover of the gift' },
    },
    pole: {
      p_jmeno: { popis: 'Donor – first name and surname', napoveda: 'The person giving the gift. Full name as in their identity document.', placeholder: 'e.g. Marie Nováková' },
      p_narozeni: { popis: 'Donor’s date of birth', napoveda: 'The date of birth is enough; you don’t need to write the Czech personal identification number (rodné číslo).' },
      p_adresa: { popis: 'Donor’s address', napoveda: 'Permanent address from the identity document.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      k_jmeno: { popis: 'Recipient – first name and surname', napoveda: 'The person receiving the gift. If the recipient is a minor, a parent signs for them as their legal representative.', placeholder: 'e.g. Tomáš Novák' },
      k_narozeni: { popis: 'Recipient’s date of birth', napoveda: 'According to the identity document or birth certificate.' },
      k_adresa: { popis: 'Recipient’s address', napoveda: 'Permanent address.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      vztah: { popis: 'Recipient’s relationship to the donor (optional)', napoveda: 'E.g. son, granddaughter, sister, husband. Gifts between close relatives are exempt from income tax – recording it in the agreement makes this easier to prove. Write it in Czech.', placeholder: 'e.g. syn (son)' },
      predmet: {
        popis: 'Subject of the gift',
        napoveda: 'Depending on your choice, the right text appears in the agreement.',
        moznosti: { penize: 'Money', vec: 'An item' },
      },
      castka: { popis: 'Amount given (CZK)', napoveda: 'We add the amount in words (in Czech) to the agreement ourselves.', placeholder: 'e.g. 200000' },
      vec_popis: {
        popis: 'Description of the item',
        napoveda: 'So that the item cannot be mistaken for another: make, type, serial number, colour. For a car, give the VIN and registration number (SPZ). Ideally write it in Czech.',
        placeholder: 'e.g. zlatý prsten s briliantem, značka … (gold ring with a diamond, make …); or osobní automobil Škoda Fabia, VIN …, SPZ …',
      },
      vec_hodnota: { popis: 'Approximate value of the item (CZK, optional)', napoveda: 'An estimate of the usual price. Useful for tax purposes and any probate proceedings.', placeholder: 'e.g. 30000' },
      vady: {
        popis: 'Defects of the item',
        napoveda: 'The donor should inform the recipient of any defects they know about. If they know of none, choose the first option.',
        moznosti: { bez: 'The donor is not aware of any defects', s: 'The item has defects the donor knows about' },
      },
      vady_popis: { popis: 'Description of the defects', placeholder: 'e.g. poškrábaný displej (scratched display)' },
      predani: {
        popis: 'When and how the gift is handed over',
        napoveda: 'The safest option is to hand over the gift straight away on signing. With a transfer from an account or a later handover the agreement must be in writing – so it is good that you have it.',
        moznosti: { hned: 'Straight away on signing the agreement', prevod: 'By transfer to the recipient’s account (money only)', pozdeji: 'Later, by a certain date' },
      },
      ucet: { popis: 'Recipient’s bank account number', napoveda: 'The account the donor sends the money to.', placeholder: '123456789/0100' },
      predani_do: { popis: 'Hand over no later than', napoveda: 'The last day on which the donor must hand over the gift or send the money.' },
      misto: { popis: 'Place of signing (town)', napoveda: 'We pre-fill it from the donor’s address; feel free to change it.', placeholder: 'e.g. Říčany' },
      datum_podpisu: { popis: 'Date of signing', napoveda: 'We pre-filled today. If you want to write the date by hand, clear the field.' },
    },
    vysvetleni: [
      'Who gives the gift and who receives it. The family relationship helps prove that the gift is not taxed.',
      'What exactly is being given. For money the amount, for an item a description by which no one can mistake it.',
      'When the recipient actually receives the gift. They become the owner by taking it over.',
      'Standard formal points. Exceptionally, the law allows the donor to revoke the gift (need, gross ingratitude) – this cannot be excluded by the agreement. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Print the agreement twice; the donor and the recipient sign both copies.',
      'Hand over the gift – cash or an item ideally straight away on signing, a transfer from an account by the agreed date.',
      'The recipient keeps the agreement. It proves where the money or item came from (bank, tax office, inheritance).',
      'A gift above CZK 5 million must be reported to the tax office (finanční úřad), even if it is exempt from tax.',
    ],
    kontrola: [
      'The donor is the actual owner of the gift (for a car, registered in the registration certificate – osvědčení o registraci).',
      'Money by transfer: in the payment reference, write “dar podle darovací smlouvy ze dne …” (“gift under the gift agreement dated …”).',
      'A gift from a person who is not a close relative is exempt from tax only up to CZK 50,000 a year – above the limit it is taxed.',
      'An exempt gift above CZK 5 million must be reported to the tax office (even between relatives).',
      'For a minor recipient, a parent signs; for large gifts the consent of a court may be needed.',
      'Giving a car? After the gift, file the transfer of registration at the vehicle register within 10 working days.',
    ],
    pripominky: {
      'Předat dar': { nazev: 'Hand over the gift' },
    },
  },

  dokument: {
    nazev: 'Gift Agreement',
    podnadpis: 'concluded under Section 2055 et seq. of Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
    podpisy: { vlevo: 'donor', vpravo: 'recipient' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Donor:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanently residing at {{p_adresa}} (the “Donor”)',
          '**Recipient:** {{k_jmeno}}, date of birth {{k_narozeni}}, permanently residing at {{k_adresa}} (the “Recipient”)',
          'The Recipient’s relationship to the Donor: {{vztah}}.',
        ],
      },
      {
        nadpis: 'Subject of the Gift',
        odstavce: [
          {
            uvodVzor: 'Subject of the gift (tick one option):',
            moznosti: {
              penize: 'By this agreement the Donor gives the Recipient, free of charge, the sum of {{castka}}.',
              vec: 'By this agreement the Donor gives the Recipient, free of charge, the following item: {{vec_popis}}. The approximate value of the item is {{vec_hodnota}}.',
            },
          },
          'The Donor declares that they are the sole owner of the gift and that the gift is not encumbered by any third-party right.',
          {
            uvodVzor: 'If the gift is an item – defects (tick one option):',
            moznosti: {
              bez: 'The Donor is not aware of any defects of the item given.',
              s: 'The Donor has informed the Recipient of the following defects of the item given: {{vady_popis}}',
            },
          },
          'The Recipient accepts the gift.',
        ],
      },
      {
        nadpis: 'Handover of the Gift',
        odstavce: [
          {
            uvodVzor: 'Handover of the gift (tick one option):',
            moznosti: {
              hned: 'The Donor handed over the gift to the Recipient upon signing this agreement and the Recipient confirms its receipt by signing.',
              prevod: 'The Donor shall transfer the amount given to the Recipient’s account No. {{ucet}} no later than {{predani_do}}.',
              pozdeji: 'The Donor shall hand over the gift to the Recipient no later than {{predani_do}}.',
            },
          },
          'Ownership of the gift passes to the Recipient upon taking it over; for money sent by transfer, upon the amount being credited to the Recipient’s account.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Rights and obligations of the parties not governed by this agreement are governed by Act No. 89/2012 Coll., the Civil Code, in particular Section 2055 et seq.',
          'This agreement is executed in two counterparts, one for each party.',
          'This agreement becomes valid and effective upon signature by both parties.',
          'The parties declare that they are entering into this agreement freely and seriously, have read it and sign it in witness of their consent.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

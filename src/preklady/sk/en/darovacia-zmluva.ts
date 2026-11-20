/**
 * English version: gift agreement (Slovakia). Original: src/obsah/sk/darovacia-zmluva.ts
 * and src/sablony/sk/darovacia-zmluva.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-DAROVACIA', verze: '1.0' },

  nazev: 'Gift Agreement',
  nazevA: 'the gift agreement',
  katalog: {
    popis: 'Gift of money, a car or other movable property.',
    slova: ['gift', 'donation', 'money gift', 'give a car', 'gift agreement', 'deed of gift', 'darovacia zmluva', 'dar'],
  },
  landing: {
    title: 'Gift Agreement Slovakia {rok} – free PDF template',
    description:
      'Gift agreement for money or movable property (e.g. a car) in Slovakia under Section 628 of the Civil Code, explained in English. Bilingual PDF and Word, free.',
    perex: 'A gift of money or movable property within the family or between acquaintances. Not intended for real estate.',
    obsahPopis: 'Four articles under Sections 628 to 630 of the Slovak Civil Code (Občiansky zákonník).',
    obsah: [
      { nazev: 'Parties', popis: 'Donor and recipient.' },
      { nazev: 'Subject of the gift', popis: 'Money or an item.' },
      { nazev: 'Handover', popis: 'Immediately or by a set date.' },
      { nazev: 'Final provisions', popis: 'Counterparts and validity.' },
    ],
    kroky: [
      { nazev: 'Choose the gift', popis: 'Money or an item.' },
      { nazev: 'Agree on the handover', popis: 'Now or later.' },
      { nazev: 'Sign', popis: 'Both parties.' },
    ],
    online: [
      'Amount in words (in Slovak) added automatically',
      'Signature on screen',
      'Download as PDF and as Word',
    ],
    hodiSe: [
      'you are giving money to your children or parents',
      'you are giving a car within the family',
      'you want the gift in writing',
    ],
    nehodiSe: [
      'a gift of a flat, house or land – registration in the land register (vklad do katastra) is required',
    ],
    po: [
      { nazev: 'Car', popis: 'Change of the vehicle’s registered keeper (zmena držby) within 30 days.' },
      { nazev: 'Money', popis: 'By bank transfer with the reference “dar” (“gift”).' },
    ],
    faq: [
      { q: 'Does a gift agreement have to be in writing?', a: 'If a movable item is not handed over at the time of the gift, the agreement must be in writing (Section 628 OZ). Written form is always recommended.' },
      { q: 'Can a gift be taken back?', a: 'The donor may claim the gift back if the recipient behaves towards the donor or their family in a way that grossly violates good morals (Section 630 OZ).' },
      { q: 'Do you store my details?', a: 'No. The agreement is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník, Sections 628 to 630).',
    souvisejiciPopis: 'Other documents about money, also free.',
  },
  vytvorit: {
    title: 'Fill in a gift agreement online – Slovakia, PDF',
    description: 'Guide in English for a gift agreement for money or movable property in Slovakia. Bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      strany: { nazev: 'Donor and recipient' },
      dar: { nazev: 'Gift' },
    },
    pole: {
      p_jmeno: { popis: 'Donor – full name' },
      p_narozeni: { popis: 'Date of birth' },
      p_adresa: { popis: 'Permanent address' },
      k_jmeno: { popis: 'Recipient – full name' },
      k_narozeni: { popis: 'Date of birth' },
      k_adresa: { popis: 'Permanent address' },
      vztah: { popis: 'Relationship (optional)', napoveda: 'E.g. syn (son), sestra (sister) – may matter for tax or inheritance. Write it in Slovak.' },
      predmet: {
        popis: 'What is being given',
        moznosti: { penize: 'Money', vec: 'Movable item (e.g. car, jewellery, furniture)' },
      },
      castka: { popis: 'Amount (€)' },
      vec_popis: { popis: 'Description of the item', placeholder: 'e.g. osobné auto Škoda Fabia, VIN …, EČV … (passenger car Škoda Fabia, VIN …, registration number …)' },
      vady_popis: { popis: 'Known defects of the item (optional)', napoveda: 'The donor should point out defects they know about.' },
      predani: {
        popis: 'When the gift is handed over',
        moznosti: { ihned: 'On signing the agreement', pozdeji: 'By a set date' },
      },
      predani_do: { popis: 'Hand over by' },
      ucet: { popis: 'Recipient’s IBAN (for a transfer)' },
      misto: { popis: 'Place of signing' },
      datum_podpisu: { popis: 'Date of signing' },
    },
    vysvetleni: [
      'Who gives the gift and who accepts it.',
      'What is being given.',
      'When and how the gift is handed over.',
      'Standard formal points.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'Preferably send money by bank transfer with the reference “dar” (“gift”).',
    ],
    kontrola: [
      'This agreement is for money and movable items. A gift of real estate (flat, land) requires registration in the land register (vklad do katastra) – consult a lawyer or notary.',
      'When giving a vehicle, do not forget the change of registered keeper (zmena držby vozidla) within 30 days.',
      'The donor may claim the gift back if the recipient behaves towards the donor or members of their family in a way that grossly violates good morals (Section 630 OZ).',
      'Check the other party’s identity against their identity card (občiansky preukaz) and copy the names exactly as shown on it.',
      'Count cash only at signing; larger amounts are better paid by transfer. Between two private individuals who are not traders, the law prohibits cash payments above €15,000; if one party is a trader or company, above €5,000.',
    ],
    pripominky: {
      'Odovzdať dar': { nazev: 'Hand over the gift' },
    },
  },

  dokument: {
    nazev: 'Gift Agreement',
    podnadpis: 'concluded under Section 628 et seq. of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník)',
    podpisy: { vlevo: 'donor', vpravo: 'recipient' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Donor:** {{p_jmeno}}, date of birth {{p_narozeni}}, permanent address {{p_adresa}} (the “Donor”)',
          '**Recipient:** {{k_jmeno}}, date of birth {{k_narozeni}}, permanent address {{k_adresa}}, relationship to the Donor: {{vztah}} (the “Recipient”)',
        ],
      },
      {
        nadpis: 'Subject of the Gift',
        odstavce: [
          {
            uvodVzor: 'Subject of the gift (tick one option):',
            moznosti: {
              penize: 'The Donor gives the Recipient, free of charge, the sum of money of {{castka}}.',
              vec: 'The Donor gives the Recipient, free of charge, the following movable item: {{vec_popis}}. The Donor has informed the Recipient of the following defects of the item: {{vady_popis}}',
            },
          },
          'The Recipient accepts the gift.',
        ],
      },
      {
        nadpis: 'Handover of the Gift',
        odstavce: [
          {
            uvodVzor: 'Handover (tick one option):',
            moznosti: {
              ihned: 'The gift was handed over on signing this agreement and the Recipient confirms its receipt by signing.',
              pozdeji: 'The Donor will hand over the gift to the Recipient no later than {{predani_do}}; money may be paid by transfer to the account IBAN {{ucet}}.',
            },
          },
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Rights and obligations not governed by this agreement are governed by Sections 628 to 630 of Act No. 40/1964 Coll., the Civil Code.',
          'The agreement is made in two counterparts, one for each party, and becomes valid and effective upon signature by both parties.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

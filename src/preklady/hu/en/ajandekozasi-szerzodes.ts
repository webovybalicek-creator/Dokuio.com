/**
 * English version: gift agreement (Hungary). Original: src/obsah/hu/ajandekozasi-szerzodes.ts
 * and src/sablony/hu/ajandekozasi-szerzodes.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-AJANDEKOZAS', verze: '1.0' },

  nazev: 'Gift Agreement',
  nazevA: 'the gift agreement',
  katalog: {
    popis: 'Giving money or an item as a gift.',
    slova: ['gift agreement', 'gift contract', 'giving money', 'cash gift', 'gift duty', 'gift within the family', 'deed of gift', 'ajándékozási szerződés', 'ajándékozási illeték'],
  },
  landing: {
    title: 'Gift Agreement Hungary {rok} – free PDF template',
    description:
      'Gift agreement for money or movable property in Hungary, explained in English: family relationship, gift duty, handover. Bilingual PDF or Word, free.',
    perex: 'Giving money or an item in writing. In the tips we show when the gift is exempt from duty.',
    obsahPopis: 'What it contains.',
    obsah: [
      { nazev: 'Parties', popis: 'Donor, recipient, family relationship.' },
      { nazev: 'Gift', popis: 'Description of the money or the item.' },
      { nazev: 'Handover', popis: 'Immediately or later.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Parties and gift.' },
      { nazev: 'Handover', popis: 'Money preferably by bank transfer.' },
      { nazev: 'Signing', popis: 'In two counterparts.' },
    ],
    online: ['The amount in words (in Hungarian) is added automatically', 'Signing on screen', 'Download as PDF and Word'],
    hodiSe: ['you are giving money to your child or grandchild', 'you are giving a more valuable item as a gift'],
    nehodiSe: ['giving real estate – a lawyer’s countersignature (ügyvédi ellenjegyzés) is required'],
    po: [{ nazev: 'Duty', popis: 'Check the information from the NAV (Hungarian Tax and Customs Administration) on exemptions and reporting.' }],
    faq: [
      {
        q: 'Do I have to pay duty?',
        a: 'As a rule, yes (generally 18 %), but a gift to a lineal relative (parent, child, grandparent, grandchild), a spouse or a sibling is exempt from duty.',
      },
      { q: 'Is written form compulsory?', a: 'Not for movable property, but in writing you can prove the fact of the gift and the family relationship.' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony: 'The template is based on the Hungarian Civil Code (Polgári Törvénykönyv) and Act XCIII of 1990 on duties (1990. évi XCIII. törvény az illetékekről).',
    souvisejiciPopis: 'Other documents for money matters, also free.',
  },
  vytvorit: {
    title: 'Fill in a gift agreement online – Hungary, PDF',
    description: 'Guide in English for a gift agreement in Hungary for money or movable property, with the amount in words and tips on gift duty. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      felek: { nazev: 'Parties' },
      ajandek: { nazev: 'Gift' },
    },
    pole: {
      p_jmeno: { popis: 'Donor’s name' },
      p_szul: { popis: 'Place and date of birth' },
      p_anyja: { popis: 'Mother’s name (anyja neve)' },
      p_adresa: { popis: 'Address' },
      k_jmeno: { popis: 'Recipient’s name' },
      k_szul: { popis: 'Place and date of birth' },
      k_anyja: { popis: 'Mother’s name (anyja neve)' },
      k_adresa: { popis: 'Address' },
      rokonsag: { popis: 'Family relationship (optional)', placeholder: 'e.g. a megajándékozott az ajándékozó gyermeke (the recipient is the donor’s child)' },
      tipus: {
        popis: 'What are you giving',
        moznosti: { penz: 'Money', dolog: 'An item (movable property)' },
      },
      castka: { popis: 'Amount (Ft)' },
      dolog: { popis: 'Description of the item', placeholder: 'e.g. Samsung televízió, gyári szám … (Samsung TV, serial number …)' },
      ertek: { popis: 'Estimated value of the item (Ft)' },
      atadas: {
        popis: 'Handover',
        moznosti: { mar: 'Handed over upon signing', kesobb: 'Later, by a certain date' },
      },
      atadas_datum: { popis: 'Handover no later than' },
      misto: { popis: 'Town' },
      datum_podpisu: { popis: 'Date of the agreement' },
    },
    vysvetleni: ['', 'What the recipient receives, without anything in return.', ''],
    coDal: [
      'Print it in two counterparts; both of you sign both copies.',
      'When giving money, use a bank transfer – it also proves that the gift was made.',
    ],
    kontrola: [
      'As a rule, a gift is subject to gift duty (ajándékozási illeték). A gift to a lineal relative (parent, child, grandparent, grandchild), a spouse or a sibling is exempt from duty. In other cases the duty is generally 18 %; check the reporting rules in the information from the [NAV](https://nav.gov.hu/) (Hungarian Tax and Customs Administration).',
      'Without a written agreement, a gift of movable property is subject to duty only if its market value exceeds 150 000 Ft – a written agreement, however, may make it subject to duty regardless, so always write the family relationship into it.',
      'Giving real estate requires a lawyer’s countersignature (ügyvédi ellenjegyzés) – this template is not suitable for that.',
      'When giving a motor vehicle, the signatures of two witnesses are also needed for the transfer of ownership in the vehicle register (forgalmi átírás).',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
    ],
  },

  dokument: {
    nazev: 'Gift Agreement',
    podnadpis: 'under the gift agreement rules of Act V of 2013 on the Civil Code (Polgári Törvénykönyv)',
    podpisy: { vlevo: 'donor', vpravo: 'recipient' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Donor:** {{p_jmeno}}, place and date of birth: {{p_szul}}, mother’s name: {{p_anyja}}, address: {{p_adresa}}',
          '**Recipient:** {{k_jmeno}}, place and date of birth: {{k_szul}}, mother’s name: {{k_anyja}}, address: {{k_adresa}}',
          'Family relationship of the parties: {{rokonsag}}',
        ],
      },
      {
        nadpis: 'The Gift',
        odstavce: [
          {
            uvodVzor: 'The gift (tick one option):',
            moznosti: {
              penz: 'The Donor gives the following sum of money free of charge into the ownership of the Recipient: {{castka}}.',
              dolog: 'The Donor gives the following item free of charge into the ownership of the Recipient: {{dolog}} (estimated value: {{ertek}}).',
            },
          },
          'The Recipient gratefully accepts the gift.',
          {
            uvodVzor: 'Handover (tick one option):',
            moznosti: {
              mar: 'The Donor handed over the gift upon signing this agreement, which the Recipient acknowledges by their signature.',
              kesobb: 'The Donor shall hand over the gift no later than {{atadas_datum}}.',
            },
          },
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'The Donor declares that the gift is their sole property and that no third party has any right to it.',
          'Any obligation to pay duty is borne by the Recipient.',
          'Matters not governed by this agreement are governed by the provisions of the Hungarian Civil Code. This agreement is executed in two identical counterparts.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

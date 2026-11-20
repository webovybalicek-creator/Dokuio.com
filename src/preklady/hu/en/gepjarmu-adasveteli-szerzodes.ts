/**
 * English version: car sale agreement (Hungary). Original: src/obsah/hu/gepjarmu-adasveteli-szerzodes.ts
 * and src/sablony/hu/gepjarmu-adasveteli-szerzodes.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-AUTO', verze: '1.1' },

  nazev: 'Car Sale Agreement',
  nazevA: 'the car sale agreement',
  katalog: {
    popis: 'Sale of a used car between private individuals.',
    slova: ['car sale agreement', 'vehicle sale contract', 'sell a used car', 'buy a used car', 'transfer of ownership', 'witnesses', 'gépjármű adásvételi szerződés', 'autó adásvételi szerződés', 'forgalmi átírás'],
  },
  landing: {
    title: 'Car Sale Agreement Hungary {rok} – free PDF template',
    description:
      'Car sale agreement for Hungary, explained in English: two witnesses for the transfer of ownership, price in words, 15-day deadlines. Bilingual PDF or Word, free.',
    perex: 'An agreement with full probative force and two witnesses, as needed for the transfer of ownership. We write out the purchase price in words automatically.',
    obsahPopis: 'Every point matters when selling – the witnesses too.',
    obsah: [
      { nazev: 'Parties and vehicle', popis: 'Personal details, chassis number, registration number, documents.' },
      { nazev: 'Condition', popis: 'Odometer reading and known defects.' },
      { nazev: 'Purchase price', popis: 'Cash or bank transfer, with retention of title.' },
      { nazev: 'Official formalities', popis: 'Notification, transfer of ownership, insurance, duty.' },
      { nazev: 'Witnesses', popis: 'Name, address and signature of two witnesses.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Details from the registration certificate.' },
      { nazev: 'Check', popis: 'Chassis number on the car and in the documents.' },
      { nazev: 'Signing', popis: 'Parties and two witnesses, in three counterparts.' },
    ],
    online: ['The amount in words (in Hungarian) is added automatically', 'Signing on screen', 'Download as PDF and Word', 'Reminder of the 15-day deadlines'],
    hodiSe: ['you are selling or buying a car as a private individual', 'the transfer of ownership requires an agreement with full probative force'],
    nehodiSe: ['you are buying from a car dealer – the dealer provides the agreement', 'a leased car or a car pledged as security for a loan'],
    po: [
      { nazev: 'Seller', popis: 'Reports the change of owner within 15 days.' },
      { nazev: 'Buyer', popis: 'Insurance, transfer of ownership within 15 days and property acquisition duty.' },
    ],
    faq: [
      {
        q: 'Are witnesses needed?',
        a: 'The transfer of ownership requires a private document with full probative force (teljes bizonyító erejű magánokirat): the signatures of two witnesses with their names and addresses, or a lawyer’s countersignature (ügyvédi ellenjegyzés).',
      },
      { q: 'Who pays the duty?', a: 'The property acquisition duty (vagyonszerzési illeték) is paid by the buyer; the amount depends on the engine power and the age of the car.' },
      { q: 'How soon must the ownership be transferred?', a: 'Both parties have 15 days from the change of ownership: the buyer applies for the transfer of ownership, the seller reports the sale.' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony:
      'The template is based on the Hungarian Civil Code (Polgári Törvénykönyv), the Code of Civil Procedure (Polgári perrendtartás), the Act on the road transport register and the Act on duties.',
    souvisejiciPopis: 'Other documents for selling a car, also free.',
  },
  vytvorit: {
    title: 'Fill in a car sale agreement online – Hungary, PDF',
    description: 'Guide in English for a car sale agreement in Hungary, with two witnesses, the price in words and reminders. Bilingual PDF or Word, free, no sign-up.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      felek: { nazev: 'Seller and buyer', popis: 'You do not need to know the buyer’s details yet. If you leave them blank, the agreement will have a line to fill in by hand.' },
      jarmu: { nazev: 'Vehicle', popis: 'Copy the details from the registration certificate (forgalmi engedély).' },
      allapot: { nazev: 'Condition' },
      ar: { nazev: 'Purchase price and payment' },
    },
    pole: {
      p_jmeno: { popis: 'Seller’s name', napoveda: 'The owner of the car, as stated in their identity card.', placeholder: 'e.g. Kovács János' },
      p_anyja: { popis: 'Mother’s name' },
      p_szul: { popis: 'Place and date of birth', placeholder: 'e.g. Budapest, 1980. 01. 01.' },
      p_adresa: { popis: 'Address', placeholder: 'e.g. 1011 Budapest, Fő utca 1.' },
      k_jmeno: { popis: 'Buyer’s name', placeholder: 'e.g. Nagy Anna' },
      k_anyja: { popis: 'Mother’s name' },
      k_szul: { popis: 'Place and date of birth' },
      k_adresa: { popis: 'Address', placeholder: 'e.g. 6720 Szeged, Kárász utca 5.' },
      znacka: { popis: 'Make and model', placeholder: 'e.g. Suzuki Vitara' },
      vin: { popis: 'Chassis number (VIN)', napoveda: '17 characters in the registration certificate.' },
      spz: { popis: 'Registration number', placeholder: 'e.g. AA BB-123' },
      motor: { popis: 'Engine number' },
      forgalmi: { popis: 'Registration certificate number' },
      torzskonyv: { popis: 'Vehicle title document (törzskönyv) number' },
      km: { popis: 'Odometer reading', placeholder: 'e.g. 154320' },
      klice: { popis: 'Number of keys', placeholder: 'e.g. 2' },
      birtok_datum: { popis: 'Day of handover of possession', napoveda: 'The authority requires this.' },
      birtok_ido: { popis: 'Time of handover of possession', placeholder: 'e.g. 14:30' },
      hibak: {
        popis: 'Known defects',
        napoveda: 'Be honest – the buyer cannot later rely on a defect they knew about.',
        moznosti: { nincs: 'The seller is not aware of any defect', van: 'The car has known defects' },
      },
      hibak_leiras: { popis: 'Description of the defects', placeholder: 'e.g. repedt szélvédő (cracked windscreen)' },
      cena: { popis: 'Purchase price (Ft)', napoveda: 'We write out the amount in words automatically (in Hungarian, in the original).', placeholder: 'e.g. 2500000' },
      platba: {
        popis: 'Method of payment',
        moznosti: { keszpenz: 'In cash when signing', utalas: 'By bank transfer by a set date' },
      },
      ucet: { popis: 'Seller’s bank account number', placeholder: '00000000-00000000-00000000' },
      splatnost: { popis: 'Payment deadline' },
      hatalyba: { popis: 'Day of the change of ownership', napoveda: 'The day the full purchase price is paid. The authority requires this.' },
      t1_jmeno: { popis: 'Name of witness 1', napoveda: 'Cannot be a party to the agreement.' },
      t1_adresa: { popis: 'Address of witness 1' },
      t2_jmeno: { popis: 'Name of witness 2' },
      t2_adresa: { popis: 'Address of witness 2' },
      misto: { popis: 'Town', placeholder: 'e.g. Budapest' },
      datum_podpisu: { popis: 'Date of the agreement' },
    },
    vysvetleni: [
      'Who is making the agreement. The details should match the identity documents.',
      'Which car this is about. The chassis number is the most important.',
      'What the seller knows about the car.',
      'How much, how and when. Ownership passes only once the full purchase price has been paid.',
      'What the buyer receives together with the car.',
      'Who deals with what at the authority, and who pays.',
      'Formalities.',
    ],
    coDal: [
      'Print it in three counterparts (seller, buyer, document office – okmányiroda); both parties and both witnesses sign every copy.',
      'Hand over the car, the keys and the documents – ideally with a handover report (átadás-átvételi jegyzőkönyv).',
      'Seller: report the change of owner within 15 days (at a government office – kormányablak – or electronically) and notify your insurer.',
      'Buyer: take out compulsory motor insurance and apply for the transfer of ownership within 15 days.',
    ],
    kontrola: [
      'The seller is the owner stated in the registration certificate (forgalmi engedély) and the vehicle title document (törzskönyv) – check both documents.',
      'The chassis number (VIN) in the documents matches the one on the car.',
      'You can check the car’s history, mileage and roadworthiness tests in the [government vehicle data lookup](https://kormanyablak.hu/).',
      'The seller cannot freely sell a car that is leased, pledged as security for a loan or subject to a prohibition on disposal.',
      'With the signatures of two witnesses (stating their names and addresses), the document becomes a private document with full probative force (teljes bizonyító erejű magánokirat) – this is required for the transfer of ownership. A party to the agreement cannot be a witness.',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
      'Count the cash when signing; it is better to transfer a larger amount – the bank debit notice is the best proof.',
      'Both parties have 15 days: the buyer applies for the transfer of ownership (and pays the property acquisition duty – vagyonszerzési illeték), the seller reports the sale. The buyer takes out compulsory motor insurance from the moment of taking possession.',
      'The authority accepts the agreement only if it states the time of handover of possession with the odometer reading and the day of the change of ownership – do not leave these blank.',
    ],
    pripominky: {
      'Tulajdonosváltozás bejelentése (eladó)': { nazev: 'Report the change of owner (seller)', popis: '15 days from the change of ownership.' },
      'Forgalmi átírás kérelmezése (vevő)': { nazev: 'Apply for the transfer of ownership (buyer)', popis: '15 days from the conclusion of the agreement; the property acquisition duty is paid by the buyer.' },
    },
  },

  dokument: {
    nazev: 'Motor Vehicle Sale Agreement',
    podnadpis: 'under the sale provisions of Act V of 2013 on the Hungarian Civil Code (Polgári Törvénykönyv)',
    podpisy: { vlevo: 'seller', vpravo: 'buyer' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Seller:** {{p_jmeno}}, mother’s name: {{p_anyja}}, place and date of birth: {{p_szul}}, address: {{p_adresa}}',
          '**Buyer:** {{k_jmeno}}, mother’s name: {{k_anyja}}, place and date of birth: {{k_szul}}, address: {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Subject of the Agreement',
        odstavce: [
          'The Seller declares that they are the sole owner of the following motor vehicle: {{znacka}}, chassis number: {{vin}}, registration number: {{spz}}, engine number: {{motor}}, registration certificate number: {{forgalmi}}, vehicle title document number: {{torzskonyv}} (hereinafter: the vehicle).',
          'The Seller declares that the vehicle is free of litigation, encumbrances and claims, that no third party has any right to it, and that it is not subject to a lease, a pledge, or a prohibition on disposal or encumbrance.',
          'The Seller sells and the Buyer buys the vehicle for the purchase price set out in this agreement. Nature of the transaction: for consideration (sale).',
          'The Seller declares that the ownership of the vehicle does not form part of assets managed under a fiduciary asset management arrangement (bizalmi vagyonkezelés).',
        ],
      },
      {
        nadpis: 'Condition of the Vehicle',
        odstavce: [
          'Odometer reading on the day the agreement is concluded: {{km}}. To the Seller’s knowledge, the odometer reading has not been altered.',
          {
            uvodVzor: 'Known defects (tick one option):',
            moznosti: {
              nincs: 'The Seller is not aware of any defect of the vehicle.',
              van: 'The Seller has informed the Buyer of the following defects of the vehicle: {{hibak_leiras}}',
            },
          },
          'The Buyer declares that they have inspected the vehicle, have become acquainted with its technical condition and buy it in that condition.',
        ],
      },
      {
        nadpis: 'Purchase Price and Payment',
        odstavce: [
          'The purchase price of the vehicle is {{cena}}.',
          {
            uvodVzor: 'Method of payment (tick one option):',
            moznosti: {
              keszpenz: 'The Buyer paid the purchase price in cash upon signing this agreement. By their signature, the Seller acknowledges receipt of the full purchase price.',
              utalas: 'The Buyer shall transfer the purchase price to the Seller’s bank account No. {{ucet}} no later than {{splatnost}}.',
            },
          },
          'The parties agree that ownership of the vehicle passes to the Buyer upon payment of the full purchase price (retention of title). Effective date of the change of ownership: {{hatalyba}}.',
        ],
      },
      {
        nadpis: 'Handover of Possession',
        odstavce: [
          'The Seller hands the vehicle over into the Buyer’s possession on {{birtok_datum}} at {{birtok_ido}}, with {{klice}} keys, the registration certificate and the vehicle title document. Odometer reading at handover of possession: {{km}}.',
          'From handover of possession, the Buyer is entitled to the benefits of the vehicle and bears its burdens and the risk of loss or damage. The parties may also record the details of the handover (condition, accessories) in a handover report.',
        ],
      },
      {
        nadpis: 'Official Formalities and Costs',
        odstavce: [
          'The parties declare that they will fulfil their notification obligation towards the transport administration authority within 15 days of the change of ownership taking effect: the Seller reports the change of owner and the Buyer applies for registration of the change (transfer of ownership). The Seller notifies their insurer.',
          'The parties declare that they are aware of the legal effects of registration and of the consequences of failing to notify or notifying late.',
          'From handover of possession, the Buyer arranges compulsory motor third-party liability insurance.',
          'The costs of the transfer of ownership and the property acquisition duty are borne by the Buyer.',
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'Matters not governed by this agreement are governed by the provisions of the Hungarian Civil Code.',
          'This agreement is executed in three identical counterparts. Having read and understood it, the parties signed the agreement before two witnesses as being in full accordance with their intentions.',
          '**Witness 1:** {{t1_jmeno}}, address: {{t1_adresa}}, signature: ………………………………',
          '**Witness 2:** {{t2_jmeno}}, address: {{t2_adresa}}, signature: ………………………………',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: power of attorney for vehicle transfer (Hungary). Original: src/obsah/hu/meghatalmazas-forgalmi-atirashoz.ts
 * and src/sablony/hu/meghatalmazas-forgalmi-atirashoz.ts. The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-MEGHATALMAZAS-ATIRAS', verze: '1.0' },

  nazev: 'Power of Attorney for Vehicle Transfer',
  nazevA: 'the power of attorney for vehicle transfer',
  katalog: {
    popis: 'When someone else handles the transfer at the government office (kormányablak).',
    slova: ['power of attorney', 'car transfer', 'vehicle registration', 'transfer of ownership', 'government office', 'kormányablak', 'meghatalmazás átírás', 'forgalmi átírás meghatalmazás'],
  },
  landing: {
    title: 'Power of Attorney Car Transfer Hungary {rok} – free PDF template',
    description:
      'Power of attorney for transferring or reporting a car at a Hungarian government office (kormányablak), with two witnesses. Bilingual PDF or Word, free.',
    perex: 'For when a relative or friend handles the transfer or the report of the change of owner. With two witnesses, as the authority requires.',
    obsahPopis: 'What it contains.',
    obsah: [
      { nazev: 'Parties', popis: 'Details of the principal and the agent.' },
      { nazev: 'Vehicle', popis: 'Registration number and chassis number.' },
      { nazev: 'Matters', popis: 'Transfer, report, documents, fees.' },
      { nazev: 'Witnesses', popis: 'Signatures of two witnesses.' },
    ],
    kroky: [
      { nazev: 'Fill in', popis: 'Details from the sale agreement.' },
      { nazev: 'Signing', popis: 'With a pen, with two witnesses.' },
      { nazev: 'Handling the matter', popis: 'The agent goes with their own identity card.' },
    ],
    online: ['Details taken over from the sale agreement', 'Download as PDF and Word', 'No registration'],
    hodiSe: ['you have no time to go to the government office (kormányablak) in person'],
    nehodiSe: ['a lawyer or car dealer handles it – they use their own form'],
    po: [{ nazev: 'Original copy', popis: 'The authority requires an original power of attorney signed by hand.' }],
    faq: [
      {
        q: 'Are witnesses needed?',
        a: 'Yes, the power of attorney must be a private document with full probative force (teljes bizonyító erejű magánokirat): with the names, home addresses and signatures of two witnesses.',
      },
      { q: 'Can I sign it on screen?', a: 'No, the authority requires an original copy signed with a pen.' },
      { q: 'Do you store my details?', a: 'The document is created only in your browser; we do not store your details.' },
    ],
    zakony:
      'The template is based on the Hungarian Civil Code (Polgári Törvénykönyv), the Code of Civil Procedure (Polgári perrendtartás) and the Act on the road traffic register (a közúti közlekedési nyilvántartásról szóló törvény).',
    souvisejiciPopis: 'More documents for selling a car, also free.',
  },
  vytvorit: {
    title: 'Power of attorney for car transfer online – Hungary, free PDF',
    description: 'Guide in English for a power of attorney (meghatalmazás) for car transfer in Hungary, with two witnesses and details from the sale agreement. Bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'power of attorney', g: 'power of attorney', a: 'power of attorney', l: 'power of attorney' },
    kroky: {
      szemelyek: { nazev: 'Who authorises whom' },
      ugy: { nazev: 'Vehicle and matter' },
    },
    pole: {
      m_jmeno: { popis: 'Name of the principal (meghatalmazó)', napoveda: 'The person who cannot handle the matter in person.' },
      m_anyja: { popis: 'Mother’s name' },
      m_szul: { popis: 'Place and date of birth' },
      m_adresa: { popis: 'Home address' },
      z_jmeno: { popis: 'Name of the agent (meghatalmazott)' },
      z_anyja: { popis: 'Mother’s name' },
      z_szul: { popis: 'Place and date of birth' },
      z_adresa: { popis: 'Home address' },
      znacka: { popis: 'Make and model' },
      vin: { popis: 'Chassis number (VIN)' },
      spz: { popis: 'Registration number' },
      ugyek: {
        popis: 'What the power of attorney covers',
        moznosti: {
          atiras: 'Transfer of ownership (registration of the ownership)',
          bejelentes: 'Reporting the change of owner',
          okmany: 'Collecting documents and number plates',
          illetek: 'Paying duties and fees',
        },
      },
      t1_jmeno: { popis: 'Name of the 1st witness' },
      t1_adresa: { popis: 'Home address of the 1st witness' },
      t2_jmeno: { popis: 'Name of the 2nd witness' },
      t2_adresa: { popis: 'Home address of the 2nd witness' },
      misto: { popis: 'Town or village' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Print it, sign it with a pen and have it signed by two witnesses.',
      'The agent should also take their own identity card to the government office (kormányablak).',
    ],
    kontrola: [
      'With the signatures of two witnesses (stating their names and home addresses), the document becomes a private document with full probative force (teljes bizonyító erejű magánokirat) – this is what the transfer of ownership requires. A party to the contract cannot be a witness.',
      'The vehicle details (registration number, chassis number) must match the registration certificate (forgalmi engedély).',
      'Before handling the matter, check on [kormányablak.hu](https://kormanyablak.hu/) which other documents are needed.',
      'Check the other party’s identity with an identity document and write the name exactly as it appears in the document.',
    ],
    podpisPoznamka: 'The authority requires an original power of attorney signed by hand, with two witnesses – print it and sign it with a pen.',
    prevzit: 'the car sale agreement',
  },

  dokument: {
    nazev: 'Power of Attorney for Vehicle Transfer',
    podnadpis: 'for handling road traffic administration matters relating to a motor vehicle',
    podpisy: { vlevo: 'principal', vpravo: 'agent (I accept)' },
    clanky: [
      {
        nadpis: 'Power of Attorney',
        odstavce: [
          'I, the undersigned **{{m_jmeno}}** (mother’s name: {{m_anyja}}, place and date of birth: {{m_szul}}, home address: {{m_adresa}}), hereby authorise',
          '**{{z_jmeno}}** (mother’s name: {{z_anyja}}, place and date of birth: {{z_szul}}, home address: {{z_adresa}}) as my agent',
          {
            uvod: 'to act on my behalf and in my name before the road traffic administration authority (government office – kormányablak) in connection with the motor vehicle {{znacka}}, registration number {{spz}}, chassis number {{vin}}, in particular:',
            moznosti: {
              atiras: 'in applying for the transfer of ownership (registration of ownership),',
              bejelentes: 'in reporting the change of owner,',
              okmany: 'in collecting the documents and number plates,',
              illetek: 'in paying the duties and fees.',
            },
          },
          'The agent is entitled to make statements and to sign and receive documents in this matter.',
        ],
      },
      {
        nadpis: 'Witnesses',
        odstavce: [
          '**1st witness:** {{t1_jmeno}}, home address: {{t1_adresa}}, signature: ………………………………',
          '**2nd witness:** {{t2_jmeno}}, home address: {{t2_adresa}}, signature: ………………………………',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

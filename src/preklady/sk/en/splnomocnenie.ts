/**
 * English version: power of attorney (Slovakia). Original: src/obsah/sk/splnomocnenie.ts
 * and src/sablony/sk/splnomocnenie.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-SPLNOMOCNENIE', verze: '1.0' },

  nazev: 'Power of Attorney',
  nazevA: 'the power of attorney',
  katalog: {
    popis: 'Authorising someone to deal with a matter on your behalf.',
    slova: ['power of attorney', 'authorisation', 'letter of authority', 'representation', 'post office', 'collect a parcel', 'splnomocnenie', 'plná moc'],
  },
  landing: {
    title: 'Power of Attorney Slovakia {rok} – free PDF template',
    description:
      'General power of attorney for Slovakia, explained in English: for the post office, an authority or another matter, with a defined scope. Bilingual PDF or Word, free.',
    perex: 'When someone else handles something for you – collecting a parcel, an authority, a signature. Always with a clearly defined scope.',
    obsahPopis: 'A short power of attorney (splnomocnenie) under Section 31 et seq. of the Civil Code (Občiansky zákonník).',
    obsah: [
      { nazev: 'Power of attorney', popis: 'Who, whom, for what and until when.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'The persons and the scope.' },
      { nazev: 'Sign it', popis: 'The principal signs, the attorney accepts.' },
      { nazev: 'Have it certified if needed', popis: 'Some authorities require a certified signature.' },
    ],
    online: [
      'Precise scope',
      'Signature on screen',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'collecting a parcel',
      'a simple errand at an authority',
      'representation in a specific matter',
    ],
    nehodiSe: [
      'transfer of a vehicle’s registration – use the power of attorney for vehicle transfer',
      'real estate and courts – consult a lawyer',
    ],
    po: [
      { nazev: 'Certification', popis: 'If the authority requires it, have the signature officially certified (úradne osvedčený podpis).' },
    ],
    faq: [
      {
        q: 'Does the signature have to be certified?',
        a: 'Not always. It depends on the authority or institution – for a vehicle transfer, at the land register (kataster) or at a bank, certification is usually required.',
      },
      { q: 'Do you store my details?', a: 'No. The power of attorney is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník, Sections 31 to 33b).',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a power of attorney online – Slovakia, free PDF',
    description: 'General power of attorney for Slovakia with a defined scope. Guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'power of attorney', g: 'power of attorney', a: 'power of attorney', l: 'power of attorney' },
    kroky: {
      osoby: { nazev: 'Who authorises whom' },
      rozsah: { nazev: 'Scope and validity' },
    },
    pole: {
      z_jmeno: { popis: 'Principal – first name and surname' },
      z_narozeni: { popis: 'Date of birth' },
      z_adresa: { popis: 'Permanent address' },
      m_jmeno: { popis: 'Attorney (authorised person) – first name and surname' },
      m_narozeni: { popis: 'Date of birth' },
      m_adresa: { popis: 'Permanent address' },
      rozsah: {
        popis: 'What the power of attorney covers',
        napoveda: 'Specifically and clearly. Write it in Slovak – the text goes into the original document.',
        placeholder: 'e.g. prevzatie doporučenej zásielky adresovanej splnomocniteľovi na pošte Bratislava 1 (collecting a registered item addressed to the principal at the Bratislava 1 post office)',
      },
      platnost_do: { popis: 'Valid until (optional)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Print the power of attorney; the principal signs it and the attorney accepts it.',
      'Some authorities, banks or the post office require an officially certified signature – check this in advance.',
    ],
    kontrola: [
      'Describe the scope specifically – exactly what the attorney may do. Authorities often reject a power of attorney that is too general.',
      'Some acts (vehicle transfer, land register, bank) require the principal’s officially certified signature.',
      'Verify the other party’s identity from their identity card (občiansky preukaz) and copy the names exactly as stated in it.',
    ],
    pripominky: {
      'Končí platnosť splnomocnenia': { nazev: 'Power of attorney expires' },
    },
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'granted under Section 31 et seq. of Act No. 40/1964 Coll., the Civil Code',
    podpisy: { vlevo: 'principal', vpravo: 'attorney – I accept this authorisation' },
    clanky: [
      {
        nadpis: 'Power of Attorney',
        odstavce: [
          'I, the undersigned **{{z_jmeno}}**, date of birth {{z_narozeni}}, permanently residing at {{z_adresa}} (the “Principal”),',
          'hereby authorise **{{m_jmeno}}**, date of birth {{m_narozeni}}, permanently residing at {{m_adresa}} (the “Attorney”),',
          'to represent me in the following matter: {{rozsah}}',
          'This power of attorney is valid until {{platnost_do}}, otherwise until the stated matter has been dealt with or until it is revoked.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

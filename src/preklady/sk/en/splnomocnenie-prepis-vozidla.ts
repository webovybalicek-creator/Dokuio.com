/**
 * English version: power of attorney for vehicle transfer (Slovakia). Original: src/obsah/sk/splnomocnenie-prepis-vozidla.ts
 * and src/sablony/sk/splnomocnenie-prepis-vozidla.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-SPLNOMOCNENIE-PREPIS', verze: '1.0' },

  nazev: 'Power of Attorney for Vehicle Transfer',
  nazevA: 'the power of attorney for vehicle transfer',
  katalog: {
    popis: 'When someone else handles the transfer at the traffic police inspectorate.',
    slova: ['power of attorney car', 'vehicle transfer', 'change of keeper', 'car registration transfer', 'traffic police inspectorate', 'splnomocnenie', 'prepis auta', 'dopravný inšpektorát', 'zmena držby'],
  },
  landing: {
    title: 'Power of Attorney Vehicle Transfer Slovakia {rok} – free PDF template',
    description:
      'Power of attorney for a change of vehicle keeper in Slovakia, when someone else goes to the traffic police. Certified signature required. Bilingual PDF or Word, free.',
    perex: 'When you cannot go to the traffic police inspectorate (dopravný inšpektorát) in person. The principal’s signature must be officially certified.',
    obsahPopis: 'A short power of attorney (splnomocnenie) with a clearly defined scope.',
    obsah: [
      { nazev: 'Principal and attorney', popis: 'Who authorises whom.' },
      { nazev: 'Scope', popis: 'Change of keeper (zmena držby) of a specific vehicle, documents, number plates, fees.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'The persons and the vehicle.' },
      { nazev: 'Have the signature certified', popis: 'Registry office (matrika), notary or post office.' },
      { nazev: 'Hand it over', popis: 'To the attorney, together with the application.' },
    ],
    online: [
      'Pre-filled from the purchase agreement',
      'Precise scope for the traffic police inspectorate',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'the seller cannot go to the traffic police inspectorate',
      'the buyer handles the transfer on behalf of the seller',
    ],
    nehodiSe: [
      'you are doing it electronically with your eID – a power of attorney may not be needed',
    ],
    poNadpis: 'Before filing.',
    po: [
      { nazev: 'Official certification', popis: 'Sign only in front of the person certifying the signature.' },
      { nazev: 'Deadline', popis: 'Application for a change of keeper within 30 days.' },
    ],
    faq: [
      {
        q: 'Does the signature have to be certified?',
        a: 'Yes. According to slovensko.sk, an officially certified power of attorney (paper or electronic) is attached to the application.',
      },
      {
        q: 'Where can I have my signature certified?',
        a: 'At the registry office (matrika) of the municipal office, at a notary or at selected branches of Slovak Post (Slovenská pošta).',
      },
      { q: 'Do you store my details?', a: 'No. The power of attorney is put together directly in your browser.' },
    ],
    zakony:
      'The template is based on Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník, Section 31 et seq.), and Act No. 8/2009 Coll. on road traffic (zákon o cestnej premávke).',
    souvisejiciPopis: 'Other documents for selling a car, also free.',
  },
  vytvorit: {
    title: 'Fill in a power of attorney for vehicle transfer online – Slovakia',
    description: 'Power of attorney for a change of vehicle keeper at the traffic police inspectorate in Slovakia. Guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'power of attorney', g: 'power of attorney', a: 'power of attorney', l: 'power of attorney' },
    podpisPoznamka:
      'The principal’s signature must be officially certified (registry office – matrika – of the municipal office, notary, selected Slovak Post branch). So do not sign it here on screen – sign it only in front of the person certifying the signature.',
    prevzit: 'car purchase agreement',
    kroky: {
      osoby: { nazev: 'Who authorises whom' },
      vozidlo: { nazev: 'Vehicle' },
      platnost: { nazev: 'Validity and signature' },
    },
    pole: {
      z_jmeno: { popis: 'Principal – first name and surname', napoveda: 'The keeper of the vehicle (držiteľ vozidla) who cannot go in person.', placeholder: 'e.g. Ján Novák' },
      z_narozeni: { popis: 'Date of birth' },
      z_adresa: { popis: 'Permanent address' },
      m_jmeno: { popis: 'Attorney (authorised person) – first name and surname', napoveda: 'Who will handle it (e.g. the buyer).', placeholder: 'e.g. Petra Horváthová' },
      m_narozeni: { popis: 'Date of birth' },
      m_adresa: { popis: 'Permanent address' },
      znacka: { popis: 'Make and model', placeholder: 'e.g. Škoda Octavia' },
      vin: { popis: 'VIN' },
      spz: { popis: 'Registration number (EČV)' },
      orv: { popis: 'Number of the registration certificate (osvedčenie o evidencii) Part I' },
      novy: { popis: 'New keeper (optional)', napoveda: 'The person the vehicle is being transferred to.' },
      platnost_do: { popis: 'Valid until (optional)', napoveda: 'Without a date, it is valid until revoked or until the matter is dealt with.' },
      misto: { popis: 'Place of signing' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Print the power of attorney and have the principal’s signature officially certified (sign only on the spot).',
      'The attorney attaches it to the application for a change of keeper of the vehicle at the traffic police inspectorate.',
      'The application for a change of keeper must be filed within 30 days of the transfer of the vehicle.',
    ],
    kontrola: [
      'The principal’s signature must be officially certified – otherwise the traffic police inspectorate will not accept it ([slovensko.sk](https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_predal-som-auto/)).',
      'Copy the vehicle details (VIN, EČV, certificate number) exactly from the registration certificate.',
      'The change of keeper can also be done electronically via the [electronic vehicle registration services](https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_elektronicke-sluzby-evidencie/) (elektronické služby evidencie vozidiel) – then a power of attorney may not be needed.',
      'Verify the other party’s identity from their identity card (občiansky preukaz) and copy the names exactly as stated in it.',
    ],
    pripominky: {
      'Končí platnosť splnomocnenia na prepis': { nazev: 'Power of attorney for vehicle transfer expires' },
    },
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'for representation in a change of keeper of a vehicle under Section 31 et seq. of Act No. 40/1964 Coll., the Civil Code',
    podpisy: { vlevo: 'principal (officially certified signature)', vpravo: 'attorney – I accept this authorisation' },
    clanky: [
      {
        nadpis: 'Principal and Attorney',
        odstavce: [
          'I, the undersigned **{{z_jmeno}}**, date of birth {{z_narozeni}}, permanently residing at {{z_adresa}} (the “Principal”),',
          'hereby authorise **{{m_jmeno}}**, date of birth {{m_narozeni}}, permanently residing at {{m_adresa}} (the “Attorney”),',
        ],
      },
      {
        nadpis: 'Scope of Authority',
        odstavce: [
          'to represent me before the Police Force authority (traffic police inspectorate) in all acts related to the change of keeper of the vehicle of make and model {{znacka}}, VIN {{vin}}, registration number {{spz}}, registration certificate Part I No. {{orv}}, to the new keeper {{novy}}, in particular to file the application, sign the necessary forms, hand over and receive documents and number plates, and pay the administrative fees.',
          'This power of attorney is valid until {{platnost_do}}, otherwise until the stated matter has been dealt with or until it is revoked.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

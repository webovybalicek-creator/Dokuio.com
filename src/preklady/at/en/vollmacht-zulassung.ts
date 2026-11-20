/**
 * English version: power of attorney for the vehicle registration office (Austria). Original: src/obsah/at/vollmacht-zulassung.ts
 * and src/sablony/at/vollmacht-zulassung.ts (based on src/sablony/de/vollmacht-zulassung.ts).
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-VOLLMACHT-KFZ', verze: '1.0' },

  nazev: 'Power of Attorney for Vehicle Registration',
  nazevA: 'the power of attorney for the registration office',
  katalog: {
    popis: 'When someone else registers, re-registers or deregisters the car.',
    slova: ['vehicle power of attorney', 'car registration', 'register a car', 'deregister a car', 'transfer of registration', 'registration office', 'Vollmacht Zulassungsstelle', 'Ummeldung', 'Abmeldung', 'Anmeldung'],
  },
  landing: {
    title: 'Car Registration Power of Attorney Austria {rok} – free PDF template',
    description:
      'Power of attorney for registering, deregistering or re-registering a vehicle at a registration office in Austria. With a list of documents. Bilingual PDF or Word, free.',
    perex: 'So that another person can register, deregister or re-register your vehicle at a registration office (Zulassungsstelle). With a list of what else to bring.',
    obsahPopis: 'Short power of attorney for one procedure at the registration office.',
    obsah: [
      { nazev: 'Persons', popis: 'Who authorises whom.' },
      { nazev: 'Procedure', popis: 'Re-registration, registration or deregistration.' },
      { nazev: 'Vehicle', popis: 'Model, VIN (FIN), registration number.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We take over the details from the purchase agreement.' },
      { nazev: 'Sign', popis: 'By hand.' },
      { nazev: 'Gather the documents', popis: 'Identity documents, registration certificate (Zulassungsschein), insurance confirmation.' },
    ],
    online: [
      'Guided form with explanations for every field',
      'Download as PDF and Word',
      'Pre-filled from the purchase agreement',
    ],
    hodiSe: [
      'the buyer re-registers the car and you cannot attend',
      'relatives take care of the deregistration',
    ],
    nehodiSe: [
      'cases where the registration office requires its own form – ask beforehand',
    ],
    po: [
      { nazev: 'Registration office (Zulassungsstelle)', popis: 'Registration in the district of your main residence, deregistration at any registration office.' },
    ],
    faq: [
      { q: 'What does the authorised person need?', a: 'The power of attorney, their photo ID and the vehicle documents; for registration also the insurance confirmation, the purchase agreement and the § 57a inspection report, for deregistration the number plates.' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'Representation under Sections 1002 et seq. of the Austrian General Civil Code (ABGB); list of documents according to oesterreich.gv.at.',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a power of attorney for vehicle registration online – Austria',
    description: 'Guide in English for a power of attorney to register, re-register or deregister a vehicle in Austria. PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'power of attorney', g: 'power of attorney', a: 'power of attorney', l: 'power of attorney' },
    kroky: {
      personen: { nazev: 'Who authorises whom' },
      fahrzeug: { nazev: 'Vehicle and procedure' },
    },
    pole: {
      z_jmeno: { popis: 'Principal – first name and surname', napoveda: 'The person in whose name the vehicle is or will be registered.' },
      z_narozeni: { popis: 'Date of birth' },
      z_adresa: { popis: 'Address (main residence, Hauptwohnsitz)' },
      m_jmeno: { popis: 'Authorised person – first name and surname' },
      m_narozeni: { popis: 'Date of birth' },
      m_adresa: { popis: 'Address' },
      ukon: {
        popis: 'What needs to be done?',
        moznosti: { abmeldung: 'Deregistration (Abmeldung)', zulassung: 'Registration (Anmeldung, Zulassung)', umschreibung: 'Change of details or re-registration (Ummeldung)' },
      },
      znacka: { popis: 'Make and model', placeholder: 'e.g. VW Golf' },
      vin: { popis: 'Vehicle identification number (VIN, German FIN)' },
      spz: { popis: 'Official registration number (Kennzeichen, if any)' },
      platnost_do: { popis: 'Valid until (optional)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Print the power of attorney and sign it by hand.',
      'The authorised person brings: this power of attorney, their photo ID and the vehicle documents (registration certificate – Zulassungsschein, type certificate – Typenschein, or proof of approval – Genehmigungsnachweis).',
      'For registration also: insurance confirmation, purchase agreement and a valid § 57a inspection report; for deregistration the number plates.',
    ],
    kontrola: [
      'Registration takes place at an insurer’s registration office in the district of the main residence; you can deregister at any registration office in Austria.',
      'Some registration offices also require a copy of the principal’s identity document – ask beforehand.',
      'Copy the VIN (FIN) and registration number exactly from the registration certificate (Zulassungsschein).',
      'Check the other party’s identity against their identity card and copy the name and address exactly.',
    ],
    prevzit: 'the car purchase agreement',
    pripominky: {
      'Vollmacht für die Zulassungsstelle läuft ab': { nazev: 'Power of attorney for the registration office expires' },
    },
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'for presentation at a vehicle registration office (Zulassungsstelle)',
    podpisy: { vlevo: 'principal', vpravo: 'authorised person' },
    clanky: [
      {
        nadpis: 'Power of Attorney',
        odstavce: [
          'I, **{{z_jmeno}}**, born on {{z_narozeni}}, residing at {{z_adresa}},',
          'hereby authorise **{{m_jmeno}}**, born on {{m_narozeni}}, residing at {{m_adresa}},',
          {
            uvod: 'to represent me at a registration office for the',
            uvodVzor: 'to represent me at a registration office for the (tick):',
            moznosti: {
              abmeldung: 'deregistration',
              zulassung: 'registration (Zulassung)',
              umschreibung: 'change of details or re-registration',
            },
          },
          'of the vehicle make and type {{znacka}}, VIN (FIN) {{vin}}, registration number {{spz}}, including the submission and receipt of declarations, registration documents and number plates.',
          'This power of attorney is valid until {{platnost_do}}, otherwise until the matter has been dealt with or until it is revoked.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

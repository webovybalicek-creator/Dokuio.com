/**
 * English version: power of attorney for the vehicle registration office (Germany).
 * Original: src/obsah/de/vollmacht-zulassung.ts and src/sablony/de/vollmacht-zulassung.ts.
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-VOLLMACHT-KFZ', verze: '1.0' },

  nazev: 'Power of Attorney for Vehicle Registration',
  nazevA: 'the power of attorney for the vehicle registration office',
  katalog: {
    popis: 'When someone else registers, re-registers or deregisters the car.',
    slova: ['power of attorney vehicle registration', 'car registration', 're-register a car', 'deregister a car', 'change of keeper', 'Vollmacht Zulassungsstelle', 'Vollmacht Kfz', 'Ummeldung', 'Abmeldung', 'Umschreibung'],
  },
  landing: {
    title: 'Car Registration Power of Attorney Germany {rok} – free PDF template',
    description:
      'Power of attorney for the vehicle registration office in Germany: registration, re-registration or deregistration, with a document checklist. Free bilingual PDF or Word.',
    perex: 'So that another person may register, re-register or deregister your vehicle at the registration authority. With a list of what else to bring.',
    obsahPopis: 'Short power of attorney (Vollmacht) for one procedure at the vehicle registration office (Zulassungsstelle).',
    obsah: [
      { nazev: 'Persons', popis: 'Who authorises whom.' },
      { nazev: 'Procedure', popis: 'Re-registration, registration or deregistration.' },
      { nazev: 'Vehicle', popis: 'Model, FIN (VIN), registration number.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We take over the details from the purchase agreement.' },
      { nazev: 'Sign', popis: 'By hand.' },
      { nazev: 'Pack the documents', popis: 'SEPA mandate, ID cards, vehicle documents.' },
    ],
    online: [
      'Fill it in with explanations for every field',
      'Download as PDF and Word',
      'Pre-filled from the purchase agreement',
    ],
    hodiSe: [
      'The buyer re-registers the car and you cannot attend',
      'Relatives handle the deregistration',
    ],
    nehodiSe: [
      'Online registration (i-Kfz) – no power of attorney is needed there',
    ],
    po: [
      { nazev: 'At the authority', popis: 'Many registration offices have their own form – check their website beforehand.' },
    ],
    faq: [
      { q: 'What does the authorised person need?', a: 'The power of attorney, their own ID, the principal’s ID (original or copy, depending on the authority), the vehicle documents and, for registration, a SEPA direct debit mandate (SEPA-Lastschriftmandat) for the vehicle tax (Kfz-Steuer) signed by the keeper.' },
      { q: 'Do you store my data?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'Representation under Sections 164 et seq. of the German Civil Code (BGB); documents according to the requirements of the registration authorities.',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a vehicle registration power of attorney online – Germany',
    description: 'Power of attorney for vehicle registration, re-registration or deregistration in Germany. Bilingual PDF or Word for free.',
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
      z_adresa: { popis: 'Address (main residence)' },
      m_jmeno: { popis: 'Authorised person – first name and surname' },
      m_narozeni: { popis: 'Date of birth' },
      m_adresa: { popis: 'Address' },
      ukon: {
        popis: 'What needs to be done?',
        moznosti: {
          umschreibung: 'Re-registration (change of keeper, Umschreibung)',
          zulassung: 'Registration (Zulassung)',
          abmeldung: 'Deregistration (Außerbetriebsetzung)',
        },
      },
      znacka: { popis: 'Make and model', placeholder: 'e.g. VW Golf' },
      vin: { popis: 'Vehicle identification number (FIN/VIN)' },
      spz: { popis: 'Registration number (if any)' },
      platnost_do: { popis: 'Valid until (optional)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Print the power of attorney and sign it by hand.',
      'The authorised person brings: this power of attorney, their own ID, your ID (or a copy, depending on the authority) and the vehicle documents.',
      'For registration or re-registration, also: a SEPA direct debit mandate for the vehicle tax (Kfz-Steuer) signed by you, and the insurer’s eVB number (electronic insurance confirmation).',
    ],
    kontrola: [
      'Without a SEPA direct debit mandate for the vehicle tax signed by the keeper, the registration authority will not register any vehicle.',
      'Many authorities have their own power of attorney form and want to see the principal’s ID in the original or as a copy – check the website of your registration office beforehand.',
      'Copy the FIN and registration number exactly from the registration certificate (Fahrzeugschein).',
      'Check the other party’s identity against their identity card (Personalausweis) and copy the name and address exactly.',
    ],
    prevzit: 'the car purchase agreement',
    pripominky: {
      'Vollmacht für die Zulassungsstelle läuft ab': { nazev: 'Power of attorney for the registration office expires' },
    },
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'for presentation to the vehicle registration authority',
    podpisy: { vlevo: 'principal', vpravo: 'authorised person' },
    clanky: [
      {
        nadpis: 'Power of Attorney',
        odstavce: [
          'I, **{{z_jmeno}}**, born on {{z_narozeni}}, residing at {{z_adresa}},',
          'hereby authorise **{{m_jmeno}}**, born on {{m_narozeni}}, residing at {{m_adresa}},',
          {
            uvod: 'to represent me at the vehicle registration authority for the',
            uvodVzor: 'to represent me at the vehicle registration authority for the (tick):',
            moznosti: {
              umschreibung: 're-registration (change of keeper)',
              zulassung: 'registration',
              abmeldung: 'deregistration',
            },
          },
          'of the vehicle make and model {{znacka}}, FIN {{vin}}, registration number {{spz}}, including the submission and receipt of declarations, vehicle documents and number plates.',
          'This power of attorney is valid until {{platnost_do}}, otherwise until the procedure has been completed or until it is revoked.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

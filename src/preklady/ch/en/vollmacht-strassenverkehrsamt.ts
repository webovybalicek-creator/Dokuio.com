/**
 * English version: power of attorney for the cantonal road traffic office (Switzerland). Original: src/obsah/ch/vollmacht-strassenverkehrsamt.ts
 * and src/sablony/ch/vollmacht-strassenverkehrsamt.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-VOLLMACHT-STVA', verze: '1.0' },

  nazev: 'Power of Attorney for the Road Traffic Office',
  nazevA: 'the power of attorney for the road traffic office',
  katalog: {
    popis: 'When someone else goes to the road traffic office (Strassenverkehrsamt) for you.',
    slova: ['power of attorney', 'vehicle power of attorney', 'car registration', 'change of keeper', 'transfer of ownership', 'hand in number plates', 'car', 'Vollmacht', 'Strassenverkehrsamt', 'Halterwechsel'],
  },
  landing: {
    title: 'Vehicle Power of Attorney Switzerland {rok} – free PDF template',
    description:
      'Power of attorney for the cantonal road traffic office in Switzerland: registering, change of keeper or taking a vehicle off the road. Free bilingual PDF or Word.',
    perex: 'So that another person can register your vehicle at the road traffic office, transfer it or hand in the number plates.',
    obsahPopis: 'One page under Art. 32 et seq. OR.',
    obsah: [
      { nazev: 'Principal', popis: 'Keeper of the vehicle (Halter).' },
      { nazev: 'Authorised representative', popis: 'Who goes to the office.' },
      { nazev: 'Transaction', popis: 'Registration, change of keeper or taking off the road.' },
      { nazev: 'Vehicle', popis: 'Make, chassis number, number plate.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Anything you don’t know stays as a line.' },
      { nazev: 'Check the text', popis: 'Preview next to the form.' },
      { nazev: 'Download and sign', popis: 'PDF or Word.' },
    ],
    online: [
      'Explanations for every field',
      'Signature on screen',
      'Draft saved in your browser',
      'Download as PDF and Word',
    ],
    hodiSe: ['you cannot go to the road traffic office yourself', 'someone registers a car you bought on your behalf'],
    nehodiSe: ['cantons with their own compulsory form – check beforehand'],
    po: [{ nazev: 'Road traffic office', popis: 'With the power of attorney, identity documents and the vehicle registration document (Fahrzeugausweis).' }],
    faq: [
      {
        q: 'What does the authorised representative bring?',
        a: 'The power of attorney, their passport or ID, a copy of your identity document and the vehicle registration document (Fahrzeugausweis); for registration, the proof of insurance; for taking the vehicle off the road, the number plates.',
      },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony:
      'Representation under Art. 32 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR); documents as required by the cantonal road traffic offices (asa.ch).',
  },
  vytvorit: {
    title: 'Fill in a vehicle power of attorney online – Switzerland, PDF',
    description: 'Guide in English for a power of attorney for the cantonal road traffic office in Switzerland. Free bilingual PDF or Word.',
  },

  pruvodce: {
    slovo: { n: 'power of attorney', g: 'power of attorney', a: 'power of attorney', l: 'power of attorney' },
    prevzit: 'the purchase agreement',
    kroky: {
      personen: { nazev: 'Who authorises whom' },
      fahrzeug: { nazev: 'Vehicle and transaction' },
    },
    pole: {
      z_jmeno: { popis: 'Principal – first name and surname', napoveda: 'The person who is or will become the keeper (Halter/in) of the vehicle.' },
      z_narozeni: { popis: 'Date of birth' },
      z_adresa: { popis: 'Address (place of residence)' },
      m_jmeno: { popis: 'Authorised representative – first name and surname' },
      m_narozeni: { popis: 'Date of birth' },
      m_adresa: { popis: 'Address' },
      ukon: {
        popis: 'What needs to be done?',
        moznosti: {
          umschreibung: 'Change of keeper (registering a purchased vehicle)',
          zulassung: 'Registering (Einlösen) a vehicle',
          abmeldung: 'Taking the vehicle off the road (Ausserverkehrsetzung) and handing in the number plates',
        },
      },
      znacka: { popis: 'Make and model', placeholder: 'e.g. VW Golf' },
      vin: { popis: 'Chassis number (FIN/VIN)', napoveda: 'Field 23 in the vehicle registration document (Fahrzeugausweis).' },
      spz: { popis: 'Number plate (if any)', placeholder: 'e.g. ZH 123456' },
      platnost_do: { popis: 'Valid until (optional)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Print the power of attorney and sign it by hand.',
      'The authorised representative brings: this power of attorney, their own passport or ID, a copy of your identity document and the vehicle registration document (Fahrzeugausweis).',
      'For registration, also the electronic proof of insurance from your motor vehicle insurer; for taking the vehicle off the road, the number plates.',
    ],
    kontrola: [
      'Many road traffic offices have their own power of attorney form – check your canton’s website beforehand ([asa.ch](https://asa.ch/)).',
      'Copy the chassis number and the master number (Stammnummer) exactly from the vehicle registration document.',
      'Registration requires valid proof of insurance – the insurer usually sends it directly in electronic form.',
      'Check the other party’s identity against their passport or identity card (Identitätskarte) and copy their name and address exactly as shown.',
    ],
    pripominky: {
      'Vollmacht für das Strassenverkehrsamt läuft ab': { nazev: 'Power of attorney for the road traffic office expires' },
    },
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'for presentation at the cantonal road traffic office (Strassenverkehrsamt) (Art. 32 et seq. OR)',
    podpisy: { vlevo: 'principal', vpravo: 'authorised representative' },
    clanky: [
      {
        nadpis: 'Power of Attorney',
        odstavce: [
          'I, **{{z_jmeno}}**, born on {{z_narozeni}}, residing at {{z_adresa}},',
          'hereby authorise **{{m_jmeno}}**, born on {{m_narozeni}}, residing at {{m_adresa}},',
          {
            uvod: 'to represent me at the road traffic office for',
            uvodVzor: 'to represent me at the road traffic office for (tick):',
            moznosti: {
              umschreibung: 'the change of keeper (registering a purchased vehicle in my name)',
              zulassung: 'registering the vehicle',
              abmeldung: 'taking the vehicle off the road and handing in the number plates',
            },
          },
          'in respect of the vehicle make and model {{znacka}}, chassis number {{vin}}, number plate {{spz}}, including submitting and receiving declarations, the vehicle registration document and number plates.',
          'This power of attorney is valid until {{platnost_do}}, otherwise until the transaction has been completed or until it is revoked.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

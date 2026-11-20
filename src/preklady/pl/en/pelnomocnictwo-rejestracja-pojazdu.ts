/**
 * English version: power of attorney for vehicle registration (Poland). Original: src/obsah/pl/pelnomocnictwo-rejestracja-pojazdu.ts
 * and src/sablony/pl/pelnomocnictwo-rejestracja-pojazdu.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-PELNOMOCNICTWO-POJAZD', verze: '1.0' },

  nazev: 'Power of Attorney for Vehicle Registration',
  nazevA: 'the power of attorney for vehicle registration',
  katalog: {
    popis: 'When someone else registers the vehicle for you.',
    slova: ['power of attorney', 'authorisation', 'vehicle registration', 'car registration', 're-registration', 'vehicle registration office', 'pełnomocnictwo', 'rejestracja pojazdu', 'wydział komunikacji'],
  },
  landing: {
    title: 'Car Registration Power of Attorney Poland {rok} – free PDF template',
    description:
      'Power of attorney to register a car at the vehicle registration office (wydział komunikacji) in Poland: list of documents, PLN 17 stamp duty. Free bilingual PDF or Word.',
    perex: 'When someone else handles the car registration for you – a family member, a friend or the seller.',
    obsahPopis: 'A short power of attorney for registration matters.',
    obsah: [
      { nazev: 'Persons', popis: 'Who authorises whom.' },
      { nazev: 'Vehicle', popis: 'Make, VIN, registration number.' },
      { nazev: 'Scope', popis: 'Application, collecting the registration certificate and number plates, fees.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We take over the details from the sale agreement ourselves.' },
      { nazev: 'Sign it', popis: 'By hand.' },
      { nazev: 'Hand it over', popis: 'Together with the vehicle documents.' },
    ],
    online: [
      'Filling in with an explanation of every field',
      'Signature on screen',
      'Download as PDF and Word or send by e-mail',
      'Pre-filled from the sale agreement',
    ],
    hodiSe: ['The buyer cannot go to the office', 'A family member handles the registration'],
    nehodiSe: ['Online registration via gov.pl – no power of attorney is needed there'],
    po: [{ nazev: 'Fee', popis: 'PLN 17 stamp duty, family members are exempt.' }],
    faq: [
      {
        q: 'How much does the power of attorney cost?',
        a: 'PLN 17 in stamp duty (opłata skarbowa); for a spouse, parents, grandparents, children, grandchildren and siblings – free of charge.',
      },
      { q: 'Do you store my details?', a: 'No. The document is created solely in your browser.' },
    ],
    zakony:
      'The template is based on Article 98 et seq. of the Polish Civil Code (Kodeks cywilny) and the Road Traffic Act (Prawo o ruchu drogowym).',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Car registration power of attorney online – Poland, PDF',
    description: 'Power of attorney to register a car in Poland, with explanations in English. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · result as PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'power of attorney', g: 'power of attorney', a: 'power of attorney', l: 'power of attorney' },
    prevzit: 'the sale agreement',
    kroky: {
      osoby: { nazev: 'Who authorises whom' },
      pojazd: { nazev: 'Vehicle' },
    },
    pole: {
      z_jmeno: { popis: 'Principal (owner) – first name and surname' },
      z_pesel: { popis: 'PESEL (Polish personal identification number)' },
      z_doklad: { popis: 'Series and No. of identity card (dowód osobisty)' },
      z_adresa: { popis: 'Residential address' },
      m_jmeno: { popis: 'Attorney – first name and surname' },
      m_pesel: { popis: 'PESEL' },
      m_doklad: { popis: 'Series and No. of identity card' },
      m_adresa: { popis: 'Residential address' },
      znacka: { popis: 'Make and model' },
      vin: { popis: 'VIN number' },
      spz: { popis: 'Registration number' },
      platnost_do: { popis: 'Valid until (optional)' },
      misto: { popis: 'Town' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Print the power of attorney; the owner signs it by hand.',
      'The attorney takes: the power of attorney, their own identity card, the vehicle documents (sale agreement, registration certificate – dowód rejestracyjny, compulsory third-party liability insurance policy – OC) and proof of payment of the PLN 17 stamp duty (if they are not a close family member).',
      'The buyer registers the vehicle within 30 days of the purchase.',
    ],
    kontrola: [
      'Copy the vehicle details (VIN, registration number) exactly from the registration certificate.',
      'Submitting a power of attorney at an office costs PLN 17 in stamp duty (opłata skarbowa); a power of attorney for a spouse, parents, grandparents, children, grandchildren or siblings is exempt.',
      'Some vehicle registration offices (wydział komunikacji) have their own power of attorney form – check the website of your district authority (starostwo) or city hall.',
      'Check the other party’s identity against their identity card and copy the first name and surname exactly as they appear on it.',
    ],
    pripominky: {
      'Pełnomocnictwo do rejestracji wygasa': { nazev: 'The registration power of attorney expires' },
    },
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'to deal with matters relating to the registration of a vehicle',
    podpisy: { vlevo: 'principal (owner of the vehicle)', vpravo: 'attorney' },
    clanky: [
      {
        nadpis: 'Power of Attorney',
        odstavce: [
          'I, the undersigned **{{z_jmeno}}**, PESEL {{z_pesel}}, identity card {{z_doklad}}, residing at {{z_adresa}},',
          'hereby authorise **{{m_jmeno}}**, PESEL {{m_pesel}}, identity card {{m_doklad}}, residing at {{m_adresa}},',
          'to represent me before the registration authority in all matters relating to the registration of the vehicle make {{znacka}}, VIN {{vin}}, registration number {{spz}}, in particular to file the application, sign documents, collect the registration certificate and number plates, and pay the fees.',
          'This power of attorney is valid until {{platnost_do}} or, if no such date is given, until the matter is dealt with or the power of attorney is revoked.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

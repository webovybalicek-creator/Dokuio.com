/**
 * English version: power of attorney for a specific matter (Poland). Original: src/obsah/pl/pelnomocnictwo.ts
 * and src/sablony/pl/pelnomocnictwo.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-PELNOMOCNICTWO', verze: '1.0' },

  nazev: 'Power of Attorney',
  nazevA: 'the power of attorney',
  katalog: {
    popis: 'Authorisation to deal with a matter on your behalf.',
    slova: ['power of attorney', 'authorisation', 'authorization', 'post office', 'office', 'collect a parcel', 'proxy', 'pełnomocnictwo', 'upoważnienie'],
  },
  landing: {
    title: 'Power of Attorney Poland {rok} – free PDF template',
    description:
      'Power of attorney (pełnomocnictwo) for a specific matter in Poland: collecting a parcel, a matter at an office. Fill it in online, free bilingual PDF or Word.',
    perex: 'A simple power of attorney for a specific matter – e.g. collecting a parcel or submitting documents at an office.',
    obsahPopis: 'Power of attorney with its scope and expiry date.',
    obsah: [
      { nazev: 'Persons', popis: 'Who authorises whom.' },
      { nazev: 'Scope', popis: 'What exactly the attorney may do.' },
      { nazev: 'Validity', popis: 'Until when.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Describe the scope specifically.' },
      { nazev: 'Sign it', popis: 'By hand.' },
      { nazev: 'Hand it over', popis: 'The attorney shows it together with their identity card.' },
    ],
    online: ['Filling in with an explanation of every field', 'Signature on screen', 'Download as PDF and Word or send by e-mail'],
    hodiSe: ['Collecting a parcel at the post office', 'Submitting documents at an office'],
    nehodiSe: ['Selling real estate – a notarial deed is required', 'Banking matters with their own forms'],
    po: [{ nazev: 'Revocation', popis: 'You can revoke the power of attorney at any time.' }],
    faq: [
      {
        q: 'Does the power of attorney have to be certified?',
        a: 'Usually not for everyday matters. Some acts require notarial form.',
      },
      { q: 'Do you store my details?', a: 'No. The document is created solely in your browser.' },
    ],
    zakony: 'The template is based on Article 98 et seq. of the Polish Civil Code (Kodeks cywilny).',
    souvisejiciPopis: 'Other documents, also free.',
  },
  vytvorit: {
    title: 'Power of attorney online – Poland, free PDF',
    description: 'Power of attorney for a specific matter in Poland, with explanations in English. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · result as PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'power of attorney', g: 'power of attorney', a: 'power of attorney', l: 'power of attorney' },
    kroky: {
      osoby: { nazev: 'Who authorises whom' },
      zakres: { nazev: 'Scope and validity' },
    },
    pole: {
      z_jmeno: { popis: 'Principal – first name and surname' },
      z_pesel: { popis: 'PESEL (Polish personal identification number)' },
      z_doklad: { popis: 'Series and No. of identity card (dowód osobisty)' },
      z_adresa: { popis: 'Residential address' },
      m_jmeno: { popis: 'Attorney – first name and surname' },
      m_pesel: { popis: 'PESEL' },
      m_doklad: { popis: 'Series and No. of identity card' },
      m_adresa: { popis: 'Residential address' },
      rozsah: {
        popis: 'What you are authorising',
        placeholder: 'e.g. odbioru przesyłki poleconej adresowanej do mocodawcy w placówce Poczty Polskiej Warszawa 1 (collecting a registered letter addressed to the principal at the Poczta Polska Warszawa 1 branch)',
      },
      platnost_do: { popis: 'Valid until (optional)' },
      misto: { popis: 'Town' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Print the power of attorney; the principal signs it by hand.',
      'The attorney shows the original together with their own identity card.',
    ],
    kontrola: [
      'Describe the scope specifically – what exactly the attorney may do. Powers of attorney that are too general are sometimes rejected.',
      'Some acts (e.g. selling real estate) require the form of a notarial deed; banks often have their own forms.',
      'Submitting a power of attorney at an office costs PLN 17 in stamp duty (opłata skarbowa); a power of attorney for a spouse, parents, grandparents, children, grandchildren or siblings is exempt.',
      'Check the other party’s identity against their identity card and copy the first name and surname exactly as they appear on it.',
    ],
    pripominky: {
      'Pełnomocnictwo wygasa': { nazev: 'The power of attorney expires' },
    },
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'granted under Article 98 et seq. of the Civil Code (Kodeks cywilny)',
    podpisy: { vlevo: 'principal', vpravo: 'attorney – I accept the power of attorney' },
    clanky: [
      {
        nadpis: 'Power of Attorney',
        odstavce: [
          'I, the undersigned **{{z_jmeno}}**, PESEL {{z_pesel}}, holder of identity card {{z_doklad}}, residing at {{z_adresa}} (the “Principal”),',
          'hereby grant a power of attorney to **{{m_jmeno}}**, PESEL {{m_pesel}}, holder of identity card {{m_doklad}}, residing at {{m_adresa}} (the “Attorney”),',
          'for: {{rozsah}}',
          'This power of attorney is valid until {{platnost_do}} or, if no such date is given, until the matter is dealt with or the power of attorney is revoked.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: power of attorney (Austria). Original: src/obsah/at/vollmacht.ts
 * and src/sablony/at/vollmacht.ts (based on src/sablony/de/vollmacht.ts).
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-VOLLMACHT', verze: '1.0' },

  nazev: 'Power of Attorney',
  nazevA: 'the power of attorney',
  katalog: {
    popis: 'So that someone can take care of a matter for you.',
    slova: ['power of attorney', 'authorisation', 'letter of authority', 'collect post', 'collect a parcel', 'registered letter', 'authority', 'Vollmacht', 'Bevollmächtigung'],
  },
  landing: {
    title: 'Power of Attorney Austria {rok} – free PDF template',
    description:
      'Power of attorney under Sections 1002 et seq. ABGB, explained in English: who authorises whom, for what and until when. Bilingual PDF or Word, free.',
    perex: 'A simple power of attorney for a specific matter – e.g. collecting a registered letter or submitting an application.',
    obsahPopis: 'Short power of attorney with scope and validity.',
    obsah: [
      { nazev: 'Persons', popis: 'Who authorises whom.' },
      { nazev: 'Scope', popis: 'What exactly may be done.' },
      { nazev: 'Validity', popis: 'Until when.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Describe the scope specifically.' },
      { nazev: 'Sign', popis: 'By hand.' },
      { nazev: 'Hand it over', popis: 'The authorised person presents it together with an identity document.' },
    ],
    online: [
      'Guided form with explanations for every field',
      'Signature on the screen',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'collecting post or a parcel',
      'submitting documents to an authority',
    ],
    nehodiSe: [
      'a lasting power of attorney for illness or old age (Vorsorgevollmacht)',
      'real estate or banking transactions that require a special form',
    ],
    po: [
      { nazev: 'Revocation', popis: 'You can revoke the power of attorney at any time – ask for the original back.' },
    ],
    faq: [
      { q: 'Does the power of attorney have to be certified?', a: 'Usually not for everyday matters. For the land register (Grundbuch), the companies register (Firmenbuch) or some banks, certification is required.' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Sections 1002 et seq. of the Austrian General Civil Code (ABGB).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a power of attorney online – Austria, free PDF',
    description: 'Guide in English for a power of attorney with a specific scope in Austria. Download PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'power of attorney', g: 'power of attorney', a: 'power of attorney', l: 'power of attorney' },
    kroky: {
      personen: { nazev: 'Who authorises whom' },
      umfang: { nazev: 'Scope and validity' },
    },
    pole: {
      z_jmeno: { popis: 'Principal – first name and surname' },
      z_narozeni: { popis: 'Date of birth' },
      z_adresa: { popis: 'Address' },
      m_jmeno: { popis: 'Authorised person – first name and surname' },
      m_narozeni: { popis: 'Date of birth' },
      m_adresa: { popis: 'Address' },
      rozsah: {
        popis: 'What is the power of attorney for?',
        napoveda: 'Specific and easy to understand. Write it in German – the text goes into both language versions exactly as you write it.',
        placeholder: 'e.g. Abholung eines an mich adressierten RSa-Briefs in der Postfiliale 1010 Wien (collecting an RSa registered letter addressed to me at the post office 1010 Wien)',
      },
      platnost_do: { popis: 'Valid until (optional)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Print the power of attorney and sign it by hand.',
      'The authorised person presents the original power of attorney together with their identity document.',
    ],
    kontrola: [
      'Describe the scope specifically – what exactly the person may do. Powers of attorney that are too general are often refused.',
      'Real estate, banks, courts or authorities often have special form requirements (certification, their own forms). Ask beforehand.',
      'A lasting power of attorney for illness or old age (Vorsorgevollmacht) is something different and is made before a notary, a lawyer or an adult protection association (Erwachsenenschutzverein).',
      'Check the other party’s identity against their identity card and copy the name and address exactly.',
    ],
    pripominky: {
      'Vollmacht läuft ab': { nazev: 'Power of attorney expires' },
    },
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'under Sections 1002 et seq. of the Austrian General Civil Code (ABGB)',
    podpisy: { vlevo: 'principal', vpravo: 'authorised person' },
    clanky: [
      {
        nadpis: 'Power of Attorney',
        odstavce: [
          'I, **{{z_jmeno}}**, born on {{z_narozeni}}, residing at {{z_adresa}} (the Principal),',
          'hereby authorise **{{m_jmeno}}**, born on {{m_narozeni}}, residing at {{m_adresa}} (the Authorised Person),',
          'to represent me in the following matter: {{rozsah}}',
          'This power of attorney is valid until {{platnost_do}}, otherwise until the matter has been dealt with or until it is revoked.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

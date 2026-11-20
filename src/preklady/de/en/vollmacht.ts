/**
 * English version: power of attorney (Germany). Original: src/obsah/de/vollmacht.ts
 * and src/sablony/de/vollmacht.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-VOLLMACHT', verze: '1.0' },

  nazev: 'Power of Attorney',
  nazevA: 'the power of attorney',
  katalog: {
    popis: 'So that someone can handle a matter for you.',
    slova: ['power of attorney', 'authorisation', 'letter of authority', 'collect post', 'collect a parcel', 'authority', 'Vollmacht', 'Bevollmächtigung'],
  },
  landing: {
    title: 'Power of Attorney Germany {rok} – free PDF template',
    description:
      'Power of attorney (Vollmacht) for Germany with a specific scope: collecting post, dealing with an authority, errands. Explained in English, free bilingual PDF or Word.',
    perex: 'A simple power of attorney for one specific matter – e.g. collecting a registered letter (Einschreiben) or submitting an application.',
    obsahPopis: 'Short power of attorney with scope and validity.',
    obsah: [
      { nazev: 'Persons', popis: 'Who authorises whom.' },
      { nazev: 'Scope', popis: 'What exactly may be done.' },
      { nazev: 'Validity', popis: 'Until when.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Describe the scope specifically.' },
      { nazev: 'Sign', popis: 'By hand.' },
      { nazev: 'Hand it over', popis: 'The authorised person presents it together with their ID.' },
    ],
    online: [
      'Fill it in with explanations for every field',
      'Signature on screen',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'Collecting post or a parcel',
      'Submitting documents to an authority',
    ],
    nehodiSe: [
      'Lasting power of attorney for illness or old age (Vorsorgevollmacht)',
      'Property or banking transactions requiring a special form',
    ],
    po: [
      { nazev: 'Revocation', popis: 'You can revoke the power of attorney at any time – ask for the original back.' },
    ],
    faq: [
      { q: 'Does the power of attorney have to be certified?', a: 'For everyday matters usually not. For the land register (Grundbuch), the commercial register (Handelsregister) or some banks, notarial certification is required.' },
      { q: 'Do you store my data?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Sections 164 et seq. of the German Civil Code (BGB).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a power of attorney online – Germany, PDF',
    description: 'Power of attorney for Germany with a specific scope. Bilingual PDF or Word for free.',
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
        popis: 'What does the power of attorney cover?',
        napoveda: 'Specific and easy to understand. Write it in German – the text goes into both language versions exactly as you write it.',
        placeholder: 'e.g. Abholung eines an mich adressierten Einschreibens in der Postfiliale Berlin-Mitte (collecting a registered letter addressed to me at the Berlin-Mitte post office)',
      },
      platnost_do: { popis: 'Valid until (optional)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Print the power of attorney and sign it by hand.',
      'The authorised person presents the original power of attorney together with their own ID.',
    ],
    kontrola: [
      'Describe the scope specifically – what exactly the person may do. Powers of attorney that are too general are often rejected.',
      'For land, companies, banking transactions or authorities, special forms often apply (notarial certification, the bank’s own forms). Ask beforehand.',
      'A lasting power of attorney for illness or old age (Vorsorgevollmacht) is something different – the Federal Ministry of Justice (Bundesministerium der Justiz) provides templates for it.',
      'Check the other party’s identity against their identity card (Personalausweis) and copy the name and address exactly.',
    ],
    pripominky: {
      'Vollmacht läuft ab': { nazev: 'Power of attorney expires' },
    },
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'under Sections 164 et seq. of the German Civil Code (Bürgerliches Gesetzbuch, BGB)',
    podpisy: { vlevo: 'principal', vpravo: 'authorised person' },
    clanky: [
      {
        nadpis: 'Power of Attorney',
        odstavce: [
          'I, **{{z_jmeno}}**, born on {{z_narozeni}}, residing at {{z_adresa}} (principal),',
          'hereby authorise **{{m_jmeno}}**, born on {{m_narozeni}}, residing at {{m_adresa}} (authorised person),',
          'to represent me in the following matter: {{rozsah}}',
          'This power of attorney is valid until {{platnost_do}}, otherwise until the matter has been dealt with or until it is revoked.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

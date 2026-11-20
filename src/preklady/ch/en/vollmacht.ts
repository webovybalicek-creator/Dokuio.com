/**
 * English version: power of attorney (Switzerland). Original: src/obsah/ch/vollmacht.ts
 * and src/sablony/ch/vollmacht.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-VOLLMACHT', verze: '1.0' },

  nazev: 'Power of Attorney',
  nazevA: 'the power of attorney',
  katalog: {
    popis: 'So that someone can deal with a matter for you.',
    slova: ['power of attorney', 'authorisation', 'letter of authority', 'representation', 'collect post', 'authorities', 'Vollmacht', 'bevollmächtigen'],
  },
  landing: {
    title: 'Power of Attorney Switzerland {rok} – free PDF template',
    description:
      'Power of attorney under Art. 32 et seq. OR (Switzerland), explained in English: who authorises whom, for what and until when. Free bilingual PDF or Word.',
    perex: 'So that another person can deal with a specific matter for you – worded clearly and specifically.',
    obsahPopis: 'One page under Art. 32 et seq. OR.',
    obsah: [
      { nazev: 'Principal', popis: 'Who gives the authority.' },
      { nazev: 'Authorised representative', popis: 'Who acts.' },
      { nazev: 'Scope', popis: 'What exactly.' },
      { nazev: 'Validity', popis: 'Until when.' },
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
    hodiSe: ['collecting post or documents', 'dealing with authorities'],
    nehodiSe: [
      'a mandate in case of incapacity (Vorsorgeauftrag, Art. 360 et seq. ZGB)',
      'property and banking transactions with their own required form',
    ],
    po: [{ nazev: 'Original', popis: 'Present it together with a passport or ID.' }],
    faq: [
      {
        q: 'Does the signature have to be certified?',
        a: 'For everyday matters usually not. The land register (Grundbuch), the commercial register (Handelsregister) or banks often require a certified signature (beglaubigte Unterschrift) or their own forms.',
      },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 32 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR).',
  },
  vytvorit: {
    title: 'Fill in a power of attorney online – Switzerland, free PDF',
    description: 'Guide in English for a power of attorney in Switzerland: post, authorities and everyday matters. Free bilingual PDF or Word.',
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
      m_jmeno: { popis: 'Authorised representative – first name and surname' },
      m_narozeni: { popis: 'Date of birth' },
      m_adresa: { popis: 'Address' },
      rozsah: {
        popis: 'What does the power of attorney cover?',
        napoveda: 'Specific and easy to understand.',
        placeholder: 'e.g. Abholung eines an mich adressierten eingeschriebenen Briefes in der Postfiliale Zürich-Enge (collection of a registered letter addressed to me at the Zürich-Enge post office)',
      },
      platnost_do: { popis: 'Valid until (optional)' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: [''],
    coDal: [
      'Print the power of attorney and sign it by hand.',
      'The authorised representative presents the original power of attorney together with a passport or ID.',
    ],
    kontrola: [
      'Describe the scope specifically – what exactly the person may do. Powers of attorney that are too general are often rejected.',
      'Property, companies, banking or authorities often require special forms (certification of the signature, the bank’s own forms). Ask beforehand.',
      'In case of your own incapacity you need a mandate in case of incapacity (Vorsorgeauftrag, Art. 360 et seq. ZGB), which has a stricter form – this template does not replace it.',
      'Check the other party’s identity against their passport or identity card (Identitätskarte) and copy their name and address exactly as shown.',
    ],
    pripominky: {
      'Vollmacht läuft ab': { nazev: 'Power of attorney expires' },
    },
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'under Art. 32 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR)',
    podpisy: { vlevo: 'principal', vpravo: 'authorised representative' },
    clanky: [
      {
        nadpis: 'Power of Attorney',
        odstavce: [
          'I, **{{z_jmeno}}**, born on {{z_narozeni}}, residing at {{z_adresa}} (principal),',
          'hereby authorise **{{m_jmeno}}**, born on {{m_narozeni}}, residing at {{m_adresa}} (authorised representative),',
          'to represent me in the following matter: {{rozsah}}',
          'This power of attorney is valid until {{platnost_do}}, otherwise until the matter has been dealt with or until it is revoked.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

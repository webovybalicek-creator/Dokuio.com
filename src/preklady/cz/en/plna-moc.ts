/**
 * English version: power of attorney (Czech Republic). Original: src/obsah/cz/plna-moc.ts and src/sablony/cz/plna-moc.ts.
 * The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-PLNA-MOC', verze: '1.0' },

  nazev: 'Power of Attorney',
  nazevA: 'the power of attorney',
  katalog: {
    popis: 'Authorising someone to handle something for you.',
    slova: ['power of attorney', 'authorisation', 'proxy', 'representation', 'letter of authority', 'collect a parcel', 'authority', 'post office', 'plná moc', 'zmocnění'],
  },
  landing: {
    title: 'Power of Attorney Czech Republic {rok} – free PDF template',
    description:
      'Power of attorney for the Czech Republic, explained in English: to collect parcels, deal with an authority or sign a contract. Bilingual PDF or Word, free.',
    perex: 'So that someone can collect a parcel for you, handle a matter at an authority or sign a contract. Always with a precisely defined scope.',
    obsahPopis: 'A special power of attorney (plná moc) under Section 441 et seq. of the Czech Civil Code (občanský zákoník).',
    obsah: [
      { nazev: 'Principal', popis: 'Who grants the power of attorney.' },
      { nazev: 'Attorney', popis: 'Who will act.' },
      { nazev: 'Scope and validity', popis: 'Parcels, an authority, a contract or other acts; one-off, until a date or until revoked.' },
    ],
    kroky: [
      { nazev: 'Choose what it is for', popis: 'The more precise, the safer.' },
      { nazev: 'Download and sign', popis: 'Bilingual PDF or Word for free.' },
      { nazev: 'Have the signature certified if needed', popis: 'The post office, a bank or the land registry often require it.' },
    ],
    online: ['Scope from ready-made options', 'Limit the validity with one click', 'Tips on when a certified signature is needed', 'Download as PDF and Word'],
    hodiSe: ['someone needs to handle a specific matter for you', 'you need to collect a parcel or file an application', 'you want a clearly limited scope and validity'],
    nehodiSe: ['transfer of a car’s registration – use the power of attorney for vehicle registration transfer', 'real estate, court cases, companies – usually a special form or a lawyer', 'a bank – it usually insists on its own form'],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Find out what the institution requires', popis: 'A certified signature or its own form?' },
      { nazev: 'Give it to the attorney', popis: 'The original; keep a copy.' },
      { nazev: 'Revocation', popis: 'You can revoke the power of attorney in writing at any time.' },
    ],
    faq: [
      { q: 'Does the signature on a power of attorney have to be certified?', a: 'In general no, but many institutions (the vehicle register, the land registry, the post office for some services, banks) require an officially certified signature (úředně ověřený podpis) or their own form. Ask in advance.' },
      { q: 'What is a general power of attorney?', a: 'An authorisation for all acts. It is risky, so the template does not offer it – always list the scope.' },
      { q: 'How do I cancel a power of attorney?', a: 'By revoking it in writing. Notify the attorney and the institution where the power of attorney is being used.' },
      { q: 'Do you store my details?', a: 'No. The power of attorney is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Section 441 et seq. of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník).',
    souvisejiciPopis: 'Other useful documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a power of attorney online – Czech Republic, PDF',
    description: 'Guide in English for a power of attorney in the Czech Republic: post, authorities, contracts. Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'power of attorney', g: 'power of attorney', a: 'power of attorney', l: 'power of attorney' },
    kroky: {
      zmocnitel: { nazev: 'Who grants the power of attorney', popis: 'The principal is the person on whose behalf someone else will act.' },
      zmocnenec: { nazev: 'Who will act' },
      rozsah: { nazev: 'What for', popis: 'The more precise, the better. Then neither the authority nor the other party will have any doubts.' },
    },
    pole: {
      z_jmeno: { popis: 'Principal – first name and surname', napoveda: 'Full name as in the identity document.', placeholder: 'e.g. Marie Nováková' },
      z_narozeni: { popis: 'Principal’s date of birth', napoveda: 'Authorities usually ask for the date of birth, some also for the Czech personal identification number (rodné číslo) – you can add that by hand.' },
      z_adresa: { popis: 'Principal’s address', napoveda: 'Permanent address.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      m_jmeno: { popis: 'Attorney – first name and surname', napoveda: 'The person who will act for you. They will prove their identity with their own identity document.', placeholder: 'e.g. Tomáš Novák' },
      m_narozeni: { popis: 'Attorney’s date of birth', napoveda: 'According to the attorney’s identity document.' },
      m_adresa: { popis: 'Attorney’s address', napoveda: 'Permanent address.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      rozsah: {
        popis: 'The attorney may',
        napoveda: 'Tick everything you need and specify below.',
        moznosti: {
          zasilky: 'Collect postal items',
          urad: 'Deal with an authority in a specific matter',
          smlouva: 'Sign a specific contract',
          jine: 'Something else',
        },
      },
      rozsah_popis: {
        popis: 'Details',
        napoveda: 'E.g. “u Finančního úřadu v Říčanech ve věci daňového přiznání za rok 2026” (at the Tax Office in Říčany regarding the tax return for 2026) or “podepsat nájemní smlouvu k bytu Nerudova 12, Říčany” (sign the lease for the flat at Nerudova 12, Říčany). Ideally write it in Czech.',
        placeholder: 'In which matter, with whom, which contract…',
      },
      platnost: {
        popis: 'How long it is valid',
        napoveda: 'Shorter validity = lower risk.',
        moznosti: { ukon: 'Only for this act (until it is completed)', datum: 'Until a certain date', odvolani: 'Until revoked' },
      },
      platnost_do: { popis: 'Valid until', napoveda: 'The last day of validity.' },
      misto: { popis: 'Place of signing (town)', napoveda: 'We pre-fill it from the principal’s address.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date of signing', napoveda: 'We pre-filled today. When having the signature certified, you can write the date by hand.' },
    },
    vysvetleni: [
      'Who grants the power of attorney.',
      'Who will act on behalf of the principal.',
      'Exactly what the attorney may do. Outside this scope they cannot act on behalf of the principal.',
    ],
    coDal: [
      'Find out whether the institution requires an officially certified signature (úředně ověřený podpis) or its own form – if so, have the signature certified (Czech POINT, the municipal office – obecní úřad, a notary).',
      'The principal signs in their own hand; the attorney may add “zmocnění přijímám” (“I accept the authorisation”).',
      'Give the power of attorney to the attorney; keep a copy.',
      'You can revoke the power of attorney at any time – in writing and ideally also at the institution where it is used.',
    ],
    kontrola: [
      'Make the scope as precise as possible – only the acts you really need. A power of attorney “for everything” is risky.',
      'The post office, a bank, the land registry, the vehicle register or a court may require an officially certified signature or their own form – ask in advance.',
      'Make sure you trust the attorney – you as the principal are responsible for acts within the scope of the power of attorney.',
      'Limit the validity (until a date or one-off) if you don’t need it permanently.',
      'Check the attorney’s identity from their identity document (občanský průkaz). The number of a Czech ID card can be checked in the [Neplatné doklady database (Czech Ministry of the Interior)](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).',
    ],
  },

  dokument: {
    nazev: 'Power of Attorney',
    podnadpis: 'under Section 441 et seq. of Act No. 89/2012 Coll., the Civil Code (občanský zákoník)',
    podpisy: { vlevo: 'principal', vpravo: 'attorney – I accept the authorisation' },
    clanky: [
      {
        nadpis: 'Principal',
        odstavce: ['{{z_jmeno}}, date of birth {{z_narozeni}}, permanently residing at {{z_adresa}}'],
      },
      {
        nadpis: 'Attorney',
        odstavce: ['{{m_jmeno}}, date of birth {{m_narozeni}}, permanently residing at {{m_adresa}}'],
      },
      {
        nadpis: 'Scope of Authority',
        odstavce: [
          {
            uvod: 'The Principal authorises the Attorney to represent the Principal and act on the Principal’s behalf to the following extent:',
            moznosti: {
              zasilky: 'collecting postal items addressed to the Principal',
              urad: 'dealing with an authority, filing applications and receiving documents in the matter specified below',
              smlouva: 'signing the contract specified below on behalf of the Principal',
              jine: 'other acts specified below',
            },
          },
          'Details: {{rozsah_popis}}',
          {
            uvodVzor: 'Validity (tick one option):',
            moznosti: {
              ukon: 'This power of attorney is valid until the above acts have been completed.',
              datum: 'This power of attorney is valid until {{platnost_do}}.',
              odvolani: 'This power of attorney is valid until revoked.',
            },
          },
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

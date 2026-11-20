/**
 * English version: consent to registration of permanent address (Czech Republic). Original: src/obsah/cz/souhlas-s-trvalym-pobytem.ts
 * and src/sablony/cz/souhlas-trvaly-pobyt.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-SOUHLAS-POBYT', verze: '1.0' },

  nazev: 'Permanent Address Consent',
  nazevA: 'the permanent address consent',
  katalog: {
    popis: 'Consent of the owner or tenant to registering someone at the address.',
    slova: ['permanent residence', 'permanent address', 'address registration', 'register address', 'owner consent', 'flat', 'souhlas s trvalým pobytem', 'trvalý pobyt', 'ohlašovna'],
  },
  landing: {
    title: 'Permanent Address Consent Czech Republic {rok} – free PDF template',
    description:
      'Owner’s or tenant’s consent to registering permanent residence (trvalý pobyt) in the Czech Republic: fill it in online, download a bilingual PDF or Word. Free.',
    perex: 'The owner or tenant of a flat confirms that someone may register their permanent residence (trvalý pobyt) at their address. The signature must be officially certified.',
    obsahPopis: 'A written confirmation by the entitled person under Section 10 of Czech Act No. 133/2000 Coll., on the Population Register (zákon o evidenci obyvatel).',
    obsah: [
      { nazev: 'Entitled person', popis: 'Owner or tenant – name, date of birth, address.' },
      { nazev: 'Consent', popis: 'Address of the flat or house and who is registering (including other persons, e.g. children).' },
    ],
    kroky: [
      { nazev: 'Fill in the details', popis: 'The address exactly, with the building number (číslo popisné). Explanations in English.' },
      { nazev: 'Have the signature certified', popis: 'The entitled person, at a Czech POINT, the municipal office (obecní úřad) or a notary.' },
      { nazev: 'To the registration office', popis: 'The person registering brings the consent and their ID card to the registration office (ohlašovna), or reports the change via the Portál občana. The document is bilingual: Czech original and English translation.' },
    ],
    online: ['Exact wording under the Population Register Act', 'Several persons registering at once', 'Tips on when consent is not needed', 'Download as PDF and Word'],
    hodiSe: ['you are registering someone at your flat or house', 'as a tenant you are giving consent to a flatmate', 'the entitled person cannot go to the registration office in person'],
    nehodiSe: ['you are registering at your own flat – an extract from the Land Register is enough (the office checks it itself)', 'you have your own lease agreement for the flat – you will submit it', 'the entitled person will go to the registration office with you – they will confirm consent there'],
    poNadpis: 'After signing.',
    po: [
      { nazev: 'Certification of the signature', popis: 'Without it, the registration office will not accept the consent.' },
      { nazev: 'Reporting the change', popis: 'At the municipal office of the new place of residence or electronically. Fee CZK 50, children under 15 free.' },
      { nazev: 'New identity card', popis: 'As instructed by the registration office.' },
    ],
    faq: [
      { q: 'Does the signature have to be certified?', a: 'Yes, the written confirmation of the entitled person must have an officially certified signature (úředně ověřený podpis). Certification is not needed if the entitled person confirms consent in person at the registration office.' },
      { q: 'Does permanent residence give a right to live in the flat?', a: 'No. Permanent residence is only a record of an address. The right to live there arises from ownership, a lease or another agreement.' },
      { q: 'Can a tenant give consent?', a: 'Yes, a tenant is an entitled person. The lease agreement is also submitted at the registration office.' },
      { q: 'Do you store my details?', a: 'No. The consent is put together directly in your browser.' },
    ],
    zakony: 'The template is based on Section 10 of Czech Act No. 133/2000 Coll., on the Population Register (zákon o evidenci obyvatel), and information from the Czech Ministry of the Interior on registering permanent residence.',
    souvisejiciPopis: 'More useful documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a permanent address consent online – Czech Republic, PDF',
    description: 'Guide in English for an owner’s consent to registering permanent residence in the Czech Republic. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'consent', g: 'consent', a: 'consent', l: 'consent' },
    podpisPoznamka:
      'The signature of the entitled person must be officially certified (Czech POINT, municipal office, notary); otherwise the registration office (ohlašovna) will not accept it. A certified consent is not needed if the entitled person comes to the registration office in person and confirms consent there.',
    kroky: {
      opravneny: { nazev: 'Who gives consent', popis: 'The entitled person is the owner of the flat or house, or whoever rents it.' },
      objekt: { nazev: 'Address', popis: 'The person registering will register at this address.' },
      prihlasovany: { nazev: 'Who is registering' },
    },
    pole: {
      p_jmeno: { popis: 'First name and surname of the entitled person', napoveda: 'Full name as in the identity document.', placeholder: 'e.g. Jan Novák' },
      p_narozeni: { popis: 'Date of birth', napoveda: 'According to the identity document.' },
      p_adresa: { popis: 'Permanent address of the entitled person', napoveda: 'Where the signatory has their permanent residence (they don’t have to live in the flat concerned).', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      vztah: {
        popis: 'The entitled person is',
        napoveda: 'A tenant also submits the lease agreement at the registration office.',
        moznosti: { vlastnik: 'Owner (co-owner)', najemce: 'Tenant' },
      },
      adresa: { popis: 'Address of the flat or house', napoveda: 'Street, building/street number (číslo popisné / orientační), postcode and town. The číslo popisné is on the blue or red plate on the building.', placeholder: 'e.g. Masarykova 1025/5, 251 01 Říčany' },
      byt: { popis: 'Flat number (optional)', napoveda: 'In a block of flats, if known (e.g. from the Land Register or the lease agreement).', placeholder: 'e.g. 12' },
      k_jmeno: { popis: 'First name and surname', napoveda: 'Full name according to the identity document.', placeholder: 'e.g. Petra Svobodová' },
      k_narozeni: { popis: 'Date of birth', napoveda: 'According to the identity document.' },
      dalsi: { popis: 'Other persons registering (optional)', napoveda: 'E.g. children – name and date of birth, each on a new line.', placeholder: 'e.g. Tomáš Svoboda, nar. 3. 5. 2018' },
      misto: { popis: 'Place of signing (town)', napoveda: 'We pre-fill it from the entitled person’s address.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date', napoveda: 'We pre-filled today. If you will only sign at the certification, you can write the date by hand.' },
    },
    vysvetleni: [
      'Who is giving consent.',
      'The consent to registration itself. It does not create a right to live in the flat. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'The entitled person (owner or tenant) signs the consent and has the signature officially certified.',
      'The person registering takes the certified consent and their identity card to the registration office (ohlašovna – the municipal office of the new place of residence), or reports the change electronically via the Portál občana.',
      'A tenant (not an owner) also attaches proof that they use the flat – usually the lease agreement.',
      'The administrative fee for reporting is CZK 50; children under 15 do not pay it.',
    ],
    kontrola: [
      'The entitled person signs – the owner of the flat or house, or the tenant. Have the signature officially certified.',
      'The address exactly as registered: street, building number (č. p.), street number, town and, in a block of flats, the flat number.',
      'Name and date of birth of the person registering according to their identity document.',
      'Permanent residence is only a record – it gives no right to live in the flat or any claim to it. The owner can later have it cancelled only on statutory grounds.',
      'It is possible without a certified consent if the entitled person comes to the registration office in person, or if the person registering submits their own lease agreement.',
    ],
  },

  dokument: {
    nazev: 'Consent to Registration of Permanent Residence',
    podnadpis: 'confirmation by the entitled person of consent to reporting a change of the place of permanent residence under Act No. 133/2000 Coll.',
    podpisy: { vlevo: 'entitled person (officially certified signature)', vpravo: 'person registering (optional)' },
    clanky: [
      {
        nadpis: 'Entitled Person',
        odstavce: [
          '{{p_jmeno}}, date of birth {{p_narozeni}}, permanently residing at {{p_adresa}}',
          {
            uvodVzor: 'as (tick):',
            moznosti: {
              vlastnik: 'as the owner of the property stated below,',
              najemce: 'as the tenant of the flat stated below,',
            },
          },
        ],
      },
      {
        nadpis: 'Consent',
        odstavce: [
          'I consent to the following person reporting a change of their place of permanent residence to the address {{adresa}}, flat number {{byt}}:',
          '{{k_jmeno}}, date of birth {{k_narozeni}}',
          'Other persons: {{dalsi}}',
          'I give this consent under Section 10 of Act No. 133/2000 Coll., on the Population Register.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

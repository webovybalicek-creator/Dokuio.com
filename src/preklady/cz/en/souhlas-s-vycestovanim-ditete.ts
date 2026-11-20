/**
 * English version: consent to a child travelling abroad (Czech Republic). Original: src/obsah/cz/souhlas-s-vycestovanim-ditete.ts
 * and src/sablony/cz/souhlas-vycestovani-dite.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-SOUHLAS-CESTA-DITE', verze: '1.0' },

  nazev: 'Child Travel Consent',
  nazevA: 'the child travel consent',
  katalog: {
    popis: 'A child travelling abroad without parents or with one of them.',
    slova: ['child travel consent', 'parental consent', 'travel abroad', 'minor', 'holiday', 'summer camp', 'travelling with children', 'souhlas s vycestováním dítěte', 'vycestování'],
  },
  landing: {
    title: 'Child Travel Consent Czech Republic {rok} – free PDF template',
    description:
      'Parents’ consent to a child travelling abroad from the Czech Republic as recommended by the MZV: child, escort, country, dates. Free bilingual PDF or Word.',
    perex: 'Is your child going to the seaside with grandma, to a summer camp or with one parent? A consent as recommended by the Czech Ministry of Foreign Affairs (MZV), filled in within minutes.',
    obsahPopis: 'Content based on the recommendations and templates of the Czech Ministry of Foreign Affairs (Ministerstvo zahraničních věcí, MZV).',
    obsah: [
      { nazev: 'Legal representatives', popis: 'Parents – name, date of birth, document number, phone.' },
      { nazev: 'Consent', popis: 'Child, escort, destination and transit countries, dates and purpose of the trip.' },
    ],
    kroky: [
      { nazev: 'Fill in the details', popis: 'Names and document numbers exactly as in passports and ID cards. Explanations in English.' },
      { nazev: 'Check the country’s requirements', popis: 'On the MZV pages about countries of the world or at the embassy.' },
      { nazev: 'Have the signature certified', popis: 'Recommended by the MZV – Czech POINT, municipal office (obecní úřad), notary.' },
    ],
    online: ['Content as recommended by the MZV', 'Escort options (parent, other person, alone)', 'Links to the requirements of individual countries', 'Download as PDF and Word'],
    hodiSe: ['the child is travelling with grandparents, relatives, to a camp or with the school', 'the child is travelling with one parent, especially outside the EU or with a different surname', 'the child is travelling alone'],
    nehodiSe: ['a long-term stay or moving abroad – the consent of the other parent or the court is needed', 'you need a bilingual text – use the MZV template and certification by a notary', 'the destination country requires its own form – use that one'],
    poNadpis: 'Before the trip.',
    po: [
      { nazev: 'Certified signature', popis: 'For both parents who give consent.' },
      { nazev: 'Documents to take', popis: 'The original consent, the child’s travel document and ideally a copy of the birth certificate.' },
      { nazev: 'Parents’ contact', popis: 'The phone number is in the consent – keep it switched on during the trip.' },
    ],
    faq: [
      { q: 'Is the consent mandatory?', a: 'Czech law does not require it for short trips, but some countries or airlines do. The MZV strongly recommends it especially for trips outside the EU and when the child is not travelling with both parents.' },
      { q: 'Does the signature have to be certified?', a: 'The MZV recommends official certification (Czech POINT at the post office, municipal office, notary). However, neither the post office nor the municipal office will certify a bilingual text.' },
      { q: 'Where can I find the requirements of a particular country?', a: 'On the MZV website in the section “Státy světa” (Countries of the world) – travel information, or at the embassy of the country concerned. Also check the countries you pass through.' },
      { q: 'Do I need an English version?', a: 'The MZV offers a separate English template. To have the signature certified at the post office, use separate language versions, not a bilingual text.' },
      { q: 'Do you store my details?', a: 'No. The consent is put together directly in your browser.' },
    ],
    zakony: 'The template is based on the recommendations and templates of the Czech Ministry of Foreign Affairs (Cestování s dětmi – travelling with children). The requirements of individual countries differ and change – always check them before the trip.',
    souvisejiciPopis: 'More useful documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a child travel consent online – Czech Republic, PDF',
    description: 'Guide in English for a consent to a child travelling abroad from the Czech Republic as recommended by the MZV. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'consent', g: 'consent', a: 'consent', l: 'consent' },
    podpisPoznamka:
      'The MZV recommends having the signature officially certified (Czech POINT at the post office, municipal office, notary). That is why you sign the consent by hand. Note: neither the post office nor the municipal office will certify a bilingual text – for an English version, use the separate English MZV template or a notary.',
    kroky: {
      rodice: { nazev: 'Legal representatives', popis: 'Usually the parents. If one parent accompanies the child, the consent of the other is enough.' },
      dite: { nazev: 'Child' },
      cesta: { nazev: 'Trip' },
    },
    pole: {
      r1_jmeno: { popis: 'Legal representative 1 – first name and surname', napoveda: 'A parent or another legal representative (guardian, foster parent with a court decision).', placeholder: 'e.g. Jana Nováková' },
      r1_narozeni: { popis: 'Date of birth', napoveda: 'According to the identity document.' },
      r1_doklad: { popis: 'ID card or passport number', napoveda: 'Helps the authorities verify identity.', placeholder: 'e.g. 123456789' },
      r1_adresa: { popis: 'Address', napoveda: 'Permanent address.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      r1_telefon: { popis: 'Phone', napoveda: 'So that you can be contacted at the border or airport. Include the +420 prefix.', placeholder: 'e.g. +420 777 123 456' },
      r2_jmeno: { popis: 'Legal representative 2 – first name and surname (optional)', napoveda: 'The other parent. If they are travelling with the child, they don’t need to sign the consent – then leave it empty.', placeholder: 'e.g. Petr Novák' },
      r2_narozeni: { popis: 'Date of birth', napoveda: 'According to the identity document.' },
      r2_doklad: { popis: 'ID card or passport number', napoveda: 'According to the other parent’s document.', placeholder: 'e.g. 987654321' },
      r2_telefon: { popis: 'Phone', napoveda: 'With the +420 prefix.', placeholder: 'e.g. +420 777 654 321' },
      d_jmeno: { popis: 'Child’s first name and surname', napoveda: 'Exactly as in the child’s travel document.', placeholder: 'e.g. Tomáš Novák' },
      d_narozeni: { popis: 'Child’s date of birth', napoveda: 'According to the travel document.' },
      d_doklad: { popis: 'Child’s passport or ID card number', napoveda: 'The number of the document the child travels with.', placeholder: 'e.g. 45678912' },
      doprovod: {
        popis: 'Who the child is travelling with',
        napoveda: 'The escort must be named in the consent.',
        moznosti: { rodic: 'With the other parent', jina: 'With another person (grandparent, relative, camp leader…)', samo: 'Alone (e.g. a flight with airline escort)' },
      },
      o_jmeno: { popis: 'Escort – first name and surname', napoveda: 'Who is travelling with the child.', placeholder: 'e.g. Marie Nováková' },
      o_narozeni: { popis: 'Escort’s date of birth', napoveda: 'According to the escort’s document.' },
      o_doklad: { popis: 'Escort’s document number', napoveda: 'The passport or ID card the escort travels with.', placeholder: 'e.g. 112233445' },
      o_vztah: { popis: 'Relationship to the child', napoveda: 'E.g. grandmother, aunt, camp leader. Ideally write it in Czech.', placeholder: 'e.g. babička (grandmother)' },
      zeme: { popis: 'Destination country (and transit countries)', napoveda: 'All countries the child is going to or passing through. Check the requirements of each on the MZV website. Ideally write it in Czech.', placeholder: 'e.g. Chorvatsko (přes Rakousko a Slovinsko) – Croatia (via Austria and Slovenia)' },
      od: { popis: 'Departure', napoveda: 'Date of departure.' },
      do: { popis: 'Return', napoveda: 'Date of return.' },
      ucel: { popis: 'Purpose of the trip (optional)', napoveda: 'E.g. holiday, camp, school trip. Ideally write it in Czech.', placeholder: 'e.g. letní dovolená (summer holiday)' },
      misto: { popis: 'Place of signing (town)', napoveda: 'We pre-fill it from the legal representative’s address.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date', napoveda: 'We pre-filled today. When having the signature certified, you can write it by hand.' },
    },
    vysvetleni: [
      'Who is giving consent. A contact phone number helps officials at the border or airport.',
      'With whom and where the child may travel. The more specific, the fewer questions at the border. At the end, a language clause: the Czech text prevails.',
    ],
    coDal: [
      'Both parents (or the one not accompanying the child) sign and have the signature officially certified.',
      'The child or escort carries the original consent, the child’s travel document and ideally a copy of the birth certificate.',
      'Check the requirements of the destination country and the countries you pass through on the MZV pages “Státy světa”; or contact the embassy.',
      'Need an English version? Use the separate English MZV template (the post office will not certify a bilingual text) or an official translation.',
    ],
    kontrola: [
      'Requirements differ from country to country and the MZV does not keep a list of them – check the destination and transit countries in the section [MZV – státy světa](https://mzv.gov.cz/jnp/cz/encyklopedie_statu/index.html) or at the embassy.',
      'The MZV strongly recommends a consent for trips outside the EU, when the child travels without parents, with grandparents, with one parent, or when the parent and child have different surnames.',
      'Details of the child and escort exactly as in the travel documents: name, date of birth, passport or ID card number.',
      'State a specific country and dates – a consent for “anywhere, anytime” may be refused.',
      'Have the signature officially certified. Neither the post office nor the municipal office will certify a bilingual or multilingual text.',
      'A long-term stay or moving the child abroad requires the consent of the other parent (or the court) – this template is for trips.',
    ],
  },

  dokument: {
    nazev: 'Consent to a Child Travelling Abroad',
    podnadpis: 'consent of a legal representative to a minor child travelling abroad',
    podpisy: { vlevo: 'legal representative 1 (officially certified signature)', vpravo: 'legal representative 2 (officially certified signature)' },
    clanky: [
      {
        nadpis: 'Legal Representatives',
        odstavce: [
          '{{r1_jmeno}}, date of birth {{r1_narozeni}}, document number {{r1_doklad}}, residing at {{r1_adresa}}, phone {{r1_telefon}}',
          '{{r2_jmeno}}, date of birth {{r2_narozeni}}, document number {{r2_doklad}}, phone {{r2_telefon}}',
        ],
      },
      {
        nadpis: 'Consent',
        odstavce: [
          'as legal representative(s), I (we) consent to the minor child',
          '{{d_jmeno}}, date of birth {{d_narozeni}}, travel document number {{d_doklad}},',
          {
            uvodVzor: 'travelling abroad (tick):',
            moznosti: {
              rodic: 'travelling abroad accompanied by the other parent {{o_jmeno}}, date of birth {{o_narozeni}}, document number {{o_doklad}},',
              jina: 'travelling abroad accompanied by {{o_jmeno}}, date of birth {{o_narozeni}}, document number {{o_doklad}} ({{o_vztah}}),',
              samo: 'travelling abroad alone,',
            },
          },
          'to the country: {{zeme}}, in the period from {{od}} to {{do}}, for the purpose of: {{ucel}}.',
          'For the duration of the trip, I (we) entrust the escort with the care of the child and with making necessary decisions in the child’s interest, including consent to necessary medical care.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

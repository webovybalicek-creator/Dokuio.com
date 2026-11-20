/**
 * English version: consent for a child to travel abroad (Slovakia). Original: src/obsah/sk/suhlas-s-vycestovanim-dietata.ts
 * and src/sablony/sk/suhlas-s-vycestovanim-dietata.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-SUHLAS-CESTA-DIETA', verze: '1.0' },

  nazev: 'Child Travel Consent',
  nazevA: 'the child travel consent',
  katalog: {
    popis: 'A child’s trip abroad without the parents or with one of them.',
    slova: ['child travel consent', 'parental consent', 'consent letter', 'minor travelling abroad', 'travel with grandparents', 'summer camp abroad', 'child', 'súhlas s vycestovaním dieťaťa', 'súhlas rodiča'],
  },
  landing: {
    title: 'Child Travel Consent Slovakia {rok} – free PDF template',
    description:
      'Parental consent for a child’s trip abroad from Slovakia: child, escort, country and dates, with tips on certifying the signature. Bilingual PDF or Word, free.',
    perex: 'Is your child going to the seaside with the grandparents, to a camp or with one parent? Written consent from the legal guardian is recommended, and some countries require it.',
    obsahPopis: 'Consent of the legal guardians (súhlas zákonného zástupcu) naming the escort, the country and the dates of the trip.',
    obsah: [
      { nazev: 'Legal guardians', popis: 'Parents – name, date of birth, document number, phone.' },
      { nazev: 'Consent', popis: 'Child, escort, destination and transit countries, dates and purpose of the trip.' },
    ],
    kroky: [
      { nazev: 'Fill in the details', popis: 'Names and document numbers exactly as in the passports and identity cards.' },
      { nazev: 'Check the country’s requirements', popis: 'At the embassy or consulate of the destination country.' },
      { nazev: 'Sign in front of a notary', popis: 'If the country requires a certified signature – the municipality will not certify it on a document for use abroad.' },
    ],
    online: ['Escort options (parent, another person, alone)', 'Tips on certifying the signature and on country requirements', 'Download as PDF and Word'],
    hodiSe: ['the child is travelling with grandparents, relatives, to a camp or with the school', 'the child is travelling with one parent', 'the child is travelling alone'],
    nehodiSe: ['moving the child abroad permanently – if the parents disagree, a court decides', 'the destination country requires its own form or a text in a foreign language – use that'],
    poNadpis: 'Before the trip.',
    po: [
      { nazev: 'Country requirements', popis: 'Form, language and signature certification as advised by the embassy or consulate.' },
      { nazev: 'Documents to take', popis: 'The original consent, the child’s travel document, ideally a copy of the birth certificate.' },
      { nazev: 'Parents’ contact', popis: 'The phone number is in the consent – keep your phone switched on during the trip.' },
    ],
    faq: [
      {
        q: 'Is the consent compulsory?',
        a: 'The Slovak state does not require it for ordinary trips, but it is recommended when a child travels without the parents, and some countries require it. Check with the embassy or consulate of the destination country.',
      },
      {
        q: 'Who certifies the signature?',
        a: 'Neither the municipality (obec) nor the district office (okresný úrad) will certify a signature on a document to be used abroad (Act No. 78/2026 Coll.). A notary certifies it.',
      },
      {
        q: 'Does the consent have to be in a foreign language?',
        a: 'It depends on the country. Its embassy or consulate will tell you the language and form; arrange any translation or certification with a notary.',
      },
      { q: 'Do you store my details?', a: 'No. The consent is created directly in your browser.' },
    ],
    zakony:
      'The template is based on the recommendations on slovensko.sk (children travelling), Act No. 78/2026 Coll. on the certification of documents and signatures (zákon o osvedčovaní listín a podpisov), Section 58 of the Notarial Code (Notársky poriadok) and Section 35 of Act No. 36/2005 Coll. on the family (zákon o rodine). Country requirements differ and change – check them before the trip.',
    souvisejiciPopis: 'Other useful documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a child travel consent online – Slovakia, PDF',
    description: 'Parental consent for a child’s trip abroad from Slovakia, with escort, country and dates. Guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'consent', g: 'consent', a: 'consent', l: 'consent' },
    podpisPoznamka:
      'The consent is used abroad. Neither the municipality nor the district office will certify a signature on a document intended for use abroad – a notary certifies it. So do not sign the consent on screen: sign it only in front of a notary if the destination country requires a certified signature.',
    kroky: {
      rodicia: { nazev: 'Legal guardians', popis: 'Usually the parents. If one parent accompanies the child, the other parent’s consent is enough.' },
      dieta: { nazev: 'Child' },
      cesta: { nazev: 'Trip' },
    },
    pole: {
      r1_jmeno: { popis: 'Legal guardian 1 – first name and surname', napoveda: 'A parent or another legal guardian (e.g. a guardian appointed by a court).', placeholder: 'e.g. Jana Nováková' },
      r1_narozeni: { popis: 'Date of birth', napoveda: 'As in the identity card.' },
      r1_doklad: { popis: 'Identity card or passport number', napoveda: 'Helps verify identity during a check.', placeholder: 'e.g. EA123456' },
      r1_adresa: { popis: 'Permanent address', napoveda: 'As in the identity card.', placeholder: 'e.g. Mierová 25, 821 05 Bratislava' },
      r1_telefon: { popis: 'Phone', napoveda: 'With the +421 prefix, so that you can be contacted from the border or the airport.', placeholder: 'e.g. +421 905 123 456' },
      r2_jmeno: { popis: 'Legal guardian 2 – first name and surname (optional)', napoveda: 'The other parent. If they are travelling with the child, they do not need to sign the consent – leave it empty.', placeholder: 'e.g. Peter Novák' },
      r2_narozeni: { popis: 'Date of birth', napoveda: 'As in the identity card.' },
      r2_doklad: { popis: 'Identity card or passport number', napoveda: 'As in the other parent’s document.', placeholder: 'e.g. EB654321' },
      r2_telefon: { popis: 'Phone', napoveda: 'With the +421 prefix.', placeholder: 'e.g. +421 905 654 321' },
      d_jmeno: { popis: 'Child’s first name and surname', napoveda: 'Exactly as in the child’s travel document.', placeholder: 'e.g. Tomáš Novák' },
      d_narozeni: { popis: 'Child’s date of birth', napoveda: 'As in the travel document.' },
      d_doklad: { popis: 'Child’s travel document number', napoveda: 'The passport or identity card the child is travelling with.', placeholder: 'e.g. BA1234567' },
      sprievod: {
        popis: 'Who the child is travelling with',
        napoveda: 'The escort must be named in the consent.',
        moznosti: {
          rodic: 'With the other parent',
          ina: 'With another person (grandparent, relative, camp leader…)',
          samo: 'Alone (e.g. a flight with the airline’s escort service)',
        },
      },
      o_jmeno: { popis: 'Escort – first name and surname', napoveda: 'Who is travelling with the child.', placeholder: 'e.g. Mária Nováková' },
      o_narozeni: { popis: 'Escort’s date of birth', napoveda: 'As in the escort’s document.' },
      o_doklad: { popis: 'Escort’s document number', napoveda: 'The passport or identity card the escort is travelling with.', placeholder: 'e.g. EC112233' },
      o_vztah: { popis: 'Relationship to the child', napoveda: 'E.g. grandmother, aunt, camp leader. Write it in Slovak – the text goes into the original.', placeholder: 'e.g. stará mama (grandmother)' },
      krajina: { popis: 'Destination country (and transit countries)', napoveda: 'All countries the child is going to or passing through. Check the requirements of each.', placeholder: 'e.g. Chorvátsko (cez Maďarsko) – Croatia (via Hungary)' },
      od: { popis: 'Departure', napoveda: 'Date of departure.' },
      do: { popis: 'Return', napoveda: 'Date of return.' },
      ucel: { popis: 'Purpose of the trip (optional)', napoveda: 'E.g. holiday, camp, exchange stay.', placeholder: 'e.g. letná dovolenka (summer holiday)' },
      misto: { popis: 'Place of signing (town)', napoveda: 'We pre-fill it from the legal guardian’s address.', placeholder: 'e.g. Bratislava' },
      datum: { popis: 'Date', napoveda: 'We pre-filled today. When the signature is certified by a notary, you can write it in by hand.' },
    },
    vysvetleni: [
      'Who is giving consent. The phone number helps officials at the border or airport.',
      'Who the child may travel with and where. The more specific, the fewer questions during a check.',
    ],
    coDal: [
      'At the embassy or consulate (zastupiteľský úrad) of the destination country (and of the countries you travel through), check whether they require consent, in which language and whether with a certified signature.',
      'If a certified signature is needed, sign the consent only at a notary. Neither the municipality nor the district office will certify a signature on a document for use abroad.',
      'The child or the escort carries the original consent and the child’s valid travel document; a copy of the birth certificate helps prove the relationship to the child.',
      'Keep the legal guardian’s phone switched on during the trip – the number is in the consent for checks at the border or airport.',
    ],
    kontrola: [
      'Written consent from the legal guardian is recommended when a child travels abroad without the parents – for example with the grandparents. Some countries require it ([slovensko.sk](https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_cestovny-pas-pre-deti)).',
      'The embassy or consulate of the destination country will tell you the form of the consent, the language and whether the signature must be certified. See also the page of the Slovak Ministry of Foreign and European Affairs (MZVaEZ SR) [Cestovanie s maloletými deťmi](https://www.mzv.sk/web/sk/staty/cestovanie-s-maloletymi-detmi) (travelling with minor children).',
      'Neither the municipality nor the district office will certify a signature on a document to be used abroad, nor on a document in a foreign language other than Czech (Section 10 of Act No. 78/2026 Coll.). For use abroad, a notary certifies the signature (Section 58(5) of the Notarial Code).',
      'Copy the names and document numbers of the child and the escort exactly as in the travel documents.',
      'State a specific country and travel dates – a general consent “anywhere, any time” may be rejected during a check.',
      'The template is for trips. Moving a child abroad permanently is a matter of substantial importance in which a court decides if the parents do not agree (Section 35 of Act No. 36/2005 Coll. on the family).',
    ],
  },

  dokument: {
    nazev: 'Consent for a Child to Travel Abroad',
    podnadpis: 'consent of the legal guardian to a minor child’s trip abroad',
    podpisy: { vlevo: 'legal guardian 1 (signature certified by a notary)', vpravo: 'legal guardian 2 (signature certified by a notary)' },
    clanky: [
      {
        nadpis: 'Legal Guardians',
        odstavce: [
          '{{r1_jmeno}}, date of birth {{r1_narozeni}}, document No. {{r1_doklad}}, permanently residing at {{r1_adresa}}, phone {{r1_telefon}}',
          '{{r2_jmeno}}, date of birth {{r2_narozeni}}, document No. {{r2_doklad}}, phone {{r2_telefon}}',
        ],
      },
      {
        nadpis: 'Consent',
        odstavce: [
          'as the legal guardian (legal guardians), I (we) consent to the minor child',
          '{{d_jmeno}}, date of birth {{d_narozeni}}, travel document No. {{d_doklad}},',
          {
            uvodVzor: 'travelling abroad (tick one):',
            moznosti: {
              rodic: 'travelling abroad accompanied by the other parent {{o_jmeno}}, date of birth {{o_narozeni}}, document No. {{o_doklad}},',
              ina: 'travelling abroad accompanied by {{o_jmeno}}, date of birth {{o_narozeni}}, document No. {{o_doklad}} ({{o_vztah}}),',
              samo: 'travelling abroad alone,',
            },
          },
          'to the country: {{krajina}}, in the period from {{od}} to {{do}}, for the purpose of: {{ucel}}.',
          'For the duration of the trip, I (we) entrust the escort with the care of the child and with making the necessary decisions in the child’s interest, including consent to necessary medical care.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

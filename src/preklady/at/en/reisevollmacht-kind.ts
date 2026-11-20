/**
 * English version: consent to a child’s travel abroad (Austria). Original: src/obsah/at/reisevollmacht-kind.ts
 * and src/sablony/at/reisevollmacht-kind.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-REISEVOLLMACHT-KIND', verze: '1.0' },

  nazev: 'Child Travel Consent',
  nazevA: 'the child travel consent',
  katalog: {
    popis: 'Declaration of consent when a child travels without parents or with one parent.',
    slova: ['child travel consent', 'travel consent letter', 'parental consent', 'child travelling alone', 'travel with one parent', 'minor', 'holiday with grandparents', 'summer camp', 'Reisevollmacht', 'Einverständniserklärung', 'Vollmacht Kind Ausland', 'Österreich'],
  },
  landing: {
    title: 'Child Travel Consent Austria {rok} – free PDF template',
    description:
      'Parents’ consent to a child’s trip abroad: alone, with grandparents or with one parent. Based on oesterreich.gv.at. Download a bilingual PDF or Word for free.',
    perex: 'Your child is going to the seaside with the grandparents, to a summer camp or abroad with only one parent? The declaration of consent (Einverständniserklärung) with all the details recommended by oesterreich.gv.at – filled in within minutes.',
    obsahPopis: 'Content based on the recommendations of oesterreich.gv.at.',
    obsah: [
      { nazev: 'Persons with custody', popis: 'Name, date of birth, travel document, address and telephone.' },
      { nazev: 'Child and companion', popis: 'With one parent, with another person or alone.' },
      { nazev: 'Trip', popis: 'Destination and transit countries, period, purpose.' },
      { nazev: 'Enclosures', popis: 'Birth certificate, passport copies, if applicable marriage certificate or proof of custody.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Names and numbers exactly as in the travel documents.' },
      { nazev: 'Check the destination', popis: 'Read the travel information of the Austrian Foreign Ministry (BMEIA).' },
      { nazev: 'Sign it', popis: 'If required, have the signature certified by a notary or at a district court (Bezirksgericht).' },
    ],
    online: [
      'Options: with a parent, with another person, alone',
      'List of enclosures to tick',
      'Links to the BMEIA travel information',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'your child is travelling abroad with grandparents, relatives, the school or a summer camp',
      'your child is travelling with only one parent, especially if your surnames differ',
      'your child is travelling alone, e.g. with the airline’s escort service',
    ],
    nehodiSe: [
      'the destination country or the airline requires its own form – use that one',
      'you need a version in another language – the ÖAMTC motoring club offers multilingual templates',
      'the child is moving abroad or staying there for a longer period',
    ],
    poNadpis: 'Before departure.',
    po: [
      { nazev: 'Certification', popis: 'Only if the destination country requires it – by a notary or at a district court.' },
      { nazev: 'Documents', popis: 'Original declaration, the child’s passport or identity card, copies of the enclosures.' },
      { nazev: 'Being reachable', popis: 'The telephone numbers are in the declaration – keep your mobile switched on during the trip.' },
    ],
    faq: [
      { q: 'Is a travel consent mandatory?', a: 'There is no general obligation. Depending on the country of travel, however, it may be required; oesterreich.gv.at recommends it when a child travels without parents or with only one parent.' },
      { q: 'Does the signature have to be certified?', a: 'Only if the country of travel requires it. Notaries and district courts can certify signatures.' },
      { q: 'Who has to sign?', a: 'Ideally both persons with custody (Obsorge). The consent of only one parent may not be enough. If one parent travels with the child, the other signs in any case.' },
      { q: 'In which language?', a: 'For countries where German is not spoken, to be safe in English or in the local language. A translation may be needed.' },
      { q: 'Where can I find the entry requirements?', a: 'In the travel information of the Austrian Foreign Ministry (BMEIA) for each country and at the embassy or consulate of the destination country. Check transit countries too.' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony:
      'The template follows the guidance of oesterreich.gv.at (holidays abroad without parents, travel within the EU). The entry requirements of individual countries change – check them before every trip in the BMEIA travel information.',
    souvisejiciPopis: 'More documents for family and travel, also free.',
  },
  vytvorit: {
    title: 'Fill in a child travel consent online – Austria, PDF',
    description: 'Guide in English: declaration of consent for a minor child’s trip abroad (Austria). Download a bilingual PDF or Word for free.',
    podnadpis: 'Free · PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'declaration of consent', g: 'declaration of consent', a: 'declaration of consent', l: 'declaration of consent' },
    kroky: {
      eltern: { nazev: 'Persons with custody', popis: 'Usually both parents. If one parent travels along, the other must sign in any case.' },
      kind: { nazev: 'Child' },
      reise: { nazev: 'Trip' },
    },
    pole: {
      e1_name: { popis: 'Person with custody 1 – first name and surname', napoveda: 'A parent or another person with custody (Obsorge).', placeholder: 'e.g. Katharina Bauer' },
      e1_geburt: { popis: 'Date of birth', napoveda: 'As in the passport or identity card.' },
      e1_pass: { popis: 'Passport or identity card number', napoveda: 'Helps the checkpoint verify your identity.', placeholder: 'e.g. P1234567' },
      e1_adresse: { popis: 'Home address', napoveda: 'Main residence.', placeholder: 'e.g. Schillerstraße 4, 5020 Salzburg' },
      e1_telefon: { popis: 'Telephone (reachable during the trip)', napoveda: 'With the +43 code, so that you can be reached from abroad.', placeholder: 'e.g. +43 664 1234567' },
      e2_name: { popis: 'Person with custody 2 – first name and surname (optional)', napoveda: 'The second parent. If you have sole custody, leave it empty and enclose proof.', placeholder: 'e.g. Florian Bauer' },
      e2_geburt: { popis: 'Date of birth', napoveda: 'As in the travel document.' },
      e2_pass: { popis: 'Passport or identity card number', napoveda: 'As in the second parent’s document.', placeholder: 'e.g. P7654321' },
      e2_adresse: { popis: 'Home address (if different)', napoveda: 'Only fill in if it differs from the one above.', placeholder: 'e.g. Linzer Gasse 10, 5020 Salzburg' },
      e2_telefon: { popis: 'Telephone', napoveda: 'With the +43 code.', placeholder: 'e.g. +43 676 7654321' },
      k_name: { popis: 'Child’s first name and surname', napoveda: 'Exactly as in the child’s passport or identity card.', placeholder: 'e.g. Lena Bauer' },
      k_geburt: { popis: 'Child’s date of birth', napoveda: 'As in the travel document.' },
      k_pass: { popis: 'Child’s passport or identity card number', napoveda: 'Every child needs their own travel document.', placeholder: 'e.g. P2345678' },
      k_adresse: { popis: 'Child’s home address (if different)', napoveda: 'Only fill in if the child does not live with person with custody 1.', placeholder: 'e.g. Schillerstraße 4, 5020 Salzburg' },
      begleitung: {
        popis: 'Who is the child travelling with?',
        napoveda: 'The accompanying person must be named in the declaration.',
        moznosti: {
          elternteil: 'With one parent',
          andere: 'With another person (grandparents, relatives, camp, school …)',
          allein: 'Alone (e.g. a flight with the airline’s escort service)',
        },
      },
      b_name: { popis: 'Accompanying person – first name and surname', napoveda: 'Who travels with the child.', placeholder: 'e.g. Margarete Bauer' },
      b_geburt: { popis: 'Accompanying person’s date of birth', napoveda: 'As in the travel document.' },
      b_pass: { popis: 'Passport or identity card number', napoveda: 'The document the accompanying person travels with.', placeholder: 'e.g. P3456789' },
      b_beziehung: { popis: 'Relationship to the child', napoveda: 'For example grandmother, uncle, camp leader.', placeholder: 'e.g. Großmutter (grandmother)' },
      ziel: {
        popis: 'Country of travel (and transit countries)',
        napoveda: 'All countries the child travels to or through. For each, check the BMEIA travel information.',
        placeholder: 'e.g. Kroatien (über Slowenien) – Croatia (via Slovenia)',
      },
      von: { popis: 'Trip from', napoveda: 'Date of departure.' },
      bis: { popis: 'Trip until', napoveda: 'Date of return.' },
      zweck: { popis: 'Purpose of the trip (optional)', napoveda: 'For example holiday, language trip, summer camp.', placeholder: 'e.g. Sommerurlaub (summer holiday)' },
      beilagen: {
        popis: 'Which copies are you enclosing?',
        napoveda: 'Recommended: birth certificate and passport copies; if surnames differ, the marriage certificate.',
        moznosti: {
          geburtsurkunde: 'Copy of the child’s birth certificate',
          paesse: 'Copies of the parents’ passports or identity cards',
          heiratsurkunde: 'Copy of the parents’ marriage certificate',
          obsorge: 'Proof of sole custody',
        },
      },
      ort: { popis: 'Place', napoveda: 'We take the town from the address of person with custody 1.', placeholder: 'e.g. Salzburg' },
      datum: { popis: 'Date', napoveda: 'Today’s date pre-filled. You can change it by hand when the signature is certified.' },
    },
    vysvetleni: [
      'Who gives consent. The telephone numbers help the authorities at border or airport checks.',
      'With whom, where and when the child may travel. The more specific, the fewer questions at the checkpoint.',
      'Copies that allow the checkpoint to verify the details.',
    ],
    coDal: [
      'Check the requirements of the destination and transit countries in the travel information of the Austrian Foreign Ministry (BMEIA) or with the country’s embassy.',
      'Sign it – if the destination country requires it, with certification by a notary or at a district court (Bezirksgericht).',
      'For countries where German is not spoken, give the child a version in English or in the local language (e.g. the multilingual ÖAMTC template) or have it translated.',
      'Give the child: the original declaration, the child’s own passport or identity card, a copy of the birth certificate and copies of the parents’ passports.',
    ],
    kontrola: [
      'There is no general legal obligation – whether the declaration is needed depends on the country of travel. Check the [BMEIA travel information](https://www.bmeia.gv.at/reise-services/reiseinformation) for destination and transit countries; airlines and coach companies may also have their own rules.',
      'Ideally both persons with custody (Obsorge) sign. According to oesterreich.gv.at, the consent of only one parent may not be enough.',
      'If the child travels with only one parent, the parent who does not travel signs in any case.',
      'Enter names, dates of birth and passport numbers exactly as in the travel documents. Every child needs their own passport or identity card.',
      'State the specific country of travel and the exact period – a declaration “for all trips” is more likely to be questioned.',
      'Enclosures: copy of the birth certificate, copies of the parents’ passports; if surnames differ, a copy of the marriage certificate. With sole custody, enclose proof (e.g. a court decision).',
      'Certification and translation may be needed depending on the country ([oesterreich.gv.at](https://www.oesterreich.gv.at/de/themen/reisen_und_freizeit/vorschriften-fuer-jugendliche/verhaltensregeln-im-alltag-und-auf-reisen/2/Seite.1740307)). Certification: notary or district court.',
      'Abroad, the youth protection rules of the holiday country apply – the embassy or consulate of the country can provide information.',
    ],
    podpisPoznamka:
      'Some countries require a certified signature. Notaries and district courts (Bezirksgericht) can certify it – they confirm that the signature is yours. That is why you sign the declaration by hand.',
  },

  dokument: {
    nazev: 'Declaration of Consent for a Minor Child’s Travel Abroad',
    podnadpis: 'Travel authorisation by the persons with custody (Obsorge) for a trip without parents or with only one parent',
    podpisy: {
      vlevo: 'person with custody 1 (certified signature if required)',
      vpravo: 'person with custody 2 (certified signature if required)',
    },
    clanky: [
      {
        nadpis: 'Persons with Custody',
        odstavce: [
          '{{e1_name}}, born {{e1_geburt}}, travel document No. {{e1_pass}}, residing at {{e1_adresse}}, telephone {{e1_telefon}}',
          '{{e2_name}}, born {{e2_geburt}}, travel document No. {{e2_pass}}, residing at {{e2_adresse}}, telephone {{e2_telefon}}',
        ],
      },
      {
        nadpis: 'Declaration of Consent',
        odstavce: [
          'As the parent(s) with custody, I/we hereby declare my/our consent that our minor child',
          '{{k_name}}, born {{k_geburt}}, travel document No. {{k_pass}}, residing at {{k_adresse}},',
          {
            uvodVzor: 'travels (please tick):',
            moznosti: {
              elternteil: 'accompanied by the parent {{b_name}}, born {{b_geburt}}, travel document No. {{b_pass}},',
              andere: 'accompanied by {{b_name}}, born {{b_geburt}}, travel document No. {{b_pass}} ({{b_beziehung}}),',
              allein: 'alone,',
            },
          },
          'to {{ziel}}, namely in the period from {{von}} to {{bis}}, purpose of the trip: {{zweck}}.',
          'For the duration of the trip, I/we instruct the accompanying person to care for the child and, in urgent cases, to take the decisions necessary in the child’s interest, including consent to necessary medical treatment. We can be reached at the telephone numbers given above.',
        ],
      },
      {
        nadpis: 'Enclosures',
        odstavce: [
          {
            uvod: 'The following are enclosed with this declaration:',
            moznosti: {
              geburtsurkunde: 'copy of the child’s birth certificate',
              paesse: 'copies of the passports or identity cards of the persons with custody',
              heiratsurkunde: 'copy of the parents’ marriage certificate',
              obsorge: 'proof of sole custody',
            },
          },
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

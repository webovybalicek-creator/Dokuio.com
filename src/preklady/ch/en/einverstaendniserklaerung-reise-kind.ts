/**
 * English version: parental consent for a child’s trip abroad (Switzerland).
 * Original: src/obsah/ch/einverstaendniserklaerung-reise-kind.ts and src/sablony/ch/einverstaendniserklaerung-reise-kind.ts.
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-REISE-KIND', verze: '1.0' },

  nazev: 'Child Travel Consent',
  nazevA: 'the child travel consent',
  katalog: {
    popis: 'The child travels abroad without their parents or with only one parent.',
    slova: ['child travel consent', 'parental consent', 'consent letter', 'child travelling alone', 'holiday with grandparents', 'camp', 'minor', 'travel abroad', 'Einverständniserklärung', 'Reise Kind', 'Reisevollmacht'],
  },
  landing: {
    title: 'Child Travel Consent Switzerland {rok} – free PDF template',
    description:
      'Parental consent for a child’s trip abroad as recommended by the FDFA (EDA), in English: parents, companion, destination, dates. Free bilingual PDF or Word.',
    perex: 'Is your child going to the seaside with the grandparents, to a camp or on holiday with only one parent? The declaration contains everything the FDFA recommends – filled in within a few minutes.',
    obsahPopis: 'Content as recommended by the Swiss Federal Department of Foreign Affairs (FDFA; Eidgenössisches Departement für auswärtige Angelegenheiten, EDA).',
    obsah: [
      { nazev: 'Parents / legal representatives', popis: 'Names, dates of birth, ID numbers, address and telephone.' },
      { nazev: 'Consent', popis: 'Child, accompanying person, destination and transit countries, travel dates, place of stay, purpose of the trip.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Names and ID numbers exactly as in the passport or ID card.' },
      { nazev: 'Check the destination country’s rules', popis: 'At the embassy or consulate and in the FDFA travel advice.' },
      { nazev: 'Sign by hand', popis: 'If necessary, have it certified at your municipality of residence or by a notary.' },
    ],
    online: [
      'Content as recommended by the FDFA',
      'Options: with one parent, with an accompanying person, alone',
      'Links to entry requirements and travel advice',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'the child is travelling with grandparents, relatives, on a camp or with the school',
      'the child is travelling with only one parent',
      'the child is flying alone with airline supervision',
    ],
    nehodiSe: [
      'the child is moving abroad – that is not a trip',
      'the destination country requires its own form – then use that form',
      'you need the declaration in another language – ask the destination country’s embassy or consulate',
    ],
    poNadpis: 'Before departure.',
    po: [
      { nazev: 'Signature', popis: 'By hand, certified if necessary.' },
      { nazev: 'Documents', popis: 'Original of the declaration and the child’s valid passport or ID card.' },
      { nazev: 'Stay reachable', popis: 'The telephone numbers are in the declaration.' },
    ],
    faq: [
      { q: 'Is the consent declaration compulsory?', a: 'The FDFA strongly recommends it when minors travel alone or without their legal representatives. The authorities of some countries may require it on entry or exit.' },
      { q: 'What must it contain?', a: 'According to the FDFA: personal details and telephone numbers of the legal representatives, date, destination, length of stay and purpose of the trip. In addition, the child needs a valid passport or identity card (Identitätskarte).' },
      { q: 'Does the signature have to be certified?', a: 'Only if necessary – that depends on the destination country. The municipality of residence (Wohngemeinde) or a notary can certify it.' },
      { q: 'Is there an official form?', a: 'According to the FDFA, a plain white sheet of paper is enough in Switzerland, unless the destination country expressly requires a particular format. Some countries have their own form.' },
      { q: 'Where can I find the destination country’s rules?', a: 'At the destination country’s embassy or consulate in Switzerland and in the FDFA travel advice. Check the transit countries as well.' },
      { q: 'Do you store my details?', a: 'No. The declaration is put together exclusively in your browser.' },
    ],
    zakony: 'The template follows the FDFA recommendation “Reisen mit Minderjährigen” (“Travelling with minors”). Entry requirements differ from country to country and change – check them before every trip.',
    souvisejiciPopis: 'More useful documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a child travel consent online (Switzerland)',
    description: 'Parental consent for a child’s trip abroad as recommended by the FDFA, explained in English. Free PDF or Word.',
    podnadpis: 'Free · result as PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'consent declaration', g: 'consent declaration', a: 'consent declaration', l: 'consent declaration' },
    kroky: {
      eltern: { nazev: 'Parents / legal representatives', popis: 'Usually the parents with parental responsibility (elterliche Sorge). If one parent travels with the child, the other one signs.' },
      kind: { nazev: 'Child' },
      reise: { nazev: 'Trip' },
    },
    pole: {
      r1_jmeno: { popis: 'Parent 1 – first name and surname', napoveda: 'A parent or another person with parental responsibility (e.g. a guardian).', placeholder: 'e.g. Anna Muster' },
      r1_narozeni: { popis: 'Date of birth', napoveda: 'As in the identity document.' },
      r1_doklad: { popis: 'Passport or ID card number', napoveda: 'Helps the authorities check identity.', placeholder: 'e.g. X1234567' },
      r1_adresa: { popis: 'Address', napoveda: 'Home address.', placeholder: 'e.g. Bahnhofstrasse 12, 8001 Zürich' },
      r1_telefon: { popis: 'Telephone', napoveda: 'Reachable during the trip, with the +41 code.', placeholder: 'e.g. +41 79 123 45 67' },
      r2_jmeno: { popis: 'Parent 2 – first name and surname (optional)', napoveda: 'The other parent. If they travel with the child, they don’t need to sign – then leave it empty.', placeholder: 'e.g. Marco Muster' },
      r2_narozeni: { popis: 'Date of birth', napoveda: 'As in the identity document.' },
      r2_doklad: { popis: 'Passport or ID card number', napoveda: 'From the second parent’s identity document.', placeholder: 'e.g. S7654321' },
      r2_telefon: { popis: 'Telephone', napoveda: 'With the +41 code.', placeholder: 'e.g. +41 79 765 43 21' },
      d_jmeno: { popis: 'Child’s first name and surname', napoveda: 'Exactly as in the child’s passport or identity card.', placeholder: 'e.g. Lena Muster' },
      d_narozeni: { popis: 'Child’s date of birth', napoveda: 'As in the identity document.' },
      d_doklad: { popis: 'Child’s passport or ID card number', napoveda: 'Number of the document the child travels with.', placeholder: 'e.g. X7654321' },
      begleitung: {
        popis: 'Who is the child travelling with?',
        napoveda: 'The accompanying person should be named in the declaration.',
        moznosti: {
          elternteil: 'With the other parent',
          andere: 'With another person (grandparents, relatives, camp leaders …)',
          allein: 'Alone (e.g. flight with airline supervision)',
        },
      },
      o_jmeno: { popis: 'Accompanying person – first name and surname', napoveda: 'Who is travelling with the child.', placeholder: 'e.g. Rosa Muster' },
      o_narozeni: { popis: 'Accompanying person’s date of birth', napoveda: 'As in the accompanying person’s identity document.' },
      o_doklad: { popis: 'Accompanying person’s passport or ID card number', napoveda: 'The document the accompanying person travels with.', placeholder: 'e.g. X1122334' },
      o_beziehung: { popis: 'Relationship to the child', napoveda: 'E.g. grandmother, aunt, camp leader. Write in German – the text will appear in both language versions as you write it.', placeholder: 'e.g. Grossmutter (grandmother)' },
      zielland: { popis: 'Destination (and transit countries)', napoveda: 'All countries the child travels to or through. Check each country’s requirements with the FDFA or the embassy.', placeholder: 'e.g. Italien (über Österreich) – Italy (via Austria)' },
      adresse_ausland: { popis: 'Address during the stay (optional)', napoveda: 'Hotel, holiday flat or camp abroad.', placeholder: 'e.g. Hotel Mare, Via Roma 1, Rimini' },
      od: { popis: 'Departure', napoveda: 'Date of departure.' },
      do: { popis: 'Return', napoveda: 'Date of return.' },
      zweck: { popis: 'Purpose of the trip', napoveda: 'The FDFA lists the purpose of the trip as part of the declaration.', placeholder: 'e.g. Sommerferien, Sprachaufenthalt, Lager (summer holidays, language stay, camp)' },
      misto: { popis: 'Place', napoveda: 'We take the place from Parent 1’s address.', placeholder: 'e.g. Zürich' },
      datum: { popis: 'Date', napoveda: 'Pre-filled with today’s date. You can add it by hand at the certification.' },
    },
    vysvetleni: [
      'Who gives consent. The telephone numbers help the authorities at the border or the airport.',
      'With whom and where the child may travel. The more precise, the fewer questions at the border.',
    ],
    coDal: [
      'The person not accompanying the child signs by hand. If the destination country requires it or you want to be on the safe side: have the signature certified at your municipality of residence (Wohngemeinde) or by a notary.',
      'The child or the accompanying person takes the original, together with the child’s valid passport or identity card (Identitätskarte). Keep a copy at home.',
      'Check the entry requirements of the destination and transit countries with the embassy or consulate, and read the FDFA travel advice.',
      'Stay reachable during the trip – the telephone numbers are in the declaration.',
    ],
    kontrola: [
      'The FDFA strongly recommends the declaration when minors travel alone or without their legal representatives; the authorities of some countries require it on entry or exit ([EDA – Reisen mit Minderjährigen](https://www.eda.admin.ch/de/reisen-mit-minderjaehrigen)).',
      'Every country has its own rules. Ask the destination country’s embassy or consulate whether written consent is needed and in what form ([EDA – Reisedokumente, Visum und Einreise](https://www.eda.admin.ch/de/reiseinformationen)). Some countries have their own form – then use that form.',
      'Read the FDFA travel advice for the destination and transit country ([EDA – Reisen ins Ausland](https://www.eda.admin.ch/de/reisen-ins-ausland)).',
      'Copy names, dates of birth and ID numbers exactly as in the passport or identity card.',
      'State a specific destination and exact travel dates – a declaration for “anywhere, any time” is not very credible.',
      'Give telephone numbers with the country code (+41) so that border or airport authorities can reach you.',
      'The declaration applies to one trip. Moving abroad is a different matter – with joint parental responsibility (gemeinsame elterliche Sorge), the parents decide everything concerning the child jointly ([Bundesamt für Justiz](https://www.bj.admin.ch/bj/de/home/gesellschaft/kindesentfuehrung.html)).',
    ],
    podpisPoznamka: 'Sign the declaration by hand. If necessary, have the signature certified at your municipality of residence or by a notary – this is only possible with a handwritten signature on paper.',
  },

  dokument: {
    nazev: 'Declaration of Consent',
    podnadpis: 'by the parents for a minor child’s trip abroad (as recommended by the FDFA)',
    podpisy: { vlevo: 'parent / legal representative 1', vpravo: 'parent / legal representative 2' },
    clanky: [
      {
        nadpis: 'Parents / Legal Representatives',
        odstavce: [
          '{{r1_jmeno}}, born {{r1_narozeni}}, ID No. {{r1_doklad}}, residing at {{r1_adresa}}, telephone {{r1_telefon}}',
          '{{r2_jmeno}}, born {{r2_narozeni}}, ID No. {{r2_doklad}}, telephone {{r2_telefon}}',
        ],
      },
      {
        nadpis: 'Consent',
        odstavce: [
          'As holder(s) of parental responsibility, I (we) hereby consent to our minor child',
          '{{d_jmeno}}, born {{d_narozeni}}, ID No. {{d_doklad}},',
          {
            uvodVzor: 'travelling (tick one):',
            moznosti: {
              elternteil: 'accompanied by the other parent {{o_jmeno}}, born {{o_narozeni}}, ID No. {{o_doklad}},',
              andere: 'accompanied by {{o_jmeno}}, born {{o_narozeni}}, ID No. {{o_doklad}} ({{o_beziehung}}),',
              allein: 'alone,',
            },
          },
          'to {{zielland}}, from {{od}} to {{do}}, place of stay: {{adresse_ausland}}, purpose of the trip: {{zweck}}.',
          'For the duration of the trip, I (we) instruct the accompanying person or the responsible supervisor to care for the child and to take the necessary decisions in the child’s interest, including consent to urgently needed medical treatment.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: parental consent for a child’s travel abroad (Germany). Original: src/obsah/de/einverstaendniserklaerung-reise-kind.ts
 * and src/sablony/de/einverstaendniserklaerung-reise-kind.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-REISE-KIND', verze: '1.0' },

  nazev: 'Child Travel Consent',
  nazevA: 'the child travel consent form',
  katalog: {
    popis: 'A child travels abroad without both parents or with only one parent.',
    slova: ['child travel consent', 'parental consent', 'consent letter', 'travel with children', 'minor travelling alone', 'child without parents', 'holiday with grandparents', 'school trip abroad', 'holiday camp', 'Einverständniserklärung', 'Reisevollmacht'],
  },
  landing: {
    title: 'Child Travel Consent Form Germany {rok} – free PDF template',
    description:
      'Parental consent for a child’s trip abroad from Germany, following the Federal Foreign Office: child, parents, companion, route. Free bilingual PDF or Word.',
    perex: 'Is your child going to the seaside with the grandparents, to a youth camp or on holiday with only one parent? A consent form following the recommendations of the German Federal Foreign Office (Auswärtiges Amt) – filled in within minutes.',
    obsahPopis: 'Content following the recommendations of the German Federal Foreign Office.',
    obsah: [
      { nazev: 'Persons with parental responsibility', popis: 'Name, date of birth, ID number, address and telephone.' },
      { nazev: 'Consent', popis: 'Child, accompanying person, route, period, accommodation.' },
      { nazev: 'Additions', popis: 'Medical clause, copies of the birth certificate and ID documents.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Names and numbers exactly as in the ID documents.' },
      { nazev: 'Check the destination country', popis: 'Travel and safety advice of the Federal Foreign Office.' },
      { nazev: 'Sign', popis: 'By hand; have it certified if needed.' },
    ],
    online: [
      'Content following the recommendations of the Federal Foreign Office',
      'Accompanied by a parent, by another person or travelling alone',
      'Links to the entry requirements',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'the child is travelling with grandparents, relatives or on a youth camp',
      'the child is travelling with only one parent, especially if their surnames differ',
      'the child is travelling alone',
    ],
    nehodiSe: [
      'the child is moving or staying abroad permanently',
      'the destination country or the airline requires its own form – use that one instead',
    ],
    poNadpis: 'Before the trip.',
    po: [
      { nazev: 'Signatures', popis: 'From everyone with parental responsibility who is not travelling; certification depending on the destination country.' },
      { nazev: 'Documents to take along', popis: 'Original of the consent form, the child’s ID document, a copy of the birth certificate and copies of the parents’ ID documents.' },
      { nazev: 'Translation', popis: 'Have it translated into the local language if necessary.' },
    ],
    faq: [
      {
        q: 'Is the consent form mandatory?',
        a: 'Not by law. However, the German Federal Foreign Office (Auswärtiges Amt) recommends it when a child travels abroad without both parents or with only one parent – border authorities use it to check that the child is not leaving the country unlawfully.',
      },
      {
        q: 'Does the signature have to be certified?',
        a: 'According to the Federal Foreign Office, this depends on the law of the destination country – as does whether a certification from Germany (notary, municipal or town administration) is recognised.',
      },
      { q: 'What should the consent form contain?', a: 'Details of the child, details and contact information of the persons with parental responsibility, the travel route and, where applicable, the details of the accompanying person.' },
      {
        q: 'Where can I find the rules of the destination country?',
        a: 'In the travel and safety advice of the Federal Foreign Office (Reise- und Sicherheitshinweise) under “Entry requirements” (Einreisebestimmungen). Binding information is provided by the destination country’s embassy or consulate in Germany.',
      },
      { q: 'Do you store my details?', a: 'No. The document is put together only in your browser.' },
    ],
    zakony:
      'The template follows the recommendations of the German Federal Foreign Office (Auswärtiges Amt) and the Federal Police (Bundespolizei) on travelling with minors. Entry requirements of destination countries change – check them before every trip.',
    souvisejiciPopis: 'More documents for family and everyday life, also free.',
  },
  vytvorit: {
    title: 'Fill in a child travel consent form online – Germany, PDF',
    description: 'Parental consent for a child’s trip abroad following the German Federal Foreign Office: guide in English, bilingual PDF or Word for free.',
    podnadpis: 'Free · result as PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'consent form', g: 'consent form', a: 'consent form', l: 'consent form' },
    kroky: {
      eltern: { nazev: 'Persons with parental responsibility', popis: 'Usually both parents. If one parent travels with the child, the other parent’s consent is often enough.' },
      kind: { nazev: 'Child' },
      reise: { nazev: 'Trip' },
    },
    pole: {
      e1_name: { popis: 'Person with parental responsibility 1 – first name and surname', napoveda: 'Parent or guardian (Sorgeberechtigte/r) – as in the ID document.', placeholder: 'e.g. Anna Schmidt' },
      e1_geburt: { popis: 'Date of birth', napoveda: 'As in the ID document.' },
      e1_ausweis: { popis: 'ID card or passport number', napoveda: 'Helps to match the signature. Send a copy of the ID document along.', placeholder: 'e.g. L01X00T47' },
      e1_adresse: { popis: 'Address', napoveda: 'Home address.', placeholder: 'e.g. Lindenstraße 7, 10115 Berlin' },
      e1_telefon: { popis: 'Telephone (with +49)', napoveda: 'So that border authorities or the airline can reach you.', placeholder: 'e.g. +49 171 1234567' },
      e2_name: { popis: 'Person with parental responsibility 2 – first name and surname (optional)', napoveda: 'The second parent. If they travel with the child, the field can be left empty.', placeholder: 'e.g. Thomas Schmidt' },
      e2_geburt: { popis: 'Date of birth', napoveda: 'As in the ID document.' },
      e2_ausweis: { popis: 'ID card or passport number', napoveda: 'As in the second parent’s ID document.', placeholder: 'e.g. L02Y00K58' },
      e2_adresse: { popis: 'Address (if different)', napoveda: 'Only fill in if different from the one above.', placeholder: 'e.g. Gartenweg 3, 04109 Leipzig' },
      e2_telefon: { popis: 'Telephone (with +49)', napoveda: 'Reachable during the trip.', placeholder: 'e.g. +49 160 7654321' },
      k_name: { popis: 'Child’s first name and surname', napoveda: 'Exactly as in the child’s ID document.', placeholder: 'e.g. Lena Schmidt' },
      k_geburt: { popis: 'Date of birth', napoveda: 'As in the ID document.' },
      k_geburtsort: { popis: 'Place of birth', napoveda: 'As in the ID document or the birth certificate (Geburtsurkunde).', placeholder: 'e.g. Berlin' },
      k_ausweis: { popis: 'Child’s ID card or passport number', napoveda: 'The document the child travels with.', placeholder: 'e.g. C01X00T47' },
      begleitung: {
        popis: 'Who is the child travelling with?',
        napoveda: 'The accompanying person is named in the consent form.',
        moznosti: {
          elternteil: 'With the other parent',
          person: 'With another person (grandparents, relatives, camp leader …)',
          allein: 'Alone (e.g. a flight with the airline’s escort service)',
        },
      },
      b_name: { popis: 'Accompanying person – first name and surname', napoveda: 'Who is accompanying the child.', placeholder: 'e.g. Maria Schmidt' },
      b_geburt: { popis: 'Accompanying person’s date of birth', napoveda: 'As in the ID document.' },
      b_ausweis: { popis: 'ID card or passport number', napoveda: 'The document the accompanying person travels with.', placeholder: 'e.g. L03Z00M69' },
      b_beziehung: {
        popis: 'Relationship to the child',
        napoveda: 'E.g. grandmother, aunt, youth camp leader. Write it in German – the text goes into the document.',
        placeholder: 'e.g. Großmutter (grandmother)',
      },
      b_telefon: { popis: 'Accompanying person’s telephone', napoveda: 'With the country code.', placeholder: 'e.g. +49 151 2345678' },
      route: {
        popis: 'Destination and travel route',
        napoveda: 'Destination country and transit countries. Check their entry requirements. Write it in German – the text goes into the document.',
        placeholder: 'e.g. Kroatien (über Österreich und Slowenien) – Croatia via Austria and Slovenia',
      },
      unterkunft: { popis: 'Accommodation at the destination (optional)', napoveda: 'Hotel, holiday flat or host family, with address.', placeholder: 'e.g. Hotel Adria, Obala 5, Split' },
      von: { popis: 'Trip from', napoveda: 'Day of departure.' },
      bis: { popis: 'to', napoveda: 'Day of return.' },
      zusatz: {
        popis: 'Additionally (optional)',
        napoveda: 'The Federal Foreign Office recommends the copies. The medical clause makes decisions easier for the accompanying person in an emergency.',
        moznosti: {
          arzt: 'The accompanying person may arrange medical treatment in an emergency',
          geburtsurkunde: 'A copy of the birth certificate is enclosed',
          ausweise: 'Copies of the ID documents of the persons with parental responsibility are enclosed',
        },
      },
      ort: { popis: 'Place', napoveda: 'We take it from the address.', placeholder: 'e.g. Berlin' },
      datum: { popis: 'Date', napoveda: 'Today’s date is pre-filled; if the signature is certified, add it by hand if necessary.' },
    },
    vysvetleni: [
      'Who gives consent – with a telephone number so that authorities can follow up.',
      'Who may travel with whom, where and when. The more specific, the fewer questions at the border.',
    ],
    coDal: [
      'Print it out and sign by hand – everyone with parental responsibility who is not travelling. Whether certification is needed depends on the destination country.',
      'Send along: the original consent form, the child’s valid ID document, a copy of the birth certificate (especially if surnames differ) and copies of the ID documents of the persons with parental responsibility.',
      'Check the entry requirements of the destination and transit countries in the travel and safety advice of the German Federal Foreign Office (Auswärtiges Amt); binding information is provided by the embassy or consulate of the destination country in Germany.',
      'Have a translation into the local language made if necessary.',
      'Stay reachable by phone during the trip.',
    ],
    kontrola: [
      'The consent form is not required by law, but it is recommended by the [German Federal Foreign Office](https://www.auswaertiges-amt.de/de/service/fragenkatalog-node/11-kindohneeltern-606308) (Auswärtiges Amt) when a child travels abroad without both parents or with only one parent.',
      'Content according to the Federal Foreign Office: details of the child, details and contact information of the persons with parental responsibility, the travel route and, where applicable, details of adult accompanying persons.',
      'Copy names, dates of birth and ID numbers exactly from the ID documents.',
      'State specific countries and the travel period – a consent “for all trips” is of little help at the border.',
      'Certification and translation: whether they are needed and whether a German certification is recognised depends on the destination country. Check the [travel and safety advice](https://www.auswaertiges-amt.de/DE/Laenderinformationen/LaenderReiseinformationen_node.html) (Einreisebestimmungen – entry requirements) or ask the [destination country’s embassy or consulate](https://www.auswaertiges-amt.de/DE/Laenderinformationen/VertretungenFremderStaatenA-Z-Laenderauswahlseite_node.html).',
      'Some countries or airlines require their own forms – in that case use them.',
      'If one parent has sole parental responsibility, it may also be useful to bring the court decision on parental responsibility (with a translation).',
      'Further advice is available from the [Federal Police](https://bundespolizei.de/sicher-auf-reisen/passrechtliche-hinweise/reisen-mit-minderjaehrigen) (Bundespolizei).',
    ],
    podpisPoznamka:
      'According to the German Federal Foreign Office, whether the signatures should be certified and whether a certification from Germany (notary, municipal or town administration) is recognised depends on the law of the destination country. So please print the document and sign it by hand – if necessary in front of the certifying authority.',
  },

  dokument: {
    nazev: 'Letter of Consent',
    podnadpis: 'of the persons with parental responsibility (Sorgeberechtigte) for a minor child’s travel abroad',
    podpisy: { vlevo: 'person with parental responsibility 1', vpravo: 'person with parental responsibility 2' },
    clanky: [
      {
        nadpis: 'Persons with Parental Responsibility',
        odstavce: [
          '{{e1_name}}, born on {{e1_geburt}}, ID No. {{e1_ausweis}}, residing at {{e1_adresse}}, telephone {{e1_telefon}}',
          '{{e2_name}}, born on {{e2_geburt}}, ID No. {{e2_ausweis}}, residing at {{e2_adresse}}, telephone {{e2_telefon}}',
        ],
      },
      {
        nadpis: 'Consent',
        odstavce: [
          'As the person(s) with parental responsibility, I (we) hereby consent to our minor child',
          '{{k_name}}, born on {{k_geburt}} in {{k_geburtsort}}, ID/passport No. {{k_ausweis}},',
          {
            uvodVzor: 'travelling (please tick):',
            moznosti: {
              elternteil: 'accompanied by the other parent {{b_name}}, born on {{b_geburt}}, ID/passport No. {{b_ausweis}}, telephone {{b_telefon}},',
              person: 'accompanied by {{b_name}} ({{b_beziehung}}), born on {{b_geburt}}, ID/passport No. {{b_ausweis}}, telephone {{b_telefon}},',
              allein: 'unaccompanied,',
            },
          },
          'in the period from {{von}} to {{bis}} to or through: {{route}}. Accommodation: {{unterkunft}}.',
          {
            uvod: 'In addition:',
            moznosti: {
              arzt: 'For the duration of the trip, we transfer supervision of the child to the accompanying person and authorise them to arrange necessary medical treatment in urgent cases. We ask to be informed immediately in such a case.',
              geburtsurkunde: 'A copy of the child’s birth certificate is enclosed.',
              ausweise: 'Copies of the ID documents of the persons with parental responsibility are enclosed.',
            },
          },
          'We can be reached for any queries at the telephone numbers given above.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

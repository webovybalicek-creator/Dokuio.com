/**
 * English version: consent for a child's travel abroad (Poland). Original: src/obsah/pl/zgoda-na-wyjazd-dziecka.ts
 * and src/sablony/pl/zgoda-na-wyjazd-dziecka.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-ZGODA-WYJAZD-DZIECKA', verze: '1.0' },

  nazev: 'Consent for a Child to Travel Abroad',
  nazevA: 'the consent for a child to travel abroad',
  katalog: {
    popis: 'A child travelling without their parents or with one of them.',
    slova: ['child travel consent', 'parental consent', 'travel abroad', 'child', 'holidays', 'summer camp', 'travelling with a child', 'minor', 'notary', 'zgoda na wyjazd dziecka', 'zgoda rodzica'],
  },
  landing: {
    title: 'Child Travel Consent Poland {rok} – free PDF template',
    description:
      'Parents’ consent for a child to travel abroad, following gov.pl guidance: child, companion, country, dates, signature at a notary. Bilingual PDF or Word, free.',
    perex: 'Is your child going on holiday with their grandparents, to a summer camp or with one parent? A consent for a child to travel abroad (zgoda na wyjazd dziecka) following the guidance of the gov.pl portals, ready in a few minutes.',
    obsahPopis: 'Content following the guidance of the powroty.gov.pl portal.',
    obsah: [
      { nazev: 'Parents', popis: 'Full name, PESEL, identity document, phone.' },
      { nazev: 'Consent', popis: 'The child, the accompanying person, destination and transit countries, dates, purpose.' },
    ],
    kroky: [
      { nazev: 'Fill in the details', popis: 'Exactly as in the passports and identity cards.' },
      { nazev: 'Check the country’s requirements', popis: 'On the Polish Foreign Ministry (MSZ) service “Informacje dla podróżujących” (information for travellers) or at the embassy.' },
      { nazev: 'Sign at a notary', popis: 'Recommended by powroty.gov.pl.' },
    ],
    online: ['Content following gov.pl guidance', 'Options: with a parent, with another person, alone', 'Links to country requirements', 'Download as PDF and Word'],
    hodiSe: [
      'the child is travelling with grandparents, relatives, to a summer camp or with their class',
      'the child is travelling with one parent',
      'the child is flying alone with the carrier’s assistance',
    ],
    nehodiSe: [
      'the child is moving abroad – the consent of the other parent or of a court is needed',
      'the destination country requires its own form – use that form',
      'the parents disagree – the family court (sąd opiekuńczy) decides',
    ],
    poNadpis: 'Before the trip.',
    po: [
      { nazev: 'Notary', popis: 'A notary (notariusz) certifies the signature of the parent who is not travelling.' },
      { nazev: 'Documents', popis: 'The consent, a copy of the child’s birth certificate, the child’s passport or identity card, and a sworn translation (tłumaczenie przysięgłe) if needed.' },
      { nazev: 'Phone', popis: 'Be reachable on the number given in the consent during the trip.' },
    ],
    faq: [
      {
        q: 'Is the consent compulsory?',
        a: 'Polish law does not require written consent. However, travelling abroad is an important matter concerning the child, which the parents decide jointly (Article 97 § 2 of the Family and Guardianship Code – Kodeks rodzinny i opiekuńczy), and some countries and carriers may require it.',
      },
      {
        q: 'Does the signature have to be certified?',
        a: 'The powroty.gov.pl portal recommends signing before a notary with a notarial certification clause and attaching a copy of the child’s birth certificate.',
      },
      {
        q: 'Where can I check the country’s requirements?',
        a: 'On the Polish Foreign Ministry (MSZ) service “Informacje dla podróżujących”, at the embassy or consulate of the destination country and with the carrier. Check the transit countries too.',
      },
      {
        q: 'Can the Border Guard ask about the consent?',
        a: 'The Border Guard (Straż Graniczna) may carry out additional checks on children travelling alone, with one parent or with an unrelated person, to make sure they are not leaving against their parents’ will.',
      },
      { q: 'Does the consent need to be translated?', a: 'It depends on the destination country and the carrier. It is safest to also have the consent in English or in the language of the country the child is travelling to – check the requirements on the Polish Foreign Ministry website or with the consulate.' },
      { q: 'Do you store my data?', a: 'No. The consent is created only in your browser.' },
    ],
    zakony:
      'The template is based on Article 97 of the Polish Family and Guardianship Code (Kodeks rodzinny i opiekuńczy) and on the guidance of the gov.pl portals (powroty.gov.pl, Stop uprowadzeniom dzieci), the Polish Foreign Ministry and the Border Guard. Country requirements differ and change – check them before you travel.',
    souvisejiciPopis: 'Other family documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a child travel consent online – Poland, PDF',
    description: 'Guide in English for parents’ consent for a child to travel abroad, following gov.pl guidance. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'consent', g: 'consent', a: 'consent', l: 'consent' },
    kroky: {
      rodzice: { nazev: 'Parents', popis: 'Usually the parents. If the child is travelling with one parent, the other parent’s consent is enough.' },
      dziecko: { nazev: 'Child' },
      podroz: { nazev: 'Trip' },
    },
    pole: {
      r1_imie: { popis: 'Parent 1 – full name', napoveda: 'A parent or legal guardian (with a court decision).', placeholder: 'e.g. Anna Nowak' },
      r1_pesel: { popis: 'PESEL (Polish personal ID number)', napoveda: 'From the identity card (dowód osobisty).', placeholder: 'e.g. 85020254321' },
      r1_dokument: { popis: 'Identity card or passport series and number', napoveda: 'The notary will check the document anyway – enter the same one.', placeholder: 'e.g. ABC 123456' },
      r1_adres: { popis: 'Residential address', napoveda: 'Current address.', placeholder: 'e.g. ul. Polna 7/12, 00-001 Warszawa' },
      r1_telefon: { popis: 'Phone', napoveda: 'So that you can be contacted at the border or the airport. Include the country code +48.', placeholder: 'e.g. +48 600 100 200' },
      r2_imie: { popis: 'Parent 2 – full name (optional)', napoveda: 'The other parent. If they are travelling with the child, they do not need to sign the consent – leave it empty.', placeholder: 'e.g. Piotr Nowak' },
      r2_pesel: { popis: 'PESEL', napoveda: 'From the other parent’s identity card.', placeholder: 'e.g. 83030312345' },
      r2_dokument: { popis: 'Identity card or passport series and number', napoveda: 'The other parent’s document.', placeholder: 'e.g. DEF 654321' },
      r2_telefon: { popis: 'Phone', napoveda: 'With the country code +48.', placeholder: 'e.g. +48 600 300 400' },
      d_imie: { popis: 'Child’s full name', napoveda: 'Exactly as in the child’s passport or identity card.', placeholder: 'e.g. Zofia Nowak' },
      d_urodzenie: { popis: 'Date of birth', napoveda: 'From the child’s document.' },
      d_pesel: { popis: 'Child’s PESEL', napoveda: 'From the child’s document.', placeholder: 'e.g. 15210112345' },
      d_dokument: { popis: 'Child’s passport or identity card number', napoveda: 'The document the child is travelling with.', placeholder: 'e.g. EA 1234567' },
      opieka: {
        popis: 'Who is the child travelling with',
        napoveda: 'The accompanying person must be named in the consent with their full name.',
        moznosti: {
          rodzic: 'With the other parent',
          inna: 'With another person (grandparents, relatives, camp leader…)',
          samo: 'Alone (e.g. a flight with the carrier’s assistance)',
        },
      },
      o_imie: { popis: 'Accompanying person – full name', napoveda: 'Who looks after the child during the trip.', placeholder: 'e.g. Maria Kowalska' },
      o_urodzenie: { popis: 'Date of birth of the accompanying person', napoveda: 'From their document.' },
      o_dokument: { popis: 'Document number of the accompanying person', napoveda: 'The passport or identity card they are travelling with.', placeholder: 'e.g. GHI 112233' },
      o_relacja: { popis: 'Relationship to the child', napoveda: 'E.g. grandmother, aunt, camp leader. Write it in Polish – the text goes into both language versions exactly as you write it.', placeholder: 'e.g. babcia (grandmother)' },
      kraj: {
        popis: 'Destination country (and transit countries)',
        napoveda: 'All countries the child is going to or passing through. Check the requirements of each on the Polish Foreign Ministry website.',
        placeholder: 'e.g. Chorwacja (przez Czechy, Austrię i Słowenię) – Croatia (via Czechia, Austria and Slovenia)',
      },
      od: { popis: 'Departure', napoveda: 'Date of departure.' },
      do: { popis: 'Return', napoveda: 'Date of return.' },
      cel: { popis: 'Purpose of the trip (optional)', napoveda: 'E.g. holidays, summer camp, school exchange.', placeholder: 'e.g. wakacje letnie (summer holidays)' },
      misto: { popis: 'Town or city', napoveda: 'We fill it in from the parent’s address.', placeholder: 'e.g. Warszawa' },
      datum: { popis: 'Date', napoveda: 'We have filled in today’s date. You can correct it at the notary.' },
    },
    vysvetleni: [
      'Who gives the consent. The phone number helps officials at the border or the airport.',
      'Who is travelling, with whom, where and when. The more specific, the fewer questions at the border.',
    ],
    coDal: [
      'The parent (or parents) not travelling with the child signs the consent before a notary (notariusz) – the notary certifies the signature.',
      'Attach a short copy of the child’s birth certificate (skrócony odpis aktu urodzenia). When travelling outside Poland, it is worth having a sworn translation (tłumaczenie przysięgłe) into the language of the destination country.',
      'The child must have their own valid document: a passport, or within the EU an identity card is enough. Check the expiry date.',
      'Check the requirements of the destination and transit countries on the Polish Foreign Ministry (MSZ) service “Informacje dla podróżujących”, with the carrier or at the consulate.',
    ],
    kontrola: [
      'Polish law does not require written consent, but travelling abroad is an important matter concerning the child, which the parents decide jointly, and if they cannot agree – the family court (sąd opiekuńczy, Article 97 § 2 of the Family and Guardianship Code).',
      'The Border Guard (Straż Graniczna) may carry out additional checks on children travelling alone, with one parent or with an unrelated person, to make sure they are not leaving against their parents’ will – [Straż Graniczna](https://www.nadwislanski.strazgraniczna.pl/wis/aktualnosci/41816,Dziecko-w-podrozy.html).',
      'Requirements differ between countries and there are no uniform rules in Europe. Check the destination and transit countries on the service [MSZ – Informacje dla podróżujących](https://www.gov.pl/web/dyplomacja/informacje-dla-podrozujacych) or at the embassy.',
      'Copy the details of the child and the accompanying person exactly from the travel documents: full name, date of birth, passport or identity card number.',
      'Enter a specific country and travel dates – consent “to anywhere, at any time” may raise doubts.',
      'Moving abroad permanently or changing the child’s place of residence abroad requires the consent of the other parent or of a court – this template is for trips.',
    ],
    podpisPoznamka:
      'The powroty.gov.pl portal recommends signing the consent before a notary with a notarial certification clause (klauzula notarialna). So print the consent and sign it by hand at the notary – not on screen.',
  },

  dokument: {
    nazev: 'Consent for a Child to Travel Abroad',
    podnadpis: 'consent of the parents (legal guardians) for a minor to travel abroad',
    podpisy: { vlevo: 'parent / legal guardian 1 (certified signature)', vpravo: 'parent / legal guardian 2 (certified signature)' },
    clanky: [
      {
        nadpis: 'Parents (Legal Guardians)',
        odstavce: [
          '{{r1_imie}}, PESEL {{r1_pesel}}, identity document {{r1_dokument}}, residing at {{r1_adres}}, tel. {{r1_telefon}}',
          '{{r2_imie}}, PESEL {{r2_pesel}}, identity document {{r2_dokument}}, tel. {{r2_telefon}}',
        ],
      },
      {
        nadpis: 'Consent',
        odstavce: [
          'as a parent (parents) / legal guardian, I (we) consent to the travel of the minor child',
          '{{d_imie}}, born on {{d_urodzenie}}, PESEL {{d_pesel}}, travel document number {{d_dokument}},',
          {
            uvodVzor: 'with whom (tick one option):',
            moznosti: {
              rodzic: 'in the care of the other parent {{o_imie}}, born on {{o_urodzenie}}, document number {{o_dokument}},',
              inna: 'in the care of {{o_imie}}, born on {{o_urodzenie}}, document number {{o_dokument}} ({{o_relacja}}),',
              samo: 'without an accompanying person,',
            },
          },
          'to the country: {{kraj}}, in the period from {{od}} to {{do}}, for the purpose of: {{cel}}.',
          'For the duration of the trip, I (we) authorise the accompanying person to take care of the child and to make the necessary decisions in the child’s interest, including consent to necessary medical assistance.',
          'Annex: short copy of the child’s birth certificate.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

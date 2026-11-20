/**
 * English version: parental consent for a minor travelling abroad (Hungary).
 * Original: src/obsah/hu/hozzajarulo-nyilatkozat-kiskoru-utazas.ts and src/sablony/hu/hozzajarulo-nyilatkozat-kiskoru-utazas.ts.
 * The Hungarian text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'HU-KISKORU-UTAZAS', verze: '1.0' },

  nazev: 'Parental Consent for a Child Travelling Abroad',
  nazevA: 'the parental consent for a child travelling abroad',
  katalog: {
    popis: 'When a child travels abroad with a grandparent, with one parent, with a camp or alone.',
    slova: [
      'parental consent letter',
      'child travel consent form',
      'minor travelling abroad',
      'child travelling with grandparents',
      'child travelling alone',
      'camp abroad',
      'szülői hozzájáruló nyilatkozat',
      'kiskorú külföldre utazása',
    ],
  },
  landing: {
    title: 'Child Travel Consent Hungary {rok} – free PDF template',
    description:
      'Parental consent for a child travelling abroad from Hungary, in English: child, companion, country, dates and two witnesses. Bilingual PDF or Word, free.',
    perex: 'To the seaside with grandma, to a camp or abroad with one parent? The declaration is ready in a few minutes and helps at the border and with the airline.',
    obsahPopis: 'What the declaration contains.',
    obsah: [
      { nazev: 'Parents', popis: 'Name, place and date of birth, document number, address, phone.' },
      { nazev: 'Consent', popis: 'Child, companion, destination and transit countries, dates and purpose.' },
      { nazev: 'Witnesses', popis: 'Name, address and signature of two witnesses.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'Names and document numbers exactly as in the travel documents.' },
      { nazev: 'Check the destination', popis: 'In the travel advice of the Consular Service (Konzuli Szolgálat) and with the airline.' },
      { nazev: 'Sign it', popis: 'Before two witnesses, or at a notary if the destination country requires certification.' },
    ],
    online: ['Companion: the other parent, another person or travelling alone', 'Fields for witnesses', 'Link to the entry requirements of destination countries', 'Download as PDF and Word'],
    hodiSe: [
      'the child is travelling abroad with a grandparent, a relative, a camp or the school',
      'the child is travelling with only one parent, especially if they have different surnames',
      'the child is travelling alone, for example with the airline’s escort service',
    ],
    nehodiSe: [
      'the child is moving abroad or staying there for a long period – this requires the other parent’s consent or a decision of the guardianship authority (gyámhivatal)',
      'the destination country or the airline requires its own form – use that one',
      'parental consent is needed to apply for the child’s passport – it is given during the passport application',
    ],
    poNadpis: 'Before the trip.',
    po: [
      { nazev: 'Signature', popis: 'The parent who is not travelling with the child signs it, before two witnesses or at a notary.' },
      { nazev: 'Documents', popis: 'The original declaration and the child’s valid travel document.' },
      { nazev: 'Contact', popis: 'The phone number is in the declaration – keep the phone switched on during the trip.' },
    ],
    faq: [
      {
        q: 'Is parental consent compulsory?',
        a: 'Under Hungarian law, with joint parental custody, the other parent’s consent is not compulsory for a short trip. However, other countries, transit countries or airlines may ask for it, so it is advisable to carry one if the child is not travelling with both parents.',
      },
      {
        q: 'Does it need to be certified?',
        a: 'With the signatures of two witnesses, the declaration is a private document with full probative force (teljes bizonyító erejű magánokirat). If the destination country asks for a certified or translated declaration, arrange it with a notary.',
      },
      {
        q: 'Where can I check the destination country’s requirements?',
        a: 'In the country-by-country travel advice of the Consular Service (Konzuli Szolgálat, Ministry of Foreign Affairs) or at the destination country’s embassy. Also check the transit countries and the airline’s rules.',
      },
      {
        q: 'Is the other parent’s consent needed if the child moves abroad?',
        a: 'Yes. A long stay or settling abroad requires the other parent’s consent; if they do not give it, the guardianship authority may decide.',
      },
      { q: 'Do you store my details?', a: 'No. The declaration is created only in your browser.' },
    ],
    zakony:
      'The template is based on the Hungary information of the European e-Justice Portal (lawful removal of children abroad) and the travel advice of the Consular Service. Destination country requirements differ and change – always check them before travelling.',
    souvisejiciPopis: 'Other useful documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a child travel consent online – Hungary, PDF',
    description: 'Guide in English for a parental consent for a child travelling abroad (Hungary), with companion and witnesses. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'declaration', g: 'declaration', a: 'declaration', l: 'declaration' },
    podpisPoznamka:
      'Sign the declaration by hand, before two witnesses or at a notary – this makes it more credible at the border and with the airline. If the destination country asks for a certified or translated declaration, arrange that too.',
    kroky: {
      szulok: { nazev: 'Parents (legal representatives)', popis: 'Usually the parents. If one parent accompanies the child, the other parent’s declaration is enough.' },
      gyermek: { nazev: 'Child' },
      utazas: { nazev: 'Trip' },
      tanuk: { nazev: 'Witnesses and signature', popis: 'With the signatures of two witnesses, the declaration is a private document with full probative force. No witnesses are needed at a notary.' },
    },
    pole: {
      sz1_nev: { popis: 'Parent 1 – name', napoveda: 'A parent or another legal representative (e.g. a guardian). As stated in the identity card.', placeholder: 'e.g. Kovács Anna' },
      sz1_szul: { popis: 'Place and date of birth', napoveda: 'As in the identity card.', placeholder: 'e.g. Budapest, 1985. 06. 21.' },
      sz1_okmany: { popis: 'Identity card or passport number', napoveda: 'Helps the authorities identify you.', placeholder: 'e.g. 123456AB' },
      sz1_cim: { popis: 'Address', napoveda: 'As in the address card (lakcímkártya).', placeholder: 'e.g. 1052 Budapest, Váci utca 10.' },
      sz1_tel: { popis: 'Phone number', napoveda: 'So that you can be reached at the border or the airport. Include the country code.', placeholder: 'e.g. +36 30 123 4567' },
      sz2_nev: { popis: 'Parent 2 – name (optional)', napoveda: 'The other parent. If they accompany the child, they do not need to sign – in that case leave this blank.', placeholder: 'e.g. Kovács Péter' },
      sz2_szul: { popis: 'Place and date of birth', napoveda: 'As in the identity card.', placeholder: 'e.g. Debrecen, 1983. 02. 14.' },
      sz2_okmany: { popis: 'Identity card or passport number', napoveda: 'As in the second parent’s document.', placeholder: 'e.g. 654321CD' },
      sz2_tel: { popis: 'Phone number', napoveda: 'With the country code.', placeholder: 'e.g. +36 20 765 4321' },
      gy_nev: { popis: 'Child’s name', napoveda: 'Exactly as stated in the child’s travel document.', placeholder: 'e.g. Kovács Bence' },
      gy_szul: { popis: 'Place and date of birth', napoveda: 'As in the travel document.', placeholder: 'e.g. Budapest, 2015. 08. 03.' },
      gy_okmany: { popis: 'Passport or identity card number', napoveda: 'The number of the document the child is travelling with.', placeholder: 'e.g. BE1234567' },
      kiseret: {
        popis: 'Who is the child travelling with?',
        napoveda: 'The companion must be named.',
        moznosti: {
          szulo: 'With the other parent',
          mas: 'With another person (grandparent, relative, camp leader, teacher…)',
          egyedul: 'Alone (e.g. with the airline’s escort service)',
        },
      },
      k_nev: { popis: 'Companion’s name', napoveda: 'The person travelling with the child.', placeholder: 'e.g. Kovács Mária' },
      k_szul: { popis: 'Companion’s place and date of birth', napoveda: 'As in the companion’s document.', placeholder: 'e.g. Eger, 1958. 11. 02.' },
      k_okmany: { popis: 'Companion’s document number', napoveda: 'The passport or identity card the companion is travelling with.', placeholder: 'e.g. 112233EF' },
      k_viszony: { popis: 'Relationship to the child', napoveda: 'E.g. grandmother, aunt, camp leader. Write it in Hungarian – the text goes into both language versions.', placeholder: 'e.g. nagymama (grandmother)' },
      orszag: {
        popis: 'Destination country (and transit countries)',
        napoveda: 'Every country the child is travelling to or through. Check the entry requirements of each one.',
        placeholder: 'e.g. Horvátország (Szlovénián át) – Croatia (via Slovenia)',
      },
      tol: { popis: 'Departure', napoveda: 'The first day of the trip.' },
      ig: { popis: 'Return', napoveda: 'The last day of the trip.' },
      cel: { popis: 'Purpose of the trip (optional)', napoveda: 'E.g. holiday, camp, school trip.', placeholder: 'e.g. nyári nyaralás (summer holiday)' },
      t1_jmeno: { popis: 'Name of witness 1', napoveda: 'Cannot be the declaring parent.', placeholder: 'e.g. Horváth Gábor' },
      t1_adresa: { popis: 'Address of witness 1', napoveda: 'The witness’s address.', placeholder: 'e.g. 1052 Budapest, Petőfi utca 2.' },
      t2_jmeno: { popis: 'Name of witness 2', napoveda: 'Cannot be the declaring parent.', placeholder: 'e.g. Varga Zsófia' },
      t2_adresa: { popis: 'Address of witness 2', napoveda: 'The witness’s address.', placeholder: 'e.g. 1137 Budapest, Pozsonyi út 7.' },
      misto: { popis: 'Town', napoveda: 'Where the declaration is signed.', placeholder: 'e.g. Budapest' },
      datum: { popis: 'Date', napoveda: 'We have entered today’s date; at a notary the date of certification is also fine.' },
    },
    vysvetleni: [
      'Who gives the consent. The phone number helps if you are contacted from the border or the airport.',
      'With whom, where and when the child may travel. The more specific, the fewer questions at the border.',
      'The witnesses confirm that the parent signed the declaration in their presence.',
    ],
    coDal: [
      'The declaration is signed by the parent (or parents) not travelling with the child – before two witnesses or at a notary.',
      'The child or the companion should carry the original declaration and the child’s valid travel document; it is worth taking a copy of the birth certificate (születési anyakönyvi kivonat) as well.',
      'Check the entry requirements of the destination and transit countries in the travel advice of the Consular Service (Konzuli Szolgálat), and ask the airline too.',
      'If the destination country asks for a declaration in a foreign language, translated or certified, arrange this before departure (e.g. at a notary).',
    ],
    kontrola: [
      'Under Hungarian law, with joint parental custody, the other parent’s consent is not compulsory for a short (not long-term) trip – but it is required for a long stay or settling abroad ([e-justice](https://e-justice.europa.eu/pdf-export/2454_hu)).',
      'Other countries, transit countries and airlines may be stricter – check the [travel advice of the Consular Service](https://konzinfo.mfa.gov.hu/utazas/utazasi-tanacsok-orszagonkent) for the destination country.',
      'The declaration is especially useful if the child is not travelling with both parents but with a grandparent, a relative, a group or alone, or if the child’s and the parent’s names differ.',
      'Write the names and document numbers exactly as they appear in the passport or identity card.',
      'State a specific country and period – a general (“anywhere, any time”) declaration may be rejected.',
      'With the signatures of two witnesses (stating their names and addresses), the declaration becomes a private document with full probative force (teljes bizonyító erejű magánokirat); notarial certification is even stronger. The declaring parent cannot be a witness.',
      'Moving abroad or a long stay requires the other parent’s consent; if they do not give it, the guardianship authority (gyámhivatal) may decide. This template is for travel.',
    ],
  },

  dokument: {
    nazev: 'Parental Consent for a Minor Travelling Abroad',
    podnadpis: 'consent of the legal representative(s) to a minor child travelling abroad',
    podpisy: { vlevo: 'parent 1 / legal representative', vpravo: 'parent 2 / legal representative' },
    clanky: [
      {
        nadpis: 'Declaring Parents (Legal Representatives)',
        odstavce: [
          '{{sz1_nev}}, place and date of birth: {{sz1_szul}}, document number: {{sz1_okmany}}, address: {{sz1_cim}}, phone: {{sz1_tel}}',
          '{{sz2_nev}}, place and date of birth: {{sz2_szul}}, document number: {{sz2_okmany}}, phone: {{sz2_tel}}',
        ],
      },
      {
        nadpis: 'Consent',
        odstavce: [
          'as the legal representative(s) of the minor child, I (we) consent to',
          '{{gy_nev}} (place and date of birth: {{gy_szul}}, travel document number: {{gy_okmany}})',
          {
            uvodVzor: 'travelling abroad (tick one):',
            moznosti: {
              szulo: 'travelling abroad accompanied by the other parent, {{k_nev}} (place and date of birth: {{k_szul}}, document number: {{k_okmany}})',
              mas: 'travelling abroad accompanied by {{k_nev}} (place and date of birth: {{k_szul}}, document number: {{k_okmany}}, the child’s {{k_viszony}})',
              egyedul: 'travelling abroad alone',
            },
          },
          'to the following country (countries): {{orszag}}, between {{tol}} and {{ig}}, purpose of the trip: {{cel}}.',
          'For the duration of the trip, I (we) entrust the companion with the supervision of the child and with taking urgent decisions necessary in the child’s interest, including consent to any necessary medical care.',
        ],
      },
      {
        nadpis: 'Witnesses',
        odstavce: [
          'Before us as witnesses:',
          '**Witness 1:** {{t1_jmeno}}, address: {{t1_adresa}}, signature: ………………………………',
          '**Witness 2:** {{t2_jmeno}}, address: {{t2_adresa}}, signature: ………………………………',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

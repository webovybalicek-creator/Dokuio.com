/**
 * English version: notice of termination of a tenancy agreement (Poland). Original: src/obsah/pl/wypowiedzenie-umowy-najmu.ts
 * and src/sablony/pl/wypowiedzenie-umowy-najmu.ts. The Polish text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'PL-WYPOWIEDZENIE-NAJEM', verze: '1.0' },

  nazev: 'Tenancy Termination Notice',
  nazevA: 'the tenancy termination notice',
  katalog: {
    popis: 'Notice by the tenant, 3 months to the end of a month.',
    slova: ['tenancy termination', 'end a tenancy', 'notice to landlord', 'tenant', 'moving out', 'notice period', 'flat rental', 'wypowiedzenie umowy najmu', 'wypowiedzenie najmu'],
  },
  landing: {
    title: 'Tenancy Termination Notice Poland {rok} – free PDF template',
    description:
      'Notice of termination by the tenant in Poland: indefinite term (3 months, Article 688 of the Civil Code) or fixed term under the agreement. Bilingual PDF or Word, free.',
    perex: 'Moving out? A notice of termination of the tenancy agreement (wypowiedzenie umowy najmu) with the correct notice period and a request to return the deposit (kaucja).',
    obsahPopis: 'Notice by the tenant (Articles 688 and 673 of the Polish Civil Code – Kodeks cywilny).',
    obsah: [
      { nazev: 'Landlord', popis: 'Who you deliver the notice to.' },
      { nazev: 'Termination', popis: 'The flat, the agreement, the basis, return of the deposit.' },
    ],
    kroky: [
      { nazev: 'Choose the type of agreement', popis: 'Fixed term or indefinite term.' },
      { nazev: 'Download and sign', popis: 'PDF or Word, free.' },
      { nazev: 'Deliver it', popis: 'By registered post or in person against a signature.' },
    ],
    online: ['Text depends on the type of agreement', 'Approximate end of the tenancy in your calendar', 'Download as PDF and Word'],
    hodiSe: [
      'you are a tenant and want to move out',
      'an agreement for an indefinite term',
      'a fixed-term agreement with a termination clause',
    ],
    nehodiSe: [
      'you are the landlord – a landlord can terminate a tenancy only on statutory grounds',
      'you want to end the tenancy immediately – propose a mutual agreement (porozumienie stron)',
    ],
    poNadpis: 'After delivery.',
    po: [
      { nazev: 'Notice period', popis: 'To the end of the calendar month.' },
      { nazev: 'Returning the flat', popis: 'With a handover report (protokół zdawczo-odbiorczy).' },
      { nazev: 'Deposit', popis: 'Within one month of vacating the flat.' },
    ],
    faq: [
      {
        q: 'What is the notice period?',
        a: 'For an agreement for an indefinite term with rent payable monthly – three months in advance, to the end of a calendar month, unless the agreement provides for a shorter period.',
      },
      {
        q: 'Can I terminate a fixed-term agreement?',
        a: 'Only if the agreement specifies such cases (Article 673 § 3 of the Civil Code). Enter the ground from the agreement.',
      },
      { q: 'Do you store my data?', a: 'No. The notice is created only in your browser.' },
    ],
    zakony: 'The template is based on Articles 673 and 688 of the Polish Civil Code and Article 6 of the Act on the Protection of Tenants’ Rights (ustawa o ochronie praw lokatorów).',
    souvisejiciPopis: 'Other housing documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a tenancy termination notice online – Poland, PDF',
    description: 'Guide in English for a tenant’s notice of termination under the Polish Civil Code. Bilingual PDF or Word, free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      strony: { nazev: 'Tenant and landlord' },
      najem: { nazev: 'Tenancy' },
    },
    pole: {
      n_imie: { popis: 'Tenant – full name', napoveda: 'As in the agreement.', placeholder: 'e.g. Anna Nowak' },
      n_kontakt: { popis: 'Phone or e-mail', napoveda: 'To arrange the return of the flat.', placeholder: 'e.g. anna@email.pl' },
      w_imie: { popis: 'Landlord – full name', napoveda: 'Who you deliver the notice to.', placeholder: 'e.g. Jan Kowalski' },
      w_adres: { popis: 'Landlord’s address', napoveda: 'Address for delivery.', placeholder: 'e.g. ul. Długa 12, 00-001 Warszawa' },
      lokal: { popis: 'Address of the flat', napoveda: 'As in the agreement.', placeholder: 'e.g. ul. Polna 7/12, Warszawa' },
      umowa_data: { popis: 'Date of the tenancy agreement', napoveda: 'When you signed the agreement.' },
      rodzaj: {
        popis: 'The agreement is concluded',
        napoveda: 'Check your agreement.',
        moznosti: { nieoznaczony: 'For an indefinite term', oznaczony: 'For a fixed term' },
      },
      podstawa: {
        popis: 'Ground for termination from the agreement',
        napoveda: 'Which clause of the agreement allows termination, and why. Write it in Polish – the text goes into both language versions exactly as you write it.',
        placeholder: 'e.g. § 7 ust. 2 umowy – zmiana miejsca pracy od 1.02.2027 (§ 7(2) of the agreement – change of workplace from 1.02.2027)',
      },
      konto: { popis: 'Account for the deposit refund (optional)', napoveda: 'Where the landlord should return the deposit.', placeholder: 'PL00 0000 0000 0000 0000 0000 0000' },
      miejsce: { popis: 'Place', napoveda: 'Town or city.', placeholder: 'e.g. Warszawa' },
      data: { popis: 'Date', napoveda: 'We have filled in today’s date.' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Deliver the notice in a way you can prove: by registered post with confirmation of receipt or in person against a signature on your copy.',
      'The notice period runs to the end of a calendar month – the earlier in the month you deliver it, the better.',
      'Arrange the return of the flat and draw up a handover report (protokół zdawczo-odbiorczy).',
    ],
    kontrola: [
      'The notice must be in writing (with a handwritten signature).',
      'An agreement for an indefinite term with rent payable monthly is terminated three months in advance, to the end of a calendar month (Article 688 of the Civil Code), unless the agreement provides for a shorter period.',
      'A fixed-term agreement can be terminated only in the cases specified in the agreement (Article 673 § 3 of the Civil Code). Check your agreement and state the ground.',
      'All tenants sign.',
    ],
    pripominky: {
      'Koniec najmu po wypowiedzeniu (orientacyjnie)': {
        nazev: 'End of the tenancy after notice (approximate)',
        popis: 'Assuming delivery on the date of signing and a 3-month notice period.',
      },
      'Umówić zwrot mieszkania i protokół': { nazev: 'Arrange the return of the flat and the handover report' },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of Tenancy Agreement',
    podnadpis: 'notice by the tenant under Article 688 of the Civil Code (Kodeks cywilny)',
    podpisy: { vlevo: 'tenant', vpravo: 'received by the landlord (date and signature)' },
    clanky: [
      { nadpis: 'Landlord', odstavce: ['{{w_imie}}, {{w_adres}}'] },
      {
        nadpis: 'Notice of Termination of Tenancy Agreement',
        odstavce: [
          'I, {{n_imie}}, contact {{n_kontakt}}, as the Tenant of the premises {{lokal}} under the tenancy agreement dated {{umowa_data}},',
          {
            uvodVzor: 'hereby terminate the agreement (tick):',
            moznosti: {
              nieoznaczony: 'hereby terminate the tenancy agreement concluded for an indefinite term, observing the three-month notice period to the end of a calendar month (Article 688 of the Civil Code).',
              oznaczony: 'hereby terminate the tenancy agreement concluded for a fixed term on the basis of the provisions of the agreement (Article 673 § 3 of the Civil Code): {{podstawa}}',
            },
          },
          'I request that a date for the return of the premises be agreed and that the deposit be returned within one month of vacating the premises to account No. {{konto}}.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

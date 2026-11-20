/**
 * English version: tenant's notice of termination of a flat lease (Slovakia). Original: src/obsah/sk/vypoved-z-najmu.ts
 * and src/sablony/sk/vypoved-z-najmu.ts. The Slovak text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'SK-VYPOVED-NAJOM', verze: '1.0' },

  nazev: 'Notice of Termination of a Flat Lease',
  nazevA: 'the notice of termination of a flat lease',
  katalog: {
    popis: 'Tenant’s notice of termination with a three-month notice period.',
    slova: ['notice of termination', 'end a lease', 'terminate tenancy', 'tenant', 'moving out', 'notice period', 'flat', 'výpoveď z nájmu', 'výpoveď nájomnej zmluvy', 'výpovedná lehota'],
  },
  landing: {
    title: 'Notice to End a Flat Lease Slovakia {rok} – free PDF template',
    description:
      'Tenant’s notice ending a flat lease in Slovakia under Section 710 OZ: three months’ notice, no reason needed, deposit refund. Free bilingual PDF or Word.',
    perex: 'Moving out? A tenant may terminate the lease without giving a reason; the notice period is three months.',
    obsahPopis: 'A tenant’s notice of termination (výpoveď) under Section 710 of the Civil Code (Občiansky zákonník).',
    obsah: [
      { nazev: 'Landlord', popis: 'Who you are delivering the notice to.' },
      { nazev: 'Notice of termination', popis: 'Flat, agreement, notice period and refund of the security deposit.' },
    ],
    kroky: [
      { nazev: 'Fill in', popis: 'The flat and the date of the agreement.' },
      { nazev: 'Download and sign', popis: 'PDF or Word for free.' },
      { nazev: 'Deliver with proof', popis: 'By registered post or in person against a signature.' },
    ],
    online: ['Correct wording under the law', 'Approximate end of the lease in your calendar', 'Download as PDF and Word'],
    hodiSe: ['you are a tenant and want to move out', 'a lease under the Civil Code'],
    nehodiSe: [
      'you are the landlord – a landlord can give the tenant notice only on the grounds in Section 711',
      'a short-term lease under Act No. 98/2014 Coll.',
      'you want to end it sooner – agree with the landlord in writing',
    ],
    poNadpis: 'After delivery.',
    po: [
      { nazev: 'Notice period', popis: 'Three months from the first day of the month after delivery.' },
      { nazev: 'Handing over the flat', popis: 'With a handover report (preberací protokol).' },
      { nazev: 'Security deposit', popis: 'Refunded after the lease ends.' },
    ],
    faq: [
      { q: 'How long is the notice period?', a: 'Three months. It starts on the first day of the month following the month in which the notice was delivered.' },
      { q: 'Do I have to give a reason?', a: 'No. The Civil Code does not set any grounds for termination by the tenant.' },
      { q: 'Do you store my details?', a: 'No. The notice is created directly in your browser.' },
    ],
    zakony: 'The template is based on Section 710 of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník; in force until 30 June 2027).',
    souvisejiciPopis: 'More housing documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a notice to end a flat lease online – Slovakia, PDF',
    description: 'Guide in English for a tenant’s notice of termination of a flat lease in Slovakia. Bilingual PDF or Word for free.',
    podnadpis: 'Free · result in PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice', g: 'notice', a: 'notice', l: 'notice' },
    kroky: {
      strany: { nazev: 'Tenant and landlord' },
      najom: { nazev: 'Lease' },
    },
    pole: {
      k_jmeno: { popis: 'Tenant – first name and surname', napoveda: 'As in the lease agreement.', placeholder: 'e.g. Petra Kováčová' },
      k_narozeni: { popis: 'Date of birth', napoveda: 'According to the identity card (občiansky preukaz).' },
      k_kontakt: { popis: 'Phone or e-mail', napoveda: 'For arranging the handover of the flat.', placeholder: 'e.g. petra@email.sk' },
      p_jmeno: { popis: 'Landlord – first name and surname', napoveda: 'Who you are delivering the notice to.', placeholder: 'e.g. Ján Novák' },
      p_adresa: { popis: 'Landlord’s address', napoveda: 'Address for delivery.', placeholder: 'e.g. Hlavná 12, 811 01 Bratislava' },
      byt: { popis: 'Flat (address and flat number)', napoveda: 'According to the lease agreement.', placeholder: 'e.g. Mierová 25, Bratislava, byt č. 12' },
      zmluva_datum: { popis: 'Date of the lease agreement', napoveda: 'When you signed the agreement.' },
      ucet: { popis: 'IBAN for the refund of the security deposit (optional)', napoveda: 'Where the landlord should return your deposit (kaucia).', placeholder: 'SK12 0000 0000 0000 0000 0000' },
      misto: { popis: 'Place (town)', napoveda: 'Where you are signing the notice.', placeholder: 'e.g. Bratislava' },
      datum: { popis: 'Date', napoveda: 'We pre-filled today.' },
    },
    vysvetleni: ['', ''],
    coDal: [
      'Deliver the notice to the landlord in a way you can prove: by registered post with proof of delivery, or in person against a signature on a copy.',
      'The notice period (3 months) starts on the first day of the month after delivery.',
      'Agree on a date for handing over the flat and draw up a handover report (preberací protokol).',
      'You pay rent until the end of the notice period. The landlord will return your security deposit (zábezpeka) after the lease ends.',
    ],
    kontrola: [
      'The notice must be in writing and must be delivered to the landlord – delivery is what counts, not sending.',
      'A tenant may terminate the lease without giving a reason; the notice period is three months (Section 710(3)).',
      'If you concluded the lease under the Act on Short-Term Lease of Flats (No. 98/2014 Coll.), different rules apply – check your agreement.',
      'All tenants sign; in the case of a joint lease by spouses, both sign.',
      'Note: from 1 July 2027 a new Civil Code (Act No. 260/2026 Coll.) applies, with new rules on leases. This template reflects the law in force until 30 June 2027.',
    ],
    pripominky: {
      'Koniec nájmu po výpovedi (orientačne)': { nazev: 'End of the lease after notice (approximate)', popis: 'Calculated assuming the notice is delivered on the day of signing.' },
      'Dohodnúť odovzdanie bytu a protokol': { nazev: 'Arrange the handover of the flat and the report' },
    },
  },

  dokument: {
    nazev: 'Notice of Termination of a Flat Lease',
    podnadpis: 'tenant’s notice under Section 710 of Act No. 40/1964 Coll., the Civil Code (Občiansky zákonník)',
    podpisy: { vlevo: 'tenant', vpravo: 'received by the landlord (date and signature)' },
    clanky: [
      { nadpis: 'Landlord', odstavce: ['{{p_jmeno}}, {{p_adresa}}'] },
      {
        nadpis: 'Notice of Termination of a Flat Lease',
        odstavce: [
          'I, {{k_jmeno}}, date of birth {{k_narozeni}}, contact {{k_kontakt}}, as the tenant of the flat {{byt}} under the lease agreement dated {{zmluva_datum}},',
          'hereby terminate the lease of the flat under Section 710 of the Civil Code.',
          'The notice period is three months and starts on the first day of the month following the delivery of this notice.',
          'I request that we agree on a date for handing over the flat and that the security deposit be refunded after the lease ends to the account IBAN {{ucet}}.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

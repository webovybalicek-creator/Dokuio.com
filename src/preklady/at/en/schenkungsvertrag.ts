/**
 * English version: gift agreement (Austria). Original: src/obsah/at/schenkungsvertrag.ts
 * and src/sablony/at/schenkungsvertrag.ts (based on src/sablony/de/schenkungsvertrag.ts).
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-SCHENKUNG', verze: '1.0' },

  nazev: 'Gift Agreement',
  nazevA: 'the gift agreement',
  katalog: {
    popis: 'Give money or an item as a gift – handed over straight away.',
    slova: ['gift agreement', 'gift deed', 'gift of money', 'cash gift', 'give a car as a gift', 'gift notification', 'Schenkungsvertrag', 'Schenkung', 'Schenkungsmeldung'],
  },
  landing: {
    title: 'Gift Agreement Austria {rok} – free PDF template',
    description:
      'Gift agreement for money or movable items in Austria, explained in English: download a bilingual PDF or Word (German original + translation). Free.',
    perex: 'For gifts that are handed over or transferred straight away. With notes on the gift notification (Schenkungsmeldung) to the tax office (Finanzamt).',
    obsahPopis: 'Agreement on a gift carried out immediately.',
    obsah: [
      { nazev: 'Parties', popis: 'Who gives, who receives.' },
      { nazev: 'Gift', popis: 'Money or an item.' },
      { nazev: 'Performance', popis: 'In cash, by transfer or by handing over the item.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We add the amount in words (in German) ourselves.' },
      { nazev: 'Sign', popis: 'Both parties.' },
      { nazev: 'Notify', popis: 'Above the thresholds, notify the tax office (Finanzamt) within three months.' },
    ],
    online: [
      'Guided form with explanations for every field',
      'Signature on the screen',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'a gift of money to children or grandchildren',
      'giving away a car or jewellery',
    ],
    nehodiSe: [
      'a promise to give something later – this requires a notarial deed (Notariatsakt)',
      'real estate',
    ],
    po: [
      { nazev: 'Tax office (Finanzamt)', popis: 'Check whether a gift notification is required (§ 121a BAO).' },
    ],
    faq: [
      { q: 'Do I need a notary?', a: 'Not if the gift is handed over straight away. Without actual handover (wirkliche Übergabe), a notarial deed (Notariatsakt) is required.' },
      { q: 'Is there a gift tax?', a: 'No, but there is a duty to notify: between relatives above €50,000 per year, otherwise above €15,000 within five years.' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Sections 938 et seq. of the Austrian General Civil Code (ABGB) and § 121a of the Federal Fiscal Code (Bundesabgabenordnung, BAO).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a gift agreement online – Austria, bilingual PDF',
    description: 'Guide in English for a gift agreement for money or items in Austria. Download PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'agreement', g: 'agreement', a: 'agreement', l: 'agreement' },
    kroky: {
      parteien: { nazev: 'Donor and recipient' },
      geschenk: { nazev: 'Gift' },
    },
    pole: {
      p_jmeno: { popis: 'Donor – first name and surname' },
      p_narozeni: { popis: 'Date of birth' },
      p_adresa: { popis: 'Address' },
      k_jmeno: { popis: 'Recipient – first name and surname' },
      k_narozeni: { popis: 'Date of birth' },
      k_adresa: { popis: 'Address' },
      vztah: { popis: 'Family relationship (optional)', napoveda: 'Important for the gift notification (relatives have a higher threshold). Write it in German, e.g. Tochter (daughter).' },
      predmet: { popis: 'What is being given?', moznosti: { penize: 'Money', vec: 'A movable item (e.g. car, jewellery, furniture)' } },
      castka: { popis: 'Amount (€)' },
      prevod: { popis: 'How will the money be handed over?', moznosti: { hotove: 'In cash when signing', ucet: 'By transfer on the day of signing' } },
      ucet: { popis: 'Recipient’s IBAN' },
      vec_popis: { popis: 'Description of the item', placeholder: 'e.g. Pkw VW Polo, FIN …, Kennzeichen … (car, VIN, registration number)' },
      vady_popis: { popis: 'Known defects (optional)' },
      misto: { popis: 'Place' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: [
      'Who gives the gift and who accepts it.',
      'What exactly is given.',
      'The gift is handed over straight away (actual handover, wirkliche Übergabe) – that is why no notarial deed (Notariatsakt) is needed.',
      'Standard formalities.',
    ],
    coDal: [
      'Print twice; both parties sign both copies.',
      'Ideally transfer the money on the same day, with the payment reference “Schenkung” (gift).',
      'Check whether the gift must be reported to the tax office (Finanzamt) – gift notification (Schenkungsmeldung) within three months.',
    ],
    kontrola: [
      'This template is only for gifts that are handed over or transferred straight away. A promise to give without actual handover requires a notarial deed (Notariatsakt) ([oesterreich.gv.at](https://www.oesterreich.gv.at/themen/gesetze_und_recht/gerichtsorganisation_der_justiz/zivilrecht/Seite.10102038.html)).',
      'Real estate always requires a certified document and entry in the land register (Grundbuch).',
      'There is no gift tax in Austria, but there is a duty to notify: between relatives above €50,000 within one year, between other persons above €15,000 within five years – within three months to the tax office (Finanzamt) ([BMF](https://www.bmf.gv.at/themen/steuern/steuern-von-a-bis-z/schenkungsmeldung.html)).',
      'For items given as a gift, state any known defects.',
      'Check the other party’s identity against their identity card and copy the name and address exactly.',
    ],
  },

  dokument: {
    nazev: 'Gift Agreement',
    podnadpis: 'on a gift with actual handover (Sections 938 et seq. ABGB)',
    podpisy: { vlevo: 'donor', vpravo: 'recipient' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Donor:** {{p_jmeno}}, born on {{p_narozeni}}, residing at {{p_adresa}}',
          '**Recipient:** {{k_jmeno}}, born on {{k_narozeni}}, residing at {{k_adresa}}, relationship to the Donor: {{vztah}}',
        ],
      },
      {
        nadpis: 'Subject of the Gift',
        odstavce: [
          {
            uvodVzor: 'Subject (tick one option):',
            moznosti: {
              penize: 'The Donor gives the Recipient the sum of money of {{castka}}.',
              vec: 'The Donor gives the Recipient the following item: {{vec_popis}}. Defects known to the Donor: {{vady_popis}}',
            },
          },
          'The Recipient accepts the gift.',
        ],
      },
      {
        nadpis: 'Performance',
        odstavce: [
          {
            uvodVzor: 'For money (tick):',
            moznosti: {
              hotove: 'The amount was handed over in cash upon signing; the Recipient confirms receipt with their signature.',
              ucet: 'The amount will be transferred to the account IBAN {{ucet}} on the day of signing.',
            },
          },
          {
            uvodVzor: 'For an item:',
            moznosti: {
              vec: 'The item was handed over upon signing; ownership passed with the handover. The Recipient confirms receipt with their signature.',
            },
          },
        ],
      },
      {
        nadpis: 'Final Provisions',
        odstavce: [
          'In all other respects, Sections 938 et seq. ABGB apply, including the Donor’s statutory rights to revoke the gift.',
          'The parties are aware that gifts above the thresholds of § 121a BAO must be reported to the tax office (Finanzamt) within three months.',
          'This agreement is executed in two counterparts; each party receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

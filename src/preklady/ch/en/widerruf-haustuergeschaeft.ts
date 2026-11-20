/**
 * English version: withdrawal from a doorstep or telephone sale (Switzerland). Original: src/obsah/ch/widerruf-haustuergeschaeft.ts
 * and src/sablony/ch/widerruf-haustuergeschaeft.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-WIDERRUF-HAUSTUER', verze: '1.0' },

  nazev: 'Withdrawal from a Doorstep Sale',
  nazevA: 'the withdrawal from a doorstep sale',
  katalog: {
    popis: 'Withdraw from a contract made at the door or by phone within 14 days.',
    slova: ['withdrawal', 'doorstep sale', 'telephone sale', 'cooling-off period', '14 days', 'subscription', 'door-to-door seller', 'cancel a contract', 'Widerruf', 'Haustürgeschäft'],
  },
  landing: {
    title: 'Doorstep Sale Withdrawal Switzerland {rok} – free PDF template',
    description:
      'Withdrawal under Art. 40a et seq. OR (Switzerland): cancel contracts made at the door, by phone or on promotional trips within 14 days. Free bilingual PDF or Word.',
    perex: 'Bought something at the door or over the phone and regret it? You can withdraw from such contracts within 14 days without giving a reason.',
    obsahPopis: 'A letter to the provider.',
    obsah: [
      { nazev: 'Provider', popis: 'Company and address.' },
      { nazev: 'Contract', popis: 'What and when.' },
      { nazev: 'Where the offer was made', popis: 'At the door, by phone, at work …' },
      { nazev: 'Refund', popis: 'Account for your money.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Anything you don’t know stays as a line.' },
      { nazev: 'Check the text', popis: 'Preview next to the form.' },
      { nazev: 'Download and sign', popis: 'PDF or Word.' },
    ],
    online: [
      'Explanations for every field',
      'Signature on screen',
      'Draft saved in your browser',
      'Download as PDF and Word',
    ],
    hodiSe: ['a sales representative at the door', 'telephone sales, e.g. a subscription or wine', 'a purchase on a promotional trip'],
    nehodiSe: [
      'online purchases – in Switzerland there is no statutory right of withdrawal for them',
      'purchases in a shop or at market and trade fair stands',
      'contracts up to 100 francs',
    ],
    po: [
      { nazev: 'Registered letter', popis: 'Send it in time and keep proof.' },
      { nazev: 'Return', popis: 'Return what you received, claim your money back.' },
    ],
    faq: [
      {
        q: 'Can I withdraw from an online purchase?',
        a: 'No, not by law. Many shops grant a voluntary right of return – their general terms and conditions (AGB) apply.',
      },
      {
        q: 'When does the period start?',
        a: 'As soon as you have concluded the contract and have been informed in writing of the right of withdrawal. The period is 14 days.',
      },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'The template is based on Art. 40a–40f of the Swiss Code of Obligations (Obligationenrecht, OR).',
  },
  vytvorit: {
    title: 'Fill in a doorstep sale withdrawal online – Switzerland, PDF',
    description: 'Guide in English for withdrawing from a doorstep or telephone sale in Switzerland (Art. 40a OR). Free bilingual PDF or Word.',
  },

  pruvodce: {
    slovo: { n: 'withdrawal', g: 'withdrawal', a: 'withdrawal', l: 'withdrawal' },
    kroky: {
      haendler: { nazev: 'Provider', popis: 'The name and address are in the contract or on the order confirmation.' },
      kauf: { nazev: 'Contract' },
      sie: { nazev: 'Your details' },
    },
    pole: {
      pr_nazev: { popis: 'Provider (company)', placeholder: 'e.g. Muster Vertriebs AG' },
      pr_adresa: { popis: 'Provider’s address' },
      zbozi: {
        popis: 'Goods or service',
        placeholder: 'e.g. Staubsauger Modell X, Zeitschriftenabo (vacuum cleaner model X, magazine subscription)',
      },
      objednavka: { popis: 'Contract or order number' },
      objednano: { popis: 'Contract concluded on' },
      kde: {
        popis: 'Where was the offer made to you?',
        moznosti: {
          haustuer: 'At the door / in my home',
          telefon: 'By phone',
          arbeitsplatz: 'At my workplace',
          strasse: 'In the street or on public transport',
          werbefahrt: 'On a promotional trip or excursion',
        },
      },
      p_jmeno: { popis: 'First name and surname' },
      p_adresa: { popis: 'Address' },
      ucet: { popis: 'IBAN for the refund (optional)', placeholder: 'CH…' },
      misto: { popis: 'Place' },
      datum: { popis: 'Date' },
    },
    vysvetleni: ['', 'You do not need to give a reason.', ''],
    coDal: [
      'Send the withdrawal by registered letter (Einschreiben) or by e-mail with a read receipt – what matters is that you send it within 14 days and can prove it.',
      'Return any goods or services already received; the provider must refund any amounts already paid (Art. 40f OR).',
    ],
    kontrola: [
      'The right of withdrawal only applies if the offer was made to you at the door or in your home, at your workplace, on public transport, in the street, on a promotional trip or by phone and the value of the service exceeds 100 francs ([Art. 40a ff. OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_40_a)).',
      'For online purchases there is no statutory right of withdrawal in Switzerland – only a voluntary right of return granted by the shop under its general terms and conditions (AGB) ([ch.ch](https://www.ch.ch/de/sicherheit-und-recht/waren-zuruckgeben-oder-umtauschen)).',
      'There is no right of withdrawal if you expressly asked for the negotiations or ordered at a market or trade fair stand (Art. 40c OR).',
      'The period is 14 days and starts as soon as you have concluded the contract and have been informed in writing by the provider of the right of withdrawal (Art. 40e OR).',
    ],
  },

  dokument: {
    nazev: 'Withdrawal',
    podnadpis: 'from a doorstep or telephone sale (Haustür- oder Telefongeschäft, Art. 40a et seq. OR)',
    podpisy: { vlevo: 'customer', vpravo: 'received on behalf of the provider (if delivered in person)' },
    clanky: [
      {
        nadpis: 'To',
        odstavce: ['{{pr_nazev}}, {{pr_adresa}}'],
      },
      {
        nadpis: 'Withdrawal',
        odstavce: [
          'Pursuant to Art. 40a et seq. OR, I hereby withdraw my offer or my acceptance of the following contract: {{zbozi}}',
          'Contract dated {{objednano}} · contract/order number: {{objednavka}}',
          {
            uvod: 'The offer was made to me:',
            uvodVzor: 'The offer was made to me (tick):',
            moznosti: {
              haustuer: 'at the door or in my home.',
              telefon: 'by phone.',
              arbeitsplatz: 'at my workplace.',
              strasse: 'in the street or on public transport.',
              werbefahrt: 'on a promotional trip or excursion.',
            },
          },
          'Please refund any amounts already paid to the account IBAN {{ucet}}.',
        ],
      },
      {
        nadpis: 'Customer',
        odstavce: ['{{p_jmeno}}, {{p_adresa}}'],
      },
    ],
  },
} satisfies PrekladDokumentu;

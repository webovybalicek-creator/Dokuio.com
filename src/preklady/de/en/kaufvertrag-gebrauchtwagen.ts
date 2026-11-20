/**
 * English version: used car purchase agreement (Germany). Original: src/obsah/de/kaufvertrag-gebrauchtwagen.ts
 * and src/sablony/de/kaufvertrag-gebrauchtwagen.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-KAUF-AUTO', verze: '1.0' },

  nazev: 'Used Car Purchase Agreement',
  nazevA: 'the used car purchase agreement',
  katalog: {
    popis: 'Private sale of a used car.',
    slova: ['car sale', 'sell a car', 'buy a car', 'used car', 'second-hand car', 'vehicle', 'bill of sale', 'purchase agreement', 'Kaufvertrag', 'Gebrauchtwagen', 'Auto verkaufen'],
  },
  landing: {
    title: 'Used Car Purchase Agreement Germany {rok} – free PDF template',
    description:
      'Used car purchase agreement for private sales in Germany: VIN, mileage, accident damage, exclusion of liability (Section 444 BGB), handover. Free bilingual PDF or Word.',
    perex: 'Private sale of a used car under the German Civil Code (BGB) – with mileage, accident damage and a legally sound exclusion of liability.',
    obsahPopis: 'Six sections under Sections 433 et seq. BGB.',
    obsah: [
      { nazev: 'Parties', popis: 'Seller and buyer.' },
      { nazev: 'Subject of the purchase', popis: 'Vehicle, VIN (FIN), registration number.' },
      { nazev: 'Condition', popis: 'Mileage, accidents, defects.' },
      { nazev: 'Liability for defects', popis: 'Excluded or statutory.' },
      { nazev: 'Price and handover', popis: 'Payment, retention of title, time.' },
      { nazev: 'Re-registration', popis: 'Authority and insurance.' },
    ],
    kroky: [
      { nazev: 'Enter the details', popis: 'Parties, vehicle, price.' },
      { nazev: 'Check the text', popis: 'Every paragraph can be adapted.' },
      { nazev: 'Download and sign', popis: 'PDF or Word, two counterparts.' },
    ],
    online: ['Amount in words (in German) added automatically', 'VIN (FIN) check', 'Signature on screen', 'Download as PDF and Word'],
    hodiSe: ['you are selling or buying a used car from a private individual', 'you want mileage and accidents recorded in writing'],
    nehodiSe: [
      'buying from a dealer – consumer law with statutory warranty applies there',
      'a leased vehicle – pay off the lease first',
    ],
    po: [
      { nazev: 'Notice of sale', popis: 'The seller notifies the vehicle registration office (Zulassungsbehörde) of the sale without delay (Veräußerungsanzeige).' },
      { nazev: 'Insurance', popis: 'Report the sale to your motor insurer.' },
      { nazev: 'Re-registration', popis: 'The buyer registers the vehicle in their own name.' },
    ],
    faq: [
      {
        q: 'Can I exclude the statutory warranty as a private individual?',
        a: 'Yes. However, the exclusion does not apply to defects fraudulently concealed or to agreed characteristics such as “accident-free” (unfallfrei) (Section 444 BGB).',
      },
      {
        q: 'What do I have to report after the sale?',
        a: 'The sale – without delay to the vehicle registration office (Section 15 FZV) and to the motor insurer.',
      },
      { q: 'Do you store my details?', a: 'No. The agreement is put together only in your browser.' },
    ],
    zakony:
      'The template is based on Sections 433 et seq. and Section 444 of the German Civil Code (Bürgerliches Gesetzbuch, BGB) and Section 15 of the Vehicle Registration Ordinance (Fahrzeug-Zulassungsverordnung, FZV).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a used car purchase agreement online – Germany, PDF',
    description: 'Guide in English for a private car purchase agreement under German law. Bilingual PDF or Word for free.',
    podnadpis: 'Free · result as PDF and Word · takes about 5 minutes',
  },

  pruvodce: {
    slovo: { n: 'purchase agreement', g: 'purchase agreement', a: 'purchase agreement', l: 'purchase agreement' },
    kroky: {
      parteien: { nazev: 'Seller and buyer', popis: 'You may not know the buyer’s details yet – leave them empty and lines to fill in by hand will remain.' },
      fahrzeug: { nazev: 'Vehicle', popis: 'Copy the details from the registration certificate Part I (Zulassungsbescheinigung Teil I).' },
      zustand: { nazev: 'Condition and liability' },
      preis: { nazev: 'Price and handover' },
    },
    pole: {
      p_jmeno: { popis: 'Seller – first name and surname', placeholder: 'e.g. Max Mustermann' },
      p_narozeni: { popis: 'Date of birth' },
      p_doklad: { popis: 'ID card number' },
      p_adresa: { popis: 'Address', placeholder: 'e.g. Musterstraße 1, 10115 Berlin' },
      k_jmeno: { popis: 'Buyer – first name and surname' },
      k_narozeni: { popis: 'Date of birth' },
      k_doklad: { popis: 'ID card number' },
      k_adresa: { popis: 'Address' },
      znacka: { popis: 'Make and model', placeholder: 'e.g. VW Golf' },
      vin: { popis: 'Vehicle identification number (FIN, VIN)', napoveda: '17 characters, field E in the registration certificate (Fahrzeugschein).' },
      spz: { popis: 'Registration number', placeholder: 'e.g. B-AB 1234' },
      ez: { popis: 'First registration' },
      zb2: { popis: 'Registration certificate Part II number' },
      hu: { popis: 'Next roadworthiness test (HU)', placeholder: 'e.g. 06/2027' },
      km: { popis: 'Odometer reading' },
      unfall: {
        popis: 'Accident damage',
        moznosti: { nein: 'No accident damage known', ja: 'The following accident damage is known' },
      },
      unfall_text: { popis: 'Accident damage' },
      maengel: {
        popis: 'Known defects (optional)',
        napoveda: 'Enter everything you know – concealed defects cancel the exclusion of liability. Write it in German – the text goes into the document.',
        placeholder: 'e.g. Klimaanlage ohne Funktion (air conditioning not working)',
      },
      haftung: {
        popis: 'Liability for defects',
        napoveda: 'Between private individuals, liability for defects may be excluded – but not in cases of fraud or for agreed characteristics.',
        moznosti: { aus: 'Excluded (usual between private individuals)', gesetz: 'Statutory liability for defects' },
      },
      klice: { popis: 'Number of keys' },
      cena: { popis: 'Purchase price (€)', napoveda: 'We add the amount in words ourselves.', placeholder: 'e.g. 9500' },
      platba: { popis: 'Payment', moznosti: { bar: 'In cash on handover', ueberweisung: 'By bank transfer before handover' } },
      ucet: { popis: 'Seller’s IBAN' },
      predani_cas: { popis: 'Time of handover', placeholder: 'e.g. 14:30' },
      misto: { popis: 'Place', placeholder: 'e.g. Berlin' },
      datum_podpisu: { popis: 'Date' },
    },
    vysvetleni: [
      'Who is entering into the agreement.',
      'Which vehicle is being sold – the VIN (FIN) is decisive.',
      'What the seller knows about the vehicle.',
      'Whether the seller will be liable for defects later.',
      'How much, how and when – ownership passes only after full payment.',
      'Who does what at the registration office and with the insurer.',
    ],
    coDal: [
      'Print the agreement twice; both parties sign both copies.',
      'Hand over the vehicle, keys and registration certificate Part I and Part II (Zulassungsbescheinigung Teil I und II) against a confirmation of receipt.',
      'Seller: report the sale without delay to the vehicle registration office (Zulassungsbehörde) – notice of sale (Veräußerungsanzeige) – and to the motor insurer.',
      'Buyer: register the vehicle in your name and insure it.',
    ],
    kontrola: [
      'The seller is entered in the registration certificate Part II (Zulassungsbescheinigung Teil II, Fahrzeugbrief) – or can prove how they acquired the car.',
      'The VIN (FIN) in the documents matches the one on the vehicle.',
      'An exclusion of liability does not apply to defects the seller fraudulently conceals, nor to expressly agreed characteristics such as “accident-free” ([Section 444 BGB](https://www.gesetze-im-internet.de/bgb/__444.html)). So enter known defects and accidents honestly.',
      'Seller: notify the vehicle registration office of the sale without delay, with the buyer’s name and address ([Section 15 FZV](https://www.gesetze-im-internet.de/fzv_2023/__15.html)).',
      'Check the other party’s identity using their identity card (Personalausweis) and copy the name and address exactly.',
      'Count cash only when signing; larger amounts are better paid by bank transfer – the bank statement is the best proof of payment.',
    ],
  },

  dokument: {
    nazev: 'Purchase Agreement for a Used Motor Vehicle',
    podnadpis: 'private sale under Sections 433 et seq. of the German Civil Code (Bürgerliches Gesetzbuch, BGB)',
    podpisy: { vlevo: 'seller', vpravo: 'buyer' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Seller:** {{p_jmeno}}, born {{p_narozeni}}, ID card No. {{p_doklad}}, residing at {{p_adresa}}',
          '**Buyer:** {{k_jmeno}}, born {{k_narozeni}}, ID card No. {{k_doklad}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Subject of the Purchase',
        odstavce: [
          'The Seller sells to the Buyer the motor vehicle make/model {{znacka}}, VIN (FIN) {{vin}}, registration number {{spz}}, first registration {{ez}}, registration certificate Part II (Zulassungsbescheinigung Teil II) No. {{zb2}}, next roadworthiness test (HU) {{hu}}.',
          'The Seller warrants that they are the owner of the vehicle, that the vehicle is free of third-party rights and that it is neither leased nor transferred by way of security (Sicherungsübereignung).',
        ],
      },
      {
        nadpis: 'Condition of the Vehicle',
        odstavce: [
          'The odometer reading is {{km}}. To the Seller’s knowledge, it corresponds to the actual mileage.',
          {
            uvodVzor: 'Accident damage (please tick):',
            moznosti: {
              nein: 'The Seller is not aware of any accident damage.',
              ja: 'The Seller is aware of the following accident damage: {{unfall_text}}',
            },
          },
          'Known defects: {{maengel}}',
        ],
      },
      {
        nadpis: 'Liability for Defects',
        odstavce: [
          {
            uvodVzor: 'Liability (please tick):',
            moznosti: {
              aus: 'The vehicle is sold with liability for material defects (Sachmängelhaftung) excluded. This exclusion does not apply to fraudulently concealed defects, to the characteristics agreed in this agreement, or to damage arising from injury to life, body or health and other damage resulting from gross negligence or intent on the part of the Seller.',
              gesetz: 'The Seller is liable for material defects in accordance with the statutory provisions.',
            },
          },
        ],
      },
      {
        nadpis: 'Purchase Price and Handover',
        odstavce: [
          'The purchase price is {{cena}}.',
          {
            uvodVzor: 'Payment (please tick):',
            moznosti: {
              bar: 'The purchase price is paid in cash on handover. The Seller confirms receipt by their signature.',
              ueberweisung: 'The purchase price is transferred before handover to the Seller’s account IBAN {{ucet}}.',
            },
          },
          'The vehicle remains the property of the Seller until the purchase price has been paid in full.',
          'Handover takes place on {{datum_podpisu}} at {{predani_cas}} with {{klice}} key(s) and the registration certificate Part I and Part II.',
        ],
      },
      {
        nadpis: 'Re-registration and Insurance',
        odstavce: [
          'The Buyer undertakes to re-register the vehicle in their name without delay. The Seller shall notify the vehicle registration office (Zulassungsbehörde) and their motor insurer of the sale without delay.',
          'From handover, the Buyer bears the risk and is liable for all costs and fines connected with the operation of the vehicle.',
          'Amendments to this agreement must be made in writing. Each party receives one counterpart.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

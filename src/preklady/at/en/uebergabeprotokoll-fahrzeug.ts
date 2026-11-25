/**
 * English version: vehicle handover report (Austria). Original: src/obsah/at/uebergabeprotokoll-fahrzeug.ts
 * and src/sablony/at/uebergabeprotokoll-fahrzeug.ts (based on src/sablony/de/uebergabeprotokoll-fahrzeug.ts).
 * The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';
import { EIGEN } from '../_eigen';

const T = {
  sablona: { kod: 'AT-UEBERGABE-KFZ', verze: '1.1' },

  nazev: 'Vehicle Handover Report',
  nazevA: 'the vehicle handover report',
  katalog: {
    popis: 'Mileage, damage, keys and documents at handover.',
    slova: ['handover report', 'vehicle handover', 'car handover', 'handover protocol', 'lend a car', 'car sale', 'Übergabeprotokoll', 'Fahrzeugübergabe', 'Autoübergabe'],
  },
  landing: {
    title: 'Vehicle Handover Report Austria {rok} – free PDF template',
    description:
      'Handover report for a car or motorbike in Austria: mileage, fuel, damage, keys, Typenschein and Pickerl. Bilingual PDF or Word (German + English), free.',
    perex: 'Records in what condition and when the vehicle was handed over. Protects both sides in a dispute over damage or fines.',
    obsahPopis: 'Short report with tick boxes.',
    obsah: [
      { nazev: 'Parties and reason', popis: 'Sale, lending or return.' },
      { nazev: 'Condition', popis: 'Mileage, fuel, damage.' },
      { nazev: 'Keys and documents', popis: 'What was handed over.' },
      { nazev: 'Time', popis: 'Important for fines and accidents.' },
    ],
    kroky: [
      { nazev: 'Fill it in', popis: 'We take over the details from the purchase agreement.' },
      { nazev: 'Check together', popis: 'Photograph the vehicle and the odometer.' },
      { nazev: 'Sign', popis: 'Each side keeps one copy.' },
    ],
    online: [
      'Guided form with explanations for every field',
      'Signature on the screen',
      'Download as PDF and Word',
      'Pre-filled from the purchase agreement',
    ],
    hodiSe: [
      'private sale of a car or motorbike',
      'lending a car to friends or family',
    ],
    nehodiSe: [
      'commercial car hire – their own forms apply',
    ],
    po: [
      { nazev: 'Deregistration (Abmeldung)', popis: 'The seller deregisters the vehicle, the buyer registers it in their name.' },
    ],
    faq: [
      { q: 'Is a handover report mandatory?', a: 'No, but it is the best evidence of the condition the vehicle was in and when it was handed over.' },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'There is no statutory form; the report supplements the purchase agreement (Kaufvertrag) under Sections 1053 et seq. of the Austrian General Civil Code (ABGB).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a vehicle handover report online – Austria, PDF',
    description: 'Guide in English for a car or motorbike handover report in Austria, with mileage, damage and time. PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    kroky: {
      parteien: { nazev: 'Parties and reason' },
      fahrzeug: { nazev: 'Vehicle and condition' },
      zubehoer: { nazev: 'Keys, documents, accessories' },
      uebergabe: { nazev: 'Handover' },
    },
    pole: {
      duvod: {
        popis: 'Why is the vehicle being handed over?',
        moznosti: { koupe: 'Sale (purchase agreement)', zapujcka: 'Lending the vehicle', vraceni: 'Return of a borrowed vehicle' },
      },
      smlouva_datum: { popis: 'Date of the purchase agreement' },
      p_jmeno: { popis: 'Person handing over – first name and surname', placeholder: 'e.g. Max Mustermann' },
      p_adresa: { popis: 'Address of the person handing over', placeholder: 'e.g. Hauptstraße 1, 1010 Wien' },
      k_jmeno: { popis: 'Person taking over – first name and surname' },
      k_adresa: { popis: 'Address of the person taking over' },
      znacka: { popis: 'Make and model', placeholder: 'e.g. VW Golf Variant' },
      vin: { popis: 'Vehicle identification number (VIN, German FIN)', napoveda: 'Shown in the registration certificate (Zulassungsschein) and on the vehicle.' },
      spz: { popis: 'Official registration number (Kennzeichen)', placeholder: 'e.g. W-12345A' },
      km: { popis: 'Mileage (km)' },
      palivo: { popis: 'Fuel level', moznosti: { rezerva: 'Reserve', ctvrt: '1/4', pul: '1/2', tri: '3/4', plna: 'Full' } },
      poskozeni: { popis: 'Damage', moznosti: { bez: 'No visible damage', s: 'The vehicle has damage' } },
      poskozeni_popis: { popis: 'Description of the damage', placeholder: 'e.g. Kratzer an der hinteren Stoßstange links (scratch on the rear bumper, left)' },
      klice: { popis: 'Number of keys' },
      doklady: {
        popis: 'Documents handed over',
        moznosti: {
          zs: 'Registration certificate (Zulassungsschein)',
          ts: 'Type certificate (Typenschein) / proof of approval (Genehmigungsnachweis)',
          pickerl: 'Latest inspection report under § 57a KFG (“Pickerl”)',
          servis: 'Service book',
          navod: 'Owner’s manual',
        },
      },
      vybava: {
        popis: 'Accessories',
        moznosti: {
          verbandskasten: 'First-aid kit',
          warndreieck: 'Warning triangle',
          weste: 'High-visibility vest',
          reserverad: 'Spare wheel or tyre repair kit',
          wagenheber: 'Jack and wheel brace',
          reifen: 'Second set of tyres',
        },
      },
      vybava_jine: { popis: 'Other items', placeholder: 'e.g. Dachträger (roof rack)' },
      predani_datum: { popis: 'Date of handover' },
      predani_cas: { popis: 'Time', placeholder: 'e.g. 14:30' },
      misto: { popis: 'Place', placeholder: 'e.g. Wien' },
      poznamky: { popis: 'Remarks', placeholder: 'e.g. Winterreifen werden bis Monatsende abgeholt (winter tyres will be collected by the end of the month)' },
    },
    vysvetleni: [
      'Who hands over and who takes over.',
      'Which vehicle and why.',
      'The exact condition at the moment of handover.',
      'What was handed over together with the vehicle.',
      'Confirmation of exactly when the handover took place.',
    ],
    coDal: [
      'Print the report twice; both sides sign both copies.',
      'Photograph the vehicle from all sides and the odometer reading – keep the photos.',
      'In the case of a sale: the seller deregisters the vehicle at a registration office (Zulassungsstelle) and informs the insurer; the buyer registers it in their name.',
    ],
    kontrola: [
      'Read the mileage and fuel level together and enter them exactly.',
      'Describe damage specifically (location, size) and photograph it with the date.',
      'The time of handover helps with fines or accidents: it shows who had the vehicle at what time.',
      'Compare the VIN (FIN) in the documents with the VIN on the vehicle.',
      'As long as the vehicle has not been deregistered, fines may end up with the previous registered keeper (Zulassungsbesitzer) – enter the time of handover exactly.',
      'Check the other party’s identity against their identity card and copy the name and address exactly.',
    ],
    prevzit: 'the car purchase agreement',
  },

  dokument: {
    nazev: 'Handover Report',
    podnadpis: 'on the handover and acceptance of a motor vehicle',
    podpisy: { vlevo: 'person handing over', vpravo: 'person taking over' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: [
          '**Person handing over:** {{p_jmeno}}, residing at {{p_adresa}}',
          '**Person taking over:** {{k_jmeno}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Vehicle',
        odstavce: [
          'Make and model {{znacka}}, VIN (FIN) {{vin}}, official registration number {{spz}} (the “Vehicle”).',
          {
            uvodVzor: 'Reason for the handover (tick one option):',
            moznosti: {
              koupe: 'The Vehicle is handed over on the basis of the purchase agreement dated {{smlouva_datum}}.',
              zapujcka: 'The Vehicle is provided for temporary use.',
              vraceni: 'The previously lent Vehicle is returned.',
            },
          },
        ],
      },
      {
        nadpis: 'Condition at Handover',
        odstavce: [
          'Mileage at handover: {{km}}.',
          {
            uvod: 'Fuel level:',
            uvodVzor: 'Fuel level (tick):',
            moznosti: {
              rezerva: 'reserve.',
              ctvrt: 'about 1/4.',
              pul: 'about 1/2.',
              tri: 'about 3/4.',
              plna: 'full.',
            },
          },
          {
            uvodVzor: 'Damage (tick one option):',
            moznosti: {
              bez: 'At handover, the Vehicle shows no visible damage.',
              s: 'At handover, the Vehicle shows the following damage: {{poskozeni_popis}}',
            },
          },
        ],
      },
      {
        nadpis: 'Keys, Documents and Accessories Handed Over',
        odstavce: [
          'Number of keys handed over: {{klice}}.',
          {
            uvod: 'Documents handed over:',
            moznosti: {
              zs: 'registration certificate (Zulassungsschein)',
              ts: 'type certificate (Typenschein) / proof of approval (Genehmigungsnachweis)',
              pickerl: 'latest inspection report under § 57a KFG (“Pickerl”)',
              servis: 'service book',
              navod: 'owner’s manual',
            },
          },
          {
            uvod: 'Accessories handed over:',
            moznosti: {
              verbandskasten: 'first-aid kit',
              warndreieck: 'warning triangle',
              weste: 'high-visibility vest',
              reserverad: 'spare wheel or tyre repair kit',
              wagenheber: 'jack and wheel brace',
              reifen: 'second set of tyres',
            },
            dalsi: 'other items: {{vybava_jine}}',
          },
        ],
      },
      {
        nadpis: 'Acceptance',
        odstavce: [
          'The Vehicle was handed over on {{predani_datum}} at {{predani_cas}}.',
          'The person taking over confirms having received the Vehicle, including the keys, documents and accessories listed, in the condition described.',
          'Remarks: {{poznamky}}',
          'This report is executed in two counterparts; each side receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

const E = EIGEN.en['uebergabeprotokoll-fahrzeug'];
export default {
  ...T,
  landing: {
    ...T.landing,
    ...E,
    faq: E.faq ? [...E.faq, ...T.landing.faq.filter((f) => /store|зберіга/i.test(f.q))] : T.landing.faq,
  },
} satisfies PrekladDokumentu;

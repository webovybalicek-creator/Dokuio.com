/**
 * English version: vehicle handover report (Germany). Original: src/obsah/de/uebergabeprotokoll-fahrzeug.ts
 * and src/sablony/de/uebergabeprotokoll-fahrzeug.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'DE-UEBERGABE-KFZ', verze: '1.0' },

  nazev: 'Vehicle Handover Report',
  nazevA: 'the vehicle handover report',
  katalog: {
    popis: 'Mileage, damage, keys and documents at handover.',
    slova: ['handover report', 'vehicle handover', 'car handover', 'handover protocol', 'lend a car', 'car sale', 'Übergabeprotokoll', 'Fahrzeugübergabe', 'Autoübergabe'],
  },
  landing: {
    title: 'Vehicle Handover Report Germany {rok} – free PDF template',
    description:
      'Handover report for a car or motorbike in Germany: mileage, fuel, damage, keys, documents and time. In English, free bilingual PDF or Word (German original).',
    perex: 'Records the condition the vehicle was in and when it was handed over. Protects both sides in a dispute about damage or fines.',
    obsahPopis: 'Short handover report (Übergabeprotokoll) with tick boxes.',
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
      'Fill it in with explanations for every field',
      'Signature on screen',
      'Download as PDF and Word',
      'Pre-filled from the purchase agreement',
    ],
    hodiSe: [
      'Private sale of a car or motorbike',
      'Lending a car to friends or family',
    ],
    nehodiSe: [
      'Commercial car hire – their own forms apply there',
    ],
    po: [
      { nazev: 'Notification', popis: 'If sold: notify the vehicle registration office (Zulassungsstelle) and the insurer of the sale without delay.' },
    ],
    faq: [
      { q: 'Is a handover report mandatory?', a: 'No, but it is the best evidence of the condition the vehicle was in and when it was handed over.' },
      { q: 'Do you store my data?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony: 'Not a statutory form; it supplements the purchase agreement under Section 433 of the German Civil Code (BGB).',
    souvisejiciPopis: 'More documents, also free.',
  },
  vytvorit: {
    title: 'Fill in a vehicle handover report online – Germany, PDF',
    description: 'Handover report for a car or motorbike in Germany with mileage, damage and time. Bilingual PDF or Word for free.',
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
      p_adresa: { popis: 'Address of the person handing over', placeholder: 'e.g. Musterstraße 1, 10115 Berlin' },
      k_jmeno: { popis: 'Person taking over – first name and surname' },
      k_adresa: { popis: 'Address of the person taking over' },
      znacka: { popis: 'Make and model', placeholder: 'e.g. VW Golf Variant' },
      vin: { popis: 'Vehicle identification number (FIN/VIN)', napoveda: 'Field E in the registration certificate Part I (Fahrzeugschein).' },
      spz: { popis: 'Registration number (amtliches Kennzeichen)', placeholder: 'e.g. B-AB 1234' },
      km: { popis: 'Mileage' },
      palivo: {
        popis: 'Fuel level',
        moznosti: { rezerva: 'Reserve', ctvrt: '1/4', pul: '1/2', tri: '3/4', plna: 'Full' },
      },
      poskozeni: {
        popis: 'Damage',
        moznosti: { bez: 'No visible damage', s: 'The vehicle is damaged' },
      },
      poskozeni_popis: { popis: 'Description of the damage', placeholder: 'e.g. Kratzer an der hinteren Stoßstange links (scratch on the rear bumper, left)' },
      klice: { popis: 'Number of keys' },
      doklady: {
        popis: 'Documents handed over',
        moznosti: {
          zb1: 'Registration certificate Part I (Zulassungsbescheinigung Teil I, Fahrzeugschein)',
          zb2: 'Registration certificate Part II (Zulassungsbescheinigung Teil II, Fahrzeugbrief)',
          hu: 'Report on the last roadworthiness test (Hauptuntersuchung)',
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
      misto: { popis: 'Place', placeholder: 'e.g. Berlin' },
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
      'If sold: notify the vehicle registration authority (Zulassungsbehörde) and the motor insurer of the sale without delay.',
    ],
    kontrola: [
      'Read the mileage and fuel level together and enter them exactly.',
      'Describe damage specifically (location, size) and photograph it with the date.',
      'The time of handover helps with fines or accidents: it shows who had the vehicle at what time.',
      'Compare the FIN (VIN) in the documents with the FIN on the vehicle.',
      'Check the other party’s identity against their identity card (Personalausweis) and copy the name and address exactly.',
    ],
    prevzit: 'the car purchase agreement',
    pripominky: {
      'Verkauf an Zulassungsstelle und Versicherung gemeldet?': {
        nazev: 'Sale notified to the registration office and insurer?',
        popis: 'The sale must be notified without delay (Section 15 FZV, Vehicle Registration Ordinance).',
      },
    },
  },

  dokument: {
    nazev: 'Handover Report',
    podnadpis: 'on the handover and takeover of a motor vehicle',
    podpisy: { vlevo: 'person handing over', vpravo: 'person taking over' },
    clanky: [
      {
        nadpis: 'Parties',
        odstavce: ['**Person handing over:** {{p_jmeno}}, residing at {{p_adresa}}', '**Person taking over:** {{k_jmeno}}, residing at {{k_adresa}}'],
      },
      {
        nadpis: 'Vehicle',
        odstavce: [
          'Make and model {{znacka}}, FIN {{vin}}, registration number {{spz}} (the “Vehicle”).',
          {
            uvodVzor: 'Reason for the handover (tick one option):',
            moznosti: {
              koupe: 'The Vehicle is handed over on the basis of the purchase agreement of {{smlouva_datum}}.',
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
            moznosti: { rezerva: 'reserve.', ctvrt: 'about 1/4.', pul: 'about 1/2.', tri: 'about 3/4.', plna: 'full.' },
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
              zb1: 'registration certificate Part I',
              zb2: 'registration certificate Part II',
              hu: 'report on the last roadworthiness test',
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
        nadpis: 'Takeover',
        odstavce: [
          'The Vehicle was handed over on {{predani_datum}} at {{predani_cas}}.',
          'The person taking over confirms having received the Vehicle, including the keys, documents and accessories listed, in the condition described.',
          'Remarks: {{poznamky}}',
          'This report is executed in two copies; each side receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

/**
 * English version: vehicle handover report (Switzerland). Original: src/obsah/ch/uebergabeprotokoll-fahrzeug.ts
 * and src/sablony/ch/uebergabeprotokoll-fahrzeug.ts. The German text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CH-UEBERGABE-FZ', verze: '1.1' },

  nazev: 'Vehicle Handover Report',
  nazevA: 'the vehicle handover report',
  katalog: {
    popis: 'Mileage, damage and keys at handover.',
    slova: ['handover report', 'car handover', 'car', 'vehicle', 'mileage', 'damage', 'handover protocol', 'Übergabeprotokoll', 'Fahrzeug'],
  },
  landing: {
    title: 'Vehicle Handover Report Switzerland {rok} – free PDF template',
    description:
      'Handover report for a car or motorbike in Switzerland, explained in English: mileage, fuel, damage, keys and time of handover. Free bilingual PDF or Word.',
    perex: 'When selling or lending a vehicle, record the condition in which it is handed over – with mileage, damage and the exact time.',
    obsahPopis: 'A report (Übergabeprotokoll) with tick boxes.',
    obsah: [
      { nazev: 'Parties and reason', popis: 'Sale, loan or return.' },
      { nazev: 'Vehicle', popis: 'Make, chassis number, number plate.' },
      { nazev: 'Condition', popis: 'Mileage, fuel, damage.' },
      { nazev: 'Keys and documents', popis: 'Vehicle registration document (Fahrzeugausweis), service book, accessories.' },
      { nazev: 'Handover', popis: 'Date, time, signatures.' },
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
    hodiSe: [
      'selling a car – as a supplement to the purchase agreement (Kaufvertrag)',
      'lending a car to family or friends',
    ],
    nehodiSe: ['a hire car from a rental company – they have their own reports'],
    po: [
      { nazev: 'Photos', popis: 'Photograph the vehicle and the speedometer.' },
      { nazev: 'Inspection', popis: 'The buyer reports defects immediately (Art. 201 OR).' },
    ],
    faq: [
      {
        q: 'Is a handover report compulsory?',
        a: 'No, but it proves the condition and the exact time of handover – important in the event of defects, fines or accidents.',
      },
      { q: 'Do you store my details?', a: 'No. The document is created exclusively in your browser.' },
    ],
    zakony:
      'Not a statutory form; it supplements the purchase agreement under Art. 184 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR).',
  },
  vytvorit: {
    title: 'Fill in a vehicle handover report online – Switzerland, PDF',
    description: 'Guide in English for a car or motorbike handover report in Switzerland. Free bilingual PDF or Word.',
  },

  pruvodce: {
    slovo: { n: 'report', g: 'report', a: 'report', l: 'report' },
    prevzit: 'the purchase agreement',
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
      p_adresa: { popis: 'Address of the person handing over', placeholder: 'e.g. Musterstrasse 1, 8001 Zürich' },
      k_jmeno: { popis: 'Person taking over – first name and surname' },
      k_adresa: { popis: 'Address of the person taking over' },
      znacka: { popis: 'Make and model', placeholder: 'e.g. VW Golf Variant' },
      vin: { popis: 'Vehicle identification number (FIN)', napoveda: 'Field 23 in the vehicle registration document (Fahrzeugausweis).' },
      spz: { popis: 'Number plate (Kontrollschild)', placeholder: 'e.g. ZH 123456' },
      km: { popis: 'Mileage (odometer reading)' },
      palivo: {
        popis: 'Fuel level',
        moznosti: { rezerva: 'Reserve', ctvrt: '1/4', pul: '1/2', tri: '3/4', plna: 'Full' },
      },
      poskozeni: {
        popis: 'Damage',
        moznosti: { bez: 'No visible damage', s: 'The vehicle is damaged' },
      },
      poskozeni_popis: {
        popis: 'Description of the damage',
        placeholder: 'e.g. Kratzer an der hinteren Stossstange links (scratch on the rear bumper, left)',
      },
      klice: { popis: 'Number of keys' },
      doklady: {
        popis: 'Documents handed over',
        moznosti: {
          zb1: 'Vehicle registration document (Fahrzeugausweis, cancelled)',
          zb2: 'Service book',
          hu: 'Report of the last vehicle inspection (MFK)',
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
      misto: { popis: 'Place', placeholder: 'e.g. Zürich' },
      poznamky: {
        popis: 'Remarks',
        placeholder: 'e.g. Winterreifen werden bis Monatsende abgeholt (winter tyres will be collected by the end of the month)',
      },
    },
    vysvetleni: [
      'Who hands over and who takes over.',
      'Which vehicle and why.',
      'The exact condition at the moment of handover.',
      'What was handed over together with the vehicle.',
      'Confirmation of exactly when the handover took place.',
    ],
    coDal: [
      'Print the report twice; both parties sign both copies.',
      'Photograph the vehicle from all sides and the odometer reading – keep the photos.',
      'If sold: unscrew the number plates and keep them or hand them in; inform the insurer.',
    ],
    kontrola: [
      'Read the mileage and fuel level together and enter them accurately.',
      'Describe damage specifically (location, size) and photograph it with the date.',
      'The time of handover helps with fines or accidents: it shows who had the vehicle at what time.',
      'The buyer inspects the vehicle on taking it over and reports defects immediately ([Art. 201 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_201)).',
      'Compare the chassis number in the vehicle registration document (Fahrzeugausweis) with the one on the vehicle.',
      'Check the other party’s identity against their passport or identity card (Identitätskarte) and copy their name and address exactly as shown.',
    ],
    pripominky: {
      'Schilder und Versicherung erledigt?': {
        nazev: 'Number plates and insurance sorted?',
        popis: 'Use the number plates for another vehicle or hand them in at the cantonal road traffic office (Strassenverkehrsamt); inform the insurer of the sale.',
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
        odstavce: [
          '**Person handing over:** {{p_jmeno}}, residing at {{p_adresa}}',
          '**Person taking over:** {{k_jmeno}}, residing at {{k_adresa}}',
        ],
      },
      {
        nadpis: 'Vehicle',
        odstavce: [
          'Make and model {{znacka}}, chassis number {{vin}}, previous number plate {{spz}} (the “Vehicle”).',
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
            moznosti: { rezerva: 'reserve.', ctvrt: 'about 1/4.', pul: 'about 1/2.', tri: 'about 3/4.', plna: 'full.' },
          },
          {
            uvodVzor: 'Damage (tick one option):',
            moznosti: {
              bez: 'At handover the Vehicle shows no visible damage.',
              s: 'At handover the Vehicle shows the following damage: {{poskozeni_popis}}',
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
              zb1: 'vehicle registration document (cancelled)',
              zb2: 'service book',
              hu: 'report of the last vehicle inspection (MFK)',
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
          'This report is made in two copies; each party receives one copy.',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;

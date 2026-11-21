/** English version of src/obsah/si/zapisnik-o-izrocitvi-vozila.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-ZAPISNIK-VOZILO",
    "verze": "1.0"
  },
  "nazev": "Vehicle Handover Report",
  "nazevA": "the vehicle handover report",
  "katalog": {
    "popis": "Mileage, damage, keys and the time of handover.",
    "slova": [
      "vehicle handover report",
      "car handover",
      "handover protocol",
      "mileage",
      "zapisnik o izročitvi vozila"
    ]
  },
  "landing": {
    "description": "Vehicle handover report for Slovenia (zapisnik o izročitvi vozila): exact time, mileage, fuel, keys, documents and damage. Evidence against later fines. Free PDF.",
    "perex": "Records the condition of the vehicle and the exact time of handover – important if a traffic fine arrives after the sale.",
    "obsahPopis": "A short report in three parts.",
    "obsah": [
      {
        "nazev": "Handover",
        "popis": "Who, to whom, when and at what time."
      },
      {
        "nazev": "Keys and documents",
        "popis": "What was handed over with the vehicle."
      },
      {
        "nazev": "Condition",
        "popis": "Damage and notes."
      }
    ],
    "online": [
      "Details from the purchase agreement",
      "VIN check",
      "Download as PDF and Word"
    ],
    "hodiSe": [
      "you are selling or lending a car",
      "you are returning a vehicle after borrowing it"
    ],
    "nehodiSe": [
      "you also need a contract – use the car purchase agreement"
    ],
    "po": [
      {
        "nazev": "Photos",
        "popis": "Photograph the vehicle and the odometer."
      },
      {
        "nazev": "Copies",
        "popis": "Each party keeps one."
      }
    ],
    "faq": [
      {
        "q": "Why enter the time of handover?",
        "a": "Until the change of ownership is reported, offences may be sent to the previous owner – a report with the time proves who had the vehicle."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik, OZ).",
    "kroky": [
      {
        "nazev": "Fill in the details",
        "popis": "Skip what you don’t know – a line will be left to fill in by hand."
      },
      {
        "nazev": "Check the text",
        "popis": "You can edit every paragraph."
      },
      {
        "nazev": "Download and sign",
        "popis": "Bilingual PDF or Word, free."
      }
    ],
    "souvisejiciPopis": "More documents, also free.",
    "title": "Vehicle Handover Report Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the vehicle handover report online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the vehicle handover report under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "report",
      "g": "report",
      "a": "report",
      "l": "report"
    },
    "kroky": {
      "osebe": {
        "nazev": "Who hands over and who takes over"
      },
      "vozilo": {
        "nazev": "Vehicle and condition"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Handed over by – full name",
        "placeholder": "e.g. Janez Novak"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Taken over by – full name",
        "placeholder": "e.g. Maja Horvat"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "znacka": {
        "popis": "Make and model",
        "placeholder": "e.g. Renault Clio"
      },
      "vin": {
        "popis": "VIN (vehicle identification number)"
      },
      "spz": {
        "popis": "Registration plate"
      },
      "km": {
        "popis": "Odometer reading"
      },
      "gorivo": {
        "popis": "Fuel in the tank",
        "placeholder": "e.g. polovica (half)"
      },
      "kljuci": {
        "popis": "Number of keys"
      },
      "dokumenti": {
        "popis": "Documents handed over",
        "placeholder": "e.g. prometno dovoljenje, servisna knjižica (registration certificate, service book)"
      },
      "poskodbe": {
        "popis": "Damage and notes",
        "placeholder": "e.g. odrgnina na zadnjem odbijaču (scuff on the rear bumper)"
      },
      "cas": {
        "popis": "Time of handover",
        "placeholder": "e.g. 14:30"
      },
      "misto": {
        "popis": "Place"
      },
      "datum": {
        "popis": "Date of handover"
      }
    },
    "vysvetleni": [
      ""
    ],
    "coDal": [
      "Each party keeps one copy.",
      "Photograph the odometer and the vehicle from all sides."
    ],
    "kontrola": [
      "Enter the exact time of handover – until the change of ownership, offences may be sent to the current registered owner ([gov.si](https://www.gov.si/novice/2024-02-06-pri-prodaji-vozila-je-treba-urediti-tudi-prenos-lastnistva-novemu-lastniku/)).",
      "Record all visible damage and what was handed over (keys, registration certificate, service book, winter tyres).",
      "The VIN in the report should be the same as in the agreement and the registration certificate."
    ]
  },
  "dokument": {
    "nazev": "Vehicle Handover Report",
    "podnadpis": "condition of the vehicle on handover and the exact time of taking over",
    "podpisy": {
      "vlevo": "handed over by",
      "vpravo": "taken over by"
    },
    "clanky": [
      {
        "nadpis": "Report",
        "odstavce": [
          "**Handed over by:** {{p_jmeno}}, {{p_adresa}}",
          "**Taken over by:** {{k_jmeno}}, {{k_adresa}}",
          "The vehicle {{znacka}}, VIN {{vin}}, registration plate {{spz}}, was handed over on {{datum}} at **{{cas}}**.",
          "Odometer reading: {{km}} km. Fuel: {{gorivo}}. Number of keys: {{kljuci}}. Documents handed over: {{dokumenti}}.",
          "Damage and notes: {{poskodbe}}",
          "From the stated time, the person taking over is responsible for the use of the vehicle, including traffic offences."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

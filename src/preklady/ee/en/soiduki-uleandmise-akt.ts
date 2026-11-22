/** English version of src/obsah/ee/soiduki-uleandmise-akt.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-AKT-SOIDUK",
    "verze": "1.0"
  },
  "nazev": "Vehicle Handover Report",
  "nazevA": "the vehicle handover report",
  "katalog": {
    "popis": "Mileage, damage, keys and handover time.",
    "slova": [
      "vehicle handover report Estonia",
      "car handover",
      "handover time",
      "mileage",
      "sõiduki üleandmise akt"
    ]
  },
  "landing": {
    "description": "Vehicle handover report for Estonia (sõiduki üleandmise-vastuvõtmise akt): exact time, mileage, fuel, keys, documents and damage. Proof against fines. Free PDF.",
    "perex": "Records the condition of the vehicle and the exact time of handover – important if a fine or parking notice arrives after the sale.",
    "obsahPopis": "A short report.",
    "obsah": [
      {
        "nazev": "Handover",
        "popis": "Who, to whom, when and at what time."
      },
      {
        "nazev": "Keys and documents",
        "popis": "What is handed over with the vehicle."
      },
      {
        "nazev": "Condition",
        "popis": "Damage and remarks."
      }
    ],
    "online": [
      "Takes over the details from the sale agreement",
      "VIN check",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are selling or lending a car",
      "you are returning a vehicle after a loan"
    ],
    "nehodiSe": [
      "you also need a contract – use the sale agreement"
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
        "q": "Why enter the handover time?",
        "a": "Until the change of ownership is in the register, fines and notices may reach the former owner – the report with the time proves who had the vehicle."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Estonian Law of Obligations Act.",
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
    "title": "Vehicle Handover Report Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the vehicle handover report online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the vehicle handover report under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "isikud": {
        "nazev": "Who hands over and who receives"
      },
      "soiduk": {
        "nazev": "The vehicle and its condition"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Handed over by – first name and surname",
        "placeholder": "e.g. Mari Tamm"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Received by – first name and surname",
        "placeholder": "e.g. Jaan Kask"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "znacka": {
        "popis": "Make and model",
        "placeholder": "e.g. Toyota Corolla"
      },
      "vin": {
        "popis": "VIN"
      },
      "spz": {
        "popis": "Registration plate"
      },
      "km": {
        "popis": "Mileage"
      },
      "kutus": {
        "popis": "Fuel in the tank",
        "placeholder": "e.g. half a tank"
      },
      "votmed": {
        "popis": "Number of keys"
      },
      "dokumendid": {
        "popis": "Documents handed over",
        "placeholder": "e.g. registration certificate, service book"
      },
      "kahjustused": {
        "popis": "Damage and remarks",
        "placeholder": "e.g. scratch on the rear bumper"
      },
      "kell": {
        "popis": "Handover time",
        "placeholder": "e.g. 14:30"
      },
      "misto": {
        "popis": "Place"
      },
      "datum": {
        "popis": "Handover date"
      }
    },
    "vysvetleni": [
      ""
    ],
    "coDal": [
      "Each party keeps one copy.",
      "Photograph the dashboard with the mileage and the vehicle from all sides."
    ],
    "kontrola": [
      "Enter the exact handover time – until the change of ownership is registered, fines may reach the former owner.",
      "Note all visible damage and what was handed over (keys, registration certificate, service book, winter tyres).",
      "The VIN in the report must be the same as in the agreement and the registration certificate."
    ],
    "prevzit": "the car sale agreement"
  },
  "dokument": {
    "nazev": "Vehicle Handover Report",
    "podnadpis": "condition of the vehicle on handover and exact time of acceptance",
    "podpisy": {
      "vlevo": "Handed over",
      "vpravo": "Received"
    },
    "clanky": [
      {
        "nadpis": "Report",
        "odstavce": [
          "**Handed over by:** {{p_jmeno}}, {{p_adresa}}",
          "**Received by:** {{k_jmeno}}, {{k_adresa}}",
          "The vehicle {{znacka}}, VIN {{vin}}, registration plate {{spz}}, was handed over on {{datum}} at **{{kell}}**.",
          "Mileage: {{km}} km. Fuel: {{kutus}}. Number of keys: {{votmed}}. Documents handed over: {{dokumendid}}.",
          "Damage and remarks: {{kahjustused}}",
          "From this time the recipient is responsible for the use of the vehicle, in particular for traffic offences."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

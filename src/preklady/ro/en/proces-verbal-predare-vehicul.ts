/** English version of src/obsah/ro/proces-verbal-predare-vehicul.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-PV-VEHICUL",
    "verze": "1.0"
  },
  "nazev": "Vehicle Handover Report",
  "nazevA": "the vehicle handover report",
  "katalog": {
    "popis": "Mileage, damage, keys and handover time.",
    "slova": [
      "vehicle handover report Romania",
      "car handover protocol",
      "proces verbal predare primire auto",
      "mileage",
      "damage"
    ]
  },
  "landing": {
    "description": "Vehicle handover report for Romania (proces-verbal de predare-primire): exact time, mileage, fuel, keys, documents and damage. Proof against fines. Free bilingual PDF.",
    "perex": "Records the condition of the vehicle and the exact time of handover – important if a fine arrives after the sale.",
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
      "Takes over the details from the agreement",
      "VIN check",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are selling or lending a car",
      "you are returning a vehicle after a loan"
    ],
    "nehodiSe": [
      "you also need an agreement – use the car sale agreement"
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
        "a": "Until the transfer is registered, fines may reach the former owner – the report with the time proves who had the vehicle."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Romanian Civil Code.",
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
    "title": "Vehicle Handover Report Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the vehicle handover report online – Romania, free PDF",
    "description": "Step-by-step guide in English for the vehicle handover report under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "persoane": {
        "nazev": "Who hands over and who receives"
      },
      "vehicul": {
        "nazev": "Vehicle and its condition"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Handing over – full name",
        "placeholder": "e.g. Andrei Popescu"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Receiving – full name",
        "placeholder": "e.g. Maria Ionescu"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "znacka": {
        "popis": "Make and model",
        "placeholder": "e.g. Dacia Logan"
      },
      "vin": {
        "popis": "VIN (vehicle identification number)"
      },
      "spz": {
        "popis": "Registration number"
      },
      "km": {
        "popis": "Odometer reading"
      },
      "combustibil": {
        "popis": "Fuel in the tank",
        "placeholder": "e.g. jumătate"
      },
      "chei": {
        "popis": "Number of keys"
      },
      "documente": {
        "popis": "Documents handed over",
        "placeholder": "e.g. certificat de înmatriculare, CIV, carnet de service"
      },
      "deteriorari": {
        "popis": "Damage and remarks",
        "placeholder": "e.g. zgârietură pe bara spate"
      },
      "ora": {
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
      "Enter the exact time of handover – until the transfer is registered, fines may reach the former owner.",
      "Note all visible damage and what was handed over (keys, registration certificate, CIV, service book, winter tyres).",
      "The VIN in the report must be the same as in the agreement and the registration certificate."
    ]
  },
  "dokument": {
    "nazev": "Vehicle Handover Report",
    "podnadpis": "condition of the vehicle on handover and the exact time of takeover",
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
          "The vehicle {{znacka}}, VIN {{vin}}, registration number {{spz}}, was handed over on {{datum}} at **{{ora}}**.",
          "Odometer: {{km}} km. Fuel: {{combustibil}}. Number of keys: {{chei}}. Documents handed over: {{documente}}.",
          "Damage and remarks: {{deteriorari}}",
          "From the time stated, the person who received the vehicle is responsible for its use, including traffic offences."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/bg/priemo-predavatelen-protokol-avtomobil.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-PROTOKOL-AVTO",
    "verze": "1.0"
  },
  "nazev": "Vehicle Handover Report",
  "nazevA": "the vehicle handover report",
  "katalog": {
    "popis": "Mileage, damage, keys and time of handover.",
    "slova": [
      "vehicle handover report Bulgaria",
      "car handover protocol",
      "handover time",
      "mileage",
      "priemo predavatelen protokol"
    ]
  },
  "landing": {
    "description": "Vehicle handover report for Bulgaria (приемо-предавателен протокол): exact time, mileage, fuel, keys, documents and damage. Evidence in case of fines. Free PDF.",
    "perex": "Records the condition of the car and the exact time of handover – important if a fine arrives after the sale.",
    "obsahPopis": "A short report.",
    "obsah": [
      {
        "nazev": "Handover",
        "popis": "Who, to whom, when and at what time."
      },
      {
        "nazev": "Keys and documents",
        "popis": "What is handed over with the car."
      },
      {
        "nazev": "Condition",
        "popis": "Damage and notes."
      }
    ],
    "online": [
      "Takes over the details from the agreement",
      "VIN check",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are selling or lending a car",
      "you are returning a car after a loan"
    ],
    "nehodiSe": [
      "you also need an agreement – use the sale agreement"
    ],
    "po": [
      {
        "nazev": "Photos",
        "popis": "Photograph the car and the odometer."
      },
      {
        "nazev": "Copies",
        "popis": "Each party keeps one."
      }
    ],
    "faq": [
      {
        "q": "Why enter the time of handover?",
        "a": "Until the buyer registers the car, fines may reach the former owner – the report with the time proves who had the vehicle."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Obligations and Contracts Act.",
    "title": "Vehicle Handover Report Bulgaria {rok} – free PDF template",
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
    "souvisejiciPopis": "More documents, also free."
  },
  "vytvorit": {
    "title": "Fill in the vehicle handover report online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the vehicle handover report under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "litsa": {
        "nazev": "Who hands over and who receives"
      },
      "avtomobil": {
        "nazev": "The vehicle and its condition"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Hands over – full name",
        "placeholder": "e.g. Иван Петров Иванов"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Receives – full name",
        "placeholder": "e.g. Мария Георгиева Димитрова"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "znacka": {
        "popis": "Make and model",
        "placeholder": "e.g. Volkswagen Golf"
      },
      "vin": {
        "popis": "VIN (frame number)"
      },
      "spz": {
        "popis": "Registration number"
      },
      "km": {
        "popis": "Odometer reading"
      },
      "gorivo": {
        "popis": "Fuel in the tank",
        "placeholder": "e.g. половин резервоар"
      },
      "klyuchove": {
        "popis": "Number of keys"
      },
      "dokumenti": {
        "popis": "Documents handed over",
        "placeholder": "e.g. свидетелство за регистрация част I и II, сервизна книжка"
      },
      "povredi": {
        "popis": "Damage and notes",
        "placeholder": "e.g. драскотина по задната броня"
      },
      "chas": {
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
      "Photograph the dashboard with the mileage and the car from all sides."
    ],
    "kontrola": [
      "Enter the exact time of handover – until the buyer registers the car, fines may reach the former owner.",
      "Record all visible damage and what was handed over (keys, registration certificate, service book, winter tyres).",
      "The VIN in the report must be the same as in the agreement and the registration certificate."
    ],
    "prevzit": "the car sale agreement"
  },
  "dokument": {
    "nazev": "Vehicle Handover Report",
    "podnadpis": "condition of the vehicle on handover and the exact time of acceptance",
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
          "Vehicle {{znacka}}, VIN {{vin}}, registration number {{spz}}, was handed over on {{datum}} at **{{chas}}**.",
          "Odometer: {{km}} km. Fuel: {{gorivo}}. Number of keys: {{klyuchove}}. Documents handed over: {{dokumenti}}.",
          "Damage and notes: {{povredi}}",
          "From the stated time, the person who received the vehicle is responsible for its use, including traffic offences."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

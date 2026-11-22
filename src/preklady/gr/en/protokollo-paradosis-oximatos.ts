/** English version of src/obsah/gr/protokollo-paradosis-oximatos.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-PROTOKOLLO-OXIMA",
    "verze": "1.0"
  },
  "nazev": "Vehicle Handover Report",
  "nazevA": "the vehicle handover report",
  "katalog": {
    "popis": "Mileage, damage, keys and handover time.",
    "slova": [
      "vehicle handover report Greece",
      "car handover",
      "handover time",
      "mileage",
      "protokollo paradosis oximatos"
    ]
  },
  "landing": {
    "description": "Vehicle handover report for Greece (πρωτόκολλο παράδοσης-παραλαβής οχήματος): exact time, mileage, fuel, keys, documents and damage. Proof against fines. Free PDF.",
    "perex": "Records the condition of the vehicle and the exact time of handover – important if a penalty notice or fine arrives after the sale.",
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
      "you also need a contract – use the car sale agreement"
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
        "a": "Until the transfer is completed, penalty notices and fines may reach the former owner – the report with the time proves who had the vehicle."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Greek Civil Code.",
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
    "title": "Vehicle Handover Report Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the vehicle handover report online – Greece, free PDF",
    "description": "Step-by-step guide in English for the vehicle handover report under Greek law. Bilingual PDF or Word with the original text, free of charge.",
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
      "prosopa": {
        "nazev": "Who hands over and who receives"
      },
      "oxima": {
        "nazev": "The vehicle and its condition"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Handed over by – full name",
        "placeholder": "e.g. Γεώργιος Παπαδόπουλος"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Received by – full name",
        "placeholder": "e.g. Μαρία Κωνσταντίνου"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "znacka": {
        "popis": "Make and model",
        "placeholder": "e.g. Toyota Yaris"
      },
      "vin": {
        "popis": "VIN (chassis number)"
      },
      "spz": {
        "popis": "Registration number"
      },
      "km": {
        "popis": "Mileage"
      },
      "kaysimo": {
        "popis": "Fuel in the tank",
        "placeholder": "e.g. μισό ρεζερβουάρ"
      },
      "kleidia": {
        "popis": "Number of keys"
      },
      "eggrafa": {
        "popis": "Documents handed over",
        "placeholder": "e.g. άδεια κυκλοφορίας, βιβλίο σέρβις, δελτίο ΚΤΕΟ"
      },
      "zimies": {
        "popis": "Damage and remarks",
        "placeholder": "e.g. γρατζουνιά στον πίσω προφυλακτήρα"
      },
      "ora": {
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
      "Enter the exact handover time – until the transfer is completed, penalty notices and fines may reach the previous owner.",
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
          "The vehicle {{znacka}}, VIN {{vin}}, registration number {{spz}}, was handed over on {{datum}} at **{{ora}}**.",
          "Mileage: {{km}} km. Fuel: {{kaysimo}}. Number of keys: {{kleidia}}. Documents handed over: {{eggrafa}}.",
          "Damage and remarks: {{zimies}}",
          "From this time the recipient is responsible for the use of the vehicle, in particular for offences under the Road Traffic Code."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

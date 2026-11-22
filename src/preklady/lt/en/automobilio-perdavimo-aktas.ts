/** English version of src/obsah/lt/automobilio-perdavimo-aktas.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-AKTAS-AUTO",
    "verze": "1.0"
  },
  "nazev": "Vehicle Handover Report",
  "nazevA": "the vehicle handover report",
  "katalog": {
    "popis": "Mileage, damage, keys and handover time.",
    "slova": [
      "vehicle handover report Lithuania",
      "car handover protocol",
      "car handover",
      "mileage",
      "perdavimo priėmimo aktas"
    ]
  },
  "landing": {
    "description": "Vehicle handover report for Lithuania (perdavimo–priėmimo aktas): exact time, mileage, fuel, keys, documents and damage. Free PDF and Word.",
    "perex": "Records the condition of the vehicle and the exact handover time – important if a fine or parking charge arrives after the sale.",
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
      "you also need an agreement – use the sale agreement"
    ],
    "po": [
      {
        "nazev": "Photos",
        "popis": "Photograph the vehicle and the speedometer."
      },
      {
        "nazev": "Copies",
        "popis": "Each party keeps one."
      }
    ],
    "faq": [
      {
        "q": "Why write down the handover time?",
        "a": "Until the change of ownership is declared at Regitra, the registered person is treated as the owner – fines and notices may reach them. A report with the time proves who had the vehicle."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Civil Code of the Republic of Lithuania.",
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
    "title": "Vehicle Handover Report Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the vehicle handover report online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the vehicle handover report under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "asmenys": {
        "nazev": "Who hands over and who takes over"
      },
      "transporto_priemone": {
        "nazev": "Vehicle and condition"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Handed over by – first name and surname",
        "placeholder": "e.g. Rūta Kazlauskienė"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Taken over by – first name and surname",
        "placeholder": "e.g. Tomas Petrauskas"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "znacka": {
        "popis": "Make and model",
        "placeholder": "e.g. Toyota Corolla"
      },
      "vin": {
        "popis": "Vehicle identification number (VIN)"
      },
      "spz": {
        "popis": "Registration number"
      },
      "km": {
        "popis": "Mileage"
      },
      "degviela": {
        "popis": "Fuel in the tank",
        "placeholder": "e.g. half a tank"
      },
      "atslegas": {
        "popis": "Number of keys"
      },
      "dokumenti": {
        "popis": "Documents handed over",
        "placeholder": "e.g. registration certificate, service book"
      },
      "bojajumi": {
        "popis": "Damage and remarks",
        "placeholder": "e.g. scratch on the rear bumper"
      },
      "laiks": {
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
      "Photograph the instrument panel with the mileage and the vehicle from all sides."
    ],
    "kontrola": [
      "Enter the exact handover time – until the change of ownership is declared at Regitra, the state treats the registered person as the owner, so fines may reach them ([Regitra](https://www.regitra.lt/en/services/vehicle-registration/i-have-purchased-a-vehicle/i-have-purchased-in-lithuania-previously-registered-in-lithuania/)).",
      "Note all visible damage and what was handed over (keys, registration certificate, service book, winter tyres).",
      "The VIN in the report must be the same as in the agreement and the registration certificate."
    ],
    "prevzit": "vehicle sale agreement"
  },
  "dokument": {
    "nazev": "Vehicle Handover Report",
    "podnadpis": "condition of the vehicle at handover and the exact handover time",
    "podpisy": {
      "vlevo": "Handed over",
      "vpravo": "Taken over"
    },
    "clanky": [
      {
        "nadpis": "Report",
        "odstavce": [
          "**Handed over by:** {{p_jmeno}}, {{p_adresa}}",
          "**Taken over by:** {{k_jmeno}}, {{k_adresa}}",
          "Vehicle {{znacka}}, vehicle identification number (VIN) {{vin}}, registration number {{spz}}, handed over on {{datum}} at **{{laiks}}**.",
          "Mileage: {{km}} km. Fuel: {{degviela}}. Number of keys: {{atslegas}}. Documents handed over: {{dokumenti}}.",
          "Damage and remarks: {{bojajumi}}",
          "From this moment the person taking over is responsible for the use of the vehicle, in particular for traffic offences."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/hr/primopredajni-zapisnik-vozila.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-ZAPISNIK-VOZILO",
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
      "vehicle damage",
      "primopredajni zapisnik vozila"
    ]
  },
  "landing": {
    "description": "Vehicle handover report for Croatia (primopredajni zapisnik): exact time, mileage, fuel, keys, documents and damage. Evidence against later fines. Free bilingual PDF.",
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
        "a": "Until the change of ownership, offences may be sent to the previous owner – a report with the time proves who had the vehicle."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima).",
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
    "title": "Vehicle Handover Report Croatia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the vehicle handover report online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the vehicle handover report under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podaci": {
        "nazev": "Vehicle and handover"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Handed over by (full name)"
      },
      "k_jmeno": {
        "popis": "Taken over by (full name)"
      },
      "znacka": {
        "popis": "Make and model"
      },
      "vin": {
        "popis": "VIN (chassis number)"
      },
      "spz": {
        "popis": "Registration plate"
      },
      "km": {
        "popis": "Mileage"
      },
      "gorivo": {
        "popis": "Fuel level",
        "placeholder": "e.g. pola spremnika (half a tank)"
      },
      "vrijeme": {
        "popis": "Time of handover",
        "placeholder": "e.g. 14:30"
      },
      "kljucevi": {
        "popis": "Number of keys"
      },
      "dokumenti": {
        "popis": "Documents handed over",
        "placeholder": "e.g. prometna dozvola, servisna knjižica (registration certificate, service book)"
      },
      "oprema": {
        "popis": "Additional equipment",
        "placeholder": "e.g. zimske gume na felgama (winter tyres on rims)"
      },
      "ostecenja": {
        "popis": "Damage and notes"
      },
      "misto": {
        "popis": "Place"
      },
      "datum": {
        "popis": "Date"
      }
    },
    "vysvetleni": [
      "",
      "",
      ""
    ],
    "coDal": [
      "Both parties sign each copy.",
      "Photograph the vehicle and the odometer at the moment of handover."
    ],
    "kontrola": [
      "Enter the exact time of handover – until the change of ownership, offences may be sent to the previous owner.",
      "Compare the VIN in the registration certificate with the one on the vehicle.",
      "List all keys, documents and equipment handed over (winter tyres, roof rack)."
    ]
  },
  "dokument": {
    "nazev": "Vehicle Handover Report",
    "podnadpis": "condition of the vehicle, keys and documents on handover",
    "podpisy": {
      "vlevo": "handed over by",
      "vpravo": "taken over by"
    },
    "clanky": [
      {
        "nadpis": "Handover of the vehicle",
        "odstavce": [
          "{{p_jmeno}} hands over and {{k_jmeno}} takes over the vehicle {{znacka}}, VIN {{vin}}, registration plate {{spz}}, on {{datum}} at {{vrijeme}}.",
          "Odometer reading: {{km}} km. Fuel level: {{gorivo}}."
        ]
      },
      {
        "nadpis": "Keys, documents and equipment",
        "odstavce": [
          "Number of keys: {{kljucevi}}",
          "Documents: {{dokumenti}}",
          "Additional equipment: {{oprema}}"
        ]
      },
      {
        "nadpis": "Condition of the vehicle",
        "odstavce": [
          "Damage and notes: {{ostecenja}}",
          "From the moment of handover, the person who took over the vehicle is responsible for it and its use."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

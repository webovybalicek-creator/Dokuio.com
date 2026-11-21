/** English version of src/obsah/hr/primopredajni-zapisnik-stana.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-ZAPISNIK-STAN",
    "verze": "1.0"
  },
  "nazev": "Flat Handover Report",
  "nazevA": "the flat handover report",
  "katalog": {
    "popis": "Meters, keys and the condition of the flat.",
    "slova": [
      "flat handover report",
      "move-in report",
      "move-out inspection",
      "meter readings",
      "primopredajni zapisnik stana"
    ]
  },
  "landing": {
    "title": "Flat Handover Report Croatia {rok} – free PDF template",
    "description": "Flat handover report for Croatia (primopredajni zapisnik stana) on moving in or out: meter readings, keys, furniture and damage. Basis for the deposit refund. Free PDF.",
    "perex": "Records the condition of the flat on moving in and out – the basis for getting the deposit back without a dispute.",
    "obsahPopis": "A report in three parts.",
    "obsah": [
      {
        "nazev": "Handover",
        "popis": "Moving in or moving out."
      },
      {
        "nazev": "Meters",
        "popis": "Electricity, water, gas, heating."
      },
      {
        "nazev": "Condition",
        "popis": "Keys, equipment, damage."
      }
    ],
    "online": [
      "Details from the lease agreement",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are moving into or out of a rented flat"
    ],
    "nehodiSe": [
      "you are buying a flat – you need a different document"
    ],
    "po": [
      {
        "nazev": "Photos",
        "popis": "With the date."
      }
    ],
    "faq": [
      {
        "q": "Why a report?",
        "a": "On moving out the condition is compared – what is not recorded is hard to prove later."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Housing Lease Act (Zakon o najmu stanova).",
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
    "title": "Fill in the flat handover report online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the flat handover report under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
        "nazev": "Flat and parties"
      }
    },
    "pole": {
      "smer": {
        "popis": "Type of handover",
        "moznosti": {
          "uselenje": "Handing the flat to the tenant (moving in)",
          "iselenje": "Returning the flat to the landlord (moving out)"
        }
      },
      "adresa": {
        "popis": "Address of the flat"
      },
      "p_jmeno": {
        "popis": "Landlord"
      },
      "k_jmeno": {
        "popis": "Tenant"
      },
      "struja": {
        "popis": "Electricity meter – reading"
      },
      "voda": {
        "popis": "Water meter – reading"
      },
      "plin": {
        "popis": "Gas meter – reading"
      },
      "grijanje": {
        "popis": "Heating – reading (optional)"
      },
      "kljucevi": {
        "popis": "Keys",
        "placeholder": "e.g. 2 ključa od stana, 1 od zgrade (2 flat keys, 1 building key)"
      },
      "oprema": {
        "popis": "Furniture and equipment"
      },
      "ostecenja": {
        "popis": "Damage and notes",
        "placeholder": "e.g. ogrebotina na parketu u dnevnoj sobi (scratch on the parquet in the living room)"
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
      "Save photos of the flat with the date – they supplement the report."
    ],
    "kontrola": [
      "Read all meters (electricity, water, gas, heating) and enter the meter numbers.",
      "Describe damage specifically and photograph it.",
      "Enter the number of keys and remote controls handed over."
    ]
  },
  "dokument": {
    "nazev": "Flat Handover Report",
    "podnadpis": "condition of the flat, meters and keys on handover",
    "podpisy": {
      "vlevo": "Landlord",
      "vpravo": "Tenant"
    },
    "clanky": [
      {
        "nadpis": "Handover",
        "odstavce": [
          {
            "uvodVzor": "Type (tick one option):",
            "moznosti": {
              "uselenje": "The Landlord {{p_jmeno}} hands over to the Tenant {{k_jmeno}} the flat at {{adresa}}.",
              "iselenje": "The Tenant {{k_jmeno}} returns to the Landlord {{p_jmeno}} the flat at {{adresa}}."
            }
          }
        ]
      },
      {
        "nadpis": "Meter readings",
        "odstavce": [
          "Electricity: {{struja}}",
          "Water: {{voda}}",
          "Gas: {{plin}}",
          "Heating: {{grijanje}}"
        ]
      },
      {
        "nadpis": "Keys, equipment and condition",
        "odstavce": [
          "Keys handed over: {{kljucevi}}",
          "Furniture and equipment: {{oprema}}",
          "Damage and notes: {{ostecenja}}",
          "The parties confirm that the report corresponds to the actual condition of the flat."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

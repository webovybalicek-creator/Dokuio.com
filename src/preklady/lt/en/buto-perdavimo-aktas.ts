/** English version of src/obsah/lt/buto-perdavimo-aktas.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-AKTAS-BUTAS",
    "verze": "1.0"
  },
  "nazev": "Flat Handover Report",
  "nazevA": "the flat handover report",
  "katalog": {
    "popis": "Meters, keys, equipment and damage.",
    "slova": [
      "flat handover report Lithuania",
      "apartment handover protocol",
      "meter readings move in",
      "buto perdavimo aktas"
    ]
  },
  "landing": {
    "description": "Handover report for residential premises in Lithuania (perdavimo–priėmimo aktas): meters, keys, equipment and damage at the start or end of the lease. Free PDF.",
    "perex": "At the start and end of the lease – records the meters, keys, equipment and damage. Helps when the deposit is returned.",
    "obsahPopis": "A short report.",
    "obsah": [
      {
        "nazev": "Report",
        "popis": "Meters, keys, equipment, damage."
      }
    ],
    "online": [
      "Takes over the details from the lease agreement",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are handing over or returning a rented flat"
    ],
    "nehodiSe": [
      "you need the lease agreement itself"
    ],
    "po": [
      {
        "nazev": "Photos",
        "popis": "Photograph the meters and every room."
      }
    ],
    "faq": [
      {
        "q": "What is the report for?",
        "a": "It proves the condition of the premises at handover – at the end of the lease it is easier to settle what was there and what appeared later, and to return the deposit."
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
    "title": "Flat Handover Report Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the flat handover report online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the flat handover report under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "salys": {
        "nazev": "Parties and premises"
      },
      "bukle": {
        "nazev": "Meters, keys, condition"
      }
    },
    "pole": {
      "veids": {
        "popis": "When is the report drawn up",
        "moznosti": {
          "sakums": "at the start of the lease (handover to the tenant)",
          "beigas": "at the end of the lease (return to the landlord)"
        }
      },
      "p_jmeno": {
        "popis": "Landlord – first name and surname"
      },
      "k_jmeno": {
        "popis": "Tenant – first name and surname"
      },
      "byt": {
        "popis": "Address of the premises"
      },
      "elektriba": {
        "popis": "Electricity meter",
        "placeholder": "e.g. 012345 kWh"
      },
      "udens": {
        "popis": "Water meters",
        "placeholder": "e.g. cold 234.5 m³, hot 98.1 m³"
      },
      "gaze": {
        "popis": "Gas or heat meter"
      },
      "atslegas": {
        "popis": "Keys",
        "placeholder": "e.g. 2 front door keys, 1 letterbox key"
      },
      "iekartojums": {
        "popis": "Equipment",
        "placeholder": "e.g. fridge, cooker, washing machine, sofa"
      },
      "bojajumi": {
        "popis": "Damage and remarks",
        "placeholder": "e.g. stain on the living room wall"
      },
      "misto": {
        "popis": "Place"
      },
      "datum": {
        "popis": "Date"
      }
    },
    "vysvetleni": [
      ""
    ],
    "coDal": [
      "Each party keeps one copy.",
      "Photograph the meters and every room.",
      "Report the meter readings to the service providers or the building administrator."
    ],
    "kontrola": [
      "On the day of handover, record the readings of all meters (electricity, water, gas, heat).",
      "Note the existing damage and equipment – this helps when the deposit is returned at the end of the lease.",
      "The tenant is not liable for normal wear and tear; the tenant is liable for damage caused through their fault."
    ],
    "prevzit": "residential lease agreement"
  },
  "dokument": {
    "nazev": "Handover Report for Residential Premises",
    "podnadpis": "condition of the premises, meters and keys",
    "podpisy": {
      "vlevo": "Landlord",
      "vpravo": "Tenant"
    },
    "clanky": [
      {
        "nadpis": "Report",
        "odstavce": [
          "**Landlord:** {{p_jmeno}} · **Tenant:** {{k_jmeno}}",
          {
            "uvodVzor": "The report is drawn up (tick one option):",
            "moznosti": {
              "sakums": "The Landlord hands over and the Tenant takes over the residential premises at {{byt}}.",
              "beigas": "The Tenant returns and the Landlord takes back the residential premises at {{byt}}."
            }
          },
          "Meter readings – electricity: {{elektriba}}, water: {{udens}}, gas / heat: {{gaze}}.",
          "Keys handed over: {{atslegas}}.",
          "Equipment: {{iekartojums}}",
          "Damage and remarks: {{bojajumi}}",
          "The parties confirm that the condition of the premises corresponds to the above description."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

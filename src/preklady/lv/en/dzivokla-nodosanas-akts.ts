/** English version of src/obsah/lv/dzivokla-nodosanas-akts.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-AKTS-DZIVOKLIS",
    "verze": "1.0"
  },
  "nazev": "Dwelling Handover Report",
  "nazevA": "the dwelling handover report",
  "katalog": {
    "popis": "Meter readings, keys and condition.",
    "slova": [
      "flat handover report Latvia",
      "apartment inventory",
      "meter readings",
      "dzīvokļa nodošanas akts"
    ]
  },
  "landing": {
    "description": "Dwelling handover report for Latvia (dzīvojamās telpas pieņemšanas-nodošanas akts): meter readings, keys, furnishing and damage at the start or end of a lease. Free PDF.",
    "perex": "At the start and end of a lease: meters, keys and condition. It helps in disputes about the security deposit.",
    "obsahPopis": "A short report.",
    "obsah": [
      {
        "nazev": "Report",
        "popis": "Meters, keys, furnishing, damage."
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
      "you also need an agreement – use the lease agreement"
    ],
    "po": [
      {
        "nazev": "Photos",
        "popis": "Photograph the meters and the rooms."
      }
    ],
    "faq": [
      {
        "q": "Why is the report important?",
        "a": "It proves the condition in which the flat was handed over – at the end of the lease you can compare and decide on the security deposit."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Latvian Residential Tenancy Law.",
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
    "title": "Dwelling Handover Report Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the dwelling handover report online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the dwelling handover report under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "puses": {
        "nazev": "Parties and dwelling"
      },
      "stavoklis": {
        "nazev": "Meters, keys, condition"
      }
    },
    "pole": {
      "veids": {
        "popis": "When the report is drawn up",
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
        "popis": "Address of the dwelling"
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
        "placeholder": "e.g. 2 front door keys, 1 mailbox key"
      },
      "iekartojums": {
        "popis": "Furnishing",
        "placeholder": "e.g. fridge, cooker, washing machine, sofa"
      },
      "bojajumi": {
        "popis": "Damage and remarks",
        "placeholder": "e.g. stain on the living-room wall"
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
      "Report the meter readings to the service providers or the property manager."
    ],
    "kontrola": [
      "On the day of handover, write down the readings of all meters (electricity, water, gas, heat).",
      "Note the existing damage and furnishing – it helps at the end of the lease when the security deposit is returned.",
      "The tenant does not pay for normal wear and tear; the tenant is liable for damage caused by negligence."
    ],
    "prevzit": "residential lease agreement"
  },
  "dokument": {
    "nazev": "Dwelling Handover Report",
    "podnadpis": "condition of the dwelling, meters and keys",
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
              "sakums": "The Landlord hands over and the Tenant takes over the dwelling at {{byt}}.",
              "beigas": "The Tenant returns and the Landlord takes back the dwelling at {{byt}}."
            }
          },
          "Meter readings – electricity: {{elektriba}}, water: {{udens}}, gas/heat: {{gaze}}.",
          "Keys handed over: {{atslegas}}.",
          "Furnishing: {{iekartojums}}",
          "Damage and remarks: {{bojajumi}}",
          "The parties confirm that the condition of the dwelling corresponds to the description above."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

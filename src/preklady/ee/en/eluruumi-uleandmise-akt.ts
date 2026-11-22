/** English version of src/obsah/ee/eluruumi-uleandmise-akt.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-AKT-ELURUUM",
    "verze": "1.0"
  },
  "nazev": "Dwelling Handover Report",
  "nazevA": "the dwelling handover report",
  "katalog": {
    "popis": "Meter readings, keys and condition of the dwelling.",
    "slova": [
      "dwelling handover report Estonia",
      "flat handover",
      "meter readings",
      "end of lease",
      "eluruumi üleandmise akt"
    ]
  },
  "landing": {
    "description": "Dwelling handover report for Estonia (eluruumi üleandmise-vastuvõtmise akt): meter readings, keys, condition and defects at the start or end of the lease. Free PDF.",
    "perex": "Records the condition of the dwelling, meter readings and keys at the start or end of the lease – the basis for returning the deposit.",
    "obsahPopis": "A short report.",
    "obsah": [
      {
        "nazev": "Handover",
        "popis": "Who, to whom and when."
      },
      {
        "nazev": "Meters",
        "popis": "Electricity, water, gas, heating."
      },
      {
        "nazev": "Keys",
        "popis": "How many and which."
      },
      {
        "nazev": "Condition",
        "popis": "Defects and remarks."
      }
    ],
    "online": [
      "Takes over the details from the lease agreement",
      "PDF and Word"
    ],
    "hodiSe": [
      "the lease starts or ends",
      "you want to record the condition"
    ],
    "nehodiSe": [
      "you need a lease agreement – use the lease template"
    ],
    "po": [
      {
        "nazev": "Photos",
        "popis": "Photograph the rooms and meter readings."
      },
      {
        "nazev": "Copies",
        "popis": "Each party keeps one."
      }
    ],
    "faq": [
      {
        "q": "Must the tenant remedy normal wear and tear?",
        "a": "The tenant can be required to remedy normal wear and tear only if this has been agreed in the lease agreement."
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
    "title": "Dwelling Handover Report Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the dwelling handover report online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the dwelling handover report under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "pooled": {
        "nazev": "Parties and dwelling"
      },
      "seisukord": {
        "nazev": "Meters, keys, condition"
      }
    },
    "pole": {
      "liik": {
        "popis": "When the report is drawn up",
        "moznosti": {
          "algus": "at the start of the lease (handover to the tenant)",
          "lopp": "at the end of the lease (return to the landlord)"
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
      "elekter": {
        "popis": "Electricity meter",
        "placeholder": "e.g. 012345 kWh"
      },
      "vesi": {
        "popis": "Water meter",
        "placeholder": "e.g. 234,5 m³"
      },
      "gaas": {
        "popis": "Gas or heat meter"
      },
      "votmed": {
        "popis": "Keys",
        "placeholder": "e.g. 2 front door keys, 1 mailbox key"
      },
      "sisustus": {
        "popis": "Furnishings",
        "placeholder": "e.g. fridge, cooker, washing machine, sofa"
      },
      "kahjustused": {
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
      "Report the meter readings to the service providers."
    ],
    "kontrola": [
      "On the day of handover, write down the readings of all meters (electricity, water, gas, heat).",
      "Note existing damage and furnishings – this helps with the return of the deposit at the end of the lease.",
      "The tenant can be required to remedy normal wear and tear (e.g. painting the walls) only if this has been agreed in the lease agreement; the tenant is liable for damage caused by negligence."
    ],
    "prevzit": "the residential lease agreement"
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
              "algus": "The Landlord hands over and the Tenant accepts the dwelling at {{byt}}.",
              "lopp": "The Tenant returns and the Landlord accepts the dwelling at {{byt}}."
            }
          },
          "Meter readings – electricity: {{elekter}}, water: {{vesi}}, gas/heat: {{gaas}}.",
          "Keys handed over: {{votmed}}.",
          "Furnishings: {{sisustus}}",
          "Damage and remarks: {{kahjustused}}",
          "The parties confirm that the condition of the dwelling corresponds to the above description."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

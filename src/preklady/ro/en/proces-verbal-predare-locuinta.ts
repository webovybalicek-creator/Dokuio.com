/** English version of src/obsah/ro/proces-verbal-predare-locuinta.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-PV-LOCUINTA",
    "verze": "1.0"
  },
  "nazev": "Flat Handover Report",
  "nazevA": "the flat handover report",
  "katalog": {
    "popis": "Meters, keys and the condition of the home.",
    "slova": [
      "flat handover report Romania",
      "meter readings",
      "handover of keys",
      "condition of the flat",
      "proces verbal predare apartament"
    ]
  },
  "landing": {
    "description": "Flat handover report for Romania (proces-verbal de predare-primire a locuinței): meter readings, keys, furnishings and damage on moving in or out. Free bilingual PDF.",
    "perex": "Records the condition of the home and the meter readings on moving in and out – the basis for returning the deposit.",
    "obsahPopis": "A short report.",
    "obsah": [
      {
        "nazev": "Report",
        "popis": "Meters, keys, furnishings and damage."
      }
    ],
    "online": [
      "Takes over the details from the agreement",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are moving into or out of a rented home"
    ],
    "nehodiSe": [
      "you also need an agreement – use the lease agreement"
    ],
    "po": [
      {
        "nazev": "Photos",
        "popis": "Photograph the home and the meters."
      }
    ],
    "faq": [
      {
        "q": "Why does it matter?",
        "a": "On moving out, the condition is compared with the report from moving in – what is not written down is hard to prove. Normal wear and tear is not damage."
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
    "title": "Flat Handover Report Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the flat handover report online – Romania, free PDF",
    "description": "Step-by-step guide in English for the flat handover report under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "date": {
        "nazev": "Handover"
      }
    },
    "pole": {
      "tip": {
        "popis": "Handover on",
        "moznosti": {
          "mutare": "moving in",
          "eliberare": "moving out"
        }
      },
      "p_jmeno": {
        "popis": "Landlord"
      },
      "k_jmeno": {
        "popis": "Tenant"
      },
      "adresa_locuinta": {
        "popis": "Address of the home"
      },
      "curent": {
        "popis": "Electricity meter"
      },
      "apa": {
        "popis": "Water meter"
      },
      "gaz": {
        "popis": "Gas meter or heat cost allocators"
      },
      "chei": {
        "popis": "Keys",
        "placeholder": "e.g. 2× ușă, 1× cutie poștală"
      },
      "dotari": {
        "popis": "Furnishings and condition",
        "placeholder": "e.g. bucătărie fără deteriorări, mașina de spălat funcționează"
      },
      "deteriorari": {
        "popis": "Damage and remarks"
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
      "Photograph the home and the meters, with the date.",
      "Each party keeps one copy."
    ],
    "kontrola": [
      "On moving out, the condition is compared with the report from moving in – what is not written down is hard to prove later.",
      "Normal wear and tear is not damage."
    ]
  },
  "dokument": {
    "nazev": "Flat Handover Report",
    "podnadpis": "condition of the home and meter readings",
    "podpisy": {
      "vlevo": "Landlord",
      "vpravo": "Tenant"
    },
    "clanky": [
      {
        "nadpis": "Report",
        "odstavce": [
          {
            "uvodVzor": "Handover (tick one option):",
            "moznosti": {
              "mutare": "The Landlord {{p_jmeno}} hands over to the Tenant {{k_jmeno}} the home at {{adresa_locuinta}} on moving in.",
              "eliberare": "The Tenant {{k_jmeno}} hands back to the Landlord {{p_jmeno}} the home at {{adresa_locuinta}} on moving out."
            }
          },
          "Meter readings – electricity: {{curent}}, water: {{apa}}, gas or heat cost allocators: {{gaz}}.",
          "Keys: {{chei}}.",
          "Furnishings and condition: {{dotari}}",
          "Damage and remarks: {{deteriorari}}"
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

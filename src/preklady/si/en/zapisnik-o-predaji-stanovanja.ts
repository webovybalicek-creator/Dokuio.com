/** English version of src/obsah/si/zapisnik-o-predaji-stanovanja.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-ZAPISNIK-STAN",
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
      "zapisnik o predaji stanovanja"
    ]
  },
  "landing": {
    "title": "Flat Handover Report Slovenia {rok} – free PDF template",
    "description": "Flat handover report for Slovenia (zapisnik o predaji stanovanja): meter readings, keys, equipment and damage on moving in or out. Proof for the deposit refund. Free PDF.",
    "perex": "Records the meters, keys and condition on moving in and out – the fewest disputes over the deposit.",
    "obsahPopis": "A report in three parts.",
    "obsah": [
      {
        "nazev": "Handover",
        "popis": "Who, when, moving in or out."
      },
      {
        "nazev": "Meters and keys",
        "popis": "Electricity, water, gas, heating."
      },
      {
        "nazev": "Condition",
        "popis": "Equipment and damage."
      }
    ],
    "online": [
      "Details from the lease agreement",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are moving in or out",
      "you are selling a flat"
    ],
    "nehodiSe": [
      "you need an agreement – use the residential lease agreement"
    ],
    "po": [
      {
        "nazev": "Photos",
        "popis": "Photograph the meters and any damage."
      }
    ],
    "faq": [
      {
        "q": "Why a report?",
        "a": "Without it, it is hard to prove which damage was already there when you moved in."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Housing Act (Stanovanjski zakon) and the Obligations Code (Obligacijski zakonik).",
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
    "title": "Fill in the flat handover report online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the flat handover report under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podatki": {
        "nazev": "Handover"
      }
    },
    "pole": {
      "vrsta": {
        "popis": "Handover on",
        "moznosti": {
          "vselitev": "moving in",
          "izselitev": "moving out"
        }
      },
      "p_jmeno": {
        "popis": "Landlord"
      },
      "k_jmeno": {
        "popis": "Tenant"
      },
      "naslov": {
        "popis": "Address of the flat"
      },
      "elektrika": {
        "popis": "Electricity meter"
      },
      "voda": {
        "popis": "Water meter"
      },
      "plin": {
        "popis": "Gas or heat meter"
      },
      "kljuci": {
        "popis": "Keys",
        "placeholder": "e.g. 2× vhod, 1× nabiralnik (2× entrance, 1× letterbox)"
      },
      "oprema": {
        "popis": "Equipment and condition",
        "placeholder": "e.g. kuhinja brez poškodb, pralni stroj deluje (kitchen undamaged, washing machine works)"
      },
      "poskodbe": {
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
      ""
    ],
    "coDal": [
      "Photograph the flat and the meters with the date.",
      "Each party keeps one copy."
    ],
    "kontrola": [
      "On moving out, the condition is compared with the report made on moving in – what is not recorded is hard to prove later.",
      "Normal wear and tear is not damage."
    ]
  },
  "dokument": {
    "nazev": "Flat Handover Report",
    "podnadpis": "condition of the flat and the meters",
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
              "vselitev": "The Landlord {{p_jmeno}} hands over to the Tenant {{k_jmeno}} the flat at {{naslov}} on moving in.",
              "izselitev": "The Tenant {{k_jmeno}} returns to the Landlord {{p_jmeno}} the flat at {{naslov}} on moving out."
            }
          },
          "Meter readings – electricity: {{elektrika}}, water: {{voda}}, gas or heat: {{plin}}.",
          "Keys: {{kljuci}}.",
          "Equipment and condition: {{oprema}}",
          "Damage and notes: {{poskodbe}}"
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

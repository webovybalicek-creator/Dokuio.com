/** English version of src/obsah/bg/priemo-predavatelen-protokol-zhilishte.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-PROTOKOL-ZHILISHTE",
    "verze": "1.0"
  },
  "nazev": "Property Handover Report",
  "nazevA": "the property handover report",
  "katalog": {
    "popis": "Meter readings, keys and condition of the home.",
    "slova": [
      "property handover report Bulgaria",
      "move-in report",
      "meter readings",
      "flat handover",
      "protokol za zhilishte"
    ]
  },
  "landing": {
    "description": "Property handover report for Bulgaria (приемо-предавателен протокол): meter readings, keys, furnishings and damage when moving in or out. Free PDF and Word.",
    "perex": "Records the condition of the home when moving in and moving out. Prevents disputes over the deposit.",
    "obsahPopis": "A short report.",
    "obsah": [
      {
        "nazev": "Report",
        "popis": "Meters, keys, furnishings and damage."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "you are moving into or out of a rented home"
    ],
    "nehodiSe": [
      "you need a lease agreement – use the agreement"
    ],
    "po": [
      {
        "nazev": "Photos",
        "popis": "Photograph the home and the meters with the date."
      }
    ],
    "faq": [
      {
        "q": "Why is the report important?",
        "a": "On moving out, the condition is compared with the move-in report – how much of the deposit is returned depends on it."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Obligations and Contracts Act.",
    "title": "Property Handover Report Bulgaria {rok} – free PDF template",
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
    "title": "Fill in the property handover report online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the property handover report under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "danni": {
        "nazev": "The handover"
      }
    },
    "pole": {
      "vid": {
        "popis": "Handover on",
        "moznosti": {
          "nanasyane": "moving in",
          "iznasyane": "moving out"
        }
      },
      "p_jmeno": {
        "popis": "Landlord"
      },
      "k_jmeno": {
        "popis": "Tenant"
      },
      "adres_zhilishte": {
        "popis": "Address of the home"
      },
      "tok": {
        "popis": "Electricity meter"
      },
      "voda": {
        "popis": "Water meter"
      },
      "toplomer": {
        "popis": "Heat meter or gas"
      },
      "klyuchove": {
        "popis": "Keys",
        "placeholder": "e.g. 2× врата, 1× пощенска кутия"
      },
      "obzavezhdane": {
        "popis": "Furnishings and condition",
        "placeholder": "e.g. кухня без повреди, пералнята работи"
      },
      "povredi": {
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
      "Photograph the home and the meters with the date.",
      "Each party keeps one copy."
    ],
    "kontrola": [
      "On moving out, the condition is compared with the move-in report – what is not written down is hard to prove later.",
      "Normal wear and tear is not damage."
    ]
  },
  "dokument": {
    "nazev": "Property Handover Report",
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
              "nanasyane": "The landlord {{p_jmeno}} hands over to the tenant {{k_jmeno}} the home at {{adres_zhilishte}} on moving in.",
              "iznasyane": "The tenant {{k_jmeno}} hands back to the landlord {{p_jmeno}} the home at {{adres_zhilishte}} on moving out."
            }
          },
          "Meter readings – electricity: {{tok}}, water: {{voda}}, heat meter or gas: {{toplomer}}.",
          "Keys: {{klyuchove}}.",
          "Furnishings and condition: {{obzavezhdane}}",
          "Damage and notes: {{povredi}}"
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

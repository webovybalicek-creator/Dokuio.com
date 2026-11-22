/** English version of src/obsah/gr/protokollo-paradosis-katoikias.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-PROTOKOLLO-KATOIKIA",
    "verze": "1.0"
  },
  "nazev": "Property Handover Report",
  "nazevA": "the property handover report",
  "katalog": {
    "popis": "Meter readings, keys and condition.",
    "slova": [
      "handover report flat Greece",
      "move-in report",
      "move-out report",
      "meter readings",
      "protokollo paradosis katoikias"
    ]
  },
  "landing": {
    "description": "Property handover report for Greece (πρωτόκολλο παράδοσης-παραλαβής κατοικίας): electricity, water and gas readings, keys, condition and damage. Free PDF.",
    "perex": "At the start and end of the lease. It protects both sides in disputes about the deposit.",
    "obsahPopis": "A short report.",
    "obsah": [
      {
        "nazev": "Handover",
        "popis": "Date, keys, meters."
      },
      {
        "nazev": "Condition",
        "popis": "Defects and remarks."
      }
    ],
    "online": [
      "Takes over the details from the lease",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are handing over or taking over a flat"
    ],
    "nehodiSe": [
      "you also need a lease – use the lease template"
    ],
    "po": [
      {
        "nazev": "Photos",
        "popis": "Photograph the rooms and the meters."
      }
    ],
    "faq": [
      {
        "q": "Why is a report needed?",
        "a": "The landlord’s claims for damage to the property become time-barred 6 months after return; the report shows the condition in which the flat was handed over."
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
    "title": "Property Handover Report Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the property handover report online – Greece, free PDF",
    "description": "Step-by-step guide in English for the property handover report under Greek law. Bilingual PDF or Word with the original text, free of charge.",
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
        "nazev": "Parties and property"
      },
      "katastasi": {
        "nazev": "Meters, keys, condition"
      }
    },
    "pole": {
      "druh": {
        "popis": "When it is drawn up",
        "moznosti": {
          "zacatek": "at the start of the lease (handover to the tenant)",
          "konec": "at the end (return to the landlord)"
        }
      },
      "p_jmeno": {
        "popis": "Landlord – full name"
      },
      "k_jmeno": {
        "popis": "Tenant – full name"
      },
      "byt": {
        "popis": "Address of the property"
      },
      "elektrina": {
        "popis": "Electricity meter",
        "placeholder": "e.g. 012345 kWh"
      },
      "voda": {
        "popis": "Water meter",
        "placeholder": "e.g. 234,5 m³"
      },
      "plyn": {
        "popis": "Gas meter"
      },
      "klice": {
        "popis": "Keys",
        "placeholder": "e.g. 2 της εισόδου, 1 του γραμματοκιβωτίου"
      },
      "vybaveni": {
        "popis": "Equipment",
        "placeholder": "e.g. ψυγείο, κουζίνα, πλυντήριο, κλιματιστικό στο υπνοδωμάτιο"
      },
      "zavady": {
        "popis": "Damage and remarks",
        "placeholder": "e.g. λεκές στον τοίχο του σαλονιού"
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
      "Transfer the electricity and water bills according to the readings."
    ],
    "kontrola": [
      "Write down the readings of all meters (electricity, water, gas) on the day of handover.",
      "Record existing damage and the equipment – it will be useful at the end for the return of the deposit.",
      "The landlord’s claims for damage become time-barred 6 months after the property is returned."
    ],
    "prevzit": "the residential lease agreement"
  },
  "dokument": {
    "nazev": "Property Handover Report",
    "podnadpis": "condition of the property, meters and keys",
    "podpisy": {
      "vlevo": "The Landlord",
      "vpravo": "The Tenant"
    },
    "clanky": [
      {
        "nadpis": "Report",
        "odstavce": [
          "**Landlord:** {{p_jmeno}} · **Tenant:** {{k_jmeno}}",
          {
            "uvodVzor": "The report is drawn up (tick one option):",
            "moznosti": {
              "zacatek": "The Landlord hands over and the Tenant takes over the home at {{byt}}.",
              "konec": "The Tenant returns and the Landlord takes back the home at {{byt}}."
            }
          },
          "Meter readings – electricity: {{elektrina}}, water: {{voda}}, gas: {{plyn}}.",
          "Keys handed over: {{klice}}.",
          "Equipment: {{vybaveni}}",
          "Damage and remarks: {{zavady}}",
          "The parties confirm that the condition of the home corresponds to the above."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/si/podnajemna-pogodba.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-PODNAJEM",
    "verze": "1.0"
  },
  "nazev": "Sublease Agreement",
  "nazevA": "the sublease agreement",
  "katalog": {
    "popis": "A room or flat with the owner’s consent.",
    "slova": [
      "sublease agreement",
      "sublet a room",
      "flatmate agreement",
      "owner consent",
      "podnajemna pogodba"
    ]
  },
  "landing": {
    "description": "Sublease agreement for a room or flat in Slovenia (podnajemna pogodba): owner’s consent, rent, deposit, costs and end of the sublease. Free bilingual PDF or Word.",
    "perex": "For subletting a room or part of a flat – only with the owner’s consent.",
    "obsahPopis": "Seven articles under SZ-1 and OZ.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Tenant, subtenant, owner’s consent."
      },
      {
        "nazev": "Premises",
        "popis": "A room or the flat."
      },
      {
        "nazev": "Rent",
        "popis": "Amount and costs."
      },
      {
        "nazev": "Duration",
        "popis": "Until when and end of the lease."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "you are letting a room in a rented flat",
      "you have the owner’s consent"
    ],
    "nehodiSe": [
      "the owner does not consent"
    ],
    "po": [
      {
        "nazev": "Consent",
        "popis": "In writing, attached to the agreement."
      }
    ],
    "faq": [
      {
        "q": "What if the owner does not consent?",
        "a": "Subletting without consent is a fault ground for terminating the lease agreement."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Housing Act (Stanovanjski zakon, SZ-1) and the Obligations Code (Obligacijski zakonik).",
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
    "title": "Sublease Agreement Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the sublease agreement online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the sublease agreement under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "agreement",
      "g": "agreement",
      "a": "agreement",
      "l": "agreement"
    },
    "kroky": {
      "stranki": {
        "nazev": "Parties"
      },
      "predmet": {
        "nazev": "Flat, duration and payment"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Tenant (sublets) – full name"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Subtenant – full name"
      },
      "k_adresa": {
        "popis": "Subtenant’s current address"
      },
      "lastnik": {
        "popis": "Owner who gave consent"
      },
      "stanovanje": {
        "popis": "Address of the flat"
      },
      "del": {
        "popis": "What is sublet",
        "moznosti": {
          "soba": "a room with shared use of the kitchen and bathroom",
          "celo": "the whole flat"
        }
      },
      "soba_opis": {
        "popis": "Which room",
        "placeholder": "e.g. manjša soba na dvorišče, 12 m² (smaller room facing the yard, 12 m²)"
      },
      "od": {
        "popis": "Sublease from"
      },
      "do": {
        "popis": "Sublease until"
      },
      "castka": {
        "popis": "Monthly rent including costs (€)"
      },
      "varscina": {
        "popis": "Deposit (€)"
      },
      "iban": {
        "popis": "IBAN for payment"
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
      "",
      "",
      "",
      "",
      ""
    ],
    "coDal": [
      "Attach the flat owner’s written consent.",
      "Sign a handover report when moving in."
    ],
    "kontrola": [
      "Subletting the flat or part of it without the owner’s consent is a fault ground for terminating the lease (Art. 103 SZ-1) – obtain consent in writing.",
      "The sublease cannot last longer than the main lease.",
      "Income from subletting is income from letting property – report it to FURS.",
      "Check the other party’s identity against their identity card and copy the name and tax number exactly as they appear in the document."
    ]
  },
  "dokument": {
    "nazev": "Sublease Agreement",
    "podnadpis": "sublease of a flat or room with the owner’s consent",
    "podpisy": {
      "vlevo": "Tenant (sublessor)",
      "vpravo": "Subtenant"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Tenant (sublessor):** {{p_jmeno}}, address {{p_adresa}}",
          "**Subtenant:** {{k_jmeno}}, address {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject of the sublease",
        "odstavce": [
          {
            "uvodVzor": "Subject (tick one option):",
            "moznosti": {
              "soba": "The Tenant sublets a room ({{soba_opis}}) in the flat at {{stanovanje}}, with shared use of the kitchen, bathroom and hall.",
              "celo": "The Tenant sublets the whole flat at {{stanovanje}}."
            }
          },
          "The Tenant declares that the owner {{lastnik}} has given written consent to the sublease."
        ]
      },
      {
        "nadpis": "Duration",
        "odstavce": [
          "The sublease is concluded for the period from {{od}} to {{do}}.",
          "In any event, the sublease ends when the lease agreement between the Tenant and the owner ends."
        ]
      },
      {
        "nadpis": "Rent and deposit",
        "odstavce": [
          "The Subtenant pays **{{castka}}** per month, including costs, no later than the 5th day of the month to the account IBAN {{iban}}.",
          "On signing, the Subtenant pays a deposit of {{varscina}}, which is refunded within 30 days of handing back the premises, reduced by unpaid obligations or damage."
        ]
      },
      {
        "nadpis": "Subtenant’s obligations",
        "odstavce": [
          "The Subtenant will use the flat with care, observe the house rules and will not sublet it further or make alterations."
        ]
      },
      {
        "nadpis": "Notice",
        "odstavce": [
          "Either party may terminate the sublease in writing with a notice period of 30 days. On moving out, the Subtenant returns all keys."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by this agreement are subject to the Obligations Code and the Housing Act. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

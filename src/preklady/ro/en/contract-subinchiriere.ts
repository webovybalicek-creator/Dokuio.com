/** English version of src/obsah/ro/contract-subinchiriere.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-SUBINCHIRIERE",
    "verze": "1.0"
  },
  "nazev": "Sublease Agreement",
  "nazevA": "the sublease agreement",
  "katalog": {
    "popis": "A room or the whole home with the landlord’s consent.",
    "slova": [
      "sublease agreement Romania",
      "sublet a room",
      "sublet a flat",
      "landlord consent",
      "contract de subinchiriere"
    ]
  },
  "landing": {
    "description": "Sublease agreement for Romania (contract de subînchiriere): a room or the whole home with the landlord’s consent, term, payment, deposit and notice. Free bilingual PDF.",
    "perex": "For a tenant who sublets a room or the whole home with the landlord’s written consent.",
    "obsahPopis": "Seven articles under the Romanian Civil Code.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Tenant and subtenant."
      },
      {
        "nazev": "Subject",
        "popis": "Room or home, landlord’s consent."
      },
      {
        "nazev": "Term",
        "popis": "At most as long as the main lease."
      },
      {
        "nazev": "Payment and deposit",
        "popis": "Amount in words."
      },
      {
        "nazev": "Obligations",
        "popis": "Use of the home."
      },
      {
        "nazev": "Termination",
        "popis": "30 days’ notice."
      }
    ],
    "online": [
      "Amount in words in Romanian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are subletting a room or the home with the landlord’s consent"
    ],
    "nehodiSe": [
      "the main lease prohibits subletting"
    ],
    "po": [
      {
        "nazev": "Consent",
        "popis": "Attach the landlord’s written consent."
      },
      {
        "nazev": "ANAF",
        "popis": "Income from subletting is registered with ANAF."
      }
    ],
    "faq": [
      {
        "q": "Do I need the landlord’s consent?",
        "a": "Check the main lease – if it prohibits subletting, do not sublet. Even if it does not, ask for the landlord’s written consent."
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
    "title": "Sublease Agreement Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the sublease agreement online – Romania, free PDF",
    "description": "Step-by-step guide in English for the sublease agreement under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "parti": {
        "nazev": "Parties"
      },
      "obiect": {
        "nazev": "Home, term and payment"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Tenant (subletting) – full name"
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
      "proprietar": {
        "popis": "Landlord who gave consent"
      },
      "locuinta": {
        "popis": "Address of the home"
      },
      "parte": {
        "popis": "What is sublet",
        "moznosti": {
          "camera": "a room, with use of the kitchen and bathroom",
          "intreaga": "the whole home"
        }
      },
      "camera": {
        "popis": "Which room",
        "placeholder": "e.g. camera mică spre curte, 12 m²"
      },
      "de_la": {
        "popis": "Sublease from"
      },
      "pana_la": {
        "popis": "Sublease until"
      },
      "castka": {
        "popis": "Monthly amount incl. utilities (lei)"
      },
      "garantie": {
        "popis": "Deposit (lei)"
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
      "Attach the landlord’s written consent.",
      "On moving in, sign the handover report."
    ],
    "kontrola": [
      "Check the main lease: if it prohibits subletting, do not sublet. Even if it does not, ask for the landlord’s written consent.",
      "The sublease may not last longer than the main lease.",
      "Income from subletting is income from letting property – the agreement is registered with ANAF within 30 days.",
      "Check the other party’s identity against their identity card and copy the name and CNP exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Sublease Agreement",
    "podnadpis": "subletting a room or the home, with the landlord’s consent",
    "podpisy": {
      "vlevo": "Tenant (sublessor)",
      "vpravo": "Subtenant"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Tenant (sublessor):** {{p_jmeno}}, domiciled at {{p_adresa}}",
          "**Subtenant:** {{k_jmeno}}, domiciled at {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject of the sublease",
        "odstavce": [
          {
            "uvodVzor": "Subject (tick one option):",
            "moznosti": {
              "camera": "The Tenant sublets the room ({{camera}}) in the home at {{locuinta}}, with shared use of the kitchen, bathroom and hall.",
              "intreaga": "The Tenant sublets the whole home at {{locuinta}}."
            }
          },
          "The Tenant declares that the landlord {{proprietar}} has given written consent to the sublease."
        ]
      },
      {
        "nadpis": "Term",
        "odstavce": [
          "The sublease is concluded for the period {{de_la}} – {{pana_la}}.",
          "The sublease ends in any case when the lease between the Tenant and the landlord ends."
        ]
      },
      {
        "nadpis": "Payment and deposit",
        "odstavce": [
          "The Subtenant pays **{{castka}}** a month, including utilities, by day 5 of the month at the latest, to the account IBAN {{iban}}.",
          "On signing, the Subtenant pays a deposit of {{garantie}}, which is returned within 30 days of handover, less any debts or damage."
        ]
      },
      {
        "nadpis": "Obligations of the subtenant",
        "odstavce": [
          "The Subtenant uses the home with care, observes the building rules and does not sublet it further or make alterations."
        ]
      },
      {
        "nadpis": "Termination",
        "odstavce": [
          "Either party may terminate the sublease by written notice with 30 days’ notice. On moving out, the Subtenant returns all keys."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed are subject to the Civil Code. The agreement is drawn up in two original copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

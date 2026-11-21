/** English version of src/obsah/bg/dogovor-za-prenaemane.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-PRENAEM",
    "verze": "1.0"
  },
  "nazev": "Sublease Agreement",
  "nazevA": "the sublease agreement",
  "katalog": {
    "popis": "A room or the whole home from the tenant.",
    "slova": [
      "sublease agreement Bulgaria",
      "sublet a room",
      "flatmate",
      "Art. 234",
      "dogovor za prenaemane"
    ]
  },
  "landing": {
    "description": "Sublease agreement for a room or a home in Bulgaria (договор за пренаемане): term, amount in words, deposit and notice, with notes on Art. 234. Free PDF.",
    "perex": "When you as a tenant sublet a room to a flatmate or the whole home with the landlord’s consent.",
    "obsahPopis": "Seven articles under the Obligations and Contracts Act.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Tenant and subtenant."
      },
      {
        "nazev": "Subject",
        "popis": "A room or the whole home."
      },
      {
        "nazev": "Term",
        "popis": "No longer than the main lease."
      },
      {
        "nazev": "Payment and deposit",
        "popis": "Monthly amount and deposit."
      },
      {
        "nazev": "Obligations",
        "popis": "Use and house rules."
      },
      {
        "nazev": "Termination",
        "popis": "One month’s notice."
      },
      {
        "nazev": "Final provisions",
        "popis": "Copies."
      }
    ],
    "online": [
      "Amount in words in Bulgarian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are subletting a room to a flatmate",
      "you are subletting the whole home with the landlord’s consent"
    ],
    "nehodiSe": [
      "your lease agreement prohibits subletting"
    ],
    "po": [
      {
        "nazev": "Consent",
        "popis": "For the whole home, attach the landlord’s consent."
      }
    ],
    "faq": [
      {
        "q": "Do I need the landlord’s consent?",
        "a": "For part of the home (a room) – no, unless the lease prohibits it (Art. 234 Obligations and Contracts Act). For the whole home, ask for written consent."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Obligations and Contracts Act.",
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
    "title": "Sublease Agreement Bulgaria {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the sublease agreement online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the sublease agreement under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "strani": {
        "nazev": "The parties"
      },
      "predmet": {
        "nazev": "The home, term and payment"
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
      "naemodatel": {
        "popis": "Landlord (owner)"
      },
      "zhilishte": {
        "popis": "Address of the home"
      },
      "chast": {
        "popis": "What is sublet",
        "moznosti": {
          "staya": "a room, with use of the kitchen and bathroom",
          "tsyalo": "the whole home (with the landlord’s consent)"
        }
      },
      "staya": {
        "popis": "Which room",
        "placeholder": "e.g. малката стая към двора, 12 м²"
      },
      "ot": {
        "popis": "Sublease from"
      },
      "do": {
        "popis": "Sublease until"
      },
      "castka": {
        "popis": "Monthly amount incl. costs (EUR)"
      },
      "depozit": {
        "popis": "Deposit (EUR)"
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
      "For the whole home, attach the landlord’s written consent.",
      "On moving in, sign a handover report."
    ],
    "kontrola": [
      "The tenant may sublet parts of the home (a room) without the landlord’s consent unless the lease agreement provides otherwise (Art. 234 Obligations and Contracts Act). Check your lease.",
      "For subletting the whole home, ask for the landlord’s written consent.",
      "The tenant remains liable to the landlord, and the subtenant cannot have more rights than the tenant. The sublease cannot continue after the main lease ends.",
      "Income from subletting is taxed as rental income.",
      "Check the other party’s identity against their identity card and copy the names and EGN exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Sublease Agreement",
    "podnadpis": "subletting of a room or the whole home by the tenant",
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
              "staya": "The Tenant sublets the room ({{staya}}) in the home at {{zhilishte}}, with shared use of the kitchen, bathroom and hallway.",
              "tsyalo": "The Tenant sublets the whole home at {{zhilishte}} with the written consent of the landlord {{naemodatel}}."
            }
          }
        ]
      },
      {
        "nadpis": "Term",
        "odstavce": [
          "The sublease is concluded for the period {{ot}} – {{do}}.",
          "The sublease ends in any case when the lease agreement between the Tenant and the landlord ends."
        ]
      },
      {
        "nadpis": "Payment and deposit",
        "odstavce": [
          "The Subtenant pays **{{castka}}** monthly, including costs, no later than the 5th day of the month to account IBAN {{iban}}.",
          "On signing, the Subtenant pays a deposit of {{depozit}}, which is returned within 30 days of handover, less any debts or damage."
        ]
      },
      {
        "nadpis": "Obligations of the subtenant",
        "odstavce": [
          "The Subtenant uses the home with the care of a good owner, observes the building rules, does not sublet it to others and makes no alterations."
        ]
      },
      {
        "nadpis": "Termination",
        "odstavce": [
          "Either party may terminate the sublease with one month’s written notice. On moving out, the Subtenant returns all keys."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed are subject to the Obligations and Contracts Act. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

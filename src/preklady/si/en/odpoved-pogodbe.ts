/** English version of src/obsah/si/odpoved-pogodbe.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-ODPOVED",
    "verze": "1.0"
  },
  "nazev": "Contract Cancellation",
  "nazevA": "the contract cancellation",
  "katalog": {
    "popis": "Mobile operator, insurance, gym, subscription.",
    "slova": [
      "contract cancellation",
      "cancel subscription",
      "cancel mobile contract",
      "cancel insurance",
      "odpoved pogodbe"
    ]
  },
  "landing": {
    "title": "Contract Cancellation Slovenia {rok} – free PDF template",
    "description": "Written cancellation of a contract with an operator, insurer, gym or subscription in Slovenia (odpoved pogodbe): contract number, end date, confirmation. Free PDF.",
    "perex": "For cancelling a subscription, insurance, gym or operator – with a request for written confirmation.",
    "obsahPopis": "A short written cancellation.",
    "obsah": [
      {
        "nazev": "Cancellation",
        "popis": "Provider, contract, date, confirmation."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "you want to cancel a subscription or service"
    ],
    "nehodiSe": [
      "you are ending a lease or employment – use the dedicated forms"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "By registered post or e-mail with confirmation."
      }
    ],
    "faq": [
      {
        "q": "How long is the notice period?",
        "a": "As set by the provider’s general terms; for operators it is often one month."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik, OZ).",
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
    "title": "Fill in the contract cancellation online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the contract cancellation under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "cancellation",
      "g": "cancellation",
      "a": "cancellation",
      "l": "cancellation"
    },
    "kroky": {
      "podatki": {
        "nazev": "Cancellation"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Customer – full name"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Service provider",
        "placeholder": "e.g. operator, insurance company, gym"
      },
      "k_adresa": {
        "popis": "Provider’s address"
      },
      "storitev": {
        "popis": "Service",
        "placeholder": "e.g. mobilni paket, internet, članarina (mobile plan, internet, membership)"
      },
      "stevilka": {
        "popis": "Contract number / customer number"
      },
      "kdaj": {
        "popis": "I cancel the contract",
        "moznosti": {
          "rok": "with the notice period under the contract (earliest possible date)",
          "datum": "as of a specific date"
        }
      },
      "konec": {
        "popis": "End date"
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
      "Send the cancellation by registered post with a return receipt or to the e-mail address for cancellations in the general terms.",
      "Ask for written confirmation of the cancellation and the end date."
    ],
    "kontrola": [
      "Check the notice period and the method of cancellation in the contract or general terms (in writing, e-mail, customer account).",
      "For contracts with a minimum term (e.g. operator 24 months), early cancellation may mean paying compensation – the amount is in the contract.",
      "State the contract number or customer number.",
      "If the provider has changed the terms to your disadvantage, you usually have the right to cancel without compensation – refer to this."
    ]
  },
  "dokument": {
    "nazev": "Contract Cancellation",
    "podnadpis": "written notice cancelling a service contract",
    "podpisy": {
      "vlevo": "customer",
      "vpravo": "received (provider, optional)"
    },
    "clanky": [
      {
        "nadpis": "Cancellation",
        "odstavce": [
          "**Customer:** {{p_jmeno}}, {{p_adresa}}",
          "**Provider:** {{k_jmeno}}, {{k_adresa}}",
          {
            "uvodVzor": "End (tick one option):",
            "moznosti": {
              "rok": "I cancel the contract for the service {{storitev}}, number {{stevilka}}, with the notice period under the contract, i.e. as of the earliest possible date.",
              "datum": "I cancel the contract for the service {{storitev}}, number {{stevilka}}, as of {{konec}}."
            }
          },
          "Please confirm in writing receipt of this cancellation and the end date of the contract, and do not charge any fees from that date."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

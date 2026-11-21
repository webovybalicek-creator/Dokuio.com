/** English version of src/obsah/hr/otkaz-ugovora.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-OTKAZ",
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
      "otkaz ugovora"
    ]
  },
  "landing": {
    "title": "Contract Cancellation Croatia {rok} – free PDF template",
    "description": "Written cancellation of a contract with an operator, insurer, gym or subscription in Croatia (otkaz ugovora): contract number, end date, confirmation. Free PDF.",
    "perex": "Want to cancel a mobile plan, internet, insurance or a membership? A written cancellation with the contract number and a request for confirmation.",
    "obsahPopis": "A short cancellation.",
    "obsah": [
      {
        "nazev": "Cancellation",
        "popis": "Service, contract number, end date."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "you are cancelling a service with a contract"
    ],
    "nehodiSe": [
      "you are ending a flat lease or a job – there are separate forms for that"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "By registered post or to the e-mail address for cancellations."
      },
      {
        "nazev": "Confirmation",
        "popis": "Ask for written confirmation."
      }
    ],
    "faq": [
      {
        "q": "How long is the notice period?",
        "a": "The one in the contract or the provider’s general terms."
      },
      {
        "q": "Do I pay a fee?",
        "a": "With a fixed-term contract, early cancellation may mean a fee under the contract."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima) and the Consumer Protection Act (Zakon o zaštiti potrošača).",
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
    "title": "Fill in the contract cancellation online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the contract cancellation under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podaci": {
        "nazev": "Cancellation"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Customer – full name",
        "placeholder": "e.g. Ana Kovač"
      },
      "p_oib": {
        "popis": "OIB"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Service provider",
        "placeholder": "e.g. name of the operator, insurer or gym"
      },
      "k_adresa": {
        "popis": "Provider’s address"
      },
      "usluga": {
        "popis": "Service",
        "placeholder": "e.g. mobilna tarifa, kućni internet, članarina (mobile plan, home internet, membership)"
      },
      "broj": {
        "popis": "Contract number / customer number"
      },
      "kada": {
        "popis": "I cancel the contract",
        "moznosti": {
          "rok": "with the notice period under the contract (earliest possible date)",
          "datum": "as of a specific date"
        }
      },
      "kraj": {
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
      "Send the cancellation by registered post with a return receipt or to the e-mail address for cancellations given in the general terms.",
      "Ask for written confirmation of the cancellation and the end date."
    ],
    "kontrola": [
      "Check the notice period and the method of cancellation in the contract or general terms (in writing, e-mail, customer account).",
      "With a fixed-term contract (e.g. telecom 24 months), early cancellation may mean a fee – the amount is in the contract.",
      "State the contract number or customer number, otherwise the cancellation is hard to link to your account.",
      "If the provider has changed the terms to your disadvantage, you usually have the right to cancel without a fee – refer to this."
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
          "**Customer:** {{p_jmeno}}, OIB {{p_oib}}, {{p_adresa}}",
          "**Provider:** {{k_jmeno}}, {{k_adresa}}",
          {
            "uvodVzor": "End (tick one option):",
            "moznosti": {
              "rok": "I hereby cancel the contract for the service {{usluga}}, number {{broj}}, with the notice period under the contract, i.e. as of the earliest possible date.",
              "datum": "I hereby cancel the contract for the service {{usluga}}, number {{broj}}, as of {{kraj}}."
            }
          },
          "Please confirm in writing receipt of this cancellation and the end date of the contract, and do not charge any fees from that date."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

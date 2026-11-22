/** English version of src/obsah/gr/katangelia-symvasis.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-KATANGELIA",
    "verze": "1.0"
  },
  "nazev": "Contract Cancellation Notice",
  "nazevA": "the contract cancellation notice",
  "katalog": {
    "popis": "Mobile, internet, insurance, gym, subscription.",
    "slova": [
      "cancel contract Greece",
      "cancel subscription Greece",
      "end mobile contract",
      "gym membership cancellation",
      "katangelia symvasis"
    ]
  },
  "landing": {
    "description": "Contract cancellation notice for Greece (καταγγελία σύμβασης) for services: mobile, internet, insurance, gym. Contract number and end date. Free PDF and Word.",
    "perex": "For ending a contract with a service or subscription provider. Check the notice period in the contract.",
    "obsahPopis": "A short letter.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Provider, service, contract number and end date."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "you want to cancel a subscription, mobile, internet or insurance"
    ],
    "nehodiSe": [
      "you want to leave a rented home – use the lease termination notice"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "Registered letter or the email given in the terms and conditions."
      },
      {
        "nazev": "Confirmation",
        "popis": "Ask for written confirmation of the termination."
      }
    ],
    "faq": [
      {
        "q": "Do I owe an early termination fee?",
        "a": "For contracts with a minimum term a fee may be due – the amount is stated in the contract. If the provider unilaterally changed the terms to your detriment, you can usually cancel without a fee."
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
    "title": "Contract Cancellation Notice Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the contract cancellation notice online – Greece, free PDF",
    "description": "Step-by-step guide in English for the contract cancellation notice under Greek law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "notice",
      "g": "notice",
      "a": "notice",
      "l": "notice"
    },
    "kroky": {
      "stoixeia": {
        "nazev": "The notice"
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
        "placeholder": "e.g. εταιρεία κινητής, ασφαλιστική, γυμναστήριο"
      },
      "k_adresa": {
        "popis": "Provider’s address"
      },
      "ypiresia": {
        "popis": "The service",
        "placeholder": "e.g. συμβόλαιο κινητής, internet, συνδρομή γυμναστηρίου"
      },
      "arithmos": {
        "popis": "Contract number / customer code"
      },
      "pote": {
        "popis": "I cancel the contract",
        "moznosti": {
          "prothesmia": "with the notice period in the contract (as soon as possible)",
          "imerominia": "from a set date"
        }
      },
      "imerominia_lysis": {
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
      "Send the notice by registered letter with proof of receipt or to the email set out in the terms and conditions.",
      "Ask for written confirmation of the termination and its date."
    ],
    "kontrola": [
      "Check the notice period and the method of cancellation (in writing, email, customer account) in the contract or the terms and conditions.",
      "For contracts with a minimum term (e.g. a 24-month mobile contract) early termination may involve a fee – the amount is stated in the contract.",
      "State the contract number or customer code.",
      "If the provider unilaterally changed the terms to your detriment, you can usually cancel without a fee – rely on this."
    ]
  },
  "dokument": {
    "nazev": "Contract Cancellation Notice",
    "podnadpis": "termination of a service or subscription contract",
    "podpisy": {
      "vlevo": "The Customer",
      "vpravo": "Received (provider, optional)"
    },
    "clanky": [
      {
        "nadpis": "Cancellation notice",
        "odstavce": [
          "**Customer:** {{p_jmeno}}, {{p_adresa}}",
          "**Provider:** {{k_jmeno}}, {{k_adresa}}",
          {
            "uvodVzor": "Termination (tick one option):",
            "moznosti": {
              "prothesmia": "I hereby cancel the contract for the service {{ypiresia}}, number {{arithmos}}, observing the contractual notice period, i.e. from the earliest possible date.",
              "imerominia": "I hereby cancel the contract for the service {{ypiresia}}, number {{arithmos}}, from {{imerominia_lysis}}."
            }
          },
          "Please confirm in writing receipt of this notice and the end date of the contract, and do not charge for services after that date."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/ro/notificare-reziliere-contract.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-REZILIERE",
    "verze": "1.0"
  },
  "nazev": "Contract Termination Notice",
  "nazevA": "the contract termination notice",
  "katalog": {
    "popis": "Operator, insurance, gym, subscription.",
    "slova": [
      "contract termination notice Romania",
      "cancel subscription",
      "terminate phone contract",
      "cancel insurance",
      "notificare reziliere contract"
    ]
  },
  "landing": {
    "description": "Notice terminating a service contract in Romania (notificare de încetare): operator, insurance, subscription or gym, with notice or on a set date. Free bilingual PDF.",
    "perex": "For ending a subscription or service contract. With the notice period from the contract or on a specific date.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Service, contract number and end date."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "you are ending a subscription, insurance or service contract"
    ],
    "nehodiSe": [
      "you want to withdraw from an online order within 14 days – use the withdrawal form"
    ],
    "po": [
      {
        "nazev": "Confirmation",
        "popis": "Ask for written confirmation of the termination."
      }
    ],
    "faq": [
      {
        "q": "Do I pay penalties for early termination?",
        "a": "For contracts with a minimum term, early termination may give rise to compensation – the amount is in the contract."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Romanian Civil Code and GEO no. 34/2014.",
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
    "title": "Contract Termination Notice Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the contract termination notice online – Romania, free PDF",
    "description": "Step-by-step guide in English for the contract termination notice under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "date": {
        "nazev": "Termination"
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
        "placeholder": "e.g. operator, asigurător, sală de fitness"
      },
      "k_adresa": {
        "popis": "Provider’s address"
      },
      "serviciu": {
        "popis": "The service",
        "placeholder": "e.g. abonament mobil, internet, abonament fitness"
      },
      "numar": {
        "popis": "Contract no. / customer code"
      },
      "cand": {
        "popis": "I terminate the contract",
        "moznosti": {
          "preaviz": "with the notice in the contract (earliest possible date)",
          "data": "on a specific date"
        }
      },
      "data_incetare": {
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
      "Send the notice by registered letter with acknowledgement of receipt or to the e-mail address stated in the general terms.",
      "Ask for written confirmation of the termination and its date."
    ],
    "kontrola": [
      "Check the notice period and how to terminate (in writing, by e-mail, in your customer account) in the contract or general terms.",
      "For contracts with a minimum term (e.g. a 24-month operator contract), early termination may give rise to compensation – the amount is in the contract.",
      "State the contract number or customer code.",
      "If the provider has changed the terms to your disadvantage, you can usually terminate without penalties – mention this."
    ]
  },
  "dokument": {
    "nazev": "Contract Termination Notice",
    "podnadpis": "termination of a service contract or subscription",
    "podpisy": {
      "vlevo": "Customer",
      "vpravo": "Received (provider, optional)"
    },
    "clanky": [
      {
        "nadpis": "Notice",
        "odstavce": [
          "**Customer:** {{p_jmeno}}, {{p_adresa}}",
          "**Provider:** {{k_jmeno}}, {{k_adresa}}",
          {
            "uvodVzor": "Termination (tick one option):",
            "moznosti": {
              "preaviz": "I hereby terminate the contract for the service {{serviciu}}, no. {{numar}}, observing the notice period in the contract, or on the earliest possible date.",
              "data": "I hereby terminate the contract for the service {{serviciu}}, no. {{numar}}, with effect from {{data_incetare}}."
            }
          },
          "Please confirm in writing receipt of this notice and the end date of the contract, and do not invoice any services after that date."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

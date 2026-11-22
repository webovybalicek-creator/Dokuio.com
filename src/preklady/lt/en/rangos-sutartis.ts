/** English version of src/obsah/lt/rangos-sutartis.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-RANGA",
    "verze": "1.0"
  },
  "nazev": "Work Contract",
  "nazevA": "the work contract",
  "katalog": {
    "popis": "Ordering work from a tradesperson or builder.",
    "slova": [
      "work contract Lithuania",
      "renovation contract",
      "contract with a builder",
      "rangos sutartis"
    ]
  },
  "landing": {
    "description": "Work contract for repairs or works in Lithuania (rangos sutartis): description of the work, materials, deadlines, price in words, advance and acceptance. Free PDF.",
    "perex": "When you order work from a tradesperson or construction company – renovation, finishing, installation. The contract states clearly: what, when, for how much and how it is accepted.",
    "obsahPopis": "Work contract articles (Civil Code work contract).",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Customer and contractor."
      },
      {
        "nazev": "Work",
        "popis": "Description, place, materials."
      },
      {
        "nazev": "Deadlines",
        "popis": "Start, finish, delay."
      },
      {
        "nazev": "Price",
        "popis": "Amount in words, advance, extra work."
      },
      {
        "nazev": "Acceptance",
        "popis": "Inspection and defects."
      }
    ],
    "online": [
      "Amount in words in Lithuanian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are ordering a renovation or other work",
      "you want a clear price and deadline"
    ],
    "nehodiSe": [
      "you are hiring an employee – that is an employment contract"
    ],
    "po": [
      {
        "nazev": "Acceptance",
        "popis": "When accepting the work, record defects in a report."
      },
      {
        "nazev": "Payments",
        "popis": "Ask for an invoice for every payment."
      }
    ],
    "faq": [
      {
        "q": "How much advance should I pay?",
        "a": "The law does not say. We recommend a small advance for materials and paying the rest after accepting the work."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Civil Code on work contracts.",
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
    "title": "Work Contract Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the work contract online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the work contract under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "contract",
      "g": "contract",
      "a": "contract",
      "l": "contract"
    },
    "kroky": {
      "salys": {
        "nazev": "Customer and contractor"
      },
      "darbai": {
        "nazev": "The work"
      },
      "kaina": {
        "nazev": "Price"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Customer – first name and surname"
      },
      "p_adresa": {
        "popis": "Customer’s address"
      },
      "k_jmeno": {
        "popis": "Contractor – first name and surname or name"
      },
      "k_kods": {
        "popis": "Contractor’s personal or company code"
      },
      "k_adresa": {
        "popis": "Contractor’s address"
      },
      "darbs": {
        "popis": "Description of the work",
        "placeholder": "e.g. bathroom renovation: removing old tiles, laying 12 m² of new tiles, installing a shower and washbasin"
      },
      "vieta": {
        "popis": "Place of work"
      },
      "materiali": {
        "popis": "Materials",
        "moznosti": {
          "uznemejs": "supplied by the contractor (included in the price)",
          "pasutitajs": "supplied by the customer"
        }
      },
      "sakums": {
        "popis": "Start of work"
      },
      "pabeigt": {
        "popis": "Finish by"
      },
      "cena": {
        "popis": "Total price (EUR)",
        "napoveda": "State whether VAT is included."
      },
      "avanss": {
        "popis": "Advance (EUR, optional)"
      },
      "iban": {
        "popis": "Contractor’s IBAN",
        "placeholder": "LT12 1000 0111 0100 1000"
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
      "What exactly is done and where.",
      "",
      "",
      "",
      ""
    ],
    "coDal": [
      "Sign the contract in two copies.",
      "When accepting the work, inspect it and record defects in an acceptance report.",
      "Ask for an invoice or receipt for every payment."
    ],
    "kontrola": [
      "Describe the work precisely (tasks, materials, quantities) – what you do not write down is easy to dispute.",
      "Set a completion deadline and what happens in case of delay.",
      "Avoid a large advance; pay the price after accepting the work.",
      "When accepting the work, inspect it; if there are defects, you can demand that they be remedied or the price reduced.",
      "Check whether the contractor is registered as a company or works under an individual activity certificate, and for construction work whether a building permit is needed.",
      "Check the other party’s identity document and copy the name, surname and personal code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Work Contract",
    "podnadpis": "ordering work from a tradesperson or construction company (Civil Code, Article 6.644 et seq.)",
    "podpisy": {
      "vlevo": "Customer",
      "vpravo": "Contractor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Customer:** {{p_jmeno}}, address {{p_adresa}}",
          "**Contractor:** {{k_jmeno}}, personal or company code {{k_kods}}, {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject of the contract",
        "odstavce": [
          "The Contractor undertakes to perform the following work: {{darbs}}, at {{vieta}}, and to hand over its result to the Customer, and the Customer undertakes to accept the result of the work and pay for it.",
          {
            "uvodVzor": "Materials (tick one option):",
            "moznosti": {
              "uznemejs": "The materials are supplied by the Contractor; their cost is included in the price of the work.",
              "pasutitajs": "The materials are supplied by the Customer on time and of suitable quality."
            }
          },
          "The Contractor performs the work with care, following good practice and the applicable requirements."
        ]
      },
      {
        "nadpis": "Deadlines",
        "odstavce": [
          "The work starts on {{sakums}} and is completed no later than {{pabeigt}}.",
          "If the Contractor is late, the Customer may set a reasonable additional period and, if it expires without result, terminate the contract."
        ]
      },
      {
        "nadpis": "Price",
        "odstavce": [
          "The total price of the work is **{{cena}}** (in words: {{cena_vardiem}}).",
          "The Customer pays an advance of {{avanss}} and the remaining amount – after accepting the work without material defects – to the account IBAN {{iban}}. The Contractor issues an invoice for every payment.",
          "Additional work is performed and paid for only under a written agreement."
        ]
      },
      {
        "nadpis": "Acceptance and defects",
        "odstavce": [
          "When the work is handed over, the parties inspect it together and record any defects.",
          "The Contractor remedies the defects free of charge within a reasonable time. Other matters are governed by the provisions of the Civil Code of the Republic of Lithuania on work contracts."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Amendments are made in writing. The contract is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

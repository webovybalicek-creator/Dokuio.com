/** English version of src/obsah/lv/uznemuma-ligums.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-UZNEMUMS",
    "verze": "1.0"
  },
  "nazev": "Contract for Work",
  "nazevA": "the contract for work",
  "katalog": {
    "popis": "Tradesperson, repair, renovation.",
    "slova": [
      "contract for work Latvia",
      "renovation contract",
      "agreement with a builder",
      "uzņēmuma līgums"
    ]
  },
  "landing": {
    "description": "Contract for work for Latvia (uzņēmuma līgums) with a tradesperson: description of work, deadlines, price in words, advance, acceptance and defects. Free PDF.",
    "perex": "For a repair, renovation or other work you order from a tradesperson or company. Describe the work, deadline and payment.",
    "obsahPopis": "Articles on the work.",
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
        "popis": "Start and completion."
      },
      {
        "nazev": "Price",
        "popis": "Amount, advance, invoices."
      },
      {
        "nazev": "Acceptance",
        "popis": "Defects and their repair."
      }
    ],
    "online": [
      "Amount in words in Latvian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are ordering a repair or renovation",
      "you want the price and deadline in writing"
    ],
    "nehodiSe": [
      "you are hiring an employee – that is an employment contract"
    ],
    "po": [
      {
        "nazev": "Acceptance",
        "popis": "Check the work and write down any defects."
      },
      {
        "nazev": "Invoices",
        "popis": "Keep the invoices."
      }
    ],
    "faq": [
      {
        "q": "How large an advance should I pay?",
        "a": "As small as possible – pay most after accepting the work without significant defects."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Latvian Civil Law on contracts for work.",
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
    "title": "Contract for Work Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the contract for work online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the contract for work under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "puses": {
        "nazev": "Customer and contractor"
      },
      "darbs": {
        "nazev": "The work"
      },
      "atlidziba": {
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
        "popis": "Contractor – name or company name"
      },
      "k_kods": {
        "popis": "Contractor’s personal code or registration number"
      },
      "k_adresa": {
        "popis": "Contractor’s address"
      },
      "darbs": {
        "popis": "Description of the work",
        "placeholder": "e.g. bathroom renovation: removal of old tiles, laying 12 m² of new tiles, installing a shower and washbasin"
      },
      "vieta": {
        "popis": "Place of work"
      },
      "materiali": {
        "popis": "Materials",
        "moznosti": {
          "uznemejs": "provided by the contractor (included in the price)",
          "pasutitajs": "provided by the customer"
        }
      },
      "sakums": {
        "popis": "Start of work"
      },
      "pabeigt": {
        "popis": "Complete by"
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
        "placeholder": "LV80 BANK 0000 4351 9500 1"
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
      "Sign the agreement in two copies or with eParaksts.",
      "On acceptance, check the work and write down any defects in an acceptance report.",
      "Ask for an invoice for every payment."
    ],
    "kontrola": [
      "Describe the work precisely (tasks, materials, quantities) – what is not written down is easy to dispute.",
      "Set a completion deadline and what happens in case of delay.",
      "Avoid a large advance; pay after accepting the work.",
      "On acceptance, check the work; if there are defects you may demand their repair or a price reduction.",
      "Check that the contractor is registered as a company or self-employed and, for construction work, whether a building permit or explanatory memorandum is needed.",
      "Check the other party’s identity document and copy the name, surname and personal code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Contract for Work",
    "podnadpis": "ordering work from a tradesperson or construction company (Civil Law, Article 2212 et seq.)",
    "podpisy": {
      "vlevo": "Customer",
      "vpravo": "Contractor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Customer:** {{p_jmeno}}, address {{p_adresa}}",
          "**Contractor:** {{k_jmeno}}, personal code or registration number {{k_kods}}, {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject",
        "odstavce": [
          "The Contractor undertakes to carry out the following work: {{darbs}}, at {{vieta}}.",
          {
            "uvodVzor": "Materials (tick one option):",
            "moznosti": {
              "uznemejs": "The materials are provided by the Contractor; their cost is included in the price.",
              "pasutitajs": "The materials are provided by the Customer in good time and of suitable quality."
            }
          },
          "The Contractor carries out the work with care, in accordance with good practice and the applicable requirements."
        ]
      },
      {
        "nadpis": "Deadlines",
        "odstavce": [
          "The work starts on {{sakums}} and is completed no later than {{pabeigt}}.",
          "If the Contractor is late, the Customer may set a reasonable additional period and, if it expires without success, withdraw from the contract."
        ]
      },
      {
        "nadpis": "Price",
        "odstavce": [
          "The total price is **{{cena}}** (in words: {{cena_vardiem}}).",
          "The Customer pays an advance of {{avanss}} and the rest after accepting the work without significant defects to the account IBAN {{iban}}. The Contractor issues an invoice for each payment.",
          "Additional work is carried out and paid for only on the basis of a written agreement."
        ]
      },
      {
        "nadpis": "Acceptance and defects",
        "odstavce": [
          "On handover the parties check the work together and write down any defects.",
          "The Contractor repairs the defects free of charge within a reasonable time. Otherwise the provisions of the Civil Law on contracts for work apply."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Amendments are made in writing. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

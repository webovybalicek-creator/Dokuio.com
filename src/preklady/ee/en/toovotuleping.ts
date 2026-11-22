/** English version of src/obsah/ee/toovotuleping.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-TOOVOTT",
    "verze": "1.0"
  },
  "nazev": "Works Contract",
  "nazevA": "the works contract",
  "katalog": {
    "popis": "Tradesperson, repair, renovation.",
    "slova": [
      "works contract Estonia",
      "contract with a tradesperson",
      "renovation contract",
      "repair works",
      "töövõtuleping"
    ]
  },
  "landing": {
    "description": "Works contract for Estonia (töövõtuleping) with a tradesperson or builder: description of the work, deadlines, fee, advance, acceptance and defects. Free PDF.",
    "perex": "For ordering work from a tradesperson or construction firm – repair, renovation, installation. Records the work, the deadline and the fee.",
    "obsahPopis": "Articles on the works contract.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Client and contractor."
      },
      {
        "nazev": "Work",
        "popis": "Description, place and materials."
      },
      {
        "nazev": "Deadlines",
        "popis": "Start and completion."
      },
      {
        "nazev": "Fee",
        "popis": "Total amount and advance."
      },
      {
        "nazev": "Acceptance",
        "popis": "Defects and their remedy."
      }
    ],
    "online": [
      "Amount in words in Estonian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are ordering work from a tradesperson or firm",
      "you want the deadline and price in writing"
    ],
    "nehodiSe": [
      "you are hiring an employee – use an employment contract"
    ],
    "po": [
      {
        "nazev": "Acceptance",
        "popis": "Inspect the work and write down any defects."
      },
      {
        "nazev": "Invoices",
        "popis": "Ask for an invoice for each payment."
      }
    ],
    "faq": [
      {
        "q": "What if the contractor is late?",
        "a": "Give a reasonable additional deadline; if that also passes without result, you may withdraw from the contract."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the works contract provisions of the Estonian Law of Obligations Act.",
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
    "title": "Works Contract Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the works contract online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the works contract under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "pooled": {
        "nazev": "Client and contractor"
      },
      "too": {
        "nazev": "The work"
      },
      "tasu": {
        "nazev": "Fee"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Client – first name and surname"
      },
      "p_adresa": {
        "popis": "Client’s address"
      },
      "k_jmeno": {
        "popis": "Contractor – name or business name"
      },
      "k_kood": {
        "popis": "Contractor’s personal or registry code"
      },
      "k_adresa": {
        "popis": "Contractor’s address"
      },
      "too": {
        "popis": "Description of the work",
        "placeholder": "e.g. bathroom renovation: removal of old tiles, 12 m² of new tiles, installation of shower enclosure and washbasin"
      },
      "koht": {
        "popis": "Place where the work is done"
      },
      "materjal": {
        "popis": "Materials",
        "moznosti": {
          "toovotja": "supplied by the contractor (included in the price)",
          "tellija": "supplied by the client"
        }
      },
      "algus": {
        "popis": "Start of works"
      },
      "valmis": {
        "popis": "Completed by"
      },
      "cena": {
        "popis": "Total fee (EUR)",
        "napoveda": "State whether VAT is included."
      },
      "ettemaks": {
        "popis": "Advance (EUR, optional)"
      },
      "iban": {
        "popis": "Contractor’s IBAN",
        "placeholder": "EE38 …"
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
      "What exactly will be done and where.",
      "",
      "",
      "",
      ""
    ],
    "coDal": [
      "Sign the contract in two copies or digitally.",
      "On acceptance, inspect the work and write down any defects.",
      "Ask for an invoice for each payment."
    ],
    "kontrola": [
      "Describe the work precisely (works, materials, quantities) – what is not written down is easy to dispute.",
      "Set the completion deadline and what happens if it is missed.",
      "Avoid a large advance; pay the fee after the work has been accepted.",
      "On acceptance, inspect the work; if there are defects you may demand that they be remedied or that the fee be reduced.",
      "Check the other party’s identity document and copy the name and personal identification code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Works Contract",
    "podnadpis": "ordering works from a tradesperson or construction firm (Law of Obligations Act § 635 ff.)",
    "podpisy": {
      "vlevo": "Client",
      "vpravo": "Contractor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Client:** {{p_jmeno}}, address {{p_adresa}}",
          "**Contractor:** {{k_jmeno}}, personal or registry code {{k_kood}}, {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject of the contract",
        "odstavce": [
          "The Contractor undertakes to perform the following work: {{too}}, at {{koht}}.",
          {
            "uvodVzor": "Materials (tick one option):",
            "moznosti": {
              "toovotja": "The materials are supplied by the Contractor; their cost is included in the fee.",
              "tellija": "The materials are supplied by the Client in good time and of suitable quality."
            }
          },
          "The Contractor performs the work with care, in accordance with good practice and applicable requirements."
        ]
      },
      {
        "nadpis": "Deadlines",
        "odstavce": [
          "The works start on {{algus}} and are completed no later than {{valmis}}.",
          "If the Contractor is late, the Client may set a reasonable additional deadline and, if it passes without result, withdraw from the contract."
        ]
      },
      {
        "nadpis": "Fee",
        "odstavce": [
          "The total fee is **{{cena}}** (in words: {{cena_sonadega}}).",
          "The Client pays an advance of {{ettemaks}} and the remaining amount after accepting the work without material defects to the account IBAN {{iban}}. The Contractor issues an invoice for each payment.",
          "Additional works are carried out and paid only on the basis of a written agreement."
        ]
      },
      {
        "nadpis": "Acceptance and defects",
        "odstavce": [
          "When the work is handed over, the parties inspect it together and write down any defects.",
          "The Contractor remedies defects free of charge within a reasonable time. Otherwise the works contract provisions of the Law of Obligations Act apply."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Amendments in a form that can be reproduced in writing. The contract is drawn up in two equivalent copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

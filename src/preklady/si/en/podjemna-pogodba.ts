/** English version of src/obsah/si/podjemna-pogodba.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-PODJEMNA",
    "verze": "1.0"
  },
  "nazev": "Contract for Work",
  "nazevA": "the contract for work",
  "katalog": {
    "popis": "A tradesperson, repair or renovation.",
    "slova": [
      "contract for work",
      "contract with a tradesperson",
      "renovation contract",
      "repair",
      "podjemna pogodba"
    ]
  },
  "landing": {
    "description": "Contract for work with a tradesperson in Slovenia (podjemna pogodba): job description, deadline, payment, advance, handover and defects. Free bilingual PDF or Word.",
    "perex": "For a bathroom renovation, a repair or other work. With a deadline, payment and acceptance of the work.",
    "obsahPopis": "Six articles under the Obligations Code (Obligacijski zakonik).",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Client and contractor."
      },
      {
        "nazev": "Work",
        "popis": "Description and place."
      },
      {
        "nazev": "Deadline",
        "popis": "Start and completion."
      },
      {
        "nazev": "Payment",
        "popis": "Price, advance, method."
      },
      {
        "nazev": "Acceptance",
        "popis": "Inspection and defects."
      }
    ],
    "online": [
      "Amount in words in Slovenian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are hiring a tradesperson for a renovation or repair",
      "you want the deadline and price in writing"
    ],
    "nehodiSe": [
      "you are building a house – a construction contract is needed"
    ],
    "po": [
      {
        "nazev": "Acceptance",
        "popis": "Inspect the work and report defects immediately."
      }
    ],
    "faq": [
      {
        "q": "When should defects be reported?",
        "a": "On acceptance, inspect the work and inform the contractor of defects in writing without delay. For hidden defects, the deadlines under the Obligations Code apply."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik – contract for work).",
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
    "title": "Contract for Work Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the contract for work online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the contract for work under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stranki": {
        "nazev": "Client and contractor"
      },
      "delo": {
        "nazev": "Work, price and deadline"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Client – full name",
        "placeholder": "e.g. Ana Kos"
      },
      "p_adresa": {
        "popis": "Client’s address"
      },
      "k_jmeno": {
        "popis": "Contractor – name or company (s. p., d. o. o.)",
        "placeholder": "e.g. Pleskarstvo Kovač s. p."
      },
      "k_davcna": {
        "popis": "Contractor’s tax number"
      },
      "k_adresa": {
        "popis": "Contractor’s address"
      },
      "opis": {
        "popis": "Description of the work",
        "placeholder": "e.g. pleskanje sten in stropov v stanovanju 60 m², dvakrat, bela barva (painting walls and ceilings in a 60 m² flat, two coats, white)"
      },
      "kraj_dela": {
        "popis": "Place of work"
      },
      "material": {
        "popis": "Materials are supplied by",
        "moznosti": {
          "izvajalec": "the contractor (included in the price)",
          "narocnik": "the client"
        }
      },
      "cena": {
        "popis": "Total price (€)"
      },
      "predujem": {
        "popis": "Advance (€, optional)"
      },
      "zacetek": {
        "popis": "Start of work"
      },
      "rok": {
        "popis": "Completion date"
      },
      "misto": {
        "popis": "Place of signing"
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
      ""
    ],
    "coDal": [
      "Print the contract in two copies and sign both.",
      "On acceptance, inspect the work and report defects to the contractor in writing immediately.",
      "Pay the advance and the final amount by bank transfer against an invoice."
    ],
    "kontrola": [
      "Describe the work as precisely as possible – scope, materials, who supplies them and the completion date.",
      "The client should inspect the completed work as soon as possible and inform the contractor of defects without delay (OZ, contract for work).",
      "Agree a fixed price or a clear method of calculation; agree additional work in writing.",
      "Construction and major work on a building are subject to special rules (construction contract) and permits may be required.",
      "Check the other party’s identity against their identity card and copy the name and tax number exactly as they appear in the document."
    ]
  },
  "dokument": {
    "nazev": "Contract for Work",
    "podnadpis": "concluded under the provisions of the Obligations Code on contracts for work",
    "podpisy": {
      "vlevo": "Client",
      "vpravo": "Contractor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Client:** {{p_jmeno}}, address {{p_adresa}}",
          "**Contractor:** {{k_jmeno}}, tax number {{k_davcna}}, address {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject of the contract",
        "odstavce": [
          "The Contractor undertakes to carry out the following work: {{opis}}.",
          "Place of work: {{kraj_dela}}.",
          {
            "uvodVzor": "Materials (tick one option):",
            "moznosti": {
              "izvajalec": "The materials are supplied by the Contractor and are included in the agreed price.",
              "narocnik": "The materials are supplied by the Client at their own expense and handed to the Contractor in good time."
            }
          }
        ]
      },
      {
        "nadpis": "Deadline",
        "odstavce": [
          "The Contractor will start work on {{zacetek}} and complete it no later than {{rok}}.",
          "If the Contractor does not complete the work on time, the Client may set a reasonable additional deadline and, after it expires, withdraw from the contract and claim damages."
        ]
      },
      {
        "nadpis": "Price and payment",
        "odstavce": [
          "The agreed price for the whole work is **{{cena}}**.",
          "The Client pays an advance of {{predujem}} on signing the contract and the remainder within 8 days of accepting the work free of defects.",
          "Additional work not covered by this contract is carried out and paid for only with prior written agreement."
        ]
      },
      {
        "nadpis": "Acceptance and defects",
        "odstavce": [
          "The Client will inspect the completed work on acceptance and inform the Contractor in writing of any defects found without delay.",
          "The Contractor must remedy defects at their own expense within a reasonable period. The Contractor’s liability for defects is governed by the provisions of the Obligations Code on contracts for work."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by this contract are subject to the Obligations Code.",
          "The contract is drawn up in two identical copies, one for each party."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

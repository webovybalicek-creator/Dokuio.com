/** English version of src/obsah/bg/dogovor-za-izrabotka.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-IZRABOTKA",
    "verze": "1.0"
  },
  "nazev": "Works Contract",
  "nazevA": "the works contract",
  "katalog": {
    "popis": "Tradesperson, repair, renovation.",
    "slova": [
      "works contract Bulgaria",
      "contract with a tradesperson",
      "renovation contract",
      "acceptance of work",
      "dogovor za izrabotka"
    ]
  },
  "landing": {
    "description": "Works contract with a tradesperson in Bulgaria (договор за изработка): description, materials, price in words, advance, deadline, acceptance and defects. Free PDF.",
    "perex": "For painting, repairs or renovation with a tradesperson or company. With the price, deadline and acceptance of the work.",
    "obsahPopis": "Six articles under Art. 258 et seq. of the Obligations and Contracts Act.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Client and contractor."
      },
      {
        "nazev": "Subject",
        "popis": "The work, place, materials."
      },
      {
        "nazev": "Deadline",
        "popis": "Start and completion."
      },
      {
        "nazev": "Price and payment",
        "popis": "Advance, balance, extra work."
      },
      {
        "nazev": "Acceptance and defects",
        "popis": "Inspection and remedy."
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
      "you are hiring a tradesperson for repairs",
      "you want the price and deadline in writing"
    ],
    "nehodiSe": [
      "you are building a house – construction rules and permits apply"
    ],
    "po": [
      {
        "nazev": "Acceptance",
        "popis": "Inspect the work and report defects in writing."
      }
    ],
    "faq": [
      {
        "q": "What if the work has defects?",
        "a": "On acceptance, inspect the work and report the defects immediately; report hidden defects as soon as you discover them (Art. 264 Obligations and Contracts Act). The contractor remedies them at their own cost."
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
    "title": "Works Contract Bulgaria {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the works contract online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the works contract under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "strani": {
        "nazev": "Client and contractor"
      },
      "rabota": {
        "nazev": "Work, price and deadline"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Client – full name"
      },
      "p_adresa": {
        "popis": "Client’s address"
      },
      "k_jmeno": {
        "popis": "Contractor – name or company",
        "placeholder": "e.g. Пример ЕООД"
      },
      "k_eik": {
        "popis": "Contractor’s UIC / BULSTAT",
        "placeholder": "e.g. 123456789"
      },
      "k_adresa": {
        "popis": "Contractor’s registered office"
      },
      "opisanie": {
        "popis": "Description of the work",
        "placeholder": "e.g. боядисване на два апартамента и шпакловка на коридора"
      },
      "myasto_rabota": {
        "popis": "Place of work"
      },
      "materiali": {
        "popis": "Materials are provided by",
        "moznosti": {
          "izpalnitel": "the contractor (included in the price)",
          "vazlozhitel": "the client"
        }
      },
      "cena": {
        "popis": "Total price (EUR)"
      },
      "avans": {
        "popis": "Advance (EUR, optional)"
      },
      "nachalo": {
        "popis": "Start of the work"
      },
      "srok": {
        "popis": "Completion deadline"
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
      "On acceptance, inspect the work and immediately report any defects in writing.",
      "Pay the advance and the final payment by bank transfer, against an invoice."
    ],
    "kontrola": [
      "Describe the work as precisely as possible – scope, materials, who buys them and the completion date.",
      "On acceptance, the client inspects the work and raises objections; if no objections are raised, the work is deemed accepted. Hidden defects must be reported as soon as they are discovered (Art. 264 Obligations and Contracts Act).",
      "Unless otherwise agreed, the contractor works with their own materials (Art. 259 Obligations and Contracts Act) – so agree expressly who provides them.",
      "Agree a fixed price or a clear way of calculating it; agree any extra work in writing.",
      "Check the other party’s identity against their identity card and copy the names and EGN exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Works Contract",
    "podnadpis": "for repair or other work under Art. 258 of the Obligations and Contracts Act",
    "podpisy": {
      "vlevo": "Client",
      "vpravo": "Contractor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Client:** {{p_jmeno}}, address {{p_adresa}}",
          "**Contractor:** {{k_jmeno}}, UIC {{k_eik}}, registered office {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject of the contract",
        "odstavce": [
          "The Contractor undertakes to carry out the following work: {{opisanie}}.",
          "Place of work: {{myasto_rabota}}.",
          {
            "uvodVzor": "Materials (tick one option):",
            "moznosti": {
              "izpalnitel": "The materials are provided by the Contractor and are included in the agreed price.",
              "vazlozhitel": "The materials are provided by the Client at their own cost and handed over to the Contractor in good time."
            }
          }
        ]
      },
      {
        "nadpis": "Deadline",
        "odstavce": [
          "The Contractor starts the work on {{nachalo}} and completes it no later than {{srok}}.",
          "If the Contractor does not complete the work on time, the Client may grant a suitable additional period, after which the Client may terminate the contract and claim compensation."
        ]
      },
      {
        "nadpis": "Price and payment",
        "odstavce": [
          "The agreed price for the whole work is **{{cena}}**.",
          "The Client pays an advance of {{avans}} on signing the contract and the balance within 8 days of acceptance of the work without defects.",
          "Extra work not included in the contract is carried out and paid for only on the basis of a prior written agreement."
        ]
      },
      {
        "nadpis": "Acceptance and defects",
        "odstavce": [
          "On acceptance, the Client inspects the work and immediately informs the Contractor in writing of any defects found. Hidden defects are reported as soon as they are discovered.",
          "The Contractor remedies the defects at their own cost within a suitable time. The Contractor’s liability for defects is governed by the Obligations and Contracts Act."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed are subject to the Obligations and Contracts Act.",
          "The contract is drawn up in two identical copies, one for each party."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

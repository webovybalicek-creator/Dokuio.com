/** English version of src/obsah/ro/contract-prestari-servicii.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-ANTREPRIZA",
    "verze": "1.0"
  },
  "nazev": "Works Contract",
  "nazevA": "the works contract",
  "katalog": {
    "popis": "Tradesperson, repair, renovation.",
    "slova": [
      "works contract Romania",
      "contract with a tradesperson",
      "renovation contract",
      "service agreement",
      "contract de antrepriza"
    ]
  },
  "landing": {
    "description": "Works contract with a tradesperson for Romania (contract de antrepriză): work, materials, price in words, advance, deadline, acceptance and defects. Free PDF.",
    "perex": "For painting, repairs or renovation with a tradesperson or company. With the price, deadline and acceptance of the work.",
    "obsahPopis": "Six articles under the Romanian Civil Code.",
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
      "Amount in words in Romanian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are hiring a tradesperson for a job",
      "you want the price and deadline in writing"
    ],
    "nehodiSe": [
      "you are building a house – permits and special rules apply"
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
        "a": "On acceptance, inspect the work and immediately report the defects found in writing; the contractor remedies them at their own cost."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Romanian Civil Code.",
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
    "title": "Works Contract Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the works contract online – Romania, free PDF",
    "description": "Step-by-step guide in English for the works contract under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "parti": {
        "nazev": "Client and contractor"
      },
      "lucrare": {
        "nazev": "Work, price and deadline"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Client – full name",
        "placeholder": "e.g. Ana Dumitrescu"
      },
      "p_adresa": {
        "popis": "Client’s address"
      },
      "k_jmeno": {
        "popis": "Contractor – name or company (PFA, SRL)",
        "placeholder": "e.g. Zugrăveli Ionescu PFA"
      },
      "k_cui": {
        "popis": "Contractor’s CUI / CIF (tax ID)"
      },
      "k_adresa": {
        "popis": "Contractor’s registered office"
      },
      "descriere": {
        "popis": "Description of the work",
        "placeholder": "e.g. zugrăvirea pereților și tavanelor într-un apartament de 60 m², în două straturi, culoare albă"
      },
      "loc_lucrare": {
        "popis": "Place of work"
      },
      "materiale": {
        "popis": "Materials are bought by",
        "moznosti": {
          "antreprenor": "the contractor (included in the price)",
          "beneficiar": "the client"
        }
      },
      "cena": {
        "popis": "Total price (lei)"
      },
      "avans": {
        "popis": "Advance (lei, optional)"
      },
      "inceput": {
        "popis": "Start of the work"
      },
      "termen": {
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
      "Pay the advance and the final payment to an account, against an invoice."
    ],
    "kontrola": [
      "Describe the work as precisely as possible – scope, materials, who buys them and the completion date.",
      "On acceptance, the client inspects the work and reports apparent defects; otherwise the work may be deemed accepted (Civil Code, works contract).",
      "Agree a fixed price or a clear way of calculating it; agree any extra work in writing.",
      "For construction and major building work, special rules apply and permits may be required.",
      "Check the other party’s identity against their identity card and copy the name and CNP exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Works Contract",
    "podnadpis": "for carrying out work under the Civil Code",
    "podpisy": {
      "vlevo": "Client",
      "vpravo": "Contractor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Client:** {{p_jmeno}}, domiciled at {{p_adresa}}",
          "**Contractor:** {{k_jmeno}}, CUI {{k_cui}}, registered office at {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject of the contract",
        "odstavce": [
          "The Contractor undertakes to carry out the following work: {{descriere}}.",
          "Place of work: {{loc_lucrare}}.",
          {
            "uvodVzor": "Materials (tick one option):",
            "moznosti": {
              "antreprenor": "The materials are procured by the Contractor and are included in the agreed price.",
              "beneficiar": "The materials are procured by the Client at their own cost and handed over to the Contractor in good time."
            }
          }
        ]
      },
      {
        "nadpis": "Deadline",
        "odstavce": [
          "The Contractor starts the work on {{inceput}} and completes it no later than {{termen}}.",
          "If the Contractor does not complete the work on time, the Client may grant a reasonable additional period, after which the Client may terminate the contract and claim damages."
        ]
      },
      {
        "nadpis": "Price and payment",
        "odstavce": [
          "The agreed price for the whole work is **{{cena}}**.",
          "The Client pays an advance of {{avans}} on signing the contract and the balance within 8 days of acceptance of the work without defects.",
          "Extra work not included in this contract is carried out and paid for only on the basis of a prior written agreement."
        ]
      },
      {
        "nadpis": "Acceptance and defects",
        "odstavce": [
          "On acceptance, the Client inspects the work and promptly informs the Contractor in writing of any defects found.",
          "The Contractor remedies the defects at their own cost within a reasonable time. The Contractor’s liability for defects is governed by the Civil Code."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed are subject to the Civil Code.",
          "The contract is drawn up in two original copies, one for each party."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

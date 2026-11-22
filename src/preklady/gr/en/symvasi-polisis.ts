/** English version of src/obsah/gr/symvasi-polisis.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-POLISI",
    "verze": "1.0"
  },
  "nazev": "Sale Agreement",
  "nazevA": "the sale agreement",
  "katalog": {
    "popis": "Sale of a used item via an ad.",
    "slova": [
      "sale agreement Greece",
      "private sale contract Greece",
      "used item sale",
      "sale via classified ad",
      "symfonitiko polisis"
    ]
  },
  "landing": {
    "description": "Private sale agreement for Greece (ιδιωτικό συμφωνητικό πώλησης) for a used item: description, condition, price in words and handover. Free PDF and Word.",
    "perex": "For selling a used item between private persons – a bike, a phone, furniture, equipment.",
    "obsahPopis": "Articles on the sale (Art. 513 ff. Civil Code).",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Seller and buyer."
      },
      {
        "nazev": "Item",
        "popis": "Description and condition."
      },
      {
        "nazev": "Price",
        "popis": "Amount in words and method of payment."
      },
      {
        "nazev": "Handover",
        "popis": "When and where."
      }
    ],
    "online": [
      "Amount in words in Greek added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are selling something used via an ad",
      "you want the condition of the item in writing"
    ],
    "nehodiSe": [
      "you are selling a car or motorcycle – use the dedicated agreement"
    ],
    "po": [
      {
        "nazev": "Payment",
        "popis": "Prefer a bank transfer or payment on collection."
      }
    ],
    "faq": [
      {
        "q": "Is the seller liable for defects?",
        "a": "Yes, for defects they did not mention. Defects the buyer knew about at the time of sale give rise to no liability (Art. 537 Civil Code) – so write them down."
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
    "title": "Sale Agreement Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the sale agreement online – Greece, free PDF",
    "description": "Step-by-step guide in English for the sale agreement under Greek law. Bilingual PDF or Word with the original text, free of charge.",
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
      "meri": {
        "nazev": "Seller and buyer"
      },
      "pragma": {
        "nazev": "The item and the price"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Seller – full name",
        "placeholder": "e.g. Γεώργιος Παπαδόπουλος"
      },
      "p_adresa": {
        "popis": "Seller’s address"
      },
      "k_jmeno": {
        "popis": "Buyer – full name",
        "placeholder": "e.g. Μαρία Κωνσταντίνου"
      },
      "k_adresa": {
        "popis": "Buyer’s address"
      },
      "vec": {
        "popis": "Description of the item",
        "placeholder": "e.g. ηλεκτρικό ποδήλατο Cube Kathmandu, σειριακός αριθμός WCU123456, με φορτιστή"
      },
      "stav": {
        "popis": "Condition and known defects",
        "placeholder": "e.g. μεταχειρισμένο, γρατζουνιά στον σκελετό"
      },
      "cena": {
        "popis": "Price (EUR)"
      },
      "plirimi": {
        "popis": "Payment",
        "moznosti": {
          "metrita": "in cash, on signing",
          "trapeza": "by bank transfer"
        }
      },
      "iban": {
        "popis": "Seller’s IBAN",
        "placeholder": "GR16 0110 1250 0000 0001 2300 695"
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
      "",
      "",
      ""
    ],
    "coDal": [
      "Print the agreement in two copies and sign both.",
      "Hand over the item together with accessories and documents."
    ],
    "kontrola": [
      "Describe the item precisely (make, model, serial number, accessories).",
      "List all known defects – the seller is not liable for defects the buyer knew about at the time of purchase (Art. 537 Civil Code).",
      "The seller is liable for actual defects and agreed qualities; an agreement excluding liability is void if the seller fraudulently concealed the defect.",
      "Check the other party’s identity card and copy the full name, identity card number and tax number (AFM) exactly as they appear.",
      "Count the money on signing; larger sums are better transferred through a bank – the bank record is the best proof. Payments to businesses of €500 or more must be made electronically."
    ]
  },
  "dokument": {
    "nazev": "Sale Agreement",
    "podnadpis": "sale of a movable item between private persons (Art. 513 ff. Civil Code)",
    "podpisy": {
      "vlevo": "The Seller",
      "vpravo": "The Buyer"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Seller:** {{p_jmeno}}, resident at {{p_adresa}}",
          "**Buyer:** {{k_jmeno}}, resident at {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject",
        "odstavce": [
          "The Seller sells and the Buyer buys the following item: {{vec}}.",
          "Condition and known defects: {{stav}}. The Buyer has inspected the item and buys it in the condition in which it is.",
          "The Seller declares that they own the item and that it is free of third-party rights."
        ]
      },
      {
        "nadpis": "Price",
        "odstavce": [
          "The price is **{{cena}}**.",
          {
            "uvodVzor": "Payment (tick one option):",
            "moznosti": {
              "metrita": "The Buyer paid the price in cash on signing; the Seller confirms receipt by their signature.",
              "trapeza": "The Buyer will transfer the price to the Seller’s account IBAN {{iban}}. The item is handed over once the amount has been credited."
            }
          }
        ]
      },
      {
        "nadpis": "Handover and final provisions",
        "odstavce": [
          "On handover the Buyer becomes the owner of the item and the risk passes to them.",
          "Matters not governed are subject to the provisions of the Civil Code on sale. Drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

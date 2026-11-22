/** English version of src/obsah/lt/pirkimo-pardavimo-sutartis.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-PIRKIMAS",
    "verze": "1.0"
  },
  "nazev": "Sale Agreement",
  "nazevA": "the sale agreement",
  "katalog": {
    "popis": "Sale of a used item between private persons.",
    "slova": [
      "sale agreement Lithuania",
      "sale of goods private",
      "used item sale contract",
      "pirkimo pardavimo sutartis"
    ]
  },
  "landing": {
    "description": "Sale agreement for an item between private persons in Lithuania (pirkimo–pardavimo sutartis): description, condition and defects, price in words, payment. Free PDF.",
    "perex": "For selling a used item from an advert – a bicycle, phone or furniture. The agreement records the condition, known defects and payment.",
    "obsahPopis": "Sale articles.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Seller and buyer."
      },
      {
        "nazev": "Subject",
        "popis": "Item, condition and defects."
      },
      {
        "nazev": "Price",
        "popis": "Amount in words, cash or transfer."
      },
      {
        "nazev": "Handover",
        "popis": "Ownership and risk."
      }
    ],
    "online": [
      "Amount in words in Lithuanian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are selling or buying a used item from a private person"
    ],
    "nehodiSe": [
      "you are selling a car – use the vehicle agreement",
      "you are buying from a shop"
    ],
    "po": [
      {
        "nazev": "Handover",
        "popis": "Hand over the item with its accessories and documents."
      }
    ],
    "faq": [
      {
        "q": "Is a written agreement needed?",
        "a": "Transactions between private persons above €1,500 are made in writing, except those performed at the moment they are concluded. A written agreement is always useful as proof."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Civil Code of the Republic of Lithuania.",
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
    "title": "Sale Agreement Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the sale agreement online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the sale agreement under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "salys": {
        "nazev": "Seller and buyer"
      },
      "daiktas": {
        "nazev": "Item and price"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Seller – first name and surname",
        "placeholder": "e.g. Rūta Kazlauskienė"
      },
      "p_adresa": {
        "popis": "Seller’s address"
      },
      "k_jmeno": {
        "popis": "Buyer – first name and surname",
        "placeholder": "e.g. Tomas Petrauskas"
      },
      "k_adresa": {
        "popis": "Buyer’s address"
      },
      "vec": {
        "popis": "Description of the item",
        "placeholder": "e.g. Cube Kathmandu e-bike, serial number WCU123456, with charger"
      },
      "stavoklis": {
        "popis": "Condition and known defects",
        "placeholder": "e.g. used, scratch on the frame"
      },
      "cena": {
        "popis": "Price (EUR)"
      },
      "samaksa": {
        "popis": "Payment",
        "moznosti": {
          "skaidra": "in cash, on signing",
          "banka": "by bank transfer"
        }
      },
      "iban": {
        "popis": "Seller’s IBAN",
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
      "",
      "",
      ""
    ],
    "coDal": [
      "Print the agreement in two copies and sign both.",
      "Hand over the item together with its accessories and documents."
    ],
    "kontrola": [
      "Describe the item precisely (make, model, serial number, accessories).",
      "List all known defects – the seller is not liable for defects the buyer knew about.",
      "Transactions between private persons above €1,500 are made in writing, except those performed at the moment they are concluded ([Civil Code, Art. 1.73](https://www.e-tar.lt/portal/lt/legalAct/TAR.8A39C83848CB/asr)).",
      "Check the other party’s identity document and copy the name, surname and personal code exactly as they appear in it.",
      "Count the money on signing; pay larger sums by bank transfer – it is the best proof. Cash payments under one transaction are limited to €5,000."
    ]
  },
  "dokument": {
    "nazev": "Sale Agreement",
    "podnadpis": "sale of a movable item between private persons (Civil Code, Article 6.305 et seq.)",
    "podpisy": {
      "vlevo": "Seller",
      "vpravo": "Buyer"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Seller:** {{p_jmeno}}, address {{p_adresa}}",
          "**Buyer:** {{k_jmeno}}, address {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject of the agreement",
        "odstavce": [
          "The Seller sells and the Buyer buys the following item: {{vec}}.",
          "Condition and known defects: {{stavoklis}}. The Buyer has inspected the item and buys it in its existing condition.",
          "The Seller confirms that the item belongs to them and that no third party has rights to it."
        ]
      },
      {
        "nadpis": "Price",
        "odstavce": [
          "The price is **{{cena}}** (in words: {{cena_vardiem}}).",
          {
            "uvodVzor": "Payment (tick one option):",
            "moznosti": {
              "skaidra": "The Buyer paid the price in cash on signing the agreement; by their signature the Seller confirms receipt of the money.",
              "banka": "The Buyer transfers the price to the Seller’s account IBAN {{iban}}. The item is handed over once the amount has been received."
            }
          }
        ]
      },
      {
        "nadpis": "Handover and final provisions",
        "odstavce": [
          "On handover of the item the Buyer becomes its owner and the risk of accidental loss of the item passes to them.",
          "Matters not governed by this agreement are subject to the provisions of the Civil Code of the Republic of Lithuania on sale. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

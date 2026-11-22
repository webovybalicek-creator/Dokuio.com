/** English version of src/obsah/lv/pirkuma-ligums.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-PIRKUMS",
    "verze": "1.0"
  },
  "nazev": "Sale Agreement",
  "nazevA": "the sale agreement",
  "katalog": {
    "popis": "Sale of a used item after an advert.",
    "slova": [
      "sale agreement Latvia",
      "private sale contract",
      "sale of a used item",
      "pirkuma līgums"
    ]
  },
  "landing": {
    "description": "Sale agreement for a used item in Latvia (pirkuma līgums): description, condition and defects, price in words, payment in cash or by transfer. Free PDF and Word.",
    "perex": "For selling a used item between private persons – a bicycle, phone, furniture, appliances.",
    "obsahPopis": "Articles on the sale.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Seller and buyer."
      },
      {
        "nazev": "Item",
        "popis": "Description, condition, defects."
      },
      {
        "nazev": "Price",
        "popis": "Amount in words and payment."
      },
      {
        "nazev": "Handover",
        "popis": "Passing of ownership and risk."
      }
    ],
    "online": [
      "Amount in words in Latvian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are selling or buying a used item",
      "you want the condition and price in writing"
    ],
    "nehodiSe": [
      "you are selling a vehicle – use the car sale agreement"
    ],
    "po": [
      {
        "nazev": "Handover",
        "popis": "Hand over the item with its accessories."
      },
      {
        "nazev": "Copies",
        "popis": "Each party keeps one."
      }
    ],
    "faq": [
      {
        "q": "Does a sale between private persons need a written agreement?",
        "a": "The law does not require written form for the sale of a movable item, but the agreement proves the price, condition and known defects."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Latvian Civil Law on sale.",
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
    "title": "Sale Agreement Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the sale agreement online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the sale agreement under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
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
        "nazev": "Seller and buyer"
      },
      "lieta": {
        "nazev": "Item and price"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Seller – first name and surname",
        "placeholder": "e.g. Anna Kalniņa"
      },
      "p_adresa": {
        "popis": "Seller’s address"
      },
      "k_jmeno": {
        "popis": "Buyer – first name and surname",
        "placeholder": "e.g. Jānis Bērziņš"
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
      "",
      "",
      ""
    ],
    "coDal": [
      "Print the agreement in two copies and sign both.",
      "Hand over the item with its accessories and documents."
    ],
    "kontrola": [
      "Describe the item precisely (make, model, serial number, accessories).",
      "Write down all known defects – the seller is not liable for defects the buyer knew about.",
      "The seller is liable for hidden defects they knew about and concealed – be honest.",
      "Check the other party’s identity document and copy the name, surname and personal code exactly as they appear in it.",
      "Count the money on signing; pay larger sums by bank transfer – the bank record is the best proof."
    ]
  },
  "dokument": {
    "nazev": "Sale Agreement",
    "podnadpis": "sale of a movable item between private persons (Civil Law, Article 2002 et seq.)",
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
        "nadpis": "Subject",
        "odstavce": [
          "The Seller sells and the Buyer buys the following item: {{vec}}.",
          "Condition and known defects: {{stavoklis}}. The Buyer has inspected the item and buys it in its existing condition.",
          "The Seller confirms that the item belongs to them and is not subject to third-party rights."
        ]
      },
      {
        "nadpis": "Price",
        "odstavce": [
          "The price is **{{cena}}** (in words: {{cena_vardiem}}).",
          {
            "uvodVzor": "Payment (tick one option):",
            "moznosti": {
              "skaidra": "The Buyer paid the price in cash on signing; by signing, the Seller confirms receipt of the money.",
              "banka": "The Buyer transfers the price to the Seller’s account IBAN {{iban}}. The item is handed over after the amount is received."
            }
          }
        ]
      },
      {
        "nadpis": "Handover and final provisions",
        "odstavce": [
          "On handover the Buyer becomes the owner of the item and the risk of its accidental loss passes to them.",
          "Matters not governed by the agreement are subject to the provisions of the Civil Law on sale. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

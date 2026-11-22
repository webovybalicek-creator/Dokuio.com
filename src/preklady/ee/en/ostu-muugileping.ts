/** English version of src/obsah/ee/ostu-muugileping.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-MUUK",
    "verze": "1.0"
  },
  "nazev": "Sale Agreement",
  "nazevA": "the sale agreement",
  "katalog": {
    "popis": "Sale of a used item through an advert.",
    "slova": [
      "sale agreement Estonia",
      "sale of a used item",
      "private sale contract",
      "ostu-müügileping"
    ]
  },
  "landing": {
    "description": "Sale agreement for Estonia (ostu-müügileping) for a used item: item, condition, price in words, payment and handover. Between private persons. Free PDF.",
    "perex": "For selling a used item through an advert – furniture, electronics, a bicycle. Records the condition, price and payment.",
    "obsahPopis": "Articles on the sale.",
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
        "nazev": "Price and payment",
        "popis": "Amount in words."
      },
      {
        "nazev": "Handover",
        "popis": "Ownership and risk."
      }
    ],
    "online": [
      "Amount in words in Estonian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are selling or buying a used item from a private person"
    ],
    "nehodiSe": [
      "you are selling a car – use the vehicle sale agreement"
    ],
    "po": [
      {
        "nazev": "Payment",
        "popis": "Use a bank transfer where possible."
      },
      {
        "nazev": "Copies",
        "popis": "Each party keeps one."
      }
    ],
    "faq": [
      {
        "q": "Is a private seller liable for defects?",
        "a": "Yes, if the item does not conform to the agreement. Enter known defects in the agreement so that no dispute arises later."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Estonian Law of Obligations Act.",
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
    "title": "Sale Agreement Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the sale agreement online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the sale agreement under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "pooled": {
        "nazev": "Seller and buyer"
      },
      "asi": {
        "nazev": "Item and price"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Seller – first name and surname",
        "placeholder": "e.g. Mari Tamm"
      },
      "p_adresa": {
        "popis": "Seller’s address"
      },
      "k_jmeno": {
        "popis": "Buyer – first name and surname",
        "placeholder": "e.g. Jaan Kask"
      },
      "k_adresa": {
        "popis": "Buyer’s address"
      },
      "vec": {
        "popis": "Description of the item",
        "placeholder": "e.g. e-bike Cube Kathmandu, serial number WCU123456, with charger"
      },
      "seisukord": {
        "popis": "Condition and known defects",
        "placeholder": "e.g. used, scratch on the frame"
      },
      "cena": {
        "popis": "Price (EUR)"
      },
      "makse": {
        "popis": "Payment",
        "moznosti": {
          "sularaha": "in cash on signing",
          "pank": "by bank transfer"
        }
      },
      "iban": {
        "popis": "Seller’s IBAN",
        "placeholder": "EE38 2200 2210 2014 5685"
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
      "Write down all known defects – the seller is not liable for a defect the buyer knew about when concluding the agreement.",
      "The seller is liable for the item’s non-conformity with the agreement; an exclusion of liability does not apply if the seller fraudulently concealed the defect.",
      "Check the other party’s identity document and copy the name and personal identification code exactly as they appear in it.",
      "Count the money on signing; pay larger sums by bank transfer – the bank record is the best proof."
    ]
  },
  "dokument": {
    "nazev": "Sale Agreement",
    "podnadpis": "sale of a movable between private persons (Law of Obligations Act § 208 ff.)",
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
          "Condition and known defects: {{seisukord}}. The Buyer has inspected the item and buys it in its existing condition.",
          "The Seller confirms that the item belongs to them and is free of third-party rights."
        ]
      },
      {
        "nadpis": "Price",
        "odstavce": [
          "The price is **{{cena}}** (in words: {{cena_sonadega}}).",
          {
            "uvodVzor": "Payment (tick one option):",
            "moznosti": {
              "sularaha": "The Buyer paid the price in cash on signing; the Seller confirms receipt by signing.",
              "pank": "The Buyer transfers the price to the Seller’s account IBAN {{iban}}. The item is handed over once the amount has been received."
            }
          }
        ]
      },
      {
        "nadpis": "Handover and final provisions",
        "odstavce": [
          "On handover the Buyer becomes the owner of the item and the risk of its accidental loss passes to them.",
          "Matters not governed by the agreement are subject to the sale provisions of the Law of Obligations Act. The agreement is drawn up in two equivalent copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

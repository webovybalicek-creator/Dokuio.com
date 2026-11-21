/** English version of src/obsah/bg/dogovor-pokupko-prodazhba.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-PRODAZHBA",
    "verze": "1.0"
  },
  "nazev": "Sale Agreement",
  "nazevA": "the sale agreement",
  "katalog": {
    "popis": "Selling a used item through an ad.",
    "slova": [
      "sale agreement Bulgaria",
      "selling a used item",
      "private sale contract",
      "classified ad",
      "dogovor za pokupko prodazhba"
    ]
  },
  "landing": {
    "description": "Sale agreement for a used item between private persons in Bulgaria (договор за покупко-продажба): description, defects, price in words and payment. Free PDF.",
    "perex": "For selling a used item – a bike, phone, furniture or tools – for example through an ad.",
    "obsahPopis": "Four articles under the Obligations and Contracts Act.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Seller and buyer."
      },
      {
        "nazev": "Subject and condition",
        "popis": "The item and known defects."
      },
      {
        "nazev": "Price and handover",
        "popis": "Cash or transfer, transfer of ownership."
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
      "you are selling or buying a used item from a private person"
    ],
    "nehodiSe": [
      "you are selling a car or motorcycle – there is a separate agreement"
    ],
    "po": [
      {
        "nazev": "Handover",
        "popis": "Hand over the item only after payment."
      }
    ],
    "faq": [
      {
        "q": "Is the seller liable for defects?",
        "a": "Not for defects the buyer knew about or saw on inspection – so list them in the agreement."
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
    "title": "Sale Agreement Bulgaria {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the sale agreement online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the sale agreement under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "strani": {
        "nazev": "Seller and buyer"
      },
      "vesht": {
        "nazev": "The item and the price"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Seller – full name",
        "placeholder": "e.g. Иван Петров Иванов"
      },
      "p_adresa": {
        "popis": "Seller’s address"
      },
      "k_jmeno": {
        "popis": "Buyer – full name",
        "placeholder": "e.g. Мария Георгиева Димитрова"
      },
      "k_adresa": {
        "popis": "Buyer’s address"
      },
      "vesht": {
        "popis": "Description of the item",
        "placeholder": "e.g. велосипед Scott Aspect, размер L, сериен № …"
      },
      "nedostatatsi": {
        "popis": "Known defects",
        "placeholder": "e.g. драскотина по рамката, иначе без недостатъци"
      },
      "cena": {
        "popis": "Price (EUR)"
      },
      "plashtane": {
        "popis": "Payment",
        "moznosti": {
          "broi": "in cash on signing",
          "smetka": "by transfer, before handover"
        }
      },
      "iban": {
        "popis": "Seller’s IBAN"
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
      "Hand over the item only once you have the money.",
      "Each party keeps one copy."
    ],
    "kontrola": [
      "Describe the item and known defects – the seller is not liable for defects the buyer knew about.",
      "When selling through an ad, never send your card details or SMS codes – this is the most common scam.",
      "Check the other party’s identity against their identity card and copy the names and EGN exactly as they appear in it.",
      "Count cash on signing; pay larger amounts by bank transfer – a bank statement is the best evidence. Payments of EUR 5,000 or more may be made only by bank transfer (Cash Payments Restriction Act)."
    ]
  },
  "dokument": {
    "nazev": "Sale Agreement",
    "podnadpis": "for a used movable item",
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
        "nadpis": "Subject and condition",
        "odstavce": [
          "The Seller sells and the Buyer buys the following used item: {{vesht}}.",
          "Known defects: {{nedostatatsi}}. The Buyer has inspected the item and is buying it in this condition."
        ]
      },
      {
        "nadpis": "Price and handover",
        "odstavce": [
          "The price is **{{cena}}**.",
          {
            "uvodVzor": "Payment (tick one option):",
            "moznosti": {
              "broi": "The Buyer paid the price in cash on signing; the Seller confirms receipt by signing.",
              "smetka": "The Buyer will transfer the price to the Seller’s account IBAN {{iban}}; the Seller hands over the item after receiving the payment."
            }
          },
          "Ownership passes to the Buyer on handover of the item after full payment of the price."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed are subject to the Obligations and Contracts Act. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

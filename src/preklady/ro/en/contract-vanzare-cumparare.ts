/** English version of src/obsah/ro/contract-vanzare-cumparare.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-VANZARE",
    "verze": "1.0"
  },
  "nazev": "Sale Agreement",
  "nazevA": "the sale agreement",
  "katalog": {
    "popis": "Selling a used item through an ad.",
    "slova": [
      "sale agreement Romania",
      "sale of goods between private persons",
      "used item sale",
      "online ad sale",
      "contract vanzare cumparare"
    ]
  },
  "landing": {
    "description": "Sale agreement for a used movable item between private persons in Romania (contract de vânzare-cumpărare): description, defects, price in words and payment. Free PDF.",
    "perex": "For selling a used item through an ad – a bicycle, phone or furniture. With known defects and payment.",
    "obsahPopis": "Four articles under the Romanian Civil Code.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Seller and buyer."
      },
      {
        "nazev": "Subject and condition",
        "popis": "Description of the item and defects."
      },
      {
        "nazev": "Price and handover",
        "popis": "Amount in words, cash or transfer."
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
      "you are selling or buying a used item from a private person"
    ],
    "nehodiSe": [
      "you are selling a car – use the car sale agreement",
      "you are selling real estate – that is done before a notary"
    ],
    "po": [
      {
        "nazev": "Handover",
        "popis": "Hand over the item after you have received the money."
      }
    ],
    "faq": [
      {
        "q": "Is the seller liable for defects?",
        "a": "The seller is not liable for defects the buyer knew about at the time of purchase – so list them in the agreement."
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
    "title": "Sale Agreement Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the sale agreement online – Romania, free PDF",
    "description": "Step-by-step guide in English for the sale agreement under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "parti": {
        "nazev": "Seller and buyer"
      },
      "bun": {
        "nazev": "Item and price"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Seller – full name",
        "placeholder": "e.g. Andrei Popescu"
      },
      "p_adresa": {
        "popis": "Seller’s address"
      },
      "k_jmeno": {
        "popis": "Buyer – full name",
        "placeholder": "e.g. Maria Ionescu"
      },
      "k_adresa": {
        "popis": "Buyer’s address"
      },
      "bun": {
        "popis": "Description of the item",
        "placeholder": "e.g. bicicletă Scott Aspect, mărimea L, seria …"
      },
      "defecte": {
        "popis": "Known defects",
        "placeholder": "e.g. zgârietură pe cadru, altfel fără defecte"
      },
      "cena": {
        "popis": "Price (lei)"
      },
      "plata": {
        "popis": "Payment",
        "moznosti": {
          "numerar": "in cash on signing",
          "cont": "to an account before handover"
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
      "Describe the item and the known defects – the seller is not liable for defects the buyer knew about.",
      "When selling through an ad, never send card details or codes received by SMS – this is the most common scam.",
      "Check the other party’s identity against their identity card and copy the name and CNP exactly as they appear in it.",
      "Count cash on signing; pay larger amounts into an account – a bank statement is the best evidence. Between private persons, cash is allowed up to 50,000 lei per transaction (Law no. 70/2015)."
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
          "**Seller:** {{p_jmeno}}, domiciled at {{p_adresa}}",
          "**Buyer:** {{k_jmeno}}, domiciled at {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject and condition",
        "odstavce": [
          "The Seller sells and the Buyer buys the following used item: {{bun}}.",
          "Known defects: {{defecte}}. The Buyer has inspected the item and is buying it in this condition."
        ]
      },
      {
        "nadpis": "Price and handover",
        "odstavce": [
          "The price is **{{cena}}**.",
          {
            "uvodVzor": "Payment (tick one option):",
            "moznosti": {
              "numerar": "The Buyer paid the price in cash on signing; the Seller confirms receipt by signing.",
              "cont": "The Buyer will transfer the price to the Seller’s account IBAN {{iban}}; the Seller hands over the item after receiving payment."
            }
          },
          "Ownership passes to the Buyer on handover of the item, after full payment of the price."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed are subject to the Civil Code. The agreement is drawn up in two original copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

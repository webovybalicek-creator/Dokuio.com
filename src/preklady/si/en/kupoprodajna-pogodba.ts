/** English version of src/obsah/si/kupoprodajna-pogodba.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-PRODAJA",
    "verze": "1.0"
  },
  "nazev": "Purchase Agreement",
  "nazevA": "the purchase agreement",
  "katalog": {
    "popis": "Sale of a used item through an advert.",
    "slova": [
      "purchase agreement",
      "sale of a used item",
      "private sale",
      "Bolha",
      "kupoprodajna pogodba"
    ]
  },
  "landing": {
    "description": "Purchase agreement for a movable item between private persons in Slovenia: description, known defects, price, payment and handover. Free bilingual PDF or Word.",
    "perex": "For selling a used item through an advert – a bicycle, phone or furniture. With a description of defects and the price in words.",
    "obsahPopis": "Four articles under the Obligations Code (Obligacijski zakonik).",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Seller and buyer."
      },
      {
        "nazev": "Item and condition",
        "popis": "Description and known defects."
      },
      {
        "nazev": "Price and handover",
        "popis": "Amount, payment, transfer of ownership."
      },
      {
        "nazev": "Final provisions",
        "popis": "Copies."
      }
    ],
    "online": [
      "Amount in words in Slovenian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are selling a used item through an advert",
      "you want the condition and price in writing"
    ],
    "nehodiSe": [
      "you are selling a car – use the car purchase agreement"
    ],
    "po": [
      {
        "nazev": "Handover",
        "popis": "Only once the money is with you."
      }
    ],
    "faq": [
      {
        "q": "Is a written agreement needed?",
        "a": "It is not compulsory, but for more expensive items it protects both parties."
      },
      {
        "q": "How do I recognise a scam?",
        "a": "The buyer sends a link for “secure payment” or “delivery” and asks for your card details or a code from a text message."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik – sales contract).",
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
    "title": "Purchase Agreement Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the purchase agreement online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the purchase agreement under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stranki": {
        "nazev": "Seller and buyer"
      },
      "stvar": {
        "nazev": "Item and price"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Seller – full name",
        "placeholder": "e.g. Janez Novak"
      },
      "p_adresa": {
        "popis": "Seller’s address"
      },
      "k_jmeno": {
        "popis": "Buyer – full name",
        "placeholder": "e.g. Maja Horvat"
      },
      "k_adresa": {
        "popis": "Buyer’s address"
      },
      "stvar": {
        "popis": "Description of the item",
        "placeholder": "e.g. kolo Scott Aspect, velikost L, serijska številka … (Scott Aspect bicycle, size L, serial number …)"
      },
      "napake": {
        "popis": "Known defects",
        "placeholder": "e.g. odrgnina na okvirju, sicer brez napak (scuff on the frame, otherwise no defects)"
      },
      "cena": {
        "popis": "Price (€)"
      },
      "placilo": {
        "popis": "Payment",
        "moznosti": {
          "gotovina": "in cash on signing",
          "racun": "by bank transfer before handover"
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
      "Hand over the item only once the money is with you.",
      "Each party keeps one copy."
    ],
    "kontrola": [
      "Describe the item and its known defects – the seller is not liable for defects the buyer knew about.",
      "When selling through an advert, never send card details or codes from text messages – this is the most common scam.",
      "Check the other party’s identity against their identity card and copy the name and tax number exactly as they appear in the document.",
      "Count cash on signing; larger amounts are better paid by bank transfer – a bank confirmation is the best evidence."
    ]
  },
  "dokument": {
    "nazev": "Purchase Agreement",
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
          "The Seller sells and the Buyer buys the used item: {{stvar}}.",
          "Known defects: {{napake}}. The Buyer has inspected the item and buys it in that condition."
        ]
      },
      {
        "nadpis": "Price and handover",
        "odstavce": [
          "The purchase price is **{{cena}}**.",
          {
            "uvodVzor": "Payment (tick one option):",
            "moznosti": {
              "gotovina": "The Buyer paid the price in cash on signing; the Seller confirms receipt by signing.",
              "racun": "The Buyer will transfer the price to the Seller’s account IBAN {{iban}}; the Seller hands over the item after receiving payment."
            }
          },
          "Ownership passes to the Buyer on handover of the item after payment of the full price."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by this agreement are subject to the Obligations Code. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

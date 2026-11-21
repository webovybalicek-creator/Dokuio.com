/** English version of src/obsah/hr/kupoprodajni-ugovor.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-KUPOPRODAJA",
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
      "Njuškalo",
      "kupoprodajni ugovor"
    ]
  },
  "landing": {
    "description": "Purchase agreement for a movable item between private persons in Croatia: description, known defects, price, payment and handover. Anti-fraud tips. Free bilingual PDF.",
    "perex": "For selling a used item through an advert – a bicycle, phone or furniture. With a description of defects and the price in words.",
    "obsahPopis": "Four articles under the Obligations Act (Zakon o obveznim odnosima).",
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
      "Amount in words in Croatian added automatically",
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
    "zakony": "The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima – sale).",
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
    "title": "Purchase Agreement Croatia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the purchase agreement online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the purchase agreement under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "strane": {
        "nazev": "Seller and buyer"
      },
      "stvar": {
        "nazev": "Item and price"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Seller – full name",
        "placeholder": "e.g. Ivan Horvat"
      },
      "p_adresa": {
        "popis": "Seller’s address"
      },
      "k_jmeno": {
        "popis": "Buyer – full name",
        "placeholder": "e.g. Ana Kovačević"
      },
      "k_adresa": {
        "popis": "Buyer’s address"
      },
      "predmet": {
        "popis": "What is being sold",
        "placeholder": "e.g. bicikl Trek Marlin 7, serijski broj … (Trek Marlin 7 bicycle, serial number …)"
      },
      "nedostaci": {
        "popis": "Known defects",
        "moznosti": {
          "ne": "No known defects",
          "da": "With defects"
        }
      },
      "nedostaci_opis": {
        "popis": "Description of the defects"
      },
      "cena": {
        "popis": "Price (€)"
      },
      "placanje": {
        "popis": "Payment",
        "moznosti": {
          "gotovina": "In cash on handover",
          "racun": "By bank transfer before handover"
        }
      },
      "iban": {
        "popis": "Seller’s IBAN"
      },
      "misto": {
        "popis": "Place of signing"
      },
      "datum_podpisu": {
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
      "Hand over the item only once the money is in your account or in your hand."
    ],
    "kontrola": [
      "Describe the item as precisely as possible (make, model, serial number) and list known defects.",
      "A buyer who knew about a defect cannot rely on it later – so list defects honestly.",
      "Scams: anyone who sends a link for “secure payment” or “delivery” and asks for card details is a fraudster. You do not need to enter card details to receive money.",
      "Check the other party’s identity against their identity card and copy the name and OIB exactly as they appear in the document.",
      "Count cash on signing; larger amounts are better paid by bank transfer – a bank confirmation is the best evidence."
    ]
  },
  "dokument": {
    "nazev": "Purchase Agreement",
    "podnadpis": "for a movable item, under the Obligations Act",
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
          "The Seller sells and the Buyer buys: {{predmet}}.",
          {
            "uvodVzor": "Known defects (tick one option):",
            "moznosti": {
              "ne": "The Seller is not aware of any defects of the item.",
              "da": "The Seller has informed the Buyer of the following defects: {{nedostaci_opis}}"
            }
          },
          "The Buyer has inspected the item and buys it in its current condition."
        ]
      },
      {
        "nadpis": "Price and handover",
        "odstavce": [
          "The price is **{{cena}}**.",
          {
            "uvodVzor": "Payment (tick one option):",
            "moznosti": {
              "gotovina": "The Buyer pays the price in cash on handover of the item; the Seller confirms receipt by signing.",
              "racun": "The Buyer pays the price to the Seller’s account IBAN {{iban}}; the Seller hands over the item after receiving the payment."
            }
          },
          "Ownership and risk pass to the Buyer on handover of the item."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by this agreement are subject to the provisions of the Obligations Act.",
          "The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

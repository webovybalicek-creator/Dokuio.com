/** English version of src/obsah/gr/axiosi-eggyisis.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-EGGYISI",
    "verze": "1.0"
  },
  "nazev": "Defect Notice",
  "nazevA": "the defect notice",
  "katalog": {
    "popis": "Defective product, 2-year legal guarantee.",
    "slova": [
      "defect notice Greece",
      "legal guarantee Greece",
      "faulty product complaint",
      "refund defective product",
      "axiosi eggyisis"
    ]
  },
  "landing": {
    "description": "Defect notice for Greece (δήλωση ελαττώματος προϊόντος): 2-year legal guarantee, repair, replacement, price reduction or refund (Art. 534 ff. Civil Code). Free PDF.",
    "perex": "When a product you bought is defective. The seller is liable for 2 years from delivery.",
    "obsahPopis": "A short document.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Product, defect and what you are asking for."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "the product broke or has a defect within 2 years"
    ],
    "nehodiSe": [
      "you simply want to return an online purchase without a defect – use the withdrawal form"
    ],
    "po": [
      {
        "nazev": "Receipt",
        "popis": "Attach the receipt and photos."
      },
      {
        "nazev": "Copy",
        "popis": "Ask for a signature of receipt on your copy."
      }
    ],
    "faq": [
      {
        "q": "How long does the legal guarantee last?",
        "a": "2 years from delivery. For a defect appearing within the first year, it is presumed to have existed at the time of purchase."
      },
      {
        "q": "What can I ask for?",
        "a": "First repair or replacement; if this is not done within a reasonable time, a price reduction or a refund."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the EU rules on the legal guarantee and Greek law 2251/1994.",
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
    "title": "Defect Notice Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the defect notice online – Greece, free PDF",
    "description": "Step-by-step guide in English for the defect notice under Greek law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "notice",
      "g": "notice",
      "a": "notice",
      "l": "notice"
    },
    "kroky": {
      "stoixeia": {
        "nazev": "The defect"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "Seller (shop)",
        "placeholder": "e.g. η επωνυμία του καταστήματος"
      },
      "k_adresa": {
        "popis": "Seller’s address or email"
      },
      "zbozi": {
        "popis": "Product",
        "placeholder": "e.g. πλυντήριο Bosch Serie 4"
      },
      "koupeno": {
        "popis": "Date of purchase"
      },
      "doklad": {
        "popis": "Receipt number"
      },
      "cena": {
        "popis": "Price (EUR)"
      },
      "vada": {
        "popis": "Description of the defect",
        "placeholder": "e.g. δεν ξεκινά η φυγοκέντρηση, εμφανίζεται ο κωδικός E18"
      },
      "zjisteno": {
        "popis": "Date the defect appeared"
      },
      "naroky": {
        "popis": "What you are asking for",
        "moznosti": {
          "oprava": "repair",
          "vymena": "replacement",
          "sleva": "price reduction",
          "odstoupeni": "withdrawal and refund"
        }
      },
      "p_jmeno": {
        "popis": "Your full name"
      },
      "p_adresa": {
        "popis": "Your address"
      },
      "misto": {
        "popis": "Place"
      },
      "datum": {
        "popis": "Date"
      }
    },
    "vysvetleni": [
      ""
    ],
    "coDal": [
      "Hand the notice in at the shop or send it by email or registered letter; keep a copy.",
      "Attach the receipt and photos of the defect.",
      "Ask for written confirmation that the product was received."
    ],
    "kontrola": [
      "The seller is liable for defects that appear within 2 years of delivery ([Your Europe](https://europa.eu/youreurope/citizens/consumers/shopping/guarantees/index_el.htm)).",
      "For a defect appearing within the first year, it is presumed to have existed on delivery – the seller must prove otherwise.",
      "First you are entitled to repair or replacement; if this is not done within a reasonable time, a price reduction or withdrawal.",
      "The manufacturer’s commercial guarantee is additional – it does not replace the seller’s legal guarantee."
    ]
  },
  "dokument": {
    "nazev": "Defect Notice",
    "podnadpis": "exercise of rights under the legal guarantee (Art. 534 ff. Civil Code)",
    "podpisy": {
      "vlevo": "The Buyer",
      "vpravo": "Received (seller, optional)"
    },
    "clanky": [
      {
        "nadpis": "Defect notice",
        "odstavce": [
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "On {{koupeno}} I bought from you the product {{zbozi}} at a price of {{cena}} (receipt no. {{doklad}}).",
          "On {{zjisteno}} the following defect appeared: {{vada}}",
          {
            "uvodVzor": "Under Art. 534 ff. of the Civil Code I request (tick one option):",
            "moznosti": {
              "oprava": "Under Art. 534 ff. of the Civil Code I request free repair of the product.",
              "vymena": "Under Art. 534 ff. of the Civil Code I request replacement of the product with a new one without defects.",
              "sleva": "Under Art. 534 ff. of the Civil Code I request a reasonable reduction of the price.",
              "odstoupeni": "Under Art. 534 ff. of the Civil Code I withdraw from the contract and request a refund of the full price."
            }
          },
          "Please inform me in writing of the remedy within a reasonable time.",
          "**Buyer:** {{p_jmeno}}, {{p_adresa}}"
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

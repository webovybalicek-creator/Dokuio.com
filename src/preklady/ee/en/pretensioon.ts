/** English version of src/obsah/ee/pretensioon.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-PRETENSIOON",
    "verze": "1.0"
  },
  "nazev": "Complaint about Defective Goods",
  "nazevA": "the complaint about defective goods",
  "katalog": {
    "popis": "Defective goods, 2-year liability.",
    "slova": [
      "complaint defective goods Estonia",
      "legal guarantee",
      "faulty product",
      "pretensioon"
    ]
  },
  "landing": {
    "description": "Complaint about defective goods for Estonia (pretensioon): description of the defect and the claim – repair, replacement, price reduction or refund. Free PDF.",
    "perex": "When goods you bought have a defect. The seller is liable for non-conformity of the goods for 2 years from delivery.",
    "obsahPopis": "A short complaint.",
    "obsah": [
      {
        "nazev": "To the seller",
        "popis": "The shop and the purchase."
      },
      {
        "nazev": "Defect",
        "popis": "What is broken and when it appeared."
      },
      {
        "nazev": "Claim",
        "popis": "Repair, replacement, price reduction or withdrawal."
      }
    ],
    "online": [
      "PDF and Word",
      "Choice of claim"
    ],
    "hodiSe": [
      "goods you bought are defective",
      "the seller has not solved the problem"
    ],
    "nehodiSe": [
      "you want to return an online purchase without reason – use the withdrawal form"
    ],
    "po": [
      {
        "nazev": "Send it",
        "popis": "Send the complaint in writing and attach proof of purchase."
      },
      {
        "nazev": "Consumer disputes",
        "popis": "If the seller does not respond, you can turn to the Consumer Disputes Committee."
      }
    ],
    "faq": [
      {
        "q": "How long is the seller liable?",
        "a": "The seller is liable for non-conformity of the goods for 2 years from delivery."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on EU consumer rights (Your Europe) and the Estonian Law of Obligations Act.",
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
    "title": "Complaint about Defective Goods Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the complaint about defective goods online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the complaint about defective goods under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "complaint",
      "g": "complaint",
      "a": "complaint",
      "l": "complaint"
    },
    "kroky": {
      "andmed": {
        "nazev": "The defect"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "Seller (shop)",
        "placeholder": "e.g. name of the shop"
      },
      "k_adresa": {
        "popis": "Seller’s address or e-mail"
      },
      "kaup": {
        "popis": "Goods",
        "placeholder": "e.g. Bosch Serie 4 washing machine"
      },
      "ostetud": {
        "popis": "Date of purchase"
      },
      "tseki": {
        "popis": "Receipt or invoice number"
      },
      "cena": {
        "popis": "Price (EUR)"
      },
      "puudus": {
        "popis": "Description of the defect",
        "placeholder": "e.g. the spin cycle does not start, error code E18 on the display"
      },
      "ilmnes": {
        "popis": "Defect appeared on"
      },
      "noue": {
        "popis": "What you claim",
        "moznosti": {
          "parandus": "repair",
          "asendus": "replacement",
          "alandus": "price reduction",
          "taganemine": "withdrawal from the contract and refund"
        }
      },
      "p_jmeno": {
        "popis": "Your first name and surname"
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
      "Hand over the complaint in the shop or send it by e-mail or registered letter; keep a copy.",
      "Attach proof of purchase and photos of the defect.",
      "Ask for written confirmation that the goods were accepted."
    ],
    "kontrola": [
      "The seller is liable for defects that appear within 2 years of delivery of the goods ([Your Europe](https://europa.eu/youreurope/citizens/consumers/shopping/guarantees/index_et.htm)).",
      "If the defect appears within the first year, it is presumed to have existed at delivery – the seller must prove otherwise.",
      "First you may claim repair or replacement; if this is not done within a reasonable time, a price reduction or withdrawal from the contract.",
      "The manufacturer’s commercial guarantee is additional – it does not replace the seller’s legal liability."
    ]
  },
  "dokument": {
    "nazev": "Complaint about Defective Goods",
    "podnadpis": "claim against the seller for goods not conforming to the contract",
    "podpisy": {
      "vlevo": "Buyer",
      "vpravo": "Received (seller, optional)"
    },
    "clanky": [
      {
        "nadpis": "Complaint",
        "odstavce": [
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "On {{ostetud}} I bought from you the goods {{kaup}} at a price of {{cena}} (receipt/invoice no. {{tseki}}).",
          "On {{ilmnes}} the following defect appeared: {{puudus}}",
          {
            "uvodVzor": "I therefore claim (tick one option):",
            "moznosti": {
              "parandus": "I therefore claim free repair of the goods.",
              "asendus": "I therefore claim replacement of the goods with new, defect-free goods.",
              "alandus": "I therefore claim a reasonable reduction of the price.",
              "taganemine": "I therefore withdraw from the contract and claim a refund of the full price."
            }
          },
          "Please inform me in writing within a reasonable time how the defect will be remedied.",
          "**Buyer:** {{p_jmeno}}, {{p_adresa}}"
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

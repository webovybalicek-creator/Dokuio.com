/** English version of src/obsah/lt/pretenzija.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-PRETENZIJA",
    "verze": "1.0"
  },
  "nazev": "Complaint about Defective Goods",
  "nazevA": "the complaint about defective goods",
  "katalog": {
    "popis": "Defective goods – repair, replacement or refund.",
    "slova": [
      "complaint defective goods Lithuania",
      "consumer complaint",
      "faulty product Lithuania",
      "pretenzija"
    ]
  },
  "landing": {
    "description": "Complaint to a seller for Lithuania (pretenzija): goods, defect, purchase date and your demand – repair, replacement, price reduction or refund. Free PDF and Word.",
    "perex": "When goods you bought are defective. The seller is liable for 2 years from delivery; a defect that appears within a year is presumed to have existed from the start.",
    "obsahPopis": "A short complaint.",
    "obsah": [
      {
        "nazev": "Complaint",
        "popis": "Goods, purchase, defect and your demand."
      }
    ],
    "online": [
      "PDF and Word",
      "Choose your demand"
    ],
    "hodiSe": [
      "the goods broke down or do not match the description",
      "less than 2 years have passed since purchase"
    ],
    "nehodiSe": [
      "you simply want to return an online purchase – use the withdrawal form"
    ],
    "po": [
      {
        "nazev": "Attachments",
        "popis": "Attach the receipt and photos of the defect."
      },
      {
        "nazev": "VVTAT",
        "popis": "If the seller refuses, contact the State Consumer Rights Protection Authority."
      }
    ],
    "faq": [
      {
        "q": "What can I demand?",
        "a": "First – free repair or replacement of the goods. If that is impossible or not done within a reasonable time – a price reduction or termination of the contract and a refund."
      },
      {
        "q": "Do I have to prove the defect was there from the start?",
        "a": "If the defect appears within a year of delivery, it is presumed to have existed then – the seller must prove otherwise."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Civil Code provisions on the quality of goods and Your Europe information on the legal guarantee.",
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
    "title": "Complaint about Defective Goods Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the complaint about defective goods online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the complaint about defective goods under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "duomenys": {
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
      "prece": {
        "popis": "Goods",
        "placeholder": "e.g. Bosch Serie 4 washing machine"
      },
      "pirkts": {
        "popis": "Date of purchase"
      },
      "ceks": {
        "popis": "Receipt or invoice number"
      },
      "cena": {
        "popis": "Price (EUR)"
      },
      "defekts": {
        "popis": "Description of the defect",
        "placeholder": "e.g. spin does not start, code E18 on the display"
      },
      "atklats": {
        "popis": "Defect noticed on"
      },
      "prasijums": {
        "popis": "What you demand",
        "moznosti": {
          "labosana": "repair",
          "apmaina": "replacement",
          "samazinajums": "price reduction",
          "atcelsana": "termination of the contract and refund"
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
      "Submit the complaint in the shop or send it by e-mail or registered letter; keep a copy.",
      "Attach proof of purchase and photos of the defect.",
      "If the seller does not reply or refuses, you can contact the State Consumer Rights Protection Authority (VVTAT)."
    ],
    "kontrola": [
      "The seller is liable for defects of the goods that existed at delivery and became apparent within 2 years ([Your Europe](https://europa.eu/youreurope/citizens/consumers/shopping/guarantees/index_lt.htm)). Report the defect as soon as possible after noticing it.",
      "If the defect becomes apparent within a year of delivery, it is presumed to have existed at delivery – the seller must prove otherwise.",
      "First you can demand free repair or replacement of the goods; if that is impossible or not done within a reasonable time – a price reduction or termination of the contract ([Your Europe](https://europa.eu/youreurope/citizens/consumers/shopping/guarantees/index_lt.htm)).",
      "The manufacturer’s commercial guarantee is additional – it does not replace the seller’s legal liability."
    ]
  },
  "dokument": {
    "nazev": "Complaint about Goods of Inadequate Quality",
    "podnadpis": "claim against the seller concerning goods not in conformity with the contract",
    "podpisy": {
      "vlevo": "Buyer",
      "vpravo": "Received (seller, optional)"
    },
    "clanky": [
      {
        "nadpis": "Complaint",
        "odstavce": [
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "On {{pirkts}} I bought {{prece}} in your shop for {{cena}} (receipt / invoice No. {{ceks}}).",
          "On {{atklats}} the following lack of conformity of the goods with the contract became apparent: {{defekts}}",
          {
            "uvodVzor": "Under the Civil Code of the Republic of Lithuania I demand (tick one option):",
            "moznosti": {
              "labosana": "Under the Civil Code of the Republic of Lithuania I demand that the goods be repaired free of charge.",
              "apmaina": "Under the Civil Code of the Republic of Lithuania I demand that the goods be replaced with new goods in conformity with the contract.",
              "samazinajums": "Under the Civil Code of the Republic of Lithuania I demand a proportionate reduction of the price.",
              "atcelsana": "Under the Civil Code of the Republic of Lithuania I demand termination of the contract and a refund of the full amount paid."
            }
          },
          "Please inform me in writing within a reasonable time how the defect will be remedied.",
          "**Buyer:** {{p_jmeno}}, {{p_adresa}}"
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

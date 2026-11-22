/** English version of src/obsah/lv/pretenzija.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-PRETENZIJA",
    "verze": "1.0"
  },
  "nazev": "Complaint about Defective Goods",
  "nazevA": "the complaint about defective goods",
  "katalog": {
    "popis": "A defect in goods, 2-year liability.",
    "slova": [
      "complaint defective goods Latvia",
      "2-year guarantee Latvia",
      "consumer complaint",
      "pretenzija"
    ]
  },
  "landing": {
    "description": "Complaint about defective goods for Latvia (pretenzija): description of the defect and your claim – repair, replacement, price reduction or refund. Free PDF and Word.",
    "perex": "If a defect appears within 2 years. Submit the complaint within 2 months of discovering the defect.",
    "obsahPopis": "A short complaint.",
    "obsah": [
      {
        "nazev": "Complaint",
        "popis": "Goods, purchase, defect, claim."
      }
    ],
    "online": [
      "Amount in words in Latvian added automatically",
      "Reminder of the 2-month deadline",
      "PDF and Word"
    ],
    "hodiSe": [
      "goods you bought have a defect",
      "the seller does not want to help"
    ],
    "nehodiSe": [
      "you bought from a private person – consumer rights do not apply"
    ],
    "po": [
      {
        "nazev": "Evidence",
        "popis": "Attach the receipt and photos."
      },
      {
        "nazev": "PTAC",
        "popis": "If the seller refuses, contact the Consumer Rights Protection Centre (PTAC)."
      }
    ],
    "faq": [
      {
        "q": "How long is the seller liable?",
        "a": "2 years from delivery. If the defect appears within the first year, it is presumed to have existed at delivery."
      },
      {
        "q": "How soon must I complain?",
        "a": "No later than 2 months from the day you discovered the defect."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Latvian Consumer Rights Protection Law and the EU rules on the legal guarantee.",
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
    "title": "Complaint about Defective Goods Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the complaint about defective goods online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the complaint about defective goods under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "dati": {
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
        "placeholder": "e.g. spin cycle does not start, error code E18"
      },
      "atklats": {
        "popis": "Defect discovered on"
      },
      "prasijums": {
        "popis": "What you claim",
        "moznosti": {
          "labosana": "repair",
          "apmaina": "replacement",
          "samazinajums": "price reduction",
          "atcelsana": "cancellation of the contract and refund"
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
      "If the seller does not reply or refuses, you can contact the Consumer Rights Protection Centre (PTAC)."
    ],
    "kontrola": [
      "A claim about non-conformity of goods may be made within 2 years of delivery; it is submitted to the seller within 2 months of discovering the defect ([Consumer Rights Protection Law, Article 27](https://likumi.lv/ta/id/23309-pateretaju-tiesibu-aizsardzibas-likums)).",
      "If the defect appears within a year of delivery, it is presumed to have existed at delivery – the seller must prove otherwise (Article 13).",
      "First you can ask for repair or replacement; if that is not possible or not done within a reasonable time – a price reduction or cancellation of the contract ([Your Europe](https://europa.eu/youreurope/citizens/consumers/shopping/guarantees/index_lv.htm)).",
      "A manufacturer’s commercial guarantee is extra – it does not replace the seller’s legal liability."
    ],
    "pripominky": {
      "Pretenzijas iesniegšana (2 mēneši pēc atklāšanas)": {
        "nazev": "Submitting the complaint (2 months after discovery)",
        "popis": "Submit the complaint no later than 2 months from this day."
      }
    }
  },
  "dokument": {
    "nazev": "Complaint about Defective Goods",
    "podnadpis": "claim to the seller about goods not in conformity with the contract",
    "podpisy": {
      "vlevo": "Buyer",
      "vpravo": "Received (seller, optional)"
    },
    "clanky": [
      {
        "nadpis": "Complaint",
        "odstavce": [
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "On {{pirkts}} I bought from your shop the goods {{prece}} for {{cena}} (receipt/invoice no. {{ceks}}).",
          "On {{atklats}} the following non-conformity with the contract appeared: {{defekts}}",
          {
            "uvodVzor": "Under the Consumer Rights Protection Law I claim (tick one option):",
            "moznosti": {
              "labosana": "Under the Consumer Rights Protection Law I claim repair of the goods free of charge.",
              "apmaina": "Under the Consumer Rights Protection Law I claim replacement of the goods with new goods in conformity with the contract.",
              "samazinajums": "Under the Consumer Rights Protection Law I claim a proportionate reduction of the price.",
              "atcelsana": "Under the Consumer Rights Protection Law I claim cancellation of the contract and a refund of the full amount paid."
            }
          },
          "Please let me know in writing within a reasonable time how the non-conformity will be remedied.",
          "**Buyer:** {{p_jmeno}}, {{p_adresa}}"
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

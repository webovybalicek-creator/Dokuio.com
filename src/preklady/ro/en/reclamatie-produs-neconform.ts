/** English version of src/obsah/ro/reclamatie-produs-neconform.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-RECLAMATIE",
    "verze": "1.0"
  },
  "nazev": "Complaint about Faulty Goods",
  "nazevA": "the complaint about faulty goods",
  "katalog": {
    "popis": "Reporting faulty goods, the 2-year legal guarantee.",
    "slova": [
      "complaint faulty goods Romania",
      "2-year guarantee",
      "defective product",
      "lack of conformity",
      "reclamatie produs"
    ]
  },
  "landing": {
    "description": "Complaint about faulty goods in Romania (reclamație): describe the defect, ask for repair, replacement, price cut or refund; 2-year legal guarantee. Free PDF.",
    "perex": "For a product that has broken or does not match the contract. The seller is liable for 2 years from delivery.",
    "obsahPopis": "Two articles under GEO no. 140/2021.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Consumer and seller."
      },
      {
        "nazev": "Report",
        "popis": "Product, defect and request."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "the product you bought is faulty",
      "the seller does not want to resolve the problem"
    ],
    "nehodiSe": [
      "you want to return goods without a reason – use the withdrawal form"
    ],
    "po": [
      {
        "nazev": "Confirmation",
        "popis": "Ask for confirmation of receipt."
      },
      {
        "nazev": "ANPC",
        "popis": "If the seller does not respond, contact ANPC."
      }
    ],
    "faq": [
      {
        "q": "How long is the legal guarantee?",
        "a": "The seller is liable for any lack of conformity existing at delivery that becomes apparent within 2 years of delivery (GEO no. 140/2021)."
      },
      {
        "q": "What can I ask for?",
        "a": "First free repair or replacement; if that fails, a price reduction or termination of the contract."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on GEO no. 140/2021 on contracts for the sale of goods.",
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
    "title": "Complaint about Faulty Goods Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the complaint about faulty goods online – Romania, free PDF",
    "description": "Step-by-step guide in English for the complaint about faulty goods under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "parti": {
        "nazev": "Consumer and seller"
      },
      "produs": {
        "nazev": "Product and defect"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Full name"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "p_tel": {
        "popis": "Phone or e-mail"
      },
      "k_jmeno": {
        "popis": "The seller",
        "placeholder": "e.g. numele magazinului"
      },
      "k_adresa": {
        "popis": "Seller’s address"
      },
      "produs": {
        "popis": "The product",
        "placeholder": "e.g. mașină de spălat Bosch, modelul …"
      },
      "cumparat": {
        "popis": "Bought on"
      },
      "bon": {
        "popis": "Receipt or invoice no."
      },
      "constatat": {
        "popis": "Defect noticed on"
      },
      "descriere": {
        "popis": "Exact description of the defect",
        "placeholder": "e.g. mașina se oprește la centrifugare și afișează eroarea E18"
      },
      "cerere": {
        "popis": "I request",
        "moznosti": {
          "reparare": "free repair",
          "inlocuire": "replacement with a new product",
          "reducere": "a price reduction",
          "rezolutiune": "termination of the contract and refund of the price"
        }
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
      ""
    ],
    "coDal": [
      "Hand in the complaint in person and ask for confirmation of receipt, or send it by registered letter.",
      "Attach the receipt, invoice or other proof of purchase."
    ],
    "kontrola": [
      "The seller is liable for any lack of conformity existing at delivery that becomes apparent within 2 years of delivery (GEO no. 140/2021).",
      "You can first ask for the goods to be brought into conformity – repair or replacement, free of charge and within a reasonable time; a price reduction or termination comes into question if this fails.",
      "Inform the seller as soon as possible after you notice the problem and describe it exactly.",
      "If the seller does not respond, you can contact the National Authority for Consumer Protection (ANPC)."
    ]
  },
  "dokument": {
    "nazev": "Complaint about Faulty Goods",
    "podnadpis": "report of a lack of conformity and request for a remedy",
    "podpisy": {
      "vlevo": "Consumer",
      "vpravo": "Received (seller, date)"
    },
    "clanky": [
      {
        "nadpis": "Consumer and seller",
        "odstavce": [
          "**Consumer:** {{p_jmeno}}, {{p_adresa}}, {{p_tel}}",
          "**Seller:** {{k_jmeno}}, {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Report of the lack of conformity",
        "odstavce": [
          "On {{cumparat}} I bought from you: {{produs}}, receipt / invoice no. {{bon}}.",
          "On {{constatat}} I noticed the following lack of conformity: {{descriere}}",
          {
            "uvodVzor": "Request (tick one option):",
            "moznosti": {
              "reparare": "I request that the product be brought into conformity by free repair within a reasonable time.",
              "inlocuire": "I request that the product be brought into conformity by free replacement with a conforming product within a reasonable time.",
              "reducere": "I request a proportionate reduction of the price.",
              "rezolutiune": "I declare the contract terminated and request a refund of the price."
            }
          },
          "I attach a copy of the proof of purchase. Please reply to me in writing."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

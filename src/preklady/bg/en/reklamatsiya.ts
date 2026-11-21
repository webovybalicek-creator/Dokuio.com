/** English version of src/obsah/bg/reklamatsiya.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-REKLAMATSIYA",
    "verze": "1.0"
  },
  "nazev": "Complaint about Faulty Goods",
  "nazevA": "the complaint about faulty goods",
  "katalog": {
    "popis": "Faulty goods, 2-year legal guarantee.",
    "slova": [
      "complaint faulty goods Bulgaria",
      "legal guarantee 2 years",
      "non-conformity",
      "repair",
      "reklamatsiya"
    ]
  },
  "landing": {
    "description": "Complaint about non-conforming goods in Bulgaria (рекламация): repair or replacement within one month, price reduction or termination. 2-year guarantee. Free PDF.",
    "perex": "When goods you bought are faulty or do not match the contract. The seller is liable for 2 years from delivery.",
    "obsahPopis": "Two articles under the Sale of Goods Act.",
    "obsah": [
      {
        "nazev": "Consumer and trader",
        "popis": "Who is complaining and to whom."
      },
      {
        "nazev": "Non-conformity",
        "popis": "The goods, the fault and the request."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "the goods you bought are faulty or do not work properly"
    ],
    "nehodiSe": [
      "you simply want to return goods bought online without a reason – use the withdrawal form"
    ],
    "po": [
      {
        "nazev": "Reference number",
        "popis": "Ask for a reference number or send by registered letter."
      }
    ],
    "faq": [
      {
        "q": "Within what time must the goods be repaired?",
        "a": "Repair or replacement must be carried out free of charge within one month of the notice (Art. 34 of the Sale of Goods Act)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Act on the Supply of Digital Content and Digital Services and the Sale of Goods.",
    "title": "Complaint about Faulty Goods Bulgaria {rok} – free PDF template",
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
    "souvisejiciPopis": "More documents, also free."
  },
  "vytvorit": {
    "title": "Fill in the complaint about faulty goods online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the complaint about faulty goods under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "strani": {
        "nazev": "Consumer and trader"
      },
      "stoka": {
        "nazev": "The goods and the non-conformity"
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
        "popis": "The trader",
        "placeholder": "e.g. името на магазина"
      },
      "k_adresa": {
        "popis": "Trader’s address"
      },
      "stoka": {
        "popis": "The goods",
        "placeholder": "e.g. перална машина Bosch, модел …"
      },
      "kupeno": {
        "popis": "Bought on"
      },
      "belezhka": {
        "popis": "Receipt or invoice no."
      },
      "ustanoveno": {
        "popis": "Non-conformity found on"
      },
      "opisanie": {
        "popis": "Exact description of the non-conformity",
        "placeholder": "e.g. машината спира при центрофугиране и показва грешка E18"
      },
      "iskane": {
        "popis": "I request",
        "moznosti": {
          "remont": "free repair",
          "zamyana": "replacement with new goods",
          "namalyavane": "a price reduction",
          "razvalyane": "termination of the contract and refund of the price"
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
      "Hand in the complaint in person and ask for a reference number, or send it by registered letter.",
      "Attach the receipt, invoice or other proof of purchase."
    ],
    "kontrola": [
      "The seller is liable for any non-conformity existing at delivery that appears within 2 years of it ([Sale of Goods Act](https://www.mi.government.bg/file/2022/03/file-772-2-6570.pdf)).",
      "A non-conformity that appears within the first year is presumed to have existed at delivery unless the seller proves otherwise.",
      "You may request repair or replacement – free of charge and within one month of the notice; a price reduction or termination comes into play if this fails.",
      "A complaint may be made within 2 years of delivery, in writing or orally. If the trader does not respond, contact the Commission for Consumer Protection (KZP)."
    ]
  },
  "dokument": {
    "nazev": "Complaint",
    "podnadpis": "notice of non-conformity of goods with the sale contract",
    "podpisy": {
      "vlevo": "Consumer",
      "vpravo": "Received (trader, date)"
    },
    "clanky": [
      {
        "nadpis": "Consumer and trader",
        "odstavce": [
          "**Consumer:** {{p_jmeno}}, {{p_adresa}}, {{p_tel}}",
          "**Trader:** {{k_jmeno}}, {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Notice of non-conformity",
        "odstavce": [
          "On {{kupeno}} I bought from you: {{stoka}}, receipt / invoice no. {{belezhka}}.",
          "On {{ustanoveno}} I found the following non-conformity: {{opisanie}}",
          {
            "uvodVzor": "Request (tick one option):",
            "moznosti": {
              "remont": "Please bring the goods into conformity by free repair within one month of this notice.",
              "zamyana": "Please bring the goods into conformity by free replacement with conforming goods within one month of this notice.",
              "namalyavane": "I request a proportionate reduction of the price.",
              "razvalyane": "I declare termination of the contract and request a refund of the price paid."
            }
          },
          "I attach a copy of the proof of purchase. Please reply to me in writing."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

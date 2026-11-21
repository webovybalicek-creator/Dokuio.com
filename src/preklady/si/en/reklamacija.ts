/** English version of src/obsah/si/reklamacija.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-REKLAMACIJA",
    "verze": "1.0"
  },
  "nazev": "Complaint about Defects",
  "nazevA": "the complaint about defects",
  "katalog": {
    "popis": "Notice of non-conformity of goods.",
    "slova": [
      "complaint about defects",
      "faulty goods",
      "warranty claim",
      "non-conformity",
      "reklamacija"
    ]
  },
  "landing": {
    "title": "Complaint about Defects Slovenia {rok} – free PDF template",
    "description": "Complaint form for Slovenia (reklamacija): notify non-conformity within two months, repair or replacement within 30 days, two-year liability. Free bilingual PDF or Word.",
    "perex": "Goods broke down or don’t work as they should? A written notice to the trader with your demand.",
    "obsahPopis": "A written complaint with a demand.",
    "obsah": [
      {
        "nazev": "Consumer and trader",
        "popis": "Who is complaining."
      },
      {
        "nazev": "Complaint",
        "popis": "Goods, defect, demand and attachment."
      }
    ],
    "online": [
      "PDF and Word",
      "Choice of demand"
    ],
    "hodiSe": [
      "the goods you bought are faulty",
      "the trader will not fix the fault"
    ],
    "nehodiSe": [
      "you only want to return working goods bought online – use the withdrawal form"
    ],
    "po": [
      {
        "nazev": "Submission",
        "popis": "With confirmation of receipt."
      },
      {
        "nazev": "Deadline",
        "popis": "Repair or replacement within a reasonable period, at most 30 days."
      }
    ],
    "faq": [
      {
        "q": "What is the deadline for a complaint?",
        "a": "Notify the trader within two months of discovering the non-conformity; the trader is liable for non-conformities that appear within two years of delivery."
      },
      {
        "q": "What can I demand?",
        "a": "First a free repair or replacement; if that is not possible, a price reduction or withdrawal from the contract. Within 30 days of delivery you can reject the goods."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Consumer Protection Act (Zakon o varstvu potrošnikov, ZVPot-1).",
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
    "title": "Fill in the complaint about defects online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the complaint about defects under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stranki": {
        "nazev": "Consumer and seller"
      },
      "blago": {
        "nazev": "Goods and non-conformity"
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
        "popis": "Seller",
        "placeholder": "e.g. name of the shop"
      },
      "k_adresa": {
        "popis": "Seller’s address"
      },
      "blago": {
        "popis": "Goods",
        "placeholder": "e.g. pralni stroj Bosch, model … (Bosch washing machine, model …)"
      },
      "kupljeno": {
        "popis": "Bought on"
      },
      "racun": {
        "popis": "Invoice number"
      },
      "ugotovljeno": {
        "popis": "Non-conformity discovered on"
      },
      "opis": {
        "popis": "Precise description of the non-conformity",
        "placeholder": "e.g. stroj med centrifugo ustavi in prikaže napako E18 (the machine stops during the spin cycle and shows error E18)"
      },
      "zahtevek": {
        "popis": "I demand",
        "moznosti": {
          "popravilo": "free repair",
          "zamenjava": "replacement with new goods",
          "znizanje": "a price reduction",
          "odstop": "withdrawal from the contract and a refund"
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
      "Hand in the notice in person and ask for confirmation of receipt, or send it by registered post.",
      "Attach the invoice or other proof of purchase."
    ],
    "kontrola": [
      "Notify the seller of the non-conformity within two months of the day you discovered it and describe it precisely (Art. 84 ZVPot-1).",
      "The seller is liable for non-conformities that appear within two years of delivery of the goods.",
      "First you can demand a free repair or replacement within a reasonable period not exceeding 30 days; a price reduction or withdrawal applies if that fails.",
      "If the non-conformity appears within 30 days of delivery, you have the right to reject the goods."
    ]
  },
  "dokument": {
    "nazev": "Notice of Non-Conformity of Goods",
    "podnadpis": "complaint and demand to bring the goods into conformity",
    "podpisy": {
      "vlevo": "consumer",
      "vpravo": "received (seller, date)"
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
        "nadpis": "Notice of non-conformity",
        "odstavce": [
          "On {{kupljeno}} I bought from you: {{blago}}, invoice no. {{racun}}.",
          "On {{ugotovljeno}} I discovered the following non-conformity: {{opis}}",
          {
            "uvodVzor": "Demand (tick one option):",
            "moznosti": {
              "popravilo": "I demand that the goods be brought into conformity free of charge by repair within a reasonable period not exceeding 30 days.",
              "zamenjava": "I demand free replacement with goods free of non-conformity within a reasonable period not exceeding 30 days.",
              "znizanje": "I demand a proportionate reduction of the purchase price.",
              "odstop": "I withdraw from the contract and demand a refund of the purchase price."
            }
          },
          "I attach a copy of the invoice. Please reply in writing."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

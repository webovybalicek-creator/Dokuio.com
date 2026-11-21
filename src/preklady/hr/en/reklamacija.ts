/** English version of src/obsah/hr/reklamacija.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-REKLAMACIJA",
    "verze": "1.0"
  },
  "nazev": "Complaint about Defects",
  "nazevA": "the complaint about defects",
  "katalog": {
    "popis": "A written complaint about faulty goods.",
    "slova": [
      "complaint about defects",
      "faulty goods",
      "warranty claim",
      "defective product",
      "reklamacija",
      "pisani prigovor"
    ]
  },
  "landing": {
    "title": "Complaint about Defects Croatia {rok} – free PDF template",
    "description": "Written complaint about faulty goods in Croatia (reklamacija): two months to notify, two-year liability, the trader answers within 15 days. Free bilingual PDF or Word.",
    "perex": "Goods broke down or don’t work properly? A written complaint to the trader, with an answer within 15 days.",
    "obsahPopis": "A written complaint with a demand.",
    "obsah": [
      {
        "nazev": "Complainant and trader",
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
        "nazev": "Answer",
        "popis": "The trader has 15 days."
      }
    ],
    "faq": [
      {
        "q": "What is the deadline for a complaint?",
        "a": "Notify the trader within two months of discovering the defect; the trader is liable for defects that appear within two years of delivery."
      },
      {
        "q": "What can I demand?",
        "a": "Removal of the defect, replacement, a price reduction or termination of the contract."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima) and the Consumer Protection Act (Zakon o zaštiti potrošača).",
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
    "title": "Fill in the complaint about defects online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the complaint about defects under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podaci": {
        "nazev": "Trader, goods and defect"
      }
    },
    "pole": {
      "obchod": {
        "popis": "Trader – name and address",
        "placeholder": "e.g. Primjer d.o.o., Ulica 1, 10000 Zagreb"
      },
      "zbozi": {
        "popis": "Goods",
        "placeholder": "e.g. perilica rublja Bosch Serie 4 (Bosch Serie 4 washing machine)"
      },
      "koupeno": {
        "popis": "Date of purchase"
      },
      "doklad": {
        "popis": "Invoice number"
      },
      "cena": {
        "popis": "Price (€)"
      },
      "zjisteno": {
        "popis": "Defect discovered on"
      },
      "vada": {
        "popis": "Description of the defect",
        "placeholder": "e.g. perilica ne centrifugira i javlja grešku E18 (the machine does not spin and shows error E18)"
      },
      "zahtjev": {
        "popis": "What you demand",
        "moznosti": {
          "popravak": "Removal of the defect (repair)",
          "zamjena": "Replacement with goods free of defects",
          "snizenje": "A price reduction",
          "raskid": "Termination of the contract and a refund"
        }
      },
      "jmeno": {
        "popis": "Your full name"
      },
      "adresa": {
        "popis": "Your address"
      },
      "kontakt": {
        "popis": "Phone or e-mail"
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
      "Hand in the complaint at the shop (have them confirm receipt) or send it by post or e-mail.",
      "The trader must answer you no later than 15 days after receiving the complaint.",
      "If they do not answer or refuse, contact a consumer protection association or an alternative dispute resolution body."
    ],
    "kontrola": [
      "Notify the trader within two months of the day you discovered the defect ([gov.hr](https://www.gov.hr/hr/reklamacija-proizvoda-i-usluga-s-nedostatkom/548)).",
      "The trader is liable for material defects that appear within two years of delivery of the goods; for used goods one year may be agreed.",
      "Attach a copy of the invoice – the complaint must contain your details, a description of the defect and your demand.",
      "You can demand removal of the defect, replacement, a price reduction or termination of the contract."
    ]
  },
  "dokument": {
    "nazev": "Written Complaint (reklamacija)",
    "podnadpis": "about a material defect of goods – Obligations Act and Consumer Protection Act",
    "podpisy": {
      "vlevo": "consumer",
      "vpravo": "received by the trader"
    },
    "clanky": [
      {
        "nadpis": "Complainant and trader",
        "odstavce": [
          "**Consumer:** {{jmeno}}, address {{adresa}}, contact {{kontakt}}",
          "**Trader:** {{obchod}}"
        ]
      },
      {
        "nadpis": "Complaint",
        "odstavce": [
          "On {{koupeno}} I bought the following goods from you: {{zbozi}}, at a price of {{cena}} (invoice no. {{doklad}}).",
          "On {{zjisteno}} I discovered the following defect: {{vada}}",
          {
            "uvodVzor": "I demand (tick one option):",
            "moznosti": {
              "popravak": "that the defect be removed free of charge.",
              "zamjena": "that I be given other goods free of defects.",
              "snizenje": "a proportionate reduction of the price.",
              "raskid": "termination of the contract and a refund of the price paid."
            }
          },
          "Please answer in writing within the statutory period of 15 days of receiving this complaint.",
          "Attachment: copy of the invoice."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

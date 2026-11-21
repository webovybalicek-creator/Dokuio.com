/** English version of src/obsah/bg/formulyar-otkaz-ot-dogovor.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-OTKAZ",
    "verze": "1.0"
  },
  "nazev": "Withdrawal Form",
  "nazevA": "the withdrawal form",
  "katalog": {
    "popis": "Returning an online purchase within 14 days.",
    "slova": [
      "withdrawal form Bulgaria",
      "return online purchase",
      "14 days",
      "distance contract",
      "formulyar za otkaz"
    ]
  },
  "landing": {
    "description": "Withdrawal form for distance contracts in Bulgaria (формуляр за отказ): 14 days without giving a reason, refund within 14 days. Free PDF and Word.",
    "perex": "When you want to return goods bought online or by phone. You have 14 days and do not have to give a reason.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Withdrawal",
        "popis": "Trader, goods, order and account for the refund."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "you are returning goods bought online or by phone"
    ],
    "nehodiSe": [
      "the goods are faulty – a complaint is more suitable"
    ],
    "po": [
      {
        "nazev": "Return",
        "popis": "Send the goods back within 14 days of withdrawal."
      }
    ],
    "faq": [
      {
        "q": "How much time do I have?",
        "a": "14 days from receiving the goods. It is enough to send the withdrawal before the deadline (Consumer Protection Act)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Consumer Protection Act.",
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
    "title": "Withdrawal Form Bulgaria {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the withdrawal form online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the withdrawal form under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "form",
      "g": "form",
      "a": "form",
      "l": "form"
    },
    "kroky": {
      "danni": {
        "nazev": "The withdrawal"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "The trader",
        "placeholder": "e.g. името на онлайн магазина"
      },
      "k_adresa": {
        "popis": "Trader’s address or e-mail"
      },
      "stoka": {
        "popis": "Goods or service",
        "placeholder": "e.g. зимно яке, размер M"
      },
      "porachka": {
        "popis": "Order number"
      },
      "poracheno": {
        "popis": "Ordered on"
      },
      "polucheno": {
        "popis": "Received on"
      },
      "p_jmeno": {
        "popis": "Your name"
      },
      "p_adresa": {
        "popis": "Your address"
      },
      "iban": {
        "popis": "IBAN for the refund (optional)",
        "placeholder": "BG80 …"
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
      "Send the form by e-mail or registered letter before the 14 days expire and keep proof of sending.",
      "Return the goods within 14 days of withdrawal."
    ],
    "kontrola": [
      "For a distance contract (online, by phone) or one concluded off-premises, the consumer may withdraw within 14 days without giving a reason (Consumer Protection Act).",
      "For goods, the period runs from the day you received them.",
      "It is enough to send the notice before the period expires.",
      "The trader refunds all payments, including standard delivery costs, within 14 days of being informed of the withdrawal.",
      "The direct cost of returning the goods is usually borne by the consumer if the trader has informed them of this."
    ]
  },
  "dokument": {
    "nazev": "Form for Exercising the Right of Withdrawal",
    "podnadpis": "notice of withdrawal from a distance contract",
    "podpisy": {
      "vlevo": "Consumer",
      "vpravo": "Received (trader, optional)"
    },
    "clanky": [
      {
        "nadpis": "Withdrawal",
        "odstavce": [
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby give notice that I withdraw from my contract for the purchase of the following goods or the provision of the following service: {{stoka}}.",
          "Order number: {{porachka}}. Ordered on {{poracheno}}, received on {{polucheno}}.",
          "**Consumer:** {{p_jmeno}}, {{p_adresa}}",
          "Please refund the payments to account IBAN {{iban}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

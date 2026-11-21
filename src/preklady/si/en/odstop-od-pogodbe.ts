/** English version of src/obsah/si/odstop-od-pogodbe.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-ODSTOP",
    "verze": "1.0"
  },
  "nazev": "Withdrawal Form",
  "nazevA": "the withdrawal form",
  "katalog": {
    "popis": "Returning goods bought online within 14 days.",
    "slova": [
      "withdrawal form",
      "return goods bought online",
      "14-day withdrawal",
      "cancel online order",
      "odstop od pogodbe"
    ]
  },
  "landing": {
    "description": "Withdrawal form for Slovenia (odstop od pogodbe): return goods bought online within 14 days under the Consumer Protection Act (ZVPot-1). Free bilingual PDF or Word.",
    "perex": "Bought something online and changed your mind? You can withdraw within 14 days without giving a reason.",
    "obsahPopis": "A declaration based on the model form in ZVPot-1.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Trader, goods, order and refund."
      }
    ],
    "online": [
      "Based on the model form",
      "PDF and Word"
    ],
    "hodiSe": [
      "you bought online or by phone",
      "you bought away from business premises"
    ],
    "nehodiSe": [
      "you bought in a shop – then only a complaint or the trader’s goodwill applies"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "By e-mail or registered post, before the deadline."
      },
      {
        "nazev": "Returning the goods",
        "popis": "Within 14 days of withdrawing."
      }
    ],
    "faq": [
      {
        "q": "How long is the deadline?",
        "a": "14 days, for goods generally from the day you received them."
      },
      {
        "q": "When do I get my money back?",
        "a": "The trader must refund the payment no later than 14 days after receiving your declaration."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Consumer Protection Act (Zakon o varstvu potrošnikov, ZVPot-1) and its model withdrawal form.",
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
    "title": "Withdrawal Form Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the withdrawal form online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the withdrawal form under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podatki": {
        "nazev": "Withdrawal"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "Company (seller)",
        "placeholder": "e.g. name of the online shop"
      },
      "k_adresa": {
        "popis": "Company address or e-mail"
      },
      "blago": {
        "popis": "Goods or service",
        "placeholder": "e.g. zimska bunda, velikost M (winter jacket, size M)"
      },
      "narocilo": {
        "popis": "Order number"
      },
      "narocen": {
        "popis": "Ordered on"
      },
      "prejet": {
        "popis": "Received on"
      },
      "p_jmeno": {
        "popis": "Your full name"
      },
      "p_adresa": {
        "popis": "Your address"
      },
      "iban": {
        "popis": "IBAN for the refund (optional)",
        "placeholder": "SI56 …"
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
      "Send the declaration by e-mail or registered post before the 14 days expire and keep proof of sending.",
      "Return the goods no later than 14 days after withdrawing."
    ],
    "kontrola": [
      "For contracts concluded at a distance (online, by phone) or away from business premises, the consumer may withdraw within 14 days without giving a reason (ZVPot-1).",
      "For goods, the period generally runs from the day you received them.",
      "It is enough to send the declaration before the deadline expires.",
      "The company refunds all payments, including standard delivery costs, no later than 14 days after receiving the notice of withdrawal.",
      "The direct cost of returning the goods is generally borne by the consumer if the company informed them of this."
    ]
  },
  "dokument": {
    "nazev": "Withdrawal Form",
    "podnadpis": "notice of withdrawal from a distance contract",
    "podpisy": {
      "vlevo": "consumer",
      "vpravo": "received (company, optional)"
    },
    "clanky": [
      {
        "nadpis": "Withdrawal",
        "odstavce": [
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby give notice that I withdraw from the contract of sale of the following goods / for the supply of the following service: {{blago}}.",
          "Order number: {{narocilo}}. Ordered on {{narocen}}, received on {{prejet}}.",
          "**Consumer:** {{p_jmeno}}, {{p_adresa}}",
          "Please refund the payments to the account IBAN {{iban}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/hr/jednostrani-raskid-ugovora.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-RASKID",
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
      "jednostrani raskid ugovora"
    ]
  },
  "landing": {
    "title": "Withdrawal Form Croatia {rok} – free PDF template",
    "description": "Withdrawal form for Croatia (jednostrani raskid ugovora): return goods bought online within 14 days under the Consumer Protection Act. Free bilingual PDF.",
    "perex": "Bought something online and changed your mind? You have 14 days to withdraw without giving a reason.",
    "obsahPopis": "A declaration based on the form in the Ordinance (NN 117/22).",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Trader, goods, order and refund."
      }
    ],
    "online": [
      "Based on the official form",
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
        "popis": "Within 14 days of sending the declaration."
      }
    ],
    "faq": [
      {
        "q": "How long is the deadline?",
        "a": "14 days, for goods usually from the day you received them."
      },
      {
        "q": "When do I get my money back?",
        "a": "The trader must refund you no later than 14 days after receiving your declaration."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Consumer Protection Act (Zakon o zaštiti potrošača) and the Ordinance on the notice of the right of withdrawal (NN 117/22).",
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
    "title": "Fill in the withdrawal form online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the withdrawal form under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podaci": {
        "nazev": "Trader and order"
      }
    },
    "pole": {
      "obchod": {
        "popis": "Trader – name and address",
        "napoveda": "From the order confirmation or the shop’s terms.",
        "placeholder": "e.g. Primjer d.o.o., Ulica 1, 10000 Zagreb"
      },
      "obchod_email": {
        "popis": "Trader’s e-mail"
      },
      "zbozi": {
        "popis": "Goods or service",
        "placeholder": "e.g. tenisice Nike, vel. 42 (Nike trainers, size 42)"
      },
      "objednavka": {
        "popis": "Order number"
      },
      "objednano": {
        "popis": "Ordered on"
      },
      "prijato": {
        "popis": "Received on"
      },
      "jmeno": {
        "popis": "Your full name"
      },
      "adresa": {
        "popis": "Your address"
      },
      "iban": {
        "popis": "IBAN for the refund (optional)"
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
      "Send the declaration to the trader before the 14 days expire – by e-mail or registered post. Keep proof of sending.",
      "Return the goods no later than 14 days after sending the declaration.",
      "The trader must refund the amount you paid, including standard delivery, no later than 14 days after receiving the declaration."
    ],
    "kontrola": [
      "The deadline is 14 days – for goods usually from the day you received them ([Pravilnik, NN 117/22](https://narodne-novine.nn.hr/clanci/sluzbeni/2022_10_117_1795.html)).",
      "The right applies to distance purchases (online, by phone) and purchases away from business premises, not to purchases in a shop.",
      "You are liable for any diminished value of the goods resulting from handling beyond what is necessary to establish their nature and functioning.",
      "Exceptions: e.g. goods made to measure, quickly perishable goods or unsealed goods that cannot be returned for health reasons."
    ]
  },
  "dokument": {
    "nazev": "Withdrawal Form",
    "podnadpis": "contract concluded at a distance or away from business premises – Consumer Protection Act",
    "podpisy": {
      "vlevo": "consumer",
      "vpravo": "confirmation of receipt (optional)"
    },
    "clanky": [
      {
        "nadpis": "Declaration of withdrawal",
        "odstavce": [
          "**To:** {{obchod}}, e-mail: {{obchod_email}}",
          "I, **{{jmeno}}**, address {{adresa}}, hereby give notice that I withdraw from the contract of sale of the following goods / for the provision of the following service: {{zbozi}}",
          "Order number: {{objednavka}}, ordered on {{objednano}}, received on {{prijato}}.",
          "Please refund the amount paid to the account IBAN {{iban}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

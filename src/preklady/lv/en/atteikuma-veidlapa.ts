/** English version of src/obsah/lv/atteikuma-veidlapa.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-ATTEIKUMS",
    "verze": "1.0"
  },
  "nazev": "Withdrawal Notice",
  "nazevA": "the withdrawal notice",
  "katalog": {
    "popis": "Returning an online purchase within 14 days.",
    "slova": [
      "withdrawal form Latvia",
      "14-day right of withdrawal",
      "return online purchase Latvia",
      "atteikuma veidlapa"
    ]
  },
  "landing": {
    "description": "Withdrawal notice for Latvia (paziņojums par atteikuma tiesību izmantošanu): return an online purchase within 14 days without giving a reason. Free PDF and Word.",
    "perex": "For withdrawing from a purchase in an e-shop or by phone within 14 days of receiving the goods – without giving a reason.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Trader, goods, order, dates, account for refund."
      }
    ],
    "online": [
      "PDF and Word",
      "No registration"
    ],
    "hodiSe": [
      "you bought online or by phone and want to return the goods"
    ],
    "nehodiSe": [
      "you bought in a shop – the law gives no 14-day right there"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "Send the notice before the deadline."
      },
      {
        "nazev": "Goods",
        "popis": "Send the goods back within 14 days."
      }
    ],
    "faq": [
      {
        "q": "From when do the 14 days run?",
        "a": "For goods – from the day you received them; for services – from the day the contract was concluded."
      },
      {
        "q": "When does the trader refund the money?",
        "a": "Within 14 days of learning of the withdrawal; they may wait until the goods are returned."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on EU consumer rights (Your Europe) and the Latvian Consumer Rights Protection Law.",
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
    "title": "Withdrawal Notice Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the withdrawal notice online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the withdrawal notice under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "notice",
      "g": "notice",
      "a": "notice",
      "l": "notice"
    },
    "kroky": {
      "dati": {
        "nazev": "Withdrawal"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "Trader",
        "placeholder": "e.g. name of the e-shop"
      },
      "k_adresa": {
        "popis": "Trader’s address or e-mail"
      },
      "prece": {
        "popis": "Goods or service",
        "placeholder": "e.g. winter jacket, size M"
      },
      "pasutijums": {
        "popis": "Order number"
      },
      "pasutits": {
        "popis": "Order date"
      },
      "sanemts": {
        "popis": "Date of receipt"
      },
      "p_jmeno": {
        "popis": "Your first name and surname"
      },
      "p_adresa": {
        "popis": "Your address"
      },
      "iban": {
        "popis": "IBAN for the refund (optional)",
        "placeholder": "LV80 …"
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
      "Send the notice by e-mail or registered letter before the 14 days expire and keep proof of sending.",
      "Send the goods back within 14 days of withdrawing."
    ],
    "kontrola": [
      "A consumer may withdraw from a contract concluded at a distance (online, by phone) or off-premises within 14 days without giving a reason ([Your Europe](https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_lv.htm)).",
      "For goods, the period starts on the day you received them.",
      "It is enough to send the notice before the period expires.",
      "The trader refunds all payments, including standard delivery costs, within 14 days of learning of the withdrawal.",
      "The direct cost of returning the goods is usually borne by the consumer if the trader informed them of this."
    ]
  },
  "dokument": {
    "nazev": "Withdrawal Notice",
    "podnadpis": "withdrawal from a distance contract (e-shop, phone) within 14 days",
    "podpisy": {
      "vlevo": "Consumer",
      "vpravo": "Received (trader, optional)"
    },
    "clanky": [
      {
        "nadpis": "Notice of withdrawal",
        "odstavce": [
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby give notice that I exercise my right of withdrawal from the contract for the purchase of the following goods or the provision of the following service: {{prece}}.",
          "Order number: {{pasutijums}}. Ordered on {{pasutits}}, received on {{sanemts}}.",
          "**Consumer:** {{p_jmeno}}, {{p_adresa}}",
          "Please refund the amount paid to the account IBAN {{iban}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

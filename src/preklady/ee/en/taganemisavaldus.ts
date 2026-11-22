/** English version of src/obsah/ee/taganemisavaldus.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-TAGANEMINE",
    "verze": "1.0"
  },
  "nazev": "Withdrawal Form",
  "nazevA": "the withdrawal form",
  "katalog": {
    "popis": "Returning an online purchase within 14 days.",
    "slova": [
      "withdrawal form Estonia",
      "14-day right of withdrawal",
      "return online purchase",
      "taganemisavaldus"
    ]
  },
  "landing": {
    "description": "Withdrawal form for Estonia (taganemisavaldus) for returning an online purchase: 14-day right of withdrawal without giving reasons, refund of the money. Free PDF.",
    "perex": "When you bought online or away from business premises and want to withdraw from the contract within 14 days without giving reasons.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "To the trader",
        "popis": "E-shop and order."
      },
      {
        "nazev": "Withdrawal",
        "popis": "Notice of withdrawal from the contract."
      },
      {
        "nazev": "Refund",
        "popis": "Account for the refund."
      }
    ],
    "online": [
      "PDF and Word",
      "Date check"
    ],
    "hodiSe": [
      "you bought online and want to return the goods",
      "the 14 days have not yet passed"
    ],
    "nehodiSe": [
      "the goods are defective – use the complaint"
    ],
    "po": [
      {
        "nazev": "Send it",
        "popis": "Send the notice by e-mail and return the goods."
      },
      {
        "nazev": "Keep",
        "popis": "Keep proof of sending."
      }
    ],
    "faq": [
      {
        "q": "How long do I have to withdraw?",
        "a": "14 days from receipt of the goods. The trader must refund the money within 14 days of receiving the notice of withdrawal."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on EU consumer rights (Your Europe) and the Estonian Law of Obligations Act.",
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
    "title": "Withdrawal Form Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the withdrawal form online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the withdrawal form under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "andmed": {
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
      "kaup": {
        "popis": "Goods or service",
        "placeholder": "e.g. winter jacket, size M"
      },
      "tellimus": {
        "popis": "Order number"
      },
      "tellitud": {
        "popis": "Order date"
      },
      "kattesaadud": {
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
        "placeholder": "EE38 …"
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
      "Send the notice by e-mail or registered letter before the 14 days have passed and keep proof of sending.",
      "Return the goods within 14 days of withdrawing."
    ],
    "kontrola": [
      "A consumer may withdraw from a contract concluded by means of communication (internet, telephone) or away from business premises within 14 days without giving reasons ([Your Europe](https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_et.htm)).",
      "For goods, the period starts on the day you received them.",
      "It is enough to send the notice before the period expires.",
      "The trader refunds all payments, including the standard delivery cost, within 14 days of learning of the withdrawal.",
      "The direct cost of returning the goods is usually borne by the consumer if the trader informed them of this."
    ]
  },
  "dokument": {
    "nazev": "Notice of Withdrawal from a Contract",
    "podnadpis": "withdrawal from a contract concluded by means of communication (e-shop, telephone)",
    "podpisy": {
      "vlevo": "Consumer",
      "vpravo": "Received (trader, optional)"
    },
    "clanky": [
      {
        "nadpis": "Notice of withdrawal",
        "odstavce": [
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby give notice that I withdraw from the contract I concluded for the purchase of the following goods or the provision of the following service: {{kaup}}.",
          "Order number: {{tellimus}}. Ordered on {{tellitud}}, received on {{kattesaadud}}.",
          "**Consumer:** {{p_jmeno}}, {{p_adresa}}",
          "Please refund the amount paid to the account IBAN {{iban}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

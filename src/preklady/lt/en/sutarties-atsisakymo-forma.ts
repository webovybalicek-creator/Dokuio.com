/** English version of src/obsah/lt/sutarties-atsisakymo-forma.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-ATSISAKYMAS",
    "verze": "1.0"
  },
  "nazev": "Withdrawal Form",
  "nazevA": "the withdrawal form",
  "katalog": {
    "popis": "Returning an online purchase within 14 days.",
    "slova": [
      "withdrawal form Lithuania",
      "return online purchase",
      "14 days withdrawal",
      "sutarties atsisakymo forma"
    ]
  },
  "landing": {
    "description": "Notice of withdrawal from a contract for Lithuania (sutarties atsisakymas): return of goods within 14 days of an online or phone purchase, order, refund. Free PDF.",
    "perex": "When you want to withdraw from an online or phone purchase within 14 days without giving a reason. It is enough to send the notice before the deadline expires.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Trader, goods, order, dates and account for the refund."
      }
    ],
    "online": [
      "PDF and Word",
      "Dates added automatically"
    ],
    "hodiSe": [
      "you bought online or by phone and want to return the goods",
      "no more than 14 days have passed since you received the goods"
    ],
    "nehodiSe": [
      "the goods are defective – use the complaint",
      "you bought in a shop – the right to return depends on the shop’s rules"
    ],
    "po": [
      {
        "nazev": "Return",
        "popis": "Return the goods within 14 days of withdrawing."
      }
    ],
    "faq": [
      {
        "q": "From when are the 14 days counted?",
        "a": "For goods – from the day you received them. It is enough to send the notice by the last day."
      },
      {
        "q": "Who pays for the return?",
        "a": "The direct cost of returning the goods is usually paid by the consumer if the trader informed them of this. The standard delivery costs are refunded."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Civil Code provisions on consumer contracts and Your Europe information.",
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
    "title": "Withdrawal Form Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the withdrawal form online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the withdrawal form under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "duomenys": {
        "nazev": "Withdrawal"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "Trader",
        "placeholder": "e.g. name of the online shop"
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
        "placeholder": "LT12 …"
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
      "Return the goods within 14 days of withdrawing."
    ],
    "kontrola": [
      "The consumer may withdraw from a contract concluded at a distance (online, by phone) or off-premises within 14 days without giving a reason ([Your Europe](https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_lt.htm)).",
      "For goods, the period starts on the day you received them.",
      "It is enough to send the notice before the period expires.",
      "The trader refunds all payments, including standard delivery costs, within 14 days of learning of the withdrawal.",
      "The direct cost of returning the goods is usually paid by the consumer if the trader informed them of this."
    ]
  },
  "dokument": {
    "nazev": "Notice of Withdrawal from a Contract",
    "podnadpis": "withdrawal from a distance contract (online shop, phone) within 14 days",
    "podpisy": {
      "vlevo": "Consumer",
      "vpravo": "Received (trader, optional)"
    },
    "clanky": [
      {
        "nadpis": "Notice of withdrawal from a contract",
        "odstavce": [
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby give notice that I withdraw from the contract for the purchase of the following goods or the provision of the following service: {{prece}}.",
          "Order number: {{pasutijums}}. Ordered on {{pasutits}}, received on {{sanemts}}.",
          "**Consumer:** {{p_jmeno}}, {{p_adresa}}",
          "Please refund the amount paid to the account IBAN {{iban}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

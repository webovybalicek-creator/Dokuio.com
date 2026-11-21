/** English version of src/obsah/ro/formular-retragere.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-RETRAGERE",
    "verze": "1.0"
  },
  "nazev": "Withdrawal Form",
  "nazevA": "the withdrawal form",
  "katalog": {
    "popis": "Returning goods bought online within 14 days.",
    "slova": [
      "withdrawal form Romania",
      "14-day return",
      "cancel online order",
      "return goods",
      "formular de retragere"
    ]
  },
  "landing": {
    "description": "Withdrawal form for Romania (formular de retragere): withdraw from an online purchase within 14 days without a reason, refund in 14 days (GEO 34/2014). Free PDF.",
    "perex": "For returning goods ordered online or by phone. Withdrawal within 14 days without giving a reason.",
    "obsahPopis": "A short notice following the model in GEO no. 34/2014.",
    "obsah": [
      {
        "nazev": "Withdrawal",
        "popis": "Product, order, dates and refund."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "you bought online or by phone and want to return the goods"
    ],
    "nehodiSe": [
      "the product is faulty – use the complaint"
    ],
    "po": [
      {
        "nazev": "Return",
        "popis": "Send the goods back within 14 days of withdrawing."
      }
    ],
    "faq": [
      {
        "q": "How soon do I get my money back?",
        "a": "The trader refunds all payments, including standard delivery, within 14 days of being informed of the withdrawal (GEO no. 34/2014)."
      },
      {
        "q": "Who pays for the return?",
        "a": "The direct cost of returning the goods is usually borne by the consumer, if they were informed of this."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on GEO no. 34/2014 on consumer rights.",
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
    "title": "Withdrawal Form Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the withdrawal form online – Romania, free PDF",
    "description": "Step-by-step guide in English for the withdrawal form under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "date": {
        "nazev": "Withdrawal"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "The trader (seller)",
        "placeholder": "e.g. numele magazinului online"
      },
      "k_adresa": {
        "popis": "Trader’s address or e-mail"
      },
      "produs": {
        "popis": "The product or service",
        "placeholder": "e.g. geacă de iarnă, mărimea M"
      },
      "comanda": {
        "popis": "Order number"
      },
      "comandat": {
        "popis": "Ordered on"
      },
      "primit": {
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
        "placeholder": "RO49 …"
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
      "Send the goods back within 14 days of withdrawing."
    ],
    "kontrola": [
      "For contracts concluded at a distance (online, by phone) or off-premises, the consumer may withdraw within 14 days without giving a reason (GEO no. 34/2014).",
      "For goods, the period usually runs from the day you took possession of them.",
      "It is enough to send the notice before the period expires.",
      "The trader refunds all payments, including the cost of standard delivery, within 14 days of being informed of the withdrawal.",
      "The direct costs of return are usually borne by the consumer, if the trader informed them of this."
    ]
  },
  "dokument": {
    "nazev": "Withdrawal Form",
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
          "I hereby give notice that I withdraw from the contract for the sale of the following goods or the provision of the following services: {{produs}}.",
          "Order number: {{comanda}}. Ordered on {{comandat}}, received on {{primit}}.",
          "**Consumer:** {{p_jmeno}}, {{p_adresa}}",
          "Please refund the payments to the account IBAN {{iban}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

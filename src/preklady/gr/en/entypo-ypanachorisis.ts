/** English version of src/obsah/gr/entypo-ypanachorisis.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-YPANACHORISI",
    "verze": "1.0"
  },
  "nazev": "Withdrawal Form",
  "nazevA": "the withdrawal form",
  "katalog": {
    "popis": "Returning an online purchase within 14 days.",
    "slova": [
      "withdrawal form Greece",
      "14-day return Greece",
      "online purchase return",
      "consumer rights Greece",
      "entypo ypanachorisis"
    ]
  },
  "landing": {
    "description": "Withdrawal form for Greece (έντυπο υπαναχώρησης) for online purchases: 14 days without giving a reason, refund within 14 days (Law 2251/1994). Free PDF.",
    "perex": "For returning a product you bought online or off-premises, within 14 days and without giving a reason.",
    "obsahPopis": "A short form.",
    "obsah": [
      {
        "nazev": "Withdrawal",
        "popis": "Seller, order, dates and account for the refund."
      }
    ],
    "online": [
      "PDF and Word",
      "Reminder of the deadline"
    ],
    "hodiSe": [
      "you bought online and want to return the product"
    ],
    "nehodiSe": [
      "the product is defective – use the defect notice"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "Send the form by email or registered letter within the deadline."
      },
      {
        "nazev": "Return",
        "popis": "Send the product back within 14 days."
      }
    ],
    "faq": [
      {
        "q": "How much time do I have?",
        "a": "14 days from receiving the product, without giving a reason (Law 2251/1994)."
      },
      {
        "q": "When do I get my money back?",
        "a": "The seller refunds the money, including the original delivery costs, within 14 days of the withdrawal; they may wait until they receive the product."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on Greek consumer protection law 2251/1994.",
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
    "title": "Withdrawal Form Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the withdrawal form online – Greece, free PDF",
    "description": "Step-by-step guide in English for the withdrawal form under Greek law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stoixeia": {
        "nazev": "The withdrawal"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "The seller",
        "placeholder": "e.g. η επωνυμία του ηλεκτρονικού καταστήματος"
      },
      "k_adresa": {
        "popis": "Seller’s address or email"
      },
      "zbozi": {
        "popis": "Product or service",
        "placeholder": "e.g. χειμερινό μπουφάν, μέγεθος M"
      },
      "objednavka": {
        "popis": "Order number"
      },
      "objednano": {
        "popis": "Order date"
      },
      "prevzato": {
        "popis": "Date of receipt"
      },
      "p_jmeno": {
        "popis": "Your full name"
      },
      "p_adresa": {
        "popis": "Your address"
      },
      "iban": {
        "popis": "IBAN for the refund (optional)",
        "placeholder": "GR16 …"
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
      "Send the form by email or registered letter before the 14 days expire and keep proof of sending.",
      "Return the product within 14 days of the withdrawal."
    ],
    "kontrola": [
      "For a distance contract (online, by phone) or an off-premises contract, the consumer may withdraw within 14 days without giving a reason (Law 2251/1994).",
      "For goods the period starts on the day you received the product.",
      "It is enough to send the notice before the period expires.",
      "The seller refunds all payments, including standard delivery costs, within 14 days of being informed.",
      "The direct costs of returning the goods are usually borne by the consumer if the seller informed them of this."
    ]
  },
  "dokument": {
    "nazev": "Withdrawal Form",
    "podnadpis": "notice of withdrawal from a distance contract (Law 2251/1994)",
    "podpisy": {
      "vlevo": "The Consumer",
      "vpravo": "Received (seller, optional)"
    },
    "clanky": [
      {
        "nadpis": "Withdrawal",
        "odstavce": [
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby give notice that I withdraw from the contract I concluded for the purchase of the following goods or the provision of the following service: {{zbozi}}.",
          "Order number: {{objednavka}}. Ordered on {{objednano}}, received on {{prevzato}}.",
          "**Consumer:** {{p_jmeno}}, {{p_adresa}}",
          "Please refund the payments to the account IBAN {{iban}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

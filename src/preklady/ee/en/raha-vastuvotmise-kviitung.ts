/** English version of src/obsah/ee/raha-vastuvotmise-kviitung.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-KVIITUNG",
    "verze": "1.0"
  },
  "nazev": "Receipt for Money",
  "nazevA": "the receipt for money",
  "katalog": {
    "popis": "Proof of a cash payment.",
    "slova": [
      "money receipt Estonia",
      "cash receipt",
      "payment receipt",
      "deposit receipt",
      "raha vastuvõtmise kviitung"
    ]
  },
  "landing": {
    "description": "Receipt for money for Estonia (raha vastuvõtmise kviitung): who received, from whom, how much (also in words) and why. Proof of a cash payment. Free PDF.",
    "perex": "When you give or receive cash – a price, a loan, a down payment or a deposit. The receipt proves the payment.",
    "obsahPopis": "A short receipt.",
    "obsah": [
      {
        "nazev": "Receipt",
        "popis": "Recipient, payer, amount in words and reason."
      }
    ],
    "online": [
      "Amount in words in Estonian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are paying or receiving cash",
      "you are giving a down payment or deposit"
    ],
    "nehodiSe": [
      "you pay by bank transfer – the statement is already proof"
    ],
    "po": [
      {
        "nazev": "Keep it",
        "popis": "The receipt is kept by the person who paid."
      }
    ],
    "faq": [
      {
        "q": "Who signs the receipt?",
        "a": "The person who received the money. The payer is entitled to ask for it and keeps it as proof."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Estonian Law of Obligations Act.",
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
    "title": "Receipt for Money Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the receipt for money online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the receipt for money under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "receipt",
      "g": "receipt",
      "a": "receipt",
      "l": "receipt"
    },
    "kroky": {
      "makse": {
        "nazev": "The payment"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Recipient – first name and surname",
        "placeholder": "e.g. Mari Tamm"
      },
      "p_adresa": {
        "popis": "Recipient’s address"
      },
      "k_jmeno": {
        "popis": "Payer – first name and surname",
        "placeholder": "e.g. Jaan Kask"
      },
      "k_adresa": {
        "popis": "Payer’s address"
      },
      "castka": {
        "popis": "Amount (EUR)"
      },
      "pohjus": {
        "popis": "Reason for payment",
        "placeholder": "e.g. price of the vehicle under the agreement of 22.11.2026"
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
      "The receipt is kept by the person who paid – it proves the payment.",
      "If the payment concerns a vehicle or item, refer to the agreement in the receipt."
    ],
    "kontrola": [
      "The person performing an obligation may ask the recipient for a written confirmation (receipt).",
      "State what you are paying for (price, loan, deposit, down payment) so that it is clear what was settled.",
      "Count the money on signing; pay larger sums by bank transfer – the bank record is the best proof."
    ]
  },
  "dokument": {
    "nazev": "Receipt for Money",
    "podnadpis": "confirmation of a cash payment between private persons",
    "podpisy": {
      "vlevo": "Recipient of the money",
      "vpravo": "Payer (optional)"
    },
    "clanky": [
      {
        "nadpis": "Receipt",
        "odstavce": [
          "I, **{{p_jmeno}}**, address {{p_adresa}}, confirm that I have received from {{k_jmeno}}, address {{k_adresa}}, in cash **{{castka}}** (in words: {{castka_sonadega}}).",
          "Reason for payment: {{pohjus}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/si/potrdilo-o-prejemu-denarja.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-POTRDILO",
    "verze": "1.0"
  },
  "nazev": "Receipt for Money",
  "nazevA": "the receipt for money",
  "katalog": {
    "popis": "A receipt for cash received.",
    "slova": [
      "receipt for money",
      "cash receipt",
      "proof of payment",
      "deposit receipt",
      "potrdilo o prejemu denarja",
      "pobotnica"
    ]
  },
  "landing": {
    "description": "Cash receipt for Slovenia (potrdilo o prejemu denarja, pobotnica): amount, purpose, payer and recipient. Simple proof of a cash payment. Free bilingual PDF or Word.",
    "perex": "Simple proof that cash has changed hands. We add the amount in words in Slovenian.",
    "obsahPopis": "A short receipt stating the purpose of payment.",
    "obsah": [
      {
        "nazev": "Receipt",
        "popis": "Who received how much from whom and why."
      }
    ],
    "online": [
      "Amount in words in Slovenian added automatically",
      "Signature on screen",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are paying cash for a car or an item",
      "you are handing over a deposit, earnest money or an instalment"
    ],
    "nehodiSe": [
      "you are paying by bank transfer – the bank confirmation is the proof"
    ],
    "po": [
      {
        "nazev": "Copy",
        "popis": "Each party keeps one."
      }
    ],
    "faq": [
      {
        "q": "Do I have to give a receipt?",
        "a": "The person who pays may demand from the creditor a receipt (pobotnica) – written confirmation of the payment received."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik – receipt).",
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
    "title": "Receipt for Money Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the receipt for money online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the receipt for money under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podatki": {
        "nazev": "Payment"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Recipient – full name",
        "placeholder": "e.g. Janez Novak"
      },
      "p_adresa": {
        "popis": "Recipient’s address"
      },
      "k_jmeno": {
        "popis": "Payer – full name",
        "placeholder": "e.g. Maja Horvat"
      },
      "k_adresa": {
        "popis": "Payer’s address"
      },
      "castka": {
        "popis": "Amount (€)"
      },
      "namen": {
        "popis": "Purpose of payment",
        "placeholder": "e.g. kupnina za vozilo po pogodbi z dne 21. 11. 2026 (purchase price for a vehicle under the agreement of 21 November 2026)"
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
      "The payer keeps the receipt – it proves the payment.",
      "If the payment was for a vehicle or an item, the receipt should refer to the agreement."
    ],
    "kontrola": [
      "The person who pays may demand a receipt (pobotnica) – Obligations Code.",
      "State the purpose of the payment (purchase price, loan, deposit, earnest money) so that it is clear what the money was given for.",
      "Count cash on signing; larger amounts are better paid by bank transfer – a bank confirmation is the best evidence."
    ]
  },
  "dokument": {
    "nazev": "Receipt for Money",
    "podnadpis": "receipt for cash received",
    "podpisy": {
      "vlevo": "recipient",
      "vpravo": "payer (optional)"
    },
    "clanky": [
      {
        "nadpis": "Receipt",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, {{p_adresa}}, confirm that I have received from {{k_jmeno}}, {{k_adresa}}, the amount of **{{castka}}** in cash.",
          "Purpose of payment: {{namen}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

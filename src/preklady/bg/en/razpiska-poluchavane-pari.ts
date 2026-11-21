/** English version of src/obsah/bg/razpiska-poluchavane-pari.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-RAZPISKA",
    "verze": "1.0"
  },
  "nazev": "Cash Receipt",
  "nazevA": "the cash receipt",
  "katalog": {
    "popis": "Proof of cash received.",
    "slova": [
      "cash receipt Bulgaria",
      "money receipt",
      "proof of payment",
      "deposit receipt",
      "razpiska"
    ]
  },
  "landing": {
    "description": "Cash receipt for Bulgaria (разписка): who received the money, from whom, how much (also in words) and for what. Proof of payment between private persons. Free PDF.",
    "perex": "When you give or receive cash – a price, a loan, a deposit or a down payment. The receipt proves the payment.",
    "obsahPopis": "A short receipt.",
    "obsah": [
      {
        "nazev": "Receipt",
        "popis": "Recipient, payer, amount in words and purpose."
      }
    ],
    "online": [
      "Amount in words in Bulgarian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are paying or receiving cash",
      "you are paying a deposit or down payment"
    ],
    "nehodiSe": [
      "you are paying EUR 5,000 or more – then only by bank transfer"
    ],
    "po": [
      {
        "nazev": "Keep it",
        "popis": "The receipt stays with the person who paid."
      }
    ],
    "faq": [
      {
        "q": "Who signs the receipt?",
        "a": "The person who received the money signs it. The payer keeps it as evidence."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Obligations and Contracts Act.",
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
    "title": "Cash Receipt Bulgaria {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the cash receipt online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the cash receipt under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "danni": {
        "nazev": "The payment"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Recipient – full name",
        "placeholder": "e.g. Иван Петров Иванов"
      },
      "p_adresa": {
        "popis": "Recipient’s address"
      },
      "k_jmeno": {
        "popis": "Payer – full name",
        "placeholder": "e.g. Мария Георгиева Димитрова"
      },
      "k_adresa": {
        "popis": "Payer’s address"
      },
      "castka": {
        "popis": "Amount (EUR)"
      },
      "osnovanie": {
        "popis": "What the payment is for",
        "placeholder": "e.g. цена на автомобила по договор от 21.11.2026 г."
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
      "If the payment is for a car or an item, the receipt should refer to the agreement."
    ],
    "kontrola": [
      "The person paying has the right to a receipt (Obligations and Contracts Act).",
      "State what the payment is for (price, loan, deposit, down payment) so that it is clear why the money was given.",
      "Count cash on signing; pay larger amounts by bank transfer – a bank statement is the best evidence. Payments of EUR 5,000 or more may be made only by bank transfer (Cash Payments Restriction Act)."
    ]
  },
  "dokument": {
    "nazev": "Receipt for Money Received",
    "podnadpis": "proof of cash payment between private persons",
    "podpisy": {
      "vlevo": "Received",
      "vpravo": "Paid (optional)"
    },
    "clanky": [
      {
        "nadpis": "Receipt",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, address {{p_adresa}}, confirm that I have received from {{k_jmeno}}, address {{k_adresa}}, the sum of **{{castka}}** in cash.",
          "Purpose of the payment: {{osnovanie}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

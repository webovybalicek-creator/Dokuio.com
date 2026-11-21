/** English version of src/obsah/ro/chitanta-primire-bani.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-CHITANTA",
    "verze": "1.0"
  },
  "nazev": "Receipt for Money",
  "nazevA": "the receipt for money",
  "katalog": {
    "popis": "A receipt for cash received.",
    "slova": [
      "receipt for money Romania",
      "cash receipt",
      "proof of payment",
      "deposit receipt",
      "chitanta primire bani"
    ]
  },
  "landing": {
    "description": "Cash receipt for Romania (chitanță de primire a banilor): amount in figures and words, purpose, payer and recipient. Simple proof of a cash payment. Free bilingual PDF.",
    "perex": "Simple proof that cash has changed hands. We add the amount in words in Romanian.",
    "obsahPopis": "A short receipt stating the purpose of payment.",
    "obsah": [
      {
        "nazev": "Receipt",
        "popis": "Who received how much from whom and why."
      }
    ],
    "online": [
      "Amount in words in Romanian added automatically",
      "Signature on screen",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are paying cash for a car or an item",
      "you are handing over a deposit, earnest money or an instalment"
    ],
    "nehodiSe": [
      "you are paying into an account – the bank statement is the proof"
    ],
    "po": [
      {
        "nazev": "Copies",
        "popis": "Each party keeps one."
      }
    ],
    "faq": [
      {
        "q": "Do I have to give a receipt?",
        "a": "The person who pays has the right to ask the person receiving the money for a receipt (Civil Code)."
      },
      {
        "q": "Is there a limit for cash?",
        "a": "Between private persons, cash payments are allowed up to 50,000 lei per transaction (Law no. 70/2015)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Romanian Civil Code.",
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
    "title": "Receipt for Money Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the receipt for money online – Romania, free PDF",
    "description": "Step-by-step guide in English for the receipt for money under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "date": {
        "nazev": "Payment"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Recipient – full name",
        "placeholder": "e.g. Andrei Popescu"
      },
      "p_adresa": {
        "popis": "Recipient’s address"
      },
      "k_jmeno": {
        "popis": "Payer – full name",
        "placeholder": "e.g. Maria Ionescu"
      },
      "k_adresa": {
        "popis": "Payer’s address"
      },
      "castka": {
        "popis": "Amount (lei)"
      },
      "scop": {
        "popis": "Purpose of payment",
        "placeholder": "e.g. prețul vehiculului conform contractului din 21.11.2026"
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
      "The person who pays has the right to a receipt (Civil Code).",
      "State the purpose of the payment (price, loan, deposit, earnest money) so that it is clear what the money was given for.",
      "Count cash on signing; pay larger amounts into an account – a bank statement is the best evidence. Between private persons, cash is allowed up to 50,000 lei per transaction (Law no. 70/2015)."
    ]
  },
  "dokument": {
    "nazev": "Receipt for Money",
    "podnadpis": "proof of a cash payment between private persons",
    "podpisy": {
      "vlevo": "Received",
      "vpravo": "Paid (optional)"
    },
    "clanky": [
      {
        "nadpis": "Receipt",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, domiciled at {{p_adresa}}, confirm that I have received from {{k_jmeno}}, domiciled at {{k_adresa}}, the amount of **{{castka}}** in cash.",
          "Purpose of payment: {{scop}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

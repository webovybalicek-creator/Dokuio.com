/** English version of src/obsah/gr/apodeixi-eispraxis.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-APODEIXI",
    "verze": "1.0"
  },
  "nazev": "Receipt for Money",
  "nazevA": "the receipt for money",
  "katalog": {
    "popis": "Proof of money paid in cash.",
    "slova": [
      "money receipt Greece",
      "cash receipt",
      "payment receipt",
      "deposit receipt",
      "apodeixi eispraxis"
    ]
  },
  "landing": {
    "description": "Receipt for money for Greece (απόδειξη είσπραξης χρημάτων): who received, from whom, how much (also in words) and why. Proof of a cash payment. Free PDF.",
    "perex": "When you give or receive money in cash – a price, a loan, a down payment or a deposit. The receipt proves the payment.",
    "obsahPopis": "A short receipt.",
    "obsah": [
      {
        "nazev": "Receipt",
        "popis": "Recipient, payer, amount in words and reason."
      }
    ],
    "online": [
      "Amount in words in Greek added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are paying or receiving cash",
      "you are giving a down payment or deposit"
    ],
    "nehodiSe": [
      "you are paying a business €500 or more – then only by card or transfer"
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
        "a": "The person who received the money. The payer is entitled to ask for it (Art. 419 Civil Code) and keeps it as proof."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Greek Civil Code.",
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
    "title": "Receipt for Money Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the receipt for money online – Greece, free PDF",
    "description": "Step-by-step guide in English for the receipt for money under Greek law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stoixeia": {
        "nazev": "The payment"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Recipient – full name",
        "placeholder": "e.g. Γεώργιος Παπαδόπουλος"
      },
      "p_adresa": {
        "popis": "Recipient’s address"
      },
      "k_jmeno": {
        "popis": "Payer – full name",
        "placeholder": "e.g. Μαρία Κωνσταντίνου"
      },
      "k_adresa": {
        "popis": "Payer’s address"
      },
      "castka": {
        "popis": "Amount (EUR)"
      },
      "aitia": {
        "popis": "Reason for payment",
        "placeholder": "e.g. τίμημα αυτοκινήτου σύμφωνα με το συμφωνητικό της 22/11/2026"
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
      "If the payment concerns a vehicle or item, the receipt should refer to the agreement."
    ],
    "kontrola": [
      "Anyone who pays is entitled to a receipt (Art. 419 Civil Code).",
      "State what you are paying for (price, loan, deposit, down payment) so that it is clear what was settled.",
      "Count the money on signing; larger sums are better transferred through a bank – the bank record is the best proof. Payments to businesses of €500 or more must be made electronically."
    ]
  },
  "dokument": {
    "nazev": "Receipt for Money",
    "podnadpis": "confirmation of a cash payment between private persons",
    "podpisy": {
      "vlevo": "Recipient",
      "vpravo": "Payer (optional)"
    },
    "clanky": [
      {
        "nadpis": "Receipt",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, resident at {{p_adresa}}, confirm that I have received from {{k_jmeno}}, resident at {{k_adresa}}, the sum of **{{castka}}** in cash.",
          "Reason for payment: {{aitia}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/ro/notificare-plata.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-NOTIFICARE",
    "verze": "1.0"
  },
  "nazev": "Payment Notice",
  "nazevA": "the payment notice",
  "katalog": {
    "popis": "Calling on the debtor to pay by a deadline.",
    "slova": [
      "payment notice Romania",
      "letter before action",
      "formal notice",
      "unpaid debt",
      "notificare de plata"
    ]
  },
  "landing": {
    "description": "Payment notice for Romania (notificare de plată): formal notice of default with amount in words, basis, deadline and IBAN before court. Free bilingual PDF.",
    "perex": "For an unpaid debt that is due. You formally put the debtor in default and give a deadline before court.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "The debt, due date, deadline and consequences."
      }
    ],
    "online": [
      "Amount in words in Romanian added automatically",
      "Deadline reminder",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone has not paid you a debt that is due"
    ],
    "nehodiSe": [
      "you want the debtor to acknowledge the debt – use the acknowledgement of debt"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "Registered letter with acknowledgement of receipt."
      },
      {
        "nazev": "Court",
        "popis": "If they do not pay, you can apply for a payment order."
      }
    ],
    "faq": [
      {
        "q": "Does the notice interrupt the limitation period?",
        "a": "Only if it is followed by a court action within the period set by the Civil Code. Acknowledgement of the debt by the debtor interrupts the limitation period."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Romanian Civil Code and GO no. 13/2011 on statutory default interest.",
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
    "title": "Payment Notice Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the payment notice online – Romania, free PDF",
    "description": "Step-by-step guide in English for the payment notice under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "date": {
        "nazev": "Creditor, debtor and debt"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – full name or company name",
        "placeholder": "e.g. Andrei Popescu"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – full name or company name",
        "placeholder": "e.g. Mihai Stan"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Amount owed (lei)"
      },
      "temei": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. împrumut conform contractului din 15.03.2026"
      },
      "scadenta": {
        "popis": "The debt fell due on"
      },
      "termen": {
        "popis": "Pay by"
      },
      "iban": {
        "popis": "Creditor’s IBAN",
        "placeholder": "RO49 AAAA 1B31 0075 9384 0000"
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
      "Send the notice by registered letter with acknowledgement of receipt and keep the proof.",
      "If the debtor does not pay, you can go to court (for example using the payment order procedure)."
    ],
    "kontrola": [
      "The debt must be due – the payment deadline in the contract or invoice has passed.",
      "From the due date the debtor owes statutory default interest (GO no. 13/2011).",
      "The notice alone does not interrupt the limitation period unless it is followed by a court action within the period set by the Civil Code. Acknowledgement of the debt by the debtor does interrupt it.",
      "Set a reasonable deadline (e.g. 8 or 15 days) and enter the IBAN exactly."
    ]
  },
  "dokument": {
    "nazev": "Payment Notice",
    "podnadpis": "formal notice of default and demand before going to court",
    "podpisy": {
      "vlevo": "Creditor",
      "vpravo": "Received (debtor, optional)"
    },
    "clanky": [
      {
        "nadpis": "Notice",
        "odstavce": [
          "**Creditor:** {{p_jmeno}}, {{p_adresa}}",
          "**Debtor:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby call on you to pay me the debt due in the amount of **{{castka}}**, on the basis of: {{temei}}. The debt fell due on {{scadenta}} and has not been paid to date.",
          "Please pay the amount no later than **{{termen}}** to the account IBAN {{iban}}.",
          "I hereby put you in default. Please note that from the due date you also owe statutory default interest. If you do not pay the debt within the deadline, I will go to court without further notice, and the court costs will be borne by you."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

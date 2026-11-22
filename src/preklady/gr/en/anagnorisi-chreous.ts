/** English version of src/obsah/gr/anagnorisi-chreous.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-ANAGNORISI",
    "verze": "1.0"
  },
  "nazev": "Acknowledgement of Debt",
  "nazevA": "the acknowledgement of debt",
  "katalog": {
    "popis": "The debtor acknowledges the debt and the deadline in writing.",
    "slova": [
      "acknowledgement of debt Greece",
      "IOU Greece",
      "limitation period",
      "debtor",
      "anagnorisi chreous"
    ]
  },
  "landing": {
    "description": "Acknowledgement of debt for Greece (αναγνώριση χρέους, Art. 873 Civil Code): amount, basis and payment deadline. It interrupts the limitation period. Free PDF.",
    "perex": "The debtor acknowledges in writing that they owe money and by when they will pay. The limitation period starts again.",
    "obsahPopis": "A short document.",
    "obsah": [
      {
        "nazev": "Acknowledgement",
        "popis": "Amount, basis and payment deadline."
      }
    ],
    "online": [
      "Amount in words in Greek added automatically",
      "Reminder of the deadline"
    ],
    "hodiSe": [
      "someone owes you money and admits it",
      "you want to interrupt the limitation period"
    ],
    "nehodiSe": [
      "the debtor disputes the debt – send a formal payment demand"
    ],
    "po": [
      {
        "nazev": "Copy",
        "popis": "Keep the original with the debtor’s signature."
      }
    ],
    "faq": [
      {
        "q": "What does the acknowledgement change?",
        "a": "A written acknowledgement (Art. 873 Civil Code) proves the debt and interrupts the limitation period, which starts again (Art. 260 ff. Civil Code)."
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
    "title": "Acknowledgement of Debt Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the acknowledgement of debt online – Greece, free PDF",
    "description": "Step-by-step guide in English for the acknowledgement of debt under Greek law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "acknowledgement",
      "g": "acknowledgement",
      "a": "acknowledgement",
      "l": "acknowledgement"
    },
    "kroky": {
      "meri": {
        "nazev": "Debtor and creditor"
      },
      "chreos": {
        "nazev": "The debt"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "Debtor – full name",
        "placeholder": "e.g. Μαρία Κωνσταντίνου"
      },
      "k_afm": {
        "popis": "Tax number (AFM)"
      },
      "k_adt": {
        "popis": "Identity card no."
      },
      "k_adresa": {
        "popis": "Address"
      },
      "p_jmeno": {
        "popis": "Creditor – full name",
        "placeholder": "e.g. Γεώργιος Παπαδόπουλος"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "castka": {
        "popis": "Amount owed (EUR)"
      },
      "aitia": {
        "popis": "Where the debt comes from",
        "placeholder": "e.g. δάνειο της 10/03/2025"
      },
      "plirimi": {
        "popis": "Payment",
        "moznosti": {
          "efapax": "in one sum, by a set date",
          "doseis": "in monthly instalments"
        }
      },
      "lixi": {
        "popis": "Pay by"
      },
      "dosi": {
        "popis": "Monthly instalment (EUR)"
      },
      "proti": {
        "popis": "First instalment"
      },
      "iban": {
        "popis": "IBAN",
        "placeholder": "GR16 0110 1250 0000 0001 2300 695"
      },
      "misto": {
        "popis": "Place"
      },
      "datum": {
        "popis": "Date"
      }
    },
    "vysvetleni": [
      "",
      "",
      "",
      ""
    ],
    "coDal": [
      "The signed original is kept by the creditor.",
      "Put the payment date in your calendar."
    ],
    "kontrola": [
      "The acknowledgement of debt must be in writing (Art. 873 Civil Code) – without the debtor’s signature it is not valid.",
      "The acknowledgement interrupts the limitation period (Art. 260 Civil Code): a new limitation period starts from the next day.",
      "State exactly where the debt comes from (loan, price, rent) and the amount.",
      "For rent, interest and other periodic payments the limitation period is 5 years (Art. 250 Civil Code), otherwise generally 20 years (Art. 249).",
      "Check the other party’s identity card and copy the full name, identity card number and tax number (AFM) exactly as they appear."
    ]
  },
  "dokument": {
    "nazev": "Acknowledgement of Debt",
    "podnadpis": "written acknowledgement of debt (Art. 873 Civil Code)",
    "podpisy": {
      "vlevo": "The Debtor",
      "vpravo": "The Creditor (optional)"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Debtor:** {{k_jmeno}}, tax number {{k_afm}}, identity card no. {{k_adt}}, resident at {{k_adresa}}",
          "**Creditor:** {{p_jmeno}}, resident at {{p_adresa}}"
        ]
      },
      {
        "nadpis": "Acknowledgement",
        "odstavce": [
          "The Debtor acknowledges owing the Creditor the sum of **{{castka}}**, arising from: {{aitia}}.",
          "The Debtor declares that the debt exists in its amount and basis and that they have no objections or defences against it."
        ]
      },
      {
        "nadpis": "Repayment",
        "odstavce": [
          {
            "uvodVzor": "Method of repayment (tick one option):",
            "moznosti": {
              "efapax": "The Debtor will pay the whole amount no later than {{lixi}}.",
              "doseis": "The Debtor will repay the debt in monthly instalments of {{dosi}}, the first on {{proti}} and each subsequent one on the same day of each month."
            }
          },
          "Payments are made to the Creditor’s account IBAN {{iban}}. If the Debtor is late with two instalments, the whole balance becomes immediately due."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "The acknowledgement is made in accordance with Art. 873 of the Civil Code.",
          "Drawn up in two copies, of which the Creditor received the original."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

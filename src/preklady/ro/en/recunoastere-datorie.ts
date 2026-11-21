/** English version of src/obsah/ro/recunoastere-datorie.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-RECUNOASTERE",
    "verze": "1.0"
  },
  "nazev": "Acknowledgement of Debt",
  "nazevA": "the acknowledgement of debt",
  "katalog": {
    "popis": "The debtor acknowledges the debt and the deadline in writing.",
    "slova": [
      "acknowledgement of debt Romania",
      "IOU",
      "limitation period",
      "debt between private persons",
      "recunoastere de datorie"
    ]
  },
  "landing": {
    "description": "Acknowledgement of debt for Romania (recunoaștere de datorie): amount in words, basis, deadline and IBAN. Interrupts the limitation period. Free bilingual PDF.",
    "perex": "The debtor confirms in writing how much they owe, why and by when they will pay. The acknowledgement interrupts the limitation period.",
    "obsahPopis": "A short declaration by the debtor.",
    "obsah": [
      {
        "nazev": "Acknowledgement",
        "popis": "Debtor, creditor, amount, basis and deadline."
      }
    ],
    "online": [
      "Amount in words in Romanian added automatically",
      "Deadline reminder",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone owes you money and you want written proof",
      "you want to interrupt the limitation period"
    ],
    "nehodiSe": [
      "the debt is being paid in instalments – use the instalment agreement"
    ],
    "po": [
      {
        "nazev": "Original",
        "popis": "The creditor keeps the original."
      }
    ],
    "faq": [
      {
        "q": "What effect does the acknowledgement have?",
        "a": "It interrupts the limitation period – the 3-year period starts running again (Art. 2537 and 2517 Civil Code)."
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
    "title": "Acknowledgement of Debt Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the acknowledgement of debt online – Romania, free PDF",
    "description": "Step-by-step guide in English for the acknowledgement of debt under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "date": {
        "nazev": "Debtor, creditor and debt"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Debtor – full name",
        "placeholder": "e.g. Mihai Stan"
      },
      "p_cnp": {
        "popis": "Debtor’s CNP"
      },
      "p_adresa": {
        "popis": "Debtor’s address"
      },
      "k_jmeno": {
        "popis": "Creditor – full name or company name",
        "placeholder": "e.g. Andrei Popescu"
      },
      "k_adresa": {
        "popis": "Creditor’s address"
      },
      "castka": {
        "popis": "Amount owed (lei)"
      },
      "temei": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. împrumut conform contractului din 15.03.2026"
      },
      "termen": {
        "popis": "I will pay by"
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
      "The creditor keeps the original.",
      "For large amounts, an acknowledgement notarised by a notary can become an enforceable title."
    ],
    "kontrola": [
      "Acknowledgement of the debt by the debtor interrupts the limitation period – it starts running again (Art. 2537 Civil Code). The general limitation period is 3 years (Art. 2517).",
      "State the basis of the debt (loan, unpaid price, damage), the amount and the payment deadline.",
      "A mere demand by the creditor does not interrupt the limitation period unless it is followed by a court action within the period set by law."
    ]
  },
  "dokument": {
    "nazev": "Acknowledgement of Debt",
    "podnadpis": "written declaration by the debtor on the existence and amount of the debt",
    "podpisy": {
      "vlevo": "Debtor",
      "vpravo": "Received (creditor, optional)"
    },
    "clanky": [
      {
        "nadpis": "Acknowledgement",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, CNP {{p_cnp}}, domiciled at {{p_adresa}} (debtor),",
          "acknowledge that on the date of signing I owe the creditor {{k_jmeno}}, {{k_adresa}}, the amount of **{{castka}}**, on the basis of: {{temei}}.",
          "I undertake to pay the debt no later than {{termen}} to the creditor’s account IBAN {{iban}}. In the event of delay I also owe statutory default interest."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

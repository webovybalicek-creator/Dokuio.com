/** English version of src/obsah/bg/priznavane-na-dalg.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-PRIZNAVANE",
    "verze": "1.0"
  },
  "nazev": "Acknowledgement of Debt",
  "nazevA": "the acknowledgement of debt",
  "katalog": {
    "popis": "The debtor acknowledges the debt and the deadline in writing.",
    "slova": [
      "acknowledgement of debt Bulgaria",
      "IOU",
      "limitation period",
      "debtor",
      "priznanie na dalg"
    ]
  },
  "landing": {
    "description": "Acknowledgement of debt for Bulgaria (признание на дълг): the debtor confirms the amount, basis and deadline in writing; it interrupts the limitation period. Free PDF.",
    "perex": "When someone owes you money and you want them to acknowledge it in writing. Acknowledgement interrupts the limitation period, which then starts again.",
    "obsahPopis": "A short statement by the debtor.",
    "obsah": [
      {
        "nazev": "Acknowledgement",
        "popis": "Debtor, creditor, amount in words, basis and deadline."
      }
    ],
    "online": [
      "Amount in words in Bulgarian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone owes you money and acknowledges the debt",
      "you want to interrupt the limitation period"
    ],
    "nehodiSe": [
      "the debtor denies the debt – use a payment demand or go to court"
    ],
    "po": [
      {
        "nazev": "Original",
        "popis": "The original is kept by the creditor."
      }
    ],
    "faq": [
      {
        "q": "Does the acknowledgement interrupt the limitation period?",
        "a": "Yes. Acknowledgement of the claim by the debtor interrupts the limitation period, which starts again (Art. 116(a) Obligations and Contracts Act)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Obligations and Contracts Act.",
    "title": "Acknowledgement of Debt Bulgaria {rok} – free PDF template",
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
    "souvisejiciPopis": "More documents, also free."
  },
  "vytvorit": {
    "title": "Fill in the acknowledgement of debt online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the acknowledgement of debt under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "danni": {
        "nazev": "Debtor, creditor and the debt"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Debtor – full name",
        "placeholder": "e.g. Георги Стоянов Николов"
      },
      "p_egn": {
        "popis": "Debtor’s EGN"
      },
      "p_adresa": {
        "popis": "Debtor’s address"
      },
      "k_jmeno": {
        "popis": "Creditor – name",
        "placeholder": "e.g. Иван Петров Иванов"
      },
      "k_adresa": {
        "popis": "Creditor’s address"
      },
      "castka": {
        "popis": "Amount owed (EUR)"
      },
      "osnovanie": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. заем по договор от 15.03.2026 г."
      },
      "srok": {
        "popis": "I will pay by"
      },
      "iban": {
        "popis": "Creditor’s IBAN",
        "placeholder": "BG80 BNBG 9661 1020 3456 78"
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
      "The original is kept by the creditor.",
      "If the debtor does not pay, the creditor can apply to the district court for an order for payment."
    ],
    "kontrola": [
      "Acknowledgement of the claim by the debtor interrupts the limitation period, which starts to run again (Art. 116(a) Obligations and Contracts Act). The general limitation period is 5 years (Art. 110).",
      "State the basis of the debt (loan, unpaid price, compensation), the amount and the payment deadline.",
      "A simple reminder from the creditor does not interrupt the limitation period – it is interrupted by the debtor’s acknowledgement, a court claim and enforcement steps."
    ]
  },
  "dokument": {
    "nazev": "Acknowledgement of Debt",
    "podnadpis": "written statement by the debtor on the existence and amount of the debt",
    "podpisy": {
      "vlevo": "Debtor",
      "vpravo": "Received (creditor, optional)"
    },
    "clanky": [
      {
        "nadpis": "Acknowledgement",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, EGN {{p_egn}}, address {{p_adresa}} (debtor),",
          "acknowledge that on the date of signing I owe the creditor {{k_jmeno}}, {{k_adresa}}, the sum of **{{castka}}** on the basis of: {{osnovanie}}.",
          "I undertake to pay the debt no later than {{srok}} to the creditor’s account IBAN {{iban}}. In case of delay I also owe statutory interest."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

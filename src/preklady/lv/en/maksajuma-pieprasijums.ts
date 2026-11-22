/** English version of src/obsah/lv/maksajuma-pieprasijums.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-PIEPRASIJUMS",
    "verze": "1.0"
  },
  "nazev": "Payment Demand",
  "nazevA": "the payment demand",
  "katalog": {
    "popis": "A demand to a debtor with a deadline.",
    "slova": [
      "payment demand Latvia",
      "debt reminder",
      "letter before action",
      "debt collection",
      "maksājuma pieprasījums"
    ]
  },
  "landing": {
    "description": "Payment demand for Latvia (maksājuma pieprasījums): amount in words, basis of the debt, new deadline. A reminder interrupts the limitation period. Free PDF.",
    "perex": "Before going to court. It reminds the debtor of the debt in writing and gives a new deadline.",
    "obsahPopis": "A short demand.",
    "obsah": [
      {
        "nazev": "Demand",
        "popis": "Debt, basis, deadline, account."
      }
    ],
    "online": [
      "Amount in words in Latvian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone is not paying you",
      "you want to send a written reminder"
    ],
    "nehodiSe": [
      "you want to agree instalments – use the repayment agreement"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "By registered letter or e-mail with eParaksts."
      },
      {
        "nazev": "Court",
        "popis": "If they do not pay, go to court."
      }
    ],
    "faq": [
      {
        "q": "Does a reminder interrupt the limitation period?",
        "a": "Yes. Under the Civil Law, a reminder to the debtor interrupts the limitation period – keep proof that it was delivered."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Latvian Civil Law on default and limitation.",
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
    "title": "Payment Demand Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the payment demand online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the payment demand under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "demand",
      "g": "demand",
      "a": "demand",
      "l": "demand"
    },
    "kroky": {
      "dati": {
        "nazev": "The claim"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – first name and surname"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – name or company name"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Amount of the debt (EUR)"
      },
      "nokavets": {
        "popis": "The payment deadline expired on"
      },
      "pamats": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. payment for repair work under the contract for work of 01.09.2026"
      },
      "jauns_termins": {
        "popis": "Pay by"
      },
      "iban": {
        "popis": "Creditor’s IBAN",
        "placeholder": "LV80 BANK 0000 4351 9500 1"
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
      "Send the demand by registered letter or by e-mail with eParaksts and keep proof of sending.",
      "If the debtor does not pay, you can go to court; for money claims there is also a simpler warning procedure for the enforcement of obligations."
    ],
    "kontrola": [
      "State exactly what the claim arises from (contract, invoice, loan) and how much it is.",
      "Give a reasonable payment deadline, usually 7–14 days.",
      "For late payment you may claim statutory default interest – 6% per year unless agreed otherwise ([Civil Law, Article 1765](https://likumi.lv/ta/id/225418-civillikums)).",
      "A reminder to the debtor interrupts the limitation period – keep proof that it reached the debtor ([Civil Law, Article 1905](https://likumi.lv/ta/id/225418-civillikums))."
    ]
  },
  "dokument": {
    "nazev": "Payment Demand",
    "podnadpis": "reminder to the debtor to pay the debt by a deadline",
    "podpisy": {
      "vlevo": "Creditor",
      "vpravo": ""
    },
    "clanky": [
      {
        "nadpis": "Payment demand",
        "odstavce": [
          "**From:** {{p_jmeno}}, {{p_adresa}}",
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "You owe me **{{castka}}** (in words: {{castka_vardiem}}), arising from: {{pamats}}. The payment deadline expired on {{nokavets}} and the debt has not been paid.",
          "Please pay the amount no later than {{jauns_termins}} to my account IBAN {{iban}}.",
          "Otherwise I will go to court to recover the debt and will also claim default interest and reimbursement of legal costs."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

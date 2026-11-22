/** English version of src/obsah/lt/raginimas-sumoketi.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-RAGINIMAS",
    "verze": "1.0"
  },
  "nazev": "Payment Demand",
  "nazevA": "the payment demand",
  "katalog": {
    "popis": "Reminder to pay a debt by a deadline.",
    "slova": [
      "payment demand Lithuania",
      "debt reminder letter",
      "letter before action",
      "raginimas sumokėti"
    ]
  },
  "landing": {
    "description": "Demand to pay a debt for Lithuania (raginimas sumokėti skolą): amount in words, basis, new deadline and account. Before going to court. Free PDF and Word.",
    "perex": "When the debtor has not paid on time. A demand with a new deadline is often enough; if not, you have proof for the court.",
    "obsahPopis": "A short demand.",
    "obsah": [
      {
        "nazev": "Demand",
        "popis": "Amount, basis, missed and new deadline, account."
      }
    ],
    "online": [
      "Amount in words in Lithuanian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone has not paid you on time",
      "you want to send a final reminder before going to court"
    ],
    "nehodiSe": [
      "the debtor agrees to pay in instalments – use the repayment agreement"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "Send it by registered letter or e-mail and keep proof."
      },
      {
        "nazev": "Court",
        "popis": "There is a simplified court order procedure for monetary claims."
      }
    ],
    "faq": [
      {
        "q": "Does a demand interrupt the limitation period?",
        "a": "No. The limitation period is interrupted by filing a claim or by the debtor acknowledging the debt. A demand is still useful – it proves that you claimed the debt."
      },
      {
        "q": "What interest can be claimed?",
        "a": "Unless agreed otherwise – 5% a year for late payment, between businesses 6%."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Civil Code of the Republic of Lithuania.",
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
    "title": "Payment Demand Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the payment demand online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the payment demand under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "duomenys": {
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
        "popis": "Debtor – first name and surname or name"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Amount of the debt (EUR)"
      },
      "nokavets": {
        "popis": "Payment deadline expired on"
      },
      "pamats": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. payment for repair work under the work contract of 2026-09-01"
      },
      "jauns_termins": {
        "popis": "Pay by"
      },
      "iban": {
        "popis": "Creditor’s IBAN",
        "placeholder": "LT12 1000 0111 0100 1000"
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
      "Send the demand by registered letter or e-mail and keep proof of sending.",
      "If the debtor does not pay, you can go to court; for monetary claims there is also a simplified court order procedure."
    ],
    "kontrola": [
      "State precisely what the claim arises from (contract, invoice, loan) and its amount.",
      "Give a reasonable payment deadline, usually 7–14 days.",
      "For late payment 5% annual interest can be claimed unless the contract says otherwise; if both parties are businesses – 6% ([Civil Code, Art. 6.210](https://www.e-tar.lt/portal/lt/legalAct/TAR.8A39C83848CB/asr)).",
      "The demand itself does not interrupt the limitation period – it is interrupted by filing a claim or by the debtor acknowledging the debt ([Civil Code, Art. 1.130](https://www.e-tar.lt/portal/lt/legalAct/TAR.8A39C83848CB/asr)). The general limitation period is 10 years."
    ]
  },
  "dokument": {
    "nazev": "Demand to Pay a Debt",
    "podnadpis": "reminder to the debtor to pay the debt by a deadline",
    "podpisy": {
      "vlevo": "Creditor",
      "vpravo": ""
    },
    "clanky": [
      {
        "nadpis": "Demand for payment",
        "odstavce": [
          "**From:** {{p_jmeno}}, {{p_adresa}}",
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "You owe me **{{castka}}** (in words: {{castka_vardiem}}), arising from: {{pamats}}. The payment deadline expired on {{nokavets}}, but the debt has not been paid.",
          "Please pay the amount no later than {{jauns_termins}} to my account IBAN {{iban}}.",
          "Otherwise I will apply to the court for recovery of the debt and will additionally claim interest for late payment and reimbursement of the litigation costs."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

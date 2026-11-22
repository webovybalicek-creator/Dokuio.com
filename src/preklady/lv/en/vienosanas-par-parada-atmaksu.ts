/** English version of src/obsah/lv/vienosanas-par-parada-atmaksu.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-ATMAKSAS-GRAFIKS",
    "verze": "1.0"
  },
  "nazev": "Debt Repayment Agreement",
  "nazevA": "the debt repayment agreement",
  "katalog": {
    "popis": "Paying a debt in monthly instalments.",
    "slova": [
      "debt repayment agreement Latvia",
      "payment plan",
      "debt in instalments",
      "vienošanās par parāda atmaksu"
    ]
  },
  "landing": {
    "description": "Debt repayment agreement for Latvia (vienošanās par parāda atmaksu): acknowledgement of the debt, number and amount of instalments, consequences of default. Free PDF.",
    "perex": "When the debtor cannot pay at once. An agreement on monthly instalments is also an acknowledgement of the debt.",
    "obsahPopis": "Articles on repayment.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Creditor and debtor."
      },
      {
        "nazev": "Acknowledgement",
        "popis": "Amount and basis of the debt."
      },
      {
        "nazev": "Instalments",
        "popis": "Number, amount, date."
      },
      {
        "nazev": "Default",
        "popis": "The whole balance becomes payable."
      }
    ],
    "online": [
      "Amount in words in Latvian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "a debt must be paid in instalments"
    ],
    "nehodiSe": [
      "the debtor is not paying at all – start with a payment demand"
    ],
    "po": [
      {
        "nazev": "Payments",
        "popis": "Pay by bank transfer."
      }
    ],
    "faq": [
      {
        "q": "Does the agreement interrupt the limitation period?",
        "a": "Yes. By the agreement the debtor acknowledges the debt, and acknowledgement interrupts the limitation period."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Latvian Civil Law.",
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
    "title": "Debt Repayment Agreement Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the debt repayment agreement online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the debt repayment agreement under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "agreement",
      "g": "agreement",
      "a": "agreement",
      "l": "agreement"
    },
    "kroky": {
      "puses": {
        "nazev": "Creditor and debtor"
      },
      "grafiks": {
        "nazev": "Debt and instalments"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – name or company name"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – first name and surname"
      },
      "k_ik": {
        "popis": "Debtor’s personal code"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Total debt (EUR)"
      },
      "pamats": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. unpaid price under the vehicle sale agreement of 01.06.2026"
      },
      "maksajums": {
        "popis": "Monthly instalment (EUR)"
      },
      "skaits": {
        "popis": "Number of instalments"
      },
      "diena": {
        "popis": "Instalment due on day … of each month",
        "placeholder": "e.g. 15"
      },
      "pirmais": {
        "popis": "First instalment"
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
      "",
      "The debtor confirms that the debt exists and how much it is.",
      "",
      "",
      ""
    ],
    "coDal": [
      "Sign the agreement in two copies or with eParaksts.",
      "Mark the instalment dates in your calendar.",
      "Keep the payment confirmations."
    ],
    "kontrola": [
      "By the agreement the debtor acknowledges the debt; acknowledgement interrupts the limitation period, which starts to run again ([Civil Law, Article 1906](https://likumi.lv/ta/id/225418-civillikums)).",
      "State what happens if an instalment is not paid (e.g. the whole balance becomes payable).",
      "Pay by bank transfer – the statement proves each instalment.",
      "Check the other party’s identity document and copy the name, surname and personal code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Debt Repayment Agreement",
    "podnadpis": "acknowledgement of a debt and payment in monthly instalments",
    "podpisy": {
      "vlevo": "Creditor",
      "vpravo": "Debtor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Creditor:** {{p_jmeno}}, {{p_adresa}}",
          "**Debtor:** {{k_jmeno}}, personal code {{k_ik}}, address {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Acknowledgement of the debt",
        "odstavce": [
          "The Debtor acknowledges that on the day of signing they owe the Creditor **{{castka}}** (in words: {{castka_vardiem}}), arising from: {{pamats}}."
        ]
      },
      {
        "nadpis": "Payment in instalments",
        "odstavce": [
          "The Creditor agrees that the Debtor will pay the debt in {{skaits}} monthly instalments of **{{maksajums}}** (in words: {{maksajums_vardiem}}); the last instalment equals the remaining balance.",
          "The first instalment is paid on {{pirmais}} and each following one no later than day {{diena}} of each month to the Creditor’s account IBAN {{iban}}.",
          "The Debtor may also pay the debt or part of it early."
        ]
      },
      {
        "nadpis": "Late payment",
        "odstavce": [
          "If the Debtor is late with two instalments, the Creditor may by written notice demand immediate payment of the whole remaining debt together with statutory default interest."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by the agreement are subject to the Civil Law. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

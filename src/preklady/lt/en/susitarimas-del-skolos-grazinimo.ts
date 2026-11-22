/** English version of src/obsah/lt/susitarimas-del-skolos-grazinimo.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-GRAZINIMO-GRAFIKAS",
    "verze": "1.0"
  },
  "nazev": "Debt Repayment Agreement",
  "nazevA": "the debt repayment agreement",
  "katalog": {
    "popis": "Paying a debt in monthly instalments.",
    "slova": [
      "debt repayment agreement Lithuania",
      "instalment plan",
      "pay debt in instalments",
      "susitarimas dėl skolos grąžinimo"
    ]
  },
  "landing": {
    "description": "Agreement on repaying a debt in instalments for Lithuania (susitarimas dėl skolos grąžinimo): acknowledgement, number and amount of instalments, late payment. Free PDF.",
    "perex": "When the debtor cannot pay everything at once. The agreement is both an acknowledgement of the debt and a payment schedule.",
    "obsahPopis": "Articles of the agreement.",
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
        "popis": "Amount, number and dates of instalments."
      },
      {
        "nazev": "Late payment",
        "popis": "What happens if instalments are missed."
      }
    ],
    "online": [
      "Amount in words in Lithuanian added automatically",
      "Instalment reminders",
      "PDF and Word"
    ],
    "hodiSe": [
      "the debtor wants to pay in instalments",
      "you want a clear schedule and an acknowledgement of the debt"
    ],
    "nehodiSe": [
      "the debt is still disputed"
    ],
    "po": [
      {
        "nazev": "Calendar",
        "popis": "Mark the instalment dates in your calendar."
      },
      {
        "nazev": "Proof",
        "popis": "Keep the payment confirmations."
      }
    ],
    "faq": [
      {
        "q": "Does the agreement interrupt the limitation period?",
        "a": "Yes. In the agreement the debtor acknowledges the debt, so the limitation period starts again."
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
    "title": "Debt Repayment Agreement Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the debt repayment agreement online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the debt repayment agreement under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "salys": {
        "nazev": "Creditor and debtor"
      },
      "grafikas": {
        "nazev": "Debt and instalments"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – first name and surname or name"
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
        "popis": "Total amount of the debt (EUR)"
      },
      "pamats": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. unpaid price under the vehicle sale agreement of 2026-06-01"
      },
      "maksajums": {
        "popis": "Monthly instalment (EUR)"
      },
      "skaits": {
        "popis": "Number of instalments"
      },
      "diena": {
        "popis": "Instalment on day … of each month",
        "placeholder": "e.g. 15"
      },
      "pirmais": {
        "popis": "First instalment"
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
      "",
      "The debtor confirms that the debt exists and how much it is.",
      "",
      "",
      ""
    ],
    "coDal": [
      "Sign the agreement in two copies.",
      "Mark the instalment dates in your calendar.",
      "Keep the payment confirmations."
    ],
    "kontrola": [
      "In the agreement the debtor acknowledges the debt; the acknowledgement interrupts the limitation period, which starts to run again ([Civil Code, Art. 1.130](https://www.e-tar.lt/portal/lt/legalAct/TAR.8A39C83848CB/asr)).",
      "State what happens if an instalment is not paid (for example the whole remaining amount becomes payable).",
      "Pay by bank transfer – the account statement proves each instalment.",
      "Check the other party’s identity document and copy the name, surname and personal code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Debt Repayment Agreement",
    "podnadpis": "acknowledgement of the debt and payment in monthly instalments",
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
          "The Debtor acknowledges that on the day of signing the agreement they owe the Creditor **{{castka}}** (in words: {{castka_vardiem}}), arising from: {{pamats}}."
        ]
      },
      {
        "nadpis": "Payment in instalments",
        "odstavce": [
          "The Creditor agrees that the Debtor pays the debt in {{skaits}} monthly instalments of **{{maksajums}}** (in words: {{maksajums_vardiem}}); the last instalment equals the remaining part of the debt.",
          "The first instalment is paid on {{pirmais}}, each following one no later than day {{diena}} of each month to the Creditor’s account IBAN {{iban}}.",
          "The Debtor may also pay the debt or part of it early."
        ]
      },
      {
        "nadpis": "Late instalments",
        "odstavce": [
          "If the Debtor misses two instalments, the Creditor may by written notice demand immediate payment of the whole remaining debt together with the interest laid down in Article 6.210 of the Civil Code."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by this agreement are subject to the Civil Code of the Republic of Lithuania. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

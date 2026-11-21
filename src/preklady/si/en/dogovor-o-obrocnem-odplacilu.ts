/** English version of src/obsah/si/dogovor-o-obrocnem-odplacilu.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-OBROKI",
    "verze": "1.0"
  },
  "nazev": "Instalment Agreement",
  "nazevA": "the instalment agreement",
  "katalog": {
    "popis": "Paying off a debt in monthly instalments.",
    "slova": [
      "instalment agreement",
      "debt repayment plan",
      "pay in instalments",
      "acknowledgement of debt",
      "dogovor o obročnem odplačilu"
    ]
  },
  "landing": {
    "description": "Debt instalment agreement for Slovenia (dogovor o obročnem odplačilu): amount, number and size of instalments, dates, whole debt due on default. Free bilingual PDF.",
    "perex": "The debtor can’t pay at once? An instalment agreement with a clear schedule and the consequences of late payment.",
    "obsahPopis": "Five articles under the Obligations Code (Obligacijski zakonik).",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Creditor and debtor."
      },
      {
        "nazev": "Debt",
        "popis": "Amount and basis."
      },
      {
        "nazev": "Instalments",
        "popis": "Number, size, dates."
      },
      {
        "nazev": "Late payment",
        "popis": "The whole debt becomes due."
      }
    ],
    "online": [
      "Instalment calculation",
      "Amount in words in Slovenian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "the debtor wants to pay in parts",
      "you want the schedule in writing"
    ],
    "nehodiSe": [
      "the debtor denies the debt"
    ],
    "po": [
      {
        "nazev": "Reminder",
        "popis": "Save the instalment dates in your calendar."
      }
    ],
    "faq": [
      {
        "q": "Does the agreement interrupt the limitation period?",
        "a": "Yes, by signing it the debtor acknowledges the debt."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik).",
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
    "title": "Instalment Agreement Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the instalment agreement online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the instalment agreement under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stranki": {
        "nazev": "Creditor and debtor"
      },
      "dolg": {
        "nazev": "Debt and instalments"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – full name or company name"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – full name"
      },
      "k_davcna": {
        "popis": "Debtor’s tax number"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Total debt (€)"
      },
      "podlaga": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. neplačana kupnina za vozilo po pogodbi z dne 1. 6. 2026 (unpaid purchase price for a vehicle under the agreement of 1 June 2026)"
      },
      "obrok": {
        "popis": "Monthly instalment (€)"
      },
      "stevilo": {
        "popis": "Number of instalments"
      },
      "dan": {
        "popis": "Instalment due on day … of each month",
        "placeholder": "e.g. 15"
      },
      "prvi": {
        "popis": "First instalment"
      },
      "iban": {
        "popis": "Creditor’s IBAN",
        "placeholder": "SI56 0000 0000 0000 000"
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
      "",
      ""
    ],
    "coDal": [
      "Print the agreement in two copies and sign both.",
      "Save the instalment dates in your calendar.",
      "Keep the payment confirmations."
    ],
    "kontrola": [
      "In the agreement the debtor acknowledges the debt – the acknowledgement interrupts the limitation period, which starts running again (OZ).",
      "Specify what happens if an instalment is late (e.g. the whole remainder becomes due).",
      "For larger amounts consider a notarial deed with direct enforceability (notarski zapis).",
      "Check the other party’s identity against their identity card and copy the name and tax number exactly as they appear in the document."
    ]
  },
  "dokument": {
    "nazev": "Debt Instalment Agreement",
    "podnadpis": "acknowledgement of debt and repayment plan in instalments",
    "podpisy": {
      "vlevo": "Creditor",
      "vpravo": "Debtor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Creditor:** {{p_jmeno}}, address {{p_adresa}}",
          "**Debtor:** {{k_jmeno}}, tax number {{k_davcna}}, address {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Acknowledgement of debt",
        "odstavce": [
          "The Debtor acknowledges that on the day of signing this agreement they owe the Creditor **{{castka}}** on the basis of: {{podlaga}}."
        ]
      },
      {
        "nadpis": "Repayment in instalments",
        "odstavce": [
          "The Creditor agrees that the Debtor will repay the debt in {{stevilo}} monthly instalments of **{{obrok}}**, the last instalment being the remaining amount of the debt.",
          "The first instalment is due on {{prvi}} and each subsequent one on the {{dan}}th day of the month. Instalments are paid to the Creditor’s account IBAN {{iban}}.",
          "The Debtor may also pay the debt or part of it early."
        ]
      },
      {
        "nadpis": "Late payment",
        "odstavce": [
          "If the Debtor is late with two instalments, the Creditor may, by written notice, demand immediate payment of the entire remaining debt with statutory default interest from the day of default."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by this agreement are subject to the Obligations Code. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

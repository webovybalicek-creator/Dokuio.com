/** English version of src/obsah/gr/symfonia-doseon.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-DOSEIS",
    "verze": "1.0"
  },
  "nazev": "Instalment Agreement",
  "nazevA": "the instalment agreement",
  "katalog": {
    "popis": "The debt in monthly instalments.",
    "slova": [
      "instalment agreement Greece",
      "debt repayment plan",
      "payment plan Greece",
      "debt settlement",
      "symfonia doseon"
    ]
  },
  "landing": {
    "description": "Instalment agreement for Greece (συμφωνία εξόφλησης οφειλής σε δόσεις): acknowledgement of the debt, instalment amount, dates and consequences of delay. Free PDF.",
    "perex": "The debtor acknowledges the debt and pays it off in monthly instalments.",
    "obsahPopis": "Articles on the acknowledgement and instalments.",
    "obsah": [
      {
        "nazev": "Acknowledgement",
        "popis": "Amount and basis."
      },
      {
        "nazev": "Instalments",
        "popis": "Amount, number, dates."
      },
      {
        "nazev": "Delay",
        "popis": "Whole balance due."
      }
    ],
    "online": [
      "Amount in words in Greek added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone owes you money and will pay in instalments"
    ],
    "nehodiSe": [
      "the debtor does not acknowledge the debt – send a formal payment demand"
    ],
    "po": [
      {
        "nazev": "Calendar",
        "popis": "Put the instalment dates in your calendar."
      },
      {
        "nazev": "Records",
        "popis": "Keep the payment records."
      }
    ],
    "faq": [
      {
        "q": "Is the limitation period interrupted?",
        "a": "Yes. Acknowledgement of the debt interrupts the limitation period, which starts again (Art. 260 ff. Civil Code)."
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
    "title": "Instalment Agreement Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the instalment agreement online – Greece, free PDF",
    "description": "Step-by-step guide in English for the instalment agreement under Greek law. Bilingual PDF or Word with the original text, free of charge.",
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
      "meri": {
        "nazev": "Creditor and debtor"
      },
      "doseis": {
        "nazev": "The debt and instalments"
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
      "k_adt": {
        "popis": "Debtor’s identity card no."
      },
      "k_afm": {
        "popis": "Debtor’s tax number (AFM)"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Total debt (EUR)"
      },
      "aitia": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. ανεξόφλητο τίμημα αυτοκινήτου σύμφωνα με τη σύμβαση της 01/06/2026"
      },
      "dosi": {
        "popis": "Monthly instalment (EUR)"
      },
      "plithos": {
        "popis": "Number of instalments"
      },
      "imera": {
        "popis": "The instalment is due by day … of the month",
        "placeholder": "e.g. 15"
      },
      "proti": {
        "popis": "First instalment"
      },
      "iban": {
        "popis": "Creditor’s IBAN",
        "placeholder": "GR16 …"
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
      "Put the instalment dates in your calendar.",
      "Keep the payment records."
    ],
    "kontrola": [
      "With the agreement the debtor acknowledges the debt; the acknowledgement interrupts the limitation period, which starts again (Arts. 260–270 Civil Code).",
      "Agree what happens if an instalment is late (e.g. the whole balance becoming due).",
      "Pay through a bank – the transfer records prove each instalment.",
      "Check the other party’s identity card and copy the full name, identity card number and tax number (AFM) exactly as they appear."
    ]
  },
  "dokument": {
    "nazev": "Instalment Agreement",
    "podnadpis": "acknowledgement of the debt and repayment schedule",
    "podpisy": {
      "vlevo": "The Creditor",
      "vpravo": "The Debtor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Creditor:** {{p_jmeno}}, {{p_adresa}}",
          "**Debtor:** {{k_jmeno}}, identity card no. {{k_adt}}, tax number {{k_afm}}, resident at {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Acknowledgement of the debt",
        "odstavce": [
          "The Debtor acknowledges that on the date of signing this agreement they owe the Creditor **{{castka}}**, on the following basis: {{aitia}}."
        ]
      },
      {
        "nadpis": "Repayment in instalments",
        "odstavce": [
          "The Creditor agrees that the Debtor will repay the debt in {{plithos}} monthly instalments of **{{dosi}}**; the last instalment equals the remaining balance.",
          "The first instalment is paid on {{proti}} and each subsequent one by day {{imera}} of each month, to the Creditor’s account IBAN {{iban}}.",
          "The Debtor may repay the debt or part of it early."
        ]
      },
      {
        "nadpis": "Delay",
        "odstavce": [
          "If the Debtor is late with two instalments, the Creditor may by written notice demand the whole balance immediately, with statutory default interest."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed are subject to the provisions of the Civil Code. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

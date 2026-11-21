/** English version of src/obsah/bg/sporazumenie-razsrochvane-dalg.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-RAZSROCHVANE",
    "verze": "1.0"
  },
  "nazev": "Instalment Agreement",
  "nazevA": "the instalment agreement",
  "katalog": {
    "popis": "The debt in monthly instalments.",
    "slova": [
      "instalment agreement Bulgaria",
      "debt rescheduling",
      "repayment plan",
      "instalments",
      "razsrochvane na dalg"
    ]
  },
  "landing": {
    "description": "Agreement on payment of a debt in instalments in Bulgaria (споразумение за разсрочено плащане): acknowledged debt, instalments and default. Free PDF.",
    "perex": "When the debtor cannot pay at once and you agree on monthly instalments.",
    "obsahPopis": "Five articles under the Obligations and Contracts Act.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Creditor and debtor."
      },
      {
        "nazev": "Acknowledgement",
        "popis": "The amount and basis."
      },
      {
        "nazev": "Instalments",
        "popis": "Number, amount and due dates."
      },
      {
        "nazev": "Default",
        "popis": "Acceleration."
      },
      {
        "nazev": "Final provisions",
        "popis": "Copies."
      }
    ],
    "online": [
      "Amount in words in Bulgarian added automatically",
      "Instalment reminders",
      "PDF and Word"
    ],
    "hodiSe": [
      "the debtor will pay in instalments"
    ],
    "nehodiSe": [
      "the debtor refuses to pay – a payment demand is more suitable"
    ],
    "po": [
      {
        "nazev": "Instalments",
        "popis": "Save the dates in your calendar."
      }
    ],
    "faq": [
      {
        "q": "Does the agreement interrupt the limitation period?",
        "a": "Yes. In it the debtor acknowledges the debt, and acknowledgement interrupts the limitation period (Art. 116 Obligations and Contracts Act)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Obligations and Contracts Act.",
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
    "title": "Instalment Agreement Bulgaria {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the instalment agreement online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the instalment agreement under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "strani": {
        "nazev": "Creditor and debtor"
      },
      "dalg": {
        "nazev": "The debt and instalments"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – name"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – full name"
      },
      "k_egn": {
        "popis": "Debtor’s EGN"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Total debt (EUR)"
      },
      "osnovanie": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. неплатена цена на автомобил по договор от 01.06.2026 г."
      },
      "vnoska": {
        "popis": "Monthly instalment (EUR)"
      },
      "broy": {
        "popis": "Number of instalments"
      },
      "den": {
        "popis": "Instalment due by day …",
        "placeholder": "e.g. 15"
      },
      "parva": {
        "popis": "First instalment"
      },
      "iban": {
        "popis": "IBAN",
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
      "",
      "",
      "",
      "",
      ""
    ],
    "coDal": [
      "Print the agreement in two copies and sign both.",
      "Save the instalment dates in your calendar.",
      "Keep proof of the payments."
    ],
    "kontrola": [
      "With this agreement the debtor acknowledges the debt – acknowledgement interrupts the limitation period, which starts to run again (Art. 116 Obligations and Contracts Act).",
      "Agree what happens if an instalment is late (e.g. the whole remainder becomes due).",
      "Pay by bank transfer – the statements prove each instalment.",
      "Check the other party’s identity against their identity card and copy the names and EGN exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Agreement on Payment of a Debt in Instalments",
    "podnadpis": "acknowledgement of the debt and repayment plan",
    "podpisy": {
      "vlevo": "Creditor",
      "vpravo": "Debtor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Creditor:** {{p_jmeno}}, address {{p_adresa}}",
          "**Debtor:** {{k_jmeno}}, EGN {{k_egn}}, address {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Acknowledgement of the debt",
        "odstavce": [
          "The Debtor acknowledges that on the date of signing this agreement they owe the Creditor **{{castka}}** on the basis of: {{osnovanie}}."
        ]
      },
      {
        "nadpis": "Payment in instalments",
        "odstavce": [
          "The Creditor agrees that the Debtor will pay the debt in {{broy}} monthly instalments of **{{vnoska}}**, the last instalment being equal to the remainder of the debt.",
          "The first instalment is due on {{parva}} and each following one by day {{den}} of the month. The instalments are paid to the Creditor’s account IBAN {{iban}}.",
          "The Debtor may also pay the debt or part of it early."
        ]
      },
      {
        "nadpis": "Default",
        "odstavce": [
          "If the Debtor is late with two instalments, the Creditor may by written notice demand immediate payment of the whole remainder of the debt together with statutory default interest."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed are subject to the Obligations and Contracts Act. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

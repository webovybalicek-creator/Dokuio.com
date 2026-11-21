/** English version of src/obsah/hr/sporazum-o-obrocnoj-otplati.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-OBROCI",
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
      "sporazum o obročnoj otplati"
    ]
  },
  "landing": {
    "description": "Debt instalment agreement for Croatia (sporazum o obročnoj otplati): acknowledgement of debt, instalment amount, number and due dates, late payment. Free PDF.",
    "perex": "The debtor can’t pay at once? An instalment agreement with an acknowledgement of debt – and the limitation period starts running again.",
    "obsahPopis": "Five articles under the Obligations Act (Zakon o obveznim odnosima).",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Creditor and debtor."
      },
      {
        "nazev": "Acknowledgement of debt",
        "popis": "Amount and basis."
      },
      {
        "nazev": "Instalments",
        "popis": "Amount, number, due dates."
      },
      {
        "nazev": "Late payment",
        "popis": "The remainder becomes due."
      },
      {
        "nazev": "Final provisions",
        "popis": "Copies."
      }
    ],
    "online": [
      "Amount in words in Croatian added automatically",
      "Instalment reminders",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are agreeing on repaying a debt in instalments",
      "you want a written acknowledgement of the debt"
    ],
    "nehodiSe": [
      "the debtor disputes the debt – they will not sign the agreement"
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
        "a": "Yes, in the agreement the debtor acknowledges the debt, and the acknowledgement interrupts the limitation period."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima – acknowledgement of debt, limitation, default interest).",
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
    "title": "Instalment Agreement Croatia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the instalment agreement online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the instalment agreement under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "strane": {
        "nazev": "Creditor and debtor"
      },
      "dug": {
        "nazev": "Debt and instalments"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – full name or company name",
        "placeholder": "e.g. Ivan Horvat"
      },
      "p_oib": {
        "popis": "Creditor’s OIB"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – full name",
        "placeholder": "e.g. Marko Babić"
      },
      "k_oib": {
        "popis": "Debtor’s OIB"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Total debt (€)"
      },
      "temelj": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. neplaćena cijena za automobil prema ugovoru od 1. 6. 2026. (unpaid price for a car under the agreement of 1 June 2026)"
      },
      "obrok": {
        "popis": "Monthly instalment (€)"
      },
      "broj": {
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
        "placeholder": "HR00 0000 0000 0000 0000 0"
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
      "In the agreement the debtor acknowledges the debt – the acknowledgement interrupts the limitation period, which starts running again (ZOO).",
      "Specify what happens if the debtor is late with an instalment (e.g. the whole remainder becomes due).",
      "For larger amounts consider solemnisation by a notary (javni bilježnik) – an enforceable document makes collection easier.",
      "Check the other party’s identity against their identity card and copy the name and OIB exactly as they appear in the document."
    ]
  },
  "dokument": {
    "nazev": "Instalment Agreement",
    "podnadpis": "acknowledgement of debt and repayment plan in instalments",
    "podpisy": {
      "vlevo": "Creditor",
      "vpravo": "Debtor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Creditor:** {{p_jmeno}}, OIB {{p_oib}}, address {{p_adresa}}",
          "**Debtor:** {{k_jmeno}}, OIB {{k_oib}}, address {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Acknowledgement of debt",
        "odstavce": [
          "The Debtor acknowledges that on the day of signing this agreement they owe the Creditor **{{castka}}** on the basis of: {{temelj}}."
        ]
      },
      {
        "nadpis": "Repayment in instalments",
        "odstavce": [
          "The Creditor agrees that the Debtor will repay the debt in {{broj}} monthly instalments of **{{obrok}}**, the last instalment being the remaining amount of the debt.",
          "The first instalment is due on {{prvi}} and each subsequent one on the {{dan}}th day of the month. Instalments are paid to the Creditor’s account IBAN {{iban}}.",
          "The Debtor may also pay the debt or part of it early."
        ]
      },
      {
        "nadpis": "Late payment",
        "odstavce": [
          "If the Debtor is late with two instalments, the Creditor may, by written notice, demand the entire remaining debt at once, with statutory default interest from the day of default."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by this agreement are subject to the Obligations Act.",
          "The agreement is drawn up in two identical copies, one for each party."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

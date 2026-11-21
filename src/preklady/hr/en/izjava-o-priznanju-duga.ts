/** English version of src/obsah/hr/izjava-o-priznanju-duga.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-PRIZNANJE",
    "verze": "1.0"
  },
  "nazev": "Acknowledgement of Debt",
  "nazevA": "the acknowledgement of debt",
  "katalog": {
    "popis": "The debtor acknowledges the debt and the payment deadline in writing.",
    "slova": [
      "acknowledgement of debt",
      "debt acknowledgement",
      "IOU",
      "limitation period",
      "debtor",
      "izjava o priznanju duga"
    ]
  },
  "landing": {
    "description": "Acknowledgement of debt for Croatia (izjava o priznanju duga): amount, basis, payment deadline, default interest. Interrupts limitation. Free bilingual PDF.",
    "perex": "The debtor acknowledges in writing how much they owe and by when they will pay. The acknowledgement interrupts the limitation period.",
    "obsahPopis": "A short one-sided declaration by the debtor.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Debt, basis, deadline and account."
      }
    ],
    "online": [
      "Amount in words in Croatian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone owes you money and agrees to confirm it",
      "you want to extend the limitation period"
    ],
    "nehodiSe": [
      "the debtor disputes the debt – then a payment demand or a lawyer helps"
    ],
    "po": [
      {
        "nazev": "Original",
        "popis": "The creditor keeps the original."
      }
    ],
    "faq": [
      {
        "q": "What does interrupting the limitation period mean?",
        "a": "When the debtor acknowledges the debt, the limitation period is interrupted and starts running again; the general limitation period is five years."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima – acknowledgement of debt, limitation).",
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
    "title": "Acknowledgement of Debt Croatia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the acknowledgement of debt online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the acknowledgement of debt under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podaci": {
        "nazev": "Debtor, creditor and debt"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Debtor – full name",
        "placeholder": "e.g. Marko Babić"
      },
      "p_oib": {
        "popis": "Debtor’s OIB"
      },
      "p_adresa": {
        "popis": "Debtor’s address"
      },
      "k_jmeno": {
        "popis": "Creditor – full name",
        "placeholder": "e.g. Ivan Horvat"
      },
      "k_oib": {
        "popis": "Creditor’s OIB"
      },
      "k_adresa": {
        "popis": "Creditor’s address"
      },
      "castka": {
        "popis": "Amount of the debt (€)"
      },
      "temelj": {
        "popis": "Legal basis of the debt",
        "placeholder": "e.g. zajam od 15. 3. 2026. (loan of 15 March 2026)"
      },
      "rok": {
        "popis": "I will pay the debt by"
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
      ""
    ],
    "coDal": [
      "The debtor signs the declaration and hands it to the creditor.",
      "The creditor keeps the original carefully – it is the evidence in a dispute."
    ],
    "kontrola": [
      "When the debtor acknowledges the debt, the limitation period is interrupted and starts running again; the general limitation period is five years (ZOO).",
      "State the legal basis of the debt (e.g. a loan of …, unpaid price for …).",
      "For easier collection the declaration can be solemnised by a notary (javni bilježnik) – it then becomes an enforceable document.",
      "Check the other party’s identity against their identity card and copy the name and OIB exactly as they appear in the document."
    ]
  },
  "dokument": {
    "nazev": "Acknowledgement of Debt",
    "podnadpis": "written acknowledgement of a monetary obligation",
    "podpisy": {
      "vlevo": "debtor",
      "vpravo": "creditor (received)"
    },
    "clanky": [
      {
        "nadpis": "Declaration",
        "odstavce": [
          "I, **{{p_jmeno}}**, OIB {{p_oib}}, address {{p_adresa}} (debtor),",
          "acknowledge that on the day of signing this declaration I owe the creditor **{{k_jmeno}}**, OIB {{k_oib}}, address {{k_adresa}}, the amount of **{{castka}}** on the basis of: {{temelj}}.",
          "I undertake to pay the debt no later than {{rok}} to the creditor’s account IBAN {{iban}}.",
          "If I do not pay the debt on time, I also owe statutory default interest from the due date until payment."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

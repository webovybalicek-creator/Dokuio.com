/** English version of src/obsah/si/pripoznava-dolga.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-PRIPOZNAVA",
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
      "pripoznava dolga"
    ]
  },
  "landing": {
    "description": "Acknowledgement of debt for Slovenia (pripoznava dolga): amount, legal basis, payment deadline and default interest. It interrupts the limitation period. Free PDF.",
    "perex": "The debtor acknowledges in writing how much they owe and by when they will pay. The acknowledgement interrupts the limitation period.",
    "obsahPopis": "A short one-sided declaration by the debtor.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Debt, basis, deadline and account."
      }
    ],
    "online": [
      "Amount in words in Slovenian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone owes you money and agrees to confirm it",
      "you want to extend the limitation period"
    ],
    "nehodiSe": [
      "the debtor denies the debt – then a payment demand or a lawyer helps"
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
        "a": "When the debtor acknowledges the debt, the limitation period is interrupted and starts running again; the general limitation period is five years (Art. 346 OZ)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik – acknowledgement of debt, limitation).",
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
    "title": "Acknowledgement of Debt Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the acknowledgement of debt online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the acknowledgement of debt under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podatki": {
        "nazev": "Debtor, creditor and debt"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Debtor – full name",
        "placeholder": "e.g. Marko Kralj"
      },
      "p_davcna": {
        "popis": "Debtor’s tax number"
      },
      "p_adresa": {
        "popis": "Debtor’s address"
      },
      "k_jmeno": {
        "popis": "Creditor – full name or company name",
        "placeholder": "e.g. Janez Novak"
      },
      "k_adresa": {
        "popis": "Creditor’s address"
      },
      "castka": {
        "popis": "Amount of the debt (€)"
      },
      "podlaga": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. posojilo po pogodbi z dne 15. 3. 2026 (loan under the agreement of 15 March 2026)"
      },
      "rok": {
        "popis": "I will pay by"
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
      ""
    ],
    "coDal": [
      "The creditor keeps the original.",
      "For larger amounts consider a notarial deed with direct enforceability (notarski zapis)."
    ],
    "kontrola": [
      "An acknowledgement of debt interrupts the limitation period – it starts running again. The general limitation period is five years (Obligations Code).",
      "To interrupt the limitation period it is not enough for the creditor merely to ask the debtor to pay – the debtor’s acknowledgement or a lawsuit is required.",
      "State the legal basis of the debt (loan, unpaid purchase price, damage), the amount and the payment deadline."
    ]
  },
  "dokument": {
    "nazev": "Acknowledgement of Debt",
    "podnadpis": "written declaration by the debtor on the existence and amount of the debt",
    "podpisy": {
      "vlevo": "debtor",
      "vpravo": "received (creditor, optional)"
    },
    "clanky": [
      {
        "nadpis": "Acknowledgement",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, tax number {{p_davcna}}, {{p_adresa}} (debtor),",
          "acknowledge that on the day of signing this declaration I owe the creditor {{k_jmeno}}, {{k_adresa}}, the amount of **{{castka}}** on the basis of: {{podlaga}}.",
          "I undertake to pay the debt no later than {{rok}} to the creditor’s account IBAN {{iban}}. In the event of late payment, I also owe statutory default interest."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

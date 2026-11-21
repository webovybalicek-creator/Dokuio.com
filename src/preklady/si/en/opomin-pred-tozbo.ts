/** English version of src/obsah/si/opomin-pred-tozbo.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-OPOMIN",
    "verze": "1.0"
  },
  "nazev": "Payment Demand",
  "nazevA": "the payment demand",
  "katalog": {
    "popis": "A demand to the debtor to pay by a deadline.",
    "slova": [
      "payment demand",
      "letter before action",
      "debtor does not pay",
      "default interest",
      "opomin pred tožbo"
    ]
  },
  "landing": {
    "title": "Payment Demand Slovenia {rok} – free PDF template",
    "description": "Payment demand before legal action in Slovenia (opomin pred tožbo): amount, basis, deadline, IBAN and a warning of default interest and enforcement. Free bilingual PDF.",
    "perex": "The debtor won’t pay? A written demand with a clear deadline is often enough – and if not, it proves that you asked them to pay.",
    "obsahPopis": "A short demand in one part.",
    "obsah": [
      {
        "nazev": "Demand",
        "popis": "Debt, basis, deadline, account and warning."
      }
    ],
    "online": [
      "Amount in words in Slovenian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone owes you money and does not pay",
      "you want to ask the debtor once more before going to court"
    ],
    "nehodiSe": [
      "the debt is time-barred – consult a lawyer"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "Registered post with a return receipt."
      },
      {
        "nazev": "Then",
        "popis": "An application for enforcement based on an authentic document, or a lawsuit."
      }
    ],
    "faq": [
      {
        "q": "Is a demand compulsory?",
        "a": "Not always, but it is good evidence and often leads to payment without going to court."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik – default, default interest).",
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
    "souvisejiciPopis": "More documents, also free."
  },
  "vytvorit": {
    "title": "Fill in the payment demand online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the payment demand under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podatki": {
        "nazev": "Creditor, debtor and debt"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – full name or company name",
        "placeholder": "e.g. Janez Novak"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – full name or company name",
        "placeholder": "e.g. Marko Kralj"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Amount owed (€)"
      },
      "podlaga": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. posojilo po pogodbi z dne 15. 3. 2026 (loan under the agreement of 15 March 2026)"
      },
      "zapadlost": {
        "popis": "The debt fell due on"
      },
      "rok": {
        "popis": "Pay by"
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
      "Send the demand by registered post with a return receipt and keep the proof.",
      "If the debtor does not pay, you can file an application for enforcement based on an authentic document (e.g. an invoice) or a lawsuit."
    ],
    "kontrola": [
      "The debt must be due – the payment deadline under the agreement or invoice has passed.",
      "From the due date the debtor also owes statutory default interest.",
      "A demand on its own does not interrupt the limitation period – only the debtor’s acknowledgement of the debt or a lawsuit does. The general limitation period is five years.",
      "Set a reasonable deadline (e.g. 8 or 15 days) and state the exact IBAN."
    ]
  },
  "dokument": {
    "nazev": "Payment Demand Before Legal Action",
    "podnadpis": "demand for payment of a debt that is due",
    "podpisy": {
      "vlevo": "creditor",
      "vpravo": "received (debtor, optional)"
    },
    "clanky": [
      {
        "nadpis": "Demand",
        "odstavce": [
          "**Creditor:** {{p_jmeno}}, {{p_adresa}}",
          "**Debtor:** {{k_jmeno}}, {{k_adresa}}",
          "I call on you to pay me the debt that is due in the amount of **{{castka}}** on the basis of: {{podlaga}}. The debt fell due on {{zapadlost}} and has not been paid to date.",
          "Please transfer the amount no later than **{{rok}}** to the account IBAN {{iban}}.",
          "Please note that from the due date you also owe statutory default interest. If you do not pay the debt within this period, I will start collection proceedings in court without further notice, and the costs of the proceedings will be borne by you."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

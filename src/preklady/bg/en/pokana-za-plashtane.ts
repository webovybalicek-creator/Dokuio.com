/** English version of src/obsah/bg/pokana-za-plashtane.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-POKANA",
    "verze": "1.0"
  },
  "nazev": "Demand for Payment",
  "nazevA": "the demand for payment",
  "katalog": {
    "popis": "A demand to the debtor with a payment deadline.",
    "slova": [
      "demand for payment Bulgaria",
      "payment reminder",
      "debtor does not pay",
      "statutory interest",
      "pokana za plashtane"
    ]
  },
  "landing": {
    "description": "Demand for voluntary payment to a debtor in Bulgaria (покана): amount in words, basis, deadline and putting the debtor in default before going to court. Free PDF.",
    "perex": "When someone has not paid you on time. The demand sets a final deadline before you go to court.",
    "obsahPopis": "A short demand.",
    "obsah": [
      {
        "nazev": "Demand",
        "popis": "Creditor, debtor, debt, deadline and account."
      }
    ],
    "online": [
      "Amount in words in Bulgarian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone has not paid you a debt, loan or invoice"
    ],
    "nehodiSe": [
      "the debt is not yet due"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "Send by registered letter with acknowledgement of receipt."
      }
    ],
    "faq": [
      {
        "q": "Does the demand interrupt the limitation period?",
        "a": "No. The limitation period is interrupted by the debtor’s acknowledgement, a court claim or enforcement steps (Art. 116 Obligations and Contracts Act)."
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
    "title": "Demand for Payment Bulgaria {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the demand for payment online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the demand for payment under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "danni": {
        "nazev": "Creditor, debtor and the debt"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – name",
        "placeholder": "e.g. Иван Петров Иванов"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – name",
        "placeholder": "e.g. Георги Стоянов Николов"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Amount owed (EUR)"
      },
      "osnovanie": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. заем по договор от 15.03.2026 г."
      },
      "padezh": {
        "popis": "The debt fell due on"
      },
      "srok": {
        "popis": "Pay by"
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
      ""
    ],
    "coDal": [
      "Send the demand by registered letter with acknowledgement of receipt or through a notary and keep the proof.",
      "If the debtor does not pay, you can apply to the district court for an order for payment."
    ],
    "kontrola": [
      "The debt must be due – the payment deadline under the agreement or invoice has passed.",
      "In case of delay the debtor owes statutory interest (Obligations and Contracts Act). If no payment deadline was agreed, the debtor is in default after the demand.",
      "The demand itself does not interrupt the limitation period – it is interrupted by the debtor’s acknowledgement, a court claim and enforcement steps (Art. 116 Obligations and Contracts Act).",
      "Give a reasonable deadline (e.g. 7 or 14 days) and state the IBAN exactly."
    ]
  },
  "dokument": {
    "nazev": "Demand for Voluntary Payment",
    "podnadpis": "putting the debtor in default and demand before bringing proceedings",
    "podpisy": {
      "vlevo": "Creditor",
      "vpravo": "Received (debtor, optional)"
    },
    "clanky": [
      {
        "nadpis": "Demand",
        "odstavce": [
          "**Creditor:** {{p_jmeno}}, {{p_adresa}}",
          "**Debtor:** {{k_jmeno}}, {{k_adresa}}",
          "I call on you to pay me the outstanding debt of **{{castka}}** on the basis of: {{osnovanie}}. The debt fell due on {{padezh}} and has not been paid to date.",
          "Please pay the amount no later than **{{srok}}** to account IBAN {{iban}}.",
          "I hereby put you in default. Please note that from the date of default you also owe statutory interest. If you do not pay within the stated deadline, I will go to court without further notice and the costs of the proceedings will be borne by you."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

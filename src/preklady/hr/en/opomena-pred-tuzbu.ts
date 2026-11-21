/** English version of src/obsah/hr/opomena-pred-tuzbu.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-OPOMENA",
    "verze": "1.0"
  },
  "nazev": "Payment Demand",
  "nazevA": "the payment demand",
  "katalog": {
    "popis": "A demand to the debtor to pay by a deadline, with a warning.",
    "slova": [
      "payment demand",
      "letter before action",
      "debt collection",
      "debtor does not pay",
      "default interest",
      "opomena pred tužbu"
    ]
  },
  "landing": {
    "title": "Payment Demand Croatia {rok} – free PDF template",
    "description": "Payment demand before legal action in Croatia (opomena pred tužbu): amount, basis, deadline, IBAN and a warning of default interest and enforcement. Free bilingual PDF.",
    "perex": "The debtor won’t pay? A written demand with a clear deadline is often enough – and if not, it proves that you asked them to pay.",
    "obsahPopis": "A short demand in one part.",
    "obsah": [
      {
        "nazev": "Demand",
        "popis": "Debt, basis, deadline, account and warning."
      }
    ],
    "online": [
      "Amount in words in Croatian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone owes you an amount that is due",
      "you want to demand payment in writing before going to court"
    ],
    "nehodiSe": [
      "the debt is not yet due",
      "the debtor is a company in bankruptcy"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "Registered post with a return receipt."
      },
      {
        "nazev": "If they don’t pay",
        "popis": "Enforcement through a notary (javni bilježnik) or a lawsuit."
      }
    ],
    "faq": [
      {
        "q": "Is a demand compulsory before a lawsuit?",
        "a": "It is not always required, but it shows that you asked the debtor to pay and often speeds up collection."
      },
      {
        "q": "From when is default interest calculated?",
        "a": "From the due date of the debt, not only from the demand."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima – debtor’s default, default interest).",
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
    "title": "Fill in the payment demand online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the payment demand under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podaci": {
        "nazev": "Creditor, debtor and debt"
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
        "popis": "Debtor – full name or company name",
        "placeholder": "e.g. Marko Babić"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Amount owed (€)"
      },
      "temelj": {
        "popis": "What the debtor owes for",
        "placeholder": "e.g. zajam prema ugovoru od 15. 3. 2026. (loan under the agreement of 15 March 2026)"
      },
      "dospijece": {
        "popis": "The debt fell due on"
      },
      "rok": {
        "popis": "Pay by"
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
      "Send the demand by registered post with a return receipt or by e-mail with a read receipt and keep proof of sending.",
      "If the debtor does not pay on time, contact a notary (enforcement based on an authentic document) or the court."
    ],
    "kontrola": [
      "The debt must be due – the payment deadline under the agreement, invoice or arrangement has passed.",
      "From the due date the debtor owes statutory default interest (ZOO); the rate is published by the Croatian National Bank every six months.",
      "Give a reasonable deadline for payment (e.g. 8 or 15 days) and state the exact IBAN.",
      "If you have an invoice or an extract from business books, you can apply to a notary for enforcement without a lawsuit."
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
          "**Creditor:** {{p_jmeno}}, OIB {{p_oib}}, {{p_adresa}}",
          "**Debtor:** {{k_jmeno}}, {{k_adresa}}",
          "I call on you to pay me the debt that is due in the amount of **{{castka}}** on the basis of: {{temelj}}. The debt fell due on {{dospijece}} and has not been paid to date.",
          "Please pay this amount no later than **{{rok}}** to the account IBAN {{iban}}.",
          "Please note that from the due date you also owe statutory default interest. If you do not pay the debt within this period, I will start collection proceedings through the court or a notary without further notice, and the costs of the proceedings will be borne by you."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

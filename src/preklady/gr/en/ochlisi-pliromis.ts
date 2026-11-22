/** English version of src/obsah/gr/ochlisi-pliromis.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-OCHLISI",
    "verze": "1.0"
  },
  "nazev": "Formal Payment Demand",
  "nazevA": "the formal payment demand",
  "katalog": {
    "popis": "Demand to the debtor with a payment deadline.",
    "slova": [
      "payment demand Greece",
      "formal demand letter Greece",
      "extrajudicial notice",
      "debt collection Greece",
      "exodiki ochlisi"
    ]
  },
  "landing": {
    "description": "Formal payment demand for Greece (εξώδικη όχληση): amount, basis, deadline and IBAN. The debtor goes into default (Art. 340 Civil Code). Free PDF and Word.",
    "perex": "When someone does not pay what they owe you. With the demand they go into default and owe interest.",
    "obsahPopis": "A short letter.",
    "obsah": [
      {
        "nazev": "Demand",
        "popis": "Debt, deadline, account and consequences."
      }
    ],
    "online": [
      "Amount in words in Greek added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone owes you money and is not paying"
    ],
    "nehodiSe": [
      "the debtor admits the debt – use an acknowledgement of debt or an instalment agreement"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "Registered letter with proof of receipt or service by a court bailiff."
      },
      {
        "nazev": "Next step",
        "popis": "If they do not pay, you can apply for an order for payment."
      }
    ],
    "faq": [
      {
        "q": "What does the demand change?",
        "a": "The debtor goes into default (Art. 340 Civil Code) and from then owes default interest (Art. 345). If the payment date was agreed, default occurs even without a demand."
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
    "title": "Formal Payment Demand Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the formal payment demand online – Greece, free PDF",
    "description": "Step-by-step guide in English for the formal payment demand under Greek law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stoixeia": {
        "nazev": "The demand"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – full name"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – full name or company name"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Amount owed (EUR)"
      },
      "splatnost": {
        "popis": "Overdue since"
      },
      "aitia": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. αμοιβή για εργασίες ανακαίνισης σύμφωνα με τη σύμβαση της 01/09/2026"
      },
      "lhuta": {
        "popis": "Payment deadline"
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
      ""
    ],
    "coDal": [
      "Send the demand by registered letter with proof of receipt or have it served by a court bailiff.",
      "Keep a copy and the proof of sending or service.",
      "If the debtor does not pay, you can apply for an order for payment if the claim is proven by a document."
    ],
    "kontrola": [
      "With the demand the debtor goes into default (Art. 340 Civil Code) and from then owes default interest (Art. 345 Civil Code). If the payment date had already been set, default occurs even without a demand.",
      "State exactly where the claim comes from (contract, invoice, loan) and the amount.",
      "Give a reasonable payment deadline, usually 7–15 days.",
      "Service by a court bailiff proves receipt with certainty; a registered letter with proof of receipt is a cheaper alternative."
    ]
  },
  "dokument": {
    "nazev": "Formal Payment Demand",
    "podnadpis": "demand to the debtor to pay the debt",
    "podpisy": {
      "vlevo": "The Creditor",
      "vpravo": ""
    },
    "clanky": [
      {
        "nadpis": "Formal demand",
        "odstavce": [
          "**From:** {{p_jmeno}}, resident at {{p_adresa}}",
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "You owe me the sum of **{{castka}}**, arising from: {{aitia}}. The debt has been overdue since {{splatnost}} and remains unpaid.",
          "I request that you pay the amount no later than {{lhuta}} to my account IBAN {{iban}}.",
          "Otherwise I will pursue my claim in court, with additional default interest and court costs at your expense. I reserve all my legal rights."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

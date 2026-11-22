/** English version of src/obsah/ee/maksenoue.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-MAKSENOUE",
    "verze": "1.0"
  },
  "nazev": "Payment Demand",
  "nazevA": "the payment demand",
  "katalog": {
    "popis": "A demand to the debtor with a payment deadline.",
    "slova": [
      "payment demand Estonia",
      "letter before action",
      "debt collection",
      "reminder to debtor",
      "maksenõue"
    ]
  },
  "landing": {
    "description": "Payment demand for Estonia (maksenõue): amount and basis of the debt, a new payment deadline and the option to claim late interest. Before going to court. Free PDF.",
    "perex": "When the debtor has not paid on time. The demand sets a final deadline before the expedited payment order procedure.",
    "obsahPopis": "A short demand.",
    "obsah": [
      {
        "nazev": "Creditor and debtor",
        "popis": "Who demands and from whom."
      },
      {
        "nazev": "Debt",
        "popis": "Amount, basis and missed deadline."
      },
      {
        "nazev": "New deadline",
        "popis": "When and where to pay."
      }
    ],
    "online": [
      "Amount in words in Estonian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone has not paid you on time",
      "you want to set a final deadline"
    ],
    "nehodiSe": [
      "the debtor agrees to pay in instalments – use the payment plan agreement"
    ],
    "po": [
      {
        "nazev": "Send it",
        "popis": "Send the demand by e-mail or registered letter and keep proof."
      },
      {
        "nazev": "Court",
        "popis": "If necessary, file an application in the expedited payment order procedure."
      }
    ],
    "faq": [
      {
        "q": "Can I claim late interest?",
        "a": "Yes, in the event of delay in performing a monetary obligation, the creditor may claim late interest."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the late-interest provisions of the Estonian Law of Obligations Act and the limitation provisions of the General Part of the Civil Code Act.",
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
    "title": "Payment Demand Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the payment demand online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the payment demand under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "andmed": {
        "nazev": "The demand"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – first name and surname"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – name or business name"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Amount of the debt (EUR)"
      },
      "tahtaeg_moodus": {
        "popis": "Payment deadline passed on"
      },
      "pohjus": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. fee for repair works under the works contract of 01.09.2026"
      },
      "uus_tahtaeg": {
        "popis": "Pay by"
      },
      "iban": {
        "popis": "Creditor’s IBAN",
        "placeholder": "EE38 …"
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
      "Send the demand by e-mail (preferably digitally signed) or by registered letter and keep proof of sending.",
      "If the debtor does not pay, you can file an application with the court in the expedited payment order procedure."
    ],
    "kontrola": [
      "State precisely what the claim arises from (agreement, invoice, loan) and its amount.",
      "Give a reasonable deadline for payment, usually 7–14 days.",
      "In the event of delay in performing a monetary obligation, late interest may be claimed (Law of Obligations Act § 113).",
      "Keep the limitation period in mind: the limitation period for a claim arising from a transaction is 3 years ([General Part of the Civil Code Act § 146](https://www.riigiteataja.ee/akt/106122010012?leiaKehtiv))."
    ]
  },
  "dokument": {
    "nazev": "Payment Demand",
    "podnadpis": "demand to the debtor to pay the debt by a deadline",
    "podpisy": {
      "vlevo": "Creditor",
      "vpravo": ""
    },
    "clanky": [
      {
        "nadpis": "Payment demand",
        "odstavce": [
          "**From:** {{p_jmeno}}, {{p_adresa}}",
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "You owe me **{{castka}}** (in words: {{castka_sonadega}}), arising from the following: {{pohjus}}. The payment deadline passed on {{tahtaeg_moodus}} and the debt is unpaid.",
          "Please pay the amount no later than {{uus_tahtaeg}} to my account IBAN {{iban}}.",
          "Otherwise I will turn to the court to recover the claim and will also claim late interest and reimbursement of the costs of proceedings."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

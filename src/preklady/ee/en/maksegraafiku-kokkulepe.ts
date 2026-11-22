/** English version of src/obsah/ee/maksegraafiku-kokkulepe.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-MAKSEGRAAFIK",
    "verze": "1.0"
  },
  "nazev": "Payment Plan Agreement",
  "nazevA": "the payment plan agreement",
  "katalog": {
    "popis": "Paying a debt in monthly instalments.",
    "slova": [
      "payment plan agreement Estonia",
      "debt in instalments",
      "repayment schedule",
      "maksegraafik"
    ]
  },
  "landing": {
    "description": "Payment plan agreement for Estonia (maksegraafiku kokkulepe): acknowledgement of the debt, monthly instalments, payment day and consequences of delay. Free PDF.",
    "perex": "When the debtor cannot pay the whole debt at once. The agreement acknowledges the debt and sets the instalments.",
    "obsahPopis": "Articles on the payment plan.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Creditor and debtor."
      },
      {
        "nazev": "Acknowledgement",
        "popis": "Amount and basis of the debt."
      },
      {
        "nazev": "Instalments",
        "popis": "Amount, number and payment day."
      },
      {
        "nazev": "Delay",
        "popis": "What happens if an instalment is unpaid."
      }
    ],
    "online": [
      "Amount in words in Estonian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "the debtor wants to pay the debt in instalments"
    ],
    "nehodiSe": [
      "the debtor does not respond – use the payment demand"
    ],
    "po": [
      {
        "nazev": "Reminder",
        "popis": "Mark the instalments in your calendar."
      },
      {
        "nazev": "Proof",
        "popis": "Keep the bank statements."
      }
    ],
    "faq": [
      {
        "q": "Does the agreement affect the limitation period?",
        "a": "Yes, in the agreement the debtor acknowledges the debt, which interrupts the limitation period – it starts to run again."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Estonian Law of Obligations Act and the limitation provisions of the General Part of the Civil Code Act.",
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
    "title": "Payment Plan Agreement Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the payment plan agreement online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the payment plan agreement under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "pooled": {
        "nazev": "Creditor and debtor"
      },
      "graafik": {
        "nazev": "Debt and instalments"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – name or business name"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – first name and surname"
      },
      "k_ik": {
        "popis": "Debtor’s personal identification code"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Total amount of the debt (EUR)"
      },
      "pohjus": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. unpaid purchase price under the vehicle sale agreement of 01.06.2026"
      },
      "osamakse": {
        "popis": "Monthly instalment (EUR)"
      },
      "arv": {
        "popis": "Number of instalments"
      },
      "paev": {
        "popis": "Instalment payable by day … of each month",
        "placeholder": "e.g. 15"
      },
      "esimene": {
        "popis": "First instalment"
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
      "",
      "The debtor confirms that the debt exists and how large it is.",
      "",
      "",
      ""
    ],
    "coDal": [
      "Sign the agreement in two copies or digitally.",
      "Mark the instalment dates in your calendar.",
      "Keep proof of the payments."
    ],
    "kontrola": [
      "In the agreement the debtor acknowledges the debt; acknowledgement interrupts the limitation period and it starts to run again ([General Part of the Civil Code Act § 158](https://www.riigiteataja.ee/akt/106122010012?leiaKehtiv)).",
      "State what happens if an instalment is unpaid (e.g. the whole balance becoming due).",
      "Pay by bank transfer – the statement proves each instalment.",
      "Check the other party’s identity document and copy the name and personal identification code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Payment Plan Agreement",
    "podnadpis": "acknowledgement of a debt and payment in instalments",
    "podpisy": {
      "vlevo": "Creditor",
      "vpravo": "Debtor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Creditor:** {{p_jmeno}}, {{p_adresa}}",
          "**Debtor:** {{k_jmeno}}, personal identification code {{k_ik}}, address {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Acknowledgement of the debt",
        "odstavce": [
          "The Debtor acknowledges that on the day the agreement is signed they owe the Creditor **{{castka}}** (in words: {{castka_sonadega}}), arising from the following: {{pohjus}}."
        ]
      },
      {
        "nadpis": "Payment in instalments",
        "odstavce": [
          "The Creditor agrees that the Debtor pays the debt in {{arv}} monthly instalments of **{{osamakse}}** (in words: {{osamakse_sonadega}}); the last instalment equals the balance of the debt.",
          "The first instalment is paid on {{esimene}} and each following one no later than day {{paev}} of each month to the Creditor’s account IBAN {{iban}}.",
          "The Debtor may also pay the debt or part of it early."
        ]
      },
      {
        "nadpis": "Delay in payment",
        "odstavce": [
          "If the Debtor is late with two instalments, the Creditor may by written notice demand immediate payment of the whole balance of the debt together with statutory late interest."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by the agreement are subject to the Law of Obligations Act. The agreement is drawn up in two equivalent copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

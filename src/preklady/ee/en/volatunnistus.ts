/** English version of src/obsah/ee/volatunnistus.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-VOLATUNNISTUS",
    "verze": "1.0"
  },
  "nazev": "Acknowledgement of Debt",
  "nazevA": "the acknowledgement of debt",
  "katalog": {
    "popis": "The debtor acknowledges the debt in writing.",
    "slova": [
      "acknowledgement of debt Estonia",
      "debt acknowledgement",
      "limitation period",
      "võla tunnustamine"
    ]
  },
  "landing": {
    "description": "Acknowledgement of debt for Estonia (võla tunnustamine): the debtor confirms the amount and basis of the debt in writing, method and date of payment. Free PDF.",
    "perex": "When someone owes you money and acknowledges it. A written acknowledgement interrupts the limitation period and is strong evidence.",
    "obsahPopis": "A short confirmation.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Creditor and debtor."
      },
      {
        "nazev": "Debt",
        "popis": "Amount in words and basis of the debt."
      },
      {
        "nazev": "Payment",
        "popis": "Method and date."
      }
    ],
    "online": [
      "Amount in words in Estonian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone owes you and acknowledges the debt",
      "you want to stop the limitation period"
    ],
    "nehodiSe": [
      "you want payment in instalments – use the payment plan agreement"
    ],
    "po": [
      {
        "nazev": "Keep it",
        "popis": "The creditor keeps the signed original."
      }
    ],
    "faq": [
      {
        "q": "What does an acknowledgement of debt achieve?",
        "a": "Acknowledging the debt interrupts the limitation period – it starts to run again. A written acknowledgement is also strong evidence in court."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the limitation provisions of the Estonian General Part of the Civil Code Act.",
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
    "title": "Acknowledgement of Debt Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the acknowledgement of debt online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the acknowledgement of debt under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "pooled": {
        "nazev": "Debtor and creditor"
      },
      "volg": {
        "nazev": "The debt"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "Debtor – first name and surname",
        "placeholder": "e.g. Jaan Kask"
      },
      "k_ik": {
        "popis": "Personal identification code"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "p_jmeno": {
        "popis": "Creditor – first name and surname",
        "placeholder": "e.g. Mari Tamm"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "castka": {
        "popis": "Amount of the debt (EUR)"
      },
      "pohjus": {
        "popis": "What the debt arises from",
        "placeholder": "e.g. loan of 10.03.2025"
      },
      "maksmine": {
        "popis": "Payment",
        "moznosti": {
          "korraga": "at once, by a fixed date",
          "osadena": "in monthly instalments"
        }
      },
      "tahtaeg": {
        "popis": "Pay by"
      },
      "osamakse": {
        "popis": "Monthly instalment (EUR)"
      },
      "esimene": {
        "popis": "First instalment"
      },
      "iban": {
        "popis": "Creditor’s IBAN",
        "placeholder": "EE38 2200 2210 2014 5685"
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
      ""
    ],
    "coDal": [
      "The creditor keeps the signed original.",
      "Mark the payment date in your calendar."
    ],
    "kontrola": [
      "Acknowledgement of the debt interrupts the limitation period and it starts to run again ([General Part of the Civil Code Act § 158](https://www.riigiteataja.ee/akt/106122010012?leiaKehtiv)). The limitation period for a claim arising from a transaction is 3 years.",
      "State precisely what the debt arises from (loan, price, rent) and its amount.",
      "Without the debtor’s signature the document does not prove acknowledgement.",
      "Check the other party’s identity document and copy the name and personal identification code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Acknowledgement of Debt",
    "podnadpis": "the debtor’s written confirmation of the existence and amount of the debt",
    "podpisy": {
      "vlevo": "Debtor",
      "vpravo": "Creditor (optional)"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Debtor:** {{k_jmeno}}, personal identification code {{k_ik}}, address {{k_adresa}}",
          "**Creditor:** {{p_jmeno}}, address {{p_adresa}}"
        ]
      },
      {
        "nadpis": "Acknowledgement of the debt",
        "odstavce": [
          "The Debtor acknowledges that they owe the Creditor **{{castka}}** (in words: {{castka_sonadega}}), arising from the following: {{pohjus}}.",
          "The Debtor confirms that the debt exists in this amount and on this basis and that they have no objections to it."
        ]
      },
      {
        "nadpis": "Payment",
        "odstavce": [
          {
            "uvodVzor": "Method of payment (tick one option):",
            "moznosti": {
              "korraga": "The Debtor pays the full amount no later than {{tahtaeg}}.",
              "osadena": "The Debtor pays the debt in monthly instalments of {{osamakse}}, the first on {{esimene}} and each following one on the same day of each month."
            }
          },
          "Payments are made to the Creditor’s account IBAN {{iban}}. If the Debtor is late with two instalments, the whole balance becomes due immediately."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "The document is drawn up in two copies, of which the Creditor received the original."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

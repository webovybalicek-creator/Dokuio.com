/** English version of src/obsah/lv/parada-atzisana.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-PARADA-ATZISANA",
    "verze": "1.0"
  },
  "nazev": "Acknowledgement of Debt",
  "nazevA": "the acknowledgement of debt",
  "katalog": {
    "popis": "The debtor acknowledges the debt in writing.",
    "slova": [
      "acknowledgement of debt Latvia",
      "IOU Latvia",
      "debt confirmation",
      "limitation period",
      "parāda atzīšana"
    ]
  },
  "landing": {
    "description": "Acknowledgement of debt for Latvia (parāda atzīšana): amount in words, basis of the debt, payment date or instalments. It interrupts the limitation period. Free PDF.",
    "perex": "The debtor confirms in writing that they owe money, how much and why. Acknowledgement interrupts the limitation period, which starts to run again.",
    "obsahPopis": "Articles on the acknowledgement.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Debtor and creditor."
      },
      {
        "nazev": "Acknowledgement",
        "popis": "Amount and basis."
      },
      {
        "nazev": "Payment",
        "popis": "At once or in instalments."
      }
    ],
    "online": [
      "Amount in words in Latvian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone owes you money and you want it in writing",
      "the limitation period is approaching"
    ],
    "nehodiSe": [
      "you want to agree a detailed payment plan – use the repayment agreement"
    ],
    "po": [
      {
        "nazev": "Original",
        "popis": "The creditor keeps the signed original."
      }
    ],
    "faq": [
      {
        "q": "What does acknowledgement of debt mean?",
        "a": "The debtor confirms the existence and amount of the debt. Under the Civil Law, acknowledgement of a claim interrupts the limitation period."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Latvian Civil Law on limitation.",
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
    "title": "Acknowledgement of Debt Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the acknowledgement of debt online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the acknowledgement of debt under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "puses": {
        "nazev": "Debtor and creditor"
      },
      "parads": {
        "nazev": "The debt"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "Debtor – first name and surname",
        "placeholder": "e.g. Jānis Bērziņš"
      },
      "k_ik": {
        "popis": "Personal code"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "p_jmeno": {
        "popis": "Creditor – first name and surname",
        "placeholder": "e.g. Anna Kalniņa"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "castka": {
        "popis": "Amount of the debt (EUR)"
      },
      "pamats": {
        "popis": "What the debt arises from",
        "placeholder": "e.g. loan of 10.03.2025"
      },
      "samaksa": {
        "popis": "Payment",
        "moznosti": {
          "vienreiz": "at once by a fixed date",
          "dalas": "in monthly instalments"
        }
      },
      "termins": {
        "popis": "Pay by"
      },
      "maksajums": {
        "popis": "Monthly instalment (EUR)"
      },
      "pirmais": {
        "popis": "First instalment"
      },
      "iban": {
        "popis": "Creditor’s IBAN",
        "placeholder": "LV80 BANK 0000 4351 9500 1"
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
      "Acknowledgement of the debt interrupts the limitation period, which starts to run again ([Civil Law, Article 1906](https://likumi.lv/ta/id/225418-civillikums)). The general limitation period is 10 years.",
      "State exactly what the debt arises from (loan, price, rent) and its amount.",
      "Without the debtor’s signature, the document does not prove acknowledgement.",
      "Check the other party’s identity document and copy the name, surname and personal code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Acknowledgement of Debt",
    "podnadpis": "written confirmation by the debtor of the existence and amount of a debt",
    "podpisy": {
      "vlevo": "Debtor",
      "vpravo": "Creditor (optional)"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Debtor:** {{k_jmeno}}, personal code {{k_ik}}, address {{k_adresa}}",
          "**Creditor:** {{p_jmeno}}, address {{p_adresa}}"
        ]
      },
      {
        "nadpis": "Acknowledgement of the debt",
        "odstavce": [
          "The Debtor acknowledges owing the Creditor **{{castka}}** (in words: {{castka_vardiem}}), arising from: {{pamats}}.",
          "The Debtor confirms that the debt exists in this amount and on this basis and that they have no objections to it."
        ]
      },
      {
        "nadpis": "Payment",
        "odstavce": [
          {
            "uvodVzor": "Method of payment (tick one option):",
            "moznosti": {
              "vienreiz": "The Debtor pays the whole amount no later than {{termins}}.",
              "dalas": "The Debtor pays the debt in monthly instalments of {{maksajums}}, the first on {{pirmais}} and each following one on the same day of each month."
            }
          },
          "Payments are made to the Creditor’s account IBAN {{iban}}. If the Debtor is late with two instalments, the whole balance becomes payable immediately."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "The document is drawn up in two copies; the Creditor has received the original."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

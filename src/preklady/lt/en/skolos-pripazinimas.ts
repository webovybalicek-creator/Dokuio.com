/** English version of src/obsah/lt/skolos-pripazinimas.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-SKOLOS-PRIPAZINIMAS",
    "verze": "1.0"
  },
  "nazev": "Acknowledgement of Debt",
  "nazevA": "the acknowledgement of debt",
  "katalog": {
    "popis": "The debtor confirms the debt in writing.",
    "slova": [
      "acknowledgement of debt Lithuania",
      "debt confirmation",
      "IOU Lithuania",
      "skolos pripažinimas"
    ]
  },
  "landing": {
    "description": "Acknowledgement of debt for Lithuania (skolos pripažinimas): amount in words, basis and payment in one go or in instalments. Interrupts the limitation period. Free PDF.",
    "perex": "When the debtor confirms in writing that the debt exists and how much it is. The acknowledgement interrupts the limitation period, which then starts again.",
    "obsahPopis": "Articles of the acknowledgement.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Debtor and creditor."
      },
      {
        "nazev": "Acknowledgement",
        "popis": "Amount and basis of the debt."
      },
      {
        "nazev": "Payment",
        "popis": "In one go or in instalments."
      }
    ],
    "online": [
      "Amount in words in Lithuanian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "someone owes you money and agrees to confirm it in writing",
      "the limitation period is nearing its end"
    ],
    "nehodiSe": [
      "the debtor disputes the debt – send a payment demand"
    ],
    "po": [
      {
        "nazev": "Original",
        "popis": "The creditor keeps the signed original."
      }
    ],
    "faq": [
      {
        "q": "What does acknowledging a debt mean?",
        "a": "Actions of the debtor showing that they acknowledge the debt interrupt the limitation period (Civil Code, Article 1.130). The general period is 10 years, for interest 5 years."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Civil Code of the Republic of Lithuania.",
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
    "title": "Acknowledgement of Debt Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the acknowledgement of debt online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the acknowledgement of debt under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "salys": {
        "nazev": "Debtor and creditor"
      },
      "skola": {
        "nazev": "The debt"
      }
    },
    "pole": {
      "k_jmeno": {
        "popis": "Debtor – first name and surname",
        "placeholder": "e.g. Tomas Petrauskas"
      },
      "k_ik": {
        "popis": "Personal code"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "p_jmeno": {
        "popis": "Creditor – first name and surname",
        "placeholder": "e.g. Rūta Kazlauskienė"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "castka": {
        "popis": "Amount of the debt (EUR)"
      },
      "pamats": {
        "popis": "What the debt arises from",
        "placeholder": "e.g. loan of 2025-03-10"
      },
      "samaksa": {
        "popis": "Payment",
        "moznosti": {
          "vienreiz": "in one go by a set date",
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
        "placeholder": "LT12 1000 0111 0100 1000"
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
      "Actions of the debtor showing that they acknowledge the debt interrupt the limitation period, which starts to run again ([Civil Code, Art. 1.130](https://www.e-tar.lt/portal/lt/legalAct/TAR.8A39C83848CB/asr)). The general period is 10 years, for interest and periodic payments 5 years (Art. 1.125).",
      "State precisely what the debt arises from (loan, price, rent) and its amount.",
      "Without the debtor’s signature the document does not prove the acknowledgement.",
      "Check the other party’s identity document and copy the name, surname and personal code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Acknowledgement of Debt",
    "podnadpis": "the debtor’s written confirmation of the debt and its amount",
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
          "The Debtor acknowledges that they owe the Creditor **{{castka}}** (in words: {{castka_vardiem}}), arising from: {{pamats}}.",
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
          "Payments are made to the Creditor’s account IBAN {{iban}}. If the Debtor misses two instalments, the whole remaining amount becomes payable immediately."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "The document is drawn up in two copies, of which the Creditor has received the original."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

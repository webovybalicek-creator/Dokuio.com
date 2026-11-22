/** English version of src/obsah/ee/lepingu-ulesutlemine.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-ULESUTLEMINE",
    "verze": "1.0"
  },
  "nazev": "Notice of Termination of a Contract",
  "nazevA": "the notice of termination of a contract",
  "katalog": {
    "popis": "Phone, internet, insurance, gym.",
    "slova": [
      "contract termination Estonia",
      "cancel a subscription",
      "cancel gym membership",
      "cancel internet contract",
      "lepingu ülesütlemine"
    ]
  },
  "landing": {
    "description": "Notice of termination of a contract for Estonia (lepingu ülesütlemine): ending a service, membership or subscription contract, end date and confirmation. Free PDF.",
    "perex": "When you want to end a service, membership or subscription contract – internet, phone, gym, magazine.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Client and provider",
        "popis": "Who terminates and to whom."
      },
      {
        "nazev": "Contract",
        "popis": "Contract or customer number."
      },
      {
        "nazev": "End",
        "popis": "Date and confirmation."
      }
    ],
    "online": [
      "Reminder of the end date",
      "PDF and Word"
    ],
    "hodiSe": [
      "you want to end a service"
    ],
    "nehodiSe": [
      "you bought online less than 14 days ago – use the withdrawal form"
    ],
    "po": [
      {
        "nazev": "Confirmation",
        "popis": "Ask for confirmation of the termination."
      },
      {
        "nazev": "Direct debits",
        "popis": "End them after the last invoice."
      }
    ],
    "faq": [
      {
        "q": "Can a fixed-term contract be ended early?",
        "a": "It depends on the contract terms; early termination may lead to a contractual penalty or repayment of a discount."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Estonian Law of Obligations Act.",
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
    "title": "Notice of Termination of a Contract Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the notice of termination of a contract online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the notice of termination of a contract under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "notice",
      "g": "notice",
      "a": "notice",
      "l": "notice"
    },
    "kroky": {
      "andmed": {
        "nazev": "Client and contract"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "First name and surname"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "p_kontakt": {
        "popis": "E-mail or phone"
      },
      "k_jmeno": {
        "popis": "Service provider",
        "placeholder": "e.g. Spordiklubi OÜ"
      },
      "k_adresa": {
        "popis": "Service provider’s address"
      },
      "leping": {
        "popis": "Contract / customer number",
        "placeholder": "e.g. membership contract no. 12345 since 01.02.2025"
      },
      "lopp": {
        "popis": "The contract ends on",
        "napoveda": "Take into account the notice period agreed in the contract."
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
      "Send the notice by e-mail (preferably digitally signed), via self-service or by registered letter.",
      "Ask for confirmation of the termination and of the end date of the contract.",
      "Cancel direct debits or e-invoice standing orders only after paying the last invoice."
    ],
    "kontrola": [
      "Check the contract or standard terms for the notice period and any fixed-term commitment.",
      "Ending a fixed-term contract early may lead to a contractual penalty or repayment of a discount – read the terms.",
      "Keep proof that and when the notice was delivered.",
      "If the contract was concluded online or away from business premises less than 14 days ago, use the withdrawal form instead."
    ],
    "pripominky": {
      "Lepingu lõppemine": {
        "nazev": "End of the contract",
        "popis": "Check that no more invoices are issued after this date."
      }
    }
  },
  "dokument": {
    "nazev": "Notice of Termination of a Contract",
    "podnadpis": "ending a service, membership or subscription contract",
    "podpisy": {
      "vlevo": "Client",
      "vpravo": ""
    },
    "clanky": [
      {
        "nadpis": "Notice of termination of a contract",
        "odstavce": [
          "**From:** {{p_jmeno}}, {{p_adresa}}, {{p_kontakt}}",
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby terminate the contract: {{leping}}.",
          "Please end the contract on {{lopp}} or, if the notice period agreed in the contract ends later, at the end of that period.",
          "Please confirm receipt of the termination and the end date of the contract in a form that can be reproduced in writing. From the end date, please do not issue any further invoices to me."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

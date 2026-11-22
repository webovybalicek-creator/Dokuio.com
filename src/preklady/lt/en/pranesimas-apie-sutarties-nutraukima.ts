/** English version of src/obsah/lt/pranesimas-apie-sutarties-nutraukima.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-NUTRAUKIMAS",
    "verze": "1.0"
  },
  "nazev": "Notice of Termination of a Contract",
  "nazevA": "the notice of termination of a contract",
  "katalog": {
    "popis": "Phone, internet, insurance, gym or subscription.",
    "slova": [
      "contract termination letter Lithuania",
      "cancel subscription",
      "cancel gym membership",
      "pranešimas apie sutarties nutraukimą"
    ]
  },
  "landing": {
    "description": "Notice of termination of a service contract for Lithuania (pranešimas apie sutarties nutraukimą): phone, internet, insurance, gym or subscription. Free PDF and Word.",
    "perex": "When you want to end a service, subscription or membership contract. The notice states the contract, the end date and a request for confirmation.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Customer, provider, contract and end date."
      }
    ],
    "online": [
      "End-date reminder",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are ending a phone, internet, insurance or gym contract"
    ],
    "nehodiSe": [
      "you concluded the contract online less than 14 days ago – use the withdrawal form"
    ],
    "po": [
      {
        "nazev": "Confirmation",
        "popis": "Ask for confirmation of the end date."
      }
    ],
    "faq": [
      {
        "q": "What is the notice period?",
        "a": "It is set by your contract or the general terms. If a fixed-term contract is ended early, a penalty may apply."
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
    "title": "Notice of Termination of a Contract Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the notice of termination of a contract online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the notice of termination of a contract under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "duomenys": {
        "nazev": "Customer and contract"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "First name and surname"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "p_kontakts": {
        "popis": "E-mail or phone"
      },
      "k_jmeno": {
        "popis": "Service provider",
        "placeholder": "e.g. UAB „Sporto klubas“"
      },
      "k_adresa": {
        "popis": "Service provider’s address"
      },
      "ligums": {
        "popis": "Contract / customer number",
        "placeholder": "e.g. membership contract No. 12345, 2025-02-01"
      },
      "beigas": {
        "popis": "The contract ends on",
        "napoveda": "Take into account the notice period set in the contract."
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
      "Send the notice by e-mail, through the self-service portal or by registered letter.",
      "Ask for confirmation of the notice and of the end date of the contract.",
      "Cancel automatic payments only after paying the last invoice."
    ],
    "kontrola": [
      "Check the notice period and any minimum contract term in the contract or the general terms.",
      "Ending a fixed-term contract early may mean a penalty or repayment of a discount – read the terms.",
      "Keep proof that the notice was delivered and when.",
      "If the contract was concluded online or off-premises less than 14 days ago, it is better to use the right of withdrawal."
    ],
    "pripominky": {
      "Sutarties pabaiga": {
        "nazev": "End of the contract",
        "popis": "Check that no more invoices are issued after this date."
      }
    }
  },
  "dokument": {
    "nazev": "Notice of Termination of a Contract",
    "podnadpis": "termination of a service, subscription or membership contract",
    "podpisy": {
      "vlevo": "Customer",
      "vpravo": ""
    },
    "clanky": [
      {
        "nadpis": "Notice of termination of a contract",
        "odstavce": [
          "**From:** {{p_jmeno}}, {{p_adresa}}, {{p_kontakts}}",
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "I terminate the contract: {{ligums}}.",
          "Please terminate the contract on {{beigas}} or, if the notice period set in the contract ends later, at the end of that period.",
          "Please confirm in writing receipt of this notice and the end date of the contract. Please do not issue any further invoices to me after the end date."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

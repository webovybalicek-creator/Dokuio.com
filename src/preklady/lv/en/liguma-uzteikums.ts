/** English version of src/obsah/lv/liguma-uzteikums.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-UZTEIKUMS",
    "verze": "1.0"
  },
  "nazev": "Notice of Termination of a Contract",
  "nazevA": "the notice of termination of a contract",
  "katalog": {
    "popis": "Phone, internet, insurance, gym.",
    "slova": [
      "contract termination Latvia",
      "cancel a subscription",
      "cancel gym membership",
      "līguma uzteikums"
    ]
  },
  "landing": {
    "description": "Notice of termination of a contract for Latvia (līguma uzteikums): ending a service, subscription or membership contract with the notice period and a request to confirm.",
    "perex": "For ending a phone, internet, insurance or gym contract according to the contract terms.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Client, provider, contract, end date."
      }
    ],
    "online": [
      "Reminder of the end date",
      "PDF and Word"
    ],
    "hodiSe": [
      "you want to end a service contract"
    ],
    "nehodiSe": [
      "you concluded the contract online less than 14 days ago – use the withdrawal notice"
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
        "a": "It is set by the contract or the general terms – check them and any minimum contract term."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Latvian Civil Law.",
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
    "title": "Notice of Termination of a Contract Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the notice of termination of a contract online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the notice of termination of a contract under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "dati": {
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
      "p_kontakts": {
        "popis": "E-mail or phone"
      },
      "k_jmeno": {
        "popis": "Service provider",
        "placeholder": "e.g. Sporta klubs SIA"
      },
      "k_adresa": {
        "popis": "Service provider’s address"
      },
      "ligums": {
        "popis": "Contract / customer number",
        "placeholder": "e.g. membership contract no. 12345 of 01.02.2025"
      },
      "beigas": {
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
      "Send the notice by e-mail (preferably with eParaksts), via the self-service portal or by registered letter.",
      "Ask for confirmation of the termination and the end date.",
      "Cancel direct debits only after paying the last invoice."
    ],
    "kontrola": [
      "Check the notice period and any minimum contract term in the contract or general terms.",
      "Ending a fixed-term contract early may lead to a contractual penalty or repayment of a discount – read the terms.",
      "Keep proof that and when the notice was delivered.",
      "If the contract was concluded online or off-premises less than 14 days ago, use the right of withdrawal instead."
    ],
    "pripominky": {
      "Līguma izbeigšanās": {
        "nazev": "End of the contract",
        "popis": "Check that no more invoices are issued after this date."
      }
    }
  },
  "dokument": {
    "nazev": "Notice of Termination of a Contract",
    "podnadpis": "ending a service, subscription or membership contract",
    "podpisy": {
      "vlevo": "Client",
      "vpravo": ""
    },
    "clanky": [
      {
        "nadpis": "Notice of termination",
        "odstavce": [
          "**From:** {{p_jmeno}}, {{p_adresa}}, {{p_kontakts}}",
          "**To:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby terminate the contract: {{ligums}}.",
          "Please end the contract on {{beigas}} or, if the notice period agreed in the contract ends later, at the end of that period.",
          "Please confirm in writing receipt of the notice and the end date of the contract. After the end date, please do not issue any further invoices to me."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

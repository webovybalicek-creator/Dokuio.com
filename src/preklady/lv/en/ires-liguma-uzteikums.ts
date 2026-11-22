/** English version of src/obsah/lv/ires-liguma-uzteikums.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-IRE-UZTEIKUMS",
    "verze": "1.0"
  },
  "nazev": "Tenant’s Notice of Termination",
  "nazevA": "the tenant’s notice of termination",
  "katalog": {
    "popis": "The tenant withdraws from the lease.",
    "slova": [
      "lease termination Latvia",
      "tenant notice",
      "end tenancy Latvia",
      "īres līguma uzteikums"
    ]
  },
  "landing": {
    "description": "Tenant’s notice of termination for Latvia (īres līguma uzteikums): withdrawal from a residential lease with written notice at least one month in advance. Free PDF.",
    "perex": "For a tenant who wants to end the lease. The law allows withdrawal with written notice to the landlord at least one month in advance.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Agreement, end date, security deposit."
      }
    ],
    "online": [
      "Reminder of the one-month period",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are a tenant and want to move out"
    ],
    "nehodiSe": [
      "you want to agree on an earlier end – use the termination agreement"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "Send the notice in writing and keep proof."
      },
      {
        "nazev": "Report",
        "popis": "Draw up a report on return."
      }
    ],
    "faq": [
      {
        "q": "What is the tenant’s notice period?",
        "a": "At least one month if the lease term does not exceed 10 years. A longer period may be agreed for longer leases."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Latvian Residential Tenancy Law.",
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
    "title": "Tenant’s Notice of Termination Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the tenant’s notice of termination online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the tenant’s notice of termination under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
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
        "nazev": "The notice"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Landlord – first name and surname"
      },
      "p_adresa": {
        "popis": "Landlord’s address"
      },
      "k_jmeno": {
        "popis": "Tenant – first name and surname"
      },
      "byt": {
        "popis": "Address of the dwelling"
      },
      "liguma_datums": {
        "popis": "Date of the lease agreement"
      },
      "beigas": {
        "popis": "The agreement ends on",
        "napoveda": "At least one month after the landlord receives the notice."
      },
      "iban": {
        "popis": "IBAN for return of the deposit",
        "placeholder": "LV80 BANK 0000 4351 9500 1"
      },
      "k_adresa": {
        "popis": "Tenant’s contact address"
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
      "Send the notice in writing – by registered letter or by e-mail with eParaksts – and keep proof of sending.",
      "Agree on the day for handing over the keys and draw up a handover report.",
      "Report the meter readings and end contracts in your name (electricity, internet)."
    ],
    "kontrola": [
      "The tenant may unilaterally withdraw from the lease by giving the landlord written notice at least one month in advance ([Residential Tenancy Law, Articles 20 and 27](https://likumi.lv/ta/id/322216-dzivojamo-telpu-ires-likums)).",
      "If the lease term is longer than 10 years, the agreement may provide for a longer notice period – check your agreement.",
      "The security deposit is not automatically set off against the last month’s rent – agree on it in writing.",
      "A faster and safer solution is often an agreement to end the lease."
    ],
    "pripominky": {
      "Agrākā līguma izbeigšanās diena (1 mēnesis)": {
        "nazev": "Earliest end of the agreement (1 month)",
        "popis": "If the landlord receives the notice on this day; check whether the agreement provides for a longer period."
      }
    }
  },
  "dokument": {
    "nazev": "Notice of Withdrawal from a Residential Lease",
    "podnadpis": "tenant’s notice of withdrawal from a residential lease",
    "podpisy": {
      "vlevo": "Tenant",
      "vpravo": "Received (landlord, optional)"
    },
    "clanky": [
      {
        "nadpis": "Notice of withdrawal from the lease",
        "odstavce": [
          "**To:** {{p_jmeno}}, {{p_adresa}}",
          "Under Articles 20 and 27 of the Residential Tenancy Law, I give notice that I withdraw from the residential lease agreement of {{liguma_datums}} for the dwelling at {{byt}}.",
          "The agreement ends on {{beigas}}. By that day I will vacate the dwelling, hand over the keys and propose drawing up a handover report.",
          "Please return the security deposit, less any justified claims, to the account IBAN {{iban}}.",
          "**Tenant:** {{k_jmeno}}, {{k_adresa}}"
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

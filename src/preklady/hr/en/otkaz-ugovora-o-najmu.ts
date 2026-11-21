/** English version of src/obsah/hr/otkaz-ugovora-o-najmu.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-OTKAZ-NAJMA",
    "verze": "1.0"
  },
  "nazev": "Notice of Lease Termination",
  "nazevA": "the notice of lease termination",
  "katalog": {
    "popis": "Notice by the tenant with the notice period.",
    "slova": [
      "notice of lease termination",
      "end tenancy Croatia",
      "moving out",
      "notice period",
      "otkaz ugovora o najmu"
    ]
  },
  "landing": {
    "title": "Notice of Lease Termination Croatia {rok} – free PDF template",
    "description": "Tenant’s notice of termination of a residential lease in Croatia (otkaz ugovora o najmu): three months before moving out, handover date, deposit refund. Free PDF.",
    "perex": "Moving out? You terminate an indefinite lease at least three months before moving out.",
    "obsahPopis": "A short written notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Lease, moving-out date, deposit refund."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "you are the tenant and are moving out"
    ],
    "nehodiSe": [
      "you are the landlord – a notice must have a statutory reason and be reasoned"
    ],
    "po": [
      {
        "nazev": "Delivering the notice",
        "popis": "With a signature or by registered post."
      },
      {
        "nazev": "Handover",
        "popis": "Report with meter readings."
      }
    ],
    "faq": [
      {
        "q": "How far in advance must I give notice?",
        "a": "At least three months before the day of moving out for an indefinite lease."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Housing Lease Act (Zakon o najmu stanova).",
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
    "souvisejiciPopis": "More documents, also free."
  },
  "vytvorit": {
    "title": "Fill in the notice of lease termination online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the notice of lease termination under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podaci": {
        "nazev": "Lease and notice"
      }
    },
    "pole": {
      "jmeno": {
        "popis": "Tenant – full name"
      },
      "adresa": {
        "popis": "Address of the flat"
      },
      "pronajimatel": {
        "popis": "Landlord – name and address"
      },
      "smlouva": {
        "popis": "Date of the lease agreement"
      },
      "iseljenje": {
        "popis": "Moving-out date",
        "napoveda": "At least three months after delivering the notice."
      },
      "iban": {
        "popis": "IBAN for the deposit refund"
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
      "Hand the notice to the landlord against a signature confirming receipt or send it by registered post.",
      "Arrange a date for handing back the flat and draw up a report with meter readings."
    ],
    "kontrola": [
      "A tenant may terminate an indefinite lease but must notify the landlord at least three months before the day of moving out.",
      "For a fixed-term lease, check what the agreement says about early termination – or agree with the landlord on ending it by mutual consent.",
      "Keep proof of delivering the notice (the landlord’s signature or the registered post receipt)."
    ]
  },
  "dokument": {
    "nazev": "Notice of Termination of a Residential Lease",
    "podnadpis": "notice given by the tenant",
    "podpisy": {
      "vlevo": "tenant",
      "vpravo": "received by the landlord"
    },
    "clanky": [
      {
        "nadpis": "Notice",
        "odstavce": [
          "**To:** {{pronajimatel}}",
          "I, **{{jmeno}}**, tenant of the flat at {{adresa}} under the lease agreement of {{smlouva}}, hereby terminate the lease agreement.",
          "I will vacate and hand back the flat on {{iseljenje}}.",
          "Please refund the deposit to the account IBAN {{iban}} after the flat has been handed back."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

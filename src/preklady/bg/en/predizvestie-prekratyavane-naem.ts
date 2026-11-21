/** English version of src/obsah/bg/predizvestie-prekratyavane-naem.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-PREDIZVESTIE-NAEM",
    "verze": "1.0"
  },
  "nazev": "Notice to Terminate a Lease",
  "nazevA": "the notice to terminate a lease",
  "katalog": {
    "popis": "The tenant terminates the lease with notice.",
    "slova": [
      "notice to terminate lease Bulgaria",
      "end tenancy",
      "tenant notice",
      "one month notice",
      "predizvestie naem"
    ]
  },
  "landing": {
    "description": "Notice to terminate a lease by the tenant in Bulgaria (предизвестие): notice period, move-out date and return of the deposit. Free PDF and Word.",
    "perex": "When you as a tenant want to end the lease. For an indefinite lease the notice is one month unless agreed otherwise.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Tenant, landlord, agreement, period and deposit."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "you are ending a lease as a tenant"
    ],
    "nehodiSe": [
      "you want to end it sooner by mutual agreement – use the termination agreement"
    ],
    "po": [
      {
        "nazev": "Delivery",
        "popis": "Deliver against signature or by registered letter."
      }
    ],
    "faq": [
      {
        "q": "How long is the notice?",
        "a": "For a lease of indefinite term – one month unless the agreement says otherwise (Art. 238 Obligations and Contracts Act)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Obligations and Contracts Act.",
    "title": "Notice to Terminate a Lease Bulgaria {rok} – free PDF template",
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
    "title": "Fill in the notice to terminate a lease online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the notice to terminate a lease under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "danni": {
        "nazev": "The notice"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Tenant – full name"
      },
      "p_adresa": {
        "popis": "Address (the rented home)"
      },
      "k_jmeno": {
        "popis": "Landlord – full name"
      },
      "k_adresa": {
        "popis": "Landlord’s address"
      },
      "dogovor_ot": {
        "popis": "Lease agreement dated"
      },
      "predizvestie": {
        "popis": "Notice period",
        "placeholder": "e.g. 1"
      },
      "osvobozhdavane": {
        "popis": "Expected move-out date"
      },
      "iban": {
        "popis": "IBAN for the return of the deposit",
        "placeholder": "BG80 …"
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
      "Deliver the notice against signature or send it by registered letter with acknowledgement of receipt.",
      "On moving out, sign a report with the meter readings."
    ],
    "kontrola": [
      "For a lease of indefinite term, the notice is one month unless the agreement provides otherwise (Art. 238 Obligations and Contracts Act). It runs from the day the landlord receives the notice.",
      "For a fixed-term agreement, check whether it allows early termination; otherwise try a termination agreement.",
      "Agree the day of handing over the keys and the return of the deposit."
    ]
  },
  "dokument": {
    "nazev": "Notice to Terminate a Lease Agreement",
    "podnadpis": "unilateral termination by the tenant with notice",
    "podpisy": {
      "vlevo": "Tenant",
      "vpravo": "Received (landlord, date)"
    },
    "clanky": [
      {
        "nadpis": "Notice",
        "odstavce": [
          "**Tenant:** {{p_jmeno}}, {{p_adresa}}",
          "**Landlord:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby terminate the lease agreement dated {{dogovor_ot}} for the home at {{p_adresa}} with notice of {{predizvestie}} month(s), running from receipt of this notice.",
          "I will vacate and hand back the home on {{osvobozhdavane}}. Please return the deposit to account IBAN {{iban}}, retaining only any amounts established on handover."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

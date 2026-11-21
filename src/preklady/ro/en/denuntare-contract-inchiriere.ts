/** English version of src/obsah/ro/denuntare-contract-inchiriere.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-DENUNTARE-INCHIRIERE",
    "verze": "1.0"
  },
  "nazev": "Tenant’s Notice of Termination",
  "nazevA": "the tenant’s notice of termination",
  "katalog": {
    "popis": "The tenant ends the lease with notice.",
    "slova": [
      "lease termination notice Romania",
      "tenant notice",
      "notice period",
      "return of deposit",
      "denuntare contract inchiriere"
    ]
  },
  "landing": {
    "description": "Tenant’s notice terminating a lease in Romania (denunțarea contractului de închiriere): notice period, moving-out date and return of the deposit. Free PDF.",
    "perex": "For a tenant who wants to end the lease. With the notice period from the contract and a request to return the deposit.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Agreement, notice period, moving out and deposit."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "you want to end the lease with notice"
    ],
    "nehodiSe": [
      "you want to leave sooner – use the termination agreement"
    ],
    "po": [
      {
        "nazev": "Handover",
        "popis": "Report with the meter readings on moving out."
      }
    ],
    "faq": [
      {
        "q": "From when does the notice period run?",
        "a": "From the date the landlord receives the notice – send it by registered post or ask for a signature confirming receipt."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Romanian Civil Code.",
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
    "title": "Tenant’s Notice of Termination Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the tenant’s notice of termination online – Romania, free PDF",
    "description": "Step-by-step guide in English for the tenant’s notice of termination under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "date": {
        "nazev": "Termination"
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
      "contract_din": {
        "popis": "Lease agreement dated"
      },
      "preaviz": {
        "popis": "Notice period in the contract",
        "placeholder": "e.g. 60"
      },
      "eliberare": {
        "popis": "Expected moving-out date"
      },
      "iban": {
        "popis": "IBAN for returning the deposit",
        "placeholder": "RO49 …"
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
      "Hand over the notice against a signature confirming receipt or send it by registered letter with acknowledgement of receipt.",
      "On the moving-out day, sign the report with the meter readings."
    ],
    "kontrola": [
      "Observe the notice period in the contract – it runs from the date the landlord receives the notice.",
      "For a fixed-term agreement, check whether it allows early termination; if not, try a termination agreement.",
      "Agree the day for handing over the keys and the return of the deposit."
    ]
  },
  "dokument": {
    "nazev": "Notice of Termination of the Lease Agreement",
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
          "I hereby terminate the lease agreement of {{contract_din}} for the home at {{p_adresa}}, with {{preaviz}} days’ notice running from receipt of this notice.",
          "I will vacate and hand back the home on {{eliberare}}. Please return the deposit to the account IBAN {{iban}}, retaining only any amounts established on handover."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/si/odpoved-najemne-pogodbe.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-ODPOVED-NAJEM",
    "verze": "1.0"
  },
  "nazev": "Notice of Lease Termination",
  "nazevA": "the notice of lease termination",
  "katalog": {
    "popis": "Notice by the tenant with the notice period.",
    "slova": [
      "notice of lease termination",
      "end tenancy Slovenia",
      "moving out",
      "notice period",
      "odpoved najemne pogodbe"
    ]
  },
  "landing": {
    "title": "Notice of Lease Termination Slovenia {rok} – free PDF template",
    "description": "Tenant’s notice of termination of a residential lease in Slovenia (odpoved najemne pogodbe): notice period, moving-out date and deposit refund. Free bilingual PDF.",
    "perex": "For a tenant who is moving out. With the notice period, handover date and a request for the deposit refund.",
    "obsahPopis": "A short written notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Flat, agreement, notice period, handover, deposit."
      }
    ],
    "online": [
      "Calculation of the last day",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are moving out of a rented flat",
      "you want a written notice with proof of delivery"
    ],
    "nehodiSe": [
      "you are reaching an agreement with the landlord – use the mutual termination"
    ],
    "po": [
      {
        "nazev": "Delivery",
        "popis": "By registered post with a return receipt or in person against a signature."
      },
      {
        "nazev": "Handover",
        "popis": "Flat handover report."
      }
    ],
    "faq": [
      {
        "q": "How long is the notice period?",
        "a": "As set in your lease agreement. If the agreement does not set one, agree the date with the landlord or use a mutual termination."
      },
      {
        "q": "When do I get the deposit back?",
        "a": "After the flat is handed back, once the landlord has checked the condition and settled the costs."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Housing Act (Stanovanjski zakon, SZ-1).",
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
    "title": "Fill in the notice of lease termination online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the notice of lease termination under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podatki": {
        "nazev": "Notice"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Tenant – full name"
      },
      "p_adresa": {
        "popis": "Address (rented flat)"
      },
      "k_jmeno": {
        "popis": "Landlord – full name"
      },
      "k_adresa": {
        "popis": "Landlord’s address"
      },
      "pogodba_od": {
        "popis": "Lease agreement of"
      },
      "rok": {
        "popis": "Notice period under the agreement (days)",
        "placeholder": "e.g. 90"
      },
      "izselitev": {
        "popis": "Planned moving-out date"
      },
      "iban": {
        "popis": "IBAN for the deposit refund",
        "placeholder": "SI56 …"
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
      "Hand over the notice against a signature or send it by registered post with a return receipt.",
      "On the moving-out day, sign a report with meter readings."
    ],
    "kontrola": [
      "Observe the notice period in the lease agreement – it runs from the day the landlord receives the notice.",
      "A fixed-term lease generally cannot be terminated before it expires, unless the agreement allows it or the parties agree.",
      "Agree on the day the keys are handed over and on the deposit refund."
    ]
  },
  "dokument": {
    "nazev": "Notice of Termination of a Lease Agreement",
    "podnadpis": "notice given by the tenant",
    "podpisy": {
      "vlevo": "tenant",
      "vpravo": "received (landlord, date)"
    },
    "clanky": [
      {
        "nadpis": "Notice",
        "odstavce": [
          "**Tenant:** {{p_jmeno}}, {{p_adresa}}",
          "**Landlord:** {{k_jmeno}}, {{k_adresa}}",
          "I terminate the lease agreement of {{pogodba_od}} for the flat at {{p_adresa}} with a notice period of {{rok}} days, which starts running on receipt of this notice.",
          "I will vacate and hand back the flat on {{izselitev}}. Please refund the deposit to the account IBAN {{iban}}, reduced only by any obligations established at handover."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/ee/uurilepingu-ulesutlemine.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-UUR-ULESUTLEMINE",
    "verze": "1.0"
  },
  "nazev": "Notice of Termination of Lease",
  "nazevA": "the notice of termination of lease",
  "katalog": {
    "popis": "The tenant terminates the lease.",
    "slova": [
      "termination of lease Estonia",
      "tenant notice",
      "end tenancy",
      "3 months notice",
      "üürilepingu ülesütlemine"
    ]
  },
  "landing": {
    "description": "Notice of termination of a residential lease for Estonia (üürilepingu ülesütlemine): ordinary notice of at least 3 months or extraordinary termination. Free PDF.",
    "perex": "When you want to end a residential lease. Ordinary termination of an indefinite lease with at least three months’ notice.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Tenant and landlord."
      },
      {
        "nazev": "Agreement",
        "popis": "Dwelling and date of the agreement."
      },
      {
        "nazev": "Termination",
        "popis": "Ordinary or extraordinary, end date."
      }
    ],
    "online": [
      "Deadline reminder",
      "PDF and Word"
    ],
    "hodiSe": [
      "you want to end an indefinite lease"
    ],
    "nehodiSe": [
      "you want to end it by agreement – use the termination agreement"
    ],
    "po": [
      {
        "nazev": "Send it",
        "popis": "Hand over the notice against signature or send it digitally signed."
      },
      {
        "nazev": "Handover",
        "popis": "Draw up a handover report at the end."
      }
    ],
    "faq": [
      {
        "q": "In what form must a lease be terminated?",
        "a": "A notice of termination of a residential lease must be in writing. A digital signature is equivalent to a handwritten one."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the termination provisions of the Estonian Law of Obligations Act on leases.",
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
    "title": "Notice of Termination of Lease Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the notice of termination of lease online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the notice of termination of lease under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
        "nazev": "Termination"
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
      "lepingu_kuupaev": {
        "popis": "Date of the lease agreement"
      },
      "alus": {
        "popis": "Ground for termination",
        "moznosti": {
          "korraline": "ordinary termination of an indefinite lease (3 months’ notice)",
          "erakorraline": "extraordinary termination for good reason"
        }
      },
      "pohjus": {
        "popis": "Good reason",
        "placeholder": "e.g. the dwelling is hazardous to health and the defect was not remedied"
      },
      "lopp": {
        "popis": "The lease ends on"
      },
      "iban": {
        "popis": "IBAN for the return of the deposit",
        "placeholder": "EE38 …"
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
      "Send the notice in a form that can be reproduced in writing (e.g. digitally signed by e-mail or by registered letter).",
      "Agree on the day the keys are handed over and draw up a handover report.",
      "Report the meter readings and end the contracts in your name (electricity, internet)."
    ],
    "kontrola": [
      "A tenant may terminate an indefinite lease by ordinary notice of at least three months ([Law of Obligations Act § 312](https://www.riigiteataja.ee/akt/111072026158?leiaKehtiv)).",
      "A fixed-term lease cannot be terminated by ordinary notice – only extraordinarily for good reason or by agreement with the landlord.",
      "The deposit cannot automatically be set off against the last month’s rent – agree this in writing.",
      "A quicker and safer solution is often an agreement to end the lease."
    ]
  },
  "dokument": {
    "nazev": "Notice of Termination of a Residential Lease",
    "podnadpis": "the tenant’s notice ending a residential lease agreement",
    "podpisy": {
      "vlevo": "Tenant",
      "vpravo": "Received (landlord, optional)"
    },
    "clanky": [
      {
        "nadpis": "Termination of the lease",
        "odstavce": [
          "**To:** {{p_jmeno}}, {{p_adresa}}",
          "I hereby terminate the residential lease agreement for the dwelling at {{byt}}, concluded on {{lepingu_kuupaev}}.",
          {
            "uvodVzor": "Ground for termination (tick one option):",
            "moznosti": {
              "korraline": "I terminate the indefinite lease by ordinary notice, observing the three-month notice period.",
              "erakorraline": "I terminate the lease extraordinarily for good reason: {{pohjus}}"
            }
          },
          "The agreement ends on {{lopp}}. I will return the dwelling and the keys by that day and propose drawing up a handover report.",
          "Please return the deposit, less justified claims, to the account IBAN {{iban}}.",
          "**Tenant:** {{k_jmeno}}, {{k_adresa}}"
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/lt/pranesimas-apie-nuomos-nutraukima.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-NUOMA-NUTRAUKIMAS",
    "verze": "1.0"
  },
  "nazev": "Tenant’s Notice of Termination",
  "nazevA": "the tenant’s notice of termination",
  "katalog": {
    "popis": "The tenant ends the lease with one month’s notice.",
    "slova": [
      "lease termination notice Lithuania",
      "tenant notice to landlord",
      "end flat rental",
      "pranešimas apie nuomos nutraukimą"
    ]
  },
  "landing": {
    "description": "Tenant’s notice of termination of a flat lease for Lithuania (pranešimas apie nuomos nutraukimą): one month’s notice, end date, return of the deposit. Free PDF.",
    "perex": "When the tenant wants to move out. They may terminate both a fixed-term and an indefinite agreement by giving the landlord one month’s written notice.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Agreement, end date, return of keys and deposit."
      }
    ],
    "online": [
      "Deadline reminder",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are a tenant and want to end the lease",
      "you want the end date in writing"
    ],
    "nehodiSe": [
      "you want to agree with the landlord – use the agreement to end the lease"
    ],
    "po": [
      {
        "nazev": "Proof",
        "popis": "Keep proof of when the landlord received the notice."
      },
      {
        "nazev": "Report",
        "popis": "When returning the flat, draw up a report."
      }
    ],
    "faq": [
      {
        "q": "How much notice is needed?",
        "a": "One month in writing (Civil Code, Article 6.609). The period runs from the day the landlord receives the notice."
      },
      {
        "q": "Can a fixed-term agreement be terminated too?",
        "a": "Yes. The tenant’s right to terminate with one month’s notice also applies to a fixed-term agreement."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on Article 6.609 of the Civil Code.",
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
    "title": "Tenant’s Notice of Termination Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the tenant’s notice of termination online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the tenant’s notice of termination under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
        "popis": "Address of the premises"
      },
      "liguma_datums": {
        "popis": "Date of the lease agreement"
      },
      "beigas": {
        "popis": "The agreement ends on",
        "napoveda": "No earlier than one month after the day the landlord receives the notice."
      },
      "iban": {
        "popis": "IBAN for the return of the deposit",
        "placeholder": "LT12 1000 0111 0100 1000"
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
      "Send the notice in writing – by registered letter or e-mail – and keep proof of sending.",
      "Agree on the day the keys are returned and draw up a handover report.",
      "Report the meter readings and terminate the contracts in your name (electricity, internet)."
    ],
    "kontrola": [
      "The tenant has the right to terminate both a fixed-term and an indefinite residential lease by giving the landlord one month’s written notice ([Civil Code, Art. 6.609](https://www.e-tar.lt/portal/lt/legalAct/TAR.8A39C83848CB/asr)).",
      "The notice period runs from the day the landlord receives the notice – send it in time and keep proof.",
      "The deposit is not automatically set off against the last month’s rent – agree on this in writing.",
      "Often a quicker and calmer solution is an agreement to end the lease."
    ],
    "pripominky": {
      "Anksčiausia sutarties pabaigos diena (1 mėnuo)": {
        "nazev": "Earliest end date of the agreement (1 month)",
        "popis": "If the landlord receives the notice on this day."
      }
    }
  },
  "dokument": {
    "nazev": "Notice of Termination of the Lease Agreement",
    "podnadpis": "tenant’s written notice of termination of a residential lease",
    "podpisy": {
      "vlevo": "Tenant",
      "vpravo": "Received (landlord, optional)"
    },
    "clanky": [
      {
        "nadpis": "Notice of termination of the lease agreement",
        "odstavce": [
          "**To:** {{p_jmeno}}, {{p_adresa}}",
          "Under Article 6.609 of the Civil Code of the Republic of Lithuania, I give notice that I terminate the lease agreement of {{liguma_datums}} for the residential premises at {{byt}}.",
          "The agreement ends on {{beigas}}. By that day I will vacate the premises, return the keys and propose that we draw up a handover report.",
          "Please return the deposit, less any justified claims, to the account IBAN {{iban}}.",
          "**Tenant:** {{k_jmeno}}, {{k_adresa}}"
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

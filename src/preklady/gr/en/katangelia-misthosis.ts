/** English version of src/obsah/gr/katangelia-misthosis.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-KATANGELIA-MISTHOSIS",
    "verze": "1.0"
  },
  "nazev": "Notice of Lease Termination",
  "nazevA": "the notice of lease termination",
  "katalog": {
    "popis": "The tenant ends the lease with notice.",
    "slova": [
      "lease termination notice Greece",
      "end a rental Greece",
      "moving out",
      "early lease termination",
      "katangelia misthosis"
    ]
  },
  "landing": {
    "description": "Notice of lease termination for Greece (καταγγελία μίσθωσης κατοικίας) by the tenant: date of departure, return of keys and of the deposit. Free PDF and Word.",
    "perex": "For a tenant who wants to leave the flat. First check what the lease says about early termination.",
    "obsahPopis": "A short letter.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Lease, termination date, handover and deposit."
      }
    ],
    "online": [
      "PDF and Word",
      "Reminder of the moving-out date"
    ],
    "hodiSe": [
      "you want to leave a rented flat"
    ],
    "nehodiSe": [
      "you are agreeing the end with the landlord – use the termination agreement"
    ],
    "po": [
      {
        "nazev": "Sending",
        "popis": "Send the notice by registered letter or through a court bailiff."
      },
      {
        "nazev": "AADE",
        "popis": "The termination of the lease is also declared to AADE."
      }
    ],
    "faq": [
      {
        "q": "Can I leave before 3 years?",
        "a": "Yes, if the lease provides for early termination or there is good cause. Otherwise the landlord may claim compensation for their actual loss – so a termination agreement is often safer."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Greek Civil Code and Law 1703/1987.",
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
    "title": "Notice of Lease Termination Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the notice of lease termination online – Greece, free PDF",
    "description": "Step-by-step guide in English for the notice of lease termination under Greek law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stoixeia": {
        "nazev": "The notice"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Landlord – full name"
      },
      "p_adresa": {
        "popis": "Landlord’s address"
      },
      "k_jmeno": {
        "popis": "Tenant – full name"
      },
      "byt": {
        "popis": "Address of the property"
      },
      "smlouva_datum": {
        "popis": "Date of the lease"
      },
      "duvod": {
        "popis": "Basis of the notice",
        "moznosti": {
          "lixi": "expiry of the lease term",
          "oros": "early termination clause in the lease",
          "spoudaios": "good cause"
        }
      },
      "oros": {
        "popis": "Which clause of the lease",
        "placeholder": "e.g. όρος 9"
      },
      "spoudaios": {
        "popis": "The good cause",
        "placeholder": "e.g. σοβαρή υγρασία που δεν αποκαταστάθηκε παρά τις οχλήσεις"
      },
      "konec": {
        "popis": "The lease ends on"
      },
      "iban": {
        "popis": "IBAN for the return of the deposit",
        "placeholder": "GR16 …"
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
      "Serve the notice by registered letter, through a court bailiff or by hand with a signature of receipt.",
      "Agree a date for handing over the keys and draw up a report.",
      "Transfer the electricity and water bills."
    ],
    "kontrola": [
      "A residential lease lasts at least 3 years (Law 1703/1987, Art. 2(1)). If you leave earlier without good cause or without an early termination clause in the lease, the landlord may claim compensation for their actual loss.",
      "Check the lease: it often provides for early termination with notice (e.g. 1–3 months) or compensation of one month’s rent.",
      "The deposit is not automatically set off against the last rent – agree this in writing.",
      "A quicker and safer solution is often a lease termination agreement with the landlord."
    ]
  },
  "dokument": {
    "nazev": "Notice of Lease Termination",
    "podnadpis": "written notice by the tenant terminating the lease",
    "podpisy": {
      "vlevo": "The Tenant",
      "vpravo": "Received (landlord, optional)"
    },
    "clanky": [
      {
        "nadpis": "Notice of lease termination",
        "odstavce": [
          "**To:** {{p_jmeno}}, {{p_adresa}}",
          "I hereby terminate the lease of the home at {{byt}}, under the lease dated {{smlouva_datum}}.",
          {
            "uvodVzor": "Basis of the notice (tick one option):",
            "moznosti": {
              "lixi": "The lease ends on expiry of the agreed term and I do not wish to extend it.",
              "oros": "The notice is given under {{oros}} of the lease, which provides for early termination.",
              "spoudaios": "The notice is given for good cause: {{spoudaios}}"
            }
          },
          "The lease ends on {{konec}}. I will return the property and the keys by that day and propose that a handover report be drawn up.",
          "Please return the deposit, less any justified debts, to the account IBAN {{iban}}.",
          "**Tenant:** {{k_jmeno}}, {{k_adresa}}"
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

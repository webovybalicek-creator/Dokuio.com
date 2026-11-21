/** English version of src/obsah/ro/acord-incetare-inchiriere.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-INCETARE-INCHIRIERE",
    "verze": "1.0"
  },
  "nazev": "Lease Termination Agreement",
  "nazevA": "the lease termination agreement",
  "katalog": {
    "popis": "Ending the lease by agreement, without notice.",
    "slova": [
      "lease termination agreement Romania",
      "end lease by mutual agreement",
      "no notice period",
      "deposit return",
      "acord incetare inchiriere"
    ]
  },
  "landing": {
    "description": "Lease termination agreement for Romania (acord de încetare a închirierii): end date by agreement, handover of the home and the deposit. Free bilingual PDF.",
    "perex": "When landlord and tenant agree the end date together – without a notice period.",
    "obsahPopis": "Five articles under the Romanian Civil Code.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Landlord and tenant."
      },
      {
        "nazev": "Termination",
        "popis": "The date and payment until then."
      },
      {
        "nazev": "Handover",
        "popis": "Moving out and keys."
      },
      {
        "nazev": "Deposit",
        "popis": "Amount and deadline."
      },
      {
        "nazev": "Final provisions",
        "popis": "No further claims."
      }
    ],
    "online": [
      "Amount in words in Romanian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you want to end the lease early by mutual agreement"
    ],
    "nehodiSe": [
      "the other party does not agree – use the notice of termination"
    ],
    "po": [
      {
        "nazev": "ANAF",
        "popis": "The landlord reports the termination of a registered agreement within 30 days."
      }
    ],
    "faq": [
      {
        "q": "Must ANAF be informed?",
        "a": "If the agreement was registered with ANAF, its termination is also reported within 30 days (form C168)."
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
    "title": "Lease Termination Agreement Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the lease termination agreement online – Romania, free PDF",
    "description": "Step-by-step guide in English for the lease termination agreement under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "agreement",
      "g": "agreement",
      "a": "agreement",
      "l": "agreement"
    },
    "kroky": {
      "parti": {
        "nazev": "Parties and the lease"
      },
      "incetare": {
        "nazev": "Termination and deposit"
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
      "locuinta": {
        "popis": "Address of the home"
      },
      "contract_din": {
        "popis": "Lease agreement dated"
      },
      "data_incetare": {
        "popis": "The lease ends on"
      },
      "garantie": {
        "popis": "Deposit to be returned (lei)"
      },
      "termen_garantie": {
        "popis": "Deposit returned by"
      },
      "iban": {
        "popis": "Tenant’s IBAN"
      },
      "misto": {
        "popis": "Place"
      },
      "datum": {
        "popis": "Date"
      }
    },
    "vysvetleni": [
      "",
      "",
      "",
      "",
      ""
    ],
    "coDal": [
      "On the handover day, sign the handover report with the meter readings.",
      "Landlord: if you registered the agreement with ANAF, report the termination (form C168) within 30 days."
    ],
    "kontrola": [
      "By agreement, the parties can agree any end date – the notice period no longer applies.",
      "Enter the exact day of moving out and handing over the keys.",
      "Agree how much of the deposit is returned and by when; state any deductions specifically.",
      "Termination of an agreement registered with ANAF is also reported within 30 days ([ANAF](https://static.anaf.ro/static/10/Galati/ven_inch_2024.pdf)).",
      "Check the other party’s identity against their identity card and copy the name and CNP exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Lease Termination Agreement",
    "podnadpis": "termination of the lease by agreement of the parties, without notice",
    "podpisy": {
      "vlevo": "Landlord",
      "vpravo": "Tenant"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Landlord:** {{p_jmeno}}, domiciled at {{p_adresa}}",
          "**Tenant:** {{k_jmeno}}"
        ]
      },
      {
        "nadpis": "Termination",
        "odstavce": [
          "The parties agree to terminate the lease agreement of {{contract_din}} for the home at {{locuinta}} on **{{data_incetare}}**.",
          "Until that date the Tenant pays rent and utilities under the agreement."
        ]
      },
      {
        "nadpis": "Handover of the home",
        "odstavce": [
          "No later than {{data_incetare}} the Tenant vacates the home, hands it back in the condition in which it was received, allowing for normal wear and tear, and returns all keys. The handover is recorded in a report with the meter readings."
        ]
      },
      {
        "nadpis": "Deposit",
        "odstavce": [
          "The Landlord returns the deposit of {{garantie}} to the Tenant no later than {{termen_garantie}}, to the account IBAN {{iban}}, retaining only debts or damage recorded in the report."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Once this agreement has been performed, the parties have no further claims under the lease agreement, except those recorded in the report.",
          "The agreement is drawn up in two original copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

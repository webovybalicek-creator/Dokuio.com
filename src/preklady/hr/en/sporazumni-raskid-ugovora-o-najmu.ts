/** English version of src/obsah/hr/sporazumni-raskid-ugovora-o-najmu.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-RASKID-NAJMA",
    "verze": "1.0"
  },
  "nazev": "Mutual Termination of Lease",
  "nazevA": "the mutual termination of lease",
  "katalog": {
    "popis": "Ending a lease by agreement, without a notice period.",
    "slova": [
      "mutual termination of lease",
      "end tenancy early",
      "lease termination agreement",
      "deposit refund",
      "sporazumni raskid najma"
    ]
  },
  "landing": {
    "description": "Agreement to end a residential lease in Croatia by mutual consent: end date without a notice period, handover of the flat, report and deposit refund. Free bilingual PDF.",
    "perex": "Landlord and tenant agree? By agreement the lease ends when you decide – without waiting three months.",
    "obsahPopis": "Five articles of the agreement.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Landlord and tenant."
      },
      {
        "nazev": "Termination",
        "popis": "Day the lease ends."
      },
      {
        "nazev": "Handover of the flat",
        "popis": "Keys and report."
      },
      {
        "nazev": "Deposit",
        "popis": "Amount and refund date."
      },
      {
        "nazev": "Final provisions",
        "popis": "No further claims."
      }
    ],
    "online": [
      "Amount in words in Croatian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "both parties want the lease to end earlier"
    ],
    "nehodiSe": [
      "the other party does not agree – use a notice of termination"
    ],
    "po": [
      {
        "nazev": "Handover",
        "popis": "Report with meter readings."
      }
    ],
    "faq": [
      {
        "q": "Must the notice period be observed?",
        "a": "No – with termination by mutual consent the parties set the end date themselves."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Housing Lease Act (Zakon o najmu stanova) and the Obligations Act (Zakon o obveznim odnosima).",
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
    "title": "Mutual Termination of Lease Croatia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the mutual termination of lease online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the mutual termination of lease under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "strane": {
        "nazev": "Parties and lease"
      },
      "kraj": {
        "nazev": "End and deposit"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Landlord – full name",
        "placeholder": "e.g. Ivan Horvat"
      },
      "p_oib": {
        "popis": "Landlord’s OIB"
      },
      "p_adresa": {
        "popis": "Landlord’s address"
      },
      "k_jmeno": {
        "popis": "Tenant – full name",
        "placeholder": "e.g. Ana Kovač"
      },
      "k_oib": {
        "popis": "Tenant’s OIB"
      },
      "stan": {
        "popis": "Address of the flat",
        "placeholder": "e.g. Vukovarska 20, 10000 Zagreb"
      },
      "ugovor_od": {
        "popis": "Lease agreement concluded on"
      },
      "kraj": {
        "popis": "The lease ends on"
      },
      "jamcevina": {
        "popis": "Deposit to be refunded (€)"
      },
      "jamcevina_rok": {
        "popis": "Deposit refunded by"
      },
      "iban": {
        "popis": "Tenant’s IBAN",
        "placeholder": "HR00 0000 0000 0000 0000 0"
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
      "On the day of handover, sign a handover report with meter readings.",
      "The landlord informs the administrative body to which they submitted the lease agreement that the lease has ended."
    ],
    "kontrola": [
      "By agreement the parties may choose any end date – the three-month notice period then does not apply.",
      "Enter the exact day of moving out and handing over the keys.",
      "Agree how much of the deposit is refunded and by when; state any deductions for damage or utilities specifically.",
      "Check the other party’s identity against their identity card and copy the name and OIB exactly as they appear in the document."
    ]
  },
  "dokument": {
    "nazev": "Agreement to Terminate a Residential Lease",
    "podnadpis": "ending the lease by mutual consent without a notice period",
    "podpisy": {
      "vlevo": "Landlord",
      "vpravo": "Tenant"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Landlord:** {{p_jmeno}}, OIB {{p_oib}}, address {{p_adresa}}",
          "**Tenant:** {{k_jmeno}}, OIB {{k_oib}}"
        ]
      },
      {
        "nadpis": "Termination",
        "odstavce": [
          "The parties terminate by mutual consent the lease agreement for the flat at {{stan}}, concluded on {{ugovor_od}}, with effect from **{{kraj}}**.",
          "Until that day the Tenant pays the rent and housing costs under the agreement."
        ]
      },
      {
        "nadpis": "Handover of the flat",
        "odstavce": [
          "No later than {{kraj}}, the Tenant will move out, hand back the flat in the condition in which they received it, taking normal use into account, and return all keys. The parties draw up a handover report with meter readings."
        ]
      },
      {
        "nadpis": "Deposit",
        "odstavce": [
          "The Landlord will refund the Tenant the deposit of {{jamcevina}} no later than {{jamcevina_rok}} to the account IBAN {{iban}}, reduced only by debts or damage recorded in the handover report."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Upon fulfilment of this agreement, the parties have no further claims under the lease agreement, except those stated in the handover report.",
          "The agreement is drawn up in two identical copies, one for each party."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

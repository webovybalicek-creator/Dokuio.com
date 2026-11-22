/** English version of src/obsah/ee/uurilepingu-lopetamise-kokkulepe.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-UUR-LOPETAMINE",
    "verze": "1.0"
  },
  "nazev": "Agreement to End a Lease",
  "nazevA": "the agreement to end a lease",
  "katalog": {
    "popis": "Ending a lease by mutual agreement.",
    "slova": [
      "agreement to end lease Estonia",
      "mutual termination tenancy",
      "end of lease",
      "deposit return",
      "üürilepingu lõpetamise kokkulepe"
    ]
  },
  "landing": {
    "description": "Agreement to end a residential lease for Estonia (üürilepingu lõpetamise kokkulepe): end date, return of the dwelling, deposit and settlements. Free PDF.",
    "perex": "When the landlord and tenant agree to end the lease – without waiting for the notice period.",
    "obsahPopis": "Articles on ending the lease.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Landlord and tenant."
      },
      {
        "nazev": "End",
        "popis": "Date."
      },
      {
        "nazev": "Return",
        "popis": "Return of the dwelling and keys."
      },
      {
        "nazev": "Deposit",
        "popis": "Return or set-off."
      }
    ],
    "online": [
      "Reminders",
      "PDF and Word"
    ],
    "hodiSe": [
      "you want to end the lease by agreement"
    ],
    "nehodiSe": [
      "the other party does not agree – use the notice of termination"
    ],
    "po": [
      {
        "nazev": "Handover",
        "popis": "Draw up a handover report."
      },
      {
        "nazev": "Copies",
        "popis": "Each party keeps one."
      }
    ],
    "faq": [
      {
        "q": "Can a fixed-term lease be ended by agreement?",
        "a": "Yes, the parties may end any lease at any time by agreement."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Estonian Law of Obligations Act.",
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
    "title": "Agreement to End a Lease Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the agreement to end a lease online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the agreement to end a lease under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "pooled": {
        "nazev": "Parties and dwelling"
      },
      "lopetamine": {
        "nazev": "Ending"
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
        "popis": "Tenant – first name and surname",
        "napoveda": "If there are several tenants, list them all."
      },
      "k_ik": {
        "popis": "Tenant’s personal identification code"
      },
      "byt": {
        "popis": "Address of the dwelling"
      },
      "lepingu_kuupaev": {
        "popis": "Date of the lease agreement"
      },
      "lopp": {
        "popis": "The lease ends on",
        "napoveda": "The last day of the lease. Rent is paid up to that day."
      },
      "tagastamine": {
        "popis": "Return of the dwelling by"
      },
      "tagatis": {
        "popis": "Deposit",
        "moznosti": {
          "paevad": "returned within a fixed number of days",
          "arveldus": "returned after the settlement of utilities",
          "puudub": "no deposit was paid"
        }
      },
      "tagatis_paevad": {
        "popis": "Return (within days)",
        "placeholder": "e.g. 30"
      },
      "konto": {
        "popis": "Tenant’s IBAN for the deposit",
        "placeholder": "EE38 …"
      },
      "muu": {
        "popis": "Other arrangements (optional)",
        "placeholder": "e.g. the tenant paints the walls before the return"
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
      "When the lease ends and when the dwelling is returned.",
      ""
    ],
    "coDal": [
      "Sign the agreement in two copies or digitally.",
      "When the dwelling is returned, draw up a report with meter readings."
    ],
    "kontrola": [
      "By agreement a lease can be ended at any time – even a fixed-term lease and without a notice period.",
      "The agreement is signed by all landlords and all tenants.",
      "Enter a fixed end date and date for the return of the dwelling.",
      "Agree when and how the deposit is returned and how the utilities for the last period are paid."
    ],
    "pripominky": {
      "Üürilepingu lõppemine": {
        "nazev": "End of the lease"
      },
      "Eluruumi tagastamine ja üleandmise akt": {
        "nazev": "Return of the dwelling and handover report"
      }
    }
  },
  "dokument": {
    "nazev": "Agreement to End a Residential Lease",
    "podnadpis": "ending a residential lease agreement by agreement of the parties",
    "podpisy": {
      "vlevo": "Landlord",
      "vpravo": "Tenant"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Landlord:** {{p_jmeno}}, address {{p_adresa}}",
          "**Tenant:** {{k_jmeno}}, personal identification code {{k_ik}}"
        ]
      },
      {
        "nadpis": "Ending the lease",
        "odstavce": [
          "The parties agree that the lease agreement for the dwelling at {{byt}}, concluded on {{lepingu_kuupaev}}, ends on {{lopp}}.",
          "The Tenant returns the dwelling with all keys no later than {{tagastamine}} in the same condition, taking into account normal wear and tear. A report is drawn up on return.",
          "Rent and utilities are paid until the end of the agreement. Neither party has any other claims in connection with the ending."
        ]
      },
      {
        "nadpis": "Deposit and other arrangements",
        "odstavce": [
          {
            "uvodVzor": "Deposit (tick one option):",
            "moznosti": {
              "paevad": "The Landlord returns the deposit within {{tagatis_paevad}} days of the return of the dwelling to the account IBAN {{konto}}; they may set off justified claims arising from the lease agreement.",
              "arveldus": "The Landlord returns the deposit after the settlement of the utilities for the last period to the account IBAN {{konto}}; they may set off justified claims arising from the lease agreement.",
              "puudub": "The Tenant did not pay a deposit."
            }
          },
          "Other arrangements: {{muu}}",
          "The agreement is drawn up in two equivalent copies and enters into force when signed by both parties."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

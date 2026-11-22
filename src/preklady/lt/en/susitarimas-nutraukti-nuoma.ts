/** English version of src/obsah/lt/susitarimas-nutraukti-nuoma.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-NUOMA-SUSITARIMAS",
    "verze": "1.0"
  },
  "nazev": "Agreement to End a Lease",
  "nazevA": "the agreement to end a lease",
  "katalog": {
    "popis": "Landlord and tenant agree to end the lease.",
    "slova": [
      "agreement to end lease Lithuania",
      "mutual lease termination",
      "end tenancy by agreement",
      "susitarimas nutraukti nuomą"
    ]
  },
  "landing": {
    "description": "Agreement to end a flat lease for Lithuania (susitarimas nutraukti nuomos sutartį): end and return dates, deposit and other arrangements. No notice period. Free PDF.",
    "perex": "When the landlord and tenant agree to end the lease. By agreement of the parties this can be done at any time, without a notice period.",
    "obsahPopis": "Articles of the agreement.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Landlord and tenant."
      },
      {
        "nazev": "Termination",
        "popis": "End and return dates."
      },
      {
        "nazev": "Deposit",
        "popis": "When and how it is returned."
      }
    ],
    "online": [
      "Deadline reminders",
      "PDF and Word"
    ],
    "hodiSe": [
      "you both want to end the lease",
      "you want a clear date and return of the deposit"
    ],
    "nehodiSe": [
      "the landlord does not agree – the tenant can give one month’s notice"
    ],
    "po": [
      {
        "nazev": "Report",
        "popis": "When returning the flat, draw up a report with the meter readings."
      }
    ],
    "faq": [
      {
        "q": "Must a notice period be observed?",
        "a": "No. By agreement of the parties the lease can be ended on any agreed day."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Civil Code of the Republic of Lithuania.",
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
    "title": "Agreement to End a Lease Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the agreement to end a lease online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the agreement to end a lease under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "salys": {
        "nazev": "Parties and premises"
      },
      "nutraukimas": {
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
        "popis": "Tenant – first name and surname",
        "napoveda": "If there are several tenants, enter all of them."
      },
      "k_ik": {
        "popis": "Tenant’s personal code"
      },
      "byt": {
        "popis": "Address of the premises"
      },
      "liguma_datums": {
        "popis": "Date of the lease agreement"
      },
      "beigas": {
        "popis": "The lease ends on",
        "napoveda": "The last day of the lease. Rent is payable until then."
      },
      "atbrivosana": {
        "popis": "Return the premises by"
      },
      "drosibas_nauda": {
        "popis": "Deposit",
        "moznosti": {
          "atbrivojot": "returned on the day the premises are vacated",
          "pec_rekiniem": "returned after the utility bills are settled",
          "nav": "no deposit was paid"
        }
      },
      "konts": {
        "popis": "Tenant’s IBAN for the deposit",
        "placeholder": "LT12 1000 0111 0100 1000"
      },
      "citas": {
        "popis": "Other arrangements (optional)",
        "placeholder": "e.g. the tenant repaints the walls before returning the flat"
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
      "When the lease ends and when the premises are returned.",
      ""
    ],
    "coDal": [
      "Sign the agreement in two copies.",
      "When returning the premises, draw up a report with the meter readings."
    ],
    "kontrola": [
      "By agreement of the parties the lease can be ended at any time – without a notice period.",
      "The agreement is signed by all landlords and all tenants.",
      "State a specific end date of the agreement and date for vacating the premises ([Civil Code](https://www.e-tar.lt/portal/lt/legalAct/TAR.8A39C83848CB/asr)).",
      "Agree when and how the deposit is returned and how the utilities for the last period are paid."
    ],
    "pripominky": {
      "Nuomos sutarties pabaiga": {
        "nazev": "End of the lease agreement"
      },
      "Gyvenamosios patalpos grąžinimas ir perdavimo–priėmimo aktas": {
        "nazev": "Return of the premises and handover report"
      }
    }
  },
  "dokument": {
    "nazev": "Agreement to Terminate the Lease Agreement",
    "podnadpis": "termination of a residential lease by agreement of the parties",
    "podpisy": {
      "vlevo": "Landlord",
      "vpravo": "Tenant"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Landlord:** {{p_jmeno}}, address {{p_adresa}}",
          "**Tenant:** {{k_jmeno}}, personal code {{k_ik}}"
        ]
      },
      {
        "nadpis": "Termination of the lease agreement",
        "odstavce": [
          "The parties agree that the lease agreement of {{liguma_datums}} for the residential premises at {{byt}} is terminated on {{beigas}}.",
          "The Tenant returns the premises with all keys no later than {{atbrivosana}} in the same condition, allowing for normal wear and tear. A report is drawn up on return.",
          "Rent and utility charges are payable until the end date of the agreement. The parties have no other claims in connection with the termination."
        ]
      },
      {
        "nadpis": "Deposit and other arrangements",
        "odstavce": [
          {
            "uvodVzor": "Deposit (tick one option):",
            "moznosti": {
              "atbrivojot": "The Landlord returns the deposit on the day the premises are vacated to the account IBAN {{konts}}, less justified claims under the lease agreement.",
              "pec_rekiniem": "The Landlord returns the deposit after the utilities for the last period have been settled to the account IBAN {{konts}}, less justified claims under the lease agreement.",
              "nav": "The Tenant did not pay a deposit."
            }
          },
          "Other arrangements: {{citas}}",
          "The agreement is drawn up in two identical copies and takes effect when signed by both parties."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

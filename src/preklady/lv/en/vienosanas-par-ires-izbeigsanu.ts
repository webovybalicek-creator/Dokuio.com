/** English version of src/obsah/lv/vienosanas-par-ires-izbeigsanu.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-IRE-IZBEIGSANA",
    "verze": "1.0"
  },
  "nazev": "Agreement to End a Lease",
  "nazevA": "the agreement to end a lease",
  "katalog": {
    "popis": "Ending a lease by agreement.",
    "slova": [
      "end lease by agreement Latvia",
      "lease termination agreement",
      "vienošanās par īres līguma izbeigšanu"
    ]
  },
  "landing": {
    "description": "Agreement to end a residential lease for Latvia (vienošanās par īres līguma izbeigšanu): end date, return of the dwelling and refund of the deposit. Free PDF.",
    "perex": "When the landlord and tenant agree to end the lease – at any time, without a notice period.",
    "obsahPopis": "Articles on ending the lease.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Landlord and tenant."
      },
      {
        "nazev": "Ending",
        "popis": "Date and return of the dwelling."
      },
      {
        "nazev": "Deposit",
        "popis": "When and how it is returned."
      }
    ],
    "online": [
      "Reminder of the dates",
      "PDF and Word"
    ],
    "hodiSe": [
      "you both want to end the lease"
    ],
    "nehodiSe": [
      "the other party does not agree – then use the notice"
    ],
    "po": [
      {
        "nazev": "Report",
        "popis": "Draw up a report on return."
      }
    ],
    "faq": [
      {
        "q": "Can the agreement be made at any time?",
        "a": "Yes. By agreement the lease can be ended at any time."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Latvian Residential Tenancy Law.",
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
    "title": "Agreement to End a Lease Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the agreement to end a lease online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the agreement to end a lease under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "puses": {
        "nazev": "Parties and dwelling"
      },
      "izbeigsana": {
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
        "popis": "Tenant’s personal code"
      },
      "byt": {
        "popis": "Address of the dwelling"
      },
      "liguma_datums": {
        "popis": "Date of the lease agreement"
      },
      "beigas": {
        "popis": "The lease ends on",
        "napoveda": "The last day of the lease. Rent is paid until this day."
      },
      "atbrivosana": {
        "popis": "Return the dwelling by"
      },
      "drosibas_nauda": {
        "popis": "Security deposit",
        "moznosti": {
          "atbrivojot": "returned on the day of vacating",
          "pec_rekiniem": "returned after the services are settled",
          "nav": "no deposit was paid"
        }
      },
      "konts": {
        "popis": "Tenant’s IBAN for the deposit",
        "placeholder": "LV80 BANK 0000 4351 9500 1"
      },
      "citas": {
        "popis": "Other arrangements (optional)",
        "placeholder": "e.g. the tenant repaints the walls before handing over"
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
      "Sign the agreement in two copies or with eParaksts.",
      "When returning the dwelling, draw up a report with the meter readings."
    ],
    "kontrola": [
      "By agreement of the parties, the lease can be ended at any time – without a notice period.",
      "The agreement is signed by all landlords and all tenants.",
      "State a specific end date and vacating date; the dwelling must be vacated by the time the agreement ends ([Residential Tenancy Law, Article 29](https://likumi.lv/ta/id/322216-dzivojamo-telpu-ires-likums)).",
      "Agree when and how the security deposit is returned and how the last period’s services are paid."
    ],
    "pripominky": {
      "Īres līguma izbeigšanās": {
        "nazev": "End of the lease"
      },
      "Dzīvojamās telpas atdošana un pieņemšanas-nodošanas akts": {
        "nazev": "Return of the dwelling and handover report"
      }
    }
  },
  "dokument": {
    "nazev": "Agreement to End a Residential Lease",
    "podnadpis": "ending a residential lease by agreement of the parties",
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
        "nadpis": "Ending the lease",
        "odstavce": [
          "The parties agree that the lease agreement of {{liguma_datums}} for the dwelling at {{byt}} ends on {{beigas}}.",
          "The Tenant returns the dwelling with all keys no later than {{atbrivosana}} in the same condition, allowing for normal wear and tear. A report is drawn up on return.",
          "Rent and payments related to use are paid until the agreement ends. The parties have no other claims in connection with the ending."
        ]
      },
      {
        "nadpis": "Security deposit and other arrangements",
        "odstavce": [
          {
            "uvodVzor": "Security deposit (tick one option):",
            "moznosti": {
              "atbrivojot": "The Landlord returns the deposit on the day the dwelling is vacated to the account IBAN {{konts}}, deducting justified claims under the lease.",
              "pec_rekiniem": "The Landlord returns the deposit after the last period’s services are settled to the account IBAN {{konts}}, deducting justified claims under the lease.",
              "nav": "The Tenant did not pay a security deposit."
            }
          },
          "Other arrangements: {{citas}}",
          "The agreement is drawn up in two identical copies and takes effect when signed by both parties."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

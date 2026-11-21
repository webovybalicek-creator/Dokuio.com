/** English version of src/obsah/si/sporazumna-razveza-najemne-pogodbe.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-RAZVEZA-NAJEM",
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
      "sporazumna razveza najemne pogodbe"
    ]
  },
  "landing": {
    "description": "Agreement to end a residential lease in Slovenia by mutual consent: end date, handover of the flat, deposit refund and settlement of costs. Free bilingual PDF or Word.",
    "perex": "When the landlord and tenant agree to end the lease – even without a notice period.",
    "obsahPopis": "Five articles under the Obligations Code (Obligacijski zakonik).",
    "obsah": [
      {
        "nazev": "Parties and agreement",
        "popis": "Which lease ends."
      },
      {
        "nazev": "End",
        "popis": "Date."
      },
      {
        "nazev": "Handover",
        "popis": "Keys, meters."
      },
      {
        "nazev": "Deposit",
        "popis": "Refund and settlement."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "you want to move out earlier",
      "both parties agree"
    ],
    "nehodiSe": [
      "one party does not agree – use a notice of termination"
    ],
    "po": [
      {
        "nazev": "Handover",
        "popis": "Flat handover report."
      }
    ],
    "faq": [
      {
        "q": "Is a notice period needed?",
        "a": "No, you choose the end date yourselves."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik) and the Housing Act (Stanovanjski zakon).",
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
    "title": "Mutual Termination of Lease Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the mutual termination of lease online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the mutual termination of lease under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stranki": {
        "nazev": "Parties and lease"
      },
      "konec": {
        "nazev": "End and deposit"
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
      "stanovanje": {
        "popis": "Address of the flat"
      },
      "pogodba_od": {
        "popis": "Lease agreement of"
      },
      "konec": {
        "popis": "The lease ends on"
      },
      "varscina": {
        "popis": "Deposit to be refunded (€)"
      },
      "varscina_rok": {
        "popis": "Deposit refunded by"
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
      "On the day of handover, sign the flat handover report with meter readings."
    ],
    "kontrola": [
      "By agreement the parties may choose any end date – the notice period does not apply.",
      "Enter the exact day of moving out and handing over the keys.",
      "Agree how much of the deposit is refunded and by when; state any deductions specifically.",
      "Check the other party’s identity against their identity card and copy the name and tax number exactly as they appear in the document."
    ]
  },
  "dokument": {
    "nazev": "Agreement to Terminate a Lease",
    "podnadpis": "ending the lease by mutual consent without a notice period",
    "podpisy": {
      "vlevo": "Landlord",
      "vpravo": "Tenant"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Landlord:** {{p_jmeno}}, address {{p_adresa}}",
          "**Tenant:** {{k_jmeno}}"
        ]
      },
      {
        "nadpis": "Termination",
        "odstavce": [
          "The parties terminate by mutual consent the lease agreement for the flat at {{stanovanje}}, concluded on {{pogodba_od}}, with effect from **{{konec}}**.",
          "Until that day the Tenant pays the rent and costs under the agreement."
        ]
      },
      {
        "nadpis": "Handover of the flat",
        "odstavce": [
          "No later than {{konec}}, the Tenant will vacate the flat, hand it back in the condition in which they received it, taking normal use into account, and return all keys. The parties draw up a report with meter readings on handover."
        ]
      },
      {
        "nadpis": "Deposit",
        "odstavce": [
          "The Landlord will refund the Tenant the deposit of {{varscina}} no later than {{varscina_rok}} to the account IBAN {{iban}}, reduced only by debts or damage recorded in the report."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Upon fulfilment of this agreement, the parties have no further claims under the lease agreement, except those stated in the report.",
          "The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

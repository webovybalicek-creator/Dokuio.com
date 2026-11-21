/** English version of src/obsah/si/darilna-pogodba.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-DARILO",
    "verze": "1.0"
  },
  "nazev": "Gift Agreement",
  "nazevA": "the gift agreement",
  "katalog": {
    "popis": "A gift of money or an item, gift tax.",
    "slova": [
      "gift agreement",
      "gift of money",
      "gift tax Slovenia",
      "giving a car",
      "darilna pogodba"
    ]
  },
  "landing": {
    "description": "Gift agreement for Slovenia (darilna pogodba) for money or a movable item: gift tax, exemption for spouse and children, tax return to FURS within 15 days. Free PDF.",
    "perex": "For a gift of money or an item. A spouse, children and other descendants (first order of inheritance) do not pay gift tax.",
    "obsahPopis": "Three articles under the Obligations Code (Obligacijski zakonik).",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Donor and recipient, relationship."
      },
      {
        "nazev": "Subject of the gift",
        "popis": "Money or an item and its handover."
      },
      {
        "nazev": "Final provisions",
        "popis": "Tax and costs."
      }
    ],
    "online": [
      "Amount in words in Slovenian added automatically",
      "Tips on gift tax",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are giving money to a child or grandchild",
      "you are giving a car or another item"
    ],
    "nehodiSe": [
      "you are giving real estate – contact a notary"
    ],
    "po": [
      {
        "nazev": "Handover",
        "popis": "Money ideally by bank transfer."
      },
      {
        "nazev": "Tax",
        "popis": "Unless you are exempt, file the tax return with FURS within 15 days."
      }
    ],
    "faq": [
      {
        "q": "Is gift tax payable?",
        "a": "Recipients in the first order of inheritance (spouse, children and other descendants) are exempt. Movable items worth up to €5,000 are not taxed."
      },
      {
        "q": "When must the tax return be filed?",
        "a": "The recipient files the return with FURS (Financial Administration) within 15 days of receiving the gift, unless the gift is exempt."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik) and FURS information on inheritance and gift tax.",
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
    "title": "Gift Agreement Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the gift agreement online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the gift agreement under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
        "nazev": "Donor and recipient"
      },
      "darilo": {
        "nazev": "Gift"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Donor – full name",
        "placeholder": "e.g. Janez Novak"
      },
      "p_davcna": {
        "popis": "Tax number"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Recipient – full name",
        "placeholder": "e.g. Ana Novak"
      },
      "k_davcna": {
        "popis": "Tax number"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "sorodstvo": {
        "popis": "Family relationship",
        "placeholder": "e.g. oče in hči (father and daughter)"
      },
      "vrsta": {
        "popis": "What is given",
        "moznosti": {
          "denar": "a sum of money",
          "stvar": "a movable item (e.g. a vehicle)"
        }
      },
      "castka": {
        "popis": "Amount (€)"
      },
      "stvar": {
        "popis": "Description of the item",
        "placeholder": "e.g. osebni avtomobil Renault Clio, VIN …, reg. oznaka … (passenger car Renault Clio, VIN …, plate …)"
      },
      "vrednost": {
        "popis": "Estimated value of the item (€)"
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
      ""
    ],
    "coDal": [
      "Transfer money to the account with the reference “darilo po pogodbi z dne …” (gift under the agreement of …).",
      "If the gift is not exempt and exceeds €5,000, the recipient must file a tax return with FURS within 15 days."
    ],
    "kontrola": [
      "A recipient in the first order of inheritance (spouse, children and other descendants) is exempt from gift tax ([FURS](https://fu.gov.si/zivljenjski_dogodki_prebivalci/prejel_sem_darilo)).",
      "A gift consisting only of movable items (including money) with a total value below €5,000 is not taxed; above that, a recipient who is not exempt must file a tax return within 15 days.",
      "This template is for a gift with handover. For real estate an agreement with a certified signature is needed for entry in the land register – contact a notary.",
      "Gift of a vehicle: then use the gift agreement to arrange the change of ownership within 15 days.",
      "Check the other party’s identity against their identity card and copy the name and tax number exactly as they appear in the document."
    ]
  },
  "dokument": {
    "nazev": "Gift Agreement",
    "podnadpis": "for money or a movable item with handover",
    "podpisy": {
      "vlevo": "Donor",
      "vpravo": "Recipient"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Donor:** {{p_jmeno}}, tax number {{p_davcna}}, address {{p_adresa}}",
          "**Recipient:** {{k_jmeno}}, tax number {{k_davcna}}, address {{k_adresa}}",
          "Family relationship: {{sorodstvo}}."
        ]
      },
      {
        "nadpis": "Subject of the gift",
        "odstavce": [
          {
            "uvodVzor": "Gift (tick one option):",
            "moznosti": {
              "denar": "The Donor gives the Recipient the sum of money of **{{castka}}**, handed over on signing this agreement or transferred to the Recipient’s account.",
              "stvar": "The Donor gives the Recipient the following item: {{stvar}}, with an estimated value of {{vrednost}}, handed over on signing this agreement."
            }
          },
          "The Recipient accepts the gift."
        ]
      },
      {
        "nadpis": "Taxes and costs",
        "odstavce": [
          "Any gift tax and transfer costs are borne by the Recipient.",
          "Matters not governed by this agreement are subject to the Obligations Code. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

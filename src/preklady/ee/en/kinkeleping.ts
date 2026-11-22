/** English version of src/obsah/ee/kinkeleping.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-KINK",
    "verze": "1.0"
  },
  "nazev": "Gift Agreement",
  "nazevA": "the gift agreement",
  "katalog": {
    "popis": "Gift of money or an item.",
    "slova": [
      "gift agreement Estonia",
      "gift of money",
      "donation contract",
      "kinkeleping"
    ]
  },
  "landing": {
    "description": "Gift agreement for Estonia (kinkeleping) for a gift of money or an item: handover, value and the donor’s right to reclaim the gift. Free PDF template.",
    "perex": "For giving money or an item when the gift is handed over immediately. There is no gift tax in Estonia.",
    "obsahPopis": "Articles on the gift.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Donor and recipient."
      },
      {
        "nazev": "Gift",
        "popis": "Money or an item and its value."
      },
      {
        "nazev": "Handover",
        "popis": "The gift is handed over on signing."
      },
      {
        "nazev": "Revocation",
        "popis": "Cases provided by law."
      }
    ],
    "online": [
      "Amount in words in Estonian added automatically",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are giving money or an item and handing it over immediately",
      "you want to document the gift in writing"
    ],
    "nehodiSe": [
      "you are giving real estate – a notary is needed",
      "you promise to give only in the future – a gift promise needs notarial form"
    ],
    "po": [
      {
        "nazev": "Payment",
        "popis": "When giving money, transfer it through the bank."
      },
      {
        "nazev": "Copies",
        "popis": "Each party keeps one."
      }
    ],
    "faq": [
      {
        "q": "Is a gift taxed?",
        "a": "There is no gift tax in Estonia, and gifts between private persons are generally not subject to income tax."
      },
      {
        "q": "Can the donor reclaim the gift?",
        "a": "In cases provided by law, for example gross ingratitude of the recipient, the donor may withdraw from the gift agreement and reclaim the gift."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the gift provisions of the Estonian Law of Obligations Act and the guidance of the Tax and Customs Board.",
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
    "title": "Gift Agreement Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the gift agreement online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the gift agreement under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
        "nazev": "Donor and recipient"
      },
      "kingitus": {
        "nazev": "The gift"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Donor – first name and surname",
        "placeholder": "e.g. Mari Tamm"
      },
      "p_ik": {
        "popis": "Personal identification code"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Recipient – first name and surname",
        "placeholder": "e.g. Liisa Tamm"
      },
      "k_ik": {
        "popis": "Personal identification code"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "liik": {
        "popis": "What is given",
        "moznosti": {
          "raha": "a sum of money",
          "asi": "a movable item"
        }
      },
      "castka": {
        "popis": "Amount (EUR)"
      },
      "asi": {
        "popis": "Description of the item",
        "placeholder": "e.g. laptop Lenovo ThinkPad, serial number …"
      },
      "vaartus": {
        "popis": "Value of the item (EUR)"
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
      "Hand over the item or transfer the money with the reference “gift under agreement”.",
      "Each party keeps one signed copy."
    ],
    "kontrola": [
      "A gift handed over immediately is valid even without written form (Law of Obligations Act § 261(2)); the agreement is still good evidence of the gift and its value.",
      "A gift of real estate requires a notarised agreement; for a vehicle, the change of ownership is also registered with Transpordiamet.",
      "A gift from one natural person to another is generally not subject to income tax ([Tax and Customs Board](https://emta.ee/node/354)). There is no gift tax in Estonia.",
      "The donor may withdraw from the agreement, for example, in the event of gross ingratitude of the recipient (Law of Obligations Act §§ 267–268).",
      "Check the other party’s identity document and copy the name and personal identification code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Gift Agreement",
    "podnadpis": "gift of a sum of money or a movable with handover (Law of Obligations Act § 259 ff.)",
    "podpisy": {
      "vlevo": "Donor",
      "vpravo": "Recipient"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Donor:** {{p_jmeno}}, personal identification code {{p_ik}}, address {{p_adresa}}",
          "**Recipient:** {{k_jmeno}}, personal identification code {{k_ik}}, address {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject of the gift",
        "odstavce": [
          {
            "uvodVzor": "Gift (tick one option):",
            "moznosti": {
              "raha": "The Donor gives the Recipient **{{castka}}** (in words: {{castka_sonadega}}), which they transfer to the bank account or hand over on signing the agreement.",
              "asi": "The Donor gives the Recipient the following movable: {{asi}}, with a value of {{vaartus}} (in words: {{vaartus_sonadega}}), which they hand over on signing the agreement."
            }
          },
          "The Recipient accepts the gift and confirms having received it."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by the agreement are subject to the gift provisions of the Law of Obligations Act.",
          "The agreement is drawn up in two equivalent copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

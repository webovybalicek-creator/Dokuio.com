/** English version of src/obsah/lv/pilnvara.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-PILNVARA",
    "verze": "1.0"
  },
  "nazev": "Power of Attorney",
  "nazevA": "the power of attorney",
  "katalog": {
    "popis": "When someone else acts for you.",
    "slova": [
      "power of attorney Latvia",
      "authorisation Latvia",
      "simple power of attorney",
      "pilnvara"
    ]
  },
  "landing": {
    "description": "Power of attorney for Latvia (pilnvara) for an individual: who authorises whom, which acts, sub-delegation and validity. Free PDF and Word.",
    "perex": "When someone else is to act on your behalf – at an authority, the post office or with a vehicle. A specific description of the acts and a validity period.",
    "obsahPopis": "One power of attorney.",
    "obsah": [
      {
        "nazev": "Power of attorney",
        "popis": "Principal, attorney, acts, validity."
      }
    ],
    "online": [
      "PDF and Word",
      "No registration"
    ],
    "hodiSe": [
      "someone is to act on your behalf",
      "you want to authorise specific acts"
    ],
    "nehodiSe": [
      "the transaction requires notarial form – then the power of attorney must be notarial too"
    ],
    "po": [
      {
        "nazev": "Attorney",
        "popis": "Give the power of attorney to the attorney."
      },
      {
        "nazev": "Revocation",
        "popis": "The power of attorney can be revoked at any time."
      }
    ],
    "faq": [
      {
        "q": "When must a power of attorney be notarial?",
        "a": "If the transaction requires notarial form or a notarially certified signature, e.g. registering ownership in the Land Register. Banks and authorities may require their own form."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Latvian Civil Law on mandate.",
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
    "title": "Power of Attorney Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the power of attorney online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the power of attorney under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "power of attorney",
      "g": "power of attorney",
      "a": "power of attorney",
      "l": "power of attorney"
    },
    "kroky": {
      "personas": {
        "nazev": "Who authorises whom"
      },
      "apjoms": {
        "nazev": "What may be done"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Principal – first name and surname",
        "placeholder": "e.g. Anna Kalniņa"
      },
      "p_ik": {
        "popis": "Personal code"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "z_jmeno": {
        "popis": "Attorney – first name and surname",
        "placeholder": "e.g. Jānis Bērziņš"
      },
      "z_ik": {
        "popis": "Personal code"
      },
      "z_adresa": {
        "popis": "Address"
      },
      "darbibas": {
        "popis": "Acts",
        "napoveda": "The more specific, the better. For a vehicle, write the registration number and VIN.",
        "placeholder": "e.g. collect parcels on my behalf at a Latvijas Pasts office"
      },
      "parpilnvarojums": {
        "popis": "May the attorney delegate to a third person?",
        "moznosti": {
          "ne": "No",
          "ja": "Yes"
        }
      },
      "lidz": {
        "popis": "Valid until",
        "napoveda": "If left empty, it is valid until revoked."
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
      "Sign the power of attorney by hand or with a secure electronic signature (eParaksts).",
      "Give the power of attorney to the attorney; they will need it together with their identity document."
    ],
    "kontrola": [
      "If the transaction requires notarial form or a notarially certified signature (e.g. registration in the Land Register), the power of attorney must also be notarial.",
      "Describe specifically what the attorney may do and set a validity period.",
      "Banks, CSDD and other authorities may require a notarially certified power of attorney or their own form – check in advance.",
      "The power of attorney can be revoked at any time – inform the attorney and the authorities where it was submitted.",
      "Check the other party’s identity document and copy the name, surname and personal code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Power of Attorney",
    "podnadpis": "power of attorney of an individual for representation (Civil Law, Article 2289 et seq.)",
    "podpisy": {
      "vlevo": "Principal",
      "vpravo": "Attorney (optional)"
    },
    "clanky": [
      {
        "nadpis": "Power of attorney",
        "odstavce": [
          "I, **{{p_jmeno}}**, personal code {{p_ik}}, address {{p_adresa}},",
          "authorise **{{z_jmeno}}**, personal code {{z_ik}}, address {{z_adresa}},",
          "to perform the following acts on my behalf: {{darbibas}}",
          "For this purpose the attorney may submit applications, sign the necessary documents and receive documents on my behalf.",
          {
            "uvodVzor": "Sub-delegation (tick one option):",
            "moznosti": {
              "ne": "The attorney may not delegate to a third person.",
              "ja": "The attorney may delegate to a third person."
            }
          },
          "The power of attorney is valid until {{lidz}} or until revoked."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

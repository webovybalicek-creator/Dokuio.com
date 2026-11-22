/** English version of src/obsah/lt/igaliojimas.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-IGALIOJIMAS",
    "verze": "1.0"
  },
  "nazev": "Power of Attorney",
  "nazevA": "the power of attorney",
  "katalog": {
    "popis": "When someone else acts for you.",
    "slova": [
      "power of attorney Lithuania",
      "authorisation Lithuania",
      "simple power of attorney",
      "įgaliojimas"
    ]
  },
  "landing": {
    "description": "Power of attorney for Lithuania (įgaliojimas) for an individual: who authorises whom, specific acts, sub-delegation and validity period. Free PDF and Word.",
    "perex": "When someone else is to handle something on your behalf – collect a parcel, submit an application, sign a document.",
    "obsahPopis": "A short power of attorney.",
    "obsah": [
      {
        "nazev": "Power of attorney",
        "popis": "Principal, attorney, acts, sub-delegation, validity."
      }
    ],
    "online": [
      "PDF and Word",
      "Validity period"
    ],
    "hodiSe": [
      "someone is to act on your behalf",
      "you need a simple written power of attorney"
    ],
    "nehodiSe": [
      "the transaction requires notarial form (e.g. real estate) – the power of attorney must be notarial too"
    ],
    "po": [
      {
        "nazev": "Hand it over",
        "popis": "The attorney presents the power of attorney together with their identity document."
      }
    ],
    "faq": [
      {
        "q": "When must a notary certify a power of attorney?",
        "a": "When it authorises transactions that require notarial form, for example transferring real estate. Banks and some institutions may require a notarised power of attorney or their own form."
      },
      {
        "q": "Can a power of attorney be revoked?",
        "a": "Yes, at any time. Inform the attorney and the institutions where the power of attorney was presented."
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
    "title": "Power of Attorney Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the power of attorney online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the power of attorney under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "asmenys": {
        "nazev": "Who authorises whom"
      },
      "apimtis": {
        "nazev": "What they may do"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Principal – first name and surname",
        "placeholder": "e.g. Rūta Kazlauskienė"
      },
      "p_ik": {
        "popis": "Personal code"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "z_jmeno": {
        "popis": "Attorney – first name and surname",
        "placeholder": "e.g. Tomas Petrauskas"
      },
      "z_ik": {
        "popis": "Personal code"
      },
      "z_adresa": {
        "popis": "Address"
      },
      "darbibas": {
        "popis": "Acts",
        "napoveda": "The more specific, the better. For a vehicle, enter the registration number and VIN.",
        "placeholder": "e.g. collect postal items in my name at a Lietuvos paštas branch"
      },
      "parpilnvarojums": {
        "popis": "May they sub-delegate to a third person?",
        "moznosti": {
          "ne": "No",
          "ja": "Yes"
        }
      },
      "lidz": {
        "popis": "Valid until",
        "napoveda": "If you leave it empty, the power of attorney is valid until revoked."
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
      "Sign the power of attorney by hand or with a qualified electronic signature.",
      "Give the power of attorney to the attorney; they will need it together with their identity document."
    ],
    "kontrola": [
      "A power of attorney to conclude transactions that require notarial form (e.g. transfer of real estate) must be certified by a notary ([Civil Code](https://www.e-tar.lt/portal/lt/legalAct/TAR.8A39C83848CB/asr)).",
      "Describe specifically what the attorney may do and set a validity period.",
      "Banks, Regitra and other institutions may require a notarised power of attorney or their own form – check in advance.",
      "You can revoke the power of attorney at any time – inform the attorney and the institutions where it was presented.",
      "Check the other party’s identity document and copy the name, surname and personal code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Power of Attorney",
    "podnadpis": "power of attorney of an individual (Civil Code, Article 2.137 et seq.)",
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
          "to perform the following acts in my name: {{darbibas}}",
          "For this purpose the attorney may submit applications, sign the necessary documents and receive documents in my name.",
          {
            "uvodVzor": "Sub-delegation (tick one option):",
            "moznosti": {
              "ne": "The attorney may not sub-delegate to a third person.",
              "ja": "The attorney may sub-delegate to a third person."
            }
          },
          "The power of attorney is valid until {{lidz}} or until revoked."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

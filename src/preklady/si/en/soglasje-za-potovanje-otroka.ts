/** English version of src/obsah/si/soglasje-za-potovanje-otroka.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-POTOVANJE",
    "verze": "1.0"
  },
  "nazev": "Consent for a Child to Travel",
  "nazevA": "the consent for a child to travel",
  "katalog": {
    "popis": "A child travels without one or both parents.",
    "slova": [
      "consent for a child to travel",
      "travel consent letter",
      "child travelling abroad",
      "parental consent",
      "soglasje za potovanje otroka"
    ]
  },
  "landing": {
    "title": "Child Travel Consent Slovenia {rok} – free PDF template",
    "description": "Parental consent for a minor to travel abroad from Slovenia: companion, country, dates and contact. Tip on certifying the signature. Free bilingual PDF or Word.",
    "perex": "When a child travels without one or both parents – with the other parent, grandparents or the school.",
    "obsahPopis": "A short consent.",
    "obsah": [
      {
        "nazev": "Consent",
        "popis": "Parents, child, companion, country, dates."
      }
    ],
    "online": [
      "PDF and Word",
      "Also in English on request"
    ],
    "hodiSe": [
      "the child travels abroad without you",
      "the child travels with grandparents or the school"
    ],
    "nehodiSe": [
      "the child is moving abroad – the other parent’s consent or a court decision is needed"
    ],
    "po": [
      {
        "nazev": "Certification",
        "popis": "Have the signature certified at an administrative unit or a notary."
      },
      {
        "nazev": "Take along",
        "popis": "The child’s passport or identity card."
      }
    ],
    "faq": [
      {
        "q": "Is the consent compulsory?",
        "a": "Slovenia does not require it in all cases, but each country decides for itself – border police or an airline may ask for it."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on information from the Your Europe portal on minors travelling.",
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
    "souvisejiciPopis": "More documents, also free."
  },
  "vytvorit": {
    "title": "Fill in the consent for a child to travel online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the consent for a child to travel under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "consent",
      "g": "consent",
      "a": "consent",
      "l": "consent"
    },
    "kroky": {
      "stars": {
        "nazev": "Parent and child"
      },
      "pot": {
        "nazev": "Trip"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Parent – full name"
      },
      "p_emso": {
        "popis": "Parent’s EMŠO (personal ID number)"
      },
      "p_doklad": {
        "popis": "Identity card number"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "p_tel": {
        "popis": "Telephone"
      },
      "d_jmeno": {
        "popis": "Child – full name"
      },
      "d_rojen": {
        "popis": "Child’s date of birth"
      },
      "d_doklad": {
        "popis": "Child’s travel document number"
      },
      "spremstvo": {
        "popis": "The child travels",
        "moznosti": {
          "stars": "with the other parent",
          "oseba": "with another adult",
          "sam": "alone (organised trip, school)"
        }
      },
      "s_jmeno": {
        "popis": "Companion – full name"
      },
      "s_doklad": {
        "popis": "Companion’s document number"
      },
      "cilj": {
        "popis": "Destination",
        "placeholder": "e.g. Hrvaška, Italija (Croatia, Italy)"
      },
      "od": {
        "popis": "From"
      },
      "do": {
        "popis": "To"
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
      "Have the signature certified at an administrative unit or a notary – a certified consent is more easily accepted abroad.",
      "Give the child the original and a copy of the parent’s identity document.",
      "Check the requirements of the destination country and the carrier (airlines have their own forms)."
    ],
    "kontrola": [
      "Whether a country requires official parental authorisation is decided by each EU country itself ([Your Europe](https://europa.eu/youreurope/citizens/travel/entry-exit/travel-documents-minors/index_sl.htm)) – a written consent is therefore advisable.",
      "The child must have their own valid identity card or passport.",
      "State the exact period and destination of the trip and the companion’s details.",
      "Moving a child abroad always requires the other parent’s consent, unless only one parent has parental rights – this consent applies only to a temporary trip."
    ]
  },
  "dokument": {
    "nazev": "Consent for a Minor to Travel",
    "podnadpis": "declaration by the parent who is not travelling with the child",
    "podpisy": {
      "vlevo": "parent (legal representative)",
      "vpravo": "other parent (if also consenting)"
    },
    "clanky": [
      {
        "nadpis": "Consent",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, EMŠO {{p_emso}}, identity card number {{p_doklad}}, address {{p_adresa}}, telephone {{p_tel}}, as a parent and legal representative,",
          "consent to my minor child **{{d_jmeno}}**, born on {{d_rojen}}, travel document number {{d_doklad}},",
          {
            "uvodVzor": "Accompaniment (tick one option):",
            "moznosti": {
              "stars": "travelling accompanied by the other parent {{s_jmeno}}, document number {{s_doklad}},",
              "oseba": "travelling accompanied by {{s_jmeno}}, document number {{s_doklad}}, to whom I entrust the care of the child during the trip,",
              "sam": "travelling without a parent as part of an organised trip,"
            }
          },
          "in the period from {{od}} to {{do}} to: {{cilj}}.",
          "This consent applies only to the trip stated above."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/ee/nousolek-lapse-reisimiseks.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-LAPSE-REIS",
    "verze": "1.0"
  },
  "nazev": "Consent for a Child to Travel",
  "nazevA": "the consent for a child to travel",
  "katalog": {
    "popis": "The child travels without one or both parents.",
    "slova": [
      "consent for child travel Estonia",
      "parental consent travel",
      "child travelling abroad",
      "travel consent letter",
      "nõusolek lapse reisimiseks"
    ]
  },
  "landing": {
    "description": "Parental consent for a child to travel abroad for Estonia (nõusolek lapse reisimiseks): child and companion details, countries and period. With joint custody. Free PDF.",
    "perex": "When a minor child travels abroad without one or both parents. With joint custody, the other parent’s consent is generally required.",
    "obsahPopis": "A short consent.",
    "obsah": [
      {
        "nazev": "Parent and child",
        "popis": "Names and personal identification codes."
      },
      {
        "nazev": "Companion",
        "popis": "The other parent or another adult."
      },
      {
        "nazev": "Trip",
        "popis": "Countries, period and purpose."
      }
    ],
    "online": [
      "PDF and Word",
      "Choice of companion"
    ],
    "hodiSe": [
      "the child travels with one parent or another adult",
      "the parents have joint custody"
    ],
    "nehodiSe": [
      "the child is moving abroad permanently – a broader agreement or court decision is needed"
    ],
    "po": [
      {
        "nazev": "Take it along",
        "popis": "The companion takes the consent and the child’s document."
      },
      {
        "nazev": "Destination",
        "popis": "Check the requirements of the destination country and airline."
      }
    ],
    "faq": [
      {
        "q": "Must the consent be notarised?",
        "a": "Estonian law does not always require notarial form, but a destination country or carrier may require a notarised or translated consent."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on European e-Justice Portal information on taking a child abroad from Estonia.",
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
    "title": "Consent for a Child to Travel Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the consent for a child to travel online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the consent for a child to travel under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "vanem": {
        "nazev": "Parent and child"
      },
      "reis": {
        "nazev": "The trip"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Parent – first name and surname"
      },
      "p_ik": {
        "popis": "Parent’s personal identification code"
      },
      "p_tel": {
        "popis": "Phone"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "d_jmeno": {
        "popis": "Child – first name and surname"
      },
      "d_ik": {
        "popis": "Child’s personal identification code"
      },
      "d_dokument": {
        "popis": "Child’s passport / ID card no."
      },
      "saatja": {
        "popis": "The child travels",
        "moznosti": {
          "vanem": "with the other parent",
          "isik": "with another adult"
        }
      },
      "s_jmeno": {
        "popis": "Companion – first name and surname"
      },
      "s_dokument": {
        "popis": "Companion’s personal code or document no."
      },
      "riigid": {
        "popis": "Country/countries",
        "placeholder": "e.g. Finland, Sweden"
      },
      "eesmark": {
        "popis": "Purpose of the trip",
        "placeholder": "e.g. holiday"
      },
      "alates": {
        "popis": "From"
      },
      "kuni": {
        "popis": "Until"
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
      "Give the signed consent to the companion together with the child’s passport or ID card.",
      "Check the requirements of the destination country and airline – some require a notarised or translated consent.",
      "If you wish, attach a copy of your identity document to the consent."
    ],
    "kontrola": [
      "If the parents have joint custody, the other parent’s consent is generally required to take the child abroad – even temporarily.",
      "If the child travels with someone else (grandparent, coach, teacher), give the consent with the signatures of both parents.",
      "State precisely the dates of the trip, the countries and the companion’s details.",
      "The consent may not always be asked for at the border, but in a dispute or check it is the necessary proof."
    ]
  },
  "dokument": {
    "nazev": "Parental Consent",
    "podnadpis": "parent’s consent for a minor child’s trip abroad",
    "podpisy": {
      "vlevo": "Parent",
      "vpravo": "Other parent (if they also sign)"
    },
    "clanky": [
      {
        "nadpis": "Parental consent",
        "odstavce": [
          "I, **{{p_jmeno}}**, personal identification code {{p_ik}}, residing at {{p_adresa}}, phone {{p_tel}}, am the parent of the minor child",
          "**{{d_jmeno}}**, personal identification code {{d_ik}}, passport or ID card no. {{d_dokument}}.",
          {
            "uvodVzor": "Companion (tick one option):",
            "moznosti": {
              "vanem": "I consent to the child travelling abroad with the other parent {{s_jmeno}} ({{s_dokument}}).",
              "isik": "I consent to the child travelling abroad with {{s_jmeno}} ({{s_dokument}}), to whom I entrust the care of the child during the trip."
            }
          },
          "Trip: {{riigid}}, in the period {{alates}} – {{kuni}}, purpose: {{eesmark}}.",
          "I have agreed the conditions of the trip with the companion and can be reached during the trip at the phone number above."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

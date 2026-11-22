/** English version of src/obsah/gr/synainesi-taxidiou-anilikou.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-TAXIDI-ANILIKOU",
    "verze": "1.0"
  },
  "nazev": "Parental Consent for a Minor’s Travel",
  "nazevA": "the parental consent for a minor’s travel",
  "katalog": {
    "popis": "The child travels without one or both parents.",
    "slova": [
      "parental consent travel Greece",
      "minor travelling abroad Greece",
      "child travel consent letter",
      "solemn declaration consent",
      "synainesi taxidiou anilikou"
    ]
  },
  "landing": {
    "description": "Parental consent for a minor’s travel abroad, Greece (υπεύθυνη δήλωση συναίνεσης): companion, countries, period and certification of the signature. Free PDF.",
    "perex": "For a child travelling abroad with one parent or another person. The signature is certified at a KEP or police station.",
    "obsahPopis": "A declaration ready for certification.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Parent, child, companion, countries and period."
      }
    ],
    "online": [
      "PDF and Word",
      "Companion and travel details"
    ],
    "hodiSe": [
      "the child is travelling with one parent or with grandparents",
      "you want the text ready before going to the KEP"
    ],
    "nehodiSe": [
      "the child is moving abroad permanently"
    ],
    "po": [
      {
        "nazev": "Certification",
        "popis": "Sign at a KEP, police station or consulate – or issue the declaration on gov.gr."
      },
      {
        "nazev": "Check",
        "popis": "The companion carries the declaration and the child’s document."
      }
    ],
    "faq": [
      {
        "q": "Does the signature need to be certified?",
        "a": "Yes. The parent who is not travelling gives a solemn declaration with a certified signature (Ministry of Foreign Affairs) or digitally via gov.gr."
      },
      {
        "q": "What if the child travels with another person?",
        "a": "Then both parents give their consent."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the guidance of the Greek Ministry of Foreign Affairs and Art. 8 of Law 1599/1986.",
    "title": "Child Travel Consent Greece {rok} – free PDF template",
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
    "title": "Fill in the parental consent for a minor’s travel online – Greece, free PDF",
    "description": "Step-by-step guide in English for the parental consent for a minor’s travel under Greek law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "declaration",
      "g": "declaration",
      "a": "declaration",
      "l": "declaration"
    },
    "kroky": {
      "goneas": {
        "nazev": "The parent and the child"
      },
      "taxidi": {
        "nazev": "The trip"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Parent – full name"
      },
      "p_adt": {
        "popis": "Parent’s identity card no."
      },
      "p_afm": {
        "popis": "Parent’s tax number (AFM)"
      },
      "p_adresa": {
        "popis": "Home address"
      },
      "d_jmeno": {
        "popis": "Child – full name"
      },
      "d_narozeni": {
        "popis": "Child’s date of birth"
      },
      "d_dokument": {
        "popis": "Child’s passport / identity card no."
      },
      "synodos": {
        "popis": "The child travels",
        "moznosti": {
          "goneas": "with the other parent",
          "prosopo": "with another adult"
        }
      },
      "s_jmeno": {
        "popis": "Companion – full name"
      },
      "s_dokument": {
        "popis": "Companion’s identity card / passport no."
      },
      "chores": {
        "popis": "Country/countries",
        "placeholder": "e.g. Ιταλία"
      },
      "skopos": {
        "popis": "Purpose of the trip",
        "placeholder": "e.g. διακοπές"
      },
      "apo": {
        "popis": "From"
      },
      "eos": {
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
      "Sign the declaration at a KEP, police station or Greek consulate to have the signature certified – or issue it digitally via gov.gr (e-dilosi).",
      "The companion carries the declaration and the child’s passport or identity card at passport control.",
      "Also check the requirements of the destination country and the airline."
    ],
    "kontrola": [
      "When a minor travels abroad without one or both parents, a solemn declaration of consent from the parent not accompanying them, with a certified signature, is required (Ministry of Foreign Affairs).",
      "If the minor travels with another adult (grandparent, coach, teacher), both parents give their consent.",
      "A signature without certification is not enough at the check – the digital declaration via gov.gr has the same validity.",
      "State precisely the period, the countries and the companion’s details."
    ],
    "podpisPoznamka": "The parent’s signature must be certified (KEP, police or consulate) or the declaration issued digitally via gov.gr. That is why it is not signed on screen – print it and sign it in front of the official."
  },
  "dokument": {
    "nazev": "Solemn Declaration of Consent for a Minor’s Travel",
    "podnadpis": "parental consent for the child’s travel abroad, with certification of the signature",
    "podpisy": {
      "vlevo": "The Parent (declarant)",
      "vpravo": "The other parent (if also signing)"
    },
    "clanky": [
      {
        "nadpis": "Solemn declaration of consent",
        "odstavce": [
          "I, **{{p_jmeno}}**, identity card no. {{p_adt}}, tax number {{p_afm}}, resident at {{p_adresa}}, as parent of the minor",
          "**{{d_jmeno}}**, born on {{d_narozeni}}, passport or identity card no. {{d_dokument}},",
          {
            "uvodVzor": "Companion (tick one option):",
            "moznosti": {
              "goneas": "declare on my personal responsibility that I consent to the child travelling abroad accompanied by the other parent {{s_jmeno}}, document no. {{s_dokument}},",
              "prosopo": "declare on my personal responsibility that I consent to the child travelling abroad accompanied by {{s_jmeno}}, document no. {{s_dokument}}, to whom I entrust the care of the child during the trip,"
            }
          },
          "for the period {{apo}} – {{eos}}, to {{chores}}, for the purpose of {{skopos}}.",
          "I am aware of the penalties under Article 22(6) of Law 1599/1986 for a false declaration. My signature is certified by the competent authority."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

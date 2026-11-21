/** English version of src/obsah/ro/declaratie-acord-calatorie-minor.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-CALATORIE-MINOR",
    "verze": "1.0"
  },
  "nazev": "Consent to a Minor’s Travel Abroad",
  "nazevA": "the consent to a minor’s travel abroad",
  "katalog": {
    "popis": "A child travelling without one or both parents.",
    "slova": [
      "child travel consent Romania",
      "minor leaving Romania",
      "parental consent notary",
      "travel with one parent",
      "declaratie acord calatorie minor"
    ]
  },
  "landing": {
    "description": "Parent’s consent to a minor leaving Romania, prepared for the notary: accompanying person, destination and period, under Law 248/2005. Free bilingual PDF or Word.",
    "perex": "For a child leaving Romania with one parent or another person. You take the text to a notary, where it is signed and authenticated.",
    "obsahPopis": "A declaration prepared for notarial authentication.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Parent, child, accompanying person, destination and period."
      }
    ],
    "online": [
      "PDF and Word",
      "Details of the accompanying person and the trip"
    ],
    "hodiSe": [
      "the child is travelling with one parent or with grandparents",
      "you want the text ready before going to the notary"
    ],
    "nehodiSe": [
      "the child is moving abroad permanently"
    ],
    "po": [
      {
        "nazev": "Notary",
        "popis": "Sign and authenticate the declaration at a notary or consulate."
      },
      {
        "nazev": "Border",
        "popis": "The accompanying person carries the declaration and the child’s documents."
      }
    ],
    "faq": [
      {
        "q": "Is a notary needed?",
        "a": "Yes. At the border, the notarial declaration of the other parent (or of both parents, if another person accompanies the child) is presented, under Law no. 248/2005."
      },
      {
        "q": "When is no declaration needed?",
        "a": "When the other parent has died, has lost parental rights, the accompanying parent exercises parental authority alone, or the minor is domiciled or resident in the destination country – situations proved by documents."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on Law no. 248/2005 and the Romanian Border Police model declaration.",
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
    "title": "Consent to a Minor’s Travel Abroad Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the consent to a minor’s travel abroad online – Romania, free PDF",
    "description": "Step-by-step guide in English for the consent to a minor’s travel abroad under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "parinte": {
        "nazev": "Parent and child"
      },
      "calatorie": {
        "nazev": "The trip"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Parent – full name"
      },
      "p_cnp": {
        "popis": "Parent’s CNP"
      },
      "p_act": {
        "popis": "Identity card (series and no.)"
      },
      "p_adresa": {
        "popis": "Address (domicile)"
      },
      "d_jmeno": {
        "popis": "Child – full name"
      },
      "d_cnp": {
        "popis": "Child’s CNP"
      },
      "d_document": {
        "popis": "Child’s passport / identity card"
      },
      "insotire": {
        "popis": "The child travels",
        "moznosti": {
          "parinte": "with the other parent",
          "persoana": "with another adult"
        }
      },
      "s_jmeno": {
        "popis": "Accompanying person – full name"
      },
      "s_act": {
        "popis": "Accompanying person’s identity document"
      },
      "destinatie": {
        "popis": "Destination",
        "placeholder": "e.g. Grecia, Italia"
      },
      "scop": {
        "popis": "Purpose of the trip",
        "placeholder": "e.g. vacanță"
      },
      "de_la": {
        "popis": "From"
      },
      "pana_la": {
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
      "Take the text to a notary (or a Romanian consulate) – the declaration is signed and authenticated there; the border police accept the notarial declaration.",
      "The accompanying person keeps one duplicate and the second accompanies the child’s passport.",
      "Also check the requirements of the destination country and the carrier."
    ],
    "kontrola": [
      "If the minor leaves Romania accompanied by only one parent, that parent presents at the border the other parent’s declaration of consent ([Law no. 248/2005](https://legislatie.just.ro/Public/DetaliiDocument/63704)). If another adult accompanies the child, a declaration by both parents is needed.",
      "The declaration must be authenticated by a notary – a text signed only by hand is not enough at the border.",
      "No declaration is needed if the other parent has died, has lost parental rights or if the accompanying parent exercises parental authority alone – these situations are proved with official documents.",
      "It is also not needed when the minor is domiciled or resident in the destination country.",
      "Enter the exact period, destination and the accompanying person’s details. For an accompanying person, the consent period may not exceed 3 years from the date of the declaration."
    ]
  },
  "dokument": {
    "nazev": "Declaration of Consent to a Minor’s Travel Abroad",
    "podnadpis": "text prepared for notarial authentication",
    "podpisy": {
      "vlevo": "Parent (declarant)",
      "vpravo": "Second parent (if also signing)"
    },
    "clanky": [
      {
        "nadpis": "Declaration",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, CNP {{p_cnp}}, identity card {{p_act}}, domiciled at {{p_adresa}}, as parent of the minor",
          "**{{d_jmeno}}**, CNP {{d_cnp}}, travel document {{d_document}},",
          {
            "uvodVzor": "Accompaniment (tick one option):",
            "moznosti": {
              "parinte": "give my consent for the minor to travel abroad accompanied by the other parent, {{s_jmeno}}, identity document {{s_act}},",
              "persoana": "give my consent for the minor to travel abroad accompanied by {{s_jmeno}}, identity document {{s_act}}, to whom I entrust the care of the minor for the duration of the trip,"
            }
          },
          "in the period {{de_la}} – {{pana_la}}, to {{destinatie}}, for the purpose of {{scop}}.",
          "I have informed the accompanying person of their obligations under Law no. 248/2005 on the free movement of Romanian citizens abroad."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

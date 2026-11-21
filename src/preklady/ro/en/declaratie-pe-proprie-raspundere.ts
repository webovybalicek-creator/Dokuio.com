/** English version of src/obsah/ro/declaratie-pe-proprie-raspundere.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-DECLARATIE",
    "verze": "1.0"
  },
  "nazev": "Declaration on Own Responsibility",
  "nazevA": "the declaration on own responsibility",
  "katalog": {
    "popis": "A written declaration for an institution or bank.",
    "slova": [
      "declaration on own responsibility Romania",
      "sworn statement",
      "solemn declaration",
      "false statements",
      "declaratie pe propria raspundere"
    ]
  },
  "landing": {
    "description": "Declaration on own responsibility for Romania (declarație pe propria răspundere): declarant’s details, text and purpose of the declaration, Criminal Code. Free PDF.",
    "perex": "For a written declaration requested by an institution, a bank or an employer.",
    "obsahPopis": "A short declaration.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Declarant, text and purpose."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "an institution asks you for a written declaration"
    ],
    "nehodiSe": [
      "the institution has its own form – use it"
    ],
    "po": [
      {
        "nazev": "Legalisation",
        "popis": "If required, sign before a notary."
      }
    ],
    "faq": [
      {
        "q": "What do I risk if I declare something untrue?",
        "a": "An untrue declaration made to an authority may constitute the offence of false statements (Criminal Code)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Romanian Civil Code and the Criminal Code (false statements).",
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
    "title": "Declaration on Own Responsibility Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the declaration on own responsibility online – Romania, free PDF",
    "description": "Step-by-step guide in English for the declaration on own responsibility under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "date": {
        "nazev": "Declaration"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Full name"
      },
      "p_cnp": {
        "popis": "CNP (personal numeric code)"
      },
      "p_act": {
        "popis": "Identity card (series and no.)"
      },
      "p_adresa": {
        "popis": "Address (domicile)"
      },
      "scop": {
        "popis": "Purpose of the declaration",
        "placeholder": "e.g. pentru dosarul de … la primăria …, pentru bancă"
      },
      "text": {
        "popis": "Text of the declaration",
        "placeholder": "e.g. locuiesc singură la adresa de mai sus"
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
      "Check whether the institution requires the declaration on its own form or authenticated by a notary – in that case sign it only there."
    ],
    "kontrola": [
      "Declare only true facts – an untrue declaration made to an authority may be an offence (false statements, Criminal Code).",
      "State the purpose of the declaration (the institution or procedure for which you are giving it).",
      "Many institutions have their own declaration form – check first."
    ]
  },
  "dokument": {
    "nazev": "Declaration on Own Responsibility",
    "podnadpis": "made in awareness of the Criminal Code provisions on false statements",
    "podpisy": {
      "vlevo": "Declarant",
      "vpravo": "Legalisation (if required)"
    },
    "clanky": [
      {
        "nadpis": "Declaration",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, CNP {{p_cnp}}, identity card {{p_act}}, domiciled at {{p_adresa}},",
          "aware of the provisions of the Criminal Code on false statements, declare on my own responsibility that {{text}}.",
          "I make this declaration for: {{scop}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/bg/deklaratsiya.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-DEKLARATSIYA",
    "verze": "1.0"
  },
  "nazev": "Declaration",
  "nazevA": "the declaration",
  "katalog": {
    "popis": "A written declaration for an institution or bank.",
    "slova": [
      "declaration Bulgaria",
      "written declaration",
      "solemn declaration",
      "Art. 313 Criminal Code",
      "deklaratsiya"
    ]
  },
  "landing": {
    "description": "Written declaration by an individual for Bulgaria (декларация): declarant, text and purpose, with a note on liability under Art. 313 Criminal Code. Free PDF.",
    "perex": "When an institution, bank or employer asks you for a written declaration.",
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
        "nazev": "Certification",
        "popis": "If required, sign before a notary."
      }
    ],
    "faq": [
      {
        "q": "What do I risk with a false declaration?",
        "a": "Confirming an untruth in a written declaration to a public authority is a criminal offence (Art. 313 Criminal Code)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Criminal Code (Art. 313).",
    "title": "Declaration Bulgaria {rok} – free PDF template",
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
    "title": "Fill in the declaration online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the declaration under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "danni": {
        "nazev": "The declaration"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Full name",
        "placeholder": "e.g. Иван Петров Иванов"
      },
      "p_egn": {
        "popis": "EGN (personal number)"
      },
      "p_lk": {
        "popis": "Identity card no.",
        "placeholder": "e.g. 645123456"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "pred": {
        "popis": "For which institution / purpose",
        "placeholder": "e.g. пред банка „…“ във връзка с откриване на сметка"
      },
      "tekst": {
        "popis": "Text of the declaration",
        "placeholder": "e.g. не съм получавал/а помощ по същата програма"
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
      "Check whether the institution requires the declaration on its own form or with a notarised signature – in that case sign it there."
    ],
    "kontrola": [
      "Declare only true facts – confirming an untruth in a written declaration to a public authority carries criminal liability (Art. 313 Criminal Code).",
      "State what you are submitting the declaration for (the institution or procedure).",
      "Many institutions have their own declaration form – check first."
    ]
  },
  "dokument": {
    "nazev": "Declaration",
    "podnadpis": "written declaration by an individual",
    "podpisy": {
      "vlevo": "Declarant",
      "vpravo": "Notarial certification (if required)"
    },
    "clanky": [
      {
        "nadpis": "Declaration",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, EGN {{p_egn}}, identity card no. {{p_lk}}, address {{p_adresa}},",
          "declare that {{tekst}}.",
          "The declaration is submitted {{pred}}. I am aware of the criminal liability under Art. 313 of the Criminal Code for declaring false information."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

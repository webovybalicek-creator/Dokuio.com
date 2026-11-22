/** English version of src/obsah/lt/deklaracija.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-DEKLARACIJA",
    "verze": "1.0"
  },
  "nazev": "Declaration",
  "nazevA": "the declaration",
  "katalog": {
    "popis": "Written confirmation of facts.",
    "slova": [
      "declaration Lithuania",
      "written statement",
      "statement of facts",
      "deklaracija"
    ]
  },
  "landing": {
    "description": "Declaration for Lithuania (deklaracija) – written confirmation of facts for an authority, bank or another person: who confirms what, and to whom. Free PDF and Word.",
    "perex": "When an authority, bank or another person asks you to confirm a fact in writing – where you live, that you have not received a benefit or that you have someone’s consent.",
    "obsahPopis": "A short document.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Declarant, addressee and facts."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "you need a simple written confirmation"
    ],
    "nehodiSe": [
      "the authority requires its own form or notarial certification"
    ],
    "po": [
      {
        "nazev": "Copy",
        "popis": "Keep a copy of the declaration you submitted."
      }
    ],
    "faq": [
      {
        "q": "Does a declaration have to be certified by a notary?",
        "a": "Usually not. However, some institutions require their own form or a notarised signature – check in advance."
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
    "title": "Declaration Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the declaration online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the declaration under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "duomenys": {
        "nazev": "Declarant and content"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "First name and surname"
      },
      "p_ik": {
        "popis": "Personal code"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "kam": {
        "popis": "Submitted to (optional)",
        "placeholder": "e.g. Vilnius City Municipality Administration"
      },
      "saturs": {
        "popis": "What you confirm",
        "placeholder": "e.g. that since 2026-03-01 I have lived at … and that … lives with me"
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
      "Sign the declaration by hand or with a qualified electronic signature.",
      "Submit the declaration to the institution or person who asked for it and keep a copy."
    ],
    "kontrola": [
      "Write only true facts – knowingly providing false information may lead to liability.",
      "Check whether the institution requires a specific form or a notarised signature; for some acts a simple declaration is not enough.",
      "A document signed with a qualified electronic signature is equivalent to one signed by hand."
    ]
  },
  "dokument": {
    "nazev": "Declaration",
    "podnadpis": "written confirmation of facts",
    "podpisy": {
      "vlevo": "Declarant",
      "vpravo": ""
    },
    "clanky": [
      {
        "nadpis": "Declaration",
        "odstavce": [
          "I, **{{p_jmeno}}**, personal code {{p_ik}}, residing at {{p_adresa}}, confirm:",
          "{{saturs}}",
          "The declaration is submitted to: {{kam}}.",
          "I confirm that the information provided is true and complete, and I am aware that providing false information may lead to liability."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

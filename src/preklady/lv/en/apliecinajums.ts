/** English version of src/obsah/lv/apliecinajums.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-APLIECINAJUMS",
    "verze": "1.0"
  },
  "nazev": "Written Declaration",
  "nazevA": "the written declaration",
  "katalog": {
    "popis": "A written declaration to an authority or bank.",
    "slova": [
      "written declaration Latvia",
      "statement of facts",
      "declaration template",
      "apliecinājums"
    ]
  },
  "landing": {
    "description": "Written declaration for Latvia (apliecinājums): details of the declarant and the facts you confirm to an authority, bank or another person. Free PDF and Word template.",
    "perex": "When an authority or another person asks you to confirm facts in writing – for example, your place of residence.",
    "obsahPopis": "A short declaration.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Declarant, content, addressee."
      }
    ],
    "online": [
      "PDF and Word",
      "No registration"
    ],
    "hodiSe": [
      "you need to confirm a fact in writing"
    ],
    "nehodiSe": [
      "the authority requires its own form or notarial certification"
    ],
    "po": [
      {
        "nazev": "Copy",
        "popis": "Keep a copy."
      }
    ],
    "faq": [
      {
        "q": "Can the declaration be signed electronically?",
        "a": "Yes. A document signed with a secure electronic signature (eParaksts) is equivalent to one signed by hand."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions of the Latvian Civil Law.",
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
    "title": "Written Declaration Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the written declaration online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the written declaration under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "dati": {
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
        "popis": "To whom the declaration is submitted (optional)",
        "placeholder": "e.g. Riga City Municipality"
      },
      "saturs": {
        "popis": "What you confirm",
        "placeholder": "e.g. that since 01.03.2026 I have lived at … and that … live with me"
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
      "Sign the declaration by hand or with a secure electronic signature (eParaksts).",
      "Submit the declaration to the authority or person who requested it and keep a copy."
    ],
    "kontrola": [
      "Write only true facts – knowingly giving false information may lead to liability.",
      "Check whether the authority requires a specific form or a notarially certified signature; for some acts a simple declaration is not enough.",
      "A document signed with a secure electronic signature is equivalent to one signed by hand."
    ]
  },
  "dokument": {
    "nazev": "Written Declaration",
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
          "I confirm that the information given is true and complete and I am aware that giving false information may lead to liability."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

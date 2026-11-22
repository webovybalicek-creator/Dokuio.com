/** English version of src/obsah/ee/kinnitus.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-KINNITUS",
    "verze": "1.0"
  },
  "nazev": "Written Declaration",
  "nazevA": "the written declaration",
  "katalog": {
    "popis": "A written declaration to an authority or bank.",
    "slova": [
      "written declaration Estonia",
      "statement of facts",
      "declaration template",
      "kinnitus"
    ]
  },
  "landing": {
    "description": "Written declaration for Estonia (kinnitus): details of the declarant and the facts you confirm to an authority, bank or another person. Free PDF and Word template.",
    "perex": "When an authority, bank or another person asks you to confirm facts in writing.",
    "obsahPopis": "A short declaration.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Declarant, content and addressee."
      }
    ],
    "online": [
      "PDF and Word",
      "A digital signature is equivalent"
    ],
    "hodiSe": [
      "you need a written confirmation of facts"
    ],
    "nehodiSe": [
      "the authority requires a specific form or notarial certification"
    ],
    "po": [
      {
        "nazev": "Hand it over",
        "popis": "Submit the declaration and keep a copy."
      }
    ],
    "faq": [
      {
        "q": "Can the declaration be signed digitally?",
        "a": "Yes, a digital signature with an ID card, Mobile-ID or Smart-ID is equivalent to a handwritten signature."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions on declarations of intention of the Estonian General Part of the Civil Code Act.",
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
    "title": "Written Declaration Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the written declaration online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the written declaration under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "andmed": {
        "nazev": "Declarant and content"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "First name and surname"
      },
      "p_ik": {
        "popis": "Personal identification code"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "kellele": {
        "popis": "To whom the declaration is submitted (optional)",
        "placeholder": "e.g. Tallinn City Government"
      },
      "sisu": {
        "popis": "What you confirm",
        "placeholder": "e.g. that I have lived at … since 01.03.2026 and that … live with me"
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
      "Sign the declaration by hand or digitally (ID card, Mobile-ID, Smart-ID).",
      "Give the declaration to the authority or person who requested it and keep a copy."
    ],
    "kontrola": [
      "Write only true facts – knowingly giving false information may lead to liability.",
      "Check whether the authority requires a specific form or notarial certification; for some acts a simple declaration is not enough.",
      "A digital signature is equivalent to a handwritten signature."
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
          "I, **{{p_jmeno}}**, personal identification code {{p_ik}}, residing at {{p_adresa}}, confirm:",
          "{{sisu}}",
          "The declaration is submitted to: {{kellele}}.",
          "I confirm that the information given is correct and complete and I am aware that giving false information may lead to liability."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

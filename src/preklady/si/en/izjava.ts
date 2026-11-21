/** English version of src/obsah/si/izjava.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-IZJAVA",
    "verze": "1.0"
  },
  "nazev": "Written Declaration",
  "nazevA": "the written declaration",
  "katalog": {
    "popis": "A written declaration for an office or bank.",
    "slova": [
      "written declaration",
      "statement",
      "declaration under liability",
      "certified signature",
      "izjava"
    ]
  },
  "landing": {
    "description": "Written declaration template for Slovenia (izjava): who declares what and for whom – for an office, bank, school or employer. Under liability. Free bilingual PDF.",
    "perex": "When you need a written declaration – for an office, bank, school or employer.",
    "obsahPopis": "A short declaration.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Declarant, content, purpose."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "an office or institution asks for a written declaration"
    ],
    "nehodiSe": [
      "the institution has its own form – use that"
    ],
    "po": [
      {
        "nazev": "Certification",
        "popis": "If required – at an administrative unit (upravna enota) or a notary."
      }
    ],
    "faq": [
      {
        "q": "Does the declaration have to be certified?",
        "a": "Only if the institution you submit it to requires it."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "A general template of a written declaration.",
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
    "title": "Written Declaration Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the written declaration online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the written declaration under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podatki": {
        "nazev": "Declaration"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Full name"
      },
      "p_emso": {
        "popis": "EMŠO (personal ID number) or tax number"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "namen": {
        "popis": "Purpose of the declaration",
        "placeholder": "e.g. za uveljavljanje pravice do …, za predložitev banki (to claim the right to …, for submission to a bank)"
      },
      "besedilo": {
        "popis": "Text of the declaration",
        "placeholder": "e.g. da živim sama v gospodinjstvu na navedenem naslovu (that I live alone in a household at the above address)"
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
      "Check whether the authority you are submitting the declaration to requires a certified signature – if so, sign it only at an administrative unit or a notary."
    ],
    "kontrola": [
      "State only true facts – a false declaration before an authority may be a criminal offence.",
      "Enter the purpose of the declaration (for which authority or procedure it is made).",
      "Many authorities require the declaration on their own form – check this first."
    ]
  },
  "dokument": {
    "nazev": "Declaration",
    "podnadpis": "under material and criminal liability",
    "podpisy": {
      "vlevo": "declarant",
      "vpravo": "certification (if required)"
    },
    "clanky": [
      {
        "nadpis": "Declaration",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, {{p_emso}}, permanently residing at {{p_adresa}},",
          "declare under material and criminal liability {{besedilo}}.",
          "I make this declaration for the purpose of: {{namen}}, and it may not be used for any other purpose."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

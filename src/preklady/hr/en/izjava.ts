/** English version of src/obsah/hr/izjava.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-IZJAVA",
    "verze": "1.0"
  },
  "nazev": "Written Declaration",
  "nazevA": "the written declaration",
  "katalog": {
    "popis": "A general written declaration under material and criminal liability.",
    "slova": [
      "written declaration",
      "statement",
      "declaration of household",
      "certified signature",
      "izjava"
    ]
  },
  "landing": {
    "description": "Written declaration for Croatia (izjava pod materijalnom i kaznenom odgovornošću): declarant, text, purpose and space for certifying the signature. Free bilingual PDF.",
    "perex": "When an office, bank or school asks for your written declaration. If certification is needed, sign it at a notary.",
    "obsahPopis": "A short declaration.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Declarant, text, purpose."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "an authority or institution asks for a written declaration"
    ],
    "nehodiSe": [
      "there is a prescribed official form – use that"
    ],
    "po": [
      {
        "nazev": "Certification",
        "popis": "At a notary (javni bilježnik), if required."
      }
    ],
    "faq": [
      {
        "q": "Does the declaration have to be certified?",
        "a": "It depends on who asks for it – check in advance."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is a general written declaration of a private person.",
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
    "title": "Written Declaration Croatia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the written declaration online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the written declaration under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podaci": {
        "nazev": "Declaration"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Full name",
        "placeholder": "e.g. Ana Kovač"
      },
      "p_oib": {
        "popis": "OIB"
      },
      "p_narozeni": {
        "popis": "Date of birth"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "svrha": {
        "popis": "Purpose of the declaration",
        "placeholder": "e.g. za ostvarivanje prava na …, za predaju banci (to claim the right to …, for submission to a bank)"
      },
      "tekst": {
        "popis": "Text of the declaration",
        "placeholder": "e.g. da živim sama u kućanstvu na navedenoj adresi (that I live alone in a household at the above address)"
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
      "Check whether the authority you are submitting the declaration to requires the signature to be certified – if so, sign it only in front of a notary."
    ],
    "kontrola": [
      "State only true facts – making a false declaration before an authority may be a criminal offence.",
      "Enter the purpose of the declaration (for which authority or procedure it is made).",
      "Many authorities require their own prescribed form – check this first."
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
          "I, **{{p_jmeno}}**, OIB {{p_oib}}, born on {{p_narozeni}}, residing at {{p_adresa}},",
          "declare under material and criminal liability {{tekst}}.",
          "I make this declaration for the purpose of: {{svrha}}, and it may not be used for any other purpose."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

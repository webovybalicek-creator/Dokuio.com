/** English version of src/obsah/gr/ypeythyni-dilosi.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-YPEUTHYNI",
    "verze": "1.0"
  },
  "nazev": "Solemn Declaration",
  "nazevA": "the solemn declaration",
  "katalog": {
    "popis": "Declaration under Law 1599/1986 to an office or bank.",
    "slova": [
      "solemn declaration Greece",
      "ypefthyni dilosi",
      "Law 1599/1986 declaration",
      "certified signature Greece",
      "ypeythyni dilosi"
    ]
  },
  "landing": {
    "description": "Solemn declaration for Greece (υπεύθυνη δήλωση, Art. 8 Law 1599/1986): personal details, declaration text and certification of the signature. Free PDF and Word.",
    "perex": "For a solemn declaration to a public office, bank or employer. Signed with a certified signature or issued digitally.",
    "obsahPopis": "A short declaration.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Authority, personal details and text."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "you need a solemn declaration with your details"
    ],
    "nehodiSe": [
      "the office requires its own form"
    ],
    "po": [
      {
        "nazev": "Certification",
        "popis": "Sign at a KEP or police station, or issue the declaration on gov.gr."
      }
    ],
    "faq": [
      {
        "q": "Does the signature need to be certified?",
        "a": "For a public office yes – or a digital solemn declaration via gov.gr (e-dilosi), which has the same validity."
      },
      {
        "q": "What if I declare something false?",
        "a": "A false solemn declaration is punishable by imprisonment (Art. 22(6) Law 1599/1986)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on Art. 8 of Greek Law 1599/1986.",
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
    "title": "Solemn Declaration Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the solemn declaration online – Greece, free PDF",
    "description": "Step-by-step guide in English for the solemn declaration under Greek law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stoixeia": {
        "nazev": "The declaration"
      }
    },
    "pole": {
      "pros": {
        "popis": "To (authority or office)",
        "placeholder": "e.g. Δήμο Αθηναίων – Τμήμα Δημοτολογίου"
      },
      "p_jmeno": {
        "popis": "Full name"
      },
      "p_otec": {
        "popis": "Father’s name"
      },
      "p_matka": {
        "popis": "Mother’s name"
      },
      "p_narozeni": {
        "popis": "Date of birth"
      },
      "p_misto_narozeni": {
        "popis": "Place of birth"
      },
      "p_adt": {
        "popis": "Identity card number"
      },
      "p_afm": {
        "popis": "Tax number (AFM)"
      },
      "p_adresa": {
        "popis": "Home address"
      },
      "keimeno": {
        "popis": "Text of the declaration",
        "placeholder": "e.g. δεν έχω λάβει την ίδια ενίσχυση από άλλο φορέα"
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
      "If the declaration is for a public office, sign it in front of a KEP or police officer to have the signature certified.",
      "Alternatively, issue the same declaration digitally via gov.gr (e-dilosi) with your Taxisnet credentials."
    ],
    "kontrola": [
      "Declare only true facts – a false solemn declaration is punishable by imprisonment (Art. 22(6) Law 1599/1986).",
      "State which authority or office the declaration is addressed to.",
      "For a public office the signature must be certified or the declaration issued digitally via gov.gr; private bodies (e.g. a bank) may have their own form."
    ]
  },
  "dokument": {
    "nazev": "Solemn Declaration",
    "podnadpis": "under Article 8 of Law 1599/1986",
    "podpisy": {
      "vlevo": "The Declarant",
      "vpravo": "Certification of signature (if required)"
    },
    "clanky": [
      {
        "nadpis": "Solemn declaration",
        "odstavce": [
          "**To:** {{pros}}",
          "I, **{{p_jmeno}}**, child of {{p_otec}} and {{p_matka}}, born on {{p_narozeni}} in {{p_misto_narozeni}}, identity card no. {{p_adt}}, tax number {{p_afm}}, resident at {{p_adresa}},",
          "on my personal responsibility and aware of the penalties provided for in Article 22(6) of Law 1599/1986, declare that: {{keimeno}}."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

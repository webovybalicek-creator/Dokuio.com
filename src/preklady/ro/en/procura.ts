/** English version of src/obsah/ro/procura.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-PROCURA",
    "verze": "1.0"
  },
  "nazev": "Power of Attorney",
  "nazevA": "the power of attorney",
  "katalog": {
    "popis": "When someone else handles something for you.",
    "slova": [
      "power of attorney Romania",
      "authorisation",
      "private power of attorney",
      "notarial power of attorney",
      "imputernicire procura"
    ]
  },
  "landing": {
    "description": "Power of attorney for Romania (împuternicire, procură sub semnătură privată): principal, agent, permitted acts and validity. When you need a notary. Free bilingual PDF.",
    "perex": "For simple matters that someone else handles for you. For acts requiring an authentic form, the power of attorney is made before a notary.",
    "obsahPopis": "A short power of attorney.",
    "obsah": [
      {
        "nazev": "Power of attorney",
        "popis": "Who, whom, for what and until when."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "someone is collecting a parcel or submitting documents for you"
    ],
    "nehodiSe": [
      "you are selling real estate or an institution requires a notarial power of attorney"
    ],
    "po": [
      {
        "nazev": "Check",
        "popis": "Ask the institution what form of power of attorney it accepts."
      }
    ],
    "faq": [
      {
        "q": "When is a notarial power of attorney needed?",
        "a": "For acts that must be concluded in authentic form (e.g. the sale of real estate), the power of attorney must also be authentic. Many institutions, including vehicle registration offices, require a notarial power of attorney."
      },
      {
        "q": "Can I revoke the power of attorney?",
        "a": "Yes, at any time. Inform the agent and anyone to whom it was presented."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Romanian Civil Code.",
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
    "title": "Power of Attorney Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the power of attorney online – Romania, free PDF",
    "description": "Step-by-step guide in English for the power of attorney under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "power of attorney",
      "g": "power of attorney",
      "a": "power of attorney",
      "l": "power of attorney"
    },
    "kroky": {
      "date": {
        "nazev": "Power of attorney"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Principal – full name",
        "placeholder": "e.g. Andrei Popescu"
      },
      "p_cnp": {
        "popis": "CNP (personal numeric code)"
      },
      "p_act": {
        "popis": "Identity card (series and no.)",
        "placeholder": "e.g. RX 123456"
      },
      "p_adresa": {
        "popis": "Address (domicile)"
      },
      "k_jmeno": {
        "popis": "Agent – full name",
        "placeholder": "e.g. Maria Popescu"
      },
      "k_cnp": {
        "popis": "CNP (personal numeric code)"
      },
      "k_adresa": {
        "popis": "Address (domicile)"
      },
      "acte": {
        "popis": "For which acts",
        "placeholder": "e.g. ridicarea coletelor de la oficiul poștal, depunerea actelor la primărie pentru …"
      },
      "pana_la": {
        "popis": "The power of attorney is valid until"
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
      "Ask the institution (bank, registration office, town hall) whether it accepts a private power of attorney or requires a notarial one.",
      "The agent should carry the original and their identity card."
    ],
    "kontrola": [
      "Describe the acts as precisely as possible – e.g. “collecting parcels from the post office” or “submitting the registration file for vehicle …”.",
      "For acts that must be concluded in authentic form (e.g. the sale or gift of real estate), the power of attorney must be authentic, before a notary (Civil Code, mandate).",
      "Many institutions, including vehicle registration offices, require a notarial power of attorney – check first.",
      "The power of attorney can be revoked at any time – inform the agent and those to whom it was presented."
    ]
  },
  "dokument": {
    "nazev": "Power of Attorney",
    "podnadpis": "private power of attorney for representing a private person",
    "podpisy": {
      "vlevo": "Principal",
      "vpravo": "Agent (acceptance, optional)"
    },
    "clanky": [
      {
        "nadpis": "Power of attorney",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, CNP {{p_cnp}}, identity card {{p_act}}, domiciled at {{p_adresa}} (principal),",
          "authorise **{{k_jmeno}}**, CNP {{k_cnp}}, domiciled at {{k_adresa}} (agent),",
          "to represent me and to perform the following acts on my behalf: {{acte}}.",
          "The power of attorney is valid until {{pana_la}} or until revoked."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

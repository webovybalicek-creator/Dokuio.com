/** English version of src/obsah/bg/palnomoshtno.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-PALNOMOSHTNO",
    "verze": "1.0"
  },
  "nazev": "Power of Attorney",
  "nazevA": "the power of attorney",
  "katalog": {
    "popis": "When someone else acts on your behalf.",
    "slova": [
      "power of attorney Bulgaria",
      "authorisation",
      "notarised power of attorney",
      "representation",
      "palnomoshtno"
    ]
  },
  "landing": {
    "description": "Power of attorney for an individual in Bulgaria (пълномощно): principal, agent, exact acts and validity, with notes on when notarisation is required. Free PDF.",
    "perex": "When someone needs to do something for you – collect a parcel, submit documents or represent you before an institution.",
    "obsahPopis": "A short power of attorney.",
    "obsah": [
      {
        "nazev": "Power of attorney",
        "popis": "Principal, agent, acts and validity."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "someone needs to submit or collect something for you"
    ],
    "nehodiSe": [
      "you are selling a property or a car – a notarised power of attorney is needed"
    ],
    "po": [
      {
        "nazev": "Original",
        "popis": "The agent carries the original and their identity card."
      }
    ],
    "faq": [
      {
        "q": "When is notarisation needed?",
        "a": "When the contract you are authorising requires a special form – the power of attorney must be in the same form (Art. 37 Obligations and Contracts Act). Many institutions also require notarisation in other cases – check in advance."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Obligations and Contracts Act.",
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
    "title": "Power of Attorney Bulgaria {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the power of attorney online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the power of attorney under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "danni": {
        "nazev": "The power of attorney"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Principal – full name",
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
      "k_jmeno": {
        "popis": "Agent – full name",
        "placeholder": "e.g. Мария Иванова Петрова"
      },
      "k_egn": {
        "popis": "EGN (personal number)"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "deystviya": {
        "popis": "For which acts",
        "placeholder": "e.g. да получава пратки от офиса на куриера, да подава документи в общината за …"
      },
      "do": {
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
      "Ask the institution (bank, Traffic Police, municipality, courier) whether it accepts a power of attorney with an ordinary signature or requires notarisation.",
      "The agent should carry the original and their identity card."
    ],
    "kontrola": [
      "Describe the acts as precisely as possible – e.g. “to collect parcels from the courier’s office” or “to submit documents for registration of the car …”.",
      "For contracts requiring a special form (e.g. selling a car or property), the power of attorney must be in the same form – with a notarised signature or notarially certified (Art. 37 Obligations and Contracts Act).",
      "Many institutions, including the Traffic Police and banks, require a notarised power of attorney – check in advance.",
      "The power of attorney may be withdrawn at any time – inform the agent and those to whom it has been presented."
    ]
  },
  "dokument": {
    "nazev": "Power of Attorney",
    "podnadpis": "authorisation of an individual to act as a representative",
    "podpisy": {
      "vlevo": "Principal",
      "vpravo": "Agent (acceptance, optional)"
    },
    "clanky": [
      {
        "nadpis": "Power of attorney",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, EGN {{p_egn}}, identity card no. {{p_lk}}, address {{p_adresa}} (principal),",
          "authorise **{{k_jmeno}}**, EGN {{k_egn}}, address {{k_adresa}} (agent),",
          "to represent me and to perform the following acts on my behalf: {{deystviya}}.",
          "The power of attorney is valid until {{do}} or until withdrawn."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

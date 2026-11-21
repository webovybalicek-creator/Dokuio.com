/** English version of src/obsah/si/pooblastilo.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-POOBLASTILO",
    "verze": "1.0"
  },
  "nazev": "Power of Attorney",
  "nazevA": "the power of attorney",
  "katalog": {
    "popis": "When someone else handles something for you.",
    "slova": [
      "power of attorney",
      "authorisation",
      "proxy for the post office",
      "vehicle transfer authorisation",
      "pooblastilo"
    ]
  },
  "landing": {
    "description": "Power of attorney for a private person in Slovenia (pooblastilo): who authorises whom, for what and until when. Tips on certifying the signature. Free bilingual PDF.",
    "perex": "When someone else needs to handle something for you – post office, administrative unit, bank or vehicle transfer.",
    "obsahPopis": "A short power of attorney describing the tasks.",
    "obsah": [
      {
        "nazev": "Power of attorney",
        "popis": "Principal, agent, tasks, validity."
      }
    ],
    "online": [
      "Signature on screen",
      "PDF and Word"
    ],
    "hodiSe": [
      "you cannot do something in person",
      "you want to authorise a family member"
    ],
    "nehodiSe": [
      "you need a power of attorney for real estate or court – contact a notary or a lawyer"
    ],
    "po": [
      {
        "nazev": "Certification",
        "popis": "If an office or bank requires it – at an administrative unit (upravna enota) or a notary."
      }
    ],
    "faq": [
      {
        "q": "Does the signature have to be certified?",
        "a": "It depends on where the power of attorney is used – an office or bank often requires it. Have the signature certified at an administrative unit or a notary (€16 at a notary)."
      },
      {
        "q": "Can I revoke the power of attorney?",
        "a": "Yes, at any time."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik – representation, power of attorney).",
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
    "title": "Power of Attorney Slovenia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the power of attorney online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the power of attorney under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podatki": {
        "nazev": "Power of attorney"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Principal – full name",
        "placeholder": "e.g. Janez Novak"
      },
      "p_davcna": {
        "popis": "Tax number or EMŠO (personal ID number)"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Agent – full name",
        "placeholder": "e.g. Maja Novak"
      },
      "k_davcna": {
        "popis": "Tax number or EMŠO"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "posli": {
        "popis": "For which tasks",
        "placeholder": "e.g. prevzem pošiljk na pošti, urejanje spremembe lastništva vozila z reg. oznako LJ AB-123 (collecting parcels at the post office, transferring ownership of vehicle LJ AB-123)"
      },
      "do": {
        "popis": "Valid until"
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
      "Check whether the recipient (office, bank, registration organisation) requires a certified signature.",
      "The agent should carry the original and an identity document."
    ],
    "kontrola": [
      "Describe the tasks as precisely as possible – e.g. “sprememba lastništva vozila z reg. oznako …” (change of ownership of vehicle with plate …).",
      "The signature can be certified at an administrative unit or a notary; certifying the signature on a power of attorney at a notary costs €16.",
      "You can revoke the power of attorney at any time – inform the agent and those to whom it was presented.",
      "For real estate matters or representation in court, contact a notary or a lawyer."
    ]
  },
  "dokument": {
    "nazev": "Power of Attorney",
    "podnadpis": "for representing a private person",
    "podpisy": {
      "vlevo": "principal",
      "vpravo": "agent (acceptance, optional)"
    },
    "clanky": [
      {
        "nadpis": "Power of attorney",
        "odstavce": [
          "I, the undersigned **{{p_jmeno}}**, {{p_davcna}}, {{p_adresa}} (principal),",
          "authorise **{{k_jmeno}}**, {{k_davcna}}, {{k_adresa}} (agent),",
          "to represent me and carry out the following tasks on my behalf: {{posli}}.",
          "This power of attorney is valid until {{do}} or until revoked."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

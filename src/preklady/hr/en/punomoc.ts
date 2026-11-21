/** English version of src/obsah/hr/punomoc.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-PUNOMOC",
    "verze": "1.0"
  },
  "nazev": "Power of Attorney",
  "nazevA": "the power of attorney",
  "katalog": {
    "popis": "When someone else handles something for you.",
    "slova": [
      "power of attorney",
      "authorisation",
      "letter of authority",
      "proxy for the post office",
      "punomoć"
    ]
  },
  "landing": {
    "description": "Power of attorney for a private person in Croatia (punomoć): who authorises whom, for what and until when. Tips on certifying the signature. Free bilingual PDF.",
    "perex": "When someone else needs to handle something for you – post office, authority, bank or vehicle inspection station.",
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
      "you need a power of attorney for real estate or court – contact a notary (javni bilježnik) or a lawyer"
    ],
    "po": [
      {
        "nazev": "Certification",
        "popis": "At a notary, if the authority or bank requires it."
      }
    ],
    "faq": [
      {
        "q": "Does the signature have to be certified?",
        "a": "It depends on where the power of attorney is used – authorities and banks often require it. Check in advance."
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
    "zakony": "The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima – representation, power of attorney).",
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
    "title": "Power of Attorney Croatia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the power of attorney online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the power of attorney under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podaci": {
        "nazev": "Who authorises whom and for what"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Principal – full name",
        "napoveda": "The person giving the authorisation.",
        "placeholder": "e.g. Ivan Horvat"
      },
      "p_oib": {
        "popis": "Principal’s OIB"
      },
      "p_adresa": {
        "popis": "Principal’s address"
      },
      "k_jmeno": {
        "popis": "Agent – full name",
        "napoveda": "The person who will represent you.",
        "placeholder": "e.g. Ana Kovačević"
      },
      "k_oib": {
        "popis": "Agent’s OIB"
      },
      "k_adresa": {
        "popis": "Agent’s address"
      },
      "poslovi": {
        "popis": "What the power of attorney is for",
        "placeholder": "e.g. preuzimanje preporučene pošiljke na pošti, podnošenje zahtjeva u … (collecting a registered letter at the post office, submitting an application at …)"
      },
      "do": {
        "popis": "Valid until (optional)"
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
      "Sign the power of attorney and give it to the agent.",
      "If an authority or bank requires it, have the signature certified by a notary (javni bilježnik)."
    ],
    "kontrola": [
      "Describe the tasks as specifically as possible – the agent may only do what they are authorised to do.",
      "For procedures before authorities, banks or at a vehicle inspection station, check in advance whether a power of attorney with a certified signature is required.",
      "You can revoke the power of attorney at any time; inform the agent and those before whom they used it.",
      "Check the other party’s identity against their identity card and copy the name and OIB exactly as they appear in the document."
    ]
  },
  "dokument": {
    "nazev": "Power of Attorney",
    "podnadpis": "authorisation to represent",
    "podpisy": {
      "vlevo": "principal",
      "vpravo": "agent (accepts)"
    },
    "clanky": [
      {
        "nadpis": "Power of attorney",
        "odstavce": [
          "I, **{{p_jmeno}}**, OIB {{p_oib}}, address {{p_adresa}} (principal),",
          "authorise **{{k_jmeno}}**, OIB {{k_oib}}, address {{k_adresa}} (agent), to represent me and to take the following actions on my behalf: {{poslovi}}",
          "This power of attorney is valid until {{do}} or until revoked."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

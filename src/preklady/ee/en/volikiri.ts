/** English version of src/obsah/ee/volikiri.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-VOLIKIRI",
    "verze": "1.0"
  },
  "nazev": "Power of Attorney",
  "nazevA": "the power of attorney",
  "katalog": {
    "popis": "When someone else acts on your behalf.",
    "slova": [
      "power of attorney Estonia",
      "authorisation",
      "volikiri",
      "proxy",
      "authorisation for a vehicle"
    ]
  },
  "landing": {
    "description": "Power of attorney for Estonia (volikiri): principal, agent, specific acts, sub-delegation and validity. Handwritten or digital signature. Free PDF template.",
    "perex": "When someone else acts on your behalf – collecting a parcel, dealing with an authority or vehicle formalities.",
    "obsahPopis": "A short power of attorney.",
    "obsah": [
      {
        "nazev": "Principal",
        "popis": "Who grants the authority."
      },
      {
        "nazev": "Agent",
        "popis": "Who acts."
      },
      {
        "nazev": "Acts",
        "popis": "What the agent may do."
      },
      {
        "nazev": "Validity",
        "popis": "Until when and whether sub-delegation is allowed."
      }
    ],
    "online": [
      "PDF and Word",
      "A digital signature is equivalent"
    ],
    "hodiSe": [
      "someone performs a specific act on your behalf",
      "you want to grant authority in writing"
    ],
    "nehodiSe": [
      "you authorise the transfer of real estate – a notarised power of attorney is needed"
    ],
    "po": [
      {
        "nazev": "Hand it over",
        "popis": "The agent presents the power of attorney together with their identity document."
      }
    ],
    "faq": [
      {
        "q": "Does the power of attorney have to be notarised?",
        "a": "For most everyday acts a simple written or digitally signed power of attorney is enough. If the transaction itself requires notarial form, the power of attorney must also be notarised."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the provisions on representation of the Estonian General Part of the Civil Code Act.",
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
    "title": "Power of Attorney Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the power of attorney online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the power of attorney under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "isikud": {
        "nazev": "Who authorises whom"
      },
      "ulatus": {
        "nazev": "What may be done"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Principal – first name and surname",
        "placeholder": "e.g. Mari Tamm"
      },
      "p_ik": {
        "popis": "Personal identification code"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "z_jmeno": {
        "popis": "Agent – first name and surname",
        "placeholder": "e.g. Jaan Kask"
      },
      "z_ik": {
        "popis": "Personal identification code"
      },
      "z_adresa": {
        "popis": "Address"
      },
      "toimingud": {
        "popis": "Acts",
        "napoveda": "The more specific, the better. For a vehicle, enter the registration plate and VIN.",
        "placeholder": "e.g. represent me at a Transpordiamet service office in the issue of the registration certificate of vehicle 123 ABC"
      },
      "edasivolitus": {
        "popis": "May the agent delegate to a third person?",
        "moznosti": {
          "ei": "No",
          "jah": "Yes"
        }
      },
      "kuni": {
        "popis": "Valid until",
        "napoveda": "If you leave it blank, it is valid until revoked."
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
      "Sign the power of attorney by hand or digitally (ID card, Mobile-ID, Smart-ID).",
      "Give it to the agent; they need it together with their identity document."
    ],
    "kontrola": [
      "If the transaction requires notarial form (e.g. sale of real estate), the power of attorney must also be notarised.",
      "Describe specifically what the agent may do and set the period of validity.",
      "For vehicle-related acts, authorisations can also be granted in the Transpordiamet e-service ([Transpordiamet](https://transpordiamet.ee/en/vehicle-ship-airplane/vehicle/amending-register-data)).",
      "Banks and authorities may require their own form – check in advance.",
      "Check the other party’s identity document and copy the name and personal identification code exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Power of Attorney",
    "podnadpis": "authorisation of a natural person to represent (General Part of the Civil Code Act)",
    "podpisy": {
      "vlevo": "Principal",
      "vpravo": "Agent (optional)"
    },
    "clanky": [
      {
        "nadpis": "Power of attorney",
        "odstavce": [
          "I, **{{p_jmeno}}**, personal identification code {{p_ik}}, address {{p_adresa}},",
          "authorise **{{z_jmeno}}**, personal identification code {{z_ik}}, address {{z_adresa}},",
          "to perform the following acts in my name: {{toimingud}}",
          "For this purpose the agent may submit applications, sign the necessary documents and receive documents in my name.",
          {
            "uvodVzor": "Sub-delegation (tick one option):",
            "moznosti": {
              "ei": "The agent may not delegate the authority to a third person.",
              "jah": "The agent may delegate the authority to a third person."
            }
          },
          "This power of attorney is valid until {{kuni}} or until revoked."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

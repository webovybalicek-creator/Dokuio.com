/** English version of src/obsah/hr/suglasnost-za-putovanje-djeteta.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-PUTOVANJE",
    "verze": "1.0"
  },
  "nazev": "Consent for a Child to Travel",
  "nazevA": "the consent for a child to travel",
  "katalog": {
    "popis": "A child travels without one or both parents.",
    "slova": [
      "consent for a child to travel",
      "travel consent letter",
      "child travelling abroad",
      "parental consent",
      "suglasnost za putovanje djeteta"
    ]
  },
  "landing": {
    "title": "Child Travel Consent Croatia {rok} – free PDF template",
    "description": "Parental consent for a minor to travel abroad from Croatia with the other parent, a companion or unaccompanied. For certification by a notary. Free bilingual PDF or Word.",
    "perex": "A child travelling with one parent, with grandma or on a school trip abroad? Written consent from the parent who is not travelling.",
    "obsahPopis": "A short declaration by the parent.",
    "obsah": [
      {
        "nazev": "Consent",
        "popis": "Parent, child, companion, destination and period."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "the child travels without one or both parents"
    ],
    "nehodiSe": [
      "the child is moving abroad – the other parent’s consent or a court decision is needed"
    ],
    "po": [
      {
        "nazev": "Certification",
        "popis": "At a notary (javni bilježnik)."
      },
      {
        "nazev": "Travel documents",
        "popis": "The child has their own identity card or passport."
      }
    ],
    "faq": [
      {
        "q": "Is the consent compulsory?",
        "a": "Border police or a carrier may ask for a document signed by a parent approving the trip; it is best to have it certified."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on Your Europe information on minors travelling from Croatia.",
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
    "souvisejiciPopis": "More documents, also free."
  },
  "vytvorit": {
    "title": "Fill in the consent for a child to travel online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the consent for a child to travel under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "consent",
      "g": "consent",
      "a": "consent",
      "l": "consent"
    },
    "kroky": {
      "roditelj": {
        "nazev": "Parent and child"
      },
      "put": {
        "nazev": "Trip"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Parent – full name",
        "placeholder": "e.g. Ana Kovač"
      },
      "p_oib": {
        "popis": "Parent’s OIB"
      },
      "p_doklad": {
        "popis": "Identity card number"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "p_tel": {
        "popis": "Contact phone"
      },
      "d_jmeno": {
        "popis": "Child – full name",
        "placeholder": "e.g. Lana Kovač"
      },
      "d_narozeni": {
        "popis": "Child’s date of birth"
      },
      "d_doklad": {
        "popis": "Child’s travel document number"
      },
      "pratitelj": {
        "popis": "The child travels",
        "moznosti": {
          "roditelj": "with the other parent",
          "osoba": "with another adult",
          "samo": "alone (organised trip, school)"
        }
      },
      "s_jmeno": {
        "popis": "Companion – full name"
      },
      "s_doklad": {
        "popis": "Companion’s identity card or passport number"
      },
      "zeme": {
        "popis": "Destination",
        "placeholder": "e.g. Italija, Austrija (Italy, Austria)"
      },
      "od": {
        "popis": "From"
      },
      "do": {
        "popis": "To"
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
      "Have the signature certified by a notary – border police abroad more often accept a certified declaration.",
      "Give the child the original together with a copy of the parent’s identity card.",
      "Check the requirements of the country the child is travelling to and of the carrier (airlines have their own forms)."
    ],
    "kontrola": [
      "A child travelling alone or with a person who is not a parent may need an additional document signed by a parent or guardian authorising the trip ([Your Europe](https://europa.eu/youreurope/citizens/travel/entry-exit/travel-documents-minors/croatia/index_hr.htm)).",
      "The child must have their own valid identity card or passport.",
      "State the exact period and destination of the trip and the companion’s details.",
      "Moving a child abroad requires the other parent’s separate consent or a court decision – this declaration applies only to a temporary trip."
    ]
  },
  "dokument": {
    "nazev": "Consent for a Minor to Travel",
    "podnadpis": "declaration by the parent who is not travelling with the child",
    "podpisy": {
      "vlevo": "parent (legal representative)",
      "vpravo": "other parent (if also consenting)"
    },
    "clanky": [
      {
        "nadpis": "Consent",
        "odstavce": [
          "I, **{{p_jmeno}}**, OIB {{p_oib}}, identity card number {{p_doklad}}, address {{p_adresa}}, telephone {{p_tel}}, as a parent and legal representative,",
          "consent to my minor child **{{d_jmeno}}**, born on {{d_narozeni}}, travel document number {{d_doklad}},",
          {
            "uvodVzor": "Accompaniment (tick one option):",
            "moznosti": {
              "roditelj": "travelling accompanied by the other parent {{s_jmeno}}, document number {{s_doklad}},",
              "osoba": "travelling accompanied by {{s_jmeno}}, document number {{s_doklad}}, to whom I entrust the care of the child during the trip,",
              "samo": "travelling without a parent as part of an organised trip,"
            }
          },
          "in the period from {{od}} to {{do}}, to the destination: {{zeme}}.",
          "This consent applies only to the trip stated above."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/bg/predizvestie-prekratyavane-dogovor.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-PREDIZVESTIE",
    "verze": "1.0"
  },
  "nazev": "Notice of Termination of a Contract",
  "nazevA": "the notice of termination of a contract",
  "katalog": {
    "popis": "Mobile operator, insurance, gym, subscription.",
    "slova": [
      "contract termination notice Bulgaria",
      "cancel subscription",
      "cancel mobile contract",
      "cancel insurance",
      "predizvestie za prekratyavane"
    ]
  },
  "landing": {
    "description": "Notice terminating a service contract in Bulgaria (предизвестие): mobile operator, internet, insurance, gym or subscription. Free PDF and Word.",
    "perex": "When you want to cancel a subscription or service contract. The notice period is in the contract or general terms.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Customer, provider, service and termination date."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "you are cancelling a mobile plan, internet, insurance or gym"
    ],
    "nehodiSe": [
      "you are ending a lease or job – there are separate templates"
    ],
    "po": [
      {
        "nazev": "Confirmation",
        "popis": "Ask for written confirmation of the termination date."
      }
    ],
    "faq": [
      {
        "q": "Do I owe a penalty?",
        "a": "For contracts with a minimum term, early termination may lead to a penalty – the amount is in the contract. If the provider has changed the terms to your detriment, you can usually terminate without a penalty."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Obligations and Contracts Act.",
    "title": "Contract Termination Notice Bulgaria {rok} – free PDF template",
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
    "title": "Fill in the notice of termination of a contract online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the notice of termination of a contract under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "notice",
      "g": "notice",
      "a": "notice",
      "l": "notice"
    },
    "kroky": {
      "danni": {
        "nazev": "The termination"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Customer – full name"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Service provider",
        "placeholder": "e.g. оператор, застраховател, фитнес"
      },
      "k_adresa": {
        "popis": "Provider’s address"
      },
      "usluga": {
        "popis": "The service",
        "placeholder": "e.g. мобилен абонамент, интернет, карта за фитнес"
      },
      "nomer": {
        "popis": "Contract no. / customer number"
      },
      "koga": {
        "popis": "I terminate the contract",
        "moznosti": {
          "predizvestie": "with the notice period under the contract (earliest possible date)",
          "data": "as of a specific date"
        }
      },
      "data_prekratyavane": {
        "popis": "Termination date"
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
      "Send the notice by registered letter with acknowledgement of receipt or to the e-mail address stated in the general terms.",
      "Ask for written confirmation of the termination and its date."
    ],
    "kontrola": [
      "Check the notice period and how to terminate (in writing, by e-mail, in your customer account) in the contract or general terms.",
      "For contracts with a minimum term (e.g. a 24-month mobile plan), early termination may lead to a penalty – the amount is in the contract.",
      "State the contract or customer number.",
      "If the provider has changed the terms to your detriment, you can usually terminate without a penalty – refer to this."
    ]
  },
  "dokument": {
    "nazev": "Notice of Termination of a Contract",
    "podnadpis": "termination of a service or subscription contract",
    "podpisy": {
      "vlevo": "Customer",
      "vpravo": "Received (provider, optional)"
    },
    "clanky": [
      {
        "nadpis": "Notice",
        "odstavce": [
          "**Customer:** {{p_jmeno}}, {{p_adresa}}",
          "**Provider:** {{k_jmeno}}, {{k_adresa}}",
          {
            "uvodVzor": "Termination (tick one option):",
            "moznosti": {
              "predizvestie": "I hereby terminate the contract for the service {{usluga}}, no. {{nomer}}, observing the notice period under the contract, i.e. as of the earliest possible date.",
              "data": "I hereby terminate the contract for the service {{usluga}}, no. {{nomer}}, as of {{data_prekratyavane}}."
            }
          },
          "Please confirm in writing receipt of this notice and the termination date of the contract, and do not charge for any services after that date."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

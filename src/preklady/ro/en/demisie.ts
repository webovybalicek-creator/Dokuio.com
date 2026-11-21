/** English version of src/obsah/ro/demisie.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-DEMISIE",
    "verze": "1.0"
  },
  "nazev": "Resignation Letter",
  "nazevA": "the resignation letter",
  "katalog": {
    "popis": "The employee ends the employment contract.",
    "slova": [
      "resignation letter Romania",
      "resign from job",
      "notice period",
      "resignation without notice",
      "demisie"
    ]
  },
  "landing": {
    "description": "Resignation letter for Romania (demisie) under Art. 81 of the Labour Code: notice up to 20 or 45 working days, registration, waiver of notice. Free PDF.",
    "perex": "For an employee who wants to end the employment contract. No reason is needed; the notice period is the one in the contract.",
    "obsahPopis": "The notice period from the contract, at most 20 working days for execution roles and 45 for management roles (Art. 81 Labour Code).",
    "obsah": [
      {
        "nazev": "Resignation",
        "popis": "Employee, employer, contract and notice period."
      },
      {
        "nazev": "Request",
        "popis": "Remaining leave or waiver of notice."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "you want to end your employment contract"
    ],
    "nehodiSe": [
      "your employer wants to dismiss you – that is a different procedure"
    ],
    "po": [
      {
        "nazev": "Registration",
        "popis": "Ask for a registration number on your copy."
      },
      {
        "nazev": "Leave",
        "popis": "Agree on taking your remaining holiday."
      }
    ],
    "faq": [
      {
        "q": "How long is the notice period for resignation?",
        "a": "The one in the individual or collective employment contract, but not more than 20 working days for execution roles and 45 working days for management roles (Art. 81 Labour Code)."
      },
      {
        "q": "Can I leave without notice?",
        "a": "Yes, if the employer waives the notice or does not fulfil its obligations under the contract."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Romanian Labour Code (Law no. 53/2003), Art. 81.",
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
    "title": "Resignation Letter Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the resignation letter online – Romania, free PDF",
    "description": "Step-by-step guide in English for the resignation letter under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "resignation",
      "g": "resignation",
      "a": "resignation",
      "l": "resignation"
    },
    "kroky": {
      "date": {
        "nazev": "Employee and employer"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Employee – full name"
      },
      "p_adresa": {
        "popis": "Address (domicile)"
      },
      "k_jmeno": {
        "popis": "Employer",
        "placeholder": "e.g. Exemplu SRL"
      },
      "k_adresa": {
        "popis": "Employer’s registered office"
      },
      "functie": {
        "popis": "Job title",
        "placeholder": "e.g. vânzătoare"
      },
      "contract_nr": {
        "popis": "Individual employment contract no. / dated",
        "placeholder": "e.g. 112 din 03.02.2025"
      },
      "preaviz": {
        "popis": "Notice period",
        "placeholder": "e.g. 20"
      },
      "renuntare": {
        "popis": "Ask for the notice to be waived?",
        "moznosti": {
          "nu": "no",
          "da": "yes, end on a specific date"
        }
      },
      "data_incetare": {
        "popis": "Proposed end date"
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
      "Hand in the resignation at the employer’s registry and ask for a registration number on your copy, or send it by registered letter.",
      "The notice period runs from the date the resignation is registered.",
      "Agree on taking your remaining holiday."
    ],
    "kontrola": [
      "The employee does not have to give reasons for resigning (Art. 81 Labour Code).",
      "The notice period is the one in the individual or collective employment contract and may not exceed 20 working days for execution roles or 45 working days for management roles.",
      "The employer must register the resignation; if it refuses, you can prove the resignation by any means of evidence.",
      "The employer may waive the notice in full or in part. If the employer does not fulfil its contractual obligations, you may resign without notice."
    ]
  },
  "dokument": {
    "nazev": "Resignation",
    "podnadpis": "employee’s notice terminating the individual employment contract",
    "podpisy": {
      "vlevo": "Employee",
      "vpravo": "Registered by the employer (no., date and signature)"
    },
    "clanky": [
      {
        "nadpis": "Resignation",
        "odstavce": [
          "**Employee:** {{p_jmeno}}, {{p_adresa}}",
          "**Employer:** {{k_jmeno}}, {{k_adresa}}",
          "Under Art. 81 of the Labour Code, I hereby give notice terminating individual employment contract no. {{contract_nr}}, for the position of {{functie}}, by resignation.",
          "The notice period is {{preaviz}} working days and runs from the date this notice is registered.",
          {
            "uvodVzor": "Request (tick one option):",
            "moznosti": {
              "nu": "Please allow me to take my remaining annual leave before the notice period expires or pay me compensation for leave not taken.",
              "da": "Please waive the notice period so that the contract ends on {{data_incetare}}. If you do not agree, the contract ends when the notice period expires."
            }
          }
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

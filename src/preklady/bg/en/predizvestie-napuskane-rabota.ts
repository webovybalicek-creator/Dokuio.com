/** English version of src/obsah/bg/predizvestie-napuskane-rabota.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "BG-NAPUSKANE",
    "verze": "1.0"
  },
  "nazev": "Resignation Notice",
  "nazevA": "the resignation notice",
  "katalog": {
    "popis": "The employee terminates the employment contract.",
    "slova": [
      "resignation notice Bulgaria",
      "resign from job",
      "Art. 326 Labour Code",
      "notice period 30 days",
      "predizvestie za napuskane"
    ]
  },
  "landing": {
    "description": "Resignation notice for Bulgaria under Art. 326 of the Labour Code: 30 days’ notice (up to 3 months by agreement), registration number, earlier termination. Free PDF.",
    "perex": "For an employee who wants to end the employment contract. No reason is needed; the notice period follows the contract.",
    "obsahPopis": "30 days for a permanent contract unless a longer period is agreed, up to 3 months (Art. 326 Labour Code).",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Employee, employer, contract and period."
      },
      {
        "nazev": "Request",
        "popis": "Leave or earlier termination by agreement."
      }
    ],
    "online": [
      "PDF and Word",
      "Signature on screen"
    ],
    "hodiSe": [
      "you want to leave your job"
    ],
    "nehodiSe": [
      "your employer wants to dismiss you – that is a different procedure"
    ],
    "po": [
      {
        "nazev": "Registration number",
        "popis": "Ask for a registration number on your copy."
      },
      {
        "nazev": "Leave",
        "popis": "Agree on your remaining paid leave."
      }
    ],
    "faq": [
      {
        "q": "How long is the notice period when resigning?",
        "a": "For a permanent employment contract – 30 days, unless a longer period has been agreed, but not more than 3 months (Art. 326(2) Labour Code)."
      },
      {
        "q": "Can I leave earlier?",
        "a": "Yes, if the employer accepts termination by mutual consent. Otherwise the contract ends when the notice period expires."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Bulgarian Labour Code, Art. 326.",
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
    "title": "Resignation Notice Bulgaria {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the resignation notice online – Bulgaria, free PDF",
    "description": "Step-by-step guide in English for the resignation notice under Bulgarian law. Bilingual PDF or Word with the original text, free of charge.",
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
        "nazev": "Employee and employer"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Employee – full name"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Employer",
        "placeholder": "e.g. Пример ЕООД"
      },
      "k_adresa": {
        "popis": "Employer’s registered office"
      },
      "dlazhnost": {
        "popis": "Job title",
        "placeholder": "e.g. продавач-консултант"
      },
      "dogovor_nr": {
        "popis": "Employment contract no. / dated",
        "placeholder": "e.g. 112 от 03.02.2025 г."
      },
      "predizvestie": {
        "popis": "Notice period",
        "placeholder": "e.g. 30"
      },
      "po_saglasie": {
        "popis": "Are you proposing earlier termination by mutual consent?",
        "moznosti": {
          "ne": "no",
          "da": "yes, as of a specific date"
        }
      },
      "data_prekratyavane": {
        "popis": "Proposed termination date"
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
      "Hand in the notice at the employer’s registry and ask for a registration number on your copy, or send it by registered letter.",
      "The notice period runs from the day after delivery.",
      "Agree on using your remaining paid leave."
    ],
    "kontrola": [
      "An employee may terminate the employment contract with written notice without giving a reason (Art. 326 Labour Code).",
      "For a permanent employment contract the period is 30 days, unless a longer one has been agreed, but not more than 3 months ([Art. 326(2) Labour Code](https://apps.eurofound.europa.eu/legislationdb/notice-period-to-employees/bulgaria)). Check the period in your contract.",
      "If you want to leave earlier, you can propose termination by mutual consent – if the employer does not accept it, the contract ends when the notice expires.",
      "If you do not observe the notice period, the employer may claim compensation for the unobserved period – so agree in writing."
    ]
  },
  "dokument": {
    "nazev": "Notice of Termination of an Employment Contract",
    "podnadpis": "by the employee under Art. 326 of the Labour Code",
    "podpisy": {
      "vlevo": "Employee",
      "vpravo": "Reg. no. / date at the employer"
    },
    "clanky": [
      {
        "nadpis": "Notice",
        "odstavce": [
          "**Employee:** {{p_jmeno}}, {{p_adresa}}",
          "**Employer:** {{k_jmeno}}, {{k_adresa}}",
          "Pursuant to Art. 326(1) of the Labour Code, I hereby give notice that I am terminating my employment contract no. {{dogovor_nr}} for the position of {{dlazhnost}}.",
          "The notice period is {{predizvestie}} days and runs from the day following the delivery of this notice.",
          {
            "uvodVzor": "Request (tick one option):",
            "moznosti": {
              "ne": "Please allow me to use my remaining paid annual leave before the notice period expires or pay me compensation for the unused leave.",
              "da": "I propose that the employment contract be terminated by mutual consent on {{data_prekratyavane}}. If you do not accept the proposal, the contract ends when the notice period expires."
            }
          }
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

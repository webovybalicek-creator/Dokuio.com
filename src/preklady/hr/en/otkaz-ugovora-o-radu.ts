/** English version of src/obsah/hr/otkaz-ugovora-o-radu.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-OTKAZ-RAD",
    "verze": "1.0"
  },
  "nazev": "Resignation Letter",
  "nazevA": "the resignation letter",
  "katalog": {
    "popis": "Ordinary resignation by the employee.",
    "slova": [
      "resignation letter",
      "resign from job Croatia",
      "notice period",
      "employment termination",
      "otkaz ugovora o radu"
    ]
  },
  "landing": {
    "title": "Resignation Letter Croatia {rok} – free PDF template",
    "description": "Employee resignation letter for Croatia (otkaz ugovora o radu): no reason needed, notice period under the Labour Act, option of an earlier end. Free PDF.",
    "perex": "Leaving your job? As an employee you resign without giving a reason, in writing, with a notice period – or propose an earlier end by agreement.",
    "obsahPopis": "A short written resignation.",
    "obsah": [
      {
        "nazev": "Resignation",
        "popis": "Employee, employer, notice period, proposal."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "you are an employee and are leaving your job"
    ],
    "nehodiSe": [
      "you are the employer – a dismissal needs a justified reason and an explanation"
    ],
    "po": [
      {
        "nazev": "Delivery",
        "popis": "In person against a signature of receipt or by registered post."
      },
      {
        "nazev": "Annual leave",
        "popis": "Agree on remaining leave."
      }
    ],
    "faq": [
      {
        "q": "Do I have to give a reason?",
        "a": "No – an employee resigns without giving a reason, but with a notice period."
      },
      {
        "q": "How long is the notice period?",
        "a": "It depends on how long you have worked for the employer – e.g. one month after one year, two months after five years; the contract may set a shorter period."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Labour Act (Zakon o radu – ordinary notice, notice period).",
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
    "title": "Fill in the resignation letter online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the resignation letter under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podaci": {
        "nazev": "Employee and employer"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Employee – full name",
        "placeholder": "e.g. Ana Kovač"
      },
      "p_oib": {
        "popis": "OIB"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Employer",
        "placeholder": "e.g. Primjer d.o.o."
      },
      "k_adresa": {
        "popis": "Employer’s address"
      },
      "mjesto_rada": {
        "popis": "Job title",
        "placeholder": "e.g. prodavačica (shop assistant)"
      },
      "ugovor_od": {
        "popis": "Employment contract of"
      },
      "rok": {
        "popis": "Notice period",
        "placeholder": "e.g. mjesec dana (one month)"
      },
      "sporazum": {
        "popis": "Propose an earlier end by agreement?",
        "moznosti": {
          "ne": "no",
          "da": "yes, with a specific date"
        }
      },
      "raniji": {
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
      "Hand in the resignation in person against a signature of receipt on your copy or send it by registered post.",
      "The notice period starts on the day the resignation is delivered to the employer.",
      "Agree on using your remaining annual leave or being paid compensation for it."
    ],
    "kontrola": [
      "As an employee you may terminate the employment contract without giving a reason, but with the notice period under the law or the contract ([gov.hr](https://www.gov.hr/hr/redoviti-otkaz/840)).",
      "The resignation must be in writing and delivered to the employer.",
      "The minimum notice period depends on how long you have worked for the same employer (Labour Act, Art. 122) – e.g. one month after one year, two months after five years. The employment contract or a collective agreement may set a shorter period for the employee.",
      "If you have a particularly important reason for resigning, the notice period may not be longer than one month.",
      "If you want to leave immediately, propose to the employer that the employment contract end by agreement – without their consent you must work out the notice period."
    ]
  },
  "dokument": {
    "nazev": "Notice of Termination of Employment",
    "podnadpis": "ordinary resignation by the employee",
    "podpisy": {
      "vlevo": "employee",
      "vpravo": "received for the employer (date and signature)"
    },
    "clanky": [
      {
        "nadpis": "Resignation",
        "odstavce": [
          "**Employee:** {{p_jmeno}}, OIB {{p_oib}}, {{p_adresa}}",
          "**Employer:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby give ordinary notice terminating the employment contract of {{ugovor_od}} for the position of {{mjesto_rada}}.",
          "The notice period is {{rok}} and starts on the day this notice is delivered.",
          {
            "uvodVzor": "Proposal (tick one option):",
            "moznosti": {
              "ne": "Please allow me to use my remaining annual leave before the notice period ends, or pay me compensation for unused annual leave.",
              "da": "I propose that the employment contract end by agreement as early as {{raniji}}. If you do not agree, the contract ends when the notice period expires."
            }
          }
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

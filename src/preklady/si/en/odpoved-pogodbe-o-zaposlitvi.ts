/** English version of src/obsah/si/odpoved-pogodbe-o-zaposlitvi.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-ODPOVED-DELO",
    "verze": "1.0"
  },
  "nazev": "Resignation Letter",
  "nazevA": "the resignation letter",
  "katalog": {
    "popis": "Ordinary resignation by the employee.",
    "slova": [
      "resignation letter",
      "resign from job Slovenia",
      "notice period",
      "ZDR-1",
      "odpoved pogodbe o zaposlitvi"
    ]
  },
  "landing": {
    "title": "Resignation Letter Slovenia {rok} – free PDF template",
    "description": "Employee’s ordinary resignation in Slovenia under ZDR-1 (odpoved pogodbe o zaposlitvi): 15 or 30 days’ notice, written form and delivery to the employer. Free PDF.",
    "perex": "When you are leaving your job. A written resignation with the notice period under the Employment Relationships Act.",
    "obsahPopis": "A short written resignation.",
    "obsah": [
      {
        "nazev": "Resignation",
        "popis": "Employer, contract, notice period, last day."
      }
    ],
    "online": [
      "Calculation of the last day",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are leaving your job",
      "you want a written resignation with a notice period"
    ],
    "nehodiSe": [
      "you are reaching an agreement with the employer – mutual termination"
    ],
    "po": [
      {
        "nazev": "Delivery",
        "popis": "In person against a signature or by registered post."
      }
    ],
    "faq": [
      {
        "q": "How long is the notice period?",
        "a": "For the employee, 15 days for up to one year of employment with the employer, then 30 days; up to 60 days by contract or collective agreement (Art. 94 ZDR-1)."
      },
      {
        "q": "Does the resignation have to be in writing?",
        "a": "Yes."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Employment Relationships Act (Zakon o delovnih razmerjih, ZDR-1).",
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
    "title": "Fill in the resignation letter online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the resignation letter under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "podatki": {
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
        "placeholder": "e.g. Primer d. o. o."
      },
      "k_adresa": {
        "popis": "Employer’s address"
      },
      "delo": {
        "popis": "Job title",
        "placeholder": "e.g. prodajalka (shop assistant)"
      },
      "pogodba_od": {
        "popis": "Employment contract of"
      },
      "rok": {
        "popis": "Notice period (days)",
        "placeholder": "e.g. 30"
      },
      "sporazum": {
        "popis": "Propose an earlier end by agreement?",
        "moznosti": {
          "ne": "no",
          "da": "yes, with a specific date"
        }
      },
      "prej": {
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
      "Deliver the resignation in person against a signature of receipt on your copy or send it by registered post with a return receipt.",
      "The notice period starts on the day after delivery.",
      "Agree on using your remaining annual leave."
    ],
    "kontrola": [
      "An employee may give ordinary notice of termination of the employment contract without stating reasons, but must observe the notice period.",
      "The employee’s minimum notice period is 15 days for employment of up to one year or 30 days for longer employment (Art. 94 ZDR-1); the employment contract or a collective agreement may set a longer period, generally up to 60 days.",
      "The resignation must be in writing and delivered to the employer.",
      "If you want to leave earlier, propose a mutual termination of the employment contract – without the employer’s consent the notice period must be worked.",
      "An employee who resigns is generally not entitled to severance pay."
    ]
  },
  "dokument": {
    "nazev": "Ordinary Termination of the Employment Contract",
    "podnadpis": "resignation by the employee",
    "podpisy": {
      "vlevo": "employee",
      "vpravo": "received for the employer (date and signature)"
    },
    "clanky": [
      {
        "nadpis": "Resignation",
        "odstavce": [
          "**Employee:** {{p_jmeno}}, {{p_adresa}}",
          "**Employer:** {{k_jmeno}}, {{k_adresa}}",
          "Pursuant to the Employment Relationships Act, I give ordinary notice terminating the employment contract of {{pogodba_od}} for the position of {{delo}}.",
          "The notice period is {{rok}} days and starts on the day after this notice is delivered.",
          {
            "uvodVzor": "Proposal (tick one option):",
            "moznosti": {
              "ne": "Please allow me to use my remaining annual leave before the notice period ends, or pay me compensation for unused leave.",
              "da": "I propose that the employment contract end by mutual agreement as early as {{prej}}. If you do not agree, the contract ends when the notice period expires."
            }
          }
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

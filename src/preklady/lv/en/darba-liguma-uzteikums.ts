/** English version of src/obsah/lv/darba-liguma-uzteikums.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LV-DARBA-UZTEIKUMS",
    "verze": "1.0"
  },
  "nazev": "Employee’s Notice of Resignation",
  "nazevA": "the employee’s notice of resignation",
  "katalog": {
    "popis": "Leaving a job, one month’s notice.",
    "slova": [
      "resignation letter Latvia",
      "employee notice Latvia",
      "notice period Latvia",
      "atlūgums",
      "darbinieka uzteikums"
    ]
  },
  "landing": {
    "description": "Employee’s notice of resignation for Latvia (darbinieka uzteikums, atlūgums) under Section 100 of the Labour Law: in writing one month ahead, last working day. Free PDF.",
    "perex": "For an employee leaving a job. The Labour Law provides for written notice one month in advance unless a shorter period has been agreed.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Notice",
        "popis": "Employee, employer, contract, last day."
      }
    ],
    "online": [
      "Reminder of the one-month period",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are leaving a job on your own initiative"
    ],
    "nehodiSe": [
      "you want to leave immediately for good cause – then the notice must state the circumstances"
    ],
    "po": [
      {
        "nazev": "Receipt",
        "popis": "Ask for confirmation of receipt."
      },
      {
        "nazev": "Settlement",
        "popis": "Check the compensation for unused leave."
      }
    ],
    "faq": [
      {
        "q": "Can the employer refuse to accept the notice?",
        "a": "No. The employee’s notice is binding and the employment ends when the notice period expires."
      },
      {
        "q": "Can I leave sooner?",
        "a": "Yes, if you agree with the employer – put the agreement in writing."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on Section 100 of the Latvian Labour Law.",
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
    "title": "Employee’s Notice of Resignation Latvia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the employee’s notice of resignation online – Latvia, free PDF",
    "description": "Step-by-step guide in English for the employee’s notice of resignation under Latvian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "dati": {
        "nazev": "Employee and employer"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Employee – first name and surname"
      },
      "p_ik": {
        "popis": "Personal code"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "amats": {
        "popis": "Position"
      },
      "k_jmeno": {
        "popis": "Employer",
        "placeholder": "e.g. Paraugs SIA"
      },
      "k_adresa": {
        "popis": "Employer’s address"
      },
      "ligums": {
        "popis": "Employment contract concluded on"
      },
      "pedeja": {
        "popis": "Last working day",
        "napoveda": "At least one month after submitting the notice unless agreed otherwise."
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
      "Give the notice to the employer and ask them to confirm receipt on your copy, or send it by e-mail with eParaksts.",
      "The employer informs the State Revenue Service of the end of the employment.",
      "Check the final settlement: pay and compensation for unused annual leave."
    ],
    "kontrola": [
      "An employee may give written notice one month in advance unless the collective agreement or employment contract provides for a shorter period ([Labour Law, Section 100](https://likumi.lv/ta/id/26019-darba-likums)).",
      "The notice takes effect when it is communicated to the employer in writing; the notice period runs from that day.",
      "By agreement with the employer, the employment may also end before the notice period expires – then write the agreed date.",
      "At the employee’s request, periods of temporary incapacity for work are not counted in the notice period."
    ],
    "pripominky": {
      "Uzteikuma termiņa beigas (1 mēnesis)": {
        "nazev": "End of the notice period (1 month)",
        "popis": "If the notice is submitted on this day and no shorter period has been agreed."
      },
      "Pēdējā darba diena": {
        "nazev": "Last working day",
        "popis": "Check the final settlement and compensation for unused leave."
      }
    }
  },
  "dokument": {
    "nazev": "Notice of Termination of Employment",
    "podnadpis": "termination of the employment contract at the employee’s initiative (Labour Law, Section 100)",
    "podpisy": {
      "vlevo": "Employee",
      "vpravo": "Received (employer, date)"
    },
    "clanky": [
      {
        "nadpis": "Notice of termination of the employment contract",
        "odstavce": [
          "**Employee:** {{p_jmeno}}, personal code {{p_ik}}, {{p_adresa}}, position {{amats}}",
          "**Employer:** {{k_jmeno}}, {{k_adresa}}",
          "Under Section 100(1) of the Labour Law, I give notice of termination of the employment contract concluded on {{ligums}}.",
          "My last working day is {{pedeja}}.",
          "Please pay the final settlement, including compensation for unused annual leave."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

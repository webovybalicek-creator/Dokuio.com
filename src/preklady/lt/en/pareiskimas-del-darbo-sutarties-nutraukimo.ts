/** English version of src/obsah/lt/pareiskimas-del-darbo-sutarties-nutraukimo.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "LT-DARBO-NUTRAUKIMAS",
    "verze": "1.0"
  },
  "nazev": "Resignation Letter",
  "nazevA": "the resignation letter",
  "katalog": {
    "popis": "The employee ends the employment contract.",
    "slova": [
      "resignation letter Lithuania",
      "termination of employment by employee",
      "quit job Lithuania",
      "pareiškimas dėl darbo sutarties nutraukimo"
    ]
  },
  "landing": {
    "description": "Employee’s resignation letter for Lithuania (pareiškimas dėl darbo sutarties nutraukimo): 20 calendar days’ notice, last working day, final pay. Free PDF and Word.",
    "perex": "When you want to leave your job on your own initiative. The Labour Code requires a written notice given at least 20 calendar days in advance.",
    "obsahPopis": "A short letter.",
    "obsah": [
      {
        "nazev": "Letter",
        "popis": "Employee, employer, contract and last working day."
      }
    ],
    "online": [
      "Deadline reminders",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are leaving your job on your own initiative"
    ],
    "nehodiSe": [
      "you want to agree with the employer – write an agreement of the parties",
      "you are leaving for important reasons (Labour Code, Art. 56)"
    ],
    "po": [
      {
        "nazev": "Delivery",
        "popis": "Ask for receipt to be confirmed on your copy."
      },
      {
        "nazev": "Final pay",
        "popis": "Check the compensation for unused annual leave."
      }
    ],
    "faq": [
      {
        "q": "How much notice must I give?",
        "a": "At least 20 calendar days (Labour Code, Article 55)."
      },
      {
        "q": "Can I withdraw the notice?",
        "a": "Yes, within three working days of submitting it. Later – only with the employer’s consent."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on Article 55 of the Labour Code.",
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
    "title": "Resignation Letter Lithuania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the resignation letter online – Lithuania, free PDF",
    "description": "Step-by-step guide in English for the resignation letter under Lithuanian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "letter",
      "g": "letter",
      "a": "letter",
      "l": "letter"
    },
    "kroky": {
      "duomenys": {
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
        "placeholder": "e.g. UAB „Pavyzdys“"
      },
      "k_adresa": {
        "popis": "Employer’s address"
      },
      "ligums": {
        "popis": "Employment contract concluded on"
      },
      "pedeja": {
        "popis": "Last working day",
        "napoveda": "No earlier than 20 calendar days after the notice is submitted, unless agreed otherwise."
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
      "Hand the notice to the employer and ask them to confirm receipt on your copy, or send it by e-mail signed with a qualified electronic signature.",
      "No later than on the last working day the employer formalises the end of the employment contract.",
      "Check the final pay: wages and compensation for unused annual leave."
    ],
    "kontrola": [
      "An employee may terminate an indefinite or fixed-term employment contract by written notice given to the employer at least 20 calendar days in advance ([Labour Code, Art. 55](https://www.e-tar.lt/portal/lt/legalAct/f6d686707e7011e6b969d7ae07280e89/asr)).",
      "The notice may be withdrawn within three working days of submitting it; later – only with the employer’s consent.",
      "The employment contract ends when the notice period expires. By agreement with the employer you can also end the contract earlier – then it is better to write an agreement of the parties.",
      "For important reasons (e.g. illness, or the employer not paying wages) Article 56 of the Labour Code provides for a shorter notice and severance pay – this template is not intended for that."
    ],
    "pripominky": {
      "Paskutinė darbo diena": {
        "nazev": "Last working day",
        "popis": "Check the final pay and the compensation for unused leave."
      },
      "Įspėjimo termino pabaiga (20 kalendorinių dienų)": {
        "nazev": "End of the notice period (20 calendar days)",
        "popis": "If the notice is submitted on this day."
      },
      "Paskutinė diena atšaukti pareiškimą (3 darbo dienos)": {
        "nazev": "Last day to withdraw the notice (3 working days)",
        "popis": "Later it can be withdrawn only with the employer’s consent."
      }
    }
  },
  "dokument": {
    "nazev": "Notice of Termination of the Employment Contract",
    "podnadpis": "termination of the employment contract on the employee’s initiative (Labour Code, Article 55)",
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
          "Under Article 55(1) of the Labour Code of the Republic of Lithuania, I request termination of the employment contract concluded on {{ligums}}.",
          "My last working day is {{pedeja}}.",
          "Please pay the final settlement, including compensation for unused annual leave."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

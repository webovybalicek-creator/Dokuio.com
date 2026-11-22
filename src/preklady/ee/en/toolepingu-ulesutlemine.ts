/** English version of src/obsah/ee/toolepingu-ulesutlemine.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "EE-TOOLEPING-ULESUTLEMINE",
    "verze": "1.0"
  },
  "nazev": "Notice of Termination of Employment",
  "nazevA": "the notice of termination of employment",
  "katalog": {
    "popis": "Leaving a job, 30 days’ notice.",
    "slova": [
      "resignation letter Estonia",
      "termination of employment contract",
      "30 days notice",
      "leaving a job Estonia",
      "töölepingu ülesütlemine"
    ]
  },
  "landing": {
    "description": "Employee’s notice of termination of employment for Estonia (töölepingu ülesütlemine): at least 30 calendar days’ notice, last working day, final pay. Free PDF.",
    "perex": "When you want to leave your job. An employee may terminate an indefinite employment contract without giving reasons by giving at least 30 calendar days’ notice.",
    "obsahPopis": "A short notice.",
    "obsah": [
      {
        "nazev": "Employee and employer",
        "popis": "Who terminates and to whom."
      },
      {
        "nazev": "Termination",
        "popis": "Under § 98 of the Employment Contracts Act."
      },
      {
        "nazev": "Last working day",
        "popis": "And final settlement."
      }
    ],
    "online": [
      "Deadline reminder",
      "PDF and Word"
    ],
    "hodiSe": [
      "you want to end an indefinite employment contract"
    ],
    "nehodiSe": [
      "you agreed the termination with your employer – write an agreement"
    ],
    "po": [
      {
        "nazev": "Hand it over",
        "popis": "Hand over the notice against signature or send it digitally signed."
      },
      {
        "nazev": "Final pay",
        "popis": "Check the salary and holiday compensation."
      }
    ],
    "faq": [
      {
        "q": "In what form must the notice be?",
        "a": "In a form that can be reproduced in writing – for example a signed paper or an e-mail."
      },
      {
        "q": "Can I leave earlier than 30 days?",
        "a": "Yes, if your employer agrees; write the agreed date in the notice."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the termination provisions of the Estonian Employment Contracts Act.",
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
    "title": "Notice of Termination of Employment Estonia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the notice of termination of employment online – Estonia, free PDF",
    "description": "Step-by-step guide in English for the notice of termination of employment under Estonian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "andmed": {
        "nazev": "Employee and employer"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Employee – first name and surname"
      },
      "p_ik": {
        "popis": "Personal identification code"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "pozice": {
        "popis": "Position"
      },
      "k_jmeno": {
        "popis": "Employer",
        "placeholder": "e.g. Näidis OÜ"
      },
      "k_adresa": {
        "popis": "Employer’s address"
      },
      "leping": {
        "popis": "Employment contract concluded on"
      },
      "viimane": {
        "popis": "Last working day",
        "napoveda": "At least 30 calendar days after handing over the notice, unless agreed otherwise."
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
      "Hand the notice to your employer and ask them to confirm receipt on your copy, or send it digitally signed by e-mail.",
      "The employer enters the end of employment in the employment register.",
      "Check the final settlement: salary and compensation for unused annual holiday."
    ],
    "kontrola": [
      "An employee may terminate an indefinite employment contract without giving reasons by giving at least 30 calendar days’ notice ([Employment Contracts Act § 98](https://www.riigiteataja.ee/akt/106072023108?leiaKehtiv)).",
      "The notice must be in a form that can be reproduced in writing, e.g. a signed paper or an e-mail ([Employment Contracts Act § 95](https://www.riigiteataja.ee/akt/106072023108?leiaKehtiv)).",
      "An earlier end date can also be agreed with the employer – in that case write the agreed date in the notice.",
      "An employee can generally terminate a fixed-term employment contract only extraordinarily for good reason; if necessary, agree the termination with the employer."
    ],
    "pripominky": {
      "Viimane tööpäev": {
        "nazev": "Last working day",
        "popis": "Check the final settlement and compensation for unused holiday."
      },
      "Varaseim lõppemise päev (30 kalendripäeva)": {
        "nazev": "Earliest end date (30 calendar days)",
        "popis": "If the notice is handed over on this day."
      }
    }
  },
  "dokument": {
    "nazev": "Notice of Termination of an Employment Contract",
    "podnadpis": "ordinary termination by the employee (Employment Contracts Act § 98)",
    "podpisy": {
      "vlevo": "Employee",
      "vpravo": "Received (employer, date)"
    },
    "clanky": [
      {
        "nadpis": "Notice of termination of the employment contract",
        "odstavce": [
          "**Employee:** {{p_jmeno}}, personal identification code {{p_ik}}, {{p_adresa}}, position {{pozice}}",
          "**Employer:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby terminate the employment contract concluded on {{leping}} under § 98 of the Employment Contracts Act.",
          "My last working day is {{viimane}}.",
          "Please pay the final settlement, including compensation for unused holiday, and enter the end of employment in the employment register."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

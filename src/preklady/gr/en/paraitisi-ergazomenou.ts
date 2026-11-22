/** English version of src/obsah/gr/paraitisi-ergazomenou.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "GR-PARAITISI",
    "verze": "1.0"
  },
  "nazev": "Resignation Letter",
  "nazevA": "the resignation letter",
  "katalog": {
    "popis": "The employee resigns from their job.",
    "slova": [
      "resignation letter Greece",
      "voluntary resignation Greece",
      "ERGANI resignation",
      "quit a job Greece",
      "paraitisi ergazomenou"
    ]
  },
  "landing": {
    "description": "Resignation letter for Greece (δήλωση οικειοθελούς αποχώρησης): last working day, ERGANI notification within 4 working days, final pay. Free PDF and Word.",
    "perex": "For an employee resigning from an open-ended contract. You do not need to give a reason.",
    "obsahPopis": "A short declaration.",
    "obsah": [
      {
        "nazev": "Declaration",
        "popis": "Employee, employer, position and last day."
      },
      {
        "nazev": "Request",
        "popis": "ERGANI notification and final pay."
      }
    ],
    "online": [
      "PDF and Word",
      "Sign on screen"
    ],
    "hodiSe": [
      "you want to resign from your job"
    ],
    "nehodiSe": [
      "your employer is dismissing you – that is a different procedure"
    ],
    "po": [
      {
        "nazev": "Receipt",
        "popis": "Ask for a signature of receipt on your copy."
      },
      {
        "nazev": "Final pay",
        "popis": "Ask for your salary, pro-rata bonuses and pay for unused leave."
      }
    ],
    "faq": [
      {
        "q": "Is there a notice period?",
        "a": "For an open-ended contract the law sets no notice period for the employee. Check whether your contract provides otherwise."
      },
      {
        "q": "What does the employer do?",
        "a": "They notify the resignation in ERGANI within 4 working days (Presidential Decree 62/2025, Art. 330)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on Presidential Decree 62/2025 (Code of Individual Labour Law).",
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
    "title": "Resignation Letter Greece {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the resignation letter online – Greece, free PDF",
    "description": "Step-by-step guide in English for the resignation letter under Greek law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stoixeia": {
        "nazev": "Employee and employer"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Employee – full name"
      },
      "p_afm": {
        "popis": "Tax number (AFM)"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Employer",
        "placeholder": "e.g. Παράδειγμα Μ.Ι.Κ.Ε."
      },
      "k_adresa": {
        "popis": "Employer’s registered office"
      },
      "thesi": {
        "popis": "Position",
        "placeholder": "e.g. πωλητής"
      },
      "apo": {
        "popis": "Employed since"
      },
      "teleftaia": {
        "popis": "Last working day"
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
      "Give the letter to your employer and ask them to sign for receipt on your copy, or send it by registered letter.",
      "The employer must notify your departure in ERGANI within 4 working days.",
      "Ask for the final settlement: salary, pro-rata bonuses and pay for leave not taken."
    ],
    "kontrola": [
      "An employee with an open-ended contract may leave at any time without giving a reason; the law sets no notice period for the employee. Check whether your contract provides otherwise.",
      "The resignation must be in writing so that the employer can notify it in ERGANI (within 4 working days – Presidential Decree 62/2025, Art. 330).",
      "On voluntary resignation no severance pay is due; however, earned pay, pro-rata bonuses and pay for unused leave are owed.",
      "In a fixed-term contract, leaving early without good cause may create a liability for compensation – agree the termination in writing with the employer."
    ]
  },
  "dokument": {
    "nazev": "Resignation Letter",
    "podnadpis": "resignation of an employee from an open-ended employment contract",
    "podpisy": {
      "vlevo": "The Employee",
      "vpravo": "Received (employer, date)"
    },
    "clanky": [
      {
        "nadpis": "Voluntary resignation",
        "odstavce": [
          "**Employee:** {{p_jmeno}}, tax number {{p_afm}}, {{p_adresa}}",
          "**Employer:** {{k_jmeno}}, {{k_adresa}}",
          "I hereby declare that I voluntarily resign from my position as {{thesi}}, in which I have been employed since {{apo}}. My last working day is {{teleftaia}}.",
          "Please notify the termination of the contract in the ERGANI system and pay me the earned salary, the pro-rata bonuses and pay for the leave I have not taken."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

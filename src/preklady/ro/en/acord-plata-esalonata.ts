/** English version of src/obsah/ro/acord-plata-esalonata.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "RO-ESALONARE",
    "verze": "1.0"
  },
  "nazev": "Instalment Payment Agreement",
  "nazevA": "the instalment payment agreement",
  "katalog": {
    "popis": "Paying a debt in monthly instalments.",
    "slova": [
      "instalment agreement Romania",
      "payment plan",
      "debt in instalments",
      "repayment schedule",
      "acord plata esalonata"
    ]
  },
  "landing": {
    "description": "Instalment payment agreement for Romania (acord de plată eșalonată): acknowledged debt, number and amount of instalments, due dates, default. Free bilingual PDF.",
    "perex": "For a debt paid in monthly instalments. The debtor acknowledges the debt, which interrupts the limitation period.",
    "obsahPopis": "Five articles under the Romanian Civil Code.",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Creditor and debtor."
      },
      {
        "nazev": "Acknowledgement",
        "popis": "Amount and basis."
      },
      {
        "nazev": "Instalments",
        "popis": "Number, amount, due dates."
      },
      {
        "nazev": "Default",
        "popis": "The whole remainder becomes due."
      },
      {
        "nazev": "Final provisions",
        "popis": "Copies."
      }
    ],
    "online": [
      "Amount in words in Romanian added automatically",
      "Instalment reminders",
      "PDF and Word"
    ],
    "hodiSe": [
      "the debtor cannot pay all at once",
      "you want a clear payment schedule"
    ],
    "nehodiSe": [
      "the debtor refuses to pay – send a payment notice"
    ],
    "po": [
      {
        "nazev": "Instalments",
        "popis": "Save the dates in your calendar."
      }
    ],
    "faq": [
      {
        "q": "Does the agreement interrupt the limitation period?",
        "a": "Yes. By signing, the debtor acknowledges the debt, and the acknowledgement interrupts the limitation period (Art. 2537 Civil Code)."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Romanian Civil Code.",
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
    "title": "Instalment Payment Agreement Romania {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the instalment payment agreement online – Romania, free PDF",
    "description": "Step-by-step guide in English for the instalment payment agreement under Romanian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "agreement",
      "g": "agreement",
      "a": "agreement",
      "l": "agreement"
    },
    "kroky": {
      "parti": {
        "nazev": "Creditor and debtor"
      },
      "datorie": {
        "nazev": "Debt and instalments"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Creditor – full name or company name"
      },
      "p_adresa": {
        "popis": "Creditor’s address"
      },
      "k_jmeno": {
        "popis": "Debtor – full name"
      },
      "k_cnp": {
        "popis": "Debtor’s CNP"
      },
      "k_adresa": {
        "popis": "Debtor’s address"
      },
      "castka": {
        "popis": "Total debt (lei)"
      },
      "temei": {
        "popis": "Basis of the debt",
        "placeholder": "e.g. prețul neachitat al vehiculului conform contractului din 01.06.2026"
      },
      "rata": {
        "popis": "Monthly instalment (lei)"
      },
      "numar": {
        "popis": "Number of instalments"
      },
      "zi": {
        "popis": "Instalment due on day … of the month",
        "placeholder": "e.g. 15"
      },
      "prima": {
        "popis": "First instalment"
      },
      "iban": {
        "popis": "Creditor’s IBAN",
        "placeholder": "RO49 AAAA 1B31 0075 9384 0000"
      },
      "misto": {
        "popis": "Place"
      },
      "datum": {
        "popis": "Date"
      }
    },
    "vysvetleni": [
      "",
      "",
      "",
      "",
      ""
    ],
    "coDal": [
      "Print the agreement in two copies and sign both.",
      "Save the instalment dates in your calendar.",
      "Keep proof of payments."
    ],
    "kontrola": [
      "By signing, the debtor acknowledges the debt – the acknowledgement interrupts the limitation period and it starts running again (Art. 2537 Civil Code).",
      "Agree what happens if an instalment is late (e.g. the whole remainder becomes due).",
      "For large amounts, an agreement notarised by a notary can be an enforceable title.",
      "Check the other party’s identity against their identity card and copy the name and CNP exactly as they appear in it."
    ]
  },
  "dokument": {
    "nazev": "Instalment Payment Agreement",
    "podnadpis": "acknowledgement of the debt and payment schedule in instalments",
    "podpisy": {
      "vlevo": "Creditor",
      "vpravo": "Debtor"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Creditor:** {{p_jmeno}}, domiciled at {{p_adresa}}",
          "**Debtor:** {{k_jmeno}}, CNP {{k_cnp}}, domiciled at {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Acknowledgement of the debt",
        "odstavce": [
          "The Debtor acknowledges that on the date of signing this agreement they owe the Creditor **{{castka}}**, on the basis of: {{temei}}."
        ]
      },
      {
        "nadpis": "Payment in instalments",
        "odstavce": [
          "The Creditor agrees that the Debtor will pay the debt in {{numar}} monthly instalments of **{{rata}}**, the last instalment being equal to the rest of the debt.",
          "The first instalment is due on {{prima}} and each further instalment on day {{zi}} of the month. Instalments are paid to the Creditor’s account IBAN {{iban}}.",
          "The Debtor may also pay the debt or part of it early."
        ]
      },
      {
        "nadpis": "Default",
        "odstavce": [
          "If the Debtor is late with two instalments, the Creditor may, by written notice, demand immediate payment of the entire remainder of the debt together with statutory default interest from the date of the delay."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed are subject to the Civil Code. The agreement is drawn up in two original copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

/** English version of src/obsah/si/pogodba-o-posodbi.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "SI-POSODBA",
    "verze": "1.0"
  },
  "nazev": "Loan for Use Agreement",
  "nazevA": "the loan for use agreement",
  "katalog": {
    "popis": "Lending an item free of charge.",
    "slova": [
      "loan for use agreement",
      "lend an item",
      "borrow a car",
      "free use of an item",
      "pogodba o posodbi"
    ]
  },
  "landing": {
    "title": "Loan for Use Agreement Slovenia {rok} – free PDF template",
    "description": "Agreement for lending an item free of charge in Slovenia (pogodba o posodbi): return date, condition, liability for damage. For tools, a car or equipment. Free PDF.",
    "perex": "For lending items without payment – tools, equipment or a car. With a return date and the condition.",
    "obsahPopis": "Five articles under the Obligations Code (Obligacijski zakonik).",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Lender and borrower."
      },
      {
        "nazev": "Item",
        "popis": "Description and condition."
      },
      {
        "nazev": "Use and return",
        "popis": "Purpose, deadline, liability."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "you are lending a more expensive item",
      "you are lending your car to a friend"
    ],
    "nehodiSe": [
      "you are lending for payment – that is a rental"
    ],
    "po": [
      {
        "nazev": "Return",
        "popis": "Check the condition on return."
      }
    ],
    "faq": [
      {
        "q": "Who is liable for damage?",
        "a": "The borrower, if they use the item contrary to the agreement or its purpose."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Slovenian Obligations Code (Obligacijski zakonik – loan for use).",
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
    "title": "Fill in the loan for use agreement online – Slovenia, free PDF",
    "description": "Step-by-step guide in English for the loan for use agreement under Slovenian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "stranki": {
        "nazev": "Lender and borrower"
      },
      "stvar": {
        "nazev": "Item and return"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Lender (gives the item) – full name",
        "placeholder": "e.g. Janez Novak"
      },
      "p_adresa": {
        "popis": "Address"
      },
      "k_jmeno": {
        "popis": "Borrower (receives the item) – full name",
        "placeholder": "e.g. Marko Kralj"
      },
      "k_adresa": {
        "popis": "Address"
      },
      "stvar": {
        "popis": "Item",
        "placeholder": "e.g. prikolica, šotor za 4 osebe, vrtalnik Bosch (trailer, 4-person tent, Bosch drill)"
      },
      "stanje": {
        "popis": "Condition on handover",
        "placeholder": "e.g. brezhibna, praska na pokrovu (in perfect order, scratch on the lid)"
      },
      "vrednost": {
        "popis": "Value of the item (€)"
      },
      "namen": {
        "popis": "Purpose of use",
        "placeholder": "e.g. dopust na Obali (holiday on the coast)"
      },
      "vracilo": {
        "popis": "Return by"
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
      "On handover, photograph the item and write down its condition.",
      "On return, compare the condition with the agreement."
    ],
    "kontrola": [
      "A loan for use is free – if compensation is paid, it is a rental.",
      "Enter the value of the item: it makes it easier to agree on compensation if the item is damaged or lost.",
      "The borrower may use the item only for the agreed purpose and may not give it to someone else without permission (OZ).",
      "For a car, also fill in a vehicle handover report with the mileage and time.",
      "Check the other party’s identity against their identity card and copy the name and tax number exactly as they appear in the document."
    ]
  },
  "dokument": {
    "nazev": "Loan for Use Agreement",
    "podnadpis": "free use of an item under the Obligations Code",
    "podpisy": {
      "vlevo": "Lender",
      "vpravo": "Borrower"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Lender:** {{p_jmeno}}, address {{p_adresa}}",
          "**Borrower:** {{k_jmeno}}, address {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject of the loan",
        "odstavce": [
          "The Lender hands over to the Borrower for free use the following item: {{stvar}}.",
          "Condition on handover: {{stanje}}. The parties estimate the value of the item at {{vrednost}}."
        ]
      },
      {
        "nadpis": "Use",
        "odstavce": [
          "The Borrower will use the item only for the purpose: {{namen}}, with care and in accordance with its nature.",
          "The Borrower may not let another person use the item without the Lender’s written permission. Ordinary maintenance costs during use are borne by the Borrower."
        ]
      },
      {
        "nadpis": "Return",
        "odstavce": [
          "The Borrower will return the item no later than {{vracilo}} in the condition in which they received it, taking normal wear into account.",
          "If the item is damaged or lost through the Borrower’s fault, the Borrower compensates for the damage."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by this agreement are subject to the Obligations Code. The agreement is drawn up in two identical copies."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

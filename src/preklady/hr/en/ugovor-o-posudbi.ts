/** English version of src/obsah/hr/ugovor-o-posudbi.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-POSUDBA",
    "verze": "1.0"
  },
  "nazev": "Loan for Use Agreement",
  "nazevA": "the loan for use agreement",
  "katalog": {
    "popis": "Lending an item free of charge.",
    "slova": [
      "loan for use agreement",
      "lend an item",
      "borrow a trailer",
      "free use of an item",
      "ugovor o posudbi"
    ]
  },
  "landing": {
    "title": "Loan for Use Agreement Croatia {rok} – free PDF template",
    "description": "Agreement for lending an item free of charge in Croatia (ugovor o posudbi): description and condition, value, purpose, return date and liability for damage. Free PDF.",
    "perex": "Lending a trailer, tools or equipment? A short agreement with a return date and the condition of the item prevents misunderstandings.",
    "obsahPopis": "Five articles under the Obligations Act (Zakon o obveznim odnosima).",
    "obsah": [
      {
        "nazev": "Parties",
        "popis": "Lender and borrower."
      },
      {
        "nazev": "Subject",
        "popis": "The item, its condition and value."
      },
      {
        "nazev": "Use",
        "popis": "Purpose and costs."
      },
      {
        "nazev": "Return",
        "popis": "Deadline and damage."
      },
      {
        "nazev": "Final provisions",
        "popis": "Copies."
      }
    ],
    "online": [
      "PDF and Word"
    ],
    "hodiSe": [
      "you are lending an item free of charge"
    ],
    "nehodiSe": [
      "you charge a fee – that is a rental"
    ],
    "po": [
      {
        "nazev": "Handover",
        "popis": "Photograph the item."
      }
    ],
    "faq": [
      {
        "q": "How does a loan for use differ from a rental?",
        "a": "A loan for use is free; if a fee is paid, it is a rental."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima – loan for use).",
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
    "title": "Fill in the loan for use agreement online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the loan for use agreement under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
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
      "strane": {
        "nazev": "Lender and borrower"
      },
      "stvar": {
        "nazev": "Item and return"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Lender (gives the item) – full name",
        "placeholder": "e.g. Ivan Horvat"
      },
      "p_oib": {
        "popis": "Lender’s OIB"
      },
      "p_adresa": {
        "popis": "Lender’s address"
      },
      "k_jmeno": {
        "popis": "Borrower (receives the item) – full name",
        "placeholder": "e.g. Marko Babić"
      },
      "k_oib": {
        "popis": "Borrower’s OIB"
      },
      "k_adresa": {
        "popis": "Borrower’s address"
      },
      "stvar": {
        "popis": "Item being lent",
        "placeholder": "e.g. kamp prikolica Adria, šator za 4 osobe, bušilica Bosch (Adria caravan, 4-person tent, Bosch drill)"
      },
      "stanje": {
        "popis": "Condition on handover",
        "placeholder": "e.g. ispravna, ogrebotina na poklopcu (in working order, scratch on the lid)"
      },
      "vrijednost": {
        "popis": "Value of the item (€)"
      },
      "namjena": {
        "popis": "Purpose of use",
        "placeholder": "e.g. ljetovanje u Istri (summer holiday in Istria)"
      },
      "povrat": {
        "popis": "Item to be returned by"
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
      "On return, compare the condition with that recorded in the agreement."
    ],
    "kontrola": [
      "A loan for use is free – if a fee is paid, it is a rental, not a loan for use.",
      "Enter the value of the item: it makes it easier to agree on compensation if the item is damaged or lost.",
      "The borrower may use the item only for the agreed purpose and may not give it to someone else without permission (ZOO).",
      "For a car, also fill in a vehicle handover report with the mileage and time of handover.",
      "Check the other party’s identity against their identity card and copy the name and OIB exactly as they appear in the document."
    ]
  },
  "dokument": {
    "nazev": "Loan for Use Agreement",
    "podnadpis": "free use of an item under the Obligations Act",
    "podpisy": {
      "vlevo": "Lender",
      "vpravo": "Borrower"
    },
    "clanky": [
      {
        "nadpis": "Parties",
        "odstavce": [
          "**Lender:** {{p_jmeno}}, OIB {{p_oib}}, address {{p_adresa}}",
          "**Borrower:** {{k_jmeno}}, OIB {{k_oib}}, address {{k_adresa}}"
        ]
      },
      {
        "nadpis": "Subject of the loan",
        "odstavce": [
          "The Lender hands over to the Borrower for free use the following item: {{stvar}}.",
          "Condition of the item on handover: {{stanje}}. The parties estimate the value of the item at {{vrijednost}}."
        ]
      },
      {
        "nadpis": "Use",
        "odstavce": [
          "The Borrower will use the item only for the purpose: {{namjena}}, with care and in accordance with its nature.",
          "The Borrower may not let another person use the item without the Lender’s written permission. Ordinary maintenance costs during use are borne by the Borrower."
        ]
      },
      {
        "nadpis": "Return",
        "odstavce": [
          "The Borrower will return the item to the Lender no later than {{povrat}}, in the condition in which they received it, taking normal wear into account.",
          "If the item is damaged or lost through the Borrower’s fault, the Borrower compensates for the damage."
        ]
      },
      {
        "nadpis": "Final provisions",
        "odstavce": [
          "Matters not governed by this agreement are subject to the Obligations Act.",
          "The agreement is drawn up in two identical copies, one for each party."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

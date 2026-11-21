/** English version of src/obsah/hr/potvrda-o-primitku-novca.ts – the original text prevails (PREKLADY.md). */
import type { PrekladDokumentu } from '../../typy';

export default {
  "sablona": {
    "kod": "HR-POTVRDA",
    "verze": "1.0"
  },
  "nazev": "Receipt for Money",
  "nazevA": "the receipt for money",
  "katalog": {
    "popis": "A receipt for cash received.",
    "slova": [
      "receipt for money",
      "cash receipt",
      "proof of payment",
      "deposit receipt",
      "potvrda o primitku novca",
      "priznanica"
    ]
  },
  "landing": {
    "description": "Cash receipt for Croatia (potvrda o primitku novca, priznanica): amount, purpose, payer and recipient. Simple proof of a cash payment. Free bilingual PDF or Word.",
    "perex": "Simple proof that cash has changed hands. We add the amount in words in Croatian.",
    "obsahPopis": "A short receipt stating the purpose of payment.",
    "obsah": [
      {
        "nazev": "Receipt",
        "popis": "Who received how much from whom and why."
      }
    ],
    "online": [
      "Amount in words in Croatian added automatically",
      "Signature on screen",
      "PDF and Word"
    ],
    "hodiSe": [
      "you are paying cash for a car or an item",
      "you are handing over a deposit, earnest money or an instalment"
    ],
    "nehodiSe": [
      "you are paying by bank transfer – the bank confirmation is the proof"
    ],
    "po": [
      {
        "nazev": "Copy",
        "popis": "Each party keeps one."
      }
    ],
    "faq": [
      {
        "q": "Do I have to give a receipt?",
        "a": "The person paying may demand a receipt (priznanica) from the person receiving the money."
      },
      {
        "q": "Do you store my details?",
        "a": "No. The document is created directly in your browser and the details are not sent to a server."
      }
    ],
    "zakony": "The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima).",
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
    "title": "Receipt for Money Croatia {rok} – free PDF template"
  },
  "vytvorit": {
    "title": "Fill in the receipt for money online – Croatia, free PDF",
    "description": "Step-by-step guide in English for the receipt for money under Croatian law. Bilingual PDF or Word with the original text, free of charge.",
    "podnadpis": "Free · bilingual PDF and Word · takes a few minutes"
  },
  "pruvodce": {
    "slovo": {
      "n": "receipt",
      "g": "receipt",
      "a": "receipt",
      "l": "receipt"
    },
    "kroky": {
      "podaci": {
        "nazev": "Who, how much and why"
      }
    },
    "pole": {
      "p_jmeno": {
        "popis": "Recipient – full name",
        "napoveda": "The person who receives the money and signs the receipt.",
        "placeholder": "e.g. Ivan Horvat"
      },
      "p_oib": {
        "popis": "Recipient’s OIB"
      },
      "p_adresa": {
        "popis": "Recipient’s address",
        "placeholder": "e.g. Ilica 12, 10000 Zagreb"
      },
      "k_jmeno": {
        "popis": "Payer – full name",
        "placeholder": "e.g. Ana Kovačević"
      },
      "k_adresa": {
        "popis": "Payer’s address"
      },
      "castka": {
        "popis": "Amount (€)",
        "placeholder": "e.g. 2500"
      },
      "svrha": {
        "popis": "Purpose of payment",
        "placeholder": "e.g. kupoprodajna cijena za bicikl Trek (purchase price for a Trek bicycle)"
      },
      "misto": {
        "popis": "Place",
        "placeholder": "e.g. Zagreb"
      },
      "datum": {
        "popis": "Date"
      }
    },
    "vysvetleni": [
      ""
    ],
    "coDal": [
      "Count the money before signing.",
      "Each party keeps one signed copy."
    ],
    "kontrola": [
      "State the amount in figures and in words – we add the words ourselves.",
      "Describe the purpose of payment specifically (e.g. “kupoprodajna cijena za VW Golf, broj šasije …” – purchase price for a VW Golf, VIN …).",
      "The person paying may demand a receipt (priznanica) from the person receiving the money.",
      "Check the other party’s identity against their identity card and copy the name and OIB exactly as they appear in the document.",
      "Count cash on signing; larger amounts are better paid by bank transfer – a bank confirmation is the best evidence."
    ]
  },
  "dokument": {
    "nazev": "Receipt for Money",
    "podnadpis": "receipt for cash received",
    "podpisy": {
      "vlevo": "paid by",
      "vpravo": "received by"
    },
    "clanky": [
      {
        "nadpis": "Receipt",
        "odstavce": [
          "I, **{{p_jmeno}}**, OIB {{p_oib}}, address {{p_adresa}},",
          "confirm that today I received from **{{k_jmeno}}**, address {{k_adresa}}, the amount of **{{castka}}** in cash for: {{svrha}}.",
          "I have counted the money and received it in full."
        ]
      }
    ]
  }
} satisfies PrekladDokumentu;

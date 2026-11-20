import type { StrankaDokumentu } from '../typy';
import { widerruf as sablona } from '../../sablony/de/widerruf';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Widerruf Online-Kauf",
  nazevA: "Widerruf",
  katalog: {
  "popis": "Online-Kauf innerhalb von 14 Tagen widerrufen.",
  "kategorie": "alltag",
  "ilustrace": "protokol",
  "slova": [
    "Widerruf",
    "Widerrufsformular",
    "Rückgabe",
    "Online-Shop",
    "14 Tage",
    "Muster-Widerrufsformular"
  ]
},
  souvisejici: "alltag",
  landing: {
  "title": "Widerruf Online-Kauf {rok} – Vorlage PDF kostenlos",
  "description": "Kostenloses Widerrufsformular nach dem gesetzlichen Muster: Online-Kauf binnen 14 Tagen widerrufen, Erstattung anfordern. PDF und Word.",
  "perex": "Online gekauft und doch nicht gewollt? Mit dem gesetzlichen Muster widerrufen Sie innerhalb von 14 Tagen ohne Begründung.",
  "obsahPopis": "Text nach dem Muster-Widerrufsformular.",
  "obsah": [
    {
      "nazev": "Händler",
      "popis": "An wen der Widerruf geht."
    },
    {
      "nazev": "Kauf",
      "popis": "Ware, Bestellnummer, Daten."
    },
    {
      "nazev": "Ihre Angaben",
      "popis": "Name, Anschrift, IBAN."
    }
  ],
  "kroky": [
    {
      "nazev": "Ausfüllen",
      "popis": "Daten aus der Bestellbestätigung."
    },
    {
      "nazev": "Senden",
      "popis": "E-Mail, Formular im Shop oder Post – Nachweis aufheben."
    },
    {
      "nazev": "Zurückschicken",
      "popis": "Binnen 14 Tagen."
    }
  ],
  "online": [
    "Ausfüllen mit Erklärungen zu jedem Feld",
    "Unterschrift auf dem Bildschirm",
    "Download als PDF und Word",
    "Erinnerung an die Erstattung im Kalender"
  ],
  "hodiSe": [
    "Kauf im Online-Shop oder am Telefon",
    "Vertrag an der Haustür"
  ],
  "nehodiSe": [
    "Kauf im Laden",
    "Kauf von Privatpersonen"
  ],
  "po": [
    {
      "nazev": "Erstattung",
      "popis": "Der Händler zahlt binnen 14 Tagen zurück."
    }
  ],
  "faq": [
    {
      "q": "Muss ich einen Grund angeben?",
      "a": "Nein."
    },
    {
      "q": "Bis wann muss ich widerrufen?",
      "a": "14 Tage ab Erhalt der Ware; rechtzeitiges Absenden genügt."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 355, 357 BGB und dem Muster-Widerrufsformular (Anlage 2 EGBGB).",
  "souvisejiciPopis": "Weitere Dokumente, ebenfalls kostenlos."
},
  vytvorit: {
  "title": "Widerruf online ausfüllen – Muster-Widerrufsformular PDF",
  "description": "Widerrufsformular für Online-Käufe. PDF oder Word kostenlos.",
  "podnadpis": "Kostenlos · Ergebnis als PDF und Word · dauert ca. 1 Minute"
},
};

export default stranka;

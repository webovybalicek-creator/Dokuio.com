import type { StrankaDokumentu } from '../typy';
import { schuldanerkenntnis as sablona } from '../../sablony/de/schuldanerkenntnis';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Schuldanerkenntnis",
  nazevA: "Schuldanerkenntnis",
  katalog: {
  "popis": "Schriftliche Bestätigung einer Schuld, auch mit Raten.",
  "kategorie": "geld",
  "ilustrace": "dluh",
  "slova": [
    "Schuldanerkenntnis",
    "Schuld",
    "Ratenzahlung",
    "Schuldschein",
    "Ratenvereinbarung"
  ]
},
  souvisejici: "geld",
  landing: {
  "title": "Schuldanerkenntnis {rok} – Vorlage kostenlos als PDF",
  "description": "Kostenloses Schuldanerkenntnis nach § 781 BGB: Grund und Höhe der Schuld, Zahlung auf einmal oder in Raten mit Tilgungsplan.",
  "perex": "Die schuldende Person bestätigt schriftlich, wie viel sie wofür schuldet und wie sie zahlt. Die Verjährung beginnt neu.",
  "obsahPopis": "Anerkenntnis mit Zahlungsvereinbarung.",
  "obsah": [
    {
      "nazev": "Beteiligte",
      "popis": "Schuldner/in und Gläubiger/in."
    },
    {
      "nazev": "Schuld",
      "popis": "Grund und Höhe."
    },
    {
      "nazev": "Zahlung",
      "popis": "Auf einmal oder in Raten, mit Tilgungsplan."
    }
  ],
  "kroky": [
    {
      "nazev": "Ausfüllen",
      "popis": "Den Betrag in Worten ergänzen wir."
    },
    {
      "nazev": "Unterschreiben",
      "popis": "Unterschrift der Schuldnerin/des Schuldners ist zwingend."
    },
    {
      "nazev": "Aufbewahren",
      "popis": "Original behält die Gläubigerin/der Gläubiger."
    }
  ],
  "online": [
    "Ausfüllen mit Erklärungen zu jedem Feld",
    "Unterschrift auf dem Bildschirm",
    "Download als PDF und Word",
    "Tilgungsplan und Raten im Kalender"
  ],
  "hodiSe": [
    "Offenes Darlehen unter Bekannten absichern",
    "Ratenzahlung für einen Schaden vereinbaren"
  ],
  "nehodiSe": [
    "Schulden bei Banken oder Inkasso – dort deren Vereinbarungen prüfen lassen"
  ],
  "po": [
    {
      "nazev": "Raten",
      "popis": "Barzahlungen quittieren lassen."
    }
  ],
  "faq": [
    {
      "q": "Braucht ein Schuldanerkenntnis eine Form?",
      "a": "Ja, Schriftform mit eigenhändiger Unterschrift der Schuldnerin/des Schuldners (§ 781 BGB)."
    },
    {
      "q": "Was passiert mit der Verjährung?",
      "a": "Mit dem Anerkenntnis beginnt sie neu (§ 212 BGB)."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 781 und 212 BGB.",
  "souvisejiciPopis": "Weitere Dokumente, ebenfalls kostenlos."
},
  vytvorit: {
  "title": "Schuldanerkenntnis online ausfüllen – PDF kostenlos",
  "description": "Schuldanerkenntnis mit Raten und Tilgungsplan. PDF oder Word kostenlos.",
  "podnadpis": "Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten"
},
};

export default stranka;

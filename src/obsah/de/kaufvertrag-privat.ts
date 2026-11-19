import type { StrankaDokumentu } from '../typy';
import { kaufvertragPrivat as sablona } from '../../sablony/de/kaufvertrag-privat';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kaufvertrag privat",
  nazevA: "Kaufvertrag",
  katalog: {
  "popis": "Gebrauchte Sachen von privat verkaufen (Fahrrad, Handy, Möbel).",
  "kategorie": "alltag",
  "ilustrace": "protokol",
  "slova": [
    "Kaufvertrag privat",
    "Privatverkauf",
    "gebraucht",
    "Fahrrad",
    "Handy",
    "Gewährleistungsausschluss"
  ]
},
  souvisejici: "alltag",
  landing: {
  "title": "Kaufvertrag privat {rok} – Vorlage kostenlos als PDF",
  "description": "Kostenloser Kaufvertrag für gebrauchte Sachen zwischen Privatpersonen: Beschreibung, Mängel, Preis, Gewährleistungsausschluss.",
  "perex": "Für den Verkauf gebrauchter Sachen von privat an privat – Fahrrad, Handy, Möbel, Instrument.",
  "obsahPopis": "Kurzer Vertrag mit Gewährleistungsregel.",
  "obsah": [
    {
      "nazev": "Parteien",
      "popis": "Wer verkauft, wer kauft."
    },
    {
      "nazev": "Kaufsache",
      "popis": "Beschreibung und bekannte Mängel."
    },
    {
      "nazev": "Preis und Gewährleistung",
      "popis": "Zahlung und Haftung."
    }
  ],
  "kroky": [
    {
      "nazev": "Ausfüllen",
      "popis": "Den Preis in Worten ergänzen wir."
    },
    {
      "nazev": "Prüfen",
      "popis": "Sache gemeinsam ansehen."
    },
    {
      "nazev": "Unterschreiben",
      "popis": "Beide Seiten."
    }
  ],
  "online": [
    "Ausfüllen mit Erklärungen zu jedem Feld",
    "Unterschrift auf dem Bildschirm",
    "Download als PDF und Word"
  ],
  "hodiSe": [
    "Verkauf über Kleinanzeigen",
    "Teure Gebrauchtgeräte"
  ],
  "nehodiSe": [
    "Autos – dafür gibt es den Kaufvertrag Gebrauchtwagen",
    "Gewerbliche Verkäufe an Verbraucher"
  ],
  "po": [
    {
      "nazev": "Quittung",
      "popis": "Bei Barzahlung Quittung ausstellen."
    }
  ],
  "faq": [
    {
      "q": "Darf ich die Gewährleistung ausschließen?",
      "a": "Unter Privatpersonen ja – aber nicht für Mängel, die Sie verschweigen (§ 444 BGB)."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 433 ff. und § 444 BGB.",
  "souvisejiciPopis": "Weitere Dokumente, ebenfalls kostenlos."
},
  vytvorit: {
  "title": "Kaufvertrag privat online ausfüllen – PDF kostenlos",
  "description": "Kaufvertrag für gebrauchte Sachen von privat. PDF oder Word kostenlos.",
  "podnadpis": "Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten"
},
};

export default stranka;

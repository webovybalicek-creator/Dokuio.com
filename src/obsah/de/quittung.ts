import type { StrankaDokumentu } from '../typy';
import { quittung as sablona } from '../../sablony/de/quittung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Quittung",
  nazevA: "Quittung",
  katalog: {
    "popis": "Empfangsbestätigung für Bargeld.",
    "kategorie": "geld",
    "ilustrace": "penize",
    "slova": [
      "Quittung",
      "Empfangsbestätigung",
      "Bargeld",
      "Barzahlung",
      "receipt"
    ]
  },
  souvisejici: 'geld',
  landing: {
    "title": "Quittung {rok} – Vorlage kostenlos als PDF",
    "description": "Kostenlose Quittung für Barzahlungen: Betrag in Ziffern und Worten, Zahlungsgrund. PDF und Word.",
    "perex": "Einfacher Nachweis, dass Bargeld übergeben wurde. Den Betrag in Worten ergänzen wir.",
    "obsahPopis": "Kurze Empfangsbestätigung mit Zahlungsgrund.",
    "obsah": [
      {
        "nazev": "Quittung",
        "popis": "Wer, wem, wie viel, wofür."
      }
    ],
    "kroky": [
      {
        "nazev": "Ausfüllen",
        "popis": "Namen, Betrag, Grund."
      },
      {
        "nazev": "Zählen",
        "popis": "Geld vor der Unterschrift."
      },
      {
        "nazev": "Unterschreiben",
        "popis": "Jede Seite behält eine Kopie."
      }
    ],
    "online": [
      "Betrag in Worten automatisch",
      "Unterschrift auf dem Bildschirm",
      "Download als PDF und Word"
    ],
    "hodiSe": [
      "Barzahlung beim Autokauf",
      "Übergabe von Darlehen, Anzahlung oder Kaution"
    ],
    "nehodiSe": [
      "Zahlung per Überweisung – Nachweis ist der Kontoauszug"
    ],
    "po": [
      {
        "nazev": "Kopie",
        "popis": "Jede Seite behält ein unterschriebenes Exemplar."
      }
    ],
    "faq": [
      {
        "q": "Kann ich eine Quittung verlangen?",
        "a": "Ja, wer eine Leistung erbringt, kann vom Gläubiger eine Quittung verlangen (§ 368 BGB)."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Die Quittung entsteht ausschließlich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf § 368 BGB.",
    "souvisejiciPopis": "Weitere Dokumente, ebenfalls kostenlos."
  },
  vytvorit: {
    "title": "Quittung online ausfüllen – PDF kostenlos",
    "description": "Quittung für Barzahlung mit Betrag in Worten. PDF oder Word kostenlos.",
    "podnadpis": "Kostenlos · Ergebnis als PDF und Word · dauert ca. 1 Minute"
  },
};

export default stranka;

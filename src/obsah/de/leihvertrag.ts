import type { StrankaDokumentu } from '../typy';
import { leihvertrag as sablona } from '../../sablony/de/leihvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Leihvertrag",
  nazevA: "Leihvertrag",
  katalog: {"popis": "Sache kostenlos verleihen – Anhänger, Werkzeug, Auto.", "kategorie": "alltag", "ilustrace": "protokol", "slova": ["Leihvertrag", "Leihe", "Sache verleihen", "Verleiher", "Entleiher", "Leihvertrag Muster"]},
  souvisejici: "alltag",
  landing: {
  "title": "Leihvertrag {rok} – Muster kostenlos (PDF & Word)",
  "description": "Kostenloser Leihvertrag nach §§ 598 ff. BGB: unentgeltlicher Gebrauch, Zustand bei Übergabe, Dauer, Rückgabe und Kosten. Online ausfüllen, als PDF oder Word.",
  "perex": "Sie verleihen Anhänger, Werkzeug oder Auto kostenlos? Der Leihvertrag hält fest, was verliehen wurde, in welchem Zustand und bis wann.",
  "obsahPopis": "Fünf Abschnitte nach §§ 598 ff. BGB.",
  "obsah": [
    {
      "nazev": "Vertragsparteien",
      "popis": "Verleiher und Entleiher."
    },
    {
      "nazev": "Gegenstand der Leihe",
      "popis": "Sache, Zustand, Wert, Zweck."
    },
    {
      "nazev": "Dauer und Rückgabe",
      "popis": "Bis zu einem Tag oder bis der Zweck erfüllt ist; vorzeitige Kündigung."
    },
    {
      "nazev": "Gebrauch der Sache",
      "popis": "Vertragsgemäßer Gebrauch, keine Weitergabe, Kosten."
    },
    {
      "nazev": "Schlussbestimmungen",
      "popis": "Textform, zwei Exemplare."
    }
  ],
  "kroky": [
    {
      "nazev": "Sache beschreiben",
      "popis": "Was verliehen wird und in welchem Zustand."
    },
    {
      "nazev": "Dauer festlegen",
      "popis": "Bis wann oder wofür."
    },
    {
      "nazev": "Unterschreiben",
      "popis": "Zwei Exemplare."
    }
  ],
  "online": [
    "Rückgabe als Kalendererinnerung",
    "Erklärungen zu jedem Feld",
    "Download als PDF und Word",
    "Leere Vorlage zum Ausdrucken"
  ],
  "hodiSe": [
    "Anhänger, Werkzeug oder Auto an Bekannte verleihen",
    "Zustand der Sache bei Übergabe dokumentieren"
  ],
  "nehodiSe": [
    "Sie verlangen Geld für den Gebrauch – das ist Miete",
    "Sie verleihen Geld – nutzen Sie den Darlehensvertrag"
  ],
  "po": [
    {
      "nazev": "Übergabe",
      "popis": "Sache gemeinsam ansehen, Mängel ergänzen."
    },
    {
      "nazev": "Rückgabe",
      "popis": "Erinnerung im Kalender; Schäden binnen 6 Monaten geltend machen."
    }
  ],
  "faq": [
    {
      "q": "Was ist der Unterschied zwischen Leihe und Darlehen?",
      "a": "Bei der Leihe wird eine bestimmte Sache unentgeltlich zum Gebrauch überlassen und genau diese zurückgegeben (§ 598 BGB). Beim Darlehen werden Geld oder vertretbare Sachen überlassen und gleichartig zurückgegeben."
    },
    {
      "q": "Kann der Verleiher die Sache früher zurückverlangen?",
      "a": "Ja, wenn er sie wegen eines nicht vorhergesehenen Umstands braucht, bei vertragswidrigem Gebrauch oder wenn der Entleiher stirbt (§ 605 BGB)."
    },
    {
      "q": "Wie lange habe ich für Schadensersatz Zeit?",
      "a": "Ersatzansprüche wegen Veränderung oder Verschlechterung der Sache verjähren in sechs Monaten (§ 606 BGB)."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 598–606 des Bürgerlichen Gesetzbuchs (BGB).",
  "souvisejiciPopis": "Weitere Vorlagen für den Alltag."
},
  vytvorit: {"title": "Leihvertrag online ausfüllen – kostenlos als PDF", "description": "Leihvertrag online erstellen. Kostenlos als PDF oder Word.", "podnadpis": "Kostenlos · PDF und Word · dauert etwa 2 Minuten"},
};

export default stranka;

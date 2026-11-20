import type { StrankaDokumentu } from '../typy';
import de from '../de/leihvertrag';
import { leihvertragCH as sablona } from '../../sablony/ch/leihvertrag';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "title": "Leihvertrag Schweiz {rok} – Gebrauchsleihe Muster (PDF & Word)",
  "description": "Kostenloser Leihvertrag (Gebrauchsleihe) nach Art. 305 ff. OR: unentgeltlicher Gebrauch, Zustand, Dauer und Rückgabe. Online ausfüllen, als PDF oder Word laden.",
  "obsahPopis": "Fünf Abschnitte nach Art. 305 ff. OR.",
  "obsah": [
    {
      "nazev": "Vertragsparteien",
      "popis": "Verleiher und Entlehner."
    },
    {
      "nazev": "Gegenstand der Leihe",
      "popis": "Sache, Zustand, Wert, Zweck."
    },
    {
      "nazev": "Dauer und Rückgabe",
      "popis": "Bis zu einem Tag oder bis der Zweck erfüllt ist; vorzeitige Rückforderung."
    },
    {
      "nazev": "Gebrauch der Sache",
      "popis": "Vertragsgemässer Gebrauch, keine Weitergabe, Kosten."
    },
    {
      "nazev": "Schlussbestimmungen",
      "popis": "Schriftform, zwei Exemplare."
    }
  ],
  "po": [
    {
      "nazev": "Übergabe",
      "popis": "Sache gemeinsam ansehen, Mängel ergänzen."
    },
    {
      "nazev": "Rückgabe",
      "popis": "Erinnerung im Kalender."
    }
  ],
  "faq": [
    {
      "q": "Was ist eine Gebrauchsleihe?",
      "a": "Der Verleiher überlässt eine Sache unentgeltlich zum Gebrauch, und der Entlehner gibt dieselbe Sache zurück (Art. 305 OR)."
    },
    {
      "q": "Kann der Verleiher die Sache früher zurückfordern?",
      "a": "Ja, bei vertragswidrigem Gebrauch, Verschlechterung, Weitergabe an Dritte oder wenn er sie wegen eines unvorhergesehenen Falls dringend braucht (Art. 309 OR). Ohne bestimmte Dauer und Zweck jederzeit (Art. 310 OR)."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf Art. 305–311 des Obligationenrechts (OR)."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Leihvertrag (Schweiz) online ausfüllen – PDF kostenlos"} },
};

export default stranka;

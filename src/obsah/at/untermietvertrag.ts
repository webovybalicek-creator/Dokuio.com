import type { StrankaDokumentu } from '../typy';
import de from '../de/untermietvertrag';
import { untermietvertragAT as sablona } from '../../sablony/at/untermietvertrag';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "title": "Untermietvertrag Österreich {rok} – Muster kostenlos (PDF)",
  "description": "Kostenloser Untermietvertrag für Zimmer oder Wohnung in Österreich: Zustimmung des Vermieters, Dauer, Untermietzins, Kaution. Online ausfüllen, als PDF oder Word.",
  "obsahPopis": "Fünf Abschnitte (ABGB, MRG).",
  "faq": [
    {
      "q": "Brauche ich die Zustimmung des Vermieters?",
      "a": "Für die gänzliche Untervermietung ja, außer der Mietvertrag gestattet sie. Im Vollanwendungsbereich des MRG ist eine teilweise Untervermietung auch ohne Zustimmung möglich, solange Sie selbst dort wohnen und kein wichtiger Grund entgegensteht."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf dem ABGB und dem Mietrechtsgesetz (MRG)."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Untermietvertrag (Österreich) online ausfüllen – PDF kostenlos"} },
};

export default stranka;

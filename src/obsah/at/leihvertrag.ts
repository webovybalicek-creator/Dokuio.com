import type { StrankaDokumentu } from '../typy';
import de from '../de/leihvertrag';
import { leihvertragAT as sablona } from '../../sablony/at/leihvertrag';
import { nahradV } from '../../sablony/nahrad';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...nahradV(de.landing, [['Textform, zwei Exemplare.', 'Schriftform, zwei Exemplare.']]), ...{
  "title": "Leihvertrag Österreich {rok} – Muster kostenlos (PDF & Word)",
  "description": "Kostenloser Leihvertrag nach §§ 971 ff. ABGB: unentgeltlicher Gebrauch, Zustand bei Übergabe, Dauer und Rückgabe. Online ausfüllen, als PDF oder Word laden.",
  "obsahPopis": "Fünf Abschnitte nach §§ 971 ff. ABGB.",
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
      "q": "Wann liegt ein Leihvertrag vor?",
      "a": "Wenn eine unverbrauchbare Sache bloß zum unentgeltlichen Gebrauch auf eine bestimmte Zeit übergeben wird (§ 971 ABGB). Wird bezahlt, ist es Miete."
    },
    {
      "q": "Darf der Entleiher die Sache weitergeben?",
      "a": "Nein, ohne Zustimmung des Verleihers ist die Überlassung an Dritte verboten (§ 972 ABGB)."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 971 ff. des Allgemeinen bürgerlichen Gesetzbuchs (ABGB)."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Leihvertrag (Österreich) online ausfüllen – PDF kostenlos"} },
};

export default stranka;

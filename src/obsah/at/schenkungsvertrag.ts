import type { StrankaDokumentu } from '../typy';
import { vlastni } from './_eigen';
import de from '../de/schenkungsvertrag';
import { schenkungsvertragAT as sablona } from '../../sablony/at/schenkungsvertrag';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "title": "Schenkungsvertrag Österreich {rok} – Vorlage kostenlos als PDF",
  "description": "Kostenloser Schenkungsvertrag für Geld oder bewegliche Sachen mit wirklicher Übergabe – ohne Notariatsakt, mit Tipps zur Schenkungsmeldung. Als PDF und Word.",
  "perex": "Für Schenkungen, die sofort übergeben oder überwiesen werden. Mit Hinweisen zur Schenkungsmeldung beim Finanzamt.",
  "kroky": [
    {
      "nazev": "Ausfüllen",
      "popis": "Den Betrag in Worten ergänzen wir."
    },
    {
      "nazev": "Unterschreiben",
      "popis": "Beide Seiten."
    },
    {
      "nazev": "Melden",
      "popis": "Über den Grenzen binnen drei Monaten ans Finanzamt."
    }
  ],
  "nehodiSe": [
    "Schenkungsversprechen für später – braucht einen Notariatsakt",
    "Liegenschaften"
  ],
  "po": [
    {
      "nazev": "Finanzamt",
      "popis": "Schenkungsmeldung prüfen (§ 121a BAO)."
    }
  ],
  "faq": [
    {
      "q": "Brauche ich einen Notar?",
      "a": "Nicht, wenn das Geschenk sofort übergeben wird. Ohne wirkliche Übergabe ist ein Notariatsakt nötig."
    },
    {
      "q": "Gibt es eine Schenkungssteuer?",
      "a": "Nein, aber eine Meldepflicht: zwischen Angehörigen über 50.000 € pro Jahr, sonst über 15.000 € in fünf Jahren."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 938 ff. ABGB und § 121a BAO."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Schenkungsvertrag (Österreich) online ausfüllen – PDF kostenlos"} },
};

export default vlastni(stranka, 'schenkungsvertrag');

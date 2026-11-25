import type { StrankaDokumentu } from '../typy';
import { vlastni } from './_eigen';
import de from '../de/schuldanerkenntnis';
import { schuldanerkenntnisAT as sablona } from '../../sablony/at/schuldanerkenntnis';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "title": "Schuldanerkenntnis Österreich {rok} – Vorlage kostenlos als PDF",
  "description": "Kostenloses Schuldanerkenntnis nach österreichischem Recht: Grund und Höhe der Schuld, Zahlung auf einmal oder in Raten mit Tilgungsplan. Als PDF und Word.",
  "faq": [
    {
      "q": "Braucht ein Schuldanerkenntnis eine Form?",
      "a": "Keine besondere Form – schriftlich mit Unterschrift ist aber der beste Beweis."
    },
    {
      "q": "Was passiert mit der Verjährung?",
      "a": "Das Anerkenntnis unterbricht sie, die Frist beginnt neu (§ 1497 ABGB)."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf dem ABGB, insbesondere § 1497."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Schuldanerkenntnis (Österreich) online ausfüllen – PDF kostenlos"} },
};

export default vlastni(stranka, 'schuldanerkenntnis');

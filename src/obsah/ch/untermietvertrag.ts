import type { StrankaDokumentu } from '../typy';
import { vlastni } from './_eigen';
import de from '../de/untermietvertrag';
import { untermietvertragCH as sablona } from '../../sablony/ch/untermietvertrag';
import { nahradV } from '../../sablony/nahrad';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  katalog: nahradV(de.katalog, [['§ 553 BGB', 'Art. 262 OR']]),
  landing: { ...nahradV(de.landing, [['Hausordnung, Textform.', 'Hausordnung, Schriftform.']]), ...{
  "title": "Untermietvertrag Schweiz {rok} – Muster kostenlos (PDF & Word)",
  "description": "Kostenloser Untermietvertrag für Zimmer oder Wohnung nach Art. 262 OR: Zustimmung des Vermieters, Dauer, Mietzins in CHF, Mietkaution. Als PDF oder Word.",
  "obsahPopis": "Fünf Abschnitte nach Art. 262 OR.",
  "faq": [
    {
      "q": "Darf der Vermieter die Untermiete verbieten?",
      "a": "Er darf die Zustimmung nur verweigern, wenn Sie ihm die Bedingungen nicht bekanntgeben, diese missbräuchlich sind oder ihm wesentliche Nachteile entstehen (Art. 262 OR)."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf Art. 262 des Obligationenrechts (OR)."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Untermietvertrag (Schweiz) online ausfüllen – PDF kostenlos"} },
};

export default vlastni(stranka, 'untermietvertrag');

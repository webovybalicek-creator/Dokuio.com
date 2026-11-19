import type { StrankaDokumentu } from '../typy';
import de from '../de/kaufvertrag-privat';
import { kaufvertragPrivatAT as sablona } from '../../sablony/at/kaufvertrag-privat';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "description": "Kostenloser Kaufvertrag für gebrauchte Sachen unter Privaten nach ABGB – mit Gewährleistungsausschluss. Für Fahrrad, Handy, Möbel. PDF und Word.",
    "title": "Kaufvertrag privat Österreich {rok} – Vorlage kostenlos als PDF",
  "nehodiSe": [
    "Autos – dafür gibt es den Kaufvertrag Gebrauchtwagen",
    "Verkäufe von Unternehmern an Verbraucher"
  ],
  "faq": [
    {
      "q": "Darf ich die Gewährleistung ausschließen?",
      "a": "Unter Privatpersonen ja – aber nicht für listig verschwiegene Mängel oder zugesicherte Eigenschaften."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 1053 ff. und §§ 922 ff. ABGB."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Kaufvertrag privat (Österreich) online ausfüllen – PDF kostenlos"} },
};

export default stranka;

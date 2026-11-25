import type { StrankaDokumentu } from '../typy';
import { vlastni } from './_eigen';
import de from '../de/vollmacht-zulassung';
import { vollmachtZulassungAT as sablona } from '../../sablony/at/vollmacht-zulassung';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "title": "Vollmacht Zulassungsstelle Österreich {rok} – Vorlage PDF kostenlos",
  "kroky": [{"nazev": "Ausfüllen", "popis": "Daten aus dem Kaufvertrag übernehmen wir."}, {"nazev": "Unterschreiben", "popis": "Eigenhändig."}, {"nazev": "Unterlagen packen", "popis": "Ausweise, Zulassungsschein, Versicherungsbestätigung."}],
  "description": "Kostenlose Vollmacht für An-, Ab- oder Ummeldung bei einer Zulassungsstelle in Österreich. Mit Liste der Unterlagen. Als PDF und Word.",
  "perex": "Damit eine andere Person Ihr Fahrzeug bei einer Zulassungsstelle an-, ab- oder ummeldet. Mit Liste, was sonst noch mit muss.",
  "nehodiSe": [
    "Fälle, in denen die Zulassungsstelle ein eigenes Formular verlangt – vorher nachfragen"
  ],
  "po": [
    {
      "nazev": "Zulassungsstelle",
      "popis": "Anmeldung im Bezirk des Hauptwohnsitzes, Abmeldung bei jeder Zulassungsstelle."
    }
  ],
  "faq": [
    {
      "q": "Was braucht die bevollmächtigte Person?",
      "a": "Die Vollmacht, ihren Lichtbildausweis und die Fahrzeugpapiere; bei der Anmeldung zusätzlich Versicherungsbestätigung, Kaufvertrag und § 57a-Gutachten, bei der Abmeldung die Kennzeichentafeln."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Vertretung nach §§ 1002 ff. ABGB; Unterlagen nach oesterreich.gv.at."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Vollmacht Zulassungsstelle (Österreich) online ausfüllen – PDF kostenlos"} },
};

export default vlastni(stranka, 'vollmacht-zulassung');

import type { StrankaDokumentu } from '../typy';
import de from '../de/mahnung';
import { mahnungAT as sablona } from '../../sablony/at/mahnung';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "title": "Mahnung Österreich {rok} – Vorlage kostenlos (PDF & Word)",
  "description": "Kostenlose Mahnungsvorlage nach österreichischem Recht: offener Betrag, Frist, gesetzliche Verzugszinsen (4 % bzw. § 456 UGB). Online ausfüllen, als PDF oder Word.",
  "perex": "Wenn eine Rechnung oder ein Darlehen nicht bezahlt wird: Mit der Mahnung setzen Sie eine letzte Frist, bevor Sie klagen.",
  "po": [
    {
      "nazev": "Frist abwarten",
      "popis": "Erinnerung im Kalender."
    },
    {
      "nazev": "Klage",
      "popis": "Beim zuständigen Bezirksgericht, bei Geldforderungen meist als Mahnverfahren."
    },
    {
      "nazev": "Raten?",
      "popis": "Bei Zahlungsbereitschaft ein Schuldanerkenntnis aufsetzen."
    }
  ],
  "faq": [
    {
      "q": "Wie hoch sind die Verzugszinsen in Österreich?",
      "a": "Die gesetzlichen Verzugszinsen betragen 4 % pro Jahr (§ 1333 Abs. 1 iVm § 1000 Abs. 1 ABGB). Bei Geschäften zwischen Unternehmern gelten höhere Zinsen nach § 456 UGB."
    },
    {
      "q": "Wie viele Mahnungen muss ich schicken?",
      "a": "Gesetzlich vorgeschrieben ist keine bestimmte Zahl. Eine klare Mahnung mit Frist genügt in der Regel."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "nehodiSe": [
    "Schuldner ist insolvent – Forderung im Insolvenzverfahren anmelden",
    "Forderung ist strittig oder hoch – anwaltlich beraten lassen"
  ],
  "zakony": "Die Vorlage beruht auf §§ 1333 und 1000 ABGB sowie § 456 UGB."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Mahnung (Österreich) online ausfüllen – PDF kostenlos"} },
};

export default stranka;

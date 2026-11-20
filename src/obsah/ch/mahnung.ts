import type { StrankaDokumentu } from '../typy';
import de from '../de/mahnung';
import { mahnungCH as sablona } from '../../sablony/ch/mahnung';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "title": "Mahnung Schweiz {rok} – Vorlage kostenlos (PDF & Word)",
  "description": "Kostenlose Mahnungsvorlage nach Art. 102 und 104 OR: offener Betrag in CHF, Frist und 5 % Verzugszins. Online ausfüllen, als PDF oder Word laden.",
  "perex": "Wenn eine Rechnung oder ein Darlehen nicht bezahlt wird: Die Mahnung setzt die Schuldnerin oder den Schuldner in Verzug und ist der letzte Schritt vor der Betreibung.",
  "obsah": [
    {
      "nazev": "Absender und Empfänger",
      "popis": "Gläubiger/in und Schuldner/in."
    },
    {
      "nazev": "Zahlungsaufforderung",
      "popis": "Betrag, Fälligkeit, Frist, Konto, Verzugszins 5 %; erste oder letzte Mahnung."
    }
  ],
  "online": [
    "Betrag in Worten (Franken) automatisch",
    "Fristende im Kalender",
    "Erklärungen zu jedem Feld",
    "Download als PDF und Word"
  ],
  "hodiSe": [
    "Kunde zahlt eine Rechnung nicht",
    "privates Darlehen wird nicht zurückbezahlt",
    "letzte Warnung vor der Betreibung"
  ],
  "nehodiSe": [
    "Schuldner ist im Konkurs – Forderung beim Konkursamt eingeben",
    "Forderung ist strittig oder hoch – anwaltlich beraten lassen"
  ],
  "po": [
    {
      "nazev": "Frist abwarten",
      "popis": "Erinnerung im Kalender."
    },
    {
      "nazev": "Betreibung",
      "popis": "Betreibungsbegehren beim Betreibungsamt am Wohnsitz der Schuldnerin/des Schuldners."
    },
    {
      "nazev": "Raten?",
      "popis": "Bei Zahlungsbereitschaft eine Schuldanerkennung aufsetzen."
    }
  ],
  "faq": [
    {
      "q": "Braucht es eine Mahnung?",
      "a": "Ja, wenn kein bestimmter Verfalltag vereinbart war: Erst die Mahnung nach Fälligkeit setzt in Verzug (Art. 102 OR)."
    },
    {
      "q": "Wie hoch ist der Verzugszins?",
      "a": "5 % pro Jahr, auch wenn vertraglich ein tieferer Zins vereinbart war (Art. 104 OR)."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf Art. 102 und 104 des Obligationenrechts (OR)."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Mahnung (Schweiz) online ausfüllen – PDF kostenlos", "description": "Mahnung mit Frist und Verzugszins online erstellen. Kostenlos als PDF oder Word."} },
};

export default stranka;

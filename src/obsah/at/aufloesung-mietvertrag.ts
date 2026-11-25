import type { StrankaDokumentu } from '../typy';
import { vlastni } from './_eigen';
import de from '../de/mietaufhebungsvertrag';
import { aufloesungMietvertragAT as sablona } from '../../sablony/at/aufloesung-mietvertrag';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  nazev: "Einvernehmliche Auflösung des Mietvertrags",
  nazevA: "einvernehmliche Auflösung",
  katalog: { ...de.katalog, slova: ["einvernehmliche Auflösung Mietvertrag", "Mietvertrag auflösen", "Auflösungsvereinbarung", "Kaution", "Wohnungsübergabe"] },
  landing: { ...de.landing, ...{
  "title": "Einvernehmliche Auflösung Mietvertrag {rok} – Muster (PDF & Word)",
  "description": "Kostenloses Muster für die einvernehmliche Auflösung des Mietvertrags in Österreich: Termin, Rückgabe, Kaution und Betriebskosten. Als PDF oder Word.",
  "perex": "Früher ausziehen, ohne Kündigungsfrist? Vermieter und Mieter können das Mietverhältnis jederzeit einvernehmlich zu einem festen Termin auflösen.",
  "zakony": "Die Vorlage beruht auf dem ABGB; bei Mietverhältnissen nach dem MRG gelten zusätzliche Schutzbestimmungen."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Einvernehmliche Auflösung online ausfüllen – PDF kostenlos"} },
};

export default vlastni(stranka, 'aufloesung-mietvertrag');

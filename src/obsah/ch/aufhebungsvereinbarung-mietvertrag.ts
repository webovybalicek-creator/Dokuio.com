import type { StrankaDokumentu } from '../typy';
import { vlastni } from './_eigen';
import de from '../de/mietaufhebungsvertrag';
import { aufhebungMietvertragCH as sablona } from '../../sablony/ch/aufhebungsvereinbarung-mietvertrag';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  nazev: "Aufhebungsvereinbarung zum Mietvertrag",
  nazevA: "Aufhebungsvereinbarung",
  katalog: { ...de.katalog, slova: ["Aufhebungsvereinbarung Mietvertrag", "Mietvertrag aufheben", "vorzeitiger Auszug", "Mietkaution", "Wohnungsabgabe"] },
  landing: { ...de.landing, ...{
  "title": "Aufhebungsvereinbarung Mietvertrag {rok} – Muster Schweiz (PDF)",
  "description": "Kostenlose Aufhebungsvereinbarung zum Mietvertrag nach Art. 115 OR: Termin, Wohnungsrückgabe, Mietkaution und Nebenkosten. Online ausfüllen, als PDF oder Word.",
  "perex": "Früher ausziehen, ohne Kündigungstermin? Mieter und Vermieter können das Mietverhältnis durch Übereinkunft aufheben – formlos möglich, schriftlich sicher.",
  "faq": [
    {
      "q": "Braucht die Aufhebung eine bestimmte Form?",
      "a": "Nein. Eine Forderung kann durch Übereinkunft formlos aufgehoben werden (Art. 115 OR). Schriftlich ist die Vereinbarung aber beweisbar."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf Art. 115 und Art. 253 ff. des Obligationenrechts (OR)."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Aufhebungsvereinbarung online ausfüllen – PDF kostenlos"} },
};

export default vlastni(stranka, 'aufhebungsvereinbarung-mietvertrag');

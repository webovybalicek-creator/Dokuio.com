import type { StrankaDokumentu } from '../typy';
import { mietaufhebungsvertrag as sablona } from '../../sablony/de/mietaufhebungsvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Mietaufhebungsvertrag",
  nazevA: "Mietaufhebungsvertrag",
  katalog: {"popis": "Mietverhältnis einvernehmlich beenden – Termin, Rückgabe, Kaution.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["Mietaufhebungsvertrag", "Aufhebungsvertrag Miete", "Mietvertrag einvernehmlich beenden", "Kaution", "Wohnungsübergabe"]},
  souvisejici: "wohnen",
  landing: {
  "title": "Mietaufhebungsvertrag {rok} – Muster kostenlos (PDF & Word)",
  "description": "Kostenloser Mietaufhebungsvertrag: Mietverhältnis einvernehmlich beenden, Rückgabe der Wohnung, Kautionsrückzahlung und Nebenkosten. Als PDF oder Word.",
  "perex": "Sie wollen früher ausziehen, ohne Kündigungsfrist? Mit einem Mietaufhebungsvertrag beenden Vermieter und Mieter das Mietverhältnis zu einem festen Termin.",
  "obsahPopis": "Drei Abschnitte.",
  "obsah": [
    {
      "nazev": "Vertragsparteien",
      "popis": "Vermieter und Mieter."
    },
    {
      "nazev": "Beendigung des Mietverhältnisses",
      "popis": "Termin, Rückgabe, Miete bis zum Ende."
    },
    {
      "nazev": "Kaution und weitere Vereinbarungen",
      "popis": "Wann und wohin die Kaution zurückgezahlt wird."
    }
  ],
  "kroky": [
    {
      "nazev": "Parteien eintragen",
      "popis": "Wie im Mietvertrag."
    },
    {
      "nazev": "Termin vereinbaren",
      "popis": "Ende und Rückgabe."
    },
    {
      "nazev": "Unterschreiben",
      "popis": "Beide Seiten, zwei Exemplare."
    }
  ],
  "online": [
    "Termine im Kalender",
    "Erklärungen zu jedem Feld",
    "Download als PDF und Word",
    "Leere Vorlage zum Ausdrucken"
  ],
  "hodiSe": [
    "Mieter möchte vor Ablauf der Kündigungsfrist ausziehen",
    "beide Seiten wollen das Mietverhältnis einvernehmlich beenden"
  ],
  "nehodiSe": [
    "die andere Seite ist nicht einverstanden – dann bleibt die Kündigung"
  ],
  "po": [
    {
      "nazev": "Rückgabe",
      "popis": "Übergabeprotokoll mit Zählerständen."
    },
    {
      "nazev": "Kaution",
      "popis": "Erinnerung zur Rückzahlung im Kalender."
    }
  ],
  "faq": [
    {
      "q": "Muss ich einen Aufhebungsvertrag unterschreiben?",
      "a": "Nein. Er setzt die Zustimmung beider Seiten voraus. Wer nicht zustimmt, bleibt bei der Kündigung mit den gesetzlichen Fristen."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf der Vertragsfreiheit (§ 311 BGB) und den Vorschriften zur Wohnraummiete (§§ 535 ff. BGB).",
  "souvisejiciPopis": "Weitere Vorlagen rund ums Wohnen."
},
  vytvorit: {"title": "Mietaufhebungsvertrag online ausfüllen – kostenlos als PDF", "description": "Mietaufhebungsvertrag online erstellen. Kostenlos als PDF oder Word.", "podnadpis": "Kostenlos · PDF und Word · dauert etwa 2 Minuten"},
};

export default stranka;

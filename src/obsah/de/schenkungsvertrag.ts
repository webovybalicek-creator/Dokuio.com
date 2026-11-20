import type { StrankaDokumentu } from '../typy';
import { schenkungsvertrag as sablona } from '../../sablony/de/schenkungsvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Schenkungsvertrag",
  nazevA: "Schenkungsvertrag",
  katalog: {
  "popis": "Geld oder eine Sache verschenken – sofort übergeben.",
  "kategorie": "geld",
  "ilustrace": "dar",
  "slova": [
    "Schenkungsvertrag",
    "Schenkung",
    "Geldgeschenk",
    "Schenkungsteuer",
    "Freibetrag"
  ]
},
  souvisejici: "geld",
  landing: {
  "title": "Schenkungsvertrag {rok} – Vorlage kostenlos als PDF",
  "description": "Kostenloser Schenkungsvertrag für Geld oder bewegliche Sachen – ohne Notar. Mit Hinweisen zu Freibeträgen und Anzeige beim Finanzamt. Als PDF und Word.",
  "perex": "Für Schenkungen, die sofort übergeben oder überwiesen werden. Mit Hinweisen zur Schenkungsteuer.",
  "obsahPopis": "Vertrag über eine sofort vollzogene Schenkung.",
  "obsah": [
    {
      "nazev": "Parteien",
      "popis": "Wer schenkt, wer erhält."
    },
    {
      "nazev": "Geschenk",
      "popis": "Geld oder Sache."
    },
    {
      "nazev": "Vollzug",
      "popis": "Bar, Überweisung oder Übergabe."
    }
  ],
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
      "nazev": "Anzeigen",
      "popis": "Finanzamt binnen drei Monaten."
    }
  ],
  "online": [
    "Ausfüllen mit Erklärungen zu jedem Feld",
    "Unterschrift auf dem Bildschirm",
    "Download als PDF und Word"
  ],
  "hodiSe": [
    "Geldgeschenk an Kinder oder Enkel",
    "Auto oder Schmuck verschenken"
  ],
  "nehodiSe": [
    "Versprechen, später zu schenken – braucht einen Notar",
    "Grundstücke und Wohnungen"
  ],
  "po": [
    {
      "nazev": "Finanzamt",
      "popis": "Schenkung binnen drei Monaten anzeigen (§ 30 ErbStG)."
    }
  ],
  "faq": [
    {
      "q": "Brauche ich einen Notar?",
      "a": "Nicht, wenn das Geschenk sofort übergeben wird. Ein Versprechen für später muss notariell beurkundet werden (§ 518 BGB)."
    },
    {
      "q": "Fällt Schenkungsteuer an?",
      "a": "Erst über den Freibeträgen, z. B. 400.000 € für Kinder oder 20.000 € für Nichtverwandte, je 10 Jahre."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 516 ff. BGB sowie §§ 16 und 30 ErbStG.",
  "souvisejiciPopis": "Weitere Dokumente, ebenfalls kostenlos."
},
  vytvorit: {
  "title": "Schenkungsvertrag online ausfüllen – PDF kostenlos",
  "description": "Schenkungsvertrag für Geld oder Sachen. PDF oder Word kostenlos.",
  "podnadpis": "Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten"
},
};

export default stranka;

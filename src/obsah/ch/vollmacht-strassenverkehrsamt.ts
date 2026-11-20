import type { StrankaDokumentu } from '../typy';
import { vollmachtStrassenverkehrsamtCH as sablona } from '../../sablony/ch/vollmacht-strassenverkehrsamt';

const stranka: StrankaDokumentu = {
  sablona,
  "nazev": "Vollmacht Strassenverkehrsamt",
  "nazevA": "Vollmacht für das Strassenverkehrsamt",
  "katalog": {
    "popis": "Wenn jemand anderes zum Strassenverkehrsamt geht.",
    "kategorie": "auto",
    "ilustrace": "plnamoc",
    "slova": [
      "Vollmacht",
      "Strassenverkehrsamt",
      "Einlösen",
      "Halterwechsel",
      "Schilder abgeben",
      "Auto"
    ]
  },
  "souvisejici": "auto",
  "landing": {
    "title": "Vollmacht Strassenverkehrsamt Schweiz {rok} – Vorlage PDF kostenlos",
    "description": "Kostenlose Vollmacht für Einlösen, Halterwechsel oder Ausserverkehrsetzung beim kantonalen Strassenverkehrsamt. Mit Liste der Unterlagen. Als PDF und Word.",
    "perex": "Damit eine andere Person Ihr Fahrzeug beim Strassenverkehrsamt einlöst, umschreibt oder die Schilder abgibt.",
    "obsahPopis": "Eine Seite nach Art. 32 ff. OR.",
    "obsah": [
      {
        "nazev": "Vollmachtgeber/in",
        "popis": "Halter/in des Fahrzeugs."
      },
      {
        "nazev": "Bevollmächtigte Person",
        "popis": "Wer zum Amt geht."
      },
      {
        "nazev": "Geschäft",
        "popis": "Einlösen, Halterwechsel oder Ausserverkehrsetzung."
      },
      {
        "nazev": "Fahrzeug",
        "popis": "Marke, Fahrgestellnummer, Schild."
      }
    ],
    "kroky": [
      {
        "nazev": "Angaben eintragen",
        "popis": "Was Sie nicht wissen, bleibt als Linie."
      },
      {
        "nazev": "Text prüfen",
        "popis": "Vorschau neben dem Formular."
      },
      {
        "nazev": "Herunterladen und unterschreiben",
        "popis": "PDF oder Word."
      }
    ],
    "online": [
      "Erklärungen zu jedem Feld",
      "Unterschrift auf dem Bildschirm",
      "Entwurf bleibt im Browser gespeichert",
      "Download als PDF und Word"
    ],
    "hodiSe": [
      "Sie können nicht selbst zum Strassenverkehrsamt",
      "Jemand löst ein gekauftes Auto für Sie ein"
    ],
    "nehodiSe": [
      "Kantone mit eigenem Pflichtformular – vorher nachsehen"
    ],
    "po": [
      {
        "nazev": "Strassenverkehrsamt",
        "popis": "Mit Vollmacht, Ausweisen und Fahrzeugausweis."
      }
    ],
    "faq": [
      {
        "q": "Was bringt die bevollmächtigte Person mit?",
        "a": "Die Vollmacht, ihren Pass oder ihre ID, eine Kopie Ihres Ausweises und den Fahrzeugausweis; beim Einlösen den Versicherungsnachweis, bei der Ausserverkehrsetzung die Schilder."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."
      }
    ],
    "zakony": "Stellvertretung nach Art. 32 ff. OR; Unterlagen gemäss den kantonalen Strassenverkehrsämtern (asa.ch)."
  },
  "vytvorit": {
    "title": "Vollmacht Strassenverkehrsamt online ausfüllen – PDF kostenlos",
    "description": "Vollmacht für das Strassenverkehrsamt. PDF oder Word kostenlos."
  },
};

export default stranka;

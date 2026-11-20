import type { StrankaDokumentu } from '../typy';
import { uebergabeprotokollFahrzeugCH as sablona } from '../../sablony/ch/uebergabeprotokoll-fahrzeug';

const stranka: StrankaDokumentu = {
  sablona,
  "nazev": "Übergabeprotokoll Fahrzeug",
  "nazevA": "Übergabeprotokoll für ein Fahrzeug",
  "katalog": {
    "popis": "Kilometerstand, Schäden und Schlüssel bei der Übergabe.",
    "kategorie": "auto",
    "ilustrace": "protokol",
    "slova": [
      "Übergabeprotokoll",
      "Auto",
      "Fahrzeug",
      "Kilometerstand",
      "Schäden",
      "Übergabe"
    ]
  },
  "souvisejici": "auto",
  "landing": {
    "title": "Übergabeprotokoll Fahrzeug Schweiz {rok} – Vorlage kostenlos als PDF",
    "description": "Kostenloses Übergabeprotokoll für Auto und Motorrad: Kilometerstand, Tank, Schäden, Schlüssel, Uhrzeit der Übergabe. Für Verkauf und Ausleihe. Als PDF und Word.",
    "perex": "Halten Sie beim Verkauf oder Ausleihen fest, in welchem Zustand das Fahrzeug übergeben wird – mit Kilometerstand, Schäden und genauer Uhrzeit.",
    "obsahPopis": "Protokoll mit Ankreuzfeldern.",
    "obsah": [
      {
        "nazev": "Beteiligte und Anlass",
        "popis": "Verkauf, Ausleihe oder Rückgabe."
      },
      {
        "nazev": "Fahrzeug",
        "popis": "Marke, Fahrgestellnummer, Schild."
      },
      {
        "nazev": "Zustand",
        "popis": "Kilometer, Tank, Schäden."
      },
      {
        "nazev": "Schlüssel und Papiere",
        "popis": "Fahrzeugausweis, Serviceheft, Zubehör."
      },
      {
        "nazev": "Übergabe",
        "popis": "Datum, Uhrzeit, Unterschriften."
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
      "Verkauf eines Autos – als Ergänzung zum Kaufvertrag",
      "Ausleihe an Familie oder Freunde"
    ],
    "nehodiSe": [
      "Mietwagen eines Vermieters – dieser hat eigene Protokolle"
    ],
    "po": [
      {
        "nazev": "Fotos",
        "popis": "Fahrzeug und Tacho fotografieren."
      },
      {
        "nazev": "Prüfung",
        "popis": "Käufer meldet Mängel sofort (Art. 201 OR)."
      }
    ],
    "faq": [
      {
        "q": "Ist das Protokoll Pflicht?",
        "a": "Nein, aber es beweist den Zustand und den genauen Zeitpunkt der Übergabe – wichtig bei Mängeln, Bussen oder Unfällen."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."
      }
    ],
    "zakony": "Kein gesetzliches Formular; ergänzt den Kaufvertrag nach Art. 184 ff. OR."
  },
  "vytvorit": {
    "title": "Übergabeprotokoll Fahrzeug (Schweiz) online ausfüllen – PDF kostenlos",
    "description": "Übergabeprotokoll für Auto oder Motorrad. PDF oder Word kostenlos."
  },
};

export default stranka;

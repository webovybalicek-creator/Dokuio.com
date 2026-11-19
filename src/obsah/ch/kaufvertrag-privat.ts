import type { StrankaDokumentu } from '../typy';
import { kaufvertragPrivatCH as sablona } from '../../sablony/ch/kaufvertrag-privat';

const stranka: StrankaDokumentu = {
  sablona,
  "nazev": "Kaufvertrag privat",
  "nazevA": "privaten Kaufvertrag",
  "katalog": {
    "popis": "Gebrauchte Sachen von privat verkaufen.",
    "kategorie": "alltag",
    "ilustrace": "protokol",
    "slova": [
      "Kaufvertrag",
      "privat",
      "verkaufen",
      "Velo",
      "Handy",
      "Möbel",
      "gebraucht"
    ]
  },
  "souvisejici": "alltag",
  "landing": {
    "title": "Kaufvertrag privat Schweiz {rok} – Vorlage kostenlos als PDF",
    "description": "Kostenloser Kaufvertrag für gebrauchte Sachen zwischen Privatpersonen nach Art. 184 ff. OR – mit Gewährleistungsausschluss. Für Velo, Handy, Möbel.",
    "perex": "Verkauf eines Velos, Handys oder Möbelstücks von privat – mit Beschreibung, Mängeln und Gewährleistungsausschluss.",
    "obsahPopis": "Vier Artikel nach Art. 184 ff. OR.",
    "obsah": [
      {
        "nazev": "Parteien",
        "popis": "Verkäufer und Käufer."
      },
      {
        "nazev": "Kaufsache",
        "popis": "Beschreibung und Mängel."
      },
      {
        "nazev": "Preis und Übergabe",
        "popis": "Zahlung und Eigentum."
      },
      {
        "nazev": "Gewährleistung",
        "popis": "Wegbedungen oder gesetzlich."
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
      "Betrag in Worten automatisch",
      "Unterschrift auf dem Bildschirm",
      "Entwurf bleibt im Browser gespeichert",
      "Download als PDF und Word"
    ],
    "hodiSe": [
      "Verkauf über Ricardo, Tutti oder Anibis an Privatpersonen",
      "Teurere gebrauchte Sachen"
    ],
    "nehodiSe": [
      "Autos – dafür gibt es den Kaufvertrag Auto",
      "Verkäufe von Händlern an Konsumenten"
    ],
    "po": [
      {
        "nazev": "Prüfung",
        "popis": "Käufer prüft sofort und meldet Mängel umgehend."
      }
    ],
    "faq": [
      {
        "q": "Darf ich die Gewährleistung ausschliessen?",
        "a": "Unter Privaten ja – nicht aber für arglistig verschwiegene Mängel (Art. 199 OR)."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf Art. 184 ff. und Art. 197 ff. OR."
  },
  "vytvorit": {
    "title": "Kaufvertrag privat (Schweiz) online ausfüllen – PDF kostenlos",
    "description": "Privater Kaufvertrag für gebrauchte Sachen. PDF oder Word kostenlos."
  },
};

export default stranka;

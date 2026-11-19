import type { StrankaDokumentu } from '../typy';
import { kaufvertragAutoCH as sablona } from '../../sablony/ch/kaufvertrag-auto';

const stranka: StrankaDokumentu = {
  sablona,
  "nazev": "Kaufvertrag Auto",
  "nazevA": "Kaufvertrag für ein Auto",
  "katalog": {
    "popis": "Privatverkauf eines Occasionsfahrzeugs.",
    "kategorie": "auto",
    "ilustrace": "auto",
    "slova": [
      "Auto verkaufen",
      "Occasion",
      "Autokauf",
      "Kaufvertrag",
      "Personenwagen",
      "privat",
      "car"
    ]
  },
  "souvisejici": "auto",
  "landing": {
    "title": "Kaufvertrag Auto Schweiz {rok} – Vorlage kostenlos als PDF",
    "description": "Kostenloser Kaufvertrag für ein Occasionsfahrzeug von privat nach OR: Fahrgestellnummer, Kilometerstand, Unfälle, Gewährleistungsausschluss, Schilder. PDF und Word.",
    "perex": "Privatverkauf eines Occasionsautos nach Obligationenrecht – mit Kilometerstand, Unfallschäden, Gewährleistungsausschluss und Hinweisen zu Schildern und Einlösen.",
    "obsahPopis": "Sechs Artikel nach Art. 184 ff. OR.",
    "obsah": [
      {
        "nazev": "Vertragsparteien",
        "popis": "Verkäufer und Käufer."
      },
      {
        "nazev": "Kaufgegenstand",
        "popis": "Fahrgestellnummer, Stammnummer, MFK."
      },
      {
        "nazev": "Zustand",
        "popis": "Kilometerstand, Unfälle, Mängel."
      },
      {
        "nazev": "Gewährleistung",
        "popis": "Wegbedungen oder gesetzlich."
      },
      {
        "nazev": "Preis und Übergabe",
        "popis": "Zahlung, Uhrzeit, Fahrzeugausweis."
      },
      {
        "nazev": "Schilder und Einlösen",
        "popis": "Was Verkäufer und Käufer erledigen."
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
      "Sie verkaufen oder kaufen ein Occasionsauto von privat",
      "Sie wollen Kilometerstand und Unfälle schriftlich festhalten"
    ],
    "nehodiSe": [
      "Kauf beim Garagisten – dort gelten dessen Bedingungen und Garantie",
      "Leasingfahrzeug – erst mit der Leasinggesellschaft klären"
    ],
    "po": [
      {
        "nazev": "Schilder",
        "popis": "Bleiben beim Verkäufer – für ein neues Auto verwenden oder abgeben."
      },
      {
        "nazev": "Versicherung",
        "popis": "Verkäufer informiert seine Versicherung."
      },
      {
        "nazev": "Einlösen",
        "popis": "Käufer löst das Auto mit Versicherungsnachweis beim Strassenverkehrsamt ein."
      }
    ],
    "faq": [
      {
        "q": "Darf ich als Privatperson die Gewährleistung ausschliessen?",
        "a": "Ja, unter Privaten ist das üblich. Der Ausschluss gilt aber nicht für Mängel, die Sie arglistig verschweigen (Art. 199 OR)."
      },
      {
        "q": "Gehen die Kontrollschilder mit dem Auto mit?",
        "a": "Nein. In der Schweiz gehören die Schilder dem Halter. Der Verkäufer behält sie, der Käufer braucht eigene."
      },
      {
        "q": "Was braucht der Käufer zum Einlösen?",
        "a": "Den Fahrzeugausweis, einen Versicherungsnachweis seiner Motorfahrzeugversicherung und einen Ausweis. Ob eine neue Fahrzeugprüfung nötig ist, regelt der Kanton."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf Art. 184 ff. und Art. 197 ff. OR (Fedlex) und den Angaben der kantonalen Strassenverkehrsämter."
  },
  "vytvorit": {
    "title": "Kaufvertrag Auto (Schweiz) online ausfüllen – PDF kostenlos",
    "description": "Privater Kaufvertrag für ein Occasionsauto nach Schweizer Recht. PDF oder Word kostenlos."
  },
};

export default stranka;

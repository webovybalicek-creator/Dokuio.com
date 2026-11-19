import type { StrankaDokumentu } from '../typy';
import { schenkungsvertragCH as sablona } from '../../sablony/ch/schenkungsvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  "nazev": "Schenkungsvertrag",
  "nazevA": "Schenkungsvertrag",
  "katalog": {
    "popis": "Geld oder eine Sache verschenken.",
    "kategorie": "geld",
    "ilustrace": "dar",
    "slova": [
      "Schenkung",
      "Schenkungsvertrag",
      "Geld schenken",
      "Schenkungssteuer",
      "Erbvorbezug"
    ]
  },
  "souvisejici": "geld",
  "landing": {
    "title": "Schenkungsvertrag Schweiz {rok} – Vorlage kostenlos als PDF",
    "description": "Kostenloser Schenkungsvertrag für Geld oder bewegliche Sachen nach Art. 239 ff. OR – mit Hinweisen zur kantonalen Schenkungssteuer.",
    "perex": "Für Schenkungen von Geld oder Sachen, die sofort übergeben werden. Mit Hinweisen zur Schenkungssteuer im Kanton.",
    "obsahPopis": "Vier Artikel nach Art. 239 ff. OR.",
    "obsah": [
      {
        "nazev": "Parteien",
        "popis": "Schenker und Beschenkte."
      },
      {
        "nazev": "Gegenstand",
        "popis": "Geld oder Sache."
      },
      {
        "nazev": "Vollzug",
        "popis": "Sofortige Übergabe."
      },
      {
        "nazev": "Schlussbestimmungen",
        "popis": "Steuer und Exemplare."
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
      "Geldgeschenk in der Familie",
      "Schenkung eines Autos oder Schmucks"
    ],
    "nehodiSe": [
      "Grundstücke und Wohnungen – öffentliche Beurkundung nötig",
      "Erbvorbezug mit Ausgleichungsregeln – besser beraten lassen"
    ],
    "po": [
      {
        "nazev": "Steuerverwaltung",
        "popis": "Bei grösseren Beträgen nachfragen, ob Schenkungssteuer anfällt."
      }
    ],
    "faq": [
      {
        "q": "Braucht es einen Notar?",
        "a": "Nein, ausser bei Grundstücken. Eine Schenkung von Hand zu Hand ist formfrei, ein Schenkungsversprechen muss schriftlich sein (Art. 243 OR)."
      },
      {
        "q": "Muss ich Schenkungssteuer bezahlen?",
        "a": "Das regelt der Kanton. Ehegatten sind überall befreit, Nachkommen in den meisten Kantonen; Schwyz und Obwalden erheben keine Schenkungssteuer."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf Art. 239 ff. OR; Steuerhinweise nach ch.ch."
  },
  "vytvorit": {
    "title": "Schenkungsvertrag (Schweiz) online ausfüllen – PDF kostenlos",
    "description": "Schenkungsvertrag für Geld oder Sachen. PDF oder Word kostenlos."
  },
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { darlehensvertragCH as sablona } from '../../sablony/ch/darlehensvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  "nazev": "Darlehensvertrag",
  "nazevA": "Darlehensvertrag",
  "katalog": {
    "popis": "Geld leihen, auch in Raten.",
    "kategorie": "geld",
    "ilustrace": "pujcka",
    "slova": [
      "Darlehen",
      "Darlehensvertrag",
      "Geld leihen",
      "privat",
      "Raten",
      "Tilgungsplan"
    ]
  },
  "souvisejici": "geld",
  "landing": {
    "title": "Darlehensvertrag privat Schweiz {rok} – Vorlage PDF kostenlos",
    "description": "Kostenloser privater Darlehensvertrag nach Art. 312 ff. OR: Betrag, Zinsen, Rückzahlung auf einmal oder in Raten mit Tilgungsplan. Als PDF und Word.",
    "perex": "Geld an Freunde oder Familie leihen – schriftlich, mit klarer Rückzahlung und auf Wunsch mit Tilgungsplan.",
    "obsahPopis": "Fünf Artikel nach Art. 312 ff. OR, auf Wunsch mit Tilgungsplan.",
    "obsah": [
      {
        "nazev": "Parteien",
        "popis": "Darleiher und Borger."
      },
      {
        "nazev": "Darlehen",
        "popis": "Betrag und Auszahlung."
      },
      {
        "nazev": "Zinsen",
        "popis": "Zinslos oder mit Zins."
      },
      {
        "nazev": "Rückzahlung",
        "popis": "Auf einmal oder in Raten."
      },
      {
        "nazev": "Schlussbestimmungen",
        "popis": "Form und Exemplare."
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
      "Sie leihen Freunden oder Familie Geld",
      "Rückzahlung in Raten"
    ],
    "nehodiSe": [
      "Gewerbliche Kredite an Konsumenten – dafür gilt das Konsumkreditgesetz"
    ],
    "po": [
      {
        "nazev": "Auszahlung",
        "popis": "Am besten überweisen."
      },
      {
        "nazev": "Raten",
        "popis": "Erinnerungen in den Kalender übernehmen."
      }
    ],
    "faq": [
      {
        "q": "Muss ich Zinsen vereinbaren?",
        "a": "Nein. Unter Privaten sind Zinsen nur geschuldet, wenn sie vereinbart sind."
      },
      {
        "q": "Was gilt ohne festen Rückzahlungstermin?",
        "a": "Dann muss das Darlehen innert sechs Wochen nach der ersten Aufforderung zurückbezahlt werden (Art. 318 OR)."
      },
      {
        "q": "Hilft der Vertrag bei einer Betreibung?",
        "a": "Ja. Ein vom Borger unterschriebener Vertrag gilt als Schuldanerkennung; damit kann die provisorische Rechtsöffnung verlangt werden (Art. 82 SchKG)."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf Art. 312 ff. OR und Art. 82 SchKG."
  },
  "vytvorit": {
    "title": "Darlehensvertrag (Schweiz) online ausfüllen – PDF kostenlos",
    "description": "Privater Darlehensvertrag mit Tilgungsplan. PDF oder Word kostenlos."
  },
};

export default stranka;

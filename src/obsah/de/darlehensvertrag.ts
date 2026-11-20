import type { StrankaDokumentu } from '../typy';
import { darlehensvertrag as sablona } from '../../sablony/de/darlehensvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Privater Darlehensvertrag",
  nazevA: "Darlehensvertrag",
  katalog: {
    "popis": "Geld unter Freunden oder in der Familie leihen, auch in Raten.",
    "kategorie": "geld",
    "ilustrace": "pujcka",
    "slova": [
      "Darlehen",
      "Geld leihen",
      "Privatkredit",
      "Raten",
      "loan"
    ]
  },
  souvisejici: 'geld',
  landing: {
    "title": "Privater Darlehensvertrag {rok} – Vorlage PDF kostenlos",
    "description": "Kostenloser privater Darlehensvertrag: Betrag, Zinsen, Rückzahlung in einer Summe oder in Raten mit Tilgungsplan. PDF und Word.",
    "perex": "Geld unter Freunden schwarz auf weiß. In einer Summe oder in Raten – den Tilgungsplan fügen wir automatisch an.",
    "obsahPopis": "Fünf Paragrafen nach §§ 488 ff. BGB.",
    "obsah": [
      {
        "nazev": "Parteien",
        "popis": "Darlehensgeber und -nehmer."
      },
      {
        "nazev": "Darlehen",
        "popis": "Betrag und Auszahlung."
      },
      {
        "nazev": "Zinsen",
        "popis": "Zinslos oder mit Zinsen."
      },
      {
        "nazev": "Rückzahlung",
        "popis": "Einmal oder in Raten."
      },
      {
        "nazev": "Schluss",
        "popis": "Schriftform."
      }
    ],
    "kroky": [
      {
        "nazev": "Betrag eintragen",
        "popis": "Und Auszahlung wählen."
      },
      {
        "nazev": "Rückzahlung festlegen",
        "popis": "Einmal oder in Raten."
      },
      {
        "nazev": "Unterschreiben",
        "popis": "Zwei Exemplare."
      }
    ],
    "online": [
      "Tilgungsplan als Anlage",
      "Raten-Erinnerungen im Kalender",
      "Betrag in Worten automatisch",
      "Download als PDF und Word"
    ],
    "hodiSe": [
      "Sie leihen Freunden oder Familie Geld",
      "Sie möchten Raten mit klaren Terminen"
    ],
    "nehodiSe": [
      "gewerbliche Kredite oder Verbraucherdarlehen von Unternehmen"
    ],
    "po": [
      {
        "nazev": "Auszahlung",
        "popis": "Per Überweisung oder gegen Quittung."
      }
    ],
    "faq": [
      {
        "q": "Was gilt ohne festen Rückzahlungstermin?",
        "a": "Dann kann das Darlehen mit einer Frist von drei Monaten gekündigt werden (§ 488 Abs. 3 BGB)."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Der Vertrag entsteht ausschließlich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf §§ 488 ff. BGB.",
    "souvisejiciPopis": "Weitere Dokumente, ebenfalls kostenlos."
  },
  vytvorit: {
    "title": "Darlehensvertrag online ausfüllen – PDF kostenlos",
    "description": "Privater Darlehensvertrag mit Tilgungsplan. PDF oder Word kostenlos.",
    "podnadpis": "Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten"
  },
};

export default stranka;

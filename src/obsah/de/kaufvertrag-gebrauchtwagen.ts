import type { StrankaDokumentu } from '../typy';
import { kaufvertragGebrauchtwagen as sablona } from '../../sablony/de/kaufvertrag-gebrauchtwagen';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kaufvertrag Gebrauchtwagen",
  nazevA: "Kaufvertrag für Gebrauchtwagen",
  katalog: {
    "popis": "Privatverkauf eines gebrauchten Autos.",
    "kategorie": "auto",
    "ilustrace": "auto",
    "slova": [
      "Auto verkaufen",
      "Autokauf",
      "Kaufvertrag",
      "Gebrauchtwagen",
      "Pkw",
      "privat",
      "car"
    ]
  },
  souvisejici: 'auto',
  landing: {
    "title": "Kaufvertrag Gebrauchtwagen {rok} – Vorlage kostenlos als PDF",
    "description": "Kostenloser Kaufvertrag für Gebrauchtwagen von privat: FIN, Kilometerstand, Unfallschäden, Haftungsausschluss nach § 444 BGB, Übergabe. PDF und Word.",
    "perex": "Privatverkauf eines gebrauchten Autos nach BGB – mit Kilometerstand, Unfallschäden und rechtssicher formuliertem Haftungsausschluss.",
    "obsahPopis": "Sechs Paragrafen nach §§ 433 ff. BGB.",
    "obsah": [
      {
        "nazev": "Vertragsparteien",
        "popis": "Verkäufer und Käufer."
      },
      {
        "nazev": "Kaufgegenstand",
        "popis": "Fahrzeug, FIN, Kennzeichen."
      },
      {
        "nazev": "Zustand",
        "popis": "Kilometerstand, Unfälle, Mängel."
      },
      {
        "nazev": "Sachmängelhaftung",
        "popis": "Ausschluss oder gesetzlich."
      },
      {
        "nazev": "Preis und Übergabe",
        "popis": "Zahlung, Eigentumsvorbehalt, Uhrzeit."
      },
      {
        "nazev": "Ummeldung",
        "popis": "Behörde und Versicherung."
      }
    ],
    "kroky": [
      {
        "nazev": "Angaben eintragen",
        "popis": "Parteien, Fahrzeug, Preis."
      },
      {
        "nazev": "Text prüfen",
        "popis": "Jeder Absatz ist anpassbar."
      },
      {
        "nazev": "Herunterladen und unterschreiben",
        "popis": "PDF oder Word, zwei Exemplare."
      }
    ],
    "online": [
      "Betrag in Worten automatisch",
      "FIN-Prüfung",
      "Unterschrift auf dem Bildschirm",
      "Download als PDF und Word"
    ],
    "hodiSe": [
      "Sie verkaufen oder kaufen ein gebrauchtes Auto von privat",
      "Sie wollen Kilometerstand und Unfälle schriftlich festhalten"
    ],
    "nehodiSe": [
      "Kauf beim Händler – dort gilt Verbraucherrecht mit Gewährleistung",
      "Leasingfahrzeug – erst ablösen"
    ],
    "po": [
      {
        "nazev": "Veräußerungsanzeige",
        "popis": "Verkäufer meldet den Verkauf unverzüglich der Zulassungsbehörde."
      },
      {
        "nazev": "Versicherung",
        "popis": "Verkauf dem Kfz-Versicherer melden."
      },
      {
        "nazev": "Ummeldung",
        "popis": "Käufer meldet das Fahrzeug auf sich um."
      }
    ],
    "faq": [
      {
        "q": "Darf ich als Privatperson die Gewährleistung ausschließen?",
        "a": "Ja. Der Ausschluss gilt aber nicht für arglistig verschwiegene Mängel und vereinbarte Eigenschaften wie „unfallfrei“ (§ 444 BGB)."
      },
      {
        "q": "Was muss ich nach dem Verkauf melden?",
        "a": "Die Veräußerung unverzüglich der Zulassungsbehörde (§ 15 FZV) und der Kfz-Versicherung."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Der Vertrag entsteht ausschließlich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf §§ 433 ff. und § 444 BGB sowie § 15 FZV.",
    "souvisejiciPopis": "Weitere Dokumente, ebenfalls kostenlos."
  },
  vytvorit: {
    "title": "Kaufvertrag Gebrauchtwagen online ausfüllen – PDF kostenlos",
    "description": "Assistent für den privaten Autokaufvertrag nach deutschem Recht. PDF oder Word kostenlos.",
    "podnadpis": "Kostenlos · Ergebnis als PDF und Word · dauert ca. 5 Minuten"
  },
};

export default stranka;

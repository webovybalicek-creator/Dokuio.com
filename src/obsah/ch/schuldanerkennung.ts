import type { StrankaDokumentu } from '../typy';
import { schuldanerkennungCH as sablona } from '../../sablony/ch/schuldanerkennung';

const stranka: StrankaDokumentu = {
  sablona,
  "nazev": "Schuldanerkennung",
  "nazevA": "Schuldanerkennung",
  "katalog": {
    "popis": "Schuld schriftlich bestätigen, mit Raten.",
    "kategorie": "geld",
    "ilustrace": "dluh",
    "slova": [
      "Schuldanerkennung",
      "Schuld",
      "Raten",
      "Rechtsöffnung",
      "Betreibung",
      "Verjährung"
    ]
  },
  "souvisejici": "geld",
  "landing": {
    "title": "Schuldanerkennung Vorlage Schweiz {rok} – kostenlos als PDF",
    "description": "Kostenlose Schuldanerkennung nach Art. 17 OR: Grund und Höhe der Schuld, Zahlung auf einmal oder in Raten. Gilt als Rechtsöffnungstitel (Art. 82 SchKG).",
    "perex": "Der Schuldner bestätigt schriftlich, wie viel er schuldet und wann er zahlt. Mit Unterschrift ist das in der Betreibung ein starkes Dokument.",
    "obsahPopis": "Kurzes Dokument, auf Wunsch mit Tilgungsplan.",
    "obsah": [
      {
        "nazev": "Beteiligte",
        "popis": "Schuldner und Gläubiger."
      },
      {
        "nazev": "Anerkennung",
        "popis": "Grund und Höhe der Schuld."
      },
      {
        "nazev": "Zahlung",
        "popis": "Auf einmal oder in Raten."
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
      "Jemand schuldet Ihnen Geld und will später oder in Raten zahlen",
      "Sie wollen die Verjährung unterbrechen"
    ],
    "nehodiSe": [
      "Streit über die Höhe der Schuld – zuerst einigen"
    ],
    "po": [
      {
        "nazev": "Original",
        "popis": "Behält der Gläubiger."
      },
      {
        "nazev": "Betreibung",
        "popis": "Bei Nichtzahlung: provisorische Rechtsöffnung beantragen."
      }
    ],
    "faq": [
      {
        "q": "Warum ist eine Schuldanerkennung so wertvoll?",
        "a": "Erhebt der Schuldner in der Betreibung Rechtsvorschlag, kann der Gläubiger mit der unterschriebenen Schuldanerkennung die provisorische Rechtsöffnung verlangen (Art. 82 SchKG)."
      },
      {
        "q": "Was passiert mit der Verjährung?",
        "a": "Die Anerkennung unterbricht sie, die Frist beginnt neu (Art. 135 OR)."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf Art. 17 und Art. 135 OR sowie Art. 82 SchKG."
  },
  "vytvorit": {
    "title": "Schuldanerkennung (Schweiz) online ausfüllen – PDF kostenlos",
    "description": "Schuldanerkennung mit Raten. PDF oder Word kostenlos."
  },
};

export default stranka;

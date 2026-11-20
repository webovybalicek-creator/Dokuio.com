import type { StrankaDokumentu } from '../typy';
import { vollmachtCH as sablona } from '../../sablony/ch/vollmacht';

const stranka: StrankaDokumentu = {
  sablona,
  "nazev": "Vollmacht",
  "nazevA": "Vollmacht",
  "katalog": {
    "popis": "Damit jemand eine Sache für Sie erledigt.",
    "kategorie": "alltag",
    "ilustrace": "plnamoc",
    "slova": [
      "Vollmacht",
      "Vertretung",
      "bevollmächtigen",
      "Post",
      "Behörde"
    ]
  },
  "souvisejici": "alltag",
  "landing": {
    "title": "Vollmacht Vorlage Schweiz {rok} – kostenlos als PDF",
    "description": "Kostenlose Vollmacht nach Art. 32 ff. OR: Wer wen wofür bevollmächtigt, gültig bis wann. Für Post, Behörden und Alltag. Als PDF und Word.",
    "perex": "Damit eine andere Person eine bestimmte Sache für Sie erledigt – klar und konkret formuliert.",
    "obsahPopis": "Eine Seite nach Art. 32 ff. OR.",
    "obsah": [
      {
        "nazev": "Vollmachtgeber/in",
        "popis": "Wer bevollmächtigt."
      },
      {
        "nazev": "Bevollmächtigte Person",
        "popis": "Wer handelt."
      },
      {
        "nazev": "Umfang",
        "popis": "Was genau."
      },
      {
        "nazev": "Gültigkeit",
        "popis": "Bis wann."
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
      "Abholung von Post oder Dokumenten",
      "Erledigungen bei Ämtern"
    ],
    "nehodiSe": [
      "Vorsorgeauftrag für den Fall der Urteilsunfähigkeit (Art. 360 ff. ZGB)",
      "Grundstücks- und Bankgeschäfte mit eigener Form"
    ],
    "po": [
      {
        "nazev": "Original",
        "popis": "Zusammen mit Pass oder ID vorlegen."
      }
    ],
    "faq": [
      {
        "q": "Muss die Unterschrift beglaubigt werden?",
        "a": "Für Alltägliches meist nicht. Grundbuch, Handelsregister oder Banken verlangen oft eine Beglaubigung oder eigene Formulare."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf Art. 32 ff. OR."
  },
  "vytvorit": {
    "title": "Vollmacht (Schweiz) online ausfüllen – PDF kostenlos",
    "description": "Vollmacht für Post, Ämter und Alltag. PDF oder Word kostenlos."
  },
};

export default stranka;

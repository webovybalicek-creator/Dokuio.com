import type { StrankaDokumentu } from '../typy';
import { quittungCH as sablona } from '../../sablony/ch/quittung';

const stranka: StrankaDokumentu = {
  sablona,
  "nazev": "Quittung",
  "nazevA": "Quittung",
  "katalog": {
    "popis": "Empfangsbestätigung für Bargeld.",
    "kategorie": "geld",
    "ilustrace": "penize",
    "slova": [
      "Quittung",
      "Bargeld",
      "Empfangsbestätigung",
      "Zahlung",
      "Bestätigung"
    ]
  },
  "souvisejici": "geld",
  "landing": {
    "title": "Quittung Vorlage Schweiz {rok} – kostenlos als PDF",
    "description": "Kostenlose Quittung über eine Barzahlung: Betrag in Ziffern und Worten, Zahlungsgrund, Unterschrift. Nach Art. 88 OR. Als PDF und Word.",
    "perex": "Bestätigen Sie schriftlich, dass Sie Bargeld erhalten haben – mit Betrag in Worten und Zahlungsgrund.",
    "obsahPopis": "Eine kurze Bestätigung.",
    "obsah": [
      {
        "nazev": "Empfänger/in",
        "popis": "Wer das Geld erhält."
      },
      {
        "nazev": "Zahlende Person",
        "popis": "Wer zahlt."
      },
      {
        "nazev": "Betrag",
        "popis": "In Ziffern und Worten."
      },
      {
        "nazev": "Zahlungsgrund",
        "popis": "Wofür bezahlt wird."
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
      "Barzahlung beim Autoverkauf",
      "Rückzahlung eines privaten Darlehens",
      "Übergabe einer Kaution"
    ],
    "nehodiSe": [
      "Rechnungen von Unternehmen"
    ],
    "po": [
      {
        "nazev": "Aufbewahren",
        "popis": "Jede Seite behält ein Exemplar."
      }
    ],
    "faq": [
      {
        "q": "Habe ich Anspruch auf eine Quittung?",
        "a": "Ja. Wer zahlt, kann eine Quittung verlangen (Art. 88 OR)."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf Art. 88 OR."
  },
  "vytvorit": {
    "title": "Quittung (Schweiz) online ausfüllen – PDF kostenlos",
    "description": "Quittung über eine Barzahlung. PDF oder Word kostenlos."
  },
};

export default stranka;

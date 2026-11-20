import type { StrankaDokumentu } from '../typy';
import de from '../de/erklaerung';
import { erklaerungAT as sablona } from '../../sablony/at/erklaerung';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "title": "Erklärung Österreich {rok} – Vorlage kostenlos (PDF & Word)",
  "description": "Kostenlose Vorlage für eine schriftliche Erklärung in Österreich: wer erklärt, für wen und was. Online ausfüllen, als PDF oder Word laden.",
  "nehodiSe": [
    "Behörde verlangt eine bestimmte Form – deren Formular verwenden",
    "die Stelle hat ein eigenes Formular"
  ],
  "faq": [
    {
      "q": "Muss die Unterschrift beglaubigt werden?",
      "a": "Nur wenn die empfangende Stelle das ausdrücklich verlangt."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ]
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Erklärung (Österreich) online ausfüllen – PDF kostenlos"} },
};

export default stranka;

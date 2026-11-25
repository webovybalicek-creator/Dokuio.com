import type { StrankaDokumentu } from '../typy';
import { vlastni } from './_eigen';
import de from '../de/erklaerung';
import { erklaerungCH as sablona } from '../../sablony/ch/erklaerung';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "title": "Erklärung Schweiz {rok} – Vorlage kostenlos (PDF & Word)",
  "description": "Kostenlose Vorlage für eine schriftliche Erklärung in der Schweiz: wer erklärt, für wen und was. Online ausfüllen, als PDF oder Word laden.",
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
  vytvorit: { ...de.vytvorit, ...{"title": "Erklärung (Schweiz) online ausfüllen – PDF kostenlos"} },
};

export default vlastni(stranka, 'erklaerung');

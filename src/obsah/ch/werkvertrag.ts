import type { StrankaDokumentu } from '../typy';
import de from '../de/werkvertrag';
import { werkvertragCH as sablona } from '../../sablony/ch/werkvertrag';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "title": "Werkvertrag Schweiz {rok} – Muster kostenlos (PDF & Word)",
  "description": "Kostenloser Werkvertrag nach Art. 363 ff. OR: Leistung, Termin, fester Preis oder Kostenansatz, Anzahlung, Mängelrüge und Verjährung. PDF und Word.",
  "obsahPopis": "Sechs Abschnitte nach Art. 363 ff. OR.",
  "obsah": [{"nazev": "Vertragsparteien", "popis": "Besteller/in und Unternehmer/in."}, {"nazev": "Vertragsgegenstand", "popis": "Werk, Ort, Material."}, {"nazev": "Ausführungszeit", "popis": "Beginn und Fertigstellung."}, {"nazev": "Vergütung und Zahlung", "popis": "Fester Preis oder ungefährer Kostenansatz, Anzahlung, Zahlungsfrist."}, {"nazev": "Abnahme und Mängel", "popis": "Prüfung, Mängelrüge, Protokoll, Verjährung."}, {"nazev": "Schlussbestimmungen", "popis": "Änderungen schriftlich."}],
  "po": [{"nazev": "Anzahlung", "popis": "Überweisen oder quittieren lassen."}, {"nazev": "Änderungen schriftlich", "popis": "Zusatzarbeiten und Preise schriftlich vereinbaren."}, {"nazev": "Prüfung", "popis": "Werk nach Ablieferung prüfen und Mängel sofort rügen."}],
  "faq": [
    {
      "q": "Wann muss ich zahlen?",
      "a": "Bei Ablieferung des Werks (Art. 372 OR). Eine Anzahlung kann vereinbart werden."
    },
    {
      "q": "Wie schnell muss ich Mängel melden?",
      "a": "Sofort nach der Prüfung, sobald diese nach dem üblichen Geschäftsgang tunlich ist; bei unbeweglichen Werken innert 60 Tagen (Art. 367 OR). Wer das Werk genehmigt, verliert Ansprüche für erkennbare Mängel."
    },
    {
      "q": "Wie lange haftet der Unternehmer?",
      "a": "Mängelansprüche verjähren 2 Jahre nach Abnahme, bei unbeweglichen Werken 5 Jahre (Art. 371 OR)."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "online": [
    "Preis in Worten (Franken) automatisch",
    "Termine im Kalender",
    "Erklärungen zu jedem Feld",
    "Download als PDF und Word"
  ],
  "zakony": "Die Vorlage beruht auf Art. 363–375 des Obligationenrechts (OR)."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Werkvertrag (Schweiz) online ausfüllen – PDF kostenlos"} },
};

export default stranka;

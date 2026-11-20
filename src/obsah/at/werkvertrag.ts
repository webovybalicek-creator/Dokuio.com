import type { StrankaDokumentu } from '../typy';
import de from '../de/werkvertrag';
import { werkvertragAT as sablona } from '../../sablony/at/werkvertrag';
import { nahradV } from '../../sablony/nahrad';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...nahradV(de.landing, [
    ['Änderungen in Textform.', 'Änderungen schriftlich.'],
    ['Zusatzarbeiten und Preise in Textform.', 'Zusatzarbeiten und Preise schriftlich vereinbaren.'],
    ['Hausbau oder großer Umbau – Verbraucherbauvertrag fachkundig erstellen lassen', 'Hausbau oder großer Umbau – Bauvertrag fachkundig erstellen lassen (z. B. auf Basis der ÖNORM B 2110)'],
  ]), ...{
  "title": "Werkvertrag Österreich {rok} – Muster kostenlos (PDF & Word)",
  "description": "Kostenloser Werkvertrag nach §§ 1165 ff. ABGB: Leistung, Termin, Pauschalpreis oder Kostenvoranschlag (§ 1170a), Anzahlung und Übernahme. PDF und Word.",
  "obsahPopis": "Sechs Abschnitte nach §§ 1165 ff. ABGB.",
  "faq": [
    {
      "q": "Was gilt beim Kostenvoranschlag?",
      "a": "Mit ausdrücklicher Gewährleistung darf der Preis nicht steigen. Ohne Gewährleistung muss eine unvermeidliche beträchtliche Überschreitung sofort angezeigt werden; der Besteller kann dann zurücktreten (§ 1170a ABGB)."
    },
    {
      "q": "Wann muss ich zahlen?",
      "a": "Grundsätzlich nach Vollendung des Werks. Eine Anzahlung kann vereinbart werden."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 1165 ff. und § 1170a ABGB."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Werkvertrag (Österreich) online ausfüllen – PDF kostenlos"} },
};

export default stranka;

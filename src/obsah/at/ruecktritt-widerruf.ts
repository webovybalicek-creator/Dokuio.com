import type { StrankaDokumentu } from '../typy';
import de from '../de/widerruf';
import { ruecktrittAT as sablona } from '../../sablony/at/ruecktritt';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  nazev: 'Rücktritt Online-Kauf',
  nazevA: 'Rücktritt',
  landing: { ...de.landing, ...{
  "title": "Rücktritt vom Online-Kauf Österreich {rok} – Muster-Widerrufsformular",
  "description": "Kostenloses Formular für den Rücktritt vom Online-Kauf nach dem FAGG: binnen 14 Tagen, ohne Begründung. PDF und Word.",
  "perex": "Online gekauft und doch nicht gewollt? Nach dem FAGG treten Sie innerhalb von 14 Tagen ohne Begründung zurück.",
  "faq": [
    {
      "q": "Muss ich einen Grund angeben?",
      "a": "Nein."
    },
    {
      "q": "Bis wann muss ich zurücktreten?",
      "a": "14 Tage ab Erhalt der Ware; rechtzeitiges Absenden genügt."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 11–14 FAGG und dem Muster-Widerrufsformular (Anhang I Teil B FAGG)."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Rücktritt Online-Kauf (Österreich) online ausfüllen – PDF", "description": "Rücktritt vom Online-Kauf nach dem FAGG. PDF oder Word kostenlos."} },
};

export default stranka;

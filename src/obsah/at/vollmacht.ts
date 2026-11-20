import type { StrankaDokumentu } from '../typy';
import de from '../de/vollmacht';
import { vollmachtAT as sablona } from '../../sablony/at/vollmacht';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "description": "Kostenlose Vollmacht nach §§ 1002 ff. ABGB: Wer wen wofür bevollmächtigt, gültig bis wann. Für Post, Behörden und Alltag in Österreich. Als PDF und Word.",
    "title": "Vollmacht Österreich {rok} – Vorlage kostenlos als PDF",
  "nehodiSe": [
    "Vorsorgevollmacht für Krankheit oder Alter",
    "Liegenschafts- oder Bankgeschäfte mit besonderer Form"
  ],
  "faq": [
    {
      "q": "Muss die Vollmacht beglaubigt werden?",
      "a": "Für alltägliche Erledigungen meist nicht. Für Grundbuch, Firmenbuch oder manche Banken ist eine Beglaubigung nötig."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 1002 ff. ABGB."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Vollmacht (Österreich) online ausfüllen – PDF kostenlos"} },
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import de from '../de/maengelanzeige';
import { maengelruegeAT as sablona } from '../../sablony/at/maengelruege';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  nazev: 'Mängelrüge',
  nazevA: 'Mängelrüge',
  katalog: { ...de.katalog, slova: ['Mängelrüge', 'Gewährleistung', 'Reklamation', 'VGG', 'defekt'] },
  landing: { ...de.landing, ...{
  "title": "Mängelrüge Österreich {rok} – Vorlage PDF kostenlos",
  "description": "Kostenlose Mängelrüge nach dem VGG: defekte Ware reklamieren, Verbesserung oder Austausch verlangen, Frist setzen. Als PDF und Word.",
  "perex": "Ware kaputt? Mit der Mängelrüge verlangen Sie Verbesserung oder Austausch und setzen eine Frist.",
  "po": [
    {
      "nazev": "Verjährung",
      "popis": "Rechte verjähren drei Monate nach Ende der Gewährleistungsfrist."
    }
  ],
  "faq": [
    {
      "q": "Wie lange habe ich Gewährleistung?",
      "a": "Zwei Jahre ab Übergabe, bei gebrauchten Sachen eventuell ein Jahr. Danach noch drei Monate, um sie gerichtlich geltend zu machen."
    },
    {
      "q": "Wer muss beweisen, dass der Mangel schon da war?",
      "a": "Im ersten Jahr wird es vermutet."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf dem Verbrauchergewährleistungsgesetz (VGG) und §§ 922 ff. ABGB."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Mängelrüge (Österreich) online ausfüllen – PDF kostenlos", "description": "Mängelrüge mit Fristsetzung. PDF oder Word kostenlos."} },
};

export default stranka;

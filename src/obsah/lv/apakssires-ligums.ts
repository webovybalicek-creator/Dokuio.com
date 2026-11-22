import type { StrankaDokumentu } from '../typy';
import { apakssire as sablona } from '../../sablony/lv/apakssires-ligums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Apakšīres līgums",
  nazevA: "apakšīres līgumu",
  katalog: {"popis": "Istaba vai dzīvoklis no īrnieka.", "kategorie": "majoklis", "ilustrace": "protokol", "slova": ["apakšīres līgums", "istabas apakšīre", "apakšīre", "istabas īre", "apakssires ligums"]},
  souvisejici: "majoklis",
  landing: {
  "title": "Apakšīres līgums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas apakšīres līguma paraugs: istaba vai visa dzīvojamā telpa, izīrētāja piekrišana, termiņš, maksa un drošības nauda. PDF un Word.",
  "perex": "Ja īrnieks izīrē istabu vai visu dzīvokli tālāk. Apakšīres līgums slēdzams rakstveidā, citu personu iemitināšanai vajadzīga izīrētāja piekrišana.",
  "obsahPopis": "Punkti par apakšīri.",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Īrnieks un apakšīrnieks."
    },
    {
      "nazev": "Priekšmets",
      "popis": "Istaba vai visa telpa, piekrišana."
    },
    {
      "nazev": "Termiņš",
      "popis": "No – līdz."
    },
    {
      "nazev": "Maksājumi",
      "popis": "Maksa un drošības nauda."
    }
  ],
  "kroky": [
    {
      "nazev": "Aizpildiet datus",
      "popis": "Ko nezināt, izlaidiet – paliks līnija aizpildīšanai ar roku."
    },
    {
      "nazev": "Pārbaudiet tekstu",
      "popis": "Katru rindkopu varat rediģēt."
    },
    {
      "nazev": "Lejupielādējiet un parakstiet",
      "popis": "PDF vai Word, bez maksas."
    }
  ],
  "online": [
    "Summa vārdiem automātiski",
    "PDF un Word"
  ],
  "hodiSe": [
    "esat īrnieks un izīrējat istabu tālāk"
  ],
  "nehodiSe": [
    "esat īpašnieks – izmantojiet īres līgumu"
  ],
  "po": [
    {
      "nazev": "Piekrišana",
      "popis": "Pievienojiet izīrētāja rakstveida piekrišanu."
    }
  ],
  "faq": [
    {
      "q": "Vai apakšīrei vajadzīga izīrētāja piekrišana?",
      "a": "Citu personu iemitināšanai likums prasa izīrētāja rakstveida piekrišanu, un īres līgumā var būt noteikumi par apakšīri. Iegūstiet piekrišanu pirms apakšīres."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Dzīvojamo telpu īres likumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē apakšīres līgumu – PDF", "description": "Istabas vai dzīvokļa apakšīres līgums. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { iresLigums as sablona } from '../../sablony/lv/ires-ligums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Dzīvojamās telpas īres līgums",
  nazevA: "dzīvojamās telpas īres līgumu",
  katalog: {"popis": "Dzīvokļa īre ar drošības naudu.", "kategorie": "majoklis", "ilustrace": "protokol", "slova": ["īres līgums", "dzīvokļa īres līgums", "dzīvojamās telpas īres līgums", "drošības nauda", "dzīvokļa izīrēšana", "ires ligums"]},
  souvisejici: "majoklis",
  landing: {
  "title": "Īres līgums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas dzīvokļa īres līguma paraugs pēc Dzīvojamo telpu īres likuma: noteikts termiņš, īres maksa, drošības nauda līdz 2 mēnešiem. PDF un Word.",
  "perex": "Dzīvokļa vai mājas izīrēšanai. Līgums rakstveidā uz noteiktu termiņu, drošības nauda ne vairāk kā divu mēnešu īres maksa.",
  "obsahPopis": "Punkti par dzīvojamās telpas īri.",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Izīrētājs un īrnieks."
    },
    {
      "nazev": "Telpa",
      "popis": "Adrese, platība, iekārtojums, iemitinātie."
    },
    {
      "nazev": "Termiņš",
      "popis": "Noteikts termiņš, īrnieka atkāpšanās ar mēneša brīdinājumu."
    },
    {
      "nazev": "Maksājumi",
      "popis": "Īres maksa, drošības nauda, pakalpojumi."
    },
    {
      "nazev": "Lietošana",
      "popis": "Pārbūve, iemitināšana, apakšīre."
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
    "PDF un Word",
    "Nodošanas akts pārņem datus"
  ],
  "hodiSe": [
    "izīrējat dzīvokli vai māju dzīvošanai",
    "vēlaties līgumu saskaņā ar Dzīvojamo telpu īres likumu"
  ],
  "nehodiSe": [
    "izīrējat īslaicīgi (viesu nams, vasarnīca) – tad piemēro Civillikumu",
    "izīrējat telpas uzņēmumam"
  ],
  "po": [
    {
      "nazev": "Akts",
      "popis": "Sastādiet pieņemšanas-nodošanas aktu ar skaitītāju rādījumiem."
    },
    {
      "nazev": "Zemesgrāmata",
      "popis": "Ja vēlaties, lai līgums būtu saistošs jaunajam īpašniekam, nostipriniet to."
    }
  ],
  "faq": [
    {
      "q": "Cik liela var būt drošības nauda?",
      "a": "Ne vairāk kā divu mēnešu īres maksa. Ja tā nav izlietota, to atdod ne vēlāk kā dzīvokļa atbrīvošanas dienā."
    },
    {
      "q": "Vai īres līgumu var noslēgt uz nenoteiktu laiku?",
      "a": "Nē. Dzīvojamo telpu īres likums paredz, ka līgumu slēdz uz noteiktu termiņu."
    },
    {
      "q": "Cik ātri īrnieks var aiziet?",
      "a": "Īrnieks var atkāpties no līguma, rakstveidā brīdinot izīrētāju vismaz vienu mēnesi iepriekš."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Dzīvojamo telpu īres likumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē dzīvokļa īres līgumu – PDF", "description": "Dzīvojamās telpas īres līgums. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

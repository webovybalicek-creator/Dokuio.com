import type { StrankaDokumentu } from '../typy';
import { iresUzteikums as sablona } from '../../sablony/lv/ires-liguma-uzteikums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Īres līguma uzteikums",
  nazevA: "īres līguma uzteikumu",
  katalog: {"popis": "Īrnieks atkāpjas no īres līguma.", "kategorie": "majoklis", "ilustrace": "protokol", "slova": ["īres līguma uzteikums", "īres līguma izbeigšana", "atkāpšanās no īres līguma", "īrnieka uzteikums", "ires liguma uzteikums"]},
  souvisejici: "majoklis",
  landing: {
  "title": "Īres līguma uzteikums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas īrnieka uzteikuma paraugs: atkāpšanās no dzīvojamās telpas īres līguma, rakstveidā brīdinot vismaz mēnesi iepriekš. PDF un Word.",
  "perex": "Īrniekam, kurš vēlas izbeigt dzīvokļa īri. Likums ļauj atkāpties, rakstveidā brīdinot izīrētāju vismaz vienu mēnesi iepriekš.",
  "obsahPopis": "Īss paziņojums.",
  "obsah": [
    {
      "nazev": "Uzteikums",
      "popis": "Līgums, izbeigšanās diena, drošības nauda."
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
    "Atgādinājums par mēneša termiņu",
    "PDF un Word"
  ],
  "hodiSe": [
    "esat īrnieks un vēlaties pārcelties"
  ],
  "nehodiSe": [
    "vēlaties vienoties par ātrāku izbeigšanu – izmantojiet vienošanos"
  ],
  "po": [
    {
      "nazev": "Nosūtīšana",
      "popis": "Nosūtiet uzteikumu rakstveidā un saglabājiet pierādījumu."
    },
    {
      "nazev": "Akts",
      "popis": "Atdodot sastādiet aktu."
    }
  ],
  "faq": [
    {
      "q": "Kāds ir īrnieka uzteikuma termiņš?",
      "a": "Vismaz viens mēnesis, ja līguma termiņš nepārsniedz 10 gadus. Garākiem līgumiem var būt nolīgts garāks termiņš."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Dzīvojamo telpu īres likumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē īres līguma uzteikumu – PDF", "description": "Īrnieka paziņojums par atkāpšanos no īres līguma. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

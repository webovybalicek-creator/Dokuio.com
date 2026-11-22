import type { StrankaDokumentu } from '../typy';
import { kvits as sablona } from '../../sablony/lv/naudas-sanemsanas-kvits';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kvīts par naudas saņemšanu",
  nazevA: "kvīti par naudas saņemšanu",
  katalog: {"popis": "Apliecinājums par skaidras naudas maksājumu.", "kategorie": "nauda", "ilustrace": "penize", "slova": ["kvīts par naudas saņemšanu", "naudas saņemšanas kvīts", "kvīts", "skaidras naudas kvīts", "avansa kvīts", "naudas sanemsanas kvits"]},
  souvisejici: "nauda",
  landing: {
  "title": "Kvīts par naudas saņemšanu {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas kvīts paraugs par naudas saņemšanu: kas saņēma, no kā, cik (arī vārdiem) un par ko. Pierādījums par samaksu. PDF un Word.",
  "perex": "Ja dodat vai saņemat skaidru naudu – pirkuma cenu, aizdevumu, avansu vai drošības naudu. Kvīts pierāda samaksu.",
  "obsahPopis": "Īsa kvīts.",
  "obsah": [
    {
      "nazev": "Kvīts",
      "popis": "Saņēmējs, maksātājs, summa vārdiem un pamatojums."
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
    "maksājat vai saņemat skaidru naudu",
    "dodat avansu vai drošības naudu"
  ],
  "nehodiSe": [
    "maksājat ar pārskaitījumu – izraksts jau ir pierādījums"
  ],
  "po": [
    {
      "nazev": "Saglabājiet",
      "popis": "Kvīti patur tas, kurš maksāja."
    }
  ],
  "faq": [
    {
      "q": "Kurš paraksta kvīti?",
      "a": "Kvīti paraksta tas, kurš saņēma naudu. Maksātājs var to prasīt un patur to kā pierādījumu."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē kvīti par naudas saņemšanu – PDF", "description": "Kvīts par skaidras naudas saņemšanu. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

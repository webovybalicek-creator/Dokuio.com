import type { StrankaDokumentu } from '../typy';
import { paradaAtzisana as sablona } from '../../sablony/lv/parada-atzisana';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Parāda atzīšana",
  nazevA: "parāda atzīšanu",
  katalog: {"popis": "Parādnieks rakstveidā atzīst parādu.", "kategorie": "nauda", "ilustrace": "dluh", "slova": ["parāda atzīšana", "parāda atzīšanas raksts", "parādzīme", "parāda apliecinājums", "noilguma pārtraukšana", "parada atzisana"]},
  souvisejici: "nauda",
  landing: {
  "title": "Parāda atzīšana {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas parāda atzīšanas paraugs: summa vārdiem, parāda pamats, samaksas termiņš vai maksājumi. Atzīšana pārtrauc noilgumu. PDF un Word.",
  "perex": "Parādnieks rakstveidā atzīst, ka ir parādā, cik un par ko. Atzīšana pārtrauc noilgumu, un tas sāk tecēt no jauna.",
  "obsahPopis": "Punkti par parāda atzīšanu.",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Parādnieks un kreditors."
    },
    {
      "nazev": "Atzīšana",
      "popis": "Summa un pamats."
    },
    {
      "nazev": "Samaksa",
      "popis": "Vienā reizē vai pa daļām."
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
    "kāds jums ir parādā un vēlaties to rakstveidā",
    "tuvojas noilgums"
  ],
  "nehodiSe": [
    "vēlaties vienoties par detalizētu maksājumu grafiku – izmantojiet vienošanos par atmaksu"
  ],
  "po": [
    {
      "nazev": "Oriģināls",
      "popis": "Parakstīto oriģinālu patur kreditors."
    }
  ],
  "faq": [
    {
      "q": "Ko nozīmē parāda atzīšana?",
      "a": "Parādnieks apliecina parāda esamību un apmēru. Saskaņā ar Civillikumu prasījuma atzīšana pārtrauc noilgumu."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem par noilgumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē parāda atzīšanu – PDF", "description": "Parādnieka rakstveida parāda atzīšana. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

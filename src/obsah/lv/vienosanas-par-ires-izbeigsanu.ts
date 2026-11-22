import type { StrankaDokumentu } from '../typy';
import { iresIzbeigsana as sablona } from '../../sablony/lv/vienosanas-par-ires-izbeigsanu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Vienošanās par īres līguma izbeigšanu",
  nazevA: "vienošanos par īres līguma izbeigšanu",
  katalog: {"popis": "Īres izbeigšana pusēm vienojoties.", "kategorie": "majoklis", "ilustrace": "protokol", "slova": ["vienošanās par īres līguma izbeigšanu", "īres izbeigšana", "īres līguma laušana", "vienosanas par ires izbeigsanu"]},
  souvisejici: "majoklis",
  landing: {
  "title": "Īres līguma izbeigšana {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas vienošanās paraugs par īres līguma izbeigšanu: izbeigšanās diena, dzīvokļa atdošana, drošības naudas atmaksa. PDF un Word.",
  "perex": "Ja izīrētājs un īrnieks vienojas izbeigt īri – jebkurā brīdī, bez uzteikuma termiņa.",
  "obsahPopis": "Punkti par izbeigšanu.",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Izīrētājs un īrnieks."
    },
    {
      "nazev": "Izbeigšana",
      "popis": "Datums un dzīvokļa atdošana."
    },
    {
      "nazev": "Drošības nauda",
      "popis": "Kad un kā tiek atdota."
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
    "Atgādinājums par datumiem",
    "PDF un Word"
  ],
  "hodiSe": [
    "abi vēlaties izbeigt īri"
  ],
  "nehodiSe": [
    "otra puse nepiekrīt – tad izmantojiet uzteikumu"
  ],
  "po": [
    {
      "nazev": "Akts",
      "popis": "Atdodot sastādiet aktu."
    }
  ],
  "faq": [
    {
      "q": "Vai vienošanos var noslēgt jebkurā laikā?",
      "a": "Jā. Pusēm vienojoties, īres līgumu var izbeigt jebkurā brīdī."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Dzīvojamo telpu īres likumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē vienošanos par īres izbeigšanu – PDF", "description": "Vienošanās par īres līguma izbeigšanu. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

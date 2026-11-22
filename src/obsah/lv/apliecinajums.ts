import type { StrankaDokumentu } from '../typy';
import { apliecinajums as sablona } from '../../sablony/lv/apliecinajums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Apliecinājums",
  nazevA: "apliecinājumu",
  katalog: {"popis": "Rakstveida apliecinājums iestādei vai bankai.", "kategorie": "pirkumi", "ilustrace": "plnamoc", "slova": ["apliecinājums", "apliecinājuma paraugs", "rakstveida apliecinājums", "apliecinājums par dzīvesvietu"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Apliecinājums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas apliecinājuma paraugs: rakstveida apliecinājums par faktiem iestādei, bankai vai citai personai. PDF un Word.",
  "perex": "Ja iestāde vai persona prasa rakstveida apliecinājumu – piemēram, par dzīvesvietu vai citiem faktiem.",
  "obsahPopis": "Īss apliecinājums.",
  "obsah": [
    {
      "nazev": "Apliecinājums",
      "popis": "Apliecinātājs, saturs, adresāts."
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
    "PDF un Word",
    "Bez reģistrācijas"
  ],
  "hodiSe": [
    "jums jāapliecina kāds fakts rakstveidā"
  ],
  "nehodiSe": [
    "iestāde prasa savu veidlapu vai notariālu apliecinājumu"
  ],
  "po": [
    {
      "nazev": "Kopija",
      "popis": "Saglabājiet kopiju."
    }
  ],
  "faq": [
    {
      "q": "Vai apliecinājumu var parakstīt elektroniski?",
      "a": "Jā. Ar drošu elektronisko parakstu (eParaksts) parakstīts dokuments ir līdzvērtīgs ar roku parakstītam."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē apliecinājumu – PDF", "description": "Rakstveida apliecinājums par faktiem. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

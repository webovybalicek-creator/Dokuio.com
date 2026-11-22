import type { StrankaDokumentu } from '../typy';
import { pilnvara as sablona } from '../../sablony/lv/pilnvara';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pilnvara",
  nazevA: "pilnvaru",
  katalog: {"popis": "Ja darbības veic kāds cits.", "kategorie": "pirkumi", "ilustrace": "plnamoc", "slova": ["pilnvara", "pilnvaras paraugs", "vienkārša pilnvara", "pilnvara saņemt sūtījumu", "pilnvara transportlīdzeklim"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Pilnvara {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas pilnvaras paraugs fiziskai personai: kas kuru pilnvaro, kādas darbības, pārpilnvarojums un derīguma termiņš. PDF un Word.",
  "perex": "Ja kādam citam jārīkojas jūsu vārdā – iestādē, pastā vai ar transportlīdzekli. Konkrēts darbību apraksts un derīguma termiņš.",
  "obsahPopis": "Viena pilnvara.",
  "obsah": [
    {
      "nazev": "Pilnvara",
      "popis": "Pilnvaras devējs, pilnvarnieks, darbības, termiņš."
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
    "kādam jārīkojas jūsu vārdā",
    "vēlaties pilnvarot konkrētām darbībām"
  ],
  "nehodiSe": [
    "darījumam vajadzīga notariāla forma – tad arī pilnvarai jābūt notariālai"
  ],
  "po": [
    {
      "nazev": "Pilnvarnieks",
      "popis": "Nododiet pilnvaru pilnvarniekam."
    },
    {
      "nazev": "Atsaukšana",
      "popis": "Pilnvaru var jebkurā laikā atsaukt."
    }
  ],
  "faq": [
    {
      "q": "Kad pilnvarai jābūt notariālai?",
      "a": "Ja darījumam vajadzīga notariāla forma vai notariāli apliecināts paraksts, piemēram, nostiprinot īpašuma tiesības zemesgrāmatā. Bankas un iestādes var prasīt savu veidlapu."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem par pilnvarojumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē pilnvaru – PDF", "description": "Fiziskas personas pilnvara. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

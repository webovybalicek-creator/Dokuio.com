import type { StrankaDokumentu } from '../typy';
import { kolcsonszerzodes as sablona } from '../../sablony/hu/kolcsonszerzodes';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kölcsönszerződés",
  nazevA: "kölcsönszerződést",
  katalog: {
  "popis": "Kölcsön ismerősnek, akár részletekben.",
  "kategorie": "penz",
  "ilustrace": "pujcka",
  "slova": [
    "kölcsönszerződés minta",
    "magánkölcsön",
    "kölcsön magánszemélyek között",
    "törlesztési ütemterv",
    "kamatmentes kölcsön"
  ]
},
  souvisejici: 'penz',
  landing: {
  "title": "Kölcsönszerződés minta magánszemélyek között {rok}",
  "description": "Ingyenes kölcsönszerződés magánszemélyeknek: kamatmentes vagy kamatos, egy összegben vagy részletekben, törlesztési ütemtervvel. PDF és Word.",
  "perex": "Kölcsön családnak vagy ismerősnek, írásban. Részleteknél törlesztési ütemtervet is készítünk.",
  "obsahPopis": "Mit rögzít a szerződés.",
  "obsah": [
    {
      "nazev": "Összeg",
      "popis": "Számmal és betűvel, átadás módja."
    },
    {
      "nazev": "Kamat",
      "popis": "Kamatmentes vagy évi kamat."
    },
    {
      "nazev": "Visszafizetés",
      "popis": "Egyben vagy havi részletekben."
    },
    {
      "nazev": "Ütemterv",
      "popis": "Melléklet a részletekkel."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Felek, összeg, visszafizetés."
    },
    {
      "nazev": "Átadás",
      "popis": "Lehetőleg utalással."
    },
    {
      "nazev": "Aláírás",
      "popis": "Két példányban."
    }
  ],
  "online": [
    "Összeg betűvel automatikusan",
    "Aláírás a képernyőn",
    "Letöltés PDF-ben és Wordben",
    "Törlesztési ütemterv és naptár-emlékeztető"
  ],
  "hodiSe": [
    "pénzt ad kölcsön ismerősnek vagy rokonnak"
  ],
  "nehodiSe": [
    "üzletszerű hitelezés – az engedélyköteles"
  ],
  "po": [
    {
      "nazev": "Nyugta",
      "popis": "A törlesztésekről kérjen és adjon nyugtát."
    }
  ],
  "faq": [
    {
      "q": "Kell írásba foglalni?",
      "a": "Nem kötelező, de írásban sokkal könnyebb bizonyítani a kölcsönt és a feltételeket."
    },
    {
      "q": "Mikor évül el?",
      "a": "A követelés általában 5 év alatt évül el; a tartozás írásbeli elismerése megszakítja."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv kölcsönszerződésre vonatkozó szabályai alapján készült.",
  "souvisejiciPopis": "Más dokumentumok a pénzügyekhez, szintén ingyen."
},
  vytvorit: {
  "title": "Kölcsönszerződés kitöltése online – ingyen PDF",
  "description": "Kölcsönszerződés online kitöltése: kamat, részletek, törlesztési ütemterv és emlékeztetők. Ingyenes PDF vagy Word, regisztráció nélkül.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 3 perc"
},
};

export default stranka;

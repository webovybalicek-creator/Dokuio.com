import type { StrankaDokumentu } from '../typy';
import { tartozaselismeres as sablona } from '../../sablony/hu/tartozaselismero-nyilatkozat';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Tartozáselismerő nyilatkozat",
  nazevA: "tartozáselismerő nyilatkozatot",
  katalog: {
  "popis": "Tartozás írásban, akár részletekkel.",
  "kategorie": "penz",
  "ilustrace": "dluh",
  "slova": [
    "tartozáselismerő nyilatkozat",
    "tartozáselismerés minta",
    "adósság részletfizetés",
    "elévülés megszakítása"
  ]
},
  souvisejici: 'penz',
  landing: {
  "title": "Tartozáselismerő nyilatkozat minta {rok} – ingyen PDF",
  "description": "Ingyenes tartozáselismerő nyilatkozat: összeg, jogcím, egy összegben vagy részletekben fizetés. Megszakítja az elévülést. PDF és Word.",
  "perex": "Ha valaki tartozik, és vállalja a megfizetést. Az elismerés megfordítja a bizonyítási terhet és megszakítja az elévülést.",
  "obsahPopis": "Mit tartalmaz.",
  "obsah": [
    {
      "nazev": "Tartozás",
      "popis": "Összeg és jogcím."
    },
    {
      "nazev": "Fizetés",
      "popis": "Határidő vagy havi részletek."
    },
    {
      "nazev": "Ütemterv",
      "popis": "Melléklet a részletekkel."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Adós, hitelező, összeg."
    },
    {
      "nazev": "Aláírás",
      "popis": "Az adós írja alá."
    },
    {
      "nazev": "Megőrzés",
      "popis": "Az eredeti a hitelezőnél."
    }
  ],
  "online": [
    "Összeg betűvel automatikusan",
    "Aláírás a képernyőn",
    "Letöltés PDF-ben és Wordben",
    "Törlesztési ütemterv"
  ],
  "hodiSe": [
    "valaki tartozik és vállalja a megfizetést",
    "részletfizetésben állapodtak meg"
  ],
  "nehodiSe": [
    "vitatott tartozás – ott egyezség vagy jogi segítség kell"
  ],
  "po": [
    {
      "nazev": "Nyugta",
      "popis": "Minden befizetésről adjon nyugtát."
    }
  ],
  "faq": [
    {
      "q": "Mit jelent a tartozáselismerés?",
      "a": "Az elismerés után az adósnak kell bizonyítania, ha a tartozás mégsem áll fenn."
    },
    {
      "q": "Mi lesz az elévüléssel?",
      "a": "Az elismerés megszakítja az elévülést, az elévülési idő újrakezdődik."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv tartozáselismerésre és elévülésre vonatkozó szabályai alapján készült.",
  "souvisejiciPopis": "Más dokumentumok a pénzügyekhez, szintén ingyen."
},
  vytvorit: {
  "title": "Tartozáselismerő nyilatkozat kitöltése online – ingyen PDF",
  "description": "Tartozáselismerő nyilatkozat online, részletfizetéssel és törlesztési ütemtervvel. Ingyenes PDF vagy Word, regisztráció nélkül.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 3 perc"
},
};

export default stranka;

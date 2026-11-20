import type { StrankaDokumentu } from '../typy';
import { jegyzokonyvGepjarmu as sablona } from '../../sablony/hu/atadas-atveteli-jegyzokonyv-gepjarmu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Gépjármű átadás-átvételi jegyzőkönyv",
  nazevA: "gépjármű átadás-átvételi jegyzőkönyvet",
  katalog: {
  "popis": "Kilométer, sérülések, kulcsok az átadáskor.",
  "kategorie": "auto",
  "ilustrace": "protokol",
  "slova": [
    "átadás-átvételi jegyzőkönyv autó",
    "autó átadása",
    "jegyzőkönyv gépjármű",
    "birtokbaadás"
  ]
},
  souvisejici: 'auto',
  landing: {
  "title": "Átadás-átvételi jegyzőkönyv autóhoz {rok} – ingyenes PDF minta",
  "description": "Ingyenes gépjármű átadás-átvételi jegyzőkönyv: kilométeróra, üzemanyag, sérülések, kulcsok és az átadás pontos időpontja. PDF és Word.",
  "perex": "Rögzíti, milyen állapotban és mikor vette át a vevő az autót. Kitölthető az adásvételi szerződés adataiból.",
  "obsahPopis": "Mit rögzít a jegyzőkönyv.",
  "obsah": [
    {
      "nazev": "Felek és jármű",
      "popis": "Átadó, átvevő, alvázszám."
    },
    {
      "nazev": "Állapot",
      "popis": "Kilométer, üzemanyag, okmányok, sérülések."
    },
    {
      "nazev": "Időpont",
      "popis": "Nap és óra – ettől felel az átvevő."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Az adásvételi szerződésből egy kattintással."
    },
    {
      "nazev": "Átnézés",
      "popis": "Közösen az autónál."
    },
    {
      "nazev": "Aláírás",
      "popis": "Két példányban."
    }
  ],
  "online": [
    "Adatok átvétele a szerződésből",
    "Aláírás a képernyőn",
    "Letöltés PDF-ben és Wordben"
  ],
  "hodiSe": [
    "autó eladásakor vagy kölcsönadásakor",
    "pontosan rögzíteni akarja az átadás idejét"
  ],
  "nehodiSe": [
    "bérautó – ott a bérbeadó saját jegyzőkönyvet használ"
  ],
  "po": [
    {
      "nazev": "Fényképek",
      "popis": "Őrizze meg a képeket az autóról és a kilométeróráról."
    }
  ],
  "faq": [
    {
      "q": "Miért fontos az időpont?",
      "a": "Az átadás után okozott közlekedési szabálysértésekért és károkért már az átvevő felel."
    },
    {
      "q": "Kell hozzá szerződés?",
      "a": "Nem feltétlenül, de eladáskor az adásvételi szerződéssel együtt használja."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv alapján készült.",
  "souvisejiciPopis": "Más dokumentumok az autó eladásához, szintén ingyen."
},
  vytvorit: {
  "title": "Gépjármű átadás-átvételi jegyzőkönyv online – ingyen PDF",
  "description": "Átadás-átvételi jegyzőkönyv autóhoz online: kilométer, sérülések, kulcsok, időpont. Ingyenes PDF vagy Word, regisztráció nélkül.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 2 perc"
},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { meghatalmazas as sablona } from '../../sablony/hu/meghatalmazas';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Meghatalmazás",
  nazevA: "meghatalmazást",
  katalog: {
  "popis": "Ha valamit más intéz Ön helyett.",
  "kategorie": "mindennapok",
  "ilustrace": "plnamoc",
  "slova": [
    "meghatalmazás minta",
    "meghatalmazás posta",
    "általános meghatalmazás",
    "képviselet"
  ]
},
  souvisejici: 'mindennapok',
  landing: {
  "title": "Meghatalmazás minta {rok} – ingyen PDF és Word",
  "description": "Ingyenes meghatalmazás minta: posta, hivatal, csomagátvétel vagy más ügy intézése. Konkrét ügyleírással, opcionális érvényességgel. PDF és Word.",
  "perex": "Egyszerű meghatalmazás egy konkrét ügy intézésére. A hivatalok a pontosan leírt ügyet fogadják el szívesen.",
  "obsahPopis": "Mit tartalmaz.",
  "obsah": [
    {
      "nazev": "Felek",
      "popis": "Meghatalmazó és meghatalmazott."
    },
    {
      "nazev": "Ügy",
      "popis": "Mit intézhet a meghatalmazott."
    },
    {
      "nazev": "Érvényesség",
      "popis": "Adott napig vagy visszavonásig."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Felek és az ügy."
    },
    {
      "nazev": "Aláírás",
      "popis": "Tollal az eredeti példányon."
    },
    {
      "nazev": "Átadás",
      "popis": "A meghatalmazott magával viszi."
    }
  ],
  "online": [
    "Letöltés PDF-ben és Wordben",
    "Regisztráció nélkül",
    "Aláírás a képernyőn"
  ],
  "hodiSe": [
    "postai küldemény, hivatalos ügy, átvétel"
  ],
  "nehodiSe": [
    "ingatlanügy, cégügy – ott ügyvédi ellenjegyzés vagy közjegyzői okirat kell"
  ],
  "po": [
    {
      "nazev": "Előre kérdezzen",
      "popis": "Egyes hivatalok tanúkat vagy saját nyomtatványt kérnek."
    }
  ],
  "faq": [
    {
      "q": "Kell hozzá tanú?",
      "a": "Általában nem, de két tanú aláírásával teljes bizonyító erejű magánokirat lesz, amit több hivatal kér."
    },
    {
      "q": "Visszavonhatom?",
      "a": "Igen, a meghatalmazás bármikor visszavonható."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv képviseletre vonatkozó szabályai alapján készült.",
  "souvisejiciPopis": "Más hétköznapi dokumentumok, szintén ingyen."
},
  vytvorit: {
  "title": "Meghatalmazás kitöltése online – ingyen PDF és Word",
  "description": "Meghatalmazás online kitöltése egy konkrét ügy intézésére, érvényességi idővel. Ingyenes PDF vagy Word, regisztráció nélkül.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 2 perc"
},
};

export default stranka;

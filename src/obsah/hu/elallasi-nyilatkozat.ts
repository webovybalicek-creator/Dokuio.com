import type { StrankaDokumentu } from '../typy';
import { elallasiNyilatkozat as sablona } from '../../sablony/hu/elallasi-nyilatkozat';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Elállási nyilatkozat",
  nazevA: "elállási nyilatkozatot",
  katalog: {
  "popis": "Webshopos vásárlás visszaküldése 14 napon belül.",
  "kategorie": "mindennapok",
  "ilustrace": "protokol",
  "slova": [
    "elállási nyilatkozat minta",
    "14 napos elállás",
    "webshop visszaküldés",
    "elállási jog"
  ]
},
  souvisejici: 'mindennapok',
  landing: {
  "title": "Elállási nyilatkozat {rok} – ingyenes PDF minta",
  "description": "Ingyenes elállási nyilatkozat online vásárláshoz a 45/2014. Korm. rendelet szerint: 14 nap indoklás nélkül, emlékeztető a határidőre. PDF.",
  "perex": "Interneten vagy telefonon vásárolt terméket 14 napon belül indoklás nélkül visszaküldhet. A nyilatkozat a hivatalos minta szerint készül.",
  "obsahPopis": "Mit tartalmaz.",
  "obsah": [
    {
      "nazev": "Címzett",
      "popis": "A vállalkozás neve és címe."
    },
    {
      "nazev": "Termék",
      "popis": "Mit és mikor rendelt, mikor vette át."
    },
    {
      "nazev": "Visszatérítés",
      "popis": "Bankszámla a pénz visszautalásához."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Rendelés adatai."
    },
    {
      "nazev": "Elküldés",
      "popis": "E-mailben vagy ajánlott levélben."
    },
    {
      "nazev": "Visszaküldés",
      "popis": "A terméket 14 napon belül."
    }
  ],
  "online": [
    "Határidő-emlékeztető",
    "Letöltés PDF-ben és Wordben",
    "Regisztráció nélkül"
  ],
  "hodiSe": [
    "webshopban, telefonon vagy katalógusból vásárolt"
  ],
  "nehodiSe": [
    "üzletben vásárolt – ott nincs törvényes elállási jog",
    "egyedi vagy romlandó termék"
  ],
  "po": [
    {
      "nazev": "Visszatérítés",
      "popis": "A vállalkozás 14 napon belül visszafizeti a vételárat és a szokásos szállítási díjat."
    }
  ],
  "faq": [
    {
      "q": "Mennyi időm van?",
      "a": "14 nap, terméknél főszabály szerint az átvételtől számítva. Elég a határidő utolsó napján elküldeni."
    },
    {
      "q": "Meg kell indokolnom?",
      "a": "Nem, az elálláshoz nem kell indok."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a 45/2014. (II. 26.) Korm. rendelet mintanyilatkozata alapján készült.",
  "souvisejiciPopis": "Más hétköznapi dokumentumok, szintén ingyen."
},
  vytvorit: {
  "title": "Elállási nyilatkozat kitöltése online – ingyen PDF",
  "description": "Elállási nyilatkozat online webshopos vásárláshoz, 14 napos határidő-emlékeztetővel. Ingyenes PDF vagy Word, regisztráció nélkül.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 2 perc"
},
};

export default stranka;

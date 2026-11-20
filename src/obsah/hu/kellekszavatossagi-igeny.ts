import type { StrankaDokumentu } from '../typy';
import { kellekszavatossag as sablona } from '../../sablony/hu/kellekszavatossagi-igeny';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kellékszavatossági igény",
  nazevA: "kellékszavatossági igényt",
  katalog: {
  "popis": "Hibás termék: javítás, csere vagy pénz vissza.",
  "kategorie": "mindennapok",
  "ilustrace": "protokol",
  "slova": [
    "kellékszavatosság",
    "szavatossági igény minta",
    "hibás termék",
    "reklamáció",
    "garancia"
  ]
},
  souvisejici: 'mindennapok',
  landing: {
  "title": "Kellékszavatossági igény {rok} – ingyenes PDF minta",
  "description": "Ingyenes kellékszavatossági igény hibás termékre: kijavítás, kicserélés, árleszállítás vagy elállás. Fogyasztóként 2 évig érvényesíthető. PDF és Word.",
  "perex": "Ha a vásárolt termék hibás, írásban kérhet javítást, cserét vagy pénzt vissza. A levél pontosan leírja a hibát és az igényét.",
  "obsahPopis": "Mit tartalmaz.",
  "obsah": [
    {
      "nazev": "Vásárlás",
      "popis": "Termék, dátum, blokk, ár."
    },
    {
      "nazev": "Hiba",
      "popis": "Mikor észlelte, mi a hiba."
    },
    {
      "nazev": "Igény",
      "popis": "Javítás, csere, árleszállítás vagy elállás."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Termék és hiba."
    },
    {
      "nazev": "Leadás",
      "popis": "Üzletben vagy ajánlott levélben."
    },
    {
      "nazev": "Igazolás",
      "popis": "Kérjen átvételi igazolást."
    }
  ],
  "online": [
    "Letöltés PDF-ben és Wordben",
    "Regisztráció nélkül",
    "Aláírás a képernyőn"
  ],
  "hodiSe": [
    "hibás terméket vásárolt vállalkozástól"
  ],
  "nehodiSe": [
    "magánszemélytől vásárolt – ott más szabályok vonatkoznak"
  ],
  "po": [
    {
      "nazev": "Blokk",
      "popis": "Őrizze meg a blokkot vagy számlát."
    }
  ],
  "faq": [
    {
      "q": "Meddig érvényesíthetem?",
      "a": "Fogyasztóként a teljesítéstől számított 2 évig."
    },
    {
      "q": "Mit kérhetek először?",
      "a": "Elsősorban kijavítást vagy kicserélést; árleszállítást vagy elállást akkor, ha ez nem lehetséges vagy nem teljesítik."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv kellékszavatossági szabályai alapján készült.",
  "souvisejiciPopis": "Más hétköznapi dokumentumok, szintén ingyen."
},
  vytvorit: {
  "title": "Kellékszavatossági igény kitöltése online – ingyen PDF",
  "description": "Kellékszavatossági igény online hibás termékre: javítás, csere, árleszállítás vagy elállás. Ingyenes PDF vagy Word, regisztráció nélkül.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 2 perc"
},
};

export default stranka;

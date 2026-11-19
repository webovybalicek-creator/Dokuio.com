import type { StrankaDokumentu } from '../typy';
import { ajandekozasiSzerzodes as sablona } from '../../sablony/hu/ajandekozasi-szerzodes';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Ajándékozási szerződés",
  nazevA: "ajándékozási szerződést",
  katalog: {
  "popis": "Pénz vagy dolog ajándékozása.",
  "kategorie": "penz",
  "ilustrace": "dar",
  "slova": [
    "ajándékozási szerződés minta",
    "pénz ajándékozása",
    "ajándékozási illeték",
    "ajándékozás családon belül"
  ]
},
  souvisejici: 'penz',
  landing: {
  "title": "Ajándékozási szerződés minta {rok} – pénz vagy ingóság",
  "description": "Ingyenes ajándékozási szerződés pénzre vagy ingóságra: rokoni kapcsolat, illeték, átadás. Családon belül gyakran illetékmentes. PDF és Word.",
  "perex": "Pénz vagy dolog ajándékozása írásban. A tippekben megmutatjuk, mikor illetékmentes.",
  "obsahPopis": "Mit tartalmaz.",
  "obsah": [
    {
      "nazev": "Felek",
      "popis": "Ajándékozó, megajándékozott, rokoni kapcsolat."
    },
    {
      "nazev": "Ajándék",
      "popis": "Pénz vagy dolog leírása."
    },
    {
      "nazev": "Átadás",
      "popis": "Azonnal vagy később."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Felek és ajándék."
    },
    {
      "nazev": "Átadás",
      "popis": "Pénzt lehetőleg utalással."
    },
    {
      "nazev": "Aláírás",
      "popis": "Két példányban."
    }
  ],
  "online": [
    "Összeg betűvel automatikusan",
    "Aláírás a képernyőn",
    "Letöltés PDF-ben és Wordben"
  ],
  "hodiSe": [
    "pénzt ajándékoz gyermekének, unokájának",
    "értékesebb dolgot ad ajándékba"
  ],
  "nehodiSe": [
    "ingatlan ajándékozása – ügyvédi ellenjegyzés kell"
  ],
  "po": [
    {
      "nazev": "Illeték",
      "popis": "Nézze meg a NAV tájékoztatóját a mentességekről és a bejelentésről."
    }
  ],
  "faq": [
    {
      "q": "Kell illetéket fizetni?",
      "a": "Főszabály szerint igen, de egyenes ági rokonok (szülő, gyermek, nagyszülő, unoka) és házastársak között az ajándékozás illetékmentes."
    },
    {
      "q": "Kötelező írásba foglalni?",
      "a": "Ingóságnál nem, de írásban igazolható az ajándékozás ténye és a rokoni kapcsolat."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv és az illetékekről szóló 1990. évi XCIII. törvény alapján készült.",
  "souvisejiciPopis": "Más dokumentumok a pénzügyekhez, szintén ingyen."
},
  vytvorit: {
  "title": "Ajándékozási szerződés kitöltése online – ingyen PDF",
  "description": "Ajándékozási szerződés online pénzre vagy ingóságra, összeg betűvel, illetéktippekkel. Ingyenes PDF vagy Word, regisztráció nélkül.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 3 perc"
},
};

export default stranka;

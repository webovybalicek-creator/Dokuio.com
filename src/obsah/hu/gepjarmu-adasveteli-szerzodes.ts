import type { StrankaDokumentu } from '../typy';
import { gepjarmuAdasvetel as sablona } from '../../sablony/hu/gepjarmu-adasveteli-szerzodes';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Gépjármű adásvételi szerződés",
  nazevA: "gépjármű adásvételi szerződést",
  katalog: {
  "popis": "Használt autó eladása magánszemélyek között.",
  "kategorie": "auto",
  "ilustrace": "auto",
  "slova": [
    "autó adásvételi szerződés",
    "gépjármű adásvételi",
    "használt autó eladás",
    "forgalmi átírás",
    "tanúk",
    "autó eladása"
  ]
},
  souvisejici: 'auto',
  landing: {
  "title": "Gépjármű adásvételi szerződés minta {rok} – ingyen PDF",
  "description": "Ingyenes gépjármű adásvételi szerződés minta magánszemélyeknek: tanúk a forgalmi átíráshoz, vételár betűvel, határidők. PDF és Word.",
  "perex": "Teljes bizonyító erejű szerződés két tanúval, ahogy az átíráshoz kell. A vételárat betűvel automatikusan kiírjuk.",
  "obsahPopis": "Az eladásnál fontos minden pont – a tanúk is.",
  "obsah": [
    {
      "nazev": "Felek és jármű",
      "popis": "Személyes adatok, alvázszám, rendszám, okmányok."
    },
    {
      "nazev": "Állapot",
      "popis": "Kilométeróra és ismert hibák."
    },
    {
      "nazev": "Vételár",
      "popis": "Készpénz vagy utalás, tulajdonjog-fenntartással."
    },
    {
      "nazev": "Hatósági ügyek",
      "popis": "Bejelentés, átírás, biztosítás, illeték."
    },
    {
      "nazev": "Tanúk",
      "popis": "Két tanú neve, lakcíme, aláírása."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Adatok a forgalmi engedélyből."
    },
    {
      "nazev": "Ellenőrzés",
      "popis": "Alvázszám az autón és az okmányokban."
    },
    {
      "nazev": "Aláírás",
      "popis": "Felek és két tanú, három példányban."
    }
  ],
  "online": [
    "Összeg betűvel automatikusan",
    "Aláírás a képernyőn",
    "Letöltés PDF-ben és Wordben",
    "Emlékeztető a 15 napos határidőkre"
  ],
  "hodiSe": [
    "magánszemélyként adja el vagy veszi az autóját",
    "az átíráshoz teljes bizonyító erejű szerződés kell"
  ],
  "nehodiSe": [
    "autókereskedőtől vásárol – ott a kereskedő adja a szerződést",
    "lízingelt vagy hitelfedezetként terhelt autó"
  ],
  "po": [
    {
      "nazev": "Eladó",
      "popis": "15 napon belül bejelenti a tulajdonosváltozást."
    },
    {
      "nazev": "Vevő",
      "popis": "Biztosítás, 15 napon belül átírás és vagyonszerzési illeték."
    }
  ],
  "faq": [
    {
      "q": "Kellenek tanúk?",
      "a": "Az átíráshoz teljes bizonyító erejű magánokirat kell: két tanú aláírása nevükkel és lakcímükkel, vagy ügyvédi ellenjegyzés."
    },
    {
      "q": "Ki fizeti az illetéket?",
      "a": "A vagyonszerzési illetéket a vevő fizeti; mértéke a motor teljesítményétől és az autó korától függ."
    },
    {
      "q": "Mennyi idő alatt kell átíratni?",
      "a": "Mindkét félnek 15 napja van a tulajdonjog-változástól: a vevő kéri az átírást, az eladó bejelenti az eladást."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv, a Polgári perrendtartás, a közúti közlekedési nyilvántartásról és az illetékekről szóló törvény alapján készült.",
  "souvisejiciPopis": "Más dokumentumok az autó eladásához, szintén ingyen."
},
  vytvorit: {
  "title": "Gépjármű adásvételi szerződés kitöltése online – ingyen PDF",
  "description": "Gépjármű adásvételi szerződés online kitöltése két tanúval, vételár betűvel, emlékeztetővel. Ingyenes PDF vagy Word.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 3 perc"
},
};

export default stranka;

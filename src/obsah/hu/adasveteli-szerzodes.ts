import type { StrankaDokumentu } from '../typy';
import { adasveteliSzerzodes as sablona } from '../../sablony/hu/adasveteli-szerzodes';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Adásvételi szerződés",
  nazevA: "adásvételi szerződést",
  katalog: {
  "popis": "Használt dolog eladása magánszemélyek között.",
  "kategorie": "mindennapok",
  "ilustrace": "protokol",
  "slova": [
    "adásvételi szerződés minta",
    "ingóság adásvétel",
    "használt dolog eladása",
    "kerékpár eladás"
  ]
},
  souvisejici: 'mindennapok',
  landing: {
  "title": "Adásvételi szerződés minta ingóságra {rok} – ingyenes PDF minta",
  "description": "Ingyenes adásvételi szerződés használt dolgokra (kerékpár, telefon, bútor): leírás, ismert hibák, vételár betűvel. PDF és Word, regisztráció nélkül.",
  "perex": "Használt dolog eladása írásban: mit, milyen állapotban, mennyiért.",
  "obsahPopis": "Mit tartalmaz.",
  "obsah": [
    {
      "nazev": "Dolog",
      "popis": "Pontos leírás, gyári szám."
    },
    {
      "nazev": "Hibák",
      "popis": "Amiről a vevő tudott."
    },
    {
      "nazev": "Vételár",
      "popis": "Készpénz vagy utalás."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Felek és dolog."
    },
    {
      "nazev": "Átnézés",
      "popis": "A vevő megnézi a dolgot."
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
    "kerékpárt, telefont, bútort, gépet ad el"
  ],
  "nehodiSe": [
    "gépjármű – arra külön minta van",
    "ingatlan – ügyvédi ellenjegyzés kell"
  ],
  "po": [
    {
      "nazev": "Iratok",
      "popis": "Adja át a garanciajegyet és a számlát is."
    }
  ],
  "faq": [
    {
      "q": "Kell írásba foglalni?",
      "a": "Nem kötelező, de írásban egyértelmű, mit és milyen állapotban vett meg a vevő."
    },
    {
      "q": "Mi van, ha később hibás?",
      "a": "Az ismert, szerződésbe írt hibákra a vevő nem hivatkozhat."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv adásvételi szabályai alapján készült.",
  "souvisejiciPopis": "Más hétköznapi dokumentumok, szintén ingyen."
},
  vytvorit: {
  "title": "Adásvételi szerződés kitöltése online – ingyen PDF",
  "description": "Adásvételi szerződés online használt dolgokra, vételár betűvel, ismert hibákkal. Ingyenes PDF vagy Word, regisztráció nélkül.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 2 perc"
},
};

export default stranka;

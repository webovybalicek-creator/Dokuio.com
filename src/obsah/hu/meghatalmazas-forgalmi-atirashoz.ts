import type { StrankaDokumentu } from '../typy';
import { meghatalmazasAtiras as sablona } from '../../sablony/hu/meghatalmazas-forgalmi-atirashoz';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Meghatalmazás forgalmi átíráshoz",
  nazevA: "meghatalmazást forgalmi átíráshoz",
  katalog: {
  "popis": "Ha az átírást más intézi a kormányablakban.",
  "kategorie": "auto",
  "ilustrace": "plnamoc",
  "slova": [
    "meghatalmazás átírás",
    "meghatalmazás kormányablak",
    "forgalmi átírás meghatalmazás",
    "autó átírás más intézi"
  ]
},
  souvisejici: 'auto',
  landing: {
  "title": "Meghatalmazás forgalmi átíráshoz {rok} – ingyen minta",
  "description": "Ingyenes meghatalmazás gépjármű forgalmi átírásához és bejelentéséhez a kormányablakban, két tanúval. PDF és Word, regisztráció nélkül.",
  "perex": "Ha az átírást vagy a bejelentést rokon vagy ismerős intézi. Két tanúval, ahogy a hatóság kéri.",
  "obsahPopis": "Mit tartalmaz.",
  "obsah": [
    {
      "nazev": "Felek",
      "popis": "Meghatalmazó és meghatalmazott adatai."
    },
    {
      "nazev": "Jármű",
      "popis": "Rendszám és alvázszám."
    },
    {
      "nazev": "Ügyek",
      "popis": "Átírás, bejelentés, okmányok, illeték."
    },
    {
      "nazev": "Tanúk",
      "popis": "Két tanú aláírása."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Adatok a szerződésből."
    },
    {
      "nazev": "Aláírás",
      "popis": "Tollal, két tanúval."
    },
    {
      "nazev": "Ügyintézés",
      "popis": "A meghatalmazott a saját igazolványával megy."
    }
  ],
  "online": [
    "Adatok átvétele a szerződésből",
    "Letöltés PDF-ben és Wordben",
    "Regisztráció nélkül"
  ],
  "hodiSe": [
    "nem ér rá személyesen a kormányablakba menni"
  ],
  "nehodiSe": [
    "ügyvéd vagy autókereskedő intézi – ők saját nyomtatványt használnak"
  ],
  "po": [
    {
      "nazev": "Eredeti példány",
      "popis": "A hatóság eredeti, saját kezűleg aláírt meghatalmazást kér."
    }
  ],
  "faq": [
    {
      "q": "Kellenek tanúk?",
      "a": "Igen, a meghatalmazásnak teljes bizonyító erejű magánokiratnak kell lennie: két tanú nevével, lakcímével és aláírásával."
    },
    {
      "q": "Aláírhatom a képernyőn?",
      "a": "Nem, a hatósághoz tollal aláírt eredeti példány kell."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv, a Polgári perrendtartás és a közúti közlekedési nyilvántartásról szóló törvény alapján készült.",
  "souvisejiciPopis": "Más dokumentumok az autó eladásához, szintén ingyen."
},
  vytvorit: {
  "title": "Meghatalmazás forgalmi átíráshoz online – ingyen PDF",
  "description": "Meghatalmazás forgalmi átíráshoz online kitöltése két tanúval, a szerződés adataiból. Ingyenes PDF vagy Word, regisztráció nélkül.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 2 perc"
},
};

export default stranka;

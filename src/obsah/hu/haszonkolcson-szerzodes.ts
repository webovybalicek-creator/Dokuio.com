import type { StrankaDokumentu } from '../typy';
import { haszonkolcsonSzerzodes as sablona } from '../../sablony/hu/haszonkolcson-szerzodes';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Haszonkölcsön-szerződés",
  nazevA: "haszonkölcsön-szerződést",
  katalog: {"popis": "Dolog ingyenes kölcsönadása – utánfutó, szerszám, autó.", "kategorie": "mindennapok", "ilustrace": "protokol", "slova": ["haszonkölcsön", "haszonkölcsön szerződés", "ingyenes használat", "kölcsönadó", "kölcsönvevő"]},
  souvisejici: "mindennapok",
  landing: {
  "title": "Haszonkölcsön-szerződés {rok} – minta ingyen (PDF, Word)",
  "description": "Ingyenes haszonkölcsön-szerződés minta: dolog ingyenes használatba adása, állapot átadáskor, időtartam, visszaadás és költségek. Töltse ki online, PDF vagy Word.",
  "perex": "Ingyen kölcsönad utánfutót, szerszámot vagy autót? A haszonkölcsön-szerződés rögzíti, mit adott át, milyen állapotban és mikorra kell visszaadni.",
  "obsahPopis": "Öt pont a Ptk. haszonkölcsönre vonatkozó szabályai szerint.",
  "obsah": [
    {
      "nazev": "Szerződő felek",
      "popis": "Kölcsönadó és kölcsönvevő."
    },
    {
      "nazev": "A szerződés tárgya",
      "popis": "Dolog, állapot, érték, cél."
    },
    {
      "nazev": "Időtartam és visszaadás",
      "popis": "Meghatározott napig vagy a cél eléréséig."
    },
    {
      "nazev": "A dolog használata",
      "popis": "Rendeltetésszerű használat, továbbadás tilalma, költségek."
    },
    {
      "nazev": "Záró rendelkezések",
      "popis": "Írásbeli módosítás, két példány."
    }
  ],
  "kroky": [
    {
      "nazev": "A dolog",
      "popis": "Mit ad kölcsön, milyen állapotban."
    },
    {
      "nazev": "Időtartam",
      "popis": "Meddig vagy milyen célra."
    },
    {
      "nazev": "Aláírás",
      "popis": "Két példányban."
    }
  ],
  "online": [
    "Visszaadási emlékeztető a naptárban",
    "Magyarázat minden mezőhöz",
    "Letöltés PDF-ben és Wordben",
    "Üres minta nyomtatáshoz"
  ],
  "hodiSe": [
    "ismerősnek ad kölcsön utánfutót, szerszámot vagy autót",
    "rögzíteni szeretné az átadáskori állapotot"
  ],
  "nehodiSe": [
    "díjat kér a használatért – az bérlet",
    "pénzt ad kölcsön – használja a kölcsönszerződést"
  ],
  "po": [
    {
      "nazev": "Átadás",
      "popis": "Nézzék át a dolgot, írják be a hibákat."
    },
    {
      "nazev": "Visszaadás",
      "popis": "Emlékeztető a naptárban."
    }
  ],
  "faq": [
    {
      "q": "Mi a különbség a haszonkölcsön és a bérlet között?",
      "a": "A haszonkölcsön ingyenes. Ha a használatért díjat fizetnek, bérletről van szó."
    },
    {
      "q": "Kell tanú?",
      "a": "Nem kötelező, de két tanú aláírásával a szerződés teljes bizonyító erejű magánokirat lesz."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "Nem. A dokumentum közvetlenül az Ön böngészőjében készül."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv (2013. évi V. törvény) haszonkölcsönre vonatkozó szabályain alapul.",
  "souvisejiciPopis": "További mindennapi dokumentumok."
},
  vytvorit: {"title": "Haszonkölcsön-szerződés kitöltése online – PDF ingyen", "description": "Haszonkölcsön-szerződés online. Ingyen PDF vagy Word.", "podnadpis": "Ingyenes · PDF és Word · kb. 2 perc"},
};

export default stranka;

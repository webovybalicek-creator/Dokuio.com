import type { StrankaDokumentu } from '../typy';
import { vallalkozasiSzerzodes as sablona } from '../../sablony/hu/vallalkozasi-szerzodes';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Vállalkozási szerződés",
  nazevA: "vállalkozási szerződést",
  katalog: {"popis": "Szakember, felújítás, javítás – díj, határidő, átadás.", "kategorie": "szolgaltatas", "ilustrace": "protokol", "slova": ["vállalkozási szerződés", "szakember", "felújítás", "javítás", "átalánydíj", "pótmunka"]},
  souvisejici: "szolgaltatas",
  landing: {
  "title": "Vállalkozási szerződés {rok} – minta ingyen (PDF, Word)",
  "description": "Ingyenes vállalkozási szerződés minta a Ptk. 6:238. § alapján: munka leírása, határidő, átalánydíj vagy tételes elszámolás, előleg és átadás. PDF és Word.",
  "perex": "Felújításhoz, javításhoz vagy bármilyen szakember által végzett munkához. Rögzíti, mit, mikorra és mennyiért készítenek el, és hogyan veszik át.",
  "obsahPopis": "Hat pont a Ptk. 6:238. §-a és következő szakaszai szerint.",
  "obsah": [
    {
      "nazev": "Szerződő felek",
      "popis": "Megrendelő és vállalkozó."
    },
    {
      "nazev": "A szerződés tárgya",
      "popis": "Munka, hely, anyag."
    },
    {
      "nazev": "Teljesítési határidő",
      "popis": "Kezdés és átadás."
    },
    {
      "nazev": "Vállalkozói díj",
      "popis": "Átalánydíj vagy tételes elszámolás, előleg, fizetési határidő."
    },
    {
      "nazev": "Átadás-átvétel és hibák",
      "popis": "Jegyzőkönyv, szavatosság."
    },
    {
      "nazev": "Záró rendelkezések",
      "popis": "Írásbeli módosítás, két példány."
    }
  ],
  "kroky": [
    {
      "nazev": "A munka",
      "popis": "Terjedelem, hely, határidők."
    },
    {
      "nazev": "A díj",
      "popis": "Átalány vagy tételes."
    },
    {
      "nazev": "Aláírás",
      "popis": "Két példányban."
    }
  ],
  "online": [
    "Összeg betűvel automatikusan",
    "Határidők a naptárban",
    "Magyarázat minden mezőhöz",
    "Letöltés PDF-ben és Wordben"
  ],
  "hodiSe": [
    "fürdőszoba-felújítás, festés, burkolás",
    "javítás vagy egyedi gyártás",
    "szakemberként egyértelmű feltételek"
  ],
  "nehodiSe": [
    "engedélyhez vagy bejelentéshez kötött építés – kivitelezési szerződés kell",
    "kész termék vásárlása – adásvételi szerződés"
  ],
  "po": [
    {
      "nazev": "Előleg",
      "popis": "Utalással vagy elismervény ellenében."
    },
    {
      "nazev": "Változás írásban",
      "popis": "Pótmunka csak egyeztetés után."
    },
    {
      "nazev": "Átvétel",
      "popis": "Jegyzőkönyv a hibákkal."
    }
  ],
  "faq": [
    {
      "q": "Mi a különbség a többletmunka és a pótmunka között?",
      "a": "Átalánydíjnál a vállalkozó csak a pótmunka ellenértékét kérheti az átalánydíjon felül, a többletmunkáét nem (Ptk. 6:244–6:245. §)."
    },
    {
      "q": "Kell írásba foglalni?",
      "a": "A Ptk. általános szabályként nem ír elő formát, de az írásbeli szerződés a legjobb bizonyíték."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "Nem. A dokumentum közvetlenül az Ön böngészőjében készül."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv 6:238–6:245. §-án alapul.",
  "souvisejiciPopis": "További dokumentumok megrendeléshez és fizetéshez."
},
  vytvorit: {"title": "Vállalkozási szerződés kitöltése online – PDF ingyen", "description": "Vállalkozási szerződés díjjal és átadással. Ingyen PDF vagy Word.", "podnadpis": "Ingyenes · PDF és Word · kb. 4 perc"},
};

export default stranka;

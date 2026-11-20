import type { StrankaDokumentu } from '../typy';
import { lakasberletiSzerzodes as sablona } from '../../sablony/hu/lakasberleti-szerzodes';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Lakásbérleti szerződés",
  nazevA: "lakásbérleti szerződést",
  katalog: {
  "popis": "Lakás kiadása óvadékkal, határozott vagy határozatlan időre.",
  "kategorie": "lakas",
  "ilustrace": "protokol",
  "slova": [
    "lakásbérleti szerződés minta",
    "albérlet szerződés",
    "bérleti szerződés",
    "óvadék",
    "kaució"
  ]
},
  souvisejici: 'lakas',
  landing: {
  "title": "Lakásbérleti szerződés minta {rok} – ingyen PDF",
  "description": "Ingyenes lakásbérleti szerződés magánszemélyeknek: bérleti díj, rezsi, óvadék, felmondási idő, visszaadás. Határozott vagy határozatlan idő. PDF és Word.",
  "perex": "Albérlet írásban, kiegyensúlyozott feltételekkel. Az óvadékot és a felmondási időt egyértelműen rögzíti.",
  "obsahPopis": "Mit rögzít a szerződés.",
  "obsah": [
    {
      "nazev": "Lakás",
      "popis": "Cím, szobák, berendezés."
    },
    {
      "nazev": "Időtartam",
      "popis": "Határozott vagy határozatlan, felmondási idő."
    },
    {
      "nazev": "Díj és rezsi",
      "popis": "Mennyit, mikor, hova."
    },
    {
      "nazev": "Óvadék",
      "popis": "Összeg és visszafizetés."
    },
    {
      "nazev": "Visszaadás",
      "popis": "Állapot, kulcsok, jegyzőkönyv."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Felek, lakás, díjak."
    },
    {
      "nazev": "Átadás",
      "popis": "Jegyzőkönyvvel és fényképekkel."
    },
    {
      "nazev": "Aláírás",
      "popis": "Két példányban."
    }
  ],
  "online": [
    "Összeg betűvel automatikusan",
    "Aláírás a képernyőn",
    "Letöltés PDF-ben és Wordben",
    "Emlékeztető a bérleti díjra"
  ],
  "hodiSe": [
    "lakást ad ki vagy bérel magánszemélyként"
  ],
  "nehodiSe": [
    "önkormányzati bérlakás – ott külön szabályok vonatkoznak",
    "üzlethelyiség bérlete"
  ],
  "po": [
    {
      "nazev": "Jegyzőkönyv",
      "popis": "Az átadáskor rögzítsék a mérőórákat."
    }
  ],
  "faq": [
    {
      "q": "Kötelező írásba foglalni?",
      "a": "Igen, a lakásbérleti szerződést írásba kell foglalni."
    },
    {
      "q": "Mennyi lehet az óvadék?",
      "a": "A törvény nem szab felső határt; szokás szerint 1–3 havi bérleti díj. Felhasználását a szerződés rögzíti."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a lakások és helyiségek bérletéről szóló 1993. évi LXXVIII. törvény és a Polgári Törvénykönyv alapján készült.",
  "souvisejiciPopis": "Más dokumentumok a bérléshez, szintén ingyen."
},
  vytvorit: {
  "title": "Lakásbérleti szerződés kitöltése online – ingyen PDF",
  "description": "Lakásbérleti szerződés online kitöltése óvadékkal, felmondási idővel és díjemlékeztetővel. Ingyenes PDF vagy Word, regisztráció nélkül.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 5 perc"
},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { berletFelmondas as sablona } from '../../sablony/hu/berleti-szerzodes-felmondasa';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Lakásbérleti szerződés felmondása",
  nazevA: "lakásbérleti szerződés felmondását",
  katalog: {
  "popis": "Albérlet felmondása a bérlő részéről.",
  "kategorie": "lakas",
  "ilustrace": "protokol",
  "slova": [
    "albérlet felmondás",
    "bérleti szerződés felmondása",
    "felmondási idő",
    "kiköltözés"
  ]
},
  souvisejici: 'lakas',
  landing: {
  "title": "Albérlet felmondása – minta levél {rok}, ingyen PDF",
  "description": "Ingyenes felmondólevél lakásbérleti szerződéshez a bérlő részéről: megszűnés napja, lakás visszaadása, óvadék visszafizetése. PDF és Word.",
  "perex": "Írásos felmondás a bérbeadónak, a megszűnés napjával és az óvadék visszakérésével.",
  "obsahPopis": "Mit tartalmaz.",
  "obsah": [
    {
      "nazev": "Bérlet",
      "popis": "Lakás, szerződés kelte."
    },
    {
      "nazev": "Megszűnés",
      "popis": "A felmondási idő utolsó napja."
    },
    {
      "nazev": "Óvadék",
      "popis": "Bankszámla a visszafizetéshez."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "A szerződés adatai."
    },
    {
      "nazev": "Kézbesítés",
      "popis": "Tértivevényes levélben."
    },
    {
      "nazev": "Visszaadás",
      "popis": "Jegyzőkönyvvel."
    }
  ],
  "online": [
    "Emlékeztető a kiköltözésre",
    "Letöltés PDF-ben és Wordben",
    "Regisztráció nélkül"
  ],
  "hodiSe": [
    "bérlőként szeretné megszüntetni a bérletet"
  ],
  "nehodiSe": [
    "a bérbeadó mond fel – más szabályok vonatkoznak"
  ],
  "po": [
    {
      "nazev": "Kézbesítés",
      "popis": "Őrizze meg a tértivevényt."
    }
  ],
  "faq": [
    {
      "q": "Mennyi a felmondási idő?",
      "a": "Amennyit a szerződés rögzít – nézze meg a saját szerződésében."
    },
    {
      "q": "Felmondhatok határozott idejű bérletet?",
      "a": "Csak ha a szerződés megengedi; különben közös megegyezés kell."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a lakásbérleti törvény és a Polgári Törvénykönyv alapján készült.",
  "souvisejiciPopis": "Más dokumentumok a bérléshez, szintén ingyen."
},
  vytvorit: {
  "title": "Albérlet felmondása online – ingyen PDF minta",
  "description": "Lakásbérleti szerződés felmondása online, az óvadék visszakérésével és kiköltözési emlékeztetővel. Ingyenes PDF vagy Word.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 2 perc"
},
};

export default stranka;

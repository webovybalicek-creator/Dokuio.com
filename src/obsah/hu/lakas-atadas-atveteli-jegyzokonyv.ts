import type { StrankaDokumentu } from '../typy';
import { lakasJegyzokonyv as sablona } from '../../sablony/hu/lakas-atadas-atveteli-jegyzokonyv';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Lakás átadás-átvételi jegyzőkönyv",
  nazevA: "lakás átadás-átvételi jegyzőkönyvet",
  katalog: {
  "popis": "Mérőórák, kulcsok és állapot be- és kiköltözéskor.",
  "kategorie": "lakas",
  "ilustrace": "protokol",
  "slova": [
    "lakás átadás-átvételi jegyzőkönyv",
    "albérlet jegyzőkönyv",
    "mérőóra állás",
    "kiköltözés"
  ]
},
  souvisejici: 'lakas',
  landing: {
  "title": "Lakás átadás-átvételi jegyzőkönyv {rok} – ingyenes PDF minta",
  "description": "Ingyenes lakás átadás-átvételi jegyzőkönyv albérlethez: mérőóra-állások, kulcsok, sérülések be- és kiköltözéskor. Védi az óvadékot. PDF és Word.",
  "perex": "Beköltözéskor és kiköltözéskor rögzíti a lakás állapotát. Vita esetén ez dönt az óvadékról.",
  "obsahPopis": "Mit rögzít.",
  "obsah": [
    {
      "nazev": "Mérőórák",
      "popis": "Villany, gáz, víz, fűtés."
    },
    {
      "nazev": "Kulcsok",
      "popis": "Darabszám szerint."
    },
    {
      "nazev": "Állapot",
      "popis": "Sérülések helyiségenként."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "A szerződés adataiból."
    },
    {
      "nazev": "Bejárás",
      "popis": "Közösen, fényképekkel."
    },
    {
      "nazev": "Aláírás",
      "popis": "Két példányban."
    }
  ],
  "online": [
    "Adatok átvétele a szerződésből",
    "Aláírás a képernyőn",
    "Letöltés PDF-ben és Wordben"
  ],
  "hodiSe": [
    "beköltözéskor és kiköltözéskor"
  ],
  "nehodiSe": [
    "közös képviselővel vagy szolgáltatóval rögzített mérőóracsere"
  ],
  "po": [
    {
      "nazev": "Fényképek",
      "popis": "Őrizze meg a képeket az óvadék elszámolásáig."
    }
  ],
  "faq": [
    {
      "q": "Miért kell jegyzőkönyv?",
      "a": "Ebből derül ki, milyen sérülés volt már beköltözéskor, és mit lehet levonni az óvadékból."
    },
    {
      "q": "Ki írja alá?",
      "a": "Bérbeadó és bérlő is, két példányban."
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
  "title": "Lakás átadás-átvételi jegyzőkönyv online – ingyen PDF",
  "description": "Lakás átadás-átvételi jegyzőkönyv online: mérőórák, kulcsok, sérülések. Ingyenes PDF vagy Word, regisztráció nélkül, pár perc alatt.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 3 perc"
},
};

export default stranka;

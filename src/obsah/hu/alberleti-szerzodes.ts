import type { StrankaDokumentu } from '../typy';
import { alberletiSzerzodes as sablona } from '../../sablony/hu/alberleti-szerzodes';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Albérleti szerződés",
  nazevA: "albérleti szerződést",
  katalog: {"popis": "Szoba vagy teljes lakás albérletbe – a bérbeadó hozzájárulásával.", "kategorie": "lakas", "ilustrace": "protokol", "slova": ["albérleti szerződés", "albérletbe adás", "szoba kiadása", "bérbeadó hozzájárulása", "albérlő"]},
  souvisejici: "lakas",
  landing: {
  "title": "Albérleti szerződés {rok} – minta ingyen (PDF, Word)",
  "description": "Ingyenes albérleti szerződés minta, ha bérelt lakást vagy szobát ad tovább: bérbeadói hozzájárulás, időtartam, díj, kaució. PDF és Word.",
  "perex": "Bérelt lakásában ad ki egy szobát vagy az egész lakást? Ehhez a bérbeadó hozzájárulása és egy világos szerződés kell az albérlővel.",
  "obsahPopis": "Öt rész.",
  "obsah": [
    {
      "nazev": "Szerződő felek",
      "popis": "Bérlő és albérlő."
    },
    {
      "nazev": "Az albérlet tárgya",
      "popis": "Szoba vagy teljes lakás, bérbeadói hozzájárulás."
    },
    {
      "nazev": "Időtartam és megszűnés",
      "popis": "Határozott vagy határozatlan idő, felmondás."
    },
    {
      "nazev": "Díj és kaució",
      "popis": "Havi díj, kaució."
    },
    {
      "nazev": "Záró rendelkezések",
      "popis": "Házirend, írásbeli módosítás."
    }
  ],
  "kroky": [
    {
      "nazev": "Felek",
      "popis": "Bérlő és albérlő."
    },
    {
      "nazev": "Hozzájárulás",
      "popis": "A bérbeadó hozzájárulásának kelte."
    },
    {
      "nazev": "Aláírás",
      "popis": "Két példányban."
    }
  ],
  "online": [
    "Határidők a naptárban",
    "Összeg betűvel automatikusan",
    "Letöltés PDF-ben és Wordben",
    "Üres minta nyomtatáshoz"
  ],
  "hodiSe": [
    "bérelt lakásában szobát ad ki",
    "átmenetileg elköltözik, és a lakást továbbadja"
  ],
  "nehodiSe": [
    "Ön a tulajdonos – használja a lakásbérleti szerződést",
    "a bérbeadó nem járul hozzá"
  ],
  "po": [
    {
      "nazev": "Hozzájárulás",
      "popis": "Csatolja a bérbeadó hozzájárulását."
    },
    {
      "nazev": "Jegyzőkönyv",
      "popis": "Beköltözéskor."
    }
  ],
  "faq": [
    {
      "q": "Kell a bérbeadó hozzájárulása?",
      "a": "Igen. A bérlő a dolgot harmadik személy használatába a bérbeadó hozzájárulásával adhatja (Ptk. 6:334. §)."
    },
    {
      "q": "Ki felel az albérlőért?",
      "a": "A bérlő úgy felel az albérlő magatartásáért, mintha a lakást maga használta volna."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "Nem. A dokumentum közvetlenül az Ön böngészőjében készül."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv bérletre vonatkozó szabályain (6:334. §) alapul.",
  "souvisejiciPopis": "További dokumentumok lakáshoz és bérlethez."
},
  vytvorit: {"title": "Albérleti szerződés kitöltése online – PDF ingyen", "description": "Albérleti szerződés online. Ingyen PDF vagy Word.", "podnadpis": "Ingyenes · PDF és Word · kb. 3 perc"},
};

export default stranka;

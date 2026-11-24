import type { StrankaDokumentu } from '../typy';
import { berletMegszunteteseKozos as sablona } from '../../sablony/hu/berleti-szerzodes-megszuntetese-kozos-megegyezessel';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Bérleti szerződés megszüntetése közös megegyezéssel",
  nazevA: "közös megegyezéses megszüntetést",
  katalog: {"popis": "Albérlet vége közös megegyezéssel – időpont, átadás, kaució.", "kategorie": "lakas", "ilustrace": "protokol", "slova": ["bérleti szerződés megszüntetése közös megegyezéssel", "albérlet felmondás", "közös megegyezés", "kaució", "lakás átadása"]},
  souvisejici: "lakas",
  landing: {
  "title": "Bérlet megszüntetése közös megegyezéssel {rok} – ingyenes minta",
  "description": "Ingyenes minta a lakásbérleti szerződés közös megegyezéses megszüntetéséhez (Ptk. 6:212. §): időpont, lakás átadása, kaució visszafizetése. PDF és Word.",
  "perex": "Előbb költözne, felmondási idő nélkül? A bérbeadó és a bérlő közös megegyezéssel bármikor megszüntetheti a bérletet.",
  "obsahPopis": "Három rész a Ptk. 6:212. §-a szerint.",
  "obsah": [
    {
      "nazev": "Szerződő felek",
      "popis": "Bérbeadó és bérlő."
    },
    {
      "nazev": "A bérlet megszüntetése",
      "popis": "Időpont, átadás, bérleti díj a végéig."
    },
    {
      "nazev": "Kaució és egyéb megállapodások",
      "popis": "Mikor és hová jár vissza a kaució."
    }
  ],
  "kroky": [
    {
      "nazev": "Felek",
      "popis": "A bérleti szerződés szerint."
    },
    {
      "nazev": "Időpont",
      "popis": "Megszűnés és átadás."
    },
    {
      "nazev": "Aláírás",
      "popis": "Mindkét fél, két példányban."
    }
  ],
  "online": [
    "Határidők a naptárban",
    "Magyarázat minden mezőhöz",
    "Letöltés PDF-ben és Wordben",
    "Üres minta nyomtatáshoz"
  ],
  "hodiSe": [
    "a bérlő előbb költözne",
    "mindkét fél felmondási idő nélkül zárná le a bérletet"
  ],
  "nehodiSe": [
    "a másik fél nem ért egyet – akkor felmondás"
  ],
  "po": [
    {
      "nazev": "Átadás",
      "popis": "Jegyzőkönyv a mérőóraállásokkal."
    },
    {
      "nazev": "Kaució",
      "popis": "Emlékeztető a naptárban."
    }
  ],
  "faq": [
    {
      "q": "Megszüntethető a bérlet bármikor?",
      "a": "Igen, ha mindkét fél egyetért: a felek a szerződést közös megegyezéssel a jövőre nézve megszüntethetik (Ptk. 6:212. §)."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "Nem. A dokumentum közvetlenül az Ön böngészőjében készül."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv 6:212. §-án alapul.",
  "souvisejiciPopis": "További dokumentumok lakáshoz és bérlethez."
},
  vytvorit: {"title": "Közös megegyezéses megszüntetés kitöltése online – PDF ingyen", "description": "Bérleti szerződés megszüntetése közös megegyezéssel, online. Ingyen PDF vagy Word.", "podnadpis": "Ingyenes · PDF és Word · kb. 2 perc"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { nyilatkozat as sablona } from '../../sablony/hu/nyilatkozat';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Nyilatkozat",
  nazevA: "nyilatkozatot",
  katalog: {"popis": "Írásbeli nyilatkozat iskolának, banknak vagy bérbeadónak.", "kategorie": "mindennapok", "ilustrace": "plnamoc", "slova": ["nyilatkozat", "nyilatkozat minta", "lakcím nyilatkozat", "iskola", "bank"]},
  souvisejici: "mindennapok",
  landing: {
  "title": "Nyilatkozat minta {rok} – letöltés ingyen (PDF, Word)",
  "description": "Általános nyilatkozat minta ingyen: ki nyilatkozik, kinek és mit. Töltse ki online, töltse le PDF-ben vagy Wordben. Tanúkkal teljes bizonyító erejű.",
  "perex": "Ha iskola, bank vagy bérbeadó írásbeli nyilatkozatot kér. Beírja, ki Ön és mit nyilatkozik – kész.",
  "obsahPopis": "Egy oldal.",
  "obsah": [
    {
      "nazev": "Nyilatkozó",
      "popis": "Név, születési idő, lakcím."
    },
    {
      "nazev": "Nyilatkozat",
      "popis": "Kinek, cél, szöveg és a valóság megerősítése."
    }
  ],
  "kroky": [
    {
      "nazev": "Adatok",
      "popis": "Ki nyilatkozik."
    },
    {
      "nazev": "Szöveg",
      "popis": "Konkrétan és valósan."
    },
    {
      "nazev": "Aláírás",
      "popis": "Saját kézzel, szükség esetén tanúkkal."
    }
  ],
  "online": [
    "A bevezető magától kiegészül",
    "Tippek a megfogalmazáshoz",
    "Letöltés PDF-ben és Wordben",
    "Üres minta nyomtatáshoz"
  ],
  "hodiSe": [
    "iskola vagy bank nyilatkozatot kér",
    "lakcím vagy más tény igazolása"
  ],
  "nehodiSe": [
    "a szervnek saját nyomtatványa van – azt használja",
    "hatósági igazolás szükséges"
  ],
  "po": [
    {
      "nazev": "Aláírás",
      "popis": "Saját kézzel."
    },
    {
      "nazev": "Tanúk",
      "popis": "Két tanúval teljes bizonyító erejű."
    }
  ],
  "faq": [
    {
      "q": "Kell tanú?",
      "a": "Nem kötelező, de két tanú aláírásával (név, lakcím) a nyilatkozat teljes bizonyító erejű magánokirat lesz (Pp. 325. §)."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "Nem. A dokumentum közvetlenül az Ön böngészőjében készül."
    }
  ],
  "zakony": "A minta a polgári perrendtartás (2016. évi CXXX. törvény) 325. §-át veszi figyelembe.",
  "souvisejiciPopis": "További mindennapi dokumentumok."
},
  vytvorit: {"title": "Nyilatkozat kitöltése online – PDF ingyen", "description": "Írásbeli nyilatkozat online. Ingyen PDF vagy Word.", "podnadpis": "Ingyenes · PDF és Word · kb. 1 perc"},
};

export default stranka;

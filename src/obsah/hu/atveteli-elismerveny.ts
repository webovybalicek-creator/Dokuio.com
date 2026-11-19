import type { StrankaDokumentu } from '../typy';
import { atveteliElismerveny as sablona } from '../../sablony/hu/atveteli-elismerveny';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Átvételi elismervény",
  nazevA: "átvételi elismervényt",
  katalog: {
  "popis": "Készpénz átvételének igazolása.",
  "kategorie": "penz",
  "ilustrace": "penize",
  "slova": [
    "átvételi elismervény",
    "pénz átvételi elismervény",
    "nyugta magánszemély",
    "készpénz átvétel",
    "foglaló"
  ]
},
  souvisejici: 'penz',
  landing: {
  "title": "Átvételi elismervény pénzről {rok} – ingyen minta",
  "description": "Ingyenes átvételi elismervény készpénz átvételéről: összeg számmal és betűvel, jogcím, felek. Egyszerű bizonyíték, PDF és Word.",
  "perex": "Egyszerű bizonyíték, hogy a készpénz gazdát cserélt. Az összeget betűvel automatikusan kiírjuk.",
  "obsahPopis": "Rövid elismervény jogcímmel.",
  "obsah": [
    {
      "nazev": "Elismervény",
      "popis": "Ki, kitől, mennyit és miért vett át."
    }
  ],
  "kroky": [
    {
      "nazev": "Kitöltés",
      "popis": "Nevek, összeg, jogcím."
    },
    {
      "nazev": "Számolás",
      "popis": "A pénzt aláírás előtt."
    },
    {
      "nazev": "Aláírás",
      "popis": "Mindkét fél kap példányt."
    }
  ],
  "online": [
    "Összeg betűvel automatikusan",
    "Aláírás a képernyőn",
    "Letöltés PDF-ben és Wordben"
  ],
  "hodiSe": [
    "autóért, dologért fizet készpénzben",
    "foglalót, óvadékot vagy részletet ad át"
  ],
  "nehodiSe": [
    "átutalás – ott a banki igazolás a bizonyíték"
  ],
  "po": [
    {
      "nazev": "Példány",
      "popis": "Mindkét fél tartson meg egy aláírt példányt."
    }
  ],
  "faq": [
    {
      "q": "Kérhetek elismervényt?",
      "a": "Igen, aki fizet, nyugtát követelhet attól, aki a pénzt átveszi."
    },
    {
      "q": "Kell tanú?",
      "a": "Nem kötelező, de nagy összegnél segíthet a bizonyításban."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "A dokumentum kizárólag az Ön böngészőjében készül, adatait nem tároljuk."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv alapján készült.",
  "souvisejiciPopis": "Más dokumentumok a pénzügyekhez, szintén ingyen."
},
  vytvorit: {
  "title": "Átvételi elismervény kitöltése online – ingyen PDF",
  "description": "Átvételi elismervény készpénzről online, összeg betűvel automatikusan. Ingyenes PDF vagy Word, regisztráció nélkül, egy perc alatt.",
  "podnadpis": "Ingyenes · PDF és Word · kb. 1 perc"
},
};

export default stranka;

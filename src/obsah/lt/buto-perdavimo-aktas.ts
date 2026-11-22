import type { StrankaDokumentu } from '../typy';
import { butoAktas as sablona } from '../../sablony/lt/buto-perdavimo-aktas';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Buto perdavimo–priėmimo aktas",
  nazevA: "buto perdavimo–priėmimo aktą",
  katalog: {"popis": "Skaitiklių rodmenys, raktai ir būklė.", "kategorie": "majoklis", "ilustrace": "protokol", "slova": ["buto perdavimo aktas", "buto priėmimo perdavimo aktas", "nuomos perdavimo aktas", "skaitiklių rodmenys", "buto perdavimo aktas pavyzdys"]},
  souvisejici: "majoklis",
  landing: {
  "title": "Buto perdavimo aktas {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas gyvenamosios patalpos perdavimo–priėmimo akto pavyzdys: skaitikliai, raktai, įranga ir pažeidimai nuomos pradžioje ar pabaigoje. PDF ir Word.",
  "perex": "Nuomos pradžioje ir pabaigoje – užfiksuoja skaitiklius, raktus, įrangą ir pažeidimus. Padeda grąžinant užstatą.",
  "obsahPopis": "Trumpas aktas.",
  "obsah": [
    {
      "nazev": "Aktas",
      "popis": "Skaitikliai, raktai, įranga, pažeidimai."
    }
  ],
  "kroky": [
    {
      "nazev": "Užpildykite duomenis",
      "popis": "Ko nežinote, praleiskite – liks linija pildyti ranka."
    },
    {
      "nazev": "Patikrinkite tekstą",
      "popis": "Kiekvieną pastraipą galite redaguoti."
    },
    {
      "nazev": "Atsisiųskite ir pasirašykite",
      "popis": "PDF arba Word, nemokamai."
    }
  ],
  "online": [
    "Perima duomenis iš nuomos sutarties",
    "PDF ir Word"
  ],
  "hodiSe": [
    "perduodate ar grąžinate nuomojamą butą"
  ],
  "nehodiSe": [
    "jums reikia pačios nuomos sutarties"
  ],
  "po": [
    {
      "nazev": "Nuotraukos",
      "popis": "Nufotografuokite skaitiklius ir kiekvieną patalpą."
    }
  ],
  "faq": [
    {
      "q": "Kam reikalingas aktas?",
      "a": "Jis įrodo patalpos būklę perdavimo metu – nuomos pabaigoje lengviau išspręsti, kas buvo, o kas atsirado vėliau, ir grąžinti užstatą."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Lietuvos Respublikos civilinio kodekso nuostatas.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite buto perdavimo aktą internetu – PDF", "description": "Gyvenamosios patalpos perdavimo–priėmimo aktas. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

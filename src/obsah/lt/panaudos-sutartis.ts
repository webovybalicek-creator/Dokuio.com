import type { StrankaDokumentu } from '../typy';
import { panauda as sablona } from '../../sablony/lt/panaudos-sutartis';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Panaudos sutartis",
  nazevA: "panaudos sutartį",
  katalog: {"popis": "Daikto perdavimas neatlygintinai naudotis.", "kategorie": "pirkumi", "ilustrace": "protokol", "slova": ["panaudos sutartis", "daikto panauda", "neatlygintinas naudojimasis", "automobilio panaudos sutartis", "panaudos sutartis pavyzdys"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Panaudos sutartis {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas panaudos sutarties pavyzdys: daiktas ir jo būklė, naudojimo tikslas, grąžinimo terminas ir vieta. PDF ir Word.",
  "perex": "Kai daiktą neatlygintinai paskolinate draugui ar kaimynui – priekabą, įrankius, automobilį. Sutartis nustato būklę ir grąžinimą.",
  "obsahPopis": "Panaudos punktai.",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Panaudos davėjas ir gavėjas."
    },
    {
      "nazev": "Daiktas",
      "popis": "Aprašymas, būklė, vertė, tikslas."
    },
    {
      "nazev": "Terminas",
      "popis": "Iki datos ar kol bus pasiektas tikslas."
    },
    {
      "nazev": "Naudojimas",
      "popis": "Priežiūra ir tretieji asmenys."
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
    "Suma žodžiais automatiškai",
    "Grąžinimo priminimas",
    "PDF ir Word"
  ],
  "hodiSe": [
    "skolinate daiktą neatlygintinai"
  ],
  "nehodiSe": [
    "imate mokestį – tai nuoma"
  ],
  "po": [
    {
      "nazev": "Perdavimas",
      "popis": "Daiktą patikrinkite kartu ir užrašykite trūkumus."
    }
  ],
  "faq": [
    {
      "q": "Kuo panauda skiriasi nuo nuomos?",
      "a": "Panauda neatlygintina. Jei už naudojimąsi mokama, tai nuomos sutartis."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Civilinio kodekso nuostatas dėl panaudos.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite panaudos sutartį internetu – PDF", "description": "Daikto panaudos sutartis. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

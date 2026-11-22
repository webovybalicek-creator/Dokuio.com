import type { StrankaDokumentu } from '../typy';
import { pirkimoSutartis as sablona } from '../../sablony/lt/pirkimo-pardavimo-sutartis';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pirkimo–pardavimo sutartis",
  nazevA: "pirkimo–pardavimo sutartį",
  katalog: {"popis": "Naudoto daikto pardavimas pagal skelbimą.", "kategorie": "pirkumi", "ilustrace": "protokol", "slova": ["pirkimo pardavimo sutartis", "daikto pirkimo pardavimo sutartis", "naudoto daikto pardavimas", "pardavimas pagal skelbimą", "pirkimo pardavimo sutartis tarp fiziniu asmenu"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Pirkimo–pardavimo sutartis {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas daikto pirkimo–pardavimo sutarties tarp fizinių asmenų pavyzdys: aprašymas, būklė ir trūkumai, kaina žodžiais, atsiskaitymas. PDF ir Word.",
  "perex": "Naudoto daikto pardavimui pagal skelbimą – dviračio, telefono, baldų. Sutartyje – būklė, žinomi trūkumai ir atsiskaitymas.",
  "obsahPopis": "Pardavimo punktai.",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Pardavėjas ir pirkėjas."
    },
    {
      "nazev": "Dalykas",
      "popis": "Daiktas, būklė ir trūkumai."
    },
    {
      "nazev": "Kaina",
      "popis": "Suma žodžiais, grynaisiais ar pavedimu."
    },
    {
      "nazev": "Perdavimas",
      "popis": "Nuosavybė ir rizika."
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
    "PDF ir Word"
  ],
  "hodiSe": [
    "parduodate ar perkate naudotą daiktą iš fizinio asmens"
  ],
  "nehodiSe": [
    "parduodate automobilį – naudokite automobilio sutartį",
    "perkate iš parduotuvės"
  ],
  "po": [
    {
      "nazev": "Perdavimas",
      "popis": "Perduokite daiktą su priedais ir dokumentais."
    }
  ],
  "faq": [
    {
      "q": "Ar reikia rašytinės sutarties?",
      "a": "Fizinių asmenų sandoriai virš 1 500 € sudaromi raštu, išskyrus tuos, kurie įvykdomi iš karto sudarymo metu. Rašytinė sutartis visada praverčia kaip įrodymas."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Lietuvos Respublikos civilinio kodekso nuostatas.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite pirkimo–pardavimo sutartį internetu – PDF", "description": "Daikto pirkimo–pardavimo sutartis tarp fizinių asmenų. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { paskola as sablona } from '../../sablony/lt/paskolos-sutartis';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Paskolos sutartis",
  nazevA: "paskolos sutartį",
  katalog: {"popis": "Paskola draugui ar giminaičiui, ir dalimis.", "kategorie": "nauda", "ilustrace": "pujcka", "slova": ["paskolos sutartis", "paskola tarp fizinių asmenų", "paskola draugui", "paskolos sutartis su grąžinimu dalimis", "skolos raštelis", "paskolos sutartis tarp fiziniu asmenu"]},
  souvisejici: "nauda",
  landing: {
  "title": "Paskolos sutartis {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas paskolos sutarties tarp fizinių asmenų pavyzdys: suma žodžiais, grąžinimas vienu kartu ar dalimis, palūkanos tik susitarus. PDF ir Word.",
  "perex": "Pinigų paskolai draugui ar giminaičiui. Grąžinimas vienu kartu arba mėnesinėmis įmokomis, su palūkanomis ar be jų. Virš 600 € sutartis turi būti rašytinė.",
  "obsahPopis": "Paskolos punktai (Civilinio kodekso paskolos sutartis).",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Paskolos davėjas ir gavėjas."
    },
    {
      "nazev": "Dalykas",
      "popis": "Suma ir perdavimo būdas."
    },
    {
      "nazev": "Grąžinimas",
      "popis": "Vienu kartu arba dalimis, išankstinis grąžinimas."
    },
    {
      "nazev": "Palūkanos",
      "popis": "Be palūkanų arba su sutartomis palūkanomis."
    },
    {
      "nazev": "Baigiamosios nuostatos",
      "popis": "Egzemplioriai."
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
    "Priminimai apie įmokas",
    "PDF ir Word"
  ],
  "hodiSe": [
    "skolinate pinigus draugui ar giminaičiui",
    "norite raštu užfiksuoti grąžinimo terminą"
  ],
  "nehodiSe": [
    "skolinate kaip įmonė – taikomos specialios taisyklės"
  ],
  "po": [
    {
      "nazev": "Pavedimas",
      "popis": "Pinigus perveskite su paskirtimi „paskola pagal sutartį“."
    },
    {
      "nazev": "Kalendorius",
      "popis": "Grąžinimo datas pasižymėkite kalendoriuje."
    }
  ],
  "faq": [
    {
      "q": "Ar paskolos sutartis turi būti rašytinė?",
      "a": "Fizinių asmenų paskolos sutartis turi būti rašytinė, kai suma viršija 600 €. Rašytinė sutartis bet kuriuo atveju yra geriausias įrodymas."
    },
    {
      "q": "Kokios palūkanos, jei skolininkas vėluoja?",
      "a": "Jei sutartis nenustato kitaip, už pavėluotą piniginę prievolę mokamos 5 % metinės palūkanos (Civilinio kodekso 6.210 str.)."
    },
    {
      "q": "Per kiek laiko suėjus terminui galima reikalauti skolos?",
      "a": "Bendrasis ieškinio senaties terminas – 10 metų; skolininkui pripažinus skolą, jis skaičiuojamas iš naujo."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Civilinio kodekso nuostatas dėl paskolos sutarties.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite paskolos sutartį internetu – PDF", "description": "Paskolos sutartis tarp fizinių asmenų. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

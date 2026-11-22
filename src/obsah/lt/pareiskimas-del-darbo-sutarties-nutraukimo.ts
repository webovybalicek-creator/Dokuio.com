import type { StrankaDokumentu } from '../typy';
import { darboNutraukimas as sablona } from '../../sablony/lt/pareiskimas-del-darbo-sutarties-nutraukimo';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pareiškimas dėl darbo sutarties nutraukimo",
  nazevA: "pareiškimą dėl darbo sutarties nutraukimo",
  katalog: {"popis": "Išėjimas iš darbo, įspėjus prieš 20 dienų.", "kategorie": "darbs", "ilustrace": "protokol", "slova": ["prašymas atleisti iš darbo", "pareiškimas dėl darbo sutarties nutraukimo", "išėjimas iš darbo", "darbo sutarties nutraukimas darbuotojo iniciatyva", "20 dienų įspėjimas", "prasymas atleisti is darbo"]},
  souvisejici: "darbs",
  landing: {
  "title": "Prašymas atleisti iš darbo {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas darbuotojo pareiškimo dėl darbo sutarties nutraukimo pavyzdys: įspėjimas prieš 20 kalendorinių dienų, paskutinė darbo diena, atsiskaitymas. PDF ir Word.",
  "perex": "Kai norite išeiti iš darbo savo iniciatyva. Darbo kodeksas reikalauja rašytinio pareiškimo ir įspėjimo ne vėliau kaip prieš 20 kalendorinių dienų.",
  "obsahPopis": "Trumpas pareiškimas.",
  "obsah": [
    {
      "nazev": "Pareiškimas",
      "popis": "Darbuotojas, darbdavys, sutartis ir paskutinė darbo diena."
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
    "Terminų priminimai",
    "PDF ir Word"
  ],
  "hodiSe": [
    "išeinate iš darbo savo iniciatyva"
  ],
  "nehodiSe": [
    "norite susitarti su darbdaviu – rašykite šalių susitarimą",
    "išeinate dėl svarbių priežasčių (DK 56 str.)"
  ],
  "po": [
    {
      "nazev": "Įteikimas",
      "popis": "Paprašykite patvirtinti gavimą savo egzemplioriuje."
    },
    {
      "nazev": "Atsiskaitymas",
      "popis": "Patikrinkite kompensaciją už nepanaudotas atostogas."
    }
  ],
  "faq": [
    {
      "q": "Per kiek laiko reikia įspėti?",
      "a": "Ne vėliau kaip prieš 20 kalendorinių dienų (Darbo kodekso 55 str.)."
    },
    {
      "q": "Ar galiu pareiškimą atšaukti?",
      "a": "Taip, per tris darbo dienas nuo pateikimo. Vėliau – tik darbdaviui sutikus."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Darbo kodekso 55 straipsnį.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite prašymą atleisti iš darbo internetu – PDF", "description": "Darbuotojo pareiškimas dėl darbo sutarties nutraukimo. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

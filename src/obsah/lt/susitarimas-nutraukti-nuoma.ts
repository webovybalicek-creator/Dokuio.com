import type { StrankaDokumentu } from '../typy';
import { nuomosPabaiga as sablona } from '../../sablony/lt/susitarimas-nutraukti-nuoma';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Susitarimas nutraukti nuomos sutartį",
  nazevA: "susitarimą nutraukti nuomos sutartį",
  katalog: {"popis": "Nuomos pabaiga šalių susitarimu.", "kategorie": "majoklis", "ilustrace": "protokol", "slova": ["susitarimas nutraukti nuomos sutartį", "nuomos sutarties nutraukimas šalių susitarimu", "nuomos pabaiga", "susitarimas nutraukti nuoma"]},
  souvisejici: "majoklis",
  landing: {
  "title": "Susitarimas nutraukti nuomą {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas susitarimo nutraukti buto nuomos sutartį pavyzdys: pabaigos ir grąžinimo data, užstatas ir kiti susitarimai. Be įspėjimo termino. PDF ir Word.",
  "perex": "Kai nuomotojas ir nuomininkas susitaria baigti nuomą. Šalių susitarimu tai galima padaryti bet kada, be įspėjimo termino.",
  "obsahPopis": "Susitarimo punktai.",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Nuomotojas ir nuomininkas."
    },
    {
      "nazev": "Nutraukimas",
      "popis": "Pabaigos ir grąžinimo data."
    },
    {
      "nazev": "Užstatas",
      "popis": "Kada ir kaip grąžinamas."
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
    "Termino priminimai",
    "PDF ir Word"
  ],
  "hodiSe": [
    "abu norite baigti nuomą",
    "norite aiškios datos ir užstato grąžinimo"
  ],
  "nehodiSe": [
    "nuomotojas nesutinka – nuomininkas gali siųsti pranešimą prieš mėnesį"
  ],
  "po": [
    {
      "nazev": "Aktas",
      "popis": "Grąžindami butą, surašykite aktą su skaitiklių rodmenimis."
    }
  ],
  "faq": [
    {
      "q": "Ar reikia laikytis įspėjimo termino?",
      "a": "Ne. Šalių susitarimu nuomos sutartį galima nutraukti bet kurią sutartą dieną."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Lietuvos Respublikos civilinio kodekso nuostatas.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite susitarimą nutraukti nuomą internetu – PDF", "description": "Nuomos sutarties nutraukimas šalių susitarimu. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { nuomosNutraukimas as sablona } from '../../sablony/lt/pranesimas-apie-nuomos-nutraukima';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pranešimas apie nuomos sutarties nutraukimą",
  nazevA: "pranešimą apie nuomos sutarties nutraukimą",
  katalog: {"popis": "Nuomininkas nutraukia nuomos sutartį.", "kategorie": "majoklis", "ilustrace": "protokol", "slova": ["nuomos sutarties nutraukimas", "pranešimas apie nuomos nutraukimą", "nuomininko įspėjimas", "buto nuomos nutraukimas", "nuomos sutarties nutraukimas pries termina"]},
  souvisejici: "majoklis",
  landing: {
  "title": "Nuomos sutarties nutraukimas {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas nuomininko pranešimo apie buto nuomos sutarties nutraukimą pavyzdys: įspėjimas prieš mėnesį, pabaigos data, užstato grąžinimas. PDF ir Word.",
  "perex": "Kai nuomininkas nori išsikraustyti. Tiek terminuotą, tiek neterminuotą sutartį jis gali nutraukti raštu įspėjęs nuomotoją prieš mėnesį.",
  "obsahPopis": "Trumpas pranešimas.",
  "obsah": [
    {
      "nazev": "Pranešimas",
      "popis": "Sutartis, pabaigos data, raktų grąžinimas ir užstatas."
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
    "Termino priminimas",
    "PDF ir Word"
  ],
  "hodiSe": [
    "esate nuomininkas ir norite nutraukti nuomą",
    "norite raštu užfiksuoti pabaigos datą"
  ],
  "nehodiSe": [
    "norite susitarti su nuomotoju – naudokite susitarimą nutraukti nuomą"
  ],
  "po": [
    {
      "nazev": "Įrodymas",
      "popis": "Išsaugokite įrodymą, kada nuomotojas gavo pranešimą."
    },
    {
      "nazev": "Aktas",
      "popis": "Grąžindami butą, surašykite aktą."
    }
  ],
  "faq": [
    {
      "q": "Per kiek laiko reikia įspėti?",
      "a": "Prieš vieną mėnesį raštu (Civilinio kodekso 6.609 str.). Terminas skaičiuojamas nuo dienos, kai nuomotojas gauna pranešimą."
    },
    {
      "q": "Ar galima nutraukti ir terminuotą sutartį?",
      "a": "Taip. Nuomininko teisė nutraukti sutartį įspėjus prieš mėnesį galioja ir terminuotai sutarčiai."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Civilinio kodekso 6.609 straipsnį.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite pranešimą apie nuomos nutraukimą internetu – PDF", "description": "Nuomininko pranešimas apie nuomos sutarties nutraukimą. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

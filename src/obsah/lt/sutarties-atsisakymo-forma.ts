import type { StrankaDokumentu } from '../typy';
import { atsisakymas as sablona } from '../../sablony/lt/sutarties-atsisakymo-forma';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pranešimas apie sutarties atsisakymą",
  nazevA: "pranešimą apie sutarties atsisakymą",
  katalog: {"popis": "Pirkinio internetu grąžinimas per 14 dienų.", "kategorie": "pirkumi", "ilustrace": "protokol", "slova": ["sutarties atsisakymo forma", "prekės grąžinimas per 14 dienų", "atsisakymas nuotolinės sutarties", "grąžinti prekę e. parduotuvei", "14 dienų grąžinimas", "sutarties atsisakymo forma pavyzdys"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Sutarties atsisakymo forma {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas pranešimo apie sutarties atsisakymą pavyzdys: prekės grąžinimas per 14 dienų perkant internetu ar telefonu, užsakymas, pinigų grąžinimas. PDF ir Word.",
  "perex": "Kai pirkinio internetu ar telefonu norite atsisakyti per 14 dienų be priežasties. Pakanka išsiųsti pranešimą iki termino pabaigos.",
  "obsahPopis": "Trumpas pranešimas.",
  "obsah": [
    {
      "nazev": "Pranešimas",
      "popis": "Prekiautojas, prekė, užsakymas, datos ir sąskaita pinigams grąžinti."
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
    "PDF ir Word",
    "Datos automatiškai"
  ],
  "hodiSe": [
    "pirkote internetu ar telefonu ir norite grąžinti prekę",
    "nuo prekės gavimo praėjo ne daugiau kaip 14 dienų"
  ],
  "nehodiSe": [
    "prekė turi trūkumą – naudokite pretenziją",
    "pirkote parduotuvėje – teisė grąžinti priklauso nuo parduotuvės taisyklių"
  ],
  "po": [
    {
      "nazev": "Grąžinimas",
      "popis": "Grąžinkite prekę per 14 dienų nuo atsisakymo."
    }
  ],
  "faq": [
    {
      "q": "Nuo kada skaičiuojamos 14 dienų?",
      "a": "Prekių atveju – nuo dienos, kai prekę gavote. Pakanka pranešimą išsiųsti iki paskutinės dienos."
    },
    {
      "q": "Kas apmoka grąžinimą?",
      "a": "Tiesiogines grąžinimo išlaidas paprastai apmoka vartotojas, jei prekiautojas apie tai informavo. Įprasto pristatymo išlaidos grąžinamos."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Civilinio kodekso nuostatas dėl vartojimo sutarčių ir Your Europe informaciją.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite pranešimą apie sutarties atsisakymą internetu – PDF", "description": "Sutarties atsisakymas per 14 dienų. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

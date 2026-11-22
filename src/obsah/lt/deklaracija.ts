import type { StrankaDokumentu } from '../typy';
import { deklaracija as sablona } from '../../sablony/lt/deklaracija';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Deklaracija",
  nazevA: "deklaraciją",
  katalog: {"popis": "Rašytinis patvirtinimas įstaigai ar bankui.", "kategorie": "pirkumi", "ilustrace": "plnamoc", "slova": ["deklaracija", "rašytinis patvirtinimas", "patvirtinimas raštu", "deklaracijos pavyzdys", "pareiškimas", "deklaracija pavyzdys"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Deklaracija {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas deklaracijos pavyzdys – rašytinis faktų patvirtinimas įstaigai, bankui ar kitam asmeniui: kas, kam ir ką patvirtina. PDF ir Word.",
  "perex": "Kai įstaiga, bankas ar kitas asmuo prašo raštu patvirtinti faktą – kur gyvenate, kad nesate gavę išmokos ar kad turite kieno nors sutikimą.",
  "obsahPopis": "Trumpas dokumentas.",
  "obsah": [
    {
      "nazev": "Deklaracija",
      "popis": "Deklaruojantis asmuo, adresatas ir faktai."
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
    "PDF ir Word"
  ],
  "hodiSe": [
    "reikia paprasto rašytinio patvirtinimo"
  ],
  "nehodiSe": [
    "įstaiga reikalauja savos formos ar notaro patvirtinimo"
  ],
  "po": [
    {
      "nazev": "Kopija",
      "popis": "Pasilikite pateiktos deklaracijos kopiją."
    }
  ],
  "faq": [
    {
      "q": "Ar deklaraciją reikia tvirtinti pas notarą?",
      "a": "Dažniausiai ne. Tačiau kai kurios įstaigos reikalauja savos formos arba notaro patvirtinto parašo – pasitikrinkite iš anksto."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Lietuvos Respublikos civilinio kodekso nuostatas.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite deklaraciją internetu – PDF", "description": "Rašytinė deklaracija įstaigai ar bankui. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

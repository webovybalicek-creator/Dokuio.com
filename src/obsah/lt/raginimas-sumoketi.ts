import type { StrankaDokumentu } from '../typy';
import { raginimas as sablona } from '../../sablony/lt/raginimas-sumoketi';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Raginimas sumokėti skolą",
  nazevA: "raginimą sumokėti skolą",
  katalog: {"popis": "Raginimas skolininkui su terminu.", "kategorie": "nauda", "ilustrace": "dluh", "slova": ["raginimas sumokėti", "raginimas sumokėti skolą", "pretenzija dėl skolos", "priminimas apie skolą", "skolos išieškojimas", "raginimas sumoketi"]},
  souvisejici: "nauda",
  landing: {
  "title": "Raginimas sumokėti skolą {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas raginimo sumokėti skolą pavyzdys: suma žodžiais, pagrindas, naujas terminas ir sąskaita. Prieš kreipiantis į teismą. PDF ir Word.",
  "perex": "Kai skolininkas nesumokėjo laiku. Raginimas su nauju terminu dažnai pakanka; jei ne – turite įrodymą teismui.",
  "obsahPopis": "Trumpas raginimas.",
  "obsah": [
    {
      "nazev": "Raginimas",
      "popis": "Suma, pagrindas, pasibaigęs ir naujas terminas, sąskaita."
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
    "kas nors jums nesumokėjo laiku",
    "norite paskutinį kartą priminti prieš teismą"
  ],
  "nehodiSe": [
    "skolininkas sutinka mokėti dalimis – naudokite susitarimą"
  ],
  "po": [
    {
      "nazev": "Siuntimas",
      "popis": "Siųskite registruotu laišku ar el. paštu ir išsaugokite įrodymą."
    },
    {
      "nazev": "Teismas",
      "popis": "Piniginiams reikalavimams yra supaprastintas teismo įsakymo procesas."
    }
  ],
  "faq": [
    {
      "q": "Ar raginimas nutraukia senatį?",
      "a": "Ne. Ieškinio senatį nutraukia ieškinio pareiškimas arba skolininko skolos pripažinimas. Raginimas vis tiek naudingas – jis įrodo, kad skolos reikalavote."
    },
    {
      "q": "Kokių palūkanų galima reikalauti?",
      "a": "Jei nesusitarta kitaip – 5 % metinių už pavėluotą mokėjimą, tarp verslininkų – 6 %."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Lietuvos Respublikos civilinio kodekso nuostatas.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite raginimą sumokėti skolą internetu – PDF", "description": "Raginimas skolininkui sumokėti iki termino. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

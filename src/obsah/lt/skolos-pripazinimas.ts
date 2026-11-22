import type { StrankaDokumentu } from '../typy';
import { skolosPripazinimas as sablona } from '../../sablony/lt/skolos-pripazinimas';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Skolos pripažinimas",
  nazevA: "skolos pripažinimą",
  katalog: {"popis": "Skolininkas raštu pripažįsta skolą.", "kategorie": "nauda", "ilustrace": "dluh", "slova": ["skolos pripažinimas", "skolos pripažinimo raštas", "skolos patvirtinimas", "skolos raštelis", "skolos pripazinimas"]},
  souvisejici: "nauda",
  landing: {
  "title": "Skolos pripažinimas {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas skolos pripažinimo pavyzdys: skolos dydis žodžiais, pagrindas ir mokėjimas vienu kartu ar dalimis. Nutraukia ieškinio senatį. PDF ir Word.",
  "perex": "Kai skolininkas raštu patvirtina, kad skola yra ir kokio ji dydžio. Pripažinimas nutraukia ieškinio senatį, ir ji pradedama skaičiuoti iš naujo.",
  "obsahPopis": "Pripažinimo punktai.",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Skolininkas ir kreditorius."
    },
    {
      "nazev": "Pripažinimas",
      "popis": "Suma ir skolos pagrindas."
    },
    {
      "nazev": "Mokėjimas",
      "popis": "Vienu kartu arba dalimis."
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
    "kažkas jums skolingas ir sutinka tai patvirtinti raštu",
    "senaties terminas artėja prie pabaigos"
  ],
  "nehodiSe": [
    "skolininkas skolą ginčija – siųskite raginimą"
  ],
  "po": [
    {
      "nazev": "Originalas",
      "popis": "Pasirašytą originalą saugo kreditorius."
    }
  ],
  "faq": [
    {
      "q": "Ką reiškia skolos pripažinimas?",
      "a": "Skolininko veiksmai, rodantys, kad jis pripažįsta skolą, nutraukia ieškinio senatį (Civilinio kodekso 1.130 str.). Bendrasis terminas – 10 metų, palūkanoms – 5 metai."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Lietuvos Respublikos civilinio kodekso nuostatas.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite skolos pripažinimą internetu – PDF", "description": "Rašytinis skolos pripažinimas. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

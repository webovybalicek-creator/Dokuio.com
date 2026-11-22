import type { StrankaDokumentu } from '../typy';
import { sutartiesNutraukimas as sablona } from '../../sablony/lt/pranesimas-apie-sutarties-nutraukima';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pranešimas apie sutarties nutraukimą",
  nazevA: "pranešimą apie sutarties nutraukimą",
  katalog: {"popis": "Telefonas, internetas, draudimas, sporto klubas.", "kategorie": "pirkumi", "ilustrace": "protokol", "slova": ["sutarties nutraukimas", "pranešimas apie sutarties nutraukimą", "sporto klubo sutarties nutraukimas", "interneto sutarties nutraukimas", "prenumeratos nutraukimas", "sutarties nutraukimo prasymas"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Sutarties nutraukimo pranešimas {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas pranešimo apie paslaugų sutarties nutraukimą pavyzdys: telefonas, internetas, draudimas, sporto klubas ar prenumerata. PDF ir Word.",
  "perex": "Kai norite nutraukti paslaugų, prenumeratos ar narystės sutartį. Pranešime – sutartis, pabaigos data ir prašymas patvirtinti.",
  "obsahPopis": "Trumpas pranešimas.",
  "obsah": [
    {
      "nazev": "Pranešimas",
      "popis": "Klientas, paslaugų teikėjas, sutartis ir pabaigos data."
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
    "Pabaigos priminimas",
    "PDF ir Word"
  ],
  "hodiSe": [
    "nutraukiate telefono, interneto, draudimo ar sporto klubo sutartį"
  ],
  "nehodiSe": [
    "sutartį sudarėte internetu prieš mažiau nei 14 dienų – naudokite atsisakymo formą"
  ],
  "po": [
    {
      "nazev": "Patvirtinimas",
      "popis": "Paprašykite patvirtinti pabaigos datą."
    }
  ],
  "faq": [
    {
      "q": "Koks įspėjimo terminas?",
      "a": "Jį nustato jūsų sutartis ar bendrosios sąlygos. Terminuotą sutartį nutraukus anksčiau, gali būti taikomos netesybos."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Lietuvos Respublikos civilinio kodekso nuostatas.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite pranešimą apie sutarties nutraukimą internetu – PDF", "description": "Paslaugų sutarties nutraukimas. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

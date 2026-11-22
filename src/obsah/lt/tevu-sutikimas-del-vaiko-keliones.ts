import type { StrankaDokumentu } from '../typy';
import { vaikoKelione as sablona } from '../../sablony/lt/tevu-sutikimas-del-vaiko-keliones';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Tėvų sutikimas dėl vaiko kelionės",
  nazevA: "tėvų sutikimą dėl vaiko kelionės",
  katalog: {"popis": "Vaikas keliauja be tėvų.", "kategorie": "gimene", "ilustrace": "plnamoc", "slova": ["tėvų sutikimas dėl vaiko kelionės", "vaiko išvykimas į užsienį", "sutikimas vaikui keliauti", "notarinis tėvų sutikimas", "vaikas keliauja be tėvų", "tevu sutikimas del vaiko keliones"]},
  souvisejici: "gimene",
  landing: {
  "title": "Tėvų sutikimas dėl vaiko kelionės {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas tėvų sutikimo dėl vaiko kelionės pavyzdys: vaikas, lydintis asmuo, valstybės, laikotarpis. Kada reikia notaro – už Šengeno erdvės. PDF ir Word.",
  "perex": "Kai vaikas keliauja be tėvų – su treneriu, mokytoju, seneliais ar vienas. Už Šengeno erdvės sutikimą turi patvirtinti notaras.",
  "obsahPopis": "Trumpas sutikimas.",
  "obsah": [
    {
      "nazev": "Sutikimas",
      "popis": "Vienas iš tėvų, vaikas, lydintis asmuo ir kelionė."
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
    "Juodraštis notarui"
  ],
  "hodiSe": [
    "vaikas keliauja su kitu suaugusiuoju ar vienas",
    "reikia juodraščio notarui"
  ],
  "nehodiSe": [
    "vaikas persikelia gyventi į kitą valstybę – reikia kito iš tėvų sutikimo"
  ],
  "po": [
    {
      "nazev": "Kartu",
      "popis": "Lydintis asmuo pasiima sutikimą ir vaiko dokumentą."
    },
    {
      "nazev": "Už Šengeno erdvės",
      "popis": "Sutikimą patvirtina notaras."
    }
  ],
  "faq": [
    {
      "q": "Ar reikia abiejų tėvų sutikimo?",
      "a": "Laikinai išvykti su vaiku į užsienį be kito iš tėvų sutikimo galima. Abiejų tėvų sutikimas reikalingas, kai keičiama vaiko gyvenamosios vietos valstybė."
    },
    {
      "q": "Kada sutikimą turi patvirtinti notaras?",
      "a": "Kai vaikas be tėvų keliauja į valstybę, nepriklausančią Šengeno erdvei. Tėvams išsiskyrus pakanka vieno iš jų sutikimo."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal e-justice informaciją apie Lietuvą ir Notarų rūmų paaiškinimus dėl vaikų kelionių.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite tėvų sutikimą dėl vaiko kelionės internetu – PDF", "description": "Tėvų sutikimas dėl vaiko kelionės. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

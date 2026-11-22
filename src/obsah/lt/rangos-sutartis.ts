import type { StrankaDokumentu } from '../typy';
import { rangosSutartis as sablona } from '../../sablony/lt/rangos-sutartis';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Rangos sutartis",
  nazevA: "rangos sutartį",
  katalog: {"popis": "Meistras, remontas, renovacija.", "kategorie": "pakalpojumi", "ilustrace": "protokol", "slova": ["rangos sutartis", "remonto darbų sutartis", "sutartis su meistru", "statybos rangos sutartis", "darbų atlikimo sutartis", "rangos sutartis pavyzdys"]},
  souvisejici: "pakalpojumi",
  landing: {
  "title": "Rangos sutartis {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas rangos sutarties pavyzdys remontui ar darbams: darbų aprašymas, medžiagos, terminai, kaina žodžiais, avansas ir priėmimas. PDF ir Word.",
  "perex": "Kai užsakote darbus meistrui ar statybos įmonei – remontą, apdailą, montavimą. Sutartyje aiškiai: kas, kada, už kiek ir kaip priimama.",
  "obsahPopis": "Rangos punktai (Civilinio kodekso rangos sutartis).",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Užsakovas ir rangovas."
    },
    {
      "nazev": "Darbai",
      "popis": "Aprašymas, vieta, medžiagos."
    },
    {
      "nazev": "Terminai",
      "popis": "Pradžia, pabaiga, vėlavimas."
    },
    {
      "nazev": "Kaina",
      "popis": "Suma žodžiais, avansas, papildomi darbai."
    },
    {
      "nazev": "Priėmimas",
      "popis": "Patikrinimas ir trūkumai."
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
    "užsakote remontą ar kitus darbus",
    "norite aiškios kainos ir termino"
  ],
  "nehodiSe": [
    "samdote darbuotoją – tai darbo sutartis"
  ],
  "po": [
    {
      "nazev": "Priėmimas",
      "popis": "Priimdami darbus, užrašykite trūkumus akte."
    },
    {
      "nazev": "Mokėjimai",
      "popis": "Už kiekvieną mokėjimą prašykite sąskaitos."
    }
  ],
  "faq": [
    {
      "q": "Kiek avanso mokėti?",
      "a": "Įstatymas to nenustato. Rekomenduojame nedidelį avansą medžiagoms, o likusią sumą mokėti priėmus darbus."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Civilinio kodekso nuostatas dėl rangos.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite rangos sutartį internetu – PDF", "description": "Rangos sutartis darbams ir remontui. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

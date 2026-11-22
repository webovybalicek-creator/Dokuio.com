import type { StrankaDokumentu } from '../typy';
import { pakvitavimas as sablona } from '../../sablony/lt/pinigu-gavimo-pakvitavimas';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pinigų gavimo pakvitavimas",
  nazevA: "pinigų gavimo pakvitavimą",
  katalog: {"popis": "Mokėjimo grynaisiais patvirtinimas.", "kategorie": "nauda", "ilustrace": "penize", "slova": ["pinigų gavimo pakvitavimas", "pakvitavimas", "pinigų perdavimo aktas", "grynųjų pinigų pakvitavimas", "avanso pakvitavimas", "pinigu gavimo pakvitavimas"]},
  souvisejici: "nauda",
  landing: {
  "title": "Pinigų gavimo pakvitavimas {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas pinigų gavimo pakvitavimo pavyzdys: kas gavo, iš ko, kiek (ir žodžiais) ir už ką. Mokėjimo įrodymas. PDF ir Word.",
  "perex": "Kai duodate ar gaunate grynuosius – pirkimo kainą, paskolą, avansą ar užstatą. Pakvitavimas įrodo mokėjimą.",
  "obsahPopis": "Trumpas pakvitavimas.",
  "obsah": [
    {
      "nazev": "Pakvitavimas",
      "popis": "Gavėjas, mokėtojas, suma žodžiais ir pagrindas."
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
    "mokate ar gaunate grynuosius pinigus",
    "duodate avansą ar užstatą"
  ],
  "nehodiSe": [
    "mokate pavedimu – išrašas jau yra įrodymas",
    "suma viršija 5 000 € – grynaisiais tiek mokėti negalima"
  ],
  "po": [
    {
      "nazev": "Išsaugokite",
      "popis": "Pakvitavimą pasilieka tas, kuris mokėjo."
    }
  ],
  "faq": [
    {
      "q": "Kas pasirašo pakvitavimą?",
      "a": "Pakvitavimą pasirašo tas, kuris gavo pinigus. Mokėtojas gali jo reikalauti ir pasilieka jį kaip įrodymą."
    },
    {
      "q": "Kiek galima sumokėti grynaisiais?",
      "a": "Pagal vieną sandorį – ne daugiau kaip 5 000 €. Sandorio skaidyti, kad būtų išvengta ribojimo, negalima."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Lietuvos Respublikos civilinio kodekso nuostatas.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite pinigų gavimo pakvitavimą internetu – PDF", "description": "Pinigų gavimo grynaisiais pakvitavimas. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

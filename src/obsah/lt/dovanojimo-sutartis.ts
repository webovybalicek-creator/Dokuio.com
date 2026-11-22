import type { StrankaDokumentu } from '../typy';
import { dovanojimas as sablona } from '../../sablony/lt/dovanojimo-sutartis';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Dovanojimo sutartis",
  nazevA: "dovanojimo sutartį",
  katalog: {"popis": "Pinigų ar daikto dovanojimas.", "kategorie": "nauda", "ilustrace": "dar", "slova": ["dovanojimo sutartis", "pinigų dovanojimo sutartis", "dovanojimas", "dovana vaikui", "dovanos mokestis", "dovanojimo sutartis tarp giminaiciu"]},
  souvisejici: "nauda",
  landing: {
  "title": "Dovanojimo sutartis {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas dovanojimo sutarties pavyzdys pinigams ar kilnojamajam daiktui: suma žodžiais, giminystė mokesčiams, perdavimas. PDF ir Word.",
  "perex": "Pinigų sumos ar kilnojamojo daikto dovanojimui su perdavimu. Virš 1 500 € sutartis turi būti rašytinė, virš 14 500 € ir nekilnojamajam turtui – notarinė.",
  "obsahPopis": "Dovanojimo punktai.",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Dovanotojas, apdovanotasis ir giminystė."
    },
    {
      "nazev": "Dovana",
      "popis": "Pinigai arba daiktas su verte."
    },
    {
      "nazev": "Baigiamosios nuostatos",
      "popis": "Egzemplioriai."
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
    "Patarimai dėl mokesčių",
    "PDF ir Word"
  ],
  "hodiSe": [
    "dovanojate pinigus ar daiktą šeimos nariui ar draugui",
    "norite turėti dovanos įrodymą"
  ],
  "nehodiSe": [
    "dovanojate nekilnojamąjį turtą ar daugiau kaip 14 500 € – reikia notaro"
  ],
  "po": [
    {
      "nazev": "Perdavimas",
      "popis": "Perveskite pinigus su paskirtimi „dovana pagal sutartį“."
    },
    {
      "nazev": "Deklaracija",
      "popis": "Dovanas iš ne artimų giminaičių, viršijančias 2 500 € per metus, deklaruokite metinėje deklaracijoje."
    }
  ],
  "faq": [
    {
      "q": "Ar reikia mokėti mokestį už dovaną?",
      "a": "Dovanos iš sutuoktinio, vaikų, tėvų, senelių, brolių, seserų ir vaikaičių neapmokestinamos. Iš kitų asmenų per metus neapmokestinama 2 500 €, nuo viršijančios dalies mokamas GPM."
    },
    {
      "q": "Kada reikia notaro?",
      "a": "Kai dovanojamas nekilnojamasis daiktas arba dovanojimo suma didesnė kaip 14 500 €. Tada šis pavyzdys tinka tik kaip juodraštis notarui."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Civilinio kodekso nuostatas dėl dovanojimo ir VMI informaciją apie dovanų apmokestinimą.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite dovanojimo sutartį internetu – PDF", "description": "Pinigų ar daikto dovanojimo sutartis. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

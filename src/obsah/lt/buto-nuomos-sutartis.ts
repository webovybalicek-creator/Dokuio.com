import type { StrankaDokumentu } from '../typy';
import { nuomosSutartis as sablona } from '../../sablony/lt/buto-nuomos-sutartis';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Buto nuomos sutartis",
  nazevA: "buto nuomos sutartį",
  katalog: {"popis": "Buto nuoma su užstatu.", "kategorie": "majoklis", "ilustrace": "protokol", "slova": ["buto nuomos sutartis", "gyvenamosios patalpos nuomos sutartis", "nuomos sutartis", "namo nuomos sutartis", "užstatas", "buto nuoma", "buto nuomos sutartis pavyzdys"]},
  souvisejici: "majoklis",
  landing: {
  "title": "Buto nuomos sutartis {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas buto nuomos sutarties pavyzdys: nuomos mokestis žodžiais, užstatas, terminas, mokesčiai, gyvenamosios vietos deklaravimas. PDF ir Word.",
  "perex": "Buto ar namo nuomai gyventi. Terminuota ar neterminuota; nuomininkas gali nutraukti sutartį raštu įspėjęs prieš mėnesį.",
  "obsahPopis": "Nuomos punktai (Civilinio kodekso gyvenamosios patalpos nuoma).",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Nuomotojas ir nuomininkas."
    },
    {
      "nazev": "Patalpa",
      "popis": "Adresas, plotas, baldai, kartu gyvenantys."
    },
    {
      "nazev": "Terminas",
      "popis": "Terminuota ar neterminuota, nutraukimas."
    },
    {
      "nazev": "Mokėjimai",
      "popis": "Nuomos mokestis, užstatas, paslaugos."
    },
    {
      "nazev": "Naudojimas",
      "popis": "Pertvarkymai, subnuoma, deklaravimas."
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
    "Perdavimo aktas perima duomenis",
    "PDF ir Word"
  ],
  "hodiSe": [
    "nuomojate butą ar namą gyventi",
    "norite aiškių sąlygų dėl užstato ir nutraukimo"
  ],
  "nehodiSe": [
    "nuomojate patalpas verslui",
    "nuomojate trumpam turistams"
  ],
  "po": [
    {
      "nazev": "Aktas",
      "popis": "Perduodami raktus, surašykite perdavimo–priėmimo aktą."
    },
    {
      "nazev": "Mokesčiai",
      "popis": "Nuomotojas deklaruoja nuomos pajamas ir moka pajamų mokestį."
    }
  ],
  "faq": [
    {
      "q": "Per kiek laiko nuomininkas gali nutraukti sutartį?",
      "a": "Nuomininkas gali nutraukti tiek terminuotą, tiek neterminuotą sutartį, raštu įspėjęs nuomotoją prieš vieną mėnesį (Civilinio kodekso 6.609 str.)."
    },
    {
      "q": "Koks gali būti užstatas?",
      "a": "Įstatymas užstato dydžio neriboja; įprastai tai vieno ar dviejų mėnesių nuomos mokestis. Įrašykite, kada ir kaip jis grąžinamas."
    },
    {
      "q": "Ar nuomininkas gali deklaruoti gyvenamąją vietą?",
      "a": "Taip, jei nuomotojas sutinka. Sutikimą patogu įrašyti į sutartį – tada savivaldybei pakanka pateikti sutartį."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Civilinio kodekso nuostatas dėl gyvenamosios patalpos nuomos.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite buto nuomos sutartį internetu – PDF", "description": "Buto ar namo nuomos sutartis. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

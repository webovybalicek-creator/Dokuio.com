import type { StrankaDokumentu } from '../typy';
import { subnuoma as sablona } from '../../sablony/lt/subnuomos-sutartis';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Subnuomos sutartis",
  nazevA: "subnuomos sutartį",
  katalog: {"popis": "Kambarys ar butas iš nuomininko.", "kategorie": "majoklis", "ilustrace": "protokol", "slova": ["subnuomos sutartis", "kambario subnuoma", "buto subnuoma", "subnuoma", "subnuomos sutartis pavyzdys"]},
  souvisejici: "majoklis",
  landing: {
  "title": "Subnuomos sutartis {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas gyvenamosios patalpos ar kambario subnuomos sutarties pavyzdys: nuomotojo sutikimas, terminas, mokestis žodžiais, užstatas. PDF ir Word.",
  "perex": "Kai nuomininkas toliau nuomoja kambarį ar visą butą. Tam reikia rašytinio nuomotojo ir kartu gyvenančių šeimos narių sutikimo.",
  "obsahPopis": "Subnuomos punktai.",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Nuomininkas ir subnuomininkas."
    },
    {
      "nazev": "Dalykas",
      "popis": "Kambarys ar visas butas, nuomotojo sutikimas."
    },
    {
      "nazev": "Terminas",
      "popis": "Ne ilgiau nei nuomos sutartis."
    },
    {
      "nazev": "Mokėjimai",
      "popis": "Subnuomos mokestis ir užstatas."
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
    "esate nuomininkas ir norite subnuomoti kambarį ar butą",
    "turite rašytinį nuomotojo sutikimą"
  ],
  "nehodiSe": [
    "esate savininkas – naudokite buto nuomos sutartį"
  ],
  "po": [
    {
      "nazev": "Sutikimas",
      "popis": "Pridėkite nuomotojo rašytinio sutikimo kopiją."
    }
  ],
  "faq": [
    {
      "q": "Ar reikia nuomotojo sutikimo?",
      "a": "Taip. Gyvenamąją patalpą subnuomoti galima tik gavus rašytinį nuomotojo ir kartu gyvenančių šeimos narių sutikimą (Civilinio kodekso 6.595 str.)."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Civilinio kodekso nuostatas dėl gyvenamosios patalpos subnuomos.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite subnuomos sutartį internetu – PDF", "description": "Kambario ar buto subnuomos sutartis. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { pretenzija as sablona } from '../../sablony/lt/pretenzija';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pretenzija dėl netinkamos kokybės prekės",
  nazevA: "pretenziją dėl netinkamos kokybės prekės",
  katalog: {"popis": "Prekės trūkumas, 2 metų atsakomybė.", "kategorie": "pirkumi", "ilustrace": "protokol", "slova": ["pretenzija", "pretenzija dėl prekės kokybės", "pretenzija pardavėjui", "reklamacija", "sugedusi prekė", "garantija 2 metai", "pretenzija del prekes"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Pretenzija dėl prekės kokybės {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas pretenzijos pardavėjui pavyzdys: prekė, trūkumas, pirkimo data ir reikalavimas – pataisyti, pakeisti, sumažinti kainą ar grąžinti pinigus. PDF ir Word.",
  "perex": "Kai pirkta prekė turi trūkumą. Pardavėjas atsako 2 metus nuo pristatymo; trūkumas, paaiškėjęs per metus, preziumuojamas buvęs iš pradžių.",
  "obsahPopis": "Trumpa pretenzija.",
  "obsah": [
    {
      "nazev": "Pretenzija",
      "popis": "Prekė, pirkimas, trūkumas ir jūsų reikalavimas."
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
    "Pasirinkite reikalavimą"
  ],
  "hodiSe": [
    "prekė sugedo arba neatitinka aprašymo",
    "nuo pirkimo praėjo mažiau nei 2 metai"
  ],
  "nehodiSe": [
    "norite tiesiog grąžinti pirkinį internetu – naudokite atsisakymo formą"
  ],
  "po": [
    {
      "nazev": "Priedai",
      "popis": "Pridėkite čekį ir trūkumo nuotraukas."
    },
    {
      "nazev": "VVTAT",
      "popis": "Jei pardavėjas atsisako, kreipkitės į Valstybinę vartotojų teisių apsaugos tarnybą."
    }
  ],
  "faq": [
    {
      "q": "Ko galiu reikalauti?",
      "a": "Pirmiausia – nemokamai pataisyti ar pakeisti prekę. Jei tai neįmanoma ar nepadaroma per protingą laiką – sumažinti kainą arba nutraukti sutartį ir grąžinti pinigus."
    },
    {
      "q": "Ar reikia įrodyti, kad trūkumas buvo iš pradžių?",
      "a": "Jei trūkumas paaiškėja per metus nuo pristatymo, laikoma, kad jis buvo jau tada – priešingai turi įrodyti pardavėjas."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Civilinio kodekso nuostatas dėl prekių kokybės ir Your Europe informaciją apie teisinę garantiją.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite pretenziją dėl prekės internetu – PDF", "description": "Pretenzija pardavėjui dėl prekės trūkumo. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

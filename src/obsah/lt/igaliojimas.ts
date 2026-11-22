import type { StrankaDokumentu } from '../typy';
import { igaliojimas as sablona } from '../../sablony/lt/igaliojimas';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Įgaliojimas",
  nazevA: "įgaliojimą",
  katalog: {"popis": "Kai veiksmus atlieka kitas asmuo.", "kategorie": "pirkumi", "ilustrace": "plnamoc", "slova": ["įgaliojimas", "įgaliojimo pavyzdys", "įgaliojimas fiziniam asmeniui", "įgaliojimas atsiimti siuntą", "įgaliojimas regitrai", "igaliojimas"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Įgaliojimas {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas fizinio asmens įgaliojimo pavyzdys: kas ką įgalioja, konkretūs veiksmai, perįgaliojimas ir galiojimo terminas. PDF ir Word.",
  "perex": "Kai kas nors kitas turi ką nors sutvarkyti jūsų vardu – atsiimti siuntą, pateikti prašymą, pasirašyti dokumentą.",
  "obsahPopis": "Trumpas įgaliojimas.",
  "obsah": [
    {
      "nazev": "Įgaliojimas",
      "popis": "Įgaliotojas, įgaliotinis, veiksmai, perįgaliojimas, terminas."
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
    "Galiojimo terminas"
  ],
  "hodiSe": [
    "kas nors turi ką nors atlikti jūsų vardu",
    "reikia paprasto rašytinio įgaliojimo"
  ],
  "nehodiSe": [
    "sandoriui reikia notarinės formos (pvz., nekilnojamasis turtas) – ir įgaliojimas turi būti notarinis"
  ],
  "po": [
    {
      "nazev": "Įteikite",
      "popis": "Įgaliotinis pateikia įgaliojimą kartu su savo asmens dokumentu."
    }
  ],
  "faq": [
    {
      "q": "Kada įgaliojimą turi patvirtinti notaras?",
      "a": "Kai įgaliojama sudaryti sandorius, kuriems būtina notarinė forma, pavyzdžiui, perleisti nekilnojamąjį turtą. Bankai ir kai kurios įstaigos gali reikalauti notaro patvirtinto įgaliojimo ar savos formos."
    },
    {
      "q": "Ar įgaliojimą galima atšaukti?",
      "a": "Taip, bet kada. Praneškite įgaliotiniui ir įstaigoms, kur įgaliojimas pateiktas."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Lietuvos Respublikos civilinio kodekso nuostatas.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite įgaliojimą internetu – PDF", "description": "Fizinio asmens įgaliojimas. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { zmluvaODielo as sablona } from '../../sablony/sk/zmluva-o-dielo';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Zmluva o dielo",
  nazevA: "zmluvu o dielo",
  katalog: {"popis": "Remeselník, rekonštrukcia, oprava – cena, termín a prevzatie.", "kategorie": "sluzby", "ilustrace": "protokol", "slova": ["zmluva o dielo", "remeselník", "rekonštrukcia", "oprava", "zhotoviteľ", "objednávateľ"]},
  souvisejici: "sluzby",
  landing: {
  "title": "Zmluva o dielo {rok} – vzor zadarmo pre remeselníkov (PDF, Word)",
  "description": "Vzor zmluvy o dielo podľa § 631 Občianskeho zákonníka zadarmo: predmet, termín, pevná cena alebo rozpočet, preddavok, odovzdanie a vady. PDF aj Word.",
  "perex": "Na rekonštrukciu, opravu alebo akúkoľvek zákazku od remeselníka. Jasne určí, čo sa urobí, dokedy, za koľko a ako sa dielo prevezme.",
  "obsahPopis": "Šesť článkov podľa § 631 a nasl. Občianskeho zákonníka.",
  "obsah": [
    {
      "nazev": "Zmluvné strany",
      "popis": "Objednávateľ a zhotoviteľ."
    },
    {
      "nazev": "Predmet zmluvy",
      "popis": "Čo sa urobí, kde a kto zabezpečí materiál."
    },
    {
      "nazev": "Čas plnenia",
      "popis": "Začatie a dokončenie."
    },
    {
      "nazev": "Cena a platba",
      "popis": "Pevná cena alebo rozpočet, preddavok, splatnosť."
    },
    {
      "nazev": "Odovzdanie diela a vady",
      "popis": "Preberací protokol, vady, záruka."
    },
    {
      "nazev": "Záverečné ustanovenia",
      "popis": "Písomné zmeny, dva rovnopisy."
    }
  ],
  "kroky": [
    {
      "nazev": "Opíšte dielo",
      "popis": "Rozsah, miesto, termíny."
    },
    {
      "nazev": "Dohodnite cenu",
      "popis": "Pevnú alebo podľa rozpočtu."
    },
    {
      "nazev": "Podpíšte",
      "popis": "Dva rovnopisy."
    }
  ],
  "online": [
    "Cena slovom automaticky",
    "Termíny do kalendára",
    "Vysvetlivky ku každému poľu",
    "Stiahnutie v PDF aj vo Worde"
  ],
  "hodiSe": [
    "objednávate rekonštrukciu kúpeľne, maľovanie, podlahy",
    "zadávate opravu alebo výrobu na zákazku",
    "ako remeselník chcete jasné podmienky"
  ],
  "nehodiSe": [
    "stavba domu – zmluvu nechajte pripraviť odborníkom",
    "kúpa hotovej veci – použite kúpnu zmluvu"
  ],
  "po": [
    {
      "nazev": "Preddavok",
      "popis": "Prevodom alebo oproti potvrdeniu."
    },
    {
      "nazev": "Zmeny písomne",
      "popis": "Viacpráce vždy písomne."
    },
    {
      "nazev": "Prevzatie",
      "popis": "Protokol so zistenými vadami."
    }
  ],
  "faq": [
    {
      "q": "Kedy sa platí cena?",
      "a": "Po vykonaní diela. Pri dlhšie trvajúcom alebo nákladnom diele možno žiadať preddavky (§ 634 a nasl. OZ)."
    },
    {
      "q": "Môže sa cena podľa rozpočtu zvýšiť?",
      "a": "Nie bez písomného súhlasu objednávateľa. Ak hrozí podstatné prekročenie rozpočtu, zhotoviteľ to musí bez odkladu písomne oznámiť."
    },
    {
      "q": "Aká je záruka pri stavbe?",
      "a": "Pri stavbe je záručná doba tri roky (§ 646 OZ)."
    },
    {
      "q": "Ukladáte moje údaje?",
      "a": "Nie. Dokument sa skladá priamo vo vašom prehliadači."
    }
  ],
  "zakony": "Vzor vychádza z § 631 – § 646 zákona č. 40/1964 Zb., Občiansky zákonník.",
  "souvisejiciPopis": "Ďalšie dokumenty k službám a platbám."
},
  vytvorit: {"title": "Vyplniť zmluvu o dielo online – PDF zadarmo", "description": "Sprievodca zmluvou o dielo s cenou a odovzdaním. Stiahnite PDF alebo Word zadarmo.", "podnadpis": "Zadarmo · PDF aj Word · zaberie asi 4 minúty"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { zmluvaOPozicke as sablona } from '../../sablony/sk/zmluva-o-pozicke';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Zmluva o pôžičke",
  nazevA: "zmluvu o pôžičke",
  katalog: {
    "popis": "Pôžička peňazí medzi známymi, aj so splátkami.",
    "kategorie": "penize",
    "ilustrace": "pujcka",
    "slova": [
      "pôžička",
      "požičať peniaze",
      "splátky",
      "loan",
      "úver"
    ]
  },
  souvisejici: 'penize',
  landing: {
    "title": "Zmluva o pôžičke {rok} – vzor PDF zadarmo so splátkovým kalendárom",
    "description": "Zmluva o pôžičke peňazí medzi známymi zadarmo: suma, úrok, vrátenie naraz alebo v splátkach so splátkovým kalendárom. PDF aj Word.",
    "perex": "Pôžička medzi známymi čierne na bielom. Naraz alebo v splátkach – splátkový kalendár pripojíme automaticky.",
    "obsahPopis": "Päť článkov podľa § 657 a § 658 Občianskeho zákonníka.",
    "obsah": [
      {
        "nazev": "Zmluvné strany",
        "popis": "Veriteľ a dlžník."
      },
      {
        "nazev": "Predmet zmluvy",
        "popis": "Suma a odovzdanie peňazí."
      },
      {
        "nazev": "Úroky",
        "popis": "Bez úroku alebo s úrokom."
      },
      {
        "nazev": "Vrátenie",
        "popis": "Naraz alebo v splátkach."
      },
      {
        "nazev": "Záverečné ustanovenia",
        "popis": "Rovnopisy a platnosť."
      }
    ],
    "kroky": [
      {
        "nazev": "Zadajte sumu",
        "popis": "A spôsob odovzdania."
      },
      {
        "nazev": "Dohodnite vrátenie",
        "popis": "Naraz alebo v splátkach."
      },
      {
        "nazev": "Podpíšte",
        "popis": "Obaja, dva výtlačky."
      }
    ],
    "online": [
      "Splátkový kalendár ako príloha",
      "Pripomienky splátok do kalendára",
      "Suma slovom automaticky",
      "Stiahnutie v PDF aj vo Worde"
    ],
    "hodiSe": [
      "požičiavate peniaze rodine alebo známym",
      "chcete splátky s jasnými termínmi"
    ],
    "nehodiSe": [
      "podnikateľský úver alebo spotrebiteľský úver – iné pravidlá",
      "dlh už existuje – použite uznanie dlhu"
    ],
    "po": [
      {
        "nazev": "Odovzdanie peňazí",
        "popis": "Prevodom alebo s potvrdením o prevzatí."
      },
      {
        "nazev": "Splátky",
        "popis": "Pridajte si ich do kalendára."
      }
    ],
    "faq": [
      {
        "q": "Kedy zmluva o pôžičke vzniká?",
        "a": "Až odovzdaním peňazí dlžníkovi (§ 657 OZ). Preto je dôležitý výpis z účtu alebo potvrdenie."
      },
      {
        "q": "Môžem si účtovať úrok?",
        "a": "Áno, ak sa naň dohodnete. Neprimerane vysoký úrok môže byť v rozpore s dobrými mravmi."
      },
      {
        "q": "Ukladáte moje údaje?",
        "a": "Nie. Zmluva sa skladá priamo vo vašom prehliadači."
      }
    ],
    "zakony": "Vzor vychádza zo zákona č. 40/1964 Zb., Občiansky zákonník (§ 657 a § 658).",
    "souvisejiciPopis": "Ďalšie dokumenty k peniazom, tiež zadarmo."
  },
  vytvorit: {
    "title": "Vyplniť zmluvu o pôžičke online – PDF zadarmo",
    "description": "Zmluva o pôžičke so splátkovým kalendárom podľa slovenského práva. PDF alebo Word zadarmo.",
    "podnadpis": "Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 3 minúty"
  },
};

export default stranka;

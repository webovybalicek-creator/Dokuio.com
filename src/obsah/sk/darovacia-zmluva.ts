import type { StrankaDokumentu } from '../typy';
import { darovaciaZmluva as sablona } from '../../sablony/sk/darovacia-zmluva';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Darovacia zmluva",
  nazevA: "darovaciu zmluvu",
  katalog: {
    "popis": "Darovanie peňazí, auta alebo hnuteľnej veci.",
    "kategorie": "penize",
    "ilustrace": "dar",
    "slova": [
      "dar",
      "darovanie",
      "peniaze",
      "darovať auto",
      "darovacia"
    ]
  },
  souvisejici: 'penize',
  landing: {
    "title": "Darovacia zmluva {rok} – vzor PDF zadarmo (peniaze aj vec)",
    "description": "Darovacia zmluva zadarmo na peniaze alebo hnuteľnú vec (napr. auto) podľa § 628 Občianskeho zákonníka. PDF aj Word.",
    "perex": "Darovanie peňazí alebo hnuteľnej veci v rodine či medzi známymi. Pre nehnuteľnosti nie je určená.",
    "obsahPopis": "Štyri články podľa § 628 až § 630 Občianskeho zákonníka.",
    "obsah": [
      {
        "nazev": "Zmluvné strany",
        "popis": "Darca a obdarovaný."
      },
      {
        "nazev": "Predmet daru",
        "popis": "Peniaze alebo vec."
      },
      {
        "nazev": "Odovzdanie",
        "popis": "Hneď alebo do dátumu."
      },
      {
        "nazev": "Záverečné ustanovenia",
        "popis": "Rovnopisy a platnosť."
      }
    ],
    "kroky": [
      {
        "nazev": "Vyberte dar",
        "popis": "Peniaze alebo vec."
      },
      {
        "nazev": "Dohodnite odovzdanie",
        "popis": "Hneď alebo neskôr."
      },
      {
        "nazev": "Podpíšte",
        "popis": "Obaja."
      }
    ],
    "online": [
      "Suma slovom automaticky",
      "Podpis na obrazovke",
      "Stiahnutie v PDF aj vo Worde"
    ],
    "hodiSe": [
      "darujete peniaze deťom alebo rodičom",
      "darujete auto v rodine",
      "chcete mať dar písomne"
    ],
    "nehodiSe": [
      "darovanie bytu, domu alebo pozemku – treba vklad do katastra"
    ],
    "po": [
      {
        "nazev": "Auto",
        "popis": "Zmena držby do 30 dní."
      },
      {
        "nazev": "Peniaze",
        "popis": "Prevodom s poznámkou „dar“."
      }
    ],
    "faq": [
      {
        "q": "Musí byť darovacia zmluva písomná?",
        "a": "Ak sa hnuteľná vec pri darovaní neodovzdáva, zmluva musí byť písomná (§ 628 OZ). Písomná forma sa odporúča vždy."
      },
      {
        "q": "Dá sa dar vziať späť?",
        "a": "Darca sa môže domáhať vrátenia, ak sa obdarovaný voči nemu alebo jeho rodine správa tak, že hrubo porušuje dobré mravy (§ 630 OZ)."
      },
      {
        "q": "Ukladáte moje údaje?",
        "a": "Nie. Zmluva sa skladá priamo vo vašom prehliadači."
      }
    ],
    "zakony": "Vzor vychádza zo zákona č. 40/1964 Zb., Občiansky zákonník (§ 628 až § 630).",
    "souvisejiciPopis": "Ďalšie dokumenty k peniazom, tiež zadarmo."
  },
  vytvorit: {
    "title": "Vyplniť darovaciu zmluvu online – PDF zadarmo",
    "description": "Darovacia zmluva na peniaze alebo hnuteľnú vec. PDF alebo Word zadarmo.",
    "podnadpis": "Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 3 minúty"
  },
};

export default stranka;

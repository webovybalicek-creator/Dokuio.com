import type { StrankaDokumentu } from '../typy';
import { odstupenieOdZmluvy as sablona } from '../../sablony/sk/odstupenie-od-zmluvy';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Odstúpenie od zmluvy",
  nazevA: "odstúpenie od zmluvy",
  katalog: {
  "popis": "Vrátenie tovaru z e-shopu do 14 dní.",
  "kategorie": "bezne",
  "ilustrace": "protokol",
  "slova": [
    "odstúpenie od zmluvy",
    "vrátenie tovaru",
    "e-shop",
    "14 dní",
    "formulár"
  ]
},
  souvisejici: "bezne",
  landing: {
  "title": "Odstúpenie od zmluvy {rok} – formulár zadarmo v PDF",
  "description": "Bezplatný formulár na odstúpenie od zmluvy z e-shopu do 14 dní podľa zákona č. 108/2024 Z. z. PDF aj Word.",
  "perex": "Kúpili ste online a tovar nechcete? Do 14 dní od prevzatia môžete odstúpiť bez udania dôvodu.",
  "obsahPopis": "Text podľa vzorového formulára zo zákona.",
  "obsah": [
    {
      "nazev": "Predávajúci",
      "popis": "Komu odstúpenie posielate."
    },
    {
      "nazev": "Nákup",
      "popis": "Tovar, objednávka, dátumy."
    },
    {
      "nazev": "Vaše údaje",
      "popis": "Meno, adresa, IBAN."
    }
  ],
  "kroky": [
    {
      "nazev": "Vyplniť",
      "popis": "Údaje z potvrdenia objednávky."
    },
    {
      "nazev": "Odoslať",
      "popis": "E-mail, formulár v e-shope alebo pošta."
    },
    {
      "nazev": "Vrátiť tovar",
      "popis": "Do 14 dní."
    }
  ],
  "online": [
    "Vyplnenie s vysvetlením každého poľa",
    "Podpis na obrazovke",
    "Stiahnutie v PDF aj Worde, alebo poslanie na e-mail",
    "Pripomienka vrátenia peňazí v kalendári"
  ],
  "hodiSe": [
    "Nákup v e-shope alebo cez telefón",
    "Zmluva podpísaná u vás doma"
  ],
  "nehodiSe": [
    "Nákup v kamennej predajni",
    "Kúpa od súkromnej osoby"
  ],
  "po": [
    {
      "nazev": "Peniaze",
      "popis": "Predávajúci ich vráti do 14 dní."
    }
  ],
  "faq": [
    {
      "q": "Musím uviesť dôvod?",
      "a": "Nie."
    },
    {
      "q": "Dokedy môžem odstúpiť?",
      "a": "14 dní od prevzatia tovaru; stačí odstúpenie v lehote odoslať."
    },
    {
      "q": "Ukladáte moje údaje?",
      "a": "Nie. Dokument vzniká iba vo vašom prehliadači."
    }
  ],
  "zakony": "Vzor vychádza z § 19 a § 20 zákona č. 108/2024 Z. z. o ochrane spotrebiteľa.",
  "souvisejiciPopis": "Ďalšie dokumenty, tiež zadarmo."
},
  vytvorit: {
  "title": "Odstúpenie od zmluvy online – PDF zadarmo",
  "description": "Formulár na odstúpenie od zmluvy z e-shopu. PDF alebo Word zadarmo.",
  "podnadpis": "Zadarmo · výsledok v PDF aj Worde · trvá asi 1 minútu"
},
};

export default stranka;

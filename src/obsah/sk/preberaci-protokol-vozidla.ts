import type { StrankaDokumentu } from '../typy';
import { preberaciProtokolVozidla as sablona } from '../../sablony/sk/preberaci-protokol-vozidla';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Preberací protokol k vozidlu",
  nazevA: "preberací protokol k vozidlu",
  katalog: {
    "popis": "Stav vozidla, kľúče a doklady pri odovzdaní.",
    "kategorie": "auto",
    "ilustrace": "protokol",
    "slova": [
      "odovzdávací protokol",
      "odovzdanie auta",
      "protokol",
      "preberací protokol"
    ]
  },
  souvisejici: 'auto',
  landing: {
    "title": "Preberací protokol k vozidlu {rok} – vzor PDF zadarmo",
    "description": "Odovzdávací a preberací protokol k autu zadarmo: stav km a paliva, poškodenia, kľúče, doklady, čas odovzdania. PDF aj Word.",
    "perex": "Presný záznam, v akom stave a kedy auto odovzdávate. Chráni pred spormi o poškodenia, kilometre aj pokuty z kamier.",
    "obsahPopis": "Päť krátkych častí, predvyplní sa z kúpnej zmluvy.",
    "obsah": [
      {
        "nazev": "Strany",
        "popis": "Odovzdávajúci a preberajúci."
      },
      {
        "nazev": "Vozidlo",
        "popis": "Značka, VIN, EČV a dôvod odovzdania."
      },
      {
        "nazev": "Stav",
        "popis": "Tachometer, palivo, poškodenia."
      },
      {
        "nazev": "Kľúče a výbava",
        "popis": "Doklady, kľúče, povinná výbava."
      },
      {
        "nazev": "Prevzatie",
        "popis": "Dátum a čas odovzdania."
      }
    ],
    "kroky": [
      {
        "nazev": "Predvyplňte",
        "popis": "Z kúpnej zmluvy jedným klikom."
      },
      {
        "nazev": "Zapíšte stav",
        "popis": "Km, palivo, poškodenia."
      },
      {
        "nazev": "Podpíšte",
        "popis": "Pri odovzdaní, obaja."
      }
    ],
    "online": [
      "Predvyplnenie z kúpnej zmluvy",
      "Podpis na obrazovke",
      "Stiahnutie v PDF aj vo Worde"
    ],
    "hodiSe": [
      "predávate alebo kupujete auto",
      "požičiavate auto známemu",
      "vraciate požičané vozidlo"
    ],
    "nehodiSe": [
      "požičovňa alebo lízing – majú vlastné protokoly"
    ],
    "po": [
      {
        "nazev": "Fotky",
        "popis": "Odfoťte vozidlo a tachometer."
      },
      {
        "nazev": "Zmena držby",
        "popis": "Pri predaji do 30 dní."
      },
      {
        "nazev": "Poistenie",
        "popis": "Nový držiteľ má mať PZP od prevzatia."
      }
    ],
    "faq": [
      {
        "q": "Je protokol povinný?",
        "a": "Nie, ale je to najlepší dôkaz o stave vozidla a čase odovzdania."
      },
      {
        "q": "Prečo zapisovať čas?",
        "a": "Pri pokute z kamery alebo nehode je jasné, kto vozidlo práve používal."
      },
      {
        "q": "Ukladáte moje údaje?",
        "a": "Nie. Protokol sa skladá priamo vo vašom prehliadači."
      }
    ],
    "zakony": "Vzor vychádza zo zákona č. 40/1964 Zb., Občiansky zákonník.",
    "souvisejiciPopis": "Ďalšie dokumenty k predaju auta, tiež zadarmo."
  },
  vytvorit: {
    "title": "Vyplniť preberací protokol k vozidlu online – PDF zadarmo",
    "description": "Preberací protokol k autu: stav km, palivo, poškodenia, kľúče, doklady. PDF alebo Word zadarmo.",
    "podnadpis": "Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 3 minúty"
  },
};

export default stranka;

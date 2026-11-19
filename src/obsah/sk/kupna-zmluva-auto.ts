import type { StrankaDokumentu } from '../typy';
import { kupnaZmluvaAuto as sablona } from '../../sablony/sk/kupna-zmluva-auto';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kúpna zmluva na auto",
  nazevA: "kúpnu zmluvu na auto",
  katalog: {
    "popis": "Predaj jazdeného auta medzi súkromnými osobami.",
    "kategorie": "auto",
    "ilustrace": "auto",
    "slova": [
      "kúpno-predajná zmluva",
      "predaj auta",
      "kúpa auta",
      "ojazdené auto",
      "vozidlo",
      "car",
      "auto"
    ]
  },
  souvisejici: 'auto',
  landing: {
    "title": "Kúpna zmluva na auto {rok} – vzor PDF zadarmo",
    "description": "Kúpna zmluva na auto zadarmo podľa slovenského práva: VIN, stav km, vady, platba, zmena držby do 30 dní. Vyplňte online, stiahnite PDF alebo Word.",
    "perex": "Predaj jazdeného auta medzi súkromnými osobami podľa Občianskeho zákonníka. Vrátane stavu tachometra, vád a toho, kto vybaví prepis.",
    "obsahPopis": "Šesť článkov podľa § 588 a nasl. Občianskeho zákonníka.",
    "obsah": [
      {
        "nazev": "Zmluvné strany",
        "popis": "Predávajúci a kupujúci."
      },
      {
        "nazev": "Predmet kúpy",
        "popis": "Vozidlo, VIN, EČV, osvedčenie o evidencii."
      },
      {
        "nazev": "Stav vozidla",
        "popis": "Kilometre, vady, havárie."
      },
      {
        "nazev": "Kúpna cena a platba",
        "popis": "Suma, spôsob platby, výhrada vlastníctva."
      },
      {
        "nazev": "Odovzdanie a zmena držby",
        "popis": "Kľúče, doklady, PZP, kto vybaví prepis."
      },
      {
        "nazev": "Záverečné ustanovenia",
        "popis": "Rovnopisy a platnosť."
      }
    ],
    "kroky": [
      {
        "nazev": "Vyplňte údaje",
        "popis": "Strany, vozidlo, cena."
      },
      {
        "nazev": "Skontrolujte text",
        "popis": "Každý odsek môžete upraviť."
      },
      {
        "nazev": "Stiahnite a podpíšte",
        "popis": "PDF alebo Word, dva výtlačky."
      }
    ],
    "online": [
      "Suma slovom automaticky",
      "Kontrola VIN",
      "Nadväzujúci protokol a splnomocnenie predvyplníme",
      "Stiahnutie v PDF aj vo Worde"
    ],
    "hodiSe": [
      "predávate alebo kupujete jazdené auto od súkromnej osoby",
      "chcete mať jasne zapísané kilometre a vady",
      "platíte v hotovosti alebo prevodom"
    ],
    "nehodiSe": [
      "kupujete od autobazáru – ten má vlastnú zmluvu a spotrebiteľské práva",
      "auto je na lízing – najprv ho treba vyplatiť",
      "darujete auto v rodine – použite darovaciu zmluvu"
    ],
    "po": [
      {
        "nazev": "Odovzdanie",
        "popis": "Preberací protokol so stavom km a výbavou."
      },
      {
        "nazev": "Zmena držby",
        "popis": "Do 30 dní na dopravnom inšpektoráte alebo elektronicky."
      },
      {
        "nazev": "Poistenie",
        "popis": "Nový držiteľ uzavrie PZP najneskôr pri prevzatí."
      }
    ],
    "faq": [
      {
        "q": "Do kedy treba auto prepísať?",
        "a": "Žiadosť o zmenu držby vozidla treba podať do 30 dní. Podáva ju pôvodný držiteľ, prípadne niekto na základe úradne overeného splnomocnenia."
      },
      {
        "q": "Môžem zaplatiť v hotovosti?",
        "a": "Medzi dvoma súkromnými osobami nepodnikateľmi do 15 000 €. Ak je jednou stranou podnikateľ alebo firma, limit je 5 000 €."
      },
      {
        "q": "Kedy sa kupujúci stane vlastníkom?",
        "a": "V tejto zmluve až úplným zaplatením kúpnej ceny (výhrada vlastníctva podľa § 601 Občianskeho zákonníka)."
      },
      {
        "q": "Ukladáte moje údaje?",
        "a": "Nie. Zmluva sa skladá priamo vo vašom prehliadači."
      }
    ],
    "zakony": "Vzor vychádza zo zákona č. 40/1964 Zb., Občiansky zákonník (§ 588 a nasl., § 601) a zo zákona č. 8/2009 Z. z. o cestnej premávke.",
    "souvisejiciPopis": "Ďalšie dokumenty k predaju auta, tiež zadarmo."
  },
  vytvorit: {
    "title": "Vyplniť kúpnu zmluvu na auto online – PDF zadarmo",
    "description": "Sprievodca kúpnou zmluvou na auto podľa slovenského práva. PDF alebo Word zadarmo.",
    "podnadpis": "Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 5 minút"
  },
};

export default stranka;

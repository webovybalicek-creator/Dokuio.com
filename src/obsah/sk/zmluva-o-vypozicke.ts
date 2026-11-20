import type { StrankaDokumentu } from '../typy';
import { zmluvaOVypozicke as sablona } from '../../sablony/sk/zmluva-o-vypozicke';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Zmluva o výpožičke",
  nazevA: "zmluvu o výpožičke",
  katalog: {"popis": "Bezplatné požičanie veci – príves, náradie, auto.", "kategorie": "bezne", "ilustrace": "protokol", "slova": ["zmluva o výpožičke", "výpožička", "požičanie veci", "požičiavateľ", "vypožičiavateľ"]},
  souvisejici: "bezne",
  landing: {
  "title": "Zmluva o výpožičke {rok} – vzor zadarmo (PDF, Word)",
  "description": "Vzor zmluvy o výpožičke podľa § 659 Občianskeho zákonníka zadarmo: bezplatné požičanie veci, stav, doba a vrátenie. Vyplňte online, stiahnite PDF alebo Word.",
  "perex": "Požičiavate príves, náradie alebo auto zadarmo? Zmluva o výpožičke zachytí, čo ste požičali, v akom stave a kedy sa to vráti.",
  "obsahPopis": "Päť článkov podľa § 659 a nasl. Občianskeho zákonníka.",
  "obsah": [
    {
      "nazev": "Zmluvné strany",
      "popis": "Požičiavateľ a vypožičiavateľ."
    },
    {
      "nazev": "Predmet výpožičky",
      "popis": "Vec, stav, hodnota, účel."
    },
    {
      "nazev": "Doba a vrátenie",
      "popis": "Do určitého dňa alebo do splnenia účelu, predčasné vrátenie."
    },
    {
      "nazev": "Užívanie veci",
      "popis": "Riadne užívanie, zákaz požičať ďalej, náklady."
    },
    {
      "nazev": "Záverečné ustanovenia",
      "popis": "Písomné zmeny, dva rovnopisy."
    }
  ],
  "kroky": [
    {
      "nazev": "Opíšte vec",
      "popis": "Čo požičiavate a v akom stave."
    },
    {
      "nazev": "Nastavte dobu",
      "popis": "Dokedy alebo na aký účel."
    },
    {
      "nazev": "Podpíšte",
      "popis": "Dva rovnopisy."
    }
  ],
  "online": [
    "Pripomienka vrátenia do kalendára",
    "Vysvetlivky ku každému poľu",
    "Stiahnutie v PDF aj vo Worde",
    "Prázdny vzor na ručné vyplnenie"
  ],
  "hodiSe": [
    "požičiavate známemu príves, náradie alebo auto",
    "chcete mať doklad o stave veci pri odovzdaní"
  ],
  "nehodiSe": [
    "za požičanie chcete peniaze – to je nájom",
    "požičiavate peniaze – použite zmluvu o pôžičke"
  ],
  "po": [
    {
      "nazev": "Odovzdanie",
      "popis": "Prezrite vec a doplňte vady."
    },
    {
      "nazev": "Vrátenie",
      "popis": "Pripomienka v kalendári."
    }
  ],
  "faq": [
    {
      "q": "Môže požičiavateľ chcieť vec späť skôr?",
      "a": "Áno, ak vypožičiavateľ vec neužíva riadne alebo ju užíva v rozpore s účelom (§ 662 OZ)."
    },
    {
      "q": "Smie vypožičiavateľ požičať vec ďalej?",
      "a": "Len ak je to dohodnuté (§ 661 OZ)."
    },
    {
      "q": "Ukladáte moje údaje?",
      "a": "Nie. Dokument sa skladá priamo vo vašom prehliadači."
    }
  ],
  "zakony": "Vzor vychádza z § 659 – § 662 zákona č. 40/1964 Zb., Občiansky zákonník.",
  "souvisejiciPopis": "Ďalšie bežné dokumenty, tiež zadarmo."
},
  vytvorit: {"title": "Vyplniť zmluvu o výpožičke online – PDF zadarmo", "description": "Sprievodca zmluvou o výpožičke. Stiahnite PDF alebo Word zadarmo.", "podnadpis": "Zadarmo · PDF aj Word · zaberie asi 2 minúty"},
};

export default stranka;

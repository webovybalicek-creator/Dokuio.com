import type { StrankaDokumentu } from '../typy';
import { dohodaOSkonceniNajmuSK as sablona } from '../../sablony/sk/dohoda-o-skonceni-najmu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Dohoda o skončení nájmu",
  nazevA: "dohodu o skončení nájmu",
  katalog: {"popis": "Nájom bytu končí dohodou – termín, odovzdanie, zábezpeka.", "kategorie": "byvanie", "ilustrace": "protokol", "slova": ["dohoda o skončení nájmu", "ukončenie nájmu dohodou", "nájom bytu", "zábezpeka", "odovzdanie bytu"]},
  souvisejici: "byvanie",
  landing: {
  "title": "Dohoda o skončení nájmu {rok} – vzor zadarmo (PDF, Word)",
  "description": "Vzor písomnej dohody o skončení nájmu bytu podľa § 710 Občianskeho zákonníka zadarmo: termín, odovzdanie bytu, vrátenie zábezpeky. PDF aj Word.",
  "perex": "Chcete nájom ukončiť skôr alebo bez výpovednej lehoty? Stačí písomná dohoda prenajímateľa a nájomcu s termínom skončenia a vrátením zábezpeky.",
  "obsahPopis": "Tri časti podľa § 710 ods. 1 Občianskeho zákonníka.",
  "obsah": [
    {
      "nazev": "Zmluvné strany",
      "popis": "Prenajímateľ a nájomca."
    },
    {
      "nazev": "Skončenie nájmu",
      "popis": "Deň skončenia, odovzdanie bytu, nájomné do konca."
    },
    {
      "nazev": "Zábezpeka a ďalšie dojednania",
      "popis": "Kedy a kam sa vráti zábezpeka."
    }
  ],
  "kroky": [
    {
      "nazev": "Vyplňte strany",
      "popis": "Podľa nájomnej zmluvy."
    },
    {
      "nazev": "Dohodnite termín",
      "popis": "Koniec nájmu a odovzdanie."
    },
    {
      "nazev": "Podpíšte",
      "popis": "Obe strany, dva rovnopisy."
    }
  ],
  "online": [
    "Termíny do kalendára",
    "Vysvetlivky ku každému poľu",
    "Stiahnutie v PDF aj vo Worde",
    "Prázdny vzor na ručné vyplnenie"
  ],
  "hodiSe": [
    "nájomca sa chce odsťahovať skôr",
    "obe strany chcú ukončiť nájom bez výpovednej lehoty"
  ],
  "nehodiSe": [
    "druhá strana s ukončením nesúhlasí – použite výpoveď"
  ],
  "po": [
    {
      "nazev": "Odovzdanie bytu",
      "popis": "Preberací protokol so stavmi meračov."
    },
    {
      "nazev": "Zábezpeka",
      "popis": "Pripomienka vrátenia v kalendári."
    }
  ],
  "faq": [
    {
      "q": "Musí byť dohoda písomná?",
      "a": "Áno. Nájom bytu zaniká písomnou dohodou medzi prenajímateľom a nájomcom alebo písomnou výpoveďou (§ 710 ods. 1 OZ)."
    },
    {
      "q": "Ukladáte moje údaje?",
      "a": "Nie. Dokument sa skladá priamo vo vašom prehliadači."
    }
  ],
  "zakony": "Vzor vychádza z § 710 ods. 1 zákona č. 40/1964 Zb., Občiansky zákonník.",
  "souvisejiciPopis": "Ďalšie dokumenty k bývaniu, tiež zadarmo."
},
  vytvorit: {"title": "Vyplniť dohodu o skončení nájmu online – PDF zadarmo", "description": "Sprievodca dohodou o skončení nájmu. Stiahnite PDF alebo Word zadarmo.", "podnadpis": "Zadarmo · PDF aj Word · zaberie asi 2 minúty"},
};

export default stranka;

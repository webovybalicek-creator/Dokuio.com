import type { StrankaDokumentu } from '../typy';
import { splnomocnenie as sablona } from '../../sablony/sk/splnomocnenie';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Splnomocnenie",
  nazevA: "splnomocnenie",
  katalog: {
    "popis": "Poverenie niekoho, aby za vás niečo vybavil.",
    "kategorie": "zastoupeni",
    "ilustrace": "plnamoc",
    "slova": [
      "plná moc",
      "zastupovanie",
      "úrad",
      "power of attorney",
      "pošta"
    ]
  },
  souvisejici: 'penize',
  landing: {
    "title": "Splnomocnenie {rok} – vzor PDF zadarmo",
    "description": "Všeobecné splnomocnenie zadarmo: na poštu, úrad alebo inú vec, s presne vymedzeným rozsahom. PDF aj Word.",
    "perex": "Keď za vás niečo vybaví niekto iný – vyzdvihnutie zásielky, úrad, podpis. Vždy s presne vymedzeným rozsahom.",
    "obsahPopis": "Krátke splnomocnenie podľa § 31 a nasl. Občianskeho zákonníka.",
    "obsah": [
      {
        "nazev": "Splnomocnenie",
        "popis": "Kto, koho, na čo a do kedy."
      }
    ],
    "kroky": [
      {
        "nazev": "Vyplňte",
        "popis": "Osoby a rozsah."
      },
      {
        "nazev": "Podpíšte",
        "popis": "Splnomocniteľ podpíše, splnomocnenec prijme."
      },
      {
        "nazev": "Overte, ak treba",
        "popis": "Niektoré úrady chcú overený podpis."
      }
    ],
    "online": [
      "Presný rozsah",
      "Podpis na obrazovke",
      "Stiahnutie v PDF aj vo Worde"
    ],
    "hodiSe": [
      "vyzdvihnutie zásielky",
      "jednoduchý úkon na úrade",
      "zastupovanie pri konkrétnej veci"
    ],
    "nehodiSe": [
      "prepis vozidla – použite splnomocnenie na prepis vozidla",
      "nehnuteľnosti a súdy – poraďte sa s advokátom"
    ],
    "po": [
      {
        "nazev": "Overenie",
        "popis": "Ak to úrad vyžaduje, nechajte podpis úradne overiť."
      }
    ],
    "faq": [
      {
        "q": "Musí byť podpis overený?",
        "a": "Nie vždy. Závisí to od úradu alebo inštitúcie – pri prepise vozidla, katastri či banke sa overenie spravidla vyžaduje."
      },
      {
        "q": "Ukladáte moje údaje?",
        "a": "Nie. Splnomocnenie sa skladá priamo vo vašom prehliadači."
      }
    ],
    "zakony": "Vzor vychádza zo zákona č. 40/1964 Zb., Občiansky zákonník (§ 31 až § 33b).",
    "souvisejiciPopis": "Ďalšie dokumenty, tiež zadarmo."
  },
  vytvorit: {
    "title": "Vyplniť splnomocnenie online – PDF zadarmo",
    "description": "Všeobecné splnomocnenie s vymedzeným rozsahom. PDF alebo Word zadarmo.",
    "podnadpis": "Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 2 minúty"
  },
};

export default stranka;

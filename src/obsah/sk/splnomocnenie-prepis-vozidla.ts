import type { StrankaDokumentu } from '../typy';
import { splnomocneniePrepisVozidla as sablona } from '../../sablony/sk/splnomocnenie-prepis-vozidla';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Splnomocnenie na prepis vozidla",
  nazevA: "splnomocnenie na prepis vozidla",
  katalog: {
    "popis": "Keď prepis na dopravnom inšpektoráte vybavuje niekto iný.",
    "kategorie": "zastoupeni",
    "ilustrace": "plnamoc",
    "slova": [
      "prepis auta",
      "dopravný inšpektorát",
      "plná moc",
      "splnomocnenie",
      "zmena držby"
    ]
  },
  souvisejici: 'auto',
  landing: {
    "title": "Splnomocnenie na prepis auta {rok} – vzor PDF zadarmo",
    "description": "Splnomocnenie na zmenu držby vozidla zadarmo: keď na dopravný inšpektorát ide niekto iný. Podpis musí byť úradne overený. PDF aj Word.",
    "perex": "Splnomocnenie na prepis auta využijete, keď na dopravný inšpektorát nemôžete ísť osobne. Podpis splnomocniteľa musí byť úradne overený.",
    "obsahPopis": "Krátke splnomocnenie s presne vymedzeným rozsahom.",
    "obsah": [
      {
        "nazev": "Splnomocniteľ a splnomocnenec",
        "popis": "Kto koho poveruje."
      },
      {
        "nazev": "Rozsah",
        "popis": "Zmena držby konkrétneho vozidla, doklady, tabuľky, poplatky."
      }
    ],
    "kroky": [
      {
        "nazev": "Vyplňte",
        "popis": "Osoby a vozidlo."
      },
      {
        "nazev": "Overte podpis",
        "popis": "Matrika, notár alebo pošta."
      },
      {
        "nazev": "Odovzdajte",
        "popis": "Splnomocnencovi so žiadosťou."
      }
    ],
    "online": [
      "Predvyplnenie z kúpnej zmluvy",
      "Presný rozsah pre dopravný inšpektorát",
      "Stiahnutie v PDF aj vo Worde"
    ],
    "hodiSe": [
      "predávajúci nemôže ísť na dopravný inšpektorát",
      "prepis vybavuje kupujúci za predávajúceho"
    ],
    "nehodiSe": [
      "vybavujete elektronicky so svojím eID – splnomocnenie nemusí byť treba"
    ],
    "poNadpis": "Pred podaním.",
    "po": [
      {
        "nazev": "Úradné overenie",
        "popis": "Podpisujte až pred osobou, ktorá podpis overuje."
      },
      {
        "nazev": "Lehota",
        "popis": "Žiadosť o zmenu držby do 30 dní."
      }
    ],
    "faq": [
      {
        "q": "Musí byť podpis overený?",
        "a": "Áno. Podľa slovensko.sk sa k žiadosti prikladá úradne overené splnomocnenie (listinné alebo elektronické)."
      },
      {
        "q": "Kde si podpis overím?",
        "a": "Na matrike obecného úradu, u notára alebo na vybraných pobočkách Slovenskej pošty."
      },
      {
        "q": "Ukladáte moje údaje?",
        "a": "Nie. Splnomocnenie sa skladá priamo vo vašom prehliadači."
      }
    ],
    "zakony": "Vzor vychádza zo zákona č. 40/1964 Zb., Občiansky zákonník (§ 31 a nasl.) a zo zákona č. 8/2009 Z. z. o cestnej premávke.",
    "souvisejiciPopis": "Ďalšie dokumenty k predaju auta, tiež zadarmo."
  },
  vytvorit: {
    "title": "Vyplniť splnomocnenie na prepis vozidla online – PDF zadarmo",
    "description": "Splnomocnenie na zmenu držby vozidla pre dopravný inšpektorát. PDF alebo Word zadarmo.",
    "podnadpis": "Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 2 minúty"
  },
};

export default stranka;

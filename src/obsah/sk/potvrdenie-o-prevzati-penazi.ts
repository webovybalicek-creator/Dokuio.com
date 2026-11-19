import type { StrankaDokumentu } from '../typy';
import { potvrdenieOPrevzatiPenazi as sablona } from '../../sablony/sk/potvrdenie-o-prevzati-penazi';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Potvrdenie o prevzatí peňazí",
  nazevA: "potvrdenie o prevzatí peňazí",
  katalog: {
    "popis": "Doklad o odovzdaní hotovosti.",
    "kategorie": "penize",
    "ilustrace": "penize",
    "slova": [
      "príjmový doklad",
      "hotovosť",
      "potvrdenie",
      "receipt",
      "kaucia",
      "záloha"
    ]
  },
  souvisejici: 'penize',
  landing: {
    "title": "Potvrdenie o prevzatí peňazí {rok} – vzor PDF zadarmo",
    "description": "Potvrdenie o prevzatí hotovosti zadarmo: suma číslom aj slovom, účel platby (kúpna cena, pôžička, záloha, kaucia). PDF aj Word.",
    "perex": "Jednoduchý doklad, že ste peniaze v hotovosti odovzdali alebo prevzali. Suma slovom sa doplní sama.",
    "obsahPopis": "Krátke potvrdenie s účelom platby.",
    "obsah": [
      {
        "nazev": "Potvrdenie",
        "popis": "Kto, komu, koľko a za čo."
      }
    ],
    "kroky": [
      {
        "nazev": "Vyplňte",
        "popis": "Mená, suma, účel."
      },
      {
        "nazev": "Prepočítajte",
        "popis": "Peniaze pred podpisom."
      },
      {
        "nazev": "Podpíšte",
        "popis": "Každý si nechá kópiu."
      }
    ],
    "online": [
      "Suma slovom automaticky",
      "Podpis na obrazovke",
      "Stiahnutie v PDF aj vo Worde"
    ],
    "hodiSe": [
      "platíte hotovosťou za auto alebo vec",
      "odovzdávate pôžičku alebo zálohu",
      "preberáte kauciu k nájmu"
    ],
    "nehodiSe": [
      "platba nad zákonný limit hotovosti – použite prevod"
    ],
    "po": [
      {
        "nazev": "Kópia",
        "popis": "Každá strana si nechá podpísaný výtlačok."
      }
    ],
    "faq": [
      {
        "q": "Aký je limit pre hotovosť?",
        "a": "Medzi dvoma fyzickými osobami nepodnikateľmi 15 000 €, ak je jednou stranou podnikateľ alebo firma, 5 000 € (zákon č. 394/2012 Z. z.)."
      },
      {
        "q": "Ukladáte moje údaje?",
        "a": "Nie. Potvrdenie sa skladá priamo vo vašom prehliadači."
      }
    ],
    "zakony": "Vzor vychádza zo zákona č. 40/1964 Zb., Občiansky zákonník, a zo zákona č. 394/2012 Z. z. o obmedzení platieb v hotovosti.",
    "souvisejiciPopis": "Ďalšie dokumenty k peniazom, tiež zadarmo."
  },
  vytvorit: {
    "title": "Vyplniť potvrdenie o prevzatí peňazí online – PDF zadarmo",
    "description": "Potvrdenie o prevzatí hotovosti so sumou slovom. PDF alebo Word zadarmo.",
    "podnadpis": "Zadarmo · výsledok v PDF aj vo Worde · zaberie asi minútu"
  },
};

export default stranka;

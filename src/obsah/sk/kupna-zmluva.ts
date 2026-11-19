import type { StrankaDokumentu } from '../typy';
import { kupnaZmluva as sablona } from '../../sablony/sk/kupna-zmluva';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kúpna zmluva na vec",
  nazevA: "kúpnu zmluvu",
  katalog: {
  "popis": "Predaj použitých vecí medzi súkromnými osobami.",
  "kategorie": "bezne",
  "ilustrace": "protokol",
  "slova": [
    "kúpna zmluva",
    "predaj",
    "bazár",
    "bicykel",
    "mobil",
    "použitá vec"
  ]
},
  souvisejici: "bezne",
  landing: {
  "title": "Kúpna zmluva na vec {rok} – vzor zadarmo v PDF",
  "description": "Bezplatná kúpna zmluva na hnuteľnú vec: opis, vady, cena, platba. Pre predaj bicykla, mobilu, nábytku medzi súkromnými osobami.",
  "perex": "Na predaj použitých vecí medzi súkromnými osobami – bicykel, mobil, nábytok, hudobný nástroj.",
  "obsahPopis": "Krátka zmluva s opisom vecí a vád.",
  "obsah": [
    {
      "nazev": "Strany",
      "popis": "Kto predáva a kto kupuje."
    },
    {
      "nazev": "Vec",
      "popis": "Opis a známe vady."
    },
    {
      "nazev": "Cena",
      "popis": "Platba a odovzdanie."
    }
  ],
  "kroky": [
    {
      "nazev": "Vyplniť",
      "popis": "Cenu slovom doplníme sami."
    },
    {
      "nazev": "Prezrieť",
      "popis": "Vec si spolu pozrite."
    },
    {
      "nazev": "Podpísať",
      "popis": "Obe strany."
    }
  ],
  "online": [
    "Vyplnenie s vysvetlením každého poľa",
    "Podpis na obrazovke",
    "Stiahnutie v PDF aj Worde, alebo poslanie na e-mail"
  ],
  "hodiSe": [
    "Predaj cez bazár alebo inzerát",
    "Drahšie použité zariadenia"
  ],
  "nehodiSe": [
    "Autá – na to je kúpna zmluva na auto",
    "Nehnuteľnosti"
  ],
  "po": [
    {
      "nazev": "Hotovosť",
      "popis": "Pri vyšších sumách radšej prevodom."
    }
  ],
  "faq": [
    {
      "q": "Musí byť kúpna zmluva písomná?",
      "a": "Pri hnuteľných veciach nie, ale písomná zmluva je najlepší dôkaz."
    },
    {
      "q": "Ukladáte moje údaje?",
      "a": "Nie. Dokument vzniká iba vo vašom prehliadači."
    }
  ],
  "zakony": "Vzor vychádza z § 588 a nasl. Občianskeho zákonníka.",
  "souvisejiciPopis": "Ďalšie dokumenty, tiež zadarmo."
},
  vytvorit: {
  "title": "Kúpna zmluva na vec online – PDF zadarmo",
  "description": "Kúpna zmluva na použitú vec. PDF alebo Word zadarmo.",
  "podnadpis": "Zadarmo · výsledok v PDF aj Worde · trvá asi 2 minúty"
},
};

export default stranka;

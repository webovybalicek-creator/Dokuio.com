import type { StrankaDokumentu } from '../typy';
import { reklamacia as sablona } from '../../sablony/sk/reklamacia';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Reklamácia tovaru",
  nazevA: "reklamáciu",
  katalog: {
  "popis": "Reklamácia chybného tovaru u predávajúceho.",
  "kategorie": "bezne",
  "ilustrace": "protokol",
  "slova": [
    "reklamácia",
    "vada",
    "záruka",
    "oprava",
    "výmena",
    "reklamačný list"
  ]
},
  souvisejici: "bezne",
  landing: {
  "title": "Reklamácia tovaru {rok} – vzor zadarmo v PDF",
  "description": "Bezplatný reklamačný list: opis vady, požiadavka na opravu, výmenu, zľavu alebo vrátenie peňazí. Vybavenie spravidla do 30 dní. V PDF aj Worde.",
  "perex": "Tovar je chybný? Reklamujte ho písomne – s presným opisom vady a tým, čo požadujete.",
  "obsahPopis": "Reklamácia s požiadavkou na vybavenie.",
  "obsah": [
    {
      "nazev": "Predávajúci",
      "popis": "Kde reklamujete."
    },
    {
      "nazev": "Vada",
      "popis": "Čo nefunguje."
    },
    {
      "nazev": "Požiadavka",
      "popis": "Oprava, výmena, zľava alebo vrátenie peňazí."
    }
  ],
  "kroky": [
    {
      "nazev": "Vyplniť",
      "popis": "Vadu opíšte konkrétne."
    },
    {
      "nazev": "Odovzdať",
      "popis": "S tovarom a dokladom."
    },
    {
      "nazev": "Počkať",
      "popis": "Spravidla najviac 30 dní."
    }
  ],
  "online": [
    "Vyplnenie s vysvetlením každého poľa",
    "Podpis na obrazovke",
    "Stiahnutie v PDF aj Worde, alebo poslanie na e-mail",
    "Pripomienka lehoty v kalendári"
  ],
  "hodiSe": [
    "Chybný tovar z obchodu alebo e-shopu"
  ],
  "nehodiSe": [
    "Kúpa od súkromnej osoby",
    "Záruka výrobcu nad rámec zákona – podľa jeho podmienok"
  ],
  "po": [
    {
      "nazev": "Potvrdenie",
      "popis": "Pýtajte si potvrdenie o uplatnení reklamácie."
    }
  ],
  "faq": [
    {
      "q": "Ako dlho môžem reklamovať?",
      "a": "24 mesiacov od prevzatia, pri použitom tovare môže byť lehota 12 mesiacov."
    },
    {
      "q": "Do kedy musí predávajúci reklamáciu vybaviť?",
      "a": "Spravidla najneskôr do 30 dní."
    },
    {
      "q": "Ukladáte moje údaje?",
      "a": "Nie. Dokument vzniká iba vo vašom prehliadači."
    }
  ],
  "zakony": "Vzor vychádza z § 619 a nasl. Občianskeho zákonníka a zákona č. 108/2024 Z. z.",
  "souvisejiciPopis": "Ďalšie dokumenty, tiež zadarmo."
},
  vytvorit: {
  "title": "Reklamácia tovaru online – PDF zadarmo",
  "description": "Reklamačný list s požiadavkou na vybavenie. PDF alebo Word zadarmo.",
  "podnadpis": "Zadarmo · výsledok v PDF aj Worde · trvá asi 2 minúty"
},
};

export default stranka;

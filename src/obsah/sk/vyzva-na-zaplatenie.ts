import type { StrankaDokumentu } from '../typy';
import { vyzvaNaZaplatenie as sablona } from '../../sablony/sk/vyzva-na-zaplatenie';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Výzva na zaplatenie",
  nazevA: "výzvu na zaplatenie",
  katalog: {"popis": "Predžalobná výzva dlžníkovi s lehotou a úrokmi z omeškania.", "kategorie": "penize", "ilustrace": "dluh", "slova": ["výzva na zaplatenie", "predžalobná výzva", "upomienka", "dlžník", "faktúra", "úroky z omeškania"]},
  souvisejici: "penize",
  landing: {
  "title": "Výzva na zaplatenie {rok} – vzor predžalobnej výzvy zadarmo (PDF, Word)",
  "description": "Vzor výzvy na zaplatenie (predžalobnej výzvy) zadarmo: dlžná suma, dôvod, lehota a úroky z omeškania podľa § 517 OZ. Vyplňte online, stiahnite PDF alebo Word.",
  "perex": "Keď dlžník nezaplatil faktúru alebo nevrátil pôžičku: výzva mu dá poslednú lehotu pred súdom a je dôkazom, že ste ho vyzvali.",
  "obsahPopis": "Krátky list v dvoch častiach.",
  "obsah": [
    {
      "nazev": "Odosielateľ a adresát",
      "popis": "Veriteľ a dlžník."
    },
    {
      "nazev": "Výzva na zaplatenie",
      "popis": "Dôvod a výška dlhu, splatnosť, nová lehota, účet, úroky z omeškania a upozornenie na súd."
    }
  ],
  "kroky": [
    {
      "nazev": "Vyplňte dlh",
      "popis": "Kto, koľko, z akej faktúry."
    },
    {
      "nazev": "Nastavte lehotu",
      "popis": "Obvykle 7–15 dní."
    },
    {
      "nazev": "Pošlite doporučene",
      "popis": "S doručenkou."
    }
  ],
  "online": [
    "Suma slovom automaticky",
    "Pripomienka konca lehoty do kalendára",
    "Vysvetlivky ku každému poľu",
    "Stiahnutie v PDF aj vo Worde"
  ],
  "hodiSe": [
    "dlžník nezaplatil faktúru alebo nevrátil pôžičku",
    "chystáte žalobu alebo návrh na platobný rozkaz"
  ],
  "nehodiSe": [
    "dlžník je v konkurze alebo oddlžení – prihláste pohľadávku",
    "pohľadávka je sporná alebo vysoká – poraďte sa s advokátom"
  ],
  "po": [
    {
      "nazev": "Počkajte na lehotu",
      "popis": "Pripomienka v kalendári."
    },
    {
      "nazev": "Súd",
      "popis": "Žaloba alebo návrh na platobný rozkaz."
    },
    {
      "nazev": "Splátky?",
      "popis": "Ak chce dlžník splácať, spíšte uznanie dlhu."
    }
  ],
  "faq": [
    {
      "q": "Kedy je dlžník v omeškaní?",
      "a": "Keď nezaplatí riadne a včas. Veriteľ potom môže požadovať aj úroky z omeškania vo výške podľa vykonávacieho predpisu (§ 517 Občianskeho zákonníka)."
    },
    {
      "q": "Ako výzvu poslať?",
      "a": "Doporučene s doručenkou na adresu trvalého pobytu, firme do sídla. Podací lístok si odložte."
    },
    {
      "q": "Ukladáte moje údaje?",
      "a": "Nie. Dokument sa skladá priamo vo vašom prehliadači."
    }
  ],
  "zakony": "Vzor vychádza z § 517 zákona č. 40/1964 Zb., Občiansky zákonník.",
  "souvisejiciPopis": "Ďalšie dokumenty k peniazom a dlhom, tiež zadarmo."
},
  vytvorit: {"title": "Vyplniť výzvu na zaplatenie online – PDF zadarmo", "description": "Sprievodca výzvou na zaplatenie. Stiahnite PDF alebo Word zadarmo.", "podnadpis": "Zadarmo · PDF aj Word · zaberie asi 2 minúty"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { ugovorODjelu as sablona } from '../../sablony/hr/ugovor-o-djelu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Ugovor o djelu",
  nazevA: "ugovor o djelu",
  katalog: {"popis": "Majstor, popravak ili obnova – posao, cijena i rok.", "kategorie": "usluge", "ilustrace": "protokol", "slova": ["ugovor o djelu", "ugovor s majstorom", "izvođač radova", "popravak", "obnova stana"]},
  souvisejici: "usluge",
  landing: {
  "title": "Ugovor o djelu {rok} – besplatni obrazac PDF",
  "description": "Besplatan ugovor o djelu s majstorom ili izvođačem: opis posla, materijal, cijena slovima, predujam, rok završetka, primopredaja i nedostaci. PDF i Word.",
  "perex": "Za posao s majstorom – bojanje, popravak, obnovu kupaonice. S jasnim opsegom, cijenom i rokom.",
  "obsahPopis": "Šest članaka prema Zakonu o obveznim odnosima.",
  "obsah": [
    {
      "nazev": "Ugovorne strane",
      "popis": "Naručitelj i izvođač."
    },
    {
      "nazev": "Predmet",
      "popis": "Opis posla, mjesto, materijal."
    },
    {
      "nazev": "Rok",
      "popis": "Početak i završetak."
    },
    {
      "nazev": "Cijena",
      "popis": "Iznos, predujam, dodatni radovi."
    },
    {
      "nazev": "Primopredaja",
      "popis": "Pregled i nedostaci."
    },
    {
      "nazev": "Završne odredbe",
      "popis": "Primjerci."
    }
  ],
  "kroky": [
    {
      "nazev": "Ispunite podatke",
      "popis": "Što ne znate, preskočite – ostat će crta za ispunjavanje rukom."
    },
    {
      "nazev": "Provjerite tekst",
      "popis": "Svaki odlomak možete urediti."
    },
    {
      "nazev": "Preuzmite i potpišite",
      "popis": "PDF ili Word besplatno."
    }
  ],
  "online": [
    "Iznos slovima automatski",
    "PDF i Word"
  ],
  "hodiSe": [
    "angažirate majstora ili obrtnika",
    "želite pisano imati cijenu i rok"
  ],
  "nehodiSe": [
    "gradite kuću – treba ugovor o građenju i dozvole"
  ],
  "po": [
    {
      "nazev": "Primopredaja",
      "popis": "Pregledajte posao i nedostatke javite odmah pisano."
    },
    {
      "nazev": "Plaćanje",
      "popis": "Na račun, uz račun izvođača."
    }
  ],
  "faq": [
    {
      "q": "Što ako majstor kasni?",
      "a": "Dajte mu pisano primjereni naknadni rok; nakon njega možete raskinuti ugovor i tražiti naknadu štete."
    },
    {
      "q": "Kada javiti nedostatke?",
      "a": "Pregledajte posao čim je moguće i nedostatke javite izvođaču bez odgađanja."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima (ugovor o djelu).",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite ugovor o djelu online – PDF besplatno", "description": "Ugovor s majstorom: posao, cijena i rok. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

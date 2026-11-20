import type { StrankaDokumentu } from '../typy';
import { ugovorOZajmu as sablona } from '../../sablony/hr/ugovor-o-zajmu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Ugovor o zajmu",
  nazevA: "ugovor o zajmu",
  katalog: {"popis": "Zajam prijatelju ili članu obitelji, i na obroke.", "kategorie": "novac", "ilustrace": "pujcka", "slova": ["ugovor o zajmu", "pozajmica", "zajam između fizičkih osoba", "posudba novca", "obroci"]},
  souvisejici: "novac",
  landing: {
  "title": "Ugovor o zajmu {rok} – besplatni obrazac PDF",
  "description": "Besplatan ugovor o zajmu između građana: iznos slovima, vraćanje odjednom ili u obrocima, kamata u zakonskom okviru, zatezne kamate. PDF i Word.",
  "perex": "Za zajam prijatelju ili članu obitelji. Odjednom ili u mjesečnim obrocima, s kamatom ili bez.",
  "obsahPopis": "Pet članaka prema Zakonu o obveznim odnosima.",
  "obsah": [
    {
      "nazev": "Ugovorne strane",
      "popis": "Zajmodavac i zajmoprimac s OIB-om."
    },
    {
      "nazev": "Predmet",
      "popis": "Iznos i način predaje."
    },
    {
      "nazev": "Vraćanje",
      "popis": "Odjednom ili obroci, prijevremena otplata."
    },
    {
      "nazev": "Kamate",
      "popis": "Bez kamata ili ugovorna kamata."
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
    "Podsjetnici na obroke u kalendaru",
    "PDF i Word"
  ],
  "hodiSe": [
    "posuđujete novac prijatelju ili obitelji",
    "želite pisano imati rok i obroke"
  ],
  "nehodiSe": [
    "posuđujete kao tvrtka ili uz naknadu u okviru djelatnosti"
  ],
  "po": [
    {
      "nazev": "Predaja novca",
      "popis": "Najbolje na račun."
    },
    {
      "nazev": "Obroci",
      "popis": "Spremite datume u kalendar."
    }
  ],
  "faq": [
    {
      "q": "Koliko smije biti kamata?",
      "a": "Između građana ugovorna kamata ne smije biti viša od stope zakonskih zateznih kamata uvećane za polovinu te stope."
    },
    {
      "q": "Što ako dužnik kasni?",
      "a": "Duguje zakonske zatezne kamate; prema ugovoru možete tražiti i cijeli ostatak odjednom."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima (ugovor o zajmu, kamate).",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite ugovor o zajmu online – PDF besplatno", "description": "Ugovor o zajmu između građana, i na obroke. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

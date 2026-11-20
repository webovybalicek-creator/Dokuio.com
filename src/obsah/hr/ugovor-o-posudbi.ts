import type { StrankaDokumentu } from '../typy';
import { ugovorOPosudbi as sablona } from '../../sablony/hr/ugovor-o-posudbi';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Ugovor o posudbi",
  nazevA: "ugovor o posudbi",
  katalog: {"popis": "Besplatna posudba stvari prijatelju ili susjedu.", "kategorie": "svakodnevno", "ilustrace": "pujcka", "slova": ["ugovor o posudbi", "posudba stvari", "posuditi prikolicu", "posudba bez naknade", "posudovnik"]},
  souvisejici: "svakodnevno",
  landing: {
  "title": "Ugovor o posudbi {rok} – besplatni obrazac PDF",
  "description": "Besplatan ugovor o posudbi stvari bez naknade: opis i stanje stvari, vrijednost, namjena, rok povrata i odgovornost za štetu. PDF i Word.",
  "perex": "Posuđujete prikolicu, alat ili opremu? Kratki ugovor s rokom povrata i stanjem stvari sprječava nesporazume.",
  "obsahPopis": "Pet članaka prema Zakonu o obveznim odnosima.",
  "obsah": [
    {
      "nazev": "Ugovorne strane",
      "popis": "Posuditelj i posudovnik."
    },
    {
      "nazev": "Predmet",
      "popis": "Stvar, stanje i vrijednost."
    },
    {
      "nazev": "Uporaba",
      "popis": "Namjena i troškovi."
    },
    {
      "nazev": "Povrat",
      "popis": "Rok i šteta."
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
    "PDF i Word"
  ],
  "hodiSe": [
    "posuđujete stvar bez naknade"
  ],
  "nehodiSe": [
    "naplaćujete naknadu – to je najam"
  ],
  "po": [
    {
      "nazev": "Predaja",
      "popis": "Fotografirajte stvar."
    }
  ],
  "faq": [
    {
      "q": "Po čemu se posudba razlikuje od najma?",
      "a": "Posudba je besplatna; ako se plaća naknada, radi se o najmu."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima (ugovor o posudbi).",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite ugovor o posudbi online – PDF besplatno", "description": "Ugovor o besplatnoj posudbi stvari. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

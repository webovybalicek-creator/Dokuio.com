import type { StrankaDokumentu } from '../typy';
import { primopredajniZapisnikStana as sablona } from '../../sablony/hr/primopredajni-zapisnik-stana';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Primopredajni zapisnik stana",
  nazevA: "primopredajni zapisnik stana",
  katalog: {"popis": "Brojila, ključevi i stanje stana.", "kategorie": "stan", "ilustrace": "protokol", "slova": ["primopredajni zapisnik stana", "predaja stana", "stanje brojila", "useljenje", "iseljenje"]},
  souvisejici: "stan",
  landing: {
  "title": "Primopredajni zapisnik stana {rok} – besplatni obrazac PDF",
  "description": "Besplatan primopredajni zapisnik stana pri useljenju ili iseljenju: stanje brojila, ključevi, namještaj i oštećenja. Osnova za povrat jamčevine. PDF i Word.",
  "perex": "Bilježi stanje stana pri useljenju i iseljenju – osnova za povrat jamčevine bez svađe.",
  "obsahPopis": "Zapisnik u tri dijela.",
  "obsah": [
    {
      "nazev": "Primopredaja",
      "popis": "Useljenje ili iseljenje."
    },
    {
      "nazev": "Brojila",
      "popis": "Struja, voda, plin, grijanje."
    },
    {
      "nazev": "Stanje",
      "popis": "Ključevi, oprema, oštećenja."
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
    "Podaci iz ugovora o najmu",
    "PDF i Word"
  ],
  "hodiSe": [
    "useljavate se ili iseljavate iz unajmljenog stana"
  ],
  "nehodiSe": [
    "kupujete stan – trebate drugi dokument"
  ],
  "po": [
    {
      "nazev": "Fotografije",
      "popis": "S datumom."
    }
  ],
  "faq": [
    {
      "q": "Zašto zapisnik?",
      "a": "Pri iseljenju se uspoređuje stanje – ono što nije upisano teško je kasnije dokazati."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o najmu stanova.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite primopredajni zapisnik stana online – PDF besplatno", "description": "Zapisnik o predaji stana sa stanjem brojila. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

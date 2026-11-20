import type { StrankaDokumentu } from '../typy';
import { izjavaOPriznanjuDuga as sablona } from '../../sablony/hr/izjava-o-priznanju-duga';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Izjava o priznanju duga",
  nazevA: "izjavu o priznanju duga",
  katalog: {"popis": "Dužnik pisano priznaje dug i rok plaćanja.", "kategorie": "novac", "ilustrace": "dluh", "slova": ["izjava o priznanju duga", "priznanje duga", "dug", "zastara", "dužnik"]},
  souvisejici: "novac",
  landing: {
  "title": "Izjava o priznanju duga {rok} – besplatni obrazac PDF",
  "description": "Besplatna izjava o priznanju duga: iznos slovima, pravni temelj, rok plaćanja i zatezne kamate. Priznanje duga prekida zastaru. PDF i Word.",
  "perex": "Dužnik pisano priznaje koliko duguje i do kada će platiti. Priznanjem se prekida zastara.",
  "obsahPopis": "Kratka jednostrana izjava dužnika.",
  "obsah": [
    {
      "nazev": "Izjava",
      "popis": "Dug, temelj, rok i račun."
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
    "netko vam duguje i pristaje to potvrditi",
    "želite produžiti zastaru"
  ],
  "nehodiSe": [
    "dužnik dug osporava – tada pomaže opomena ili odvjetnik"
  ],
  "po": [
    {
      "nazev": "Izvornik",
      "popis": "Vjerovnik čuva izvornik."
    }
  ],
  "faq": [
    {
      "q": "Što znači prekid zastare?",
      "a": "Kada dužnik prizna dug, zastara se prekida i rok počinje teći iznova; opći zastarni rok je pet godina."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima (priznanje duga, zastara).",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite izjavu o priznanju duga online – PDF besplatno", "description": "Izjava o priznanju duga s rokom plaćanja. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

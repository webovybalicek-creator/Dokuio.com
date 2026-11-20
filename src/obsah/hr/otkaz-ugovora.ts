import type { StrankaDokumentu } from '../typy';
import { otkazUgovora as sablona } from '../../sablony/hr/otkaz-ugovora';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Otkaz ugovora",
  nazevA: "otkaz ugovora",
  katalog: {"popis": "Telekom, osiguranje, teretana, pretplata.", "kategorie": "svakodnevno", "ilustrace": "protokol", "slova": ["otkaz ugovora", "otkaz telekom", "otkaz osiguranja", "otkaz teretane", "otkaz pretplate"]},
  souvisejici: "svakodnevno",
  landing: {
  "title": "Otkaz ugovora (telekom, osiguranje, teretana) {rok} – obrazac PDF",
  "description": "Besplatan pisani otkaz ugovora s operatorom, osiguravateljem, teretanom ili pretplatom: broj ugovora, datum prestanka i zahtjev za potvrdu. PDF i Word.",
  "perex": "Želite otkazati mobilnu tarifu, internet, osiguranje ili članarinu? Pisani otkaz s brojem ugovora i zahtjevom za potvrdu.",
  "obsahPopis": "Kratki otkaz.",
  "obsah": [
    {
      "nazev": "Otkaz",
      "popis": "Usluga, broj ugovora, dan prestanka."
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
    "otkazujete uslugu s ugovorom"
  ],
  "nehodiSe": [
    "otkazujete najam stana ili posao – za to postoje posebni obrasci"
  ],
  "po": [
    {
      "nazev": "Slanje",
      "popis": "Preporučeno ili e-poštom za otkaze."
    },
    {
      "nazev": "Potvrda",
      "popis": "Zatražite pisanu potvrdu."
    }
  ],
  "faq": [
    {
      "q": "Koliki je otkazni rok?",
      "a": "Onaj iz ugovora ili općih uvjeta pružatelja."
    },
    {
      "q": "Plaćam li naknadu?",
      "a": "Kod ugovora s obveznim trajanjem prijevremeni otkaz može značiti naknadu iz ugovora."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima i Zakonu o zaštiti potrošača.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite otkaz ugovora online – PDF besplatno", "description": "Otkaz ugovora o usluzi s potvrdom. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

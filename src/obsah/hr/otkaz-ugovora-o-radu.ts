import type { StrankaDokumentu } from '../typy';
import { otkazUgovoraORadu as sablona } from '../../sablony/hr/otkaz-ugovora-o-radu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Otkaz ugovora o radu",
  nazevA: "otkaz ugovora o radu",
  katalog: {"popis": "Redoviti otkaz radnika, i prijedlog sporazuma.", "kategorie": "posao", "ilustrace": "protokol", "slova": ["otkaz ugovora o radu", "otkaz radnika", "dati otkaz", "otkazni rok", "sporazumni prestanak"]},
  souvisejici: "posao",
  landing: {
  "title": "Otkaz ugovora o radu (radnik) {rok} – besplatni obrazac PDF",
  "description": "Besplatan obrazac otkaza ugovora o radu od strane radnika: bez navođenja razloga, otkazni rok prema Zakonu o radu i prijedlog sporazumnog prestanka. PDF i Word.",
  "perex": "Odlazite s posla? Kao radnik otkazujete bez razloga, pisano, uz otkazni rok – ili predložite raniji sporazumni prestanak.",
  "obsahPopis": "Kratki pisani otkaz.",
  "obsah": [
    {
      "nazev": "Otkaz",
      "popis": "Radnik, poslodavac, otkazni rok, prijedlog."
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
    "vi ste radnik i odlazite s posla"
  ],
  "nehodiSe": [
    "vi ste poslodavac – otkaz mora imati opravdan razlog i obrazloženje"
  ],
  "po": [
    {
      "nazev": "Uručenje",
      "popis": "Osobno uz potpis primitka ili preporučeno."
    },
    {
      "nazev": "Godišnji",
      "popis": "Dogovorite preostali odmor."
    }
  ],
  "faq": [
    {
      "q": "Moram li navesti razlog?",
      "a": "Ne – radnik redovito otkazuje bez navođenja razloga, ali uz otkazni rok."
    },
    {
      "q": "Koliki je otkazni rok?",
      "a": "Ovisi o trajanju rada kod poslodavca – npr. nakon jedne godine mjesec dana, nakon pet godina dva mjeseca; ugovor može odrediti kraći."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o radu (redoviti otkaz, otkazni rok).",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite otkaz ugovora o radu online – PDF besplatno", "description": "Otkaz ugovora o radu od strane radnika. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

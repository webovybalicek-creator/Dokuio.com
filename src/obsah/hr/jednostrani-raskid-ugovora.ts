import type { StrankaDokumentu } from '../typy';
import { jednostraniRaskid as sablona } from '../../sablony/hr/jednostrani-raskid-ugovora';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Jednostrani raskid ugovora",
  nazevA: "obrazac za jednostrani raskid ugovora",
  katalog: {"popis": "Povrat robe kupljene na internetu u 14 dana.", "kategorie": "svakodnevno", "ilustrace": "protokol", "slova": ["jednostrani raskid ugovora", "povrat robe", "odustanak od kupnje", "kupnja na internetu", "14 dana"]},
  souvisejici: "svakodnevno",
  landing: {
  "title": "Obrazac za jednostrani raskid ugovora {rok} – besplatni PDF",
  "description": "Besplatan obrazac za jednostrani raskid ugovora sklopljenog na daljinu: povrat robe kupljene na internetu u 14 dana prema Zakonu o zaštiti potrošača. PDF i Word.",
  "perex": "Kupili ste nešto na internetu i predomislili ste se? Imate 14 dana za jednostrani raskid bez navođenja razloga.",
  "obsahPopis": "Izjava prema obrascu iz Pravilnika (NN 117/22).",
  "obsah": [
    {
      "nazev": "Izjava",
      "popis": "Trgovac, roba, narudžba i povrat novca."
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
    "Prema službenom obrascu",
    "PDF i Word"
  ],
  "hodiSe": [
    "kupili ste na internetu ili telefonom",
    "kupili ste izvan poslovnih prostorija"
  ],
  "nehodiSe": [
    "kupili ste u trgovini – tada vrijedi samo reklamacija ili dobra volja trgovca"
  ],
  "po": [
    {
      "nazev": "Slanje",
      "popis": "E-poštom ili preporučeno, prije isteka roka."
    },
    {
      "nazev": "Povrat robe",
      "popis": "U 14 dana od slanja izjave."
    }
  ],
  "faq": [
    {
      "q": "Koliki je rok?",
      "a": "14 dana, kod robe obično od dana kada ste je primili."
    },
    {
      "q": "Kada dobivam novac?",
      "a": "Trgovac mora vratiti novac najkasnije 14 dana od primitka vaše izjave."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o zaštiti potrošača i Pravilniku o obavijesti o pravu na jednostrani raskid (NN 117/22).",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite obrazac za jednostrani raskid online – PDF besplatno", "description": "Izjava o jednostranom raskidu kupnje na internetu. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

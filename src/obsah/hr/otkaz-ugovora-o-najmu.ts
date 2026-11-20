import type { StrankaDokumentu } from '../typy';
import { otkazUgovoraONajmu as sablona } from '../../sablony/hr/otkaz-ugovora-o-najmu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Otkaz ugovora o najmu",
  nazevA: "otkaz ugovora o najmu",
  katalog: {"popis": "Otkaz najmoprimca, tri mjeseca unaprijed.", "kategorie": "stan", "ilustrace": "protokol", "slova": ["otkaz najma", "otkaz ugovora o najmu stana", "iseljenje", "otkazni rok", "povrat jamčevine"]},
  souvisejici: "stan",
  landing: {
  "title": "Otkaz ugovora o najmu stana {rok} – besplatni obrazac PDF",
  "description": "Besplatan otkaz ugovora o najmu stana od strane najmoprimca: najmanje tri mjeseca prije iseljenja, dan predaje stana i povrat jamčevine. PDF i Word.",
  "perex": "Selite se? Najam na neodređeno otkazujete najmanje tri mjeseca prije iseljenja.",
  "obsahPopis": "Kratki pisani otkaz.",
  "obsah": [
    {
      "nazev": "Otkaz",
      "popis": "Najam, dan iseljenja, povrat jamčevine."
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
    "vi ste najmoprimac i selite se"
  ],
  "nehodiSe": [
    "vi ste najmodavac – otkaz mora imati zakonski razlog i obrazloženje"
  ],
  "po": [
    {
      "nazev": "Predaja otkaza",
      "popis": "Uz potpis ili preporučeno."
    },
    {
      "nazev": "Primopredaja",
      "popis": "Zapisnik sa stanjem brojila."
    }
  ],
  "faq": [
    {
      "q": "Koliko unaprijed moram otkazati?",
      "a": "Najmanje tri mjeseca prije dana iseljenja kod najma na neodređeno vrijeme."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o najmu stanova.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite otkaz ugovora o najmu online – PDF besplatno", "description": "Otkaz najma stana od strane najmoprimca. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

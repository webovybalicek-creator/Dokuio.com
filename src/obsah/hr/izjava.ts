import type { StrankaDokumentu } from '../typy';
import { izjava as sablona } from '../../sablony/hr/izjava';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Izjava",
  nazevA: "izjavu",
  katalog: {"popis": "Opća pisana izjava pod materijalnom i kaznenom odgovornošću.", "kategorie": "svakodnevno", "ilustrace": "plnamoc", "slova": ["izjava", "izjava pod materijalnom i kaznenom odgovornošću", "pisana izjava", "izjava o kućanstvu", "ovjera potpisa"]},
  souvisejici: "svakodnevno",
  landing: {
  "title": "Izjava pod materijalnom i kaznenom odgovornošću {rok} – obrazac",
  "description": "Besplatan obrazac izjave pod materijalnom i kaznenom odgovornošću: podaci davatelja, tekst izjave, svrha i mjesto za ovjeru potpisa. PDF i Word.",
  "perex": "Kada ured, banka ili škola traži vašu pisanu izjavu. Ako treba ovjera, potpišite je kod javnog bilježnika.",
  "obsahPopis": "Kratka izjava.",
  "obsah": [
    {
      "nazev": "Izjava",
      "popis": "Davatelj, tekst, svrha."
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
    "tijelo ili ustanova traži pisanu izjavu"
  ],
  "nehodiSe": [
    "postoji propisani službeni obrazac – koristite njega"
  ],
  "po": [
    {
      "nazev": "Ovjera",
      "popis": "Kod javnog bilježnika, ako se traži."
    }
  ],
  "faq": [
    {
      "q": "Treba li izjavu ovjeriti?",
      "a": "Ovisi o tome tko je traži – provjerite unaprijed."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac je opća pisana izjava fizičke osobe.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite izjavu online – PDF besplatno", "description": "Izjava pod materijalnom i kaznenom odgovornošću. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

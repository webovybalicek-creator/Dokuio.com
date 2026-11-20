import type { StrankaDokumentu } from '../typy';
import { primopredajniZapisnikVozila as sablona } from '../../sablony/hr/primopredajni-zapisnik-vozila';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Primopredajni zapisnik vozila",
  nazevA: "primopredajni zapisnik vozila",
  katalog: {"popis": "Kilometri, oštećenja, ključevi i vrijeme predaje.", "kategorie": "auto", "ilustrace": "protokol", "slova": ["primopredajni zapisnik vozila", "predaja automobila", "zapisnik o predaji vozila", "kilometri", "oštećenja vozila"]},
  souvisejici: "auto",
  landing: {
  "title": "Primopredajni zapisnik vozila {rok} – besplatni obrazac PDF",
  "description": "Besplatan primopredajni zapisnik vozila: točno vrijeme predaje, kilometri, gorivo, ključevi, dokumenti i oštećenja. Dokaz u slučaju prekršaja. PDF i Word.",
  "perex": "Bilježi stanje vozila i točno vrijeme predaje – važno ako nakon prodaje stigne kazna za prekršaj.",
  "obsahPopis": "Kratki zapisnik u tri dijela.",
  "obsah": [
    {
      "nazev": "Predaja",
      "popis": "Tko, kome, kada i u koliko sati."
    },
    {
      "nazev": "Ključevi i dokumenti",
      "popis": "Što je predano uz vozilo."
    },
    {
      "nazev": "Stanje",
      "popis": "Oštećenja i napomene."
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
    "Podaci iz kupoprodajnog ugovora",
    "Provjera broja šasije",
    "Preuzimanje PDF i Word"
  ],
  "hodiSe": [
    "prodajete ili posuđujete automobil",
    "vraćate vozilo nakon posudbe"
  ],
  "nehodiSe": [
    "trebate i ugovor – koristite kupoprodajni ugovor"
  ],
  "po": [
    {
      "nazev": "Fotografije",
      "popis": "Fotografirajte vozilo i kilometražu."
    },
    {
      "nazev": "Primjerci",
      "popis": "Svaka strana čuva jedan."
    }
  ],
  "faq": [
    {
      "q": "Zašto upisati vrijeme predaje?",
      "a": "Do promjene vlasništva prekršaji mogu stizati na prethodnog vlasnika – zapisnik s vremenom dokazuje tko je imao vozilo."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite primopredajni zapisnik vozila online – PDF besplatno", "description": "Primopredajni zapisnik vozila s vremenom predaje. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

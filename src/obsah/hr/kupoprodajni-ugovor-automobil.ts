import type { StrankaDokumentu } from '../typy';
import { kupoprodajniUgovorAutomobil as sablona } from '../../sablony/hr/kupoprodajni-ugovor-automobil';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kupoprodajni ugovor za automobil",
  nazevA: "kupoprodajni ugovor za automobil",
  katalog: {"popis": "Prodaja rabljenog automobila između građana.", "kategorie": "auto", "ilustrace": "auto", "slova": ["kupoprodajni ugovor auto", "ugovor o kupoprodaji vozila", "prodaja automobila", "rabljeni automobil", "promjena vlasništva"]},
  souvisejici: "auto",
  landing: {
  "title": "Kupoprodajni ugovor za automobil {rok} – besplatni obrazac PDF",
  "description": "Besplatan kupoprodajni ugovor za rabljeni automobil prema hrvatskom pravu: OIB, broj šasije, kilometri, nedostaci, plaćanje i vrijeme predaje. PDF i Word.",
  "perex": "Za prodaju rabljenog automobila između građana. S vremenom predaje, poznatim nedostacima i rokom od 15 dana za promjenu vlasništva.",
  "obsahPopis": "Sedam članaka prema Zakonu o obveznim odnosima.",
  "obsah": [
    {
      "nazev": "Ugovorne strane",
      "popis": "Prodavatelj i kupac s OIB-om."
    },
    {
      "nazev": "Predmet ugovora",
      "popis": "Vozilo, broj šasije, registarska oznaka."
    },
    {
      "nazev": "Stanje vozila",
      "popis": "Kilometri i poznati nedostaci."
    },
    {
      "nazev": "Cijena i plaćanje",
      "popis": "Iznos slovima, gotovina ili račun, pridržaj vlasništva."
    },
    {
      "nazev": "Predaja vozila",
      "popis": "Datum, vrijeme, ključevi, dokumenti."
    },
    {
      "nazev": "Promjena vlasništva",
      "popis": "Rok od 15 dana i troškovi."
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
    "Provjera broja šasije",
    "Podsjetnik na rok od 15 dana",
    "Primopredajni zapisnik preuzima podatke"
  ],
  "hodiSe": [
    "prodajete ili kupujete rabljeni automobil od građanina",
    "želite pisano imati cijenu, stanje i vrijeme predaje"
  ],
  "nehodiSe": [
    "kupujete od autokuće – ona ima vlastiti ugovor",
    "vozilo je na leasingu ili pod zalogom"
  ],
  "po": [
    {
      "nazev": "Predaja",
      "popis": "Primopredajni zapisnik s vremenom i kilometrima."
    },
    {
      "nazev": "Promjena vlasništva",
      "popis": "Kupac u 15 dana u stanici za tehnički pregled, plaća upravnu pristojbu."
    },
    {
      "nazev": "Osiguranje",
      "popis": "Prodavatelj obavijesti osiguratelja."
    }
  ],
  "faq": [
    {
      "q": "Treba li ovjeriti potpis prodavatelja?",
      "a": "Ne. Prema Poreznoj upravi potpis prodavatelja na kupoprodajnom ugovoru ne treba ovjeravati kod javnog bilježnika."
    },
    {
      "q": "Do kada treba prenijeti vlasništvo?",
      "a": "Novi vlasnik dužan je vozilo u roku od 15 dana od stjecanja registrirati na svoje ime ili ga odjaviti."
    },
    {
      "q": "Tko plaća upravnu pristojbu?",
      "a": "Kupac, pri promjeni vlasništva u stanici za tehnički pregled. Iznos ovisi o snazi i starosti vozila."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima i informacijama Porezne uprave o stjecanju rabljenog motornog vozila.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite kupoprodajni ugovor za automobil online – PDF besplatno", "description": "Vodič za kupoprodajni ugovor za rabljeni automobil prema hrvatskom pravu. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

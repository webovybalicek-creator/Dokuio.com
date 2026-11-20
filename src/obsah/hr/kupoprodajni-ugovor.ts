import type { StrankaDokumentu } from '../typy';
import { kupoprodajniUgovor as sablona } from '../../sablony/hr/kupoprodajni-ugovor';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kupoprodajni ugovor",
  nazevA: "kupoprodajni ugovor",
  katalog: {"popis": "Prodaja rabljene stvari preko oglasa.", "kategorie": "svakodnevno", "ilustrace": "protokol", "slova": ["kupoprodajni ugovor", "prodaja rabljene stvari", "oglas", "Njuškalo", "ugovor o prodaji"]},
  souvisejici: "svakodnevno",
  landing: {
  "title": "Kupoprodajni ugovor {rok} – besplatni obrazac PDF",
  "description": "Besplatan kupoprodajni ugovor za pokretnu stvar između građana: opis, poznati nedostaci, cijena slovima, plaćanje i predaja. Savjeti protiv prijevara. PDF i Word.",
  "perex": "Za prodaju rabljene stvari preko oglasa – bicikla, mobitela, namještaja. S opisom nedostataka i cijenom slovima.",
  "obsahPopis": "Četiri članka prema Zakonu o obveznim odnosima.",
  "obsah": [
    {
      "nazev": "Ugovorne strane",
      "popis": "Prodavatelj i kupac."
    },
    {
      "nazev": "Predmet i stanje",
      "popis": "Opis i poznati nedostaci."
    },
    {
      "nazev": "Cijena i predaja",
      "popis": "Iznos, plaćanje, prijelaz vlasništva."
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
    "Iznos slovima automatski",
    "PDF i Word"
  ],
  "hodiSe": [
    "prodajete rabljenu stvar preko oglasa",
    "želite pisano imati stanje i cijenu"
  ],
  "nehodiSe": [
    "prodajete automobil – koristite ugovor za automobil"
  ],
  "po": [
    {
      "nazev": "Predaja",
      "popis": "Tek kada je novac kod vas."
    }
  ],
  "faq": [
    {
      "q": "Treba li pisani ugovor?",
      "a": "Nije obvezan, ali kod skupljih stvari štiti obje strane."
    },
    {
      "q": "Kako prepoznati prijevaru?",
      "a": "Kupac šalje poveznicu za „sigurno plaćanje” ili „dostavu” i traži podatke kartice ili kod iz SMS-a."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima (kupoprodaja).",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite kupoprodajni ugovor online – PDF besplatno", "description": "Kupoprodajni ugovor za rabljenu stvar. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

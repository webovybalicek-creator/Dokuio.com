import type { StrankaDokumentu } from '../typy';
import { punomoc as sablona } from '../../sablony/hr/punomoc';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Punomoć",
  nazevA: "punomoć",
  katalog: {"popis": "Kada nešto umjesto vas obavlja netko drugi.", "kategorie": "svakodnevno", "ilustrace": "plnamoc", "slova": ["punomoć", "opunomoćenje", "ovlaštenje", "punomoć za zastupanje", "punomoć za poštu"]},
  souvisejici: "svakodnevno",
  landing: {
  "title": "Punomoć {rok} – besplatni obrazac PDF",
  "description": "Besplatna punomoć za zastupanje fizičke osobe: tko koga ovlašćuje, za koje poslove i do kada. Savjeti kada treba ovjera potpisa. PDF i Word.",
  "perex": "Kada nešto umjesto vas treba obaviti netko drugi – pošta, ured, banka ili stanica za tehnički pregled.",
  "obsahPopis": "Kratka punomoć s opisom poslova.",
  "obsah": [
    {
      "nazev": "Punomoć",
      "popis": "Opunomoćitelj, opunomoćenik, poslovi, rok."
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
    "Potpis na zaslonu",
    "PDF i Word"
  ],
  "hodiSe": [
    "ne možete nešto obaviti osobno",
    "želite ovlastiti člana obitelji"
  ],
  "nehodiSe": [
    "trebate punomoć za nekretnine ili sud – obratite se javnom bilježniku ili odvjetniku"
  ],
  "po": [
    {
      "nazev": "Ovjera",
      "popis": "Ako je traži tijelo ili banka, kod javnog bilježnika."
    }
  ],
  "faq": [
    {
      "q": "Treba li ovjeriti potpis?",
      "a": "Ovisi o tome gdje se punomoć koristi – tijela i banke je često traže. Provjerite unaprijed."
    },
    {
      "q": "Mogu li punomoć opozvati?",
      "a": "Da, u svakom trenutku."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima (zastupanje, punomoć).",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite punomoć online – PDF besplatno", "description": "Punomoć za zastupanje fizičke osobe. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

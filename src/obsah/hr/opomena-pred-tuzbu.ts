import type { StrankaDokumentu } from '../typy';
import { opomenaPredTuzbu as sablona } from '../../sablony/hr/opomena-pred-tuzbu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Opomena pred tužbu",
  nazevA: "opomenu pred tužbu",
  katalog: {"popis": "Poziv dužniku na plaćanje s rokom i upozorenjem.", "kategorie": "novac", "ilustrace": "dluh", "slova": ["opomena pred tužbu", "opomena za dug", "poziv na plaćanje", "dužnik ne plaća", "zatezne kamate"]},
  souvisejici: "novac",
  landing: {
  "title": "Opomena pred tužbu {rok} – besplatni obrazac PDF",
  "description": "Besplatna opomena pred tužbu: dugovani iznos slovima, temelj duga, rok za plaćanje, IBAN i upozorenje na zatezne kamate i ovrhu. PDF i Word.",
  "perex": "Dužnik ne plaća? Pisana opomena s jasnim rokom često je dovoljna – a ako nije, dokaz je da ste ga pozvali na plaćanje.",
  "obsahPopis": "Kratka opomena u jednom dijelu.",
  "obsah": [
    {
      "nazev": "Opomena",
      "popis": "Dug, temelj, rok, račun i upozorenje."
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
    "netko vam duguje dospjeli iznos",
    "želite pisano pozvati dužnika prije suda"
  ],
  "nehodiSe": [
    "dug još nije dospio",
    "dužnik je tvrtka u stečaju"
  ],
  "po": [
    {
      "nazev": "Slanje",
      "popis": "Preporučeno s povratnicom."
    },
    {
      "nazev": "Ako ne plati",
      "popis": "Ovrha kod javnog bilježnika ili tužba."
    }
  ],
  "faq": [
    {
      "q": "Je li opomena obavezna prije tužbe?",
      "a": "Nije uvijek propisana, ali pokazuje da ste dužnika pozvali na plaćanje i često ubrza naplatu."
    },
    {
      "q": "Od kada se računaju zatezne kamate?",
      "a": "Od dana dospijeća duga, ne tek od opomene."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima (zakašnjenje dužnika, zatezne kamate).",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite opomenu pred tužbu online – PDF besplatno", "description": "Opomena dužniku s rokom plaćanja. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

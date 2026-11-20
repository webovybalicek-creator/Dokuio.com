import type { StrankaDokumentu } from '../typy';
import { ugovorOPodnajmu as sablona } from '../../sablony/hr/ugovor-o-podnajmu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Ugovor o podnajmu",
  nazevA: "ugovor o podnajmu",
  katalog: {"popis": "Podnajam sobe ili stana uz dopuštenje najmodavca.", "kategorie": "stan", "ilustrace": "protokol", "slova": ["ugovor o podnajmu", "podnajam sobe", "podstanar", "podnajam stana", "cimer"]},
  souvisejici: "stan",
  landing: {
  "title": "Ugovor o podnajmu sobe ili stana {rok} – besplatni obrazac PDF",
  "description": "Besplatan ugovor o podnajmu sobe ili stana: dopuštenje najmodavca, trajanje, podnajamnina slovima, jamčevina i otkaz od 30 dana. PDF i Word.",
  "perex": "Dajete sobu cimeru ili stan dalje u podnajam? Uz pisano dopuštenje najmodavca i jasan ugovor.",
  "obsahPopis": "Sedam članaka prema Zakonu o najmu stanova.",
  "obsah": [
    {
      "nazev": "Ugovorne strane",
      "popis": "Najmoprimac i podnajmoprimac."
    },
    {
      "nazev": "Predmet",
      "popis": "Soba ili cijeli stan, dopuštenje."
    },
    {
      "nazev": "Trajanje",
      "popis": "Od – do."
    },
    {
      "nazev": "Plaćanje",
      "popis": "Podnajamnina i jamčevina."
    },
    {
      "nazev": "Obveze",
      "popis": "Korištenje stana."
    },
    {
      "nazev": "Otkaz",
      "popis": "30 dana."
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
    "unajmljeni stan ili sobu dajete dalje",
    "imate dopuštenje najmodavca"
  ],
  "nehodiSe": [
    "najmodavac nije dao dopuštenje"
  ],
  "po": [
    {
      "nazev": "Dopuštenje",
      "popis": "Pisano, priloženo ugovoru."
    }
  ],
  "faq": [
    {
      "q": "Smijem li dati stan u podnajam?",
      "a": "Samo uz dopuštenje najmodavca; podnajam bez dopuštenja razlog je za otkaz ugovora o najmu."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o najmu stanova i Zakonu o obveznim odnosima.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite ugovor o podnajmu online – PDF besplatno", "description": "Ugovor o podnajmu sobe ili stana. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

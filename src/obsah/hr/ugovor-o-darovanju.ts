import type { StrankaDokumentu } from '../typy';
import { ugovorODarovanju as sablona } from '../../sablony/hr/ugovor-o-darovanju';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Ugovor o darovanju",
  nazevA: "ugovor o darovanju",
  katalog: {"popis": "Darovanje novca ili stvari, porez na darove.", "kategorie": "novac", "ilustrace": "dar", "slova": ["ugovor o darovanju", "darovanje novca", "darovni ugovor", "porez na darove", "darovanje automobila"]},
  souvisejici: "novac",
  landing: {
  "title": "Ugovor o darovanju {rok} – besplatni obrazac PDF",
  "description": "Besplatan ugovor o darovanju novca ili pokretne stvari uz predaju: porez na darove 4 %, oslobođenja za obitelj, darovanje vozila. PDF i Word.",
  "perex": "Za darovanje novca ili stvari koja se predaje odmah. Bračni drug, djeca, roditelji i unuci ne plaćaju porez na darove.",
  "obsahPopis": "Tri članka prema Zakonu o obveznim odnosima.",
  "obsah": [
    {
      "nazev": "Ugovorne strane",
      "popis": "Darovatelj i daroprimatelj, srodstvo."
    },
    {
      "nazev": "Predmet darovanja",
      "popis": "Novac ili stvar i predaja."
    },
    {
      "nazev": "Završne odredbe",
      "popis": "Porez i troškovi."
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
    "Savjeti o porezu na darove",
    "PDF i Word"
  ],
  "hodiSe": [
    "darujete novac djetetu ili unuku",
    "darujete automobil ili drugu stvar uz predaju"
  ],
  "nehodiSe": [
    "darujete nekretninu – treba poseban ugovor",
    "dar se predaje tek kasnije – treba javnobilježnički akt"
  ],
  "po": [
    {
      "nazev": "Predaja",
      "popis": "Novac najbolje na račun."
    },
    {
      "nazev": "Porez",
      "popis": "Porezna uprava utvrđuje porez rješenjem, ako niste oslobođeni."
    }
  ],
  "faq": [
    {
      "q": "Plaća li se porez na darove?",
      "a": "Porez iznosi 4 % na novac i pokretnine vrijednosti iznad 6.700 €. Oslobođeni su bračni drug, potomci i preci te posvojenici i posvojitelji."
    },
    {
      "q": "Treba li javni bilježnik?",
      "a": "Za darovanje uz pravu predaju ne. Darovanje bez prave predaje mora biti u obliku javnobilježničkog akta ili solemnizirane isprave."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima i informacijama Porezne uprave o porezu na nasljedstva i darove.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite ugovor o darovanju online – PDF besplatno", "description": "Ugovor o darovanju novca ili stvari uz predaju. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { sporazumOObrocnojOtplati as sablona } from '../../sablony/hr/sporazum-o-obrocnoj-otplati';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Sporazum o obročnoj otplati duga",
  nazevA: "sporazum o obročnoj otplati",
  katalog: {"popis": "Dug u mjesečnim obrocima, s priznanjem duga.", "kategorie": "novac", "ilustrace": "dluh", "slova": ["obročna otplata duga", "sporazum o obrocima", "otplata na rate", "plan otplate", "priznanje duga"]},
  souvisejici: "novac",
  landing: {
  "title": "Sporazum o obročnoj otplati duga {rok} – besplatni obrazac PDF",
  "description": "Besplatan sporazum o obročnoj otplati duga: priznanje duga, iznos obroka slovima, broj i dospijeće obroka, posljedice zakašnjenja. PDF i Word.",
  "perex": "Dužnik ne može platiti odjednom? Sporazum o obrocima s priznanjem duga – i zastara počinje teći iznova.",
  "obsahPopis": "Pet članaka prema Zakonu o obveznim odnosima.",
  "obsah": [
    {
      "nazev": "Ugovorne strane",
      "popis": "Vjerovnik i dužnik."
    },
    {
      "nazev": "Priznanje duga",
      "popis": "Iznos i temelj."
    },
    {
      "nazev": "Obroci",
      "popis": "Iznos, broj, dospijeće."
    },
    {
      "nazev": "Zakašnjenje",
      "popis": "Dospijeće ostatka."
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
    "Podsjetnici na obroke",
    "PDF i Word"
  ],
  "hodiSe": [
    "dogovarate otplatu duga na rate",
    "želite pisano priznanje duga"
  ],
  "nehodiSe": [
    "dug osporava – sporazum neće potpisati"
  ],
  "po": [
    {
      "nazev": "Obroci",
      "popis": "Spremite datume u kalendar."
    }
  ],
  "faq": [
    {
      "q": "Prekida li sporazum zastaru?",
      "a": "Da, dužnik u sporazumu priznaje dug, a priznanjem se zastara prekida."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima (priznanje duga, zastara, zatezne kamate).",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite sporazum o obročnoj otplati online – PDF besplatno", "description": "Sporazum o otplati duga u obrocima. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

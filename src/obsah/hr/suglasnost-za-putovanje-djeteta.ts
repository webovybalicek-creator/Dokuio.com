import type { StrankaDokumentu } from '../typy';
import { suglasnostZaPutovanjeDjeteta as sablona } from '../../sablony/hr/suglasnost-za-putovanje-djeteta';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Suglasnost za putovanje djeteta",
  nazevA: "suglasnost za putovanje djeteta",
  katalog: {"popis": "Dijete putuje s jednim roditeljem ili bez roditelja.", "kategorie": "obitelj", "ilustrace": "plnamoc", "slova": ["suglasnost za putovanje djeteta", "putovanje maloljetnika", "suglasnost roditelja", "dijete putuje u inozemstvo", "ovjera suglasnosti"]},
  souvisejici: "obitelj",
  landing: {
  "title": "Suglasnost za putovanje maloljetnog djeteta {rok} – obrazac PDF",
  "description": "Besplatna suglasnost roditelja za putovanje maloljetnog djeteta u inozemstvo s drugim roditeljem, pratiteljem ili bez pratnje. Za ovjeru kod bilježnika. PDF i Word.",
  "perex": "Dijete putuje s jednim roditeljem, s bakom ili na školski izlet u inozemstvo? Pisana suglasnost roditelja koji ne putuje.",
  "obsahPopis": "Kratka izjava roditelja.",
  "obsah": [
    {
      "nazev": "Suglasnost",
      "popis": "Roditelj, dijete, pratitelj, odredište i razdoblje."
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
    "dijete putuje bez jednog ili oba roditelja"
  ],
  "nehodiSe": [
    "dijete se seli u inozemstvo – treba suglasnost drugog roditelja ili odluka suda"
  ],
  "po": [
    {
      "nazev": "Ovjera",
      "popis": "Kod javnog bilježnika."
    },
    {
      "nazev": "Putne isprave",
      "popis": "Dijete ima vlastitu osobnu ili putovnicu."
    }
  ],
  "faq": [
    {
      "q": "Je li suglasnost obavezna?",
      "a": "Granična policija ili prijevoznik mogu tražiti dokument s potpisom roditelja kojim se odobrava putovanje; najbolje je imati ga ovjerenog."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na informacijama Your Europe o putovanju maloljetnika iz Hrvatske.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite suglasnost za putovanje djeteta online – PDF besplatno", "description": "Suglasnost roditelja za putovanje djeteta. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;

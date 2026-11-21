import type { StrankaDokumentu } from '../typy';
import { kupoprodajnaPogodbaMotor as sablona } from '../../sablony/si/kupoprodajna-pogodba-motor';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kupoprodajna pogodba za motor",
  nazevA: "kupoprodajno pogodbo za motor",
  katalog: {"popis": "Motorno kolo, skuter ali štirikolesnik.", "kategorie": "auto", "ilustrace": "motorka", "slova": ["kupoprodajna pogodba motor", "prodaja motorja", "pogodba za motorno kolo", "skuter", "prepis motorja"]},
  souvisejici: "auto",
  landing: {
  "title": "Kupoprodajna pogodba za motor {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna kupoprodajna pogodba za motorno kolo, skuter ali štirikolesnik: številka šasije, kilometri, napake, kupnina in prepis v 15 dneh. PDF in Word.",
  "perex": "Za prodajo rabljenega motorja, skuterja ali štirikolesnika med fizičnimi osebami.",
  "obsahPopis": "Sedem členov po Obligacijskem zakoniku.",
  "obsah": [
    {
      "nazev": "Pogodbeni stranki",
      "popis": "Prodajalec in kupec."
    },
    {
      "nazev": "Predmet",
      "popis": "Vozilo, številka šasije, registrska oznaka."
    },
    {
      "nazev": "Stanje",
      "popis": "Kilometri, napake, oprema (čelada, kovčki)."
    },
    {
      "nazev": "Kupnina",
      "popis": "Znesek z besedo in plačilo."
    },
    {
      "nazev": "Izročitev in prepis",
      "popis": "Ura izročitve, rok 15 dni."
    }
  ],
  "kroky": [
    {
      "nazev": "Izpolnite podatke",
      "popis": "Česar ne veste, preskočite – ostala bo črta za izpolnitev na roko."
    },
    {
      "nazev": "Preverite besedilo",
      "popis": "Vsak odstavek lahko uredite."
    },
    {
      "nazev": "Prenesite in podpišite",
      "popis": "PDF ali Word brezplačno."
    }
  ],
  "online": [
    "Znesek z besedo samodejno",
    "Preverjanje številke šasije",
    "PDF in Word"
  ],
  "hodiSe": [
    "prodajate ali kupujete rabljen motor od fizične osebe"
  ],
  "nehodiSe": [
    "kupujete pri trgovcu"
  ],
  "po": [
    {
      "nazev": "Izročitev",
      "popis": "Zapisnik o izročitvi vozila."
    },
    {
      "nazev": "Prepis",
      "popis": "V 15 dneh na registracijski organizaciji."
    }
  ],
  "faq": [
    {
      "q": "Velja za skuter enako kot za motor?",
      "a": "Da, za vsa registrirana vozila velja prijava spremembe lastništva v 15 dneh."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku in informacijah Ministrstva za infrastrukturo.",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite kupoprodajno pogodbo za motor na spletu – PDF brezplačno", "description": "Kupoprodajna pogodba za motorno kolo ali skuter. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

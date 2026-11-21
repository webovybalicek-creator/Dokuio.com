import type { StrankaDokumentu } from '../typy';
import { kupoprodajnaPogodbaAvto as sablona } from '../../sablony/si/kupoprodajna-pogodba-avto';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kupoprodajna pogodba za avto",
  nazevA: "kupoprodajno pogodbo za avto",
  katalog: {"popis": "Prodaja rabljenega avtomobila med fizičnimi osebami.", "kategorie": "auto", "ilustrace": "auto", "slova": ["kupoprodajna pogodba avto", "pogodba za prodajo vozila", "prodaja avtomobila", "rabljen avto", "prepis vozila"]},
  souvisejici: "auto",
  landing: {
  "title": "Kupoprodajna pogodba za avto {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna kupoprodajna pogodba za rabljen avto po slovenskem pravu: davčna številka, številka šasije, kilometri, napake, plačilo in ura izročitve. PDF in Word.",
  "perex": "Za prodajo rabljenega avtomobila med fizičnimi osebami. Z uro izročitve, znanimi napakami in rokom 15 dni za prijavo spremembe lastništva.",
  "obsahPopis": "Sedem členov po Obligacijskem zakoniku.",
  "obsah": [
    {
      "nazev": "Pogodbeni stranki",
      "popis": "Prodajalec in kupec z davčno številko."
    },
    {
      "nazev": "Predmet pogodbe",
      "popis": "Vozilo, številka šasije, registrska oznaka."
    },
    {
      "nazev": "Stanje vozila",
      "popis": "Kilometri in znane napake."
    },
    {
      "nazev": "Kupnina in plačilo",
      "popis": "Znesek z besedo, gotovina ali račun, pridržek lastninske pravice."
    },
    {
      "nazev": "Izročitev vozila",
      "popis": "Datum, ura, ključi, dokumenti."
    },
    {
      "nazev": "Sprememba lastništva",
      "popis": "Rok 15 dni in stroški."
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
    "Opomnik na rok 15 dni",
    "Zapisnik o izročitvi prevzame podatke"
  ],
  "hodiSe": [
    "prodajate ali kupujete rabljen avto od fizične osebe",
    "želite pisno imeti kupnino, stanje in uro izročitve"
  ],
  "nehodiSe": [
    "kupujete pri avtohiši – ta ima svojo pogodbo",
    "je vozilo na leasingu ali zastavljeno"
  ],
  "po": [
    {
      "nazev": "Izročitev",
      "popis": "Zapisnik o izročitvi z uro in kilometri."
    },
    {
      "nazev": "Prepis",
      "popis": "Spremembo lastništva prijavite na registracijski organizaciji v 15 dneh."
    },
    {
      "nazev": "Zavarovanje",
      "popis": "Prodajalec obvesti zavarovalnico."
    }
  ],
  "faq": [
    {
      "q": "Ali je treba podpis overiti?",
      "a": "Če prepis ureja le ena stranka, naj ima pogodbo z overjenim podpisom druge. Overitev pri notarju stane največ 10 €."
    },
    {
      "q": "Do kdaj je treba prijaviti spremembo lastništva?",
      "a": "Spremembo je treba prijaviti v 15 dneh. Ministrstvo svetuje, da vozila z dokumenti ne izročite pred opravljenim prepisom."
    },
    {
      "q": "Kdo plača stroške prepisa?",
      "a": "Stroške prepisa in registracije običajno plača kupec; v pogodbi se lahko dogovorite drugače."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku in informacijah Ministrstva za infrastrukturo o prenosu lastništva vozila.",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite kupoprodajno pogodbo za avto na spletu – PDF brezplačno", "description": "Vodnik za kupoprodajno pogodbo za rabljen avto po slovenskem pravu. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

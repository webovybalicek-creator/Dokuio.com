import type { StrankaDokumentu } from '../typy';
import { atmaksasVienosanas as sablona } from '../../sablony/lv/vienosanas-par-parada-atmaksu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Vienošanās par parāda atmaksu",
  nazevA: "vienošanos par parāda atmaksu",
  katalog: {"popis": "Parāda samaksa ikmēneša maksājumos.", "kategorie": "nauda", "ilustrace": "dluh", "slova": ["vienošanās par parāda atmaksu", "parāda atmaksas grafiks", "parāds pa daļām", "maksājumu grafiks", "vienosanas par parada atmaksu"]},
  souvisejici: "nauda",
  landing: {
  "title": "Vienošanās par parāda atmaksu {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas vienošanās paraugs par parāda atmaksu pa daļām: parāda atzīšana, maksājumu skaits un summa, sekas kavējuma gadījumā. PDF un Word.",
  "perex": "Ja parādnieks nevar samaksāt uzreiz. Vienošanās par ikmēneša maksājumiem ir arī parāda atzīšana.",
  "obsahPopis": "Punkti par atmaksu.",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Kreditors un parādnieks."
    },
    {
      "nazev": "Atzīšana",
      "popis": "Parāda apmērs un pamats."
    },
    {
      "nazev": "Maksājumi",
      "popis": "Skaits, summa, datums."
    },
    {
      "nazev": "Kavējums",
      "popis": "Viss atlikums kļūst samaksājams."
    }
  ],
  "kroky": [
    {
      "nazev": "Aizpildiet datus",
      "popis": "Ko nezināt, izlaidiet – paliks līnija aizpildīšanai ar roku."
    },
    {
      "nazev": "Pārbaudiet tekstu",
      "popis": "Katru rindkopu varat rediģēt."
    },
    {
      "nazev": "Lejupielādējiet un parakstiet",
      "popis": "PDF vai Word, bez maksas."
    }
  ],
  "online": [
    "Summa vārdiem automātiski",
    "PDF un Word"
  ],
  "hodiSe": [
    "parāds jāsamaksā pa daļām"
  ],
  "nehodiSe": [
    "parādnieks vispār nemaksā – sāciet ar pieprasījumu"
  ],
  "po": [
    {
      "nazev": "Maksājumi",
      "popis": "Maksājiet ar pārskaitījumu."
    }
  ],
  "faq": [
    {
      "q": "Vai vienošanās pārtrauc noilgumu?",
      "a": "Jā. Ar vienošanos parādnieks atzīst parādu, un atzīšana pārtrauc noilgumu."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē vienošanos par atmaksu – PDF", "description": "Vienošanās par parāda atmaksu pa daļām. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

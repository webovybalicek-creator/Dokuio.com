import type { StrankaDokumentu } from '../typy';
import { patapinajums as sablona } from '../../sablony/lv/patapinajuma-ligums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Patapinājuma līgums",
  nazevA: "patapinājuma līgumu",
  katalog: {"popis": "Lietas nodošana bezatlīdzības lietošanā.", "kategorie": "pirkumi", "ilustrace": "protokol", "slova": ["patapinājuma līgums", "lietas aizdošana", "bezatlīdzības lietošana", "patapinajuma ligums"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Patapinājuma līgums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas patapinājuma līguma paraugs lietas aizdošanai bez maksas: lietas apraksts un stāvoklis, termiņš, atdošana un atbildība. PDF un Word.",
  "perex": "Ja aizdodat lietu bez maksas – piekabi, instrumentus, tehniku. Līgums fiksē stāvokli un atdošanas termiņu.",
  "obsahPopis": "Punkti par patapinājumu.",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Patapinātājs un ņēmējs."
    },
    {
      "nazev": "Lieta",
      "popis": "Apraksts, stāvoklis, vērtība, mērķis."
    },
    {
      "nazev": "Termiņš",
      "popis": "Līdz datumam vai mērķa sasniegšanai."
    },
    {
      "nazev": "Lietošana",
      "popis": "Rūpība, trešās personas, izdevumi."
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
    "Atgādinājums par atdošanu",
    "PDF un Word"
  ],
  "hodiSe": [
    "aizdodat lietu draugam bez maksas"
  ],
  "nehodiSe": [
    "par lietošanu prasāt maksu – tas ir nomas līgums"
  ],
  "po": [
    {
      "nazev": "Nodošana",
      "popis": "Pārbaudiet lietu kopā."
    }
  ],
  "faq": [
    {
      "q": "Kāda ir atšķirība no nomas?",
      "a": "Patapinājums ir bez atlīdzības. Ja par lietošanu maksā, tā ir noma."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem par patapinājumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē patapinājuma līgumu – PDF", "description": "Lietas aizdošana bez maksas. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { uznemumaLigums as sablona } from '../../sablony/lv/uznemuma-ligums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Uzņēmuma līgums",
  nazevA: "uzņēmuma līgumu",
  katalog: {"popis": "Meistars, remonts, renovācija.", "kategorie": "pakalpojumi", "ilustrace": "protokol", "slova": ["uzņēmuma līgums", "remonta līgums", "līgums ar meistaru", "renovācijas līgums", "būvdarbu līgums", "uznemuma ligums"]},
  souvisejici: "pakalpojumi",
  landing: {
  "title": "Uzņēmuma līgums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas uzņēmuma līguma paraugs darbiem ar meistaru: darbu apraksts, termiņi, atlīdzība vārdiem, avanss, pieņemšana un trūkumi. PDF un Word.",
  "perex": "Remontam, renovācijai vai citam darbam, ko pasūtāt meistaram vai firmai. Aprakstiet darbu, termiņu un samaksu.",
  "obsahPopis": "Punkti par darbu.",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Pasūtītājs un uzņēmējs."
    },
    {
      "nazev": "Darbs",
      "popis": "Apraksts, vieta, materiāli."
    },
    {
      "nazev": "Termiņi",
      "popis": "Sākums un pabeigšana."
    },
    {
      "nazev": "Atlīdzība",
      "popis": "Summa, avanss, rēķini."
    },
    {
      "nazev": "Pieņemšana",
      "popis": "Trūkumi un to novēršana."
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
    "pasūtāt remontu vai renovāciju",
    "vēlaties rakstveidā cenu un termiņu"
  ],
  "nehodiSe": [
    "pieņemat darbā darbinieku – tas ir darba līgums"
  ],
  "po": [
    {
      "nazev": "Pieņemšana",
      "popis": "Pārbaudiet darbu un pierakstiet trūkumus."
    },
    {
      "nazev": "Rēķini",
      "popis": "Saglabājiet rēķinus."
    }
  ],
  "faq": [
    {
      "q": "Cik lielu avansu maksāt?",
      "a": "Iespējami mazu – lielāko daļu maksājiet pēc darba pieņemšanas bez būtiskiem trūkumiem."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem par uzņēmuma līgumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē uzņēmuma līgumu – PDF", "description": "Līgums par darbiem ar meistaru. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

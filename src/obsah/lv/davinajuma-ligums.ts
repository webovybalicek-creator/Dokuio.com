import type { StrankaDokumentu } from '../typy';
import { davinajums as sablona } from '../../sablony/lv/davinajuma-ligums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Dāvinājuma līgums",
  nazevA: "dāvinājuma līgumu",
  katalog: {"popis": "Naudas vai lietas dāvināšana.", "kategorie": "nauda", "ilustrace": "dar", "slova": ["dāvinājuma līgums", "naudas dāvinājums", "dāvana radiniekam", "dāvinājums un nodoklis", "dāvinājuma līgums nauda", "davinajuma ligums"]},
  souvisejici: "nauda",
  landing: {
  "title": "Dāvinājuma līgums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas dāvinājuma līguma paraugs naudai vai kustamai lietai: puses, radniecība, dāvanas vērtība vārdiem. Nodokļa robeža 1425 eiro. PDF un Word.",
  "perex": "Naudas vai kustamas lietas dāvināšanai. Dāvanas no laulātā un tuviem radiniekiem neapliek ar nodokli; no citiem – virs 1425 eiro gadā.",
  "obsahPopis": "Punkti par dāvinājumu.",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Dāvinātājs un apdāvinātais, radniecība."
    },
    {
      "nazev": "Dāvana",
      "popis": "Naudas summa vai lieta ar vērtību."
    },
    {
      "nazev": "Noslēguma noteikumi",
      "popis": "Eksemplāri."
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
    "dāvināt naudu vai lietu",
    "vēlaties pierādījumu par dāvanu un tās vērtību"
  ],
  "nehodiSe": [
    "dāvināt nekustamo īpašumu – vajadzīga nostiprināšana zemesgrāmatā"
  ],
  "po": [
    {
      "nazev": "Nodošana",
      "popis": "Nododiet lietu vai pārskaitiet naudu."
    },
    {
      "nazev": "Nodoklis",
      "popis": "Ja dāvana no personas, kas nav radinieks, pārsniedz 1425 eiro gadā, apdāvinātais deklarē pārsniegumu."
    }
  ],
  "faq": [
    {
      "q": "Vai par dāvanu jāmaksā nodoklis?",
      "a": "Dāvanas no laulātā un radiniekiem līdz trešajai pakāpei neapliek ar iedzīvotāju ienākuma nodokli. No citām fiziskām personām neapliek līdz 1425 eiro gadā; no pārsnieguma nodokli maksā apdāvinātais."
    },
    {
      "q": "Kuri ir radinieki līdz trešajai pakāpei?",
      "a": "Vecāki, vecvecāki, bērni, mazbērni, brāļi, māsas, vecāku brāļi un māsas, kā arī brāļu un māsu bērni."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem par dāvinājumu un VID skaidrojumiem par dāvanu aplikšanu ar nodokli.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē dāvinājuma līgumu – PDF", "description": "Naudas vai lietas dāvinājuma līgums. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

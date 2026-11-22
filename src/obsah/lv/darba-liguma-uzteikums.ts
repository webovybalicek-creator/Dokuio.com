import type { StrankaDokumentu } from '../typy';
import { darbaUzteikums as sablona } from '../../sablony/lv/darba-liguma-uzteikums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Darbinieka uzteikums",
  nazevA: "darbinieka uzteikumu",
  katalog: {"popis": "Aiziešana no darba, mēnesi iepriekš.", "kategorie": "darbs", "ilustrace": "protokol", "slova": ["darbinieka uzteikums", "atlūgums", "darba līguma uzteikums", "atlūguma paraugs", "aiziešana no darba", "darba liguma uzteikums"]},
  souvisejici: "darbs",
  landing: {
  "title": "Atlūgums (darbinieka uzteikums) {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas darbinieka uzteikuma (atlūguma) paraugs pēc Darba likuma 100. panta: rakstveidā vienu mēnesi iepriekš, pēdējā darba diena. PDF un Word.",
  "perex": "Darbiniekam, kurš aiziet no darba. Darba likums paredz rakstveida uzteikumu vienu mēnesi iepriekš, ja nav nolīgts īsāks termiņš.",
  "obsahPopis": "Īss uzteikums.",
  "obsah": [
    {
      "nazev": "Uzteikums",
      "popis": "Darbinieks, darba devējs, līgums, pēdējā diena."
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
    "Atgādinājums par mēneša termiņu",
    "PDF un Word"
  ],
  "hodiSe": [
    "aizejat no darba pēc savas iniciatīvas"
  ],
  "nehodiSe": [
    "vēlaties izbeigt darbu nekavējoties svarīga iemesla dēļ – tad uzteikumā jānorāda apstākļi"
  ],
  "po": [
    {
      "nazev": "Saņemšana",
      "popis": "Lūdziet apliecināt saņemšanu."
    },
    {
      "nazev": "Norēķins",
      "popis": "Pārbaudiet kompensāciju par atvaļinājumu."
    }
  ],
  "faq": [
    {
      "q": "Vai darba devējs var atteikties pieņemt uzteikumu?",
      "a": "Nē. Darbinieka uzteikums ir saistošs, un darba attiecības izbeidzas pēc uzteikuma termiņa beigām."
    },
    {
      "q": "Vai var aiziet ātrāk?",
      "a": "Jā, ja vienojaties ar darba devēju – vienošanos noformējiet rakstveidā."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Darba likuma 100. pantu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē darbinieka uzteikumu – PDF", "description": "Darbinieka uzteikums (atlūgums). PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

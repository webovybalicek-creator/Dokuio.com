import type { StrankaDokumentu } from '../typy';
import { autoAkts as sablona } from '../../sablony/lv/auto-nodosanas-akts';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Transportlīdzekļa pieņemšanas-nodošanas akts",
  nazevA: "transportlīdzekļa pieņemšanas-nodošanas aktu",
  katalog: {"popis": "Nobraukums, bojājumi, atslēgas un nodošanas laiks.", "kategorie": "auto", "ilustrace": "protokol", "slova": ["auto nodošanas akts", "transportlīdzekļa pieņemšanas nodošanas akts", "auto nodošana", "nobraukums", "auto nodosanas akts"]},
  souvisejici: "auto",
  landing: {
  "title": "Auto nodošanas akts {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas transportlīdzekļa pieņemšanas-nodošanas akta paraugs: precīzs laiks, nobraukums, degviela, atslēgas, dokumenti un bojājumi. PDF un Word.",
  "perex": "Fiksē transportlīdzekļa stāvokli un precīzu nodošanas laiku – svarīgi, ja pēc pārdošanas pienāk sods vai stāvvietas maksa.",
  "obsahPopis": "Īss akts.",
  "obsah": [
    {
      "nazev": "Nodošana",
      "popis": "Kas, kam, kad un cikos."
    },
    {
      "nazev": "Atslēgas un dokumenti",
      "popis": "Kas tiek nodots kopā ar transportlīdzekli."
    },
    {
      "nazev": "Stāvoklis",
      "popis": "Bojājumi un piezīmes."
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
    "Pārņem datus no pirkuma līguma",
    "VIN pārbaude",
    "PDF un Word"
  ],
  "hodiSe": [
    "pārdodat vai aizdodat auto",
    "atdodat transportlīdzekli pēc patapinājuma"
  ],
  "nehodiSe": [
    "jums vajadzīgs arī līgums – izmantojiet pirkuma līgumu"
  ],
  "po": [
    {
      "nazev": "Fotogrāfijas",
      "popis": "Nofotografējiet transportlīdzekli un spidometru."
    },
    {
      "nazev": "Eksemplāri",
      "popis": "Katra puse patur vienu."
    }
  ],
  "faq": [
    {
      "q": "Kāpēc ierakstīt nodošanas laiku?",
      "a": "Līdz īpašnieka maiņai reģistrā par īpašnieku uzskata pēdējo reģistrēto – sodi un paziņojumi var pienākt viņam. Akts ar laiku pierāda, kura rokās transportlīdzeklis bija."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē auto nodošanas aktu – PDF", "description": "Auto pieņemšanas-nodošanas akts ar laiku. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

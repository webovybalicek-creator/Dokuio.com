import type { StrankaDokumentu } from '../typy';
import { dzivoklaAkts as sablona } from '../../sablony/lv/dzivokla-nodosanas-akts';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Dzīvojamās telpas pieņemšanas-nodošanas akts",
  nazevA: "dzīvojamās telpas pieņemšanas-nodošanas aktu",
  katalog: {"popis": "Skaitītāju rādījumi, atslēgas un stāvoklis.", "kategorie": "majoklis", "ilustrace": "protokol", "slova": ["dzīvokļa nodošanas akts", "dzīvokļa pieņemšanas nodošanas akts", "skaitītāju rādījumi", "dzivokla nodosanas akts"]},
  souvisejici: "majoklis",
  landing: {
  "title": "Dzīvokļa nodošanas akts {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas dzīvokļa pieņemšanas-nodošanas akta paraugs: skaitītāju rādījumi, atslēgas, iekārtojums un bojājumi īres sākumā vai beigās. PDF un Word.",
  "perex": "Īres sākumā un beigās: skaitītāji, atslēgas un stāvoklis. Palīdz strīdos par drošības naudu.",
  "obsahPopis": "Īss akts.",
  "obsah": [
    {
      "nazev": "Akts",
      "popis": "Skaitītāji, atslēgas, iekārtojums, bojājumi."
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
    "Pārņem datus no īres līguma",
    "PDF un Word"
  ],
  "hodiSe": [
    "nododat vai atdodat izīrētu dzīvokli"
  ],
  "nehodiSe": [
    "jums vajadzīgs arī līgums – izmantojiet īres līgumu"
  ],
  "po": [
    {
      "nazev": "Fotogrāfijas",
      "popis": "Nofotografējiet skaitītājus un telpas."
    }
  ],
  "faq": [
    {
      "q": "Kāpēc akts ir svarīgs?",
      "a": "Tas pierāda, kādā stāvoklī dzīvoklis tika nodots – īres beigās var salīdzināt un izlemt par drošības naudu."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Dzīvojamo telpu īres likumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē dzīvokļa nodošanas aktu – PDF", "description": "Dzīvokļa pieņemšanas-nodošanas akts. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

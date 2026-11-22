import type { StrankaDokumentu } from '../typy';
import { pirkumaLigums as sablona } from '../../sablony/lv/pirkuma-ligums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pirkuma līgums",
  nazevA: "pirkuma līgumu",
  katalog: {"popis": "Lietotas lietas pārdošana pēc sludinājuma.", "kategorie": "pirkumi", "ilustrace": "protokol", "slova": ["pirkuma līgums", "lietas pirkuma līgums", "pirkuma līgums starp privātpersonām", "lietotas lietas pārdošana", "pirkuma ligums"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Pirkuma līgums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas pirkuma līguma paraugs lietotai lietai: apraksts, stāvoklis un defekti, cena vārdiem, samaksa skaidrā naudā vai pārskaitījumā. PDF un Word.",
  "perex": "Lietotas lietas pārdošanai starp privātpersonām – velosipēds, telefons, mēbeles, tehnika.",
  "obsahPopis": "Punkti par pirkumu.",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Pārdevējs un pircējs."
    },
    {
      "nazev": "Lieta",
      "popis": "Apraksts, stāvoklis, defekti."
    },
    {
      "nazev": "Cena",
      "popis": "Summa vārdiem un samaksa."
    },
    {
      "nazev": "Nodošana",
      "popis": "Īpašuma un riska pāreja."
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
    "pārdodat vai pērkat lietotu lietu",
    "vēlaties rakstveidā stāvokli un cenu"
  ],
  "nehodiSe": [
    "pārdodat transportlīdzekli – izmantojiet auto pirkuma līgumu"
  ],
  "po": [
    {
      "nazev": "Nodošana",
      "popis": "Nododiet lietu ar piederumiem."
    },
    {
      "nazev": "Eksemplāri",
      "popis": "Katra puse patur vienu."
    }
  ],
  "faq": [
    {
      "q": "Vai pirkumam starp privātpersonām vajadzīgs rakstveida līgums?",
      "a": "Kustamas lietas pirkumam likums rakstveida formu neprasa, taču līgums pierāda cenu, stāvokli un zināmos defektus."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem par pirkuma līgumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē pirkuma līgumu – PDF", "description": "Lietas pirkuma līgums starp privātpersonām. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { ligumaUzteikums as sablona } from '../../sablony/lv/liguma-uzteikums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Līguma uzteikums",
  nazevA: "līguma uzteikumu",
  katalog: {"popis": "Telefons, internets, apdrošināšana, sporta klubs.", "kategorie": "pirkumi", "ilustrace": "protokol", "slova": ["līguma uzteikums", "pakalpojuma līguma izbeigšana", "abonementa atteikšana", "sporta kluba līguma uzteikums", "liguma uzteikums"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Līguma uzteikums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas līguma uzteikuma paraugs: pakalpojuma, abonementa vai dalības līguma izbeigšana ar uzteikuma termiņu un apstiprinājuma lūgumu. PDF un Word.",
  "perex": "Telefona, interneta, apdrošināšanas vai sporta kluba līguma izbeigšanai saskaņā ar līguma noteikumiem.",
  "obsahPopis": "Īss uzteikums.",
  "obsah": [
    {
      "nazev": "Uzteikums",
      "popis": "Klients, pakalpojuma sniedzējs, līgums, izbeigšanās datums."
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
    "Atgādinājums par izbeigšanos",
    "PDF un Word"
  ],
  "hodiSe": [
    "vēlaties izbeigt pakalpojuma līgumu"
  ],
  "nehodiSe": [
    "līgumu noslēdzāt internetā pirms mazāk nekā 14 dienām – izmantojiet atteikumu"
  ],
  "po": [
    {
      "nazev": "Apstiprinājums",
      "popis": "Lūdziet apstiprināt izbeigšanās datumu."
    }
  ],
  "faq": [
    {
      "q": "Kāds ir uzteikuma termiņš?",
      "a": "To nosaka līgums vai vispārīgie noteikumi – pārbaudiet tos un iespējamo minimālo līguma termiņu."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē līguma uzteikumu – PDF", "description": "Pakalpojuma vai abonementa līguma uzteikums. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

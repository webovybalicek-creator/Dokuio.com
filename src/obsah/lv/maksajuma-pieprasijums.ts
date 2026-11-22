import type { StrankaDokumentu } from '../typy';
import { maksajumaPieprasijums as sablona } from '../../sablony/lv/maksajuma-pieprasijums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Maksājuma pieprasījums",
  nazevA: "maksājuma pieprasījumu",
  katalog: {"popis": "Pieprasījums parādniekam ar termiņu.", "kategorie": "nauda", "ilustrace": "dluh", "slova": ["maksājuma pieprasījums", "atgādinājums par parādu", "brīdinājums par parāda samaksu", "parāda piedziņa", "maksajuma pieprasijums"]},
  souvisejici: "nauda",
  landing: {
  "title": "Maksājuma pieprasījums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas maksājuma pieprasījuma paraugs parādniekam: summa vārdiem, parāda pamats, jauns termiņš. Atgādinājums pārtrauc noilgumu. PDF un Word.",
  "perex": "Pirms vēršanās tiesā. Parādniekam rakstveidā atgādina par parādu un dod jaunu termiņu.",
  "obsahPopis": "Īss pieprasījums.",
  "obsah": [
    {
      "nazev": "Pieprasījums",
      "popis": "Parāds, pamats, termiņš, konts."
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
    "kāds jums nemaksā",
    "vēlaties atgādināt rakstveidā"
  ],
  "nehodiSe": [
    "vēlaties vienoties par maksājumiem – izmantojiet vienošanos par atmaksu"
  ],
  "po": [
    {
      "nazev": "Nosūtīšana",
      "popis": "Ierakstītā vēstulē vai ar eParakstu pa e-pastu."
    },
    {
      "nazev": "Tiesa",
      "popis": "Ja nemaksā, vērsieties tiesā."
    }
  ],
  "faq": [
    {
      "q": "Vai atgādinājums pārtrauc noilgumu?",
      "a": "Jā. Saskaņā ar Civillikumu atgādinājums parādniekam pārtrauc noilgumu – saglabājiet pierādījumu, ka tas tika nogādāts."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem par nokavējumu un noilgumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē maksājuma pieprasījumu – PDF", "description": "Maksājuma pieprasījums parādniekam. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

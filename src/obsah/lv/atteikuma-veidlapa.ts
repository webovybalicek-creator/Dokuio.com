import type { StrankaDokumentu } from '../typy';
import { atteikums as sablona } from '../../sablony/lv/atteikuma-veidlapa';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Paziņojums par atteikuma tiesību izmantošanu",
  nazevA: "paziņojumu par atteikumu",
  katalog: {"popis": "Pirkuma internetā atgriešana 14 dienu laikā.", "kategorie": "pirkumi", "ilustrace": "protokol", "slova": ["atteikuma veidlapa", "atteikuma tiesības", "preces atgriešana 14 dienas", "atkāpšanās no distances līguma", "e-veikala atteikums", "atteikuma veidlapa paraugs"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Atteikuma veidlapa {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas paziņojuma paraugs par atteikuma tiesību izmantošanu: atgrieziet pirkumu internetā 14 dienu laikā bez iemesla. PDF un Word.",
  "perex": "Atteikumam no pirkuma e-veikalā vai pa telefonu 14 dienu laikā pēc preces saņemšanas – bez iemesla norādīšanas.",
  "obsahPopis": "Īss paziņojums.",
  "obsah": [
    {
      "nazev": "Paziņojums",
      "popis": "Tirgotājs, prece, pasūtījums, datumi, konts atmaksai."
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
    "PDF un Word",
    "Bez reģistrācijas"
  ],
  "hodiSe": [
    "pirkāt internetā vai pa telefonu un vēlaties preci atgriezt"
  ],
  "nehodiSe": [
    "pirkāt veikalā – tur 14 dienu tiesības likums nedod"
  ],
  "po": [
    {
      "nazev": "Nosūtīšana",
      "popis": "Nosūtiet paziņojumu pirms termiņa beigām."
    },
    {
      "nazev": "Prece",
      "popis": "Nosūtiet preci atpakaļ 14 dienu laikā."
    }
  ],
  "faq": [
    {
      "q": "No kura brīža skaita 14 dienas?",
      "a": "Precēm – no dienas, kad preci saņēmāt; pakalpojumiem – no līguma noslēgšanas dienas."
    },
    {
      "q": "Kad tirgotājs atmaksā naudu?",
      "a": "14 dienu laikā pēc tam, kad uzzināja par atteikumu; viņš var nogaidīt, kamēr prece atgriezta."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz ES patērētāju tiesībām (Your Europe) un Patērētāju tiesību aizsardzības likumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē atteikuma veidlapu – PDF", "description": "Paziņojums par atteikumu no pirkuma internetā. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

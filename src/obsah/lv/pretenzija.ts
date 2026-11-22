import type { StrankaDokumentu } from '../typy';
import { pretenzija as sablona } from '../../sablony/lv/pretenzija';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pretenzija par preces neatbilstību",
  nazevA: "pretenziju par preces neatbilstību",
  katalog: {"popis": "Preces defekts, 2 gadu atbildība.", "kategorie": "pirkumi", "ilustrace": "protokol", "slova": ["pretenzija", "pretenzija par preces neatbilstību", "pretenzijas paraugs", "preces defekts", "garantija 2 gadi", "reklamācija"]},
  souvisejici: "pirkumi",
  landing: {
  "title": "Pretenzija {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas pretenzijas paraugs par preces neatbilstību: defekta apraksts un prasījums – salabošana, apmaiņa, cenas samazinājums vai atmaksa. PDF un Word.",
  "perex": "Ja preces defekts atklājas 2 gadu laikā. Pretenziju iesniedz 2 mēnešu laikā pēc defekta atklāšanas.",
  "obsahPopis": "Īsa pretenzija.",
  "obsah": [
    {
      "nazev": "Pretenzija",
      "popis": "Prece, pirkums, defekts, prasījums."
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
    "Atgādinājums par 2 mēnešu termiņu",
    "PDF un Word"
  ],
  "hodiSe": [
    "nopirktajai precei ir defekts",
    "pārdevējs nevēlas palīdzēt"
  ],
  "nehodiSe": [
    "pirkāt no privātpersonas – patērētāju tiesības tur nepiemēro"
  ],
  "po": [
    {
      "nazev": "Pierādījumi",
      "popis": "Pievienojiet čeku un fotogrāfijas."
    },
    {
      "nazev": "PTAC",
      "popis": "Ja pārdevējs atsaka, varat vērsties PTAC."
    }
  ],
  "faq": [
    {
      "q": "Cik ilgi pārdevējs atbild par defektu?",
      "a": "2 gadus no preces piegādes. Ja defekts atklājas pirmā gada laikā, pieņem, ka tas pastāvēja jau piegādes brīdī."
    },
    {
      "q": "Cik ātri jāiesniedz pretenzija?",
      "a": "Ne vēlāk kā 2 mēnešu laikā no dienas, kad defektu atklājāt."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Patērētāju tiesību aizsardzības likumu un ES noteikumiem par likumisko garantiju.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē pretenziju par preci – PDF", "description": "Pretenzija par preces neatbilstību. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

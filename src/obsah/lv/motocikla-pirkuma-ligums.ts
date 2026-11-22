import type { StrankaDokumentu } from '../typy';
import { motociklaLigums as sablona } from '../../sablony/lv/motocikla-pirkuma-ligums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Motocikla pirkuma līgums",
  nazevA: "motocikla pirkuma līgumu",
  katalog: {"popis": "Motocikls, motorollers vai kvadricikls.", "kategorie": "auto", "ilustrace": "motorka", "slova": ["motocikla pirkuma līgums", "motocikla pārdošana", "motorollera pārdošana", "kvadricikla pārdošana", "motocikla pirkuma ligums"]},
  souvisejici: "auto",
  landing: {
  "title": "Motocikla pirkuma līgums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas motocikla vai motorollera pirkuma līguma paraugs: VIN, nobraukums, defekti, samaksa un nodošanas laiks. PDF un Word.",
  "perex": "Motocikla, motorollera vai kvadricikla pārdošanai starp privātpersonām. Tas pats pārbaudītais teksts kā auto; īpašnieka maiņa e-CSDD.",
  "obsahPopis": "Punkti par transportlīdzekļa pārdošanu un nodošanu.",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Pārdevējs un pircējs ar personas kodu."
    },
    {
      "nazev": "Transportlīdzeklis",
      "popis": "Motocikls, VIN un reģistrācijas numurs."
    },
    {
      "nazev": "Stāvoklis",
      "popis": "Nobraukums un zināmie defekti."
    },
    {
      "nazev": "Cena un samaksa",
      "popis": "Summa vārdiem."
    },
    {
      "nazev": "Nodošana",
      "popis": "Datums, laiks, atslēgas, dokumenti."
    },
    {
      "nazev": "Īpašnieka maiņa",
      "popis": "e-CSDD 5 dienu laikā."
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
    "VIN pārbaude",
    "Atgādinājums par īpašnieka maiņu"
  ],
  "hodiSe": [
    "pārdodat vai pērkat motociklu vai motorolleru no privātpersonas"
  ],
  "nehodiSe": [
    "pērkat no tirgotāja"
  ],
  "po": [
    {
      "nazev": "Īpašnieka maiņa",
      "popis": "Pircējs izdara atzīmi, pārdevējs to apstiprina e-CSDD."
    },
    {
      "nazev": "OCTA",
      "popis": "Pircējs pirms braukšanas iegādājas OCTA polisi."
    }
  ],
  "faq": [
    {
      "q": "Vai noteikumi ir tādi paši kā auto?",
      "a": "Jā. Arī motociklam īpašnieka maiņu noformē e-CSDD: pircēja atzīme, pārdevēja apstiprinājums 5 dienu laikā un reģistrācija pircēja vārdā."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikumu un CSDD īpašnieka maiņas kārtību.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē motocikla pirkuma līgumu – PDF", "description": "Motocikla vai motorollera pirkuma līgums. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { autoLigums as sablona } from '../../sablony/lv/auto-pirkuma-ligums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Transportlīdzekļa pirkuma līgums",
  nazevA: "transportlīdzekļa pirkuma līgumu",
  katalog: {"popis": "Lietota auto pārdošana starp privātpersonām.", "kategorie": "auto", "ilustrace": "auto", "slova": ["auto pirkuma līgums", "automašīnas pirkuma līgums", "transportlīdzekļa pirkuma līgums", "auto pārdošana", "lietota auto pirkšana", "īpašnieka maiņa CSDD", "auto pirkuma ligums", "automasinas pirkuma ligums"]},
  souvisejici: "auto",
  landing: {
  "title": "Auto pirkuma līgums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas auto pirkuma līguma paraugs starp privātpersonām: personas kodi, VIN, nobraukums, defekti, samaksa un nodošanas laiks. PDF un Word.",
  "perex": "Lietota auto pārdošanai starp privātpersonām. Īpašnieka maiņu noformē e-CSDD; līgumā ierakstīta cena, stāvoklis, samaksa un precīzs nodošanas laiks.",
  "obsahPopis": "Punkti par transportlīdzekļa pārdošanu un nodošanu.",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Pārdevējs un pircējs ar personas kodu."
    },
    {
      "nazev": "Transportlīdzeklis",
      "popis": "Marka, reģistrācijas numurs, VIN."
    },
    {
      "nazev": "Stāvoklis",
      "popis": "Nobraukums un zināmie defekti."
    },
    {
      "nazev": "Cena un samaksa",
      "popis": "Summa vārdiem, skaidrā naudā vai ar pārskaitījumu."
    },
    {
      "nazev": "Nodošana",
      "popis": "Datums, laiks, atslēgas, dokumenti."
    },
    {
      "nazev": "Īpašnieka maiņa",
      "popis": "e-CSDD: pircēja atzīme un pārdevēja apstiprinājums 5 dienu laikā."
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
    "Atgādinājums par īpašnieka maiņu",
    "Nodošanas akts pārņem datus"
  ],
  "hodiSe": [
    "pārdodat vai pērkat lietotu auto no privātpersonas",
    "vēlaties rakstveidā cenu, stāvokli un nodošanas laiku"
  ],
  "nehodiSe": [
    "pērkat no tirgotāja – viņam ir savs līgums",
    "auto ir līzingā vai nomaksā"
  ],
  "po": [
    {
      "nazev": "Īpašnieka maiņa",
      "popis": "Pircējs e-CSDD izdara atzīmi, un pārdevējs to apstiprina 5 dienu laikā."
    },
    {
      "nazev": "OCTA",
      "popis": "Pircējs pirms braukšanas iegādājas OCTA polisi."
    },
    {
      "nazev": "Eksemplāri",
      "popis": "Katra puse patur vienu parakstītu eksemplāru."
    }
  ],
  "faq": [
    {
      "q": "Kā notiek īpašnieka maiņa?",
      "a": "e-CSDD: pircējs izdara atzīmi par vēlmi iegādāties transportlīdzekli, pārdevējs to apstiprina 5 dienu laikā, un ar apstiprinājumu īpašuma tiesības pāriet pircējam. Pēc tam pircējs 5 dienu laikā reģistrē īpašnieka maiņu."
    },
    {
      "q": "Vai vajadzīgs notārs?",
      "a": "Nē. Transportlīdzekļa pārdošanai starp privātpersonām notārs nav vajadzīgs; līgums pierāda pārdošanas noteikumus."
    },
    {
      "q": "Ko darīt ar transportlīdzekļa ekspluatācijas nodokli?",
      "a": "CSDD īpašnieka maiņu nereģistrē, ja par kārtējo gadu nodoklis nav samaksāts. Vienojieties līgumā, kurš to sedz."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem par pirkuma līgumu un CSDD īpašnieka maiņas kārtību.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē auto pirkuma līgumu – PDF", "description": "Ceļvedis lietota auto pirkuma līguma sagatavošanai. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

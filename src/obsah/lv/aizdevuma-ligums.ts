import type { StrankaDokumentu } from '../typy';
import { aizdevums as sablona } from '../../sablony/lv/aizdevuma-ligums';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Aizdevuma līgums",
  nazevA: "aizdevuma līgumu",
  katalog: {"popis": "Aizdevums draugam vai radiniekam, arī pa daļām.", "kategorie": "nauda", "ilustrace": "pujcka", "slova": ["aizdevuma līgums", "aizdevums starp privātpersonām", "aizdevums draugam", "aizdevuma līgums ar atmaksu pa daļām", "parādzīme", "aizdevuma ligums"]},
  souvisejici: "nauda",
  landing: {
  "title": "Aizdevuma līgums {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas aizdevuma līguma paraugs starp privātpersonām: summa vārdiem, atmaksa vienā reizē vai pa daļām, procenti tikai pēc vienošanās. PDF un Word.",
  "perex": "Naudas aizdevumam draugam vai radiniekam. Atmaksa vienā reizē vai ikmēneša maksājumos, ar procentiem vai bez.",
  "obsahPopis": "Punkti par aizdevumu (Civillikuma aizdevuma līgums).",
  "obsah": [
    {
      "nazev": "Puses",
      "popis": "Aizdevējs un aizņēmējs."
    },
    {
      "nazev": "Priekšmets",
      "popis": "Summa un izsniegšanas veids."
    },
    {
      "nazev": "Atmaksa",
      "popis": "Vienā reizē vai pa daļām, pirmstermiņa atmaksa."
    },
    {
      "nazev": "Procenti",
      "popis": "Bezprocentu vai ar nolīgtiem procentiem."
    },
    {
      "nazev": "Noslēguma noteikumi",
      "popis": "Eksemplāri."
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
    "Atgādinājums par maksājumiem",
    "PDF un Word"
  ],
  "hodiSe": [
    "aizdodat naudu draugam vai radiniekam",
    "vēlaties rakstveidā atmaksas termiņu"
  ],
  "nehodiSe": [
    "aizdodat kā uzņēmums – piemēro īpašus noteikumus"
  ],
  "po": [
    {
      "nazev": "Pārskaitījums",
      "popis": "Izsniedziet naudu ar bankas pārskaitījumu."
    },
    {
      "nazev": "Eksemplāri",
      "popis": "Katra puse patur vienu."
    }
  ],
  "faq": [
    {
      "q": "Vai aizdevumam jābūt rakstveidā?",
      "a": "Likums aizdevumam starp privātpersonām rakstveida formu neprasa, taču līgums ir labākais pierādījums, ka nauda tika aizdota un kad tā jāatdod."
    },
    {
      "q": "Cik ilgā laikā iestājas noilgums?",
      "a": "Vispārējais noilgums ir 10 gadi. Atgādinājums parādniekam vai parāda atzīšana noilgumu pārtrauc."
    },
    {
      "q": "Kādi procenti pienākas par kavējumu?",
      "a": "Ja nav nolīgts citādi, likumiskie procenti ir 6 % gadā."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz Civillikuma noteikumiem par aizdevumu.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē aizdevuma līgumu – PDF", "description": "Aizdevuma līgums starp privātpersonām. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

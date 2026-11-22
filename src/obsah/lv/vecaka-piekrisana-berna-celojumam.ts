import type { StrankaDokumentu } from '../typy';
import { berncelojums as sablona } from '../../sablony/lv/vecaka-piekrisana-berna-celojumam';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Vecāka piekrišana bērna ceļojumam",
  nazevA: "vecāka piekrišanu bērna ceļojumam",
  katalog: {"popis": "Bērns ceļo bez vecākiem.", "kategorie": "gimene", "ilustrace": "plnamoc", "slova": ["vecāka piekrišana bērna ceļojumam", "pilnvara bērna izceļošanai", "bērns ceļo bez vecākiem", "bērna ceļošana ar pavadoni", "vecaka piekrisana berna celojumam"]},
  souvisejici: "gimene",
  landing: {
  "title": "Piekrišana bērna ceļojumam {rok} – paraugs PDF bez maksas",
  "description": "Bezmaksas paraugs vecāka piekrišanai bērna ceļojumam bez vecākiem: pavadonis, valstis un laiks. Pietiek ar viena vecāka parakstu. PDF un Word.",
  "perex": "Ja bērns ceļo ar vecvecākiem, treneri vai viens. Pagaidu ceļojumam pietiek ar viena vecāka piekrišanu; ārpus Šengenas zonas tai jābūt notariāli apliecinātai.",
  "obsahPopis": "Viena piekrišana.",
  "obsah": [
    {
      "nazev": "Piekrišana",
      "popis": "Vecāks, bērns, pavadonis, ceļojums."
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
    "bērns ceļo bez vecākiem Šengenas zonā",
    "vēlaties sagatavi notāram ceļojumam ārpus Šengenas"
  ],
  "nehodiSe": [
    "bērns pārceļas uz pastāvīgu dzīvi ārvalstīs"
  ],
  "po": [
    {
      "nazev": "Līdzi",
      "popis": "Pavadonis ņem piekrišanu un bērna dokumentu."
    },
    {
      "nazev": "Ārpus Šengenas",
      "popis": "Piekrišanu apliecina zvērināts notārs."
    }
  ],
  "faq": [
    {
      "q": "Vai vajadzīga abu vecāku piekrišana?",
      "a": "Nē. Bērna pagaidu izceļošanai otra vecāka piekrišana nav vajadzīga – pietiek ar viena vecāka piekrišanu. Abu vecāku piekrišana vajadzīga pārcelšanās gadījumā uz pastāvīgu dzīvi citā valstī."
    },
    {
      "q": "Kad piekrišanai jābūt notariālai?",
      "a": "Ja bērns ārpus Šengenas zonas ceļo citas personas pavadībā vai viens – tad vajadzīga vismaz viena vecāka notariāli apliecināta pilnvara vai piekrišana. Šengenas zonā tā nav obligāta."
    },
    {
      "q": "Vai jūs saglabājat manus datus?",
      "a": "Nē. Dokuments tiek izveidots tieši jūsu pārlūkā, dati netiek sūtīti uz serveri."
    }
  ],
  "zakony": "Paraugs balstās uz e-justice informāciju par Latviju un Valsts robežsardzes prasībām bērna izceļošanai.",
  "souvisejiciPopis": "Citi dokumenti, arī bez maksas."
},
  vytvorit: {"title": "Aizpildiet tiešsaistē piekrišanu bērna ceļojumam – PDF", "description": "Vecāka piekrišana bērna ceļojumam. PDF vai Word, bez maksas.", "podnadpis": "Bez maksas · rezultāts PDF un Word formātā · aizņem dažas minūtes"},
};

export default stranka;

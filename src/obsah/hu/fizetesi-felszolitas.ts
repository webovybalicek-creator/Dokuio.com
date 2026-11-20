import type { StrankaDokumentu } from '../typy';
import { fizetesiFelszolitas as sablona } from '../../sablony/hu/fizetesi-felszolitas';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Fizetési felszólítás",
  nazevA: "fizetési felszólítást",
  katalog: {"popis": "Utolsó felszólítás határidővel és késedelmi kamattal.", "kategorie": "penz", "ilustrace": "dluh", "slova": ["fizetési felszólítás", "felszólító levél", "késedelmi kamat", "tartozás", "számla", "behajtás"]},
  souvisejici: "penz",
  landing: {
  "title": "Fizetési felszólítás {rok} – minta ingyen (PDF, Word)",
  "description": "Ingyenes fizetési felszólítás minta: tartozás összege, jogcím, határidő és törvényes késedelmi kamat (Ptk. 6:48. §, 6:155. §). Töltse ki online, PDF vagy Word.",
  "perex": "Ha nem fizették ki a számlát vagy nem adták vissza a kölcsönt: a felszólítás utolsó határidőt ad a fizetési meghagyás vagy per előtt.",
  "obsahPopis": "Rövid levél két részben.",
  "obsah": [
    {
      "nazev": "Feladó és címzett",
      "popis": "Jogosult és kötelezett."
    },
    {
      "nazev": "Fizetési felszólítás",
      "popis": "Jogcím, összeg, esedékesség, új határidő, számlaszám, késedelmi kamat."
    }
  ],
  "kroky": [
    {
      "nazev": "Tartozás",
      "popis": "Ki, mennyi, milyen számla."
    },
    {
      "nazev": "Határidő",
      "popis": "Általában 8–15 nap."
    },
    {
      "nazev": "Tértivevényes levél",
      "popis": "Így bizonyítható a kézbesítés."
    }
  ],
  "online": [
    "Összeg betűvel automatikusan",
    "Határidő a naptárban",
    "Magyarázat minden mezőhöz",
    "Letöltés PDF-ben és Wordben"
  ],
  "hodiSe": [
    "nem fizették ki a számlát",
    "nem adták vissza a kölcsönt",
    "fizetési meghagyás előtt"
  ],
  "nehodiSe": [
    "a kötelezett felszámolás alatt áll – jelentse be a követelést",
    "vitás vagy nagy összegű követelés – kérje ügyvéd segítségét"
  ],
  "po": [
    {
      "nazev": "Várja meg a határidőt",
      "popis": "Emlékeztető a naptárban."
    },
    {
      "nazev": "Fizetési meghagyás",
      "popis": "Közjegyzőnél kérhető."
    },
    {
      "nazev": "Részletfizetés?",
      "popis": "Ha fizetne, írassa alá a tartozáselismerő nyilatkozatot."
    }
  ],
  "faq": [
    {
      "q": "Mennyi a késedelmi kamat?",
      "a": "A késedelemmel érintett naptári félév első napján érvényes jegybanki alapkamat (Ptk. 6:48. §). Vállalkozások között ennél 8 százalékponttal több, és 40 eurónak megfelelő behajtási költségátalány is jár (Ptk. 6:155. §)."
    },
    {
      "q": "Hogyan küldjem el?",
      "a": "Tértivevényes ajánlott levélben, hogy a kézbesítést bizonyítani tudja."
    },
    {
      "q": "Tárolják az adataimat?",
      "a": "Nem. A dokumentum közvetlenül az Ön böngészőjében készül."
    }
  ],
  "zakony": "A minta a Polgári Törvénykönyv (2013. évi V. törvény) 6:48. és 6:155. §-án alapul.",
  "souvisejiciPopis": "További dokumentumok pénzhez és tartozáshoz."
},
  vytvorit: {"title": "Fizetési felszólítás kitöltése online – PDF ingyen", "description": "Fizetési felszólítás határidővel és késedelmi kamattal. Ingyen PDF vagy Word.", "podnadpis": "Ingyenes · PDF és Word · kb. 2 perc"},
};

export default stranka;

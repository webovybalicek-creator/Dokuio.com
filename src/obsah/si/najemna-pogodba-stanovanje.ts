import type { StrankaDokumentu } from '../typy';
import { najemnaPogodba as sablona } from '../../sablony/si/najemna-pogodba-stanovanje';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Najemna pogodba za stanovanje",
  nazevA: "najemno pogodbo za stanovanje",
  katalog: {"popis": "Najem stanovanja z varščino.", "kategorie": "stanovanje", "ilustrace": "protokol", "slova": ["najemna pogodba", "najem stanovanja", "najemna pogodba za stanovanje", "varščina", "oddaja stanovanja"]},
  souvisejici: "stanovanje",
  landing: {
  "title": "Najemna pogodba za stanovanje {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna najemna pogodba za stanovanje po Stanovanjskem zakonu: ID stanovanja, uporabniki, najemnina, varščina, stroški in odpovedni razlogi. PDF in Word.",
  "perex": "Za oddajo stanovanja fizični osebi. Z obveznimi sestavinami iz Stanovanjskega zakona, varščino in stroški.",
  "obsahPopis": "Osem členov po Stanovanjskem zakonu (SZ-1) in OZ.",
  "obsah": [
    {
      "nazev": "Pogodbeni stranki",
      "popis": "Najemodajalec z davčno številko in najemnik."
    },
    {
      "nazev": "Stanovanje",
      "popis": "Naslov, ID stanovanja, opis in oprema."
    },
    {
      "nazev": "Uporabniki",
      "popis": "Kdo bo v stanovanju živel."
    },
    {
      "nazev": "Najemnina in stroški",
      "popis": "Znesek, rok plačila, obratovalni stroški."
    },
    {
      "nazev": "Varščina",
      "popis": "Znesek in vračilo."
    },
    {
      "nazev": "Trajanje in odpoved",
      "popis": "Določen ali nedoločen čas, odpovedni razlogi."
    }
  ],
  "kroky": [
    {
      "nazev": "Izpolnite podatke",
      "popis": "Česar ne veste, preskočite – ostala bo črta za izpolnitev na roko."
    },
    {
      "nazev": "Preverite besedilo",
      "popis": "Vsak odstavek lahko uredite."
    },
    {
      "nazev": "Prenesite in podpišite",
      "popis": "PDF ali Word brezplačno."
    }
  ],
  "online": [
    "Obvezne sestavine po SZ-1",
    "Zapisnik o predaji prevzame podatke",
    "PDF in Word"
  ],
  "hodiSe": [
    "oddajate ali najemate stanovanje",
    "želite pisno pogodbo z varščino"
  ],
  "nehodiSe": [
    "oddajate poslovni prostor ali turistično",
    "gre za neprofitno stanovanje – ima svojo pogodbo"
  ],
  "po": [
    {
      "nazev": "Predaja",
      "popis": "Zapisnik o predaji s stanjem števcev."
    },
    {
      "nazev": "Davek",
      "popis": "Najemodajalec napove dohodek iz oddajanja premoženja v najem FURS."
    }
  ],
  "faq": [
    {
      "q": "Ali mora biti pogodba pisna?",
      "a": "Da. Stanovanjski zakon zahteva pisno najemno pogodbo z obveznimi sestavinami."
    },
    {
      "q": "Koliko je lahko varščina?",
      "a": "Zakon splošne omejitve ne določa; običajno je ena do tri mesečne najemnine."
    },
    {
      "q": "Kdaj lahko najemodajalec odpove?",
      "a": "Le iz zakonskih krivdnih razlogov (103. člen SZ-1) po pisnem opominu in z odpovednim rokom najmanj 90 dni."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Stanovanjskem zakonu (SZ-1) in Obligacijskem zakoniku.",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite najemno pogodbo za stanovanje na spletu – PDF brezplačno", "description": "Najemna pogodba za stanovanje po SZ-1. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

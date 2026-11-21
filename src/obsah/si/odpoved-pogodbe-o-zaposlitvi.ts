import type { StrankaDokumentu } from '../typy';
import { odpovedPogodbeOZaposlitvi as sablona } from '../../sablony/si/odpoved-pogodbe-o-zaposlitvi';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Odpoved pogodbe o zaposlitvi",
  nazevA: "odpoved pogodbe o zaposlitvi",
  katalog: {"popis": "Redna odpoved delavca.", "kategorie": "delo", "ilustrace": "protokol", "slova": ["odpoved pogodbe o zaposlitvi", "odpoved delavca", "odpoved v službi", "odpovedni rok", "ZDR-1"]},
  souvisejici: "delo",
  landing: {
  "title": "Odpoved pogodbe o zaposlitvi {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna redna odpoved pogodbe o zaposlitvi s strani delavca po ZDR-1: odpovedni rok 15 ali 30 dni, pisna oblika in vročitev delodajalcu. PDF in Word.",
  "perex": "Ko odhajate iz službe. Pisna odpoved z odpovednim rokom po Zakonu o delovnih razmerjih.",
  "obsahPopis": "Kratka pisna odpoved.",
  "obsah": [
    {
      "nazev": "Odpoved",
      "popis": "Delodajalec, pogodba, odpovedni rok, zadnji dan."
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
    "Izračun zadnjega dne",
    "PDF in Word"
  ],
  "hodiSe": [
    "odhajate iz službe",
    "želite pisno odpoved z rokom"
  ],
  "nehodiSe": [
    "se z delodajalcem dogovorite – sporazumno prenehanje"
  ],
  "po": [
    {
      "nazev": "Vročitev",
      "popis": "Osebno s podpisom ali priporočeno."
    }
  ],
  "faq": [
    {
      "q": "Koliko je odpovedni rok?",
      "a": "Za delavca 15 dni do enega leta zaposlitve pri delodajalcu, nato 30 dni; s pogodbo ali kolektivno pogodbo do 60 dni (94. člen ZDR-1)."
    },
    {
      "q": "Ali mora biti odpoved pisna?",
      "a": "Da."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Zakonu o delovnih razmerjih (ZDR-1).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite odpoved pogodbe o zaposlitvi na spletu – PDF brezplačno", "description": "Redna odpoved delavca po ZDR-1. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

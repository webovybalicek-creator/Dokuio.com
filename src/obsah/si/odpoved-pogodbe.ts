import type { StrankaDokumentu } from '../typy';
import { odpovedPogodbe as sablona } from '../../sablony/si/odpoved-pogodbe';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Odpoved pogodbe",
  nazevA: "odpoved pogodbe",
  katalog: {"popis": "Operater, zavarovanje, fitnes, naročnina.", "kategorie": "vsakdan", "ilustrace": "protokol", "slova": ["odpoved pogodbe", "odpoved naročnine", "odpoved operaterju", "odpoved zavarovanja", "odpoved fitnesa"]},
  souvisejici: "vsakdan",
  landing: {
  "title": "Odpoved pogodbe {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna odpoved pogodbe za operaterja, zavarovanje, fitnes ali naročnino: številka pogodbe, datum prenehanja in potrditev odpovedi. PDF in Word.",
  "perex": "Za odpoved naročnine, zavarovanja, fitnesa ali operaterja – s prošnjo za pisno potrditev.",
  "obsahPopis": "Kratka pisna odpoved.",
  "obsah": [
    {
      "nazev": "Odpoved",
      "popis": "Ponudnik, pogodba, datum, potrditev."
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
    "PDF in Word"
  ],
  "hodiSe": [
    "želite odpovedati naročnino ali storitev"
  ],
  "nehodiSe": [
    "odpovedujete najem ali zaposlitev – uporabite posebna obrazca"
  ],
  "po": [
    {
      "nazev": "Pošiljanje",
      "popis": "Priporočeno ali po e-pošti s potrdilom."
    }
  ],
  "faq": [
    {
      "q": "Koliko je odpovedni rok?",
      "a": "Kot ga določajo splošni pogoji ponudnika; pri operaterjih je pogosto en mesec."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku (OZ).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite odpoved pogodbe na spletu – PDF brezplačno", "description": "Odpoved naročnine ali storitve. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

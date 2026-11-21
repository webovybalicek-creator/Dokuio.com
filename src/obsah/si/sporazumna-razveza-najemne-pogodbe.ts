import type { StrankaDokumentu } from '../typy';
import { sporazumnaRazvezaNajma as sablona } from '../../sablony/si/sporazumna-razveza-najemne-pogodbe';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Sporazumna razveza najemne pogodbe",
  nazevA: "sporazumno razvezo najemne pogodbe",
  katalog: {"popis": "Konec najema po dogovoru, brez odpovednega roka.", "kategorie": "stanovanje", "ilustrace": "protokol", "slova": ["sporazumna razveza najemne pogodbe", "sporazumna prekinitev najema", "konec najema", "dogovor o prenehanju", "izselitev"]},
  souvisejici: "stanovanje",
  landing: {
  "title": "Sporazumna razveza najemne pogodbe {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna sporazumna razveza najemne pogodbe za stanovanje: datum prenehanja, predaja stanovanja, vračilo varščine in poračun stroškov. PDF in Word.",
  "perex": "Ko se najemodajalec in najemnik dogovorita za konec najema – tudi brez odpovednega roka.",
  "obsahPopis": "Štirje členi po Obligacijskem zakoniku.",
  "obsah": [
    {
      "nazev": "Stranki in pogodba",
      "popis": "Katera pogodba preneha."
    },
    {
      "nazev": "Prenehanje",
      "popis": "Datum."
    },
    {
      "nazev": "Predaja",
      "popis": "Ključi, števci."
    },
    {
      "nazev": "Varščina",
      "popis": "Vračilo in poračun."
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
    "se želite izseliti prej",
    "se strinjate obe strani"
  ],
  "nehodiSe": [
    "ena stran se ne strinja – uporabite odpoved"
  ],
  "po": [
    {
      "nazev": "Predaja",
      "popis": "Zapisnik o predaji stanovanja."
    }
  ],
  "faq": [
    {
      "q": "Ali je potreben odpovedni rok?",
      "a": "Ne, datum prenehanja si izberete sami."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku in Stanovanjskem zakonu.",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite sporazumno razvezo najemne pogodbe na spletu – PDF brezplačno", "description": "Sporazumni konec najema stanovanja. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { odpovedNajemnePogodbe as sablona } from '../../sablony/si/odpoved-najemne-pogodbe';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Odpoved najemne pogodbe",
  nazevA: "odpoved najemne pogodbe",
  katalog: {"popis": "Odpoved najemnika z odpovednim rokom.", "kategorie": "stanovanje", "ilustrace": "protokol", "slova": ["odpoved najemne pogodbe", "odpoved najema", "izselitev", "odpovedni rok", "najemnik"]},
  souvisejici: "stanovanje",
  landing: {
  "title": "Odpoved najemne pogodbe {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna odpoved najemne pogodbe za stanovanje s strani najemnika: odpovedni rok po pogodbi ali zakonu, datum izselitve in vračilo varščine. PDF in Word.",
  "perex": "Za najemnika, ki se izseljuje. Z odpovednim rokom, datumom predaje in zahtevo za vračilo varščine.",
  "obsahPopis": "Kratka pisna odpoved.",
  "obsah": [
    {
      "nazev": "Odpoved",
      "popis": "Stanovanje, pogodba, odpovedni rok, predaja, varščina."
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
    "se izseljujete iz najemnega stanovanja",
    "želite pisno odpoved z dokazom o vročitvi"
  ],
  "nehodiSe": [
    "se z najemodajalcem dogovorite – uporabite sporazumno razvezo"
  ],
  "po": [
    {
      "nazev": "Vročitev",
      "popis": "Priporočeno s povratnico ali osebno s podpisom."
    },
    {
      "nazev": "Predaja",
      "popis": "Zapisnik o predaji stanovanja."
    }
  ],
  "faq": [
    {
      "q": "Koliko je odpovedni rok?",
      "a": "Kot ga določa vaša najemna pogodba. Če ga pogodba ne določa, se o datumu dogovorite z najemodajalcem ali uporabite sporazumno razvezo."
    },
    {
      "q": "Kdaj dobim varščino?",
      "a": "Po predaji stanovanja, ko najemodajalec preveri stanje in poračuna stroške."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Stanovanjskem zakonu (SZ-1).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite odpoved najemne pogodbe na spletu – PDF brezplačno", "description": "Odpoved najemne pogodbe s strani najemnika. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

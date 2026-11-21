import type { StrankaDokumentu } from '../typy';
import { potrdiloOPrejemuDenarja as sablona } from '../../sablony/si/potrdilo-o-prejemu-denarja';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Potrdilo o prejemu denarja",
  nazevA: "potrdilo o prejemu denarja",
  katalog: {"popis": "Pobotnica za prejeto gotovino.", "kategorie": "denar", "ilustrace": "penize", "slova": ["potrdilo o prejemu denarja", "pobotnica", "prejem gotovine", "potrdilo o plačilu", "ara"]},
  souvisejici: "denar",
  landing: {
  "title": "Potrdilo o prejemu denarja {rok} – brezplačen obrazec PDF",
  "description": "Brezplačno potrdilo o prejemu denarja (pobotnica): znesek s številko in z besedo, namen plačila, plačnik in prejemnik. Preprost dokaz o gotovini. PDF in Word.",
  "perex": "Preprost dokaz, da je gotovina zamenjala lastnika. Znesek z besedo dopišemo sami.",
  "obsahPopis": "Kratko potrdilo z namenom plačila.",
  "obsah": [
    {
      "nazev": "Potrdilo",
      "popis": "Kdo je od koga prejel koliko in zakaj."
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
    "Znesek z besedo samodejno",
    "Podpis na zaslonu",
    "PDF in Word"
  ],
  "hodiSe": [
    "plačujete z gotovino avto ali stvar",
    "izročate varščino, aro ali obrok"
  ],
  "nehodiSe": [
    "plačujete na račun – dokaz je potrdilo banke"
  ],
  "po": [
    {
      "nazev": "Izvod",
      "popis": "Vsaka stranka obdrži enega."
    }
  ],
  "faq": [
    {
      "q": "Ali moram dati potrdilo?",
      "a": "Kdor plača, lahko od upnika zahteva pobotnico – pisno potrdilo o prejemu plačila."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku (pobotnica).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite potrdilo o prejemu denarja na spletu – PDF brezplačno", "description": "Potrdilo o prejemu gotovine z zneskom z besedo. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

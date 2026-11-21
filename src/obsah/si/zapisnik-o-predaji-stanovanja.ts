import type { StrankaDokumentu } from '../typy';
import { zapisnikStanovanja as sablona } from '../../sablony/si/zapisnik-o-predaji-stanovanja';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Zapisnik o predaji stanovanja",
  nazevA: "zapisnik o predaji stanovanja",
  katalog: {"popis": "Števci, ključi in stanje stanovanja.", "kategorie": "stanovanje", "ilustrace": "protokol", "slova": ["zapisnik o predaji stanovanja", "primopredajni zapisnik", "stanje števcev", "ključi", "izselitev"]},
  souvisejici: "stanovanje",
  landing: {
  "title": "Zapisnik o predaji stanovanja {rok} – brezplačen obrazec PDF",
  "description": "Brezplačen zapisnik o predaji stanovanja: stanje števcev, ključi, oprema in poškodbe ob vselitvi ali izselitvi. Dokaz pri vračilu varščine. PDF in Word.",
  "perex": "Ob vselitvi in izselitvi zabeleži števce, ključe in stanje – najmanj sporov pri varščini.",
  "obsahPopis": "Zapisnik v treh delih.",
  "obsah": [
    {
      "nazev": "Predaja",
      "popis": "Kdo, kdaj, vselitev ali izselitev."
    },
    {
      "nazev": "Števci in ključi",
      "popis": "Elektrika, voda, plin, ogrevanje."
    },
    {
      "nazev": "Stanje",
      "popis": "Oprema in poškodbe."
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
    "Podatki iz najemne pogodbe",
    "PDF in Word"
  ],
  "hodiSe": [
    "se vseljujete ali izseljujete",
    "prodajate stanovanje"
  ],
  "nehodiSe": [
    "potrebujete pogodbo – uporabite najemno pogodbo"
  ],
  "po": [
    {
      "nazev": "Fotografije",
      "popis": "Fotografirajte števce in poškodbe."
    }
  ],
  "faq": [
    {
      "q": "Zakaj zapisnik?",
      "a": "Brez njega je težko dokazati, katere poškodbe so bile že ob vselitvi."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Stanovanjskem zakonu in Obligacijskem zakoniku.",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite zapisnik o predaji stanovanja na spletu – PDF brezplačno", "description": "Zapisnik o predaji stanovanja s števci. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

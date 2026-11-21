import type { StrankaDokumentu } from '../typy';
import { zapisnikVozila as sablona } from '../../sablony/si/zapisnik-o-izrocitvi-vozila';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Zapisnik o izročitvi vozila",
  nazevA: "zapisnik o izročitvi vozila",
  katalog: {"popis": "Kilometri, poškodbe, ključi in ura izročitve.", "kategorie": "auto", "ilustrace": "protokol", "slova": ["zapisnik o izročitvi vozila", "primopredajni zapisnik avto", "izročitev avtomobila", "kilometri", "poškodbe vozila"]},
  souvisejici: "auto",
  landing: {
  "title": "Zapisnik o izročitvi vozila {rok} – brezplačen obrazec PDF",
  "description": "Brezplačen zapisnik o izročitvi vozila: točna ura izročitve, kilometri, gorivo, ključi, dokumenti in poškodbe. Dokaz v primeru prekrška. PDF in Word.",
  "perex": "Zabeleži stanje vozila in točno uro izročitve – pomembno, če po prodaji pride kazen za prekršek.",
  "obsahPopis": "Kratek zapisnik v treh delih.",
  "obsah": [
    {
      "nazev": "Izročitev",
      "popis": "Kdo, komu, kdaj in ob kateri uri."
    },
    {
      "nazev": "Ključi in dokumenti",
      "popis": "Kaj je izročeno z vozilom."
    },
    {
      "nazev": "Stanje",
      "popis": "Poškodbe in opombe."
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
    "Podatki iz kupoprodajne pogodbe",
    "Preverjanje številke šasije",
    "Prenos PDF in Word"
  ],
  "hodiSe": [
    "prodajate ali posojate avto",
    "vračate vozilo po izposoji"
  ],
  "nehodiSe": [
    "potrebujete tudi pogodbo – uporabite kupoprodajno pogodbo"
  ],
  "po": [
    {
      "nazev": "Fotografije",
      "popis": "Fotografirajte vozilo in števec kilometrov."
    },
    {
      "nazev": "Izvoda",
      "popis": "Vsaka stranka obdrži enega."
    }
  ],
  "faq": [
    {
      "q": "Zakaj vpisati uro izročitve?",
      "a": "Dokler sprememba lastništva ni prijavljena, lahko prekrški prihajajo na prejšnjega lastnika – zapisnik z uro dokazuje, kdo je imel vozilo."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku (OZ).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite zapisnik o izročitvi vozila na spletu – PDF brezplačno", "description": "Zapisnik o izročitvi vozila z uro predaje. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { pogodbaOPosodbi as sablona } from '../../sablony/si/pogodba-o-posodbi';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pogodba o posodbi",
  nazevA: "pogodbo o posodbi",
  katalog: {"popis": "Brezplačna izposoja stvari.", "kategorie": "vsakdan", "ilustrace": "pujcka", "slova": ["pogodba o posodbi", "posoja stvari", "izposoja", "posodba avtomobila", "brezplačna uporaba"]},
  souvisejici: "vsakdan",
  landing: {
  "title": "Pogodba o posodbi {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna pogodba o posodbi: brezplačna izposoja stvari, rok vračila, stanje, odgovornost za škodo. Za orodje, avto, opremo. PDF in Word.",
  "perex": "Za izposojo stvari brez plačila – orodja, opreme ali avtomobila. Z rokom vračila in stanjem.",
  "obsahPopis": "Pet členov po Obligacijskem zakoniku.",
  "obsah": [
    {
      "nazev": "Pogodbeni stranki",
      "popis": "Posodnik in izposojevalec."
    },
    {
      "nazev": "Stvar",
      "popis": "Opis in stanje."
    },
    {
      "nazev": "Uporaba in vračilo",
      "popis": "Namen, rok, odgovornost."
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
    "posojate dražjo stvar",
    "posojate avto prijatelju"
  ],
  "nehodiSe": [
    "izposojate za plačilo – to je najem"
  ],
  "po": [
    {
      "nazev": "Vračilo",
      "popis": "Preverite stanje ob vračilu."
    }
  ],
  "faq": [
    {
      "q": "Kdo odgovarja za škodo?",
      "a": "Izposojevalec, če stvar uporablja v nasprotju s pogodbo ali namenom."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku (posodbena pogodba).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite pogodbo o posodbi na spletu – PDF brezplačno", "description": "Pogodba o brezplačni izposoji stvari. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

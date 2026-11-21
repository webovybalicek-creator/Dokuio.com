import type { StrankaDokumentu } from '../typy';
import { odstopOdPogodbe as sablona } from '../../sablony/si/odstop-od-pogodbe';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Odstop od pogodbe",
  nazevA: "obrazec za odstop od pogodbe",
  katalog: {"popis": "Vračilo blaga, kupljenega na spletu, v 14 dneh.", "kategorie": "vsakdan", "ilustrace": "protokol", "slova": ["odstop od pogodbe", "vračilo blaga", "spletni nakup", "14 dni", "obrazec za odstop"]},
  souvisejici: "vsakdan",
  landing: {
  "title": "Obrazec za odstop od pogodbe {rok} – brezplačen PDF",
  "description": "Brezplačen obrazec za odstop od pogodbe, sklenjene na daljavo: vračilo blaga, kupljenega na spletu, v 14 dneh po Zakonu o varstvu potrošnikov. PDF in Word.",
  "perex": "Ste kupili na spletu in si premislili? V 14 dneh lahko odstopite od pogodbe brez navedbe razloga.",
  "obsahPopis": "Izjava po vzorčnem obrazcu iz ZVPot-1.",
  "obsah": [
    {
      "nazev": "Izjava",
      "popis": "Trgovec, blago, naročilo in vračilo denarja."
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
    "Po vzorčnem obrazcu",
    "PDF in Word"
  ],
  "hodiSe": [
    "ste kupili na spletu ali po telefonu",
    "ste kupili zunaj poslovnih prostorov"
  ],
  "nehodiSe": [
    "ste kupili v trgovini – takrat velja le reklamacija ali dobra volja trgovca"
  ],
  "po": [
    {
      "nazev": "Pošiljanje",
      "popis": "Po e-pošti ali priporočeno, pred iztekom roka."
    },
    {
      "nazev": "Vračilo blaga",
      "popis": "V 14 dneh od odstopa."
    }
  ],
  "faq": [
    {
      "q": "Koliko je rok?",
      "a": "14 dni, pri blagu praviloma od dneva, ko ste ga prejeli."
    },
    {
      "q": "Kdaj dobim denar?",
      "a": "Trgovec mora vrniti plačilo najpozneje v 14 dneh od prejema vaše izjave."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Zakonu o varstvu potrošnikov (ZVPot-1) in njegovem vzorčnem obrazcu za odstop.",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite obrazec za odstop od pogodbe na spletu – PDF brezplačno", "description": "Izjava o odstopu od spletnega nakupa. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

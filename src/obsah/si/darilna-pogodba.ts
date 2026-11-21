import type { StrankaDokumentu } from '../typy';
import { darilnaPogodba as sablona } from '../../sablony/si/darilna-pogodba';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Darilna pogodba",
  nazevA: "darilno pogodbo",
  katalog: {"popis": "Darilo denarja ali stvari, davek na darila.", "kategorie": "denar", "ilustrace": "dar", "slova": ["darilna pogodba", "darilo denarja", "davek na darila", "podaritev avtomobila", "darilo otroku"]},
  souvisejici: "denar",
  landing: {
  "title": "Darilna pogodba {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna darilna pogodba za denar ali premično stvar: davek na darila, oprostitev za zakonca in otroke, napoved FURS v 15 dneh. PDF in Word.",
  "perex": "Za darilo denarja ali stvari. Zakonec, otroci in drugi potomci (prvi dedni red) davka na darila ne plačajo.",
  "obsahPopis": "Trije členi po Obligacijskem zakoniku.",
  "obsah": [
    {
      "nazev": "Pogodbeni stranki",
      "popis": "Darovalec in obdarjenec, sorodstvo."
    },
    {
      "nazev": "Predmet darila",
      "popis": "Denar ali stvar in izročitev."
    },
    {
      "nazev": "Končne določbe",
      "popis": "Davek in stroški."
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
    "Nasveti o davku na darila",
    "PDF in Word"
  ],
  "hodiSe": [
    "podarjate denar otroku ali vnuku",
    "podarjate avto ali drugo stvar"
  ],
  "nehodiSe": [
    "podarjate nepremičnino – potrebna je pogodba v obliki notarskega zapisa"
  ],
  "po": [
    {
      "nazev": "Izročitev",
      "popis": "Denar najbolje na račun."
    },
    {
      "nazev": "Davek",
      "popis": "Če niste oproščeni, napoved FURS vložite v 15 dneh."
    }
  ],
  "faq": [
    {
      "q": "Ali se plača davek na darila?",
      "a": "Obdarjenci prvega dednega reda (zakonec, otroci in drugi potomci) so oproščeni. Premičnine v vrednosti do 5.000 € se ne obdavčijo."
    },
    {
      "q": "Kdaj je treba vložiti napoved?",
      "a": "Obdarjenec vloži napoved na FURS v 15 dneh od prejema darila, če darilo ni oproščeno."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku in informacijah FURS o davku na dediščine in darila.",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite darilno pogodbo na spletu – PDF brezplačno", "description": "Darilna pogodba za denar ali stvar. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

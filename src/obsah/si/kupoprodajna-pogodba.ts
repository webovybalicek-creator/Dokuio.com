import type { StrankaDokumentu } from '../typy';
import { kupoprodajnaPogodba as sablona } from '../../sablony/si/kupoprodajna-pogodba';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kupoprodajna pogodba",
  nazevA: "kupoprodajno pogodbo",
  katalog: {"popis": "Prodaja rabljene stvari prek oglasa.", "kategorie": "vsakdan", "ilustrace": "protokol", "slova": ["kupoprodajna pogodba", "prodaja rabljene stvari", "oglas", "Bolha", "pogodba o prodaji"]},
  souvisejici: "vsakdan",
  landing: {
  "title": "Kupoprodajna pogodba {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna kupoprodajna pogodba za premično stvar med fizičnimi osebami: opis, znane napake, kupnina z besedo, plačilo in izročitev. PDF in Word.",
  "perex": "Za prodajo rabljene stvari prek oglasa – kolesa, telefona, pohištva. Z opisom napak in kupnino z besedo.",
  "obsahPopis": "Štirje členi po Obligacijskem zakoniku.",
  "obsah": [
    {
      "nazev": "Pogodbeni stranki",
      "popis": "Prodajalec in kupec."
    },
    {
      "nazev": "Predmet in stanje",
      "popis": "Opis in znane napake."
    },
    {
      "nazev": "Kupnina in izročitev",
      "popis": "Znesek, plačilo, prehod lastništva."
    },
    {
      "nazev": "Končne določbe",
      "popis": "Izvodi."
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
    "PDF in Word"
  ],
  "hodiSe": [
    "prodajate rabljeno stvar prek oglasa",
    "želite pisno imeti stanje in ceno"
  ],
  "nehodiSe": [
    "prodajate avto – uporabite pogodbo za avto"
  ],
  "po": [
    {
      "nazev": "Izročitev",
      "popis": "Šele ko je denar pri vas."
    }
  ],
  "faq": [
    {
      "q": "Ali je pisna pogodba potrebna?",
      "a": "Ni obvezna, pri dražjih stvareh pa ščiti obe strani."
    },
    {
      "q": "Kako prepoznati prevaro?",
      "a": "Kupec pošlje povezavo za „varno plačilo“ ali „dostavo“ in zahteva podatke kartice ali kodo iz SMS."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku (prodajna pogodba).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite kupoprodajno pogodbo na spletu – PDF brezplačno", "description": "Kupoprodajna pogodba za rabljeno stvar. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

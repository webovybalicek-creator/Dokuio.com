import type { StrankaDokumentu } from '../typy';
import { pooblastilo as sablona } from '../../sablony/si/pooblastilo';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pooblastilo",
  nazevA: "pooblastilo",
  katalog: {"popis": "Ko kaj namesto vas uredi kdo drug.", "kategorie": "vsakdan", "ilustrace": "plnamoc", "slova": ["pooblastilo", "pooblastilo za zastopanje", "pooblastilo za pošto", "pooblastilo za upravno enoto", "splošno pooblastilo"]},
  souvisejici: "vsakdan",
  landing: {
  "title": "Pooblastilo {rok} – brezplačen obrazec PDF",
  "description": "Brezplačno pooblastilo za zastopanje fizične osebe: kdo koga pooblašča, za katere posle in do kdaj. Nasveti, kdaj je treba podpis overiti. PDF in Word.",
  "perex": "Ko mora kaj namesto vas urediti kdo drug – pošta, upravna enota, banka ali prepis vozila.",
  "obsahPopis": "Kratko pooblastilo z opisom poslov.",
  "obsah": [
    {
      "nazev": "Pooblastilo",
      "popis": "Pooblastitelj, pooblaščenec, posli, rok."
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
    "Podpis na zaslonu",
    "PDF in Word"
  ],
  "hodiSe": [
    "ne morete česa urediti osebno",
    "želite pooblastiti družinskega člana"
  ],
  "nehodiSe": [
    "potrebujete pooblastilo za nepremičnine ali sodišče – obrnite se na notarja ali odvetnika"
  ],
  "po": [
    {
      "nazev": "Overitev",
      "popis": "Če jo zahteva urad ali banka – na upravni enoti ali pri notarju."
    }
  ],
  "faq": [
    {
      "q": "Ali je treba podpis overiti?",
      "a": "Odvisno od tega, kje se pooblastilo uporablja – urad ali banka jo pogosto zahteva. Podpis overite na upravni enoti ali pri notarju (pri notarju 16 €)."
    },
    {
      "q": "Ali lahko pooblastilo prekličem?",
      "a": "Da, kadar koli."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku (zastopanje, pooblastilo).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite pooblastilo na spletu – PDF brezplačno", "description": "Pooblastilo za zastopanje fizične osebe. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

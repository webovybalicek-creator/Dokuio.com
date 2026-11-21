import type { StrankaDokumentu } from '../typy';
import { dogovorOObrocih as sablona } from '../../sablony/si/dogovor-o-obrocnem-odplacilu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Dogovor o obročnem odplačilu",
  nazevA: "dogovor o obročnem odplačilu",
  katalog: {"popis": "Dolg v mesečnih obrokih.", "kategorie": "denar", "ilustrace": "dluh", "slova": ["dogovor o obročnem odplačilu", "obročno odplačilo dolga", "obroki", "dolg", "odlog plačila"]},
  souvisejici: "denar",
  landing: {
  "title": "Dogovor o obročnem odplačilu {rok} – brezplačen obrazec PDF",
  "description": "Brezplačen dogovor o obročnem odplačilu dolga: znesek z besedo, število in višina obrokov, datumi, zapadlost celotnega dolga ob zamudi. PDF in Word.",
  "perex": "Dolžnik ne more plačati naenkrat? Dogovor o obrokih s jasnim urnikom in posledicami zamude.",
  "obsahPopis": "Pet členov po Obligacijskem zakoniku.",
  "obsah": [
    {
      "nazev": "Stranki",
      "popis": "Upnik in dolžnik."
    },
    {
      "nazev": "Dolg",
      "popis": "Znesek in temelj."
    },
    {
      "nazev": "Obroki",
      "popis": "Število, višina, datumi."
    },
    {
      "nazev": "Zamuda",
      "popis": "Zapadlost celotnega dolga."
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
    "Izračun obrokov",
    "Znesek z besedo samodejno",
    "PDF in Word"
  ],
  "hodiSe": [
    "dolžnik želi plačevati po delih",
    "želite pisno imeti urnik"
  ],
  "nehodiSe": [
    "dolžnik dolg zanika"
  ],
  "po": [
    {
      "nazev": "Opomnik",
      "popis": "Datume obrokov shranite v koledar."
    }
  ],
  "faq": [
    {
      "q": "Ali dogovor pretrga zastaranje?",
      "a": "Da, dolžnik z njim pripozna dolg."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku.",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite dogovor o obročnem odplačilu na spletu – PDF brezplačno", "description": "Dogovor o odplačilu dolga v obrokih. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { pripoznavaDolga as sablona } from '../../sablony/si/pripoznava-dolga';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pripoznava dolga",
  nazevA: "pripoznavo dolga",
  katalog: {"popis": "Dolžnik pisno pripozna dolg in rok plačila.", "kategorie": "denar", "ilustrace": "dluh", "slova": ["pripoznava dolga", "priznanje dolga", "dolg", "zastaranje", "dolžnik"]},
  souvisejici: "denar",
  landing: {
  "title": "Pripoznava dolga {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna pripoznava dolga: znesek z besedo, pravni temelj, rok plačila in zamudne obresti. Pripoznava dolga pretrga zastaranje. PDF in Word.",
  "perex": "Dolžnik pisno pripozna, koliko dolguje in do kdaj bo plačal. S pripoznavo se zastaranje pretrga.",
  "obsahPopis": "Kratka enostranska izjava dolžnika.",
  "obsah": [
    {
      "nazev": "Izjava",
      "popis": "Dolg, temelj, rok in račun."
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
    "vam nekdo dolguje in je pripravljen to potrditi",
    "želite podaljšati zastaranje"
  ],
  "nehodiSe": [
    "dolžnik dolg zanika – takrat pomaga opomin ali odvetnik"
  ],
  "po": [
    {
      "nazev": "Izvirnik",
      "popis": "Upnik obdrži izvirnik."
    }
  ],
  "faq": [
    {
      "q": "Kaj pomeni pretrganje zastaranja?",
      "a": "Ko dolžnik pripozna dolg, se zastaranje pretrga in rok začne teči znova; splošni zastaralni rok je pet let (346. člen OZ)."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku (pripoznava dolga, zastaranje).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite pripoznavo dolga na spletu – PDF brezplačno", "description": "Pripoznava dolga z rokom plačila. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

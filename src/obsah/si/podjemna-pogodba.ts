import type { StrankaDokumentu } from '../typy';
import { podjemnaPogodba as sablona } from '../../sablony/si/podjemna-pogodba';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Podjemna pogodba",
  nazevA: "podjemno pogodbo",
  katalog: {"popis": "Mojster, popravilo, obnova.", "kategorie": "storitve", "ilustrace": "protokol", "slova": ["podjemna pogodba", "pogodba z mojstrom", "obnova", "popravilo", "pogodba o delu"]},
  souvisejici: "storitve",
  landing: {
  "title": "Podjemna pogodba {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna podjemna pogodba z mojstrom: opis del, rok izvedbe, plačilo, avans, prevzem in napake. Za obnovo, popravilo ali storitev. PDF in Word.",
  "perex": "Za obnovo kopalnice, popravilo ali drugo delo. Z rokom, plačilom in prevzemom dela.",
  "obsahPopis": "Šest členov po Obligacijskem zakoniku.",
  "obsah": [
    {
      "nazev": "Pogodbeni stranki",
      "popis": "Naročnik in podjemnik."
    },
    {
      "nazev": "Delo",
      "popis": "Opis in kraj izvedbe."
    },
    {
      "nazev": "Rok",
      "popis": "Začetek in dokončanje."
    },
    {
      "nazev": "Plačilo",
      "popis": "Cena, avans, način."
    },
    {
      "nazev": "Prevzem",
      "popis": "Pregled in napake."
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
    "najemate mojstra za obnovo ali popravilo",
    "želite pisno imeti rok in ceno"
  ],
  "nehodiSe": [
    "gre za gradnjo hiše – potrebna je gradbena pogodba"
  ],
  "po": [
    {
      "nazev": "Prevzem",
      "popis": "Delo preglejte in napake takoj sporočite."
    }
  ],
  "faq": [
    {
      "q": "Kdaj je treba sporočiti napake?",
      "a": "Ob prevzemu delo preglejte in o napakah brez odlašanja pisno obvestite izvajalca. Za skrite napake veljajo roki iz Obligacijskega zakonika."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku (podjemna pogodba).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite podjemno pogodbo na spletu – PDF brezplačno", "description": "Podjemna pogodba z mojstrom. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { posojilnaPogodba as sablona } from '../../sablony/si/posojilna-pogodba';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Posojilna pogodba",
  nazevA: "posojilno pogodbo",
  katalog: {"popis": "Posojilo prijatelju ali družini, tudi na obroke.", "kategorie": "denar", "ilustrace": "pujcka", "slova": ["posojilna pogodba", "posojilo med fizičnimi osebami", "posoja denarja", "obroki", "pogodba o posojilu"]},
  souvisejici: "denar",
  landing: {
  "title": "Posojilna pogodba {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna posojilna pogodba med fizičnimi osebami: znesek z besedo, vračilo naenkrat ali v obrokih, obresti v zakonskih mejah, zamudne obresti. PDF in Word.",
  "perex": "Za posojilo prijatelju ali družinskemu članu. Naenkrat ali v mesečnih obrokih, z obrestmi ali brez.",
  "obsahPopis": "Pet členov po Obligacijskem zakoniku.",
  "obsah": [
    {
      "nazev": "Pogodbeni stranki",
      "popis": "Posojilodajalec in posojilojemalec."
    },
    {
      "nazev": "Predmet",
      "popis": "Znesek in način izročitve."
    },
    {
      "nazev": "Vračilo",
      "popis": "Naenkrat ali obroki, predčasno vračilo."
    },
    {
      "nazev": "Obresti",
      "popis": "Brez obresti ali pogodbene obresti."
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
    "Opomniki za obroke v koledarju",
    "PDF in Word"
  ],
  "hodiSe": [
    "posojate denar prijatelju ali družini",
    "želite pisno imeti rok in obroke"
  ],
  "nehodiSe": [
    "posojate kot podjetje ali v okviru dejavnosti"
  ],
  "po": [
    {
      "nazev": "Izročitev denarja",
      "popis": "Najbolje na račun."
    },
    {
      "nazev": "Obroki",
      "popis": "Datume shranite v koledar."
    }
  ],
  "faq": [
    {
      "q": "Koliko so lahko obresti?",
      "a": "Obresti, ki za več kot 50 % presegajo predpisano obrestno mero zamudnih obresti, veljajo za oderuške (377. člen OZ). Pogodba brez obresti je običajna med znanci."
    },
    {
      "q": "Kaj če dolžnik zamuja?",
      "a": "Dolguje zakonske zamudne obresti; po pogodbi lahko zahtevate tudi celoten ostanek naenkrat."
    },
    {
      "q": "Ali je treba plačati davek?",
      "a": "Posojilo ni dohodek. Če prejmete obresti, so obdavčene kot dohodek iz kapitala."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku (posojilna pogodba, obresti).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite posojilno pogodbo na spletu – PDF brezplačno", "description": "Posojilna pogodba med fizičnimi osebami, tudi na obroke. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;

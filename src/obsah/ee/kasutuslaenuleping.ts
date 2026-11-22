import type { StrankaDokumentu } from '../typy';
import { kasutuslaenuleping as sablona } from '../../sablony/ee/kasutuslaenuleping';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kasutuslaenuleping",
  nazevA: "kasutuslaenulepingu",
  katalog: {"popis": "Asja tasuta kasutada andmine.", "kategorie": "ostud", "ilustrace": "protokol", "slova": ["kasutuslaenuleping", "asja laenamine", "tasuta kasutamine", "auto laenamine", "kasutuslaen"]},
  souvisejici: "ostud",
  landing: {
  "title": "Kasutuslaenuleping {rok} – näidis PDF tasuta",
  "description": "Tasuta kasutuslaenulepingu näidis asja tasuta kasutada andmiseks: asi, seisukord, kestus, tagastamine ja hooldus. PDF ja Word.",
  "perex": "Kui annate asja – haagise, tööriista, auto – tasuta kasutada. Paneb kirja seisukorra ja tagastamise aja.",
  "obsahPopis": "Punktid kasutuslaenu kohta.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Laenuandja ja laenaja."
    },
    {
      "nazev": "Asi",
      "popis": "Kirjeldus, seisukord, väärtus."
    },
    {
      "nazev": "Kestus",
      "popis": "Kuupäevani või eesmärgi täitmiseni."
    },
    {
      "nazev": "Kasutamine",
      "popis": "Hoolikus ja kulud."
    }
  ],
  "kroky": [
    {
      "nazev": "Täitke andmed",
      "popis": "Mida te ei tea, jätke vahele – jääb joon käsitsi täitmiseks."
    },
    {
      "nazev": "Kontrollige teksti",
      "popis": "Iga lõiku saate muuta."
    },
    {
      "nazev": "Laadige alla ja allkirjastage",
      "popis": "PDF või Word, tasuta."
    }
  ],
  "online": [
    "Meeldetuletus tagastamise kohta",
    "PDF ja Word"
  ],
  "hodiSe": [
    "annate asja tasuta kasutada"
  ],
  "nehodiSe": [
    "küsite kasutamise eest tasu – see on üürileping"
  ],
  "po": [
    {
      "nazev": "Üleandmine",
      "popis": "Kontrollige asi koos üle."
    },
    {
      "nazev": "Tagastamine",
      "popis": "Küsige kinnitust tagastamise kohta."
    }
  ],
  "faq": [
    {
      "q": "Mis vahe on kasutuslaenul ja üüril?",
      "a": "Kasutuslaen on tasuta. Kui asja kasutamise eest makstakse, on tegemist üürilepinguga."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse kasutuslaenulepingu sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis kasutuslaenuleping – PDF", "description": "Asja tasuta kasutada andmine. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

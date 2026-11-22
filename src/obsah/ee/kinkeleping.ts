import type { StrankaDokumentu } from '../typy';
import { kinkeleping as sablona } from '../../sablony/ee/kinkeleping';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kinkeleping",
  nazevA: "kinkelepingu",
  katalog: {"popis": "Raha või asja kinkimine.", "kategorie": "raha", "ilustrace": "dar", "slova": ["kinkeleping", "kingitus", "raha kinkimine", "auto kinkimine", "kinkelepingu näidis"]},
  souvisejici: "raha",
  landing: {
  "title": "Kinkeleping {rok} – näidis PDF tasuta",
  "description": "Tasuta kinkelepingu näidis raha või asja kinkimiseks: üleandmine, väärtus ja kinkija õigus kingitus tagasi nõuda. PDF ja Word.",
  "perex": "Raha või asja kinkimiseks, kui kingitus antakse kohe üle. Eestis kingimaksu ei ole.",
  "obsahPopis": "Punktid kinkimise kohta.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Kinkija ja kingisaaja."
    },
    {
      "nazev": "Kingitus",
      "popis": "Raha või asi ja selle väärtus."
    },
    {
      "nazev": "Üleandmine",
      "popis": "Kingitus antakse üle lepingu sõlmimisel."
    },
    {
      "nazev": "Tagasivõtmine",
      "popis": "Seaduses sätestatud juhud."
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
    "Summa sõnadega automaatselt",
    "PDF ja Word"
  ],
  "hodiSe": [
    "kingite raha või asja ja annate selle kohe üle",
    "soovite kingitust kirjalikult tõendada"
  ],
  "nehodiSe": [
    "kingite kinnisasja – vajalik on notar",
    "lubate kinkida alles tulevikus – kinkelubadus vajab notariaalset vormi"
  ],
  "po": [
    {
      "nazev": "Makse",
      "popis": "Raha kinkimisel kandke see üle pangaga."
    },
    {
      "nazev": "Eksemplarid",
      "popis": "Kumbki pool hoiab ühte."
    }
  ],
  "faq": [
    {
      "q": "Kas kingituselt makstakse maksu?",
      "a": "Eestis kingimaksu ei ole ja eraisikute vahelisi kingitusi üldjuhul tulumaksuga ei maksustata."
    },
    {
      "q": "Kas kinkija võib kingituse tagasi nõuda?",
      "a": "Seaduses sätestatud juhtudel, näiteks kingisaaja jämeda tänamatuse korral, võib kinkija kinkelepingust taganeda ja kingituse tagasi nõuda."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse kinkelepingu sätetele ja Maksu- ja Tolliameti juhistele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis kinkeleping – PDF", "description": "Kinkeleping raha või asja kinkimiseks. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

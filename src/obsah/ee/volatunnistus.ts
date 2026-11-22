import type { StrankaDokumentu } from '../typy';
import { volatunnistus as sablona } from '../../sablony/ee/volatunnistus';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Võla tunnistamine",
  nazevA: "võla tunnistamise",
  katalog: {"popis": "Võlgnik tunnistab võla kirjalikult.", "kategorie": "raha", "ilustrace": "dluh", "slova": ["võla tunnistamine", "võlatunnistus", "võla tunnustamine", "aegumise katkestamine", "vola tunnistamine"]},
  souvisejici: "raha",
  landing: {
  "title": "Võla tunnistamine {rok} – näidis PDF tasuta",
  "description": "Tasuta võla tunnistamise näidis: võlgnik tunnistab võla summat ja alust kirjalikult, tasumise viis ja tähtaeg. Katkestab aegumise. PDF ja Word.",
  "perex": "Kui keegi võlgneb teile raha ja tunnistab seda. Kirjalik tunnistamine katkestab aegumise ja on tugev tõend.",
  "obsahPopis": "Lühike kinnitus.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Võlausaldaja ja võlgnik."
    },
    {
      "nazev": "Võlg",
      "popis": "Summa sõnadega ja võla alus."
    },
    {
      "nazev": "Tasumine",
      "popis": "Viis ja tähtaeg."
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
    "keegi võlgneb teile ja tunnistab võlga",
    "soovite peatada aegumise"
  ],
  "nehodiSe": [
    "soovite tasumist osadena – kasutage maksegraafiku kokkulepet"
  ],
  "po": [
    {
      "nazev": "Hoidke alles",
      "popis": "Allkirjastatud originaali hoiab võlausaldaja."
    }
  ],
  "faq": [
    {
      "q": "Mida võla tunnistamine annab?",
      "a": "Võla tunnustamine katkestab aegumise – aegumistähtaeg hakkab uuesti kulgema. Kirjalik tunnistamine on ka tugev tõend kohtus."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb tsiviilseadustiku üldosa seaduse aegumise sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis võla tunnistamine – PDF", "description": "Võla kirjalik tunnistamine. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

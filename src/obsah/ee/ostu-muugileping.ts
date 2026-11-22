import type { StrankaDokumentu } from '../typy';
import { ostuMuugileping as sablona } from '../../sablony/ee/ostu-muugileping';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Ostu-müügileping",
  nazevA: "ostu-müügilepingu",
  katalog: {"popis": "Kasutatud asja müük kuulutuse kaudu.", "kategorie": "ostud", "ilustrace": "protokol", "slova": ["ostu-müügileping", "müügileping", "kasutatud asja müük", "kuulutuse kaudu müük", "ostu muugileping"]},
  souvisejici: "ostud",
  landing: {
  "title": "Ostu-müügileping {rok} – näidis PDF tasuta",
  "description": "Tasuta ostu-müügilepingu näidis kasutatud asja müügiks: asi, seisukord, hind sõnadega, makse ja üleandmine. Eraisikute vahel. PDF ja Word.",
  "perex": "Kasutatud asja müügiks kuulutuse kaudu – mööbel, elektroonika, jalgratas. Paneb kirja seisukorra, hinna ja makse.",
  "obsahPopis": "Punktid müügi kohta.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Müüja ja ostja."
    },
    {
      "nazev": "Asi",
      "popis": "Kirjeldus ja seisukord."
    },
    {
      "nazev": "Hind ja makse",
      "popis": "Summa sõnadega."
    },
    {
      "nazev": "Üleandmine",
      "popis": "Kuupäev ja koht."
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
    "müüte või ostate kasutatud asja eraisikult"
  ],
  "nehodiSe": [
    "müüte autot – kasutage sõiduki ostu-müügilepingut"
  ],
  "po": [
    {
      "nazev": "Makse",
      "popis": "Võimalusel kasutage pangaülekannet."
    },
    {
      "nazev": "Eksemplarid",
      "popis": "Kumbki pool hoiab ühte."
    }
  ],
  "faq": [
    {
      "q": "Kas eraisik vastutab müüdud asja puuduste eest?",
      "a": "Jah, ka eraisik vastutab, kui asi ei vasta lepingule; kirjutage teadaolevad puudused lepingusse, et hiljem vaidlusi ei tekiks."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis ostu-müügileping – PDF", "description": "Kasutatud asja ostu-müügileping. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

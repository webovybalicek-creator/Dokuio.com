import type { StrankaDokumentu } from '../typy';
import { eluruumiAkt as sablona } from '../../sablony/ee/eluruumi-uleandmise-akt';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Eluruumi üleandmise-vastuvõtmise akt",
  nazevA: "eluruumi üleandmise akti",
  katalog: {"popis": "Arvestinäidud, võtmed ja eluruumi seisukord.", "kategorie": "eluase", "ilustrace": "protokol", "slova": ["eluruumi üleandmise akt", "korteri üleandmise akt", "arvestinäidud", "üüri lõpp", "eluruumi uleandmise akt"]},
  souvisejici: "eluase",
  landing: {
  "title": "Korteri üleandmise akt {rok} – näidis PDF tasuta",
  "description": "Tasuta eluruumi üleandmise-vastuvõtmise akti näidis: arvestinäidud, võtmed, seisukord ja puudused üüri alguses või lõpus. PDF ja Word.",
  "perex": "Paneb kirja eluruumi seisukorra, arvestinäidud ja võtmed üüri alguses või lõpus – alus tagatisraha tagastamiseks.",
  "obsahPopis": "Lühike akt.",
  "obsah": [
    {
      "nazev": "Üleandmine",
      "popis": "Kes, kellele ja millal."
    },
    {
      "nazev": "Arvestid",
      "popis": "Elekter, vesi, gaas, küte."
    },
    {
      "nazev": "Võtmed",
      "popis": "Mitu ja millised."
    },
    {
      "nazev": "Seisukord",
      "popis": "Puudused ja märkused."
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
    "Võtab andmed üle üürilepingust",
    "PDF ja Word"
  ],
  "hodiSe": [
    "üür algab või lõpeb",
    "soovite seisukorra kirja panna"
  ],
  "nehodiSe": [
    "vajate üürilepingut – kasutage üürilepingu põhja"
  ],
  "po": [
    {
      "nazev": "Fotod",
      "popis": "Pildistage ruume ja arvestinäite."
    },
    {
      "nazev": "Eksemplarid",
      "popis": "Kumbki pool hoiab ühte."
    }
  ],
  "faq": [
    {
      "q": "Kas üürnik peab tavapärase kulumise kõrvaldama?",
      "a": "Tavapärase kulumise kõrvaldamist võib üürnikult nõuda ainult siis, kui see on üürilepingus kokku lepitud."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis eluruumi üleandmise akt – PDF", "description": "Eluruumi üleandmise akt arvestinäitudega. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

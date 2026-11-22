import type { StrankaDokumentu } from '../typy';
import { alluurileping as sablona } from '../../sablony/ee/alluurileping';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Allüürileping",
  nazevA: "allüürilepingu",
  katalog: {"popis": "Tuba või kogu eluruum üürnikult.", "kategorie": "eluase", "ilustrace": "protokol", "slova": ["allüürileping", "allüür", "toa üürimine", "alluurileping"]},
  souvisejici: "eluase",
  landing: {
  "title": "Allüürileping {rok} – näidis PDF tasuta",
  "description": "Tasuta allüürilepingu näidis: tuba või kogu eluruum, üüri osa, tagatisraha ja üürileandja nõusolek. PDF ja Word.",
  "perex": "Kui üürnik annab toa või kogu eluruumi edasi kolmandale isikule. Vajalik on üürileandja nõusolek.",
  "obsahPopis": "Punktid allüüri kohta.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Üürnik ja allüürnik."
    },
    {
      "nazev": "Eluruum",
      "popis": "Osa või kogu eluruum."
    },
    {
      "nazev": "Nõusolek",
      "popis": "Üürileandja nõusolek."
    },
    {
      "nazev": "Üür ja tagatis",
      "popis": "Summa ja maksepäev."
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
    "üürnik annab toa või eluruumi edasi",
    "üürileandja on nõus"
  ],
  "nehodiSe": [
    "olete omanik – kasutage üürilepingut"
  ],
  "po": [
    {
      "nazev": "Nõusolek",
      "popis": "Hoidke üürileandja kirjalik nõusolek alles."
    },
    {
      "nazev": "Eksemplarid",
      "popis": "Kumbki pool hoiab ühte."
    }
  ],
  "faq": [
    {
      "q": "Kas allüürile andmiseks on vaja üürileandja nõusolekut?",
      "a": "Jah, üürnik võib eluruumi allüürile anda üürileandja nõusolekul."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis allüürileping – PDF", "description": "Allüürileping toa või eluruumi kohta. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

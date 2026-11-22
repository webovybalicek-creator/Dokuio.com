import type { StrankaDokumentu } from '../typy';
import { uurileping as sablona } from '../../sablony/ee/uurileping';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Eluruumi üürileping",
  nazevA: "eluruumi üürilepingu",
  katalog: {"popis": "Korteri üürimine tagatisrahaga.", "kategorie": "eluase", "ilustrace": "protokol", "slova": ["üürileping", "eluruumi üürileping", "korteri üürileping", "tagatisraha", "üürileping näidis", "uurileping"]},
  souvisejici: "eluase",
  landing: {
  "title": "Üürileping {rok} – näidis PDF tasuta",
  "description": "Tasuta eluruumi üürilepingu näidis: üür, kõrvalkulud, tagatisraha, tähtajaline või tähtajatu leping ja ülesütlemine. PDF ja Word.",
  "perex": "Korteri või maja üürimiseks. Tähtajatu või tähtajaline, tagatisrahaga, kõrvalkulude ja üleandmise aktiga.",
  "obsahPopis": "Punktid üürisuhte kohta.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Üürileandja ja üürnik."
    },
    {
      "nazev": "Eluruum",
      "popis": "Aadress, pind, möbleeritus."
    },
    {
      "nazev": "Kestus",
      "popis": "Tähtajatu või tähtajaline."
    },
    {
      "nazev": "Üür ja kõrvalkulud",
      "popis": "Summa, maksepäev, kõrvalkulud."
    },
    {
      "nazev": "Tagatisraha",
      "popis": "Summa ja tagastamine."
    },
    {
      "nazev": "Ülesütlemine",
      "popis": "Etteteatamistähtajad."
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
    "Meeldetuletused",
    "Üleandmise akt võtab andmed üle"
  ],
  "hodiSe": [
    "annate eluruumi üürile või üürite selle",
    "soovite kirjalikult üüri, tagatise ja tähtaja"
  ],
  "nehodiSe": [
    "üürite äripinda – kehtivad muud reeglid"
  ],
  "po": [
    {
      "nazev": "Üleandmine",
      "popis": "Koostage üleandmise akt arvestinäitude ja võtmetega."
    },
    {
      "nazev": "Eksemplarid",
      "popis": "Kumbki pool hoiab ühte."
    }
  ],
  "faq": [
    {
      "q": "Kui pika etteteatamisega saab tähtajatut üürilepingut üles öelda?",
      "a": "Tähtajatu eluruumi üürilepingu võib korraliselt üles öelda, teatades sellest ette vähemalt kolm kuud."
    },
    {
      "q": "Kus tagatisraha hoitakse?",
      "a": "Üürileandja hoiab tagatisraha krediidiasutuses eraldi oma varast."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse üürilepingu sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis eluruumi üürileping – PDF", "description": "Eluruumi üürileping tagatisrahaga. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

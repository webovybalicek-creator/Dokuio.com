import type { StrankaDokumentu } from '../typy';
import { mootorrattaLeping as sablona } from '../../sablony/ee/mootorratta-ostu-muugileping';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Mootorratta ostu-müügileping",
  nazevA: "mootorratta ostu-müügilepingu",
  katalog: {"popis": "Mootorratas, roller või ATV.", "kategorie": "auto", "ilustrace": "motorka", "slova": ["mootorratta ostu-müügileping", "mootorratta müük", "rolleri müük", "ATV müük", "mootorratta muugileping"]},
  souvisejici: "auto",
  landing: {
  "title": "Mootorratta ostu-müügileping {rok} – näidis PDF tasuta",
  "description": "Tasuta mootorratta või rolleri ostu-müügilepingu näidis: VIN, läbisõit, puudused, makse ja üleandmise kellaaeg. PDF ja Word.",
  "perex": "Mootorratta, rolleri või ATV müügiks eraisikute vahel. Sama kontrollitud tekst nagu autol; omanikuvahetus Transpordiameti e-teeninduses.",
  "obsahPopis": "Punktid sõiduki müügi ja üleandmise kohta.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Müüja ja ostja isikukoodiga."
    },
    {
      "nazev": "Sõiduk",
      "popis": "Mootorratas, VIN ja registreerimismärk."
    },
    {
      "nazev": "Seisukord",
      "popis": "Läbisõit ja teadaolevad puudused."
    },
    {
      "nazev": "Hind ja makse",
      "popis": "Summa sõnadega."
    },
    {
      "nazev": "Üleandmine",
      "popis": "Kuupäev, kellaaeg, võtmed, dokumendid."
    },
    {
      "nazev": "Omanikuvahetus",
      "popis": "5 tööpäeva jooksul."
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
    "VIN-i kontroll",
    "Meeldetuletus omanikuvahetuse kohta"
  ],
  "hodiSe": [
    "müüte või ostate mootorratta või rolleri eraisikult"
  ],
  "nehodiSe": [
    "ostate kauplejalt"
  ],
  "po": [
    {
      "nazev": "Omanikuvahetus",
      "popis": "Müüja alustab ja ostja kinnitab omanikuvahetuse e-teeninduses."
    },
    {
      "nazev": "Kindlustus",
      "popis": "Ostja sõlmib liikluskindlustuse enne sõitu."
    }
  ],
  "faq": [
    {
      "q": "Kas reeglid on samad nagu autol?",
      "a": "Jah. Ka mootorrataste puhul tehakse omanikuvahetus Transpordiameti e-teeninduses ja registreeringu muudatus tuleb teha 5 tööpäeva jooksul."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseadusele ja Transpordiameti omanikuvahetuse korrale.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis mootorratta ostu-müügileping – PDF", "description": "Mootorratta või rolleri ostu-müügileping. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

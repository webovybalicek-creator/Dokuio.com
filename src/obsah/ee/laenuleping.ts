import type { StrankaDokumentu } from '../typy';
import { laenuleping as sablona } from '../../sablony/ee/laenuleping';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Laenuleping",
  nazevA: "laenulepingu",
  katalog: {"popis": "Laen sõbrale või sugulasele, ka osamaksetena.", "kategorie": "raha", "ilustrace": "pujcka", "slova": ["laenuleping", "laen eraisikute vahel", "laen sõbrale", "laenuleping osamaksetega", "võlakiri"]},
  souvisejici: "raha",
  landing: {
  "title": "Laenuleping eraisikute vahel {rok} – näidis PDF tasuta",
  "description": "Tasuta laenulepingu näidis eraisikute vahel: summa sõnadega, tagastamine korraga või osamaksetena, intress ainult kokkuleppel. PDF ja Word.",
  "perex": "Raha laenamiseks sõbrale või sugulasele. Tagastamine korraga või igakuiste osamaksetena, intressiga või ilma.",
  "obsahPopis": "Punktid laenu kohta (võlaõigusseaduse laenuleping).",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Laenuandja ja laenusaaja."
    },
    {
      "nazev": "Ese",
      "popis": "Summa ja üleandmise viis."
    },
    {
      "nazev": "Tagastamine",
      "popis": "Korraga või osamaksetena, ennetähtaegne tagastamine."
    },
    {
      "nazev": "Intress",
      "popis": "Intressita laen või kokkulepitud intress."
    },
    {
      "nazev": "Lõppsätted",
      "popis": "Eksemplarid."
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
    "Meeldetuletus osamaksete kohta",
    "PDF ja Word"
  ],
  "hodiSe": [
    "laenate raha sõbrale või sugulasele",
    "soovite kirjalikult tagastamise tähtaega"
  ],
  "nehodiSe": [
    "laenate ettevõttena – kehtivad eraldi reeglid"
  ],
  "po": [
    {
      "nazev": "Makse",
      "popis": "Kandke raha üle pangaga – väljavõte tõendab laenu andmist."
    },
    {
      "nazev": "Eksemplarid",
      "popis": "Kumbki pool hoiab ühte."
    }
  ],
  "faq": [
    {
      "q": "Kas laenuleping peab olema kirjalik?",
      "a": "Eraisikute vaheline laenuleping ei pea seaduse järgi olema kirjalik, kuid kirjalik leping on parim tõend summa ja tähtaja kohta."
    },
    {
      "q": "Millal laenunõue aegub?",
      "a": "Lepingust tuleneva nõude aegumistähtaeg on 3 aastat; võla tunnistamine katkestab aegumise."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse laenulepingu sätetele ja tsiviilseadustiku üldosa seaduse aegumise sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis laenuleping – PDF", "description": "Laenuleping eraisikute vahel, ka osamaksetena. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { kviitung as sablona } from '../../sablony/ee/raha-vastuvotmise-kviitung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Raha vastuvõtmise kviitung",
  nazevA: "raha vastuvõtmise kviitungi",
  katalog: {"popis": "Kinnitus sularahamakse kohta.", "kategorie": "raha", "ilustrace": "penize", "slova": ["raha vastuvõtmise kviitung", "kviitung", "raha kättesaamise kinnitus", "sularaha kviitung", "ettemaksu kviitung", "raha vastuvotmise kviitung"]},
  souvisejici: "raha",
  landing: {
  "title": "Raha vastuvõtmise kviitung {rok} – näidis PDF tasuta",
  "description": "Tasuta raha vastuvõtmise kviitungi näidis: kes raha sai, kellelt, kui palju (ka sõnadega) ja mille eest. Tõend makse kohta. PDF ja Word.",
  "perex": "Kui annate või saate sularaha – ostuhind, laen, ettemaks või tagatisraha. Kviitung tõendab makset.",
  "obsahPopis": "Lühike kviitung.",
  "obsah": [
    {
      "nazev": "Kviitung",
      "popis": "Saaja, maksja, summa sõnadega ja põhjus."
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
    "maksate või saate sularaha",
    "annate ettemaksu või tagatisraha"
  ],
  "nehodiSe": [
    "maksate pangaülekandega – väljavõte on juba tõend"
  ],
  "po": [
    {
      "nazev": "Hoidke alles",
      "popis": "Kviitungi hoiab alles see, kes maksis."
    }
  ],
  "faq": [
    {
      "q": "Kes kviitungi allkirjastab?",
      "a": "Kviitungi allkirjastab see, kes raha vastu võttis. Maksjal on õigus seda nõuda ja ta hoiab selle tõendina alles."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis raha vastuvõtmise kviitung – PDF", "description": "Kviitung sularaha kättesaamise kohta. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { maksegraafikuKokkulepe as sablona } from '../../sablony/ee/maksegraafiku-kokkulepe';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Maksegraafiku kokkulepe",
  nazevA: "maksegraafiku kokkuleppe",
  katalog: {"popis": "Võla tasumine igakuiste osamaksetena.", "kategorie": "raha", "ilustrace": "dluh", "slova": ["maksegraafik", "maksegraafiku kokkulepe", "võla ajatamine", "osamaksed", "vola ajatamine"]},
  souvisejici: "raha",
  landing: {
  "title": "Maksegraafiku kokkulepe {rok} – näidis PDF tasuta",
  "description": "Tasuta maksegraafiku kokkuleppe näidis: võla tunnustamine, igakuised osamaksed, maksepäev ja viivitamise tagajärjed. PDF ja Word.",
  "perex": "Kui võlgnik ei suuda kogu võlga korraga maksta. Kokkulepe tunnustab võlga ja paneb paika osamaksed.",
  "obsahPopis": "Punktid ajatamise kohta.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Võlausaldaja ja võlgnik."
    },
    {
      "nazev": "Tunnustamine",
      "popis": "Võla summa ja alus."
    },
    {
      "nazev": "Osamaksed",
      "popis": "Summa, arv ja maksepäev."
    },
    {
      "nazev": "Viivitamine",
      "popis": "Mis juhtub, kui osamakse jääb tasumata."
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
    "võlgnik soovib võlga osadena tasuda"
  ],
  "nehodiSe": [
    "võlgnik ei vasta – kasutage maksenõuet"
  ],
  "po": [
    {
      "nazev": "Meeldetuletus",
      "popis": "Märkige osamaksed kalendrisse."
    },
    {
      "nazev": "Tõendid",
      "popis": "Hoidke alles pangaväljavõtted."
    }
  ],
  "faq": [
    {
      "q": "Kas kokkulepe mõjutab aegumist?",
      "a": "Jah, kokkuleppega tunnustab võlgnik võlga ja see katkestab aegumise – tähtaeg hakkab uuesti kulgema."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseadusele ja tsiviilseadustiku üldosa seaduse aegumise sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis maksegraafiku kokkulepe – PDF", "description": "Võla tasumine osamaksetena. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { soidukiAkt as sablona } from '../../sablony/ee/soiduki-uleandmise-akt';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Sõiduki üleandmise-vastuvõtmise akt",
  nazevA: "sõiduki üleandmise akti",
  katalog: {"popis": "Läbisõit, kahjustused, võtmed ja üleandmise aeg.", "kategorie": "auto", "ilustrace": "protokol", "slova": ["sõiduki üleandmise akt", "auto üleandmise akt", "auto üleandmine", "läbisõit", "soiduki uleandmise akt"]},
  souvisejici: "auto",
  landing: {
  "title": "Auto üleandmise akt {rok} – näidis PDF tasuta",
  "description": "Tasuta sõiduki üleandmise-vastuvõtmise akti näidis: täpne kellaaeg, läbisõit, kütus, võtmed, dokumendid ja kahjustused. Tõend trahvide puhuks. PDF ja Word.",
  "perex": "Paneb kirja sõiduki seisukorra ja täpse üleandmise aja – oluline, kui pärast müüki tuleb trahv või parkimistasu.",
  "obsahPopis": "Lühike akt.",
  "obsah": [
    {
      "nazev": "Üleandmine",
      "popis": "Kes, kellele, millal ja mis kell."
    },
    {
      "nazev": "Võtmed ja dokumendid",
      "popis": "Mis antakse koos sõidukiga üle."
    },
    {
      "nazev": "Seisukord",
      "popis": "Kahjustused ja märkused."
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
    "Võtab andmed üle ostu-müügilepingust",
    "VIN-i kontroll",
    "PDF ja Word"
  ],
  "hodiSe": [
    "müüte või laenate auto välja",
    "tagastate sõiduki pärast laenamist"
  ],
  "nehodiSe": [
    "vajate ka lepingut – kasutage ostu-müügilepingut"
  ],
  "po": [
    {
      "nazev": "Fotod",
      "popis": "Pildistage sõidukit ja spidomeetrit."
    },
    {
      "nazev": "Eksemplarid",
      "popis": "Kumbki pool hoiab ühte."
    }
  ],
  "faq": [
    {
      "q": "Miks kirjutada üles üleandmise kellaaeg?",
      "a": "Kuni omanikuvahetus ei ole registris tehtud, võivad trahvid ja teated jõuda endisele omanikule – kellaajaga akt tõendab, kelle käes sõiduk oli."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis sõiduki üleandmise akt – PDF", "description": "Auto üleandmise akt kellaajaga. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

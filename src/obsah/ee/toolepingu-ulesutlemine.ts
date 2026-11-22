import type { StrankaDokumentu } from '../typy';
import { toolepinguUlesutlemine as sablona } from '../../sablony/ee/toolepingu-ulesutlemine';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Töölepingu ülesütlemise avaldus",
  nazevA: "töölepingu ülesütlemise avalduse",
  katalog: {"popis": "Töölt lahkumine, 30 päeva etteteatamist.", "kategorie": "too", "ilustrace": "protokol", "slova": ["töölepingu ülesütlemine", "lahkumisavaldus", "töölt lahkumine", "30 päeva etteteatamine", "toolepingu ulesutlemine"]},
  souvisejici: "too",
  landing: {
  "title": "Töölepingu ülesütlemine {rok} – näidis PDF tasuta",
  "description": "Tasuta töölepingu ülesütlemise avalduse näidis töötajale: korraline ülesütlemine vähemalt 30 kalendripäeva ette, viimane tööpäev, lõpparve. PDF ja Word.",
  "perex": "Kui soovite töölt lahkuda. Tähtajatu töölepingu võib töötaja üles öelda põhjust esitamata, teatades sellest ette vähemalt 30 kalendripäeva.",
  "obsahPopis": "Lühike avaldus.",
  "obsah": [
    {
      "nazev": "Töötaja ja tööandja",
      "popis": "Kes ütleb üles ja kellele."
    },
    {
      "nazev": "Ülesütlemine",
      "popis": "Töölepingu seaduse § 98 alusel."
    },
    {
      "nazev": "Viimane tööpäev",
      "popis": "Ja lõpparve."
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
    "Tähtaja meeldetuletus",
    "PDF ja Word"
  ],
  "hodiSe": [
    "soovite tähtajatu töölepingu lõpetada"
  ],
  "nehodiSe": [
    "leppisite lõpetamise tööandjaga kokku – kirjutage kokkulepe"
  ],
  "po": [
    {
      "nazev": "Üleandmine",
      "popis": "Andke avaldus üle allkirja vastu või saatke digiallkirjastatult."
    },
    {
      "nazev": "Lõpparve",
      "popis": "Kontrollige töötasu ja puhkusehüvitist."
    }
  ],
  "faq": [
    {
      "q": "Millises vormis peab ülesütlemine olema?",
      "a": "Kirjalikku taasesitamist võimaldavas vormis – näiteks allkirjastatud paber või e-kiri."
    },
    {
      "q": "Kas võin lahkuda varem kui 30 päeva pärast?",
      "a": "Jah, kui tööandja on sellega nõus; kirjutage kokkulepitud kuupäev avaldusse."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb töölepingu seaduse ülesütlemise sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis töölepingu ülesütlemine – PDF", "description": "Töölepingu ülesütlemise avaldus töötajale. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

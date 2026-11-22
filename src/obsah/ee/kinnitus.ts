import type { StrankaDokumentu } from '../typy';
import { kinnitus as sablona } from '../../sablony/ee/kinnitus';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kinnitus",
  nazevA: "kinnituse",
  katalog: {"popis": "Kirjalik kinnitus asutusele või pangale.", "kategorie": "ostud", "ilustrace": "plnamoc", "slova": ["kinnitus", "kirjalik kinnitus", "avaldus", "kinnituse näidis"]},
  souvisejici: "ostud",
  landing: {
  "title": "Kirjalik kinnitus {rok} – näidis PDF tasuta",
  "description": "Tasuta kirjaliku kinnituse näidis: kinnitaja andmed ja asjaolud, mida kinnitate asutusele, pangale või teisele isikule. PDF ja Word.",
  "perex": "Kui asutus, pank või teine isik palub teil asjaolusid kirjalikult kinnitada.",
  "obsahPopis": "Lühike kinnitus.",
  "obsah": [
    {
      "nazev": "Kinnitus",
      "popis": "Kinnitaja, sisu ja adressaat."
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
    "PDF ja Word",
    "Digiallkirjaga samaväärne"
  ],
  "hodiSe": [
    "vajate kirjalikku kinnitust asjaolude kohta"
  ],
  "nehodiSe": [
    "asutus nõuab kindlat vormi või notariaalset kinnitust"
  ],
  "po": [
    {
      "nazev": "Andke üle",
      "popis": "Esitage kinnitus ja hoidke koopia alles."
    }
  ],
  "faq": [
    {
      "q": "Kas kinnitust võib allkirjastada digitaalselt?",
      "a": "Jah, ID-kaardi, Mobiil-ID või Smart-ID digiallkiri on omakäelise allkirjaga samaväärne."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb tsiviilseadustiku üldosa seaduse tahteavalduste sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis kinnitus – PDF", "description": "Kirjalik kinnitus asjaolude kohta. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

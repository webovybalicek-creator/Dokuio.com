import type { StrankaDokumentu } from '../typy';
import { pretensioon as sablona } from '../../sablony/ee/pretensioon';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pretensioon",
  nazevA: "pretensiooni",
  katalog: {"popis": "Puudusega kaup, 2-aastane vastutus.", "kategorie": "ostud", "ilustrace": "protokol", "slova": ["pretensioon", "kauba pretensioon", "puudusega kaup", "garantii", "kaebus müüjale"]},
  souvisejici: "ostud",
  landing: {
  "title": "Pretensioon kauba puuduse kohta {rok} – näidis PDF tasuta",
  "description": "Tasuta pretensiooni näidis puudusega kauba kohta: puuduse kirjeldus ja nõue – parandamine, asendamine, hinnaalandus või raha tagasi. PDF ja Word.",
  "perex": "Kui ostetud kaubal on puudus. Müüja vastutab kauba lepingutingimustele mittevastavuse eest 2 aastat üleandmisest.",
  "obsahPopis": "Lühike pretensioon.",
  "obsah": [
    {
      "nazev": "Müüjale",
      "popis": "Kauplus ja ost."
    },
    {
      "nazev": "Puudus",
      "popis": "Mis on katki ja millal ilmnes."
    },
    {
      "nazev": "Nõue",
      "popis": "Parandus, asendus, hinnaalandus või taganemine."
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
    "Nõude valik"
  ],
  "hodiSe": [
    "ostetud kaubal on puudus",
    "müüja ei ole probleemi lahendanud"
  ],
  "nehodiSe": [
    "soovite veebiostu põhjuseta tagastada – kasutage taganemisavaldust"
  ],
  "po": [
    {
      "nazev": "Saatke",
      "popis": "Saatke pretensioon kirjalikult ja lisage ostu tõend."
    },
    {
      "nazev": "Tarbijavaidlus",
      "popis": "Kui müüja ei vasta, võite pöörduda tarbijavaidluste komisjoni."
    }
  ],
  "faq": [
    {
      "q": "Kui kaua müüja vastutab?",
      "a": "Müüja vastutab kauba lepingule mittevastavuse eest 2 aastat alates kauba üleandmisest."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb ELi tarbijaõigustele (Your Europe) ja võlaõigusseadusele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis pretensioon – PDF", "description": "Pretensioon puudusega kauba kohta. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

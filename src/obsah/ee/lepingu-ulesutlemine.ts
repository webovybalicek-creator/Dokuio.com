import type { StrankaDokumentu } from '../typy';
import { lepinguUlesutlemine as sablona } from '../../sablony/ee/lepingu-ulesutlemine';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Lepingu ülesütlemise avaldus",
  nazevA: "lepingu ülesütlemise avalduse",
  katalog: {"popis": "Telefon, internet, kindlustus, spordiklubi.", "kategorie": "ostud", "ilustrace": "protokol", "slova": ["lepingu ülesütlemine", "teenuse lõpetamine", "spordiklubi lepingu lõpetamine", "interneti lepingu lõpetamine", "lepingu ulesutlemine"]},
  souvisejici: "ostud",
  landing: {
  "title": "Lepingu ülesütlemise avaldus {rok} – näidis PDF tasuta",
  "description": "Tasuta lepingu ülesütlemise avalduse näidis: teenuse-, liikmes- või tellimuslepingu lõpetamine, lõppemise kuupäev ja kinnitus. PDF ja Word.",
  "perex": "Kui soovite lõpetada teenuse-, liikmes- või tellimuslepingu – internet, telefon, spordiklubi, ajakiri.",
  "obsahPopis": "Lühike avaldus.",
  "obsah": [
    {
      "nazev": "Klient ja teenusepakkuja",
      "popis": "Kes ütleb üles ja kellele."
    },
    {
      "nazev": "Leping",
      "popis": "Leping või kliendinumber."
    },
    {
      "nazev": "Lõppemine",
      "popis": "Kuupäev ja kinnitus."
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
    "Meeldetuletus lõppemise kohta",
    "PDF ja Word"
  ],
  "hodiSe": [
    "soovite teenuse lõpetada"
  ],
  "nehodiSe": [
    "ostsite veebist alla 14 päeva tagasi – kasutage taganemisavaldust"
  ],
  "po": [
    {
      "nazev": "Kinnitus",
      "popis": "Küsige ülesütlemise kinnitust."
    },
    {
      "nazev": "Püsimaksed",
      "popis": "Lõpetage need pärast viimast arvet."
    }
  ],
  "faq": [
    {
      "q": "Kas tähtajalise lepingu saab ennetähtaegselt lõpetada?",
      "a": "See sõltub lepingutingimustest; ennetähtaegne lõpetamine võib kaasa tuua leppetrahvi või soodustuse tagasimaksmise."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis lepingu ülesütlemise avaldus – PDF", "description": "Teenuse- või tellimuslepingu lõpetamine. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

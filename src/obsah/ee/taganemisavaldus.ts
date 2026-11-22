import type { StrankaDokumentu } from '../typy';
import { taganemisavaldus as sablona } from '../../sablony/ee/taganemisavaldus';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Taganemisavaldus",
  nazevA: "taganemisavalduse",
  katalog: {"popis": "Veebiostu tagastamine 14 päeva jooksul.", "kategorie": "ostud", "ilustrace": "protokol", "slova": ["taganemisavaldus", "lepingust taganemine", "14 päeva taganemisõigus", "veebiostu tagastamine", "e-poe tagastus"]},
  souvisejici: "ostud",
  landing: {
  "title": "Taganemisavaldus {rok} – näidis PDF tasuta",
  "description": "Tasuta taganemisavalduse näidis veebiostu tagastamiseks: 14-päevane taganemisõigus põhjust esitamata, raha tagastamine. PDF ja Word.",
  "perex": "Kui ostsite e-poest või väljaspool äriruume ja soovite 14 päeva jooksul põhjust esitamata lepingust taganeda.",
  "obsahPopis": "Lühike avaldus.",
  "obsah": [
    {
      "nazev": "Kauplejale",
      "popis": "E-pood ja tellimus."
    },
    {
      "nazev": "Taganemine",
      "popis": "Avaldus lepingust taganemise kohta."
    },
    {
      "nazev": "Raha tagastamine",
      "popis": "Konto, kuhu raha tagastada."
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
    "Kuupäeva kontroll"
  ],
  "hodiSe": [
    "ostsite veebist ja soovite kauba tagastada",
    "te ei ole 14 päeva veel ületanud"
  ],
  "nehodiSe": [
    "kaubal on puudus – kasutage pretensiooni"
  ],
  "po": [
    {
      "nazev": "Saatke",
      "popis": "Saatke avaldus e-postiga ja tagastage kaup."
    },
    {
      "nazev": "Hoidke alles",
      "popis": "Hoidke alles saatmise tõend."
    }
  ],
  "faq": [
    {
      "q": "Kui kaua on aega taganeda?",
      "a": "14 päeva alates kauba kättesaamisest. Kaupleja peab raha tagastama 14 päeva jooksul taganemisavalduse saamisest."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb ELi tarbijaõigustele (Your Europe) ja võlaõigusseadusele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis taganemisavaldus – PDF", "description": "Taganemisavaldus veebiostu tagastamiseks. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

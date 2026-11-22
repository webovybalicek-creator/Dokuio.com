import type { StrankaDokumentu } from '../typy';
import { toovotuleping as sablona } from '../../sablony/ee/toovotuleping';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Töövõtuleping",
  nazevA: "töövõtulepingu",
  katalog: {"popis": "Meister, remont, renoveerimine.", "kategorie": "teenused", "ilustrace": "protokol", "slova": ["töövõtuleping", "leping meistriga", "remonditööde leping", "ehitusleping", "renoveerimine", "toovotuleping"]},
  souvisejici: "teenused",
  landing: {
  "title": "Töövõtuleping {rok} – näidis PDF tasuta",
  "description": "Tasuta töövõtulepingu näidis meistri või ehitusfirmaga: töö kirjeldus, tähtajad, tasu, ettemaks, vastuvõtmine ja puudused. PDF ja Word.",
  "perex": "Tööde tellimiseks meistrilt või ehitusfirmalt – remont, renoveerimine, paigaldus. Paneb kirja töö, tähtaja ja tasu.",
  "obsahPopis": "Punktid töövõtu kohta.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Tellija ja töövõtja."
    },
    {
      "nazev": "Töö",
      "popis": "Kirjeldus, koht ja materjalid."
    },
    {
      "nazev": "Tähtajad",
      "popis": "Algus ja valmimine."
    },
    {
      "nazev": "Tasu",
      "popis": "Kogusumma ja ettemaks."
    },
    {
      "nazev": "Vastuvõtmine",
      "popis": "Puudused ja nende kõrvaldamine."
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
    "tellite tööd meistrilt või firmalt",
    "soovite kirjalikult tähtaega ja hinda"
  ],
  "nehodiSe": [
    "palkate töötaja – kasutage töölepingut"
  ],
  "po": [
    {
      "nazev": "Vastuvõtmine",
      "popis": "Kontrollige töö üle ja kirjutage puudused üles."
    },
    {
      "nazev": "Arved",
      "popis": "Küsige iga makse kohta arvet."
    }
  ],
  "faq": [
    {
      "q": "Mida teha, kui töövõtja hilineb?",
      "a": "Andke mõistlik lisatähtaeg; kui ka see möödub tulemusteta, võite lepingust taganeda."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse töövõtulepingu sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis töövõtuleping – PDF", "description": "Töövõtuleping meistriga. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

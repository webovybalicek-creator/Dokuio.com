import type { StrankaDokumentu } from '../typy';
import { uurUlesutlemine as sablona } from '../../sablony/ee/uurilepingu-ulesutlemine';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Üürilepingu ülesütlemise avaldus",
  nazevA: "üürilepingu ülesütlemise avalduse",
  katalog: {"popis": "Üürnik ütleb üürilepingu üles.", "kategorie": "eluase", "ilustrace": "protokol", "slova": ["üürilepingu ülesütlemine", "üürilepingu lõpetamine", "üürniku ülesütlemine", "3 kuud etteteatamist", "uurilepingu ulesutlemine"]},
  souvisejici: "eluase",
  landing: {
  "title": "Üürilepingu ülesütlemine {rok} – näidis PDF tasuta",
  "description": "Tasuta üürilepingu ülesütlemise avalduse näidis: korraline ülesütlemine vähemalt 3-kuulise etteteatamisega või erakorraline. PDF ja Word.",
  "perex": "Kui soovite eluruumi üürilepingu lõpetada. Tähtajatu lepingu korraline ülesütlemine vähemalt kolm kuud ette.",
  "obsahPopis": "Lühike avaldus.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Üürnik ja üürileandja."
    },
    {
      "nazev": "Leping",
      "popis": "Eluruum ja lepingu kuupäev."
    },
    {
      "nazev": "Ülesütlemine",
      "popis": "Korraline või erakorraline, lõppemise päev."
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
    "soovite tähtajatu üürilepingu lõpetada"
  ],
  "nehodiSe": [
    "soovite lõpetada kokkuleppel – kasutage lõpetamise kokkulepet"
  ],
  "po": [
    {
      "nazev": "Saatke",
      "popis": "Andke avaldus üle allkirja vastu või saatke digiallkirjastatult."
    },
    {
      "nazev": "Üleandmine",
      "popis": "Koostage lõpus üleandmise akt."
    }
  ],
  "faq": [
    {
      "q": "Millises vormis tuleb üürileping üles öelda?",
      "a": "Eluruumi üürilepingu ülesütlemise avaldus peab olema kirjalik. Digiallkiri on omakäelise allkirjaga samaväärne."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse üürilepingu ülesütlemise sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis üürilepingu ülesütlemine – PDF", "description": "Üürilepingu ülesütlemise avaldus. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

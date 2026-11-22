import type { StrankaDokumentu } from '../typy';
import { uurLopetamine as sablona } from '../../sablony/ee/uurilepingu-lopetamise-kokkulepe';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Üürilepingu lõpetamise kokkulepe",
  nazevA: "üürilepingu lõpetamise kokkuleppe",
  katalog: {"popis": "Üürilepingu lõpetamine kokkuleppel.", "kategorie": "eluase", "ilustrace": "protokol", "slova": ["üürilepingu lõpetamise kokkulepe", "üürilepingu lõpetamine kokkuleppel", "üüri lõpp", "tagatisraha tagastamine"]},
  souvisejici: "eluase",
  landing: {
  "title": "Üürilepingu lõpetamise kokkulepe {rok} – näidis PDF tasuta",
  "description": "Tasuta üürilepingu lõpetamise kokkuleppe näidis: lõppemise kuupäev, eluruumi tagastamine, tagatisraha ja arveldused. PDF ja Word.",
  "perex": "Kui üürileandja ja üürnik lepivad lepingu lõpetamise kokku – ilma etteteatamistähtaega ootamata.",
  "obsahPopis": "Punktid lõpetamise kohta.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Üürileandja ja üürnik."
    },
    {
      "nazev": "Lõppemine",
      "popis": "Kuupäev."
    },
    {
      "nazev": "Tagastamine",
      "popis": "Eluruumi ja võtmete tagastamine."
    },
    {
      "nazev": "Tagatisraha",
      "popis": "Tagastamine või tasaarveldus."
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
    "Meeldetuletused",
    "PDF ja Word"
  ],
  "hodiSe": [
    "soovite üüri kokkuleppel lõpetada"
  ],
  "nehodiSe": [
    "teine pool ei nõustu – kasutage ülesütlemist"
  ],
  "po": [
    {
      "nazev": "Üleandmine",
      "popis": "Koostage üleandmise akt."
    },
    {
      "nazev": "Eksemplarid",
      "popis": "Kumbki pool hoiab ühte."
    }
  ],
  "faq": [
    {
      "q": "Kas kokkuleppel saab lõpetada ka tähtajalise üürilepingu?",
      "a": "Jah, pooled võivad igasuguse üürilepingu igal ajal kokkuleppel lõpetada."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis üürilepingu lõpetamise kokkulepe – PDF", "description": "Üürilepingu lõpetamine kokkuleppel. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { volikiri as sablona } from '../../sablony/ee/volikiri';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Volikiri",
  nazevA: "volikirja",
  katalog: {"popis": "Kui keegi teine teeb toiminguid teie eest.", "kategorie": "ostud", "ilustrace": "plnamoc", "slova": ["volikiri", "lihtkirjalik volikiri", "volitus", "volikiri auto", "volikiri postipaki jaoks"]},
  souvisejici: "ostud",
  landing: {
  "title": "Volikiri {rok} – näidis PDF tasuta",
  "description": "Tasuta volikirja näidis: volitaja, volitatu, toimingud, edasivolitamine ja kehtivus. Lihtkirjalik või digiallkirjaga. PDF ja Word.",
  "perex": "Kui keegi teine teeb teie eest toiminguid – paki kättesaamine, asjaajamine ametiasutuses või sõidukiga seotud toimingud.",
  "obsahPopis": "Lühike volikiri.",
  "obsah": [
    {
      "nazev": "Volitaja",
      "popis": "Kes volitab."
    },
    {
      "nazev": "Volitatu",
      "popis": "Kes tegutseb."
    },
    {
      "nazev": "Toimingud",
      "popis": "Mida volitatu võib teha."
    },
    {
      "nazev": "Kehtivus",
      "popis": "Kuni millal ja kas edasivolitamine on lubatud."
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
    "keegi teeb teie eest kindla toimingu",
    "soovite volitust kirjalikult anda"
  ],
  "nehodiSe": [
    "volitate kinnisasja võõrandamist – vajalik on notariaalne volikiri"
  ],
  "po": [
    {
      "nazev": "Andke üle",
      "popis": "Volitatu esitab volikirja koos oma isikut tõendava dokumendiga."
    }
  ],
  "faq": [
    {
      "q": "Kas volikiri peab olema notariaalne?",
      "a": "Enamikuks igapäevaseks toiminguks piisab lihtkirjalikust või digiallkirjastatud volikirjast. Kui tehing ise vajab notariaalset vormi, peab ka volikiri olema notariaalselt tõestatud."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb tsiviilseadustiku üldosa seaduse esindust käsitlevatele sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis volikiri – PDF", "description": "Volikiri toiminguteks teie eest. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

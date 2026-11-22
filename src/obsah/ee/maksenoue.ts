import type { StrankaDokumentu } from '../typy';
import { maksenoue as sablona } from '../../sablony/ee/maksenoue';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Maksenõue",
  nazevA: "maksenõude",
  katalog: {"popis": "Nõue võlgnikule maksetähtajaga.", "kategorie": "raha", "ilustrace": "dluh", "slova": ["maksenõue", "meeldetuletus võlgnikule", "võla sissenõudmine", "maksemeeldetuletus", "maksenoue"]},
  souvisejici: "raha",
  landing: {
  "title": "Maksenõue võlgnikule {rok} – näidis PDF tasuta",
  "description": "Tasuta maksenõude näidis: võla summa ja alus, uus maksetähtaeg ja viivise nõudmise võimalus. Enne kohtusse pöördumist. PDF ja Word.",
  "perex": "Kui võlgnik ei maksnud õigel ajal. Nõue annab viimase tähtaja enne maksekäsu kiirmenetlust.",
  "obsahPopis": "Lühike nõue.",
  "obsah": [
    {
      "nazev": "Võlausaldaja ja võlgnik",
      "popis": "Kes nõuab ja kellelt."
    },
    {
      "nazev": "Võlg",
      "popis": "Summa, alus ja möödunud tähtaeg."
    },
    {
      "nazev": "Uus tähtaeg",
      "popis": "Millal ja kuhu maksta."
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
    "keegi ei maksnud teile õigel ajal",
    "soovite anda viimase tähtaja"
  ],
  "nehodiSe": [
    "võlgnik on nõus osadena maksma – kasutage maksegraafiku kokkulepet"
  ],
  "po": [
    {
      "nazev": "Saatke",
      "popis": "Saatke nõue e-postiga või tähtkirjaga ja hoidke tõend alles."
    },
    {
      "nazev": "Kohus",
      "popis": "Vajadusel esitage maksekäsu kiirmenetluse avaldus."
    }
  ],
  "faq": [
    {
      "q": "Kas võin nõuda viivist?",
      "a": "Jah, rahalise kohustuse täitmisega viivitamise korral võib võlausaldaja nõuda viivist."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse viivise sätetele ja tsiviilseadustiku üldosa seaduse aegumise sätetele.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis maksenõue – PDF", "description": "Maksenõue võlgnikule. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

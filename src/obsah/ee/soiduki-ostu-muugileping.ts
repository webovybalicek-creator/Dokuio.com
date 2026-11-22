import type { StrankaDokumentu } from '../typy';
import { soidukiLeping as sablona } from '../../sablony/ee/soiduki-ostu-muugileping';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Sõiduki ostu-müügileping",
  nazevA: "sõiduki ostu-müügilepingu",
  katalog: {"popis": "Kasutatud auto müük eraisikute vahel.", "kategorie": "auto", "ilustrace": "auto", "slova": ["auto ostu-müügileping", "sõiduki müügileping", "auto müük", "kasutatud auto ost", "omanikuvahetus", "auto muugileping", "soiduki ostu muugileping"]},
  souvisejici: "auto",
  landing: {
  "title": "Auto ostu-müügileping {rok} – näidis PDF tasuta",
  "description": "Tasuta auto ostu-müügilepingu näidis eraisikute vahel: isikukoodid, VIN, läbisõit, puudused, makse ja üleandmise kellaaeg. PDF ja Word.",
  "perex": "Kasutatud auto müügiks eraisikute vahel. Omanikuvahetus tehakse Transpordiameti e-teeninduses; leping paneb kirja hinna, seisukorra, makse ja täpse üleandmise aja.",
  "obsahPopis": "Punktid sõiduki müügi ja üleandmise kohta.",
  "obsah": [
    {
      "nazev": "Pooled",
      "popis": "Müüja ja ostja isikukoodiga."
    },
    {
      "nazev": "Sõiduk",
      "popis": "Mark, registreerimismärk, VIN."
    },
    {
      "nazev": "Seisukord",
      "popis": "Läbisõit ja teadaolevad puudused."
    },
    {
      "nazev": "Hind ja makse",
      "popis": "Summa sõnadega, sularaha või pangaülekanne."
    },
    {
      "nazev": "Üleandmine",
      "popis": "Kuupäev, kellaaeg, võtmed, dokumendid."
    },
    {
      "nazev": "Omanikuvahetus",
      "popis": "Transpordiameti e-teenus 5 tööpäeva jooksul."
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
    "VIN-i kontroll",
    "Meeldetuletus omanikuvahetuse kohta",
    "Üleandmise akt võtab andmed üle"
  ],
  "hodiSe": [
    "müüte või ostate kasutatud auto eraisikult",
    "soovite kirjalikult hinda, seisukorda ja üleandmise aega"
  ],
  "nehodiSe": [
    "ostate kauplejalt – tal on oma leping",
    "autol on liising või järelmaks"
  ],
  "po": [
    {
      "nazev": "Omanikuvahetus",
      "popis": "Müüja alustab omanikuvahetust Transpordiameti e-teeninduses ja ostja kinnitab selle 5 tööpäeva jooksul."
    },
    {
      "nazev": "Kindlustus",
      "popis": "Ostja sõlmib enne sõitu liikluskindlustuse."
    },
    {
      "nazev": "Eksemplarid",
      "popis": "Kumbki pool hoiab ühte allkirjastatud eksemplari."
    }
  ],
  "faq": [
    {
      "q": "Kuidas omanikuvahetus käib?",
      "a": "Transpordiameti e-teeninduses: müüja alustab toimingut ja ostja kinnitab selle. Registreeringu muudatus tuleb teha 5 tööpäeva jooksul."
    },
    {
      "q": "Kas notarit on vaja?",
      "a": "Ei. Sõiduki müügiks eraisikute vahel notarit vaja ei ole; leping tõendab müügi tingimusi."
    },
    {
      "q": "Kes maksab selle aasta mootorsõidukimaksu?",
      "a": "Võõrandamisel jääb jooksva aasta mootorsõidukimaks endise omaniku kanda – ostja maksab maksu alates järgmisest aastast."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb võlaõigusseaduse ostu-müügilepingu sätetele ning Transpordiameti omanikuvahetuse korrale.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis auto ostu-müügileping – PDF", "description": "Juhend kasutatud auto ostu-müügilepingu koostamiseks. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

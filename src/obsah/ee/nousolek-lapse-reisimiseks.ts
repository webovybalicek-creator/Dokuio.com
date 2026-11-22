import type { StrankaDokumentu } from '../typy';
import { nousolekLapseReisimiseks as sablona } from '../../sablony/ee/nousolek-lapse-reisimiseks';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Nõusolek lapse reisimiseks",
  nazevA: "nõusoleku lapse reisimiseks",
  katalog: {"popis": "Laps reisib ilma ühe või mõlema vanemata.", "kategorie": "pere", "ilustrace": "plnamoc", "slova": ["nõusolek lapse reisimiseks", "lapse reisiluba", "vanema nõusolek", "laps reisib välismaale", "nousolek lapse reisimiseks"]},
  souvisejici: "pere",
  landing: {
  "title": "Nõusolek lapse reisimiseks {rok} – näidis PDF tasuta",
  "description": "Tasuta vanema nõusoleku näidis lapse välisreisiks: lapse ja saatja andmed, riigid ja ajavahemik. Ühise hooldusõiguse korral. PDF ja Word.",
  "perex": "Kui alaealine laps reisib välismaale ilma ühe või mõlema vanemata. Ühise hooldusõiguse korral on üldjuhul vaja teise vanema nõusolekut.",
  "obsahPopis": "Lühike nõusolek.",
  "obsah": [
    {
      "nazev": "Vanem ja laps",
      "popis": "Nimed ja isikukoodid."
    },
    {
      "nazev": "Saatja",
      "popis": "Teine vanem või muu täiskasvanu."
    },
    {
      "nazev": "Reis",
      "popis": "Riigid, ajavahemik ja eesmärk."
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
    "Saatja valik"
  ],
  "hodiSe": [
    "laps reisib ühe vanemaga või teise täiskasvanuga",
    "vanematel on ühine hooldusõigus"
  ],
  "nehodiSe": [
    "laps kolib püsivalt välismaale – vajalik on laiem kokkulepe või kohtu otsus"
  ],
  "po": [
    {
      "nazev": "Kaasa",
      "popis": "Saatja võtab nõusoleku ja lapse dokumendi kaasa."
    },
    {
      "nazev": "Sihtriik",
      "popis": "Kontrollige sihtriigi ja lennufirma nõudeid."
    }
  ],
  "faq": [
    {
      "q": "Kas nõusolek peab olema notariaalne?",
      "a": "Eesti õigus ei nõua alati notariaalset vormi, kuid mõni sihtriik või vedaja võib nõuda notariaalselt kinnitatud või tõlgitud nõusolekut."
    },
    {
      "q": "Kas salvestate minu andmeid?",
      "a": "Ei. Dokument luuakse otse teie brauseris, andmeid serverisse ei saadeta."
    }
  ],
  "zakony": "Põhi tugineb Euroopa e-õiguskeskkonna (e-justice) teabele lapse välismaale viimise kohta Eestis.",
  "souvisejiciPopis": "Muud dokumendid, samuti tasuta."
},
  vytvorit: {"title": "Täitke veebis nõusolek lapse reisimiseks – PDF", "description": "Vanema nõusolek lapse välisreisiks. PDF või Word, tasuta.", "podnadpis": "Tasuta · tulemus PDF-i ja Wordina · võtab mõne minuti"},
};

export default stranka;

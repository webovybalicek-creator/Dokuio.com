import type { StrankaDokumentu } from '../typy';
import { disdettaLocazione as sablona } from '../../sablony/ch-it/disdetta-contratto-di-locazione';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Disdetta del contratto di locazione",
  nazevA: "la disdetta del contratto di locazione",
  katalog: {"popis": "Disdetta data dal conduttore.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["disdetta contratto di locazione", "lettera di disdetta affitto", "disdire l’appartamento", "disdetta conduttore", "disdetta locazione svizzera", "nuovo conduttore"]},
  protejsky: {"ch": "kuendigung-mietvertrag"},
  souvisejici: "disdette",
  landing: {
  "title": "Disdetta locazione {rok} – modello di lettera PDF gratis",
  "description": "Modello gratuito di disdetta del contratto di locazione da parte del conduttore: preavviso di tre mesi per un termine, abitazione familiare, garanzia (art. 266c CO).",
  "perex": "Volete lasciare il vostro appartamento. La lettera rispetta il preavviso di tre mesi per un termine, chiede una data per la riconsegna e la restituzione della garanzia.",
  "obsahPopis": "Una lettera breve.",
  "obsah": [
    {
      "nazev": "Destinatario",
      "popis": "Locatore o amministrazione."
    },
    {
      "nazev": "Disdetta",
      "popis": "Abitazione, data del contratto, termine."
    },
    {
      "nazev": "Garanzia",
      "popis": "IBAN per la restituzione."
    }
  ],
  "kroky": [
    {
      "nazev": "Inserite i dati",
      "popis": "Ciò che non sapete lasciatelo vuoto – resterà una riga da completare a mano."
    },
    {
      "nazev": "Controllate il testo",
      "popis": "Ogni paragrafo si può modificare."
    },
    {
      "nazev": "Scaricate e firmate",
      "popis": "PDF o Word, gratis."
    }
  ],
  "online": [
    "Promemoria della fine della locazione",
    "PDF e Word"
  ],
  "hodiSe": [
    "disdite la vostra locazione come conduttore"
  ],
  "nehodiSe": [
    "volete partire fuori termine – proponete un nuovo conduttore o un accordo"
  ],
  "po": [
    {
      "nazev": "Invio",
      "popis": "Raccomandata, abbastanza presto prima dell’inizio del termine."
    },
    {
      "nazev": "Partenza",
      "popis": "Fissate la riconsegna e pulite l’abitazione."
    }
  ],
  "faq": [
    {
      "q": "Qual è il termine per un appartamento?",
      "a": "Almeno tre mesi per un termine previsto dal contratto o usuale nel luogo (art. 266c CO). Controllate il vostro contratto di locazione."
    },
    {
      "q": "Cosa fare per partire prima?",
      "a": "Presentate un nuovo conduttore solvibile e accettabile: siete allora liberati dai vostri obblighi (art. 264 CO). Oppure concordate una fine di comune accordo."
    },
    {
      "q": "Chi deve firmare per un’abitazione familiare?",
      "a": "Entrambi i coniugi o partner registrati (art. 266m CO)."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 264, 266c, 266l e 266m del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare la disdetta del contratto di locazione – PDF", "description": "Disdetta della locazione da parte del conduttore. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

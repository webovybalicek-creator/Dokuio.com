import type { StrankaDokumentu } from '../typy';
import { dichiarazione as sablona } from '../../sablony/ch-it/dichiarazione-sull-onore';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Dichiarazione sull’onore",
  nazevA: "la dichiarazione sull’onore",
  katalog: {"popis": "Dichiarazione scritta per la scuola, la banca o il locatore.", "kategorie": "alltag", "ilustrace": "plnamoc", "slova": ["dichiarazione sull’onore", "autocertificazione", "modello dichiarazione", "dichiarazione di domicilio", "dichiarazione scritta"]},
  protejsky: {"ch": "erklaerung"},
  souvisejici: "alltag",
  landing: {
  "title": "Dichiarazione sull’onore {rok} – modello PDF gratis",
  "description": "Modello gratuito di dichiarazione sull’onore: chi dichiara, per chi, a quale scopo e cosa esattamente. Per la scuola, la banca, il locatore o un’autorità. PDF e Word.",
  "perex": "Quando una scuola, una banca, un locatore o un’associazione vi chiede una dichiarazione scritta. Voi scrivete il contenuto, noi aggiungiamo la forma.",
  "obsahPopis": "Una dichiarazione breve.",
  "obsah": [
    {
      "nazev": "Persona",
      "popis": "Nome, data di nascita, indirizzo."
    },
    {
      "nazev": "Dichiarazione",
      "popis": "Destinatario, scopo e testo."
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
    "PDF e Word"
  ],
  "hodiSe": [
    "un ente vi chiede una dichiarazione scritta"
  ],
  "nehodiSe": [
    "un’autorità ha il suo modulo – usate quello"
  ],
  "po": [
    {
      "nazev": "Copia",
      "popis": "Conservate una copia per i vostri documenti."
    }
  ],
  "faq": [
    {
      "q": "Una dichiarazione sull’onore ha valore?",
      "a": "Prova ciò che dichiarate. Indicazioni false possono avere conseguenze civili e penali."
    },
    {
      "q": "Bisogna autenticare la firma?",
      "a": "Solo se l’ente lo richiede. In tal caso firmate davanti al notaio o, secondo il Cantone, al Comune."
    },
    {
      "q": "Come formulare il testo?",
      "a": "In modo concreto: chi, cosa, da quando – p. es. «di abitare dal 1.1.2025 nell’abitazione …»."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo il Codice delle obbligazioni svizzero (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare la dichiarazione sull’onore online – PDF", "description": "Dichiarazione sull’onore per una scuola, una banca o un locatore. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

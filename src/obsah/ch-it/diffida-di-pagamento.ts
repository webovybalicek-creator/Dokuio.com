import type { StrankaDokumentu } from '../typy';
import { diffida as sablona } from '../../sablony/ch-it/diffida-di-pagamento';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Diffida di pagamento",
  nazevA: "la diffida di pagamento",
  katalog: {"popis": "Sollecito di pagamento con un termine.", "kategorie": "geld", "ilustrace": "dluh", "slova": ["diffida di pagamento", "lettera di diffida", "sollecito di pagamento", "messa in mora", "ultimo sollecito prima dell’esecuzione", "interessi moratori"]},
  protejsky: {"ch": "mahnung"},
  souvisejici: "geld",
  landing: {
  "title": "Diffida di pagamento {rok} – modello PDF gratis",
  "description": "Modello gratuito di diffida di pagamento: credito, termine, interesse moratorio del 5 %, primo o ultimo sollecito prima dell’esecuzione. Secondo gli art. 102 e 104 CO.",
  "perex": "Quando una fattura o un prestito non viene pagato. La lettera fissa un termine, mette in mora il debitore e annuncia l’esecuzione in caso di ultimo sollecito.",
  "obsahPopis": "Una lettera breve.",
  "obsah": [
    {
      "nazev": "Credito",
      "popis": "Importo, scadenza, causa."
    },
    {
      "nazev": "Termine e conto",
      "popis": "Entro quando e dove pagare."
    },
    {
      "nazev": "Interesse moratorio",
      "popis": "5 % all’anno secondo l’art. 104 CO."
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
    "Importo in lettere automatico",
    "Promemoria della scadenza del termine",
    "PDF e Word"
  ],
  "hodiSe": [
    "una fattura o un prestito non è stato pagato",
    "volete annunciare l’esecuzione"
  ],
  "nehodiSe": [
    "il credito è contestato – cercate prima un accordo"
  ],
  "po": [
    {
      "nazev": "Invio",
      "popis": "Raccomandata, con copia e ricevuta."
    },
    {
      "nazev": "Poi",
      "popis": "Senza pagamento: domanda d’esecuzione all’Ufficio esecuzioni del domicilio del debitore."
    }
  ],
  "faq": [
    {
      "q": "Serve una diffida?",
      "a": "Se è stato pattuito un giorno di scadenza preciso, la mora sopraggiunge senza diffida. Altrimenti è la diffida a mettere in mora il debitore (art. 102 CO)."
    },
    {
      "q": "Quale interesse moratorio posso chiedere?",
      "a": "5 % all’anno sui debiti pecuniari dalla mora, anche se era stato pattuito un interesse contrattuale più basso (art. 104 CO)."
    },
    {
      "q": "Dove avviare un’esecuzione?",
      "a": "All’Ufficio esecuzioni del domicilio del debitore, con una domanda d’esecuzione."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 102 e 104 del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare la diffida di pagamento online – PDF", "description": "Diffida di pagamento con termine e interesse moratorio. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

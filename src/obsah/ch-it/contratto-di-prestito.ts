import type { StrankaDokumentu } from '../typy';
import { prestito as sablona } from '../../sablony/ch-it/contratto-di-prestito';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contratto di prestito",
  nazevA: "il contratto di prestito",
  katalog: {"popis": "Prestare denaro, anche a rate.", "kategorie": "geld", "ilustrace": "pujcka", "slova": ["contratto di prestito", "contratto di prestito tra privati", "prestito di denaro", "prestito a un amico", "contratto di mutuo", "contratto di prestito svizzera"]},
  protejsky: {"ch": "darlehensvertrag"},
  souvisejici: "geld",
  landing: {
  "title": "Contratto di prestito {rok} – modello PDF gratis (Svizzera)",
  "description": "Modello gratuito di contratto di prestito tra privati secondo il CO: importo in lettere, restituzione in una volta o a rate, interessi facoltativi. PDF e Word.",
  "perex": "Per prestare denaro a un amico o a un parente. Restituzione in una volta o a rate con piano allegato, con o senza interessi.",
  "obsahPopis": "Gli articoli del prestito (art. 312 segg. CO).",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Mutuante e mutuatario."
    },
    {
      "nazev": "Prestito e versamento",
      "popis": "Importo e modo di consegna."
    },
    {
      "nazev": "Interessi",
      "popis": "Senza interessi o tasso pattuito."
    },
    {
      "nazev": "Restituzione",
      "popis": "In una volta o a rate, decadenza."
    },
    {
      "nazev": "Piano",
      "popis": "Allegato con le scadenze."
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
    "Piano di restituzione allegato",
    "Promemoria delle rate nel calendario"
  ],
  "hodiSe": [
    "prestate denaro a un amico o a un parente",
    "volete una data di restituzione scritta"
  ],
  "nehodiSe": [
    "prestate a titolo professionale – si applica la legge sul credito al consumo"
  ],
  "po": [
    {
      "nazev": "Versamento",
      "popis": "Versate il denaro con un bonifico con la causale «prestito secondo contratto»."
    },
    {
      "nazev": "Scadenze",
      "popis": "Annotate le date di restituzione nel vostro calendario."
    }
  ],
  "faq": [
    {
      "q": "Cosa succede senza data di restituzione?",
      "a": "Il prestito va restituito entro sei settimane dalla prima richiesta (art. 318 CO)."
    },
    {
      "q": "Sono dovuti interessi?",
      "a": "Tra privati solo se pattuiti. Fissate un tasso ragionevole; alcuni Cantoni hanno tassi massimi."
    },
    {
      "q": "Il contratto aiuta in caso di esecuzione?",
      "a": "Sì. Firmato dal mutuatario vale come riconoscimento di debito e permette di chiedere il rigetto provvisorio dell’opposizione (art. 82 LEF)."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 312 segg. del Codice delle obbligazioni (CO) e l’art. 82 LEF.",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il contratto di prestito online – PDF", "description": "Contratto di prestito tra privati con piano di restituzione. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

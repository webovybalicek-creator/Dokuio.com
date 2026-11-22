import type { StrankaDokumentu } from '../typy';
import { sublocazione as sablona } from '../../sablony/ch-it/contratto-di-sublocazione';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contratto di sublocazione",
  nazevA: "il contratto di sublocazione",
  katalog: {"popis": "Sublocare una camera o l’appartamento.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["contratto di sublocazione", "sublocazione camera", "sublocare appartamento", "sublocazione consenso locatore", "coinquilino sublocazione"]},
  protejsky: {"ch": "untermietvertrag"},
  souvisejici: "wohnen",
  landing: {
  "title": "Contratto di sublocazione {rok} – modello PDF gratis",
  "description": "Modello gratuito di contratto di sublocazione di una camera o di un appartamento: consenso del locatore, durata, pigione e garanzia. Secondo l’art. 262 CO, PDF e Word.",
  "perex": "Locate una camera o il vostro appartamento a un subconduttore. Il contratto menziona il consenso del locatore e termina al più tardi con la locazione principale.",
  "obsahPopis": "Gli articoli della sublocazione.",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Conduttore principale e subconduttore."
    },
    {
      "nazev": "Oggetto",
      "popis": "Camera o abitazione, consenso del locatore."
    },
    {
      "nazev": "Durata",
      "popis": "Determinata o indeterminata, preavviso."
    },
    {
      "nazev": "Pigione e garanzia",
      "popis": "Importo, scadenza, conto."
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
    "Promemoria dell’inizio e della fine",
    "PDF e Word"
  ],
  "hodiSe": [
    "sublocate una camera in un appartamento condiviso",
    "sublocate il vostro appartamento durante un’assenza"
  ],
  "nehodiSe": [
    "il locatore non ha dato il suo consenso"
  ],
  "po": [
    {
      "nazev": "Consenso",
      "popis": "Allegate una copia del consenso del locatore."
    },
    {
      "nazev": "Verbale",
      "popis": "Redigete un verbale di consegna all’entrata."
    }
  ],
  "faq": [
    {
      "q": "Serve il consenso del locatore?",
      "a": "Sì. Può rifiutarlo solo se vi rifiutate di comunicare le condizioni, se sono abusive o se la sublocazione gli causa inconvenienti rilevanti (art. 262 CO)."
    },
    {
      "q": "Posso chiedere una pigione più alta?",
      "a": "Una pigione nettamente superiore a quella principale può essere abusiva e giustificare il rifiuto del locatore. Restate vicini alla pigione effettiva."
    },
    {
      "q": "Cosa succede se termina la locazione principale?",
      "a": "La sublocazione termina al più tardi nello stesso momento."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo l’art. 262 del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il contratto di sublocazione online – PDF", "description": "Sublocazione di una camera o di un appartamento. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

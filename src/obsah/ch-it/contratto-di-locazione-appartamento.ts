import type { StrankaDokumentu } from '../typy';
import { locazione as sablona } from '../../sablony/ch-it/contratto-di-locazione-appartamento';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contratto di locazione",
  nazevA: "il contratto di locazione",
  katalog: {"popis": "Locazione di un appartamento.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["contratto di locazione", "contratto di locazione appartamento", "contratto d’affitto", "affittare appartamento ticino", "deposito di garanzia", "spese accessorie"]},
  protejsky: {"ch": "mietvertrag-wohnung"},
  souvisejici: "wohnen",
  landing: {
  "title": "Contratto di locazione {rok} – modello PDF gratis (Svizzera)",
  "description": "Modello gratuito di contratto di locazione per un appartamento: pigione netta, spese accessorie, deposito di garanzia, termini di disdetta, animali. PDF e Word.",
  "perex": "Per affittare un appartamento tra privati nella Svizzera italiana. Il contratto elenca le spese accessorie, fissa la garanzia su un conto bloccato e i termini di disdetta.",
  "obsahPopis": "Gli articoli della locazione (art. 253 segg. CO).",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Locatore e conduttore."
    },
    {
      "nazev": "Ente locato",
      "popis": "Indirizzo, locali, superficie, accessori."
    },
    {
      "nazev": "Pigione e spese accessorie",
      "popis": "Pigione netta, acconto, scadenza."
    },
    {
      "nazev": "Garanzia",
      "popis": "Al massimo tre pigioni, conto bloccato."
    },
    {
      "nazev": "Uso",
      "popis": "Piccoli difetti, sublocazione, animali."
    },
    {
      "nazev": "Disdetta",
      "popis": "Tre mesi per i termini pattuiti."
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
    "Promemoria della pigione mensile",
    "Il verbale di consegna riprende i dati"
  ],
  "hodiSe": [
    "affittate il vostro appartamento a un privato",
    "volete un contratto semplice e chiaro"
  ],
  "nehodiSe": [
    "il vostro Cantone impone un modulo di contratto o il modulo ufficiale per la pigione iniziale – aggiungetelo",
    "si tratta di locali commerciali"
  ],
  "po": [
    {
      "nazev": "Garanzia",
      "popis": "Versate la garanzia su un conto di garanzia a nome del conduttore."
    },
    {
      "nazev": "Verbale",
      "popis": "Redigete un verbale alla consegna delle chiavi."
    },
    {
      "nazev": "Notifica",
      "popis": "Il conduttore si annuncia al Comune entro 14 giorni."
    }
  ],
  "faq": [
    {
      "q": "Quanto può costare il deposito di garanzia?",
      "a": "Al massimo tre pigioni mensili. Deve essere depositato su un conto bloccato a nome del conduttore (art. 257e CO)."
    },
    {
      "q": "Quali spese accessorie paga il conduttore?",
      "a": "Solo quelle elencate una per una nel contratto. Le altre sono comprese nella pigione (art. 257a CO)."
    },
    {
      "q": "Serve il modulo ufficiale per la pigione iniziale?",
      "a": "In alcuni Cantoni sì (art. 270 cpv. 2 CO). Informatevi presso l’autorità cantonale di conciliazione prima della firma."
    },
    {
      "q": "Qual è il termine di disdetta?",
      "a": "Almeno tre mesi per un termine usuale o pattuito. Il locatore deve disdire con il modulo ufficiale."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 253 segg. del Codice delle obbligazioni (CO) e le informazioni di ch.ch.",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il contratto di locazione online – PDF", "description": "Contratto di locazione per un appartamento con garanzia e spese accessorie. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

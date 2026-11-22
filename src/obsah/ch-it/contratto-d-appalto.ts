import type { StrankaDokumentu } from '../typy';
import { appalto as sablona } from '../../sablony/ch-it/contratto-d-appalto';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contratto d’appalto",
  nazevA: "il contratto d’appalto",
  katalog: {"popis": "Artigiano, ristrutturazione o riparazione.", "kategorie": "dienst", "ilustrace": "protokol", "slova": ["contratto d’appalto", "contratto artigiano", "contratto lavori", "preventivo artigiano", "prezzo forfettario lavori", "collaudo dell’opera"]},
  protejsky: {"ch": "werkvertrag"},
  souvisejici: "dienst",
  landing: {
  "title": "Contratto d’appalto {rok} – modello PDF gratis (Svizzera)",
  "description": "Modello gratuito di contratto d’appalto con un artigiano: opera, termini, prezzo fisso o preventivo approssimativo, acconto, collaudo e difetti. PDF e Word.",
  "perex": "Per affidare lavori a un artigiano – tinteggiatura, piastrelle, riparazione. Il contratto fissa l’opera, i termini, il prezzo e il collaudo con riserva dei difetti.",
  "obsahPopis": "Gli articoli del contratto d’appalto (art. 363 segg. CO).",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Committente e appaltatore."
    },
    {
      "nazev": "Opera",
      "popis": "Descrizione, luogo, materiali."
    },
    {
      "nazev": "Termini",
      "popis": "Inizio e ultimazione."
    },
    {
      "nazev": "Prezzo",
      "popis": "Prezzo fisso o preventivo approssimativo, acconto."
    },
    {
      "nazev": "Collaudo e difetti",
      "popis": "Verifica, avviso, prescrizione."
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
    "Promemoria dell’inizio e del collaudo",
    "PDF e Word"
  ],
  "hodiSe": [
    "affidate lavori a un artigiano o a una piccola impresa"
  ],
  "nehodiSe": [
    "costruite una casa o fate grandi trasformazioni"
  ],
  "po": [
    {
      "nazev": "Acconto",
      "popis": "Con bonifico o contro quietanza."
    },
    {
      "nazev": "Collaudo",
      "popis": "Verificate l’opera e riservate i difetti per iscritto."
    }
  ],
  "faq": [
    {
      "q": "Che differenza c’è tra prezzo fisso e preventivo approssimativo?",
      "a": "Con un prezzo fisso l’appaltatore non può chiedere di più (art. 373 CO). Con un preventivo approssimativo, un superamento eccessivo vi permette di recedere dal contratto (art. 375 CO)."
    },
    {
      "q": "Entro quando segnalare un difetto?",
      "a": "Subito dopo la verifica; per un’opera immobiliare entro 60 giorni (art. 367 CO)."
    },
    {
      "q": "Quanto durano i diritti per i difetti?",
      "a": "2 anni dal collaudo, 5 anni per un’opera immobiliare (art. 371 CO)."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 363 segg. del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il contratto d’appalto online – PDF", "description": "Contratto con un artigiano: opera, prezzo e collaudo. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

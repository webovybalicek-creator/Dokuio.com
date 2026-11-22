import type { StrankaDokumentu } from '../typy';
import { verbaleAbitazione as sablona } from '../../sablony/ch-it/verbale-di-consegna-appartamento';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Verbale di consegna dell’appartamento",
  nazevA: "il verbale di consegna dell’appartamento",
  katalog: {"popis": "Contatori, difetti e chiavi.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["verbale di consegna appartamento", "verbale di riconsegna", "protocollo di consegna abitazione", "stato dell’appartamento", "riconsegna appartamento"]},
  protejsky: {"ch": "uebergabeprotokoll-wohnung"},
  souvisejici: "wohnen",
  landing: {
  "title": "Verbale di consegna appartamento {rok} – modello PDF gratis",
  "description": "Modello gratuito di verbale di consegna o di riconsegna di un appartamento: letture dei contatori, difetti locale per locale, arredamento, chiavi e accordi. PDF e Word.",
  "perex": "Alla consegna o alla riconsegna di un appartamento. Il verbale registra contatori, difetti e chiavi – ed evita controversie sul deposito di garanzia.",
  "obsahPopis": "Un verbale breve.",
  "obsah": [
    {
      "nazev": "Abitazione",
      "popis": "Parti, indirizzo, entrata o uscita."
    },
    {
      "nazev": "Contatori",
      "popis": "Elettricità, gas, acqua, riscaldamento."
    },
    {
      "nazev": "Stato",
      "popis": "Difetti, arredamento, chiavi, accordi."
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
    "Riprende i dati del contratto di locazione",
    "PDF e Word"
  ],
  "hodiSe": [
    "consegnate o riprendete un appartamento"
  ],
  "nehodiSe": [
    "vi serve anche il contratto – prendete il contratto di locazione"
  ],
  "po": [
    {
      "nazev": "Foto",
      "popis": "Fotografate i contatori e i difetti."
    },
    {
      "nazev": "Esemplari",
      "popis": "Ogni parte tiene un esemplare firmato."
    }
  ],
  "faq": [
    {
      "q": "Il locatore deve segnalare subito i difetti?",
      "a": "Sì. Alla riconsegna deve verificare lo stato e avvisare immediatamente il conduttore dei difetti; altrimenti perde i suoi diritti, salvo per i difetti occulti (art. 267a CO)."
    },
    {
      "q": "Il conduttore risponde dell’usura?",
      "a": "No, non dell’usura risultante da un uso normale. Risponde dei danni che vanno oltre questa usura."
    },
    {
      "q": "Cosa fare se un difetto appare dopo l’entrata?",
      "a": "Segnalatelo per iscritto al locatore appena lo scoprite, idealmente nei primi giorni."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 253 segg. e 267a del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il verbale di consegna dell’appartamento – PDF", "description": "Verbale di consegna o di riconsegna di un appartamento. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

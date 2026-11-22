import type { StrankaDokumentu } from '../typy';
import { procuraCircolazione as sablona } from '../../sablony/ch-it/procura-ufficio-della-circolazione';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Procura per l’Ufficio della circolazione",
  nazevA: "la procura per l’Ufficio della circolazione",
  katalog: {"popis": "Se qualcun altro va all’Ufficio della circolazione.", "kategorie": "auto", "ilustrace": "plnamoc", "slova": ["procura ufficio della circolazione", "procura immatricolazione", "procura cambiamento di detentore", "procura deposito targhe", "procura sezione della circolazione"]},
  protejsky: {"ch": "vollmacht-strassenverkehrsamt"},
  souvisejici: "auto",
  landing: {
  "title": "Procura Ufficio della circolazione – modello PDF gratis",
  "description": "Modello gratuito di procura per l’Ufficio della circolazione: cambiamento di detentore, immatricolazione, messa fuori circolazione e deposito delle targhe. PDF e Word.",
  "perex": "Quando un’altra persona va per voi all’Ufficio cantonale della circolazione: immatricolare un’auto acquistata, cambiare detentore o depositare le targhe.",
  "obsahPopis": "Una procura breve.",
  "obsah": [
    {
      "nazev": "Procura",
      "popis": "Mandante, mandatario, pratica e veicolo."
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
    "Riprende i dati del contratto di compravendita",
    "Controllo del numero di telaio",
    "PDF e Word"
  ],
  "hodiSe": [
    "non potete andare di persona allo sportello",
    "qualcuno deposita le targhe per voi"
  ],
  "nehodiSe": [
    "il vostro Cantone richiede un proprio modulo – usate quello"
  ],
  "po": [
    {
      "nazev": "Documenti",
      "popis": "Il mandatario porta la procura, il suo documento d’identità, una copia del vostro e la licenza di circolazione."
    }
  ],
  "faq": [
    {
      "q": "Ogni Cantone ha il suo modulo?",
      "a": "Molti Uffici della circolazione offrono una propria procura. Guardate prima sul sito del vostro Cantone; altrimenti questo modello serve da procura semplice."
    },
    {
      "q": "Cosa serve per immatricolare?",
      "a": "Un attestato d’assicurazione valido, che l’assicurazione trasmette di solito per via elettronica, e la licenza di circolazione del detentore precedente."
    },
    {
      "q": "Per quanto tempo vale la procura?",
      "a": "Fino alla data indicata, altrimenti fino all’espletamento della pratica o fino alla revoca."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 32 segg. del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare la procura per l’Ufficio della circolazione – PDF", "description": "Procura per l’immatricolazione o il deposito delle targhe. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { avvisoDifetti as sablona } from '../../sablony/ch-it/avviso-dei-difetti';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Avviso dei difetti",
  nazevA: "l’avviso dei difetti",
  katalog: {"popis": "Segnalare subito una merce difettosa.", "kategorie": "alltag", "ilustrace": "protokol", "slova": ["avviso dei difetti", "lettera di reclamo difetto", "garanzia prodotto svizzera", "reclamo merce difettosa", "azione redibitoria", "riduzione del prezzo"]},
  protejsky: {"ch": "maengelruege"},
  souvisejici: "alltag",
  landing: {
  "title": "Avviso dei difetti {rok} – modello di lettera PDF gratis",
  "description": "Modello gratuito di avviso dei difetti: merce, difetto, data della scoperta e richiesta – riparazione, sostituzione, riduzione o annullamento. PDF e Word.",
  "perex": "Una merce acquistata è difettosa. Segnalatelo subito per iscritto – altrimenti si considera accettata. La lettera fissa al venditore un termine di risposta.",
  "obsahPopis": "Una lettera breve.",
  "obsah": [
    {
      "nazev": "Merce",
      "popis": "Acquisto, numero del documento, data."
    },
    {
      "nazev": "Difetto",
      "popis": "Descrizione e data della scoperta."
    },
    {
      "nazev": "Richiesta",
      "popis": "Riparazione, sostituzione, riduzione o annullamento."
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
    "Termine di risposta calcolato automaticamente",
    "Promemoria nel calendario",
    "PDF e Word"
  ],
  "hodiSe": [
    "un prodotto acquistato presenta un difetto",
    "volete far valere la garanzia per iscritto"
  ],
  "nehodiSe": [
    "volete solo restituire un articolo online – non c’è un diritto legale di restituzione"
  ],
  "po": [
    {
      "nazev": "Prove",
      "popis": "Foto del difetto, scontrino o estratto conto."
    },
    {
      "nazev": "Senza accordo",
      "popis": "Associazioni dei consumatori o autorità di conciliazione."
    }
  ],
  "faq": [
    {
      "q": "Quanto dura la garanzia?",
      "a": "Due anni dalla consegna; per una cosa d’occasione il commerciante può ridurla a un anno (art. 210 CO)."
    },
    {
      "q": "Ho diritto a una riparazione?",
      "a": "Secondo la legge potete annullare la vendita o ridurre il prezzo; la riparazione è dovuta solo se prevista dalla garanzia o dalle condizioni generali."
    },
    {
      "q": "Cosa succede se segnalo il difetto troppo tardi?",
      "a": "La merce si considera accettata e perdete i vostri diritti per quel difetto (art. 201 CO)."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 197 segg. del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare l’avviso dei difetti online – PDF", "description": "Avviso dei difetti con termine di risposta. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

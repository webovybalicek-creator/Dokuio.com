import type { StrankaDokumentu } from '../typy';
import { procura as sablona } from '../../sablony/ch-it/procura';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Procura",
  nazevA: "la procura",
  katalog: {"popis": "Perché una persona sbrighi una faccenda al vostro posto.", "kategorie": "alltag", "ilustrace": "plnamoc", "slova": ["procura", "modello procura", "procura semplice", "procura ritiro raccomandata", "procura posta", "procura svizzera"]},
  protejsky: {"ch": "vollmacht"},
  souvisejici: "familie",
  landing: {
  "title": "Procura {rok} – modello PDF gratis da compilare (Svizzera)",
  "description": "Modello gratuito di procura semplice secondo gli art. 32 segg. CO: mandante, mandatario, estensione concreta e durata. Per la posta, la scuola o una pratica. PDF e Word.",
  "perex": "Perché una persona di fiducia sbrighi una faccenda precisa al vostro posto – ritirare una raccomandata, firmare un documento, rappresentarvi in una pratica.",
  "obsahPopis": "Una procura breve.",
  "obsah": [
    {
      "nazev": "Procura",
      "popis": "Mandante, mandatario, estensione e durata."
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
    "Promemoria della scadenza",
    "PDF e Word"
  ],
  "hodiSe": [
    "qualcuno deve sbrigare una faccenda concreta al vostro posto"
  ],
  "nehodiSe": [
    "si tratta di un fondo o di una banca – forme particolari",
    "volete regolare la vostra incapacità – mandato precauzionale"
  ],
  "po": [
    {
      "nazev": "Originale",
      "popis": "Il mandatario presenta l’originale con il suo documento d’identità."
    }
  ],
  "faq": [
    {
      "q": "Bisogna autenticare la firma?",
      "a": "Per una procura semplice no. Per un fondo, una società o certe autorità può essere richiesta un’autenticazione o un modulo particolare."
    },
    {
      "q": "Una procura generale viene accettata?",
      "a": "Spesso no. Descrivete la faccenda in modo concreto – una procura precisa è accettata più facilmente."
    },
    {
      "q": "Cosa fare per il caso della mia incapacità?",
      "a": "Serve un mandato precauzionale (art. 360 segg. CC), soggetto a una forma più severa. Questo modello non lo sostituisce."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 32 segg. del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare la procura online – PDF", "description": "Procura semplice per una faccenda precisa. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

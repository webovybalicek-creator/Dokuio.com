import type { StrankaDokumentu } from '../typy';
import { viaggioMinorenne as sablona } from '../../sablony/ch-it/autorizzazione-viaggio-minorenne';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Autorizzazione di viaggio per minorenni",
  nazevA: "l’autorizzazione di viaggio per minorenni",
  katalog: {"popis": "Il figlio viaggia all’estero senza i genitori o con un solo genitore.", "kategorie": "familie", "ilustrace": "plnamoc", "slova": ["autorizzazione di viaggio minorenne", "dichiarazione di consenso viaggio figlio", "consenso dei genitori viaggio", "minorenne viaggia da solo", "autorizzazione espatrio minore"]},
  protejsky: {"ch": "einverstaendniserklaerung-reise-kind"},
  souvisejici: "familie",
  landing: {
  "title": "Autorizzazione viaggio minorenne {rok} – modello PDF gratis",
  "description": "Modello gratuito di autorizzazione di viaggio per un figlio minorenne: genitori, figlio, accompagnatore, destinazione, date, telefono. Secondo il DFAE. PDF e Word.",
  "perex": "Vostro figlio viaggia all’estero con un solo genitore, con i nonni o da solo. Il DFAE raccomanda vivamente una dichiarazione di consenso firmata dai genitori.",
  "obsahPopis": "Una dichiarazione breve.",
  "obsah": [
    {
      "nazev": "Genitori",
      "popis": "Nomi, documenti d’identità, telefoni."
    },
    {
      "nazev": "Figlio",
      "popis": "Nome, data di nascita, documento d’identità."
    },
    {
      "nazev": "Viaggio",
      "popis": "Accompagnatore, destinazione, date, motivo."
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
    "il figlio viaggia con un solo genitore o senza i genitori",
    "il figlio va in campo o in soggiorno linguistico"
  ],
  "nehodiSe": [
    "il Paese di destinazione impone un proprio modulo",
    "si tratta di un trasferimento all’estero"
  ],
  "po": [
    {
      "nazev": "Autenticazione",
      "popis": "Se il Paese lo esige, fate autenticare la firma al Comune o da un notaio."
    },
    {
      "nazev": "Documenti",
      "popis": "Il figlio porta con sé l’originale e il suo passaporto o la sua carta d’identità."
    }
  ],
  "faq": [
    {
      "q": "L’autorizzazione è obbligatoria?",
      "a": "Non in Svizzera, ma alcuni Paesi la esigono all’entrata o all’uscita. Il DFAE la raccomanda vivamente quando il figlio viaggia con un solo genitore o senza un tutore legale."
    },
    {
      "q": "Bisogna autenticare la firma?",
      "a": "Solo se il Paese di destinazione lo esige o per maggiore sicurezza. Il Comune di domicilio o un notaio può autenticare la firma."
    },
    {
      "q": "Chi deve firmare?",
      "a": "Il genitore o i genitori titolari dell’autorità parentale che non accompagnano il figlio."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo la raccomandazione del DFAE e le informazioni dell’Ufficio federale di giustizia.",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare l’autorizzazione di viaggio per minorenni – PDF", "description": "Autorizzazione dei genitori per il viaggio all’estero di un figlio. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

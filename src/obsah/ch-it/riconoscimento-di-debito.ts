import type { StrankaDokumentu } from '../typy';
import { riconoscimentoDebito as sablona } from '../../sablony/ch-it/riconoscimento-di-debito';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Riconoscimento di debito",
  nazevA: "il riconoscimento di debito",
  katalog: {"popis": "Confermare un debito per iscritto – utile in caso di esecuzione.", "kategorie": "geld", "ilustrace": "dluh", "slova": ["riconoscimento di debito", "modello riconoscimento di debito", "riconoscimento di debito rigetto opposizione", "riconoscimento di debito svizzera", "debito tra privati"]},
  protejsky: {"ch": "schuldanerkennung"},
  souvisejici: "geld",
  landing: {
  "title": "Riconoscimento di debito {rok} – modello PDF gratis",
  "description": "Modello gratuito di riconoscimento di debito secondo l’art. 17 CO: importo in lettere, causa, pagamento in una volta o a rate. Per l’esecuzione. PDF e Word.",
  "perex": "Il debitore conferma per iscritto di dovere una somma precisa. Firmato, il riconoscimento permette il rigetto provvisorio dell’opposizione in un’esecuzione e fa ricominciare la prescrizione.",
  "obsahPopis": "Gli articoli del riconoscimento.",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Debitore e creditore."
    },
    {
      "nazev": "Riconoscimento",
      "popis": "Importo e causa del debito."
    },
    {
      "nazev": "Pagamento",
      "popis": "In una volta o a rate con piano."
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
    "Piano di pagamento allegato",
    "Promemoria delle scadenze"
  ],
  "hodiSe": [
    "qualcuno vi deve denaro e lo ammette",
    "volete una prova solida per un’eventuale esecuzione"
  ],
  "nehodiSe": [
    "il debitore contesta il debito"
  ],
  "po": [
    {
      "nazev": "Originale",
      "popis": "Il creditore tiene l’originale firmato."
    },
    {
      "nazev": "Pagamenti",
      "popis": "Fatevi rilasciare una quietanza per i pagamenti in contanti."
    }
  ],
  "faq": [
    {
      "q": "Cos’è il rigetto provvisorio dell’opposizione?",
      "a": "Se il debitore fa opposizione al precetto esecutivo, il creditore può chiedere al giudice di rigettarla sulla base del riconoscimento di debito firmato (art. 82 LEF)."
    },
    {
      "q": "Il riconoscimento interrompe la prescrizione?",
      "a": "Sì. La prescrizione è interrotta e comincia a decorrere un nuovo termine (art. 135 CO)."
    },
    {
      "q": "Che differenza c’è con l’accordo di pagamento rateale?",
      "a": "Il riconoscimento è firmato soprattutto dal debitore. L’accordo è firmato da entrambe le parti e regola anche la rinuncia all’esecuzione e la decadenza."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 17 e 135 CO e l’art. 82 LEF.",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il riconoscimento di debito online – PDF", "description": "Riconoscimento di debito con piano di pagamento. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

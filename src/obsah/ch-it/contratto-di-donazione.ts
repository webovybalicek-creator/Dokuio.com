import type { StrankaDokumentu } from '../typy';
import { donazione as sablona } from '../../sablony/ch-it/contratto-di-donazione';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contratto di donazione",
  nazevA: "il contratto di donazione",
  katalog: {"popis": "Donare denaro o una cosa.", "kategorie": "geld", "ilustrace": "dar", "slova": ["contratto di donazione", "donazione di denaro", "donazione tra vivi", "donazione a un figlio", "imposta sulle donazioni", "modello donazione svizzera"]},
  protejsky: {"ch": "schenkungsvertrag"},
  souvisejici: "geld",
  landing: {
  "title": "Contratto di donazione {rok} – modello PDF gratis (Svizzera)",
  "description": "Modello gratuito di contratto di donazione di denaro o di una cosa mobile secondo gli art. 239 segg. CO: consegna immediata, parentela, imposta cantonale. PDF e Word.",
  "perex": "Per donare denaro o una cosa – a un figlio, un nipote o un amico. Il modello regola la donazione consegnata subito; l’imposta sulle donazioni dipende dal Cantone.",
  "obsahPopis": "Gli articoli della donazione.",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Donante, donatario e grado di parentela."
    },
    {
      "nazev": "Oggetto",
      "popis": "Denaro o cosa mobile."
    },
    {
      "nazev": "Esecuzione",
      "popis": "Consegna in contanti, bonifico o consegna della cosa."
    },
    {
      "nazev": "Disposizioni finali",
      "popis": "Revoca legale e imposta cantonale."
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
    "PDF e Word"
  ],
  "hodiSe": [
    "donate denaro o una cosa mobile",
    "volete una prova per l’amministrazione fiscale"
  ],
  "nehodiSe": [
    "si tratta di un fondo – serve un atto pubblico",
    "promettete una donazione per il futuro"
  ],
  "po": [
    {
      "nazev": "Bonifico",
      "popis": "Versate il denaro il giorno stesso con la causale «donazione»."
    },
    {
      "nazev": "Imposta",
      "popis": "Per un importo elevato informatevi presso l’ufficio cantonale delle contribuzioni del donante."
    }
  ],
  "faq": [
    {
      "q": "Una donazione deve essere scritta?",
      "a": "La donazione manuale è valida senza forma. Solo la promessa di donare in futuro deve essere scritta (art. 243 CO). Lo scritto serve da prova."
    },
    {
      "q": "Chi paga l’imposta sulle donazioni?",
      "a": "Chi riceve la donazione. Di regola i coniugi, i partner registrati e i discendenti ne sono esentati; decidono i Cantoni."
    },
    {
      "q": "Il donante può revocare la donazione?",
      "a": "Solo nei casi previsti dalla legge, per esempio in caso di grave reato del donatario nei suoi confronti (art. 249 CO)."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 239 segg. del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il contratto di donazione online – PDF", "description": "Donazione di denaro o di una cosa mobile. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

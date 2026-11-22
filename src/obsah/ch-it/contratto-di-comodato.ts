import type { StrankaDokumentu } from '../typy';
import { comodato as sablona } from '../../sablony/ch-it/contratto-di-comodato';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contratto di comodato",
  nazevA: "il contratto di comodato",
  katalog: {"popis": "Prestare una cosa gratuitamente.", "kategorie": "alltag", "ilustrace": "protokol", "slova": ["contratto di comodato", "comodato d’uso", "prestito di una cosa", "prestare il rimorchio", "prestito gratuito oggetto"]},
  protejsky: {"ch": "leihvertrag"},
  souvisejici: "alltag",
  landing: {
  "title": "Contratto di comodato {rok} – modello PDF gratis",
  "description": "Modello gratuito di contratto di comodato: cosa prestata, stato alla consegna, durata o uso, restituzione e spese di manutenzione (art. 305 segg. CO). PDF e Word.",
  "perex": "Prestate gratuitamente una cosa – rimorchio, attrezzo, materiale da campeggio. Il contratto fissa lo stato, l’uso previsto e la data di restituzione.",
  "obsahPopis": "Gli articoli del comodato.",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Comodante e comodatario."
    },
    {
      "nazev": "Cosa",
      "popis": "Descrizione, stato, valore."
    },
    {
      "nazev": "Durata e restituzione",
      "popis": "Data o uso, luogo di restituzione."
    },
    {
      "nazev": "Uso",
      "popis": "Divieto di cessione, spese di manutenzione."
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
    "Promemoria della restituzione",
    "PDF e Word"
  ],
  "hodiSe": [
    "prestate gratuitamente una cosa di valore"
  ],
  "nehodiSe": [
    "chiedete un compenso – è una locazione",
    "prestate denaro – prendete il contratto di prestito"
  ],
  "po": [
    {
      "nazev": "Consegna",
      "popis": "Esaminate la cosa insieme e annotate i difetti."
    },
    {
      "nazev": "Restituzione",
      "popis": "Fatevi confermare lo stato al ritorno."
    }
  ],
  "faq": [
    {
      "q": "Quando posso riprendere la cosa?",
      "a": "Alla data pattuita o una volta compiuto l’uso. Senza durata né uso determinati, in ogni tempo (art. 310 CO)."
    },
    {
      "q": "Chi paga le spese di manutenzione?",
      "a": "Il comodatario sopporta le spese ordinarie di manutenzione, p. es. il pieno o la pulizia (art. 307 CO)."
    },
    {
      "q": "Il comodatario può prestare la cosa a un amico?",
      "a": "No, non senza la vostra autorizzazione. Se lo fa, risponde anche del caso fortuito (art. 306 CO)."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 305 segg. del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il contratto di comodato online – PDF", "description": "Prestito gratuito di una cosa con restituzione. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

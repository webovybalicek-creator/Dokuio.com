import type { StrankaDokumentu } from '../typy';
import { venditaAuto as sablona } from '../../sablony/ch-it/contratto-di-compravendita-auto';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contratto di compravendita auto",
  nazevA: "il contratto di compravendita auto",
  katalog: {"popis": "Vendita di un’auto d’occasione tra privati.", "kategorie": "auto", "ilustrace": "auto", "slova": ["contratto di compravendita auto", "contratto vendita auto", "vendita auto tra privati", "contratto vendita veicolo usato", "vendere la propria auto", "comprare auto d’occasione", "esclusione della garanzia auto"]},
  protejsky: {"ch": "kaufvertrag-auto"},
  souvisejici: "auto",
  landing: {
  "title": "Contratto compravendita auto {rok} – modello PDF gratis (CH)",
  "description": "Modello gratuito di contratto di compravendita di un’auto d’occasione tra privati secondo il CO: numero di telaio, matricola, chilometri, difetti, garanzia. PDF e Word.",
  "perex": "Per vendere un’auto d’occasione tra privati in Ticino e nel Grigioni italiano. Il contratto fissa il prezzo, lo stato, la garanzia e l’ora esatta della consegna; le targhe restano al venditore.",
  "obsahPopis": "Gli articoli del contratto di compravendita del veicolo.",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Venditore e acquirente con documento d’identità."
    },
    {
      "nazev": "Veicolo",
      "popis": "Marca, numero di telaio, matricola, collaudo."
    },
    {
      "nazev": "Stato",
      "popis": "Chilometri, incidenti e difetti noti."
    },
    {
      "nazev": "Garanzia",
      "popis": "Esclusa tra privati o garanzia legale."
    },
    {
      "nazev": "Prezzo e consegna",
      "popis": "Importo in lettere, contanti o bonifico, ora."
    },
    {
      "nazev": "Targhe e immatricolazione",
      "popis": "Le targhe restano al venditore."
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
    "Controllo del numero di telaio",
    "Il verbale di consegna riprende i dati",
    "Pacchetto completo con procura e quietanza"
  ],
  "hodiSe": [
    "vendete o comprate un’auto d’occasione da un privato",
    "volete fissare per iscritto prezzo, stato e ora della consegna"
  ],
  "nehodiSe": [
    "comprate da un garagista – ha il suo contratto",
    "l’auto è in leasing senza il consenso della società di leasing"
  ],
  "po": [
    {
      "nazev": "Targhe e assicurazione",
      "popis": "Il venditore tiene le targhe, le usa per un altro veicolo o le deposita presso l’Ufficio della circolazione, e informa la sua assicurazione."
    },
    {
      "nazev": "Immatricolazione",
      "popis": "L’acquirente immatricola l’auto a suo nome con il proprio attestato d’assicurazione prima di circolare."
    },
    {
      "nazev": "Verbale",
      "popis": "Annotate ora, chilometri e danni nel verbale di consegna."
    }
  ],
  "faq": [
    {
      "q": "Le targhe seguono l’auto?",
      "a": "No. In Svizzera le targhe appartengono al detentore. Il venditore le tiene; l’acquirente riceve nuove targhe presso l’Ufficio della circolazione del suo Cantone."
    },
    {
      "q": "Si può escludere la garanzia?",
      "a": "Sì, tra privati è usuale. L’esclusione non vale però per i difetti che il venditore ha dissimulato con dolo (art. 199 CO)."
    },
    {
      "q": "Serve un nuovo collaudo?",
      "a": "Dipende dal Cantone e dalla data dell’ultimo collaudo. Informatevi presso l’Ufficio della circolazione prima della vendita."
    },
    {
      "q": "Pagamento in contanti o con bonifico?",
      "a": "Entrambi sono possibili. Per un importo elevato il bonifico prima della consegna delle chiavi è la prova migliore; in contanti fatevi firmare una quietanza."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 184 segg. del Codice delle obbligazioni (CO) e le informazioni di ch.ch sull’immatricolazione.",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il contratto di compravendita auto online – PDF", "description": "Procedura guidata per il contratto di compravendita di un’auto d’occasione tra privati. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { verbaleVeicolo as sablona } from '../../sablony/ch-it/verbale-di-consegna-veicolo';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Verbale di consegna del veicolo",
  nazevA: "il verbale di consegna del veicolo",
  katalog: {"popis": "Chilometri, danni e chiavi alla consegna.", "kategorie": "auto", "ilustrace": "protokol", "slova": ["verbale di consegna veicolo", "verbale consegna auto", "stato del veicolo alla consegna", "consegna auto vendita", "prestito dell’auto"]},
  protejsky: {"ch": "uebergabeprotokoll-fahrzeug"},
  souvisejici: "auto",
  landing: {
  "title": "Verbale di consegna veicolo {rok} – modello PDF gratis",
  "description": "Modello gratuito di verbale di consegna di un veicolo: ora esatta, chilometri, serbatoio, chiavi, documenti e danni. Per una vendita o un prestito. PDF e Word.",
  "perex": "Registra lo stato del veicolo e l’ora esatta della consegna – utile se arriva una multa o succede un incidente subito dopo la vendita o durante un prestito.",
  "obsahPopis": "Un verbale breve.",
  "obsah": [
    {
      "nazev": "Consegna",
      "popis": "Chi, a chi, quando e a che ora."
    },
    {
      "nazev": "Stato",
      "popis": "Chilometri, serbatoio, danni."
    },
    {
      "nazev": "Chiavi e documenti",
      "popis": "Cosa viene consegnato con il veicolo."
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
    "vendete o prestate la vostra auto",
    "riprendete un veicolo prestato"
  ],
  "nehodiSe": [
    "vi serve anche il contratto – prendete il contratto di compravendita"
  ],
  "po": [
    {
      "nazev": "Foto",
      "popis": "Fotografate il veicolo da tutti i lati e il contachilometri."
    },
    {
      "nazev": "Esemplari",
      "popis": "Ogni parte tiene il suo."
    }
  ],
  "faq": [
    {
      "q": "Perché annotare l’ora?",
      "a": "L’ora mostra chi aveva il veicolo al momento di una multa o di un incidente. Senza di essa è difficile provare che l’auto non era più da voi."
    },
    {
      "q": "Il verbale sostituisce il contratto?",
      "a": "No. Completa il contratto di compravendita o di prestito descrivendo lo stato nel momento preciso della consegna."
    },
    {
      "q": "Cosa fare delle targhe in caso di vendita?",
      "a": "Il venditore le smonta e le tiene per un altro veicolo o le deposita presso l’Ufficio della circolazione."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo il Codice delle obbligazioni svizzero (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il verbale di consegna del veicolo – PDF", "description": "Verbale di consegna di un veicolo con l’ora. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { venditaPrivati as sablona } from '../../sablony/ch-it/contratto-di-compravendita-tra-privati';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contratto di compravendita tra privati",
  nazevA: "il contratto di compravendita tra privati",
  katalog: {"popis": "Vendere un oggetto d’occasione tra privati.", "kategorie": "alltag", "ilustrace": "protokol", "slova": ["contratto di compravendita tra privati", "contratto di vendita oggetto", "vendita bici usata", "vendita d’occasione annuncio", "contratto vendita mobili"]},
  protejsky: {"ch": "kaufvertrag-privat"},
  souvisejici: "alltag",
  landing: {
  "title": "Compravendita tra privati {rok} – modello PDF gratis",
  "description": "Modello gratuito di contratto di compravendita di un oggetto d’occasione tra privati: descrizione, difetti noti, prezzo, pagamento, esclusione della garanzia. PDF e Word.",
  "perex": "Per vendere una bici, un apparecchio, un mobile o del materiale d’occasione dopo un annuncio. Il contratto descrive l’oggetto, i difetti noti e il pagamento.",
  "obsahPopis": "Gli articoli del contratto di compravendita.",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Venditore e acquirente."
    },
    {
      "nazev": "Oggetto",
      "popis": "Descrizione, numero di serie, difetti."
    },
    {
      "nazev": "Prezzo e consegna",
      "popis": "Contanti o bonifico."
    },
    {
      "nazev": "Garanzia",
      "popis": "Esclusa o legale."
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
    "vendete un oggetto d’occasione dopo un annuncio",
    "comprate un oggetto di valore da un privato"
  ],
  "nehodiSe": [
    "vendete un’auto o una moto – c’è un modello separato"
  ],
  "po": [
    {
      "nazev": "Esame",
      "popis": "Esaminate l’oggetto insieme prima di firmare."
    },
    {
      "nazev": "Contanti",
      "popis": "In caso di pagamento in contanti redigete una quietanza."
    }
  ],
  "faq": [
    {
      "q": "Posso escludere la garanzia?",
      "a": "Sì, tra privati è usuale. L’esclusione non vale per i difetti dissimulati con dolo (art. 199 CO)."
    },
    {
      "q": "Come evitare le truffe?",
      "a": "Consegnate l’oggetto solo dopo aver ricevuto il denaro, diffidate delle false ricevute di pagamento e dei link di pagamento sconosciuti."
    },
    {
      "q": "L’acquirente deve verificare l’oggetto?",
      "a": "Sì, alla consegna; deve segnalare immediatamente i difetti (art. 201 CO)."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 184 segg. del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il contratto di compravendita tra privati – PDF", "description": "Vendita di un oggetto d’occasione tra privati. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

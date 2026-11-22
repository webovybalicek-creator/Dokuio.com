import type { StrankaDokumentu } from '../typy';
import { risoluzioneLocazione as sablona } from '../../sablony/ch-it/accordo-risoluzione-locazione';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Accordo di risoluzione della locazione",
  nazevA: "l’accordo di risoluzione della locazione",
  katalog: {"popis": "Fine della locazione di comune accordo.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["accordo di risoluzione locazione", "risoluzione consensuale affitto", "fine anticipata della locazione", "lasciare l’appartamento prima del termine", "accordo fine locazione"]},
  protejsky: {"ch": "aufhebungsvereinbarung-mietvertrag"},
  souvisejici: "wohnen",
  landing: {
  "title": "Accordo di risoluzione locazione – modello PDF gratis",
  "description": "Modello gratuito di accordo di risoluzione della locazione di comune accordo: data di fine, riconsegna, deposito di garanzia e accordi. Art. 115 CO, PDF e Word.",
  "perex": "Locatore e conduttore vogliono porre fine alla locazione a una data precisa, senza termini né preavvisi. L’accordo fissa la fine, la riconsegna e la sorte della garanzia.",
  "obsahPopis": "Gli articoli dell’accordo.",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Locatore e conduttore."
    },
    {
      "nazev": "Fine della locazione",
      "popis": "Data di fine e di riconsegna."
    },
    {
      "nazev": "Garanzia",
      "popis": "Restituzione e compensazione."
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
    "Promemoria della fine e della riconsegna",
    "PDF e Word"
  ],
  "hodiSe": [
    "volete partire prima del termine e il locatore è d’accordo",
    "avete trovato un nuovo conduttore con il locatore"
  ],
  "nehodiSe": [
    "il locatore rifiuta – disdite per il prossimo termine"
  ],
  "po": [
    {
      "nazev": "Riconsegna",
      "popis": "Verbale con le letture dei contatori."
    },
    {
      "nazev": "Garanzia",
      "popis": "Tenete d’occhio la data di restituzione della garanzia."
    }
  ],
  "faq": [
    {
      "q": "Basta un accordo orale?",
      "a": "Giuridicamente sì (art. 115 CO), ma lo scritto è l’unica vera prova della data di fine e dell’accordo sulla garanzia."
    },
    {
      "q": "La pigione è dovuta fino alla fine?",
      "a": "Sì, fino alla data di fine pattuita. Le spese accessorie sono conteggiate per il periodo usuale."
    },
    {
      "q": "Chi deve firmare?",
      "a": "Tutti i locatori e tutti i conduttori iscritti nel contratto di locazione."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo l’art. 115 del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare l’accordo di risoluzione della locazione – PDF", "description": "Fine della locazione di comune accordo con garanzia. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

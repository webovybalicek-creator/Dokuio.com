import type { StrankaDokumentu } from '../typy';
import { venditaMoto as sablona } from '../../sablony/ch-it/contratto-di-compravendita-moto';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contratto di compravendita moto",
  nazevA: "il contratto di compravendita moto",
  katalog: {"popis": "Moto, scooter o quad.", "kategorie": "auto", "ilustrace": "motorka", "slova": ["contratto di compravendita moto", "vendita moto tra privati", "contratto vendita scooter", "vendere la propria moto", "comprare moto d’occasione"]},
  protejsky: {"ch": "kaufvertrag-motorrad"},
  souvisejici: "auto",
  landing: {
  "title": "Contratto compravendita moto {rok} – modello PDF gratis (CH)",
  "description": "Modello gratuito di contratto di compravendita di una moto, di uno scooter o di un quad d’occasione: numero di telaio, accessori, modifiche, garanzia. PDF e Word.",
  "perex": "Per una moto, uno scooter o un quad venduto tra privati. Annotate accessori e modifiche – valigie, scarico, paramotore – e verificate che figurino nella licenza di circolazione.",
  "obsahPopis": "Gli articoli del contratto di compravendita della moto.",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Venditore e acquirente."
    },
    {
      "nazev": "Moto",
      "popis": "Marca, numero di telaio sul telaio, matricola."
    },
    {
      "nazev": "Accessori",
      "popis": "Valigie, scarico, modifiche."
    },
    {
      "nazev": "Garanzia",
      "popis": "Esclusione usuale tra privati."
    },
    {
      "nazev": "Prezzo e consegna",
      "popis": "Importo in lettere e ora."
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
    "Consigli per le modifiche"
  ],
  "hodiSe": [
    "vendete o comprate una moto o uno scooter d’occasione da un privato"
  ],
  "nehodiSe": [
    "comprate da un concessionario"
  ],
  "po": [
    {
      "nazev": "Modifiche",
      "popis": "Verificate con l’acquirente che lo scarico o le altre parti soggette ad autorizzazione siano iscritte nella licenza di circolazione."
    },
    {
      "nazev": "Targhe",
      "popis": "Anche le targhe della moto restano al venditore."
    }
  ],
  "faq": [
    {
      "q": "Dove si trova il numero di telaio di una moto?",
      "a": "Di solito è punzonato sul telaio vicino al cannotto dello sterzo; figura anche al campo 23 della licenza di circolazione."
    },
    {
      "q": "Gli accessori fanno parte della vendita?",
      "a": "Solo ciò che è scritto. Indicate valigie, bauletto, telo o secondo treno di pneumatici nel contratto per evitare una controversia."
    },
    {
      "q": "Uno scarico non omologato è un problema?",
      "a": "Sì: senza iscrizione nella licenza di circolazione la moto può essere respinta al collaudo. Indicatelo onestamente come difetto noto."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 184 segg. del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare il contratto di compravendita moto online – PDF", "description": "Contratto di compravendita di una moto o di uno scooter d’occasione. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

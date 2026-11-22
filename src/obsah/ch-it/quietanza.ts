import type { StrankaDokumentu } from '../typy';
import { quietanza as sablona } from '../../sablony/ch-it/quietanza';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Quietanza",
  nazevA: "la quietanza",
  katalog: {"popis": "Conferma del pagamento in contanti.", "kategorie": "geld", "ilustrace": "penize", "slova": ["quietanza", "modello quietanza", "ricevuta di pagamento", "ricevuta contanti", "quietanza acconto", "ricevuta denaro"]},
  protejsky: {"ch": "quittung"},
  souvisejici: "geld",
  landing: {
  "title": "Quietanza {rok} – modello PDF gratis da compilare",
  "description": "Modello gratuito di quietanza: chi ha ricevuto, da chi, quanto (anche in lettere) e per cosa. La prova di un pagamento in contanti secondo l’art. 88 CO. PDF e Word.",
  "perex": "Quando consegnate o ricevete denaro contante – prezzo di vendita, prestito, acconto o garanzia. La quietanza prova il pagamento.",
  "obsahPopis": "Una quietanza breve.",
  "obsah": [
    {
      "nazev": "Quietanza",
      "popis": "Beneficiario, pagatore, importo in lettere e motivo."
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
    "pagate o ricevete denaro contante",
    "versate un acconto"
  ],
  "nehodiSe": [
    "pagate con bonifico – basta l’estratto conto"
  ],
  "po": [
    {
      "nazev": "Conservazione",
      "popis": "Chi ha pagato tiene la quietanza."
    }
  ],
  "faq": [
    {
      "q": "Chi firma la quietanza?",
      "a": "La persona che riceve il denaro. Chi paga può esigerla (art. 88 CO) e la conserva come prova."
    },
    {
      "q": "Bisogna scrivere l’importo in lettere?",
      "a": "È consigliato: cifre e lettere insieme evitano errori e falsificazioni. Aggiungiamo le lettere automaticamente."
    },
    {
      "q": "Una quietanza basta per una grossa somma?",
      "a": "Sì, ma per un importo elevato un bonifico lascia una traccia più sicura dei contanti."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo l’art. 88 del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare la quietanza online – PDF", "description": "Quietanza per un pagamento in contanti. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

import type { StrankaDokumentu } from '../typy';
import { disdetta as sablona } from '../../sablony/ch-it/lettera-di-disdetta';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Lettera di disdetta",
  nazevA: "la lettera di disdetta",
  katalog: {"popis": "Disdire cellulare, assicurazione, fitness o abbonamento.", "kategorie": "alltag", "ilustrace": "protokol", "slova": ["lettera di disdetta", "disdetta assicurazione", "disdetta cassa malati", "disdire abbonamento", "disdetta fitness", "revoca mandato", "disdire contratto svizzera"]},
  protejsky: {"ch": "kuendigung-vertrag"},
  souvisejici: "disdette",
  landing: {
  "title": "Lettera di disdetta {rok} – modello PDF gratis (Svizzera)",
  "description": "Modello gratuito di lettera di disdetta: assicurazione (art. 35a LCA), cassa malati entro il 30 novembre, cellulare, fitness, elettricità, mandato. PDF e Word.",
  "perex": "Per disdire un contratto: assicurazione, cassa malati, cellulare, internet, fitness, abbonamento o mandato. Scegliete la variante – le regole applicabili compaiono nei consigli.",
  "obsahPopis": "Una lettera breve.",
  "obsah": [
    {
      "nazev": "Mittente e destinatario",
      "popis": "Voi e il fornitore."
    },
    {
      "nazev": "Contratto",
      "popis": "Numero e oggetto."
    },
    {
      "nazev": "Variante",
      "popis": "Prossima scadenza, data, LCA, cassa malati, mandato."
    },
    {
      "nazev": "Richieste",
      "popis": "Conferma, conteggio, apparecchi."
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
    "Varianti per assicurazione, cassa malati e mandato",
    "Promemoria della conferma e della fine",
    "PDF e Word"
  ],
  "hodiSe": [
    "disdite un abbonamento, un’assicurazione o un mandato",
    "traslocate e annunciate la partenza"
  ],
  "nehodiSe": [
    "disdite la locazione o il lavoro – ci sono modelli separati"
  ],
  "po": [
    {
      "nazev": "Invio",
      "popis": "Raccomandata o tramite il canale previsto dalle condizioni generali."
    },
    {
      "nazev": "Pagamenti",
      "popis": "Interrompete gli addebiti solo dopo il conteggio finale."
    }
  ],
  "faq": [
    {
      "q": "Quando posso disdire un’assicurazione?",
      "a": "Per la fine del terzo anno o di ciascuno degli anni successivi, con tre mesi di preavviso (art. 35a LCA). Il contratto può prevedere termini più brevi."
    },
    {
      "q": "Qual è il termine per la cassa malati?",
      "a": "Per l’assicurazione di base la vostra lettera deve arrivare entro il 30 novembre. Con la franchigia più bassa nel modello standard è possibile anche per la fine di giugno."
    },
    {
      "q": "Si può porre fine a un mandato in ogni momento?",
      "a": "Sì, un mandato può essere revocato in ogni tempo; in tempo inopportuno bisogna risarcire il danno (art. 404 CO)."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo la LCA, gli art. 377 e 404 CO e le informazioni di ch.ch e dell’ElCom.",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare la lettera di disdetta online – PDF", "description": "Disdetta di un contratto, di un’assicurazione o di un abbonamento. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

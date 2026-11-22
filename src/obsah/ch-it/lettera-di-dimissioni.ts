import type { StrankaDokumentu } from '../typy';
import { dimissioni as sablona } from '../../sablony/ch-it/lettera-di-dimissioni';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Lettera di dimissioni",
  nazevA: "la lettera di dimissioni",
  katalog: {"popis": "Dimettersi come lavoratore o lavoratrice.", "kategorie": "arbeit", "ilustrace": "protokol", "slova": ["lettera di dimissioni", "modello lettera di dimissioni", "dimissioni svizzera", "termine di disdetta lavoro", "dimissioni periodo di prova", "attestato di lavoro"]},
  protejsky: {"ch": "kuendigung-arbeitsvertrag"},
  souvisejici: "disdette",
  landing: {
  "title": "Lettera di dimissioni {rok} – modello PDF gratis (Svizzera)",
  "description": "Modello gratuito di lettera di dimissioni secondo il CO: tempo di prova o disdetta ordinaria, fine mese, attestato di lavoro, vacanze restanti. PDF e Word.",
  "perex": "Lasciate il vostro impiego. La lettera rispetta il termine di disdetta – 7 giorni nel tempo di prova, poi da 1 a 3 mesi per la fine di un mese – e chiede l’attestato di lavoro.",
  "obsahPopis": "Una lettera breve.",
  "obsah": [
    {
      "nazev": "Mittente e datore di lavoro",
      "popis": "I vostri dati e l’azienda."
    },
    {
      "nazev": "Dimissioni",
      "popis": "Tempo di prova, ordinarie o partenza anticipata."
    },
    {
      "nazev": "Richieste",
      "popis": "Conferma, attestato, vacanze."
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
    "Promemoria della fine e dell’attestato",
    "PDF e Word"
  ],
  "hodiSe": [
    "vi dimettete come lavoratore o lavoratrice",
    "volete proporre una partenza anticipata"
  ],
  "nehodiSe": [
    "il datore di lavoro vi licenzia"
  ],
  "po": [
    {
      "nazev": "Consegna",
      "popis": "Di persona con conferma o per raccomandata, qualche giorno prima della fine del mese."
    },
    {
      "nazev": "URC",
      "popis": "Senza un nuovo impiego iscrivetevi presto all’URC."
    }
  ],
  "faq": [
    {
      "q": "Qual è il termine per dimettersi?",
      "a": "Nel tempo di prova 7 giorni. Poi, salvo altro accordo scritto: 1 mese nel 1° anno, 2 mesi dal 2° al 9° anno, 3 mesi dal 10° anno, per la fine di un mese (art. 335c CO)."
    },
    {
      "q": "Devo motivare le dimissioni?",
      "a": "No. Se il datore di lavoro lo chiede dovete però indicare il motivo per iscritto."
    },
    {
      "q": "Posso dimettermi durante una malattia?",
      "a": "Sì. I periodi di protezione proteggono solo da un licenziamento da parte del datore di lavoro."
    },
    {
      "q": "Le dimissioni influiscono sulla disoccupazione?",
      "a": "Senza un nuovo impiego le dimissioni possono comportare una sospensione temporanea delle indennità."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 335 segg. del Codice delle obbligazioni (CO) e le informazioni di ch.ch e della SECO.",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare la lettera di dimissioni online – PDF", "description": "Lettera di dimissioni con termine e attestato di lavoro. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

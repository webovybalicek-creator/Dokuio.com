import type { StrankaDokumentu } from '../typy';
import { pagamentoRateale as sablona } from '../../sablony/ch-it/accordo-pagamento-rateale';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Accordo di pagamento rateale",
  nazevA: "l’accordo di pagamento rateale",
  katalog: {"popis": "Pagare un debito a rate, firmato da entrambi.", "kategorie": "geld", "ilustrace": "dluh", "slova": ["accordo di pagamento rateale", "piano di pagamento", "pagamento a rate", "dilazione di pagamento", "rateizzazione debito", "piano di rimborso debito"]},
  protejsky: {"ch": "abzahlungsvereinbarung"},
  souvisejici: "geld",
  landing: {
  "title": "Accordo di pagamento rateale – modello PDF gratis",
  "description": "Modello gratuito di accordo di pagamento rateale: riconoscimento di debito, rate con piano, interessi facoltativi, clausola di decadenza. Secondo il CO, PDF e Word.",
  "perex": "Un debito esiste già e il debitore vuole pagarlo a rate. L’accordo fissa il piano, il riconoscimento di debito e cosa succede in caso di ritardo.",
  "obsahPopis": "Gli articoli dell’accordo.",
  "obsah": [
    {
      "nazev": "Parti",
      "popis": "Creditore e debitore."
    },
    {
      "nazev": "Debito",
      "popis": "Importo, causa, riconoscimento."
    },
    {
      "nazev": "Rate",
      "popis": "Importo, scadenza, interessi."
    },
    {
      "nazev": "Decadenza",
      "popis": "Quando diventa esigibile tutto il saldo."
    },
    {
      "nazev": "Piano",
      "popis": "Allegato con ogni rata."
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
    "Piano di pagamento calcolato automaticamente",
    "Promemoria mensili nel calendario",
    "Importo in lettere"
  ],
  "hodiSe": [
    "un cliente o un parente vi deve denaro e propone delle rate",
    "siete debitori e volete un piano realistico"
  ],
  "nehodiSe": [
    "il denaro viene prestato solo adesso – prendete il contratto di prestito"
  ],
  "po": [
    {
      "nazev": "Pagamenti",
      "popis": "Rate con bonifico con il riferimento «rata 3/10»."
    },
    {
      "nazev": "Fine",
      "popis": "Dopo l’ultima rata chiedete una conferma dell’estinzione del debito."
    }
  ],
  "faq": [
    {
      "q": "Cosa significa la clausola di decadenza?",
      "a": "In caso di ritardo tutto il saldo diventa immediatamente esigibile. Un termine di tolleranza di 14 giorni evita che un piccolo ritardo faccia scattare tutto."
    },
    {
      "q": "Il creditore può ancora avviare un’esecuzione?",
      "a": "Finché le rate sono pagate vi rinuncia. In caso di mora può avviare un’esecuzione e chiedere il rigetto provvisorio dell’opposizione."
    },
    {
      "q": "Si applica la legge sul credito al consumo?",
      "a": "Non tra privati. Un’impresa che concede una dilazione di pagamento con interessi o spese deve rispettarla; le rate senza interessi né spese ne sono escluse."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 17, 104 e 135 CO, l’art. 82 LEF e l’art. 7 LCCo.",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare l’accordo di pagamento rateale – PDF", "description": "Accordo di rate con piano e clausola di decadenza. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

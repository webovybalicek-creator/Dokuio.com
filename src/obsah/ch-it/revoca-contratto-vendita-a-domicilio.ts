import type { StrankaDokumentu } from '../typy';
import { revoca as sablona } from '../../sablony/ch-it/revoca-contratto-vendita-a-domicilio';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Revoca di un contratto",
  nazevA: "la revoca del contratto",
  katalog: {"popis": "Revocare un acquisto a domicilio o per telefono entro 14 giorni.", "kategorie": "alltag", "ilustrace": "protokol", "slova": ["revoca contratto vendita a domicilio", "diritto di revoca svizzera", "revocare acquisto telefonico", "vendita porta a porta 14 giorni", "annullare contratto telefonico"]},
  protejsky: {"ch": "widerruf-haustuergeschaeft"},
  souvisejici: "disdette",
  landing: {
  "title": "Revoca vendita a domicilio {rok} – modello PDF gratis",
  "description": "Modello gratuito di revoca di un contratto concluso a domicilio, sul lavoro, per strada o per telefono: 14 giorni, da 100 franchi (art. 40a segg. CO). PDF e Word.",
  "perex": "Vi hanno venduto qualcosa alla porta, al telefono o per strada? Potete revocare il contratto entro 14 giorni, senza giustificazione.",
  "obsahPopis": "Una lettera breve.",
  "obsah": [
    {
      "nazev": "Fornitore",
      "popis": "Impresa e indirizzo."
    },
    {
      "nazev": "Contratto",
      "popis": "Merce, data, numero."
    },
    {
      "nazev": "Luogo dell’offerta",
      "popis": "Domicilio, telefono, lavoro, strada."
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
    "PDF e Word"
  ],
  "hodiSe": [
    "avete concluso un contratto a domicilio o per telefono per più di 100 franchi"
  ],
  "nehodiSe": [
    "avete acquistato online – non c’è un diritto legale di revoca",
    "avete chiesto voi la visita del venditore"
  ],
  "po": [
    {
      "nazev": "Restituzione",
      "popis": "Restituite le prestazioni ricevute; il fornitore rimborsa gli importi pagati."
    }
  ],
  "faq": [
    {
      "q": "Qual è il termine?",
      "a": "14 giorni dalla conclusione del contratto e dall’informazione scritta sul diritto di revoca (art. 40e CO). Basta spedire la revoca entro il termine."
    },
    {
      "q": "Il diritto vale per gli acquisti online?",
      "a": "No. In Svizzera non esiste un diritto legale di revoca per gli acquisti online; solo alcuni negozi concedono un diritto di restituzione volontario."
    },
    {
      "q": "Quando è escluso il diritto di revoca?",
      "a": "Se avete chiesto espressamente le trattative, se avete ordinato a una bancarella di mercato o di fiera, o se la prestazione non supera 100 franchi."
    },
    {
      "q": "Salvate i miei dati?",
      "a": "No. Il documento è creato direttamente nel vostro browser; i dati non vengono inviati a un server."
    }
  ],
  "zakony": "Modello redatto secondo gli art. 40a segg. del Codice delle obbligazioni (CO).",
  "souvisejiciPopis": "Altri documenti, anch’essi gratuiti."
},
  vytvorit: {"title": "Compilare la revoca online – PDF", "description": "Revoca di un contratto concluso a domicilio o per telefono. PDF o Word, gratis.", "podnadpis": "Gratis · risultato in PDF e Word · pochi minuti"},
};

export default stranka;

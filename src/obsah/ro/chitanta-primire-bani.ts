import type { StrankaDokumentu } from '../typy';
import { chitantaPrimireBani as sablona } from '../../sablony/ro/chitanta-primire-bani';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Chitanță de primire a banilor",
  nazevA: "chitanța de primire a banilor",
  katalog: {"popis": "Dovadă pentru banii primiți în numerar.", "kategorie": "bani", "ilustrace": "penize", "slova": ["chitanta primire bani", "chitanta persoana fizica", "dovada plata numerar", "arvuna", "chitanta de mana"]},
  souvisejici: "bani",
  landing: {
  "title": "Chitanță de primire a banilor {rok} – model gratuit PDF",
  "description": "Model gratuit de chitanță de primire a banilor între persoane fizice: suma în cifre și în litere, scopul plății, plătitorul și primitorul. PDF și Word.",
  "perex": "Dovadă simplă că banii în numerar au schimbat proprietarul. Suma în litere o completăm noi.",
  "obsahPopis": "O chitanță scurtă, cu scopul plății.",
  "obsah": [
    {
      "nazev": "Chitanța",
      "popis": "Cine a primit, de la cine, cât și pentru ce."
    }
  ],
  "kroky": [
    {
      "nazev": "Completați datele",
      "popis": "Ce nu știți, săriți – rămâne o linie pentru completare de mână."
    },
    {
      "nazev": "Verificați textul",
      "popis": "Fiecare paragraf îl puteți modifica."
    },
    {
      "nazev": "Descărcați și semnați",
      "popis": "PDF sau Word, gratuit."
    }
  ],
  "online": [
    "Suma în litere automat",
    "Semnătură pe ecran",
    "PDF și Word"
  ],
  "hodiSe": [
    "plătiți în numerar o mașină sau un bun",
    "dați o garanție, o arvună sau o rată"
  ],
  "nehodiSe": [
    "plătiți în cont – dovada este extrasul bancar"
  ],
  "po": [
    {
      "nazev": "Exemplare",
      "popis": "Fiecare parte păstrează unul."
    }
  ],
  "faq": [
    {
      "q": "Sunt obligat să dau chitanță?",
      "a": "Cel care plătește are dreptul să ceară chitanță de la cel care primește banii (Codul civil)."
    },
    {
      "q": "Există o limită pentru numerar?",
      "a": "Între persoane fizice, plățile în numerar sunt permise până la 50.000 lei pe tranzacție (Legea nr. 70/2015)."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online chitanța de primire a banilor – PDF gratuit", "description": "Chitanță pentru bani în numerar, cu suma în litere. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;

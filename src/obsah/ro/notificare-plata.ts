import type { StrankaDokumentu } from '../typy';
import { notificarePlata as sablona } from '../../sablony/ro/notificare-plata';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Notificare de plată",
  nazevA: "notificarea de plată",
  katalog: {"popis": "Somarea debitorului să plătească într-un termen.", "kategorie": "bani", "ilustrace": "dluh", "slova": ["notificare de plata", "somatie de plata", "punere in intarziere", "datorie neplatita", "recuperare bani"]},
  souvisejici: "bani",
  landing: {
  "title": "Notificare de plată (somație) {rok} – model gratuit PDF",
  "description": "Model gratuit de notificare de plată și punere în întârziere: suma în litere, temeiul datoriei, termenul și IBAN, înainte de acționarea în instanță. PDF și Word.",
  "perex": "Pentru o datorie scadentă neplătită. Puneți debitorul în întârziere și îi dați un termen înainte de instanță.",
  "obsahPopis": "O notificare scurtă.",
  "obsah": [
    {
      "nazev": "Notificarea",
      "popis": "Datoria, scadența, termenul și consecințele."
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
    "Memento pentru termen",
    "PDF și Word"
  ],
  "hodiSe": [
    "cineva nu v-a plătit o datorie scadentă"
  ],
  "nehodiSe": [
    "vreți ca debitorul să recunoască datoria – folosiți recunoașterea de datorie"
  ],
  "po": [
    {
      "nazev": "Trimitere",
      "popis": "Scrisoare recomandată cu confirmare de primire."
    },
    {
      "nazev": "Instanța",
      "popis": "Dacă nu plătește, puteți cere ordonanță de plată."
    }
  ],
  "faq": [
    {
      "q": "Notificarea întrerupe prescripția?",
      "a": "Doar dacă este urmată de chemarea în judecată în termenul prevăzut de Codul civil. Recunoașterea datoriei de către debitor întrerupe prescripția."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil și pe OG nr. 13/2011 privind dobânda legală penalizatoare.",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online notificarea de plată – PDF gratuit", "description": "Notificare de plată și punere în întârziere. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;

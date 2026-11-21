import type { StrankaDokumentu } from '../typy';
import { recunoastereDatorie as sablona } from '../../sablony/ro/recunoastere-datorie';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Recunoaștere de datorie",
  nazevA: "recunoașterea de datorie",
  katalog: {"popis": "Debitorul recunoaște în scris datoria și termenul.", "kategorie": "bani", "ilustrace": "dluh", "slova": ["recunoastere de datorie", "declaratie datorie", "prescriptie", "datorie persoana fizica", "angajament de plata"]},
  souvisejici: "bani",
  landing: {
  "title": "Recunoaștere de datorie {rok} – model gratuit PDF",
  "description": "Model gratuit de recunoaștere de datorie: suma în litere, temeiul datoriei, termenul de plată și IBAN. Recunoașterea întrerupe prescripția. PDF și Word.",
  "perex": "Debitorul confirmă în scris cât datorează, de ce și până când plătește. Recunoașterea întrerupe prescripția.",
  "obsahPopis": "O declarație scurtă a debitorului.",
  "obsah": [
    {
      "nazev": "Recunoașterea",
      "popis": "Debitorul, creditorul, suma, temeiul și termenul."
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
    "cineva vă datorează bani și vreți o dovadă scrisă",
    "vreți să întrerupeți prescripția"
  ],
  "nehodiSe": [
    "datoria se plătește în rate – folosiți acordul de plată eșalonată"
  ],
  "po": [
    {
      "nazev": "Original",
      "popis": "Originalul îl păstrează creditorul."
    }
  ],
  "faq": [
    {
      "q": "Ce efect are recunoașterea?",
      "a": "Întrerupe prescripția – termenul de 3 ani începe să curgă din nou (art. 2537 și 2517 Cod civil)."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online recunoașterea de datorie – PDF gratuit", "description": "Recunoaștere scrisă a datoriei, cu suma în litere. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;

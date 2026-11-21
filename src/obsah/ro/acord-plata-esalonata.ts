import type { StrankaDokumentu } from '../typy';
import { acordPlataEsalonata as sablona } from '../../sablony/ro/acord-plata-esalonata';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Acord de plată eșalonată",
  nazevA: "acordul de plată eșalonată",
  katalog: {"popis": "Datoria în rate lunare.", "kategorie": "bani", "ilustrace": "dluh", "slova": ["acord plata esalonata", "plata in rate", "esalonare datorie", "grafic de plata", "datorie in rate"]},
  souvisejici: "bani",
  landing: {
  "title": "Acord de plată eșalonată {rok} – model gratuit PDF",
  "description": "Model gratuit de acord de plată eșalonată a datoriei: recunoașterea datoriei, numărul și valoarea ratelor, scadența și întârzierea. PDF și Word.",
  "perex": "Pentru o datorie care se plătește în rate lunare. Debitorul recunoaște datoria, ceea ce întrerupe prescripția.",
  "obsahPopis": "Cinci articole conform Codului civil.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Creditorul și debitorul."
    },
    {
      "nazev": "Recunoașterea",
      "popis": "Suma și temeiul."
    },
    {
      "nazev": "Plata în rate",
      "popis": "Numărul, valoarea, scadența."
    },
    {
      "nazev": "Întârzierea",
      "popis": "Scadența întregului rest."
    },
    {
      "nazev": "Dispoziții finale",
      "popis": "Exemplare."
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
    "Memento pentru rate",
    "PDF și Word"
  ],
  "hodiSe": [
    "debitorul nu poate plăti deodată",
    "vreți un grafic clar de plată"
  ],
  "nehodiSe": [
    "debitorul refuză să plătească – trimiteți o notificare de plată"
  ],
  "po": [
    {
      "nazev": "Rate",
      "popis": "Salvați datele în calendar."
    }
  ],
  "faq": [
    {
      "q": "Acordul întrerupe prescripția?",
      "a": "Da. Prin acord debitorul recunoaște datoria, iar recunoașterea întrerupe prescripția (art. 2537 Cod civil)."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online acordul de plată eșalonată – PDF gratuit", "description": "Datorie în rate lunare, cu recunoașterea datoriei. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
